package com.ssp.bo.co.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao
 * <pre>    CoFrtOprUnitMnuDao
 * @author 
 * @since 2022.03.17
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */
public interface CoFrtOprUnitMnuDao {
 

    List<Map<String, Object>> selectFrtOprUnitMnuList(Map<String, Object> searchMap) throws Exception;
    
    List<Map<String, Object>> selectPgmIdCheck(Map<String, Object> searchMap) throws Exception;
    
    int selectFrtOprUnitMnuListCount(Map<String, Object> searchMap) throws Exception;
    
    int saveFrtOprUnitMnu (Map<String, Object> saveMap) throws Exception;
    
    int updateFrtOprUnitMnu (Map<String, Object> saveMap) throws Exception;
    
    int deletFrtOprUnitMnu (Map<String, Object> saveMap) throws Exception;

}
