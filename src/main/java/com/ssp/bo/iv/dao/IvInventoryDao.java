package com.ssp.bo.iv.dao;

import java.util.List;
import java.util.Map;

public interface IvInventoryDao {
	
	List<Map<String, Object>> selectComCdList(Map<String, Object> searchMap);
    int selectInventoryListCount(Map<String, String> searchMap) throws Exception;
    List<Map<String, Object>> selectInventoryList(Map<String, String> searchMap);
    List<Map<String, Object>> selectInventoryDetail(Map<String, Object> searchMap);
    List<Map<String, Object>> selectInventoryListExcel(Map<String, String> searchMap);

}
