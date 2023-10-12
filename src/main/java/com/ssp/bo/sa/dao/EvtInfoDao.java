package com.ssp.bo.sa.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 이벤트 Dao
 * @package com.ssp.bo.sa.dao
 * </pre>
 * 
 * @author 박진원
 * @since 2022.03.14.
 * @version 1.0
 * @see EvtInfoDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.14.	박진원		최초작성
 */
public interface EvtInfoDao
{
	/** 이벤트 목록 조회 */
    List<Map<String, Object>> selectEvtInfoList(Map<String, Object> searchMap) throws Exception;

	/** 이벤트 목록 건수 조회 */
	int selectEvtInfoListCount(Map<String, Object> searchMap) throws Exception;	

	/** 이벤트 시퀀스 값 조회 */
    Map<String, Object> selectEvtInfoSeq(Map<String, Object> saveEvtInfoMap) throws Exception;	

    /** 이벤트 기본 정보 등록 */
    int insertEvtInfo(Map<String, Object> saveEvtInfoMap) throws Exception;

    /** 이벤트 기본 정보 수정 */
    int updateEvtInfo(Map<String, Object> saveEvtInfoMap) throws Exception;

    /** 이벤트 운영단위 정보 삭제 */
    int deleteEvtOprUnit(Map<String, Object> saveEvtOprUnitMap) throws Exception;

    /** 이벤트 운영단위 정보 등록 */
    int insertEvtOprUnit(Map<String, Object> saveEvtOprUnitMap) throws Exception;

	/** 이벤트 상세 */
    Map<String, Object> selectEvtInfo(Map<String, Object> searchMap) throws Exception;

	/** 이벤트 운영단위상세 */
    List<Map<String, Object>> selectEvtOprUnitList(Map<String, Object> searchMap) throws Exception;

    /** 이벤트 정보 삭제 */
    int deleteEvtInfo(Map<String, Object> searchMap) throws Exception;

    /** 이벤트 운영단위 정보 삭제 (전체) */
    int deleteEvtOprUnitAll(Map<String, Object> searchMap) throws Exception;

	/** 이벤트 - 응모형- 참여자목록 조회 */
    List<Map<String, Object>> selectEvtPrtcDtlsList(Map<String, Object> searchMap) throws Exception;

	/** 이벤트 - 응모형- 참여자목록 건수 조회 */
	int selectEvtPrtcDtlsListCount(Map<String, Object> searchMap) throws Exception;	

    /** 댓글 공개 여부 수정 */
    int updateEvtPrtcDtls(Map<String, Object> saveEvtPrtcDtlsMap) throws Exception;

	/** 이벤트 - 스템프형- 참여자목록 조회 */
    List<Map<String, Object>> selectEvtPrtcDtlsStampList(Map<String, Object> searchMap) throws Exception;

	/** 이벤트 - 스템프형- 참여자목록 건수 조회 */
	int selectEvtPrtcDtlsStampListCount(Map<String, Object> searchMap) throws Exception;	

	/** 이벤트 - 스템프형- 참여자목록 (전체) */
    List<Map<String, Object>> selectEvtPrtcDtlsStampAllList(Map<String, Object> searchMap) throws Exception;

	/** 이벤트 목록 (회원) 조회 */
    List<Map<String, Object>> selectEvtInfoMbrList(Map<String, Object> searchMap) throws Exception;

	/** 이벤트 목록 (회원) 건수 조회 */
	int selectEvtInfoMbrListCount(Map<String, Object> searchMap) throws Exception;	
}
