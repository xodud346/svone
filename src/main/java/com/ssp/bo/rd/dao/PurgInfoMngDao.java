/*------------------------------------------------------------------------------
 * NAME : PurgInfoMngDao.java
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
 * @title   PurgInfoMngDao
 * @@desc   구매정보관리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성n */
public interface PurgInfoMngDao {

    /**
     * 구매정보관리 리스트 조회(selectPurgInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPurgInfoMng(Map<String, Object> map) throws Exception;

    /**
     * 구매정보관리 카운트 조회(selectPurgInfoMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectPurgInfoMngCount(Map<String, Object> map) throws Exception;

    /**
     * 상품정보 조회(selectPrdInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPrdInfoInq(Map<String, Object> map) throws Exception;

    /**
     * 구매정보 조회(selectPurgInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPurgInfoInq(Map<String, Object> map) throws Exception;

    /**
     * 물량할인정보 조회(selectQtyDcInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectQtyDcInfoInq(Map<String, Object> map) throws Exception;

    /**
     * 구매임시정보 조회(selectPurgTmpInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPurgTmpInfoInq(Map<String, Object> map) throws Exception;

    /**
     * 임시물량할인정보 조회(selectTmpQtyDcInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectTmpQtyDcInfoInq(Map<String, Object> map) throws Exception;

    /**
     * 요청협력사합의KC인증정보 조회(selectTbRdReqCprtcpConsnKcCertInfo)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectTbRdReqCprtcpConsnKcCertInfo(Map<String, Object> map) throws Exception;

    /**
     * KC인증정보첨부파일내역 조회(selectKcCertInfoAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectKcCertInfoAttcFileDtlsInq(Map<String, Object> map) throws Exception;

	/**
	 * 임시계약 번호 생성
	 *
	 * @param map
	 * @return
	 * @throws Exception
	 */
	String selectContNoPKey(Map<String, Object> map) throws Exception;

	/**
	 * 견적요청 번호 생성
	 *
	 * @param map
	 * @return
	 * @throws Exception
	 */
	String selectCustPreqnoPKey(Map<String, Object> map) throws Exception;

    /**
     * 구매정보신규생성 저장(insertPurgInfoNewCrtStor)
     * @param input
     * @return
     * @throws Exception
     */
    int insertPurgInfoNewCrtStor(Map<String, Object> map) throws Exception;

    /**
     * 요청협력사물량합의정보 저장(insertReqCprtcpQtyConsnInfoStor)
     * @param input
     * @return
     * @throws Exception
     */
    int insertReqCprtcpQtyConsnInfoStor(Map<String, Object> map) throws Exception;

    /**
     * 요청협력사물량합의정보 삭제(deleteReqCprtcpQtyConsnInfoStor)
     * @param input
     * @return
     * @throws Exception
     */
    int deleteReqCprtcpQtyConsnInfoStor(Map<String, Object> map) throws Exception;

    /**
     * 요청협력사합의KC인증정보 저장(insertTbRdReqCprtcpConsnKcCertInfo)
     * @param input
     * @return
     * @throws Exception
     */
    int insertTbRdReqCprtcpConsnKcCertInfo(Map<String, Object> map) throws Exception;

    /**
     * 구매정보 저장(updatePurgInfoUpd)
     * @param input
     * @return
     * @throws Exception
     */
    int updatePurgInfoUpd(Map<String, Object> map) throws Exception;


    /**
     * 구매정보 변경 시 상품가격정보 등록
     *
     * @param saveMap
     * @return
     * @throws Exception
     */
    int insertRdPrdPrc(Map<String, Object> saveMap) throws Exception;
}