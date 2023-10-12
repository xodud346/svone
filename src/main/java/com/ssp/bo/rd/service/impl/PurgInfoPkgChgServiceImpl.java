/*------------------------------------------------------------------------------
 * NAME : PurgInfoPkgChgServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.06.02  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.dao.ChmMtlInfoMngDao;
import com.ssp.bo.rd.dao.PurgInfoChgHstMngDao;
import com.ssp.bo.rd.dao.PurgInfoPkgChgDao;
import com.ssp.bo.rd.service.PurgInfoPkgChgService;
import com.ssp.bo.rd.util.StringUtils;
import com.ssp.core.co.dao.CommonDAO;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.rd.service.Pi_1801_MM03240Service;
import com.ssp.core.rd.service.Pi_1804_MM03260Service;
import com.ssp.core.rd.service.Pi_1805_MM03280Service;
import com.ssp.core.util.ObjectUtils;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   PurgInfoPkgChgServiceImpl
 * @@desc   구매정보일괄변경 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.06.02
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.06.02			       최초작성
 */
@Service("purgInfoPkgChgService")
public class PurgInfoPkgChgServiceImpl implements PurgInfoPkgChgService {

    @Resource(name = "purgInfoPkgChgDao")
    private PurgInfoPkgChgDao purgInfoPkgChgDao;

    @Resource(name = "purgInfoChgHstMngDao")
    private PurgInfoChgHstMngDao purgInfoChgHstMngDao;

    @Resource(name = "chmMtlInfoMngDao")
    private ChmMtlInfoMngDao chmMtlInfoMngDao;

	@Resource(name = "pi_1801_MM03240Service")
	private Pi_1801_MM03240Service pi_1801_MM03240Service;
	
	@Resource(name = "pi_1804_MM03260Service")
	private Pi_1804_MM03260Service pi_1804_MM03260Service;
	
	@Resource(name = "pi_1805_MM03280Service")
	private Pi_1805_MM03280Service pi_1805_MM03280Service;

	@Resource(name="commonDAO")
	private CommonDAO commonDAO;


	/**
	 * 구매정보일괄변경 리스트 조회
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectPurgInfoPkgChg(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

		int totalCount = purgInfoPkgChgDao.selectPurgInfoPkgChgCount(searchMap);
		List<Map> records = purgInfoPkgChgDao.selectPurgInfoPkgChg(searchMap);

		result.addDataSet("ds_master", records);
		result.addVariable("totalCount", totalCount);

		return result;
	}


	/**
	 * 제안파일엑셀다운로드 조회(selectPrpsFileExcelDown)
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectPrpsFileExcelDown(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

		List<Map> records = purgInfoPkgChgDao.selectPrpsFileExcelDown(searchMap);

		result.addDataSet("ds_grdExcel", records);

		return result;
	}


	/**
	 * 구매정보 일괄변경 처리
	 *
	 * @param searchMap
	 * @param saveMap - ds_input
	 * @param userInfo
	 * @return
	 * @throws Exception
	 */
	@Override
	@Transactional(propagation = Propagation.REQUIRES_NEW, isolation = Isolation.SERIALIZABLE)
	public NexacroResult saveReqCprtcpConsnStatsDtlsStor(
		Map<String, Object> searchMap
		, List<Map<String, Object>> saveMap
		, Map<String, Object> userInfo
	) throws Exception {
		NexacroResult result = new NexacroResult();
		String piSendYn = "N";
		int totalCount = 0;
		List<Map> records = null;

		try {
			for (Map<String, Object> saveData : saveMap) {
				saveData.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
				saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

				purgInfoPkgChgDao.insertReqCprtcpConsnStatsDtlsStor(saveData);
			}

			if ("52".equals(StringUtil.getString(searchMap.get("GUBUN")))) {
				totalCount = purgInfoPkgChgDao.selectPurgInfoPkgChgCount(searchMap);
				records = purgInfoPkgChgDao.selectPurgInfoPkgChg(searchMap);
			} else {
				List<String> list = new ArrayList<>();

				if (!ObjectUtils.isNull(searchMap.get("ELC_CONT_APPR_STATS_CD"))) {
					list = StringUtils.makeList(searchMap.get("ELC_CONT_APPR_STATS_CD").toString(), ",");
				}

				searchMap.put("ELC_CONT_APPR_STATS_CD_LIST", list);

				totalCount = purgInfoChgHstMngDao.selectPurgInfoChgHstMngCount(searchMap);
				records = purgInfoChgHstMngDao.selectPurgInfoChgHstMng(searchMap);
			}

			result.addDataSet("ds_master", records);
			result.addVariable("totalCount", totalCount);

			piSendYn = "Y";
		} catch (MessageException e) {
			if (e.getCode() == -100) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			} else {
				throw e;
			}
		}

