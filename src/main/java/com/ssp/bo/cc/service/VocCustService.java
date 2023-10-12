package com.ssp.bo.cc.service;

import java.util.List;
import java.util.Map;

/** 
 * <pre>
 * @title voc
 * @desc
 * @package com.ssp.bo.cc.service
 * @ClassName VocCustService
 * </pre>
 * @author  차상영
 * @since   2022. 02. 11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */

public interface VocCustService {
	
	List<Map<String,Object>> selectVocStatusList(Map<String,Object> searchMap);
	
	List<Map<String,Object>> selectVocGclsList(Map<String,Object> searchMap);

	List<Map<String,Object>> selectVocMclasList(Map<String,Object> searchMap);
	
	List<Map<String,Object>> selectVocSclsList(Map<String,Object> searchMap);
	
	Map<String,Object> selectVocDtlInfo(Map<String,Object> searchMap) throws Exception;
	
	List<Map<String,Object>> selectVocProcList(Map<String,Object> searchMap);
	
	Map<String,Object> selectExceptionProcDtl(Map<String,Object> searchMap) throws Exception;
	
	List<Map<String,Object>> selectExceptionProcList1(Map<String,Object> searchMap);
	
	List<Map<String,Object>> selectExceptionProcList2(Map<String,Object> searchMap);
	
	List<Map<String,Object>> selectVocReqFileList(Map<String,Object> searchMap);
	
	List<Map<String,Object>> selectDlvSrvonInfo(Map<String,Object> searchMap);
	
	List<Map<String,Object>> selectDlvHdvInfo(Map<String,Object> searchMap);
	
	List<Map<String,Object>> selectVocDocFileList(Map<String,Object> searchMap);
}
