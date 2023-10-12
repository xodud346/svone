/*------------------------------------------------------------------------------
 * NAME : DispPrdMngEstmReqLstServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 * DATE         AUTHOR          DESCRIPTION
 * ----------   --------------  ------------------------------------------------
 * 2022.04.28   newwhite7       생성
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import com.google.gson.Gson;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pr.dao.PrRegistProductDao;
import com.ssp.bo.rd.dao.NewPrdReqLstDao;
import com.ssp.bo.rd.dao.PrdInfoMngDao;
import com.ssp.bo.rd.service.DispPrdMngEstmReqLstService;
import com.ssp.core.co.dao.CoCommonSendDao;
import com.ssp.core.co.dao.CommonDAO;
import com.ssp.core.co.service.CoPiRcvLogService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.pr.dao.Pi1304Dao;
import com.ssp.core.util.StringUtil;
import kr.co.serveone.EAI.MMM.SSPF.*;
import org.apache.axis.client.Stub;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * <pre>
 *  전시상품 견적요청 ServiceImpl
 * </pre>
 *
 * @version 1.0
 * @since 2022.04.28
 * ----------   ---------   --------------------------
 * 2022.04.28   SON         최초 작성
 */
@Service("dispPrdMngEstmReqLstService")
public class DispPrdMngEstmReqLstServiceImpl implements DispPrdMngEstmReqLstService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "commonDAO")
	private CommonDAO commonDAO;

	@Autowired
	private NewPrdReqLstDao newPrdReqLstDao;
	@Autowired
	private PrdInfoMngDao prdInfoMngDao;
	@Autowired
	private PrRegistProductDao prRegistProductDao;

	@Autowired
	private SspPropertyService sspPropertyService;

	/*
		RND 불필요한 로직이나, ssp 로직 파악을 위해 제거하지 않음
	 */
	@Autowired
	private CoPiRcvLogService coPiRcvLogService;
	@Autowired
	private Pi1304Dao pi1304Dao;
	@Autowired
	private CoCommonSendDao coCommonSendDao;


	/**
	 * <pre>
	 * 1. MethodName : selectProductEstimateCount
	 * 2. ClassName  : PrProductEstimateServiceImpl.java
	 * 3. Comment    : 견적요청 카운트 조회
	 * 4. 작성자       : 윤주영
	 * 5. 작성일       : 2021.9. 06.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	public int selectProductEstimateCount(Map<String, Object> searchMap, OdOrderComm odOrder) throws Exception {
		searchMap.put("SES_ID", odOrder.getSession().get("SES_ID"));
		return commonDAO.selectCount("DispPrdMngEstmReqLst.selectProductEstimateCount", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectProductEstimateList
	 * 2. ClassName  : PrProductEstimateServiceImpl.java
	 * 3. Comment    : 견적요청 조회
	 * 4. 작성자       : 윤주영
	 * 5. 작성일       : 2021.9. 06.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> selectProductEstimateList(Map<String, Object> searchMap, OdOrderComm odOrder) throws Exception {
		searchMap.put("SES_ID", odOrder.getSession().get("SES_ID"));
		return commonDAO.selectList("DispPrdMngEstmReqLst.selectProductEstimateList", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectProductEstimateDetail
	 * 2. ClassName  : PrProductEstimateServiceImpl.java
	 * 3. Comment    : 견적요청 상세 조회
	 * 4. 작성자       : 윤주영
	 * 5. 작성일       : 2021.9. 06.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	public Map<String, String> selectProductEstimateDetail(Map<String, Object> searchMap) throws Exception {
		return commonDAO.select("DispPrdMngEstmReqLst.selectProductEstimateDetail", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectProductEstimateDetail
	 * 2. ClassName  : PrProductEstimateServiceImpl.java
	 * 3. Comment    : 견적요청 상세 조회
	 * 4. 작성자       : 김재흥
	 * 5. 작성일       : 2023.08. 07.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	public Map<String, String> selectNewProductDetail(Map<String, Object> searchMap) throws Exception {
		return commonDAO.select("DispPrdMngEstmReqLst.selectNewProductDetail", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectProductEstimateOption
	 * 2. ClassName  : PrProductEstimateServiceImpl.java
	 * 3. Comment    : 견적요청 옵션 조회
	 * 4. 작성자       : 윤주영
	 * 5. 작성일       : 2021.9. 06.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, String>> selectProductEstimateOption(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("DispPrdMngEstmReqLst.selectProductEstimateOption", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectNewProductOption
	 * 2. ClassName  : PrProductEstimateServiceImpl.java
	 * 3. Comment    : 견적요청 옵션 조회
	 * 4. 작성자       : 김재흥
	 * 5. 작성일       : 2023.08.08
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, String>> selectNewProductOption(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("DispPrdMngEstmReqLst.selectNewProductOption", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectProductEstimateAddOption
	 * 2. ClassName  : PrProductEstimateServiceImpl.java
	 * 3. Comment    : 견적요청 추가옵션 조회
	 * 4. 작성자       : 윤주영
	 * 5. 작성일       : 2021.9. 06.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, String>> selectProductEstimateAddOption(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("DispPrdMngEstmReqLst.selectProductEstimateAddOption", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectProductEstimateHistory
	 * 2. ClassName  : PrProductEstimateServiceImpl.java
	 * 3. Comment    : 견적요청 히스토리 조회
	 * 4. 작성자       : 윤주영
	 * 5. 작성일       : 2021.9. 06.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, String>> selectProductEstimateHistory(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("DispPrdMngEstmReqLst.selectProductEstimateHistory", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : insertProductEstimateStatusList
	 * 2. ClassName  : PrProductEstimateServiceImpl.java
	 * 3. Comment    : 견적요청 접수
	 * 4. 작성자       : 윤주영
	 * 5. 작성일       : 2021.9. 06.
	 * </pre>
	 *
	 * @param list, userInfo
	 * @return
	 * @throws Exception
	 */
	@Transactional
	public int insertProductEstimateStatusList(List<Map<String, Object>> list
			, List<Map<String, Object>> op
			, List<Map<String, Object>> addOp
			, Map<String, Object> userInfo) throws Exception {
		int cnt = 0;

		for (Map map : list) {
			map.put("OPRTR_ID", userInfo.get("OPRTR_ID"));
			map.put("ESTM_REQ_PROC_STATS_CD", "20");

			String newPrdId = StringUtil.getString(map, "NEW_PRD_ID");
			if (StringUtil.isEmpty(newPrdId)) {
				String strNewPrdReoNo = "";
				String strRndReqPrdId = "";

				Map<String, Object> saveData = new HashMap<>();

				// 신규 상품 요청번호(전시견적요청번호로 대체)
				saveData.put("NEW_PRD_REQ_NO", StringUtil.getString(map, "ESTM_REQ_NO"));

				// 신규 상품 ID
				List<Map> recordKeyValue = newPrdReqLstDao.selectNewPrdIdPKey(saveData);

				Map<String, Object> mapKeyValue = recordKeyValue.get(0);
				saveData.put("RND_REQ_PRD_ID", mapKeyValue.get("RND_REQ_PRD_ID").toString());

				saveData.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
				saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

				// 상품 등록에 필요한 값 세팅
				saveData.put("RND_DISP_PRD_YN", "Y");
				saveData.put("CO_CD", StringUtil.getString(map, "CO_CD"));
				saveData.put("REQ_PRD_NM", StringUtil.getString(map, "DISP_PRD_NM"));							// 요청상품명
				saveData.put("MNFR_NO", StringUtil.getString(map, "MNFR_NO"));									// 제조사번호
				saveData.put("ORGPLC_CTRY_CD", StringUtil.getString(map, "ORGPLC_CTRY_CD"));					// 원산지국가코드
				saveData.put("HPE_SELL_UPRC", null);																// 희망판매단가
				saveData.put("SELL_UNIT_CD", StringUtil.getString(map, "SELL_UNIT_CD"));						// 희망판매단위코드
				saveData.put("BASIS_UNIT_CD", StringUtil.getString(map, "BASIS_UNIT_CD"));						// 희망판매단위코드
				saveData.put("BASIS_UNIT_QTY", StringUtil.getString(map, "BASIS_UNIT_QTY"));					// 희망판매단위수량
				saveData.put("PRD_CLCD", StringUtil.getString(map, "PRD_CLCD"));								// 상품분류코드
				saveData.put("PPI_DOC_REG_ID", StringUtil.getString(map, "PPI_DOC_REG_ID"));					// 문서등록 ID
				saveData.put("CHM_MTL_YN", StringUtil.getString(map, "CHM_MTL_YN"));							// 화학물질여부
				saveData.put("PUB_ONLY_SPR_CD", "P");																// 공용전용구분코드 (P: 공용)
				saveData.put("REQ_RSN", StringUtil.getString(map, "REQ_RSN"));									// 추가요청사항
				saveData.put("TX_CLCD", StringUtil.getString(map, "TX_CLCD"));									// 세금분류코드
				saveData.put("RND_HUB_HNL_DIS_TP_CD", StringUtil.getString(map, "HUB_HNL_DIS_TP_CD"));			// Hub취급가능여부
				saveData.put("REQ_SBJ_CD", "10");																	// 요청주체코드(고객:10, 자사:20, 협력사:30)
				saveData.put("DSTRB_STD_PRC", null);																// 유통표준가격
				saveData.put("DLV_AMT", null);																		// 배송금액
				saveData.put("DLV_LT", null);																		// 배송리드타임
				saveData.put("VLD_STR_DT", null);																	// 유효시작일자
				saveData.put("VLD_END_DT", null);																	// 유효종료일자
				saveData.put("KC_CERT_YN", null);																	// KC인증여부
				saveData.put("MSDS_FNL_CHG_DT", null);																// MSDS최종변경일자
				saveData.put("RND_DC_QTY", null);																	// RND할인수량
				saveData.put("RND_DC_SPR_CD", null);																// RND할인구분코드
				saveData.put("RND_DC_VLD_STR_DTM", null);															// RND할인유효시작일시
				saveData.put("RND_DC_VLD_END_DTM", null);															// RND할인유효종료일시
				saveData.put("CONT_NO", null);																		// 계약번호
				saveData.put("CONT_CHG_DGRCNT", null);																// 계약변경차수
				saveData.put("MIN_ODR_QTY", null);																	// 최소주문수량
				saveData.put("MRO_REQ_NO", null);																	// MRO요청번호
				saveData.put("MRO_PROC_STATS_CD", null);															// MRO처리상태코드
				saveData.put("MRO_DUP_PRD_ID", null);																// MRO중복상품ID
				saveData.put("MRO_PRD_ID", null);																	// MRO상품ID
				saveData.put("EXCEPT_END_RSN", null);																// 예외종료사유
				saveData.put("PRD_REG_DIS_TP_CD", null);															// 상품등록불가유형코드
				saveData.put("REG_DIS_RSN", null);																	// 등록불가사유
				saveData.put("PRD_PRPS_SPR_CD", null);																// 상품제안구분코드
				saveData.put("PRD_PRPS_STATS_CD", null);															// 상품제안상태코드
				saveData.put("ALT_PRPS_RSN", null);																	// 대체제안사유
				saveData.put("CUST_RJT_RSN", null);																	// 고객거부사유
				saveData.put("PRPS_PRD_ID", null);																	// 제안상품ID
				saveData.put("TRSF_RSN", null);																		// 이관사유
				saveData.put("MALL_SPR_CD", "20");																	// 몰구분코드
				saveData.put("ESTM_REQ_NO", StringUtil.getString(map, "ESTM_REQ_NO"));							// 견적요청번호
				saveData.put("UPD_RSN", null);																		// 수정사유

				saveData.put("PRC_APLY_SPR_CD", null);																// 가격적용구분코드
				saveData.put("NOTI_ITM_ID", null);																	// 고시품목ID
				saveData.put("BRND_NM", null);																		// 브랜드명
				saveData.put("NEW_PRD_REQ_PRVL_LIST", StringUtil.getString(map, "NEW_PRD_REQ_PRVL_LIST"));		// SSP 대표속성
				saveData.put("PRD_DTL_DESC", null);																	// 상품상세설명
				saveData.put("HASH_TAG", null);																		// 해시태그
				saveData.put("PRD_NUSE_RSN_CD", null);																// 상품미사용사유코드
				saveData.put("BG_SEQ", null);																		// 배지순번
				saveData.put("RND_MSDS_URL", null);																	// RND MSDS URL

				saveData.put("MRO_REPR_ATTR", null);																// MRO대표속성
				saveData.put("MULT_SELL_UNIT_QTY", null);															// 배수판매단위수량
				saveData.put("HUB_HNL_PSB_YN", StringUtil.getString(map, "HUB_HNL_PSB_YN"));					// 허브취급가능여부
				saveData.put("PURG_CHRPSN_ID", null);																// 구매담당자ID
				saveData.put("MDEL_NO", null);																		// 모델번호
				saveData.put("MSDS_FST_WRT_DTM", null);																// MSDS최초작성일시
				saveData.put("MSDS_FNL_CHG_DTM", null);																// MSDS최종변경일시
				saveData.put("HRM_CHM_MTL_YN", StringUtil.getString(map, "CHM_MTL_YN"));						// 유해화학물질여부
				saveData.put("MTL_GRAVITY", null);																	// 물질비중
				saveData.put("DNGR_MTL_NO", null);																	// 위험물질번호
				saveData.put("PHASE_SPR_CD", null);																	// 성상구분코드
				saveData.put("QCK_DLV_YN", null);																	// 퀵배송여부
				saveData.put("TRG_DLV_LT", null);																	// 목표배송리드타임

				newPrdReqLstDao.insertNewPrdReqLst(saveData);

				// 신규상품요청상태내역 요청 등록
				saveData.put("NEW_PRD_REQ_STATS_CD", "22"); // 요청상태
				newPrdReqLstDao.insertNewPrdReqStatsDtls(saveData);

				// 신규상품요청상태내역 완료 등록
				saveData.put("NEW_PRD_REQ_STATS_CD", "52"); // 처리완료
				newPrdReqLstDao.insertNewPrdReqStatsDtls(saveData);

				strRndReqPrdId = CommUtil.nvl(saveData.get("RND_REQ_PRD_ID"));

				if (op.size() > 0) {
					for (Map<String, Object> opMap : op) {
						Map<String, Object> dataMap = opMap;

						opMap.put("CO_CD", StringUtil.getString(saveData.get("CO_CD")));
						opMap.put("PRD_ID", StringUtil.getString(saveData.get("RND_REQ_PRD_ID")));
						opMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
						opMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
						opMap.put("PRVL", StringUtil.getString(dataMap.get("OPTN_ITM_SLT_CTS")));
						opMap.put("PRD_ID", mapKeyValue.get("RND_REQ_PRD_ID").toString());
						opMap.put("CHK_YN", "1");

						prdInfoMngDao.insertPrdInfoAttrMappStor(opMap);
					}
				}

				// SSP 상품명
				Map<String, Object> sspPrdNmMap = new HashMap<>();
				sspPrdNmMap.put("CO_CD", StringUtil.getString(saveData.get("CO_CD")));
				sspPrdNmMap.put("PRD_ID", strRndReqPrdId);  // 상품 ID
				sspPrdNmMap.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("EMP_NO")));
				prRegistProductDao.mergeSspPrdNmInfo(sspPrdNmMap);

				// 협력사견적 마스터 테이블 신규상품ID와 상태값 갱신
				saveData.put("ESTM_INFO_STATS_CD", "10");
				commonDAO.update("DispPrdMngEstmReqLst.updateCprtcpDispEstmInfo", saveData);
			}

			// 추가정보 갱신
			for (Map<String, Object> option : addOp) {
				commonDAO.update("DispPrdMngEstmReqLst.updateDispEstmAddOptnInfo", option);
			}

			commonDAO.update("DispPrdMngEstmReqLst.insertProductEstimateStatus", map);
			cnt++;
		}

		return cnt;
	}

	/**
	 * <pre>
	 * 1. MethodName : insertProductEstimateStatus
	 * 2. ClassName  : PrProductEstimateServiceImpl.java
	 * 3. Comment    : 견적요청 상태 등록
	 * 4. 작성자       : 윤주영
	 * 5. 작성일       : 2021.9. 06.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Transactional(isolation = Isolation.SERIALIZABLE, rollbackFor = Exception.class)
	public Map insertProductEstimateStatus(Map<String, Object> searchMap) throws Exception {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		DT_MM03190_SSPF_response res = null;
		String newPrdReqNo = "";
		Map<String, Object> piReturnMap = new HashMap<String, Object>();

		if ("30".equals(searchMap.get("ESTM_REQ_PROC_STATS_CD")) || "40".equals(searchMap.get("ESTM_REQ_PROC_STATS_CD")) || "70".equals(searchMap.get("ESTM_REQ_PROC_STATS_CD"))) {    //	견적처리중
			commonDAO.update("DispPrdMngEstmReqLst.updateProductEstimateReqDtl", searchMap);
			commonDAO.insert("DispPrdMngEstmReqLst.insertProductEstimateStatus", searchMap);

			if ("40".equals(searchMap.get("ESTM_REQ_PROC_STATS_CD")) || "70".equals(searchMap.get("ESTM_REQ_PROC_STATS_CD"))) {

				if ("40".equals(searchMap.get("ESTM_REQ_PROC_STATS_CD"))) {
					commonDAO.update("DispPrdMngEstmReqLst.updateProductEstimateReqAtflDtl", searchMap);
				}

				Map<String, Object> mailMap = new HashMap<String, Object>();

				mailMap = commonDAO.select("DispPrdMngEstmReqLst.selectProductEstimateProcMailInfo", searchMap);

				// 견적처리완료메일 발송
				this.estmProcCompleteSendMail(mailMap);
			}
		} else if ("50".equals(searchMap.get("ESTM_REQ_PROC_STATS_CD"))) {
			newPrdReqNo = commonDAO.selectStr("DispPrdMngEstmReqLst.selectProductEstimateNewPrdReqNo", searchMap);
			searchMap.put("NEW_PRD_REQ_NO", newPrdReqNo);

			commonDAO.insert("DispPrdMngEstmReqLst.insertProductEstimateNewCustReqInfo", searchMap);

			List<Map<String, Object>> list = commonDAO.selectList("DispPrdMngEstmReqLst.selectProductEstimateMroAttrInfo", searchMap);

			for (int i = 0; i < list.size(); i++) {
				Map<String, Object> map = list.get(i);
				map.putAll(searchMap);

				commonDAO.insert("DispPrdMngEstmReqLst.insertProductEstimateNewCustReqAttrInfo", map);
			}

			commonDAO.insert("DispPrdMngEstmReqLst.insertProductEstimateNewReqProc", searchMap);
			commonDAO.insert("DispPrdMngEstmReqLst.insertProductEstimateNewReqStatsDtls", searchMap);
			commonDAO.insert("DispPrdMngEstmReqLst.insertProductEstimateStatus", searchMap);

			Map<String, Object> map = new HashMap<String, Object>();

			map.put("CO_CD", searchMap.get("CO_CD"));
			map.put("NEW_PRD_REQ_NO", newPrdReqNo);
			map.put("OPRTR_ID", searchMap.get("OPRTR_ID"));
			map.put("LANG_CD", "KO");
			map.put("ESTM_REQ_NO", searchMap.get("ESTM_REQ_NO"));
			map.put("PRD_CLCD", searchMap.get("PRD_CLCD"));

			Map<String, Object> fprd = commonDAO.select("DispPrdMngEstmReqLst.selectNewProductReqDetail", map);                        // 요청상품정보
			List<Map<String, Object>> fatt = commonDAO.selectList("DispPrdMngEstmReqLst.selectReqProcAttrInfoList", map);            // 속성정보
			Map<String, Object> fdoc = commonDAO.select("DispPrdMngEstmReqLst.selectNewProductReqAtflInfo", map);                    // 첨부파일정보
			String fmem = commonDAO.selectStr("DispPrdMngEstmReqLst.selectNewProductReqMemo", map);                                    // 메모
			List<Map<String, String>> opList = commonDAO.selectList("DispPrdMngEstmReqLst.selectProductEstimateOption", map);        // 옵션정보
			List<Map<String, String>> addList = commonDAO.selectList("DispPrdMngEstmReqLst.selectProductEstimateAddOption", map);    // 추가옵션정보


			piReturnMap = pi1304Dao.sendNewProductReqPI(map, fprd, fatt, fdoc, fmem, opList, addList);

			if ("S".equals(StringUtil.getString(piReturnMap.get("ifProcRsltCd")))) {
				Map<String, Object> updateMap = new HashMap<>();
				updateMap.put("CO_CD", searchMap.get("coCd"));
				updateMap.put("OPRTR_ID", searchMap.get("usrId"));
				updateMap.put("MRO_REQ_NO", piReturnMap.get("mroReqNo"));
				updateMap.put("NEW_PRD_REQ_NO", newPrdReqNo);
				commonDAO.update("com.ssp.core.pr.prCore.updateMroReqNo", updateMap);

			} else {
				resultMap.put("RST_CD", "E");
				resultMap.put("RST_MSG", "상품 등록 요청에 실패하였습니다. 관리자에게 문의하세요.");
				throw new Exception();
			}
		} else {
			commonDAO.insert("DispPrdMngEstmReqLst.insertProductEstimateStatus", searchMap);
		}

		return resultMap;
	}

	/**
	 * <pre>
	 * 1. MethodName : insertProductEstimateStatus
	 * 2. ClassName  : PrProductEstimateServiceImpl.java
	 * 3. Comment    : 상품등록 요청
	 * 4. 작성자       : 윤주영
	 * 5. 작성일       : 2021.9. 06.
	 * </pre>
	 *
	 * @param commandMap
	 * @return
	 * @throws Exception
	 */
	public DT_MM03190_SSPF_response sendNewProductReqPI(Map<String, Object> map) throws Exception {
		MM03190_SSPF_SOBindingStub stub = null;
		DT_MM03190_SSPF_response res = null;

		try {
			String mPiUser = sspPropertyService.getString("wsdl.pi.user");
			String mPiPw = sspPropertyService.getString("wsdl.pi.pwd");
			String mPiHost = sspPropertyService.getString("wsdl.pi.url.host");
			String mPiSaveFile = sspPropertyService.getString("wsdl.pi.url.mm03190");

			String coCd = Objects.toString(map.get("CO_CD"), "");
			String langCd = Objects.toString(map.get("LANG_CD"), "");
			String prdReqNo = Objects.toString(map.get("NEW_PRD_REQ_NO"), "");

			stub = new MM03190_SSPF_SOBindingStub();
			stub.setUsername(mPiUser);
			stub.setPassword(mPiPw);
			stub._setProperty(Stub.ENDPOINT_ADDRESS_PROPERTY, mPiHost + mPiSaveFile);

			// 정보조회
			Map<String, Object> fprd = commonDAO.select("DispPrdMngEstmReqLst.selectNewProductReqDetail", map);                        // 요청상품정보
			List<Map<String, Object>> fatt = commonDAO.selectList("DispPrdMngEstmReqLst.selectReqProcAttrInfoList", map);            // 속성정보
			Map<String, Object> fdoc = commonDAO.select("DispPrdMngEstmReqLst.selectNewProductReqAtflInfo", map);                    // 첨부파일정보
			String fmem = commonDAO.selectStr("DispPrdMngEstmReqLst.selectNewProductReqMemo", map);                                    // 메모
			List<Map<String, String>> opList = commonDAO.selectList("DispPrdMngEstmReqLst.selectProductEstimateOption", map);        // 옵션정보
			List<Map<String, String>> addList = commonDAO.selectList("DispPrdMngEstmReqLst.selectProductEstimateAddOption", map);    // 추가옵션정보

			DT_MM03190_SSPF masterInfo = new DT_MM03190_SSPF();
			masterInfo.setXBUKRS(coCd);
			masterInfo.setXLANG(langCd);
			masterInfo.setXDATE(new SimpleDateFormat("yyyyMMdd").format(Calendar.getInstance().getTime()));
			masterInfo.setXTIME(new SimpleDateFormat("HHmmss").format(Calendar.getInstance().getTime()));

			DT_MM03190_SSPFOUT_NEW_PRD[] tprd = new DT_MM03190_SSPFOUT_NEW_PRD[1];                        // 요청상품정보
			DT_MM03190_SSPFOUT_NEW_PRD_ATTR[] tatt = new DT_MM03190_SSPFOUT_NEW_PRD_ATTR[fatt.size()];  // 속성정보
			DT_MM03190_SSPFOUT_NEW_PRD_DOC[] tdoc = new DT_MM03190_SSPFOUT_NEW_PRD_DOC[1];   // 첨부파일정보
			DT_MM03190_SSPFOUT_NEW_PRD_MEMO[] tmem = new DT_MM03190_SSPFOUT_NEW_PRD_MEMO[1];            // 메모

			// 요청상품정보
			tprd[0] = new DT_MM03190_SSPFOUT_NEW_PRD();
			tprd[0].setCO_CD(Objects.toString(fprd.get("CO_CD"), ""));                            /* 회사코드         */
			tprd[0].setNEW_PRD_REQ_NO(Objects.toString(fprd.get("NEW_PRD_REQ_NO"), ""));            /* 신규상품요청번호 */
			tprd[0].setREQ_PRD_NM(Objects.toString(fprd.get("REQ_PRD_NM"), ""));                    /* 요청상품명       */
			tprd[0].setBZPLC_ID(Objects.toString(fprd.get("BZPLC_ID"), ""));                        /* 사업장ID         */
			tprd[0].setOPR_UNIT_ID(Objects.toString(fprd.get("OPR_UNIT_ID"), ""));                    /* 운영단위ID       */
			tprd[0].setDEPT_CD(Objects.toString(fprd.get("DEPT_ID"), ""));                            /* 부서코드         */
			tprd[0].setMBR_ID(Objects.toString(fprd.get("REQPSN_ID"), ""));                            /* 회원ID           */
			tprd[0].setPRD_CLCD(Objects.toString(fprd.get("RP_MRO_PRD_CLCD"), ""));                    /* MRO상품분류코드  */
			tprd[0].setMNFR_NO(Objects.toString(fprd.get("RP_MNFR_NO"), ""));                        /* 제조사번호       */
			tprd[0].setORGPLC_CTRY_CD(Objects.toString(fprd.get("RP_ORGPLC_CTRY_CD"), ""));            /* 원산지국가코드   */
			tprd[0].setBASIS_UNIT_CD(Objects.toString(fprd.get("RP_BASIS_UNIT_CD"), ""));            /* 기본단위코드     */
			tprd[0].setBASIS_UNIT_QTY(Objects.toString(fprd.get("RP_BASIS_UNIT_QTY"), ""));            /* 기본단위수량     */
			tprd[0].setSELL_UNIT_CD(Objects.toString(fprd.get("RP_SELL_UNIT_CD"), ""));                /* 판매단위코드     */
			tprd[0].setSELL_UNIT_QTY(Objects.toString(fprd.get("SELL_UNIT_QTY"), ""));                /* 판매단위수량     */
			tprd[0].setHPE_SELL_UPRC(Objects.toString(fprd.get("HPE_SELL_UPRC_NUM"), ""));            /* 희망판매단가     */
			tprd[0].setCURR_UNIT_CD("KRW");                                                            /* 통화단위코드     */
			tprd[0].setCHM_MTL_YN(Objects.toString(fprd.get("CHM_MTL_YN"), ""));                    /* 화학물질여부     */
			tprd[0].setHPE_SELL_UNIT_QTY(Objects.toString(fprd.get("HPE_SELL_UNIT_QTY_NUM"), ""));    /* 희망판매단위수량 */
			tprd[0].setPUB_ONLY_SPR_CD("43");                                                        /* 공용(P)전용(E)구분코드 */
			tprd[0].setREQ_RSN(Objects.toString(fprd.get("REQ_RSN"), ""));                            /* 요청사유         */
			tprd[0].setREPR_ATTR(Objects.toString(fprd.get("PI_REQ_PRVL"), ""));                    /* 대표규격         */
			tprd[0].setEMP_NO(Objects.toString(fprd.get("RP_EMP_NO"), ""));                            /* 사원번호         */

			// 속성정보
			for (int i = 0; i < fatt.size(); i++) {
				Map<String, Object> att = fatt.get(i);
				tatt[i] = new DT_MM03190_SSPFOUT_NEW_PRD_ATTR();
				tatt[i].setCO_CD(Objects.toString(att.get("CO_CD"), ""));  /* 회사코드           */
				tatt[i].setNEW_PRD_REQ_NO(Objects.toString(att.get("NEW_PRD_REQ_NO"), ""));  /* 신규상품요청번호   */
				tatt[i].setREQ_SEQ(Objects.toString(att.get("REQ_SEQ"), ""));  /* 요청순번           */
				tatt[i].setATTR_CD(Objects.toString(att.get("ATTR_CD"), ""));  /* 속성코드           */
				//tatt[i].setNEW_PRD_REQ_PRVL(Objects.toString(att.get("PRVL"), ""));  /* 신규상품요청속성값 */
				if ("A00181".equals(att.get("ATTR_CD"))) {
					tatt[i].setNEW_PRD_REQ_PRVL("[전시상품]구매전용메모확인필수");
				} else {
					tatt[i].setNEW_PRD_REQ_PRVL("");
				}
			}

			// 첨부파일정보
			tdoc[0] = new DT_MM03190_SSPFOUT_NEW_PRD_DOC();
			tdoc[0].setCO_CD(coCd);
			tdoc[0].setNEW_PRD_REQ_NO(prdReqNo);
			tdoc[0].setDOC_REG_ID(Objects.toString(fdoc.get("DOC_REG_ID"), ""));
			tdoc[0].setDOC_REG_SEQ(Objects.toString(fdoc.get("DOC_REG_SEQ"), ""));
			tdoc[0].setATFL_TP(Objects.toString(fdoc.get("ATFL_TP"), ""));
			tdoc[0].setSTOR_PLC_SPR_VAL(Objects.toString(fdoc.get("STOR_PLC_SPR_VAL"), ""));
			tdoc[0].setATTC_STOR_PATH(Objects.toString(fdoc.get("ATTC_STOR_PATH"), ""));
			tdoc[0].setORI_ATFL_NM(Objects.toString(fdoc.get("ORI_ATFL_NM"), ""));
			tdoc[0].setSERVER_ATFL_NM(Objects.toString(fdoc.get("SERVER_ATFL_NM"), ""));
			tdoc[0].setSAP_DOC_ID(Objects.toString(fdoc.get("SAP_DOC_ID"), ""));

			String op = "";
			for (Map<String, String> attr : opList) {
				String nm = attr.get("OPTN_NM");
				String vl = attr.get("OPTN_ITM_SLT_CTS");

				op += nm + ":" + vl + ";";
			}

			String add = "";
			for (Map<String, String> attr : addList) {
				String nm = attr.get("ADD_OPTN_NM");
				String vl = attr.get("ADD_OPTN_ITM_SLT_CTS");

				add += nm + ":" + vl + ";";
			}

			// 메모
			tmem[0] = new DT_MM03190_SSPFOUT_NEW_PRD_MEMO();
			tmem[0].setCO_CD(coCd);
			tmem[0].setNEW_PRD_REQ_NO(prdReqNo);
			tmem[0].setMEMO_TP_CD("15");
			tmem[0].setMEMO(op + add + fmem);

			masterInfo.setOUT_NEW_PRD(tprd);
			masterInfo.setOUT_NEW_PRD_ATTR(tatt);
			masterInfo.setOUT_NEW_PRD_DOC(tdoc);
			masterInfo.setOUT_NEW_PRD_MEMO(tmem);

			// PI I/F 로그 생성
			Map<String, Object> logMap = new HashMap<String, Object>();

			logMap.put("ifSystemId", "SSP");
			logMap.put("ifPiId", "PI_3190");
			logMap.put("ifMsgId", (new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date())) + "00000000");
			logMap.put("ifMsgSeq", "1");
			logMap.put("coCd", Objects.toString(fprd.get("CO_CD"), ""));
			logMap.put("syncYn", "Y");

//            coPiRcvLogService.insertCoPiRcvLog(logMap, masterInfo, (Class<?>)masterInfo.getClass());
			Gson gson = new Gson();
			String j = gson.toJson(masterInfo);

			logMap.put("sndDataClassNm", masterInfo.getClass().getName());
			logMap.put("sndDataCts", j);

			commonDAO.insert("com.ssp.core.co.coPiRcvLog.insertPiRcvLog", logMap);

			res = stub.MM03190_SSPF_SO(masterInfo);
		} catch (Exception e) {
			if (res == null) {
				Map<String, Object> log = new HashMap<String, Object>();
				log.put("IF_SYSTEM_ID", "SSP");
				log.put("IF_PI_ID", "PI_3190");
				log.put("IF_MSG_ID", (new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date())) + "00000000");
				log.put("IF_MSG_SEQ", "1");
				log.put("IF_PROC_RSLT_CD", "X");  // 데이터 재 전송 대상

				commonDAO.update("com.ssp.core.co.coPiRcvLog.updatPiRcvLogStatus", log);
			}
		}

		return res;
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteProductEstimateLayoutReset
	 * 2. ClassName  : PrProductEstimateServiceImpl.java
	 * 3. Comment    : 레이아웃 초기화
	 * 4. 작성자       : 윤주영
	 * 5. 작성일       : 2021.9. 06.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	public int deleteProductEstimateLayoutReset(Map<String, Object> searchMap) throws Exception {
		return commonDAO.delete("DispPrdMngEstmReqLst.deleteProductEstimateLayoutReset", searchMap);
	}

	@Override
	public void estmProcCompleteSendMail(Map<String, Object> joinReqInfo) {
		Map<String, Object> mailParamMap = new HashMap();
		try {
			//승인 이메일 발송 파라미터 세팅
			mailParamMap.put("eventId", "20056");
			mailParamMap.put("sspEvtId", "20056-01");
			mailParamMap.put("mbrId", joinReqInfo.get("MBR_ID"));

			// [2] 이메일 발송 로그테이블 등록
			coCommonSendDao.insertEmailTransLogInfo(mailParamMap);

			mailParamMap.put("subInfoYn", "Y");    //이메일 디테일 유무
			mailParamMap.put("toEmail", joinReqInfo.get("EMAIL_ADDR"));    //수신자 이메일
			mailParamMap.put("toName", joinReqInfo.get("MBR_NM"));    //수신자 이름
			mailParamMap.put("fromEmail", sspPropertyService.getString("mail.ssp"));    //발신자 이메일

			if ("20".equals(joinReqInfo.get("MALL_SPR_CD"))) {
				mailParamMap.put("fromName", "서브원스토어 G-lab");    //발신자 이름
			} else {
				mailParamMap.put("fromName", "서브원스토어");    //발신자 이름
			}

			mailParamMap.put("title", joinReqInfo.get("MBR_NM") + " 님, 요청하신 전문 제작품이 견적 완료 되었습니다.");   //메일 제목

			if ("20".equals(joinReqInfo.get("MALL_SPR_CD"))) {
				mailParamMap.put("mapping1", sspPropertyService.getString("mail.resource.root")
					+ sspPropertyService.getString("mail.resource.rnd.logo"));    //치환값1
			} else {
				mailParamMap.put("mapping1", sspPropertyService.getString("mail.resource.root")
					+ sspPropertyService.getString("mail.resource.logo"));    //치환값1
			}

			mailParamMap.put("mapping2", "전문제작품 견적 완료 안내");    //치환값2
			mailParamMap.put("mapping3", joinReqInfo.get("MBR_NM") + " 님, 요청하신 " + joinReqInfo.get("DISP_PRD_NM") + " 의 견적이 완료 되었습니다.");   //치환값3
			mailParamMap.put("mapping4", "견적 완료 내역은 마이페이지>상품요청>전문제작품 견적현황에서 확인하실 수 있습니다.");    //치환값4
			mailParamMap.put("mapping5", "가격 및 배송정보 확인 후 주문 필요 시, 위 메뉴에서 상품등록요청 하시면 됩니다.");    //치환값5
			mailParamMap.put("mapping6", "");    //치환값6
			mailParamMap.put("mapping7", "");    //치환값7
			mailParamMap.put("mapping8", "");    //치환값8
			mailParamMap.put("mapping9", "");    //치환값9
			mailParamMap.put("mapping10", sspPropertyService.getString("front.domain"));    //치환값10(서브원스토어 URL경로)
			mailParamMap.put("sendTime", "");    //예약전송일시
			mailParamMap.put("userId", joinReqInfo.get("MBR_ID"));   //회원ID

			mailParamMap.put("mstSeq", "1");
			mailParamMap.put("reptNo", "1");
			mailParamMap.put("reptSeq", "1");
			mailParamMap.put("transEtcFds1", joinReqInfo.get("ESTM_REQ_NO"));    //요청번호
			mailParamMap.put("transEtcFds2", joinReqInfo.get("PRD_NM"));   //상품명
			mailParamMap.put("transEtcFds3", joinReqInfo.get("ESTM_SBM_AMT"));   //판매가
			mailParamMap.put("transEtcFds4", joinReqInfo.get("MIN_ORD_QTY"));   //최소주문수량
			mailParamMap.put("transEtcFds5", joinReqInfo.get("MULT_ODR_UNIT"));   //배수주문단위
			mailParamMap.put("transEtcFds6", joinReqInfo.get("DLV_LT"));   //배송 L/T
			mailParamMap.put("transEtcFds7", joinReqInfo.get("ESTM_VLD_DT"));   //견적 유효 기간
			mailParamMap.put("transEtcFds8", joinReqInfo.get("EXCEPT_END_RSN"));   //예외종료사유
			mailParamMap.put("transEtcFds9", sspPropertyService.getString("mail.resource.root") + "/pr/pr-product-estimate-detail.do?estmReqNo=" + joinReqInfo.get("ESTM_REQ_NO") + "&prdClcd=" + joinReqInfo.get("PRD_CLCD"));   //전문제작품 견적상세

			coCommonSendDao.insertCoSendMail(mailParamMap);     //[3] 이메일전송정보마스터 등록
			coCommonSendDao.insertCoSendMailSub(mailParamMap);  //[4] 이메일전송정보상세 등록
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
	}

	@Transactional
	public void saveRndDispEstmAddOptions(Map<String, Object> param) throws Exception {
		commonDAO.insert("DispPrdMngEstmReqLst.insertRndDispEstmAddOptMapp", param);
	}

	public Map<String, Object> selectReqProcStat(Map<String, Object> param) throws Exception {
		return commonDAO.select("DispPrdMngEstmReqLst.selectReqProcStat", param);
	}

}