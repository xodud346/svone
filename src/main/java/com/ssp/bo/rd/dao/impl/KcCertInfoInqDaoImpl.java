/*------------------------------------------------------------------------------
 * NAME : KcCertInfoInqDaoImpl.java
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
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.KcCertInfoInqDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   KcCertInfoInqDaoImpl
 * @@desc    DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.05.24
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.05.24			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("kcCertInfoInqDao")
public class KcCertInfoInqDaoImpl implements KcCertInfoInqDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    /**
     * KC인증정보 조회(selectKcCertInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectKcCertInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("KcCertInfoInq.selectKcCertInfoInq", map);
    }

    /**
     * KC인증정보 리스트 조회(selectKcCertInfoListInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectKcCertInfoListInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("KcCertInfoInq.selectKcCertInfoListInq", map);
    }

    /**
     * KC인증정보첨부파일내역 리스트 조회(selectKcCertInfoAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectKcCertInfoAttcFileDtlsInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("KcCertInfoInq.selectKcCertInfoAttcFileDtlsInq", map);
    }

    /**
     * 요청협력사합의KC인증정보 조회(selectTbRdReqCprtcpConsnKcCertInfo)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectTbRdReqCprtcpConsnKcCertInfo(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("KcCertInfoInq.selectTbRdReqCprtcpConsnKcCertInfo", map);
    }

    /**
     * KC인증요청협력사첨부파일 조회(selectKcCertReqCprtcpAttcFileInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectKcCertReqCprtcpAttcFileInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("KcCertInfoInq.selectKcCertReqCprtcpAttcFileInq", map);
    }

    /**
     * KC인증정보 저장(insertKcCertInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertKcCertInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("KcCertInfoInq.insertKcCertInfoInq", map);
    }

    /**
     * KC인증정보 수정(updateKcCertInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int updateKcCertInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.update("KcCertInfoInq.updateKcCertInfoInq", map);
    }

    /**
     * KC인증정보 삭제(deleteKcCertInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int deleteKcCertInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.delete("KcCertInfoInq.deleteKcCertInfoInq", map);
    }

    /**
     * 요청협력사합의KC인증정보 저장(insertTbRdReqCprtcpConsnKcCertInfo)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertTbRdReqCprtcpConsnKcCertInfo(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("KcCertInfoInq.insertTbRdReqCprtcpConsnKcCertInfo", map);
    }

    /**
     * 요청협력사합의KC인증정보 삭제(deleteTbRdReqCprtcpConsnKcCertInfo)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int deleteTbRdReqCprtcpConsnKcCertInfo(Map<String, Object> map) throws Exception {
     	return commonDAO.delete("KcCertInfoInq.deleteTbRdReqCprtcpConsnKcCertInfo", map);
    }
}