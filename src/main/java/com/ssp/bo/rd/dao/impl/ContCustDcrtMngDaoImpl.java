/*------------------------------------------------------------------------------
 * NAME : ContCustDcrtMngDaoImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.10  홍길동
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.ContCustDcrtMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   ContCustDcrtMngDaoImpl
 * @@desc   계약고객할인율관리 DaoImpl
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
@Repository("contCustDcrtMngDao")
public class ContCustDcrtMngDaoImpl implements ContCustDcrtMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map> selectContCustDcrtMng(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("ContCustDcrtMng.selectContCustDcrtMng", map);
    }
    @Override
    public int selectContCustDcrtMngCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("ContCustDcrtMng.selectContCustDcrtMngCount", map);
    }

	@Override
	public int saveContCustDcrtMng(Map<String, Object> saveData) throws Exception {
		return commonDAO.insert("ContCustDcrtMng.insertContCustDcrtMng", saveData);
	}
	@Override
	public List<Map> selectSalsChrpsnYn(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("ContCustDcrtMng.selectSalsChrpsnYn", searchMap);
	}
	@Override
	public int selectContCustDcrtMngDupl(Map<String, Object> saveData) throws Exception {
		return commonDAO.selectInteger("ContCustDcrtMng.selectContCustDcrtMngDupl", saveData);
	}
	@Override
	public int selectContCustDcrtMngHstCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("ContCustDcrtMng.selectContCustDcrtMngHstCount", searchMap);
	}
	@Override
	public List<Map> selectContCustDcrtMngHst(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("ContCustDcrtMng.selectContCustDcrtMngHst", searchMap);
	}
	@Override
	public int updateContCustDcrtMng(Map<String, Object> saveData) throws Exception {
		return commonDAO.update("ContCustDcrtMng.updateContCustDcrtMng", saveData);
		
	}
    
}