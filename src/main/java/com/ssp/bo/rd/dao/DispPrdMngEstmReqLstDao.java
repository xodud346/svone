/*------------------------------------------------------------------------------
 * NAME : DispPrdMngEstmReqLstDao.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.28  newwhite7
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   DispPrdMngEstmReqLstDao
 * @@desc   전시상품관리 견적요청 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성n */
public interface DispPrdMngEstmReqLstDao {

    /**
     * 전시상품관리 견적요청 리스트 조회(selectDispPrdMngEstmReqLst)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectDispPrdMngEstmReqLst(Map<String, Object> map) throws Exception;

    /**
     * 전시상품관리 견적요청 리스트 중복 체크조회(selectDispPrdMngEstmReqLstCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectDispPrdMngEstmReqLstCount(Map<String, Object> map) throws Exception;

}