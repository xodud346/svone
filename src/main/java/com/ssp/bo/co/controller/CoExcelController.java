package com.ssp.bo.co.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.co.dto.CoExcelDto;
import com.ssp.core.co.service.CoCommonFileService;
import com.ssp.core.co.service.CoExcelService;
import com.ssp.core.co.service.CoExcelUpldDtlsInfoService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

@Controller
@RequestMapping("/co/excel")
public class CoExcelController {
	private final Logger logger = LoggerFactory.getLogger(CoExcelController.class);

    @Autowired
    protected SspPropertyService propertiesService;

	@Autowired
	protected CoExcelService coExcelService;

	@Autowired
	private CoCommonFileService coCommonFileService;
	
	@Autowired
    private CoExcelUpldDtlsInfoService coExcelUpldDtlsInfoService;

	/**
	 *
	 * <pre>
	 * 1. MethodName : excelUpload
	 * 2. ClassName : CoExcelController
	 * 3. Comment : 엑셀 업로드
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-05-13
	 * </pre>
	 *
	 * @param request HttpServletRequest
	 * @param pgmId String
	 * @param session HttpSession
	 * @return NexacroResult
	 * @throws Exception io
	 */
    @SuppressWarnings("unchecked")
	@RequestMapping(value = "/excel-upload.do")
    public NexacroResult excelUpload(HttpServletRequest request
	    , @RequestParam("pgmId") String pgmId
	    , @RequestParam("bzplcId") String bzplcId
	    , @RequestParam("refCdGrpSeq") String refCdGrpSeq
	    , @RequestParam("oprUnitId") String oprUnitId
	    , @RequestParam("rowCount") String rowCount
	    , HttpSession session) throws Exception {
        NexacroResult ret = new NexacroResult();
	    Map<String, Object> outputMap = new HashMap<>();

	    try {

		    Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			Map<String, Object> commandMap = new HashMap<>();

		    if( admin != null ) {
			    commandMap.put("coCd", 				StringUtil.getString(admin.get("CO_CD")));
			    commandMap.put("usrId",             StringUtil.getString(admin.get("OPRTR_ID")));
		    }
		    commandMap.put("pgmId", StringUtil.getString(pgmId));
		    commandMap.put("upldPgmIdtNm", StringUtil.getString(pgmId));
		    commandMap.put("bzplcId", StringUtil.getString(bzplcId));
		    commandMap.put("refCdGrpSeq", StringUtil.getString(refCdGrpSeq));
		    commandMap.put("oprUnitId", StringUtil.getString(oprUnitId));
		    commandMap.put("rowCount", StringUtil.getString(rowCount));
		    commandMap.put("startNum", 0);

		    Map<String, Object> resMap = coExcelService.excelUpload(request, commandMap);

		    //temp 테이블 저장 호출
		    if( "SUCCESS".equals(StringUtil.getString(resMap.get("resCode"))) ) {
			    resMap = coExcelService.saveExcelToTemp(commandMap);
			    if (resMap.get("RSLT_CD").equals("ERROR_EMPTY_ROW")) {
			    	throw new RuntimeException("엑셀 내에 빈 행이 있습니다.");
			    } else if (resMap.get("RSLT_CD").equals("ERROR")) {
					throw new RuntimeException((String) resMap.get("RSLT_MSG"));
				}
 				List<Object> headerList = new ArrayList<>();
				List<Map<String, Object>> columnList = new ArrayList<>();
				for( String data : (List<String>) resMap.get("EXCEL_HEADER")) {
					Map<String, Object> map = new HashMap<>();
					map.put("name", data);
					headerList.add(map);
				}
			    ret.addDataSet("ds_excelHeader", headerList);

			    for( String data : (List<String>) resMap.get("EXCEL_COLUMN")) {
				    Map<String, Object> map = new HashMap<>();
				    map.put("name", data);
				    columnList.add(map);
			    }
			    ret.addDataSet("ds_excelColumn", columnList);
			} else if( "ERROR".equals(StringUtil.getString(resMap.get("resCode"))) ) {
				throw new RuntimeException((String) resMap.get("resMsg"));
			}

		    outputMap.put("resCode", resMap.get("RSLT_CD"));
		    outputMap.put("resMsg", resMap.get("RSLT_MSG"));
		    
		    outputMap.put("excelStorTblNm", commandMap.get("excelStorTblNm"));

		    ret.addDataSet("ds_params", outputMap);
	    } catch (Exception e) {
		    logger.error(e.getMessage(), e);
		    Map<String, Object> param = new HashMap<>();
		    param.put("resCode", -1);
		    param.put("resMsg", e.getMessage());
		    ret.addDataSet("ds_output", param);
			return ret;
	    }

	    return ret;
    }
    
