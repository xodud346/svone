package com.ssp.bo.co.controller;

import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.ssp.bo.co.dataset.CoDataSet;
import com.ssp.core.co.service.CoCommonService;
import com.ssp.core.co.service.CoExcelTempService;
import com.ssp.core.co.util.AES256;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.legacy.mall.common.annotations.AccessLevelAdmin;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.util.StringUtil;

/**
 * <p>
 * @title 공통 컨트롤러
 * @package com.ssp.core.co.controller
 * <p>
 * @author lee
 * @since   2022. 01. 18.
 * @version 1.0
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18	 이성민 		최초작성
 */

@Controller
@AccessLevelAdmin(Admin.ROLEADMIN.administrator)
@RequestMapping("/co")
public class CoCommonController {
	private final Logger logger = LoggerFactory.getLogger(CoCommonController.class);

	@Autowired
    private CoCommonService coCommonService;

	@Autowired
	private CoExcelTempService coExcelTempService;

	@Autowired
	private SspPropertyService sspPropertyService;

	/**
	 *
	 * <pre>
	 * 1. MethodName : exceptionInfoList
	 * 2. ClassName : CoCommonController
	 * 3. Comment : 에러로그 목록 조회
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-01-21
	 * </pre>
	 *
	 * @param commandMap Map
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping("/select-exception-info-list")
	public NexacroResult selectExceptionInfoList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			//카멜화
			Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);

			String langCd = StringUtil.getString(searchMap.get("langCd"));
			if(CommUtil.nvl(langCd).equals("")) {
				searchMap.put("langCd", "KO");
			}

			//카운트
			int totalCount = coCommonService.selectExceptionInfoCount(searchMap);
			//리스트
			List<Map<String,Object>> exceptionInfoList = coCommonService.selectExceptionInfoList(searchMap);

			//set
			result.addVariable("totalCount", totalCount);
			result.addDataSet("ds_output1", exceptionInfoList);
		} catch ( Exception ne ) {
			String message = "에러로그 목록 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "selectExceptionInfoList", message}, ne);
		}
		return result;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : commonCodeList
	 * 2. ClassName : CoCommonController
	 * 3. Comment : 공통코드 조회
	 * 4. 작성자 :
	 * 5. 작성일 : 2022-01-58
	 * </pre>
	 *
	 * @param commandMap Map
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping("/select-common-code-list.do")
	public NexacroResult selectCommonCodeList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			commandMap = CommonUtil.toCamelCaseMap(commandMap);
			//TODO 기본값 설정 확인 필요
			String langCd = StringUtil.getString(commandMap.get("langCd"));
			if(CommUtil.nvl(langCd).equals("")) {
				commandMap.put("langCd", "KO");
			}

			List<Map<String,Object>> list = new ArrayList<>();
			String sCodeList = StringUtil.getString(commandMap.get("codeList"), "");
			String[] codeList = sCodeList.split(",");
			for(int i=0; i< codeList.length; i++){
				commandMap.put("code", codeList[i]);
				list = coCommonService.selectCommonCodeList(commandMap);
				result.addDataSet("ds_output"+(i+1), list);
			}
		} catch (Exception ne) {
			String message = "공통코드 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "commonCodeList", message}, ne);
		}
		return result;
	}


	/**
	 *
	 * <pre>
	 * 1. MethodName : fileUpload
	 * 2. ClassName : CoCommonController
	 * 3. Comment : 첨부파일 저장
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-02-23
	 * </pre>
	 *
	 * @param request HttpServletRequest
	 * @return NexacroResult Map{ docRegId, result }
	 * @throws Exception
	 */
	@RequestMapping("/file-upload.do")
	public NexacroResult fileUpload(HttpServletRequest request) throws Exception {

		NexacroResult result = new NexacroResult();

		try {
			HashMap<String, Object> resMap = coCommonService.fileUpload(request);
			result.addDataSet("resMap", resMap);
		} catch ( MessageException e ) {
			if( e.getCode() == -100 ) {
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			} else {
				String message = "파일 업로드 에러";
				logger.error(message, e);
				throw new LoggingException(new String[]{"CO", "BO", "saveNotice", message}, e);
			}
		}

		return result;
	}


	//참고만 하세요.
	@RequestMapping("/file-upload-component.do")
	public NexacroResult fileUploadComponent(HttpServletRequest request) throws Exception {
		NexacroResult result = new NexacroResult();

		try {
			HashMap<String, Object> resMap = coCommonService.fileUpload(request);
			List<Map<String, Object>> fileList = coCommonService.selectFileList(resMap);

			result.addDataSet("ds_output", fileList);

		} catch ( MessageException e ) {
			throw new LoggingException(new String[]{"CO", "BO", "saveNotice", "업로드 컴포넌트 에러"}, e);
		}
		return result;
	}

