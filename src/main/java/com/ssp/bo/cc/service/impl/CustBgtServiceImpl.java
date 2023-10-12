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
import com.ssp.bo.cc.dao.CustBgtDao;
import com.ssp.bo.cc.service.CustBgtService;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 * @title 예산
 * @desc
 * @package com.ssp.bo.cc.service.impl
 * @ClassName CustBgtServiceImpl
 * </pre>
 * @author  차상영
 * @since   2022. 02. 11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */
@Service("custBgtService")
public class CustBgtServiceImpl implements CustBgtService {
	
	@Autowired
	protected SspPropertyService propertiesService;

    @Resource(name="custBgtDao")
    private CustBgtDao custBgtDao;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    private String tempAdmin = "X0025958"; //비로그인시 임시 아이디	

    /**
     * 예산목록을 조회한다.
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectBgtList(Map<String,Object> searchInfo) {
    	
        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        String acctTpCd = searchMap.get("acctTpCd").toString();
        
        List<Map<String,Object>> list = null;
        
        if(acctTpCd.equals("1")) { //일반계정
        	list = custBgtDao.selectBgtList(searchMap);
        }
        else if(acctTpCd.equals("2")) { //공통계정
        	list = custBgtDao.selectBgtCommonList(searchMap);
        }
        
        return list;
	}

    /**
     * 예산이체목록을 조회한다.
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectBgtTransMonthList(Map<String,Object> searchInfo) {
    	
        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);

        Object deptId = searchMap.get("deptId");
        if(deptId!=null && !deptId.toString().equals("")) {        	
        	searchMap.put("arrDeptId", deptId.toString().split(","));
        }        

        //조회
        return custBgtDao.selectBgtTransMonthList(searchMap);
      
	}


	/**
     * 일반예산이월 상세 저장(부서별)
     * @param map
     * @return 
     * @throws Exception Exception
     */	
 	@Override
 	@Transactional
 	public void saveBgtTransMonth(List<Map<String, Object>> list, CCUtils cCUtils) throws Exception {  
 		if(list != null && list.size() > 0) {
 			for(int i=0; i<list.size(); i++) {
 				Map<String, Object> map = CommonUtil.toCamelCaseMap(list.get(i));
 				map.put("userId", CommUtil.nvl(cCUtils.getSession().get("OPRTR_ID")).equals("") ? tempAdmin : cCUtils.getSession().get("OPRTR_ID").toString());
 				
 				//상세정보 저장			
 				custBgtDao.saveBgtTransMonthDtlFrom(map); 				
 				custBgtDao.saveBgtTransMonthDtlTo(map);
 				
 				//이력 저장
 				custBgtDao.saveBgtTransMonthHst(map);
 				 			
 			}
 		}
 	}

    /**
     * 부서/계정 설정 조회
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectBgtDeptMappList(Map<String,Object> searchInfo) {
    	
        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);

        Object oprUnitId = searchMap.get("oprUnitId");
        Object deptId = searchMap.get("deptId");
        
        if(oprUnitId!=null && !oprUnitId.toString().equals("")) {        	
        	searchMap.put("arrOprUnitId", oprUnitId.toString().split(","));
        }
        if(deptId!=null && !deptId.toString().equals("")) {        	
        	searchMap.put("arrDeptId", deptId.toString().split(","));
        }        
        
        //조회
        return custBgtDao.selectBgtDeptMappList(searchMap);
      
	}

    /**
     * 계정/부서 설정 조회
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectBgtDeptMappListByAcct(Map<String,Object> searchInfo) {

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);

        Object oprUnitId = searchMap.get("oprUnitId");
        Object acctId = searchMap.get("acctId");

        if(oprUnitId!=null && !oprUnitId.toString().equals("")) {
        	searchMap.put("arrOprUnitId", oprUnitId.toString().split(","));
        }
        if(acctId!=null && !acctId.toString().equals("")) {
        	searchMap.put("arrAcctId", acctId.toString().split(","));
        }

        List<Map<String,Object>> list = null;
        
        if(searchMap.get("acctTpCd").toString().equals("1")) { //일반계정
        	list = custBgtDao.selectBgtDeptMappListByAcct(searchMap);
        }
        else if(searchMap.get("acctTpCd").toString().equals("2")) { //공통계정	
        	list = custBgtDao.selectBgtDeptMappListByCommonAcct(searchMap);
        }
        
        //조회
        return list;

	}

	/**
     * 예산설정 부서/계정 부서 수정
     * @param map
     * @return 
     * @throws Exception Exception
     */	
 	@Override
 	@Transactional
 	public void updateBgtMappDept(List<Map<String, Object>> list) throws Exception {  
 		if(list != null && list.size() > 0) {
 			for(int i=0; i<list.size(); i++) {
 				Map<String, Object> map = CommonUtil.toCamelCaseMap(list.get(i));
 				
 				custBgtDao.updateBgtMappDept(map);
 			}
 		}
 	}

