package com.ssp.bo.rd.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.RndregPrdLstMngService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 * @title  R&D등록상품목록관리 컨트롤러
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author  김진섭
 * @since   2022.03.16
 * @version 1.0
 * @see RndregPrdLstMngController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/rd/rndregPrdLstMng")
public class RndregPrdLstMngController {
	private Logger logger = LoggerFactory.getLogger(RndregPrdLstMngController.class);

	@Resource(name = "rndregPrdLstMngService")
	private RndregPrdLstMngService rndregPrdLstMngService;
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		RndregPrdLstMngController.propertiesService = propertiesService;
	}
	/**
	 * <pre>
	 * 1. MethodName : selectList
	 * 2. Comment    : R&D등록상품목록조회
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/selectPcPrdPrcDtls.do", method = RequestMethod.POST)
	public NexacroResult selectPcPrdPrcDtls(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		
		logger.debug("<<시작>>####################RndregPrdLstMngController####################################");
		logger.debug("searchMap_AAAAA==>:{}",searchMap);
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try {
			
			result = rndregPrdLstMngService.selectPcPrdPrcDtls(searchMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "RD", "BO", "selectList", "R&D등록상품목록조회" }, e) {
			};
		}
		
		logger.debug("searchMap_BBBBB==>:{}",result);
		logger.debug("<<종료>>####################RndregPrdLstMngController####################################");
		
		return result;
    }


}
