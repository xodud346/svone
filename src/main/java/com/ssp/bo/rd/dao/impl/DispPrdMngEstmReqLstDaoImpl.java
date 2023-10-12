/*------------------------------------------------------------------------------
 * NAME : DispPrdMngEstmReqLstDaoImpl.java
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

import com.ssp.bo.rd.dao.DispPrdMngEstmReqLstDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   DispPrdMngEstmReqLstDaoImpl
 * @@desc   전시상품관리 견적요청 DaoImpl
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
@Repository("dispPrdMngEstmReqLstDao")
public class DispPrdMngEstmReqLstDaoImpl implements DispPrdMngEstmReqLstDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map> selectDispPrdMngEstmReqLst(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("DispPrdMngEstmReqLst.selectDispPrdMngEstmReqLst", map);
    }

    @Override
    public int selectDispPrdMngEstmReqLstCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("DispPrdMngEstmReqLst.selectDispPrdMngEstmReqLstCount", map);
    }

}