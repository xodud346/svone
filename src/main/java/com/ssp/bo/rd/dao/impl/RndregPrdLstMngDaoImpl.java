package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.controller.RdattrProcController;
import com.ssp.bo.rd.dao.RndregPrdLstMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.rd.dao.impl
 * <pre>    RndregPrdLstMngDaoImpl
 * @author 
 * @since 2022.03.16
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.26		최초작성
 */
@SuppressWarnings("unchecked")
@Repository("rndregPrdLstMngDao")
public class RndregPrdLstMngDaoImpl implements RndregPrdLstMngDao {
	
    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

	@Override
	public int selectPcPrdPrcDtlsCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("RndregPrdLstMng.selectPcPrdPrcDtlsCount", searchMap);
	}
	
    @Override
    public List<Map<String, Object>> selectPcPrdPrcDtls(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("RndregPrdLstMng.selectPcPrdPrcDtls", searchMap);
    }
    
}
