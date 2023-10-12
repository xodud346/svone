/*------------------------------------------------------------------------------
 * NAME : DispPrdMngLstDaoImpl.java
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

import com.ssp.bo.rd.dao.DispPrdMngLstDao;
import com.ssp.core.co.dao.CommonDAO;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   DispPrdMngLstDaoImpl
 * @@desc   전시상품관리 DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.28			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("dispPrdMngLstDao")
public class DispPrdMngLstDaoImpl implements DispPrdMngLstDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map<String, Object>> selectDispPrdMngLst(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("DispPrdMngLst.selectDispPrdMngLst", map);
    }

    @Override
    public int selectDispPrdMngLstCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("DispPrdMngLst.selectDispPrdMngLstCount", map);
    }

    @Override
	public int updateSrtSo(Map<String, Object> dataMap) throws Exception {
		return commonDAO.update("DispPrdMngLst.updateSrtSo", dataMap);
	}

    @Override
	public Map<String, Object> selectDispBasis(Map<String, Object> searchMap) throws Exception {
		return commonDAO.select("DispPrdMngLst.selectDispBasis", searchMap);
	}

    @Override
	public List<Map<String, Object>> selectDispOptnBasis(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("DispPrdMngLst.selectDispOptnBasis", searchMap);
	}

    @Override
	public List<Map<String, Object>> selectDispOptnDtl(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("DispPrdMngLst.selectDispOptnDtl", searchMap);
	}

    @Override
	public List<Map<String, Object>> selectDispOptnDtlMapp(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("DispPrdMngLst.selectDispOptnDtlMapp", searchMap);
	}

    @Override
	public Map<String, Object> selectOptnNmByDtlItmno(Map<String, Object> searchMap) throws Exception {
		return commonDAO.select("DispPrdMngLst.selectOptnNmByDtlItmno", searchMap);
	}

    @Override
	public List<Map<String, Object>> selectDispAddOptnBasis(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("DispPrdMngLst.selectDispAddOptnBasis", searchMap);
	}

    @Override
	public List<Map<String, Object>> selectDispAddOptnDtl(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("DispPrdMngLst.selectDispAddOptnDtl", searchMap);
	}

    @Override
	public Map<String, Object> selectProductDispOprtr(Map<String, Object> searchMap) throws Exception {
		return commonDAO.select("DispPrdMngLst.selectProductDispOprtr", searchMap);
	}

    @Override
    public String selectRndDispGrpId() throws Exception {
        return commonDAO.selectStr("DispPrdMngLst.selectRndDispGrpId", new HashMap<>());
    }

    @Override
    public int insertRndDispBasis(Map<String, Object> map) throws Exception {
        return commonDAO.insert("DispPrdMngLst.insertRndDispBasis", map);
    }

    @Override
    public int insertRndDispOptnBasis(Map<String, Object> map) throws Exception {
        return commonDAO.insert("DispPrdMngLst.insertRndDispOptnBasis", map);
    }

    @Override
	public int insertRndDispOptnDtl(Map<String, Object> map) throws Exception {
		return commonDAO.insert("DispPrdMngLst.insertRndDispOptnDtl", map);
	}

    @Override
	public int insertRndDispOptnDtlMapp(Map<String, Object> map) throws Exception {
		return commonDAO.insert("DispPrdMngLst.insertRndDispOptnDtlMapp", map);
	}

    @Override
	public int insertRndDispAddOptnBasis(Map<String, Object> map) throws Exception {
		return commonDAO.insert("DispPrdMngLst.insertRndDispAddOptnBasis", map);
	}

    @Override
	public int insertRndDispAddOptnDtl(Map<String, Object> map) throws Exception {
		return commonDAO.insert("DispPrdMngLst.insertRndDispAddOptnDtl", map);
	}

    @Override
	public int deleteRndDispOptnBasis(Map<String, Object> map) throws Exception {
		return commonDAO.delete("DispPrdMngLst.deleteRndDispOptnBasis", map);
	}

    @Override
    public int deleteRndDispOptnDtl(Map<String, Object> map) throws Exception {
        return commonDAO.delete("DispPrdMngLst.deleteRndDispOptnDtl", map);
    }

    public int deleteRndDispAddOptnBasis(Map<String, Object> map) throws Exception {
        return commonDAO.delete("DispPrdMngLst.deleteRndDispAddOptnBasis", map);
    }

    public int deleteRndDispAddOptnDtl(Map<String, Object> map) throws Exception {
        return commonDAO.delete("DispPrdMngLst.deleteRndDispAddOptnDtl", map);
    }

    @Override
	public int deleteRndDispOptnDtlMappAll(Map<String, Object> searchMap) throws Exception {
		return commonDAO.delete("DispPrdMngLst.deleteRndDispOptnDtlMappAll", searchMap);
	}

    @Override
    public boolean existsRndDispReprPrdId(String prdClcd, String reprPrdId, String dispGrpId) throws Exception {
        int count = commonDAO.selectCount("DispPrdMngLst.selectRndDispPrdCount", new HashMap<String, Object>() {{
            put("prdClcd", prdClcd);
            put("reprPrdId", reprPrdId);
            put("dispGrpId", dispGrpId);
        }});
        return count > 0;
    }

    @Override
	public List<Map<String, Object>> selectCategoryOptionValues(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("DispPrdMngLst.selectCategoryOptionValues", searchMap);
	}

}