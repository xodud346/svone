package com.ssp.bo.pc.service;

import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title 
 * @package com.ssp.bo.pc.service
 * </pre>
 * @author scvgo17
 * @since 2022. 01. 18.
 * @version 1.0
 * @see PcIntlLwstService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface PcIntlLwstService {

	NexacroResult selectIntlLwstList(Map<String, Object> commandMap) throws Exception;
	
    NexacroResult insertIntlLwst(Map<String, Object> searchMap) throws Exception;

    Map<String, Object> selectIntlLwstDetail(Map<String, Object> commandMap) throws Exception;
}
