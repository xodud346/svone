package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao
 * <pre>    CustBgtPrdAprvlDao
 * @author  moonjooh
 * @since   2022. 03. 11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.03.02		최초작성
 */
public interface CustBgtPrdAprvlDao {

	// 상품결재선 관리 목록 조회
    List<Map<String, Object>> selectCustBgtPrdAprvl(Map<String, Object> searchMap);
    
    // 상품결재선 관리 목록 삭제
    void deleteCustBgtPrdAprvl(Map<String, Object> saveMap) throws Exception;
    
    // 상품결재선 관리 목록 결재선 삭제
    void deleteCustBgtPrdAprvlDetail(Map<String, Object> saveMap) throws Exception;

	// 상품 상세정보 조회
    List<Map<String, Object>> selectPrdInfoByPrdId(Map<String, Object> searchMap);
    
    // 생성된 결재선 관리 상세 관리정보 APRVL_SET_SEQ 채번
    int selectAprvlSetSeq(Map<String, Object> searchMap) throws Exception;
    
    // insert validation
    int selectInsertValidationCheck(Map<String, Object> searchMap) throws Exception;
    
    // 상품별 결재선 관리 상세 관리정보 생성
    int insertPrdAprvlInfo(Map<String, Object> saveMap) throws Exception;

    // 상품별 결재선 관리 상세 관리정보 이력
    void insertPrdAprvlInfoHist(Map<String, Object> saveMap) throws Exception;

    // 상품별 결재선 관리 상세 결재선정보 생성
    int insertPopApr(Map<String, Object> saveMap) throws Exception;
    
    // 상품별 결재선 관리 상세 결재선정보 이력
	void savePrdAprvlInfoHistForDelete(Map<String, Object> saveMap) throws Exception;
    
    // 결재선 관리 상세 결재선정보 수정
    int updatePopApr(Map<String, Object> saveMap) throws Exception;

    // 계정별 결재선 관리 상세 결재선정보 삭제
    void deletePopApr(Map<String, Object> saveMap) throws Exception;

	Map<String, Object> selectPopAprInfo(Map<String, Object> prdMap) throws Exception;

	List<Map<String, Object>> selectPopAprDetail(Map<String, Object> infoMap) throws Exception;

	void updateCustBgtPrdAprvl(Map<String, Object> saveMap) throws Exception;

}
