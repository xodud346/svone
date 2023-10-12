/*------------------------------------------------------------------------------
 * NAME : PurgInfoMngDaoImpl.java
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
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.PurgInfoMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   PurgInfoMngDaoImpl
 * @@desc   구매정보관리 DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.28			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("purgInfoMngDao")
public class PurgInfoMngDaoImpl implements PurgInfoMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    /**
     * 구매정보관리 조회(selectContRuleNoPKey)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectPurgInfoMng(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PurgInfoMng.selectPurgInfoMng", map);
    }

    /**
     * 구매정보관리 카운트 조회(selectContRuleNoPKey)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectPurgInfoMngCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("PurgInfoMng.selectPurgInfoMngCount", map);
    }

    /**
     * 상품정보 조회(selectPrdInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectPrdInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PurgInfoMng.selectPrdInfoInq", map);
    }

    /**
     * 구매정보 조회(selectPurgInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectPurgInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PurgInfoMng.selectPurgInfoInq", map);
    }

    /**
     * 물량할인정보 조회(selectQtyDcInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectQtyDcInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PurgInfoMng.selectQtyDcInfoInq", map);
    }

    /**
     * 구매임시정보 조회(selectPurgTmpInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectPurgTmpInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PurgInfoMng.selectPurgTmpInfoInq", map);
    }

    /**
     * 임시물량할인정보 조회(selectTmpQtyDcInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectTmpQtyDcInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PurgInfoMng.selectTmpQtyDcInfoInq", map);
    }

    /**
     * 요청협력사합의KC인증정보 조회(selectTbRdReqCprtcpConsnKcCertInfo)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectTbRdReqCprtcpConsnKcCertInfo(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PurgInfoMng.selectTbRdReqCprtcpConsnKcCertInfo", map);
    }

    /**
     * KC인증정보첨부파일내역 조회(selectKcCertInfoAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectKcCertInfoAttcFileDtlsInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PurgInfoMng.selectKcCertInfoAttcFileDtlsInq", map);
    }

	/**
	 * 임시계약 번호 생성
	 *
	 * @param map
	 * @return
	 * @throws Exception
	 */
	@Override
	public String selectContNoPKey(Map<String, Object> map) throws Exception {
		return commonDAO.selectStr("PurgInfoMng.selectContNoPKey", map);
	}

	/**
	 * 견적요청 번호 생성
	 *
	 * @param map
	 * @return
	 * @throws Exception
	 */
	@Override
	public String selectCustPreqnoPKey(Map<String, Object> map) throws Exception {
		return commonDAO.selectStr("PurgInfoMng.selectCustPreqnoPKey", map);
	}

    /**
     * 구매정보신규생성 저장(insertPurgInfoNewCrtStor)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertPurgInfoNewCrtStor(Map<String, Object> map) throws Exception {
     	return commonDAO.update("PurgInfoMng.insertPurgInfoNewCrtStor", map);
    }

    /**
     * 요청협력사물량합의정보 저장(insertReqCprtcpQtyConsnInfoStor)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertReqCprtcpQtyConsnInfoStor(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("PurgInfoMng.insertReqCprtcpQtyConsnInfoStor", map);
    }

    /**
     * 요청협력사물량합의정보 삭제(deleteReqCprtcpQtyConsnInfoStor)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int deleteReqCprtcpQtyConsnInfoStor(Map<String, Object> map) throws Exception {
     	return commonDAO.delete("PurgInfoMng.deleteReqCprtcpQtyConsnInfoStor", map);
    }    

    /**
     * 요청협력사합의KC인증정보 저장(insertTbRdReqCprtcpConsnKcCertInfo)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertTbRdReqCprtcpConsnKcCertInfo(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("PurgInfoMng.insertTbRdReqCprtcpConsnKcCertInfo", map);
    }

    /**
     * 구매정보 저장(updatePurgInfoUpd)
     * @param map
     * @return
     * @throws Exception
     */
    @Override
    public int updatePurgInfoUpd(Map<String, Object> map) throws Exception {
        return commonDAO.update("PurgInfoMng.updatePurgInfoUpd", map);
    }

    @Override
    public int insertRdPrdPrc(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("PurgInfoMng.insertRdPrdPrc", saveMap);
    }
}