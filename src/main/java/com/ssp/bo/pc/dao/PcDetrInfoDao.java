package com.ssp.bo.pc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 절사관리
 * @package com.ssp.bo.pc.dao
 * </pre>
 * @author scvgo17
 * @since 2022. 01. 18.
 * @version 1.0
 * @see PropertyDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface PcDetrInfoDao {

    /** 리스트 조회 */
    List<Map<String, Object>> selectDetrInfoList(Map<String, Object> searchMap);
    
    /** 저장 */
    int updateDetrInfo(Map<String, Object> commandMap) throws Exception;
    
}
