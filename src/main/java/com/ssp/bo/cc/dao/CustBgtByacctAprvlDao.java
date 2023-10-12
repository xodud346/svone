package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao
 * <pre>    CustBgtByacctAprvlDao
 * @author  moonjooh
 * @since   2022. 03. 02.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.03.02		최초작성
 */
public interface CustBgtByacctAprvlDao {

	// 계정별 결재선 관리 조회
    List<Map<String, Object>> selectCustBgtByacctAprv(Map<String, Object> searchMap);
    
    // 계정별 결재선 관리 상세 결재선조회
	List<Map<String, Object>> selectPopAprInfo(Map<String, Object> searchMap);
    List<Map<String, Object>> selectPopAprDetail(Map<String, Object> searchMap);
    
    // 계정별 결재선 관리 상세 관리정보 수정
    int savePopAprDetail(Map<String, Object> saveMap) throws Exception;

    // 계정별 결재선 관리 상세 결재선정보 수정
    int updatePopApr(Map<String, Object> saveMap) throws Exception;

    // 계정별 결재선 관리 상세 결재선정보 삭제
    void deletePopApr(Map<String, Object> saveMap) throws Exception;
    
    // 계정별 결재선 관리 상세 관리정보 생성
    int insertPopAprDetail(Map<String, Object> saveMap) throws Exception;

    // 계정별 결재선 관리 상세 결재선정보 생성
    int insertPopApr(Map<String, Object> saveMap) throws Exception;
    
    // 생성된 계정별 결재선 관리 상세 관리정보 APRVL_SET_SEQ 채번
    int selectAprvlSetSeq(Map<String, Object> searchMap) throws Exception;
    
    // 계정별 결재선 관리 예산계정 조회
    List<Map<String, Object>> selectAcctList(Map<String, Object> searchMap);
    
    // 계정별 결재선 관리 상세 관리정보 이력
    void insertPopAprDetailHist(Map<String, Object> saveMap) throws Exception;
    
    // insert validation
    int selectInsertValidationCheck(Map<String, Object> searchMap) throws Exception;
    
    // 계정별 결재선 관리 목록 삭제
    void deleteCustBgtByAcctAprv(Map<String, Object> saveMap) throws Exception;
    
    // 계정별 결재선 관리 목록 결재선 삭제
    void deleteCustBgtByAcctAprvDetail(Map<String, Object> saveMap) throws Exception;

	void saveByacctAprvlInfoHist(Map<String, Object> saveMap) throws Exception;

    
    
}
