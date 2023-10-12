/*------------------------------------------------------------------------------
 * NAME : AttrMngService.java
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

/**
 * <pre>
 *
 * @title   AttrMngService
 * @@desc   속성관리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.10			       최초작성
 */
public interface AttrMngService {

    /**
     * 속성관리 리스트 조회(selectAttrMng)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectAttrMng(Map<String, Object> searchMap) throws Exception;
    
    /**
     * 상품속성정보 상세 리스트 조회(selectAttrMngDtl)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectAttrMngDtl(Map<String, Object> searchMap) throws Exception;

    /**
     * 속성관리 저장(saveAttrMng)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult saveAttrMng( List<Map<String, Object>> saveMap, Map<String, Object> userInfo) throws Exception;
    
    /**
     * 속성관리 수정(saveAttrMng)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult updateAttrMng(Map<String, Object> searchMap, List<Map<String, Object>> saveMap, Map<String, Object> userInfo) throws Exception;


}