package com.ssp.bo.pr.service;

import java.util.List;
import java.util.Map;

public interface PrProductAddService {

	int selectProductAddCount(Map<String, Object> searchMap) throws Exception; 
	List<Map<String, Object>> selectProductAddList(Map<String, Object> searchMap) throws Exception; 
	Map<String, Object> selectProductAddBasicInfo(Map<String, Object> searchMap) throws Exception; 
	int insertRegProcPrdInfo(Map<String, Object> dataMap) throws Exception; 
	void insertProductRegProc(Map<String, Object> paramMap) throws Exception; 
	List<Map<String, Object>> selectSspAttrList(Map<String, Object> searchMap) throws Exception; 
	Map<String, Object> selectSspAddInfo(Map<String, Object> searchMap) throws Exception; 
	List<Map<String, Object>> selectProductNoticeList(Map<String, Object> searchMap) throws Exception; 
	List<Map<String, Object>> selectRegProcProductImageList(Map<String, Object> searchMap) throws Exception; 

}
