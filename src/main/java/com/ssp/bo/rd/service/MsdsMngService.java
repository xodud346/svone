/*------------------------------------------------------------------------------
 * NAME : MsdsMngService.java
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
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 *
 * @title   MsdsMngService
 * @@desc   MSDS관리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성n */
public interface MsdsMngService {

    /**
     * MSDS관리 목록 리스트 조회(selectMsdsMng)
     * @param session 
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectMsdsMng(Map<String, Object> searchMap, HttpSession session) throws Exception;
     

	/**
     * MSDS상세 조회(selectMsdsMngDtl)
     * @param searchMap 
     * @return
     * @throws Exception
     */
	NexacroResult selectMsdsMngDtl(Map<String, Object> searchMap) throws Exception;


	/**
     * MSDS관리 상세 수정(saveMsdsMng)
     * @param fileMap 
     * @param contextRealPath 
     * @param session 
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult saveMsdsMng(List<Map<String, Object>> saveMap, Map<String, Object> userInfo,
			List<Map<String, Object>> fileMap, String contextRealPath) throws Exception;
	
	
	/**
     * 협력사 MSDS정보 중복체크(cprtcpValidation)
     * @param searchMap    
     * @return
     * @throws Exception
     */
	NexacroResult cprtcpValidation(List<Map<String, Object>> searchMap) throws Exception;
	
	
	
	
	
	/**
     * 저장 코드체크여부 조회 (selectCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectCodeChkYn(Map<String, Object> searchMap) throws Exception;
	
	/**
	 * MSDS 엑셀업로드 후 데이터 처리
	 * @param lsMap
	 * @return
	 * @throws Exception
	 */
	int saveSpRdCprtrMsdsLocMultiUpld(Map<String, Object> map) throws Exception;
	
	
	/**
	 * MSDS 엑셀업로드 후 데이터 처리 -> 속도개선을 위해 프로시저 JAVA로 변경 
	 * @param lsMap
	 * @return
	 * @throws Exception
	 */
	List<Map<String, Object>> saveSpRdCprtrMsdsLocMultiUpldReNew(List<Map<String, Object>> lsXlsx, String iUserId) throws Exception;
	
}