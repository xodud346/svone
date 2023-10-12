package com.ssp.bo.ad.dao;

import java.util.List;
import java.util.Map;

public interface AdCalPopupDao {
    
    List<Map<String, Object>> selectCalCxlList(Map<String, String> searchMap);
    int selectCalHistoryListCount(Map<String, String> searchMap) throws Exception;
    List<Map<String, Object>> selectCalHistoryList(Map<String, String> searchMap);
    
    Map<String, Object> saveCalCxlList(Map<String, Object> searchMap) throws Exception;

}
