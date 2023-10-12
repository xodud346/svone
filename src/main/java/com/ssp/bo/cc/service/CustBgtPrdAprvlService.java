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
 * <pre>    CustBgtPrdAprvlService
 * @author  moonjooh
 * @since   2022. 03. 11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.03.02		최초작성
 */

public interface CustBgtPrdAprvlService {

	// 상품결재선 관리 목록 조회
	List<Map<String,Object>> selectCustBgtPrdAprvl(Map<String,Object> searchInfo, CCUtils ccUtils) throws Exception;
		
	// 상품결재선 관리 목록 삭제
	NexacroResult deleteCustBgtPrdAprvl(List<Map<String, Object>> saveMap) throws Exception;

	// 상품 상세정보 조회
	List<Map<String,Object>> selectPrdInfoByPrdId(Map<String,Object> searchInfo) throws Exception;
	
	// 상품 결재선 관리 상세 결재선 생성
	NexacroResult savePrdAprvlInfo(Map<String,Object> saveMap1, List<Map<String,Object>> saveListMap2) throws Exception;
	
	// 상품 결재선 관리 상세 결재선 수정
	NexacroResult updatePrdAprvlInfo(Map<String,Object> saveMap1, List<Map<String,Object>> saveListMap2) throws Exception;

	List<Map<String, Object>> selectPopAprInfo(Map<String, Object> searchMap) throws Exception;
		
}
