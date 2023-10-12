package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao
 * <pre>    StockDao
 * @author  moonjooh
 * @since   2022. 03. 22.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.03.22		최초작성
 */
public interface StockDao {

	// StockNo관리 목록 조회
    List<Map<String, Object>> selectCustStockList(Map<String, Object> searchMap);
    
    // StockNo관리 상품 상세정보 조회
    List<Map<String, Object>> selectPrdInfoByPrdId(Map<String, Object> searchMap);
    
    // StockNo관리 stockNo 중복체크
    List<Map<String, Object>> selectCheckStockNo(Map<String, Object> searchMap);
    
    // insert validation 체크
    int selectChkForInsert(Map<String, Object> saveMap) throws Exception;
    
    // StockNo 중복체크
    int selectChkForStock(Map<String, Object> saveMap) throws Exception;
    
    // StockNo관리 정보 생성
    int saveCustStockList(Map<String, Object> saveMap) throws Exception;
    
    // StockNo관리 이력정보 생성
    int saveCustStockHist(Map<String, Object> saveMap) throws Exception;
    
    // StockNo관리 수정
    int updateCustStockList(Map<String, Object> saveMap) throws Exception;
    
    // StockNo관리 이력조회
    List<Map<String, Object>> selectCustStockHst(Map<String, Object> searchMap);
    
}
