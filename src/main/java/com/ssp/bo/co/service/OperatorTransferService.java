package com.ssp.bo.co.service;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.co.service
 * <pre>    OperatorTransferService
 * @author lee
 * @since 2022-03-04
 * @version 1.0
 * @see OperatorTransferService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-04	lee	최초작성
 */
public interface OperatorTransferService {
    /** 회원운영자조직정보 조회 service interface */
    List<Map<String, Object>> selectCoMbrOprtrOrgInfoList(Map<String, Object> searchMap);

    /** 회원운영자정보 조회 service interface */
    List<Map<String, Object>> selectCoMbrOprtrInfoList(Map<String, Object> searchMap);

    /** 회원운영자정보 INF 조회 service interface */
    List<Map<String, Object>> selectCoMbrOprtrInfoInfList(Map<String, Object> searchMap);

    /** 회원운영자정보 이관 저장 */
    void saveOperatorTransfer(List<Map<String, Object>> saveTMap, List<Map<String, Object>> saveBMap) throws Exception;
    
    /** 운영자 조직 목록 조회*/
    List<Map<String, Object>> selectOprtrOrgInfoList(Map<String, Object> searchMap);
    
    /** 운영자 조직 목록 카운트 조회 */
    int selectOprtrOrgInfoListCount(Map<String, Object> searchMap) throws Exception;
    
    /** 운영자 목록 조회*/
    List<Map<String, Object>> selectOprtrInfoList(Map<String, Object> searchMap);
    
    /** 운영자 목록 카운트 조회 */
    int selectOprtrInfoListCount(Map<String, Object> searchMap) throws Exception;
    
	/** 운영자 상세 정보 조회*/
	public Map<String, Object> selectMbrOprtrInfo(Map<String, Object> commandMap) throws Exception;

    /** 운영자이관등록 엑셀 조회 */
    List<Map<String, Object>> selectCoMbrOprtrInfoExcelList(Map<String, Object> searchMap) throws Exception;
}
