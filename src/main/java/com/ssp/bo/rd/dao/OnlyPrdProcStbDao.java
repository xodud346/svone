/*------------------------------------------------------------------------------
 * NAME : OnlyPrdProcStbDao.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.06  나용철
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   OnlyPrdProcStbDao
 * @@desc   전용상품 처리대기 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.05.06
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.06			       최초작성n */
public interface OnlyPrdProcStbDao {

    /**
     * 전용상품 처리대기 리스트 조회(selectOnlyPrdProcStb)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectOnlyPrdProcStb(Map<String, Object> map) throws Exception;

   
    /**
     * 전용상품 처리대기 전체 조회(selectOnlyPrdProcStbCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectOnlyPrdProcStbCount(Map<String, Object> map) throws Exception;
    
    /**
     * 전용상품 처리대기 기준판매가 수정(updateOnlyPrdBssSalsprcProc)
     * @param input
     * @return
     * @throws Exception
     */
    int updateOnlyPrdBssSalsprcProc(Map<String, Object> map) throws Exception;

	/**
     * 사업장의 운영단위 조회
     * @param input
     * @return
     * @throws Exception
     */
	List<Map<String, Object>> selectOprUnitList(Map<String, Object> map) throws Exception;
	
	/**
     * 진열상태 조회
     * @param input
     * @return
     * @throws Exception
     */
	String selectOldDispStatsCd(Map<String, Object> map) throws Exception;
	
}