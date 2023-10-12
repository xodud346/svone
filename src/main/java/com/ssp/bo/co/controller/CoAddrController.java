package com.ssp.bo.co.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.co.service.CoOpenTextService;
import com.ssp.core.co.util.Addr;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;





@Controller
@RequestMapping("/co")
public class CoAddrController {
    private final String resultType = "json"; //요청 변수 설정 (검색결과형식 설정, json)
    
    
    @Autowired
    private SspPropertyService propertiesService;
    
    @Autowired
    private CoOpenTextService coOpenTextService;
  
    @SuppressWarnings("unchecked")
    @RequestMapping(value = "/get-addr")
    public NexacroResult getAddr(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
    	NexacroResult ret = new NexacroResult();
    	try {
            // 요청변수 설정
            String currentPage = StringUtil.getString(commandMap.get("currentPage"));  
            String countPerPage = "10";        									//요청 변수 설정 (페이지당 출력 개수. countPerPage 범위 : 0 < n <= 100)
            String confmKey = propertiesService.getString("api.addr.key"); 		//요청 변수 설정 (승인키)
            String keyword = StringUtil.getString(commandMap.get("keyword"));	//요청 변수 설정 (키워드)
            String apiUri = propertiesService.getString("api.addr.uri");

            TreeMap<String, Object> tmap = Addr.getAddr(currentPage, countPerPage, confmKey, keyword, apiUri, resultType);                
            Map<String, Object> rtnMap = (Map<String, Object>) tmap.get("results");
            Map<String, Object> map = (Map<String, Object>) rtnMap.get("common");
            
            if(!map.get("errorCode").equals("0")) {
            	throw new MessageException(-999, StringUtil.getString(map.get("errorMessage")));
            }
            
            ret.addDataSet("ds_output", rtnMap.get("juso"));
            ret.addVariable("totalCount", map.get("totalCount"));
            return ret;
        } catch (MessageException e){
        	if( e.getCode() == -999){
        		ret.setErrorCode(e.getCode());
        		ret.setErrorMsg(e.getMessage());
				return ret;
        	}else {
        		 throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_PP_28", "주소검색" }, e);
        	}
           
        }
    }
    
    @RequestMapping(value="get-addr-excel", method=RequestMethod.GET)
    public ModelAndView getAddrExcel(HttpServletRequest req, HttpServletResponse response) throws LoggingException {
        try {
            ModelAndView mv = new ModelAndView();
    
            List<Map<String, Object>> maps = new ArrayList<Map<String, Object>>(); 
            
            Map<String, Object> map1 = new HashMap<String, Object>();
            map1.put("col1", "1행1열");
            map1.put("col2", "1행2열");
            map1.put("col3", "1행3열");
            map1.put("col4", 1.2f);
            map1.put("col5", 456);
            
            Map<String, Object> map2 = new HashMap<String, Object>();
            map2.put("col1", "2행1열");
            map2.put("col2", "2행2열");
            map2.put("col3", "2행3열");
            map2.put("col4", 3.4);
            map2.put("col5", 123);
            
            maps.add(map1);
            maps.add(map2);
            
            String[] colName = { "헤더1", "헤더2", "헤더3", "헤더4", "헤더5" };               
            String[] mapName = { "col1",  "col2", "col3", "col4", "col5"};
            int[]    colWidth = { 1000, 15000, 25000, 3000, 3000 };
            
            mv.addObject("excelName", "test.xlsx");
            mv.addObject("sheetName", "test_sheet");
            mv.addObject("colName", colName);
            mv.addObject("mapName", mapName);
            mv.addObject("colWidth", colWidth);
            mv.addObject("maxRowCnt", 50000);
            mv.addObject("list", maps);
                    
            return mv;
        } 
        catch (Exception e) {
            throw new LoggingException(new String[] { "CO", "BO", "get-addr-excel", "주소검색다운로드" }, e);            
        }
    }
    
    @ResponseBody
    @RequestMapping(value="/save-open-text", method=RequestMethod.GET)
    public Map<String, String> saveOpenText(HttpServletRequest req, HttpServletResponse response) throws IOException {
    	Map<String, String> param = new HashMap<String, String>();
    	
    	String r = propertiesService.getString("file.path.root");
    	File f = new File(r + "/test/test.txt");

    	param.put("SAP_BZ_OBJ", "ZDMR_1001");
    	param.put("DOC_TYPE", "ZE_SD1008");
    	param.put("ATFL_NM", f.getName());
    	param.put("REMARK", "OPEN TEXT TEST");
    	param.put("DOC_REG_ID", UUID.randomUUID().toString());
    	param.put("DOC_REG_SEQ", "01");
    	
    	Map<String, String> ret = coOpenTextService.saveOpenTextFile(param, f);    	
    	
    	return ret;
    	
    }
    
    @RequestMapping(value="/get-open-text", method=RequestMethod.GET)
    public void readOpenText(HttpServletRequest req, HttpServletResponse response) throws IOException {
    	String arcDocId = req.getParameter("arcDocId");
    	String fileNm = req.getParameter("fileNm");
    	
    	coOpenTextService.getOpenTextFile(arcDocId, fileNm);
    }
    
    @RequestMapping(value="/del-open-text", method=RequestMethod.GET)
    public void delOpenText(HttpServletRequest req, HttpServletResponse response) throws IOException {
    	String arcDocId = req.getParameter("arcDocId");
    	
    	coOpenTextService.delOpenTextFile(arcDocId);
    	
    }
}
