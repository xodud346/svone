package com.ssp.bo.pc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pc.dao.PcPrdPrcDao;
import com.ssp.core.od.utils.OU;

/**
 * <pre></pre>
 * @title
 * @package com.ssp.bo.pc.dao.impl
 * <pre>    pcPrdPrcDao</pre>
 * @author scvgo17
 * @since 2022-01-25
 * @version 1.0
 * @see PcPrdPrcDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *
 */
@Repository("pcPrdPrcDao")
public class PcPrdPrcDaoImpl implements PcPrdPrcDao {

    @Autowired
    private SqlSession sqlSession;

    @Override
    public Map<String, Object> updatePrdPrc(Map<String, Object> commandMap) throws Exception {

        sqlSession.insert("PcPrdPrc.updatePrdPrc", commandMap);
        return commandMap;
    }

    @Override
    public List<Map<String, Object>> selectPrcHistoryList(Map<String, Object> searchMap) {
        //noinspection unchecked
        return sqlSession.selectList("PcPrdPrc.selectPrcHistoryList", searchMap);
    }

    @Override
    public int selectPrcHistoryCount(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("PcPrdPrc.selectPrcHistoryCount", searchMap);
    }

    @Override
    public Map<String, Object> selectCurrentDate(Map<String, Object> commandMap) throws Exception {
    	//noinspection unchecked
    	return sqlSession.selectOne("PcPrdPrc.selectCurrentDate", commandMap);
    }

    @Override
    public String selectCurrentDtm(Map<String, Object> commandMap) throws Exception {
        Map<String, Object> returnMap = OU.newMap();
        returnMap = sqlSession.selectOne("PcPrdPrc.selectCurrentDtm", commandMap);
        return returnMap.get("currDtm").toString();
    }

    @Override
    public int insertPcPrdPrcHist(Map<String, Object> searchMap) throws Exception {
        return sqlSession.insert("PcPrdPrc.insertToPrdPrcHst", searchMap);
    }

    @Override
    public int updatePcPrdPrcHist(Map<String, Object> searchMap) throws Exception {
        return sqlSession.update("PcPrdPrc.updateToPrdPrcHst", searchMap);
    }

    @Override
    public Map<String, Object> insertPcPrdPrcHistLast(Map<String, Object> searchMap) throws Exception {
        sqlSession.insert("PcPrdPrc.insertPcPrdPrcHistLast", searchMap);
        return searchMap;
    }

    @Override
    public int selectPcPrdPrcHistCount(Map<String, Object> prcMap) throws Exception {
        return sqlSession.selectOne("PcPrdPrc.selectPcPrdPrcHistCount", prcMap);
    }

    @Override
    public int selectPcPrdPrcFstHstCount(Map<String, Object> prcMap) throws Exception {
        return sqlSession.selectOne("PcPrdPrc.selectPcPrdPrcFstHstCount", prcMap);
    }
}
