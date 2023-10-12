package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao
 * <pre>    CustDeptDao
 * @author  moonjooh
 * @since   2022. 02. 11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.02.11		최초작성
 *  2022.02.17		부서상세 조회 및 수정구현
 *  2022.02.18		부서상세 생성/복사 구현
 */
public interface CustDeptDao {

	// 부서목록 조회
    List<Map<String, Object>> selectCustDept(Map<String, Object> searchMap);
    
    // 부서목록 조회 카운트
 	int selectCustDeptCount(Map<String, Object> searchMap) throws Exception;
    
    // 부서목록 일괄상태변경
 	int saveCustDeptState(Map<String, Object> saveMap) throws Exception;
    
    // 부서조회 상세조회
    List<Map<String, Object>> selectCustDeptDetailInfo(Map<String, Object> searchMap);

    // 부서조회 상세 수정
    int saveCustDeptDetailInfo(Map<String, Object> saveMap) throws Exception;
    
    // 부서조회 제어권한 수정
    int saveCustDeptDetailInfoAuth(Map<String, Object> saveMap) throws Exception;
    
    // 부서생성 고객구분 조회
    List<Map<String, Object>> selectCustSpr(Map<String, Object> searchMap);
    
	// 부서목록 조회
    List<Map<String, Object>> selectHgstDept(Map<String, Object> searchMap);
    
    // 부서생성 insert
    int insertCustDeptDetail (Map<String, Object> saveMap) throws Exception;
    
    // 부서생성 제어권한 insert 
    int insertCustDeptDetailAuth (Map<String, Object> saveMap) throws Exception;
    
    // DEPT_ID 채번
    String selectSeqDeptId(Map<String, Object> searchMap) throws Exception;

	int selectChkHrnkDeptUse(Map<String, Object> searchMap) throws Exception;

	// 선택한 운영단위의 권한을 조회
	Map<String, Object> selectAuthByOprUnit(Map<String, Object> searchMap) throws Exception;

	// 부서의 하위 회원 존재여부 확인
	int chkMbrDeptUse(Map<String, Object> searchMap) throws Exception;

	int selectHrnkDeptIdCnt(Map<String, Object> saveMap) throws Exception;
	
	Map<String, Object> selectOprUnitRegStatsCdChk(Map<String, Object> paramMap) throws Exception;

	int selectChkUpperHrnkDeptUse(Map<String, Object> saveMap) throws Exception;

	Map<String, Object> selectOprUnituseYn(Map<String, Object> searchMap) throws Exception;
}
