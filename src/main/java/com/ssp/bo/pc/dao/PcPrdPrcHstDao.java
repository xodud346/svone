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
 * @see PcPrdPrcHstDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *
 */
public interface PcPrdPrcHstDao {
	
    List<Map<String, Object>> selectPrdPrcHstList(Map<String, Object> searchMap);

    int selectPrdPrcHstCount(Map<String, Object> searchMap) throws Exception;

}
