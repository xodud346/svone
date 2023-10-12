package com.ssp.bo.pr.service;

import java.util.List;
import java.util.Map;

public interface PrProductDispService {
	
	Map<String, Object> selectDispBasis(Map<String, Object> searchMap) throws Exception; 
	Map<String, Object> selectProductDispOprtr(Map<String, Object> searchMap) throws Exception; 
	Map<String, Object> selectDispReprProductInfo(Map<String, Object> searchMap) throws Exception; 
	List<Map<String, Object>> selectDispOptnBasis(Map<String, Object> searchMap) throws Exception; 
	List<Map<String, Object>> selectDispOptnDtl(Map<String, Object> searchMap) throws Exception; 
	List<Map<String, Object>> selectDispOptnDtlMapp(Map<String, Object> searchMap) throws Exception; 
	int saveProductDispInfo(Map<String, Object> ds_basic,List<Map<String, Object>> ds_optnBasis,List<Map<String, Object>> ds_optnDtl,
			List<Map<String, Object>> ds_prdCon, List<Map<String, Object>> ds_addOptnBasis,List<Map<String, Object>> ds_addOptnDtl, List<Map<String, Object>> ds_delOptn) throws Exception;
    String selectProductDispExists(Map<String, Object> searchMap) throws Exception; 
    
    List<Map<String, Object>> selectDispAddOptnBasis(Map<String, Object> searchMap) throws Exception; 
	List<Map<String, Object>> selectDispAddOptnDtl(Map<String, Object> searchMap) throws Exception;
	void fileDelete(String string) throws Exception; 

}
