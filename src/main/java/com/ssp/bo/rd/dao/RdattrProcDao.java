package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title R&D속성
 * @package com.ssp.bo.rd.dao
 * </pre>
 * @author 김진섭
 * @since 2022.03.11
 * @version 1.0
 * @see RdattrProcDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface RdattrProcDao {

    /** SSP속성 목록 조회 */
    List<Map<String, Object>> selectPropertyList(Map<String, Object> searchMap) throws Exception;

	int selectPropertyCount(Map<String, Object> searchMap) throws Exception;

	int insertProperty(Map<String, Object> data) throws Exception;

	int updateProperty(Map<String, Object> data) throws Exception;

	List<Map<String, Object>> selectProperty(Map<String, Object> searchMap) throws Exception;
	
	//속성명 중복체크
	String selectRdAttrDuplicateCheck(Map<String, Object> searchMap) throws Exception;
    
}
