package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.co.dao
 * <pre>    CustTrmnTgtBzplcDao
 * @author  moonjooh
 * @since   2022. 04. 13.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.05.09		최초작성
 */
public interface CustTrmnTgtBzplcDao {

	// 일반고객 종결대상 사업장 목록 조회
    List<Map<String, Object>> selectCustTrmnTgtBzplc(Map<String, Object> searchMap);

    // 일반고객 종결대상 사업장 종결처리
	int updateTrmnTgtBzplc(Map<String, Object> saveMap) throws Exception;
	
	
	int updateMbrNoUse    (Map<String, Object> saveMap) throws Exception;
	
	int updateDeptNoUse   (Map<String, Object> saveMap) throws Exception;
	
	int updateOprUnitNoUse(Map<String, Object> saveMap) throws Exception;
	
	int updateBzplcNoUse  (Map<String, Object> saveMap) throws Exception;
	
}
