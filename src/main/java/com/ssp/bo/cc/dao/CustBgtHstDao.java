package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 예산이력
 * @desc
 * @package com.ssp.core.co.dao
 * @ClassName CustBgtDao
 * </pre>    
 * @author  박성근
 * @since   2022. 03. 15.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface CustBgtHstDao {
	
	List<Map<String,Object>> selectBgtHstList(Map<String,Object> param);
	
}
