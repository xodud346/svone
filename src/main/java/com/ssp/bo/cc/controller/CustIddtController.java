package com.ssp.bo.cc.controller;

import com.ssp.bo.cc.CCUtils;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.service.CustIddtService;
import com.ssp.bo.sa.service.SaComService;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  산업군조회 목록/상세/등록/수정
 * @package com.ssp.bo.cc.controller
 * <pre>
 * @author  moonjooh
 * @since   2022. 02. 21.
 * @version 1.0
 * @see CustIddtController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.02.21		최초작성
 */
@Controller
@RequestMapping("/bo/cust/iddt")
public class CustIddtController {
	private final Logger log = LoggerFactory.getLogger(CustIddtController.class);
		
	@Resource(name="custIddtService") 
	private CustIddtService custIddtService;
	
	@Autowired
	private SaComService saComService;
	/**
	 * <pre>
	 * 1. MethodName : selectCustGrdList
	 * 2. ClassName  : CustIddtController.java
	 * 3. Comment    : 산업군조회 목록
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 21.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-cust-iddt-list.do")
	public NexacroResult selectCustDept(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result = custIddtService.selectCustIddtList(searchMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_52", "산업군조회 목록" }, e) {
			};
		}

		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : saveCustIddt
	 * 2. ClassName  : CustIddtController.java
	 * 3. Comment    : 산업군조회 저장
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 21.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/save-cust-iddt.do")
	public NexacroResult saveCustIddt(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> searchMap, HttpSession session) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CCUtils.prefixSessionList(searchMap, session);
			result = custIddtService.saveCustIddt(searchMap);
		} catch(Exception e) {
			String message = "산업군조회 저장 에러";
			log.error(message);
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_52", "산업군조회 수정" }, e) {
			};
		}

		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : deleteCustIddt
	 * 2. ClassName  : CustIddtController.java
	 * 3. Comment    : 산업군조회 삭제
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 21.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/delete-cust-iddt.do")
	public NexacroResult deleteCustIddt(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output1", custIddtService.deleteCustIddt(searchMap));	
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_52", "산업군조회 삭제" }, e) {
			};
		}

		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectCombo
	 * 2. ClassName  : CustIddtController.java
	 * 3. Comment    : 산업군조회 영업담당 콤보박스 조회 - 미사용
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 03. 25.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-combo-data.do")
	public NexacroResult selectCombo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result = custIddtService.selectCombo(searchMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_52", "산업군조회 영업담당 콤보박스 조회" }, e) {
			};
		}

		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectIddtMktgInfo
	 * 2. ClassName  : CustIddtController.java
	 * 3. Comment    : 산업군 패키지 정보 조회 
	 * 4. 작성자       : dongwon
	 * 5. 작성일       : 2023. 06. 05.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-IddtMktgInfo.do")
	public NexacroResult selectIddtMktgInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result = custIddtService.selectIddtMktgInfo(searchMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_52_1", "산업군 패키지 정보 조회" }, e) {
			};
		}

		return result;
    }
	
	
	/**
	 * <pre>
	 * 1. MethodName : saveIddtMktgInfo
	 * 2. ClassName  : CustIddtController.java
	 * 3. Comment    : 산업군 패키지 정보 저장 
	 * 4. 작성자       : dongwon
	 * 5. 작성일       : 2023. 06. 05.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/save-IddtMktgInfo.do")
	public NexacroResult saveIddtMktgInfo(@ParamDataSet(name = "ds_iddtMktgInfo", required = false) Map<String, Object> saveInfo, HttpSession session) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			saveInfo = CCUtils.prefixSession(saveInfo, session);
			custIddtService.saveIddtMktgInfo(saveInfo);
			
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_52_1", "산업군 패키지 정보 저장" }, e) {
			};
		}

		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : iddtIconFileUpload
	 * 2. ClassName  : CustIddtController.java
	 * 3. Comment    : 산업군 패키지 아이콘 이미지 저장
	 * 4. 작성자       : dongwon
	 * 5. 작성일       : 2023. 06. 08.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/iddtIcon-fileUpload.do")
	public NexacroResult iddtIconFileUpload(HttpServletRequest request) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result = saComService.fileUpload(request);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_52_1", "산업군 패키지 아이콘 이미지 저장" }, e) {
			};
		}

		return result;
    }
	
		
}