    /*--------------------[start]PG02 협력사 일괄선제안 관련 중복상품체크 기능 추가 -----------------------*/
    @RequestMapping(value = "/excel-validate-pkg.do")
    public NexacroResult excelValidatePkg(HttpServletRequest request
	    , @RequestParam("pgmId") String pgmId
	    , @RequestParam("bzplcId") String bzplcId
	    , @RequestParam("refCdGrpSeq") String refCdGrpSeq
	    , @RequestParam("oprUnitId") String oprUnitId
	    , @RequestParam("rowCount") String rowCount
	    , HttpSession session) throws Exception {
        NexacroResult ret = new NexacroResult();
	    //Map<String, Object> outputMap = new HashMap<>();

	    try {

		    Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			Map<String, Object> commandMap = new HashMap<>();

		    if( admin != null ) {
			    commandMap.put("coCd", StringUtil.getString(admin.get("CO_CD")));
			    commandMap.put("usrId", StringUtil.getString(admin.get("OPRTR_ID")));
		    }
		    commandMap.put("pgmId", StringUtil.getString(pgmId));
		    commandMap.put("upldPgmIdtNm", StringUtil.getString(pgmId));
		    commandMap.put("bzplcId", StringUtil.getString(bzplcId));
		    commandMap.put("refCdGrpSeq", StringUtil.getString(refCdGrpSeq));
		    commandMap.put("oprUnitId", StringUtil.getString(oprUnitId));
		    commandMap.put("rowCount", StringUtil.getString(rowCount));
		    commandMap.put("startNum", 0);
		     
		    Map<String, Object> meta = CommonUtil.toCamelCaseMap(coExcelUpldDtlsInfoService.selectExcelUpldDtlsInfoDetail(commandMap));
			commandMap.put("upldPgmIdtNm", commandMap.get("pgmId"));
			commandMap.put("excelStorTblNm", meta.get("excelStorTblNm"));
			Map<String, Object> resMap = coExcelService.excelvalidateTempDupl(commandMap);

			if (resMap.get("RSLT_CD").equals("SUCCESS")) {
				ret.addDataSet("ds_output", resMap.get("job"));
			} else {
				throw new RuntimeException((String) resMap.get("RSLT_MSG"));
			}
	    } catch (Exception e) {
		    logger.error(e.getMessage(), e);
		    Map<String, Object> param = new HashMap<>();
		    param.put("resCode", -1);
		    param.put("resMsg", e.getMessage());
		    ret.addDataSet("ds_output", param);
			return ret;
		    //throw new LoggingException(new String[] { "CO", "BO", "read-excel", "엑셀 업로드" }, e);
	    }

	    return ret;
    }
    /*--------------------[end]PG02 협력사 일괄선제안 관련 중복상품체크 기능 추가 -----------------------*/
    
	@RequestMapping(value = "/excel-validate.do")
    public NexacroResult excelValidate(HttpServletRequest request
	    , @RequestParam("pgmId") String pgmId
	    , @RequestParam("bzplcId") String bzplcId
	    , @RequestParam("refCdGrpSeq") String refCdGrpSeq
	    , @RequestParam("oprUnitId") String oprUnitId
	    , @RequestParam("rowCount") String rowCount
	    , HttpSession session) throws Exception {
        NexacroResult ret = new NexacroResult();
	    //Map<String, Object> outputMap = new HashMap<>();

	    try {

		    Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			Map<String, Object> commandMap = new HashMap<>();

		    if( admin != null ) {
			    commandMap.put("coCd", StringUtil.getString(admin.get("CO_CD")));
			    commandMap.put("usrId", StringUtil.getString(admin.get("OPRTR_ID")));
		    }
		    commandMap.put("pgmId", StringUtil.getString(pgmId));
		    commandMap.put("upldPgmIdtNm", StringUtil.getString(pgmId));
		    commandMap.put("bzplcId", StringUtil.getString(bzplcId));
		    commandMap.put("refCdGrpSeq", StringUtil.getString(refCdGrpSeq));
		    commandMap.put("oprUnitId", StringUtil.getString(oprUnitId));
		    commandMap.put("rowCount", StringUtil.getString(rowCount));
		    commandMap.put("startNum", 0);
		     
		    Map<String, Object> meta = CommonUtil.toCamelCaseMap(coExcelUpldDtlsInfoService.selectExcelUpldDtlsInfoDetail(commandMap));
			commandMap.put("upldPgmIdtNm", commandMap.get("pgmId"));
			commandMap.put("excelStorTblNm", meta.get("excelStorTblNm"));
			Map<String, Object> resMap = coExcelService.excelvalidateTemp(commandMap);

			if (resMap.get("RSLT_CD").equals("SUCCESS")) {
				ret.addDataSet("ds_output", resMap.get("job"));
			} else {
				throw new RuntimeException((String) resMap.get("RSLT_MSG"));
			}
	    } catch (Exception e) {
		    logger.error(e.getMessage(), e);
		    Map<String, Object> param = new HashMap<>();
		    param.put("resCode", -1);
		    param.put("resMsg", e.getMessage());
		    ret.addDataSet("ds_output", param);
			return ret;
		    //throw new LoggingException(new String[] { "CO", "BO", "read-excel", "엑셀 업로드" }, e);
	    }

	    return ret;
    }
    

