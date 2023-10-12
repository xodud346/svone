package com.ssp.bo.pr.dao;

import java.util.List;
import java.util.Map;

public interface PrProductDispDao {
	
    Map<String, Object> selectDispBasis(Map<String, Object> searchMap) throws Exception;
    Map<String, Object> selectDispReprProductInfo(Map<String, Object> searchMap) throws Exception;
    Map<String, Object> selectOptnNmByDtlItmno(Map<String, Object> searchMap) throws Exception;
    Map<String, Object> selectProductDispOprtr(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectDispOptnBasis(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectDispOptnDtl(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectDispOptnDtlMapp(Map<String, Object> searchMap) throws Exception;
    int insertDispBasis(Map<String, Object> searchMap) throws Exception;
    int insertDispOptnBasis(Map<String, Object> searchMap) throws Exception;
    int insertDispOptnDtl(Map<String, Object> searchMap) throws Exception;
    int insertDispOptnDtlMapp(Map<String, Object> searchMap) throws Exception;
    int insertDispAddOptnBasis(Map<String, Object> searchMap) throws Exception;
    int insertDispAddOptnDtl(Map<String, Object> searchMap) throws Exception;
    String selectProductDispExists(Map<String, Object> searchMap) throws Exception;

    List<Map<String, Object>> selectDispAddOptnBasis(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectDispAddOptnDtl(Map<String, Object> searchMap) throws Exception;
    
    int deleteDispOptnBasis(Map<String, Object> searchMap) throws Exception;
    int deleteDispOptnDtlByBasis(Map<String, Object> searchMap) throws Exception;
    int deleteDispOptnDtl(Map<String, Object> searchMap) throws Exception;
    int deleteDispOptnDtlMappAll(Map<String, Object> searchMap) throws Exception;
    int deleteDispAddOptnBasis(Map<String, Object> searchMap) throws Exception;
    int deleteDispAddOptnDtlByBasis(Map<String, Object> searchMap) throws Exception;
    int deleteDispAddOptnDtl(Map<String, Object> searchMap) throws Exception;
    
}
