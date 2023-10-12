package com.ssp.bo.cc.service;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title CustAlnceSsoMngService
 * @desc SSO회원관리 목록
 * @package com.ssp.core.co.service
 * </pre>
 * @author 
 * @since 2023.05.09
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.05.09			최초작성
 */
public interface CustAlnceSsoMngService {	 
	List<Map<String, Object>> selectSsoMngList(Map<String, Object> commandMap) throws Exception;
    
	void saveSsoMngList (Map<String, Object> searchMap, List<Map<String, Object>> list) throws Exception;
    
	void deleteSsoMngList (List<Map<String, Object>> list) throws Exception;

	List<Map<String, Object>> selectSsoMngPopupList(Map<String, Object> commandMap) throws Exception;
	
	int selectSsoMngCount(Map<String, Object> searchMap) throws Exception;

}
