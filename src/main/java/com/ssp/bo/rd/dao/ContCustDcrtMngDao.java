/*------------------------------------------------------------------------------
 * NAME : ContCustDcrtMngDao.java
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
 * @title   ContCustDcrtMngDao
 * @@desc   계약고객할인율관리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.10			       최초작성n */
public interface ContCustDcrtMngDao {

    /**
     * 계약고객할인율관리 리스트 조회(selectContCustDcrtMng)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectContCustDcrtMng(Map<String, Object> map) throws Exception;

    
    /**
     * 계약고객할인율관리 리스트 총 카운트 조회(selectContCustDcrtMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectContCustDcrtMngCount(Map<String, Object> map) throws Exception;


    /**
     * 계약고객할인율관리 등록/수정(saveContCustDcrtMng)
     * @param input
     * @return
     * @throws Exception
     */
	int saveContCustDcrtMng(Map<String, Object> saveData) throws Exception;

	/**
     * 계약고객할인율관리 영업담당자여부 조회(selectSalsChrpsnYn)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectSalsChrpsnYn(Map<String, Object> searchMap) throws Exception;

	/**
     * 계약고객할인율관리 중복체크(selectContCustDcrtMngDupl)
     * @param input
     * @return
     * @throws Exception
     */
	int selectContCustDcrtMngDupl(Map<String, Object> saveData) throws Exception;

	/**
     * 계약고객할인율관리 이력조회 카운트(selectContCustDcrtMngHstCount)
     * @param input
     * @return
     * @throws Exception
     */
	int selectContCustDcrtMngHstCount(Map<String, Object> searchMap) throws Exception;

	/**
     * 계약고객할인율관리 이력조회(selectContCustDcrtMngHst)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectContCustDcrtMngHst(Map<String, Object> searchMap) throws Exception;

	/**
     * 계약고객할인율관리 등록전 유효기간 설정(updateContCustDcrtMng)
     * @param input
     * @return
     * @throws Exception
     */
	int updateContCustDcrtMng(Map<String, Object> saveData) throws Exception;
    
}