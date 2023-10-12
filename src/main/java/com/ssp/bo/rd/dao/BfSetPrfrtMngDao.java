/*------------------------------------------------------------------------------
 * NAME : BfSetPrfrtMngDao.java
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
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   BfSetPrfrtMngDao
 * @@desc   사전설정매익률관리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.10			       최초작성n */
public interface BfSetPrfrtMngDao {

    /**
     * 사전설정매익률관리 리스트 조회(selectBfSetPrfrtMng)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectBfSetPrfrtMng(Map<String, Object> map) throws Exception;

   
    /**
     * 사전설정매익률관리 리스트 총 카운트 조회(selectBfSetPrfrtMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectBfSetPrfrtMngCount(Map<String, Object> map) throws Exception;

    /**
     * 사전설정매익률관리 등록/수정(saveBfSetPrfrtMng)
     * @param input
     * @return
     * @throws Exception
     */
	int saveBfSetPrfrtMng(Map<String, Object> saveData) throws Exception;

	/**
     * 구매담당자 여부 조회(selectPurgChrpsnYn)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectPurgChrpsnYn(Map<String, Object> searchMap) throws Exception;


	/**
     * 사전설정매익률관리 중복체크(selectBfSetPrfrtMngDupl)
     * @param input
     * @return
     * @throws Exception
     */
	int selectBfSetPrfrtMngDupl(Map<String, Object> saveData) throws Exception;

	/**
     * 사전설정매익률관리 이력 카운트(selectBfSetPrfrtMngHstCount)
     * @param input
     * @return
     * @throws Exception
     */
	int selectBfSetPrfrtMngHstCount(Map<String, Object> searchMap) throws Exception;

	/**
     * 사전설정매익률관리 이력 조회(selectBfSetPrfrtMngHst)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectBfSetPrfrtMngHst(Map<String, Object> searchMap) throws Exception;

	/**
     * 사전설정매익률관리 종료일자 수정(updateBfSetPrfrtMng)
     * @param input
     * @return
     * @throws Exception
     */
	int updateBfSetPrfrtMng(Map<String, Object> saveData) throws Exception;

	/**
     * 사전설정매익률관리 등록(insertBfSetPrfrtMng)
     * @param input
     * @return
     * @throws Exception
     */
	int insertBfSetPrfrtMng(Map<String, Object> saveData) throws Exception;

	/**
     * 사전설정매익률관리 가격변경대상 카운트(insertBfSetPrfrtMng)
     * @param input
     * @return
     * @throws Exception
     */
	int selectBfSetPrfrtMngChkCount(Map<String, Object> saveData) throws Exception;

	/**
     * 사전설정매익률관리 가격변경대상 가겨종료일자 수정(updateBfSetPrfrtMngPrcHst)
     * @param input
     * @return
     * @throws Exception
     */
	int updateBfSetPrfrtMngPrcHst(Map<String, Object> saveData) throws Exception;

	/**
     * 사전설정매익률관리 가격변경대상 가격등록(insertBfSetPrfrtMngPrcHst)
     * @param input
     * @return
     * @throws Exception
     */
	int insertBfSetPrfrtMngPrcHst(Map<String, Object> saveData) throws Exception;

}