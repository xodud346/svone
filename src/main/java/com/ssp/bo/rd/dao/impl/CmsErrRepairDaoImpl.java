/*------------------------------------------------------------------------------
 * NAME : CmsErrRepairDaoImpl.java
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
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.CmsErrRepairDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   CmsErrRepairDaoImpl
 * @@desc   CMS오류 정비 DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.05.10			       최초작성
 */
@SuppressWarnings("unchecked")
@Repository("cmsErrRepairDao")
public class CmsErrRepairDaoImpl implements CmsErrRepairDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    /**
     * CMS오류 정비 리스트 조회(selectCmsErrRepair)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectCmsErrRepair(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("CmsErrRepair.selectCmsErrRepair", map);
    }

    /**
     * CMS오류 정비 카운트 조회(selectCmsErrRepairCount)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectCmsErrRepairCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("CmsErrRepair.selectCmsErrRepairCount", map);
    }

    /**
     * CMS오류정비상세 조회(selectCmsErrRepairDtlInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectCmsErrRepairDtlInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("CmsErrRepair.selectCmsErrRepairDtlInq", map);
    }

    /**
     * CMS오류정보요청 리스트 조회(selectCmsErrRepairReqInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectCmsErrRepairReqInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("CmsErrRepair.selectCmsErrRepairReqInq", map);
    }

    /**
     * MSDS화학물질정보 조회(selectMsdsChmMtlInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectMsdsChmMtlInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("CmsErrRepair.selectMsdsChmMtlInfoInq", map);
    }

    /**
     * 화학물질정보 리스트 조회(selectChmMtlInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectChmMtlInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("CmsErrRepair.selectChmMtlInfoInq", map);
    }

    /**
     * 화학물질추가정보 리스트 조회(selectChmMtlAddInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectChmMtlAddInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("CmsErrRepair.selectChmMtlAddInfoInq", map);
    }

    /**
     * 첨부파일내역 조회(selectAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectAttcFileDtlsInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("CmsErrRepair.selectAttcFileDtlsInq", map);
    }


    /**
     * CMS오류정비 저장(updateSpRdCmsRepair)
     *
     * @param map
     * @return
     * @throws Exception
     */
    @Override
    public int updateSpRdCmsRepair(Map<String, Object> map) throws Exception {
        return commonDAO.update("CmsErrRepair.updateSpRdCmsRepair", map);
    }


    /**
     * CMS오류상세 저장(updateCmsErrDtlStor)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int updateCmsErrDtlStor(Map<String, Object> map) throws Exception {
     	return commonDAO.update("CmsErrRepair.updateCmsErrDtlStor", map);
    }

    /**
     * CMS오류정비MSDS파일 저장(updateSpRdCmsRepairMsds)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int updateSpRdCmsRepairMsds(Map<String, Object> map) throws Exception {
     	return commonDAO.update("CmsErrRepair.updateSpRdCmsRepairMsds", map);
    }


    /**
     * PI 1301 MESSAGE ID : SEQ.NEXTVAL
     * @param map
     * @return
     * @throws Exception
     */
    @Override
    public String selectPIPrdInfoMessageID(Map<String, Object> map) throws Exception {
        return commonDAO.selectStr("CmsErrRepair.selectPIPrdInfoMessageID", map);
    }
}