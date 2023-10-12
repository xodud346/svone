package com.ssp.bo.pr.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pr.service.PrManufacturerService;
import com.ssp.bo.pr.service.PrProductPopupService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 * @title  SSP 상품 공통팝업컨트롤러
 * @package com.ssp.bo.pr.controller
 * <pre>
 * @author  조지훈
 * @since   2022.02.24
 * @version 1.0
 * @see PrManufacturerController
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.02.24    조지훈        최초작성
 * 2022.02.25    조지훈        카테고리추가
 */
@Controller
@RequestMapping("/pr/prd-popup")
public class PrProductPopupController {
	
	private Logger logger = LoggerFactory.getLogger(PrProductPopupController.class);
	
	@Autowired
	private PrManufacturerService manufacturerService;
	
	@Autowired
	private PrProductPopupService prProductPopupService;
	
	@Autowired
    private SspPropertyService propertiesService;
	
	/**
     * <pre>
     * 1. MethodName : selectManufacturerPopupList
     * 2. ClassName  : PrProductPopupController
     * 3. Comment    : 제조원 팝업 조회
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.02.22
     * </pre>
     * @return NexacroResult
     */
	@RequestMapping("/select-manufacturer-popup-list.do")
	public NexacroResult selectManufacturerPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
        try {
        	//int totalCount = manufacturerService.selectManufacturerCount(searchMap);
        	List<Map<String, Object>> manufacturerList = manufacturerService.selectManufacturerList(searchMap);
        	int totalCount = manufacturerList.size();
        	result.addVariable("totalCount", totalCount);
            result.addDataSet("manufacturerList", manufacturerList);
            
        	result.addVariable("searchMnfrCount", totalCount);
            if(manufacturerList!=null && totalCount == 1) {
            	result.addVariable("searchMnfrNo", manufacturerList.get(0).get("MNFR_NO"));
            	result.addVariable("searchMnfrNm", manufacturerList.get(0).get("MNFR_NM"));
        	}
        } catch (Exception e) {
            logger.error("제조원목록 조회 실패");
            throw new LoggingException(new String[] { "PR_POP", "BO", "SSP_BO_PP_08", "제조원 팝업 조회 실패" }, e);
        }
        return result;
	}
	
	/**
     * <pre>
     * 1. MethodName : selectCategoryPopupList
     * 2. ClassName  : PrProductPopupController
     * 3. Comment    : 카테고리팝업 조회
     * @param PRD_CLCD	카테고리ID(옵션)
	 * @param PRD_CLSF_NM	카테고리명(옵션)
	 * @param LWST_CD_YN	최하위여부(옵션) *상품군여부(상품군에만 담당자가 배정된다.)
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.02.22
     * </pre>
     * @return NexacroResult
     */
	@RequestMapping("/select-category-popup-list.do")
	public NexacroResult selectCategoryPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
        try {
        	//int totalCount = prProductPopupService.selectCategoryPopupCount(searchMap);
        	List<Map<String, Object>> list =  prProductPopupService.selectCategoryPopupList(searchMap);
        	int totalCount = list.size();
            result.addVariable("totalCount", totalCount);
            result.addDataSet("ds_list", list);
            
            result.addVariable("searchCategoryCount", totalCount);
            if(list!=null && totalCount == 1) {
            	result.addVariable("searchPrdClcd", list.get(0).get("PRD_CLCD"));
            	result.addVariable("searchPrdClsfNm", list.get(0).get("PRD_CLSF_NM"));	//카테고리명
            	result.addVariable("searchFullPrdClsfNm", list.get(0).get("FULL_PRD_CLSF_NM"));	//full경로
        	}
        } catch (Exception e) {
            logger.error("카테고리팝업 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PP_08", "카테고리팝업 조회 실패" }, e);
        }
        return result;
	}
	
	/**
     * <pre>
     * 1. MethodName : selectProductNoticePopupList
     * 2. ClassName  : PrProductPopupController
     * 3. Comment    : 품목고시 목록
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.02.22
     * </pre>
     * @return NexacroResult
     */
	@RequestMapping("/select-product-notice-popup-list.do")
	public NexacroResult selectProductNoticePopupList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
        try {
        	//int totalCount = prProductPopupService.selectProductNoticePopupCount(searchMap);
        	List<Map<String, Object>> list =  prProductPopupService.selectProductNoticePopupList(searchMap);
        	int totalCount = list.size();
            result.addVariable("totalCount", totalCount);
            result.addDataSet("ds_list", list);
            
            result.addVariable("searchNotiItmCount", totalCount);
            if(list!= null && totalCount == 1) {
            	result.addVariable("searchNotiItmId", list.get(0).get("NOTI_ITM_ID"));
            	result.addVariable("searchNotiItmNm", list.get(0).get("NOTI_ITM_NM"));
        	}
        } catch (Exception e) {
            logger.error("고시품목팝업 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_47", "고시품목팝업 조회 실패" }, e);
        }
        return result;
	}
	
	/**
     * <pre>
     * 1. MethodName : selectProductPopupList
     * 2. ClassName  : PrProductPopupController
     * 3. Comment    : 상품ID 목록
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.03.17
     * </pre>
     * @return NexacroResult
     */
	@RequestMapping("/select-product-popup-list.do")
	public NexacroResult selectProductPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
        try {
        	//int totalCount = prProductPopupService.selectProductPopupCount(searchMap);
        	List<Map<String, Object>> list =  prProductPopupService.selectProductPopupList(searchMap);
        	int totalCount = list.size();
            result.addVariable("totalCount", totalCount);
            result.addDataSet("ds_list", list);
            
            result.addVariable("searchPrdCount", totalCount);
            if(list!=null && totalCount == 1) {
            	result.addVariable("searchPrdId", list.get(0).get("PRD_ID"));
            	result.addVariable("searchPrdIdView", list.get(0).get("PRD_ID_VIEW"));
            	result.addVariable("searchPrdNm", list.get(0).get("PRD_NM"));
            	result.addVariable("searchAttrVal", list.get(0).get("ATTR_VAL"));
        	}
        } catch (Exception e) {
            logger.error("상품목록팝업 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PP_16", "상품목록 팝업 조회 실패" }, e);
        }
        return result;
	}
	
	
	/**
     * <pre>
     * 1. MethodName : selectProductPopupList
     * 2. ClassName  : PrProductPopupController
     * 3. Comment    : 상품ID 목록
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.03.17
     * </pre>
     * @return NexacroResult
     */
	@RequestMapping("/select-product-popup-list-for-dup-proc.do")
	public NexacroResult selectProductPopupListForDupProc(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
        try {
        	//int totalCount = prProductPopupService.selectProductPopupCount(searchMap);
        	List<Map<String, Object>> list =  prProductPopupService.selectProductPopupListForDupProc(searchMap);
        	int totalCount = list.size();
            result.addVariable("totalCount", totalCount);
            result.addDataSet("ds_list", list);
            
            result.addVariable("searchPrdCount", totalCount);
            if(list!=null && totalCount == 1) {
            	result.addVariable("searchPrdId", list.get(0).get("PRD_ID"));
            	result.addVariable("searchPrdIdView", list.get(0).get("PRD_ID_VIEW"));
            	result.addVariable("searchPrdNm", list.get(0).get("PRD_NM"));
            	result.addVariable("searchAttrVal", list.get(0).get("ATTR_VAL"));
        	}
        } catch (Exception e) {
            logger.error("상품중복처리목록팝업 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PP_38", "상품중복처리목록팝업 팝업 조회 실패" }, e);
        }
        return result;
	}
	
	
	
	/**
     * <pre>
     * 1. MethodName : selectMroPrdPopupList
     * 2. ClassName  : PrProductPopupController
     * 3. Comment    : S-MRO 카테고리 검색 
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.03.18
     * </pre>
     * @return NexacroResult
     */
	@RequestMapping(value = "/select-mroprd-popup-list.do")
	public NexacroResult selectMroPrdPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
	        
	        int totalCount = prProductPopupService.selectMroPrdPopupListCount(searchMap);
			List<Map<String,Object>> list = prProductPopupService.selectMroPrdPopupList(searchMap);

			//조회한 데이터가 1개인지 여부 확인
			result.addVariable("mroPrdCount", totalCount);
			if( totalCount == 1 && list.size() > 0 ) {
				result.addVariable("searchMroPrdClcd", list.get(0).get("MRO_PRD_CLCD"));
				result.addVariable("searchMroPrdClsfNm", list.get(0).get("MRO_PRD_CLSF_NM"));
				result.addVariable("searchMroPrdClsfNmTemp", list.get(0).get("TEMP_MRO_PRD_CLSF_NM"));
			}
			
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		} catch (Exception ne) {
			String message = "S-MRO카테고리검색 팝업 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"PR_POP", "BO", "SSP_BO_PA_46", message}, ne);
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectCtryPopupList
	 * 2. ClassName  : PrProductPopupController
	 * 3. Comment    : 원산지 검색
	 * 4. 작성자       : 이원준
	 * 5. 작성일       : 2022.03.18
	 * </pre>
	 * @return NexacroResult
	 */
	@RequestMapping(value = "/select-ctry-popup-list.do")
	public NexacroResult selectCtryPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			
			int totalCount = prProductPopupService.selectCtryPopupListCount(searchMap);
			List<Map<String,Object>> list = prProductPopupService.selectCtryPopupList(searchMap);
			
			//조회한 데이터가 1개인지 여부 확인
			result.addVariable("ctryCount", totalCount);
			if( totalCount == 1 && list.size() > 0 ) {
				result.addVariable("searchCtrySprcd", list.get(0).get("CTRY_SPR_CD"));
				result.addVariable("searchCtryNm", list.get(0).get("CTRY_NM"));
			}
			
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		} catch (Exception ne) {
			String message = "원산지 검색 팝업 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"PR_POP", "BO", "SSP_BO_PP_09", message}, ne);
		}
		return result;
	}
	
	/**
     * <pre>
     * 1. MethodName : selectPrdClsfList
     * 2. ClassName  : PrProductPopupController
     * 3. Comment    : 카테고리 추천&조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.03.18
     * </pre>
     * @return NexacroResult
     */
	@RequestMapping(value = "/select-prd-clsf-list.do")
	public NexacroResult selectPrdClsfList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			
			List<Map<String,Object>> list = prProductPopupService.selectPrdClsfList(searchMap);
			
			result.addDataSet("ds_output", list);
		} catch (Exception ne) {
			String message = "diquest 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_49", message}, ne);
		}
		return result;
	}
	
	/**
     * <pre>
     * 1. MethodName : saveNewPrdStats
     * 2. ClassName  : PrProductPopupController
     * 3. Comment    : 카테고리 추천 R&D 이관이력 저장
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.03.18
     * </pre>
     * @return NexacroResult
     */
	@RequestMapping(value = "/save-new-prd-stats.do")
	public NexacroResult saveNewPrdStats(@ParamDataSet(name = "ds_detail", required = false) Map<String, Object> commandMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			commandMap.put("CO_CD", admin.get("CO_CD"));
			commandMap.put("USER_ID", admin.get("OPRTR_ID"));
			result = prProductPopupService.saveNewPrdStats(commandMap);
			
		} catch (Exception ne) {
			String message = "이관이력 상태 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_49", message}, ne);
		}
		return result;
	}
	
	/**
     * <pre>
     * 1. MethodName : selectProductPopupList
     * 2. ClassName  : PrProductPopupController
     * 3. Comment    : 배지팝업
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.29
     * </pre>
     * @return NexacroResult
     */
	@RequestMapping("/select-bg-popup-list.do")
	public NexacroResult selectBgPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
        try {
        	List<Map<String, Object>> list =  prProductPopupService.selectBgPopupList(searchMap);
        	int totalCount = list.size();
            result.addVariable("totalCount", totalCount);
            result.addDataSet("ds_list", list);
            
            result.addVariable("searchBgCount", totalCount);
            if(list!=null && totalCount == 1) {
            	result.addVariable("searchBgSeq", list.get(0).get("BG_SEQ"));
            	result.addVariable("searchBgNm", list.get(0).get("BG_NM"));
        	}
        } catch (Exception e) {
            logger.error("배지팝업 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_51", "배지팝업 팝업 조회 실패" }, e);
        }
        return result;
	}

	/**
     * <pre>
     * 1. MethodName : selectNewPrdProcHst
     * 2. ClassName  : PrProductPopupController
     * 3. Comment    : R&D 이관이력
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.03.18
     * </pre>
     * @return NexacroResult
     */
	@RequestMapping("/select-new-prd-proc-hst.do")
	public NexacroResult selectNewPrdProcHst(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			List<Map<String, Object>> list =  prProductPopupService.selectNewPrdProcHst(searchMap);
			int totalCount = list.size();
			result.addVariable("totalCount", totalCount);
			result.addDataSet("ds_list", list);
		} catch (Exception e) {
			logger.error("R&D이관 이력 조회 실패");
			throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_50", "R&D이관 이력 조회 실패" }, e);
		}
		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectSpecialIndustryGroup
	 * 2. ClassName  : PrProductPopupController
	 * 3. Comment    : 특화산업군 조회
	 * 4. 작성자       : 김영남
	 * 5. 작성일       : 2023.05.24
	 * </pre>
	 * @return NexacroResult
	 */
	@RequestMapping("/select-special-industry-group.do")
	public NexacroResult selectSpecialIndustryGroup(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			List<Map<String, Object>> list =  prProductPopupService.selectSpecialIndustryGroup(searchMap);
			int totalCount = list.size();
			result.addVariable("totalCount", totalCount);
			result.addDataSet("ds_list1", list);
		} catch (Exception e) {
			logger.error("특화산업군 조회 실패");
			throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_21", "특화산업군 조회 실패" }, e);
		}
		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectSpecialIndustryGroupMappList
	 * 2. ClassName  : PrProductPopupController
	 * 3. Comment    : 특화산업군 매핑 목록 조회
	 * 4. 작성자       : 김영남
	 * 5. 작성일       : 2023.05.24
	 * </pre>
	 * @return NexacroResult
	 */
	@RequestMapping("/select-special-industry-group-mapp-list.do")
	public NexacroResult selectSpecialIndustryGroupMappList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			List<Map<String, Object>> list =  prProductPopupService.selectSpecialIndustryGroupMappList(searchMap);
			int totalCount = list.size();
			result.addVariable("totalCount", totalCount);
			result.addDataSet("ds_list2", list);
		} catch (Exception e) {
			logger.error("특화산업군 카테고리 조회 실패");
			throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_21", "특화산업군 카테고리 조회 실패" }, e);
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : updateSpecialIndustryGroupMappList
	 * 2. ClassName  : PrProductPopupController
	 * 3. Comment    : 특화산업군 수정
	 * 4. 작성자       : 김영남
	 * 5. 작성일       : 2023.05.24
	 * </pre>
	 * @return NexacroResult
	 */
	@RequestMapping(value = "/update-special-industry-group-mapp-list.do")
	public NexacroResult updateSpecialIndustryGroupMappList(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			prProductPopupService.updateSpecialIndustryGroupMappList(commandMap, admin);

		} catch ( Exception e ) {
			String message = "특화산업군 카테고리 저장";
			logger.error(message, e);
			throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_21", "특화산업군 카테고리 저장"}, e) {};
		}
		return result;
	}
	
}
