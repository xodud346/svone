package com.ssp.bo.cc.service.impl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.dao.CustAcctDao;
import com.ssp.bo.cc.service.CustAcctService;
import com.ssp.core.cc.dao.CustComDao;
import com.ssp.core.cc.dao.Pi1206Dao;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * &#64;title  계정 관리
 * &#64;desc 계정 관리 Implementation
 * &#64;package com.serveone.cc.service.impl
 * </pre>
 * 
 * @author
 * @since 2022. 02. 17
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.26	최초작성
 */
@Service("custAcctService")
public class CustAcctServiceImpl implements CustAcctService {
	
	@Autowired
	protected SspPropertyService propertiesService;
	
	@Autowired
	private CustAcctDao custAcctDao;
	
	@Autowired
	private CustComDao custComDao;
	
	@Autowired
	private Pi1206Dao pi1206Dao;

    private final Logger log = LoggerFactory.getLogger(this.getClass());

    private String tempAdmin = "X0025958"; //비로그인시 임시 아이디	
    
	/**
	 *
	 * <pre>
	 * 1. MethodName : insertAcctBasis
	 * 2. ClassName  : CustAcctServiceImpl
	 * 3. Comment    : 계정 등록
	 * 4. 작성자      : YOO CHANGHO
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param  Map<String, Object> paramMap
	 * @return NexacroResult result
	 * @throws Exception
	 */
	@Override
	public Map<String, Object> insertAcctBasis(CCUtils cCUtils, Map<String, Object> paramMap) throws Exception {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		Map<String, Object> paramCamelMap = CommonUtil.toCamelCaseMap(paramMap);
		/* 계정사용여부 [미사용] 인 경우 레벨과 상위레벨 정보 null로 등록 */
		if("N".equals(paramCamelMap.get("useYn"))) {
			paramCamelMap.put("acctLvl"   ,   "1"  );
			paramCamelMap.put("hrnkAcctId",   null );
		}
		int insertChk = custAcctDao.insertAcctBasis(paramCamelMap);
		if(insertChk == 1) {
			paramCamelMap.put("coCd", paramCamelMap.get("oprtrCoCd"));
			
			/*20220725 계정유형코드가 공통(2)시 초기 에산등록 */
			if(paramCamelMap.get("acctTpCd").toString().equals("2")) {
				Map<String, Object> bgtOrg = custComDao.selectBgtCommonInfo(paramCamelMap);
				if(bgtOrg != null) {
					Map<String, Object> bgtInfo = CommonUtil.toCamelCaseMap(bgtOrg);												
					bgtInfo.put("acctId", paramCamelMap.get("acctId"));
					
					custComDao.saveBgtCommonAcctDtl(bgtInfo);
					custComDao.saveBgtCommonAcctDtlHst(bgtInfo);
				}
			}
						
			pi1206Dao.publishRequestOne(paramCamelMap);
		  
			resultMap.put("SUCCESS_YN", "Y");
			resultMap.put("RETURN_MSG", "등록 되었습니다.");
		}else {
			resultMap.put("SUCCESS_YN", "N");
			resultMap.put("RETURN_MSG", "관리자에게 문의하세요.");
		}
		return resultMap;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : updateAcctBasisList
	 * 2. ClassName  : CustAcctServiceImpl
	 * 3. Comment    : 계정 정보 수정(다중)
	 * 4. 작성자      : YOO CHANGHO
	 * 5. 작성일      : 2022.02.18
	 * </pre>
	 *
	 * @param  Map<String, Object> paramMap
	 * @return NexacroResult result
	 * @throws Exception
	 */
	@Override
	public NexacroResult updateAcctBasisList(List<Map<String, Object>> updateParamList) throws Exception {
		NexacroResult result = new NexacroResult();
		
		int underChk = 0;
		int cnt = 0;
		for( Map<String, Object> data : updateParamList ) {
			Map<String, Object> paramCamelMap = CommonUtil.toCamelCaseMap(data);
			if(paramCamelMap.get("useYn").equals("Y")) {
				
			}else if(paramCamelMap.get("useYn").equals("N")) {
				cnt = custAcctDao.selectAcctUnderChk(paramCamelMap);
				underChk = underChk + cnt;
			}
			
		}
		
		if(underChk > 0) {
			result.addVariable("SUCCESS_YN", "N");
			result.addVariable("RETURN_MSG", "하위에 사용중인 계정이 있을 시 미사용으로 수정이 불가합니다.");
			return result;
		}
		
		//트리정보 수정
		for( Map<String, Object> data : updateParamList ) {
			Map<String, Object> paramCamelMap = CommonUtil.toCamelCaseMap(data);
			System.out.println("paramCamelMap.toString() : " + paramCamelMap.toString());
			/* 계정사용여부 [미사용] 인 경우 레벨과 상위레벨 정보 null로 등록 */
			if("N".equals(paramCamelMap.get("useYn"))) {
				paramCamelMap.put("acctLvl"   ,   "1"  );
				paramCamelMap.put("hrnkAcctId",   null );
			}
			System.out.println("수정 파라미터 : " + paramCamelMap.toString());
			custAcctDao.updateAcctBasis(paramCamelMap);
		}
		
		//계정 레벨 일괄수정
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("coCd"   , updateParamList.get(0).get("CO_CD")    );
		paramMap.put("bzplcId", updateParamList.get(0).get("BZPLC_ID") );
		custAcctDao.updateBzplcAcctLvlInfo(paramMap);
		
		result.addVariable("SUCCESS_YN", "Y");
		result.addVariable("RETURN_MSG", "저장되었습니다.");
		
		return result;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectAcctSinglePopupList
	 * 2. ClassName  : CustAcctServiceImpl
	 * 3. Comment    : 계정 단일조회 팝업
	 * 4. 작성자      : YOO CHANGHO
	 * 5. 작성일      : 2022.02.21
	 * </pre>
	 *
	 * @param  Map<String, Object> paramMap
	 * @return NexacroResult result
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectAcctSinglePopupList(Map<String, Object> paramMap) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> paramCamelMap = CommonUtil.toCamelCaseMap(paramMap);
		
		System.out.println("paramCamelMap : " + paramCamelMap.toString());
		
		int totalCount = 0;
		List<Map<String,Object>> list = null;
		
		if(paramCamelMap.get("hrnkAcctSearchYn")!=null && paramCamelMap.get("hrnkAcctSearchYn").toString().equals("Y")) { //상위계정대상 조회여부
			//카운트
			//totalCount = custAcctDao.selectAcctSingleHrnkAcctPopupListCnt(paramCamelMap);
			totalCount = custAcctDao.selectAcctSingleHrnkAcctPopupListCnt2(paramCamelMap);
			
			//조회
			//list = custAcctDao.selectAcctSingleHrnkAcctPopupList(paramCamelMap);
			list = custAcctDao.selectAcctSingleHrnkAcctPopupList2(paramCamelMap);
		}
		else {
			//카운트
			totalCount = custAcctDao.selectAcctSinglePopupListCnt(paramCamelMap);
			
			//조회
			list = custAcctDao.selectAcctSinglePopupList(paramCamelMap);							
		}
		
		//리턴값 set
        result.addVariable( "totalCount", totalCount);
        result.addDataSet("ds_output1", list);
			
		return result;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectAcctMultiPopupList
	 * 2. ClassName  : CustAcctServiceImpl
	 * 3. Comment    : 계정 멀티조회 팝업
	 * 4. 작성자      : YOO CHANGHO
	 * 5. 작성일      : 2022.02.22
	 * </pre>
	 *
	 * @param  Map<String, Object> paramMap
	 * @return NexacroResult result
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectAcctMultiPopupList(Map<String, Object> paramMap) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> paramCamelMap = CommonUtil.toCamelCaseMap(paramMap);
		//카운트
		int totalCount = custAcctDao.selectAcctMultiPopupListCnt(paramCamelMap);
		
		//조회
		List<Map<String,Object>> list = custAcctDao.selectAcctMultiPopupList(paramCamelMap);
		
		//리턴값 set
       result.addVariable( "totalCount", totalCount);
       result.addDataSet("ds_output1", list);
			
		return result;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectAcctDepthMappList
	 * 2. ClassName  : CustAcctServiceImpl
	 * 3. Comment    : 계정설정 계정트리 조회(계정/부서)
	 * 4. 작성자      : YOO CHANGHO
	 * 5. 작성일      : 2022.02.23
	 * </pre>
	 *
	 * @param  Map<String, Object> paramMap
	 * @return NexacroResult result
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectAcctDeptMappList(Map<String, Object> paramMap) throws Exception {
		NexacroResult result = new NexacroResult();
		paramMap = CommonUtil.toCamelCaseMap(paramMap);
		
		//카운트
		int totalCount = custAcctDao.selectAcctDeptMappListCnt(paramMap);
		
		//조회
		List<Map<String,Object>> list = custAcctDao.selectAcctDeptMappList(paramMap);
		
		//리턴값 set
        result.addVariable( "totalCount", totalCount);
        result.addDataSet("ds_output1", list);
        
		return result;
	}

	@Override
	public Map<String, Object> updateAcctBasis(Map<String, Object> paramMap) throws Exception {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		paramMap = CommonUtil.toCamelCaseMap(paramMap);
        int updateChk = custAcctDao.updateAcctBasis(paramMap);
        if(updateChk == 1) {
			resultMap.put("SUCCESS_YN", "Y");
			resultMap.put("RETURN_MSG", "수정 되었습니다.");
		}else {
			resultMap.put("SUCCESS_YN", "N");
			resultMap.put("RETURN_MSG", "관리자에게 문의하세요.");
		}
		return resultMap;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectAcctTreeList
	 * 2. ClassName  : CustAcctServiceImpl
	 * 3. Comment    : 계정설정 계정트리 조회(계정/부서)
	 * 4. 작성자      : 차상영
	 * 5. 작성일      : 2022.02.23
	 * </pre>
	 *
	 * @param  Map<String, Object> paramMap
	 * @return NexacroResult result
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectTreeList(Map<String, Object> paramMap) throws Exception {
		Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(paramMap);
	    Object searchOprUnitId = searchMap.get("searchOprUnitId");
	    Object searchDeptId = searchMap.get("searchDeptId");
	    Object searchAcctId = searchMap.get("searchAcctId");
	        
        if(searchOprUnitId!=null && !searchOprUnitId.toString().equals("")) {        	
        	searchMap.put("searchOprUnitId", searchOprUnitId.toString().split(","));
        }
        if(searchDeptId!=null && !searchDeptId.toString().equals("")) {        	
        	searchMap.put("searchDeptId", searchDeptId.toString().split(","));
        }        
        if(searchAcctId!=null && !searchAcctId.toString().equals("")) {        	
        	searchMap.put("searchAcctId", searchAcctId.toString().split(","));
        }        
 		
        List<Map<String, Object>> resultList = null;
        if(searchMap.get("searchDisplayDiv").equals("1")) { //계정/부서
        	resultList = custAcctDao.selectAcctTreeList(searchMap);
        }
        else if(searchMap.get("searchDisplayDiv").equals("2")) { //부서/계정
        	resultList = custAcctDao.selectDeptTreeList(searchMap);
        }
        
		return resultList;
	}


	/**
	 *
	 * <pre>
	 * 1. MethodName : selectAcctDtlInfo
	 * 2. ClassName  : CustAcctServiceImpl
	 * 3. Comment    :  계정설정 계정상세정보 조회
	 * 4. 작성자      : 차상영
	 * 5. 작성일      : 2022.02.23
	 * </pre>
	 *
	 * @param  Map<String, Object> paramMap
	 * @return NexacroResult result
	 * @throws Exception
	 */
	@Override
	public Map<String, Object> selectAcctDeptDtlInfo(Map<String, Object> paramMap) throws Exception {
		Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(paramMap);
	   
		Map<String, Object> ret = null;
		if(searchMap.get("acctId")!=null && !searchMap.get("acctId").toString().equals("")) {
			ret = custAcctDao.selectAcctDtlInfo(searchMap);
		}
		else if(searchMap.get("deptId")!=null && !searchMap.get("deptId").toString().equals("")) {
			ret = custAcctDao.selectDeptDtlInfo(searchMap);
		}
		
		return ret;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectAcctDeptMappListByAcctId
	 * 2. ClassName  : CustAcctServiceImpl
	 * 3. Comment    :  매핑 부서, 계정 리스트 조회
	 * 4. 작성자      : 차상영
	 * 5. 작성일      : 2022.02.23
	 * </pre>
	 *
	 * @param  Map<String, Object> paramMap
	 * @return NexacroResult result
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectAcctDeptMappListById(Map<String, Object> paramMap) throws Exception {
		Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(paramMap);
	   
		List<Map<String, Object>> list = null;
		if(searchMap.get("acctId")!=null && !searchMap.get("acctId").toString().equals("")) {
			list = custAcctDao.selectAcctDeptMappListByAcctId(searchMap);
		}
		else if(searchMap.get("deptId")!=null && !searchMap.get("deptId").toString().equals("")) {
			list = custAcctDao.selectAcctDeptMappListByDeptId(searchMap);
		}
		
		return list;
	}


	/**
	 *
	 * <pre>
	 * 1. MethodName : saveAcctDeptMapp
	 * 2. ClassName  : CustAcctServiceImpl
	 * 3. Comment    : 계정 매핑 저장
	 * 4. 작성자      : 차상영
	 * 5. 작성일      : 2022.02.23
	 * </pre>
	 *
	 * @param  Map<String, Object> paramMap
	 * @return NexacroResult result
	 * @throws Exception
	 */
	@Override
	@Transactional
	public void saveAcctDeptMapp(Map<String, Object> dtlInfo, List<Map<String, Object>> subGrdList, CCUtils cCUtils) throws Exception {
		Map<String, Object> map = CommonUtil.toCamelCaseMap(dtlInfo);
		String userId = CommUtil.nvl(cCUtils.getSession().get("OPRTR_ID")).equals("") ? tempAdmin : cCUtils.getSession().get("OPRTR_ID").toString();
				
		List<Map<String, Object>> delList = new ArrayList<Map<String, Object>>();
		List<Map<String, Object>> insList = new ArrayList<Map<String, Object>>();
		
		if(subGrdList != null) {
			for(int i=0; i<subGrdList.size(); i++) { //계정 부서 매핑 추가 또는 삭제
				Map<String, Object> item = subGrdList.get(i);			
				int dataSetRowtype = StringUtil.getInt(item.get("DataSetRowType"));
				
				Map<String, Object> camelItem = CommonUtil.toCamelCaseMap(item);
				camelItem.put("regpsnId", userId);
				camelItem.put("updpsnId", userId);
				
				/* 
				 * SSP-923 계정설정 저장오류 (22.09.14)
				 * 계정부서 매핑 시 삭제 후 동일 부서 삽입 하여 저장 시 PK중복 오류발생건으로
				 * 삭제데이터와 신규데이터를 나누어 List에 저장 하여 삭제 후 저장프로세스 실행하도록 수정
				 * */
				if(dataSetRowtype == 1) {
					insList.add(camelItem);
				} else if(dataSetRowtype == 3) {
					delList.add(camelItem);
				}
				
				/*
				if(dataSetRowtype == 1) { //추가
					custAcctDao.insertBgtAcctDeptMapp(camelItem);
					
					//20220725 계정유형코드가 일반(1)시 초기 에산등록
					Map<String, Object> bgtOrg = custComDao.selectBgtDeptInfo(camelItem);
					if(bgtOrg != null) {
						Map<String, Object> bgtInfo = CommonUtil.toCamelCaseMap(bgtOrg);
						
						if(bgtInfo.get("acctTpCd").toString().equals("1")) {						
							custComDao.saveBgtDeptDtl(bgtInfo);
							custComDao.saveBgtDeptDtlHst(bgtInfo);
						}
					}
											
				} else if(dataSetRowtype == 3) { //삭제				
					custAcctDao.deleteBgtAcctDeptMapp(camelItem);
				}
				*/
			}
		}
		
		// 계정 부서 매핑 삭제데이터 처리
		for(int i=0; i<delList.size(); i++) {
			Map<String, Object> delItem = delList.get(i);			
			custAcctDao.deleteBgtAcctDeptMapp(delItem);
		}
		
		// 계정 부서 매핑 추가데이터 처리
		for(int i=0; i<insList.size(); i++) {
			Map<String, Object> insItem = insList.get(i);			
			custAcctDao.insertBgtAcctDeptMapp(insItem);
			
			/*20220725 계정유형코드가 일반(1)시 초기 에산등록 */	
			Map<String, Object> bgtOrg = custComDao.selectBgtDeptInfo(insItem);
			if(bgtOrg != null) {
				Map<String, Object> bgtInfo = CommonUtil.toCamelCaseMap(bgtOrg);
				
				if(bgtInfo.get("acctTpCd").toString().equals("1")) {						
					custComDao.saveBgtDeptDtl(bgtInfo);
					custComDao.saveBgtDeptDtlHst(bgtInfo);
				}
			}
		}
		
		if(map.get("acctId")!=null && !map.get("acctId").toString().equals("")) {  //계정/부서			
			if(!CommUtil.nvl(map.get("acctCd")).equals(CommUtil.nvl(map.get("orgAcctCd"))) || !CommUtil.nvl(map.get("acctNm")).equals(CommUtil.nvl(map.get("orgAcctNm")))) {
				map.put("updpsnId", userId);
				
				custAcctDao.updateBgtAcctBasis(map); //계정명 및 계정코드 수정
				pi1206Dao.publishUpdateOne(map);
			}
		}
	}

	@Override
	public NexacroResult updateAcctBasisList2(List<Map<String, Object>> updateList) throws Exception {
		NexacroResult result = new NexacroResult();
		//트리정보 수정
		for( Map<String, Object> data : updateList ) {
			Map<String, Object> paramCamelMap = CommonUtil.toCamelCaseMap(data);
			//계정 수정
			 custAcctDao.updateAcctBasis(paramCamelMap);
		}
		return result;
	}

	@Override
	public NexacroResult selectBizplcAcctTreeList(Map<String, Object> paramMap) throws Exception {
		NexacroResult result = new NexacroResult();
		
		//계정 조회 전 사업장ID 체크
		int bzplcChk = custAcctDao.selectBzplcIdChk(CommonUtil.toCamelCaseMap(paramMap));
		if(bzplcChk == 0) {
			result.addVariable("SUCCESS_YN", "N");
			result.addVariable("RETURN_MSG", "존재하지않는 사업장ID 입니다.");
		}else {
			result.addVariable("SUCCESS_YN", "Y");
			result.addDataSet("ds_acctList", custAcctDao.selectBizplcAcctTreeList(CommonUtil.toCamelCaseMap(paramMap)));
		}
		
		return result;
	}

	@Override
	public Map<String, Object> selectBgtAcctIdDetail(Map<String, Object> paramMap) throws Exception {
		Map<String, Object> paramCamelMap = CommonUtil.toCamelCaseMap(paramMap);
		return custAcctDao.selectBgtAcctIdDetail(paramCamelMap);
	}

	@Override
	public NexacroResult updateBgtAcctBasis(Map<String, Object> paramMap) throws Exception {
		NexacroResult result = new NexacroResult();
		
		int underChk = 0;
		int cnt = 0;
		Map<String, Object> paramCamelMap = CommonUtil.toCamelCaseMap(paramMap);
		if(paramCamelMap.get("useYn").equals("Y")) {
			
		}else if(paramCamelMap.get("useYn").equals("N")) {
			cnt = custAcctDao.selectAcctUnderChk(paramCamelMap);
			underChk = underChk + cnt;
		}
			
		
		if(underChk > 0) {
			result.addVariable("SUCCESS_YN", "N");
			result.addVariable("RETURN_MSG", "하위에 사용중인 계정이 있을 시 미사용으로 수정이 불가합니다.");
			return result;
		}
		
		//트리정보 수정
		/* 계정사용여부 [미사용] 인 경우 레벨과 상위레벨 정보 null로 등록 */
		if("N".equals(paramCamelMap.get("useYn"))) {
			paramCamelMap.put("acctLvl"   ,   "1"  );
			paramCamelMap.put("hrnkAcctId",   null );
		}
		System.out.println("수정 파라미터 : " + paramCamelMap.toString());
		//custAcctDao.updateAcctBasis(paramCamelMap);
		custAcctDao.updateAcctBasis2(paramCamelMap);
		
		//계정 레벨 일괄수정
		Map<String, Object> updateMap = new HashMap<String, Object>();
		updateMap.put("coCd"   , paramMap.get("CO_CD")    );
		updateMap.put("bzplcId", paramMap.get("BZPLC_ID") );
		custAcctDao.updateBzplcAcctLvlInfo(updateMap);
		
		pi1206Dao.publishUpdateOne(paramCamelMap);
		
		result.addVariable("SUCCESS_YN", "Y");
		result.addVariable("RETURN_MSG", "저장되었습니다.");
		
		return result;
	}

	@Override
	public Map<String, Object> selectCheckHrnkAcct(Map<String, Object> paramMap) throws Exception {		
		return custAcctDao.selectCheckHrnkAcct(CommonUtil.toCamelCaseMap(paramMap));		
	}
	
	@Override
	public NexacroResult selectAllExcelDownload(Map<String, Object> searchInfo, CCUtils ccUtils) throws Exception {
		NexacroResult result = new NexacroResult();
    	
        try {
    		searchInfo.put("SES_ID", ccUtils.getSession().get("SES_ID").toString());
    		
    		// 로그인 세션확인
            if(ccUtils.getSession().get("OPRTR_CO_CD") == null) throw new MessageException(-100, "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다.");
    			
            // input dataset id 카멜화
            Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
            searchMap.put("coCd", ccUtils.getSession().get("OPRTR_CO_CD").toString());
            searchMap.put("pgmId", "SSP_BO_MA_74");
            searchMap.put("excelMetaSeq", 1);
            searchMap.put("saveFileNm", "계정목록.xlsx");
            searchMap.put("regpsnId", ccUtils.getSession().get("OPRTR_ID").toString());
            searchMap.put("updpsnId", ccUtils.getSession().get("OPRTR_ID").toString());
            
            CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
            return result;
            
		}catch(MessageException e) {
			if( e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
	            result.setErrorCode(e.getCode());
	            result.setErrorMsg(e.getMessage());
	            return result;
	        } else {
	            throw e;
	        }
		}
	}

	@Override
	public Map<String, Object> selectAllExcelDownload2(Map<String, Object> searchInfo, CCUtils ccUtils) throws Exception {
		searchInfo.put("SES_ID", ccUtils.getSession().get("SES_ID").toString());
    	
        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        searchMap.put("coCd", ccUtils.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("pgmId", "SSP_BO_MA_26");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "계정관리목록.xlsx");
        searchMap.put("regpsnId", ccUtils.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", ccUtils.getSession().get("OPRTR_ID").toString());
        
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectComCostTrnsfDeptList
	 * 2. ClassName  : CustAcctServiceImpl
	 * 3. Comment    : 비용부서 리스트 조회
	 * 4. 작성자      : 김명기
	 * 5. 작성일      : 2023. 02. 22.
	 * </pre>
	 *
	 * @param  Map<String, Object> paramMap
	 * @return NexacroResult result
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectComCostTrnsfDeptList(Map<String, Object> paramMap) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> paramCamelMap = CommonUtil.toCamelCaseMap(paramMap);
		
		List<Map<String,Object>> list = null;
		
		//조회
		list = custAcctDao.selectComCostTrnsfDeptList(paramCamelMap);
		
		//리턴값 set
		result.addDataSet("ds_output1", list);
			
		return result;
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectRefSinglePopupList
	 * 2. ClassName  : CustAcctServiceImpl
	 * 3. Comment    : 참조코드 단일조회 팝업
	 * 4. 작성자      : 김명기
	 * 5. 작성일      : 2023. 02. 22.
	 * </pre>
	 *
	 * @param  Map<String, Object> paramMap
	 * @return NexacroResult result
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectRefSinglePopupList(Map<String, Object> paramMap) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> paramCamelMap = CommonUtil.toCamelCaseMap(paramMap);
		
		int totalCount = 0;
		List<Map<String,Object>> list = null;
		
		//카운트
		totalCount = custAcctDao.selectRefSinglePopupListCnt(paramCamelMap);
		
		//조회
		list = custAcctDao.selectRefSinglePopupList(paramCamelMap);
		
		//리턴값 set
       result.addVariable( "totalCount", totalCount);
       result.addDataSet("ds_output1", list);
			
		return result;
	}

}
