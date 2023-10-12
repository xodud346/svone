package com.ssp.bo.cc.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.cc.service
 * <pre>    CustCmnService
 * @author  moonjooh
 * @since   2022. 02. 22.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.02.22		최초작성
 */

public interface CustCmnService {

	// 산업군 멀티조회
	NexacroResult selectIddtMultiPop(Map<String,Object> searchInfo) throws Exception;
	
	// 부서 멀티조회
	NexacroResult selectDeptMultiPop(Map<String,Object> searchInfo) throws Exception;
	
	// [팝업]팀 조회 옵션 설정
	NexacroResult selectMbrOprtrOrgInfoList(Map<String,Object> searchInfo) throws Exception;

	// [팝업] 서비스담당자 조회
	List<Map<String,Object>> selectSvcOprtrMbr(Map<String, Object> searchMap) throws Exception;

	// [팝업] 연락처 등록번호 조회
	List<Map<String,Object>> selectCaddrRegNum(Map<String, Object> searchMap) throws Exception;

	// [팝업] 회원멀티조회 SSP_BO_PP_25_1
    public List<Map<String, Object>> selectClientPopupList(Map<String, Object> commandMap) throws Exception;

	NexacroResult selectUsdIddtMultiPop(Map<String, Object> searchMap) throws Exception;
}
