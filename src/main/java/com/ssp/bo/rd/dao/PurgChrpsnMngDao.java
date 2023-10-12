/*------------------------------------------------------------------------------
 * NAME : PurgChrpsnMngDao.java
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
 * @title   PurgChrpsnMngDao
 * @@desc   구매담당자 관리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성n */
public interface PurgChrpsnMngDao {

    /**
     * 구매담당자 관리 리스트 조회(selectPurgChrpsnMng)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPurgChrpsnMng(Map<String, Object> map) throws Exception;

    /**
     * 구매담당자 관리 리스트 중복 체크조회(selectPurgChrpsnMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectPurgChrpsnMngCount(Map<String, Object> map) throws Exception;
    
    /**
     * 구매담당자 상세 조회(selectPurgChrpsnMngDtl)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectPurgChrpsnMngDtl(Map<String, Object> searchMap) throws Exception;

	/**
     * 구매담당자 수정(updatePurgChrpsnMng)
     * @param input
     * @return
     * @throws Exception
     */
	int updatePurgChrpsnMng(Map<String, Object> saveData) throws Exception;

	/**
     * 구매담당자 등록(insertPurgChrpsnMng)
     * @param input
     * @return
     * @throws Exception
     */
	int insertPurgChrpsnMng(Map<String, Object> saveData) throws Exception;
	
	/**
     * 구매담당자 담당자 중복체크(selectPurgChrpsnMngDupl)
     * @param input
     * @return
     * @throws Exception
     */
	int selectPurgChrpsnMngDupl(Map<String, Object> saveData) throws Exception;

	/**
     * 구매담당자 담당자구분 체크(selectPurgChrpsnMngSprChk)
     * @param input
     * @return
     * @throws Exception
     */
	int selectPurgChrpsnMngSprChk(Map<String, Object> saveData) throws Exception;
	
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