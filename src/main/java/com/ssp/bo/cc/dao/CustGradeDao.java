package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao
 * <pre>    CustGradeDao
 * @author  moonjooh
 * @since   2022. 02. 10.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface CustGradeDao {

	// 고객등급 리스트 조회
    List<Map<String, Object>> selectCustGrdList(Map<String, Object> searchMap);

    // 고객등급 리스트 카운트
	int selectCustGrdListCount(Map<String, Object> searchMap) throws Exception;
	
	// 고객등급 수정
	int saveCustGrd(Map<String, Object> saveMap) throws Exception;

	// 고객등급 사용중인 데이터 체크
    List<Map<String, Object>> selectCustGrdChk(Map<String, Object> searchMap);

    // 입력한 날짜포맷 유효성체크
	int selectChkLackTime(Map<String, Object> saveMap) throws Exception;

	// 해당 ID에 중복되는 유효기간 데이터가 있는지 체크
	List<Map<String, Object>> selectOverlapTime(Map<String, Object> saveMap) throws Exception;

	String selectVldPerdEndDtm(Map<String, Object> saveMap) throws Exception;

	int updateGrdDtm(Map<String, Object> saveMap) throws Exception;

	List<Map<String, Object>> selectCustGradeHst(Map<String, Object> searchMap);

	int selectChkLastSeq(Map<String, Object> saveMap) throws Exception;

	int updateGrdAplyDcrt(Map<String, Object> saveMap) throws Exception;

	int selectchkLastDate(Map<String, Object> saveMap) throws Exception;

	int selectchkDate(Map<String, Object> saveMap) throws Exception;

	int selectMaxSeq(Map<String, Object> saveMap) throws Exception;
	
	int updateNextSeq(Map<String, Object> saveMap) throws Exception;

	int saveCustGrdSetSeq(Map<String, Object> saveMap) throws Exception;

	String selectVldPerdSysdate(Map<String, Object> saveMap) throws Exception;
	
}
