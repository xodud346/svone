package com.ssp.bo.rd.service;

import java.util.Map;

import com.ssp.bo.od.OdOrderComm;

public interface RdExcelDownService {
	
	/** 신규 상품등록 요청목록 */
	public Map<String, Object> newProductRegist(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	
	/** 상품정보 관리 */
	public Map<String, Object> productInfo(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	
	/** 구매정보 관리 */
	public Map<String, Object> purchaseInfo(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	
	/** 시리즈 그룹 상품 관리 */
	public Map<String, Object> groupProduct(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	
	/** 화학물질 정보 관리 */
	public Map<String, Object> chemicalMeterialInfo(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	
	/** 구매정보 변경이력 관리 */
	public Map<String, Object> purchaseInfoChangeHistory(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;

	/** 신규 상품일괄등록 요청목록 */
	Map<String, Object> newProductMultiRegist(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception;
	
	/** 협력사 견적 POOL 관리 */
	public Map<String, Object> cprtcpPoolInfoMng(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception;
	
	/** 협력사 견적 POOL 이력조회 */
	public Map<String, Object> cprtcpPoolInfoMngHstr(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception;
	
}
