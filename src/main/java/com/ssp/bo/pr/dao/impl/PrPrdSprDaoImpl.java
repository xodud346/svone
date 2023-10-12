package com.ssp.bo.pr.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pr.dao.PrPrdSprDao;
import com.ssp.bo.pr.dao.PrPropertyDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre></pre>
 * @title SSP 전시상품 DAO
 * @package com.ssp.bo.pr.dao.impl
 * <pre>    PrPrdSprDaoImpl</pre>
 * @author 박성진
 * @since 2022.04.25
 * @version 1.0
 * @see PrPrdSprDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Repository("prprdsprDao")
public class PrPrdSprDaoImpl implements PrPrdSprDao {

	@Autowired
    private CommonDAO commonDAO;

    @Override
    public List<Map<String, Object>> selectPrdSprList(Map<String, Object> searchMap) {
        return commonDAO.selectList("PrPrdSpr.selectPrdSprList", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectSearchDisp(Map<String, Object> searchMap) {
        return commonDAO.selectList("PrPrdSpr.selectSearchDisp", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectPrdSprOptList(Map<String, Object> searchMap) {
        return commonDAO.selectList("PrPrdSpr.selectPrdSprOptList", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectPrdSprAddList(Map<String, Object> searchMap) {
        return commonDAO.selectList("PrPrdSpr.selectPrdSprAddList", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectPrdSprConnList(Map<String, Object> searchMap) {
        return commonDAO.selectList("PrPrdSpr.selectPrdSprConnList", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectPrdSprStgList(Map<String, Object> searchMap) {
        return commonDAO.selectList("PrPrdSpr.selectPrdSprStgList", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectPrdSprStgDtlList(Map<String, Object> searchMap) {
        return commonDAO.selectList("PrPrdSpr.selectPrdSprStgDtlList", searchMap);
    }
    
    @Override
    public int selectPrdSprCount(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("PrPrdSpr.selectPrdSprCount", searchMap);
    }
    
    @Override
    public int selectPrdClcdCount(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("PrPrdSpr.selectPrdClcdCount", searchMap);
    }
    
    @Override
    public int selectPrdSprOptCount(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("PrPrdSpr.selectPrdSprOptCount", searchMap);
    }
    
    @Override
    public int selectPrdSprAddCount(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("PrPrdSpr.selectPrdSprAddCount", searchMap);
    }
    
    @Override
    public int selectPrdSprConnCount(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("PrPrdSpr.selectPrdSprConnCount", searchMap);
    }
    
    @Override
    public int selectPrdSprStgCount(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("PrPrdSpr.selectPrdSprStgCount", searchMap);
    }
    
    @Override
    public int selectPrdSprStgDtlCount(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("PrPrdSpr.selectPrdSprStgDtlCount", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectPrdSpr(Map<String, Object> searchMap) {
    	return commonDAO.selectList("PrPrdSpr.selectPrdSpr", searchMap);
    }
    
    @Override
    public int insertPrdSpr(Object param) throws Exception {
        return commonDAO.insert("PrPrdSpr.insertPrdSpr", param);
    }
    
	@Override
	public int insertPrdSprTwo(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrPrdSpr.insertPrdSprTwo", dataMap);
	}

	@Override
	public int savePrdSpraddInfo(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrPrdSpr.insertPrdSprAddInfo", dataMap);
	}
	
	@Override
	public int savePrdSprConn(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrPrdSpr.insertPrdSprConn", dataMap);
	}
	
	@Override
	public int savePrdSprStg(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrPrdSpr.insertPrdSprStg", dataMap);
	}
	
	@Override
	public int savePrdSprStgDtl(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrPrdSpr.insertPrdSprStgDtl", dataMap);
	}
	
	@Override
	public int insertPrdSprRsn(Object param) throws Exception {
		return commonDAO.insert("PrPrdSpr.insertPrdSprRsn", param);
	}	

	@Override
	public List<Map<String, Object>> selectPrdId(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		return commonDAO.selectList("PrPrdSpr.selectPrdId", searchMap);
	}

	@Override
	public int updatePrdSpr(Object param) throws Exception {
		return commonDAO.update("PrPrdSpr.updatePrdSpr", param);
	}
	
	@Override
	public int updateSrtSo(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrPrdSpr.updateSrtSo", dataMap);
	}
	
	@Override
	public int updatePrdSprOpt(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrPrdSpr.updatePrdSprOpt", dataMap);
	}
	
	@Override
	public int updatePrdSprOptDtl(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrPrdSpr.updatePrdSprOptDtl", dataMap);
	}
	
	@Override
	public int updatePrdSprStg(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrPrdSpr.updatePrdSprStg", dataMap);
	}
	
	@Override
	public int updatePrdSprStgDtl(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrPrdSpr.updatePrdSprStgDtl", dataMap);
	}
	
	@Override
	public int deletePrdSprOpt(Map<String, Object> dataMap) throws Exception {
		return commonDAO.delete("PrPrdSpr.deletePrdSprOpt", dataMap);
	}
	
	@Override
	public int deletePrdSprOptDtl(Map<String, Object> dataMap) throws Exception {
		return commonDAO.delete("PrPrdSpr.deletePrdSprOptDtl", dataMap);
	}
	
	@Override
	public int deletePrdSprStg(Map<String, Object> dataMap) throws Exception {
		return commonDAO.delete("PrPrdSpr.deletePrdSprStg", dataMap);
	}
	
	@Override
	public int deletePrdSprStgDtl(Map<String, Object> dataMap) throws Exception {
		return commonDAO.delete("PrPrdSpr.deletePrdSprStgDtl", dataMap);
	}
}
