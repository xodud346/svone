package com.ssp.bo.cc.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.ColumnHeader;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.service.CustBizplcService;
import com.ssp.core.co.service.CoCommonService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.exception.MessageException;

/**
 * <pre>
 * @title  예산
 * @package com.ssp.bo.cc.controller
 * @ClassName CustBgtController
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
@RequestMapping("/bo/cust/bgt/ssp_bo_ma_02")
public class CustBizplcController {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
		
	@Resource(name="custBizplcService") 
	private CustBizplcService custBizplcService;	
	
	/**
	 * <pre>
	 * 1. MethodName : selectCodeList
	 * 2. ClassName  : CustBizplcController.java
	 * 3. Comment    : 콤보박스 데이터목록 조회
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/selectCodeList.do")
	public NexacroResult selectCodeList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
			
    	List<Map<String,Object>> list = custBizplcService.selectCodeList(searchMap);    	
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_codeList", list);

		return result;
    }

	
	/**
	 * <pre>
	 * 1. MethodName : selectBizplcDtl
	 * 2. ClassName  : CustBizplcController.java
	 * 3. Comment    : 사업장 상세정보 조회
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/selectBizplcDtl.do")
	public NexacroResult selectBizplcDtl(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap,HttpSession session) throws Exception {
		
    	Map<String,Object> dtl = custBizplcService.selectBizplcDtl(searchMap);    	//사업장 상세정보 
    	List<Map<String,Object>> bilcltCondList = custBizplcService.selectBilcltCondList(searchMap); //수금조건
    	List<Map<String,Object>> stlMeanList = custBizplcService.selectStlMeanList(searchMap);  //결제수단
    	List<Map<String,Object>> fileList = null;
    	String updpsnId = (String) session.getAttribute("updpsnId");	//로그인 운영자ID
    	String excepId = "02210096";									//사업자명 수정 버튼 활성화 특정 운영자ID  공용:X0025958,
    	String excepId1 = "01500127";
    	Map<String,Object> buttonId = new HashMap<>();
    	buttonId.put("updpsnId", updpsnId);
    	buttonId.put("excepId", excepId);
    	buttonId.put("excepId1", excepId1);
    	
    	if(dtl!=null && !CommUtil.nvl(dtl.get("BIZDOC_ATFL_ID")).equals("")) { // 사업자자등록증파일 조회
    		Map fileSearchMap = new HashMap<String,Object>();
    		fileSearchMap.put("docRegId", dtl.get("BIZDOC_ATFL_ID"));
    		fileList = custBizplcService.selectBizFileList(fileSearchMap);
    	}
    	
    	dtl.put("DUP_INFO_YN","N"); //중복검사 여부 컬럼 
    	
		NexacroResult result = new NexacroResult();		
		result.addDataSet("ds_dtl", dtl);
		result.addDataSet("ds_bilcltCondList", bilcltCondList);
		result.addDataSet("ds_stlMeanList", stlMeanList);
		result.addDataSet("ds_fileList", fileList);
		//조건부 버튼 생성
		result.addDataSet("ds_buttonId",buttonId);
		
		/* [2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */
//		String sMediDeviSellPermitYn = dtl==null ? "N" : (String) dtl.get("MEDI_DEVI_SELL_PERMIT_YN");
//		if ( "Y".equalsIgnoreCase(sMediDeviSellPermitYn) ) {
		result.addDataSet("ds_mediDeviSellPermitAtfls", custBizplcService.selectBzplcMediDeviSellPermitAtfls(searchMap));
