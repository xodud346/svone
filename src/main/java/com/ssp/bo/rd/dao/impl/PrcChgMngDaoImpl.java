/*------------------------------------------------------------------------------
 * NAME : PrcChgMngDaoImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.10  나용철
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.PrcChgMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   PrcChgMngDaoImpl
 * @@desc   업체공통클래스(샘풀) DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.05.10			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("prcChgMngDao")
public class PrcChgMngDaoImpl implements PrcChgMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    /**
     * 가격변동이력관리 리스트 조회(selectPrcChgMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectPrcChgMng(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PrcChgMng.selectPrcChgMng", map);
    }

    
    /**
     * 가격변동이력관리 리스트 총카운트 조회(selectPrcChgMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectPrcChgMngCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("PrcChgMng.selectPrcChgMngCount", map);
    }

    
}