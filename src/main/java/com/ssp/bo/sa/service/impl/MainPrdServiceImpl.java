package com.ssp.bo.sa.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.sa.dao.MainPrdDao;
import com.ssp.bo.sa.dao.SaComDao;
import com.ssp.bo.sa.service.MainPrdService;
import com.ssp.bo.sa.service.SaComService;
import com.ssp.core.co.dao.CoCommonDao;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 *
 * <pre>
 * @desc    메인상품 Serviceimpl
 * @package com.ssp.bo.sa.service.impl
 * <pre>
 *
 * @author
 * @since 2022. 03. 02.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.02.		87minho	최초작성
 */
@Service("mainPrdService")
public class MainPrdServiceImpl implements MainPrdService {
	private final Logger logger = LoggerFactory.getLogger(MainPrdServiceImpl.class);

	@Autowired
	private MainPrdDao mainPrdDao;

	@Autowired
	private SaComDao saComDao;

	@Autowired
	private CoCommonDao coCommonDao;

	@Autowired
	protected SspPropertyService propertiesService;

	@Autowired
	private SaComService saComService;

	private static final int MAIN_PRD_CATG_BEST =  20000; // 카테고리 BEST 상품 메인상품ID

	/**
	*
	* <pre>
	* 1. MethodName : selectMainPrdList
	* 2. ClassName : MainPrdServiceImpl
	* 3. Comment : 메인상품 목록 조회
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022-03-02
	* </pre>
	*
	* @param searchInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult selectMainPrdList(Map<String, Object> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
		//searchMap.put("coCd", "1000");
		List<Map<String,Object>> list = new ArrayList<>();
		searchMap.put("mainPrdCatgBestId", MAIN_PRD_CATG_BEST);
		list = mainPrdDao.selectMainPrdList(searchMap);

		//리턴값 set
		result.addDataSet("ds_output", list);
		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectMainPrdDtlList
	* 2. ClassName : MainPrdServiceImpl
	* 3. Comment : 메인상품 상세 목록 조회
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022-03-03
	* </pre>
	*
	* @param searchInfo, oprUnitList
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult selectMainPrdDtlList(Map<String, Object> searchInfo, List<Map<String, Object>> oprUnitList, OdOrderComm odComm) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
		searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
		
		// 게시구분이 운영단위일 경우에만 운영단위 세팅
		String expsNoticSprCd =  StringUtil.getString(searchMap.get("expsNoticSprCd"));
		if("30".equals(expsNoticSprCd) || "50".equals(expsNoticSprCd)
				|| "60".equals(expsNoticSprCd) || "70".equals(expsNoticSprCd)) {
			searchMap.put("oprUnitList", oprUnitList);
		}

		List<Map<String,Object>> list = new ArrayList<>();

		int totalCount = mainPrdDao.selectMainPrdDtlListCnt(searchMap);

		if( totalCount > 0 ) {
			list = mainPrdDao.selectMainPrdDtlList(searchMap);
		}

		//리턴값 set
		result.addVariable( "totalCount", totalCount );
		result.addDataSet("ds_output", list);
		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : saveMainPrd
	* 2. ClassName : MainPrdServiceImpl
	* 3. Comment : 메인상품 저장
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022-03-10
	* </pre>
	*
	* @param saveInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult saveMainPrd(Map<String, Object> saveInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(saveInfo);
		Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();

		if (sessionsAdmin != null) {
			saveMap.put("regpsnId", sessionsAdmin.get("OPRTR_ID"));
			saveMap.put("updpsnId", sessionsAdmin.get("OPRTR_ID"));
		}

		if(StringUtil.getString(saveMap.get("autoMnlSprCd")).equals("20")) { // 수동일때 데이터 값 수정
			saveMap.put("autoLogicTgtCd", null);
			saveMap.put("slamtWgt", null);
			saveMap.put("odrCntWgt", null);
			saveMap.put("invnPrdWgt", null);
		}
		if((int) saveMap.get("mainPrdExpsPstId") == 0) {
			mainPrdDao.insertMainPrd(saveMap);
		} else {

			// docRegId 가 빈 값이 아니고, atflNm이 빈 값이면 지운걸로 판단
			if (!Objects.equals(StringUtil.getString(saveMap.get("docRegId")), "") && Objects.equals(StringUtil.getString(saveMap.get("atflNm")), "") ) {
				String contextRealPath = propertiesService.getString("file.path.root");

				//docRegId 있으면 기존 파일 삭제함
				HashMap<String, Object> delMap = new HashMap<>();
				delMap.put("docRegId", StringUtil.getString(saveMap.get("docRegId")));
				delMap.put("docRegSeq", StringUtil.getString(saveMap.get("docRegSeq")));
				int fileDelRtn = coCommonDao.deleteFileInfo(delMap);
				//실제 경로 삭제
				if(fileDelRtn <= 0 ) {
					//throw new MessageException(-100, "첨부파일 삭제 실패");
				} else {
					// 실 파일 삭제
					saComService.deleteFile(contextRealPath, StringUtil.getString(saveMap.get("atflStorPath")), StringUtil.getString(saveMap.get("oriAtflNm")));
				}
			}

			mainPrdDao.updateMainPrd(saveMap);
		}
		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : updateMainPrdDtlSo
	* 2. ClassName : MainPrdServiceImpl
	* 3. Comment : 메인상품 상세 순서 저장
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022-03-07
	* </pre>
	*
	* @param saveInfoList
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult updateMainPrdDtlSo(List<Map<String, Object>> saveInfoList, Map<String, Object> chkInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
		int rtn = 0;
		String oprtrId = "";

		try {
			if (sessionsAdmin != null) {
				oprtrId = sessionsAdmin.get("OPRTR_ID").toString();
			}

			Map<String, Object> chkMap = CommonUtil.toCamelCaseMap(chkInfo);

			chkMap.put("expsNoticSprCd", "10");
			int chkCnt = mainPrdDao.selectMainPrdSprAllCnt(chkMap);

			if(chkCnt < Integer.parseInt(StringUtil.getString(chkMap.get("prdReqCnt")))) {
				String msg = "사용상태 및 전체구분 상품을 최소 " + chkMap.get("prdReqCnt") + "개 등록해야합니다";
				throw new MessageException(-100, msg);
			}

			for(Map<String, Object> saveInfo : saveInfoList) {
				Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(saveInfo);
				saveMap.put("updpsnId", oprtrId);

				rtn += mainPrdDao.updateMainPrdDtlSo(saveMap);
			}
			if (rtn < 0) {
				throw new MessageException(-100, "저장에 실패하였습니다");
			}
		} catch(MessageException e) {
			if( e.getCode() == -100 ) {
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
	*
	* <pre>
	* 1. MethodName : insertMainPrdDtl
	* 2. ClassName : MainPrdServiceImpl
	* 3. Comment : 메인상품 상세 등록
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022-03-04
	* </pre>
	*
	* @param saveInfo, oprUnitInfoList
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult insertMainPrdDtl(Map<String, Object> saveInfo, List<Map<String, Object>> oprUnitInfoList) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(saveInfo);
		Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();

		String expsNoticSprCd = StringUtil.getString(saveMap.get("expsNoticSprCd"));

		int rtn = 0;

		try {
			if (sessionsAdmin != null) {
				saveMap.put("regpsnId", sessionsAdmin.get("OPRTR_ID"));
				saveMap.put("updpsnId", sessionsAdmin.get("OPRTR_ID"));
			}

			String sPrdIds = StringUtil.getString(saveMap.get("prdIds"), "");
			String[] arrPrdId= sPrdIds.split(",");
			saveMap.put("prdIdArr", arrPrdId);
			
			if("10".equals(expsNoticSprCd) || "20".equals(expsNoticSprCd)) { // 게시구분 : 전체, 로그인전체

				for(String prdId : arrPrdId) {
					saveMap.put("prdId", prdId);
					// 등록시 전시순서 NULL로
//					int dispSo = mainPrdDao.selectMainPrdDtlDispSo(saveMap);
//					saveMap.put("dispSo", dispSo);

					mainPrdDao.insertMainPrdDtl(saveMap);
				}

			} else if("30".equals(expsNoticSprCd) || "50".equals(expsNoticSprCd)
						|| "60".equals(expsNoticSprCd) || "70".equals(expsNoticSprCd)) { // 게시구분 : 로그인 운영단위

				for( Map<String, Object> oprUnitInfo : oprUnitInfoList) {
					Map<String, Object> oprUnitMap = CommonUtil.toCamelCaseMap(oprUnitInfo);
					for(String prdId : arrPrdId) {
						saveMap.put("prdId", prdId);
						saveMap.put("bzplcId", StringUtil.getString(oprUnitMap.get("bzplcId"), ""));
						saveMap.put("oprUnitId", StringUtil.getString(oprUnitMap.get("oprUnitId"), ""));

						// 등록시 전시순서 NULL로
//						int dispSo = mainPrdDao.selectMainPrdDtlDispSo(saveMap);
//						saveMap.put("dispSo", dispSo);

						mainPrdDao.insertMainPrdDtl(saveMap);
					}
				}

			}
		} catch(MessageException e) {
			if(e.getCode() == -100) {
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
	*
	* <pre>
	* 1. MethodName : deleteMainPrdDtl
	* 2. ClassName : MainPrdServiceImpl
	* 3. Comment : 메인상품 상세 삭제
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022-03-08
	* </pre>
	*
	* @param deleteInfoList
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult deleteMainPrdDtl(List<Map<String, Object>> deleteInfoList) throws Exception {
		NexacroResult result = new NexacroResult();
		int rtn = 0;

		for( Map<String, Object> deleteInfo : deleteInfoList) {
			Map<String, Object> deleteMap = CommonUtil.toCamelCaseMap(deleteInfo);

			rtn += mainPrdDao.deleteMainPrdDtl(deleteMap);
		}


		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : deleteMainPrd
	* 2. ClassName : MainPrdServiceImpl
	* 3. Comment : 메인상품 삭제(삭제된 카테고리의 garbage 데이터를 삭제하는 용도)
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022-03-08
	* </pre>
	*
	* @param deleteInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult deleteMainPrd(Map<String, Object> deleteInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		int rtn = 0;
		try {
			Map<String, Object> deleteMap = CommonUtil.toCamelCaseMap(deleteInfo);

			rtn = mainPrdDao.deleteMainPrd(deleteMap);
			if(rtn > 0) {
				mainPrdDao.deleteMainPrdRelDtl(deleteMap);
			} else {
				throw new MessageException(-100, "삭제에 실패하였습니다");
			}
		} catch(MessageException e) {
			if( e.getCode() == -100 ) {
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
	*
	* <pre>
	* 1. MethodName : selectPrdInfo
	* 2. ClassName : MainPrdServiceImpl
	* 3. Comment : 상품 상세
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022-03-11
	* </pre>
	*
	* @param searchInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult selectPrdInfo(Map<String, Object> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);

		Map<String,Object> map = new HashMap<String, Object>();

		map = saComDao.selectPrdInfo(searchMap);

		//리턴값 set
		result.addDataSet("ds_output", map);
		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectMainPrdIdDuplCheckList
	* 2. ClassName : MainPrdComServiceImpl
	* 3. Comment : 메인상품ID 유효성 검사
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022.04.14.
	* </pre>
	*
	* @param searchMap, searchPrdIdCheckMapList
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectMainPrdIdCheckList(Map<String, Object> chkInfo, List<Map<String, Object>>oprUnitInfoList, List<Map<String, Object>> searchPrdIdCheckMapList) throws Exception 	{
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> resultList = new ArrayList<Map<String, Object>>();

		Map<String, Object> chkMap = CommonUtil.toCamelCaseMap(chkInfo);
		Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();

		String expsNoticSprCd = StringUtil.getString(chkMap.get("expsNoticSprCd"));

		int rtn = 0;
		String sQueryString = "";

		String sPrdIds = StringUtil.getString(chkMap.get("prdIds"), "");
		String[] arrPrdId= sPrdIds.split(",");

		if("10".equals(expsNoticSprCd) || "20".equals(expsNoticSprCd)) { // 게시구분 : 전체, 로그인전체

			for( Map<String, Object> searchData : searchPrdIdCheckMapList) {
				Map<String, Object> searchDataMap = CommonUtil.toCamelCaseMap(searchData);

				String sCoCd = StringUtil.getString(chkMap.get("coCd"));
				String sPrdId = StringUtil.getString(searchDataMap.get("prdId"));
				String sMainPrdExpsPstId = StringUtil.getString(chkMap.get("mainPrdExpsPstId"));
				String sChnTpCd = StringUtil.getString(chkMap.get("chnTpCd"));
				String mallSprCd = StringUtil.getString(chkMap.get("mallSprCd"));

				sQueryString = sQueryString + " SELECT ";
				sQueryString = sQueryString + "'" + sCoCd + "'" + " AS CO_CD, ";
				sQueryString = sQueryString + sMainPrdExpsPstId + " AS MAIN_PRD_EXPS_PST_ID, ";
				sQueryString = sQueryString + "'" + sChnTpCd + "'" + " AS CHN_TP_CD, ";
				sQueryString = sQueryString + "'" + mallSprCd + "'" + " AS MALL_SPR_CD, ";
				sQueryString = sQueryString + "'"  + expsNoticSprCd + "'"  + " AS EXPS_NOTIC_SPR_CD, ";
				sQueryString = sQueryString + "''" + " AS BZPLC_ID, ";
				sQueryString = sQueryString + "''" + " AS OPR_UNIT_ID, ";
				sQueryString = sQueryString + "'"  + sPrdId + "'" + " AS PRD_ID_PARAM,";
				sQueryString = sQueryString + " LPAD(" + sPrdId + ", 18, '0') AS PRD_ID ";
				sQueryString = sQueryString + " FROM DUAL ";
				sQueryString = sQueryString + " UNION ALL ";
			}

			chkMap.put("queryString", sQueryString.substring(0, sQueryString.length()-10));

			// 중복 상품 조회
			resultList = mainPrdDao.selectMainPrdIdDuplCheckList(chkMap);

		} else if("30".equals(expsNoticSprCd) || "50".equals(expsNoticSprCd)
					|| "60".equals(expsNoticSprCd) || "70".equals(expsNoticSprCd)) { // 게시구분 : 로그인 운영단위

			for( Map<String, Object> oprUnitInfo : oprUnitInfoList) {
				Map<String, Object> oprUnitMap = CommonUtil.toCamelCaseMap(oprUnitInfo);
				String sBzplcId = StringUtil.getString(oprUnitMap.get("bzplcId"), "");
				String sOprUnitId = StringUtil.getString(oprUnitMap.get("oprUnitId"), "");

				for( Map<String, Object> searchData : searchPrdIdCheckMapList) {
					Map<String, Object> searchDataMap = CommonUtil.toCamelCaseMap(searchData);

					String sCoCd = StringUtil.getString(chkMap.get("coCd"));
					String sPrdId = StringUtil.getString(searchDataMap.get("prdId"));
					String sMainPrdExpsPstId = StringUtil.getString(chkMap.get("mainPrdExpsPstId"));
					String sChnTpCd = StringUtil.getString(chkMap.get("chnTpCd"));
					String mallSprCd = StringUtil.getString(chkMap.get("mallSprCd"));

					sQueryString = sQueryString + " SELECT ";
					sQueryString = sQueryString + "'" + sCoCd + "'" + " AS CO_CD, ";
					sQueryString = sQueryString + sMainPrdExpsPstId + " AS MAIN_PRD_EXPS_PST_ID, ";
					sQueryString = sQueryString + "'" + sChnTpCd + "'" + " AS CHN_TP_CD, ";
					sQueryString = sQueryString + "'" + mallSprCd + "'" + " AS MALL_SPR_CD, ";
					sQueryString = sQueryString + "'"  + expsNoticSprCd + "'"  + " AS EXPS_NOTIC_SPR_CD, ";
					sQueryString = sQueryString + "'"  + sBzplcId + "'" + " AS BZPLC_ID, ";
					sQueryString = sQueryString + "'"  + sOprUnitId + "'" + " AS OPR_UNIT_ID, ";
					sQueryString = sQueryString + "'"  + sPrdId + "'" + " AS PRD_ID_PARAM,";
					sQueryString = sQueryString + " LPAD('" + sPrdId + "', 18, '0') AS PRD_ID ";
					sQueryString = sQueryString + " FROM DUAL ";
					sQueryString = sQueryString + " UNION ALL ";
				}
			}

			chkMap.put("queryString", sQueryString.substring(0, sQueryString.length()-10));

			// 중복 상품 조회
			resultList = mainPrdDao.selectMainPrdIdDuplCheckList(chkMap);
		}

		return resultList;
	}

}