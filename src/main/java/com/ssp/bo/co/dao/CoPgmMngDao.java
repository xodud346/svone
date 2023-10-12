package com.ssp.bo.co.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao
 * <pre>    CoPgmMngDao
 * @author 
 * @since 2022.01.26
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.26 	최초작성
 */
public interface CoPgmMngDao {
 
    List<Map<String, Object>> selectPgmMngList(Map<String, Object> searchMap) throws Exception;
    
    List<Map<String, Object>> selectPgmIdCheck(Map<String, Object> searchMap) throws Exception;
    
    int selectPgmMngCount(Map<String, Object> searchMap) throws Exception;
    
    int insertPgmMng (Map<String, Object> saveMap) throws Exception;
    
    int updatePgmMng (Map<String, Object> saveMap) throws Exception;
    
    int deletePgmMng (Map<String, Object> saveMap) throws Exception;
 
    List<Map<String, Object>> selectPgmMngPopupList(Map<String, Object> searchMap) throws Exception;
    

}
