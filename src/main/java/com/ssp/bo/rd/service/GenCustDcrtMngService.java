/*------------------------------------------------------------------------------
 * NAME : GenCustDcrtMngService.java
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
 * @title   GenCustDcrtMngService
 * @@desc   일반고객할인율관리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.10			       최초작성n */
public interface GenCustDcrtMngService {

    /**
     * 일반고객할인율관리 리스트 조회(selectGenCustDcrtMng)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectGenCustDcrtMng(Map<String, Object> searchMap) throws Exception;

    /**
     * 일반고객할인율관리 등록(saveGenCustDcrtMng)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult saveGenCustDcrtMng(List<Map<String, Object>> saveMap, Map<String, Object> userInfo) throws Exception;

	/**
     * 구매담당자 여부 조회(selectPurgChrpsnYn)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult selectPurgChrpsnYn(Map<String, Object> searchMap) throws Exception;
	
	/**
     * 일반고객할인율관리 이력 조회(selectGenCustDcrtMngHst)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult selectGenCustDcrtMngHst(Map<String, Object> searchMap) throws Exception;

   
}