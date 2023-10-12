package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.co.dao.CoPgmMngDao;
import com.ssp.bo.rd.dao.DispStatsChgHstDao;
import com.ssp.bo.rd.dao.PubPrdProcStbDao;
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
@Repository("dispStatsChgHstDao")
public class DispStatsChgHstDaoImpl implements DispStatsChgHstDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map<String, Object>> selectList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("DispStatsChgHst.selectList", searchMap);
    }

	@Override
	public int selectCount(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
        return commonDAO.selectCount("DispStatsChgHst.selectCount", searchMap);
	}
    
}
