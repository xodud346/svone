package com.ssp.bo.pc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pc.dao.PcPrcCondDao;

/**
 * <pre></pre>
 * @title
 * @package com.ssp.bo.pc.dao.impl
 * <pre>    pcPrdPrcDao</pre>
 * @author scvgo17
 * @since 2022-01-25
 * @version 1.0
 * @see PcPrcCondDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Repository("pcPrcCondDao")
public class PcPrcCondDaoImpl implements PcPrcCondDao {

	@Autowired
	private SqlSession sqlSession;

    @Override
    public List<Map<String, Object>> selectPrcCondList(Map<String, Object> searchMap) {
        //noinspection unchecked
        return sqlSession.selectList("PcPrcCond.selectPrcCondList", searchMap);
    }
    
}
