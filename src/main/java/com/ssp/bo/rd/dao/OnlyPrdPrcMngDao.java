/*------------------------------------------------------------------------------
 * NAME : OnlyPrdPrcMngDao.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.09  나용철
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   OnlyPrdPrcMngDao
 * @@desc   전용상품가격관리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.05.09
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.09			       최초작성n */
public interface OnlyPrdPrcMngDao {

    /**
     * 전용상품가격관리 리스트 조회(selectOnlyPrdPrcMng)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectOnlyPrdPrcMng(Map<String, Object> map) throws Exception;

    
    /**
     * 전용상품가격관리 총카운트 조회(selectOnlyPrdPrcMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectOnlyPrdPrcMngCount(Map<String, Object> map) throws Exception;

    /**
     * 전용상품가격관리 등록 시 (운영단위정보) 조회(selectOprUnitInfo)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectOprUnitInfo(Map<String, Object> searchMap) throws Exception;

    /**
     * 전용상품가격관리 등록 시 (기준가정보) 조회(selectOnlyPrdPrcInfo)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectOnlyPrdPrcInfo(Map<String, Object> searchMap) throws Exception;

	/**
     * 전용상품가격관리 등록 (진열정보)(insertOnlyPrdSalsDsgnSalsprcMng)
     * @param input
     * @return
     * @throws Exception
     */
	int insertOnlyPrdSalsDsgnSalsprcMng(Map<String, Object> saveData) throws Exception;
	
	/**
     * 전용상품가격관리 등록 시(전용상품 기본정보) 조회(selectOnlyPrdBasisInfo)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectOnlyPrdBasisInfo(Map<String, Object> searchMap) throws Exception;

	/**
     * 전용상품가격관리 등록 시(전용상품 요청상품정보) 조회(selectCprtcpReqInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectCprtcpReqInfoInq(Map<String, Object> searchMap) throws Exception;

	/**
     * 전용상품가격관리 등록 시(전용상품 요청상품정보 첨부) 조회(selectAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectAttcFileDtlsInq(Map<String, Object> searchMap) throws Exception;

	/**
     * 전용상품가격관리 등록 (진열정보)(insertOnlyPrdDispStatsInfo)
     * @param input
     * @return
     * @throws Exception
     */
	int insertOnlyPrdDispStatsInfo(Map<String, Object> saveData) throws Exception;

	/**
     * 전용상품가격관리 (영업지정판매가)(selectOnlyPrdSalsDsgnSalsprc)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectOnlyPrdSalsDsgnSalsprc(Map<String, Object> searchMap) throws Exception;

	/**
     * 전용상품가격관리 (영업지정판매가 이력)(selectOnlyPrdSalsDsgnSalsprcHst)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectOnlyPrdSalsDsgnSalsprcHst(Map<String, Object> searchMap) throws Exception;

	/**
     * 전용상품가격관리 (진열정보 전체이력)(insertOnlyPrdDispRegHst)
     * @param input
     * @return
     * @throws Exception
     */
	int insertOnlyPrdDispRegHst(Map<String, Object> saveData) throws Exception;

	/**
     * 전용상품가격관리 (진열정보 상태변경 이력)(selectOnlyPrdSalsDsgnSalsprcHst)
     * @param input
     * @return
     * @throws Exception
     */
	int insertOnlyPrdDispStatsInfoHst(Map<String, Object> saveData) throws Exception;

	/**
     * 전용상품가격관리 (영업지정판매가) 수정(updateOnlyPrdSalsDsgnSalsprcMng)
     * @param input
     * @return
     * @throws Exception
     */
	int updateOnlyPrdSalsDsgnSalsprcMng(Map<String, Object> saveData) throws Exception;

	/**
     * 전용상품가격관리 (영업지정판매가 이력) 삭제(deleteOnlyPrdSalsDsgnSalsprcMngHst)
     * @param input
     * @return
     * @throws Exception
     */
	int deleteOnlyPrdSalsDsgnSalsprcMngHst(Map<String, Object> saveData) throws Exception;

	/**
     * 전용상품가격관리 (영업지정판매가 이력) 수정(updateOnlyPrdSalsDsgnSalsprcMngHst)
     * @param input
     * @return
     * @throws Exception
     */
	int updateOnlyPrdSalsDsgnSalsprcMngHst(Map<String, Object> saveData) throws Exception;

	/**
     * 전용상품가격관리 (영업지정판매가 이력) 수정(updateOnlyPrdSalsDsgnSalsprcMngHst2)
     * @param input
     * @return
     * @throws Exception
     */
	int updateOnlyPrdSalsDsgnSalsprcMngHst2(Map<String, Object> saveData) throws Exception;

	/**
     * 전용상품가격관리 (진열상태) 수정(updateOnlyPrdDispStatsInfo)
     * @param input
     * @return
     * @throws Exception
     */
	int updateOnlyPrdDispStatsInfo(Map<String, Object> saveData) throws Exception;

	/**
     * 전용상품가격관리 구매정보 조회(selectPrcList)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectPrcList(Map<String, Object> searchMap) throws Exception;

	/**
     * 전용상품가격관리 카테고리 조회(selectCatgAttrInfo)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectCatgAttrInfo(Map<String, Object> searchMap) throws Exception;

	/**
     * 전용상품가격관리 기등록 여부(selectOnlyPrdPrcMngDupl)
     * @param input
     * @return
     * @throws Exception
     */
	int selectOnlyPrdPrcMngDupl(Map<String, Object> searchMap) throws Exception;

	/**
     * 기준판매가 등록(insertPrdPrcHst)
     * @param input
     * @return
     * @throws Exception
     */
	int insertPrdPrcHst(Map<String, Object> saveData) throws Exception;

	/**
     * 진열정보 등록시 신규상품 처리완료 처리
     * @param input
     * @return
     * @throws Exception
     */
	int insertNewPrdReqStats(Map<String, Object> saveData) throws Exception;

	/**
     * 개별등록시 신규상품 처리 완료 로직 우회
     * @param input
     * @return
     * @throws Exception
     */
	int selectNewPrdReqStatsCount(Map<String, Object> saveData) throws Exception;
	
	/**
     * 개별등록시 신규상품 처리 완료 로직 우회
     * @param input
     * @return
     * @throws Exception
     */
	Map<String, Object> selectNewPrdReqInfo(Map<String, Object> saveData) throws Exception;
	
//	/**
//    * 상품요청구분코드 조회
//    * @param input
//    * @return
//    * @throws Exception
//    */
//    String selectPrdPrpsSprCd (Map<String, Object> saveData) throws Exception;
	
}