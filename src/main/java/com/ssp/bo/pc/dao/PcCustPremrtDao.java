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
 * @see PcCustPremrtDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface PcCustPremrtDao {

    /** 리스트 조회 */
    List<Map<String, Object>> selectCustPremrtList(Map<String, Object> searchMap);
    
    int selectCustPremrtCount(Map<String, Object> searchMap) throws Exception;
    
    /** 저장 */
    int insertCustPremrt(Map<String, Object> commandMap) throws Exception;
    
    /** 저장 */
    int updateCustPremrt(Map<String, Object> commandMap) throws Exception;
    
    Map<String, Object> selectCustPremrtDetail(Map<String, Object> searchMap) throws Exception;
}
