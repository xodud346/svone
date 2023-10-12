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
import com.ssp.bo.co.service.CoTransStatMngService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.legacy.mall.common.annotations.AccessLevelAdmin;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title CoTransStatMngController
 * @desc 거래명세서관리 컨트롤러
 * @package com.ssp.bo.co.controller
 * <pre>
 * @author lee
 * @since 2022-03-11
 * @version 1.0
 * @see CoTransStatMngController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-11	lee	최초작성
 */
@Controller
@AccessLevelAdmin(Admin.ROLEADMIN.administrator)
@RequestMapping("/co")
public class CoTransStatMngController {
    //logger
    private final Logger logger = LoggerFactory.getLogger(CoCommonController.class);


    @Autowired
    private CoTransStatMngService coTransStatMngService;


    /**
     *
     * <pre>
     * 1. MethodName : selectTransStatMngList
     * 2. ClassName : CoTransStatMngController
     * 3. Comment : 거래명세서 관리 목록 조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-11
     * </pre>
     *
     * @param commandMap
     * @return
     * @throws Exception
     */
    @RequestMapping("/select-trans-stat-mng-list")
    public NexacroResult selectTransStatMngList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            //카멜화
            Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);

            String langCd = StringUtil.getString(searchMap.get("langCd"));
            if(CommUtil.nvl(langCd).equals("")) {
                searchMap.put("langCd", "KO");
            }

            //카운트
            int totalCount = coTransStatMngService.selectTransStatMngListCount(searchMap);

            //리스트
            List<Map<String,Object>> list;
            if( totalCount > 0 ) {
                list = coTransStatMngService.selectTransStatMngList(searchMap);
                result.addDataSet("ds_output", list);
            } else {
                //초기화
                DataSet dataSet = CoDataSet.getDs("coTransStatMng", "ds_output");
                result.addDataSet(dataSet);
            }

            //set
            result.addVariable("totalCount", totalCount);

        } catch ( Exception ne ) {
            String message = "거래명세서관리 목록 조회 에러";
            logger.error(message);
            throw new LoggingException(new String[]{"CO", "BO", "selectTransStatMngList", message}, ne);
        }
        return result;
    }


    /**
     *
     * <pre>
     * 1. MethodName : saveTransStatMng
     * 2. ClassName : CoTransStatMngController
     * 3. Comment : 거래명세서관리 목록 저장
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-11
     * </pre>
     *
     * @param commandMapList List
     * @return NexacroResult
     * @throws Exception exception
     */
    @RequestMapping("/save-trans-stat-mng")
    public NexacroResult saveTransStatMng(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMapList) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            int rtn = coTransStatMngService.saveTransStatMng(commandMapList);

        } catch ( MessageException e ) {
            logger.error(e.getMessage(), e);
            throw new LoggingException(new String[]{"CO", "BO", "saveTransStatMng", e.getMessage()}, e);
        }
        return result;
    }


}
