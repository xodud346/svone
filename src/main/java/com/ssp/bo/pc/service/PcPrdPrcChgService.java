package com.ssp.bo.pc.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title 절사관리
 * @package com.ssp.bo.pc.service
 * </pre>
 * @author scvgo17
 * @since 2022. 01. 18.
 * @version 1.0
 * @see PcPrdPrcChgService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface PcPrdPrcChgService {

	NexacroResult selectExPrdPrcList(Map<String, Object> commandMap) throws Exception;
	
    NexacroResult updateExPrdPrc(Map<String, Object> commandMap, List<Map<String, Object>> updateList) throws Exception;
    
    NexacroResult selectExPrdPrcDetail(Map<String, Object> searchMap) throws Exception;
    
    List<Map<String, Object>> updateExFile(HttpServletRequest request) throws Exception;
    
    NexacroResult selectExPrdPrcHstList(Map<String, Object> commandMap) throws Exception;

}
