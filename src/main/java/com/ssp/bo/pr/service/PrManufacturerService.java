package com.ssp.bo.pr.service;

import java.util.List;
import java.util.Map;

public interface PrManufacturerService {
	
	int selectManufacturerCount(Map<String, Object> searchMap) throws Exception; 
	List<Map<String, Object>> selectManufacturerList(Map<String, Object> searchMap) throws Exception; 
    void saveManufacturer(Map<String, Object> dataMap) throws Exception; 

}
