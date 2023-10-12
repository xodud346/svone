/*------------------------------------------------------------------------------
 * NAME : PurgInfoPkgChgMngDao.java
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
 * @title   PurgInfoPkgChgMngDao
 * @@desc   업체공통클래스(샘풀) Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성n */
public interface PurgInfoPkgChgMngDao {

    /**
     * 업체공통클래스(샘풀) 리스트 조회(selectPurgInfoPkgChgMng)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPurgInfoPkgChgMng(Map<String, Object> map) throws Exception;

    /**
     * 업체공통클래스(샘풀) 리스트 키값을 조회(selectPurgInfoPkgChgMngPKey)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPurgInfoPkgChgMngPKey(Map<String, Object> map) throws Exception;

    /**
     * 업체공통클래스(샘풀) 리스트 중복 체크조회(selectPurgInfoPkgChgMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectPurgInfoPkgChgMngCount(Map<String, Object> map) throws Exception;

    /**
     * 업체공통클래스(샘풀) 리스트 저장(insertPurgInfoPkgChgMng)
     * @param input
     * @return
     * @throws Exception
     */
    int insertPurgInfoPkgChgMng(Map<String, Object> map) throws Exception;

    /**
     * 업체공통클래스(샘풀) 리스트 수정(updatePurgInfoPkgChgMng)
     * @param input
     * @return
     * @throws Exception
     */
    int updatePurgInfoPkgChgMng(Map<String, Object> map) throws Exception;

    /**
     * 업체공통클래스(샘풀) 리스트 삭제(deletePurgInfoPkgChgMng)
     * @param input
     * @return
     * @throws Exception
     */
    int deletePurgInfoPkgChgMng(Map<String, Object> map) throws Exception;

}