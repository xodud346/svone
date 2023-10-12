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
 * <pre>    CustTrmnTgtBzplcService
 * @author  moonjooh
 * @since   2022. 05. 09.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.05.09		최초작성
 */

public interface CustTrmnTgtBzplcService {

	// 일반고객 종결대상 사업장 목록 조회
	List<Map<String,Object>> selectCustTrmnTgtBzplc(Map<String,Object> searchInfo, CCUtils ccUtils) throws Exception;
	
	// 일반고객 종결대상 사업장 종결처리
	NexacroResult updateCustTrmnTgtBzplc(List<Map<String, Object>> saveMap) throws Exception;

	NexacroResult selectChkOpenVoc(List<Map<String, Object>> searchMap) throws Exception;
	
}