	/**
	 *
	 * <pre>
	 * 1. MethodName : excelSaveTempAjax
	 * 2. ClassName : CoExcelController
	 * 3. Comment : 검증 후 엑셀 temp 저장
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-05-13
	 * </pre>
	 *
	 * @param request HttpServletRequest
	 * @param commandMap Map
	 * @return NexacroResult
	 * @throws Exception exception
	 */
    @RequestMapping(value = "/excel-save-temp-ajax.do")
    public NexacroResult excelSaveTempAjax(HttpServletRequest request, @ParamDataSet(name = "ds_save", required = false) Map<String, Object> commandMap) throws Exception {
        NexacroResult ret = new NexacroResult();

        try {
	        Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

	        if( admin != null ) {
		        commandMap.put("coCd", 			StringUtil.getString(admin.get("CO_CD")));
		        commandMap.put("usrId",         StringUtil.getString(admin.get("OPRTR_ID")));
	        }
	        commandMap.put("upldPgmIdtNm", 		StringUtil.getString(commandMap.get("pgmId")));

	        Map<String, Object> meta = CommonUtil.toCamelCaseMap(coExcelUpldDtlsInfoService.selectExcelUpldDtlsInfoDetail(commandMap));
			commandMap.put("excelStorTblNm", meta.get("excelStorTblNm"));
			
	        Map<String, Object> resMap = coExcelService.excelSaveTemp(request, commandMap);
	        ret.addDataSet("ds_output", resMap.get("job"));

            return ret;

        } catch (Exception e){
	        logger.error(e.getMessage(), e);
	        Map<String, Object> param = new HashMap<>();
	        param.put("resCode", -1);
	        param.put("resMsg", e.getMessage());
			param.put("status", "error_proc");
	        ret.addDataSet("ds_output", param);
	        return ret;
        }
    }

    
    @RequestMapping(value = "/job.do")
    public NexacroResult job(HttpServletRequest request, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
        NexacroResult ret = new NexacroResult();
        
        try {
        	Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

			if( admin != null ) {
				commandMap.put("coCd", 	StringUtil.getString(admin.get("CO_CD")));
				commandMap.put("usrId", StringUtil.getString(admin.get("OPRTR_ID")));
			}
        	
        	Map<String,Object> res = coExcelService.job(CommonUtil.toCamelCaseMap(commandMap));
        	String status = (String) res.get("status");

        	ret.addDataSet("ds_output", res);
        	
        	//구매정보 일괄등록 전용 
            ret.addDataSet("ds_excel_export", res.getOrDefault("ds_excel_export", null));
            ret.addDataSet("ds_count", res.getOrDefault("ds_count", null));
            
        	if (status.equals("complete_proc")) {
        		Map<String, Object> meta = coExcelUpldDtlsInfoService.selectExcelUpldDtlsInfoDetail(commandMap);
    			commandMap.put("excelStorTblNm", meta.get("EXCEL_STOR_TBL_NM"));        		
        		ret.addDataSet("ds_count", getCount(commandMap));
        	}
        } catch (Exception e){
	        logger.error(e.getMessage(), e);
	        Map<String, Object> param = new HashMap<>();
	        param.put("resCode", -1);
	        param.put("resMsg", e.getMessage());
	        ret.addDataSet("ds_output", param);
	        return ret;
        }
        
        return ret;
    }

