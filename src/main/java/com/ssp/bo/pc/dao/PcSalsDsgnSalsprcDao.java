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
 * @see PcSalsDsgnSalsprcDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *
 */
public interface PcSalsDsgnSalsprcDao {

    int updateSalsDsgnSalsprc(Map<String, Object> commandMap) throws Exception;

    List<Map<String, Object>> selectSalsDsgnSalsprcHstList(Map<String, Object> searchMap);

    int selectSalsDsgnSalsprcHstCount(Map<String, Object> searchMap) throws Exception;

    int insertPcSalsprcHist(Map<String, Object> searchMap) throws Exception;

    int updatePcSalsprcHist(Map<String, Object> searchMap) throws Exception;

    int deletePcSalsprcHist(Map<String, Object> searchMap) throws Exception;

    Map<String, Object> insertPcSalsprcHistLast(Map<String, Object> searchMap) throws Exception;
}
