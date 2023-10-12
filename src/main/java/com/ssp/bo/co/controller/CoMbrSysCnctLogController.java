package com.ssp.bo.co.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.co.service.CoMbrSysCnctLogService;
import com.ssp.core.co.service.CoCommonService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.legacy.mall.common.annotations.AccessLevelAdmin;
import com.ssp.core.legacy.mall.model.Admin;

@Controller
@AccessLevelAdmin(Admin.ROLEADMIN.administrator)
@RequestMapping("/co")
public class CoMbrSysCnctLogController {
	private final Logger logger = LoggerFactory.getLogger(CoMbrSysCnctLogController.class); 
	
    @Autowired
    private CoMbrSysCnctLogService coMbrSysCnctLogService;	

    @Autowired
    protected SspPropertyService propertiesService;

    @Autowired
    private CoCommonService coCommonService;
	
	/**
	 *
	 * 1. MethodName : exceptionInfoList
	 * 2. ClassName : CoMbrSysCnctLogController
	 * 3. Comment : 접속 로그 목록 조회
	 *
	 * @param commandMap Map
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping("/select-CoMbrSysCnctLog-list")
	public NexacroResult selectCoMbrSysCnctLogList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
		
		NexacroResult result = new NexacroResult();
		
		try {
			
			//카멜화
			Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);

            //전체 카운트
            int totalCount = coMbrSysCnctLogService.selectCoMbrSysCnctLogListCount(searchMap);
            List<Map<String, Object>> list = new ArrayList<>();
            if( totalCount > 0 ) {
                list  = coMbrSysCnctLogService.selectCoMbrSysCnctLogList(searchMap);
            }

            //set
            result.addVariable("totalCount", totalCount);
            result.addDataSet("ds_output", list);

        } catch ( Exception ne ) {
            String message = "접속 로그 목록 조회 에러";
            logger.error(message);
            throw new LoggingException(new String[]{"CO", "BO", "selectCoMbrSysCnctLogList", message}, ne);
        }
        return result;
	}
	
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : saveScrnPrsn
	 * 2. ClassName : CoScrnPrsnController
	 * 3. Comment : 로그 저장
	 * 4. 작성자 : 박성진
	 * 5. 작성일 : 2022-03-22
	 * </pre>
	 *
	 * @param commandMapList List
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping(value = "/saveLog")
	public NexacroResult saveLog(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMapList) throws Exception{
		NexacroResult result;
		try {
			result = coMbrSysCnctLogService.saveLog(commandMapList);
		} catch ( Exception e ) {
			String message = "로그 저장 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "saveLog", "로그 저장"}, e) {};
		}
		return result;
	}
}
