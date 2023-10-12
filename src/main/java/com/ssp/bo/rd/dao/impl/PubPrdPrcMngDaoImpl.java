/*------------------------------------------------------------------------------
 * NAME : PubPrdPrcMngDaoImpl.java
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

import com.ssp.bo.rd.dao.PubPrdPrcMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   PubPrdPrcMngDaoImpl
 * @@desc   공용상품가격관리 DaoImpl
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
@Repository("pubPrdPrcMngDao")
public class PubPrdPrcMngDaoImpl implements PubPrdPrcMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map> selectPubPrdPrcMng(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PubPrdPrcMng.selectPubPrdPrcMng", map);
    }

    @Override
    public int selectPubPrdPrcMngCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("PubPrdPrcMng.selectPubPrdPrcMngCount", map);
    }

	@Override
	public List<Map> selectPubPrdDispInfo(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PubPrdPrcMng.selectPubPrdDispInfo", searchMap);
	}

	@Override
	public List<Map> selectPubPrdBasisInfo(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PubPrdPrcMng.selectPubPrdBasisInfo", searchMap);
	}

	@Override
	public List<Map> selectPubPrdPrcInfo(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PubPrdPrcMng.selectPubPrdPrcInfo", searchMap);
	}

	@Override
	public List<Map> selectselectPubPrdPrcCurAply(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PubPrdPrcMng.selectselectPubPrdPrcCurAply", searchMap);
	}

	@Override
	public List<Map> selectselectPubPrdQtyDc(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PubPrdPrcMng.selectselectPubPrdQtyDc", searchMap);
	}

	@Override
	public List<Map> selectselectPubPrdDlcst(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PubPrdPrcMng.selectselectPubPrdDlcst", searchMap);
	}

	@Override
	public int savePubPrdPrcMngDispInfo(Map<String, Object> saveData) throws Exception {
		return commonDAO.update("PubPrdPrcMng.savePubPrdPrcMngDispInfo", saveData);
	}

	@Override
	public List<Map> selectDispStatsChgHst(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PubPrdPrcMng.selectDispStatsChgHst", searchMap);
	}

	@Override
	public int selectDispStatsChgHstCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("PubPrdPrcMng.selectDispStatsChgHstCount", searchMap);
	}

	@Override
	public int mergePubPrdQty(Map<String, Object> saveData) throws Exception {
		return commonDAO.update("PubPrdPrcMng.mergePubPrdQty", saveData);
	}

	@Override
	public int updatePubPrdQty(Map<String, Object> saveData) throws Exception {
		return commonDAO.update("PubPrdPrcMng.updatePubPrdQty", saveData);
	}

	@Override
	public int mergePubPrdDlcst(Map<String, Object> saveData) throws Exception {
		return commonDAO.update("PubPrdPrcMng.mergePubPrdDlcst", saveData);
	}

	@Override
	public int updatePubPrdDlcst(Map<String, Object> saveData) throws Exception {
		return commonDAO.update("PubPrdPrcMng.updatePubPrdDlcst", saveData);
	}

	@Override
	public List<Map> selectCprtcpReqInfoInq(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PubPrdPrcMng.selectCprtcpReqInfoInq", searchMap);
	}

	@Override
	public List<Map> selectAttcFileDtlsInq(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PubPrdPrcMng.selectAttcFileDtlsInq", searchMap);
	}

	@Override
	public int insertPubPrdDispRegHst(Map<String, Object> saveData) throws Exception {
		return commonDAO.insert("PubPrdPrcMng.insertPubPrdDispRegHst", saveData);
	}

	@Override
	public int insertPubPrdDispStatsInfoHst(Map<String, Object> saveData) throws Exception {
		return commonDAO.insert("PubPrdPrcMng.insertPubPrdDispStatsInfoHst", saveData);
	}

	@Override
	public int updatePubPrdPerdDc(Map<String, Object> saveData) throws Exception {
		return commonDAO.update("PubPrdPrcMng.updatePubPrdPerdDc",saveData);
	}

	@Override
	public List<Map> selectPrcChgHst(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PubPrdPrcMng.selectPrcChgHst", searchMap);
	}

	@Override
	public int selectPrcChgHstCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("PubPrdPrcMng.selectPrcChgHstCount", searchMap);
	}

	@Override
	public int selectPubPrdPerdDcDupl(Map<String, Object> saveData) throws Exception {
		return commonDAO.selectInteger("PubPrdPrcMng.selectPubPrdPerdDcDupl", saveData);
	}

	@Override
	public int insertPubPrdPerdDc(Map<String, Object> saveData) throws Exception {
		return commonDAO.insert("PubPrdPrcMng.insertPubPrdPerdDc", saveData);
	}

	@Override
	public int deletePubPrdPerdDc(Map<String, Object> saveData) throws Exception {
		return commonDAO.delete("deletePubPrdPerdDc", saveData);
	}

	@Override
	public int deletePubPrdQty(Map<String, Object> saveData) throws Exception {
		return commonDAO.delete("deletePubPrdQty", saveData);
	}

	@Override
	public int deletePubPrdDlcst(Map<String, Object> saveData) throws Exception {
		return commonDAO.delete("deletePubPrdDlcst", saveData);
	}

	@Override
	public String selectStrDtm(Map<String, Object> saveData) throws Exception {
		return commonDAO.selectStr("selectStrDtm", saveData);
	}

}