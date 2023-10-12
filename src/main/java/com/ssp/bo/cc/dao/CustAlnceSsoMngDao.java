package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao
 * <pre>    CustAlnceSsoMngDao
 * @author 
 * @since 2023.05.09
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.05.09 	최초작성
 */
public interface CustAlnceSsoMngDao {
 
    List<Map<String, Object>> selectSsoMngList(Map<String, Object> searchMap) throws Exception;
    
    List<Map<String, Object>> selectSsoIdCheck(Map<String, Object> searchMap) throws Exception;
    
    int selectSsoMngCount(Map<String, Object> searchMap) throws Exception;
    
    int insertSsoMng (Map<String, Object> saveMap) throws Exception;
    
    int updateSsoMng (Map<String, Object> saveMap) throws Exception;
    
    int deleteSsoMng (Map<String, Object> saveMap) throws Exception;
 
    List<Map<String, Object>> selectSsoMngPopupList(Map<String, Object> searchMap) throws Exception;
    

}
