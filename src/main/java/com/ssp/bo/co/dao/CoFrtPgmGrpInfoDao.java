package com.ssp.bo.co.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao
 * <pre>    CoFrtPgmGrpInfoDao
 * @author 
 * @since 2022.03.16
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */
public interface CoFrtPgmGrpInfoDao {
 
    List<Map<String, Object>> selectFrtPgmGrpList(Map<String, Object> searchMap) throws Exception;
    
    List<Map<String, Object>> selectPgmGrpIdCheck(Map<String, Object> searchMap) throws Exception;
    
    int selectFrtPgmGrpListCount(Map<String, Object> searchMap) throws Exception;
    
    int insertFrtPgmGrpInfo (Map<String, Object> saveMap) throws Exception;
    
    int updateFrtPgmGrpInfo (Map<String, Object> saveMap) throws Exception;
    
    int deleteFrtPgmGrpInfo (Map<String, Object> saveMap) throws Exception;
    
    List<Map<String, Object>> selectFrtPgmGrpPopupList(Map<String, Object> searchMap) throws Exception;

}
