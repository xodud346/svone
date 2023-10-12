package com.ssp.bo.pr.controller;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pr.service.PrPersonService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 * @title  SSP 담당자 관리
 * @package com.ssp.bo.pr.controller
 * <pre>
 * @author  조지훈
 * @since   2022.02.22
 * @version 1.0
 * @see PrPersonController
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.02.22    조지훈        최초작성
 */
@Controller
@RequestMapping("/pr/prs-mng")
public class PrPersonController {
    
    private Logger logger = LoggerFactory.getLogger(PrPersonController.class);
    
    @Autowired
    private PrPersonService prPersonService;
    
    @Autowired
	protected SspPropertyService propertiesService;
    
    /**
	 * <pre>
	 * 1. MethodName : selectPersonList
	 * 2. ClassName  : PrPersonController
	 * 3. Comment    : 담당자목록 조회
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.02.22
	 * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-person-list.do")
    public NexacroResult selectPersonList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
    		searchMap.put("CO_CD", admin==null?propertiesService.getString("ssp.cocd"):admin.get("CO_CD"));
            result.addVariable("totalCount", prPersonService.selectPersonCount(searchMap));
            result.addDataSet("personList", prPersonService.selectPersonList(searchMap));
        } catch (Exception e) {
            logger.error("담당자목록 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_20", "담당자목록 조회" }, e);
        }
        return result;
    }
    
    /**
	 * <pre>
	 * 1. MethodName : selectPersonSprCd
	 * 2. ClassName  : PrPersonController
	 * 3. Comment    : 신규등록시 담당자 정/부 구분 조회 (10:정, 20:부)
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.03.07
	 * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-person-sprcd.do")
    public NexacroResult selectPersonSprCd(@ParamDataSet(name = "ds_search", required = true) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
    		searchMap.put("CO_CD", admin==null?propertiesService.getString("ssp.cocd"):admin.get("CO_CD"));
            result.addVariable("sprCd", prPersonService.selectPersonSprCd(searchMap));
        } catch (Exception e) {
            logger.error("담당자 정/부 구분 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_20", "담당자 정/부 구분 조회" }, e);
        }
        return result;
    }
    
    /**
	 * <pre>
	 * 1. MethodName : insertPerson
	 * 2. ClassName  : PrPersonController
	 * 3. Comment    : 담당자 신규등록
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.03.08
	 * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/insert-person.do")
    public NexacroResult insertPerson(@ParamDataSet(name = "ds_insertData", required = true) Map<String, Object> dataMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	//Map<String,Object> admin = (Map<String,Object>)session.getAttribute("userInfo");	//세션정보 가져오기.userInfo에 있다곤 하나 실제로 없음.
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
        	if(admin!=null && !admin.isEmpty()) {
        		dataMap.put("SESSION_OPRTR_ID", admin.get("OPRTR_ID"));
        	}else {
                throw new Exception("세션정보 없음.");
        	}
            prPersonService.insertPerson(dataMap);
        } catch (Exception e) {
            logger.error("담당자 신규등록");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_23", "담당자 신규등록" }, e);
        }
        return result;
    }
    
    /**
	 * <pre>
	 * 1. MethodName : personDuplicateCheck
	 * 2. ClassName  : PrPersonController
	 * 3. Comment    : 담당자 중복체크
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.03.08
	 * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-person-duplicate-check.do")
    public NexacroResult selectPersonDuplicateCheck(@ParamDataSet(name = "ds_search", required = true) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	result.addVariable("psnDupChk", prPersonService.selectPersonDuplicateCheck(searchMap));
        } catch (Exception e) {
            logger.error("담당자 중복체크");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_20", "담당자 중복체크" }, e);
        }
        return result;
    }
    
    /**
	 * <pre>
	 * 1. MethodName : selectPersonDetail
	 * 2. ClassName  : PrPersonController
	 * 3. Comment    : 담당자 상세
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.03.10
	 * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-person-detail.do")
    public NexacroResult selectPersonDetail(@ParamDataSet(name = "ds_search", required = true) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	result.addDataSet("personDetail", prPersonService.selectPersonDetail(searchMap));
        } catch (Exception e) {
            logger.error("담당자 상세 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_20", "담당자 상세" }, e);
        }
        return result;
    }
    
    /**
	 * <pre>
	 * 1. MethodName : updatePerson
	 * 2. ClassName  : PrPersonController
	 * 3. Comment    : 담당자 수정
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.03.10
	 * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/update-person.do")
    public NexacroResult updatePerson(@ParamDataSet(name = "ds_updateData", required = true) Map<String, Object> dataMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	//Map<String,Object> admin = (Map<String,Object>)session.getAttribute("userInfo");	//세션정보 가져오기.userInfo에 있다곤 하나 실제로 없음.
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
        	if(admin!=null && !admin.isEmpty()) {
        		dataMap.put("SESSION_OPRTR_ID", admin.get("OPRTR_ID"));
        	}else {
                throw new Exception("세션정보 없음.");
        	}
            prPersonService.updatePerson(dataMap);
        } catch (Exception e) {
            logger.error("담당자 수정");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_24", "담당자 수정" }, e);
        }
        return result;
    }
    
    @RequestMapping(value = "/select-person-oprtr-org-list.do")
    public NexacroResult selectPersonOprtrOrgList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            result.addDataSet("orgList", prPersonService.selectPersonOprtrOrgList(searchMap));
        } catch (Exception e) {
            logger.error("담당자팀 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_20", "담당자팀 조회 실패" }, e);
        }
        return result;
    }
    
    
    /**
     * <pre>
     * 1. MethodName : callLargeExcelDownload
     * 2. ClassName  : PrPersonController.java
     * 3. Comment    : 엑셀 대용량 다운로드
     * 4. 작성자       : 김영남
     * 5. 작성일       : 2023.01.12
     * </pre>
     *
     * @return NexacroResult
     * @throws Exception 
     */
	@RequestMapping(value = "/call-large-excel-download.do")
	public NexacroResult callLargeExcelDownload(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_outputlarge", prPersonService.callLargeExcelDownload(searchMap, new OdOrderComm(session)));
	    }catch(Exception e) {
	    	throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_20", "대용량다운로드_담당자목록" }, e);
		}
		return result;
    }
    
}
