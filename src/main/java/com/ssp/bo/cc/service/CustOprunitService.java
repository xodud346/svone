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
 * <pre>    CustOprunitService
 * @author  moonjooh
 * @since   2022. 02. 16.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.16		최초작성
 */

public interface CustOprunitService {

	Map<String, Object> selectCustOprunit(Map<String,Object> searchInfo, CCUtils ccUtils) throws Exception;
	
	// 사업장+운영단위+부서
	Map<String, Object> selectBzplcOprunitDept(Map<String,Object> param) throws Exception;
	
	// 운영단위 상세
	Map<String, Object> selectOprunitBasis(Map<String,Object> param) throws Exception;
	Map<String, Object> saveOprunitBasis(Map<String,Object> dsOprunitBasis, List<Map<String,Object>> dsOprunitRefCd, List<Map<String,Object>> dsOprunitOshtCd) throws Exception;
	
	
	// 운영단위 참조코드 설정
	Map<String, Object> listDept(Map<String, Object> param) throws Exception;
	
	Map<String, Object> selectRefCd(Map<String, Object> param) throws Exception;
	Map<String, Object> saveRefCd(Map<String, Object> param) throws Exception;
	
	
	// 운영단위 제어권한 설정
	Map<String, Object> selectCtlAuthInfo(Map<String, Object> param) throws Exception;
	NexacroResult saveCtlAuthInfo(Map<String, Object> param) throws Exception;
	
	// 입고책임자 설정
	Map<String, Object> selectGiChrpsnInfo(Map<String, Object> param) throws Exception;
	Map<String, Object> saveGiChrpsnInfo  (Map<String, Object> param) throws Exception;
	
	 //출고명세서 목록 팝업		박재광,	2022. 05. 10.
	NexacroResult selectGoStmList(Map<String,Object> param) throws Exception;

	NexacroResult selectAllExcelDownload(Map<String, Object> searchMap, CCUtils ccUtils) throws Exception;
	NexacroResult selectAuthAllExcelDownload(Map<String, Object> searchMap, CCUtils ccUtils) throws Exception;

	NexacroResult selectChkCcoDetail(Map<String, Object> searchMap) throws Exception;
	
}
