/*------------------------------------------------------------------------------
 * NAME : AttrMngDao.java
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
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   AttrMngDao
 * @@desc   속성관리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.10			       최초작성
 */
public interface AttrMngDao {

    /**
     * 속성관리 리스트 조회(selectAttrMng)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectAttrMng(Map<String, Object> map) throws Exception;

    /**
     * 속성관리 리스트 전체 카운트 조회(selectAttrMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectAttrMngTotCount(Map<String, Object> map) throws Exception;

    
    /**
     * 상품속성정보 상세 리스트 조회(selectAttrMngDtl)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectAttrMngDtl(Map<String, Object> map) throws Exception;

    
    /**
     * 속성관리 키값을 조회(selectAttrMngPKey)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectAttrMngPKey(Map<String, Object> map) throws Exception;
    
    /**
     * 속성관리 중복 체크조회(selectAttrMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectAttrMngCount(Map<String, Object> map) throws Exception;

    /**
     * 속성관리 저장(insertAttrMng)
     * @param input
     * @return
     * @throws Exception
     */
    int insertAttrMng(Map<String, Object> map) throws Exception;

    /**
     * 속성관리 수정(updateAttrMng)
     * @param input
     * @return
     * @throws Exception
     */
    int updateAttrMng(Map<String, Object> map) throws Exception;

    


}