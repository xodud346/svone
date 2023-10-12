package com.ssp.bo.cc.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

public interface CcComService {
    
    /** 분류코드 상세 리스트 서비스 interface */
    NexacroResult comCdClsfDtlSearchList(Map<String, Object> commandMap) throws Exception;
    
    NexacroResult comCodes(List<Map<String, Object>> listComCodes) throws Exception;
    
    
    NexacroResult selectBzplcOprunit(Map<String, Object> param) throws Exception;
    
    int checkMbrExist(Map<String, Object> param) throws Exception;
}