	/**
     * 예산설정 계정/부서 예산사용 상위계정 수정
     * @param map
     * @return
     * @throws Exception Exception
     */
 	@Override
 	@Transactional
 	public void updateBgtMappBgtUseHrnkAcct(List<Map<String, Object>> list, CCUtils cCUtils) throws Exception {
 		if(list != null && list.size() > 0) {
 			for(int i=0; i<list.size(); i++) {
 				Map<String, Object> map = CommonUtil.toCamelCaseMap(list.get(i));
 				map.put("userId", CommUtil.nvl(cCUtils.getSession().get("OPRTR_ID")).equals("") ? tempAdmin : cCUtils.getSession().get("OPRTR_ID").toString());

 				custBgtDao.updateBgtMappBgtUseHrnkAcct(map);
 			}
 		}
 	}

    /**
     * 분기예산사용여부 조회(운영단위)
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public Map<String,Object> selectQrtBgtUseYn(Map<String,Object> searchMap) throws Exception {

        //조회
        return custBgtDao.selectQrtBgtUseYn(CommonUtil.toCamelCaseMap(searchMap));
      
	}
   
    /**
     * 분기예산사용여부 조회(사업장)
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public Map<String,Object> selectBzplcQrtBgtUseYn(Map<String,Object> searchMap, CCUtils ccUtils) throws Exception {
    	searchMap.put("CO_CD", ccUtils.getSession().get("OPRTR_CO_CD").toString());

        //조회
        return custBgtDao.selectBzplcQrtBgtUseYn(CommonUtil.toCamelCaseMap(searchMap));
      
	}

    
    /**
     *  부서/계정 설정 상세 조회(부서별)
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectBgtDeptDtlMappListByDept(Map<String,Object> searchMap) {
    	
        //조회
        return custBgtDao.selectBgtDeptDtlMappListByDept(CommonUtil.toCamelCaseMap(searchMap));
      
	}

    /**
     *  부서/계정 설정 상세 조회(계정별)
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectBgtDeptDtlMappListByAcct(Map<String,Object> searchMap) {

        //조회
        return custBgtDao.selectBgtDeptDtlMappListByAcct(CommonUtil.toCamelCaseMap(searchMap));

	}

    /**
     *  부서/계정 설정 상세 조회(공통)
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectBgtDeptDtlMappListByCommonAcct(Map<String,Object> searchMap) {

        //조회
        return custBgtDao.selectBgtDeptDtlMappListByCommonAcct(CommonUtil.toCamelCaseMap(searchMap));

	}

	/**
     * 부서/계정 설정 상세 저장(부서별)
     * @param map
     * @return 
     * @throws Exception Exception
     */	
 	@Override
 	@Transactional
 	public void saveBgtDeptDtl(List<Map<String, Object>> list, CCUtils cCUtils) throws Exception {  
 		if(list != null && list.size() > 0) {
 			for(int i=0; i<list.size(); i++) {
 				Map<String, Object> map = CommonUtil.toCamelCaseMap(list.get(i));
 				map.put("userId", CommUtil.nvl(cCUtils.getSession().get("OPRTR_ID")).equals("") ? tempAdmin : cCUtils.getSession().get("OPRTR_ID").toString());
 				
 				custBgtDao.saveBgtDeptDtl(map);
 				custBgtDao.saveBgtDeptDtlHst(map);
 			}
 		}
 	}

