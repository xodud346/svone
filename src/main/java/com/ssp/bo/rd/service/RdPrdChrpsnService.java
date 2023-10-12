package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

public interface RdPrdChrpsnService {
    
	int selectPersonCount(Map<String, Object> searchMap) throws Exception; 
	List<Map<String, Object>> selectPersonList(Map<String, Object> searchMap) throws Exception; 
    String selectPersonSprCd(Map<String, Object> searchMap) throws Exception; 
    int insertPerson(Map<String, Object> dataMap) throws Exception; 
    String selectPersonDuplicateCheck(Map<String, Object> searchMap) throws Exception; 
    List<Map<String, Object>> selectPersonDetail(Map<String, Object> searchMap) throws Exception; 
    void updatePerson(Map<String, Object> dataMap) throws Exception; 

}
