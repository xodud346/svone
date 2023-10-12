/*------------------------------------------------------------------------------
 * NAME : PrcChgMngDao.java
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
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   PrcChgMngDao
 * @@desc   가격변동이력관리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.10			       최초작성n */
public interface PrcChgMngDao {

    /**
     * 가격변동이력관리 리스트 조회(selectPrcChgMng)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPrcChgMng(Map<String, Object> map) throws Exception;

   
    /**
     * 가격변동이력관리 리스트 총카운트 조회(selectPrcChgMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectPrcChgMngCount(Map<String, Object> map) throws Exception;

    

}