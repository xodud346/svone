package com.ssp.bo.pc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pc.dao.PcIntlLwstDao;

/**
 * <pre></pre>
 * @title
 * @package com.ssp.bo.pc.dao.impl
 * <pre>    PcIntlLwstDao</pre>
 * @author scvgo17
 * @since 2022-01-25
 * @version 1.0
 * @see PcIntlLwstDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Repository("pcIntlLwstDao")
public class PcIntlLwstDaoImpl implements PcIntlLwstDao {

	@Autowired
	private SqlSession sqlSession;	

    @Override
    public List<Map<String, Object>> selectIntlLwstList(Map<String, Object> searchMap) {
        //noinspection unchecked
        return sqlSession.selectList("PcIntlLwst.selectIntlLwstList", searchMap);
    }
    
    @Override
    public int selectIntlLwstCount(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("PcIntlLwst.selectIntlLwstCount", searchMap);
    }
    
    @Override
    public int insertIntlLwst(Map<String, Object> commandMap) throws Exception {
    	//noinspection unchecked
    	return sqlSession.insert("PcIntlLwst.insertIntlLwst", commandMap);
    }
    
    @Override
    public Map<String, Object> selectIntlLwstDetail(Map<String, Object> searchMap) throws Exception {
    	//noinspection unchecked
    	return sqlSession.selectOne("PcIntlLwst.selectIntlLwstDetail", searchMap);
    }
    
}
