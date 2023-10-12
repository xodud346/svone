package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.co.dao
 * <pre>    CustBgtChmAprvlDao
 * @author  moonjooh
 * @since   2022. 04. 13.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.04.13		최초작성
 */
public interface CustBgtChmAprvlDao {

	// 화학물질 결재선 관리 목록 조회
    List<Map<String, Object>> selectCustBgtChmAprvl(Map<String, Object> searchMap);
    
    // 화학물질 결재선 관리 목록 삭제
    void deleteCustBgtChmAprvl(Map<String, Object> saveMap) throws Exception;
    
    // 화학물질 결재선 관리 목록 결재선 삭제
    void deleteCustBgtChmAprvlDetail(Map<String, Object> saveMap) throws Exception;
    
    // 생성된 결재선 관리 상세 관리정보 APRVL_SET_SEQ 채번
    int selectAprvlSetSeq(Map<String, Object> searchMap) throws Exception;
    
    // insert validation
    int selectInsertValidationCheck(Map<String, Object> searchMap) throws Exception;
    
    // 화학물질 결재선 관리 상세 관리정보 생성
    int insertChmAprvlInfo(Map<String, Object> saveMap) throws Exception;

    // 화학물질 결재선 관리 상세 관리정보 이력
    void insertChmAprvlInfoHist(Map<String, Object> saveMap) throws Exception;

    // 화학물질 결재선 관리 상세 결재선정보 생성
    int insertPopApr(Map<String, Object> saveMap) throws Exception;
    
    // 결재선 설정정보 수정
    int updateAprvl(Map<String, Object> saveMap) throws Exception;
    
    // 결재선 관리 상세 결재선정보 수정
    int updatePopApr(Map<String, Object> saveMap) throws Exception;

    // 화학물질 결재선 관리 상세 결재선정보 삭제
    void deletePopApr(Map<String, Object> saveMap) throws Exception;

    // 화학물질 결재선 관리 조회
	List<Map<String, Object>> selectPopAprInfo(Map<String, Object> searchMap) throws Exception;

	// 화학물질 결재선 관리 상세 결재선조회
	List<Map<String, Object>> selectPopAprDetail(Map<String, Object> searchMap) throws Exception;

	// 화학물질결재선 관리 목록 결재선 이력
	void saveAprvlInfoHist(Map<String, Object> saveMap) throws Exception;
    
}
