package com.ssp.bo.cc.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.cc.service
 * <pre>    CustGradeService
 * @author  moonjooh
 * @since   2022. 02. 10.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */

public interface CustGradeService {

	// 고객등급 리스트 조회
	NexacroResult custGrdList(Map<String,Object> searchInfo) throws Exception;
	
	// 고객등급 수정/저장
	NexacroResult saveCustGrd(List<Map<String,Object>> saveListMap) throws Exception;

	// 고객등급 사용중인 데이터 체크
	NexacroResult selectCustGrdChk(Map<String,Object> searchInfo) throws Exception;

	// 고객등급 이력 조회
	List<Map<String,Object>> selectCustGradeHst(Map<String, Object> searchMap) throws Exception;
	
}
