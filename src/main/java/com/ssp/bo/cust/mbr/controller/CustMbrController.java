package com.ssp.bo.cust.mbr.controller;

import java.util.ArrayList;

import java.util.HashMap;
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
import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cust.mbr.service.CustMbrService;
import com.ssp.core.cc.service.MbrComHstService;
import com.ssp.core.co.service.CoCommonSendService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.model.MailModel;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.common.util.MailHtmlUtil;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title   
 * @desc    회원관리를 위한 클래스 입니다.
 * -        CustMbrController Class
 * @package com.ssp.bo.cust.mbr
 * <pre>
 * @author  신경민
 * @since   2022. 02. 10
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜				변경자		내용
 * ------------------------------------------------
 * 2022. 02. 10.	신경민		최초작성
 * 2022. 02. 22.	문주환		휴면회원관리 목록 추가
 * 2022. 02. 24.	문주환		휴면회원관리 상세/수정 추가
 * 2022. 02. 25.	문주환		탈퇴회원관리 목록, 상세 추가
 */
@Controller
@RequestMapping(value ="/bo/cust/mbr")
public class CustMbrController {
	private Logger log = LoggerFactory.getLogger(CustMbrController.class);
	
	@Resource(name = "propertiesService")
	protected SspPropertyService propertiesService;
	@Resource(name = "coCommonSendService")
	private CoCommonSendService coCommonSendService;
	@Resource(name = "mbrComHstService")
	private MbrComHstService mbrComHstService; 
	
	@Autowired(required=true)
	private CustMbrService custMbrService;
	
	@RequestMapping(value = "/selectCodeList.do")
	public NexacroResult selectCodeList() throws NexacroException{
		return custMbrService.selectCodeList();
		
	}
	
	@RequestMapping(value = "/ssp_bo_ma_12.do")
	public NexacroResult searchList(  @ParamDataSet(name = "ds_search", required = false) Map<String,Object> searchMap) throws NexacroException{
		
		return custMbrService.selectMbrList(searchMap);
	}
	
