/*------------------------------------------------------------------------------
 * NAME : CmsErrRepairService.java
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
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.legacy.mall.model.Admin;

/**
 * <pre>
 *
 * @title   CmsErrRepairService
 * @@desc   CMS오류 정비 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.10			       최초작성n */
public interface CmsErrRepairService {

    /**
     * CMS오류 정비 리스트 조회(selectCmsErrRepair)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectCmsErrRepair(Map<String, Object> searchMap) throws Exception;

    /**
     * CMS오류정비상세 조회(selectCmsErrRepairDtlInq)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectCmsErrRepairDtlInq(Map<String, Object> searchMap) throws Exception;

    /**
     * MSDS화학물질정보 조회(selectMsdsChmMtlInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectMsdsChmMtlInfoInq(Map<String, Object> searchMap) throws Exception;

    /**
     * CMS오류상세견적상태내역 저장(saveCmsErrDtlEstmStatsDtlsStor)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult saveCmsErrDtlEstmStatsDtlsStor(Map<String, Object> searchMap
    		                                , List<Map<String, Object>> saveMap
    		                                , Map<String, Object> userInfo) throws Exception;

    /**
     * CMS오류상세 저장(saveCmsErrDtlStor)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult saveCmsErrDtlStor(Map<String, Object> searchMap
                                  , Map<String, Object> mainMap
                                  , List<Map<String, Object>> saveMap
                                  , List<Map<String, Object>> saveFileList
                                  , Map<String, Object> userInfo
                                  , String contextRealPath) throws Exception;


    /**
     * <PRE>
     * 상품정보 PI-1301 호출
     * - 상품전송정보 저장
     * - PI 호출
     * </PRE>
     * @param prdMap
     * @param userInfo
     * @return
     * @throws Exception
     */
    int savePIPrdInfo(List<Map<String, Object>> prdMap, Map<String, Object> userInfo) throws Exception;
}