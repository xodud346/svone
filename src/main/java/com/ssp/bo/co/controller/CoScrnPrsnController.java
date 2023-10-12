package com.ssp.bo.co.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.co.service.CoScrnPrsnService;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  개인화 관리 컨트롤러
 * @package com.ssp.core.co.service.controller
 * <pre>
 * @author  lee
 * @since   2022. 01. 18.
 * @version 1.0
 * @see CoScrnPrsnController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/co/Prsn")
public class CoScrnPrsnController {
	private final Logger log = LoggerFactory.getLogger(CoCommonPopupController.class);
		
	@Autowired
    private CoScrnPrsnService coScrnPrsnService;

	/**
	 * <pre>
	 * 1. MethodName : selectScrnPrsnList
	 * 2. ClassName  : CoScrnPrsnController
	 * 3. Comment    : 개인화  리스트 조회
	 * 4. 작성자       : ksy
	 * 5. 작성일       : 2022-02-17
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/selectScrnPrsnList.do")
	public NexacroResult selectScrnPrsnList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			List<Map<String,Object>> list = coScrnPrsnService.selectScrnPrsnList(searchMap);
			result.addDataSet("ds_output", list);
		} catch (Exception e ) {
			String message = "개인화 리스트 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectScrnPrsnList", "개인화 리스트 조회"}, e) {};
		}
		return result;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : saveScrnPrsn
	 * 2. ClassName : CoScrnPrsnController
	 * 3. Comment : 개인화  저장
	 * 4. 작성자 : ksy
	 * 5. 작성일 : 2022-02-17
	 * </pre>
	 *
	 * @param commandMapList List
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping(value = "/saveScrnPrsn.do")
	public NexacroResult saveScrnPrsn(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMapList) throws Exception{
		NexacroResult result;
		try {
			result = coScrnPrsnService.saveScrnPrsn(commandMapList);
		} catch ( Exception e ) {
			String message = "개인화 저장 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "saveScrnPrsn", "개인화 저장"}, e) {};
		}
		return result;
	}

}
