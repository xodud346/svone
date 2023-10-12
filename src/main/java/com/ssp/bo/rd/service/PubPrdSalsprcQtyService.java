package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title PubPrdProcStbService
 * @desc 공용상품처리대기
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
public interface PubPrdSalsprcQtyService {	 
	
	NexacroResult selectPrPrdInfo(Map<String, Object> commandMap) throws Exception;	
	
	NexacroResult selectDpPrdStatsInfo(Map<String, Object> commandMap) throws Exception;	
	
	NexacroResult selectPurcInfo(Map<String, Object> commandMap) throws Exception;	
	
	NexacroResult selectPcPrdPrc(Map<String, Object> commandMap) throws Exception;	
	
	NexacroResult selectPcPrdQty(Map<String, Object> commandMap) throws Exception;	
	
	NexacroResult selectPcPrdDlcstDtls(Map<String, Object> commandMap) throws Exception;	
	
	NexacroResult selectRdReqNewPrdInfo(Map<String, Object> commandMap) throws Exception;		
	
	NexacroResult saveDpPrdStatsInfo(List<Map<String, Object>> commandMapList) throws Exception;
	
	NexacroResult savePcPrdPrcDtls(List<Map<String, Object>> commandMapList) throws Exception;
	
	NexacroResult saveRndQtyDc(List<Map<String, Object>> commandMapList) throws Exception;
	
	NexacroResult savePcPrdDlcstDtls(List<Map<String, Object>> commandMapList) throws Exception;
	
	
}
