package com.ssp.bo.co.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.co.service.OperatorTransferService;
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
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.co.controller
 * <pre>    OperatorTransferController
 * @author lee
 * @since 2022-03-04
 * @version 1.0
 * @see CoOperatorTransferController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-04	lee	최초작성
 */
@Controller
@AccessLevelAdmin(Admin.ROLEADMIN.administrator)
@RequestMapping("/co")
public class CoOperatorTransferController {

    private final Logger logger = LoggerFactory.getLogger(CoCommonController.class);

    @Autowired
    private OperatorTransferService operatorTransferService;

    @Autowired
	private SspPropertyService propertiesService;



    /**
     *
     * <pre>
     * 1. MethodName : selectCoMbrOprtrOrgInfo
     * 2. ClassName : OperatorTransferController
     * 3. Comment : 회원운영자조직정보 조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-04
     * </pre>
     *
     * @param commandMap Map
     * @return NexacroResult
     * @throws Exception exception
     */
    @RequestMapping("/select-co-mbr-oprtr-org-info-list")
    public NexacroResult selectCoMbrOprtrOrgInfoList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            //카멜화
            Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);

            String langCd = StringUtil.getString(searchMap.get("langCd"));
            if(CommUtil.nvl(langCd).equals("")) {
                searchMap.put("langCd", "KO");
            }

            //리스트
            List<Map<String,Object>> list = operatorTransferService.selectCoMbrOprtrOrgInfoList(searchMap);

            //set
            result.addDataSet("ds_output", list);
        } catch ( Exception ne ) {
            String message = "회원운영자정보 목록 조회 에러";
            logger.error(message);
            throw new LoggingException(new String[]{"CO", "BO", "selectCoMbrOprtrOrgInfoList", message}, ne);
        }
        return result;
    }


    /**
     *
     * <pre>
     * 1. MethodName : selectCoMbrOprtrInfoList
     * 2. ClassName : OperatorTransferController
     * 3. Comment : 회원운영자정보 목록조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-04
     * </pre>
     *
     * @param commandMap Map
     * @return NexacroResult
     * @throws Exception exception
     */
    @RequestMapping("/select-co-mbr-oprtr-info-list")
    public NexacroResult selectCoMbrOprtrInfoList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            //카멜화
            Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);

            String langCd = StringUtil.getString(searchMap.get("langCd"));
            if(CommUtil.nvl(langCd).equals("")) {
                searchMap.put("langCd", "KO");
            }
            //리스트
            List<Map<String,Object>> list = operatorTransferService.selectCoMbrOprtrInfoList(searchMap);
            result.addDataSet("ds_output", list);

        } catch ( Exception ne ) {
            String message = "회원운영자정보 인터페이스 목록 조회 에러";
            logger.error(message);
            throw new LoggingException(new String[]{"CO", "BO", "selectCoMbrOprtrInfoList", message}, ne);
        }
        return result;
    }


    /**
     *
     * <pre>
     * 1. MethodName : selectCoMbrOprtrInfoInfList
     * 2. ClassName : OperatorTransferController
     * 3. Comment : 회원운영자정보 인터페이스 목록 조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-04
     * </pre>
     *
     * @param commandMap Map
     * @return NexacroResult
     * @throws Exception exception
     */
    @RequestMapping("/select-co-mbr-oprtr-info-inf-list")
    public NexacroResult selectCoMbrOprtrInfoInfList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            //카멜화
            Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);

            String langCd = StringUtil.getString(searchMap.get("langCd"));
            if(CommUtil.nvl(langCd).equals("")) {
                searchMap.put("langCd", "KO");
            }

            //리스트
            List<Map<String,Object>> list = operatorTransferService.selectCoMbrOprtrInfoInfList(searchMap);
            result.addDataSet("ds_output", list);

        } catch ( Exception ne ) {
            String message = "회원운영자정보 인터페이스 목록 조회 에러";
            logger.error(message);
            throw new LoggingException(new String[]{"CO", "BO", "selectCoMbrOprtrInfoList", message}, ne);
        }
        return result;
    }

    /**
     *
     * <pre>
     * 1. MethodName : saveOperatorTransfer
     * 2. ClassName : OperatorTransferController
     * 3. Comment : 회원운영자정보 인터페이스 저장
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-07
     * </pre>
     *
     * @param saveTMap List
     * @param saveBMap List
     * @return NexacroResult
     * @throws Exception exception
     */
    @RequestMapping("/save-operator-transfer")
    public NexacroResult saveOperatorTransfer(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> saveTMap, @ParamDataSet(name = "ds_save2", required = false) List<Map<String, Object>>  saveBMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            //리스트
            this.operatorTransferService.saveOperatorTransfer(saveTMap, saveBMap);
            result.setErrorCode(0);
        } catch ( MessageException e ) {
            // 에러코드 반환시만 처리하자
            if( e.getCode() == -100 ) {
                result.setErrorCode(e.getCode());
                result.setErrorMsg(e.getMessage());
                return result;
            } else {
                String message = "에러로그 목록 조회 에러";
                logger.error(message);
                throw new LoggingException(new String[]{"CO", "BO", "comCdClsfSave", message}, e);
            }
        }

        return result;
    }

    /**
    *
    * <pre>
    * 1. MethodName : selectOprtrOrgInfoList
    * 2. ClassName : OperatorTransferController
    * 3. Comment : 운영자조직목록조회
    * 4. 작성자 :
    * 5. 작성일 : 2022-03-08
    * </pre>
    *
    * @param commandMap Map
    * @return NexacroResult
    * @throws Exception exception
    */
   @RequestMapping("/select-oprtr-org-info-list.do")
   public NexacroResult selectOprtrOrgInfoList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
       NexacroResult result = new NexacroResult();
       try {
           //카멜화
           Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);

           String langCd = StringUtil.getString(searchMap.get("langCd"));
           if(CommUtil.nvl(langCd).equals("")) {
               searchMap.put("langCd", "KO");
           }

           int totalCount = operatorTransferService.selectOprtrOrgInfoListCount(searchMap);
           List<Map<String,Object>> list = operatorTransferService.selectOprtrOrgInfoList(searchMap);

           //set
           result.addDataSet("ds_output", list);
           result.addVariable("totalCount", totalCount);

           // 자동완성용 기능 추가.
           result.addVariable("selectOrgCount", totalCount);
           if( totalCount == 1 && list.size() > 0 ) {
               result.addVariable("selectOrgCd", list.get(0).get("ORG_CD"));
               result.addVariable("selectOrgNm", list.get(0).get("ORG_NM"));
           }

       } catch ( Exception ne ) {
           String message = "운영자조직목록조회 에러";
           logger.error(message);
           throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_05", message}, ne);
       }
       return result;
   }

   /**
   *
   * <pre>
   * 1. MethodName : selectOprtrInfoList
   * 2. ClassName : OperatorTransferController
   * 3. Comment : 운영자 목록 조회
   * 4. 작성자 :
   * 5. 작성일 : 2022-03-08
   * </pre>
   *
   * @param commandMap Map
   * @return NexacroResult
   * @throws Exception exception
   */
  @RequestMapping("/select-oprtr-info-list.do")
  public NexacroResult selectOprtrInfoList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
      NexacroResult result = new NexacroResult();
      try {
          //카멜화
          Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);
          searchMap.put("coCd", propertiesService.getString("ssp.cocd"));
          int totalCount = operatorTransferService.selectOprtrInfoListCount(searchMap);
          List<Map<String,Object>> list = operatorTransferService.selectOprtrInfoList(searchMap);

          //set
          result.addDataSet("ds_output", list);
          result.addVariable("totalCount", totalCount);

          // 자동완성용 기능 추가.
          result.addVariable("selectOprtrCount", totalCount);
          if( totalCount == 1 && list.size() > 0 ) {
              result.addVariable("selectOprtrId", list.get(0).get("OPRTR_ID"));
              result.addVariable("selectOprtrNm", list.get(0).get("OPRTR_NM"));
          }

      } catch ( Exception ne ) {
          String message = "운영자 목록 조회 에러";
          logger.error(message);
          throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_04", message}, ne);
      }
      return result;
  }
  
  /**
	 * <pre>
	 * 1. MethodName : selectMbrOprtrInfo
	 * 2. ClassName  : CoCommonPopupController.java
	 * 3. Comment    : 운영자 상세 정보 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.03.15
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/select-mbr-oprtr-info.do")
	public NexacroResult selectMbrOprtrInfo(@ParamDataSet(name = "ds_search", required = false) Map<String,Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
		    String coCd = StringUtil.getString(searchMap.get("coCd"));
			if(CommUtil.nvl(coCd).equals("")) {
				searchMap.put("coCd", admin.get("CO_CD"));
			}
			searchMap.put("type", "BO");
			Map<String,Object> rtnMap = operatorTransferService.selectMbrOprtrInfo(searchMap); 
			result.addDataSet("ds_output1", rtnMap);
		} catch (Exception ne) {
			String message = "운영자 상세 정보 팝업 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_22", message}, ne);
		}
		
		return result;
	}


	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCoMbrOprtrInfoExcelList
	 * 2. ClassName : CoOperatorTransferController
	 * 3. Comment : 운영자 이관등록 엑셀 다운로드 조회
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-05-17
	 * </pre>
	 *
	 * @param searchMap Map
	 * @return NexacroResult
	 * @throws Exception exceltion
	 */
	@RequestMapping("/select-co-mbr-oprtr-info-excel-list.do")
	public NexacroResult selectCoMbrOprtrInfoExcelList(@ParamDataSet(name = "ds_search", required = false) Map<String,Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			searchMap = getCamelCaseMap(searchMap);

			List<Map<String,Object>> excelList = operatorTransferService.selectCoMbrOprtrInfoExcelList(searchMap);
			result.addDataSet("ds_output", excelList);

		} catch (Exception ne) {
			logger.error(ne.getMessage(), ne);
			String message = "운영자 이관등록 엑셀 다운로드 조회";
			throw new LoggingException(new String[]{"CO", "BO", "select-co-mbr-oprtr-info-excel-list", message}, ne);
		}

		return result;
	}


	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCoMbrOprtrInfoAllList
	 * 2. ClassName : CoOperatorTransferController
	 * 3. Comment : 운영자 이관등록 전체 조회
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-05-17
	 * </pre>
	 *
	 * @param commandMap Map
	 * @return NexacroResult
	 * @throws Exception exceltion
	 */
	@RequestMapping("/select-co-mbr-oprtr-info-all-list.do")
	public NexacroResult selectCoMbrOprtrInfoAllList(@ParamDataSet(name = "ds_search", required = false) Map<String,Object> commandMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			commandMap = getCamelCaseMap(commandMap);

			//전체 조회를 위한 초기화
			commandMap.put("orgCd", "");
			commandMap.put("orgNm", "");
			commandMap.put("useYn", "");

			List<Map<String,Object>> list = operatorTransferService.selectCoMbrOprtrInfoInfList(commandMap);
			result.addDataSet("ds_output1", list);

			List<Map<String,Object>> list2 = operatorTransferService.selectCoMbrOprtrInfoList(commandMap);
			result.addDataSet("ds_output2", list2);

		} catch (Exception ne) {
			logger.error(ne.getMessage(), ne);
			String message = "운영자 이관등록 엑셀 다운로드 조회";
			throw new LoggingException(new String[]{"CO", "BO", "select-co-mbr-oprtr-info-excel-list", message}, ne);
		}

		return result;
	}



	/**
	 * camel case
	 * @param searchMap Map
	 * @return Map
	 */
	static Map<String, Object> getCamelCaseMap(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) {
		searchMap = CommonUtil.toCamelCaseMap(searchMap);

		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("")) {
			searchMap.put("coCd", admin.get("CO_CD"));
		}

		return searchMap;
	}


}
