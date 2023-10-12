package com.ssp.bo.cc.service.impl;


import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.dao.CustDvlplcDao;
import com.ssp.bo.cc.service.CustDvlplcService;
import com.ssp.core.cc.dao.Pi1205Dao;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 * &#64;title  배송지 관리
 * &#64;desc 배송지 관리 Implementation
 * &#64;package com.serveone.cc.service.impl
 * </pre>
 * 
 * @author
 * @since 2022. 01. 25
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2022.02.09 최초작성
 */
@Service("custDvlplcService")
public class CustDvlplcServiceImpl implements CustDvlplcService {
	
	@Autowired
	private CustDvlplcDao dvplcMngDao;
	
	
	@Autowired
	private Pi1205Dao pi1205Dao;
	
    @Autowired
	protected SspPropertyService propertiesService;
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : insertDvplcInfo
	 * 2. ClassName  : CustDvlplcServiceImpl
	 * 3. Comment    : 배송지 등록
	 * 4. 작성자      : YOO CHANGHO
	 * 5. 작성일      : 2022.02.09
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	@Transactional
	public Map<String, Object> insertDvplcInfo(Map<String, Object> paramMap) throws Exception { 
		Map<String, Object> result = new HashMap<String, Object>();
		Map<String, Object> paramCamelMap = CommonUtil.toCamelCaseMap(paramMap);
		
		//기본배송지여부 Y인경우 기존 Y인 기본배송지 N으로 UPDATE 후 기본배송지 INSERT
		List<String> lsDlvplcIds = new ArrayList<String>();
		//사용유무 Y 인 기본 배송지가 없을 경우 새로 등록되는 배송지는 기본배송지로 등록되게 한다 ssp-2847
		int dlvplcCnt = dvplcMngDao.selectDlvplcBasisCnt(paramCamelMap);
		if(dlvplcCnt==0) {
			paramCamelMap.put("basisDlvplcYn","Y");
		}
			
		if("Y".equals(paramCamelMap.get("basisDlvplcYn"))) {
			//기존의 기본 배송지 정보 조회
			List<Map<String, Object>>beforeResultList = dvplcMngDao.selectBeforeDlvplcBasisInfo(paramCamelMap);
			
			dvplcMngDao.updateDlvPlcN(paramCamelMap);                       // 추가배송지로 일괄 변경
			
			for(Map<String, Object> beforeResultMap : beforeResultList) {
				lsDlvplcIds.add((String) beforeResultMap.get("DLVPLC_ID"));		// 기존의 기본배송지 배송지ID ADD
			}
		}
		
		int returnCnt = dvplcMngDao.insertDvplcInfo(paramCamelMap);
		if(returnCnt <= 0) {
			throw new Exception("등록 실패");
		}
		
		lsDlvplcIds.add((String) paramCamelMap.get("dlvplcId"));            // 새로 등록한 배송지ID
		
		// PI 1205 호출
		Map<String, Object> piMap = new HashMap<String, Object>();
		piMap.put("coCd"      , paramCamelMap.get("coCd") );
		piMap.put("dlvplcIds" , lsDlvplcIds               );
		
		pi1205Dao.publishInsert(piMap);
		
		return result;
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectDlvplcInfo
	 * 2. ClassName  : CustDvlplcServiceImpl
	 * 3. Comment    : 배송지 단일조회
	 * 4. 작성자      : YOO CHANGHO
	 * 5. 작성일      : 2022.02.10
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public Map<String, Object> selectDlvplcInfo(Map<String, Object> paramMap) throws Exception {
		Map<String, Object> paramCamelMap = CommonUtil.toCamelCaseMap(paramMap);
		return dvplcMngDao.selectDlvplcInfo(paramCamelMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteDlvPlcUseYn
	 * 2. ClassName  : CustDvlplcServiceImpl
	 * 3. Comment    : 배송지 삭제처리
	 * 4. 작성자      : YOO CHANGHO
	 * 5. 작성일      : 2022.02.10
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	@Transactional
	public Map<String, Object> deleteDlvPlcUseYn(Map<String, Object> paramMap) throws Exception {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		Map<String, Object> paramCamelMap = CommonUtil.toCamelCaseMap(paramMap);
		
		//기본배송지 여부 조회
		int deleteChk = dvplcMngDao.selectBasisDlvplcCount(paramCamelMap);
		if(deleteChk > 0) {
			//해당 배송지가 기본배송지인 경우 삭제 불가
			resultMap.put("SUCCESS_YN","N");
			resultMap.put("RETURN_MSG","기본 배송지는 미사용처리를 할 수 없습니다.");
		} else {
			//삭제처리
			int returnCnt = dvplcMngDao.deleteDlvPlcUseYn(paramCamelMap);
			if(returnCnt < 1) {
				throw new Exception("삭제 실패");
			}else {
				// PI 1205 호출
				Map<String, Object> piMap = new HashMap<String, Object>();
				piMap.put("coCd"      , paramCamelMap.get("coCd") );
				piMap.put("dlvplcId" , paramCamelMap.get("dlvplcId"));
				
				pi1205Dao.publishDelete(piMap);
				
				resultMap.put("SUCCESS_YN","Y");
				resultMap.put("RETURN_MSG","완료 되었습니다.");
			}
		}
		return resultMap;
	}

	/**
	 * 
	 * <pre>
	 * 1. MethodName : selectDlvplcList
	 * 2. ClassName  : CustDvlplcServiceImpl
	 * 3. Comment    : 배송지 리스트 조회
	 * 4. 작성자      : YOO CHANGHO
	 * 5. 작성일      : 2022.02.15
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectDlvplcList(Map<String, Object> paramMap2, CCUtils ccUtils) throws Exception {
		NexacroResult result = new NexacroResult();
		paramMap2.put("SES_ID", ccUtils.getSession().get("SES_ID").toString());
		
		Map<String, Object> paramMap = CommonUtil.toCamelCaseMap(paramMap2);
		System.out.println("paramMap : "+paramMap.toString());
		//카운트
		int totalCount = dvplcMngDao.selectDlvplcListNewCnt(paramMap);
		
		//조회
		List<Map<String,Object>> list = new ArrayList<Map<String,Object>>(); 
		
		list = dvplcMngDao.selectDlvplcListNew(paramMap);
		DecimalFormat fmt = new DecimalFormat("###,###");
		int tot = totalCount;

		//리턴값 set
		result.addDataSet(  "ds_output1"      , list             );
        result.addVariable( "totalCount"      , totalCount       );
        result.addVariable( "totalCountComma" , fmt.format(tot)  );
        
		return result;
	}

	@Override
	public NexacroResult selectMbrBasicInfo(Map<String, Object> paramMap) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> paramCamelMap = CommonUtil.toCamelCaseMap(paramMap);
		result.addDataSet("ds_mbrOutput",dvplcMngDao.selectMbrBasicInfo(paramCamelMap));
		return result;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectMbrBasicInfoList
	 * 2. ClassName  : CustDvlplcServiceImpl
	 * 3. Comment    : 회원단일조회 팝업 회원조회
	 * 4. 작성자      : YOO CHANGHO
	 * 5. 작성일      : 2022.02.15
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectMbrBasicInfoList(Map<String, Object> paramMap2) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> paramMap = CommonUtil.toCamelCaseMap(paramMap2);
		if(paramMap.get("bzplcNm") != null) {
			List<String> paramAList = new ArrayList<String>();
			String[] splitStr = paramMap.get("bzplcNm").toString().split(",");
			
			for(int i=0; i<splitStr.length; i++){
				paramAList.add(splitStr[i]);
			}
			
			paramMap.put("bzplcNm", paramAList);
		}
		
		if(paramMap.get("bzplcId") != null) {
			List<String> paramAList = new ArrayList<String>();
			String[] splitStr = paramMap.get("bzplcId").toString().split(",");
			
			for(int i=0; i<splitStr.length; i++){
				paramAList.add(splitStr[i]);
			}
			
			paramMap.put("bzplcId", paramAList);
		}
		
		//카운트
		int totalCount = dvplcMngDao.selectMbrBasicListCnt(paramMap);
		
		//조회
		List<Map<String,Object>> list = dvplcMngDao.selectMbrBasicList(paramMap);
		
		//리턴값 set
        result.addVariable( "totalCount", totalCount);
        result.addDataSet("ds_output1", list);
        
		return result;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteDlvplcInfo
	 * 2. ClassName  : CustDvlplcServiceImpl
	 * 3. Comment    : 다중 배송지 삭제처리
	 * 4. 작성자      : YOO CHANGHO
	 * 5. 작성일      : 2022.02.15
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult deleteDlvplcInfo(Map<String, Object> paramMap2) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> paramMap = CommonUtil.toCamelCaseMap(paramMap2);
		Map<String, Object> resultMap = new HashMap<String, Object>();
		List<String> paramArrList = new ArrayList<String>();
		if(paramMap.get("dlvplcId") != null) {
			String[] splitStr = paramMap.get("dlvplcId").toString().split(",");
			
			for(int i=0; i<splitStr.length; i++){
				paramArrList.add(splitStr[i]);
			}
			
			paramMap.put("dlvplcId", paramArrList);
		}
		
		int chkBasisDlvplcYnCount = dvplcMngDao.selectBasisDlvplcListCount(paramMap);
		if(chkBasisDlvplcYnCount > 0) {
			resultMap.put("SUCCESS_YN", "N");
			resultMap.put("RETURN_MSG", "기본 배송지는 삭제할 수 없습니다.");
		}else {
			int arrayCount  = paramArrList.size();
			int updateCount = dvplcMngDao.deleteDlvplcInfo(paramMap);
			
			// PI 1205 호출
			Map<String, Object> piMap = new HashMap<String, Object>();
			piMap.put("coCd"      , "1000" );
			piMap.put("dlvplcIds" , paramArrList             );
			pi1205Dao.publishUpdate(piMap);
			
			if(arrayCount == updateCount) {
				resultMap.put("SUCCESS_YN", "Y");
				resultMap.put("RETURN_MSG", "삭제 되었습니다.");
			}else {
				resultMap.put("SUCCESS_YN", "N");
				resultMap.put("RETURN_MSG", "관리자에게 문의하세요.");
			}
		}
		
		result.addDataSet("ds_output1", resultMap);
		
		return result;
	}

	@Override
	public NexacroResult updateMbrDlvplcBasisYn(Map<String, Object> paramMap) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		Map<String, Object> camelParamMap = CommonUtil.toCamelCaseMap(paramMap);
		System.out.println("camelParamMap : " + camelParamMap.toString());
		
		//기본배송지여부 Y인경우 기존 Y인 기본배송지 N으로 UPDATE 후 기본배송지 INSERT
		List<String> lsDlvplcIds = new ArrayList<String>();
		
		//기존의 기본 배송지 정보 조회
		//기존의 기본 배송지 정보 조회
		List<Map<String, Object>>beforeResultList = dvplcMngDao.selectBeforeDlvplcBasisInfo(camelParamMap);
		
		//전체
		dvplcMngDao.updateDlvPlcN(camelParamMap);
		
		for(Map<String, Object> beforeResultMap : beforeResultList) {
			lsDlvplcIds.add((String) beforeResultMap.get("DLVPLC_ID"));   // 기존의 기본배송지 배송지ID ADD
		}
		
		dvplcMngDao.updateDlvPlcY(camelParamMap);
		lsDlvplcIds.add((String) camelParamMap.get("dlvplcId"));            // 새로 등록한 배송지ID
		
		// PI 1205 호출
		Map<String, Object> piMap = new HashMap<String, Object>();
		piMap.put("coCd"      , camelParamMap.get("coCd") );
		piMap.put("dlvplcIds" , lsDlvplcIds               );
		
		pi1205Dao.publishUpdate(piMap);
		
		result.addDataSet("ds_output1", resultMap);
		resultMap.put("SUCCESS_YN", "Y");
		
		return result;
	}

	@Override
	public Map<String, Object> selectAllExcelDownload(Map<String, Object> searchInfo, CCUtils ccUtils) throws Exception {
		searchInfo.put("SES_ID", ccUtils.getSession().get("SES_ID").toString());
		
		// input dataset id 카멜화
		Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
		searchMap.put("coCd", ccUtils.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("oprtrId",  ccUtils.getSession().get("OPRTR_ID").toString());
        searchMap.put("orgCd",  ccUtils.getSession().get("ORG_CD").toString());
        searchMap.put("pstnNm",  ccUtils.getSession().get("PSTN_NM").toString());
		searchMap.put("pgmId", "SSP_BO_MA_20");
		searchMap.put("excelMetaSeq", 1);
		searchMap.put("saveFileNm", "배송지목록.xlsx");
		searchMap.put("regpsnId", ccUtils.getSession().get("OPRTR_ID").toString());
		searchMap.put("updpsnId", ccUtils.getSession().get("OPRTR_ID").toString());
		
		return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}


}
