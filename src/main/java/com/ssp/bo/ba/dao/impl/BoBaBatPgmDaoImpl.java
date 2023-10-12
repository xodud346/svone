package com.ssp.bo.ba.dao.impl;

import com.ssp.bo.ba.dao.BoBaBatPgmDao;
import com.ssp.core.ba.vo.BaBatPgmVo;
import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository("boBaBatPgmDao")
public class BoBaBatPgmDaoImpl implements BoBaBatPgmDao {

	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public BaBatPgmVo selectBatPgm(BaBatPgmVo baBatPgmVo) throws Exception {
		return sqlSession.selectOne("boBaBatPgm.selectBatPgm", baBatPgmVo);
	}
	
	@Override
	public int insertBatPgm(BaBatPgmVo baBatPgmVo) throws Exception {
		sqlSession.insert("boBaBatPgm.insertBatPgm", baBatPgmVo);
		int batPgmSeq = baBatPgmVo.getBatPgmSeq();
		
		return batPgmSeq;
	}
	
	@Override
	public int updateBatPgm(BaBatPgmVo baBatPgmVo) throws Exception {
		return sqlSession.insert("boBaBatPgm.updateBatPgm", baBatPgmVo);
	}
	
	@Override
	public int deleteBatPgm(BaBatPgmVo baBatPgmVo) throws Exception {
		return sqlSession.insert("boBaBatPgm.deleteBatPgm", baBatPgmVo);
	}
}
