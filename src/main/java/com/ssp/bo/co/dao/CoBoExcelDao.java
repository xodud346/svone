package com.ssp.bo.co.dao;

import java.util.List;
import java.util.Map;

import com.ssp.core.co.dto.CoExcelDto;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao
 * <pre>    CoBoExcelDao
 * @author  KST
 * @since   2023-07-20
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023. 07. 20.		KST	최초작성
 */
public interface CoBoExcelDao {
	/** 2023.07.20 KST 추가 - NVL 제거 버전 */
	List<CoExcelDto> selectExcelList(Map<String, Object> commandMap) throws Exception;
}
