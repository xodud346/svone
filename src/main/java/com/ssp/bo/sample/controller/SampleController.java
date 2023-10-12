package com.ssp.bo.sample.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.sample.service.SampleService;

/**
 * <pre>
 * @title   
 * @desc    제공된 예제는 샘플용으로 작성된 코드로 참고용으로만
 *          사용하시기 바랍니다.
 * -        Controller marketA Class
 * @package com.nexacro.marketA.web
 * <pre>
 * @author  TOBESOFT
 * @since   2017. 11. 8.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2017. 11. 8.		TOBESOFT	최초작성
 */
@Controller
public class SampleController {
	private Logger log = LoggerFactory.getLogger(SampleController.class);
	
	@Autowired(required=true)
    private SampleService sampleService;
  
	
    @RequestMapping(value = "/sampleSelectMap.do")
	public NexacroResult selectSampleListMap(@ParamDataSet(name = "ds_search", required = false) Map<String,String> searchMap) throws NexacroException{
		
    	List<Map<String,Object>> sampleList = sampleService.selectSampleListMap(searchMap);    	

		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output1", sampleList);

		return result;
	}

}
