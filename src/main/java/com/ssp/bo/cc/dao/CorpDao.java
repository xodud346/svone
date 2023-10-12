package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.cc.dao
 * <pre>    CorpDao
 * @author  박성근
 * @since   2022.02.11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface CorpDao {
    
    List<Map<String, Object>> selectList(Map<String, Object> params) throws Exception;
    List<Map<String, Object>> selectXlsx(Map<String, Object> params) throws Exception;
    
}
