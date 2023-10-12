package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.cc.dao
 * <pre>    DvplcMngDao
 * @author 
 * @since 2022.01.26
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.09 	최초작성
 */
public interface CustDvlplcDao {
 
	/* 배송지 등록 */
	int insertDvplcInfo (Map<String, Object> saveMap) throws Exception;
	
	/* 기본배송지여부 N으로 변경 */
	int updateDlvPlcN (Map<String, Object> paramMap) throws Exception;
	
	/* 기본배송지여부 Y로 변경 */
	int updateDlvPlcY(Map<String, Object> searchMap) throws Exception;
	
	/* 배송지팝업 조회 */
	Map<String, Object> selectDlvplcInfo(Map<String, Object> paramMap) throws Exception;
	
	/* 배송지 사용여부 N으로 변경 */
	int deleteDlvPlcUseYn (Map<String, Object> paramMap) throws Exception;
	
	/* 기본배송지여부 조회 */
	int selectBasisDlvplcCount (Map<String, Object> paramMap) throws Exception;
	
	/* 기본배송지여부 조회 */
	int selectBasisDlvplcListCount (Map<String, Object> paramMap) throws Exception;
	
	/* 회원 기본배송지 존재여부 조회 */
	int selectMbrBasisDlvplcCount (Map<String, Object> paramMap) throws Exception;
	
	/* 배송지 리스트 조회 */
	List<Map<String, Object>> selectDlvplcList(Map<String, Object> searchMap) throws Exception;
	
	/* 배송지 리스트 카운트 */
	int selectDlvplcListCount(Map<String, Object> searchMap) throws Exception;
	
	/* 회원 소속정보 조회 */
	Map<String, Object> selectMbrBasicInfo(Map<String, Object> paramMap) throws Exception;
	
	/* 회원 기본정보 리스트 조회 */
	List<Map<String, Object>> selectMbrBasicList(Map<String, Object> searchMap) throws Exception;
	
	/* 회원 기본정보 리스트 카운트 */
	int selectMbrBasicListCnt(Map<String, Object> searchMap) throws Exception;
	
	/* 배송지 정보 삭제 */
	int deleteDlvplcInfo(Map<String, Object> searchMap) throws Exception;
	
	/* 배송지리스트 조회 */
	List<Map<String, Object>> selectDlvplcListNew(Map<String, Object> searchMap) throws Exception;
	
	/* 배송지리스트 조회 카운트 */
	int selectDlvplcListNewCnt(Map<String, Object> searchMap) throws Exception;
	
	/* 기존의 기본배송지 정보 조회 */
	List<Map<String, Object>> selectBeforeDlvplcBasisInfo(Map<String, Object> paramMap) throws Exception;

	int selectDlvplcBasisCnt(Map<String, Object> paramMap) throws Exception;
	
	
}
