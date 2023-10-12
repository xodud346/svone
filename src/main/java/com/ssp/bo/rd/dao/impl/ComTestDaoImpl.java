/*------------------------------------------------------------------------------
 * NAME : ComTestDaoImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.09  홍길동
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.ComTestDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   ComTestDaoImpl
 * @@desc   상품전송정보 DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.05.09
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.05.09			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("comTestDao")
public class ComTestDaoImpl implements ComTestDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map> selectComTest(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("ComTest.selectComTest", map);
    }

    @Override
    public String selectComTestPKey(Map<String, Object> map) throws Exception {
     	return commonDAO.selectStr("ComTest.selectComTestPKey", map);
    }

    @Override
    public int selectComTestCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("ComTest.selectComTestCount", map);
    }

    @Override
    public int insertComTest(Map<String, Object> map) throws Exception {
    	int result = 0;
    		//상품정보저장
    		result += commonDAO.insert("ComTest.insertComTest", map);
    		result += commonDAO.insert("ComTest.insertComTest2", map);
    		result += commonDAO.insert("ComTest.insertComTest3", map);
    		result += commonDAO.insert("ComTest.insertComTest4", map);
    		result += commonDAO.insert("ComTest.insertComTest5", map);
     	return result;
    }

    @Override
    public int updateComTest(Map<String, Object> map) throws Exception {
    	int result = 0;
    		result += commonDAO.update("ComTest.updateComTest", map);
    		result += commonDAO.update("ComTest.updateComTest2", map);
     	return result;
    }

    @Override
    public int deleteComTest(Map<String, Object> map) throws Exception {
     	return commonDAO.delete("ComTest.deleteComTest", map);
    }

	@Override
	public List<Map> selectComTestPrd(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		return commonDAO.selectList("ComTest.selectComTestPrd", searchMap);
	}

	@Override
	public List<Map<String, Object>> selectComTestBatch(Map<String, Object> saveData) throws Exception{
		// TODO Auto-generated method stub
		return commonDAO.selectList("ComTest.selectComTestBatch", saveData);
	}
	
	 @Override
    public int insertComTest1303(Map<String, Object> map) throws Exception {
    	int result = 0;
    		//상품정보저장
    		result += commonDAO.insert("ComTest.insertComTest6", map);
    	
     	return result;
    }

	@Override
	public int updateComTest3(Map<String, Object> commandMap) throws Exception {
    	int result = 0;
    		result += commonDAO.update("ComTest.updateComTest3", commandMap);
     	return result;
	}

	@Override
	public List<Map> selectComTest1303(Map<String, Object> saveData) throws Exception {
		// TODO Auto-generated method stub
		return commonDAO.selectList("ComTest.selectComTest1303", saveData);
	}
}