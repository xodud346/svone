package com.ssp.bo.pr.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pr.service.PrPrdSprService;
import com.ssp.bo.pr.service.PrPropertyService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  SSP 전시상품 컨트롤러
 * @package com.ssp.bo.pr.controller
 * <pre>
 * @author  박성진
 * @since   2022.04.25
 * @version 1.0
 * @see PrdSprController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.25		최초작성
 */
@Controller
@RequestMapping("/pr/ctg-mng")
public class PrPrdSprController {
	private final Logger log = LoggerFactory.getLogger(PrPrdSprController.class);
		
	@Autowired
    private PrPrdSprService prprdsprservice;

	/**
	 * <pre>
	 * 1. MethodName : selectPrdSprList
	 * 2. ClassName  : PrdSprController.java
	 * 3. Comment    : SSP 전시상품 목록
	 * 4. 작성자       : 박성진
	 * 5. 작성일       : 2022.04.25
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-prd-spr-list.do")
	public NexacroResult selectPrdSprList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			int totalCount = prprdsprservice.selectPrdSprCount(searchMap);
			List<Map<String,Object>> list = prprdsprservice.selectPrdSprList(searchMap);
			result.addDataSet("ds_output", list);
			result.addVariable("totalCount", totalCount);
						
		} catch (Exception e ) {
			String message = "SSP 전시상품 목록 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_24", "SSP 전시상품 목록"}, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectPrdSpr
	 * 2. ClassName  : PrdSprController.java
	 * 3. Comment    : SSP 전시상품 조회
	 * 4. 작성자       : 박성진
	 * 5. 작성일       : 2022.04.25
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-prd-spr.do")
	public NexacroResult selectPrdSpr(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			int totalCount = prprdsprservice.selectPrdClcdCount(searchMap);
			result.addVariable("prdTotalCount", totalCount);
			
			if(totalCount < 1) {
				List<Map<String,Object>> list = prprdsprservice.selectPrdSpr(searchMap);
				result.addDataSet("ds_output", list);
			}
			
		} catch (Exception e ) {
			String message = "SSP 전시상품 상품군 상세 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시상품 상품군 상세"}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/select-search-disp.do")
	public NexacroResult selectSearchDisp(@ParamDataSet(name = "ds_search2", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			List<Map<String,Object>> list = prprdsprservice.selectSearchDisp(searchMap);
			result.addDataSet("ds_output", list);
			
		} catch (Exception e ) {
			String message = "SSP 전시상품 상품군 상세 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시상품 상품군 상세"}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/select-prd-id.do")
	public NexacroResult selectPrdId(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			List<Map<String,Object>> list = prprdsprservice.selectPrdId(searchMap);
			result.addDataSet("ds_output", list);
			
		} catch (Exception e ) {
			String message = "SSP 전시상품 상품ID 상세 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시상품 상품ID 상세"}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/select-prd-spr-opt-list.do")
	public NexacroResult selectPrdSprOptList(@ParamDataSet(name = "ds_product", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			int totalCount = prprdsprservice.selectPrdSprOptCount(searchMap);
			
			if(totalCount > 0){
				List<Map<String,Object>> list = prprdsprservice.selectPrdSprOptList(searchMap);
				
				result.addDataSet("ds_output", list);
				result.addVariable("totalCount", totalCount);
				
				for(int i = 0; i < list.size(); ++i) {
					list.get(i).put("CHK", "0");
				}
			}
						
		} catch (Exception e ) {
			String message = "SSP 전시상품 옵션 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시상품 옵션 조회 에러"}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/select-prd-spr-add-list.do")
	public NexacroResult selectPrdSprAddList(@ParamDataSet(name = "ds_product", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			int totalCount = prprdsprservice.selectPrdSprAddCount(searchMap);
			
			if(totalCount > 0) {
				List<Map<String,Object>> list = prprdsprservice.selectPrdSprAddList(searchMap);
				result.addDataSet("ds_output", list);
				result.addVariable("totalCount", totalCount);
			}
						
		} catch (Exception e ) {
			String message = "SSP 전시상품 상세 옵션 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시상품 상세 옵션 조회 에러"}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/select-prd-spr-conn-list.do")
	public NexacroResult selectPrdSprConnList(@ParamDataSet(name = "ds_product", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			int totalCount = prprdsprservice.selectPrdSprConnCount(searchMap);
			
			if(totalCount > 0){
				List<Map<String,Object>> list = prprdsprservice.selectPrdSprConnList(searchMap);
				result.addDataSet("ds_output", list);
				result.addVariable("totalCount", totalCount);
			}
						
		} catch (Exception e ) {
			String message = "SSP 전시상품 연결 상품 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시상품 연결 상품 조회 에러"}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/select-prd-spr-stg-list.do")
	public NexacroResult selectPrdSprStgList(@ParamDataSet(name = "ds_product", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			int totalCount = prprdsprservice.selectPrdSprStgCount(searchMap);
			
			if(totalCount > 0) {
				List<Map<String,Object>> list = prprdsprservice.selectPrdSprStgList(searchMap);
				
				for(int i = 0; i < list.size(); ++i) {
					list.get(i).put("STG_CHK", "0");
					
					Object check = list.get(i).get("STG_FILE");
					
					if(check.equals("Y")) {
						list.get(i).put("TEST", "0");
					}
				}
				
				result.addDataSet("ds_output", list);
				result.addVariable("totalCount", totalCount);
			}
						
		} catch (Exception e ) {
			String message = "SSP 전시상품 추가 정보 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시상품 추가 정보 조회 에러"}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/select-prd-spr-stg-dtl-list.do")
	public NexacroResult selectPrdSprStgDtlList(@ParamDataSet(name = "ds_product", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			int totalCount = prprdsprservice.selectPrdSprStgDtlCount(searchMap);
			
			if(totalCount > 0) {
				List<Map<String,Object>> list = prprdsprservice.selectPrdSprStgDtlList(searchMap);
				result.addDataSet("ds_output", list);
				result.addVariable("totalCount", totalCount);
			}
						
		} catch (Exception e ) {
			String message = "SSP 전시상품 상세 추가 정보 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시상품 상세 추가 정보 조회 에러"}, e) {};
		}
		return result;
	}
	/**
	 * <pre>
	 * 1. MethodName : savePrdSpr
	 * 2. ClassName  : PrdSprController.java
	 * 3. Comment    : SSP 전시상품 저장
	 * 4. 작성자       : 박성진
	 * 5. 작성일       : 2022.04.25
	 * </pre>
	 *
	 * @param commandMapList List
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping(value = "/save-prd-spr.do")
	public NexacroResult savePrdSpr(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap0,
			@ParamDataSet(name = "ds_product", required = false) Map<String, Object> commandMap1,
			@ParamDataSet(name = "ds_list", required = false) Map<String, Object> commandMap2,
			@ParamDataSet(name = "ds_listAdd", required = false) Map<String, Object> commandMap3
			) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
        	Map<String, Object> param = new HashMap<>();
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			
			param.put("CO_CD", admin.get("CO_CD"));
			param.put("USER_ID", admin.get("OPRTR_ID"));
        	
        	param.putAll(commandMap0); //사용여부, 전시상품구분, 매익율, 추가정보 수취
        	param.putAll(commandMap1); //기본정보
        	param.putAll(commandMap2); //대표 상품 정보1
        	param.putAll(commandMap3); //대표 상품 정보2
        	
        	prprdsprservice.savePrdSpr(param);
		} catch ( Exception e ) {
			String message = "SSP 전시상품 저장 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시상품 저장"}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/save-two-prd-spr.do")
	public NexacroResult savePrdSprTwo(@ParamDataSet(name = "ds_option", required = false) List<Map<String, Object>> optList) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			Map<String, Object> param = new HashMap<>();
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			
			param.put("CO_CD", admin.get("CO_CD"));
			param.put("USER_ID", admin.get("OPRTR_ID"));
			param.put("optList", optList);//옵션 설정
			
        	prprdsprservice.savePrdSprTwo(param);
		} catch ( Exception e ) {
			String message = "SSP 전시상품 옵션 저장 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시상품 옵션 저장"}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/save-add-info-prd-spr.do")
	public NexacroResult savePrdSpraddInfo(@ParamDataSet(name = "ds_addInfo", required = false) List<Map<String, Object>> infoList) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			Map<String, Object> param = new HashMap<>();
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			
			param.put("CO_CD", admin.get("CO_CD"));
			param.put("USER_ID", admin.get("OPRTR_ID"));
			param.put("infoList", infoList);//상세 옵션 설정
			
        	prprdsprservice.savePrdSpraddInfo(param);
		} catch ( Exception e ) {
			String message = "SSP 전시상품 상세 옵션 저장 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시상품 상세 옵션 저장"}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/save-conn-prd-spr.do")
	public NexacroResult savePrdSprConn(@ParamDataSet(name = "ds_pdtCon", required = false) List<Map<String, Object>> connList) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			Map<String, Object> param = new HashMap<>();
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			
			param.put("CO_CD", admin.get("CO_CD"));
			param.put("USER_ID", admin.get("OPRTR_ID"));
			param.put("connList", connList);//연결 상품 설정
        	
        	prprdsprservice.savePrdSprConn(param);
		} catch ( Exception e ) {
			String message = "SSP 전시상품 연결 상품 저장 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시상품 연결 상품 저장"}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/save-stg-prd-spr.do")
	public NexacroResult savePrdSprStg(@ParamDataSet(name = "ds_addInfoStg", required = false) List<Map<String, Object>> stgList) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			Map<String, Object> param = new HashMap<>();
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			
			param.put("CO_CD", admin.get("CO_CD"));
			param.put("USER_ID", admin.get("OPRTR_ID"));
			param.put("stgList", stgList);//추가 정보 설정
			
        	prprdsprservice.savePrdSprStg(param);
		} catch ( Exception e ) {
			String message = "SSP 전시상품 추가 정보 저장 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시상품 추가 정보 저장"}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/save-stg-dtl-prd-spr.do")
	public NexacroResult savePrdSprStgDtl(@ParamDataSet(name = "ds_addInfoStgDtls", required = false) List<Map<String, Object>> stgDtlList) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			Map<String, Object> param = new HashMap<>();
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			
			param.put("CO_CD", admin.get("CO_CD"));
			param.put("USER_ID", admin.get("OPRTR_ID"));
			param.put("stgDtlList", stgDtlList);//추가 정보 상세 설정
			
        	prprdsprservice.savePrdSprStgDtl(param);
		} catch ( Exception e ) {
			String message = "SSP 전시상품 추가 상세 정보 저장 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시상품 추가 상세 정보 저장"}, e) {};
		}
		return result;
	}

	@RequestMapping(value = "/save-prd-spr-rsn.do")
	public NexacroResult savePrdSprRsn(@ParamDataSet(name = "ds_basicSave", required = false) Map<String, Object> commandMap0,
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap1
			) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
        	Map<String, Object> param = new HashMap<>();
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			
			param.put("CO_CD", admin.get("CO_CD"));
			param.put("USER_ID", admin.get("OPRTR_ID"));
        	param.putAll(commandMap0); //변경 이유
        	param.putAll(commandMap1); //PRD_CLCD 값
        	
        	prprdsprservice.savePrdSprRsn(param);
		} catch ( Exception e ) {
			String message = "SSP 전시상품 변경 이유 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_27", "SSP 전시상품 변경 이유"}, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : updatePrdSpr
	 * 2. ClassName  : PrdSprController.java
	 * 3. Comment    : SSP 전시상품 수정
	 * 4. 작성자       : 박성진
	 * 5. 작성일       : 2022.04.25
	 * </pre>
	 *
	 * @param commandMapList List
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	
	@RequestMapping(value = "/update-prd-spr.do")
	public NexacroResult updatePrdSpr(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap0,
			@ParamDataSet(name = "ds_product", required = false) Map<String, Object> commandMap1,
			@ParamDataSet(name = "ds_list", required = false) Map<String, Object> commandMap2,
			@ParamDataSet(name = "ds_listAdd", required = false) Map<String, Object> commandMap3
			) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
        	Map<String, Object> param = new HashMap<>();
        	
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			param.put("CO_CD", admin.get("CO_CD"));
			param.put("UPDPSN_ID", admin.get("OPRTR_ID"));
        	
        	param.putAll(commandMap0);  //사용여부, 전시상품구분, 매익율, 추가정보 수취
        	param.putAll(commandMap1);  //기본정보
        	param.putAll(commandMap2);  //대표 상품 정보1
        	param.putAll(commandMap3);  //대표 상품 정보2
        	param.put("CO_CD", "1000"); 
        	
        	prprdsprservice.updatePrdSpr(param);
		} catch ( Exception e ) {
			String message = "SSP 전시 상품 수정 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시상품 수정"}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/update-list-srt.do")
	public NexacroResult updateSrtSo(@ParamDataSet(name = "ds_bgList", required = false) List<Map<String, Object>> srtList) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
        	Map<String, Object> param = new HashMap<>();
        	
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			param.put("CO_CD", admin.get("CO_CD"));
			param.put("UPDPSN_ID", admin.get("OPRTR_ID"));
        	
        	param.put("srtList", srtList);
        	
        	prprdsprservice.updateSrtSo(param);
		} catch ( Exception e ) {
			String message = "SSP 전시 상품 진열 순서 변경";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시 상품 진열 순서 변경"}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/update-prd-spr-opt.do")
	public NexacroResult updatePrdSprOpt(@ParamDataSet(name = "ds_option", required = false) List<Map<String, Object>> optList) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
        	
        	for(int i = 0; i < optList.size(); i++) {
        		optList.get(i).put("CO_CD", admin.get("CO_CD"));
        		optList.get(i).put("UPDPSN_ID", admin.get("OPRTR_ID"));
        	}
        	
        	prprdsprservice.updatePrdSprOpt(optList);
		} catch ( Exception e ) {
			String message = "SSP 전시 상품 옵션 수정";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시 상품 옵션 수정"}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/update-prd-spr-opt-dtl.do")
	public NexacroResult updatePrdSprOptDtl(@ParamDataSet(name = "ds_addInfo", required = false) List<Map<String, Object>> optDtlList) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
        	
        	for(int i = 0; i < optDtlList.size(); i++) {
        		optDtlList.get(i).put("CO_CD", admin.get("CO_CD"));
        		optDtlList.get(i).put("UPDPSN_ID", admin.get("OPRTR_ID"));
        	}
        	
        	prprdsprservice.updatePrdSprOptDtl(optDtlList);
		} catch ( Exception e ) {
			String message = "SSP 전시 상품 상세 옵션 수정";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시 상품 상세 옵션 수정"}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/update-prd-spr-stg.do")
	public NexacroResult updatePrdSprStg(@ParamDataSet(name = "ds_addInfoStg", required = false) List<Map<String, Object>> stgList) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
        	
			for(int i = 0; i < stgList.size(); i++) {
				stgList.get(i).put("CO_CD", admin.get("CO_CD"));
				stgList.get(i).put("UPDPSN_ID", admin.get("OPRTR_ID"));
        	}
        	
        	prprdsprservice.updatePrdSprStg(stgList);
		} catch ( Exception e ) {
			String message = "SSP 전시 상품 추가 정보 수정";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시 상품 추가 정보 수정"}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/update-prd-spr-stg-dtl.do")
	public NexacroResult updatePrdSprStgDtl(@ParamDataSet(name = "ds_addInfoStgDtls", required = false) List<Map<String, Object>> stgDtlList) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			
			for(int i = 0; i < stgDtlList.size(); i++) {
				stgDtlList.get(i).put("CO_CD", admin.get("CO_CD"));
				stgDtlList.get(i).put("UPDPSN_ID", admin.get("OPRTR_ID"));
        	}
        	
        	prprdsprservice.updatePrdSprStgDtl(stgDtlList);
		} catch ( Exception e ) {
			String message = "SSP 전시 상품 상세 추가 정보 수정";
			log.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_25", "SSP 전시 상품 상세 추가 정보 수정"}, e) {};
		}
		return result;
	}
}
