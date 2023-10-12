package com.ssp.bo.cc.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.cc.service
 * <pre>    StockService
 * @author  moonjooh
 * @since   2022. 03. 22.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.03.22		최초작성
 */

public interface StockService {

	// StockNo관리 목록 조회
	List<Map<String,Object>> selectCustStockList(Map<String,Object> searchInfo, CCUtils ccUtils) throws Exception;

	// StockNo관리 상품 상세정보 조회
	List<Map<String,Object>> selectPrdInfoByPrdId(Map<String,Object> searchInfo) throws Exception;

	// StockNo관리 stockNo 중복체크
	List<Map<String,Object>> selectCheckStockNo(Map<String,Object> searchInfo) throws Exception;
	
	// StockNo관리 생성
	NexacroResult saveCustStockList(Map<String,Object> saveMap) throws Exception;
		
	// StockNo관리 수정
	NexacroResult updateCustStockList(Map<String,Object> saveMap) throws Exception;
	
	// StockNo관리 이력조회
	List<Map<String,Object>> selectCustStockHst(Map<String,Object> searchInfo) throws Exception;

	// 대용량엑셀
	NexacroResult selectAllExcelDownload(Map<String, Object> searchMap, CCUtils ccUtils) throws Exception;
		
}
