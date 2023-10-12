package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title voc
 * @desc
 * @package com.ssp.core.co.dao
 * @ClassName CustHelperDao
 * </pre>    
 * @author  유창호
 * @since   2022. 04. 25.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface CustHelperDao {

	/**
     * 고객도우미 상세정보 조회
     * @param paramMap Map
     * @return Map
     */
	Map<String,Object> selectCustHelperDetail(Map<String,Object> paramMap) throws Exception;
	
	/**
     * 고객도우미 담당자 매핑정보 수정
     * @param paramMap Map
     * @return Map
     */
	int updateOprUnitCustHelperCaddrRegNo(Map<String,Object> paramMap) throws Exception;
	
	/**
     * 고객도우미 젠데스크 매핑정보 수정
     * @param paramMap Map
     * @return Map
     */
	int updtaeOprUnitZendeskGrpId(Map<String,Object> paramMap) throws Exception;
	
	/**
     * 고객도우미 등록 전 이미 등록되어있는 운영단위인지 조회
     * @param paramMap Map
     * @return Map
     */
	int selectOprUnitChk(Map<String,Object> paramMap) throws Exception;
	
	/**
     * 고객도우미 운영단위고객도우미정보 등록
     * @param paramMap Map
     * @return Map
     */
	int insertOprUnitCustHelperInfo(Map<String,Object> paramMap) throws Exception;
	
	/**
     * 고객도우미 운영단위젠데스크정보 등록
     * @param paramMap Map
     * @return Map
     */
	int insertOprUnitZendeskInfo(Map<String,Object> paramMap) throws Exception;
	
	/**
     * 고객도우미 담당자 매핑정보 삭제
     * @param paramMap Map
     * @return Map
     */
	int deleteOprUnitCustHelperCaddrRegNo(Map<String,Object> paramMap) throws Exception;
	
	/**
     * 고객도우미 젠데스크 매핑정보 삭제
     * @param paramMap Map
     * @return Map
     */
	int deleteOprUnitZendeskGrpId(Map<String,Object> paramMap) throws Exception;
	
}
