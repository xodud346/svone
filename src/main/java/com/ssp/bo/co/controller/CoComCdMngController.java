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
import com.ssp.bo.co.service.CoComCdMngService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.legacy.mall.common.annotations.AccessLevelAdmin;
import com.ssp.core.legacy.mall.model.Admin;

/**
 * <pre>
 * @title 메뉴관리 컨트롤러
 * @package com.ssp.core.co.controller
 * <pre>    CoComCdMngController
 * @author lee
 * @since 2022-01-25
 * @version 1.0
 * @see CoComCdMngController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2017. 11. 8.		lee	최초작성
 */
@Controller
@AccessLevelAdmin(Admin.ROLEADMIN.administrator)
@RequestMapping("/co/com")
public class CoComCdMngController {

    private final Logger logger = LoggerFactory.getLogger(CoCommonController.class);

    @Autowired
    private CoComCdMngService coComCdMngService;

    /**
     *
     * <pre>
     * 1. MethodName : comCdClsfSearchList
     * 2. ClassName : CoCommonController
     * 3. Comment : 분류코드 리스트를 조회한다.
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-01-25
     * </pre>
     *
     * @param commandMap Map
     * @return NexacroResult
     * @throws Exception NexacroException
     */
    @RequestMapping("/com-cd-clsf-search-list")
    public NexacroResult comCdClsfSearchList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {

            //카멜화
            Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);

            int totalCount = coComCdMngService.selectComCdClsfSearchCount(CommonUtil.toCamelCaseMap(searchMap));
            List<Map<String,Object>> list = coComCdMngService.comCdClsfSearchList(CommonUtil.toCamelCaseMap(searchMap));

            result.addVariable("totalCount", totalCount);
            result.addDataSet("ds_output1", list);

        } catch ( Exception ne ) {
            String message = "에러로그 목록 조회 에러";
            logger.error(message);
            throw new LoggingException(new String[]{"CO", "BO", "comCdClsfSearchList", message}, ne);
        }
        return result;
    }

    /**
     *
     * <pre>
     * 1. MethodName : comCdClsfDtlSearchList
     * 2. ClassName : CoCommonController
     * 3. Comment : 상세코드 리스트를 조회한다.
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-01-25
     * </pre>
     *
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception NexacroException
     */
    @RequestMapping("/com-cd-clsf-dtl-search-list")
    public NexacroResult comCdClsfDtlSearchList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            //카멜화
            Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);

            List<Map<String, Object>> list = coComCdMngService.comCdClsfDtlSearchList(searchMap);

            result.addDataSet("ds_output1", list);

        } catch ( Exception ne ) {
            String message = "에러로그 목록 조회 에러";
            logger.error(message);
            logger.error(message);
            logger.error(message);
            throw new LoggingException(new String[]{"CO", "BO", "comCdClsfDtlSearchList", message}, ne);
        }
        return result;
    }

    /**
     *
     * <pre>
     * 1. MethodName : comCdClsfSave
     * 2. ClassName : CoCommonController
     * 3. Comment : 분류코드 저장
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-01-25
     * </pre>
     *
     * @param commandMap  Map
     * @return NexacroResult
     * @throws Exception exception
     */
    @RequestMapping("/com-cd-clsf-save")
    public NexacroResult comCdClsfSave(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMap ,@ParamDataSet(name = "ds_save2", required = false) List<Map<String, Object>> commandMapList) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            this.coComCdMngService.comCdClsfSave(commandMap, commandMapList);
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
     * 1. MethodName : comCodeExcelList
     * 2. ClassName : CoComCdMngController
     * 3. Comment : 공통코드 엑셀 다운로드용 조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-05-19
     * </pre>
     *
     * @param commandMap Map
     * @return NexacroResult
     * @throws Exception exception
     */
    @RequestMapping("/com-code-excel-list.do")
    public NexacroResult comCodeExcelList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {

            //카멜화
            Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);

            List<Map<String,Object>> list = coComCdMngService.comCodeExcelList(searchMap);

            result.addDataSet("ds_output", list);

        } catch ( Exception ne ) {
            String message = "공통코드 엑셀 다운로드";
            logger.error(message);
            throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_06", message}, ne);
        }
        return result;
    }

}
