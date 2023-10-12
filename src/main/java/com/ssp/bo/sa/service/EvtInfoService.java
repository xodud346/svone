package com.ssp.bo.sa.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title 이벤트 Service
 * @package com.ssp.bo.sa.service
 * </pre>
 * 
 * @author 박진원
 * @since 2022.03.14.
 * @version 1.0
 * @see EvtInfoService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.14.	박진원		최초작성
 */
public interface EvtInfoService
{
	/** 이벤트 목록 조회 */
    public List<Map<String, Object>> selectEvtInfoList(Map<String, Object> searchMap) throws Exception;

	/** 이벤트 목록 건수 조회 */
    public int selectEvtInfoListCount(Map<String, Object> searchMap) throws Exception;	

    /** 이벤트 등록/수정/삭제 */
    NexacroResult saveEvtInfo(Map<String, Object> saveEvtInfoMap, 
    		List<Map<String, Object>> saveEvtOprUnitMapList) throws Exception;

	/** 이벤트 상세 */
    public Map<String, Object> selectEvtInfo(Map<String, Object> searchMap) throws Exception;

	/** 이벤트 운영단위상세 */
    public List<Map<String, Object>> selectEvtOprUnitList(Map<String, Object> searchMap) throws Exception;

    /** 이벤트 삭제 */
    NexacroResult deleteEvtInfo(Map<String, Object> searchMap) throws Exception;

	/** 이벤트 - 응모형- 참여자목록 조회 */
    public List<Map<String, Object>> selectEvtPrtcDtlsList(Map<String, Object> searchMap) throws Exception;

	/** 이벤트 - 응모형- 참여자목록 건수 조회 */
    public int selectEvtPrtcDtlsListCount(Map<String, Object> searchMap) throws Exception;	

    /** 이벤트 - 응모형- 참여자목록 댓글 공개 여부 수정 */
    NexacroResult saveEvtPrtcDtls(List<Map<String, Object>> saveEvtPrtcDtlsMapList) throws Exception;

	/** 이벤트 - 스템프형- 참여자목록 조회 */
    public List<Map<String, Object>> selectEvtPrtcDtlsStampList(Map<String, Object> searchMap) throws Exception;

	/** 이벤트 - 스템프형- 참여자목록 건수 조회 */
    public int selectEvtPrtcDtlsStampListCount(Map<String, Object> searchMap) throws Exception;	

	/** 이벤트 - 스템프형- 참여자목록 (전체) */
    public List<Map<String, Object>> selectEvtPrtcDtlsStampAllList(Map<String, Object> searchMap) throws Exception;

	/** 이벤트 목록 (회원) 조회 */
    public List<Map<String, Object>> selectEvtInfoMbrList(Map<String, Object> searchMap) throws Exception;

	/** 이벤트 목록 (회원) 건수 조회 */
    public int selectEvtInfoMbrListCount(Map<String, Object> searchMap) throws Exception;	
}
