/*------------------------------------------------------------------------------
 * NAME : KcCertInfoInqDao.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.24  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   KcCertInfoInqDao
 * @@desc    Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.05.24
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.24			       최초작성
 */
public interface KcCertInfoInqDao {

    /**
     * KC인증정보 조회(selectKcCertInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectKcCertInfoInq(Map<String, Object> map) throws Exception;

    /**
     * KC인증정보 리스트 조회(selectKcCertInfoListInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectKcCertInfoListInq(Map<String, Object> map) throws Exception;

    /**
     * KC인증정보첨부파일내역 리스트 조회(selectKcCertInfoAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectKcCertInfoAttcFileDtlsInq(Map<String, Object> map) throws Exception;

    /**
     * 요청협력사합의KC인증정보 조회(selectTbRdReqCprtcpConsnKcCertInfo)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectTbRdReqCprtcpConsnKcCertInfo(Map<String, Object> map) throws Exception;

    /**
     * KC인증요청협력사첨부파일 조회(selectKcCertReqCprtcpAttcFileInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectKcCertReqCprtcpAttcFileInq(Map<String, Object> map) throws Exception;

    /**
     * KC인증정보 저장(insertKcCertInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    int insertKcCertInfoInq(Map<String, Object> map) throws Exception;

    /**
     * KC인증정보 수정(updateKcCertInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    int updateKcCertInfoInq(Map<String, Object> map) throws Exception;

    /**
     * KC인증정보 삭제(deleteKcCertInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    int deleteKcCertInfoInq(Map<String, Object> map) throws Exception;

    /**
     * 요청협력사합의KC인증정보 저장(insertTbRdReqCprtcpConsnKcCertInfo)
     * @param input
     * @return
     * @throws Exception
     */
    int insertTbRdReqCprtcpConsnKcCertInfo(Map<String, Object> map) throws Exception;

    /**
     * 요청협력사합의KC인증정보 삭제(deleteTbRdReqCprtcpConsnKcCertInfo)
     * @param input
     * @return
     * @throws Exception
     */
    int deleteTbRdReqCprtcpConsnKcCertInfo(Map<String, Object> map) throws Exception;
}