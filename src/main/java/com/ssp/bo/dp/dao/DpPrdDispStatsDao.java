package com.ssp.bo.dp.dao;

import java.util.List;
import java.util.Map;

public interface DpPrdDispStatsDao {

    List<Map<String, Object>> selectDispHistoryList(Map<String, Object> searchMap);

    int selectDispHistoryCount(Map<String, Object> searchMap) throws Exception;

    int insertDispRegHist(Map<String, Object> searchMap) throws Exception;

    Map<String, Object> insertDispRegHistLast(Map<String, Object> searchMap) throws Exception;

    Map<String, Object> insertDispStatsInfoHist(Map<String, Object> searchMap) throws Exception;

    int selectPcPrdDispHistCount(Map<String, Object> prcMap) throws Exception;
}
