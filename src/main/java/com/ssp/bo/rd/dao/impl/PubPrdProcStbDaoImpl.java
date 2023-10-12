/*------------------------------------------------------------------------------
 * NAME : PubPrdProcStbDaoImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.06  나용철
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.PubPrdProcStbDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   PubPrdProcStbDaoImpl
 * @@desc   공용상품처리대기 DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.05.06
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.05.06			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("pubPrdProcStbDao")
public class PubPrdProcStbDaoImpl implements PubPrdProcStbDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map> selectPubPrdProcStb(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PubPrdProcStb.selectPubPrdProcStb", map);
    }

    
    @Override
    public int selectPubPrdProcStbCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("PubPrdProcStb.selectPubPrdProcStbCount", map);
    }

}