package com.ssp.bo.pc.service;

import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title 절사관리
 * @package com.ssp.bo.pc.service
 * </pre>
 * @author scvgo17
 * @since 2022. 01. 18.
 * @version 1.0
 * @see PcPlnPrfrtService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface PcPlnPrfrtService {

    /** 절사 목록 조회 */
	NexacroResult selectPlnPrfrtList(Map<String, Object> commandMap) throws Exception;
	
	/** 절사 조회 */
	Map<String, Object> selectPlnPrfrtDetail(Map<String, Object> commandMap) throws Exception;
	
	/** 절사 수정 */
    NexacroResult insertPlnPrfrt(Map<String, Object> searchMap) throws Exception;
    

}
