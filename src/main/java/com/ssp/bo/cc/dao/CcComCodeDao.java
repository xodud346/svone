package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title   CcComCodeDao Interface
 * @desc    공통코드 조회
 * @package com.ssp.bo.cc.dao
 * <pre>
 * 
 * @author  박성근
 * @since   2022.02.23
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자   	내용
 * ------------------------------------------------
 * 2022.02.21   박성근   	최초작성
 * ------------------------------------------------
 */
public interface CcComCodeDao {
	
	List<Map<String, Object>> selectComCodeDtl(Map<String, Object> param) throws Exception;
	
	
	List<Map<String, Object>> selectBzplcOprunit(Map<String, Object> param) throws Exception;


	int checkMbrExist(Map<String, Object> param) throws Exception;
}