	//일괄상태변경
	@RequestMapping(value = "/updateMbrUseCdList.do")
	public NexacroResult updateMbrUseCdList(HttpSession session, @ParamDataSet(name = "ds_updateInfoList", required = false) List<Map<String,String>> updateInfoList) throws NexacroException{
		NexacroResult result = new NexacroResult();	
		
		log.debug("updateInfoList:{}",updateInfoList);		
		result.addDataSet("ds_resMap", custMbrService.updateMbrUseCdList(updateInfoList, new CCUtils(session)));		
		
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectDrmcMbrList
	 * 2. ClassName  : CustMbrController.java
	 * 3. Comment    : 휴면회원관리 목록 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 22.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-drmc-mbr-list.do")
	public NexacroResult selectDrmcMbrList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{	
		NexacroResult result = new NexacroResult();		
		try {
			//CCUtils.initSession(session); 
			result.addDataSet("ds_output1", custMbrService.selectDrmcMbrList(searchMap, new CCUtils(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_22", "휴면회원관리 목록 조회" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectDrmcMbrDeatil
	 * 2. ClassName  : CustMbrController.java
	 * 3. Comment    : 휴면회원관리 상세 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 23.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-drmc-mbr-deatil.do")
	public NexacroResult selectDrmcMbrDeatil(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result = custMbrService.selectDrmcMbrDeatil(searchMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_23", "휴면회원관리 상세 조회" }, e) {
			};
		}

		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : saveDrmcMbrDeatil
	 * 2. ClassName  : CustDeptController.java
	 * 3. Comment    : 휴면회원관리 상세 수정
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 23.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/save-drmc-mbr-deatil.do", method = RequestMethod.POST)
	public NexacroResult saveDrmcMbrDeatil(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> inputList, HttpSession session) throws Exception{	
		NexacroResult result = new NexacroResult();
		try {
			inputList = CCUtils.prefixSessionList(inputList, session);
			result = custMbrService.saveDrmcMbrDeatil(inputList);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_23", "휴면회원관리 상세 수정" }, e) {
			};
		}
		return result;
    }

	/**
	 * <pre>
	 * 1. MethodName : selectDrmcMbrAprvl
	 * 2. ClassName  : CustMbrController.java
	 * 3. Comment    : 휴면회원관리 결재자관리 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 23.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-drmc-mbr-aprvl.do")
	public NexacroResult selectDrmcMbrAprvl(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result = custMbrService.selectDrmcMbrAprvl(searchMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_23", "휴면회원관리 결재자관리 조회" }, e) {
			};
		}

		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustGrdList
	 * 2. ClassName  : CustDeptController.java
	 * 3. Comment    : 탈퇴회원관리 목록
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 25.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-lev-mbr-list.do")
	public NexacroResult selectMbrHistPop(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			//CCUtils.initSession(session);  
			result.addDataSet("ds_output1", custMbrService.selectLevMbrList(searchMap, new CCUtils(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_24", "탈퇴회원관리 목록" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustGrdList
	 * 2. ClassName  : CustDeptController.java
	 * 3. Comment    : 탈퇴회원관리 상세
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 25.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-lev-mbr-deatail.do")
	public NexacroResult selectLevMbrDeatail(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output1", custMbrService.selectLevMbrDeatail(searchMap));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_25", "탈퇴회원관리 상세" }, e) {
			};
		}
		return result;
    }


	/**
	 * <pre>
	 * 1. MethodName : selectMbrRegCodeList
	 * 2. ClassName  : CustMbrController.java
	 * 3. Comment    : 회원생성 코드 조회
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/selectMbrRegCodeList.do")
	public NexacroResult selectMbrRegCodeList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
			
    	List<Map<String,Object>> list = custMbrService.selectMbrRegCodeList();    	
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_codeList", list);

		return result;
    }


	/**
	 * <pre>
	 * 1. MethodName : selectMbrRegCustSprCd
	 * 2. ClassName  : CustMbrController.java
	 * 3. Comment    : 회원생성 고객유형 조회
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/selectMbrRegCustSprCd.do")
	public NexacroResult selectMbrRegCustSprCd(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		
    	Map<String,Object> map = custMbrService.selectMbrRegCustSprCd(searchMap);    	
    	
    	if("20".equals(StringUtil.getString(map.get("CUST_SPR_CD")))) {
    		List<Map<String,Object>> ds_otherInfo = null;
    		
    		ds_otherInfo = custMbrService.selectMbrOtherInfo(searchMap);
    		
    		result.addDataSet("ds_otherInfo", ds_otherInfo);
    	}
    	
		
		result.addDataSet("ds_temp", map);
		
		return result;
    }


	/**
	 * <pre>
	 * 1. MethodName : insertMbrRegDtl
	 * 2. ClassName  : CustMbrController.java
	 * 3. Comment    : 회원생성 정보 저장
	 * 4. 작성자       : csy
	 * 5. 작성일       : 2022. 02. 17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/insertMbrRegDtl.do", method = RequestMethod.POST)
	public NexacroResult insertMbrRegDtl(HttpSession session, @ParamDataSet(name = "ds_dtl", required = false) Map<String, Object> map, @ParamDataSet(name = "ds_aprvlList", required = false) List<Map<String, Object>> aprvlList, @ParamDataSet(name = "ds_orderList", required = false) List<Map<String, Object>> orderList) throws Exception{	
		NexacroResult result = new NexacroResult();
		
		try {
			// 부서 상태 조회 후 부서상태가 N 일 경우 alert 발생 
			Map<String,Object> deptUseYn = new HashMap<>();
			Map<String,Object> retMap = new HashMap<>();

			deptUseYn = custMbrService.selectDeptInfo(map);
			
			if(deptUseYn != null && ("N".equals(deptUseYn.get("USE_YN")) || "N".equals(deptUseYn.get("BZPLC_USE_YN")))) {
				retMap.put("msg","소속 사업장 또는 부서가 미사용 상태 입니다.");
				result.addDataSet("ds_resMap", retMap);
			}
			if(deptUseYn != null && "Y".equals(deptUseYn.get("USE_YN")) && "Y".equals(deptUseYn.get("BZPLC_USE_YN"))) {
				long mbrHstSeq = mbrComHstService.selectMbrComHstSeq(map);
				@SuppressWarnings("unchecked")
				Map<String, Object> beforeMbrInfo =new HashMap<>();
		    	
				retMap = custMbrService.insertMbrRegDtl(map, aprvlList, orderList, new CCUtils(session));
				beforeMbrInfo.put("coCd",map.get("CO_CD"));
				beforeMbrInfo.put("hstSprCd","C");
				beforeMbrInfo.put("mbrId", retMap.get("MBR_ID"));
	
				mbrComHstService.insertMbrComHst(mbrHstSeq,beforeMbrInfo,null,null); //회원 공통이력
				mbrComHstService.insertMbrHst(mbrHstSeq,beforeMbrInfo);		//회원 상세 이력
				mbrComHstService.insertMbrAuthHst(mbrHstSeq,beforeMbrInfo);	//회원 제어 권한 이력
				mbrComHstService.insertMbrAprvlHst(mbrHstSeq,beforeMbrInfo);	//회원 결재선 이력
				mbrComHstService.insertMbrloginInfoHst(mbrHstSeq,beforeMbrInfo);	//회원 로그인ID 이력 
				
				result.addDataSet("ds_search", retMap);
			}
		}
		 catch (Exception e) {
			 throw new LoggingException(new String[] { "CC", "BO", "insertMbrRegDtl", "회원 정보 생성" }, e) {	};
		}
		
		return result;
    }


	/**
	 * <pre>
	 * 1. MethodName : selectMbrRegDupCheck
	 * 2. ClassName  : CustMbrController.java
	 * 3. Comment    : 회원생성 로그인 중복 체크
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/selectMbrRegDupCheck.do")
	public NexacroResult selectMbrRegDupCheck(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
			
    	Map map = custMbrService.selectMbrRegDupCheck(searchMap);    	
    	    
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_dupId", map);

		return result;
    }

	/**
	 * <pre>
	 * 1. MethodName : selectMbrRegDtl
	 * 2. ClassName  : CustMbrController.java
	 * 3. Comment    : 회원생성 상세정보 조회
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/selectMbrRegDtl.do")
	public NexacroResult selectMbrRegDtl(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
			
    	Map map = custMbrService.selectMbrRegDtl(searchMap);   
    	
    	searchMap.put("MBR_APRVL_SPR_CD", "A"); //결재자
    	List<Map<String,Object>> aprvlList = custMbrService.selectMbrRegAprvl(searchMap);   
    	searchMap.put("MBR_APRVL_SPR_CD", "O"); //발주자
    	List<Map<String,Object>> orderList = custMbrService.selectMbrRegAprvl(searchMap);   
    	
    	List<Map<String,Object>> ds_otherInfo = null;
    	if("20".equals(StringUtil.getString(map.get("CUST_SPR_CD")))) {
    		ds_otherInfo = custMbrService.selectMbrOtherInfo(map);
    	}
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_dtl", map);
		result.addDataSet("ds_aprvlList", aprvlList);
		result.addDataSet("ds_orderList", orderList);
		result.addDataSet("ds_otherInfo", ds_otherInfo);
		
		return result;
    }
	

	/**
	 * <pre>
	 * 1. MethodName : updateMbrRegDtl
	 * 2. ClassName  : CustMbrController.java
	 * 3. Comment    : 회원생성 정보 저장
	 * 4. 작성자       : csy
	 * 5. 작성일       : 2022. 02. 17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */

	@RequestMapping(value = "/updateMbrRegDtl.do", method = RequestMethod.POST)
	public NexacroResult updateMbrRegDtl(HttpSession session, @ParamDataSet(name = "ds_dtl", required = false) Map<String, Object> map, @ParamDataSet(name = "ds_aprvlList", required = false) List<Map<String, Object>> aprvlList, @ParamDataSet(name = "ds_orderList", required = false) List<Map<String, Object>> orderList, @ParamDataSet(name = "ds_otherInfo", required = false) List<Map<String, Object>> ds_otherInfo) throws Exception{	
		NexacroResult result = new NexacroResult();
		
		try {
			// 부서 상태 조회 후 부서상태가 N 일 경우 alert 발생 
			Map<String,Object> deptUseYn = new HashMap<>();
			Map<String,Object> resMap = new HashMap<>();

			deptUseYn = custMbrService.selectDeptInfo(map);
			if(deptUseYn != null && ("N".equals(deptUseYn.get("USE_YN")) || "N".equals(deptUseYn.get("BZPLC_USE_YN")))) {
				resMap.put("msg","소속 사업장 또는 부서가 미사용 상태 입니다.");
				result.addDataSet("ds_resMap", resMap);
			}

			if(deptUseYn != null && "Y".equals(deptUseYn.get("USE_YN")) && "Y".equals(deptUseYn.get("BZPLC_USE_YN"))) {
				long mbrHstSeq = mbrComHstService.selectMbrComHstSeq(map);
				@SuppressWarnings("unchecked")
				Map<String, Object> beforeMbrInfo = mbrComHstService.selectMbrInfo(map); //회원정보 변경 전 데이터 
				map.put("MBR_APRVL_SPR_CD", "A"); //결재자
		    	List<Map<String,Object>> beAprvlList = mbrComHstService.selectMbrRegAprvl(map);   
		    	map.put("MBR_APRVL_SPR_CD", "O"); //발주자
		    	List<Map<String,Object>> beOrderList = mbrComHstService.selectMbrRegAprvl(map);   
		    	
				resMap = custMbrService.updateMbrRegDtl(map, aprvlList, orderList, new CCUtils(session), ds_otherInfo);
				beforeMbrInfo.put("hstSprCd","U");
				mbrComHstService.insertMbrComHst(mbrHstSeq,beforeMbrInfo,beAprvlList,beOrderList); //회원 공통이력
				mbrComHstService.insertMbrHst(mbrHstSeq,beforeMbrInfo);		//회원 상세 이력
				mbrComHstService.insertMbrAuthHst(mbrHstSeq,beforeMbrInfo);	//회원 제어 권한 이력
				mbrComHstService.insertMbrAprvlHst(mbrHstSeq,beforeMbrInfo);	//회원 결재선 이력
				mbrComHstService.insertMbrloginInfoHst(mbrHstSeq,beforeMbrInfo);	//회원 로그인ID 이력 
				
				result.addDataSet("ds_resMap", resMap);
			}
		}
		 catch (Exception e) {
			 throw new LoggingException(new String[] { "CC", "BO", "updateMbrRegDtl", "회원 정보 수정" }, e) {	};
		}
		
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : updateStopMbrStatus
	 * 2. ClassName  : CustMbrController.java
	 * 3. Comment    : 회원탈퇴
	 * 4. 작성자       : csy
	 * 5. 작성일       : 2022. 02. 17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/update-stop-mbr-status.do", method = RequestMethod.POST)
	public NexacroResult updateStopMbrStatus(HttpSession session, @ParamDataSet(name = "ds_updateInfoList", required = false) List<Map<String, Object>> list) throws Exception{	
		NexacroResult result = new NexacroResult();
		
		try {		
			Map<String, Object> resMap = custMbrService.updateStopMbrStatus(list, new CCUtils(session));
			result.addDataSet("ds_resMap", resMap);
		}
		 catch (Exception e) {
			 throw new LoggingException(new String[] { "CC", "BO", "updateStopMbrStatus", "회원탈퇴" }, e) {	};
		}
		
		return result;
    }

	/**
	 * <pre>
	 * 1. MethodName : copyMbrInfo
	 * 2. ClassName  : CustMbrController.java
	 * 3. Comment    : 회원정보 복사
	 * 4. 작성자       : csy
	 * 5. 작성일       : 2022. 02. 17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/copy-mbr-info.do", method = RequestMethod.POST)
	public NexacroResult copyMbrInfo(HttpSession session, @ParamDataSet(name = "ds_dtl", required = false) Map<String, Object> map, @ParamDataSet(name = "ds_aprvlList", required = false) List<Map<String, Object>> aprvlList, @ParamDataSet(name = "ds_orderList", required = false) List<Map<String, Object>> orderList) throws Exception{	
		NexacroResult result = new NexacroResult();
		
		try {
			// 부서 상태 조회 후 부서상태가 N 일 경우 alert 발생 
			Map<String,Object> deptUseYn = new HashMap<>();
			Map<String,Object> retMap = new HashMap<>();

			deptUseYn = custMbrService.selectDeptInfo(map);
			if(deptUseYn != null && ("N".equals(deptUseYn.get("USE_YN")) || "N".equals(deptUseYn.get("BZPLC_USE_YN")))) {
				retMap.put("msg","소속 사업장 또는 부서가 미사용 상태 입니다.");
				result.addDataSet("ds_resMap", retMap);
			}
			if(deptUseYn != null && "Y".equals(deptUseYn.get("USE_YN")) && "Y".equals(deptUseYn.get("BZPLC_USE_YN"))) {
				long mbrHstSeq = mbrComHstService.selectMbrComHstSeq(map);
				Map<String, Object> beforeMbrInfo = new HashMap<>();
				
				retMap = custMbrService.copyMbrInfo(map, aprvlList, orderList, new CCUtils(session));
			
				beforeMbrInfo.put("coCd",map.get("CO_CD"));
				beforeMbrInfo.put("hstSprCd","C");
				beforeMbrInfo.put("mbrId", retMap.get("MBR_ID"));
				
				mbrComHstService.insertMbrComHst(mbrHstSeq,beforeMbrInfo,null,null); //회원 공통이력
				mbrComHstService.insertMbrHst(mbrHstSeq,beforeMbrInfo);		//회원 상세 이력
				mbrComHstService.insertMbrAuthHst(mbrHstSeq,beforeMbrInfo);	//회원 제어 권한 이력
				mbrComHstService.insertMbrAprvlHst(mbrHstSeq,beforeMbrInfo);	//회원 결재선 이력
				mbrComHstService.insertMbrloginInfoHst(mbrHstSeq,beforeMbrInfo);	//회원 로그인ID 이력 
				
				result.addDataSet("ds_search", retMap);
			}
		}
		 catch (Exception e) {
			 throw new LoggingException(new String[] { "CC", "BO", "copyMbrInfo", "회원 정보 복사" }, e) {	};
		}
		
		return result;
    }

	/**
	 * <pre>
	 * 1. MethodName : selectMroMbrList
	 * 2. ClassName  : CustMbrController.java
	 * 3. Comment    : MRO 회원목록 조회
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-mro-mbr-list.do")
	public NexacroResult selectMroMbrList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
			
    	List<Map<String,Object>> list = custMbrService.selectMroMbrList(searchMap);    	
    	
		NexacroResult result = new NexacroResult();
		int totalCount = list.size();
		result.addDataSet("ds_output1", list);
		result.addVariable("totalCount", totalCount);

		return result;
    }
	
	// 대용량엑셀
	@RequestMapping(value = "/select-all-excel-download.do")
	public NexacroResult selectAllExcelDownload(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {			
			custMbrService.selectAllExcelDownload(searchMap, new CCUtils(session));
		} catch(MessageException e) {
			if( e.getCode() == -100 ) {
	            result.setErrorCode(e.getCode());
	            result.setErrorMsg(e.getMessage());				
			}
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_12", "대용량엑셀다운로드" }, e) {
			};
		}
		
		return result;
    }
	// email pw 변경
	@RequestMapping(value = "/pw-send-mail.do")
	public NexacroResult changePwMail(@ParamDataSet(name = "ds_dtl", required = false) Map<String, Object> dtlMap,HttpSession session, HttpServletRequest request) throws Exception {
		System.out.println("세희 : " + dtlMap);
		NexacroResult result = new NexacroResult();

				
		CommonUtil comUtil = new CommonUtil();
		int resultcnt = 0;	
				  
		//비밀번호 생성 
		String changePwd = comUtil.randomPwdCreate();
		dtlMap.put("changePwd", changePwd);
				 
		MailModel mailContents = new MailModel(); 
		// 상단제목 이미지 수정해야 됌(경로), 하단 고객사 이미지 수정해야 됌 
		mailContents = MailHtmlUtil.pwFindMail(request, dtlMap);
				  
		String mailBody = mailContents.getBody(); 
		String mailBodyTop = mailContents.getBodyTop();
		String mail = propertiesService.getString("static.resource.root") + "/" + propertiesService.getString("mail.resource.logo");
				  
		try { 
					
				  
			//비밀번호 수정 
			custMbrService.updatePwd(dtlMap,new CCUtils(session));
			Map map = custMbrService.selectMbrRegDtl(dtlMap);	
			result.addDataSet("ds_resMap", map);
			System.out.println("ds_resMap : "+map);
				  
			} catch(MessageException e) { if( e.getCode() == -100 ) {
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage()); } }
			catch(Exception e) {
				throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_16", "PW초기화" }, e) { };
			}
				  
			try { 
				dtlMap.put("eventId", "20002"); //이메일 템플릿 정보 
				dtlMap.put("subInfoYn","Y"); //이메일 디테일 유무 
				dtlMap.put("toEmail",StringUtil.getString(dtlMap.get("EMAIL_ADDR"),"").trim()); //수신자 이메일 
				dtlMap.put("toName",StringUtil.getString(dtlMap.get("MBR_NM"),"").trim()); //수신자 이름
				dtlMap.put("fromEmail","noreply@serveone.co.kr"); //발신자 이메일
				dtlMap.put("fromName", "서브원스토어"); //발신자이름 
				dtlMap.put("title", "비밀번호 안내메일입니다. "); //메일 제목 
				dtlMap.put("mapping1",mail); //치환값1
				dtlMap.put("mapping2", "서브원스토어 비밀번호 안내"); //치환값2
				dtlMap.put("mapping3", "안녕하세요, "+StringUtil.getString(dtlMap.get("MBR_NM"),"").trim()+" 님"); //치환값3 
				dtlMap.put("mapping4", "고객님의 임시비밀번호 안내드립니다."); //치환값4
				dtlMap.put("mapping5", "임시비밀번호로 로그인하신 후, 회원정보수정을 통하여 원하시는 비밀번호로 변경하시기 바랍니다."); //치환값5
				dtlMap.put("mapping6", "임시비밀번호"); //치환값6 
				dtlMap.put("mapping7", changePwd); //치환값7 
				dtlMap.put("mapping8", "");//치환값8
				dtlMap.put("mapping9", ""); //치환값9 
				dtlMap.put("mapping10", "https://store.serveone.co.kr"); //치환값10 
				dtlMap.put("sendTime", ""); //예약전송일시
				dtlMap.put("userId", StringUtil.getString(dtlMap.get("MBR_ID"),"").trim()); //회원ID
				  	
				   List<Map<String, Object>> map = new ArrayList<>();
				  coCommonSendService.insertCoSendMail(dtlMap,map);
				  
				  resultcnt = 1;
			} catch(Exception e) {
				  log.error(e.toString());
				  log.info("###### SMS 발송 중 에러 발생 #######"); 
				  resultcnt = 0;
				  throw new Exception("SMS 발송 중 에러가 발생하였습니다.");
			 }
				
			result.addVariable("resultcnt", resultcnt); 
				return result;
			}
	// sms pw 변경
	@RequestMapping(value = "/pw-send-sms.do")
	public NexacroResult changePwSms(@ParamDataSet(name = "ds_dtl", required = false) Map<String, Object> dtlMap,HttpSession session, HttpServletRequest request) throws Exception {
		System.out.println("세희 : " + dtlMap);
		NexacroResult result = new NexacroResult();
		int resultcnt = 0;		
		CommonUtil comUtil = new CommonUtil();
					  
		//비밀번호 생성 
		String changePwd = comUtil.randomPwdCreate();
		dtlMap.put("changePwd", changePwd);
		
		//callback number
		String callback = propertiesService.getString("sms.callback.ssp");
		try { 
							  
			//비밀번호 수정 
			String updspdId = custMbrService.updatePwd(dtlMap,new CCUtils(session));  
			Map map = custMbrService.selectMbrRegDtl(dtlMap);	
			result.addDataSet("ds_resMap", map);
			System.out.println("ds_resMap : "+map);
			} catch(MessageException e) { if( e.getCode() == -100 ) {
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage()); } }
			catch(Exception e) {
				throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_16", "PW초기화" }, e) { };
			}
			try {
				
				dtlMap.put("transDtm", "");				//전송일시(SYSDATE)
				dtlMap.put("custIssNo", "");			//고객발급번호
				dtlMap.put("custIssLowrId", "");		//고객발급하위ID
				dtlMap.put("charTransFormCd", 0);		//문자전송형태코드(0:일반메시지,1:콜백URL메시지)
				dtlMap.put("telNo", StringUtil.getString(dtlMap.get("HP_NO"),"").trim());		//전화번호
				dtlMap.put("cbTelNo", callback);				//콜백전화번호
				dtlMap.put("transMsg", "[서브원스토어]임시암호는 "+changePwd+" 입니다. 로그인 후 회원정보 수정에서 암호를 변경하시기 바랍니다.");		//전송메시지
				dtlMap.put("smsEtcFds1", "");			//SMS기타필드1
				dtlMap.put("smsEtcFds2", "");			//SMS기타필드2
				dtlMap.put("smsEtcFds3", "");			//SMS기타필드3
				dtlMap.put("smsEtcFds4", "");			//SMS기타필드4
				dtlMap.put("smsEtcFds5", "");			//SMS기타필드5
				dtlMap.put("smsEtcFds6", "");			//SMS기타필드6
				
				coCommonSendService.insertCoSendSms(dtlMap);		//전송 Table 저장
				 resultcnt = 1;
		        } catch(Exception e) {
		        	log.error(e.toString());
			        log.error("###### SMS 발송 중 에러 발생 #######");
			        resultcnt = 0;
			        throw new Exception("SMS 발송 중 에러가 발생하였습니다.");
				}	
				 result.addVariable("resultcnt", resultcnt); 
				return result;
		}
	
}
