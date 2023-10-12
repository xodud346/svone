package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.PcPlnPrfrtnfoDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.rd.dao.impl
 * <pre>    PcPlnPrfrtnfoDaoImpl
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
@Repository("pcPlnPrfrtnfoDao")
public class PcPlnPrfrtnfoDaoImpl implements PcPlnPrfrtnfoDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

	@Override
	public int selectPcPlnPrfrtInfoCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("PcPlnPrfrtInfo.selectPcPlnPrfrtInfoCount", searchMap);
	}
	
    @Override
    public List<Map<String, Object>> selectPcPlnPrfrtInfo(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("PcPlnPrfrtInfo.selectPcPlnPrfrtInfo", searchMap);
    }
    
	@Override
	public int updatePcPlnPrfrtInfo(Map<String, Object> paramMap) throws Exception {
		return commonDAO.update("PcPlnPrfrtInfo.updatePcPlnPrfrtInfo", paramMap);
	}
    
}
