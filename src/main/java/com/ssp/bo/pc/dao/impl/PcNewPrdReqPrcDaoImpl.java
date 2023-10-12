package com.ssp.bo.pc.dao.impl;

import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pc.dao.PcNewPrdReqPrcDao;

/**
 * <pre></pre>
 * @title
 * @package com.ssp.bo.pc.dao.impl
 * <pre>    pcPrdPrcDao</pre>
 * @author scvgo17
 * @since 2022-01-25
 * @version 1.0
 * @see PcNewPrdReqPrcDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Repository("pcNewPrdReqPrcDao")
public class PcNewPrdReqPrcDaoImpl implements PcNewPrdReqPrcDao {

	@Autowired
	private SqlSession sqlSession;	
    
    @Override
    public int updatePcNewPrdReqPrc(Map<String, Object> commandMap) throws Exception {
    	//noinspection unchecked
    	return sqlSession.update("PcNewPrdReqPrc.updatePcNewPrdReqPrc", commandMap);
    }
    
    @Override
    public Map<String, Object> insertEmailNewPrdReqExcept(Map<String, Object> searchMap) throws Exception {
    	sqlSession.insert("PcNewPrdReqPrc.insertEmailNewPrdReqExcept", searchMap);
        return searchMap;

    }
    
    @Override
    public int insertEmailSendRequest(Map<String, Object> insertMap) throws Exception{
    	return sqlSession.insert("PcNewPrdReqPrc.insertEmailSendRequest", insertMap);
    }
    
    @Override
    public String checkDuplicateRequest(Map<String, Object> saveMap) throws Exception {
    	// TODO Auto-generated method stub
    	return sqlSession.selectOne("PcNewPrdReqPrc.checkDuplicateRequest",saveMap);
    }

}
