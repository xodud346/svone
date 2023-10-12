package com.ssp.bo.cc.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.service.VocCustService;
import com.ssp.core.co.util.CommUtil;

/** 
 * <pre>
 * @title  voc
 * @package com.ssp.bo.cc.controller
 * @ClassName VocCustController
 * </pre>
 * @author  차상영
 * @since   2022. 02. 11.
 * @version 1.0
 * @see CustBgtController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/bo/voc/cust")
public class VocCustController {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
		
	@Autowired
	private VocCustService vocCustService;	
	
	/**
	 * <pre>
	 * 1. MethodName : selectVocStatusList
	 * 2. ClassName  : VocCustController.java
	 * 3. Comment    : voc현황목록 조회
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_cn_08/select-voc-status-list.do")
	public NexacroResult selectVocStatusList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
				
    	List<Map<String,Object>> list = vocCustService.selectVocStatusList(searchMap);    	
    	
		NexacroResult result = new NexacroResult();		
		result.addDataSet("ds_list", list);

		return result;
    }

	/**
	 * <pre>
	 * 1. MethodName : selectVocGclsList
	 * 2. ClassName  : VocCustController.java
	 * 3. Comment    : voc대분류목록 조회
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_cn_08/select-voc-gcls-list.do")
	public NexacroResult selectVocGclsListMap(@ParamDataSet(name = "ds_searchCls", required = false) Map<String, Object> searchMap) throws Exception{
				
    	List<Map<String,Object>> list = vocCustService.selectVocGclsList(searchMap);    	
    	
		NexacroResult result = new NexacroResult();		
		result.addDataSet("ds_gclsList", list);

		return result;
    }

	/**
	 * <pre>
	 * 1. MethodName : selectVocMclasList
	 * 2. ClassName  : VocCustController.java
	 * 3. Comment    : voc중분류목록 조회
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_cn_08/select-voc-mclas-list.do")
	public NexacroResult selectVocMclasList(@ParamDataSet(name = "ds_searchCls", required = false) Map<String, Object> searchMap) throws Exception{
				
    	List<Map<String,Object>> list = vocCustService.selectVocMclasList(searchMap);    	
    	
		NexacroResult result = new NexacroResult();		
		result.addDataSet("ds_mclasList", list);

		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectVocSclsList
	 * 2. ClassName  : VocCustController.java
	 * 3. Comment    : voc소분류목록 조회
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_cn_08/select-voc-scls-list.do")
	public NexacroResult selectVocSclsListMap(@ParamDataSet(name = "ds_searchCls", required = false) Map<String, Object> searchMap) throws Exception{
				
    	List<Map<String,Object>> list = vocCustService.selectVocSclsList(searchMap);    	
    	
		NexacroResult result = new NexacroResult();		
		result.addDataSet("ds_sclsList", list);

		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectVocDtlInfo
	 * 2. ClassName  : VocCustController.java
	 * 3. Comment    : voc상세정보 조회
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_cn_10/select-voc-dtl-info.do")
	public NexacroResult selectVocDtlInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		System.out.println("searchMap : " + searchMap.toString());
		System.out.println("searchMap : " + searchMap.toString());
		System.out.println("searchMap : " + searchMap.toString());
    	Map<String,Object> dtl = vocCustService.selectVocDtlInfo(searchMap);    	
    	List<Map<String,Object>> vocProcList = vocCustService.selectVocProcList(searchMap);
    	Map<String,Object> exceptionDtl = vocCustService.selectExceptionProcDtl(searchMap);   
    	List<Map<String,Object>> exceptionList1 = vocCustService.selectExceptionProcList1(searchMap);
    	List<Map<String,Object>> exceptionList2 = vocCustService.selectExceptionProcList2(searchMap);   
    	List<Map<String,Object>> fileList = null;
    	List<Map<String,Object>> jcList  = vocCustService.selectDlvSrvonInfo(searchMap);
    	List<Map<String,Object>> dlvList = vocCustService.selectDlvHdvInfo(searchMap);
    	
    	
    	if(dtl!=null && !CommUtil.nvl(dtl.get("DOC_REG_ID")).equals("")) { // 첨부파일 리스트 조회
    		fileList = vocCustService.selectVocDocFileList(dtl);
    	}
    	
		NexacroResult result = new NexacroResult();		
		result.addDataSet("ds_dtl", dtl);
		result.addDataSet("ds_vocProcList", vocProcList);
		result.addDataSet("ds_exceptionDtl", exceptionDtl);
		result.addDataSet("ds_exceptionList1", exceptionList1);
		result.addDataSet("ds_exceptionList2", exceptionList2);
		result.addDataSet("ds_fileList", fileList);
		result.addDataSet("ds_jcList", jcList);
		result.addDataSet("ds_dlvList", dlvList);
		
		System.out.println(jcList.size());
		System.out.println(dlvList.size());
		
		return result;
    }

}