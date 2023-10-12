package com.ssp.bo.ad.dao;

import java.util.List;
import java.util.Map;

public interface AdCalculateDao {

    int selectCalculateListCount(Map<String, String> searchMap) throws Exception;
    List<Map<String, Object>> selectCalculateList(Map<String, String> searchMap);

    int selectNoCalculateListCount(Map<String, String> searchMap) throws Exception;
    List<Map<String, Object>> selectNoCalculateList(Map<String, String> searchMap);
}
