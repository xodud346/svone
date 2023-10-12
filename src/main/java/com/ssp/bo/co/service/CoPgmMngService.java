package com.ssp.bo.co.service;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title CoPgmMngService
 * @desc 프로그램 관리 목록
 * @package com.ssp.core.co.service
 * </pre>
 * @author 
 * @since 2022. 01. 25.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.25			최초작성
 */
public interface CoPgmMngService {	 
	List<Map<String, Object>> selectPgmMngList(Map<String, Object> commandMap) throws Exception;
    
	void savePgmMngList (Map<String, Object> searchMap, List<Map<String, Object>> list) throws Exception;
    
	void deletePgmMngList (List<Map<String, Object>> list) throws Exception;

	List<Map<String, Object>> selectPgmMngPopupList(Map<String, Object> commandMap) throws Exception;
	
	int selectPgmMngCount(Map<String, Object> searchMap) throws Exception;

}
