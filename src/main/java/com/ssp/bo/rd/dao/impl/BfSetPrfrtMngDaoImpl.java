/*------------------------------------------------------------------------------
 * NAME : BfSetPrfrtMngDaoImpl.java
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

import com.ssp.bo.rd.dao.BfSetPrfrtMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   BfSetPrfrtMngDaoImpl
 * @@desc   사전설정매익률관리 DaoImpl
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
@Repository("bfSetPrfrtMngDao")
public class BfSetPrfrtMngDaoImpl implements BfSetPrfrtMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map> selectBfSetPrfrtMng(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("BfSetPrfrtMng.selectBfSetPrfrtMng", map);
    }

    @Override
    public int selectBfSetPrfrtMngCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("BfSetPrfrtMng.selectBfSetPrfrtMngCount", map);
    }


	@Override
	public int saveBfSetPrfrtMng(Map<String, Object> saveData) throws Exception {
		return commonDAO.update("BfSetPrfrtMng.saveBfSetPrfrtMng", saveData);
	}

	@Override
	public List<Map> selectPurgChrpsnYn(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("BfSetPrfrtMng.selectPurgChrpsnYn", searchMap);
	}

	@Override
	public int selectBfSetPrfrtMngDupl(Map<String, Object> saveData) throws Exception {
		return commonDAO.selectInteger("BfSetPrfrtMng.selectBfSetPrfrtMngDupl", saveData);
	}

	@Override
	public int selectBfSetPrfrtMngHstCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("BfSetPrfrtMng.selectBfSetPrfrtMngHstCount", searchMap);
	}

	@Override
	public List<Map> selectBfSetPrfrtMngHst(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("BfSetPrfrtMng.selectBfSetPrfrtMngHst", searchMap);
	}

	@Override
	public int updateBfSetPrfrtMng(Map<String, Object> saveData) throws Exception {
		return commonDAO.update("BfSetPrfrtMng.updateBfSetPrfrtMng", saveData);
	}

	@Override
	public int insertBfSetPrfrtMng(Map<String, Object> saveData) throws Exception {
		return commonDAO.insert("BfSetPrfrtMng.insertBfSetPrfrtMng", saveData);
	}

	@Override
	public int selectBfSetPrfrtMngChkCount(Map<String, Object> saveData) throws Exception {
		return commonDAO.selectInteger("BfSetPrfrtMng.selectBfSetPrfrtMngChkCount", saveData);
	}

	@Override
	public int updateBfSetPrfrtMngPrcHst(Map<String, Object> saveData) throws Exception {
		return commonDAO.update("BfSetPrfrtMng.updateBfSetPrfrtMngPrcHst", saveData);
	}

	@Override
	public int insertBfSetPrfrtMngPrcHst(Map<String, Object> saveData) throws Exception {
		return commonDAO.insert("BfSetPrfrtMng.insertBfSetPrfrtMngPrcHst", saveData);
	}

   
}