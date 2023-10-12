package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title PcPlnPrfrtnfoService
 * @desc 계획매익율정보
 * @package com.ssp.bo.rd.service
 * </pre>
 * @author 
 * @since 2022. 02. 15.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.25			최초작성
 */
public interface PcPlnPrfrtnfoService {	 
	
	NexacroResult selectPcPlnPrfrtnfo(Map<String, Object> searchInfo) throws Exception;
    
	NexacroResult savePcPcPlnPrfrtInfo(List<Map<String, Object>> commandMapList) throws Exception;
	
}
