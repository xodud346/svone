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
 * @see PcPrdPrcDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *
 */
public interface PcPrdPrcDao {


    Map<String, Object> updatePrdPrc(Map<String, Object> commandMap) throws Exception;

    List<Map<String, Object>> selectPrcHistoryList(Map<String, Object> searchMap);

    int selectPrcHistoryCount(Map<String, Object> searchMap) throws Exception;

    Map<String, Object> selectCurrentDate(Map<String, Object> searchMap) throws Exception;

    String selectCurrentDtm(Map<String, Object> commandMap) throws Exception;

    int insertPcPrdPrcHist(Map<String, Object> searchMap) throws Exception;

    int updatePcPrdPrcHist(Map<String, Object> searchMap) throws Exception;

    Map<String, Object> insertPcPrdPrcHistLast(Map<String, Object> searchMap) throws Exception;

    int selectPcPrdPrcHistCount(Map<String, Object> prcMap) throws Exception;

    int selectPcPrdPrcFstHstCount(Map<String, Object> prcMap) throws Exception;
}
