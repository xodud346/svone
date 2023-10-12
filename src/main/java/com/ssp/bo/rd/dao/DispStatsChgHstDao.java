package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.rd.dao
 * <pre>    PubPrdProcStbDao
 * @author 
 * @since 2022.02.15
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.26 	최초작성
 */
public interface DispStatsChgHstDao {
 
    List<Map<String, Object>> selectList(Map<String, Object> searchMap) throws Exception;
    int selectCount(Map<String, Object> searchMap) throws Exception;

}
