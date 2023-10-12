package com.ssp.bo.cc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.dao.CustMbrHistDao;


/**
 * <pre></pre>
 * @title
 * @desc
 * @package com.ssp.bo.cc.dao.impl
 * <pre>    CustMbrHistDaoImpl</pre>
 * @author  moonjooh
 * @since   2022. 02. 24.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.02.24		최초작성
 */
@Repository("custMbrHistDao")
public class CustMbrHistDaoImpl implements CustMbrHistDao {

    @Autowired
    private SqlSession sqlSession;
    
    /**
     * 회원정보 전체 이력 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectMbrHistPop(Map<String, Object> searchMap) {
        return sqlSession.selectList("custMbrHist.selectCustDept", searchMap);
    }
    
}
