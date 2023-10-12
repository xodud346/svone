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
 * <pre>    CustBgtChmAprvlService
 * @author  moonjooh
 * @since   2022. 04. 13.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.04.13		최초작성
 */

public interface CustBgtChmAprvlService {

	// 화학물질 결재선 관리 목록 조회
	List<Map<String,Object>> selectCustBgtChmAprvl(Map<String,Object> searchInfo, CCUtils ccUtils) throws Exception;
	
	// 화학물질 결재선 관리 목록 삭제
	NexacroResult deleteCustBgtChmAprvl(List<Map<String, Object>> saveMap) throws Exception;
		
	// 화학물질 결재선 관리 상세 결재선 생성
	NexacroResult saveCustBgtChmAprvl(Map<String,Object> saveMap1, List<Map<String,Object>> saveListMap2) throws Exception;
		
	// 화학물질 결재선 관리 상세 결재선 수정
	NexacroResult updateCustBgtChmAprvl(Map<String,Object> saveMap1, List<Map<String,Object>> saveListMap2) throws Exception;

	// 화학물질 결재선 관리 조회
	List<Map<String, Object>> selectPopAprInfo(Map<String, Object> searchMap) throws Exception;

	// 화학물질 결재선 관리 상세 결재선조회
	List<Map<String, Object>> selectPopAprDetail(Map<String, Object> map) throws Exception;
			
}