	// 사용하지 마시오. 샘플 참고용
	@RequestMapping("/select-file-list.do")
	public NexacroResult selectFileList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {

		NexacroResult result = new NexacroResult();

		try {
			commandMap = CommonUtil.toCamelCaseMap(commandMap);

			List<Map<String, Object>> fileList = coCommonService.selectFileList(commandMap);
			result.addDataSet("ds_output", fileList);
		} catch ( MessageException e ) {
			e.printStackTrace();
		}
		return result;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : fileUpload
	 * 2. ClassName : CoCommonController
	 * 3. Comment : 첨부파일 다운로드
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-02-23
	 * </pre>
	 *
	 */
	@RequestMapping({"/file-download", "/image.do"})
	public void fileDownload(HttpServletRequest request, HttpServletResponse response) throws Exception {
		try {
			coCommonService.fileDownload(request, response);
		} catch (Exception ne) {
			String message = "첨부파일다운로드";
			logger.error(message, ne);
			throw new LoggingException(new String[]{"CO", "BO", "file-download", message}, ne);
		}
	}


	/**
	 *
	 * <pre>
	 * 1. MethodName : fileLargeDownload
	 * 2. ClassName : CoCommonController
	 * 3. Comment : 대용량 엑셀 다운로드
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-05-27
	 * </pre>
	 *
	 * @param request HttpServletRequest
	 * @param response HttpServletResponse
	 * @throws Exception exception
	 */
	@RequestMapping("/file-large-download.do")
	public void fileLargeDownload(HttpServletRequest request, HttpServletResponse response) throws Exception {
		try {
			coCommonService.fileLargeDownload(request, response);
		} catch (Exception ne) {
			String message = "대용량 엑셀 다운로드";
			logger.error(message, ne);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_21", message}, ne);
		}
	}


	/**
	 *
	 * <pre>
	 * 1. MethodName : selectLargeExcelDownInfoList
	 * 2. ClassName : CoCommonController
	 * 3. Comment : 대용량 엑셀다운로드 정보
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-03-23
	 * </pre>
	 *
	 * @param commandMap Map
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping("/select-large-excel-down-info-list")
	public NexacroResult selectLargeExcelDownInfoList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			commandMap = CommonUtil.toCamelCaseMap(commandMap);
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

			String langCd = StringUtil.getString(commandMap.get("langCd"));
			if(CommUtil.nvl(langCd).equals("")) {
				commandMap.put("langCd", "KO");
				commandMap.put("regpsnId", admin.get("OPRTR_ID"));
			}

			List<Map<String,Object>> list = coExcelTempService.selectLargeExcelDownInfoList(commandMap);

			if( list.size() > 0 ) {
				result.addDataSet("ds_output", list);
				result.addVariable("totalCount", list.size());

				// 화면에서 조회한 경우 사용자에게 고지할 필요 없음
				try {
					List<Map<String,Object>> informUpdateList = list.stream()
							.filter(row -> "4".equals(row.get("DOWN_PROC_STATS_CD")) && "N".equals(row.get("INFRM_YN")))
							.collect(Collectors.toList());
					coExcelTempService.updateLargeExcelInformYn(informUpdateList, true);	// 고지여부 update(true:Y)
				} catch (Exception e) {
					logger.error("대용량 엑셀다운로드 정보 목록 조회 고지여부 update 오류", e);
				}
			} else {
				//초기화
				DataSet dataSet = CoDataSet.getDs("largeExcelDownInfo", "ds_output");
				result.addDataSet(dataSet);
			}

		} catch (Exception ne) {
			String message = "공통코드 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "commonCodeList", message}, ne);
		}
		return result;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectLargeExcelFailedCount
	 * 2. ClassName : CoCommonController
	 * 3. Comment : 대용량 엑셀다운로드 실패 건수 조회
	 * 4. 작성자 : 김상열
	 * 5. 작성일 : 2023-04-04
	 * </pre>
	 *
	 * @param commandMap Map
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping("/select-large-excel-failed-count")
	public NexacroResult selectLargeExcelFailedCount(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			commandMap = CommonUtil.toCamelCaseMap(commandMap);
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

			String langCd = StringUtil.getString(commandMap.get("langCd"));
			if(CommUtil.nvl(langCd).equals("")) {
				commandMap.put("langCd", "KO");
				commandMap.put("regpsnId", admin.get("OPRTR_ID"));
			}

			List<Map<String,Object>> list = coExcelTempService.selectLargeExcelFailedList(commandMap);
			result.addVariable("largeExcelFailedCount", Objects.isNull(list) ? 0 : list.size());

			coExcelTempService.updateLargeExcelInformYn(list, true);	// 고지여부 update(true:Y)

		} catch (Exception ne) {
			String message = "대용량 엑셀다운로드 실패 건수 조회 에러";
			logger.error(message, ne);
			throw new LoggingException(new String[]{"CO", "BO", "selectLargeExcelFailedCount", message}, ne);
		}
		return result;
	}


	/**
	 *
	 * <pre>
	 * 1. MethodName : selectOggLogList
	 * 2. ClassName : CoCommonController
	 * 3. Comment : OGG 로그를 조회한다.
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-03-23
	 * </pre>
	 *
	 * @param commandMap Map
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping("/select-ogg-log-list")
	public NexacroResult selectOggLogList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			//카멜화
			Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);

			String langCd = StringUtil.getString(searchMap.get("langCd"));
			if(CommUtil.nvl(langCd).equals("")) {
				searchMap.put("langCd", "KO");
			}

			//카운트
			int totalCount = coCommonService.selectOggLogListCount(searchMap);

			List<Map<String,Object>> list;
			if( totalCount > 0 ) {
				list = coCommonService.selectOggLogList(searchMap);
				result.addDataSet("ds_output", list);
			} else {
				//초기화
				DataSet dataSet = CoDataSet.getDs("oggLog", "ds_output");
				result.addDataSet(dataSet);
			}

			result.addVariable("totalCount", totalCount);

		} catch ( Exception ne ) {
			String message = "OGG 로그 목록 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "selectOggLogList", message}, ne);
		}
		return result;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCommonCodeUsrDefnList
	 * 2. ClassName : CoCommonController
	 * 3. Comment : 사용자 정의 조건 공통코드 조회
	 * 4. 작성자 :
	 * 5. 작성일 : 2022-01-58
	 * </pre>
	 *
	 * @param commandMap Map
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping("/select-common-code-usr-defn-list.do")
	public NexacroResult selectCommonCodeUsrDefnList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			commandMap = CommonUtil.toCamelCaseMap(commandMap);
			//TODO 기본값 설정 확인 필요
			String langCd = StringUtil.getString(commandMap.get("langCd"));
			if(CommUtil.nvl(langCd).equals("")) {
				commandMap.put("langCd", "KO");
			}

			List<Map<String,Object>> list = new ArrayList<>();
			commandMap.put("code", commandMap.get("codeList"));
			list = coCommonService.selectCommonCodeUsrDefnList(commandMap);
			result.addDataSet("ds_output1", list);

		} catch (Exception ne) {
			String message = "사용자 정의 조건 공통코드 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "selectCommonCodeUsrDefnList", message}, ne);
		}
		return result;
	}

	@RequestMapping("/ssp-hosts.do")
	public NexacroResult sspHosts() throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			Map<String, String> map = new HashMap<String, String>();
			map.put("HOST_SSP", sspPropertyService.getString("host.ssp"));
			map.put("HOST_RND", sspPropertyService.getString("host.rnd"));

			result.addDataSet("ds_output1", map);
		} catch (Exception ne) {
			String message = "ssp hosts 경로 조회 오류";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "sspHosts", message}, ne);
		}

		return result;
	}

	@RequestMapping("/dlgteLoginProcess.do")
	public ModelAndView dlgteLoginProcess(@RequestParam Map<String, Object> param)  throws Exception {
		ModelAndView ret = new ModelAndView();
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("mmHHddMMyyyy");
			String salt = sdf.format(new Date());

			String hostSsp = sspPropertyService.getString("host.ssp");
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			Map<String, String> p = new HashMap<String, String>();
			String dlgteMbrId = (String) admin.get("OPRTR_ID");
			String loginMbrId = (String) param.get("loginMbrId");

			ret.setViewName("/co/dlgteLoginProcess");
			ret.addObject("hostSsp", hostSsp);
			ret.addObject("dlgteMbrId", AES256.encrypt(dlgteMbrId + "|" + salt));
			ret.addObject("loginMbrId", AES256.encrypt(loginMbrId+ "|" + salt));
		} catch (Exception e) {
			throw new LoggingException(new String[]{"CO", "BO", "dlgteLoginProcess", ""}, e);
		}

		return ret;
	}

	@RequestMapping("/fileInfo.do")
	public NexacroResult fileInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			String   mnuLvlSprCd = StringUtil.getString(commandMap.get("MNU_LVL_SPR_CD"));

			commandMap.put("mnuLvlSprCd", mnuLvlSprCd);

			List<Map<String,Object>> list = coCommonService.fileInfo(commandMap);

			result.addDataSet("ds_output", list);
		} catch ( Exception ne ) {
			String message = "메뉴얼다운로그 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "selectExceptionInfoList", message}, ne);
		}
		return result;
	}
}
