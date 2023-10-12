package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.CprtcpPoolMngDao;
import com.ssp.core.co.dao.CommonDAO;

@Repository("cprtcpPoolMngDao")
public class CprtcpPoolMngDaoImpl  implements CprtcpPoolMngDao {
	
	@Autowired
    private CommonDAO commonDAO;
	
    /**
     * 협력사 견적 POOL 관리 리스트 조회(selectCprtcpPoolMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectCprtcpPoolMng(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("CprtcpPoolMng.selectCprtcpPoolMng", map);
    }
    
    /**
     * 협력사 견적 POOL 관리 리스트 카운트(selectCprtcpPoolMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectCprtcpPoolMngCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("CprtcpPoolMng.selectCprtcpPoolMngCount", map);
    }

    /**
     * 협력사 견적 POOL 이력 리스트 조회(selectCprtcpPoolMngHstr)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectCprtcpPoolMngHstr(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("CprtcpPoolMng.selectCprtcpPoolMngHstr", map);
    }
    
    /**
     * 협력사 견적 POOL 이력 리스트 카운트(selectCprtcpPoolHstrCount)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectCprtcpPoolHstrCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("CprtcpPoolMng.selectCprtcpPoolHstrCount", map);
    }
    
}
