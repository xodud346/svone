package com.ssp.bo.pr.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title SSP 전시상품
 * @package com.ssp.bo.pr.service
 * </pre>
 * @author 박성진
 * @since 2022.04.25
 * @version 1.0
 * @see PrPrdSprService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface PrPrdSprService {
    List<Map<String, Object>> selectPrdSprList(Map<String, Object> commandMap) throws Exception;
    
    List<Map<String, Object>> selectSearchDisp(Map<String, Object> searchMap) throws Exception;
    
    List<Map<String, Object>> selectPrdSprOptList(Map<String, Object> commandMap) throws Exception;
    
    List<Map<String, Object>> selectPrdSprAddList(Map<String, Object> commandMap) throws Exception;
    
    List<Map<String, Object>> selectPrdSprConnList(Map<String, Object> commandMap) throws Exception;
    
    List<Map<String, Object>> selectPrdSprStgList(Map<String, Object> commandMap) throws Exception;
    
    List<Map<String, Object>> selectPrdSprStgDtlList(Map<String, Object> commandMap) throws Exception;

	int selectPrdSprCount(Map<String, Object> searchMap) throws Exception;
	
	int selectPrdClcdCount(Map<String, Object> searchMap) throws Exception;
	
	int selectPrdSprOptCount(Map<String, Object> searchMap) throws Exception;
	
	int selectPrdSprAddCount(Map<String, Object> searchMap) throws Exception;
	
	int selectPrdSprConnCount(Map<String, Object> searchMap) throws Exception;
	
	int selectPrdSprStgCount(Map<String, Object> searchMap) throws Exception;
	
	int selectPrdSprStgDtlCount(Map<String, Object> searchMap) throws Exception;

	NexacroResult savePrdSpr(Map<String, Object> param) throws Exception;
	
	void savePrdSprTwo(Map<String, Object> paramMap) throws Exception;
	
	void savePrdSpraddInfo(Map<String, Object> paramMap) throws Exception;
	
	void savePrdSprConn(Map<String, Object> paramMap) throws Exception;
	
	void savePrdSprStg(Map<String, Object> paramMap) throws Exception;
	
	void savePrdSprStgDtl(Map<String, Object> paramMap) throws Exception;
	
	NexacroResult savePrdSprRsn(Map<String, Object> param) throws Exception;
	
	NexacroResult updatePrdSpr(Map<String, Object> param) throws Exception;
	
	void updateSrtSo(Map<String, Object> paramMap) throws Exception;
	
	void updatePrdSprOpt(List<Map<String, Object>> optList) throws Exception;
	
	void updatePrdSprOptDtl(List<Map<String, Object>> optDtlList) throws Exception;
	
	void updatePrdSprStg(List<Map<String, Object>> stgList) throws Exception;
	
	void updatePrdSprStgDtl(List<Map<String, Object>> stgDtlList) throws Exception;

	List<Map<String, Object>> selectPrdSpr(Map<String, Object> searchMap) throws Exception;
	
	List<Map<String, Object>> selectPrdId(Map<String, Object> searchMap) throws Exception;

}
