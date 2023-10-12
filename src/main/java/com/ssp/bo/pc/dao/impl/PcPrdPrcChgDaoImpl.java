package com.ssp.bo.pc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pc.dao.PcPrdPrcChgDao;

/**
 * <pre></pre>
 * @title
 * @package com.ssp.bo.pc.dao.impl
 * <pre>    pcPrdPrcDao</pre>
 * @author scvgo17
 * @since 2022-01-25
 * @version 1.0
 * @see PcPrdPrcChgDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Repository("pcPrdPrcChgDao")
public class PcPrdPrcChgDaoImpl implements PcPrdPrcChgDao {

	@Autowired
	private SqlSession sqlSession;

    @Override
    public List<Map<String, Object>> selectExPrdPrcList(Map<String, Object> searchMap) {
        //noinspection unchecked
        return sqlSession.selectList("PcPrdPrcChg.selectExPrdPrcList", searchMap);
    }
    
    @Override
    public int selectExPrdPrcCount(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("PcPrdPrcChg.selectExPrdPrcCount", searchMap);
    }
    
    @Override
    public int insertExPrdPrc(Map<String, Object> commandMap) throws Exception {
    	//noinspection unchecked
    	return sqlSession.update("PcPrdPrcChg.insertExPrdPrc", commandMap);
    }

	@Override
	public List<Map<String, Object>> selectExPrdPrcDetail(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectList("PcPrdPrcChg.selectExPrdPrcDetail", searchMap);
	}
	
	 @Override
    public List<Map<String, Object>> selectExPrdPrcHstList(Map<String, Object> searchMap) {
        //noinspection unchecked
        return sqlSession.selectList("PcPrdPrcChg.selectExPrdPrcHstList", searchMap);
    }
    
    @Override
    public int selectExPrdPrcHstCount(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("PcPrdPrcChg.selectExPrdPrcHstCount", searchMap);
    }
    
}
