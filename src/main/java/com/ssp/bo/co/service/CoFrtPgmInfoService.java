package com.ssp.bo.co.service;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title CoFrtPgmInfoService
 * @desc 프론트프로그램관리 
 * @package com.ssp.core.co.service
 * </pre>
 * @author 
 * @since 2022. 03. 16
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.16			최초작성
 */
public interface CoFrtPgmInfoService {	 
	List<Map<String, Object>> selectFrtPgmList(Map<String, Object> commandMap) throws Exception;
    
	void saveFrtPgmList (Map<String, Object> searchMap, List<Map<String, Object>> list) throws Exception;
    
	void deleteFrtPgmList (List<Map<String, Object>> list, Map<String, Object> admin) throws Exception;

	int selectFrtPgmListCount(Map<String, Object> searchMap) throws Exception;
	
	List<Map<String, Object>> selectFrtPgmPopupList(Map<String, Object> commandMap) throws Exception;
	

}
