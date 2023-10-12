/*------------------------------------------------------------------------------
 * NAME : PubPrdSalsDsgnSalsprcMngDao.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.28  newwhite7
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title  PubPrdSalsDsgnSalsprcMngDao
 * @@desc   공용상품영업지정판매가관리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.05.09
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.09			       최초작성n */
public interface PubPrdSalsDsgnSalsprcMngDao {

    /**
     * 공용상품영업지정판매가관리 리스트 조회(selectPubPrdSalsDsgnSalsprcMng)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPubPrdSalsDsgnSalsprcMng(Map<String, Object> map) throws Exception;

    
    /**
     * 공용상품영업지정판매가관리 전체 카운트(selectPubPrdSalsDsgnSalsprcMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectPubPrdSalsDsgnSalsprcMngCount(Map<String, Object> map) throws Exception;

    /**
     * 공용상품영업지정판매가관리 상세 조회(selectPubPrdSalsDsgnSalsprcMngDtl)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectPubPrdSalsDsgnSalsprcMngDtl(Map<String, Object> searchMap) throws Exception;

	/**
     * 첨부파일내역 조회(selectAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectAttcFileDtlsInq(Map<String, Object> searchMap) throws Exception;

	/**
     * 공용상품영업지정판매가관리 등록(selectPubPrdSalsDsgnSalsprcMngDtl)
     * @param input
     * @return
     * @throws Exception
     */
	int insertPubPrdSalsDsgnSalsprcMng(Map<String, Object> saveData) throws Exception;

	/**
     * 공용상품 영업지정판매가 등록 중복체크 조회(selectPubPrdSalsDsgnSalsprcMngDtl)
     * @param input
     * @return
     * @throws Exception
     */
	int selectPubPrdSalsDsgnSalsprcMngDupl(Map<String, Object> saveData) throws Exception;

	/**
     * 공용상품 영업지정판매가 수정(updatePubPrdSalsDsgnSalsprcMng)
     * @param input
     * @return
     * @throws Exception
     */
	int updatePubPrdSalsDsgnSalsprcMng(Map<String, Object> saveData) throws Exception;

	/**
     * 공용상품 영업지정판매가 영업담당자 여부(selectSalsChrpsnYn)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectSalsChrpsnYn(Map<String, Object> searchMap) throws Exception;

	/**
     * 공용상품 영업지정판매가 이력조회(selectPubPrdSalsDsgnSalsprcMngHst)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectPubPrdSalsDsgnSalsprcMngHst(Map<String, Object> searchMap) throws Exception;

	/**
     * 공용상품 영업지정판매가 상품정보 조회(selectPubPrdSalsDsgnSalsprcMngPrdDtl)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectPubPrdSalsDsgnSalsprcMngPrdDtl(Map<String, Object> searchMap) throws Exception;

	/**
     * 공용상품 영업지정판매가 이력삭제(deletePubPrdSalsDsgnSalsprcMngHst)
     * @param input
     * @return
     * @throws Exception
     */
	void deletePubPrdSalsDsgnSalsprcMngHst(Map<String, Object> saveData) throws Exception;

	/**
     * 공용상품 영업지정판매가 등록 전 수정(updatePubPrdSalsDsgnSalsprcMngHst)
     * @param input
     * @return
     * @throws Exception
     */
	void updatePubPrdSalsDsgnSalsprcMngHst(Map<String, Object> saveData) throws Exception;

	/**
     * 공용상품 영업지정판매가 이력생성(insertPubPrdSalsDsgnSalsprcMngHst)
     * @param input
     * @return
     * @throws Exception
     */
	int insertPubPrdSalsDsgnSalsprcMngHst(Map<String, Object> saveData) throws Exception;

	/**
     * 공용상품 영업지정판매가 이력수정(updatePubPrdSalsDsgnSalsprcMngHst2)
     * @param input
     * @return
     * @throws Exception
     */
	void updatePubPrdSalsDsgnSalsprcMngHst2(Map<String, Object> saveData) throws Exception;

    
}