package com.ssp.bo.pc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 
 * @package com.ssp.bo.pc.dao
 * </pre>
 * @author scvgo17
 * @since 2022. 01. 18.
 * @version 1.0
 * @see PcIntlLwstDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface PcIntlLwstDao {

    /** 리스트 조회 */
    List<Map<String, Object>> selectIntlLwstList(Map<String, Object> searchMap);
    
    int selectIntlLwstCount(Map<String, Object> searchMap) throws Exception;
    
    /** 저장 */
    int insertIntlLwst(Map<String, Object> commandMap) throws Exception;
    
    Map<String, Object> selectIntlLwstDetail(Map<String, Object> searchMap) throws Exception;
    
}
