/*------------------------------------------------------------------------------
 * NAME : NewPrdMltReqLstServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2023.07.04  김완수
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import com.ssp.bo.co.service.CoMailSendService;
import com.ssp.bo.pc.dao.PcNewPrdReqPrcDao;
import com.ssp.bo.pr.dao.PrRegistProductDao;

import com.ssp.core.rd.service.RdProductStatusService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.dao.NewPrdMltReqLstDao;
import com.ssp.bo.rd.dao.NewPrdReqLstDao;
import com.ssp.bo.rd.service.FileUploadDowloadService;
import com.ssp.bo.rd.service.NewPrdMltReqLstService;
import com.ssp.bo.rd.util.StringUtils;
import com.ssp.core.co.dao.CommonDAO;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.rd.service.Pi_1804_MM03260Service;
import com.ssp.core.rd.service.Pi_1805_MM03280Service;
import com.ssp.core.util.ObjectUtils;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title NewPrdMltReqLstServiceImpl
 * @@desc 신규상품일괄요청처리 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * 
 *          <pre>
 * @author
 * @since 2023.07.04
 * @version 1.0 날짜 변경자 내용 ------------------------------------------------
 *          2023.07.04 최초작성
 */
@Service("newPrdMltReqLstService")
public class NewPrdMltReqLstServiceImpl implements NewPrdMltReqLstService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "fileUploadDowloadService")
	private FileUploadDowloadService fileUploadDowloadService;
	@Resource(name = "pi_1805_MM03280Service")
	private Pi_1805_MM03280Service pi_1805_MM03280Service;
	@Resource(name = "pi_1804_MM03260Service")
	private Pi_1804_MM03260Service pi_1804_MM03260Service;
	@Autowired
	private CoMailSendService coMailSendService;
	@Autowired
	private RdProductStatusService rdProductStatusService;

	@Resource(name = "commonDAO")
	private CommonDAO commonDAO;
	@Resource(name = "newPrdMltReqLstDao")
	private NewPrdMltReqLstDao newPrdMltReqLstDao;
	@Resource(name = "newPrdReqLstDao")
	private NewPrdReqLstDao newPrdReqLstDao;
	@Autowired
	private PrRegistProductDao prRegistProductDao;
	@Autowired
	private PcNewPrdReqPrcDao pcNewPrdReqPrcDao;

	/**
	 * 신규상품일괄요청처리 리스트 조회(selectNewPrdReqLst)
	 *
	 * @param searchMap
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectNewPrdMltReqLst(Map<String, Object> searchMap, HttpSession session) throws Exception {
		NexacroResult result = new NexacroResult();
		List<String> list = new ArrayList<String>();

		searchMap.put("SES_ID", session.getId());

		if (!ObjectUtils.isNull(searchMap.get("NEW_PRD_REQ_STATS_CD"))) {
			list = StringUtils.makeList(searchMap.get("NEW_PRD_REQ_STATS_CD").toString(), ",");
		}

		searchMap.put("NEW_PRD_REQ_STATS_CD_LIST", list);

		int totalCount = newPrdMltReqLstDao.selectNewPrdMltReqLstCount(searchMap);
		List<Map> records = newPrdMltReqLstDao.selectNewPrdMltReqLst(searchMap);

		result.addDataSet("ds_master", records);
		result.addVariable("totalCount", totalCount);

		return result;
	}

	/**
	 * 합의완료 진열상태 리스트 조회(selectNewPrdReqLst)
	 *
	 * @param searchMap
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectAgrCompDispStt(Map<String, Object> searchMap, HttpSession session) throws Exception {
		NexacroResult result = new NexacroResult();
		List<String> list = new ArrayList<String>();

		searchMap.put("SES_ID", session.getId());

//		int totalCount = newPrdMltReqLstDao.selectNewPrdMltReqLstCount(searchMap);
		List<Map> records = newPrdMltReqLstDao.selectAgrCompDispStt(searchMap);

		result.addDataSet("ds_list", records);
//		result.addVariable("totalCount", totalCount);

		return result;
	}

	/**
	 * 합의처리 저장 -> 새로 작업
	 *
	 * @param mainMap1
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult saveAgrProcRsn(Map<String, Object> mainMap1, Map<String, Object> userInfo,
			String contextRealPath) throws Exception {

		// 업무 Flow
		NexacroResult result = new NexacroResult();
		Map<String, Object> ds_output = new HashMap<String, Object>(); // 합의 반려 결과 처리 ds
		int productDuplicateCount = 0;
		String completeYn = "N";
		logger.info("+++++++++++++일괄 선제안 합의처리 저장 mainMap1  :{}", mainMap1);
		String newPrdReqGrpNoStr = mainMap1.get("NEW_PRD_REQ_GRP_NO").toString();
		String[] newPrdReqGrpNoArr = newPrdReqGrpNoStr.split(","); // 여러건 합의 처리 시 --> 변경 단건으로
		logger.info("+++++++++++++일괄 선제안 합의처리 저장 1 newPrdReqGrpNoArr.length :{}" + newPrdReqGrpNoArr.length);
		for (int i = 0; i < newPrdReqGrpNoArr.length; i++) {

			String newPrdReqGrpNo = newPrdReqGrpNoArr[i];
			logger.info("+++++++++++++일괄 선제안 합의처리 저장 2 newPrdReqGrpNo:>>" + newPrdReqGrpNo);
			if ("".equals(newPrdReqGrpNo) || newPrdReqGrpNo == null) {
				continue;
			}
			// 일괄 선제안 상품 여부 존재 확인
			Map<String, Object> infoMap = new HashMap<String, Object>();
			infoMap.put("NEW_PRD_REQ_GRP_NO", newPrdReqGrpNo);
			infoMap.put("DEALR_ID", StringUtil.getString(userInfo.get("EMP_NO")));

			List<Map> newPrdReqGrpInfo = newPrdMltReqLstDao.selectNewPrdReqInfo(infoMap);
			Map<String, Object> paramMap = newPrdReqGrpInfo.get(0);

			String reqYn = StringUtil.getString(paramMap.get("NEW_PRD_REQ_STATS_CD"));

			if (reqYn.equals("22") || reqYn.equals("33")) { // 요청건일때,

			} else if (reqYn.equals("52") || reqYn.equals("42")) { // 완료 또는 등록 불가 일때 ,

				ds_output.put("SUCCESS", "N");
				ds_output.put("MESSAGE", "이미 처리 완료된 요청 건입니다.(요청그룹번호: " + newPrdReqGrpNo + ")");
				result.addDataSet("ds_output", ds_output);
				return result;
			}
			// 합의사유 및 상태 저장
			Map<String, Object> consnRsn = new HashMap<String, Object>();

			consnRsn.put("CONSN_RSN", StringUtil.getString(mainMap1.get("CONSN_RSN")));
			consnRsn.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
			consnRsn.put("NEW_PRD_REQ_GRP_NO", newPrdReqGrpNo);

			newPrdMltReqLstDao.updateAgrProcRsn(consnRsn);

			// 상품 리스트 조회
			List<Map> newPrdReqLst = newPrdMltReqLstDao.selectNewPrdReqLst(newPrdReqGrpNo);

			for (int k = 0; k < newPrdReqLst.size(); k++) {
				Map<String, Object> searchMap = newPrdReqLst.get(k);
				String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

				if (CommUtil.nvl(langCd).equals("")) {
					searchMap.put("LANG_CD", "KO");
				}

				searchMap.put("REQ_SBJ_CD", "30");

				List<Map> records1 = null;
				List<Map> records2 = null;
				List<Map> records3 = null;
				List<Map> records4 = null;
				List<Map> records5 = null;
				List<Map> records6 = null;

				// R&D상품등록(자사) 메인 조회
				records1 = newPrdReqLstDao.selectPrdRegOcorpInq(searchMap);

				if (records1.get(0).get("PRD_CLCD") != null
						&& "".equals(records1.get(0).get("PRD_CLCD").toString()) == false) {
					searchMap.put("PRD_CLCD", CommUtil.nvl(records1.get(0).get("PRD_CLCD")).toString());
					searchMap.put("OLD_PRD_CLCD", CommUtil.nvl(records1.get(0).get("PRD_CLCD")).toString());
					int procCnt = newPrdReqLstDao.selectNewPrdProcCount(searchMap);

					if (procCnt > 0) {
						searchMap.put("STATE", "PROC");
					} else {
						searchMap.put("STATE", "REQ");
					}

					// 카테고리 추천&조회 조회
					records2 = newPrdReqLstDao.selectCatgAttrInfo(searchMap);
				}

				if (records1.get(0).get("NOTI_ITM_ID") != null
						&& "".equals(records1.get(0).get("NOTI_ITM_ID").toString()) == false) {
					searchMap.put("PRD_ID", CommUtil.nvl(records1.get(0).get("RND_REQ_PRD_ID")).toString());
					searchMap.put("NOTI_ITM_ID", CommUtil.nvl(records1.get(0).get("NOTI_ITM_ID")).toString());

					// 상품고시상품 조회
					records3 = newPrdReqLstDao.selectPrdNotiPrdInq(searchMap);
				}

				if (records1.get(0).get("PPI_DOC_REG_ID") != null
						&& "".equals(records1.get(0).get("PPI_DOC_REG_ID").toString()) == false) {
					searchMap.put("DOC_REG_ID", CommUtil.nvl(records1.get(0).get("PPI_DOC_REG_ID")).toString());

					// 첨부파일내역 조회
					records4 = newPrdReqLstDao.selectAttcFileDtlsInq(searchMap);
				}

				// 협력사인 경우에만 구매정보 조회
				if ("30".equals(searchMap.get("REQ_SBJ_CD").toString())) {
					// 신규상품고객요청정보 리스트 조회
					records5 = newPrdReqLstDao.selectNewPrdCustReqInfo(searchMap);

					// 신규상품구매물량내역 리스트 조회
					records6 = newPrdReqLstDao.selectNewPrdPurgQtyDtls(searchMap);
				}

				String strNewPrdReoNo = "";
				String strRndReqPrdId = "";

				Map<String, Object> saveData = records1.get(0);

				/*
				 * SSP-3052 신규상품 요청 처리 중복 체크
				 */
				Map<String, Object> productDuplicateStatusMap = rdProductStatusService
						.selectProductDuplicateStatusInfo(saveData, userInfo);

				// 중복 처리가 아닌 경우
				if ("Y".equals(productDuplicateStatusMap.get("SUCCESS"))) {
					List<Map> recordKeyValue = newPrdReqLstDao.selectNewPrdIdPKey(saveData);

					Map<String, Object> mapKeyValue = (Map<String, Object>) recordKeyValue.get(0);
					saveData.put("RND_REQ_PRD_ID", mapKeyValue.get("RND_REQ_PRD_ID").toString());
					saveData.put("MALL_SPR_CD", "20"); // R&D : 20

					saveData.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
					saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

					newPrdReqLstDao.insertCprtcpRegStor(saveData);

					// 디테일 테이블 PRD_ID 수정
					newPrdMltReqLstDao.updatePrdId(saveData);

					if ("10".equals(saveData.get("REQ_SBJ_CD").toString())) {
						// R&D 신규상품 상품등록(고객)인 경우
						saveData.put("NEW_PRD_REQ_STATS_CD", "29");
					} else {
						// 협력사인 경우
						saveData.put("NEW_PRD_REQ_STATS_CD", "50");
					}

					newPrdReqLstDao.insertNewPrdReqStatsDtls(saveData);

					strNewPrdReoNo = CommUtil.nvl(saveData.get("NEW_PRD_REQ_NO"));
					strRndReqPrdId = CommUtil.nvl(saveData.get("RND_REQ_PRD_ID"));

					// 카테고리속성정보 등록 로직 처리
					if (records2.size() > 0 && records2 != null) {
						for (Map<String, Object> dataMap : records2) {
							dataMap.put("NEW_PRD_REQ_NO", strNewPrdReoNo); // 신규상품 요청번호
							dataMap.put("PRD_ID", strRndReqPrdId); // 신규상품 ID
							dataMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
							dataMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

							newPrdReqLstDao.insertNewPrdReqProcAttrInfoStor(dataMap);
						}
					}

					// 상품고시품목속성 등록 로직 처리
					if (records3.size() > 0 && records3 != null) {
						for (Map<String, Object> dataMap : records3) {
							dataMap.put("RND_REQ_PRD_ID", strRndReqPrdId); // 신규상품 ID
							dataMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
							dataMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

							newPrdReqLstDao.insertRegProcPrdNotiItmMapp(dataMap);
						}
					}

					// 가격조건내역 등록 처리
					if (records5.size() > 0 && records5 != null) {
						Map<String, Object> dataMap1 = records5.get(0);
						dataMap1.put("PRD_ID", strRndReqPrdId); // 신규상품 ID
						dataMap1.put("RND_REQ_PRD_ID", strRndReqPrdId); // 신규상품 ID
						dataMap1.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
						dataMap1.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

						newPrdReqLstDao.insertCprtcpDupPrdProcStor(dataMap1);

						// 기간할인 등록
						if (!"".equals(StringUtil.getString(dataMap1.get("RND_DC_QTY")))) {
							Map<String, Object> periodDcMap = new HashMap<>();
							periodDcMap.putAll(dataMap1);
							periodDcMap.put("QTY_ITV_STR", 0);
							periodDcMap.put("END_QTY_CNT", 0);
							periodDcMap.put("PRC_COND_SPR_CD", "ZM02");
							periodDcMap.put("VLD_STR_DT",
									StringUtil.getString(dataMap1.get("RND_DC_VLD_STR_DTM")).replace(".", ""));
							periodDcMap.put("VLD_END_DT",
									StringUtil.getString(dataMap1.get("RND_DC_VLD_END_DTM")).replace(".", ""));
							periodDcMap.put("DC_AMT", dataMap1.get("RND_DC_QTY"));

							newPrdReqLstDao.insertPrcCondDtls(periodDcMap);
						}

						if (records6.size() > 0 && records6 != null) {
							for (Map<String, Object> dataMap2 : records6) {
								// 할인금액
								if (dataMap2.get("DC_AMT") != null && !"".equals(dataMap2.get("DC_AMT").toString())) {
									dataMap1.put("DC_AMT", dataMap2.get("DC_AMT").toString());
								}

								// 할인 시작 물량 개수
								dataMap1.put("QTY_ITV_STR", dataMap2.get("QTY_ITV_STR").toString());

								newPrdReqLstDao.insertPrcCondDtls(dataMap1);
							}
							/*
							 * } else { newPrdReqLstDao.insertPrcCondDtls(dataMap1);
							 */
						}
					}

					// 이미지 & 첨부파일 로직 처리

//					if (records4.size() > 0) {
//						// 이미지&첨부파일 삭제&수정 함수 호출
//						fileUploadDowloadService.saveMultiFileDelUpdate((List)records4, contextRealPath);
//					}

					// SSP 상품명 저장
					Map<String, Object> sspPrdNmMap = new HashMap<>();
					sspPrdNmMap.put("CO_CD", StringUtil.getString(saveData.get("CO_CD")));
					sspPrdNmMap.put("PRD_ID", strRndReqPrdId);
					sspPrdNmMap.put("SESSION_OPRTR_ID", userInfo.get("EMP_NO"));

					prRegistProductDao.mergeSspPrdNmInfo(sspPrdNmMap);

				} else {
					ds_output.put("SUCCESS", "N");
					ds_output.put("MESSAGE", "이미 처리 완료된 요청 건입니다.(요청그룹번호: " + newPrdReqGrpNo + ")");
					result.addDataSet("ds_output", ds_output);
					return result;
				}
			}

			// 처리 후 pi 계약 처리
