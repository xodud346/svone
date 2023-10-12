/*------------------------------------------------------------------------------
 * NAME : GenCustDcrtMngDao.java
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
 * @title   GenCustDcrtMngDao
 * @@desc   일반고객할인율관리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.10			       최초작성n */
public interface GenCustDcrtMngDao {

    /**
     * 일반고객할인율관리 리스트 조회(selectGenCustDcrtMng)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectGenCustDcrtMng(Map<String, Object> map) throws Exception;

   
    /**
     * 일반고객할인율관리 리스트 총 카운트 조회(selectGenCustDcrtMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectGenCustDcrtMngCount(Map<String, Object> map) throws Exception;

    /**
     * 일반고객할인율관리 등록(saveGenCustDcrtMng)
     * @param input
     * @return
     * @throws Exception
     */
	int saveGenCustDcrtMng(Map<String, Object> saveData) throws Exception;

	/**
     * 구매담당자 여부 조회(selectPurgChrpsnYn)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectPurgChrpsnYn(Map<String, Object> searchMap) throws Exception;

	/**
     * 일반고객할인율관리 중복체크(selectGenCustDcrtMngDupl)
     * @param input
     * @return
     * @throws Exception
     */
	int selectGenCustDcrtMngDupl(Map<String, Object> saveData) throws Exception;

	/**
     * 일반고객할인율 이력조회(selectGenCustDcrtMngHst)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectGenCustDcrtMngHst(Map<String, Object> searchMap) throws Exception;

	/**
     * 일반고객할인율 이력조회 카운트(selectGenCustDcrtMngHstCount)
     * @param input
     * @return
     * @throws Exception
     */
	int selectGenCustDcrtMngHstCount(Map<String, Object> searchMap) throws Exception;

	/**
     * 일반고객할인율 등록전 유효기간 설정
     * @param input
     * @return
     * @throws Exception
     */
	int updateGenCustDcrtMng(Map<String, Object> saveData) throws Exception;

    

}