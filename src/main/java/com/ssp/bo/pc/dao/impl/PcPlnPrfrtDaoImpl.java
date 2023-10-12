package com.ssp.bo.pc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pc.dao.PcPlnPrfrtDao;

/**
 * <pre></pre>
 * @title
 * @package com.ssp.bo.pc.dao.impl
 * <pre>    pcPlnPrfrtDao</pre>
 * @author scvgo17
 * @since 2022-01-25
 * @version 1.0
 * @see PcPlnPrfrtDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Repository("pcPlnPrfrtDao")
public class PcPlnPrfrtDaoImpl implements PcPlnPrfrtDao {

	@Autowired
	private SqlSession sqlSession;

    @Override
    public List<Map<String, Object>> selectPlnPrfrtList(Map<String, Object> searchMap) {
        //noinspection unchecked
        return sqlSession.selectList("PcPlnPrfrt.selectPlnPrfrtList", searchMap);
    }
    
    @Override
    public int selectPlnPrfrtCount(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("PcPlnPrfrt.selectPlnPrfrtCount", searchMap);
    }
    
    @Override
    public int insertPlnPrfrt(Map<String, Object> commandMap) throws Exception {
    	//noinspection unchecked
    	return sqlSession.insert("PcPlnPrfrt.insertPlnPrfrt", commandMap);
    }
    
    @Override
    public int updatePlnPrfrt(Map<String, Object> commandMap) throws Exception {
    	//noinspection unchecked
    	return sqlSession.update("PcPlnPrfrt.updatePlnPrfrt", commandMap);
    }
    
    @Override
    public Map<String, Object> selectPlnPrfrtDetail(Map<String, Object> searchMap) throws Exception {
    	//noinspection unchecked
    	return sqlSession.selectOne("PcPlnPrfrt.selectPlnPrfrtDetail", searchMap);
    }
}
