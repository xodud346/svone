package com.ssp.bo.cc.service;

import java.util.Map;

/**
 * <pre>
 * @title helper
 * @desc
 * @package com.ssp.bo.cc.service
 * @ClassName CustHelperService
 * </pre>
 * @author  유창호
 * @since   2022. 04. 25.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */

public interface CustHelperService {
	
	/**
     * 고객도우미 상세정보 조회
     * @param paramMap Map
     * @return Map
     */
	Map<String,Object> selectCustHelperDetail(Map<String,Object> paramMap) throws Exception;
	
	/**
     * 고객도우미 상세정보 수정
     * @param paramMap Map
     * @return Map
     */
	Map<String,Object> updateCustHelperDetail(Map<String,Object> paramMap) throws Exception;
	
	/**
     * 고객도우미 등록 전 운영단위 중복등록 체크
     * @param paramMap Map
     * @return Map
     */
	Map<String,Object> selectOprUnitChk(Map<String,Object> paramMap) throws Exception;
	
	/**
     * 고객도우미 등록 프로세스
     * @param paramMap Map
     * @return Map
     */
	Map<String,Object> insertCustHelperInfo(Map<String,Object> paramMap) throws Exception;
	
}
