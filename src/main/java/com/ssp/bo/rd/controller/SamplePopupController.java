package com.ssp.bo.rd.controller;

import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ssp.bo.rd.service.PrcChgMngService;
import com.ssp.core.common.annotations.RequestParams;

/**
 * <pre>
 *
 * @title   SamplePopupController
 * @@desc    Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */

//cross domain test
@Controller
@RequestMapping("/rd/prc-chg-mng")
public class SamplePopupController {
	private Logger logger = LoggerFactory.getLogger(PrcChgMngController.class);

	@Resource(name = "prcChgMngService")
	private PrcChgMngService prcChgMngService;
	
	@RequestMapping("/samplePopup2.do") 
	public ModelAndView samplePopup2(HttpServletRequest request, HttpServletResponse response, @RequestParams Map<String, Object> commandMap, HttpSession session) throws Exception{
		ModelAndView mv = new ModelAndView();
		
		mv.addObject("commandMap", commandMap);
		mv.setViewName("/am/rnd/popup/samplePopup2");
		
		return mv;
	}

	@RequestMapping("/samplePopup3.do") 
	public ModelAndView samplePopup3(HttpServletRequest request, HttpServletResponse response, @RequestParams Map<String, Object> commandMap, HttpSession session) throws Exception{
		ModelAndView mv = new ModelAndView();
		
		mv.addObject("commandMap", commandMap);
		mv.setViewName("/am/rnd/popup/samplePopup3");
		
		return mv;
	}
	@RequestMapping("/samplePopup4.do") 
	public ModelAndView samplePopup4(HttpServletRequest request, HttpServletResponse response, @RequestParams Map<String, Object> commandMap, HttpSession session) throws Exception{
		ModelAndView mv = new ModelAndView();
		
		//http://abc.com  : 부모창 도메인
		response.setHeader("X-Frame-Options", "ALLOW-FROM http://devpartners.serveone.co.kr:5731");
		
		mv.addObject("commandMap", commandMap);
		mv.setViewName("/am/rnd/popup/samplePopup4");
		
		return mv;
	}
	
}