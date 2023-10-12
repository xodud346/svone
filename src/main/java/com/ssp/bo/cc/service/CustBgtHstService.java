package com.ssp.bo.cc.service;

import java.util.Map;

/**
 * <pre>
 * @title 예산이력
 * @desc
 * @package com.ssp.bo.cc.service
 * @ClassName CustBgtService
 * </pre>
 * @author  박성근
 * @since   2022. 03. 15.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */

public interface CustBgtHstService {
	
	Map<String,Object> selectBgtHstList(Map<String,Object> param);
	
}
