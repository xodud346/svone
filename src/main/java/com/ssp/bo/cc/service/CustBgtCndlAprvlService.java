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
 * <pre>    CustBgtCndlAprvlService
 * @author  moonjooh
 * @since   2022. 03. 16.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.03.16		최초작성
 */

public interface CustBgtCndlAprvlService {

	// 조건부 결재선 관리 목록 조회
	List<Map<String,Object>> selectCustBgtCndlAprvl(Map<String,Object> searchInfo, CCUtils ccUtils) throws Exception;
	
	// 조건부 결재선 관리 목록 삭제
	NexacroResult deleteCustBgtCndlAprvl(List<Map<String, Object>> saveMap) throws Exception;
		
	// 조건부 결재선 관리 상세 결재선 생성
	NexacroResult saveCustBgtCndlAprvl(Map<String,Object> saveMap1, List<Map<String,Object>> saveListMap2) throws Exception;
		
	// 조건부 결재선 관리 상세 결재선 수정
	NexacroResult updateCustBgtCndlAprvl(Map<String,Object> saveMap1, List<Map<String,Object>> saveListMap2) throws Exception;

	List<Map<String, Object>> selectPopAprInfo(Map<String, Object> searchMap) throws Exception;

	List<Map<String, Object>> selectPopAprDetail(Map<String, Object> map) throws Exception;

	// 대용량엑셀
	NexacroResult selectAllExcelDownload(Map<String, Object> searchMap, CCUtils ccUtils) throws Exception;
			
}
