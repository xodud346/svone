/*------------------------------------------------------------------------------
 * NAME : PurgInfoChgHstMngDao.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.06.10  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   PurgInfoChgHstMngDao
 * @@desc   구매정보변경이력관리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.06.10
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.28			       최초작성n */
public interface PurgInfoChgHstMngDao {

    /**
     * 구매정보변경이력관리 리스트 조회(selectPurgInfoChgHstMng)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPurgInfoChgHstMng(Map<String, Object> map) throws Exception;

    /**
     * 구매정보변경이력관리 카운트 조회(selectPurgInfoChgHstMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectPurgInfoChgHstMngCount(Map<String, Object> map) throws Exception;

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
     * 요청처리정보 조회(selectReqProcDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectReqProcDtlsInq(Map<String, Object> map) throws Exception;

    /**
     * 계약변경차수Key 조회(selectContChgDgrcntKey)
     * @param input
     * @return
     * @throws Exception
     */
    int selectContChgDgrcntKey(Map<String, Object> map) throws Exception;

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
     * 요청협력사합의KC인증정보 저장(insertTbRdReqCprtcpConsnKcCertInfo)
     * @param input
     * @return
     * @throws Exception
     */
    int insertTbRdReqCprtcpConsnKcCertInfo(Map<String, Object> map) throws Exception;

	/**
	 * 물량할인정보 조회(selectQtyDcInfoInq)
	 * @param input
	 * @return
	 * @throws Exception
	 */
	List<Map> selectQtyDcInfoInq(Map<String, Object> map) throws Exception;
}