//			 R&D상품등록(협력사)인 경우
//			 51 : 승인전자계약요청
			paramMap.put("NEW_PRD_REQ_STATS_CD", "51");
			paramMap.put("NEW_PRD_REQ_NO",newPrdReqGrpNo );
			paramMap.put("REQ_TYPE", "SSP_BO_RD_71_P02_PKG"); /* 협력사 일괄 선제안 용 reqType 정의 */
			commonDAO.insert("RdElcCont.insertNewPrdReqStatsDtls", paramMap);
			logger.info("+++++++++++++일괄 선제안 PI 전송 전 param  :{}", paramMap);
			// PI_1805(구매정보 확정:서브원 서명) 전송
			Map<String, Object> resultPi = this.pi_1805_MM03280Service.pi_1805_MM03280Request(paramMap);
			// PI 전송 결과
			logger.info("+++++++++++++일괄 선제안 PI 전송 결과  :{}", resultPi);
			String XSTAT = resultPi.get("XSTAT").toString();
			completeYn = XSTAT; /* 전자계약 성공 실패 Flag */
			paramMap.put("PI_IFID", "PI_1805");
			paramMap.put("PI_STAT", XSTAT);
			paramMap.put("PI_MSG", resultPi.get("XMSGS").toString());
			paramMap.put("PI_DATE", resultPi.get("XDATE").toString());
			paramMap.put("PI_TIME", resultPi.get("XTIME").toString());

			// String XSTAT = "S";
			if ("S".equals(XSTAT)) {
				// 52 : 처리 완료
				paramMap.put("NEW_PRD_REQ_STATS_CD", "52");
				logger.info("+++++++++++++일괄 선제안 PI 전송 결과 --> 52 : 처리 완료 :{}", resultPi);
			} else {
				// 53 : 승인전자계약실패
				paramMap.put("NEW_PRD_REQ_STATS_CD", "53");
				logger.info("+++++++++++++일괄 선제안 PI 전송 결과 -->// 53 : 승인전자계약실패 :{}", resultPi);
			}

			// pi계약 후 제일 마직막에 처리
			commonDAO.insert("RdElcCont.insertNewPrdReqStatsDtls", paramMap); // 그룹요 pi계약

			/* 그룹 전자 계약 완료 후 무조건 계약 처리 완 */
			for (int k = 0; k < newPrdReqLst.size(); k++) {
				Map<String, Object> searchMap = newPrdReqLst.get(k);
				if ("S".equals(XSTAT)) {
					// 52 : 처리 완료
					paramMap.put("NEW_PRD_REQ_STATS_CD", "52");
				} else {
					// 53 : 승인전자계약실패
					paramMap.put("NEW_PRD_REQ_STATS_CD", "53");
				}

				paramMap.put("NEW_PRD_REQ_NO", searchMap.get("NEW_PRD_REQ_NO"));
				paramMap.put("MALL_SPR_CD", "20"); /* 협력사 */

				commonDAO.insert("RdElcCont.insertNewPrdReqStatsDtls", paramMap); // 그룹요 pi계약

			}

			/* 합의 처리가 끝나면, 진열상태로 들어간 상품의 상태를 미진열 상태로 변경 */
			int dispNcnt = newPrdMltReqLstDao.updateNewPrdDisp(newPrdReqGrpNo);
			logger.info("+++++++++++++일괄 선제안 합의 그룹번호 :" + newPrdReqGrpNo);
			logger.info("+++++++++++++일괄 선제안 합의 상품 미진열처리 건수 :" + dispNcnt);
			if (dispNcnt == 0) { // 미진열 처리

				throw new MessageException(-200, "전자계약 합의처리 실패하였습니다.");
			}

		}

		if ("S".equals(completeYn)) {
			ds_output.put("SUCCESS", "Y");
		} else {
			ds_output.put("SUCCESS", "N");
			throw new MessageException(-200, "전자계약 합의처리 실패하였습니다.");

		}
		result.addDataSet("ds_output", ds_output);

		return result;
	}

	/**
	 * 상품일괄요청반려처리저장 --> 새로 작업
	 *
	 * @param mainMap
	 * @param userInfo
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult savePrdMltReqRjctProcStor(Map<String, Object> mainMap, Map<String, Object> userInfo)
			throws Exception {
		NexacroResult result = new NexacroResult();
		int productDuplicateCount = 0;
		String completeYn = "N";
		Map<String, Object> ds_output = new HashMap<String, Object>(); // 합의 반려 결과 처리 ds

		String newPrdReqGrpNoStr = mainMap.get("NEW_PRD_REQ_GRP_NO").toString();
		String[] newPrdReqGrpNoArr = newPrdReqGrpNoStr.split(","); // --> 단건 처리로 변경

		for (int i = 0; i < newPrdReqGrpNoArr.length; i++) {
			String newPrdReqGrpNo = newPrdReqGrpNoArr[i];

			if ("".equals(newPrdReqGrpNo) || newPrdReqGrpNo == null) {
				continue;
			}
			Map<String, Object> infoMap = new HashMap<String, Object>();
			infoMap.put("NEW_PRD_REQ_GRP_NO", newPrdReqGrpNo);
			infoMap.put("DEALR_ID", StringUtil.getString(userInfo.get("EMP_NO")));

			List<Map> newPrdReqGrpInfo = newPrdMltReqLstDao.selectNewPrdReqInfo(infoMap);
			Map<String, Object> paramMap = newPrdReqGrpInfo.get(0);

			List<Map> newPrdReqLst = newPrdMltReqLstDao.selectNewPrdReqLst(newPrdReqGrpNo);

			for (int k = 0; k < newPrdReqLst.size(); k++) {
				Map<String, Object> saveData = newPrdReqLst.get(i);
				saveData.put("MALL_SPR_CD", "20");
				saveData.put("REQ_SBJ_CD", "30");
				saveData.put("PRD_REG_DIS_TP_CD", mainMap.get("PRD_REG_DIS_TP_CD").toString());
				saveData.put("PRD_REG_DIS_TP_NM", mainMap.get("PRD_REG_DIS_TP_NM").toString());

				String langCd = StringUtil.getString(saveData.get("LANG_CD"));

				if (CommUtil.nvl(langCd).equals("")) {
					saveData.put("LANG_CD", "KO");
				}
				/*
				 * SSP-3052 신규상품 요청 처리 중복 체크
				 */
				Map<String, Object> productDuplicateStatusMap = rdProductStatusService
						.selectProductDuplicateStatusInfo(saveData, userInfo);

				// 중복 처리가 아닌 경우
				if ("Y".equals(productDuplicateStatusMap.get("SUCCESS"))) {

					saveData.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
					saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

					int resultUpdate = newPrdReqLstDao.updateNewPrdReqRjctProc(saveData);

					if (resultUpdate != 0) {
						// 신규상품 예외종료시(반려) 고객에게 메일발송
						if (k == 0) {
							Map<String, Object> mailMap = saveData;
							mailMap.put("NEW_PRD_REQ_GRP_NO", StringUtil.getString(paramMap.get("NEW_PRD_REQ_GRP_NO")));
							mailMap.put("PRD_REG_DIS_TP_NM", StringUtil.getString(mainMap.get("PRD_REG_DIS_TP_NM")));
							mailMap.put("REG_DIS_RSN", StringUtil.getString(mainMap.get("REG_DIS_RSN")));
							mailMap.put("ATFL_NM", StringUtil.getString(paramMap.get("ATFL_NM")));
							mailMap.put("REG_DTM", StringUtil.getString(paramMap.get("REG_DTM")));
							mailMap.put("OPRTR_NM", StringUtil.getString(paramMap.get("OPRTR_NM")));
							mailMap.put("EMAIL_ADDR", StringUtil.getString(paramMap.get("EMAIL_ADDR")));
							mailMap.put("EXCEL_DOC_REG_ID", StringUtil.getString(paramMap.get("EXCEL_DOC_REG_ID")));
							mailMap.put("CPRTCP_KOR_NM", StringUtil.getString(paramMap.get("CPRTCP_KOR_NM")));

							coMailSendService.newProductMultiRejectedMailSend(mailMap);
						}

						String reqSbjCd = StringUtil.getString(saveData.get("REQ_SBJ_CD"));

						// 협력사인 경우만 전자계약. 협력사 : 30, 고객 : 10
						if ("30".equals(reqSbjCd)) {
							// 41 : 반려전자계약요청
							saveData.put("MALL_SPR_CD", "20");
							saveData.put("NEW_PRD_REQ_STATS_CD", "41");
							commonDAO.insert("RdElcCont.insertNewPrdReqStatsDtls", saveData);
						}
					}

				} else {
					ds_output.put("SUCCESS", "N");
					ds_output.put("MESSAGE", "이미 처리 완료된 요청 건입니다.(요청그룹번호: " + newPrdReqGrpNo + ")");
					result.addDataSet("ds_output", ds_output);
					return result;
				}
			}

			// START PI 전송
			// 계약번호 가지고 와서 삭제 PI 전송

			logger.info("+++++++++++++일괄 선제안 반려 그룹번호 :" + newPrdReqGrpNo);
			logger.info("+++++++++++++일괄 선제안 반려   PI 전송 paramMap{} ", paramMap);

			Map<String, Object> resultPi = this.pi_1804_MM03260Service.pi_1804_MM03260Request(paramMap);
			logger.info("+++++++++++++일괄 선제안  pi 전송 결과 paramMap{} ", resultPi);
			// pi 전송 결과
			String XSTAT = resultPi.get("XSTAT").toString();
			String XMSGS = resultPi.get("XMSGS").toString();
			String XDATE = resultPi.get("XDATE").toString();
			String XTIME = resultPi.get("XTIME").toString();

			paramMap.put("PI_IFID", "PI_1804");
			paramMap.put("PI_STAT", XSTAT);
			paramMap.put("PI_MSG", XMSGS);
			paramMap.put("PI_DATE", XDATE);
			paramMap.put("PI_TIME", XTIME);
			completeYn = XSTAT;
			
			logger.info("+++++++++++++일괄 선제안  pi 전송 결과 completeYn{} "+ completeYn);
			// 42 : 등록불가, 43 : 반려전자계약요청실패
			if ("S".equals(XSTAT)) {
				paramMap.put("NEW_PRD_REQ_STATS_CD", "42");
			} else {
				paramMap.put("NEW_PRD_REQ_STATS_CD", "43");
			}

			commonDAO.insert("RdElcCont.insertNewPrdReqStatsDtls", paramMap);

			// 반려처리 마스터 테이블 데이터 수정
			Map<String, Object> dataMap = new HashMap<String, Object>();

			dataMap.put("NEW_PRD_REQ_GRP_NO", newPrdReqGrpNo);
			dataMap.put("PRD_REG_DIS_TP_CD", StringUtil.getString(mainMap.get("PRD_REG_DIS_TP_CD")));
			dataMap.put("REG_DIS_RSN", StringUtil.getString(mainMap.get("REG_DIS_RSN")));
			dataMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

			newPrdMltReqLstDao.updateNewPrdMltReqRjct(dataMap);

		}

		if ("S".equals(completeYn)) {
			ds_output.put("SUCCESS", "Y");
			result.addDataSet("ds_output", ds_output);
		} else {
			ds_output.put("SUCCESS", "N");
			result.addDataSet("ds_output", ds_output);
			throw new MessageException(-200, "전자계약 반려처리 실패하였습니다.");

		}
		return result;
	}

	/**
	 * 합의처리 저장
	 *
	 * @param mainMap1
	 * @return
	 * @throws Exception
	 */
	// @Override
	public NexacroResult saveAgrProcRsn_old(Map<String, Object> mainMap1, Map<String, Object> userInfo,
			String contextRealPath) throws Exception {
		NexacroResult result = new NexacroResult();
		int productDuplicateCount = 0;
		String completeYn = "N";
		logger.info("+++++++++++++일괄 선제안 합의처리 저장 mainMap1  :{}", mainMap1);
		String newPrdReqGrpNoStr = mainMap1.get("NEW_PRD_REQ_GRP_NO").toString();
		String[] newPrdReqGrpNoArr = newPrdReqGrpNoStr.split(",");

		for (int i = 0; i < newPrdReqGrpNoArr.length; i++) {
			String newPrdReqGrpNo = newPrdReqGrpNoArr[i];

			if ("".equals(newPrdReqGrpNo) || newPrdReqGrpNo == null) {
				continue;
			}

			Map<String, Object> infoMap = new HashMap<String, Object>();
			infoMap.put("NEW_PRD_REQ_GRP_NO", newPrdReqGrpNo);
			infoMap.put("DEALR_ID", StringUtil.getString(userInfo.get("EMP_NO")));

			List<Map> newPrdReqGrpInfo = newPrdMltReqLstDao.selectNewPrdReqInfo(infoMap);
			Map<String, Object> paramMap = newPrdReqGrpInfo.get(0);
			// 합의사유 및 상태 저장
			Map<String, Object> consnRsn = new HashMap<String, Object>();

			consnRsn.put("CONSN_RSN", StringUtil.getString(mainMap1.get("CONSN_RSN")));
			consnRsn.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
			consnRsn.put("NEW_PRD_REQ_GRP_NO", newPrdReqGrpNo);

			newPrdMltReqLstDao.updateAgrProcRsn(consnRsn);

			List<Map> newPrdReqLst = newPrdMltReqLstDao.selectNewPrdReqLst(newPrdReqGrpNo);

			for (int k = 0; k < newPrdReqLst.size(); k++) {
				Map<String, Object> searchMap = newPrdReqLst.get(k);
				String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

				if (CommUtil.nvl(langCd).equals("")) {
					searchMap.put("LANG_CD", "KO");
				}

				searchMap.put("REQ_SBJ_CD", "30");

				List<Map> records1 = null;
				List<Map> records2 = null;
				List<Map> records3 = null;
				List<Map> records4 = null;
				List<Map> records5 = null;
				List<Map> records6 = null;

				// R&D상품등록(자사) 메인 조회
				records1 = newPrdReqLstDao.selectPrdRegOcorpInq(searchMap);

				if (records1.get(0).get("PRD_CLCD") != null
						&& "".equals(records1.get(0).get("PRD_CLCD").toString()) == false) {
					searchMap.put("PRD_CLCD", CommUtil.nvl(records1.get(0).get("PRD_CLCD")).toString());
					searchMap.put("OLD_PRD_CLCD", CommUtil.nvl(records1.get(0).get("PRD_CLCD")).toString());
					int procCnt = newPrdReqLstDao.selectNewPrdProcCount(searchMap);

					if (procCnt > 0) {
						searchMap.put("STATE", "PROC");
					} else {
						searchMap.put("STATE", "REQ");
					}

					// 카테고리 추천&조회 조회
					records2 = newPrdReqLstDao.selectCatgAttrInfo(searchMap);
				}

				if (records1.get(0).get("NOTI_ITM_ID") != null
						&& "".equals(records1.get(0).get("NOTI_ITM_ID").toString()) == false) {
					searchMap.put("PRD_ID", CommUtil.nvl(records1.get(0).get("RND_REQ_PRD_ID")).toString());
					searchMap.put("NOTI_ITM_ID", CommUtil.nvl(records1.get(0).get("NOTI_ITM_ID")).toString());

					// 상품고시상품 조회
					records3 = newPrdReqLstDao.selectPrdNotiPrdInq(searchMap);
				}

				if (records1.get(0).get("PPI_DOC_REG_ID") != null
						&& "".equals(records1.get(0).get("PPI_DOC_REG_ID").toString()) == false) {
					searchMap.put("DOC_REG_ID", CommUtil.nvl(records1.get(0).get("PPI_DOC_REG_ID")).toString());

					// 첨부파일내역 조회
					records4 = newPrdReqLstDao.selectAttcFileDtlsInq(searchMap);
				}

				// 협력사인 경우에만 구매정보 조회
				if ("30".equals(searchMap.get("REQ_SBJ_CD").toString())) {
					// 신규상품고객요청정보 리스트 조회
					records5 = newPrdReqLstDao.selectNewPrdCustReqInfo(searchMap);

					// 신규상품구매물량내역 리스트 조회
					records6 = newPrdReqLstDao.selectNewPrdPurgQtyDtls(searchMap);
				}

				String strNewPrdReoNo = "";
				String strRndReqPrdId = "";

				Map<String, Object> saveData = records1.get(0);

				/*
				 * SSP-3052 신규상품 요청 처리 중복 체크
				 */
				Map<String, Object> productDuplicateStatusMap = rdProductStatusService
						.selectProductDuplicateStatusInfo(saveData, userInfo);

				// 중복 처리가 아닌 경우
				if ("Y".equals(productDuplicateStatusMap.get("SUCCESS"))) {
					List<Map> recordKeyValue = newPrdReqLstDao.selectNewPrdIdPKey(saveData);

					Map<String, Object> mapKeyValue = (Map<String, Object>) recordKeyValue.get(0);
					saveData.put("RND_REQ_PRD_ID", mapKeyValue.get("RND_REQ_PRD_ID").toString());
					saveData.put("MALL_SPR_CD", "20"); // R&D : 20

					saveData.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
					saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

					newPrdReqLstDao.insertCprtcpRegStor(saveData);

					// 디테일 테이블 PRD_ID 수정
					newPrdMltReqLstDao.updatePrdId(saveData);

					if ("10".equals(saveData.get("REQ_SBJ_CD").toString())) {
						// R&D 신규상품 상품등록(고객)인 경우
						saveData.put("NEW_PRD_REQ_STATS_CD", "29");
					} else {
						// 협력사인 경우
						saveData.put("NEW_PRD_REQ_STATS_CD", "50");
					}

					newPrdReqLstDao.insertNewPrdReqStatsDtls(saveData);

					strNewPrdReoNo = CommUtil.nvl(saveData.get("NEW_PRD_REQ_NO"));
					strRndReqPrdId = CommUtil.nvl(saveData.get("RND_REQ_PRD_ID"));

					// 카테고리속성정보 등록 로직 처리
					if (records2.size() > 0 && records2 != null) {
						for (Map<String, Object> dataMap : records2) {
							dataMap.put("NEW_PRD_REQ_NO", strNewPrdReoNo); // 신규상품 요청번호
							dataMap.put("PRD_ID", strRndReqPrdId); // 신규상품 ID
							dataMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
							dataMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

							newPrdReqLstDao.insertNewPrdReqProcAttrInfoStor(dataMap);
						}
					}

					// 상품고시품목속성 등록 로직 처리
					if (records3.size() > 0 && records3 != null) {
						for (Map<String, Object> dataMap : records3) {
							dataMap.put("RND_REQ_PRD_ID", strRndReqPrdId); // 신규상품 ID
							dataMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
							dataMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

							newPrdReqLstDao.insertRegProcPrdNotiItmMapp(dataMap);
						}
					}

					// 가격조건내역 등록 처리
					if (records5.size() > 0 && records5 != null) {
						Map<String, Object> dataMap1 = records5.get(0);
						dataMap1.put("PRD_ID", strRndReqPrdId); // 신규상품 ID
						dataMap1.put("RND_REQ_PRD_ID", strRndReqPrdId); // 신규상품 ID
						dataMap1.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
						dataMap1.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

						newPrdReqLstDao.insertCprtcpDupPrdProcStor(dataMap1);

						// 기간할인 등록
						if (!"".equals(StringUtil.getString(dataMap1.get("RND_DC_QTY")))) {
							Map<String, Object> periodDcMap = new HashMap<>();
							periodDcMap.putAll(dataMap1);
							periodDcMap.put("QTY_ITV_STR", 0);
							periodDcMap.put("END_QTY_CNT", 0);
							periodDcMap.put("PRC_COND_SPR_CD", "ZM02");
							periodDcMap.put("VLD_STR_DT",
									StringUtil.getString(dataMap1.get("RND_DC_VLD_STR_DTM")).replace(".", ""));
							periodDcMap.put("VLD_END_DT",
									StringUtil.getString(dataMap1.get("RND_DC_VLD_END_DTM")).replace(".", ""));
							periodDcMap.put("DC_AMT", dataMap1.get("RND_DC_QTY"));

							newPrdReqLstDao.insertPrcCondDtls(periodDcMap);
						}

						if (records6.size() > 0 && records6 != null) {
							for (Map<String, Object> dataMap2 : records6) {
								// 할인금액
								if (dataMap2.get("DC_AMT") != null && !"".equals(dataMap2.get("DC_AMT").toString())) {
									dataMap1.put("DC_AMT", dataMap2.get("DC_AMT").toString());
								}

								// 할인 시작 물량 개수
								dataMap1.put("QTY_ITV_STR", dataMap2.get("QTY_ITV_STR").toString());

								newPrdReqLstDao.insertPrcCondDtls(dataMap1);
							}
							/*
							 * } else { newPrdReqLstDao.insertPrcCondDtls(dataMap1);
							 */
						}
					}

					// 이미지 & 첨부파일 로직 처리

//					if (records4.size() > 0) {
//						// 이미지&첨부파일 삭제&수정 함수 호출
//						fileUploadDowloadService.saveMultiFileDelUpdate((List)records4, contextRealPath);
//					}

					// SSP 상품명 저장
					Map<String, Object> sspPrdNmMap = new HashMap<>();
					sspPrdNmMap.put("CO_CD", StringUtil.getString(saveData.get("CO_CD")));
					sspPrdNmMap.put("PRD_ID", strRndReqPrdId);
					sspPrdNmMap.put("SESSION_OPRTR_ID", userInfo.get("EMP_NO"));

					prRegistProductDao.mergeSspPrdNmInfo(sspPrdNmMap);

				} else {
					productDuplicateCount++;
				}
			}

			// 처리 후 pi 계약 처리
//			 R&D상품등록(협력사)인 경우
//			 51 : 승인전자계약요청
			paramMap.put("NEW_PRD_REQ_STATS_CD", "51");
			// 그룹번호로 처리
			paramMap.put("NEW_PRD_REQ_NO", newPrdReqGrpNo);
			commonDAO.insert("RdElcCont.insertNewPrdReqStatsDtls", paramMap);

			paramMap.put("REQ_TYPE", "SSP_BO_RD_71_P02_PKG"); /* 협력사 일괄 선제안 용 reqType 정의 */
			logger.info("+++++++++++++일괄 선제안 PI 전송 전 param  :{}", paramMap);
			// PI_1805(구매정보 확정:서브원 서명) 전송
			Map<String, Object> resultPi = this.pi_1805_MM03280Service.pi_1805_MM03280Request(paramMap);
			// PI 전송 결과
			logger.info("+++++++++++++일괄 선제안 PI 전송 결과  :{}", resultPi);
			String XSTAT = resultPi.get("XSTAT").toString();
			completeYn = XSTAT; /* 전자계약 성공 실패 Flag */
			paramMap.put("PI_IFID", "PI_1805");
			paramMap.put("PI_STAT", XSTAT);
			paramMap.put("PI_MSG", resultPi.get("XMSGS").toString());
			paramMap.put("PI_DATE", resultPi.get("XDATE").toString());
			paramMap.put("PI_TIME", resultPi.get("XTIME").toString());

			// String XSTAT = "S";
			if ("S".equals(XSTAT)) {
				// 52 : 처리 완료
				paramMap.put("NEW_PRD_REQ_STATS_CD", "52");
				logger.info("+++++++++++++일괄 선제안 PI 전송 결과 --> 52 : 처리 완료 :{}", resultPi);
			} else {
				// 53 : 승인전자계약실패
				paramMap.put("NEW_PRD_REQ_STATS_CD", "53");
				logger.info("+++++++++++++일괄 선제안 PI 전송 결과 -->// 53 : 승인전자계약실패 :{}", resultPi);
			}

			// pi계약 후 제일 마직막에 처리
			// commonDAO.insert("RdElcCont.insertNewPrdReqStatsDtls", paramMap); //그룹요 pi계약

			/* 그룹 전자 계약 완료 후 무조건 계약 처리 완 */
			for (int k = 0; k < newPrdReqLst.size(); k++) {
				Map<String, Object> searchMap = newPrdReqLst.get(k);
				if ("S".equals(XSTAT)) {
					// 52 : 처리 완료
					paramMap.put("NEW_PRD_REQ_STATS_CD", "52");
				} else {
					// 53 : 승인전자계약실패
					paramMap.put("NEW_PRD_REQ_STATS_CD", "53");
				}

				paramMap.put("NEW_PRD_REQ_NO", searchMap.get("NEW_PRD_REQ_NO"));
				paramMap.put("MALL_SPR_CD", "20"); /* 협력사 */

				commonDAO.insert("RdElcCont.insertNewPrdReqStatsDtls", paramMap); // 그룹요 pi계약

			}

			/* 합의 처리가 끝나면, 진열상태로 들어간 상품의 상태를 미진열 상태로 변경 */
			int dispNcnt = newPrdMltReqLstDao.updateNewPrdDisp(newPrdReqGrpNo);
			logger.info("+++++++++++++일괄 선제안 합의 그룹번호 :" + newPrdReqGrpNo);
			logger.info("+++++++++++++일괄 선제안 합의 상품 미진열처리 건수 :" + dispNcnt);
		}

		Map<String, Object> ds_output = new HashMap<String, Object>();
//		if(productDuplicateCount > 0) {
//			ds_output.put("SUCCESS", "N");
//			ds_output.put("MESSAGE", "이미 처리 완료된 요청이 "+productDuplicateCount+"건 있습니다.");
//		}else {
//			ds_output.put("SUCCESS", "Y");
//		}
		if ("S".equals(completeYn)) {
			ds_output.put("SUCCESS", "Y");
		} else {
			ds_output.put("SUCCESS", "N");

		}

		result.addDataSet("ds_output", ds_output);

		return result;
	}

	/**
	 * 상품일괄요청반려처리저장
	 *
	 * @param mainMap
	 * @param userInfo
	 * @return
	 * @throws Exception
	 */
	// @Override
	public NexacroResult savePrdMltReqRjctProcStor_old(Map<String, Object> mainMap, Map<String, Object> userInfo)
			throws Exception {
		NexacroResult result = new NexacroResult();
		int productDuplicateCount = 0;

		String newPrdReqGrpNoStr = mainMap.get("NEW_PRD_REQ_GRP_NO").toString();
		String[] newPrdReqGrpNoArr = newPrdReqGrpNoStr.split(",");

		for (int i = 0; i < newPrdReqGrpNoArr.length; i++) {
			String newPrdReqGrpNo = newPrdReqGrpNoArr[i];

			if ("".equals(newPrdReqGrpNo) || newPrdReqGrpNo == null) {
				continue;
			}
			Map<String, Object> infoMap = new HashMap<String, Object>();
			infoMap.put("NEW_PRD_REQ_GRP_NO", newPrdReqGrpNo);
			infoMap.put("DEALR_ID", StringUtil.getString(userInfo.get("EMP_NO")));

			List<Map> newPrdReqGrpInfo = newPrdMltReqLstDao.selectNewPrdReqInfo(infoMap);
			Map<String, Object> paramMap = newPrdReqGrpInfo.get(0);

			List<Map> newPrdReqLst = newPrdMltReqLstDao.selectNewPrdReqLst(newPrdReqGrpNo);

			for (int k = 0; k < newPrdReqLst.size(); k++) {
				Map<String, Object> saveData = newPrdReqLst.get(i);
				saveData.put("MALL_SPR_CD", "20");
				saveData.put("REQ_SBJ_CD", "30");
				saveData.put("PRD_REG_DIS_TP_CD", mainMap.get("PRD_REG_DIS_TP_CD").toString());
				saveData.put("PRD_REG_DIS_TP_NM", mainMap.get("PRD_REG_DIS_TP_NM").toString());

				String langCd = StringUtil.getString(saveData.get("LANG_CD"));

				if (CommUtil.nvl(langCd).equals("")) {
					saveData.put("LANG_CD", "KO");
				}
				/*
				 * SSP-3052 신규상품 요청 처리 중복 체크
				 */
				Map<String, Object> productDuplicateStatusMap = rdProductStatusService
						.selectProductDuplicateStatusInfo(saveData, userInfo);

				// 중복 처리가 아닌 경우

				saveData.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
				saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

				int resultUpdate = newPrdReqLstDao.updateNewPrdReqRjctProc(saveData);

				if (resultUpdate != 0) {
					// 신규상품 예외종료시(반려) 고객에게 메일발송
					if (k == 0) {
						Map<String, Object> mailMap = saveData;
						mailMap.put("NEW_PRD_REQ_GRP_NO", StringUtil.getString(paramMap.get("NEW_PRD_REQ_GRP_NO")));
						mailMap.put("PRD_REG_DIS_TP_NM", StringUtil.getString(mainMap.get("PRD_REG_DIS_TP_NM")));
						mailMap.put("REG_DIS_RSN", StringUtil.getString(mainMap.get("REG_DIS_RSN")));
						mailMap.put("ATFL_NM", StringUtil.getString(paramMap.get("ATFL_NM")));
						mailMap.put("REG_DTM", StringUtil.getString(paramMap.get("REG_DTM")));
						mailMap.put("OPRTR_NM", StringUtil.getString(paramMap.get("OPRTR_NM")));
						mailMap.put("EMAIL_ADDR", StringUtil.getString(paramMap.get("EMAIL_ADDR")));
						mailMap.put("EXCEL_DOC_REG_ID", StringUtil.getString(paramMap.get("EXCEL_DOC_REG_ID")));
						mailMap.put("CPRTCP_KOR_NM", StringUtil.getString(paramMap.get("CPRTCP_KOR_NM")));

						coMailSendService.newProductMultiRejectedMailSend(mailMap);
					}

					String reqSbjCd = StringUtil.getString(saveData.get("REQ_SBJ_CD"));

					// 협력사인 경우만 전자계약. 협력사 : 30, 고객 : 10
					if ("30".equals(reqSbjCd)) {
						// 41 : 반려전자계약요청
						saveData.put("MALL_SPR_CD", "20");
						saveData.put("NEW_PRD_REQ_STATS_CD", "41");
						commonDAO.insert("RdElcCont.insertNewPrdReqStatsDtls", saveData);
					}
				}
			}

			// START PI 전송
			// 계약번호 가지고 와서 삭제 PI 전송
			Map<String, Object> resultPi = this.pi_1804_MM03260Service.pi_1804_MM03260Request(paramMap);

			// pi 전송 결과
			String XSTAT = resultPi.get("XSTAT").toString();
			String XMSGS = resultPi.get("XMSGS").toString();
			String XDATE = resultPi.get("XDATE").toString();
			String XTIME = resultPi.get("XTIME").toString();

			paramMap.put("PI_IFID", "PI_1804");
			paramMap.put("PI_STAT", XSTAT);
			paramMap.put("PI_MSG", XMSGS);
			paramMap.put("PI_DATE", XDATE);
			paramMap.put("PI_TIME", XTIME);

			// 42 : 등록불가, 43 : 반려전자계약요청실패
			if ("S".equals(XSTAT)) {
				paramMap.put("NEW_PRD_REQ_STATS_CD", "42");
			} else {
				paramMap.put("NEW_PRD_REQ_STATS_CD", "43");
			}

			commonDAO.insert("RdElcCont.insertNewPrdReqStatsDtls", paramMap);

			// 반려처리 마스터 테이블 데이터 수정
			Map<String, Object> dataMap = new HashMap<String, Object>();

			dataMap.put("NEW_PRD_REQ_GRP_NO", newPrdReqGrpNo);
			dataMap.put("PRD_REG_DIS_TP_CD", StringUtil.getString(mainMap.get("PRD_REG_DIS_TP_CD")));
			dataMap.put("REG_DIS_RSN", StringUtil.getString(mainMap.get("REG_DIS_RSN")));
			dataMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

			newPrdMltReqLstDao.updateNewPrdMltReqRjct(dataMap);

		}

		Map<String, Object> ds_output = new HashMap<String, Object>();

		ds_output.put("SUCCESS", "Y");

		result.addDataSet("ds_output", ds_output);

		return result;
	}
}