package com.ssp.bo.rd.service;

import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 *
 * @title   CprtcpPoolMngService
 * @@desc   협력사 견적 POOL 관리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2023.07.11
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2023.07.11			       최초작성
 */
public interface CprtcpPoolMngService {
    /**
     * 협력사 견적 POOL 관리 리스트 조회(selectCprtcpPoolReqMng)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectCprtcpPoolReqMng(Map<String, Object> searchMap) throws Exception;
    NexacroResult selectCprtcpPoolReqMngHstr(Map<String, Object> searchMap) throws Exception;
}
