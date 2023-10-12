package com.ssp.bo.cc.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.cc.service
 * <pre>    CustDeptService
 * @author  moonjooh
 * @since   2022. 02. 11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.02.11		최초작성
 *  2022.02.17		부서상세 조회 및 수정구현
 *  2022.02.18		부서상세 생성/복사 구현
 */

public interface CustDeptService {

	// 부서목록 조회
	NexacroResult selectCustDept(Map<String,Object> searchInfo, CCUtils ccUtils) throws Exception;
	
	// 부서목록 일괄상태변경
	NexacroResult saveCustDeptState(List<Map<String,Object>> saveListMap) throws Exception;

	// 부서 상세조회
	NexacroResult selectCustDeptDetailInfo(Map<String,Object> searchInfo) throws Exception;

	// 부서조회 상세 수정
	NexacroResult saveCustDeptDetailInfo(List<Map<String,Object>> saveListMap) throws Exception;

	// 부서생성 고객구분 조회
	NexacroResult selectCustSpr(Map<String,Object> searchInfo) throws Exception;

	// 부서생성 최상위부서, 입고담당자 조회
	NexacroResult selectHgstDept(Map<String,Object> searchInfo) throws Exception;
	
	// 부서생성 insert
	NexacroResult insertCustDeptDetail(Map<String, Object> paramMap) throws Exception;
	
	// 부서조회 부서복사
	NexacroResult selectCustDeptForCopy(Map<String,Object> searchInfo) throws Exception;

	// 선택한 운영단위의 권한을 조회
	NexacroResult selectAuthByOprUnit(Map<String, Object> searchInfo) throws Exception;

	// 대용량엑셀
	NexacroResult selectAllExcelDownload(Map<String, Object> searchMap, CCUtils ccUtils) throws Exception;
	
}
