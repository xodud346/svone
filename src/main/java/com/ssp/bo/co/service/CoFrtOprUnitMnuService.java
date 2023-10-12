package com.ssp.bo.co.service;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title CoFrtOprUnitMnuService
 * @desc 프론트메뉴관리 
 * @package com.ssp.core.co.service
 * </pre>
 * @author 
 * @since 2022. 03. 17
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.16			최초작성
 */
public interface CoFrtOprUnitMnuService {	 
	List<Map<String, Object>> selectFrtOprUnitMnuList(Map<String, Object> commandMap) throws Exception;
    
	void saveFrtOprUnitMnuList (Map<String, Object> searchMap, List<Map<String, Object>> list) throws Exception;
    
	void deleteOprUnitMnuList (List<Map<String, Object>> list, Map<String, Object> admin) throws Exception;

	int selectFrtOprUnitMnuListCount(Map<String, Object> searchMap) throws Exception;

}
