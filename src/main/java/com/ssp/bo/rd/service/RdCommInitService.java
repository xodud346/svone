package com.ssp.bo.rd.service;

import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title RdCommInitService
 * @desc  R&D공통모듈
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
public interface RdCommInitService {

	/**                                                                                                                     	
	 * 초기에 코드에 설정한 모든 공통코드 조회(selectCommInitList)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */ 
	NexacroResult selectCommInitList(Map<String, Object> inMap) throws Exception;

	/**                                                                                                                     	
	 * RND상품권한조회(selectRndPrdAuthInq)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */ 
	NexacroResult selectRndPrdAuthInq(Map<String, Object> inMap) throws Exception;
}
