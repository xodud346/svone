/*------------------------------------------------------------------------------
 * NAME : OnlyPrdProcStbDaoImpl.java
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

import com.ssp.bo.rd.dao.OnlyPrdProcStbDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   OnlyPrdProcStbDaoImpl
 * @@desc   전용상품 처리대기 DaoImpl
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
@Repository("onlyPrdProcStbDao")
public class OnlyPrdProcStbDaoImpl implements OnlyPrdProcStbDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map> selectOnlyPrdProcStb(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("OnlyPrdProcStb.selectOnlyPrdProcStb", map);
    }

    @Override
    public int selectOnlyPrdProcStbCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("OnlyPrdProcStb.selectOnlyPrdProcStbCount", map);
    }
    
    @Override
	public int updateOnlyPrdBssSalsprcProc(Map<String, Object> map) throws Exception {
		return commonDAO.update("OnlyPrdProcStb.updateOnlyPrdBssSalsprcProc", map);
	}
    
 	@Override
 	public List<Map<String, Object>> selectOprUnitList(Map<String, Object> map) throws Exception {
 		return commonDAO.selectList("OnlyPrdProcStb.selectOprUnitList", map);
 	}
 	
 	@Override
 	public String selectOldDispStatsCd(Map<String, Object> map) throws Exception {
 		return commonDAO.selectStr("OnlyPrdProcStb.selectOldDispStatsCd", map);
 	}
 	
}