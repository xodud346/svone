package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title DispStatsChgHstService
 * @desc 진열상태변경이력
 * @package com.ssp.bo.rd.service
 * </pre>
 * @author 
 * @since 2022. 02. 17.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.25			최초작성
 */
public interface DispStatsChgHstService {	 
	NexacroResult selectList(Map<String, Object> commandMap) throws Exception;
    
}
