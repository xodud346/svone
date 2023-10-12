/*------------------------------------------------------------------------------
 * NAME : GenCustDcrtMngDaoImpl.java
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

import com.ssp.bo.rd.dao.GenCustDcrtMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   GenCustDcrtMngDaoImpl
 * @@desc   일반고객할인율관리 DaoImpl
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
@Repository("genCustDcrtMngDao")
public class GenCustDcrtMngDaoImpl implements GenCustDcrtMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;
    
    @Override
    public List<Map> selectGenCustDcrtMng(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("GenCustDcrtMng.selectGenCustDcrtMng", map);
    }

    @Override
    public int selectGenCustDcrtMngCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("GenCustDcrtMng.selectGenCustDcrtMngCount", map);
    }

	@Override
	public int saveGenCustDcrtMng(Map<String, Object> saveData) throws Exception {
		return commonDAO.insert("GenCustDcrtMng.insertGenCustDcrtMng", saveData);
	}

	@Override
	public List<Map> selectPurgChrpsnYn(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("GenCustDcrtMng.selectPurgChrpsnYn", searchMap);
	}

	@Override
	public int selectGenCustDcrtMngDupl(Map<String, Object> saveData) throws Exception {
		return commonDAO.selectInteger("GenCustDcrtMng.selectGenCustDcrtMngDupl", saveData);
	}

	@Override
	public List<Map> selectGenCustDcrtMngHst(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("GenCustDcrtMng.selectGenCustDcrtMngHst", searchMap);
	}

	@Override
	public int selectGenCustDcrtMngHstCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("GenCustDcrtMng.selectGenCustDcrtMngHstCount", searchMap);
	}

	@Override
	public int updateGenCustDcrtMng(Map<String, Object> saveData) throws Exception {
		return commonDAO.update("GenCustDcrtMng.updateGenCustDcrtMng", saveData);
	}

    
}