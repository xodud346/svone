package com.ssp.bo.ba.dao.impl;

import com.ssp.bo.ba.dao.BoBaBatPgmLogDao;
import com.ssp.core.ba.vo.BaBatPgmLogVo;
import com.ssp.core.co.dao.CommonDAO;
import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;

@Repository("boBaBatPgmLogDao")
public class BoBaBatPgmLogDaoImpl implements BoBaBatPgmLogDao {

	@Resource(name = "commonDAO")
	private CommonDAO commonDAO;

	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<BaBatPgmLogVo> inqBatPgmLogList(BaBatPgmLogVo baBatPgmLogVo) throws Exception {
		return sqlSession.selectList("boBaBatPgmLog.selectBatPgmLogList", baBatPgmLogVo);
	}
	
	@Override
	public int inqBatPgmLogListCount(BaBatPgmLogVo baBatPgmLogVo) throws Exception {
		return commonDAO.selectCount("boBaBatPgmLog.selectBatPgmLogListCount", baBatPgmLogVo);
	}
}
