package com.ssp.bo.cc.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.cc.service
 * <pre>    CustIddtService
 * @author  moonjooh
 * @since   2022. 02. 21.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.02.21		최초작성
 */

public interface CustIddtService {

	// 산업군조회 목록
	NexacroResult selectCustIddtList(Map<String,Object> searchInfo) throws Exception;
	
	// 산업군조회 저장
	NexacroResult saveCustIddt(List<Map<String,Object>> saveListMap) throws Exception;

	// 산업군조회 삭제
	NexacroResult deleteCustIddt(List<Map<String,Object>> saveListMap) throws Exception;

	// 산업군조회 영업담당 콤보박스 조회
	NexacroResult selectCombo(Map<String,Object> searchInfo) throws Exception;

	// 산업군 상세 패키지 정보 조회 
	NexacroResult selectIddtMktgInfo(Map<String, Object> searchInfo) throws Exception;

	//산업군 상세 패키지 정보 저장
	NexacroResult saveIddtMktgInfo(Map<String, Object> saveInfo) throws Exception;
	
}
