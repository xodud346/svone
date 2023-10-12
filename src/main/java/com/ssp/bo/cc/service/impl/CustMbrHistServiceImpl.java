package com.ssp.bo.cc.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.dao.CustMbrHistDao;
import com.ssp.bo.cc.service.CustMbrHistService;
import com.ssp.core.co.util.CommonUtil;

/**
 * <pre>
 * @title 부서조회 목록 service implements
 * @package com.ssp.bo.cc.service.impl
 * <pre> 
 * @author  moonjooh
 * @since   2022. 02. 24.
 * @version 1.0
 * @see CustMbrHistServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.02.24		최초작성
 */
@Service("custMbrHistService")
public class CustMbrHistServiceImpl implements CustMbrHistService {

    @Resource(name="custMbrHistDao")
    private CustMbrHistDao custMbrHistDao;

    private final Logger logger = LoggerFactory.getLogger(CustDeptServiceImpl.class);

    @Autowired
    private SqlSession sqlSession;
    
    /**
     * 회원정보 전체 이력 조회
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectMbrHistPop(Map<String,Object> searchInfo){
        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        
        return custMbrHistDao.selectMbrHistPop(searchMap);
	}

}
