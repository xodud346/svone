/*------------------------------------------------------------------------------
 * NAME : PrdInfoMngService.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.10  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 *
 * @title   PrdInfoMngService
 * @@desc   MRO상품정보 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.10			       최초작성
 */
public interface PrdInfoMngService {

    /**
     * MRO상품정보 리스트 조회(selectPrdInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPrdInfoMng(Map<String, Object> searchMap) throws Exception;

    /**
     * 상품정보관리상세수정 리스트 조회(selectPrdInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPrdInfoMngDtlUpdInq(Map<String, Object> searchMap) throws Exception;

    /**
     * 카테고리속성정보 리스트 조회(selectCatgAttrInfo)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectCatgAttrInfo(Map<String, Object> searchMap) throws Exception;    

    /**
     * 상품이미지리스트다운로드 조회(selectPrdImgListDownInq)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPrdImgListDownInq(Map<String, Object> searchMap) throws Exception;   

    /**
     * MRO상품정보 리스트 저장/수정(savePrdInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult savePrdInfoMng(List<Map<String, Object>> mainMap 
    		                   , List<Map<String, Object>> catgMap
    		                   , List<Map<String, Object>> notiMap
    		                   , List<Map<String, Object>> fileMap
    		                   , Map<String, Object> userInfo
    		                   , String contextRealPath) throws Exception;

}