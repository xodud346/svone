package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao
 * <pre>    CustBgtCndlAprvlDao
 * @author  moonjooh
 * @since   2022. 03. 16.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.03.16		최초작성
 */
public interface CustBgtCndlAprvlDao {

	// 조건부 결재선 관리 목록 조회
    List<Map<String, Object>> selectCustBgtCndlAprvl(Map<String, Object> searchMap);
    
    // 조건부 결재선 관리 목록 삭제
    void deleteCustBgtCndlAprvl(Map<String, Object> saveMap) throws Exception;
    
    // 조건부 결재선 관리 목록 결재선 삭제
    void deleteCustBgtCndlAprvlDetail(Map<String, Object> saveMap) throws Exception;
    
    // 생성된 결재선 관리 상세 관리정보 APRVL_SET_SEQ 채번
    int selectAprvlSetSeq(Map<String, Object> searchMap) throws Exception;
    
    // insert validation
    int selectInsertValidationCheck(Map<String, Object> searchMap) throws Exception;
    
    // 조건부 결재선 관리 상세 관리정보 생성
    int insertCndlAprvlInfo(Map<String, Object> saveMap) throws Exception;

    // 조건부 결재선 관리 상세 관리정보 이력
    void insertCndlAprvlInfoHist(Map<String, Object> saveMap) throws Exception;

    // 조건부 결재선 관리 상세 결재선정보 생성
    int insertPopApr(Map<String, Object> saveMap) throws Exception;
    
    // 결재선 설정정보 수정
    int updateAprvl(Map<String, Object> saveMap) throws Exception;
    
    // 결재선 관리 상세 결재선정보 수정
    int updatePopApr(Map<String, Object> saveMap) throws Exception;

    // 계정별 결재선 관리 상세 결재선정보 삭제
    void deletePopApr(Map<String, Object> saveMap) throws Exception;

	List<Map<String, Object>> selectPopAprInfo(Map<String, Object> searchMap) throws Exception;

	List<Map<String, Object>> selectPopAprDetail(Map<String, Object> searchMap) throws Exception;

	void savePrdAprvlInfoHistForDelete(Map<String, Object> saveMap) throws Exception;
    
}
