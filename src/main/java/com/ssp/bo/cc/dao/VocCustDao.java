package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title voc
 * @desc
 * @package com.ssp.core.co.dao
 * @ClassName VocCustDao
 * </pre>    
 * @author  차상영
 * @since   2022. 02. 11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface VocCustDao {

    List<Map<String, Object>> selectVocStatusList(Map<String, Object> searchMap);
  
    List<Map<String, Object>> selectVocGclsList(Map<String, Object> searchMap);
    
    List<Map<String, Object>> selectVocMclasList(Map<String, Object> searchMap);
    
    List<Map<String, Object>> selectVocSclsList(Map<String, Object> searchMap);
    
    Map<String, Object> selectVocDtlInfo(Map<String, Object> searchMap)  throws Exception ;
    
    List<Map<String, Object>> selectVocProcList(Map<String, Object> searchMap);
    
    Map<String, Object> selectExceptionProcDtl(Map<String, Object> searchMap)  throws Exception ;
    
    List<Map<String, Object>> selectExceptionProcList1(Map<String, Object> searchMap);
    
    List<Map<String, Object>> selectExceptionProcList2(Map<String, Object> searchMap);
	
	/**
	 * voc 첨부파일 목록
	 * @param searchMap Map
	 * @return List
	 */
	List<Map<String, Object>> selectVocReqFileList(Map<String, Object> searchMap);
	
	/**
	 * VOC현황 > VOC현황 상세 > 반품배송정보 > 주문상세 배송정보 배송자차 조회
	 */
	List<Map<String, Object>> selectDlvSrvonInfo(Map<String, Object> searchMap);
	
	/**
	 * VOC현황 > VOC현황 상세 > 반품배송정보 > 주문상세 배송정보 배송택배 조회
	 */
	List<Map<String, Object>> selectDlvHdvInfo(Map<String, Object> searchMap);
	
	/**
	 * VOC현황 > VOC현황 상세 > 등록된 첨부파일 조회
	 */
	List<Map<String,Object>> selectVocDocFileList(Map<String,Object> searchMap);
	
}