//		}
		/* [2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */
		
		return result;
	}
	
	/* [2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */
	/**
	 * <pre>
	 * 1. MethodName : saveBizplcDtl
	 * 2. ClassName  : CustBizplcController.java
	 * 3. Comment    : 사업장 정보 변경사항 저장
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/saveBizplcDtl.do", method = RequestMethod.POST)
	public NexacroResult saveBizplcDtl(HttpSession session, 
			@ParamDataSet(name="ds_dtl"                        , required=false)      Map<String, Object>  map,
			@ParamDataSet(name="ds_mediDeviSellPermitAtfls"    , required=false) List<Map<String, Object>> ds_mediDeviSellPermitAtfls,
			@ParamDataSet(name="ds_mediDeviSellPermitAtflsDele", required=false) List<Map<String, Object>> ds_mediDeviSellPermitAtflsDele
	) throws Exception{	
		NexacroResult result = new NexacroResult();
		
		try {
			map.put("ds_mediDeviSellPermitAtfls"    , ds_mediDeviSellPermitAtfls    );
			map.put("ds_mediDeviSellPermitAtflsDele", ds_mediDeviSellPermitAtflsDele);
			custBizplcService.saveBizplcDtl(map, new CCUtils(session));
		}
		 catch (Exception e) {
			 throw new LoggingException(new String[] { "CC", "BO", "saveBizplcDtl", "사업장 저장" }, e) {	};
		}
		
		return result;
	}
	/* /[2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */
	
	/**
	 * <pre>
	 * 1. MethodName : selectBizplcNm
	 * 2. ClassName  : CustBizplcController.java
	 * 3. Comment    : 사업장명 로그인 중복 체크
	 * 4. 작성자       : 김동원
	 * 5. 작성일       : 2022. 11. 04.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/selectBizplcNm.do")
	public NexacroResult selectMbrRegDupCheck(@ParamDataSet(name = "ds_dtl", required = false) Map<String, Object> searchMap) throws Exception{
			
    	Map map = custBizplcService.selectBzplcDupCheck(searchMap);    	
    	    
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_dupInfo", map);

		return result;
    }

	/* <!-- [2023-03-06] sg.park - AI-015 일반고객의 여신거래 가능 프로세스 추가 --> */
	/**
	 * 특약고객 종결처리
	 */
	@RequestMapping(value = "/fnshConsnCust.do", method = RequestMethod.POST)
	public NexacroResult fnshConsnCust(HttpSession session, @ParamDataSet(name="ds_dtl", required=false) Map<String, Object> map) throws Exception {
		NexacroResult result = new NexacroResult();
		
		CCUtils.prefixSession(map, session);
		Map<String, Object> rslt = custBizplcService.fnshConsnCust( map );
		
		
		return result;
	}
	/* <!-- /[2023-03-06] sg.park - AI-015 일반고객의 여신거래 가능 프로세스 추가 --> */
	
	
	/* [2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private CoCommonService coCommonService;
	
	@RequestMapping(value="/file-upload.do")
	public void fileUpload(HttpServletRequest request, HttpServletResponse response) throws Exception {
		NexacroResult result = new NexacroResult();
		
		HashMap<String, Object> resMap = null;
		try {
			resMap = coCommonService.fileUpload(request);
			result.addDataSet("resMap", resMap);
		} catch ( MessageException e ) {
			if( e.getCode() == -100 ) {
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return;  // result;
			} else {
				String message = "파일 업로드 에러";
				logger.error(message, e);
				throw new LoggingException(new String[]{"CO", "BO", "saveNotice", message}, e);
			}
		}
		
		//return result;
		List<Map<String, Object>> fileList = (List<Map<String, Object>>) resMap.get("fileList");
		resDataSet(response, fileList);
		
	}
	
	private void resDataSet(HttpServletResponse response, List<Map<String, Object>> lsRtnUpfl) throws Exception {
		PlatformData resData         = new PlatformData();
		
		// =========================================================================================
		//응답메세지 작성
		// =========================================================================================
		DataSet ds = new DataSet("dsFileUploadMFiles");
		ds.addColumn(new ColumnHeader("CHK"           , DataTypes.STRING));  // CHK
		ds.addColumn(new ColumnHeader("DOC_REG_ID"    , DataTypes.STRING));  // 문서등록ID
		ds.addColumn(new ColumnHeader("DOC_REG_SEQ"   , DataTypes.STRING));  // 파일일련번호
		ds.addColumn(new ColumnHeader("ATFL_NM"       , DataTypes.STRING));  // 업로드파일명
		ds.addColumn(new ColumnHeader("ORI_ATFL_NM"   , DataTypes.STRING));  // 서버에 저장된 파일명
		ds.addColumn(new ColumnHeader("ATFL_LEN"      , DataTypes.LONG  ));  // 파일사이즈
		ds.addColumn(new ColumnHeader("ATFL_STOR_PATH", DataTypes.STRING));  // 서버저장경로
		ds.addColumn(new ColumnHeader("FILE_TYPE"     , DataTypes.STRING));  // 파일확장자명
		ds.addColumn(new ColumnHeader("ETC_FDS_1"     , DataTypes.STRING));  // 파일사용유무 0:미사용 1:사용
		ds.addColumn(new ColumnHeader("ETC_FDS_2"     , DataTypes.STRING));  // 고정 픽셀 값
		ds.addColumn(new ColumnHeader("SAP_DOC_ID"    , DataTypes.STRING));  // SAP_DOC_ID
		ds.addColumn(new ColumnHeader("SAP_DOC_REG_ID", DataTypes.STRING));  // SAP_DOC_REG_ID
		
		if (lsRtnUpfl!=null && lsRtnUpfl.size()>0) {
			for (int i = 0; i < lsRtnUpfl.size(); i++) {
				Map<String, Object> map1 = (Map<String, Object>) lsRtnUpfl.get(i);
				
				// =========================================================================================
				// 업로드 성공시에 클라이언트로 Dataset Return !!!!!!
				// =========================================================================================
				int row = ds.newRow();
				
				ds.set(row, "CHK"              , "0"                                                 ) ;  // CHK
				
				ds.set(row, "DOC_REG_ID"       ,                map1.get("DOC_REG_ID"    )!=null ?     map1.get("DOC_REG_ID"    ) :     map1.get("docRegId"   )) ;  // 문서등록ID
				ds.set(row, "DOC_REG_SEQ"      ,                map1.get("DOC_REG_SEQ"   )!=null ?     map1.get("DOC_REG_SEQ"   ) :     map1.get("docRegSeq"  )) ;  // 파일시퀀스
				ds.set(row, "ATFL_NM"          ,                map1.get("ATFL_NM"       )!=null ?     map1.get("ATFL_NM"       ) :     map1.get("atflNm"     )) ;  // 업로드파일명
				ds.set(row, "ORI_ATFL_NM"      ,                map1.get("ORI_ATFL_NM"   )!=null ?     map1.get("ORI_ATFL_NM"   ) :     map1.get("oriAtflNm"  )) ;  // 서버에 저장된 파일명
				ds.set(row, "ATFL_LEN"         , Long.parseLong(map1.get("ATFL_LEN"      )!=null ? "0"+map1.get("ATFL_LEN"      ) : "0"+map1.get("atflLen"    )));  // 파일사이즈
				ds.set(row, "ATFL_STOR_PATH"   ,                map1.get("ATFL_STOR_PATH")!=null ?     map1.get("ATFL_STOR_PATH") :     map1.get("oriAtflNm"  )) ;  // 서버저장경로
				ds.set(row, "FILE_TYPE"        ,                map1.get("FILE_TYPE"     )!=null ?     map1.get("FILE_TYPE"     ) :     map1.get("fileType"   )) ;  // 파일 확장자명
				ds.set(row, "ETC_FDS_2"        ,                map1.get("ETC_FDS_2"     )!=null ?     map1.get("ETC_FDS_2"     ) :     map1.get("etcFds2"    )) ;  // 고정 픽셀 값
				
				ds.set(row, "ETC_FDS_1"        , "0"                                                 ) ;  // 파일사용유무 0:미사용 1:사용
				
				ds.set(row, "SAP_DOC_ID"       ,                map1.get("SAP_DOC_ID"    )!=null ?     map1.get("SAP_DOC_ID"    ) :     map1.get("sapDocId"   )) ;  // SAP_DOC_ID
				ds.set(row, "SAP_DOC_REG_ID"   ,                map1.get("SAP_DOC_REG_ID")!=null ?     map1.get("SAP_DOC_REG_ID") :     map1.get("sapDocRegId")) ;  // SAP_DOC_REG_ID
				
			}   // for
		}   // if
		
		resData.addDataSet(ds);
		HttpPlatformResponse res = new HttpPlatformResponse(response);
		res.setData(resData);
		res.sendData();
	}
	/* /[2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */
	
}
