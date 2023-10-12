package com.ssp.bo.ad.dao;

import java.util.List;
import java.util.Map;

public interface AdWarehousingDao {
	
	List<Map<String, Object>> selectComCdList(Map<String, Object> searchMap);
    int selectWarehousingListCount(Map<String, String> searchMap) throws Exception;
    List<Map<String, Object>> selectWarehousingList(Map<String, String> searchMap);
    Map<String, Object> callWarehousingFinish(Map<String, Object> commandMap) throws Exception ;

}
