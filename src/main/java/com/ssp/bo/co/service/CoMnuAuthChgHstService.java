package com.ssp.bo.co.service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 공통 컨트롤러
 * @package com.ssp.bo.co.service
 * </pre>
 * @author lee
 * @since 2023. 07. 24.
 * @version 1.0
 * @see CoMnuAuthChgHstService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.07.24.	이상민	최초작성
 */
public interface CoMnuAuthChgHstService {
    
	/** 메뉴권한변경이력 카운트 */
    int selectMnuAuthChgHstListCount(Map<String, Object> searchMap) throws Exception;
    
	/** 메뉴권한변경이력 조회 */
    List<Map<String, Object>> selectMnuAuthChgHstList(Map<String, Object> commandMap) throws Exception;

}
