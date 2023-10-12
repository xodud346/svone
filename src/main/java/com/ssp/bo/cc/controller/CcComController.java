package com.ssp.bo.cc.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.service.CcComService;
import com.ssp.core.common.exception.LoggingException;

@Controller
@RequestMapping("/cc/com")
public class CcComController {
    private final Logger logger = LoggerFactory.getLogger(CcComController.class);

    @Resource(name="ccComService")
    private CcComService ccComService;
    
    /**
    *
    * <pre>
    * 1. MethodName : comCdClsfDtlSearchList
    * 2. ClassName : CoCommonController
    * 3. Comment : 상세코드 리스트를 조회한다.
    * 4. 작성자 : lee
    * 5. 작성일 : 2022-01-25
    * </pre>
    *
    * @param commandMap NexacroResult
    * @return Map
    * @throws Exception NexacroException
    */
   @RequestMapping("/comCdClsfDtlList.do")
   public NexacroResult comCdClsfDtlSearchList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
       NexacroResult result;
       try {
           result = ccComService.comCdClsfDtlSearchList(commandMap);
       } catch ( Exception ne ) {
           String message = "에러로그 목록 조회 에러";
           logger.error(message);
           throw new LoggingException(new String[]{"CO", "BO", "comCdClsfDtlList", message}, ne);
       }
       return result;
   }
   
	/**
	 * <pre>
	 * 1. MethodName : comCdClsfDtlSearchList
	 * 2. ClassName : CoCommonController
	 * 3. Comment : 상세코드 리스트를 조회한다.
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-01-25
	 * </pre>
	 *
	 * @param commandMap NexacroResult
	 * @return Map
	 * @throws Exception NexacroException
	 */
	@RequestMapping("/codes.do")
	public NexacroResult comCodes(@ParamDataSet(name = "dsCodes", required = false) List<Map<String, Object>> listComCodes) throws Exception {
	    NexacroResult result;
	    
	    try {
	        result = ccComService.comCodes(listComCodes);
	    } catch ( Exception ne ) {
	        String message = "상세코드 리스트 조회";
	        logger.error(message);
	        throw new LoggingException(new String[]{"CO", "BO", "comCodes", message}, ne);
	    }
	    
	    return result;
	}
	
	
//	/**
//	* <pre>
//	* 1. MethodName : comCdClsfDtlSearchList
//	* 2. ClassName : CoCommonController
//	* 3. Comment : 상세코드 리스트를 조회한다.
//	* 4. 작성자 : lee
//	* 5. 작성일 : 2022-01-25
//	* </pre>
//	*
//	* @param commandMap NexacroResult
//	* @return Map
//	* @throws Exception NexacroException
//	*/
//	@RequestMapping("/bzplc/oprunit/dept/list.do")
//	public NexacroResult listDept(@ParamDataSet(name = "dsParam", required = false) List<Map<String, Object>> dsParam) throws Exception {
//	    NexacroResult result;
//	    
//	    try {
//	        result = ccComService.listDept(dsParam);
//	    } catch ( Exception ne ) {
//	        String message = "상세코드 리스트 조회";
//	        logger.error(message);
//	        throw new LoggingException(new String[]{"CO", "BO", "comCodes", message}, ne);
//	    }
//	    
//	    return result;
//	}
	
	
	
	/**
	 * <pre>
	 * 1. MethodName : comCdClsfDtlSearchList
	 * 2. ClassName : CoCommonController
	 * 3. Comment : 상세코드 리스트를 조회한다.
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-01-25
	 * </pre>
	 *
	 * @param commandMap NexacroResult
	 * @return Map
	 * @throws Exception NexacroException
	 */
	@RequestMapping("/bzplc/oprunit.do")
	public NexacroResult selectBzplcOprunit(@ParamDataSet(name = "dsParam", required = false) Map<String, Object> param) throws Exception {
		NexacroResult result;
	    
	    try {
	        result = ccComService.selectBzplcOprunit(param);
	    } catch ( Exception ne ) {
	        String message = "그룹,법인,사업장,운영단위 목록 조회";
	        logger.error(message);
	        throw new LoggingException(new String[]{"CO", "BO", "bzplcOprunit", message}, ne);
	    }
	    
	    return result;
	}
	
}
