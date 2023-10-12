/*------------------------------------------------------------------------------
 * NAME : MetaTblInfoInqDao.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.21  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   MetaTblInfoInqDao
 * @@desc   메타테이블정보조회 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.04.21
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.21			       최초작성n */
public interface MetaTblInfoInqDao {

    /**
     * 메타테이블정보조회(selectMetaTblInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectMetaTblInfoInq(Map<String, Object> map) throws Exception;
}