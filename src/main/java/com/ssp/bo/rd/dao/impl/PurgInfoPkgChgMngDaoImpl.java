/*------------------------------------------------------------------------------
 * NAME : PurgInfoPkgChgMngDaoImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.28  newwhite7
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.PurgInfoPkgChgMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   PurgInfoPkgChgMngDaoImpl
 * @@desc   업체공통클래스(샘풀) DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.28			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("purgInfoPkgChgMngDao")
public class PurgInfoPkgChgMngDaoImpl implements PurgInfoPkgChgMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map> selectPurgInfoPkgChgMng(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PurgInfoPkgChgMng.selectPurgInfoPkgChgMng", map);
    }

    @Override
    public List<Map> selectPurgInfoPkgChgMngPKey(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PurgInfoPkgChgMng.selectPurgInfoPkgChgMngPKey", map);
    }

    @Override
    public int selectPurgInfoPkgChgMngCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("PurgInfoPkgChgMng.selectPurgInfoPkgChgMngCount", map);
    }

    @Override
    public int insertPurgInfoPkgChgMng(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("PurgInfoPkgChgMng.insertPurgInfoPkgChgMng", map);
    }

    @Override
    public int updatePurgInfoPkgChgMng(Map<String, Object> map) throws Exception {
     	return commonDAO.update("PurgInfoPkgChgMng.updatePurgInfoPkgChgMng", map);
    }

    @Override
    public int deletePurgInfoPkgChgMng(Map<String, Object> map) throws Exception {
     	return commonDAO.delete("PurgInfoPkgChgMng.deletePurgInfoPkgChgMng", map);
    }
}