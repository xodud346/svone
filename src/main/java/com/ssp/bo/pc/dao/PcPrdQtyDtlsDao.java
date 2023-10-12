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
 * @see PcPrdQtyDtlsDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *
 */
public interface PcPrdQtyDtlsDao {

    int updatePrdQtyDtls(Map<String, Object> commandMap) throws Exception;

    List<Map<String, Object>> selectPrdQtyHstList(Map<String, Object> searchMap);

    int selectPrdQtyHstCount(Map<String, Object> searchMap) throws Exception;

    int insertPcPrdQtyHist(Map<String, Object> searchMap) throws Exception;

    int updatePcPrdQtyHist(Map<String, Object> searchMap) throws Exception;

    int deletePcPrdQtyHist(Map<String, Object> searchMap) throws Exception;

    Map<String, Object> insertPcPrdQtyHistLast(Map<String, Object> searchMap) throws Exception;

	int updatePcPrdQtyHistPairUpdateUser(Map<String, Object> searchMap) throws Exception;
}
