/*------------------------------------------------------------------------------
 * NAME : PurgInfoPkgChgDao.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.06.02  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   PurgInfoPkgChgDao
 * @@desc   구매정보일괄변경 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.06.02
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.06.02			       최초작성
 */
public interface PurgInfoPkgChgDao {

    /**
     * 구매정보일괄변경 리스트 조회(selectPurgInfoPkgChg)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPurgInfoPkgChg(Map<String, Object> map) throws Exception;

    /**
     * 구매정보일괄변경 리스트 중복 체크조회(selectPurgInfoPkgChgCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectPurgInfoPkgChgCount(Map<String, Object> map) throws Exception;

    /**
     * 제안파일엑셀다운로드 조회(selectPrpsFileExcelDown)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPrpsFileExcelDown(Map<String, Object> map) throws Exception;

    /**
     * 요청협력사합의상태내역 저장(insertReqCprtcpConsnStatsDtlsStor)
     * @param input
     * @return
     * @throws Exception
     */
    int insertReqCprtcpConsnStatsDtlsStor(Map<String, Object> map) throws Exception;
}