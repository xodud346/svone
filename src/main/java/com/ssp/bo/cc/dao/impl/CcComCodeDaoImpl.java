package com.ssp.bo.cc.dao.impl;

import java.util.List;
import java.util.Map;



import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.dao.CcComCodeDao;


/**
 * <pre>
 * @title   CcComCodeDao Impl
 * @desc    공통코드 조회
 * @package com.ssp.bo.cc.dao.impl
 * <pre>
 * 
 * @author  박성근
 * @since   2022.02.23
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자   	내용
 * ------------------------------------------------
 * 2022.02.21   박성근   	최초작성
 * ------------------------------------------------
 */
@Repository("ccComCodeDao")
public class CcComCodeDaoImpl implements CcComCodeDao {
	
    @Autowired
    private SqlSession sqlSession;
    
    private final String NS = "com.ssp.bo.cc.common.";
    private String ns(String s) {
        return new StringBuffer(NS).append(s).toString();
    }
    
    
    public List<Map<String, Object>> selectComCodeDtl(Map<String, Object> param) throws Exception {
    	CCUtils.prefixCoCd(param);
    	return sqlSession.selectList(ns("selectComCodeDtl"), param);
    }
    
    public List<Map<String, Object>> selectBzplcOprunit(Map<String, Object> param) throws Exception {
    	CCUtils.prefixCoCd(param);
    	return sqlSession.selectList(ns("selectBzplcOprunit"), param);
    }


	@Override
	public int checkMbrExist(Map<String, Object> param) throws Exception {
		return sqlSession.selectOne(ns("checkMbrExist"), param);
	}
}
