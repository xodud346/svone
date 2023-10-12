/*------------------------------------------------------------------------------
 * NAME : RdProductComHistoryDaoImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.06.22  홍길동
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.RdProductComHistoryDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   RdProductComHistoryDaoImpl
 * @@desc    DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.06.22
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.06.22			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("rdProductComHistoryDao")
public class RdProductComHistoryDaoImpl implements RdProductComHistoryDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

   
    
    /**==================== (구매/상품)담당자 관리 히스토리 시작 ===================**/
    /**
     * (구매/상품)담당자 관리 히스토리 카운트 조회(selectPersonHistoryCount)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectPersonHistoryCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("RdProductComHistory.selectPersonHistoryCount", map);
    }
    
    /**
     * (구매/상품)담당자 관리 히스토리 리스트 조회(selectPersonHistory)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectPersonHistory(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("RdProductComHistory.selectPersonHistory", map);
    }
    /**==================== (구매/상품)담당자 관리 히스토리 종료 ===================**/
    /**==================== 상품 관리 히스토리 시작  ===============================**/
    /**
     * 상품 관리 히스토리 카운트 조회(selectProductDetailHistoryCount)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectProductDetailHistoryCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("RdProductComHistory.selectProductDetailHistoryCount", map);
    }
    
    /**
     * 상품 관리 히스토리 리스트 조회(selectProductDetailHistory)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectProductDetailHistory(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("RdProductComHistory.selectProductDetailHistory", map);
    }
    /**==================== 상품 관리 히스토리 종료  ==============================**/
    /**==================== 시리즈 그룹상품 관리 히스토리 시작 ====================**/
    /**
     * 시리즈 그룹상품 관리 히스토리 카운트 조회(selectSeriesHistoryCount)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectSeriesHistoryCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("RdProductComHistory.selectSeriesHistoryCount", map);
    }
    
    /**
     * 시리즈 그룹상품 관리 히스토리 리스트 조회(selectSeriesHistory)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectSeriesHistory(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("RdProductComHistory.selectSeriesHistory", map);
    }
    /**==================== 시리즈 그룹상품 관리 히스토리 종료  ====================**/
    /**==================== 카테고리 관리 히스토리 시작 =============================**/
    /**
     * 카테고리 관리 히스토리 카운트 조회(selectCategoryHistoryCount)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectCategoryHistoryCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("RdProductComHistory.selectCategoryHistoryCount", map);
    }
    
    /**
     * 카테고리 관리 히스토리 리스트 조회(selectCategoryHistory)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectCategoryHistory(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("RdProductComHistory.selectCategoryHistory", map);
    }
    /**==================== 카테고리 관리 히스토리 종료  ====================**/
       
    /**==================== 화학물질 관리 히스토리 시작 ====================**/
    /**
     * 화학물질 관리 히스토리 카운트 조회(selectChmMtlInfoHistoryCount)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectChmMtlInfoHistoryCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("RdProductComHistory.selectChmMtlInfoHistoryCount", map);
    }
    
    /**
     * 화학물질 관리 히스토리 리스트 조회(selectChmMtlInfoHistory)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectChmMtlInfoHistory(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("RdProductComHistory.selectChmMtlInfoHistory", map);
    }
    /**==================== 화학물질 관리 히스토리 종료  ====================**/
    
    /**
     * 상품 공통 히스토리 뷰어 조회 (selectRdHstDtlHtmlInfo)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectRdHstDtlHtmlInfo(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("RdProductComHistory.selectRdHstDtlHtmlInfo", map);
    }
    
    /**
     * 화학물질 상세 히스토리 조회(selectRdProductComDtlHistory)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectRdProductComDtlHistory(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("RdProductComHistory.selectRdProductComDtlHistory", map);
    }
}