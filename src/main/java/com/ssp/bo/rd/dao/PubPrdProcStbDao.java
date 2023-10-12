/*------------------------------------------------------------------------------
 * NAME : PubPrdProcStbDao.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.06  나용철
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   PubPrdProcStbDao
 * @@desc   공용상품처리대기 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.05.06
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.06			       최초작성n */
public interface PubPrdProcStbDao {

	/**
     * 공용상품처리대기 전체 카운트(selectPubPrdProcStbCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectPubPrdProcStbCount(Map<String, Object> map) throws Exception;

	/**
     * 공용상품처리대기 리스트 조회(selectPubPrdProcStb)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPubPrdProcStb(Map<String, Object> map) throws Exception;

}