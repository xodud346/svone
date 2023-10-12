package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.RdNxPlatGeneratorDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.rd.dao.impl
 * <pre>     RdNxPlatGeneratorDaoImpl
 * @author
 * @since 2022.04.14
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.26		최초작성
 */
@SuppressWarnings("unchecked")
@Repository("rdNxPlatGeneratorDao")
public class RdNxPlatGeneratorDaoImpl implements RdNxPlatGeneratorDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
	public List<Map> selectNxPlatGeneratorUser() throws Exception {
		return commonDAO.selectList("RdNxPlatGenerator.selectNxPlatGeneratorUser","");
	}

    @Override
	public List<Map> selectNxPlatGeneratorM(Map map) throws Exception {
		return commonDAO.selectList("RdNxPlatGenerator.selectNxPlatGeneratorM", map);
	}

    @Override
	public List<Map> selectNxPlatGeneratorD(Map map) throws Exception {
		return commonDAO.selectList("RdNxPlatGenerator.selectNxPlatGeneratorD", map);
	}
}
