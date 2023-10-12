/*------------------------------------------------------------------------------
 * NAME : RdServiceSmlDaoImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.20  홍길동
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.RdServiceSmlDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   RdServiceSmlDaoImpl
 * @@desc   업체공통클래스(샘풀) DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.04.20
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.20			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("rdServiceSmlDao")
public class RdServiceSmlDaoImpl implements RdServiceSmlDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map> selectRdServiceSml(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("RdServiceSml.selectRdServiceSml", map);
    }

    @Override
    public List<Map> selectRdServiceSmlPKey(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("RdServiceSml.selectRdServiceSmlPKey", map);
    }

    @Override
    public int selectRdServiceSmlCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("RdServiceSml.selectRdServiceSmlCount", map);
    }

    @Override
    public int insertRdServiceSml(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("RdServiceSml.insertRdServiceSml", map);
    }

    @Override
    public int updateRdServiceSml(Map<String, Object> map) throws Exception {
     	return commonDAO.update("RdServiceSml.updateRdServiceSml", map);
    }

    @Override
    public int deleteRdServiceSml(Map<String, Object> map) throws Exception {
     	return commonDAO.delete("RdServiceSml.deleteRdServiceSml", map);
    }
}