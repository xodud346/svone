package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.PubPrdSalsprcQtyDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.rd.dao.impl
 * <pre>    PubPrdProcStbDaoImpl
 * @author 
 * @since 2022.02.15
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.26		최초작성
 */
@SuppressWarnings("unchecked")
@Repository("pubPrdSalsprcQtyDao")
public class PubPrdSalsprcQtyDaoImpl implements PubPrdSalsprcQtyDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map<String, Object>> selectPrPrdInfo(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("PubPrdSalsprcQty.selectPrPrdInfo", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectDpPrdStatsInfo(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("PubPrdSalsprcQty.selectDpPrdStatsInfo", searchMap);
    }
    
	@Override
	public int selectPurcInfoCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("PubPrdSalsprcQty.selectPurcInfoCount", searchMap);
	}
    
    @Override
    public List<Map<String, Object>> selectPurcInfo(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("PubPrdSalsprcQty.selectPurcInfo", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectPcPrdPrc(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("PubPrdSalsprcQty.selectPcPrdPrc", searchMap);
    }
    
	@Override
	public int selectPcPrdQtyCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("PubPrdSalsprcQty.selectPcPrdQtyCount", searchMap);
	}
    
    @Override
    public List<Map<String, Object>> selectPcPrdQty(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("PubPrdSalsprcQty.selectPcPrdQty", searchMap);
    }
    
	@Override
	public int selectPcPrdDlcstDtlsCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("PubPrdSalsprcQty.selectPcPrdDlcstDtlsCount", searchMap);
	}
        
    @Override
    public List<Map<String, Object>> selectPcPrdDlcstDtls(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("PubPrdSalsprcQty.selectPcPrdDlcstDtls", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectRdReqNewPrdInfo(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("PubPrdSalsprcQty.selectRdReqNewPrdInfo", searchMap);
    }
    
    @Override
    public int updateDpPrdStatsInfo(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("PubPrdSalsprcQty.updateDpPrdStatsInfo", saveMap);
    }
    
	@Override
	public int insertDpPrdStatsInfo(Map<String, Object> paramMap) throws Exception {
		return commonDAO.insert("PubPrdSalsprcQty.insertDpPrdStatsInfo", paramMap);
	}
	
	@Override
	public int updatePcPrdPrcDtls(Map<String, Object> paramMap) throws Exception {
		return commonDAO.update("PubPrdSalsprcQty.updatePcPrdPrcDtls", paramMap);
	}
	
	@Override
	public int insertPcPrdQtyDtls(Map<String, Object> paramMap) throws Exception {
		return commonDAO.insert("PubPrdSalsprcQty.insertPcPrdQtyDtls", paramMap);
	}
	
	@Override
	public int updatePcPrdQtyDtls(Map<String, Object> paramMap) throws Exception {
		return commonDAO.update("PubPrdSalsprcQty.updatePcPrdQtyDtls", paramMap);
	}
	
    @Override
    public Integer deletePcPrdQtyDtls(Map<String, Object> paramMap) throws Exception {
        return commonDAO.update("PubPrdSalsprcQty.deletePcPrdQtyDtls", paramMap);
    }
    
    @Override
	public int insertPcPrdDlcstDtls(Map<String, Object> paramMap) throws Exception {
		return commonDAO.insert("PubPrdSalsprcQty.insertPcPrdDlcstDtls", paramMap);
	}
    
    @Override
	public int updatePcPrdDlcstDtls(Map<String, Object> paramMap) throws Exception {
		return commonDAO.update("PubPrdSalsprcQty.updatePcPrdDlcstDtls", paramMap);
	}
	
    @Override
    public Integer deletePcPrdDlcstDtls(Map<String, Object> paramMap) throws Exception {
        return commonDAO.update("PubPrdSalsprcQty.deletePcPrdDlcstDtls", paramMap);
    }
    
}
