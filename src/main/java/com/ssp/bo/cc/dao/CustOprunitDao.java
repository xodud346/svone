package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao
 * <pre>    CustOprunitDao
 * @author  moonjooh
 * @since   2022. 02. 16.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.16		최초작성
 */
public interface CustOprunitDao {

	List<Map<String, Object>> selectCustOprunit(Map<String, Object> searchMap);
	
	// 사업장+운영단위+부서
	List<Map<String, Object>> selectBzplcOprunitDept(Map<String, Object> param) throws Exception;
	
	// 운영단위 상세 조회
	List<Map<String, Object>> selectOprunitBasis(Map<String, Object> param) throws Exception;
	List<Map<String, Object>> selectRefCdGrp    (Map<String, Object> param) throws Exception;
	List<Map<String, Object>> selectOshtCd      (Map<String, Object> param) throws Exception;
	
	// 운영단위 상세 저장
	int saveOprunitBasis       (Map<String, Object> param) throws Exception;
	int saveOprunitCtlAuthParts(Map<String, Object> param) throws Exception;
	
	int saveRefCdGrp           (Map<String, Object> param) throws Exception;
	int saveRefCdGrp4Post      (Map<String, Object> param) throws Exception;
	
	int saveOshtCd             (Map<String, Object> param) throws Exception;
	
	// 운영단위 참조코드 설정
	List<Map<String, Object>> selectRefCd(Map<String, Object> param) throws Exception;
	int saveRefCd(Map<String, Object> param) throws Exception;
	
	// 운영단위 제어권한 설정
	List<Map<String, Object>> selectCtlAuthInfo(Map<String, Object> param) throws Exception;
	int saveCtlAuthInfo(Map<String, Object> param) throws Exception;
	int saveCtlAuthInfo4MbrJoinApprr(Map<String, Object> param) throws Exception;
	
	// 입고 책임자 설정
	List<Map<String, Object>> selectByoprunitGiChrpsn(Map<String, Object> param) throws Exception;
	List<Map<String, Object>> selectBydeptGiChrpsn   (Map<String, Object> param) throws Exception;
	int saveByoprunitGiChrpsn(Map<String, Object> param) throws Exception;
	int saveBydeptGiChrpsn   (Map<String, Object> param) throws Exception;
	
	int saveOprunitGiLvl     (Map<String, Object> param) throws Exception;
	
	
	//출고명세서 목록 팝업 ,	박재광,	2022. 05. 10.
	List<Map<String, Object>> selectGoStmList(Map<String, Object> param) throws Exception;
	int selectGoStmListCnt(Map<String, Object> param) throws Exception;

	List<Map<String, Object>> selectStlMeanCd(Map<String, Object> param) throws Exception;

	// 예산사용 미사용 처리 시 부서제어권한정보 테이블 예산초과허용여부/이체허용여부 N처리
	int saveDeptCtlAuthInfo(Map<String, Object> param) throws Exception;
	int saveDeptCtlAuthInfoHst(Map<String, Object> param) throws Exception;
	
	int chkMbrJoinAppr(Map<String, Object> row) throws Exception;
	
	
	
	/* [2022.07.05] 박성근 설정된 입고레벨 이외의 입고담당자 정보는 삭제처리 */
	int deleteByoprunitGiChrpsn(Map<String, Object> param) throws Exception;
	int deleteBydeptGiChrpsn   (Map<String, Object> param) throws Exception;
	/* /[2022.07.05] 박성근 설정된 입고레벨 이외의 입고담당자 정보는 삭제처리 */

	List<Map<String, Object>> selectChkCcoDetail(Map<String, Object> searchMap) throws Exception;
	
	
}
