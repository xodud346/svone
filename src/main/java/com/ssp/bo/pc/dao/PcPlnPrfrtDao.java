package com.ssp.bo.pc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 카테고리계획매익율
 * @package com.ssp.bo.pc.dao
 * </pre>
 * @author scvgo17
 * @since 2022. 01. 18.
 * @version 1.0
 * @see PcPlnPrfrtDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface PcPlnPrfrtDao {

    /** 리스트 조회 */
    List<Map<String, Object>> selectPlnPrfrtList(Map<String, Object> searchMap);
    
    int selectPlnPrfrtCount(Map<String, Object> searchMap) throws Exception;
    
    /** 저장 */
    int insertPlnPrfrt(Map<String, Object> commandMap) throws Exception;
    
    /** 저장 */
    int updatePlnPrfrt(Map<String, Object> commandMap) throws Exception;
    
    Map<String, Object> selectPlnPrfrtDetail(Map<String, Object> searchMap) throws Exception;
}
