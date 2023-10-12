package com.ssp.bo.co.service;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title CoFrtPgmGrpInfoService
 * @desc 프론트프로그램그룹관리 
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
public interface CoFrtPgmGrpInfoService {	 
	List<Map<String, Object>> selectFrtPgmGrpList(Map<String, Object> commandMap) throws Exception;
    
	void saveFrtPgmGrpList (Map<String, Object> searchMap, List<Map<String, Object>> list) throws Exception;
    
	void deleteFrtPgmGrpList (List<Map<String, Object>> list, Map<String, Object> admin ) throws Exception;

	int selectFrtPgmGrpListCount(Map<String, Object> searchMap) throws Exception;
	
	List<Map<String, Object>> selectFrtPgmGrpPopupList(Map<String, Object> commandMap) throws Exception;

}
