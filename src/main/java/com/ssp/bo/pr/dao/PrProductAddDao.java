package com.ssp.bo.pr.dao;

import java.util.List;
import java.util.Map;

public interface PrProductAddDao {
    
    int selectProductAddCount(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectProductAddList(Map<String, Object> searchMap);
    Map<String, Object> selectProductAddBasicInfo(Map<String, Object> searchMap) throws Exception;
    int insertPrdInfo(Map<String, Object> dataMap) throws Exception;
    int insertPrdInfoAttrMap(Map<String, Object> dataMap) throws Exception;
    int insertPrdNotiItmMapp(Map<String, Object> dataMap) throws Exception;
    int insertRegProcPrdInfo(Map<String, Object> dataMap) throws Exception;
    int updateRegProcPrdInfo(Map<String, Object> dataMap) throws Exception;
    int insertRegProcPrdInfoAttrMap(Map<String, Object> dataMap) throws Exception;
    int insertRegProcPrdNotiItmMapp(Map<String, Object> dataMap) throws Exception;
    List<Map<String, Object>> selectSspAttrList(Map<String, Object> searchMap) throws Exception;
    Map<String, Object> selectSspAddInfo(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectProductNoticeList(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectRegProcProductImageList(Map<String, Object> searchMap) throws Exception;

}
