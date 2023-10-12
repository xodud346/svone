package com.ssp.bo.cc.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;

/**
 * <pre>
 * @title 예산
 * @desc
 * @package com.ssp.bo.cc.service
 * @ClassName CustBgtService
 * </pre>
 * @author  차상영
 * @since   2022. 02. 11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */

public interface CustBgtService {
	
	List<Map<String,Object>> selectBgtList(Map<String,Object> searchInfo);
	
	List<Map<String,Object>> selectBgtTransMonthList(Map<String,Object> searchInfo);
	
	void saveBgtTransMonth(List<Map<String, Object>> list, CCUtils cCUtils) throws Exception;
	
	List<Map<String,Object>> selectBgtDeptMappList(Map<String,Object> searchInfo);

	List<Map<String,Object>> selectBgtDeptMappListByAcct(Map<String,Object> searchInfo);
	
	void updateBgtMappDept(List<Map<String, Object>> list) throws Exception;
	
	void updateBgtMappBgtUseHrnkAcct(List<Map<String, Object>> list, CCUtils cCUtils) throws Exception;
	
	Map<String, Object> selectQrtBgtUseYn(Map<String, Object> searchMap) throws Exception;
	
	Map<String, Object> selectBzplcQrtBgtUseYn(Map<String, Object> searchMap, CCUtils ccUtils) throws Exception;
	
	List<Map<String,Object>> selectBgtDeptDtlMappListByDept(Map<String,Object> searchInfo);
	
	List<Map<String,Object>> selectBgtDeptDtlMappListByAcct(Map<String,Object> searchInfo);
	
	List<Map<String,Object>> selectBgtDeptDtlMappListByCommonAcct(Map<String,Object> searchInfo);
	
	void saveBgtDeptDtl(List<Map<String, Object>> list, CCUtils cCUtils) throws Exception;
	
	void saveBgtCommonAcctDtl(List<Map<String, Object>> list, CCUtils cCUtils) throws Exception;
	
	Map<String,Object> selectBalanceAmt(Map<String, Object> searchMap) throws Exception;	//박재광 2022.03.28
	
    void saveGenBgtTrnsf(Map<String, Object> map, CCUtils cCUtils) throws Exception;  //박재광 2022.03.28
    
    // 공통예산이월 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    List<Map<String,Object>> selectComBgtFwList(Map<String,Object> searchMap);    //공통예산이월 목록 조회, 박재광 2022.04.06
    
    void saveComBgtFwList(List<Map<String, Object>> list, CCUtils cCUtils) throws Exception;    //공통예산이월 저장, 박재광 2022.04.06
	// 공통예산이월 ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

	NexacroResult selectAllExcelDownload(Map<String, Object> searchMap, CCUtils ccUtils) throws Exception;

}