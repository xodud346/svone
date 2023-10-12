/*------------------------------------------------------------------------------
 * NAME : SrsGrpPrdMngDaoImpl.java
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

import com.ssp.bo.rd.dao.SrsGrpPrdMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   SrsGrpPrdMngDaoImpl
 * @@desc   R&D 시리즈그룹 상품 관리 DaoImpl
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
@Repository("srsGrpPrdMngDao")
public class SrsGrpPrdMngDaoImpl implements SrsGrpPrdMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map> selectSrsGrpPrdMng(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("SrsGrpPrdMng.selectSrsGrpPrdMng", map);
    }

    @Override
    public int selectSrsGrpPrdMngCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("SrsGrpPrdMng.selectSrsGrpPrdMngCount", map);
    }
    
    @Override
    public int selectSeriesBssTemp(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("SrsGrpPrdMng.selectSeriesBssTemp", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectSeriesTemp01(Map<String, Object> searchMap) {
        return commonDAO.selectList("SrsGrpPrdMng.selectSeriesTemp01", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectSeriesTemp02(Map<String, Object> searchMap) {
        return commonDAO.selectList("SrsGrpPrdMng.selectSeriesTemp02", searchMap);
    }
    
    @Override
    public String selectPrdGrpId(Map<String, Object> searchMap) throws Exception {
    	return commonDAO.selectStr("SrsGrpPrdMng.selectPrdGrpId", searchMap);
    }
    
    @Override
    public int insertProductSeriesBasis(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("SrsGrpPrdMng.insertProductSeriesBasis", saveMap);
    }
	
	@Override
	public int updateProductSeriesBasis(Map<String, Object> saveMap) throws Exception {
		return commonDAO.update("SrsGrpPrdMng.updateProductSeriesBasis", saveMap);
	}
	
	@Override
	public int insertProductSeriesDtl(Map<String, Object> saveMap) throws Exception {
		return commonDAO.insert("SrsGrpPrdMng.insertProductSeriesDtl", saveMap);
	}
	
	@Override
	public int updateProductSeriesDtl(Map<String, Object> saveMap) throws Exception {
		return commonDAO.update("SrsGrpPrdMng.updateProductSeriesDtl", saveMap);
	}
		
	@Override
	public int deleteProductSeriesDtl(Map<String, Object> saveMap) throws Exception {
		return commonDAO.delete("SrsGrpPrdMng.deleteProductSeriesDtl", saveMap);
	}
	
	@Override
	public List<Map<String, Object>> selectProductSeriesBasis(Map<String, Object> searchMap) {
	    return commonDAO.selectList("SrsGrpPrdMng.selectProductSeriesBasis", searchMap);
	}
	
	@Override
	public List<Map<String, Object>> selectProductSeriesDtl01(Map<String, Object> searchMap) {
		return commonDAO.selectList("SrsGrpPrdMng.selectProductSeriesDtl01", searchMap);
	}
	
	@Override
	public List<Map<String, Object>> selectProductSeriesDtl02(Map<String, Object> searchMap) {
		return commonDAO.selectList("SrsGrpPrdMng.selectProductSeriesDtl02", searchMap);
	}
	
	@Override
	public List<Map<String, Object>> selectSeriesGroupListToAttrSync(Map<String, Object> searchMap) {
		return commonDAO.selectList("SrsGrpPrdMng.selectSeriesGroupListToAttrSync", searchMap);
	}
	
	@Override
	public int updateRndProductAttrToAttrSync(Map<String, Object> searchMap) throws Exception {
		return commonDAO.update("SrsGrpPrdMng.updateRndProductAttrToAttrSync", searchMap);
	}
}