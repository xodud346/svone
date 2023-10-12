package com.ssp.bo.pc.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

/**
 * <pre>
 * @title 절사관리
 * @package com.ssp.bo.pc.service
 * </pre>
 * @author scvgo17
 * @since 2022. 01. 18.
 * @version 1.0
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface PcDetrInfoService {

    /** 절사 목록 조회 */
    List<Map<String, Object>> selectDetrInfoList(Map<String, Object> commandMap, OdOrderComm odComm) throws Exception; 
    
    /** 절사 수정 */
    NexacroResult updateDetrInfo(Map<String, Object> searchMap, List<Map<String, Object>> commandMap, OdOrderComm odComm) throws Exception;
    
}
