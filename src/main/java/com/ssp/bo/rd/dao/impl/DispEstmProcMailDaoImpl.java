package com.ssp.bo.rd.dao.impl;

import com.ssp.bo.rd.dao.DispEstmProcMailDao;
import com.ssp.core.co.dao.CommonDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Repository("dispEstmProcMailDaoImpl")
public class DispEstmProcMailDaoImpl implements DispEstmProcMailDao {
    @Autowired
    private CommonDAO commonDAO;

    /**
     * 고객의 업무용메일수신동의여부 검증
     *
     * @param param
     * @return
     * @throws Exception
     */
    @Override
    public String selectCustMailRcvAgreYn(Map<String, Object> param) throws Exception {
        return commonDAO.selectStr("DispEstmProcMail.selectCustMailRcvAgreYn", param);
    }

    /**
     * 협력사의 업무용메일수신동의여부 검증
     *
     * @param param
     * @return
     * @throws Exception
     */
    @Override
    public String selectCprtcpMailRcvAgreYn(Map<String, Object> param) throws Exception {
        return commonDAO.selectStr("DispEstmProcMail.selectCprtcpMailRcvAgreYn", param);
    }

}