	/**
	 *
	 * <pre>
	 * 1. MethodName : excelDeleteTempAjax
	 * 2. ClassName : CoExcelController
	 * 3. Comment : excel temp 데이터를 삭제한다.
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-05-13
	 * </pre>
	 *
	 * @param request HttpServletRequest
	 * @param commandMap Map
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping(value = "/excel-delete-temp-ajax.do")
	public NexacroResult excelDeleteTempAjax(HttpServletRequest request, @ParamDataSet(name = "ds_save", required = false) Map<String, Object> commandMap) throws Exception {
		NexacroResult ret = new NexacroResult();

		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

			if( admin != null ) {
				commandMap.put("coCd", 			StringUtil.getString(admin.get("CO_CD")));
				commandMap.put("usrId",         StringUtil.getString(admin.get("OPRTR_ID")));
			}
			commandMap.put("upldPgmIdtNm", 		StringUtil.getString(commandMap.get("pgmId")));
			String excelRowNo = StringUtil.getString(commandMap.get("excelRowNo"));
			if( !"".equals(excelRowNo) ) {
				commandMap.put("excelRowNoList", excelRowNo.split(","));
			}
			
			Map<String, Object> meta = coExcelUpldDtlsInfoService.selectExcelUpldDtlsInfoDetail(commandMap);
			commandMap.put("excelStorTblNm", meta.get("EXCEL_STOR_TBL_NM"));

			Map<String, Object> resMap = coExcelService.excelDeleteTemp(request, commandMap);
	        	        
			ret.addDataSet("ds_output", resMap);
			ret.addDataSet("ds_count", getCount(commandMap));

			return ret;

		} catch (Exception e){
			logger.error(e.getMessage(), e);
			Map<String, Object> param = new HashMap<>();
			param.put("resCode", -1);
			param.put("resMsg", e.getMessage());
			ret.addDataSet("ds_output", param);
			return ret;
		}
	}


	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCommonCodeList
	 * 2. ClassName : CoExcelController
	 * 3. Comment : 엑셀 업로드 양식목록 조회
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-03-24
	 * </pre>
	 *
	 * @param commandMap Map
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping(value = "/select-excel-report-list")
	public NexacroResult selectCommonCodeList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			//파라메터 카멜 화
			commandMap = CommonUtil.toCamelCaseMap(commandMap);

			//언어 기본값
			String langCd = StringUtil.getString(commandMap.get("langCd"));
			if(CommUtil.nvl(langCd).equals("")) {
				commandMap.put("langCd", "KO");
			}

			List<Map<String,Object>> list = coExcelService.selectExcelPgmIdList(commandMap);
			result.addDataSet("ds_output", list);

		} catch (Exception e) {
			String message = "엑셀 업로드 양식목록 조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectCommonCodeList", message}, e);
		}
		return result;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectExcelTempList
	 * 2. ClassName : CoExcelController
	 * 3. Comment : TEMP 테이블에 저장된 목록을 가져온다.
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-05-12
	 * </pre>
	 *
	 * @param commandMap Map
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping(value = "/select-excel-temp-list.do")
	public NexacroResult selectExcelTempList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			//언어 기본값
			String langCd = StringUtil.getString(commandMap.get("langCd"));
			if(CommUtil.nvl(langCd).equals("")) {
				commandMap.put("langCd", "KO");
			}

			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

			if( admin != null ) {
				commandMap.put("coCd", 			StringUtil.getString(admin.get("CO_CD")));
				commandMap.put("usrId",         StringUtil.getString(admin.get("OPRTR_ID")));
			}
			String excelRowNo = StringUtil.getString(commandMap.get("EXCEL_ROW_NO"));
			if( !"".equals(excelRowNo) ) {
				commandMap.put("EXCEL_ROW_NO_LIST", excelRowNo.split(","));
				commandMap.put("excelRowNoListYn", "Y");
			
			}


			Map<String, Object> meta = coExcelUpldDtlsInfoService.selectExcelUpldDtlsInfoDetail(commandMap);
			commandMap.put("errorYn", "Y");
			commandMap.put("excelStorTblNm", meta.get("EXCEL_STOR_TBL_NM"));
			
			List<CoExcelDto> list = coCommonFileService.selectExcelTempList(commandMap);
			
			result.addDataSet("ds_output", list);
			result.addDataSet("ds_count", getCount(commandMap));
		} catch (Exception e) {
			String message = "엑셀 업로드 양식목록 조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectCommonCodeList", message}, e);
		}
		return result;
	}


	private Map<String, Object> getCount(Map<String, Object> commandMap) throws Exception {
		int errorCount = coCommonFileService.selectExcelTempErrorCount(commandMap);
		int totalCount = coCommonFileService.selectExcelTempTotalCount(commandMap);
 
		Map<String, Object> cnt = new HashMap<String, Object>();
		cnt.put("errorCount", errorCount);
		cnt.put("totalCount", totalCount);
		
		return cnt;
	}
}
