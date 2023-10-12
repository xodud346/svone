package com.ssp.bo.pc.dao;

import java.util.Map;

/**
 * <pre>
 * @title 카테고리계획매익율
 * @package com.ssp.bo.pc.dao
 * </pre>
 * @author scvgo17
 * @since 2022. 01. 18.
 * @version 1.0
 * @see PcNewPrdReqPrcDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface PcNewPrdReqPrcDao {

    /** 저장 */
    int updatePcNewPrdReqPrc(Map<String, Object> commandMap) throws Exception;
    
    Map<String, Object> insertEmailNewPrdReqExcept(Map<String, Object> commandMap) throws Exception;

	int insertEmailSendRequest(Map<String, Object> saveMap) throws Exception;

	String checkDuplicateRequest(Map<String, Object> saveMap) throws Exception;
}
