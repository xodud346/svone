package com.ssp.bo.rd.service;

import java.util.Map;

import com.ssp.bo.od.OdOrderComm;

public interface RdXlsxDownService {
	 
	public Map<String, Object> excelPrdPrc(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	public Map<String, Object> excelExPrdPrc(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	public Map<String, Object> excelPrdPrcStb(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	public Map<String, Object> excelExPrdPrcStb(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	public Map<String, Object> excelSalsPrdPrc(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	public Map<String, Object> excelPrdPrcHst(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	
}
