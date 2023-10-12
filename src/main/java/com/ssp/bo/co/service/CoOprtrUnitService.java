package com.ssp.bo.co.service;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 대상조회 service
 * @package com.ssp.bo.co.service
 * <pre>
 * @author lee
 * @since 2022-05-24
 * @version 1.0
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-05-24	lee	최초작성
 */
public interface CoOprtrUnitService {

	/** 대상설정 조회 ajax */
	List<Map<String, Object>> selectOprtrUnitListAjax(List<Map<String, Object>> searchMap) throws Exception;
}
