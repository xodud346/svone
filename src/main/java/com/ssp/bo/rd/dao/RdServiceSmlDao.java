/*------------------------------------------------------------------------------
 * NAME : RdServiceSmlDao.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.20  홍길동
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   RdServiceSmlDao
 * @@desc   업체공통클래스(샘풀) Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.04.20
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.20			       최초작성n */
public interface RdServiceSmlDao {

    /**
     * 업체공통클래스(샘풀) 리스트 조회(selectRdServiceSml)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectRdServiceSml(Map<String, Object> map) throws Exception;

    /**
     * 업체공통클래스(샘풀) 리스트 키값을 조회(selectRdServiceSmlPKey)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectRdServiceSmlPKey(Map<String, Object> map) throws Exception;

    /**
     * 업체공통클래스(샘풀) 리스트 중복 체크조회(selectRdServiceSmlCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectRdServiceSmlCount(Map<String, Object> map) throws Exception;

    /**
     * 업체공통클래스(샘풀) 리스트 저장(insertRdServiceSml)
     * @param input
     * @return
     * @throws Exception
     */
    int insertRdServiceSml(Map<String, Object> map) throws Exception;

    /**
     * 업체공통클래스(샘풀) 리스트 수정(updateRdServiceSml)
     * @param input
     * @return
     * @throws Exception
     */
    int updateRdServiceSml(Map<String, Object> map) throws Exception;

    /**
     * 업체공통클래스(샘풀) 리스트 삭제(deleteRdServiceSml)
     * @param input
     * @return
     * @throws Exception
     */
    int deleteRdServiceSml(Map<String, Object> map) throws Exception;

}