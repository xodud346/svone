package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.cc.dao
 * <pre>    CustAcctDao
 * @author 
 * @since 2022.02.17
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.09 	최초작성
 */
public interface CustAcctDao {

	/* 계정등록 */
	int insertAcctBasis (Map<String, Object> saveMap) throws Exception;
	
	/* 계정수정 */
	int updateAcctBasis (Map<String, Object> paramMap) throws Exception;
	
	/* 계정수정 */
	int updateAcctBasis2 (Map<String, Object> paramMap) throws Exception;
	
	/* 계정 단일조회 팝업 카운트 조회 */
	int selectAcctSinglePopupListCnt (Map<String, Object> saveMap) throws Exception;
	
	/* 계정 단일조회 팝업 리스트 조회 */
	List<Map<String, Object>> selectAcctSinglePopupList (Map<String, Object> paramMap) throws Exception;

	/* 계정 단일조회 팝업 카운트 조회(상위계정 대상 조회) */
	int selectAcctSingleHrnkAcctPopupListCnt (Map<String, Object> saveMap) throws Exception;

	/* 계정 단일조회 팝업 리스트 조회(상위계정 대상 조회) */
	List<Map<String, Object>> selectAcctSingleHrnkAcctPopupList (Map<String, Object> paramMap) throws Exception;

	/* 계정 단일조회 팝업 카운트 조회(상위계정 대상 조회) */
	int selectAcctSingleHrnkAcctPopupListCnt2 (Map<String, Object> saveMap) throws Exception;

	/* 계정 단일조회 팝업 리스트 조회(상위계정 대상 조회) */
	List<Map<String, Object>> selectAcctSingleHrnkAcctPopupList2 (Map<String, Object> paramMap) throws Exception;

	/* 계정 멀티조회 팝업 카운트 조회 */
	int selectAcctMultiPopupListCnt (Map<String, Object> saveMap) throws Exception;
	
	/* 계정 멀티조회 팝업 리스트 조회 */
	List<Map<String, Object>> selectAcctMultiPopupList (Map<String, Object> paramMap) throws Exception;
	
	/* 계정 단일조회 팝업 카운트 조회 */
	int selectAcctDeptMappListCnt (Map<String, Object> paramMap) throws Exception;
	
	/* 계정 단일조회 팝업 리스트 조회 */
	List<Map<String, Object>> selectAcctDeptMappList (Map<String, Object> paramMap) throws Exception;
	
	/* 예산계정부서매핑 정보 등록 */
	int insertBgtAcctDeptMapp (Map<String, Object> paramMap) throws Exception;
	
	/* 예산계정부서매핑 정보 삭제처리 */
	int deleteBgtAcctDeptMapp (Map<String, Object> paramMap) throws Exception;
	
	/* 계정설정 계정트리 조회(계정/부서) */
	List<Map<String, Object>> selectAcctTreeList (Map<String, Object> paramMap) throws Exception;

	/* 계정설정 계정상세정보 조회 */
	Map<String, Object> selectAcctDtlInfo (Map<String, Object> paramMap) throws Exception;

	/* 매핑 부서, 계정 리스트 조회 */
	List<Map<String, Object>> selectAcctDeptMappListByAcctId (Map<String, Object> paramMap) throws Exception;

	/* 매핑 부서, 계정 리스트 조회 */
	List<Map<String, Object>> selectAcctDeptMappListByDeptId (Map<String, Object> paramMap) throws Exception;

	/* 계정명 및 계정코드 수정 */
	void updateBgtAcctBasis (Map<String, Object> paramMap) throws Exception;

	/* 부서명 및 부서코드 수정 */
	void updateDeptBasis (Map<String, Object> paramMap) throws Exception;

	/* 계정설정 계정트리 조회(계정/부서) */
	List<Map<String, Object>> selectDeptTreeList (Map<String, Object> paramMap) throws Exception;

	/* 계정설정 부서상세정보 조회 */
	Map<String, Object> selectDeptDtlInfo (Map<String, Object> paramMap) throws Exception;
	
	/* 계정관리 트리 리스트 조회 */
	List<Map<String, Object>> selectBizplcAcctTreeList (Map<String, Object> paramMap) throws Exception;
	
	/* 계정레벨 일괄수정 */
	int updateBzplcAcctLvlInfo (Map<String, Object> paramMap) throws Exception;
	
	/* 계정 미사용 설정시 하위에 사용중인 계정이 있는지 체크 */
	int selectAcctUnderChk (Map<String, Object> paramMap) throws Exception;
	
	/* 계정관리 계정상세정보 조회 */
	Map<String, Object> selectBgtAcctIdDetail (Map<String, Object> paramMap) throws Exception;
	
	/* 계정트리 조회 시 사업장ID 존재여부 체크 */
	int selectBzplcIdChk (Map<String, Object> paramMap) throws Exception;
	
	/* 선택한 계정 하위에 존재하는 계정 선택여부 조회 */
	Map<String, Object> selectCheckHrnkAcct(Map<String, Object> paramMap) throws Exception;
	
	/* 비용부서 리스트 조회 */
	List<Map<String, Object>> selectComCostTrnsfDeptList (Map<String, Object> paramMap) throws Exception;
	
	/* 참조코드 단일조회 팝업 카운트 조회 */
	int selectRefSinglePopupListCnt (Map<String, Object> saveMap) throws Exception;
	
	/* 참조코드 단일조회 팝업 리스트 조회 */
	List<Map<String, Object>> selectRefSinglePopupList (Map<String, Object> paramMap) throws Exception;

}
