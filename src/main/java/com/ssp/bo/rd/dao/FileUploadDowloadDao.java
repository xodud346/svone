/*------------------------------------------------------------------------------
 * NAME : FileUploadDowloadDao.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.20  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   FileUploadDowloadDao
 * @@desc   R&D파일업로드다운로드서비스 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.04.20
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.20			       최초작성n */
public interface FileUploadDowloadDao {

    /**
     * 첨부파일내역 리스트 조회(selectAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectAttcFileDtlsInq(Map<String, Object> map) throws Exception;

    /**
     * 첨부파일내역 리스트 키값을 조회(selectAttcFileDtlsPKey)
     * @param input
     * @return
     * @throws Exception
     */
    int selectAttcFileDtlsPKey(String map) throws Exception;

    /**
     * 첨부파일내역 리스트 저장(insertFileUploadDowload)
     * @param input
     * @return
     * @throws Exception
     */
    int insertFileUploadDowload(List<HashMap<String, Object>> map) throws Exception;

    /**
     * 첨부파일내역 리스트 수정(updateAttcFileDtls)
     * @param input
     * @return
     * @throws Exception
     */
    int updateAttcFileDtls(Map<String, Object> map) throws Exception;

    /**
     * 첨부파일내역 리스트 삭제(deleteAttcFileDtls)
     * @param input
     * @return
     * @throws Exception
     */
    int deleteAttcFileDtls(Map<String, Object> map) throws Exception;

}