package com.ssp.bo.cc.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.dao.CustDeptDao;
import com.ssp.bo.cc.service.CustDeptService;
import com.ssp.core.cc.CcPiUtils;
import com.ssp.core.cc.dao.Pi1203Dao;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/** 
 * <pre>
 * @title 부서조회 목록 service implements
 * @package com.ssp.bo.cc.service.impl
 * <pre> 
 * @author  moonjooh
 * @since   2022. 02. 11.
 * @version 1.0
 * @see CustDeptServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.02.11		최초작성
 *  2022.02.17		부서상세 조회 및 수정구현
 *  2022.02.18		부서상세 생성/복사 구현
 */
@Service("custDeptService")
public class CustDeptServiceImpl implements CustDeptService {

    @Resource(name="custDeptDao")
    private CustDeptDao custDeptDao;

    private final Logger logger = LoggerFactory.getLogger(CustDeptServiceImpl.class);

    @Autowired
    private Pi1203Dao pi1203Dao;
    
    @Autowired
	protected SspPropertyService propertiesService;
    
    /**
     * 부서목록 리스트를 조회한다.
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public NexacroResult selectCustDept(Map<String,Object> searchInfo, CCUtils ccUtils) throws Exception {
    	NexacroResult result = new NexacroResult();
    	searchInfo.put("SES_ID", ccUtils.getSession().get("SES_ID").toString());

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        
        //조회
        List<Map<String,Object>> list = custDeptDao.selectCustDept(searchMap);
      	
      	// 리턴값 set
        result.addDataSet("ds_output1", list);
        
        return result;
	}

    /**
     * 부서목록을 일괄상태변경한다
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
	@Override
	public NexacroResult saveCustDeptState(List<Map<String, Object>> saveListMap) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		try {
			// 유효성 검사
			for(Map<String, Object> rowMap : saveListMap){
				// input dataset id 카멜화
		        Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(rowMap);
		        
		        // 로그인 세션확인
		        String login = StringUtil.getString(saveMap.get("oprtrId"));
		        if(login == null || "".equals(login)) {
		        	throw new MessageException(-100, "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다.");
		        }
		        Map<String, Object> oprUnitUseYn = custDeptDao.selectOprUnituseYn(saveMap);
		        
		        if(oprUnitUseYn != null && "N".equals(oprUnitUseYn.get("USE_YN"))) {
		        	throw new MessageException(-1, "부서명 "+saveMap.get("deptNm")+" 은(는) 소속된 운영단위의 상태가 미사용입니다.");
		        }
		        
		        String useYn = StringUtil.getString(saveMap.get("useYn"));
		        if("N".equals(useYn)) {
		        	int chkHrnkDeptUse = custDeptDao.selectChkHrnkDeptUse(saveMap);
			        if(chkHrnkDeptUse > 0) {
			        	throw new MessageException(-1, "부서명 "+saveMap.get("deptNm")+" 은(는) 사용중인 하위부서가 존재합니다. 미사용처리 할 수 없습니다.");
			        }
			        
			        int chkMbrDeptUse = custDeptDao.chkMbrDeptUse(saveMap);
			        if(chkMbrDeptUse > 0) {
			        	throw new MessageException(-1, "부서명 "+saveMap.get("deptNm")+" 은(는) 하위 회원이 존재하여 미사용처리 할 수 없습니다.");
			        }
		        }else {
		        	int chkUpperDeptUse = custDeptDao.selectChkUpperHrnkDeptUse(saveMap);
			        if(chkUpperDeptUse > 0) {
			        	throw new MessageException(-1, "부서명 "+saveMap.get("deptNm")+" 은(는) 미사용중인 상위부서가 존재합니다. 상위부서를 먼저 사용처리 하세요.");
			        }
		        }
			}

			// 상태 변경
			for(Map<String, Object> rowMap : saveListMap) {
				// input dataset id 카멜화
				Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(rowMap);

				// 부서상태변경
		        custDeptDao.saveCustDeptState(saveMap);
		        
		        pi1203Dao.publishUpdate(saveMap);
			}
			
		}catch(MessageException e) {
			if( e.getCode() == -1 || e.getCode() == -100 ) {
	            result.setErrorCode(e.getCode());
	            result.setErrorMsg(e.getMessage());
	            return result;
	        } else {
	            throw e;
	        }
		}
		
		result.addDataSet("ds_output1", resultMap);
		return result;
	}
	
	/**
     * 부서 상세를 조회한다.
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public NexacroResult selectCustDeptDetailInfo(Map<String,Object> searchInfo) throws Exception {
    	
    	NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        
        //조회
        List<Map<String,Object>> list = custDeptDao.selectCustDeptDetailInfo(searchMap);
      	
      	// 리턴값 set
        result.addDataSet("ds_output1", list);
        
        return result;
	}
    
    /**
     * 부서조회 상세 수정
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
	@Override
	public NexacroResult saveCustDeptDetailInfo(List<Map<String, Object>> saveListMap) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		try {
			for(Map<String, Object> rowMap : saveListMap){
				// input dataset id 카멜화
		        Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(rowMap);
		        
		        // 로그인 세션확인
		        String login = StringUtil.getString(saveMap.get("oprtrId"));
		        if(login == null || "".equals(login)) {
		        	throw new MessageException(-100, "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다.");
		        }
		        // 소속된 운영단위 사용 상태 확인 
		        Map<String, Object> oprUnitUseYn = custDeptDao.selectOprUnituseYn(saveMap);

		        if(oprUnitUseYn != null && "N".equals(oprUnitUseYn.get("USE_YN"))) {
		        	throw new MessageException(-1, "부서명 "+saveMap.get("deptNm")+" 은(는) 소속된 운영단위의 상태가 미사용입니다.");
		        }
		        
		        String useYn = StringUtil.getString( saveMap.get("useYn"));
		        if("N".equals(useYn)) {
		        	int chkHrnkDeptUse = custDeptDao.selectChkHrnkDeptUse(saveMap);
			        if(chkHrnkDeptUse > 0) {
			        	throw new MessageException(-1, "부서명 "+saveMap.get("deptNm")+" 은(는) 사용중인 하위부서가 존재합니다. 미사용처리 할 수 없습니다.");
			        }
			        
			        int chkMbrDeptUse = custDeptDao.chkMbrDeptUse(saveMap);
			        if(chkMbrDeptUse > 0) {
			        	throw new MessageException(-1, "부서명 "+saveMap.get("deptNm")+" 은(는) 하위 회원이 존재하여 미사용처리 할 수 없습니다.");
			        }
		        }else {
		        	int chkUpperDeptUse = custDeptDao.selectChkUpperHrnkDeptUse(saveMap);
			        if(chkUpperDeptUse > 0) {
			        	throw new MessageException(-1, "부서명 "+saveMap.get("deptNm")+" 은(는) 미사용중인 상위부서가 존재합니다. 상위부서를 먼저 사용처리 하세요.");
			        }
		        }
		        
		        if(saveMap.get("hrnkDeptId") != null) {
		        	// 상위부서 변경 시 자신의 하위부서를 상위부서로 지정하는 것을 막음
		        	int returnCnt3 = custDeptDao.selectHrnkDeptIdCnt(saveMap);
			        if(returnCnt3 > 0) {
			        	throw new MessageException(-1, "해당부서의 하위부서를 상위부서로 지정할 수 없습니다."); 
					}
		        }
		        
		        // 부서조회 상세 수정
		        int returnCnt1 = custDeptDao.saveCustDeptDetailInfo(saveMap);
		        
		        // 부서조회 제어권한 수정
		        int returnCnt2 = custDeptDao.saveCustDeptDetailInfoAuth(saveMap);
		        if(returnCnt1 <= 0 || returnCnt2 <= 0) {
		        	throw new MessageException(-1, "수정에 실패했습니다.");
				}
				
				// [2022.04.21] sg.park PI 호출
				saveMap.put("ifMsgId"   , null);
				pi1203Dao.publishUpdate(saveMap);  // [2022.07.23] 박성근 - 처리완료시 까지 대기하는 루틴 추가 (테스트용)
				//CcPiUtils.waitSucess((String) saveMap.get("coCd"), (String) saveMap.get("ifMsgId"));
			}
		}catch(MessageException e) {
			if( e.getCode() == -1 || e.getCode() == -100 ) {
	            result.setErrorCode(e.getCode());
	            result.setErrorMsg(e.getMessage());
	            return result;
	        } else {
	            throw e;
	        }
		}
		
		result.addDataSet("ds_output1", resultMap);
		return result;
	}

	/**
     * 부서생성 고객구분 조회
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
	@Override
	public NexacroResult selectCustSpr(Map<String, Object> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        
        //조회
        List<Map<String,Object>> list = custDeptDao.selectCustSpr(searchMap);
      	
      	// 리턴값 set
        result.addDataSet("ds_output1", list);
        
        return result;
	}
	
	/**
     * 부서생성 최상위부서, 입고담당자 조회
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
	@Override
	public NexacroResult selectHgstDept(Map<String, Object> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        
        //조회
        List<Map<String,Object>> list = custDeptDao.selectHgstDept(searchMap);
      	
      	// 리턴값 set
        result.addDataSet("ds_output1", list);
        
        return result;
	}
	
	/**
     * 부서생성 insert
     * @param paramMap
     * @return Map
     * @throws Exception Exception
     */
	@Override
    @Transactional
	public NexacroResult insertCustDeptDetail(Map<String, Object> paramMap) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		try {
			paramMap.put("USE_YN", "Y"); // 신규생성은 사용여부 Y값 강제입력
			paramMap.put("seqDeptBasis", custDeptDao.selectSeqDeptId(paramMap)); // DEPT_ID 채번
			
	        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(paramMap);
	        
	        // 로그인 세션확인
	        String login = StringUtil.getString(searchMap.get("oprtrId"));
	        if(login == null || "".equals(login)) {
	        	throw new MessageException(-100, "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다.");
	        }
	        
	        //운영단위등록상태코드 체크
	        Map<String, Object> chkMap = custDeptDao.selectOprUnitRegStatsCdChk(searchMap);
			
			int chkCd =  Integer.parseInt( chkMap.get("OPR_UNIT_REG_STATS_CD")+""); 
			if(chkCd >= 70) {
				resultMap.put("SUCCESS_YN", "N");
				result.addDataSet("ds_output1", resultMap);
				return result;
			}
	        
	        //소속된 운영단위 사용상태 확인 
	        Map<String, Object> oprUnitUseYn = custDeptDao.selectOprUnituseYn(searchMap);

	        if(oprUnitUseYn != null && "N".equals(oprUnitUseYn.get("USE_YN"))) {
	        	resultMap.put("USE_YN", "N");
				result.addDataSet("ds_output1", resultMap);
				return result; 
	        }
	        
	        
	        // 부서기본 insert
			int returnCnt = custDeptDao.insertCustDeptDetail(searchMap);
			if(returnCnt <= 0) {
				throw new MessageException(-1, "저장에 실패했습니다.");
			}
			
			// 제어권한 insert
			int returnCnt1 = custDeptDao.insertCustDeptDetailAuth(searchMap);
			if(returnCnt1 <= 0) {
				throw new MessageException(-1, "저장에 실패했습니다.");
			}
			
			// [2022.04.21] sg.park PI 호출
			searchMap.put("coCd", searchMap.get("oprtrCoCd"));
			searchMap.put("deptId", paramMap.get("seqDeptBasis"));
			pi1203Dao.publishUpdate(searchMap);
			
		}catch(MessageException e) {
			if( e.getCode() == -1 || e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
	            result.setErrorCode(e.getCode());
	            result.setErrorMsg(e.getMessage());
	            return result;
	        } else {
	            throw e;
	        }
		}
		resultMap.put("SUCCESS_YN", "Y");
		result.addDataSet("ds_output1", resultMap);
		return result;
	}
	
	/**
     * 부서조회 부서복사
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public NexacroResult selectCustDeptForCopy(Map<String,Object> searchInfo) throws Exception {
    	
    	NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		try {
			// input dataset id 카멜화
	        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
	        
	        // 필수입력값 체크
	        boolean valid = false;
	        String coCd = StringUtil.getString(searchMap.get("coCd"));
	        String deptId = StringUtil.getString(searchMap.get("deptId"));
	        String oprUnitId = StringUtil.getString(searchMap.get("oprUnitId"));
	        
	        if(coCd == "" || coCd == null) { valid = true; }
	        if(deptId == "" || deptId == null) { valid = true; }
	        if(oprUnitId == "" || oprUnitId == null) { valid = true; }
	        
	        if(valid) {
	        	throw new MessageException(-1, "올바르지않은 접근입니다. 필수입력값이 입력되지않았습니다."); 
	        }
	        
	        //조회
	        List<Map<String,Object>> list = custDeptDao.selectCustDeptDetailInfo(searchMap);
	        
	        // 부서복사인 경우 부서명과 부서ID는 신규생성
	        if(list.size() > 0) {
	        	Map<String,Object> tempMap = new HashMap();
	        	tempMap = list.get(0);
	        	tempMap.put("DEPT_NM", "");
	        	tempMap.put("DEPT_ID", "");
	        	
	        	list.set(0, tempMap);
	        }
			
	    	// 리턴값 set
	        result.addDataSet("ds_output1", list);
	        return result;
	        
		}catch(MessageException e) {
			if( e.getCode() == -1 || e.getCode() == -100 ) {
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
	public NexacroResult selectAuthByOprUnit(Map<String, Object> searchInfo) throws Exception {
    	NexacroResult result = new NexacroResult();

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        
        if(searchMap.get("coCd") == null || "".equals(searchMap.get("coCd"))) { searchMap.put("coCd", "1000"); }
        
        //조회
        Map<String,Object> map = custDeptDao.selectAuthByOprUnit(searchMap);
      	
        result.addDataSet("ds_output1", map);
        
        return result;
	}
	
	// 대용량엑셀
	@Override
	public NexacroResult selectAllExcelDownload(Map<String, Object> searchInfo, CCUtils ccUtils) throws Exception {
    	NexacroResult result = new NexacroResult();
    	
        try {
    		searchInfo.put("SES_ID", ccUtils.getSession().get("SES_ID").toString());
    		
    		// 로그인 세션확인
            if(ccUtils.getSession().get("OPRTR_CO_CD") == null) {
            	throw new MessageException(-100, "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다."); 
            }
    			
            // input dataset id 카멜화
            Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
            searchMap.put("coCd", ccUtils.getSession().get("OPRTR_CO_CD").toString());
            searchMap.put("oprtrId",  ccUtils.getSession().get("OPRTR_ID").toString());
            searchMap.put("orgCd",  ccUtils.getSession().get("ORG_CD").toString());
            searchMap.put("pstnNm",  ccUtils.getSession().get("PSTN_NM").toString());
            searchMap.put("pgmId", "SSP_BO_MA_07");
            searchMap.put("excelMetaSeq", 1);
            searchMap.put("saveFileNm", "부서관리목록.xlsx");
            searchMap.put("regpsnId", ccUtils.getSession().get("OPRTR_ID").toString());
            searchMap.put("updpsnId", ccUtils.getSession().get("OPRTR_ID").toString());
            
            CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
            return result;
            
		}catch(MessageException e) {
			if( e.getCode() == -1 || e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
	            result.setErrorCode(e.getCode());
	            result.setErrorMsg(e.getMessage());
	            return result;
	        } else {
	            throw e;
	        }
		}
	}

}
