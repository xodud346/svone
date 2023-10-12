package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title R&D속성
 * @package com.ssp.bo.rd.service
 * </pre>
 * @author 김진섭
 * @since 2022.03.11
 * @version 1.0
 * @see RdattrProcService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface RdattrProcService {

    /** SSP속성 목록 조회 */
    List<Map<String, Object>> selectPropertyList(Map<String, Object> commandMap) throws Exception;

	int selectPropertyCount(Map<String, Object> searchMap) throws Exception;

	NexacroResult saveProperty(Map<String, Object> commandMap) throws Exception;

	List<Map<String, Object>> selectProperty(Map<String, Object> searchMap) throws Exception;
	
	//속성명 중복 체크
	String selectRdAttrDuplicateCheck(Map<String, Object> searchMap) throws Exception;

}
