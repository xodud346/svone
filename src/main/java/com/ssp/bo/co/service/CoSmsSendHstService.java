package com.ssp.bo.co.service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 공통 컨트롤러
 * @package com.ssp.core.co.service
 * </pre>
 * @author lee
 * @since 2023. 06. 02.
 * @version 1.0
 * @see CoSmsSendHstService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.06.02.	이상민	최초작성
 */
public interface CoSmsSendHstService {
    
	/** SMS발송이력목록 카운트 */
    int selectSmsSendHstListCount(Map<String, Object> searchMap) throws Exception;
    
	/** SMS발송이력목록 조회 */
    List<Map<String, Object>> selectSmsSendHstList(Map<String, Object> commandMap) throws Exception;

}
