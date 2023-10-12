package com.ssp.bo.co.dao;

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
 * @see CoMnuAuthChgHstDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.07.24.	이상민	최초작성
 */
public interface CoMnuAuthChgHstDao {   
    
	/**메뉴권한변경이력 데이터 수 조회 */
    int selectMnuAuthChgHstListCount(Map<String, Object> searchMap);
	
	/** 메뉴권한변경이력 목록 조회 */
    List<Map<String, Object>> selectMnuAuthChgHstList(Map<String, Object> searchMap);
    
}
