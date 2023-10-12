package com.ssp.bo.rd.service;

import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title RndregPrdLstMngService
 * @desc R&D등록상품목록관리
 * @package com.ssp.bo.rd.service
 * </pre>
 * @author 
 * @since 2022. 03. 16.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.25			최초작성
 */
public interface RndregPrdLstMngService {	 
	
	NexacroResult selectPcPrdPrcDtls(Map<String, Object> searchInfo) throws Exception;
    
}
