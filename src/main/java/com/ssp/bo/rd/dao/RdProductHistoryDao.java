package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

public interface RdProductHistoryDao {
    
    int selectProductHistoryCount(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectProductHistoryList(Map<String, Object> searchMap);
    
}
