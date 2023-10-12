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
 * @see PcPrdProcStbDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface PcPrdProcStbDao {

    /** 리스트 조회 */
    List<Map<String, Object>> selectPcPubPrdProcStbList(Map<String, Object> searchMap);
    
    int selectPcPubPrdProcStbCount(Map<String, Object> searchMap) throws Exception;
    
}
