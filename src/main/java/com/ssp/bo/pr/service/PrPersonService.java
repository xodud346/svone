package com.ssp.bo.pr.service;

import java.util.List;
import java.util.Map;

import com.ssp.bo.od.OdOrderComm;

public interface PrPersonService {
    
	int selectPersonCount(Map<String, Object> searchMap) throws Exception; 
	List<Map<String, Object>> selectPersonList(Map<String, Object> searchMap) throws Exception; 
    String selectPersonSprCd(Map<String, Object> searchMap) throws Exception; 
    int insertPerson(Map<String, Object> dataMap) throws Exception; 
    String selectPersonDuplicateCheck(Map<String, Object> searchMap) throws Exception; 
    List<Map<String, Object>> selectPersonDetail(Map<String, Object> searchMap) throws Exception; 
    void updatePerson(Map<String, Object> dataMap) throws Exception; 
	List<Map<String, Object>> selectPersonOprtrOrgList(Map<String, Object> searchMap) throws Exception;
	Map<String, Object> callLargeExcelDownload(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception; 

}
