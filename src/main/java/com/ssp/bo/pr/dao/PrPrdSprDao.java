package com.ssp.bo.pr.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title SSP 전시상품
 * @package com.ssp.bo.pr.dao
 * </pre>
 * @author 박성진
 * @since 2022.04.25
 * @version 1.0
 * @see PrPrdSprDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface PrPrdSprDao {
    List<Map<String, Object>> selectPrdSprList(Map<String, Object> searchMap) throws Exception;
    
    List<Map<String, Object>> selectSearchDisp(Map<String, Object> searchMap) throws Exception;
    
    List<Map<String, Object>> selectPrdSprOptList(Map<String, Object> searchMap) throws Exception;
    
    List<Map<String, Object>> selectPrdSprAddList(Map<String, Object> searchMap) throws Exception;
    
    List<Map<String, Object>> selectPrdSprConnList(Map<String, Object> searchMap) throws Exception;
    
    List<Map<String, Object>> selectPrdSprStgList(Map<String, Object> searchMap) throws Exception;
    
    List<Map<String, Object>> selectPrdSprStgDtlList(Map<String, Object> searchMap) throws Exception;

	int selectPrdSprCount(Map<String, Object> searchMap) throws Exception;
	
	int selectPrdSprOptCount(Map<String, Object> searchMap) throws Exception;
	
	int selectPrdClcdCount(Map<String, Object> searchMap) throws Exception;
	
	int selectPrdSprAddCount(Map<String, Object> searchMap) throws Exception;
	
	int selectPrdSprConnCount(Map<String, Object> searchMap) throws Exception;
	
	int selectPrdSprStgCount(Map<String, Object> searchMap) throws Exception;
	
	int selectPrdSprStgDtlCount(Map<String, Object> searchMap) throws Exception;

	int insertPrdSpr(Object param) throws Exception;
	
	int insertPrdSprTwo(Map<String, Object> dataMap) throws Exception;
	
	int savePrdSpraddInfo(Map<String, Object> dataMap) throws Exception;
	
	int savePrdSprConn(Map<String, Object> dataMap) throws Exception;
	
	int savePrdSprStg(Map<String, Object> dataMap) throws Exception;
	
	int savePrdSprStgDtl(Map<String, Object> dataMap) throws Exception;
	
	int insertPrdSprRsn(Object param) throws Exception;
	
	int updatePrdSpr(Object param) throws Exception;
	
	int updateSrtSo(Map<String, Object> dataMap) throws Exception;
	
	int updatePrdSprOpt(Map<String, Object> dataMap) throws Exception;
	
	int updatePrdSprOptDtl(Map<String, Object> dataMap) throws Exception;
	
	int updatePrdSprStg(Map<String, Object> dataMap) throws Exception;
	
	int updatePrdSprStgDtl(Map<String, Object> dataMap) throws Exception;
	
	int deletePrdSprOpt(Map<String, Object> dataMap) throws Exception;
	
	int deletePrdSprOptDtl(Map<String, Object> dataMap) throws Exception;
	
	int deletePrdSprStg(Map<String, Object> dataMap) throws Exception;
	
	int deletePrdSprStgDtl(Map<String, Object> dataMap) throws Exception;

	List<Map<String, Object>> selectPrdSpr(Map<String, Object> searchMap) throws Exception;
	
	List<Map<String, Object>> selectPrdId(Map<String, Object> searchMap) throws Exception;
    
}
