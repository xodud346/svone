package com.ssp.bo.co.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 메뉴권한관리
 * @package com.serveone.co.dao
 * </pre>
 * @author 
 * @since 2022. 01. 27.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.27			최초작성
 */
public interface CoMnuAuthGrpMngDao {
	
	/** 메뉴권한그룹관리 - 메뉴권한없는정보목록 */
    List<Map<String, Object>> selectMnuMngList(Map<String, Object> searchMap) throws Exception;
    
    /** 메뉴권한그룹관리 - 메뉴권한저장목록 */
    List<Map<String, Object>> selectMnuAuthInfoList(Map<String, Object> searchMap) throws Exception;

    /** 메뉴권한그룹정보 목록 */
    List<Map<String, Object>> selectMnuAuthGrpInfoList(Map<String, Object> searchMap) throws Exception;
    
    /** 메뉴권한그룹 등록*/
    int insertMnuAuthInfo(Map<String, Object> saveMap) throws Exception;

    /** 메뉴권한정보 삭제 */
    int deleteMnuAuthInfo(Map<String, Object> saveMap) throws Exception;
    
    /** 메뉴권한그룹정보 등록*/
    int insertMnuAuthGrpInfo(Map<String, Object> saveMap) throws Exception;

    /** 메뉴권한그룹정보 삭제 */
    int deleteMnuAuthGrpInfo(Map<String, Object> saveMap) throws Exception;

    /** 부서별 권한 목록 */
    List<Map<String, Object>> selectDeptAuthMngList(Map<String, Object> searchMap);

    /** 부서별 권한 메뉴 */
    List<Map<String, Object>> selectDeptAuthMngMenu(Map<String, Object> searchMap);

    /** 부서별 권한 등록 */
    int insertDeptAuthMngMenu(Map<String, Object> saveMap) throws Exception;

    /** 부서별 권한 수정 */
    int updateDeptAuthMngMenu(Map<String, Object> saveMap) throws Exception;

    /** 부서별 권한 삭제 */
    int deleteDeptAuthMngMenu(Map<String, Object> saveMap) throws Exception;

    /** 부서별 권한 메뉴 카운트 */
    int selectDeptAuthMngCount(Map<String, Object> saveMap);

    /** 운영자별 메뉴권한분류코드 목록  */
    List<Map<String, Object>> selectOprtrAuthInfoList(Map<String, Object> searchMap);

    /** 운영자별 메뉴 권한 카운트 */
    int selectOprtrAuthInfoCount(Map<String, Object> saveMap);

    /** 운영자별 메뉴 권한 등록 */
    int insertOprtrAuthInfo(Map<String, Object> saveMap) throws Exception;

    /** 운영자별 메뉴 권한 수정 */
    int updateOprtrAuthInfo(Map<String, Object> saveMap) throws Exception;

    /** 운영자별 메뉴 권한 삭제 */
    int deleteOprtrAuthInfo(Map<String, Object> saveMap) throws Exception;

    /** 운영자 권한 제외 메뉴 목록 */
    List<Map<String, Object>> selectOprtrMnuMngList(Map<String, Object> searchMap);

    /** 운영자별 메뉴 목록 */
    List<Map<String, Object>> selectOprtrMnuAuthGrpMngList(Map<String, Object> searchMap);

    /** 운영자별 메뉴 목록 삭제 */
    int deleteAuthOprtrMng(Map<String, Object> data) throws Exception;

    /** 운영자별 메뉴 목록 삭제 */
    int insertAuthOprtrMng(Map<String, Object> data) throws Exception;

    /** 부서별 메뉴권한 엑셀 */
    List<Map<String, Object>> selectDeptAuthMngMenuExcel(Map<String, Object> searchMap) throws Exception;

    /** 운영자별 메뉴권한 엑셀 */
    List<Map<String, Object>> selectOprtrAuthMngMenuExcel(Map<String, Object> searchMap) throws Exception;
}
