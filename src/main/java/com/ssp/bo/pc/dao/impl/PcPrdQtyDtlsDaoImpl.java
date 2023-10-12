package com.ssp.bo.pc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pc.dao.PcPrdQtyDtlsDao;

/**
 * <pre></pre>
 * @title
 * @package com.ssp.bo.pc.dao.impl
 * <pre>    pcPrdPrcDao</pre>
 * @author scvgo17
 * @since 2022-01-25
 * @version 1.0
 * @see PcPrdQtyDtlsDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *
 */
@Repository("pcPrdQtyDtlsDao")
public class PcPrdQtyDtlsDaoImpl implements PcPrdQtyDtlsDao {

	@Autowired
    private SqlSession sqlSession;

    @Override
    public int updatePrdQtyDtls(Map<String, Object> commandMap) throws Exception {
    	//noinspection unchecked
    	return sqlSession.update("PcPrdQtyDtls.updatePrdQtyDtls", commandMap);
    }

    @Override
    public List<Map<String, Object>> selectPrdQtyHstList(Map<String, Object> searchMap) {
        //noinspection unchecked
        return sqlSession.selectList("PcPrdQtyDtls.selectPrdQtyHstList", searchMap);
    }

    @Override
    public int selectPrdQtyHstCount(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("PcPrdQtyDtls.selectPrdQtyHstCount", searchMap);
    }

    @Override
    public int insertPcPrdQtyHist(Map<String, Object> searchMap) throws Exception {
        return sqlSession.insert("PcPrdQtyDtls.insertToPrdQtyDtls", searchMap);
    }

    @Override
    public int updatePcPrdQtyHist(Map<String, Object> searchMap) throws Exception {
        return sqlSession.update("PcPrdQtyDtls.updateToPrdQtyDtls", searchMap);
    }

    @Override
    public int deletePcPrdQtyHist(Map<String, Object> searchMap) throws Exception {
        return sqlSession.delete("PcPrdQtyDtls.deleteToPrdQtyDtls", searchMap);
    }

    @Override
    public Map<String, Object> insertPcPrdQtyHistLast(Map<String, Object> searchMap) throws Exception {
        sqlSession.insert("PcPrdQtyDtls.updateToPrdQtyHist", searchMap);
        return searchMap;
    }
    
    @Override
    public int updatePcPrdQtyHistPairUpdateUser(Map<String, Object> searchMap) throws Exception {
    	return sqlSession.update("PcPrdQtyDtls.updatePcPrdQtyHistPairUpdateUser", searchMap);
    }

}
