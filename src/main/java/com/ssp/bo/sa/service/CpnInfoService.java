package com.ssp.bo.sa.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title 쿠폰 Service
 * @package com.ssp.bo.sa.service
 * </pre>
 * @author
 * @since 2022.03.17.
 * @version 1.0
 * @see CpnInfoService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.17.	박진원		최초작성
 */
public interface CpnInfoService
{
	/** 쿠폰 목록 조회 */
    public List<Map<String, Object>> selectCpnInfoList(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 목록 건수 조회 */
    public int selectCpnInfoListCount(Map<String, Object> searchMap) throws Exception;	

	/** 쿠폰 발행 내역 목록 조회 */
    public List<Map<String, Object>> selectCpnPubcUseDtlsList(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 발행 내역 목록 건수 조회 */
    public int selectCpnPubcUseDtlsListCount(Map<String, Object> searchMap) throws Exception;	

	/** 쿠폰 발급 대상 목록 */
    public List<Map<String, Object>> selectCpnPubcMbrList(Map<String, Object> searchMap) throws Exception;

    /** 쿠폰 등록/수정/삭제 */
    NexacroResult saveCpnInfo(Map<String, Object> saveCpnInfoMap, 
    		List<Map<String, Object>> saveCpnPubcUseDtlsMapList, 
    		List<Map<String, Object>> saveCpnAplyTgtPrd20MapList, 
    		List<Map<String, Object>> saveCpnAplyTgtPrd30MapList, 
    		List<Map<String, Object>> saveCpnExcptTgtPrd20MapList, 
    		List<Map<String, Object>> saveCpnExcptTgtPrd30MapList) throws Exception;

	/** 쿠폰 상세 */
    public Map<String, Object> selectCpnInfo(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 발급 대상 목록 */
    public List<Map<String, Object>> selectCpnPubcUseDtlsInfoList(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 적용 대상 상품 목록 */
    public List<Map<String, Object>> selectCpnAplyTgtPrd20List(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 적용 대상 상품군 목록 */
    public List<Map<String, Object>> selectCpnAplyTgtPrd30List(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 제외 대상 상품 목록 */
    public List<Map<String, Object>> selectCpnExcptTgtPrd20List(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 제외 대상 상품군 목록 */
    public List<Map<String, Object>> selectCpnExcptTgtPrd30List(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 - 목록 - 쿠폰설정 팝업 */
    public List<Map<String, Object>> selectCpnInfoPopupList(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 목록 (회원) 조회 */
    public List<Map<String, Object>> selectCpnInfoMbrList(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 목록 (회원) 건수 조회 */
    public int selectCpnInfoMbrListCount(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 목록 (회원) 사용가능/사용한/만료된 건수 조회 */
    public Map<String, Object> selectCpnInfoMbrCount(Map<String, Object> searchMap) throws Exception;
}
