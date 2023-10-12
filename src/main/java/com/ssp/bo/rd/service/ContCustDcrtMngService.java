/*------------------------------------------------------------------------------
 * NAME : ContCustDcrtMngService.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.10  나용철
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.legacy.mall.model.Admin;

/**
 * <pre>
 *
 * @title   ContCustDcrtMngService
 * @@desc   계약고객할인율관리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.10			       최초작성n */
public interface ContCustDcrtMngService {

    /**
     * 계약고객할인율관리 리스트 조회(selectContCustDcrtMng)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectContCustDcrtMng(Map<String, Object> searchMap) throws Exception;

    /**
     * 계약고객할인율관리 등록/수정(saveContCustDcrtMng)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult saveContCustDcrtMng(List<Map<String, Object>> saveMap, Map<String, Object> bzplcMap,
			Map<String, Object> userInfo) throws Exception;

	/**
     * 계약고객할인율관리 영업담당자여부 조회(selectSalsChrpsnYn)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult selectSalsChrpsnYn(Map<String, Object> searchMap) throws Exception;

	/**
     * 계약고객할인율관리 이력조회(selectContCustDcrtMngHst)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult selectContCustDcrtMngHst(Map<String, Object> searchMap) throws Exception;
   
}