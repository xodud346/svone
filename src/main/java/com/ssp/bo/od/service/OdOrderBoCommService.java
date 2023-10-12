package com.ssp.bo.od.service;

import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

public interface OdOrderBoCommService {
    /*Public Interface*/
    NexacroResult selectCommonCodeName(Map<String, Object> searchMap) throws Exception;
    NexacroResult selectCommonMessage(Map<String, Object> searchMap) throws Exception;

}