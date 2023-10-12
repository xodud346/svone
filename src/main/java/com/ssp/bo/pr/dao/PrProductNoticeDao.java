package com.ssp.bo.pr.dao;

import java.util.List;
import java.util.Map;

public interface PrProductNoticeDao {

    List<Map<String, Object>> selectProductNoticeList(Map<String, Object> searchMap);
    List<Map<String, Object>> selectProductNoticeDetailList(Map<String, Object> searchMap);
    String selectProductNoticeNextval() throws Exception;
    String selectProductNoticeDetailNextval(Map<String, Object> searchMap) throws Exception;
    Integer mergeProductNotice(Map<String, Object> noticeInfo) throws Exception;
    Integer mergeProductNoticeDetail(Map<String, Object> detailInfo) throws Exception;
    Integer deleteProductNoticeDetail(Map<String, Object> searchMap) throws Exception;

}