	/**
     * 부서/계정 설정 상세 저장(공통)
     * @param map
     * @return 
     * @throws Exception Exception
     */	
 	@Override
 	@Transactional
 	public void saveBgtCommonAcctDtl(List<Map<String, Object>> list, CCUtils cCUtils) throws Exception {  
 		if(list != null && list.size() > 0) {
 			for(int i=0; i<list.size(); i++) {
 				Map<String, Object> map = CommonUtil.toCamelCaseMap(list.get(i));
 				map.put("userId", CommUtil.nvl(cCUtils.getSession().get("OPRTR_ID")).equals("") ? tempAdmin : cCUtils.getSession().get("OPRTR_ID").toString());
 				
 				custBgtDao.saveBgtCommonAcctDtl(map);
 				custBgtDao.saveBgtCommonAcctDtlHst(map);
 			}
 		}
 	}

    /**
     * 일반예산이체 계정잔액 조회
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     * 박재광 2022.03.28
     */
    @Override
	public Map<String,Object> selectBalanceAmt(Map<String,Object> searchMap) throws Exception {
        return custBgtDao.selectBalanceAmt(CommonUtil.toCamelCaseMap(searchMap));
	}
    
	/**
     * 일반예산이체 저장
     * @param map
     * @return void
     * @throws Exception Exception
     * 박재광 2022.03.28
     */
 	@Override
 	@Transactional
    public void saveGenBgtTrnsf(Map<String, Object> map, CCUtils cCUtils) throws Exception {
        Map<String, Object> param = CommonUtil.toCamelCaseMap(map);
        String userId = CommUtil.nvl(cCUtils.getSession().get("OPRTR_ID")).equals("") ? SessionsAdmin.ANONYMOUS_LOGIN_ID : cCUtils.getSession().get("OPRTR_ID").toString();
        param.put("regpsnId", userId);
        param.put("updpsnId", userId);
		
		logger.debug("============================================================");
		logger.debug(param.toString());
		
		
		try {
			//예산변경이력 등록
			custBgtDao.insertBgtChgHst(param);	
			
			// 변경전 예산내역 수정
			Map<String, Object> bgtNoDspParam = new HashMap<String, Object>();
			bgtNoDspParam.put("coCd", param.get("coCd"));
			bgtNoDspParam.put("bzplcId", param.get("dspBzplcId"));
			bgtNoDspParam.put("bgtYy", param.get("dspBgtYy"));
			bgtNoDspParam.put("bgtAplyPerdCd", param.get("dspBgtAplyPerdCd"));
			bgtNoDspParam.put("acctId", param.get("dspAcctId"));
			bgtNoDspParam.put("deptId", param.get("dspDeptId"));
			
			int bgtNoDsp = custBgtDao.selectLastBgtNo(bgtNoDspParam);
			
			if(bgtNoDsp>0) {
				param.put("bgtNo",bgtNoDsp);
				custBgtDao.updateBgtDtlsDsp(param);
			} else {
				throw new MessageException(-1, "발신 계정이 없습니다.");
			}
			
			// 변경후 예산내역 등록이나 수정
			Map<String, Object> bgtNoRcvParam = new HashMap<String, Object>();
			bgtNoRcvParam.put("coCd", param.get("coCd"));
			bgtNoRcvParam.put("bzplcId", param.get("dspBzplcId"));
			bgtNoRcvParam.put("bgtYy", param.get("rcvBgtYy"));
			bgtNoRcvParam.put("bgtAplyPerdCd", param.get("rcvBgtAplyPerdCd"));
			bgtNoRcvParam.put("acctId", param.get("rcvAcctId"));
			bgtNoRcvParam.put("deptId", param.get("rcvDeptId"));
			
			int bgtRcvNo = custBgtDao.selectLastBgtNo(bgtNoRcvParam);
			
			if(bgtRcvNo>0) {
				param.put("bgtNo",bgtRcvNo);
				custBgtDao.updateBgtDtlsRcv(param);
			} else {
				custBgtDao.insertBgtDtlsRcv(param);
			}
			
		}catch(MessageException e) {
			if( e.getCode() == -1 || e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
	        } else {
	            throw e;
	        }
		}
		

 	}

