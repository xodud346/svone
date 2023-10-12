package com.ssp.bo.co.service;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title CoPgmMngService
 * @desc 프로그램 관리 목록
 * @package com.serveone.co.service
 * </pre>
 * @author 
 * @since 2022. 01. 25.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.25			최초작성
 */
public interface CoMnuAuthGrpMngService {
	/** 메뉴권한그룹관리 - 메뉴권한없는정보목록 */
	List<Map<String, Object>>  selectMnuMngList(Map<String, Object> searchMap) throws Exception;
	 
	/** 메뉴권한그룹관리 - 메뉴권한저장목록 */
	List<Map<String, Object>>  selectMnuAuthInfoList(Map<String, Object> commandMap) throws Exception;
    
	/** 메뉴권한그룹관리 - 메뉴권한정보저장*/
	void saveMnuAuthInfoList(Map<String, Object> saveMap,  List<Map<String, Object>> list) throws Exception;

	/** 메뉴권한그룹정보 목록 */
	List<Map<String, Object>>  selectMnuAuthGrpInfoList(Map<String, Object> commandMap) throws Exception;
	
	/** 메뉴권한그룹관리 - 메뉴권한그룹정보 저장*/
	void saveMnuAuthGrpInfo(Map<String, Object> saveMap,  List<Map<String, Object>> list) throws Exception;
	
	/** 메뉴권한그룹관리 - 메뉴권한그룹정보 삭제*/
	void deleteMnuAuthGrpInfoList(List<Map<String, Object>> list) throws Exception;
	
	/** 부서별 권한 목록 */
	List<Map<String, Object>> selectDeptAuthMngList(Map<String, Object> searchMap);

	/** 부서별 권한 메뉴 */
	List<Map<String, Object>> selectDeptAuthMngMenu(List<Map<String, Object>> searchMap);

	/** 부서별 권한 저장 */
	void saveDeptAuthMngMenu(Map<String, Object> commonMap, List<Map<String, Object>> saveList) throws Exception;

	/** 운영자별 메뉴권한분류코드 목록 */
	List<Map<String, Object>> selectOprtrAuthInfoList(Map<String, Object> searchMap);

	/** 운영자별 메뉴권한분류코드 저장 */
	void saveOprtrAuthInfo(Map<String, Object> commonMap, List<Map<String, Object>> saveList) throws Exception;

	/** 운영자 권한 제외 메뉴 */
	List<Map<String, Object>> selectOprtrMnuMngList(Map<String, Object> searchMap);

	/** 운영자별 메뉴 목록 */
	List<Map<String, Object>> selectOprtrMnuAuthGrpMngList(Map<String, Object> searchMap);

	/** 운영자별 메뉴목록 저장 */
	void saveAuthOprtrMngList(Map<String, Object> saveMap, List<Map<String, Object>> list) throws Exception;

	/** 부서별 메뉴권한 엑셀 */
	List<Map<String, Object>> selectDeptAuthMngMenuExcel(Map<String, Object> searchMap) throws Exception;

	/** 운영자별 메뉴권한 엑셀 */
	List<Map<String, Object>> selectOprtrAuthMngMenuExcel(Map<String, Object> searchMap) throws Exception;
}
