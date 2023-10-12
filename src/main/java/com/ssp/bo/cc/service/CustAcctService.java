package com.ssp.bo.cc.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;

/**
 * <pre>
 * @title CustAcctService
 * @desc 계정관리
 * @package com.ssp.core.cc.service
 * </pre>
 * @author 
 * @since 2022. 02. 17.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.25			최초작성
 */
public interface CustAcctService {
	
	Map<String, Object> insertAcctBasis(CCUtils cCUtils, Map<String, Object> paramMap) throws Exception;
	NexacroResult updateAcctBasisList(List<Map<String, Object>> updateList) throws Exception;
	NexacroResult selectAcctSinglePopupList(Map<String, Object> paramMap) throws Exception;
	NexacroResult selectAcctMultiPopupList(Map<String, Object> paramMap) throws Exception;
	NexacroResult selectAcctDeptMappList(Map<String, Object> paramMap) throws Exception;
	Map<String, Object> updateAcctBasis(Map<String, Object> paramMap) throws Exception;
	
	List<Map<String, Object>> selectTreeList(Map<String, Object> paramMap) throws Exception;
	
	Map<String, Object> selectAcctDeptDtlInfo(Map<String, Object> paramMap) throws Exception;
	
	List<Map<String, Object>> selectAcctDeptMappListById(Map<String, Object> paramMap) throws Exception;
		
	void saveAcctDeptMapp(Map<String, Object> dtlInfo, List<Map<String, Object>> subGrdList, CCUtils cCUtils) throws Exception;
	
	NexacroResult updateAcctBasisList2(List<Map<String, Object>> updateList) throws Exception;
	
	NexacroResult selectBizplcAcctTreeList(Map<String, Object> paramMap) throws Exception;
	
	Map<String, Object> selectBgtAcctIdDetail(Map<String, Object> paramMap) throws Exception;
	NexacroResult updateBgtAcctBasis(Map<String, Object> paramMap) throws Exception;
	
	NexacroResult selectAllExcelDownload(Map<String, Object> searchMap, CCUtils ccUtils) throws Exception;
	Map<String,Object> selectAllExcelDownload2(Map<String, Object> searchMap, CCUtils ccUtils) throws Exception;
	
	Map<String, Object> selectCheckHrnkAcct(Map<String, Object> paramMap) throws Exception;
	
	NexacroResult selectComCostTrnsfDeptList(Map<String, Object> paramMap) throws Exception;
	
	NexacroResult selectRefSinglePopupList(Map<String, Object> paramMap) throws Exception;
}
