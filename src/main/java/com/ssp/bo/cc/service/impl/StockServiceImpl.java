package com.ssp.bo.cc.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.dao.StockDao;
import com.ssp.bo.cc.service.StockService;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title StockNo관리 목록 service implements
 * @package com.ssp.bo.cc.service.impl
 * <pre> 
 * @author  moonjooh
 * @since   2022. 03. 22.
 * @version 1.0
 * @see StockServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.03.22		최초작성
 */
@Service("stockService")
public class StockServiceImpl implements StockService {

    @Resource(name="stockDao")
    private StockDao stockDao;
    
    @Autowired
	protected SspPropertyService propertiesService;
    
    /**
     * StockNo관리 목록 조회
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectCustStockList(Map<String,Object> searchInfo, CCUtils ccUtils) throws Exception {
    	searchInfo.put("SES_ID", ccUtils.getSession().get("SES_ID").toString());

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        
        return stockDao.selectCustStockList(searchMap);
	}
    
    /**
     * StockNo관리 상품 상세정보 조회
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectPrdInfoByPrdId(Map<String,Object> searchInfo) throws Exception {
        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        
        searchMap.put("coCd", "1000");

        return stockDao.selectPrdInfoByPrdId(searchMap);
	}
    
    /**
     * StockNo관리 stockNo 중복체크
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectCheckStockNo(Map<String,Object> searchInfo) throws Exception {
    	
    	NexacroResult result = new NexacroResult();

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        searchMap.put("coCd", "1000");

        return stockDao.selectCheckStockNo(searchMap);
	}
    
	/**
     * StockNo관리 생성
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
	@Override
    @Transactional
	public NexacroResult saveCustStockList(Map<String, Object> map) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		try {
			// input dataset id 카멜화
	        Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(map);
	        saveMap.put("coCd", "1000");
	        
	        // 로그인 세션확인
	     	String login = StringUtil.getString(saveMap.get("oprtrId"));
	     	if(login == null || "".equals(login)) {
	     		throw new MessageException(-100, "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다.");
	     	}
	        
	        // insert validation 체크간
	     	int stockChk1 = stockDao.selectChkForInsert(saveMap);
			if(stockChk1 > 0) {
				throw new MessageException(-1, "해당 상품ID는 이미 S/N가 등록되어 있습니다. 등록이 불가합니다."); 
			}
			
	        // StockNo관리 정보 생성
	        int returnCnt1 = stockDao.saveCustStockList(saveMap);
			if(returnCnt1 <= 0) {
				throw new MessageException(-1, "저장에 실패했습니다."); 
			}
			
			// StockNo관리 이력정보 생성
			saveMap.put("hstSprCd", "C");
			int returnCnt2 = stockDao.saveCustStockHist(saveMap);
			if(returnCnt2 <= 0) {
				throw new MessageException(-1, "저장에 실패했습니다."); 
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
     * StockNo관리 수정
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
	@Override
    @Transactional
	public NexacroResult updateCustStockList(Map<String, Object> map) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		try {
			// input dataset id 카멜화
	        Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(map);
	        
	        // 로그인 세션확인
	     	String login = StringUtil.getString(saveMap.get("oprtrId"));
	     	if(login == null || "".equals(login)) {
	     		throw new MessageException(-100, "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다.");
	     	}
	        
	        if(!saveMap.get("BUseYn").equals(saveMap.get("useYn")) && "Y".equals(saveMap.get("useYn"))){
				// 사용여부가 사용으로 수정된 경우 stockNo의 중복여부 체크, 존재할경우 수정은 실행되고 메세지만 전달
	        	int stockChk = stockDao.selectChkForStock(saveMap);
	        	if(stockChk > 0) resultMap.put("msg", saveMap.get("stockNo"));
			}
	        
	        // StockNo관리 수정
	        int returnCnt1 = stockDao.updateCustStockList(saveMap);
			if(returnCnt1 <= 0) {
				throw new MessageException(-1, "수정에 실패했습니다."); 
			}
			
			// StockNo관리 이력정보 생성
			saveMap.put("hstSprCd", "U");
			int returnCnt2 = stockDao.saveCustStockHist(saveMap);
			if(returnCnt2 <= 0) {
				throw new MessageException(-1, "수정에 실패했습니다."); 
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
     * StockNo관리 이력조회
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectCustStockHst(Map<String,Object> searchInfo) throws Exception {
    	NexacroResult result = new NexacroResult();

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        searchMap.put("coCd", "1000");

        return stockDao.selectCustStockHst(searchMap);
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
            searchMap.put("pgmId", "SSP_BO_MF_25");
            searchMap.put("excelMetaSeq", 1);
            searchMap.put("saveFileNm", "StockNo관리목록.xlsx");
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
