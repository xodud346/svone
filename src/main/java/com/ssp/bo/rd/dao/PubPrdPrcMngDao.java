/*------------------------------------------------------------------------------
 * NAME : PubPrdPrcMngDao.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.06  나용철
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   PubPrdPrcMngDao
 * @@desc   공용상품가격관리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.05.06
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.06			       최초작성n */
public interface PubPrdPrcMngDao {

    /**
     * 공용상품가격관리 리스트 조회(selectPubPrdPrcMng)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPubPrdPrcMng(Map<String, Object> map) throws Exception;

    
    /**
     * 공용상품가격관리 레코드 전체 카운트 조회(selectPubPrdPrcMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectPubPrdPrcMngCount(Map<String, Object> map) throws Exception;

    /**
     * 공용상품가격관리 상세(진열정보) 조회(selectDispInfo)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectPubPrdDispInfo(Map<String, Object> searchMap) throws Exception;

	/**
     * 공용상품가격관리 상세(상품기본정보) 조회(selectPubPrdBasisInfo)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectPubPrdBasisInfo(Map<String, Object> searchMap) throws Exception;

	/**
     * 공용상품가격관리 상세(가격정보) 조회(selectPubPrdPrcInfo)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectPubPrdPrcInfo(Map<String, Object> searchMap) throws Exception;

	/**
     * 공용상품가격관리 상세(현재적용기준가격) 조회(selectPubPrdPrcInfo)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectselectPubPrdPrcCurAply(Map<String, Object> searchMap) throws Exception;

	/**
     * 공용상품가격관리 상세(물량할인) 조회(selectselectPubPrdQtyDc)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectselectPubPrdQtyDc(Map<String, Object> searchMap) throws Exception;

	/**
     * 공용상품가격관리 상세(배송관리) 조회(selectselectPubPrdDlcst)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectselectPubPrdDlcst(Map<String, Object> searchMap) throws Exception;

	/**
     * 공용상품가격관리 상세(진열정보) 수정(savePubPrdPrcMngDispInfo)
     * @param input
     * @return
     * @throws Exception
     */
	int savePubPrdPrcMngDispInfo(Map<String, Object> saveData) throws Exception;

	/**
     * 진열상태변경이력 조회(selectDispStatsChgHst)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectDispStatsChgHst(Map<String, Object> searchMap) throws Exception;

	/**
     * 진열상태변경이력 카운트 조회(selectDispStatsChgHstCount)
     * @param input
     * @return
     * @throws Exception
     */
	int selectDispStatsChgHstCount(Map<String, Object> searchMap) throws Exception;

	/**
     * 물량할인 등록/수정(mergePubPrdQty)
     * @param input
     * @return
     * @throws Exception
     */
	int mergePubPrdQty(Map<String, Object> saveData) throws Exception;

	/**
     * 물량할인 삭제 //delete가 아닌 어제날짜로 기간To를 변경시킴 (mergePubPrdQty)
     * @param input
     * @return
     * @throws Exception
     */
	int updatePubPrdQty(Map<String, Object> saveData) throws Exception;

	/**
     * 배송비 등록/수정(mergePubPrdDlcst)
     * @param input
     * @return
     * @throws Exception
     */
	int mergePubPrdDlcst(Map<String, Object> saveData) throws Exception;

	/**
     * 배송비 삭제 //delete가 아닌 어제날짜로 기간To를 변경시킴 (updatePubPrdDlcst)
     * @param input
     * @return
     * @throws Exception
     */
	int updatePubPrdDlcst(Map<String, Object> saveData) throws Exception;

	/**
     * 요청상품정보 조회 (selectCprtcpReqInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectCprtcpReqInfoInq(Map<String, Object> searchMap) throws Exception;

	/**
     * 첨부파일 조회 (selectAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectAttcFileDtlsInq(Map<String, Object> searchMap) throws Exception;

	/**
     * 진열상태 이력등록(insertPubPrdDispRegHst)
     * @param input
     * @return
     * @throws Exception
     */
	int insertPubPrdDispRegHst(Map<String, Object> saveData) throws Exception;

	/**
     * 진열상태 상태변경시 이력등록(insertPubPrdDispStatsInfoHst)
     * @param input
     * @return
     * @throws Exception
     */
	int insertPubPrdDispStatsInfoHst(Map<String, Object> saveData) throws Exception;

	/**
     * 현재적용 기준가격 기간할인정보 수정(updatePubPrdPerdDc)
     * @param input
     * @return
     * @throws Exception
     */
	int updatePubPrdPerdDc(Map<String, Object> saveData) throws Exception;

	/**
     * 가격변경이력 조회(selectPrcChgHst)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectPrcChgHst(Map<String, Object> searchMap) throws Exception;

	/**
     * 가격변경이력 카운트 조회(selectPrcChgHstCount)
     * @param input
     * @return
     * @throws Exception
     */
	int selectPrcChgHstCount(Map<String, Object> searchMap) throws Exception;

	/**
     * 공용상품 기간할인 일자체크(selectPubPrdPerdDcDupl)
     * @param input
     * @return
     * @throws Exception
     */
	int selectPubPrdPerdDcDupl(Map<String, Object> saveData) throws Exception;

	/**
     * 공용상품 기간할인 등록(insertPubPrdPerdDc)
     * @param input
     * @return
     * @throws Exception
     */
	int insertPubPrdPerdDc(Map<String, Object> saveData) throws Exception;

	/**
     * 공용상품 기간할인 미래일자 삭제(deletePubPrdPerdDc)
     * @param input
     * @return
     * @throws Exception
     */
	int deletePubPrdPerdDc(Map<String, Object> saveData) throws Exception;

	/**
     * 공용상품 물량할인 과거일자 삭제(deletePubPrdQty)
     * @param input
     * @return
     * @throws Exception
     */
	int deletePubPrdQty(Map<String, Object> saveData) throws Exception;

	/**
     * 공용상품 배송비 과거일자 삭제(deletePubPrdDlcst)
     * @param input
     * @return
     * @throws Exception
     */
	int deletePubPrdDlcst(Map<String, Object> saveData) throws Exception;

	/**
     * 기준일시 조회(selectStrDtm)
     * @param input
     * @return
     * @throws Exception
     */
	String selectStrDtm(Map<String, Object> saveData) throws Exception;

    
}