/*------------------------------------------------------------------------------
 * NAME : AttrMngDaoImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.10  홍길동
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.AttrMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   AttrMngDaoImpl
 * @@desc   속성관리 DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.05.10			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("attrMngDao")
public class AttrMngDaoImpl implements AttrMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    /**
     * 속성관리 리스트 조회(selectAttrMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectAttrMng(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("AttrMng.selectAttrMng", map);
    }

    /**
     * 속성관리 리스트 전체 카운트 조회(selectAttrMngTotCount)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectAttrMngTotCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("AttrMng.selectAttrMngTotCount", map);
    }
    
    /**
     * 상품속성정보 리스트 조회(selectAttrMngDtl)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectAttrMngDtl(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("AttrMng.selectAttrMngDtl", map);
    }
    
    
    
    /**
     * 속성관리 키값을 조회(selectAttrMngPKey)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectAttrMngPKey(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("AttrMng.selectAttrMngPKey", map);
    }

    
    /**
     * 속성관리 중복 체크조회(selectAttrMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectAttrMngCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("AttrMng.selectAttrMngCount", map);
    }

    /**
     * 속성관리 저장(insertAttrMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertAttrMng(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("AttrMng.insertAttrMng", map);
    }

    /**
     * 속성관리 수정(updateAttrMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int updateAttrMng(Map<String, Object> map) throws Exception {
     	return commonDAO.update("AttrMng.updateAttrMng", map);
    }

    

}