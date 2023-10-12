package com.ssp.bo.pr.dao;

import java.util.List;
import java.util.Map;

public interface PrManufacturerDao {
	
    int selectManufacturerCount(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectManufacturerList(Map<String, Object> searchMap);
    int savetManufacturer(Map<String, Object> searchMap) throws Exception;

}
