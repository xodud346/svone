package com.ssp.bo.co.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao
 * <pre>    CoFrtPgmInfoDao
 * @author 
 * @since 2022.03.16
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */
public interface CoFrtPgmInfoDao {
 
    List<Map<String, Object>> selectFrtPgmList(Map<String, Object> searchMap) throws Exception;
    
    List<Map<String, Object>> selectPgmIdCheck(Map<String, Object> searchMap) throws Exception;
    
    int selectFrtPgmListCount(Map<String, Object> searchMap) throws Exception;
    
    int saveFrtPgmInfo (Map<String, Object> saveMap) throws Exception;
    
    int updateFrtPgmInfo (Map<String, Object> saveMap) throws Exception;
    
    int deleteFrtPgmInfo (Map<String, Object> saveMap) throws Exception;
    
    List<Map<String, Object>> selectFrtPgmPopupList(Map<String, Object> searchMap) throws Exception;

    int updateHrnkPgmId (Map<String, Object> saveMap) throws Exception;
}
