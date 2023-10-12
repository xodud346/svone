package com.ssp.bo.cc.dao.impl;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.dao.CorpDao;


/**
 * <pre>
 * @title   Corp Dao Impl
 * @desc    법인정보
 * @package com.ssp.bo.cc.dao.impl
 * <pre>
 * 
 * @author  박성근
 * @since   2022.02.11
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자   	내용
 * ------------------------------------------------
 * 2022.02.11   박성근   	최초작성
 * ------------------------------------------------
 */
@Repository("corpDao")
public class CorpDaoImpl implements CorpDao {

    @Autowired
    private SqlSession sqlSession;
    
    private final String NS = "com.ssp.bo.cc.corp.";
    private String ns(String s) {
        return new StringBuffer(NS).append(s).toString();
    }
    
    /**
     * 사업장 조회
     * @param searchMap Map
     * @return List
     */
    public List<Map<String, Object>> selectList(Map<String, Object> params) throws Exception {
    	CCUtils.prefixCoCd(params);
        return sqlSession.selectList(ns("selectList"), params);
    }
    
    /**
     * 사업장 엑셀
     * @param searchMap Map
     * @return List
     */
    public List<Map<String, Object>> selectXlsx(Map<String, Object> params) throws Exception {
    	CCUtils.prefixCoCd(params);
        return sqlSession.selectList(ns("selectXlsx"), params);
    }
    
}
