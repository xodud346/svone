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
 * @see PcPrdPrcService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *
 */
public interface PcPrdPrcService {

    Map<String, Object> updateBssSalsprcCalc(Map<String, Object> commandMap, OdOrderComm odComm) throws Exception;

    Map<String, Object> selectCurrentDate(Map<String, Object> commandMap) throws Exception;

    NexacroResult prcHistoryList(Map<String, Object> searchMap) throws Exception;

}
