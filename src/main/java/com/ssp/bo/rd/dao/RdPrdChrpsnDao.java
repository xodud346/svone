package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

public interface RdPrdChrpsnDao {
    
    int selectPersonCount(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectPersonList(Map<String, Object> searchMap);
    String selectPersonSprCd(Map<String, Object> searchMap) throws Exception;
    Integer insertPerson(Map<String, Object> dataMap) throws Exception;
    String selectPersonDuplicateCheck(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectPersonDetail(Map<String, Object> searchMap);
    Integer updatePerson(Map<String, Object> dataMap) throws Exception;
    Integer insertPersonHistory(Map<String, Object> dataMap) throws Exception;


}
