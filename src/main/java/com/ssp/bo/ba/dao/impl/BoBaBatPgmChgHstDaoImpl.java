package com.ssp.bo.ba.dao.impl;

import com.ssp.bo.ba.dao.BoBaBatPgmChgHstDao;
import com.ssp.core.ba.vo.BaBatPgmChgHstVo;
import com.ssp.core.co.dao.CommonDAO;
import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;

@Repository("boBaBatPgmChgHstDao")
public class BoBaBatPgmChgHstDaoImpl implements BoBaBatPgmChgHstDao {

	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private SqlSession sqlSession;
	
	@Resource(name = "commonDAO")
	private CommonDAO commonDAO;
	
	@Override
	public int insertBatPgmChgHst(BaBatPgmChgHstVo baBatPgmChgHstVo) throws Exception {
		return sqlSession.insert("boBaBatPgmChgHst.insertBatPgmChgHst", baBatPgmChgHstVo);
	}
	
	@Override
	public List<BaBatPgmChgHstVo> inqBatPgmChgHstList(BaBatPgmChgHstVo baBatPgmChgHstVo) throws Exception {
		return sqlSession.selectList("boBaBatPgmChgHst.selectBatPgmChgHstList", baBatPgmChgHstVo);
	}
	
	@Override
	public int inqBatPgmChgHstListCount(BaBatPgmChgHstVo baBatPgmChgHstVo) throws Exception {
		return commonDAO.selectCount("boBaBatPgmChgHst.selectBatPgmChgHstListCount", baBatPgmChgHstVo);
	}
	
	@Override
	public int findChgBatPgmChgHst(BaBatPgmChgHstVo baBatPgmChgHstVo) throws Exception {
		return sqlSession.selectOne("boBaBatPgmChgHst.findChgBatPgmChgHst", baBatPgmChgHstVo);
	}
}
