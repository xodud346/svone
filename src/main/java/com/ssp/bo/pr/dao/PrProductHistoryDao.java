package com.ssp.bo.pr.dao;

import java.util.List;
import java.util.Map;

public interface PrProductHistoryDao {
    
    int selectProductHistoryCount(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectProductHistoryList(Map<String, Object> searchMap);
    Map<String, Object> selectPrdHstDtlHtmlInfo(Map<String, Object> searchMap) throws Exception;
    
}
