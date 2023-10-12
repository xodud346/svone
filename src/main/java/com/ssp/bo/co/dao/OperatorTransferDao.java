package com.ssp.bo.co.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.co.dao
 * <pre>    OperatorTransferDao
 * @author lee
 * @since 2022-03-04
 * @version 1.0
 * @see OperatorTransferDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-04	lee	최초작성
 */
public interface OperatorTransferDao {
    /** 회원운영자조직정보 조회 dao interface */
    List<Map<String, Object>> selectCoMbrOprtrOrgInfoList(Map<String, Object> searchMap);

    /** 회원운영자정보 조회 */
    List<Map<String, Object>> selectCoMbrOprtrInfoList(Map<String, Object> searchMap);

     /** 회원운영자정보 INF 조회 */
    List<Map<String, Object>> selectCoMbrOprtrInfoInfList(Map<String, Object> searchMap);

    /** 회원운영자정보 INF 등록 */
    int insertOperatorInfTransfer(Map<String, Object> saveMap) throws Exception;

    /** 회원운영자정보 INF 삭제 */
    int deleteOperatorInfTransfer(Map<String, Object> saveMap) throws Exception;

    /** 회원운영자정보 등록 */
    int insertOperatorTransfer(Map<String, Object> saveMap) throws Exception;

    /** 회원운영자정보 삭제 */
    int deleteOperatorTransfer(Map<String, Object> saveMap) throws Exception;

    /** 회원운영자정보 INF 카운트 조회 */
    int selectCoMbrOprtrInfoInfCount(Map<String, Object> saveMap) throws Exception;

    /** 회원운영자정보 카운트 조회 */
    int selectCoMbrOprtrInfoCount(Map<String, Object> saveMap) throws Exception;
    
    /** 운영자 조직 목록 카운트 조회   */
    int selectOprtrOrgInfoListCount(Map<String, Object> saveMap) throws Exception;
    
    /** 운영자 조직 목록 조회  */
    List<Map<String, Object>> selectOprtrOrgInfoList(Map<String, Object> searchMap);
    
    /** 운영자 목록 카운트 조회   */
    int selectOprtrInfoListCount(Map<String, Object> saveMap) throws Exception;
    
    /** 운영자 목록 조회  */
    List<Map<String, Object>> selectOprtrInfoList(Map<String, Object> searchMap);
    
    /** 운영자 상세 정보 조회 */
	Map<String, Object> selectMbrOprtrInfo(Map<String, Object> commandMap) throws Exception;

    /** 운영자 이관등록 엑셀 다운로드 조회 */
	List<Map<String, Object>> selectCoMbrOprtrInfoExcelList(Map<String, Object> searchMap) throws Exception;
}
