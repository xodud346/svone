/*------------------------------------------------------------------------------
 * NAME : PurgInfoChgHstMngDaoImpl.java
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
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.PurgInfoChgHstMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   PurgInfoChgHstMngDaoImpl
 * @@desc   구매정보변경이력관리 DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.06.10
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.28			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("purgInfoChgHstMngDao")
public class PurgInfoChgHstMngDaoImpl implements PurgInfoChgHstMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    /**
     * 구매정보변경이력관리 리스트 조회(selectPurgInfoChgHstMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectPurgInfoChgHstMng(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PurgInfoChgHstMng.selectPurgInfoChgHstMng", map);
    }

    /**
     * 구매정보변경이력관리 카운트 조회(selectPurgInfoChgHstMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectPurgInfoChgHstMngCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("PurgInfoChgHstMng.selectPurgInfoChgHstMngCount", map);
    }

    /**
     * 상품정보 조회(selectPrdInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectPrdInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PurgInfoChgHstMng.selectPrdInfoInq", map);
    }

	/**
	 * 구매정보 조회
	 *
	 * @param map
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map> selectPurgInfoInq(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("PurgInfoChgHstMng.selectPurgInfoInq", map);
	}

    /**
     * 요청처리정보 조회(selectReqProcDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectReqProcDtlsInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PurgInfoChgHstMng.selectReqProcDtlsInq", map);
    }

    /**
     * 계약변경차수Key 조회(selectContChgDgrcntKey)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectContChgDgrcntKey(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("PurgInfoChgHstMng.selectContChgDgrcntKey", map);
    }

    /**
     * 구매정보신규생성 저장(insertPurgInfoNewCrtStor)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertPurgInfoNewCrtStor(Map<String, Object> map) throws Exception {
     	return commonDAO.update("PurgInfoChgHstMng.insertPurgInfoNewCrtStor", map);
    }

    /**
     * 요청협력사물량합의정보 저장(insertReqCprtcpQtyConsnInfoStor)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertReqCprtcpQtyConsnInfoStor(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("PurgInfoChgHstMng.insertReqCprtcpQtyConsnInfoStor", map);
    }

    /**
     * 요청협력사합의KC인증정보 저장(insertTbRdReqCprtcpConsnKcCertInfo)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertTbRdReqCprtcpConsnKcCertInfo(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("PurgInfoChgHstMng.insertTbRdReqCprtcpConsnKcCertInfo", map);
    }
    
    /**
     * 물량할인정보 조회(selectQtyDcInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectQtyDcInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PurgInfoChgHstMng.selectQtyDcInfoInq", map);
    }

}