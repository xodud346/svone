package com.ssp.bo.cc.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.dao.CustBgtPrdAprvlDao;
import com.ssp.bo.cc.service.CcComService;
import com.ssp.bo.cc.service.CustBgtPrdAprvlService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title 계정별 결재선 관리 목록 service implements
 * @package com.ssp.bo.cc.service.impl
 * <pre> 
 * @author  moonjooh
 * @since   2022. 03. 11.
 * @version 1.0
 * @see CustBgtPrdAprvlServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.03.11		최초작성
 */
@Service("custBgtPrdAprvlService")
public class CustBgtPrdAprvlServiceImpl implements CustBgtPrdAprvlService {

    @Resource(name="custBgtPrdAprvlDao")
    private CustBgtPrdAprvlDao custBgtPrdAprvlDao;
    
    @Resource(name="ccComService")
    private CcComService ccComService;
    
    /**
     * 상품결재선 관리 목록 조회
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectCustBgtPrdAprvl(Map<String,Object> searchInfo, CCUtils ccUtils) throws Exception {
    	searchInfo.put("SES_ID", ccUtils.getSession().get("SES_ID").toString());

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);

        return custBgtPrdAprvlDao.selectCustBgtPrdAprvl(searchMap);
	}
    
    /**
     * 상품결재선 관리 목록 삭제
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
	@Override
    @Transactional
	public NexacroResult deleteCustBgtPrdAprvl(List<Map<String, Object>> saveMap1) throws Exception {
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
		        
				saveMap.put("useYn", "N");
				saveMap.put("hstSprCd", "D");
				
		        // 상품결재선 관리 목록 이력
		        custBgtPrdAprvlDao.insertPrdAprvlInfoHist(saveMap);
		        // 상품결재선 관리 목록 결재선 이력
		        custBgtPrdAprvlDao.savePrdAprvlInfoHistForDelete(saveMap);
		        
				// 상품결재선 관리 목록 삭제
		        custBgtPrdAprvlDao.deleteCustBgtPrdAprvl(saveMap);
		        // 상품결재선 관리 목록 결재선 삭제
		        custBgtPrdAprvlDao.deleteCustBgtPrdAprvlDetail(saveMap);
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
     * 상품 상세정보 조회
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectPrdInfoByPrdId(Map<String,Object> searchInfo) throws Exception {
        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        searchMap.put("coCd", "1000");
        return custBgtPrdAprvlDao.selectPrdInfoByPrdId(searchMap);
	}
    
    /**
     *상품 결재선 관리 상세 결재선 생성
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
	@Override
    @Transactional
	public synchronized NexacroResult savePrdAprvlInfo(Map<String, Object> saveMap1, List<Map<String, Object>> saveListMap2) throws Exception {
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
	     	int APRVL_SET_SEQ = custBgtPrdAprvlDao.selectAprvlSetSeq(saveMap);
	        saveMap.put("aprvlSetSeq", APRVL_SET_SEQ);
	        saveMap.put("aprvlSprCd", "20");
			saveMap.put("useYn", "Y");
			saveMap.put("hstSprCd", "C");
			
			// validation 체크 
			int valChk = custBgtPrdAprvlDao.selectInsertValidationCheck(saveMap);
			if(valChk > 0) {
				throw new MessageException(-1, "해당 상품의 결재선정보가 이미 존재합니다. 상품정보를 확인해주세요."); 
			}
	        
	        // 계정별 결재선 관리 상세 관리정보  insert
	        int returnCnt1 = custBgtPrdAprvlDao.insertPrdAprvlInfo(saveMap);
			if(returnCnt1 <= 0) {
				throw new MessageException(-1, "생성에 실패했습니다. 관리정보를 확인해주세요."); 
			}
			
			// 계정별 결재선 관리 상세 관리정보 이력
	        custBgtPrdAprvlDao.insertPrdAprvlInfoHist(saveMap);
	        
			String coCd = StringUtil.getString(saveMap.get("coCd"));
			String bzplcId = StringUtil.getString(saveMap.get("bzplcId"));
			
			for(Map<String, Object> rowMap : saveListMap2){
				// input dataset id 카멜화
		        Map<String, Object> saveAprMap = CommonUtil.toCamelCaseMap(rowMap);
		        
		        saveAprMap.put("coCd", coCd);
		        saveAprMap.put("bzplcId", bzplcId);
		        saveAprMap.put("aprvlSetSeq", APRVL_SET_SEQ);
		        saveAprMap.put("aprvlSprCd", "20");
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
				int returnCnt3 = custBgtPrdAprvlDao.insertPopApr(saveAprMap);
				if(returnCnt3 <= 0) {
					throw new MessageException(-1, "생성에 실패했습니다. 결재선정보를 확인해주세요."); 
				}
			}
	        // 상품결재선 관리 목록 결재선 이력
	        custBgtPrdAprvlDao.savePrdAprvlInfoHistForDelete(saveMap);
			
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
     * 상품별 결재선 관리 상세 결재선 수정
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
	@Override
    @Transactional
	public NexacroResult updatePrdAprvlInfo(Map<String, Object> saveMap1, List<Map<String, Object>> saveListMap2) throws Exception {
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
			
			// 상세 결재선 삭제
			custBgtPrdAprvlDao.deletePopApr(saveMap);
			
			// 결재선설정정보 수정
			custBgtPrdAprvlDao.updateCustBgtPrdAprvl(saveMap);
			
			for(Map<String, Object> rowMap : saveListMap2){
				// input dataset id 카멜화
		        Map<String, Object> saveAprMap = CommonUtil.toCamelCaseMap(rowMap);
		        saveAprMap.put("coCd", coCd);
		        saveAprMap.put("bzplcId", bzplcId);
		        
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
				custBgtPrdAprvlDao.updatePopApr(saveAprMap);
			}
			saveMap.put("hstSprCd", "U");
	        // 상품결재선 관리 목록 결재선 이력
	        custBgtPrdAprvlDao.savePrdAprvlInfoHistForDelete(saveMap);
			
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

	@Override
	public List<Map<String, Object>> selectPopAprInfo(Map<String, Object> searchMap) throws Exception {
        Map<String, Object> prdMap = CommonUtil.toCamelCaseMap(searchMap);
        prdMap.put("coCd", "1000");
		
        Map<String, Object> infoMap = custBgtPrdAprvlDao.selectPopAprInfo(prdMap);
        if(infoMap!=null && !infoMap.isEmpty()) {
            Map<String, Object> infoCalmelMap = CommonUtil.toCamelCaseMap(infoMap);
        	return custBgtPrdAprvlDao.selectPopAprDetail(infoCalmelMap);
        }
		
		return null;
	}
    
}
