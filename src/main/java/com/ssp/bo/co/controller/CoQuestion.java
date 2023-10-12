package com.ssp.bo.co.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ssp.core.co.service.CoOftenQstService;
import com.ssp.core.common.BaseController;
import com.ssp.core.common.annotations.RequestParams;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

public class CoQuestion extends BaseController{

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "propertiesService")
	protected SspPropertyService propertiesService;

	@Resource(name="coOftenQstService")
	private CoOftenQstService coOftenQstService;
	

	/**
	 * <pre>
	 * 1. MethodName : inqFaq
	 * 2. ClassName  : QuestionController.java
	 * 3. Comment    : 자주하는질문
	 * 4. 작성일     : 2022.03.31
	 * </pre>
	 *
	 * @param request
	 * @param commandMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/")
	public ModelAndView inqFaq(HttpServletRequest request, @RequestParams Map<String, Object> commandMap, HttpSession session) throws Exception{
		
		ModelAndView mv = new ModelAndView();

		String sSearchText	= StringUtil.getString(request.getParameter("sSearchText")).trim();
		String rfiTpCd	= StringUtil.getString(request.getParameter("RFI_TP_CD")).trim();
		String oftenQstSeq	= StringUtil.getString(request.getParameter("OFTEN_QST_SEQ")).trim();


		commandMap.put("sSearchText", sSearchText);
		commandMap.put("rfiTpCd", rfiTpCd);

		//자주하는질문 메뉴
		List<Map<String, Object>> inqFaqMenu = this.coOftenQstService.inqFaqMenu(commandMap);

		//자주하는질문 건수
		int inqFaqCnt = this.coOftenQstService.inqFaqCnt(commandMap);

		mv.addObject("sSearchText", sSearchText);
		mv.addObject("commandMap", commandMap);
		mv.addObject("inqFaqMenu", inqFaqMenu);
		mv.addObject("inqFaqCnt", inqFaqCnt);

		// 해당 브랜드로 이동
		mv.setViewName("serveone/ssp/question/inqFaq");
		return mv;
	}

	/**
	 * <pre>
	 * 1. MethodName : indexListAjax
	 * 2. ClassName  : QuestionController.java
	 * 3. Comment    : 자주하는질문
	 * 4. 작성일     : 2022.03.31
	 * </pre>
	 *
	 * @param request
	 * @param commandMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/")
	public ModelAndView inqFaqAjax(HttpServletRequest request, @RequestParams Map<String, Object> commandMap, HttpSession session) throws Exception{
		ModelAndView mv = new ModelAndView();

		//현재 페이지
		if (commandMap.get("devonTargetRow") == null || "".equals(commandMap.get("devonTargetRow"))) {
			commandMap.put("devonTargetRow", "1");
		}

		//페이지당 조회건수
		if (commandMap.get("cntPerPage") == null || "".equals(commandMap.get("cntPerPage")) || "undefined".equals(commandMap.get("cntPerPage"))) {
			commandMap.put("cntPerPage", "10");
		}

		int dTargetRow = Integer.parseInt(commandMap.get("devonTargetRow").toString());
		int cPerPage   = Integer.parseInt(commandMap.get("cntPerPage").toString());

		int pageFr = 0;
		int pageto = 0;

		pageFr = 1 + (cPerPage * (dTargetRow - 1));
		pageto = cPerPage * dTargetRow;

		commandMap.put("pageFr", pageFr);
		commandMap.put("pageto", pageto);

		//자주하는질문 건수
		int inqFaqCnt = this.coOftenQstService.inqFaqCnt(commandMap);

		//자주하는질문 리스트
		List<Map<String, Object>> faqList = this.coOftenQstService.inqFaq(commandMap);

		// 해당 브랜드로 이동
		mv.setViewName("serveone/ssp/question/inqFaqAjax");

		mv.addObject("inqFaqCnt", inqFaqCnt);
		mv.addObject("faqList", faqList);
		mv.addObject("commandMap", commandMap);

	return mv;
    }
	
}
