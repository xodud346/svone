/*------------------------------------------------------------------------------
 * NAME : CprtcpEstmReqMngServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.06.16  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.ssp.bo.co.service.CoMailSendService;
import com.ssp.bo.rd.dao.CprtcpEstmReqMngDao;
import com.ssp.bo.rd.dao.NewPrdReqLstDao;
import com.ssp.bo.rd.service.CprtcpEstmReqMngService;
import com.ssp.bo.rd.service.EstmProcMailSendService;
import com.ssp.bo.rd.service.FileUploadDowloadService;
import com.ssp.bo.rd.util.StringUtils;
import com.ssp.core.co.dao.CommonDAO;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.rd.service.Pi_1803_MM03250Service;
import com.ssp.core.rd.service.Pi_1805_MM03280Service;
import com.ssp.core.util.ObjectUtils;
import com.ssp.core.util.StringUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * <pre>
 *
 * @title   CprtcpEstmReqMngServiceImpl
 * @@desc   협력사 견적요청 관리 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.06.16
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.28			       최초작성
 */
@Service("cprtcpEstmReqMngService")
public class CprtcpEstmReqMngServiceImpl implements CprtcpEstmReqMngService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Resource(name="commonDAO")
	private CommonDAO commonDAO;
	@Resource(name = "cprtcpEstmReqMngDao")
	private CprtcpEstmReqMngDao cprtcpEstmReqMngDao;
	@Autowired
	private NewPrdReqLstDao newPrdReqLstDao;

	@Autowired
	private CoMailSendService coMailSendService;
	@Autowired
	private EstmProcMailSendService estmProcMailSendService;
	@Resource(name = "fileUploadDowloadService")
	private FileUploadDowloadService fileUploadDowloadService;
	@Resource(name = "pi_1803_MM03250Service")
	private Pi_1803_MM03250Service pi1803Mm03250Service;
	@Resource(name = "pi_1805_MM03280Service")
	private Pi_1805_MM03280Service pi_1805_MM03280Service;


	/**
	 * 협력사 견적요청 관리 리스트 조회
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectCprtcpEstmReqMng(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		List<String> list = new ArrayList<>();
		List<Map> records = null;

		if (!ObjectUtils.isNull(searchMap.get("ESTM_INFO_STATS_CD"))) {
			list = StringUtils.makeList(searchMap.get("ESTM_INFO_STATS_CD").toString(), ",");
		}

		searchMap.put("ESTM_INFO_STATS_CD_LIST", list);

		int totalCount = cprtcpEstmReqMngDao.selectCprtcpEstmReqMngCount(searchMap);
		if (totalCount > 0) {
			records = cprtcpEstmReqMngDao.selectCprtcpEstmReqMng(searchMap);
		}

		result.addVariable("totalCount", totalCount);
		result.addDataSet("ds_master", records);

		return result;
	}


    /**
     * 견적요청상세정보 조회(selectEstmReqDtlInfoInq)
     *
     * @param searchMap
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectEstmReqDtlInfoInq(Map<String, Object> searchMap) throws Exception {
	    NexacroResult result = new NexacroResult();

	    // 견적요청상세정보 조회
	    List<Map> records1 = cprtcpEstmReqMngDao.selectEstmReqDtlInfoInq(searchMap);
	    // 견적요청회신리스트 조회
	    List<Map> records2 = cprtcpEstmReqMngDao.selectEstmReqRplyListInq(searchMap);
	    // 요청협력사견적상태내역리스트 조회
	    List<Map> records3 = cprtcpEstmReqMngDao.selectReqCprtcpEstmStatsDtlsListInq(searchMap);

	    result.addDataSet("ds_master", records1);
	    result.addDataSet("ds_detail", records2);
	    result.addDataSet("ds_reqProcDtls", records3);

	    return result;
    }


    /**
     * 협력사상품정보 조회(selectCprtcpPrdInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectCprtcpPrdInfoInq(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records = cprtcpEstmReqMngDao.selectCprtcpPrdInfoInq(searchMap);

        result.addDataSet("ds_cprtcpPrdInfo",records);

        return result;
    }

    /**
     * 견적요청화학물질정보 조회(selectEstmReqChmMtlInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectEstmReqChmMtlInfoInq(Map<String, Object> searchMap, Map<String, Object> userInfo) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records1 = null;
        List<Map> records2 = null;
        List<Map> records3 = null;
        List<Map> records4 = null;
        List<Map> records5 = new ArrayList<>();

        // 견적요청화학물질정보 조회
    	records1 = cprtcpEstmReqMngDao.selectEstmReqChmMtlInfoInq(searchMap);

    	// 화학물질정보 리스트 조회
    	records2 = cprtcpEstmReqMngDao.selectChmMtlInfoInq(searchMap);

    	// 화학물질정보추가 리스트 조회
    	records3 = cprtcpEstmReqMngDao.selectChmMtlAddInfoInq(searchMap);

    	if(records1.size() > 0)
    	{
    		// <!-- 2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리 -->
			//// 첨부파일 MSDS파일 존재시
			//if(records1.get(0).get("DOC_ID1") != null && "".equals(records1.get(0).get("DOC_ID1").toString()) == false)
			//{
			//	searchMap.put("PRD_ATTC_FILEID",records1.get(0).get("DOC_ID1").toString());
			//	searchMap.put("ETC_FDS_2",	  "95");
			//
			//	// MSDS첨부파일내역 조회
			//	records4 = cprtcpEstmReqMngDao.selectAttcFileDtlsInq(searchMap);
			//
			//	if(records4 != null && records4.size() > 0)
			//	{
			//		for(int idx=0; idx<records4.size(); idx++)
			//		{
			//			Map<String, Object> dataMap = records4.get(idx);
			//			records5.add(dataMap);
			//		}
			//	}
			//}
			//
			//// 시약요약정보 첨부파일 존재시
			//if(records1.get(0).get("DOC_ID2") != null && "".equals(records1.get(0).get("DOC_ID2").toString()) == false)
			//{
			//	searchMap.put("PRD_ATTC_FILEID",records1.get(0).get("DOC_ID2").toString());
			//	searchMap.put("ETC_FDS_2",	  "S2");
			//
			//	// 시약요약정보 첨부파일내역 조회
			//	records4 = cprtcpEstmReqMngDao.selectAttcFileDtlsInq(searchMap);
			//
			//	if(records4 != null && records4.size() > 0)
			//	{
			//		for(int idx=0; idx<records4.size(); idx++)
			//		{
			//			Map<String, Object> dataMap = records4.get(idx);
			//			records5.add(dataMap);
			//		}
			//	}
			//}
			String[][] aAtfls = {
				{ "DOC_ID1"        , "95" },  // 첨부파일 - MSDS파일 존재 시
				{ "DOC_ID2"        , "S2" },  // 첨부파일 - 시약요약정보 존재 시
				{ "LOC_ATTC_FILEID", "9A" }   // 첨부파일 - 레터파일 존재 시
			};
			for (String[] aAtfl : aAtfls) {
				String sAtflColId=aAtfl[0], sEtcFds2=aAtfl[1], vAtflId=(String) records1.get(0).get(sAtflColId);
				if (vAtflId != null && !"".equals(vAtflId)) {
					searchMap.put("PRD_ATTC_FILEID", vAtflId );
					searchMap.put("ETC_FDS_2"      , sEtcFds2);
					records4 = cprtcpEstmReqMngDao.selectAttcFileDtlsInq(searchMap);
					if (records4 != null && records4.size() > 0) {
						records5.addAll(records4);
					}
				}   // if (vAtflId != null && !"".equals(vAtflId)) {
			}   // for (String[] aAtfl : aAtfls) {
			// <!-- /2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리 -->

		}

        result.addDataSet("ds_master",       records1);		// 화학물질상품정보 리스트 조회
        result.addDataSet("ds_chmMtlList",   records2);		// 화학물질정보 리스트 조회
        result.addDataSet("ds_chmMtlAddList",records3);		// 화학물질정보추가 리스트 조회
        result.addDataSet("ds_saveFileList", records5);		// 첨부파일 리스트 조회

        return result;
    }


	/**
	 * 협력사 견적요청 저장/수정
	 *
	 * @param searchMap
	 * @param saveMap - ds_input
	 * @param delMap
	 * @param masterMap
	 * @param detailMap
	 * @param userInfo
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult saveCprtcpEstmStatsDtlsStor(
		Map<String, Object> searchMap
		, List<Map<String, Object>> saveMap
		, List<Map<String, Object>> delMap
		, List<Map<String, Object>> masterMap
		, List<Map<String, Object>> detailMap
		, Map<String, Object> userInfo
	) throws Exception {
		NexacroResult result = new NexacroResult();
		int CONT_NO = 0;
//		String coGb = null;

		for (Map<String, Object> dataMap : saveMap) {
			// 협력사 ID 존재하고, 요청 협력사 견적 상세등록 테이블에 미존재 시 등록
			if (
				!"*".equals(dataMap.get("CPRTCP_ID").toString())
				&& "N".equals(dataMap.get("EXISTS_YN").toString())
			) {
				if (!"1".equals(dataMap.get("CHK").toString())) {
					dataMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
					dataMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

					// 요청협력사견적상세등록 저장
					cprtcpEstmReqMngDao.insertReqCprtcpEstmDtlReg(dataMap);
				}
			}

			String sCoGb = (String) dataMap.get("CO_GB");

			// 선택된 대상만 PI 송신 AND 구매정보등록 : 30
			if ("1".equals(dataMap.get("CHK").toString()) && "30".equals(sCoGb)) {
				try {
					Map<String, Object> piDataMap = new HashMap<>();
					piDataMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
					piDataMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
					piDataMap.putAll(dataMap);

					// 게약번호, 차수 가져오기
					Map<String, Object> searchMap2 = (Map<String, Object>) commonDAO.select("RdElcCont.selectRdReqCprtcpConsnInfoContNo", piDataMap);
					piDataMap.put("CO_CD", StringUtil.getString(searchMap2.get("CO_CD")));
					piDataMap.put("CONT_NO", StringUtil.getString(searchMap2.get("CONT_NO")));
					piDataMap.put("CONT_CHG_DGRCNT", StringUtil.getString(searchMap2.get("CONT_CHG_DGRCNT")));

					CONT_NO = Integer.parseInt(StringUtil.getString(searchMap2.get("CONT_NO")));

					// 승인전자계약요청 : 51
					piDataMap.put("ELC_CONT_APPR_STATS_CD", "51");
					commonDAO.insert("RdElcCont.insertTbRdReqCprtcpConsnStatsDtls", piDataMap);

					// 전자계약 PI 송신
					piDataMap.put("REQ_TYPE", "SSP_BO_RD_17");

					Map<String, Object> resultPi = this.pi_1805_MM03280Service.pi_1805_MM03280Request(piDataMap);

					// PI 전송 결과
					String XSTAT = resultPi.get("XSTAT").toString();
//					    String XMSGS = resultPi.get("XMSGS").toString();
//					    String XDATE = resultPi.get("XDATE").toString();
//					    String XTIME = resultPi.get("XTIME").toString();
//					    String CNTR_NO = resultPi.get("CNTR_NO").toString();

					piDataMap.put("PI_STAT", XSTAT);
					piDataMap.put("PI_MSG", resultPi.get("XMSGS").toString());
					piDataMap.put("PI_DATE", resultPi.get("XDATE").toString());
					piDataMap.put("PI_TIME", resultPi.get("XTIME").toString());

					// 처리 완료 : 52, 승인전자계약실패 : 53
					if ("S".equals(XSTAT)) {
						piDataMap.put("ELC_CONT_APPR_STATS_CD", "52");
					} else {
						piDataMap.put("ELC_CONT_APPR_STATS_CD", "53");
					}

					commonDAO.insert("RdElcCont.insertTbRdReqCprtcpConsnStatsDtls", piDataMap);

					// MSDS 물질비중, 성상 상품 마스터 등록
					updatePrMroPrdInfoMSDSInfo(userInfo, StringUtil.getString(dataMap.get("CUST_PREQNO")), StringUtil.getString(masterMap.get(0).get("PRD_ID")), CONT_NO);

					if (!"S".equals(XSTAT)) {
						String errorMessage = "CODE :: " + XSTAT + " 시스템 관리자에게 문의 필요";
						throw new MessageException(-200, errorMessage);
					}
				} catch (Exception e) {
					TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();

					Map<String, Object> responseMap = new HashMap<>();
					responseMap.put("PI_EXCEPTION_CODE", "ERRR000490");

					result.addDataSet("ds_master", responseMap);

					return result;
				}
			}

			// 처리완료 : 40
			// sg.park SSP-1572 > SSP-1259 [BO 견적요청 목록][협력사FO 견적요청 목록]처리완료 이후 프로세스 누락 > 견적요청 처리완료시, 협력사의 '요청'(10)상태인 정보를 '종결'(50)으로 업데이트 함.
			if (
				("1".equals(dataMap.get("CHK").toString()) && !"40".equals(sCoGb))
				|| "40".equals(sCoGb)
			) {
				if (!masterMap.isEmpty()) {
					Map<String, Object> dsMasterMap = masterMap.get(0);

					// SSP-2618 | 상품 가격정보가 존재하는 경우 통과
					if ("40".equals(sCoGb) && !"Y".equals(dsMasterMap.get("PRD_PRC_STPRC_YN"))) {
						// 견적요청 상태가 구매정보 등록 상태인지 확인
						boolean isCprtcpEstmStatsDtls = cprtcpEstmReqMngDao.isCprtcpEstmStatsDtls(dataMap);

						if (!isCprtcpEstmStatsDtls) {
							throw new MessageException(-200, "구매정보 등록 완료가 필요 합니다.");
						}
					}
				}

				Map<String, Object> procMap = new HashMap<>();
				procMap.put("O_RTN_CD", "");
				procMap.put("O_RTN_MSG", "");
				procMap.put("I_CO_CD", dataMap.get("CO_CD").toString());
				procMap.put("I_CUST_PREQNO", dataMap.get("CUST_PREQNO").toString());
				procMap.put("I_CPRTCP_ID", dataMap.get("CPRTCP_ID").toString());
				procMap.put("I_UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
				procMap.put("I_GB", dataMap.get("CO_GB").toString());

				// 협력사견적상태내역 저장
				cprtcpEstmReqMngDao.updateCprtcpEstmStatsDtlsStor(procMap);

				String procedureRtnCd = StringUtil.getString(procMap.get("O_RTN_CD"));
				if ("S".equals(procedureRtnCd)) {
					if ("40".equals(sCoGb)) {
						Map<String, Object> map1 = masterMap.get(0);
						// SSP-2623 : 구매정보존재하나 미진열인 상품은 메일미발송
						map1.put("RND_REQ_PRD_ID", StringUtil.getString(map1.get("PRD_ID")));

						int cnt = newPrdReqLstDao.validatePurgInfo(map1);
						if (cnt > 0) {
							// SSP-1457 : 신규상품등록완료시(공용) 고객에게 메일발송(견적정보상태코드가 처리완료(40)되는 시점)
							String newPrdReqNo = StringUtil.getString(dataMap.get("CUST_PREQNO"));
							String str = newPrdReqNo.substring(0, 2);

							// 공용상품, 고객요청 처리완료 시 EMAIL 발송
							if ("P".equals(map1.get("PUB_ONLY_SPR_CD")) && (!"RR".equals(str) && !"RA".equals(str) && !"RE".equals(str))) {
								Map<String, Object> emailData = new HashMap<>();
								emailData.put("coCd", dataMap.get("CO_CD").toString());
								emailData.put("langCd", StringUtil.getString(searchMap.get("LANG_CD")));
								emailData.put("usrId", StringUtil.getString(userInfo.get("EMP_NO")));
								emailData.put("prdId", StringUtil.getString(map1.get("PRD_ID")));
								emailData.put("newPrdReqNo", newPrdReqNo);

							coMailSendService.newProductCompleteMailSend(emailData);
						}
					}
						// 임시계약건 조회 후 삭제 처리
						deleteContractPI(dataMap.get("CUST_PREQNO").toString(), userInfo.get("EMP_NO").toString(), dataMap.get("CO_CD").toString());
					}
				} else if ("E".equals(procedureRtnCd)) {
					// 프로시저에서 에러로 나올 경우
					throw new MessageException(-200, procMap.get("O_RTN_MSG").toString());
				}
			}
		}

		try {
			// 협력사견적요청서 삭제 대상건
			for (Map<String, Object> dataMap : delMap) {
				// 요청협력사견적상세등록 저장
				cprtcpEstmReqMngDao.deleteReqCprtcpEstmDtlDel(dataMap);
			}

			// 협력사 견적요청관리에서 호출 시
			if ("Y".equals(searchMap.get("MAIN_GUBUN").toString())) {
				List<String> list = new ArrayList<>();

				if (!ObjectUtils.isNull(searchMap.get("ESTM_INFO_STATS_CD"))) {
					list = StringUtils.makeList(searchMap.get("ESTM_INFO_STATS_CD").toString(), ",");
				}

				searchMap.put("ESTM_INFO_STATS_CD_LIST", list);

				int totalCount = cprtcpEstmReqMngDao.selectCprtcpEstmReqMngCount(searchMap);
				List<Map> records = cprtcpEstmReqMngDao.selectCprtcpEstmReqMng(searchMap);

				result.addDataSet("ds_master", records);
				result.addVariable("totalCount", totalCount);
			} else {
				// 견적요청상세정보 조회
				List<Map> records1 = cprtcpEstmReqMngDao.selectEstmReqDtlInfoInq(searchMap);

				// 견적요청회신리스트 조회
				List<Map> records2 = cprtcpEstmReqMngDao.selectEstmReqRplyListInq(searchMap);

				// 요청협력사견적상태내역리스트 조회
				List<Map> records3 = cprtcpEstmReqMngDao.selectReqCprtcpEstmStatsDtlsListInq(searchMap);

				result.addDataSet("ds_master", records1);
				result.addDataSet("ds_detail", records2);
				result.addDataSet("ds_reqProcDtls", records3);
			}

			// 정상 처리 된 경우 PI1805 송신
			/*for (int idx = 0; idx < saveMap.size(); idx++) {
				Map<String, Object> saveData = saveMap.get(idx);
				saveData.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
				saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
				coGb = StringUtil.getString(saveData.get("CO_GB"));

				// 선택된 대상만 PI 송신
				if ("1".equals(saveData.get("CHK").toString())) {
					// 구매정보등록 : 30
					if ("30".equals(coGb)) {
						// 게약번호, 차수 가져오기
						Map<String, Object> searchMap2 = (Map<String, Object>) commonDAO.select("RdElcCont.selectRdReqCprtcpConsnInfoContNo", saveData);
						saveData.put("CO_CD", StringUtil.getString(searchMap2.get("CO_CD")));
						saveData.put("CONT_NO", StringUtil.getString(searchMap2.get("CONT_NO")));
						saveData.put("CONT_CHG_DGRCNT", StringUtil.getString(searchMap2.get("CONT_CHG_DGRCNT")));

						// 승인전자계약요청 : 51
						saveData.put("ELC_CONT_APPR_STATS_CD", "51");
						commonDAO.insert("RdElcCont.insertTbRdReqCprtcpConsnStatsDtls", saveData);

						// 전자계약 PI 송신
						saveData.put("REQ_TYPE", "SSP_BO_RD_17");
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

						// 처리 완료 : 52, 승인전자계약실패 : 53
						if ("S".equals(XSTAT)) {
							saveData.put("ELC_CONT_APPR_STATS_CD", "52");
						} else {
							saveData.put("ELC_CONT_APPR_STATS_CD", "53");
						}

						commonDAO.insert("RdElcCont.insertTbRdReqCprtcpConsnStatsDtls", saveData);

						if ("E".equals(XSTAT) || "W".equals(XSTAT)) {
							throw new MessageException(-200, XMSGS);
						}
					}
				}
			}*/
		} catch (MessageException e) {
			if (e.getCode() == -200) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());

				return result;
			} else {
				throw e;
			}
		}

		return result;
	}

	/**
	 * RnD전시상품 협력사견적상태내역 저장/수정
	 *
	 * @param searchMap
	 * @param saveMap
	 * @param delMap
	 * @param masterMap
	 * @param detailMap
	 * @param userInfo
	 * @param optionMap
	 * @param addOptionMap
	 * @return
	 * @throws Exception
	 */
	public NexacroResult saveCprtcpDispEstmStatsDtlsStor(
			Map<String, Object> searchMap
			, List<Map<String, Object>> saveMap
			, List<Map<String, Object>> delMap
			, Map<String, Object> masterMap
			, List<Map<String, Object>> detailMap
			, Map<String, Object> userInfo
			, List<Map<String, Object>> optionMap
			, List<Map<String, Object>> addOptionMap
	) throws Exception {
		NexacroResult result = new NexacroResult();
		int CONT_NO = 0;

		try {
			for (Map<String, Object> dataMap : saveMap) {
				// 협력사ID가 존재하고, 요청협력사견적 상세등록 테이블에 미존재 시 등록
				if (!"*".equals(dataMap.get("CPRTCP_ID").toString()) && "N".equals(dataMap.get("EXISTS_YN").toString())) {
					if (!"1".equals(dataMap.get("CHK").toString())) {
						dataMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
						dataMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

						// 요청협력사견적상세등록 저장
						cprtcpEstmReqMngDao.insertReqCprtcpDispEstmDtlReg(dataMap);
					}
				}

				String sCoGb = (String) dataMap.get("CO_GB");
				// 선택된 대상만 PI 송신 AND 구매정보등록 : 30
				if ("1".equals(dataMap.get("CHK").toString()) && "30".equals(sCoGb)) {
					Map<String, Object> piDataMap = new HashMap<>();
					piDataMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
					piDataMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
					piDataMap.putAll(dataMap);

					// 게약번호, 차수 가져오기
					Map<String, Object> searchMap2 =
							(Map<String, Object>) commonDAO.select("RdElcCont.selectRdReqCprtcpDispConsnInfoContNo", piDataMap);
					piDataMap.put("CO_CD", StringUtil.getString(searchMap2.get("CO_CD")));
					piDataMap.put("CONT_NO", StringUtil.getString(searchMap2.get("CONT_NO")));
					piDataMap.put("CONT_CHG_DGRCNT", StringUtil.getString(searchMap2.get("CONT_CHG_DGRCNT")));
					CONT_NO = Integer.parseInt(StringUtil.getString(searchMap2.get("CONT_NO")));

					// 승인전자계약요청 : 51
					piDataMap.put("ELC_CONT_APPR_STATS_CD", "51");
					commonDAO.insert("RdElcCont.insertTbRdReqCprtcpConsnStatsDtls", piDataMap);

					// 전자계약 PI 송신
					piDataMap.put("REQ_TYPE", "SSP_BO_RD_17");
					Map<String, Object> resultPi = this.pi_1805_MM03280Service.pi_1805_MM03280Request(piDataMap);

					// PI 전송 결과
					String XSTAT = resultPi.get("XSTAT").toString();
					String XMSGS = resultPi.get("XMSGS").toString();
					String XDATE = resultPi.get("XDATE").toString();
					String XTIME = resultPi.get("XTIME").toString();

					piDataMap.put("PI_STAT", XSTAT);
					piDataMap.put("PI_MSG", XMSGS);
					piDataMap.put("PI_DATE", XDATE);
					piDataMap.put("PI_TIME", XTIME);

					// 처리 완료 : 52, 승인전자계약실패 : 53
					if ("S".equals(XSTAT)) {
						piDataMap.put("ELC_CONT_APPR_STATS_CD", "52");
					} else {
						piDataMap.put("ELC_CONT_APPR_STATS_CD", "53");
					}

					commonDAO.insert("RdElcCont.insertTbRdReqCprtcpConsnStatsDtls", piDataMap);

					// MSDS 물질비중, 성상 상품 마스터 등록
					updatePrMroPrdInfoMSDSInfo(userInfo, StringUtil.getString(dataMap.get("ESTM_REQ_NO")), StringUtil.getString(masterMap.get("PRD_ID")), CONT_NO);

					if (!"S".equals(XSTAT)) {
						String errorMessage = "CODE :: " + XSTAT + " 시스템 관리자에게 문의 필요";
						throw new MessageException(-200, errorMessage);
					}
				}

				// 선택된 대상만 프로시저 호출
				// sg.park SSP-1572 > SSP-1259 [BO 견적요청 목록][협력사FO 견적요청 목록]처리완료 이후 프로세스 누락 > 견적요청 처리완료시, 협력사의 '요청'(10)상태인 정보를 '종결'(50)으로 업데이트 함.
				if ("1".equals(dataMap.get("CHK").toString()) || "40".equals(sCoGb)) {
					if (!masterMap.isEmpty()) {
						Map<String, Object> dsMasterMap = masterMap;

						// SSP-2618 | 상품 가격정보가 존재하는 경우 통과
						if ("40".equals(sCoGb) && !"Y".equals(dsMasterMap.get("PRD_PRC_STPRC_YN"))) {
							// 견적요청 상태가 구매정보 등록 상태인지 확인
							if (!cprtcpEstmReqMngDao.isCprtcpEstmStatsDtls(dataMap)) {
								throw new MessageException(-200, "구매정보 등록 완료가 필요 합니다.");
							}
						}
					}

					Map<String, Object> procMap = new HashMap<>();
					procMap.put("O_RTN_CD", "");
					procMap.put("O_RTN_MSG", "");
					procMap.put("I_CO_CD", dataMap.get("CO_CD").toString());
					procMap.put("I_ESTM_REQ_NO", dataMap.get("ESTM_REQ_NO").toString());
					procMap.put("I_CPRTCP_ID", dataMap.get("CPRTCP_ID").toString());
					procMap.put("I_UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
					procMap.put("I_GB", dataMap.get("CO_GB").toString());

					// 협력사견적상태내역 저장 (프로시저 호출 ::: SP_RD_REQ_CPRTCP_DISP_ESTM_INFO)
					cprtcpEstmReqMngDao.updateCprtcpDispEstmStatsDtlsStor(procMap);

					String procedureRtnCd = StringUtil.getString(procMap.get("O_RTN_CD"));
					if ("S".equals(procedureRtnCd)) {
						if ("40".equals(sCoGb)) {
							Map<String, Object> map1 = masterMap;
							// SSP-2623 : 구매정보존재하나 미진열인 상품은 메일미발송
							map1.put("RND_REQ_PRD_ID", StringUtil.getString(map1.get("NEW_PRD_ID")));

							int cnt = newPrdReqLstDao.validatePurgInfo(map1);
							if (cnt > 0) {
								// SSP-1457 : 신규상품등록완료시(공용) 고객에게 메일발송(견적정보상태코드가 처리완료(40)되는 시점)
								// 공용상품, 고객요청 처리완료 시 EMAIL 발송
								estmProcMailSendService.estmProcCompleteSendMail(masterMap);
							}
							// 임시계약건 조회 후 삭제 처리
							deleteContractPI(dataMap.get("ESTM_REQ_NO").toString(), userInfo.get("EMP_NO").toString(), dataMap.get("CO_CD").toString());
						}

						Map<String, Object> statMap = new HashMap<>();
						statMap.put("CO_CD", dataMap.get("CO_CD").toString());
						statMap.put("ESTM_REQ_NO", dataMap.get("ESTM_REQ_NO").toString());
						statMap.put("MALL_SPR_CD", "20");
						statMap.put("OPRTR_ID", userInfo.get("EMP_NO").toString());
						statMap.put("PRD_CLCD", masterMap.get("PRD_CLCD").toString());
						statMap.put("DISP_GRP_ID", masterMap.get("DISP_GRP_ID").toString());

						if (sCoGb.equals("10") || sCoGb.equals("30") || sCoGb.equals("40")) {
							// 견적요청이면 견적요청일자 갱신
							switch (sCoGb) {
								case "10":
									String stats = commonDAO.selectStr("DispPrdMngEstmReqLst.selectLastRndDispReqEstmStats", statMap);
									if (!stats.equals("30")) {
										statMap.put("ESTM_REQ_PROC_STATS_CD", "30");	// 견적요청
										commonDAO.update("DispPrdMngEstmReqLst.updateDispEstimateReqDt", statMap);
										commonDAO.insert("DispPrdMngEstmReqLst.insertProductEstimateStatus", statMap);
									}

									// 요청메일에 필요한 데이터 조회
									List<Map<String, Object>> reqList = cprtcpEstmReqMngDao.selectCprtcpDispEstmReqLst(dataMap);
									// 견적요청 시 해당 협력사에 요청메일 발송
									estmProcMailSendService.estmProcRequestSendMail(reqList);
									break;
								case "30":
									statMap.put("ESTM_REQ_PROC_STATS_CD", "50");    // 상품등록요청
									commonDAO.insert("DispPrdMngEstmReqLst.insertProductEstimateStatus", statMap);
									break;
								default:
									statMap.put("ESTM_REQ_PROC_STATS_CD", "60");    // 상품등록완료
									commonDAO.insert("DispPrdMngEstmReqLst.insertProductEstimateStatus", statMap);
									break;
							}
						}
					} else if ("E".equals(procedureRtnCd)) {
						// 프로시저에서 에러로 나올 경우
						throw new MessageException(-200, procMap.get("O_RTN_MSG").toString());
					}
				}
			}

			// 협력사견적요청서 삭제 대상건
			for (Map<String, Object> dataMap : delMap) {
				// 요청협력사견적상세등록 저장
				cprtcpEstmReqMngDao.deleteReqCprtcpDispEstmDtlDel(dataMap);
			}

			// 협력사 견적요청관리에서 호출 시
			if ("Y".equals(searchMap.get("MAIN_GUBUN").toString())) {
				List<String> list = new ArrayList<>();

				if (!ObjectUtils.isNull(searchMap.get("ESTM_INFO_STATS_CD"))) {
					list = StringUtils.makeList(searchMap.get("ESTM_INFO_STATS_CD").toString(), ",");
				}

				searchMap.put("ESTM_INFO_STATS_CD_LIST", list);

				int totalCount = cprtcpEstmReqMngDao.selectCprtcpEstmReqMngCount(searchMap);
				List<Map> records = cprtcpEstmReqMngDao.selectCprtcpEstmReqMng(searchMap);

				result.addDataSet("ds_master", records);
				result.addVariable("totalCount", totalCount);
			} else {
				// 견적요청상세정보 조회
				result.addDataSet("ds_detail", commonDAO.select("DispPrdMngEstmReqLst.selectNewProductDetail", searchMap));
				// 견적요청회신리스트 조회
				result.addDataSet("ds_supplier", cprtcpEstmReqMngDao.selectRndDispEstmReqRplyListInq(searchMap));
				// 요청협력사견적상태내역리스트 조회
				result.addDataSet("ds_reqProcDtls", cprtcpEstmReqMngDao.selectRndDispReqCprtcpEstmStatsDtls(searchMap));
			}
		} catch (MessageException e) {
			if (e.getCode() == -200) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());

				return result;
			} else {
				throw e;
			}
		}

		return result;
	}



	/**
	 * 견적불가처리 저장
	 *
	 * @param saveMap
	 * @param userInfo
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult saveEstmDisProcStor(
		Map<String, Object> saveMap
		, Map<String, Object> userInfo
	) throws Exception {
		NexacroResult result = new NexacroResult();

		saveMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
		saveMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

		try {
			// 견적불가처리 저장
			cprtcpEstmReqMngDao.updateEstmDisProcStor(saveMap);

			Map<String, Object> procMap = new HashMap<>();
			procMap.put("O_RTN_CD", "");
			procMap.put("O_RTN_MSG", "");
			procMap.put("I_CO_CD", saveMap.get("CO_CD").toString());
			procMap.put("I_CUST_PREQNO", saveMap.get("CUST_PREQNO").toString());
			procMap.put("I_CPRTCP_ID", saveMap.get("CPRTCP_ID").toString());
			procMap.put("I_UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
			procMap.put("I_GB", saveMap.get("CO_GB").toString());

			// 협력사견적상태내역 저장
			cprtcpEstmReqMngDao.updateCprtcpEstmStatsDtlsStor(procMap);

			if ("S".equals(procMap.get("O_RTN_CD"))) {
				String custPreqno = StringUtil.getString(saveMap.get("CUST_PREQNO"));
				if (
					!"RA".equals(custPreqno.substring(0,2))
					&& !"RR".equals(custPreqno.substring(0,2))
					&& !"RE".equals(custPreqno.substring(0,2))
				) {
					// 신규상품등록 요청 건 등록불가 사유 저장 및 이력 적재
					cprtcpEstmReqMngDao.updateNewPrdReqProc(saveMap);


					// 신규상품 등록요청(고객) 견적불가처리 시 메일발송
					Map<String, Object> dataMap = new HashMap<>();
					dataMap.put("CO_CD", saveMap.get("CO_CD").toString());
					dataMap.put("NEW_PRD_REQ_NO", StringUtil.getString(saveMap.get("CUST_PREQNO")));

					coMailSendService.newProductRejectedMailSend(dataMap);
				}
			} else {
				throw new MessageException(-200, procMap.get("O_RTN_MSG").toString());
			}
		} catch (MessageException e) {
			if (e.getCode() == -200) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());

				return result;
			} else {
				throw e;
			}
		}

		return result;
	}

	/**
	 * 전시견적불가처리 저장
	 *
	 * @param saveMap
	 * @param userInfo
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult saveDispEstmDisProcStor(
		Map<String, Object> saveMap
		, Map<String, Object> userInfo
	) throws Exception {
		NexacroResult result = new NexacroResult();

		saveMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
		saveMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

		try {
			// 견적불가처리 저장
			cprtcpEstmReqMngDao.updateDispEstmDisProcStor(saveMap);

			Map<String, Object> procMap = new HashMap<>();
			procMap.put("O_RTN_CD", "");
			procMap.put("O_RTN_MSG", "");
			procMap.put("I_CO_CD", saveMap.get("CO_CD").toString());
			procMap.put("I_ESTM_REQ_NO", saveMap.get("ESTM_REQ_NO").toString());
			procMap.put("I_CPRTCP_ID", saveMap.get("CPRTCP_ID").toString());
			procMap.put("I_UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
			procMap.put("I_GB", saveMap.get("CO_GB").toString());

			// 협력사견적상태내역 저장
			cprtcpEstmReqMngDao.updateCprtcpDispEstmStatsDtlsStor(procMap);

			if ("S".equals(procMap.get("O_RTN_CD"))) {
				saveMap.put("CUST_PREQNO", saveMap.get("ESTM_REQ_NO").toString());
				// 신규상품등록 요청 건 등록불가 사유 저장 및 이력 적재
				cprtcpEstmReqMngDao.updateNewPrdReqProc(saveMap);

				// 메일 발송에 필요한 파라미터 조회
				Map<String, Object> paramMap = commonDAO.select("DispPrdMngEstmReqLst.selectDispEstmRejectInfo", saveMap);
				// 신규상품 등록요청(고객) 견적불가처리 시 메일발송
				estmProcMailSendService.estmProcRejectSendMail(paramMap);
			} else {
				throw new MessageException(-200, procMap.get("O_RTN_MSG").toString());
			}
		} catch (MessageException e) {
			if (e.getCode() == -200) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());

				return result;
			} else {
				throw e;
			}
		}

		return result;
	}


    /**
     * 화학물질정보확인 저장(saveChmMtlInfoCnf)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult saveChmMtlInfoCnf(Map<String, Object> searchMap
    		                              , Map<String, Object> mainMap
    		                              , List<Map<String, Object>> saveMap
    		                              , List<Map<String, Object>> saveFileMap
    		                              , Map<String, Object> userInfo
    		                              , String contextRealPath) throws Exception {

	    NexacroResult result = new NexacroResult();

	    int rowType;

	    List<Map> records1 = null;
	    List<Map> records2 = null;

	    try
	    {
			if(saveMap.size() > 0)
	        {
	             for (int i=0; i < saveMap.size() ; i++)
	             {
	                  Map<String,Object> dataMap = saveMap.get(i);

	                  rowType = Integer.parseInt(String.valueOf(dataMap.get(DataSetRowTypeAccessor.NAME)));

	                  dataMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
	                  dataMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

	                  dataMap.put("CONT_NO",         StringUtil.getString(mainMap.get("CONT_NO")));
	                  dataMap.put("CONT_CHG_DGRCNT", StringUtil.getString(mainMap.get("CONT_CHG_DGRCNT")));

	                  if(rowType == DataSet.ROW_TYPE_INSERTED || rowType == DataSet.ROW_TYPE_UPDATED)
	                  {
	                	  // 화학물질정보 삭제
	                	  cprtcpEstmReqMngDao.deleteReqCprtcpConsnMtlInfoDel(dataMap);

	                	  // 화학물질정보확인 저장
	                	  cprtcpEstmReqMngDao.insertReqCprtcpConsnMtlInfoStor(dataMap);
	                  }
	                  else if(rowType == DataSet.ROW_TYPE_DELETED)
	                  {
	                	  // 화학물질정보 삭제
	                	  cprtcpEstmReqMngDao.deleteReqCprtcpConsnMtlInfoDel(dataMap);
	                  }
	             }
	        }

	        if(saveFileMap.size() > 0)
	        {
	        	// 이미지&첨부파일 삭제&수정 함수 호출
	        	fileUploadDowloadService.saveMultiFileDelUpdate(saveFileMap, contextRealPath);
	        }

	        if(mainMap.size() > 0)
	        {
	        	mainMap.put("UPDPSN_ID",StringUtil.getString(userInfo.get("EMP_NO")));

	        	// MRO상품정보 수정
	        	cprtcpEstmReqMngDao.updateReqCprtcpConsnDtlUpd(mainMap);
	        }

	    	// 화학물질정보 리스트 조회
	    	records1 = cprtcpEstmReqMngDao.selectChmMtlInfoInq(searchMap);

	    	// 화학물질정보추가 리스트 조회
	    	records2 = cprtcpEstmReqMngDao.selectChmMtlAddInfoInq(searchMap);

	        result.addDataSet("ds_chmMtlList",   records1);		// 화학물질정보 리스트 조회
	        result.addDataSet("ds_chmMtlAddList",records2);		// 화학물질정보추가 리스트 조회
	    }
	    catch(MessageException e)
	    {
	        if(e.getCode() == -100)
	        {
	            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
	            result.setErrorCode(e.getCode());
	            result.setErrorMsg(e.getMessage());
	            return result;
	        }
	        else
	        {
	            throw e;
	        }
	    }

        return result;
    }


	@Override
	public int deleteContractPI(String custPreqno, String empNo, String coCd) throws Exception {
		logger.info("@@@ 견적요청 처리완료 시 임시계약 삭제 대상 조회중 :: {}", custPreqno);

		Map<String, Object> pi1803Map = new HashMap<>();
		int resultCnt = 0;

		List<Map> delPiContractNoList = cprtcpEstmReqMngDao.selectDelPiContractNoList(custPreqno);
		int listSize = delPiContractNoList.size();

		// 삭제 PI 전송
		if (listSize > 0) {
			pi1803Map.put("WORKER_ID", empNo);
			pi1803Map.put("CO_CD", coCd);

			for (int i = 0; i < listSize; i++) {
				pi1803Map.put("CONT_NO", delPiContractNoList.get(i).get("CONT_NO"));
				pi1803Map.put("CONT_CHG_DGRCNT", delPiContractNoList.get(i).get("CONT_CHG_DGRCNT"));

				Map<String, Object> piResponse = this.pi1803Mm03250Service.pi_1803_MM03250Request(pi1803Map);

				// pi 전송 결과
				if ("S".equals( piResponse.get("XSTAT").toString())) {
					// 계약 상태 변경
					resultCnt = cprtcpEstmReqMngDao.insertCprtcpConsnStatsDtls(pi1803Map);
				}
			}
		}

		logger.info("@@@ 견적요청 처리완료 시 임시 계약 삭제 존재 :: {} | {} 건", custPreqno, resultCnt);

		return resultCnt;
	}

	@Override
	public int updatePrMroPrdInfoMSDSInfo(Map<String, Object> userInfo, String custPreqNo, String prdId, int contNo) throws Exception {
		int updateCnt = 0;
		Map<String, Object> paramMap = new HashMap<>();
		paramMap.put("CO_CD", userInfo.get("CO_CD"));
		paramMap.put("CUST_PREQNO", custPreqNo);
		paramMap.put("PRD_ID", prdId);
		paramMap.put("CONT_NO", contNo);

		List<Map> cprtcpPrdMSDSInfoList = cprtcpEstmReqMngDao.selectCprtcpPrdMSDSInfoList(paramMap);
		int listSize = cprtcpPrdMSDSInfoList.size();

		if (listSize > 0) {
			for (Map<String, Object> itemMap : cprtcpPrdMSDSInfoList) {
				itemMap.put("UPDPSN_ID", userInfo.get("EMP_NO"));

				updateCnt = cprtcpEstmReqMngDao.updatePrMroPrdInfoMSDSInfo(itemMap);
			}
		}

		return updateCnt;
	}

	@Override
	public List<Map<String, Object>> selectRndDispEstmReqRplyListInq(Map<String, Object> map) throws Exception {
		return cprtcpEstmReqMngDao.selectRndDispEstmReqRplyListInq(map);
	}

	@Override
	public List<Map<String, Object>> selectRndDispReqCprtcpEstmStatsDtls(Map<String, Object> map) throws Exception {
		map.put("LANG_CD", "KO");
		return cprtcpEstmReqMngDao.selectRndDispReqCprtcpEstmStatsDtls(map);
	}
}