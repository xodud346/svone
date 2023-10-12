/*------------------------------------------------------------------------------
 * NAME : PurgInfoPkgChgDaoImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.06.02  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.PurgInfoPkgChgDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   PurgInfoPkgChgDaoImpl
 * @@desc   구매정보일괄변경 DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.06.02
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.06.02			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("purgInfoPkgChgDao")
public class PurgInfoPkgChgDaoImpl implements PurgInfoPkgChgDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    /**
     * 구매정보일괄변경 리스트 조회(selectPurgInfoPkgChg)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectPurgInfoPkgChg(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PurgInfoPkgChg.selectPurgInfoPkgChg", map);
    }

    /**
     * 구매정보일괄변경 리스트 중복 체크조회(selectPurgInfoPkgChgCount)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectPurgInfoPkgChgCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("PurgInfoPkgChg.selectPurgInfoPkgChgCount", map);
    }

    /**
     * 제안파일엑셀다운로드 조회(selectPrpsFileExcelDown)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectPrpsFileExcelDown(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PurgInfoPkgChg.selectPrpsFileExcelDown", map);
    }

    /**
     * 요청협력사합의상태내역 저장(insertReqCprtcpConsnStatsDtlsStor)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertReqCprtcpConsnStatsDtlsStor(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("PurgInfoPkgChg.insertReqCprtcpConsnStatsDtlsStor", map);
    }
}