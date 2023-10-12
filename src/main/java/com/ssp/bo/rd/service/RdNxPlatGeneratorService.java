package com.ssp.bo.rd.service;

import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title RdNxPlatGeneratorService
 * @desc  제너레이트(Ibits/Map버전)
 * @package com.ssp.bo.rd.service
 * </pre>
 * @author
 * @since 2022. 04. 14.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.14			최초작성
 */
public interface RdNxPlatGeneratorService {

	/**                                                                                                                     	
	 * 테이블 유저를 조회(selectNxPlatGeneratorUser)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */ 
	NexacroResult selectNxPlatGeneratorUser() throws Exception;

	/**                                                                                                                     	
	 * 모든 테이블을 조회(selectNxPlatGeneratorM)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */ 
	NexacroResult selectNxPlatGeneratorM(Map<String, Object> searchMap) throws Exception;

	/**                                                                                                                     	
	 * 각각 테이블 항목을 조회(selectNxPlatGeneratorD)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */ 
	NexacroResult selectNxPlatGeneratorD(Map<String, Object> searchMap) throws Exception;
}
