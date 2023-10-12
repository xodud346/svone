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
import com.ssp.bo.co.service.CoSysMsgService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.legacy.mall.common.annotations.AccessLevelAdmin;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title 시스템메시지관리
 * @desc 컨트롤러
 * @package com.ssp.bo.co.controller
 * <pre>    CoSysMsgController
 * @author lee
 * @since 2022-03-08
 * @version 1.0
 * @see CoSysMsgController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-08	lee	최초작성
 */
@Controller
@AccessLevelAdmin(Admin.ROLEADMIN.administrator)
@RequestMapping("/co")
public class CoSysMsgController {
    //logger
    private final Logger logger = LoggerFactory.getLogger(CoCommonController.class);

    @Autowired
    private CoSysMsgService coSysMsgService;


    /**
     *
     * <pre>
     * 1. MethodName : selectSystemMessageMngList
     * 2. ClassName : CoSysMsgController
     * 3. Comment : 시스템 메시지 관리 목록 조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-08
     * </pre>
     *
     * @param commandMap Map
     * @return NexacroResult
     * @throws Exception exception
     */
    @RequestMapping("/select-system-message-mng-list")
    public NexacroResult selectSystemMessageMngList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            //카멜화
            Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);

            String langCd = StringUtil.getString(searchMap.get("langCd"));
            if(CommUtil.nvl(langCd).equals("")) {
                searchMap.put("langCd", "KO");
            }

            //카운트
            int totalCount = coSysMsgService.selectSystemMessageMngListCount(searchMap);

            //리스트
            List<Map<String,Object>> list;
            if( totalCount > 0 ) {
                list = coSysMsgService.selectSystemMessageMngList(searchMap);
                result.addDataSet("ds_output", list);
            } else {
                //초기화
                DataSet dataSet = CoDataSet.getDs("systemMessageMng", "ds_output");
                result.addDataSet(dataSet);
            }

            //set
            result.addVariable("totalCount", totalCount);

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
     * 1. MethodName : saveSysMsg
     * 2. ClassName : CoSysMsgController
     * 3. Comment : 시스템 메세지를 저장한다.
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-10
     * </pre>
     *
     * @param commandMapList List
     * @return NexacroResult
     * @throws Exception exception
     */
    @RequestMapping("/save-sys-message-mng")
    public NexacroResult saveSysMessageMng(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMapList) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            int rtn = coSysMsgService.saveSysMessageMng(commandMapList);

        } catch ( MessageException e ) {
        	if( e.getCode() == -100){
//        		result.setErrorCode(e.getCode()); // Code가 -100일 경우 넥사크로에서 메인 화면으로 돌아가버리는 오류 발생 임시로 임의 -10값으로 제어
        		result.setErrorCode(-10);
        		result.setErrorMsg(e.getMessage());
				return result;
        	}else {
            logger.error(e.getMessage(), e);
            throw new LoggingException(new String[]{"CO", "BO", "saveSysMessageMng", e.getMessage()}, e);
        	}
        }
        return result;
    }

} 
