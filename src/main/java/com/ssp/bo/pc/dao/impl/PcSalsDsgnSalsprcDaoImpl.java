package com.ssp.bo.pc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pc.dao.PcSalsDsgnSalsprcDao;

/**
 * <pre></pre>
 * @title
 * @package com.ssp.bo.pc.dao.impl
 * <pre>    pcPrdPrcDao</pre>
 * @author scvgo17
 * @since 2022-01-25
 * @version 1.0
 * @see PcSalsDsgnSalsprcDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *
 */
@Repository("pcSalsDsgnSalsprcDao")
public class PcSalsDsgnSalsprcDaoImpl implements PcSalsDsgnSalsprcDao {

	@Autowired
    private SqlSession sqlSession;

    @Override
    public int updateSalsDsgnSalsprc(Map<String, Object> commandMap) throws Exception {
    	//noinspection unchecked
    	return sqlSession.update("PcSalsDsgnSalsprc.updateSalsDsgnSalsprc", commandMap);
    }


	@Override
	public List<Map<String, Object>> selectSalsDsgnSalsprcHstList(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("PcSalsDsgnSalsprc.selectSalsDsgnSalsprcHstList", searchMap);
	}


	@Override
	public int selectSalsDsgnSalsprcHstCount(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("PcSalsDsgnSalsprc.selectSalsDsgnSalsprcHstCount", searchMap);
	}

    @Override
    public int insertPcSalsprcHist(Map<String, Object> searchMap) throws Exception {
        return sqlSession.insert("PcSalsDsgnSalsprc.insertToSalsprcHst", searchMap);
    }

    @Override
    public int updatePcSalsprcHist(Map<String, Object> searchMap) throws Exception {
        return sqlSession.update("PcSalsDsgnSalsprc.updateToSalsprcHst", searchMap);
    }

    @Override
    public int deletePcSalsprcHist(Map<String, Object> searchMap) throws Exception {
        return sqlSession.delete("PcSalsDsgnSalsprc.deleteToSalsprcHst", searchMap);
    }

    @Override
    public Map<String, Object> insertPcSalsprcHistLast(Map<String, Object> searchMap) throws Exception {
        sqlSession.insert("PcSalsDsgnSalsprc.insertPcSalsprcHistLast", searchMap);
        return searchMap;
    }
}
