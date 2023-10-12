package com.ssp.bo.pr.service;

import java.util.List;
import java.util.Map;

public interface PrProductHistoryService {

    int selectProductHistoryCount(Map<String, Object> searchMap) throws Exception; 
    List<Map<String, Object>> selectProductHistoryList(Map<String, Object> searchMap) throws Exception; 
    Map<String, Object> selectPrdHstDtlHtmlInfo(Map<String, Object> searchMap) throws Exception; 

}
