package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 고객 공통 팝업 Dao
 * @desc
 * @package com.ssp.core.co.dao
 * <pre>    CustCmnDao
 * @author  moonjooh
 * @since   2022. 02. 22.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.02.22		최초작성
 */
public interface CustCmnDao {

	// 산업군 멀티조회
    List<Map<String, Object>> selectIddtMultiPop(Map<String, Object> searchMap);
 	
 	// 부서 멀티조회
    List<Map<String, Object>> selectDeptMultiPop(Map<String, Object> searchMap);
 	
 	// [팝업]팀 조회 옵션 설정 리스트
    List<Map<String, Object>> selectMbrOprtrOrgInfoList(Map<String, Object> searchMap);
    
    // [팝업]팀 조회 옵션 설정 리스트 카운트
  	int selectMbrOprtrOrgInfoListCnt(Map<String, Object> searchMap) throws Exception;
  	
  	// [팝업]팀 조회 옵션 설정 리스트(영업팀)
    List<Map<String, Object>> selectMbrOprtrSalsInfoList(Map<String, Object> searchMap);
    
    // [팝업]팀 조회 옵션 설정 리스트 카운트(영업팀)
  	int selectMbrOprtrSalsInfoListCnt(Map<String, Object> searchMap) throws Exception;
    
  	// [팝업]새로운 버전의 팀 조회 옵션 설정 리스트
    List<Map<String, Object>> selectMbrOprtrOrgInfoListNewVersion(Map<String, Object> searchMap);
    
    // [팝업]새로운 버전의 팀 조회 옵션 설정 리스트카운트
    int selectMbrOprtrOrgInfoListNewVersionCnt(Map<String, Object> searchMap) throws Exception;

    // [팝업] 서비스담당자 조회
	List<Map<String, Object>> selectSvcOprtrMbr(Map<String, Object> searchMap);

	// [팝업] 연락처 등록번호 조회
	List<Map<String, Object>> selectCaddrRegNum(Map<String, Object> searchMap);

	// [팝업] 회원멀티조회 SSP_BO_PP_25_1
	List<Map<String, Object>> selectClientPopupList(Map<String, Object> commandMap);

    List<Map<String, Object>> selectUsdIddtMultiPop(Map<String, Object> searchMap);
}
