/*------------------------------------------------------------------------------
 * NAME : PrdChrpsnMngDao.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.02  홍길동
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   PrdChrpsnMngDao
 * @@desc   상품담당자관리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.05.02
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.02			       최초작성n */
public interface PrdChrpsnMngDao {

    /**
     * 상품담당자관리 리스트 조회(selectPrdChrpsnMng)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPrdChrpsnMng(Map<String, Object> map) throws Exception;

    /**
     * 상품담당자관리 리스트 중복 체크조회(selectPrdChrpsnMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectPrdChrpsnMngCount(Map<String, Object> map) throws Exception;

    /**
     * 상품담당자 상세 조회(selectPrdChrpsnMngDtl)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectPrdChrpsnMngDtl(Map<String, Object> searchMap) throws Exception;

	/**
     * 상품담당자 수정(updatePrdChrpsnMng)
     * @param input
     * @return
     * @throws Exception
     */
	int updatePrdChrpsnMng(Map<String, Object> saveData) throws Exception;

	/**
     * 상품담당자 등록(insertPrdChrpsnMng)
     * @param input
     * @return
     * @throws Exception
     */
	int insertPrdChrpsnMng(Map<String, Object> saveData) throws Exception;
	
	/**
     * 상품담당자 담당자 중복체크(selectPrdChrpsnMngDupl)
     * @param input
     * @return
     * @throws Exception
     */
	int selectPrdChrpsnMngDupl(Map<String, Object> saveData) throws Exception;

	/**
     * 상품담당자 담당자구분 체크(selectPrdChrpsnMngSprChk)
     * @param input
     * @return
     * @throws Exception
     */
	int selectPrdChrpsnMngSprChk(Map<String, Object> saveData) throws Exception;
	
	/**
     * 신규 저장 코드체크여부 조회(selectCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectCodeChkYn(Map<String, Object> map) throws Exception;
    
    /**
     * 수정 코드체크여부 조회(selectUpCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectUpCodeChkYn(Map<String, Object> map) throws Exception;
}