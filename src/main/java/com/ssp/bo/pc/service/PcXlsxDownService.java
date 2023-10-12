package com.ssp.bo.pc.service;

import java.util.Map;

import com.ssp.bo.od.OdOrderComm;

public interface PcXlsxDownService {
	
	public Map<String, Object> excelPrdPrcBzplc(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	public Map<String, Object> excelPrdPrc(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	public Map<String, Object> excelPrdPrcHst(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	public Map<String, Object> excelPrdPrcBatch(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	public Map<String, Object> excelPrdPrcStb(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	public Map<String, Object> excelExPrdPrcStb(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	public Map<String, Object> excelSalsPrdPrc(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	public Map<String, Object> excelExPrdPrc(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	public Map<String, Object> excelIntlLwst(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
	public Map<String, Object> excelPrdPrcChg(Map<String, Object> searchMap, OdOrderComm odComm ) throws Exception ;
}
