/*------------------------------------------------------------------------------
 * NAME : PubPrdSalsDsgnSalsprcMngDaoImpl.java
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

import com.ssp.bo.rd.dao.PubPrdSalsDsgnSalsprcMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title  PubPrdSalsDsgnSalsprcMngDaoImpl
 * @@desc  공용상품영업지정판매가관리 DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.05.09
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.28			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("pubPrdSalsDsgnSalsprcMngDao")
public class PubPrdSalsDsgnSalsprcMngDaoImpl implements PubPrdSalsDsgnSalsprcMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map> selectPubPrdSalsDsgnSalsprcMng(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PubPrdSalsDsgnSalsprcMng.selectPubPrdSalsDsgnSalsprcMng", map);
    }
    
    @Override
    public int selectPubPrdSalsDsgnSalsprcMngCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("PubPrdSalsDsgnSalsprcMng.selectPubPrdSalsDsgnSalsprcMngCount", map);
    }

	@Override
	public List<Map> selectPubPrdSalsDsgnSalsprcMngDtl(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PubPrdSalsDsgnSalsprcMng.selectPubPrdSalsDsgnSalsprcMngDtl", searchMap);
	}

	@Override
	public List<Map> selectAttcFileDtlsInq(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PubPrdSalsDsgnSalsprcMng.selectAttcFileDtlsInq", searchMap);
	}

	@Override
	public int insertPubPrdSalsDsgnSalsprcMng(Map<String, Object> saveData) throws Exception {
		return commonDAO.insert("PubPrdSalsDsgnSalsprcMng.insertPubPrdSalsDsgnSalsprcMng", saveData);
	}

	@Override
	public int selectPubPrdSalsDsgnSalsprcMngDupl(Map<String, Object> saveData) throws Exception {
		return commonDAO.selectInteger("PubPrdSalsDsgnSalsprcMng.selectPubPrdSalsDsgnSalsprcMngDupl", saveData);
	}

	@Override
	public int updatePubPrdSalsDsgnSalsprcMng(Map<String, Object> saveData) throws Exception {
		return commonDAO.update("PubPrdSalsDsgnSalsprcMng.updatePubPrdSalsDsgnSalsprcMng", saveData);
	}

	@Override
	public List<Map> selectSalsChrpsnYn(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PubPrdSalsDsgnSalsprcMng.selectSalsChrpsnYn", searchMap);
	}

	@Override
	public List<Map> selectPubPrdSalsDsgnSalsprcMngHst(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PubPrdSalsDsgnSalsprcMng.selectPubPrdSalsDsgnSalsprcMngHst", searchMap);
	}

	@Override
	public List<Map> selectPubPrdSalsDsgnSalsprcMngPrdDtl(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PubPrdSalsDsgnSalsprcMng.selectPubPrdSalsDsgnSalsprcMngPrdDtl", searchMap);
	}

	@Override
	public void deletePubPrdSalsDsgnSalsprcMngHst(Map<String, Object> saveData) throws Exception {
		commonDAO.delete("PubPrdSalsDsgnSalsprcMng.deletePubPrdSalsDsgnSalsprcMngHst", saveData);
		
	}

	@Override
	public void updatePubPrdSalsDsgnSalsprcMngHst(Map<String, Object> saveData) throws Exception {
		commonDAO.update("PubPrdSalsDsgnSalsprcMng.updatePubPrdSalsDsgnSalsprcMngHst", saveData);
		
	}

	@Override
	public int insertPubPrdSalsDsgnSalsprcMngHst(Map<String, Object> saveData) throws Exception {
		return commonDAO.update("PubPrdSalsDsgnSalsprcMng.insertPubPrdSalsDsgnSalsprcMngHst", saveData);
	}

	@Override
	public void updatePubPrdSalsDsgnSalsprcMngHst2(Map<String, Object> saveData) throws Exception {
		commonDAO.update("PubPrdSalsDsgnSalsprcMng.updatePubPrdSalsDsgnSalsprcMngHst2", saveData);
	}

    
}