package com.ssp.bo.sa.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.sa.service.MetaTagInfoService;
import com.ssp.core.common.exception.LoggingException;

/**
 * @title 메타 태그 정보 컨트롤러
 * @author KYH
 * @since 2023.05.23
 * @version 1.0
 * ==============변경 내역 ===============
 * 날짜			변경자			내용
 * -------------------------------------
 * 2023.05.23   김윤호			최초작성
 */

@Controller
@RequestMapping("/sa/meta-tag")
public class MetaTagInfoController {
	private final Logger logger = LoggerFactory.getLogger(MetaTagInfoController.class);
	
	@Autowired
	private MetaTagInfoService metaTagInfoService;
	
	/**
	 * 1.MethodName : selectMetaTagInfoList
	 * 2.ClassName : MetaTagInfoController
	 * 3.Comment : 메타 태그 정보 리스트 조회
	 * 4.작성자 : 김윤호
	 * 5.작성일 : 2023.05.23
	 * 
	 * @param dataMap
	 * @return NexacroResult
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-meta-tag-info-list.do")
	public NexacroResult selectMetaTagInfoList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> dataMap) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			result = metaTagInfoService.selectMetaTagInfoList(dataMap);
		} catch(Exception e) {
			String message = "메타 태그 정보 리스트 조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[] {"SA", "BO", "SSP_BO_OG_01", "메타 태그 정보 리스트 조회"}, e) {};
		}
		
		return result;
	}
	
	/**
	 * 1.MethodName : saveMetaTagInfo
	 * 2.ClassName : MetaTagInfoController
	 * 3.Comment : 메타 태그 정보 상세 
	 * 4.작성자 : 김윤호
	 * 5.작성일 : 2023.05.23
	 * 
	 * @param dataMap
	 * @return NexacroResult
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-meta-tag-info.do")
	public NexacroResult selectMetaTagInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> dataMap) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			result = metaTagInfoService.selectMetaTagInfo(dataMap);
		} catch(Exception e) {
			String message = "메타 태그 정보 상세 에러";
			logger.error(message, e);
			throw new LoggingException(new String[] {"SA", "BO", "SSP_BO_OG_01", "메타 태그 정보 상세"}, e) {};
		}
		
		return result;
	}
	
	/**
	 * 1.MethodName : saveMetaTagInfo
	 * 2.ClassName : MetaTagInfoController
	 * 3.Comment : 메타 태그 정보 저장
	 * 4.작성자 : 김윤호
	 * 5.작성일 : 2023.05.23
	 * 
	 * @param dataMap
	 * @return NexacroResult
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-meta-tag-info.do")
	public NexacroResult saveMetaTagInfo(@ParamDataSet(name = "ds_save", required = false) Map<String, Object> dataMap) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			result = metaTagInfoService.saveMetaTagInfo(dataMap);
		} catch(Exception e) {
			String message = "메타 태그 정보 저장 에러";
			logger.error(message, e);
			throw new LoggingException(new String[] {"SA", "BO", "SSP_BO_OG_01", "메타 태그 정보 저장"}, e) {};
		}
		
		return result;
	}
	
	/**
	 * 1.MethodName : deleteMetaTagInfo
	 * 2.ClassName : MetaTagInfoController
	 * 3.Comment : 메타 태그 정보 삭제
	 * 4.작성자 : 김윤호
	 * 5.작성일 : 2023.05.23
	 * 
	 * @param dataMap
	 * @return NexacroResult
	 * @throws Exception
	 */
	@RequestMapping(value = "/delete-meta-tag-info.do")
	public NexacroResult deleteMetaTagInfo(@ParamDataSet(name = "ds_delete", required = false) Map<String, Object> dataMap) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			result = metaTagInfoService.deleteMetaTagInfo(dataMap);
		} catch(Exception e) {
			String message = "메타 태그 정보 삭제 에러";
			logger.error(message, e);
			throw new LoggingException(new String[] {"SA", "BO", "SSP_BO_OG_01", "메타 태그 정보 삭제"}, e) {};
		}
		
		return result;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
}
