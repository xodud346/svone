/*------------------------------------------------------------------------------
 * NAME : MsdsMngDao.java
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
 * @title   MsdsMngDao
 * @@desc   MSDS관리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성n */
public interface MsdsMngDao {

    /**
     * MSDS관리 목록 조회(selectMsdsMng)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectMsdsMng(Map<String, Object> map) throws Exception;

    /**
     * MSDS관리 목록 카운트(selectMsdsMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectMsdsMngCount(Map<String, Object> map) throws Exception;

    /**
     * MSDS관리 등록(insertMsdsMng)
     * @param input
     * @return
     * @throws Exception
     */
	int insertMsdsMng(Map<String, Object> saveData) throws Exception;

	
	/**
     * MSDS관리 수정(updateMsdsMng)
     * @param input
     * @return
     * @throws Exception
     */
    int updateMsdsMng(Map<String, Object> map) throws Exception;
    
	/**
     * MSDS관리 등록(insertMsdsMng)
     * @param input
     * @return
     * @throws Exception
     */
	int selectMsdsMngDupl(Map<String, Object> saveData) throws Exception;
	
	/**
     * 협력사상품정보(selectCprtcpPrdInfo)
     * @param saveData
     * @return
     * @throws Exception
     */
	int selectCprtcpPrdInfo(Map<String, Object> saveData) throws Exception;
	
	/**
     * MSDS상세 조회(selectMsdsMngDtl)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectMsdsMngDtl(Map<String, Object> searchMap) throws Exception;

	/**
     * 첨부파일내역 조회(selectAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectAttcFileDtlsInq(Map<String, Object> searchMap) throws Exception;
	
	/**
     * 저장 코드체크여부 조회(selectCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectCodeChkYn(Map<String, Object> map) throws Exception;
	
	/**
	 * MSDS 엑셀업로드 후 데이터 처리
	 * @param lsMap
	 * @return
	 * @throws Exception
	 */
	int saveSpRdCprtrMsdsLocMultiUpld(Map<String, Object> map) throws Exception;
}