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
 * <pre>    CustBgtByacctAprvlService
 * @author  moonjooh
 * @since   2022. 03. 02.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.03.02		최초작성
 */

public interface CustBgtByacctAprvlService {

	// 계정별 결재선 관리 목록 조회
	List<Map<String,Object>> selectCustBgtByacctAprv(Map<String,Object> searchInfo, CCUtils ccUtils) throws Exception;

	// 계정별 결재선 관리 상세 결재선조회
	List<Map<String, Object>> selectPopAprInfo(Map<String, Object> searchMap) throws Exception;
	List<Map<String,Object>> selectPopAprDetail(Map<String,Object> searchInfo) throws Exception;
	
	// 부서조회 상세 수정
	NexacroResult savePopAprDetail(Map<String,Object> saveMap1, List<Map<String,Object>> saveListMap2) throws Exception;
	
	// 부서조회 상세 생성
	NexacroResult insertPopAprDetail(Map<String,Object> saveMap1, List<Map<String,Object>> saveListMap2) throws Exception;
		
	// 계정별 결재선 관리 예산계정 조회
	List<Map<String,Object>> selectAcctList(Map<String,Object> searchInfo) throws Exception;
		
	// 계정별 결재선 관리 목록 삭제
	NexacroResult deleteCustBgtByAcctAprv(List<Map<String,Object>> saveMap) throws Exception;

		
}
