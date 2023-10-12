package com.ssp.bo.pr.dao;

import java.util.List;
import java.util.Map;

public interface PrRegistProductDao {
    
    int selectRegistProductCount(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectRegistProductList(Map<String, Object> searchMap);
    Map<String, Object> selectRegistProductBasicInfo(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectMroCategoryAttrList(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectMroCategoryAttrListDef(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectSspCategoryListByMroPrdClcd(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectSspAttrList(Map<String, Object> searchMap) throws Exception;
    Map<String, Object> selectMroAddInfo(Map<String, Object> searchMap) throws Exception;
    Map<String, Object> selectSspAddInfo(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectBgList(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectProductImageList(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectProductCertList(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectProductNoticeList(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectSeriesGroupList(Map<String, Object> searchMap) throws Exception;
    Map<String, Object> selectProductPrice(Map<String, Object> searchMap) throws Exception;
    Map<String, Object> selectPriceInfo(Map<String, Object> searchMap) throws Exception;
    int insertSspProductAttr(Map<String, Object> dataMap) throws Exception;
    int updateSspProductAttr(Map<String, Object> dataMap) throws Exception;
    int deleteSspProductAttrByPrdId(Map<String, Object> dataMap) throws Exception;
    int deleteSspProductAttr(Map<String, Object> dataMap) throws Exception;
    List<Map<String, Object>> selectSeriesGroupListToAttrSync(Map<String, Object> searchMap) throws Exception;
    int updateSspProductAttrToAttrSync(Map<String, Object> dataMap) throws Exception;
    int deleteSspProductNotiByPrdId(Map<String, Object> dataMap) throws Exception;
    int insertSspProductNoti(Map<String, Object> dataMap) throws Exception;
    int updateSspProductNoti(Map<String, Object> dataMap) throws Exception;
    int deleteSspProductNoti(Map<String, Object> dataMap) throws Exception;
    int updateProductBasicInfo(Map<String, Object> dataMap) throws Exception;
    List<Map<String, Object>> selectProductAddRegulationList(Map<String, Object> searchMap) throws Exception;

    
    int mergeSspPrdNmInfo(Map<String, Object> dataMap) throws Exception;

}
