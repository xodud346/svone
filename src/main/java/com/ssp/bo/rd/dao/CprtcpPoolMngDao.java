package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   CprtcpPoolMngDao
 * @@desc   협력사 견적 POOL 관리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2023.07.11
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2023.07.11			       최초작성n */
public interface CprtcpPoolMngDao {
    /**
     * 협력사 견적 POOL 관리 리스트 조회(selectCprtcpPoolMng)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectCprtcpPoolMng(Map<String, Object> map) throws Exception;
    
    /**
     * 협력사 견적 POOL 관리 리스트 카운트(selectCprtcpPoolMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectCprtcpPoolMngCount(Map<String, Object> map) throws Exception;
    
    /**
     * 협력사 견적 POOL 이력 리스트 조회(selectCprtcpPoolMngHstr)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectCprtcpPoolMngHstr(Map<String, Object> map) throws Exception;
    
    /**
     * 협력사 견적 POOL 이력 리스트 카운트(selectCprtcpPoolHstrCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectCprtcpPoolHstrCount(Map<String, Object> map) throws Exception;

}
