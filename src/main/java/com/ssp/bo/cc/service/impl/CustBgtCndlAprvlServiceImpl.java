package com.ssp.bo.cc.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.dao.CustBgtCndlAprvlDao;
import com.ssp.bo.cc.service.CcComService;
import com.ssp.bo.cc.service.CustBgtCndlAprvlService;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title 조건부 결재선 관리 목록 service implements
 * @package com.ssp.bo.cc.service.impl
 * <pre> 
 * @author  moonjooh
 * @since   2022. 03. 16.
 * @version 1.0
 * @see CustBgtCndlAprvlServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.03.16		최초작성
 */
@Service("custBgtCndlAprvlService")
public class CustBgtCndlAprvlServiceImpl implements CustBgtCndlAprvlService {

    @Resource(name="custBgtCndlAprvlDao")
    private CustBgtCndlAprvlDao custBgtCndlAprvlDao;
    
    @Resource(name="ccComService")
    private CcComService ccComService;

    @Autowired
	protected SspPropertyService propertiesService;
    
    /**
     * 조건부 결재선 관리 목록 조회
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectCustBgtCndlAprvl(Map<String,Object> searchInfo, CCUtils ccUtils) throws Exception {
    	searchInfo.put("SES_ID", ccUtils.getSession().get("SES_ID").toString());
    	
        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
    	
        return custBgtCndlAprvlDao.selectCustBgtCndlAprvl(searchMap);
	}
    
    /**
     * 조건부 결재선 관리 목록 삭제
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
	@Override
    @Transactional
	public NexacroResult deleteCustBgtCndlAprvl(List<Map<String, Object>> saveMap1) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		try {
			for(Map<String, Object> rowMap : saveMap1){
				Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(rowMap);
				
				// 로그인 세션확인
				String login = StringUtil.getString(saveMap.get("oprtrId"));
				if(login == null || "".equals(login)) {
					throw new MessageException(-100, "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다."); 
				}
		        
		        saveMap.put("aprvlSprCd", "40");
				saveMap.put("useYn", "N");
				saveMap.put("hstSprCd", "D");

				// 조건부결재선 관리 목록 이력
				custBgtCndlAprvlDao.insertCndlAprvlInfoHist(saveMap);
		        // 조건부결재선 관리 목록 결재선 이력
				custBgtCndlAprvlDao.savePrdAprvlInfoHistForDelete(saveMap);
				
				// 조건부결재선 관리 목록 삭제
		        custBgtCndlAprvlDao.deleteCustBgtCndlAprvl(saveMap);
		        // 조건부결재선 관리 목록 결재선 삭제
		        custBgtCndlAprvlDao.deleteCustBgtCndlAprvlDetail(saveMap);
			}
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
		
		result.addDataSet("ds_output1", resultMap);
		return result;
	}
    
    /**
     * 조건부 결재선 관리 상세 결재선 생성
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
	@Override
    @Transactional
	public synchronized NexacroResult saveCustBgtCndlAprvl(Map<String, Object> saveMap1, List<Map<String, Object>> saveListMap2) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		try {
			// input dataset id 카멜화
	        Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(saveMap1);
	        saveMap.put("coCd", "1000");
	        
	        // 로그인 세션확인
	     	String login = StringUtil.getString(saveMap.get("oprtrId"));
	     	if(login == null || "".equals(login)) {
	     		throw new MessageException(-100, "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다."); 
	     	}
	        
	        // 생성된 정보 APRVL_SET_SEQ 채번
	     	int APRVL_SET_SEQ = custBgtCndlAprvlDao.selectAprvlSetSeq(saveMap);
	        saveMap.put("aprvlSetSeq", APRVL_SET_SEQ);
	        saveMap.put("aprvlSprCd", "40");
			saveMap.put("useYn", "Y");
			saveMap.put("hstSprCd", "C");
			
			// validation 체크 
			int valChk = custBgtCndlAprvlDao.selectInsertValidationCheck(saveMap);
			if(valChk > 0) {
				throw new MessageException(-1, "해당 조건의 결재선정보가 이미 존재합니다. 결재선 설정정보를 확인해주세요."); 
			}
	        
	        // 계정별 결재선 관리 상세 관리정보  insert
	        int returnCnt1 = custBgtCndlAprvlDao.insertCndlAprvlInfo(saveMap);
			if(returnCnt1 <= 0) {
				throw new MessageException(-1, "생성에 실패했습니다. 관리정보를 확인해주세요."); 
			}
			
			// 계정별 결재선 관리 상세 관리정보 이력
	        custBgtCndlAprvlDao.insertCndlAprvlInfoHist(saveMap);
	        
			String coCd = StringUtil.getString(saveMap.get("coCd"));
			String bzplcId = StringUtil.getString(saveMap.get("bzplcId"));
			
			for(Map<String, Object> rowMap : saveListMap2){
				// input dataset id 카멜화
		        Map<String, Object> saveAprMap = CommonUtil.toCamelCaseMap(rowMap);
		        saveAprMap.put("coCd", coCd);
		        saveAprMap.put("bzplcId", bzplcId);
		        saveAprMap.put("aprvlSetSeq", APRVL_SET_SEQ);
		        saveAprMap.put("aprvlSprCd", "40");
		        saveAprMap.put("useYn", "Y");
				saveAprMap.put("hstSprCd", "C");
		        
		        // 회원ID 유효성체크
		        int chk = ccComService.checkMbrExist(saveAprMap);
		        if(chk < 1) {
		        	throw new MessageException(-1, "회원ID "+saveAprMap.get("mbrId")+" 은(는) 결재권한이 없는 회원입니다.");
		        }
				
				String dgrCnt = StringUtil.getString(saveAprMap.get("dgrCnt"));
				int intDgrCnt = Integer.parseInt(dgrCnt);
				
				String aprvlPstCd = StringUtil.getString(saveAprMap.get("aprvlPstCd"));
				if(aprvlPstCd.equals("20")) {
					// aprvlPstCd 값이 20, 최종인 경우 90001번부터 시작 즉 90000을 더해줌
					intDgrCnt = intDgrCnt + 90000;
				}
				saveAprMap.put("dgrCnt", intDgrCnt);
		        
		        // 결재선 관리 상세 결재선 insert
				int returnCnt3 = custBgtCndlAprvlDao.insertPopApr(saveAprMap);
				if(returnCnt3 <= 0) {
					throw new MessageException(-1, "생성에 실패했습니다. 결재선정보를 확인해주세요."); 
				}
			}
			// 조건부결재선 관리 목록 결재선 이력
			custBgtCndlAprvlDao.savePrdAprvlInfoHistForDelete(saveMap);
			
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
		
		result.addDataSet("ds_output1", resultMap);
		return result;
	}
	
	/**
     * 조건부 결재선 관리 상세 결재선 수정
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
	@Override
    @Transactional
	public NexacroResult updateCustBgtCndlAprvl(Map<String, Object> saveMap1, List<Map<String, Object>> saveListMap2) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		try {
			// input dataset id 카멜화
	        Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(saveMap1);
	        
	        // 로그인 세션확인
	     	String login = StringUtil.getString(saveMap.get("oprtrId"));
	     	if(login == null || "".equals(login)) {
	     		throw new MessageException(-100, "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다."); 
	     	}
	        
			String coCd = StringUtil.getString(saveMap.get("coCd"));
			String bzplcId = StringUtil.getString(saveMap.get("bzplcId"));
			
			// 결재선 설정정보 수정
			custBgtCndlAprvlDao.updateAprvl(saveMap);
			
			saveMap.put("useYn", "Y");
			saveMap.put("hstSprCd", "U");
			// 계정별 결재선 관리 상세 관리정보 이력
	        custBgtCndlAprvlDao.insertCndlAprvlInfoHist(saveMap);
			
			// 상세 결재선 삭제
			custBgtCndlAprvlDao.deletePopApr(saveMap);
			
			for(Map<String, Object> rowMap : saveListMap2){
				// input dataset id 카멜화
		        Map<String, Object> saveAprMap = CommonUtil.toCamelCaseMap(rowMap);
		        saveAprMap.put("coCd", coCd);
		        saveAprMap.put("bzplcId", bzplcId);
		        saveAprMap.put("useYn", "Y");
		        saveAprMap.put("hstSprCd", "U");
		        
		        // 회원ID 유효성체크
		        int chk = ccComService.checkMbrExist(saveAprMap);
		        if(chk < 1) {
		        	throw new MessageException(-1, "회원ID "+saveAprMap.get("mbrId")+" 은(는) 결재권한이 없는 회원입니다."); 
		        }
				
		        String dgrCnt = StringUtil.getString(saveAprMap.get("dgrCnt"));
				int intDgrCnt = Integer.parseInt(dgrCnt);
				
				String aprvlPstCd = StringUtil.getString(saveAprMap.get("aprvlPstCd"));
				if(aprvlPstCd.equals("20")) {
					// aprvlPstCd 값이 20, 최종인 경우 90001번부터 시작 즉 90000을 더해줌
					intDgrCnt = intDgrCnt + 90000;
				}
				saveAprMap.put("dgrCnt", intDgrCnt);
		        
		        // 결재선 관리 상세 결재선 merge
				custBgtCndlAprvlDao.updatePopApr(saveAprMap);
			}
			// 조건부결재선 관리 목록 결재선 이력
			custBgtCndlAprvlDao.savePrdAprvlInfoHistForDelete(saveMap);
			
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
		
		result.addDataSet("ds_output1", resultMap);
		return result;
	}
	
	/**
     * 조건부 결재선 관리 조회
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
	@Override
	public List<Map<String, Object>> selectPopAprInfo(Map<String, Object> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();
        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        searchMap.put("coCd", "1000");
        return custBgtCndlAprvlDao.selectPopAprInfo(searchMap);
	}

	/**
     * 조건부 결재선 관리 상세 결재선조회
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
	@Override
	public List<Map<String, Object>> selectPopAprDetail(Map<String, Object> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        searchMap.put("coCd", "1000");
        
        return custBgtCndlAprvlDao.selectPopAprDetail(searchMap);
	}

	// 대용량엑셀 테스트용
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
            searchMap.put("pgmId", "SSP_BO_MF_17");
            searchMap.put("excelMetaSeq", 1);
            searchMap.put("saveFileNm", "조건부결재선관리목록.xlsx");
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
