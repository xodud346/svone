package com.ssp.bo.pc.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

public interface PcExPrcMngService {

	public List<Map<String, Object>> getDpDispInfo(Map<String, Object> searchMap) throws Exception;

	public NexacroResult getExItemInfo(Map<String, Object> searchMap) throws Exception;

	public Map<String, Object> savePrcMngMaster(List<Map<String, Object>> saveMap,OdOrderComm odComm) throws Exception;

	public Map<String, Object> savePrcMngSspPrc(List<Map<String, Object>> saveMap,OdOrderComm odComm) throws Exception;

    public Map<String, Object> savePrcMngDlcstDtls(List<Map<String, Object>> saveMap,OdOrderComm odComm) throws Exception;

    public Map<String, Object> savePrcMngQtyDtls(List<Map<String, Object>> saveMap,OdOrderComm odComm) throws Exception;

    public Map<String, Object> savePrcMngSalsPrc(List<Map<String, Object>> saveMap,OdOrderComm odComm) throws Exception;

    public Map<String, Object> deletePrcMngSalsPrc(List<Map<String, Object>> saveMap,OdOrderComm odComm) throws Exception;

    public Map<String, Object> savePrcMngDispHist(Map<String, Object> saveMap,OdOrderComm odComm) throws Exception;

    public NexacroResult selectSalsPrcHistList(Map<String, Object> searchMap) throws Exception;

    public NexacroResult getNewExItemInfo(Map<String, Object> searchMap) throws Exception;
}
