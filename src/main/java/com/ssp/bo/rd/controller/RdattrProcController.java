package com.ssp.bo.rd.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.RdattrProcService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 * @title  R&D속성 컨트롤러
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author  김진섭
 * @since   2022.03.11
 * @version 1.0
 * @see RdattrProcController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/rd/ctgMng")
public class RdattrProcController {
	private final Logger log = LoggerFactory.getLogger(RdattrProcController.class);
		
	@Autowired
	//private PrPropertyService propertyService;
	private RdattrProcService rdattrProcService;
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		RdattrProcController.propertiesService = propertiesService;
	}
	/**
	 * <pre>
	 * 1. MethodName : selectRdattrProcList
	 * 2. ClassName  : PrRdattrProcController.java
	 * 3. Comment    : R&D속성 목록
	 * 4. 작성자       : 김진섭
	 * 5. 작성일       : 2022.03.11
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/selectRdattrProcList.do")
	public NexacroResult selectRdattrProcList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		
		log.debug("searchMap_sssss555555==>:{}",searchMap);
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try {
			int totalCount = rdattrProcService.selectPropertyCount(searchMap);
			List<Map<String,Object>> list = rdattrProcService.selectPropertyList(searchMap);
			result.addDataSet("ds_output", list);
			result.addVariable("totalCount", totalCount);
						
		} catch (Exception e ) {
			String message = "R&D속성 목록 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"RD", "BO", "selectRdattrProcList", "R&D속성 목록"}, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : personDuplicateCheck
	 * 2. ClassName  : RdPrdChrpsnController
	 * 3. Comment    : 속성명 중복체크
	 * 4. 작성자       : 김진섭
	 * 5. 작성일       : 2022.03.08
	 * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/selectRdAttrDuplicateCheck.do")
    public NexacroResult selectRdAttrDuplicateCheck(@ParamDataSet(name = "ds_search", required = true) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
        try {
        	result.addVariable("rdAttrDupChk", rdattrProcService.selectRdAttrDuplicateCheck(searchMap));
        } catch (Exception e) {
            log.error("속성명 중복체크");
            throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_RD_30", "속성명 중복체크" }, e);
        }
        return result;
    }
    
	/**
	 * <pre>
	 * 1. MethodName : selectRdattrProc
	 * 2. ClassName  : PrRdattrProcController.java
	 * 3. Comment    : R&D속성 상세 
	 * 4. 작성자       : 김진섭
	 * 5. 작성일       : 2022.02.17
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/selectRdattrProc.do")
	public NexacroResult selectRdattrProc(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try {
			List<Map<String,Object>> list = rdattrProcService.selectProperty(searchMap);
			result.addDataSet("ds_output", list);
			
		} catch (Exception e ) {
			String message = "R&D속성 상세 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"RD", "BO", "selectRdattrProc", "R&D속성 상세"}, e) {};
		}
		return result;
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : saveRdattrProc
	 * 2. ClassName  : PrRdattrProcController
	 * 3. Comment 	 : R&D속성 저장
	 * 4. 작성자       : 김진섭
	 * 5. 작성일       : 2022.02.21
	 * </pre>
	 *
	 * @param commandMapList List
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping(value = "/saveRdattrProc.do")
	public NexacroResult saveRdattrProc(@ParamDataSet(name = "ds_detail", required = false) Map<String, Object> commandMap) throws Exception{
		NexacroResult result;
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		log.debug("saveRdattrProc_ssss111==>:{}",commandMap);
		
		try {
			result = rdattrProcService.saveProperty(commandMap);
		} catch ( Exception e ) {
			String message = "R&D속성 저장 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"RD", "BO", "saveRdattrProc", "R&D속성 저장"}, e) {};
		}
		return result;
	}
	
}
