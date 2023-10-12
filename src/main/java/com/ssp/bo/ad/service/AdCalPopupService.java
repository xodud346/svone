package com.ssp.bo.ad.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

public interface AdCalPopupService {

    NexacroResult selectCalCxlList(Map<String, String> commandMap,OdOrderComm odComm) throws Exception;
    NexacroResult selectCalHistoryList(Map<String, String> commandMap,OdOrderComm odComm) throws Exception;

    NexacroResult saveCalCxlList(List<Map<String, Object>> list,OdOrderComm odComm) throws Exception;
}
