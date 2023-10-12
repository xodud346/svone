/*------------------------------------------------------------------------------
 * NAME : CmsErrRepairDao.java
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
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   CmsErrRepairDao
 * @@desc   CMS오류 정비 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.10			       최초작성
 */
public interface CmsErrRepairDao {

    /**
     * CMS오류 정비 리스트 조회(selectCmsErrRepair)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectCmsErrRepair(Map<String, Object> map) throws Exception;

    /**
     * CMS오류 정비 카운트 조회(selectCmsErrRepairCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectCmsErrRepairCount(Map<String, Object> map) throws Exception;

    /**
     * CMS오류정비상세 조회(selectCmsErrRepairDtlInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectCmsErrRepairDtlInq(Map<String, Object> map) throws Exception;

    /**
     * CMS오류정보요청 리스트 조회(selectCmsErrRepairReqInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectCmsErrRepairReqInq(Map<String, Object> map) throws Exception;

    /**
     * MSDS화학물질정보 조회(selectMsdsChmMtlInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectMsdsChmMtlInfoInq(Map<String, Object> map) throws Exception;

    /**
     * 화학물질정보 리스트 조회(selectChmMtlInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectChmMtlInfoInq(Map<String, Object> map) throws Exception;

    /**
     * 화학물질추가정보 리스트 조회(selectChmMtlAddInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectChmMtlAddInfoInq(Map<String, Object> map) throws Exception;

    /**
     * 첨부파일내역 조회(selectAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectAttcFileDtlsInq(Map<String, Object> map) throws Exception;

    /**
     * CMS오류정비 저장(updateSpRdCmsRepair)
     * @param input
     * @return
     * @throws Exception
     */
    int updateSpRdCmsRepair(Map<String, Object> map) throws Exception;

    /**
     * CMS오류상세 저장(updateCmsErrDtlStor)
     * @param input
     * @return
     * @throws Exception
     */
    int updateCmsErrDtlStor(Map<String, Object> map) throws Exception;

    /**
     * CMS오류정비MSDS파일 저장(updateSpRdCmsRepairMsds)
     * @param input
     * @return
     * @throws Exception
     */
    int updateSpRdCmsRepairMsds(Map<String, Object> map) throws Exception;

    String selectPIPrdInfoMessageID(Map<String, Object> map) throws Exception;

}