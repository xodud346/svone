package com.ssp.bo.pr.service;

import java.util.List;
import java.util.Map;

public interface PrRegistProductService {

	int selectRegistProductCount(Map<String, Object> searchMap) throws Exception; 
	List<Map<String, Object>> selectRegistProductList(Map<String, Object> searchMap) throws Exception; 
	List<Map<String, Object>> selectMroCategoryAttrList(Map<String, Object> searchMap) throws Exception; 
	List<Map<String, Object>> selectMroCategoryAttrListDef(Map<String, Object> searchMap) throws Exception; 
	Map<String, Object> selectRegistProductBasicInfo(Map<String, Object> searchMap) throws Exception; 
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
	void updateSspProductAttr(Map<String, Object> dataMap, List<Map<String, Object>> sspAttrList) throws Exception; 
	void syncProductAttrInfoByBssProduct(String coCd, String bssPrdId, String prdId, String prdAttrCd, String sessionOprtrId) throws Exception; 
	void updateSspProductNoti(Map<String, Object> dataMap, List<Map<String, Object>> sspAttrList) throws Exception; 
	void updateProductBasicInfo(Map<String, Object> dataMap, List<Map<String, Object>> attrInfo, List<Map<String, Object>> noticeInfo) throws Exception; 
	List<Map<String, Object>> selectProductAddRegulationList(Map<String, Object> searchMap) throws Exception; 

}
