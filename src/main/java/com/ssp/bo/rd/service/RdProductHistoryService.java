package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

public interface RdProductHistoryService {

    int selectProductHistoryCount(Map<String, Object> searchMap) throws Exception; 
    List<Map<String, Object>> selectProductHistoryList(Map<String, Object> searchMap) throws Exception; 

}
