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
 * 2022.07.08  이택우
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service;

import java.util.Map;

/**
 * <pre>
 *
 * @title   RdPrcChgReqPkgService
 * @@desc   메일 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.07.11
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.07.11			       최초작성n */

public interface RdPrcChgReqPkgService {

	
	/**
	 * 가격변경요청 메일(sendEmailRdPrcChgReqPkg)
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void sendEmailRdPrcChgReqPkg(Map<String, Object> commandMap) throws Exception;
}