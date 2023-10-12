/*------------------------------------------------------------------------------
 * NAME : MetaTblInfoInqDaoImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.21  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.MetaTblInfoInqDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title  MetaTblInfoInqDaoImpl
 * @@desc   메타테이블정보조회 DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.04.21
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.21			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("metaTblInfoInqDao")
public class MetaTblInfoInqDaoImpl implements MetaTblInfoInqDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map> selectMetaTblInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("MetaTblInfoInq.selectMetaTblInfoInq", map);
    }
}