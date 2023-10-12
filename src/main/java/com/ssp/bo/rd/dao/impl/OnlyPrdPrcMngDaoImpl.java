/*------------------------------------------------------------------------------
 * NAME : OnlyPrdPrcMngDaoImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.09  나용철
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.OnlyPrdPrcMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   OnlyPrdPrcMngDaoImpl
 * @@desc   전용상품가격관리 DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.05.09
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.05.09			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("onlyPrdPrcMngDao")
public class OnlyPrdPrcMngDaoImpl implements OnlyPrdPrcMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map> selectOnlyPrdPrcMng(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("OnlyPrdPrcMng.selectOnlyPrdPrcMng", map);
    }

    @Override
    public int selectOnlyPrdPrcMngCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("OnlyPrdPrcMng.selectOnlyPrdPrcMngCount", map);
    }

	@Override
	public List<Map> selectOprUnitInfo(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("OnlyPrdPrcMng.selectOprUnitInfo", searchMap);
	}

	@Override
	public List<Map> selectOnlyPrdPrcInfo(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("OnlyPrdPrcMng.selectOnlyPrdPrcInfo", searchMap);
	}

	@Override
	public int insertOnlyPrdSalsDsgnSalsprcMng(Map<String, Object> saveData) throws Exception {
		return commonDAO.insert("OnlyPrdPrcMng.insertOnlyPrdSalsDsgnSalsprcMng",saveData);
	}

	@Override
	public List<Map> selectOnlyPrdBasisInfo(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("OnlyPrdPrcMng.selectOnlyPrdBasisInfo", searchMap);
	}

	@Override
	public List<Map> selectCprtcpReqInfoInq(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("OnlyPrdPrcMng.selectCprtcpReqInfoInq", searchMap);
	}

	@Override
	public List<Map> selectAttcFileDtlsInq(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("OnlyPrdPrcMng.selectAttcFileDtlsInq", searchMap);
	}

	@Override
	public int insertOnlyPrdDispStatsInfo(Map<String, Object> saveData) throws Exception {
		return commonDAO.insert("OnlyPrdPrcMng.insertOnlyPrdDispStatsInfo", saveData);
	}

	@Override
	public List<Map> selectOnlyPrdSalsDsgnSalsprc(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("OnlyPrdPrcMng.selectOnlyPrdSalsDsgnSalsprc", searchMap);
	}

	@Override
	public List<Map> selectOnlyPrdSalsDsgnSalsprcHst(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("OnlyPrdPrcMng.selectOnlyPrdSalsDsgnSalsprcHst", searchMap);
	}

	@Override
	public int insertOnlyPrdDispRegHst(Map<String, Object> saveData) throws Exception {
		return commonDAO.insert("OnlyPrdPrcMng.insertOnlyPrdDispRegHst", saveData);
	}

	@Override
	public int insertOnlyPrdDispStatsInfoHst(Map<String, Object> saveData) throws Exception {
		return commonDAO.insert("OnlyPrdPrcMng.insertOnlyPrdDispStatsInfoHst", saveData);
	}

	@Override
	public int updateOnlyPrdSalsDsgnSalsprcMng(Map<String, Object> saveData) throws Exception {
		return commonDAO.update("OnlyPrdPrcMng.updateOnlyPrdSalsDsgnSalsprcMng", saveData);
	}

	@Override
	public int deleteOnlyPrdSalsDsgnSalsprcMngHst(Map<String, Object> saveData) throws Exception {
		return commonDAO.delete("OnlyPrdPrcMng.deleteOnlyPrdSalsDsgnSalsprcMngHst", saveData);
	}

	@Override
	public int updateOnlyPrdSalsDsgnSalsprcMngHst(Map<String, Object> saveData) throws Exception {
		return commonDAO.update("OnlyPrdPrcMng.updateOnlyPrdSalsDsgnSalsprcMngHst", saveData);
	}

	@Override
	public int updateOnlyPrdSalsDsgnSalsprcMngHst2(Map<String, Object> saveData) throws Exception {
		return commonDAO.update("OnlyPrdPrcMng.updateOnlyPrdSalsDsgnSalsprcMngHst2", saveData);
	}

	@Override
	public int updateOnlyPrdDispStatsInfo(Map<String, Object> saveData) throws Exception {
		return commonDAO.update("OnlyPrdPrcMng.updateOnlyPrdDispStatsInfo", saveData);
	}

	@Override
	public List<Map> selectPrcList(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("OnlyPrdPrcMng.selectPrcList", searchMap);
	}

	@Override
	public List<Map> selectCatgAttrInfo(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("OnlyPrdPrcMng.selectCatgAttrInfo", searchMap);
	}

	@Override
	public int selectOnlyPrdPrcMngDupl(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("OnlyPrdPrcMng.selectOnlyPrdPrcMngDupl", searchMap);
	}

	@Override
	public int insertPrdPrcHst(Map<String, Object> saveData) throws Exception {
		return commonDAO.insert("OnlyPrdPrcMng.insertPrdPrcHst",saveData);
	}

	@Override
	public int insertNewPrdReqStats(Map<String, Object> saveData) throws Exception {
		return commonDAO.insert("OnlyPrdPrcMng.insertNewPrdReqStats",saveData);
	}

	@Override
	public int selectNewPrdReqStatsCount(Map<String, Object> saveData) throws Exception {
		return commonDAO.selectInteger("OnlyPrdPrcMng.selectNewPrdReqStatsCount", saveData);
	}
	
	@Override
	public Map selectNewPrdReqInfo(Map<String, Object> saveData) throws Exception {
		return commonDAO.select("OnlyPrdPrcMng.selectNewPrdReqInfo", saveData);
	}

//	@Override
//	public String selectPrdPrpsSprCd(Map<String, Object> saveData) throws Exception {
//		return commonDAO.selectStr("OnlyPrdPrcMng.selectPrdPrpsSprCd", saveData);
//	}
   
}