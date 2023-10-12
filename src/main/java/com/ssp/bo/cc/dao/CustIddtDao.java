package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao
 * <pre>    CustIddtDao
 * @author  moonjooh
 * @since   2022. 02. 21.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.02.21		최초작성
 */
public interface CustIddtDao {

	// 산업군조회 목록
    List<Map<String, Object>> selectCustIddtList(Map<String, Object> searchMap);
 
    // 산업군조회 목록 카운트
  	int selectCustIddtCount(Map<String, Object> searchMap) throws Exception;
  	
  	// 산업군조회 저장
	int saveCustIddt (Map<String, Object> paramMap) throws Exception;
	
	// 산업군조회 삭제
	int deleteCustIddt (Map<String, Object> paramMap) throws Exception;
  	
	// 산업군조회 영업담당 콤보박스 조회
    List<Map<String, Object>> selectCombo(Map<String, Object> searchMap);

    // 해당 산업군 정보가 사용중인지 체크
	int selectBzplcIddtChk(Map<String, Object> searchMap) throws Exception;

	// 산업군명 중복여부 체크
	int selectDuplNmChk(Map<String, Object> searchMap) throws Exception;


	 //상품군 조회
	List<Map<String, Object>> selectPrdPlcdList(Map<String, Object> prdSearchMap) throws Exception;

	//산업군 상세 패키지 정보 조회 
	Map<String, Object> selectIddtMktgInfo(Map<String, Object> searchMap) throws Exception;

	// 산업군 상세 패키지 정보 저장
	Map<String, Object> saveIddtMktgInfo(Map<String, Object> saveMap) throws Exception;

	// 산업군 상세 기본(MRO_IDDT_ID)저장
	Map<String, Object> updateIddtInfo(Map<String, Object> saveMap) throws Exception;

	// 산업군 마케팅(패키지) 정보 기본 노출여부 N 
	int saveCustIddtMktg(Map<String, Object> saveMap) throws Exception;
    
}
