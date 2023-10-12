package com.ssp.bo.pc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pc.dao.PcCustPremrtDao;

/**
 * <pre></pre>
 * @title
 * @package com.ssp.bo.pc.dao.impl
 * <pre>    pcCustPremrtDao</pre>
 * @author scvgo17
 * @since 2022-01-25
 * @version 1.0
 * @see PcCustPremrtDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Repository("pcCustPremrtDao")
public class PcCustPremrtDaoImpl implements PcCustPremrtDao {

	@Autowired
	private SqlSession sqlSession;

    @Override
    public List<Map<String, Object>> selectCustPremrtList(Map<String, Object> searchMap) {
        //noinspection unchecked
        return sqlSession.selectList("PcCustPremrt.selectCustPremrtList", searchMap);
    }
    
    @Override
    public int selectCustPremrtCount(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("PcCustPremrt.selectCustPremrtCount", searchMap);
    }
    
    @Override
    public int insertCustPremrt(Map<String, Object> commandMap) throws Exception {
    	//noinspection unchecked
    	return sqlSession.insert("PcCustPremrt.insertCustPremrt", commandMap);
    }
    
    @Override
    public int updateCustPremrt(Map<String, Object> commandMap) throws Exception {
    	//noinspection unchecked
    	return sqlSession.update("PcCustPremrt.updateCustPremrt", commandMap);
    }
    
    @Override
    public Map<String, Object> selectCustPremrtDetail(Map<String, Object> searchMap) throws Exception {
    	//noinspection unchecked
    	return sqlSession.selectOne("PcCustPremrt.selectCustPremrtDetail", searchMap);
    }
}
