package com.ssp.bo.ba.dao.impl;

import com.ssp.bo.ba.dao.BoBaBatSvrDao;
import com.ssp.core.ba.vo.BaBatSvrVo;
import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository("boBaBatSvrDao")
public class BoBaBatSvrDaoImpl implements BoBaBatSvrDao {

	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public int insertBatSvr(BaBatSvrVo baBatSvrVo) throws Exception {
		return sqlSession.insert("boBaBatSvr.insertBatSvr", baBatSvrVo);
	}
	
	@Override
	public int updateBatSvr(BaBatSvrVo baBatSvrVo) throws Exception {
		return sqlSession.update("boBaBatSvr.updateBatSvr", baBatSvrVo);
	}
	
	@Override
	public int deleteBatSvr(BaBatSvrVo baBatSvrVo) throws Exception {
		return sqlSession.delete("boBaBatSvr.deleteBatSvr", baBatSvrVo);
	}
}
