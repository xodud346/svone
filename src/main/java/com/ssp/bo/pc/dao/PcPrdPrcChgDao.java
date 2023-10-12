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
 * @see PcPrdPrcChgDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface PcPrdPrcChgDao { 

    /** 리스트 조회 */
    List<Map<String, Object>> selectExPrdPrcList(Map<String, Object> searchMap);
    
    int selectExPrdPrcCount(Map<String, Object> searchMap) throws Exception;
    
    /** 저장 */
    int insertExPrdPrc(Map<String, Object> commandMap) throws Exception;
    
    List<Map<String, Object>> selectExPrdPrcDetail(Map<String, Object> searchMap) throws Exception;
    
	List<Map<String, Object>> selectExPrdPrcHstList(Map<String, Object> searchMap);
    
    int selectExPrdPrcHstCount(Map<String, Object> searchMap) throws Exception;
    
}
