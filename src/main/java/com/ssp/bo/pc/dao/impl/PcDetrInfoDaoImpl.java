package com.ssp.bo.pc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pc.dao.PcDetrInfoDao;

/**
 * <pre></pre>
 * @title
 * @package com.ssp.bo.pc.dao.impl
 * <pre>    CoMnuMngDaoImpl</pre>
 * @author scvgo17
 * @since 2022-01-25
 * @version 1.0
 * @see PropertyDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Repository("pcDetrInfoDao")
public class PcDetrInfoDaoImpl implements PcDetrInfoDao {

	@Autowired
	private SqlSession sqlSession;	


    @Override
    public List<Map<String, Object>> selectDetrInfoList(Map<String, Object> searchMap) {
        //noinspection unchecked
        return sqlSession.selectList("PcDetrInfo.selectDetrInfoList", searchMap);
    }
    
    @Override
    public int updateDetrInfo(Map<String, Object> commandMap) throws Exception {
    	//noinspection unchecked
    	return sqlSession.update("PcDetrInfo.updateDetrInfo", commandMap);
    }
    
}
