/*------------------------------------------------------------------------------
 * NAME : FileUploadDowloadService.java
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
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.legacy.mall.model.Admin;

/**
 * <pre>
 *
 * @title   FileUploadDowloadService
 * @@desc   첨부파일내역 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.04.20
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.20			       최초작성n */
public interface FileUploadDowloadService {

    /**
     * 첨부파일내역 리스트 조회(selectAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectAttcFileDtlsInq(Map<String, Object> searchMap) throws Exception;

    /**
     * 첨부파일내역 리스트 업로드(saveFileUploadDowload)
     * @param input
     * @return
     * @throws Exception
     */
    void saveFileUploadDowload(HttpServletRequest request, HttpServletResponse response) throws Exception;

    /**
     * 전시요청 추가정보 파일 업로드 저장 (saveAddOptnFileUpload)
     *
     * @param request
     * @param response
     * @throws Exception
     */
    void saveAddOptnFileUpload(HttpServletRequest request, HttpServletResponse response) throws Exception;

    /**
     * 첨부파일내역 업데이트 및 삭제(saveMultiFileDelUpdate)
     * @param input
     * @return
     * @throws Exception
     */
    void saveMultiFileDelUpdate(List<Map<String, Object>> saveMap, String contextRealPath) throws Exception; 
}