		// start pi 전송
		if ("Y".equals(piSendYn)) {
			try {
				for (Map<String, Object> saveData : saveMap) {
					String elcContApprStatsCd = saveData.get("ELC_CONT_APPR_STATS_CD").toString();
					saveData.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
					saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

					// 일괄반려
					if ("40".equals(elcContApprStatsCd)) {
						// 41 : 반려전자계약요청
						saveData.put("ELC_CONT_APPR_STATS_CD", "41");
						purgInfoPkgChgDao.insertReqCprtcpConsnStatsDtlsStor(saveData);

						Map<String, Object> resultPi = this.pi_1804_MM03260Service.pi_1804_MM03260Request(saveData);

						// PI 전송 결과
						String XSTAT = resultPi.get("XSTAT").toString();
						String XMSGS = resultPi.get("XMSGS").toString();
						String XDATE = resultPi.get("XDATE").toString();
						String XTIME = resultPi.get("XTIME").toString();

						saveData.put("PI_STAT", XSTAT);
						saveData.put("PI_MSG", XMSGS);
						saveData.put("PI_DATE", XDATE);
						saveData.put("PI_TIME", XTIME);

						// 42 : 등록불가, 43 : 반려전자계약요청실패
						if ("S".equals(XSTAT)) {
							saveData.put("ELC_CONT_APPR_STATS_CD", "42");
						} else {
							saveData.put("ELC_CONT_APPR_STATS_CD", "43");
						}

						purgInfoPkgChgDao.insertReqCprtcpConsnStatsDtlsStor(saveData);

					} else if ("50".equals(elcContApprStatsCd)) {
						// 일괄합의

						// 51 : 승인전자계약요청
						saveData.put("ELC_CONT_APPR_STATS_CD", "51");
						purgInfoPkgChgDao.insertReqCprtcpConsnStatsDtlsStor(saveData);

						saveData.put("REQ_TYPE", "ETC");

						Map<String, Object> resultPi = this.pi_1805_MM03280Service.pi_1805_MM03280Request(saveData);

						// PI 전송 결과
						String XSTAT = resultPi.get("XSTAT").toString();
						String XMSGS = resultPi.get("XMSGS").toString();
						String XDATE = resultPi.get("XDATE").toString();
						String XTIME = resultPi.get("XTIME").toString();

						saveData.put("PI_STAT", XSTAT);
						saveData.put("PI_MSG", XMSGS);
						saveData.put("PI_DATE", XDATE);
						saveData.put("PI_TIME", XTIME);

						// 52 : 처리 완료, 53 : 승인전자계약실패
						if ("S".equals(XSTAT)) {
							saveData.put("ELC_CONT_APPR_STATS_CD", "52");
						} else {
							saveData.put("ELC_CONT_APPR_STATS_CD", "53");
						}

						purgInfoPkgChgDao.insertReqCprtcpConsnStatsDtlsStor(saveData);

						if ("S".equals(XSTAT)) {
							Map<String, Object> procMap = new HashMap<>();
							procMap.put("I_CO_CD", saveData.get("CO_CD").toString());
							procMap.put("I_PRD_ID", StringUtil.getString(userInfo.get("PRD_ID")));

							// 화학물질처리 저장
							chmMtlInfoMngDao.updateSpRdChmMtlsProc(procMap);
						}
					}
				}
			} catch (Exception e) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.

				Map<String, Object> responseMap = new HashMap<>(saveMap.get(0));
				responseMap.put("PI_EXCEPTION_CODE", "ERRR000490");

				result.addDataSet("ds_master", responseMap);
			}
		}
		// end pi 전송

		return result;
	}
}