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
 * @see PcPrdDlcstDtlsDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *
 */
public interface PcPrdDlcstDtlsDao {

    List<Map<String, Object>> selectPrdDlcstHstList(Map<String, Object> searchMap);

    int selectPrdDlcstHstCount(Map<String, Object> searchMap) throws Exception;

    int updatePrdDlcstDtls(Map<String, Object> commandMap) throws Exception;

    int insertPcPrdDlcstHist(Map<String, Object> searchMap) throws Exception;

    int updatePcPrdDlcstHist(Map<String, Object> searchMap) throws Exception;

    int deletePcPrdDlcstHist(Map<String, Object> searchMap) throws Exception;

    Map<String, Object> insertPcPrdDlcstHistLast(Map<String, Object> searchMap) throws Exception;

	int updatePcPrdDlcsHistPairUpdateUser(Map<String, Object> dataMap) throws Exception;
}
