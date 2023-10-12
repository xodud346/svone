package com.ssp.bo.rd.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.RdPrdChrpsnService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 * @title  R&D상품담당자관리
 * @package com.ssp.bo.pr.controller
 * <pre>
 * @author  김진섭
 * @since   2022.03.27
 * @version 1.0
 * @see RdPrdChrpsnController
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.27    김진섭        최초작성
 */
@Controller
@RequestMapping("/rd/rdPrdChrpsn")
public class RdPrdChrpsnController {
    
    private Logger logger = LoggerFactory.getLogger(RdPrdChrpsnController.class);
    
    @Autowired
    private RdPrdChrpsnService rdPrdChrpsnService;
    
    protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		RdPrdChrpsnController.propertiesService = propertiesService;
	}
    /**
	 * <pre>
	 * 1. MethodName : selectPersonList
	 * 2. ClassName  : RdPrdChrpsnController
	 * 3. Comment    : R&D상품담당자목록 조회
	 * 4. 작성자       : 김진섭
	 * 5. 작성일       : 2022.03.27
	 * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/selectPersonList.do")
    public NexacroResult selectPersonList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
    	
    	logger.debug("<<시작>>####################R&D상품담당자목록Controller####################################");
    	
        NexacroResult result = new NexacroResult();
        if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
        try {
            result.addVariable("totalCount", rdPrdChrpsnService.selectPersonCount(searchMap));
            result.addDataSet("personList", rdPrdChrpsnService.selectPersonList(searchMap));
        } catch (Exception e) {
            logger.error("담당자목록 조회 실패");
            throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_RD_37", "R&D상품담당자목록 조회" }, e);
        }
        
        logger.debug("<<종료>>####################R&D상품담당자목록Controller####################################");
        
        return result;
    }
    
    /**
	 * <pre>
	 * 1. MethodName : selectPersonSprCd
	 * 2. ClassName  : RdPrdChrpsnController
	 * 3. Comment    : 신규등록시 담당자 정/부 구분 조회 (10:정, 20:부)
	 * 4. 작성자       : 김진섭
	 * 5. 작성일       : 2022.03.07
	 * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/selectPersonSprcd.do")
    public NexacroResult selectPersonSprCd(@ParamDataSet(name = "ds_search", required = true) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
        try {
            result.addVariable("sprCd", rdPrdChrpsnService.selectPersonSprCd(searchMap));
        } catch (Exception e) {
            logger.error("담당자 정/부 구분 조회 실패");
            throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_PA_20", "담당자 정/부 구분 조회" }, e);
        }
        return result;
    }
    
    /**
	 * <pre>
	 * 1. MethodName : insertPerson
	 * 2. ClassName  : RdPrdChrpsnController
	 * 3. Comment    : 담당자 신규등록
	 * 4. 작성자       : 김진섭
	 * 5. 작성일       : 2022.03.08
	 * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/insertPerson.do")
    public NexacroResult insertPerson(@ParamDataSet(name = "ds_insertData", required = true) Map<String, Object> dataMap) throws Exception {
        NexacroResult result = new NexacroResult();
        if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
        try {
            rdPrdChrpsnService.insertPerson(dataMap);
        } catch (Exception e) {
            logger.error("담당자 신규등록");
            throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_PA_23", "담당자 신규등록" }, e);
        }
        return result;
    }
    
    /**
	 * <pre>
	 * 1. MethodName : personDuplicateCheck
	 * 2. ClassName  : RdPrdChrpsnController
	 * 3. Comment    : 담당자 중복체크
	 * 4. 작성자       : 김진섭
	 * 5. 작성일       : 2022.03.08
	 * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/selectPersonDuplicateCheck.do")
    public NexacroResult selectPersonDuplicateCheck(@ParamDataSet(name = "ds_search", required = true) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
        try {
        	result.addVariable("psnDupChk", rdPrdChrpsnService.selectPersonDuplicateCheck(searchMap));
        } catch (Exception e) {
            logger.error("담당자 중복체크");
            throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_PA_20", "담당자 중복체크" }, e);
        }
        return result;
    }
    
    /**
	 * <pre>
	 * 1. MethodName : selectPersonDetail
	 * 2. ClassName  : RdPrdChrpsnController
	 * 3. Comment    : 담당자 상세
	 * 4. 작성자       : 김진섭
	 * 5. 작성일       : 2022.03.10
	 * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/selectPersonDetail.do")
    public NexacroResult selectPersonDetail(@ParamDataSet(name = "ds_search", required = true) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
        try {
        	result.addDataSet("personDetail", rdPrdChrpsnService.selectPersonDetail(searchMap));
        } catch (Exception e) {
            logger.error("담당자 상세 조회 실패");
            throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_PA_20", "담당자 상세" }, e);
        }
        return result;
    }
    
    /**
	 * <pre>
	 * 1. MethodName : updatePerson
	 * 2. ClassName  : RdPrdChrpsnController
	 * 3. Comment    : 담당자 수정
	 * 4. 작성자       : 김진섭
	 * 5. 작성일       : 2022.03.10
	 * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/updatePerson.do")
    public NexacroResult updatePerson(@ParamDataSet(name = "ds_updateData", required = true) Map<String, Object> dataMap) throws Exception {
        NexacroResult result = new NexacroResult();
        if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
        try {
            rdPrdChrpsnService.updatePerson(dataMap);
        } catch (Exception e) {
            logger.error("담당자 수정");
            throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_PA_24", "담당자 수정" }, e);
        }
        return result;
    }
    
}
