package com.ssp.bo.rd.dao;

import java.util.Map;

public interface DispEstmProcMailDao {
    String selectCustMailRcvAgreYn(Map<String, Object> param) throws Exception;

    String selectCprtcpMailRcvAgreYn(Map<String, Object> param) throws Exception;
}