	// 공통예산이월 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    /**
     * 공통예산이월 목록 조회
     * @param Map
     * @return List<Map>
     * @throws Exception Exception
     * 박재광 2022.04.06
     */
    @Override
	public List<Map<String,Object>> selectComBgtFwList(Map<String,Object> paramMap) {
    	Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(paramMap);
    	Object acctId = searchMap.get("acctId");
    	
        if(acctId!=null && !acctId.toString().equals("")) {        	
        	searchMap.put("acctId", acctId.toString().split(","));
        }        
    	
        return custBgtDao.selectComBgtFwList(searchMap);
	}

	/**
     * 공통예산이월 저장
     * @param List<Map>
     * @return void
     * @throws Exception Exception
     * 박재광 2022.04.06
     */
 	@Override
 	@Transactional
    public void saveComBgtFwList(List<Map<String, Object>> list, CCUtils cCUtils) throws Exception {
        String userId = CommUtil.nvl(cCUtils.getSession().get("OPRTR_ID")).equals("") ? SessionsAdmin.ANONYMOUS_LOGIN_ID : cCUtils.getSession().get("OPRTR_ID").toString();
        
        for(Map<String, Object> element : list) {
            Map<String, Object> param = CommonUtil.toCamelCaseMap(element);
            param.put("updpsnId", userId);
            param.put("regpsnId", userId);
			
			logger.debug("========= 공통예산이월 이력 등록 파라미터 =========");
			logger.debug(param.toString());

			custBgtDao.insertComBgtFwHst(param);	// 공통예산이월 이력 등록
			
			//From   공통예산이월 이체할 상세 수정
			param.put("bgtYy", param.get("fromBgtYy"));
			param.put("bgtAplyPerdCd", param.get("fromBgtAplyPerdCd"));
			int bgtNoFrom = custBgtDao.selectLastBgtNoComBgtFw(param);
			
			if(bgtNoFrom>0) {
				param.put("bgtNo",bgtNoFrom);
				logger.debug("========= 공통예산이월 이체할 상세 수정 파라미터 =========");
				logger.debug(param.toString());
				custBgtDao.updateComBgtFwDtlFrom(param);	
			} else {	//기존에 계정잔액을 이미 조회를 했는데 입력하는 동안 없어졌다????
				//익셉션 발생시키자
			}
			
			//To	공통예산이월 이체받을 상세 저장
			param.put("bgtYy", param.get("toBgtYy"));
			param.put("bgtAplyPerdCd", param.get("toBgtAplyPerdCd"));
			int bgtNoTo = custBgtDao.selectLastBgtNoComBgtFw(param);

			if(bgtNoTo>0) {
				param.put("bgtNo",bgtNoTo);
				logger.debug("========= 공통예산이월 이체받을 상세 수정 파라미터 =========");
				logger.debug(param.toString());
				custBgtDao.updateComBgtFwDtlTo(param);	
			} else {
				logger.debug("========= 공통예산이월 이체받을 상세 등록 파라미터 =========");
				logger.debug(param.toString());
				custBgtDao.insertComBgtFwDtlTo(param);
			}
		}
 	}
	// 공통예산이월 ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

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
            searchMap.put("pgmId", "SSP_BO_MA_60");
            searchMap.put("excelMetaSeq", 1);
            searchMap.put("saveFileNm", "예산조회목록.xlsx");
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

}