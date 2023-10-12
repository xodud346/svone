package com.ssp.bo.pc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pc.dao.PcPrdDlcstDtlsDao;

/**
 * <pre></pre>
 * @title
 * @package com.ssp.bo.pc.dao.impl
 * <pre>    pcPrdPrcDao</pre>
 * @author scvgo17
 * @since 2022-01-25
 * @version 1.0
 * @see PcPrdDlcstDtlsDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *
 */
@Repository("pcPrdDlcstDtlsDao")
public class PcPrdDlcstDtlsDaoImpl implements PcPrdDlcstDtlsDao {

	@Autowired
    private SqlSession sqlSession;

    @Override
    public List<Map<String, Object>> selectPrdDlcstHstList(Map<String, Object> searchMap) {
        //noinspection unchecked
        return sqlSession.selectList("PcPrdDlcstDtls.selectPrdDlcstHstList", searchMap);
    }

    @Override
    public int selectPrdDlcstHstCount(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("PcPrdDlcstDtls.selectPrdDlcstHstCount", searchMap);
    }

	@Override
	public int updatePrdDlcstDtls(Map<String, Object> commandMap) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.update("PcPrdDlcstDtls.updatePrdDlcstDtls", commandMap);
	}

	@Override
    public int insertPcPrdDlcstHist(Map<String, Object> searchMap) throws Exception {
        return sqlSession.insert("PcPrdDlcstDtls.insertToPrdDlcstDtls", searchMap);
    }

    @Override
    public int updatePcPrdDlcstHist(Map<String, Object> searchMap) throws Exception {
        return sqlSession.update("PcPrdDlcstDtls.updateToPrdDlcstDtls", searchMap);
    }

    @Override
    public int deletePcPrdDlcstHist(Map<String, Object> searchMap) throws Exception {
        return sqlSession.delete("PcPrdDlcstDtls.deleteToPrdDlcstDtls", searchMap);
    }

    @Override
    public Map<String, Object> insertPcPrdDlcstHistLast(Map<String, Object> searchMap) throws Exception {
        sqlSession.insert("PcPrdDlcstDtls.updateToPrdDlcstDtlsHist", searchMap);
        return searchMap;
    }
    
    @Override
    public int updatePcPrdDlcsHistPairUpdateUser(Map<String, Object> searchMap) throws Exception{
    	return sqlSession.update("PcPrdDlcstDtls.updatePcPrdDlcsHistPairUpdateUser",searchMap);
    }
}
