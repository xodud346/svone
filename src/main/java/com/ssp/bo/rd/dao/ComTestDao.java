/*------------------------------------------------------------------------------
 * NAME : ComTestDao.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.09  홍길동
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   ComTestDao
 * @@desc   상품전송정보 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.05.09
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.09			       최초작성n */
public interface ComTestDao {

    /**
     * 상품전송정보 리스트 조회(selectComTest)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectComTest(Map<String, Object> map) throws Exception;

    /**
     * 상품전송정보 리스트 키값을 조회(selectComTestPKey)
     * @param input
     * @return
     * @throws Exception
     */
    String selectComTestPKey(Map<String, Object> map) throws Exception;

    /**
     * 상품전송정보 리스트 중복 체크조회(selectComTestCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectComTestCount(Map<String, Object> map) throws Exception;

    /**
     * 상품전송정보 리스트 저장(insertComTest)
     * @param input
     * @return
     * @throws Exception
     */
    int insertComTest(Map<String, Object> map) throws Exception;

    /**
     * 상품전송정보 리스트 수정(updateComTest)
     * @param input
     * @return
     * @throws Exception
     */
    int updateComTest(Map<String, Object> map) throws Exception;

    /**
     * 상품전송정보 리스트 삭제(deleteComTest)
     * @param input
     * @return
     * @throws Exception
     */
    int deleteComTest(Map<String, Object> map) throws Exception;

	List<Map> selectComTestPrd(Map<String, Object> searchMap) throws Exception;

	List<Map<String, Object>> selectComTestBatch(Map<String, Object> saveData) throws Exception;
	
	int insertComTest1303(Map<String, Object> map) throws Exception;

	int updateComTest3(Map<String, Object> commandMap) throws Exception;

	List<Map> selectComTest1303(Map<String, Object> saveData) throws Exception;

}