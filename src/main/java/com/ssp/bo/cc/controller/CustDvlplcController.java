package com.ssp.bo.cc.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.od.excel.domain.SheetInfo;
import com.ssp.core.od.exceptions.OdBizException;
import com.ssp.core.od.service.OdExcelDownloadService;
import com.ssp.core.od.utils.OdControllerUtills;
import com.ssp.core.util.StringUtil;

import org.antlr.grammar.v3.ANTLRParser.exceptionGroup_return;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.service.CustDvlplcService;
import com.ssp.bo.co.controller.CoCommonPopupController;
import com.ssp.bo.co.service.CoMnuMngService;
import com.ssp.bo.co.service.CoPgmMngService;
import com.ssp.bo.od.OdOrderComm;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title  배송지관리 컨트롤러
 * @package com.ssp.core.cc.service.controller
 * <pre>
 * @author  YOO CHANGHO
 * @since   2022. 02. 09. 
 * @version 1.0
 * @see CustDvlplcController
 * =================== 변경 내역 ================== 
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/bo/cc/cust/dvlplc")
public class CustDvlplcController { 
	private final Logger log = LoggerFactory.getLogger(CustDvlplcController.class);

	@Autowired
	private CustDvlplcService dvplcMngService;
	
	@Autowired
    public OdExcelDownloadService odExcelDownloadService;
	
	/**
	 * <pre>
	 * 1. MethodName : insertDvplcInfo
	 * 2. ClassName  : DpMngContoller.java
	 * 3. Comment    : 배송지 등록
	 * 4. 작성자      : 유창호
	 * 5. 작성일      : 2022. 02. 09.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/insert-dvplc-info.do")
	public NexacroResult insertDvplcInfo(HttpSession session, @ParamDataSet(name = "ds_dlvplc", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			paramMap = CCUtils.prefixSession(paramMap, session);
			result.addDataSet("ds_output", dvplcMngService.insertDvplcInfo(paramMap));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "insertDvplcInfo", "배송지 등록" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectDlvplcInfo
	 * 2. ClassName  : DpMngContoller.java
	 * 3. Comment    : 배송지 단일조회
	 * 4. 작성자      : 유창호
	 * 5. 작성일      : 2022. 02. 10.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/selectDlvplcInfo.do")
	public NexacroResult selectDlvplcInfo(@ParamDataSet(name = "ds_dlvplc", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output", dvplcMngService.selectDlvplcInfo(paramMap));	
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "selectDlvplcInfo", "배송지 단일조회" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : deleteDlvPlcUseYn
	 * 2. ClassName  : DpMngContoller.java
	 * 3. Comment    : 배송지 삭제처리(UPDATE USE_YN => 'N')
	 * 4. 작성자      : 유창호
	 * 5. 작성일      : 2022. 02. 10.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/delete-dlv-plc-use-yn.do")
	public NexacroResult deleteDlvPlcUseYn(HttpSession session, @ParamDataSet(name = "ds_dlvplc", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
		  paramMap = CCUtils.prefixSession(paramMap, session);
			result.addDataSet("ds_output", dvplcMngService.deleteDlvPlcUseYn(paramMap));	
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "deleteDlvPlcUseYn", "배송지 삭제처리" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectDlvplcList
	 * 2. ClassName  : DpMngContoller.java
	 * 3. Comment    : 배송지 리스트 조회
	 * 4. 작성자      : 유창호
	 * 5. 작성일      : 2022. 02. 10.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-dlvplc-list.do")
	public NexacroResult selectDlvplcList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> paramMap, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			//paramMap.put("SES_ID" , session.getId());
			result = dvplcMngService.selectDlvplcList(paramMap, new CCUtils(session));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "selectDlvplcList", "배송지 리스트 조회" }, e) {};
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectMbrInfo
	 * 2. ClassName  : DpMngContoller.java
	 * 3. Comment    : 회원 기본정보 조회
	 * 4. 작성자      : 유창호
	 * 5. 작성일      : 2022. 02. 14.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-mbr-info.do")
	public NexacroResult selectMbrInfo(@ParamDataSet(name = "search_ds", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result = dvplcMngService.selectMbrBasicInfo(paramMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "selectMbrInfo", "회원 기본정보 조회" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectMbrBasicInfoList
	 * 2. ClassName  : DpMngContoller.java
	 * 3. Comment    : 회원 기본정보 단일조회 리스트팝업
	 * 4. 작성자      : 유창호
	 * 5. 작성일      : 2022. 02. 15.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/selectMbrBasicInfoList.do")
	public NexacroResult selectMbrBasicInfoList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result = dvplcMngService.selectMbrBasicInfoList(paramMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "selectMbrBasicInfoList", "회원 기본정보 단일조회 리스트" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : deleteMbrDlvplcInfoList
	 * 2. ClassName  : DpMngContoller.java
	 * 3. Comment    : 배송지 목록 다중 삭제처리(그리드)
	 * 4. 작성자      : 유창호
	 * 5. 작성일      : 2022. 02. 15.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/delete-mbr-dlvplc-info-list.do")
	public NexacroResult deleteMbrDlvplcInfoList(HttpSession session, @ParamDataSet(name = "delete_ds", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			paramMap = CCUtils.prefixSession(paramMap, session);
			result = dvplcMngService.deleteDlvplcInfo(paramMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "deleteMbrDlvplcInfoList", "배송지 목록 다중 삭제처리" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : updateMbrDlvplcBasisYn
	 * 2. ClassName  : DpMngContoller.java
	 * 3. Comment    : 배송지목록 추가배송지 기본배송지 변경
	 * 4. 작성자      : 유창호
	 * 5. 작성일      : 2022. 04. 22.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/update-mbr-dlvplc-basis-yn.do")
	public NexacroResult updateMbrDlvplcBasisYn(HttpSession session, @ParamDataSet(name = "ds_dlvplcId", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			paramMap = CCUtils.prefixSession(paramMap, session);
			result = dvplcMngService.updateMbrDlvplcBasisYn(paramMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "updateMbrDlvplcBasisYn", "배송지목록 추가배송지 기본배송지 변경" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectDlvplcListExcelDownload
	 * 2. ClassName  : CcCustDeptController.java
	 * 3. Comment    : 배송지관리 대용량 엑살 다운로드
	 * 4. 작성자     : YOO
	 * 5. 작성일     : 2022.05.18
	 * </pre>
	 *
	 * @return 
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-dlvplc-list-excel-download.do")
    public void selectDlvplcListExcelDownload(HttpServletRequest request, HttpServletResponse response) throws Exception {
        try {
            odExcelDownloadService.excelFileDownload(OdOrderComm.getSearchMap(request), request, response, "배송지관리", "SSP_BO_MA_20_XLSX01", SheetInfo.of("Sheet1", "Dvplc.selectMbrDlvplcExcelList"));
        } catch (Exception e) {
            throw new LoggingException(new String[] { "CC", "BO", "selectDlvplcListExcelDownload", "배송지관리 엑셀 조회 실패" }, e);
        }
        return ;
    }
	
	// 대용량엑셀
	@RequestMapping(value = "/select-all-excel-download.do")
	public NexacroResult selectAllExcelDownload(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			//CCUtils.initSession(session);
			result.addDataSet("ds_output1", dvplcMngService.selectAllExcelDownload(searchMap, new CCUtils(session)));
			
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_20", "대용량엑셀테스트" }, e) {
			};
		}
		return result;
    }
}
