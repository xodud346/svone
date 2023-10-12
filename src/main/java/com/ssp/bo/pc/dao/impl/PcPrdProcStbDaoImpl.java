package com.ssp.bo.pc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pc.dao.PcPrdProcStbDao;

/**
 * <pre></pre>
 * @title
 * @package com.ssp.bo.pc.dao.impl
 * <pre>    PcIntlLwstDao</pre>
 * @author scvgo17
 * @since 2022-01-25
 * @version 1.0
 * @see PcPrdProcStbDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Repository("pcPrdProcStbDao")
public class PcPrdProcStbDaoImpl implements PcPrdProcStbDao {

	@Autowired
	private SqlSession sqlSession;

    @Override
    public List<Map<String, Object>> selectPcPubPrdProcStbList(Map<String, Object> searchMap) {
        //noinspection unchecked
        return sqlSession.selectList("PcPubPrdProcStb.selectPcPubPrdProcStbList", searchMap);
    }
    
    @Override
    public int selectPcPubPrdProcStbCount(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("PcPubPrdProcStb.selectPcPubPrdProcStbCount", searchMap);
    }
    
    
}
