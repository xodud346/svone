package com.ssp.bo.co.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title CoOprtrUnitDao
 * @package com.ssp.bo.co.dao
 * <pre>
 * @author lee
 * @since 2022-05-24
 * @version 1.0
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-05-24	lee	최초작성
 */
public interface CoOprtrUnitDao {

	/** 대상조회 */
	List<Map<String, Object>> selectOprtrUnitList(Map<String, Object> commandMap);
}
