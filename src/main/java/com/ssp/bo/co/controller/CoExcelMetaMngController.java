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
import com.nexacro17.xapi.data.DataSet;
import com.ssp.bo.co.dataset.CoDataSet;
import com.ssp.core.co.service.CoExcelMetaMngService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title CoExcelMetaMngController
 * @desc 엑셀 메타관리 컨트롤러
 * @package com.ssp.bo.co.controller
 * <pre>
 * @author lee
 * @since 2022-03-14
 * @version 1.0
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-14	lee	최초작성
 */
@Controller
@RequestMapping("/co")
public class CoExcelMetaMngController {

    private final Logger logger = LoggerFactory.getLogger(CoCommonController.class);

    @Autowired
    private CoExcelMetaMngService coExcelMetaMngService;

    /**
     *
     * <pre>
     * 1. MethodName : selectExcelMetaMstList
     * 2. ClassName : CoExcelMetaMngController
     * 3. Comment : 엑셀 메타목록 조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-14
     * </pre>
     *
     * @param commandMap Map
     * @return NexacroResult
     * @throws Exception exception
     */
    @RequestMapping("/select-excel-meta-mst-list")
    public NexacroResult selectExcelMetaMstList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            //카멜화
            Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);

            String langCd = StringUtil.getString(searchMap.get("langCd"));
            if(CommUtil.nvl(langCd).equals("")) {
                searchMap.put("langCd", "KO");
            }

            //카운트
            int totalCount = coExcelMetaMngService.selectExcelMetaMstListCount(searchMap);

            //리스트
            List<Map<String,Object>> list;
            if( totalCount > 0 ) {
                list = coExcelMetaMngService.selectExcelMetaMstList(searchMap);
                result.addDataSet("ds_output", list);
            } else {
                //초기화
                DataSet dataSet = CoDataSet.getDs("excelMetaMst", "ds_output");
                result.addDataSet(dataSet);
            }

            //set
            result.addVariable("totalCount", totalCount);

        } catch ( Exception ne ) {
            String message = "엑셀메타관리";
            logger.error(message);
            throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_19", message}, ne);
        }
        return result;
    }


    /**
     *
     * <pre>
     * 1. MethodName : saveExcelMetaMst
     * 2. ClassName : CoExcelMetaMngController
     * 3. Comment : 엑셀 메타 마스터 정보를 저장한다.
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-15
     * </pre>ㅇ
     *
     * @param commandMapList List
     * @return NexacroResult
     * @throws Exception exception
     */
    @RequestMapping("/save-excel-meta-mst")
    public NexacroResult saveExcelMetaMst(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMapList) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            coExcelMetaMngService.saveExcelMetaMst(commandMapList);
        } catch ( MessageException e ) {
            if( e.getCode() == -100 ) {
                result.setErrorCode(e.getCode());
                result.setErrorMsg(e.getMessage());
                return result;
            } else {
                logger.error(e.getMessage(), e);
                throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_19", "엑셀메타관리"}, e);
            }
        }
        return result;
    }



    /**
     *
     * <pre>
     * 1. MethodName : selectExcelMetaDtlList
     * 2. ClassName : CoExcelMetaMngController
     * 3. Comment : 엑셀 메타 상세목록 조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-14
     * </pre>
     *
     * @param commandMap Map
     * @return NexacroResult
     * @throws Exception exception
     */
    @RequestMapping("/select-excel-meta-dtl-list")
    public NexacroResult selectExcelMetaDtlList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            //카멜화
            Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);

            String langCd = StringUtil.getString(searchMap.get("langCd"));
            if(CommUtil.nvl(langCd).equals("")) {
                searchMap.put("langCd", "KO");
            }

            //리스트
            List<Map<String,Object>> list = coExcelMetaMngService.selectExcelMetaDtlList(searchMap);
            if( list.size() > 0 ) {
                result.addDataSet("ds_output", list);
            } else {
                //초기화
                DataSet dataSet = CoDataSet.getDs("excelMetaDtl", "ds_output");
                result.addDataSet(dataSet);
            }

        } catch ( Exception ne ) {
            String message = "엑셀 메타목록 조회 에러";
            logger.error(message);
            throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_19", message}, ne);
        }
        return result;
    }

    /**
     *
     * <pre>
     * 1. MethodName : saveExcelMetaDtl
     * 2. ClassName : CoExcelMetaMngController
     * 3. Comment : 엑셀 메타 언어 정보를 저장한다.
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-15
     * </pre>
     *
     * @param commandMapList List
     * @return NexacroResult
     * @throws Exception exception
     */
    @RequestMapping("/save-excel-meta-dtl")
    public NexacroResult saveExcelMetaDtl(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMapList) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            coExcelMetaMngService.saveExcelMetaDtl(commandMapList);
        } catch ( MessageException e ) {
            if( e.getCode() == -100 ) {
                result.setErrorCode(e.getCode());
                result.setErrorMsg(e.getMessage());
                return result;
            } else {
                logger.error(e.getMessage(), e);
                throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_19", e.getMessage()}, e);
            }
        }
        return result;
    }

    /**
     *
     * <pre>
     * 1. MethodName : selectSaveExcelMetaList
     * 2. ClassName : CoExcelMetaMngController
     * 3. Comment : 엑셀메타관리 엑셀 다운로드
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-05-23
     * </pre>
     *
     * @param commandMap Map
     * @return NexacroResult
     * @throws Exception e
     */
    @RequestMapping("/select-save-excel-meta-list.do")
    public NexacroResult selectSaveExcelMetaList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            //카멜화
            Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);

            String langCd = StringUtil.getString(searchMap.get("langCd"));
            if(CommUtil.nvl(langCd).equals("")) {
                searchMap.put("langCd", "KO");
            }

            //리스트
            List<Map<String,Object>> list = coExcelMetaMngService.selectSaveExcelMetaList(searchMap);
            if( list.size() > 0 ) {
                result.addDataSet("ds_output", list);
            }

        } catch ( Exception e ) {
            logger.error(e.getMessage(), e);
            throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_19", e.getMessage()}, e);
        }

        return result;
    }

}
