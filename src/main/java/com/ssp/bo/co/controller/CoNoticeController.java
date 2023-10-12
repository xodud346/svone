package com.ssp.bo.co.controller;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.ssp.core.co.service.CoCommonService;
import com.ssp.core.co.service.CoNoticeService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.legacy.mall.common.annotations.AccessLevelAdmin;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title 공지사항
 * @desc  공지사항 컨트롤러
 * @package com.ssp.bo.co.controller
 * <pre>    CoNoticeController
 * @author lee
 * @since 2022-02-15
 * @version 1.0
 * @see CoNoticeController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-02-15	lee	최초작성
 */
@Controller
@AccessLevelAdmin(Admin.ROLEADMIN.administrator)
@RequestMapping("/co")
public class CoNoticeController {
    private final Logger logger = LoggerFactory.getLogger(CoNoticeController.class);

    @Autowired
    private CoNoticeService coNoticeService;

    @Autowired
    protected SspPropertyService propertiesService;

    @Autowired
    private CoCommonService coCommonService;

    /*
    private final CoNoticeService coNoticeService;
    @Autowired
    public CoNoticeController(CoNoticeService coNoticeService) {
        this.coNoticeService = coNoticeService;
    }
    */

    /**
     *
     * <pre>
     * 1. MethodName : selectNoticeList
     * 2. ClassName : CoNoticeController
     * 3. Comment : 공지사항 목록 조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-02-15
     * </pre>
     *
     */
    @RequestMapping("/select-notice-list")
    public NexacroResult selectNoticeList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap, @ParamDataSet(name = "ds_oprUnit", required = false) List<Map<String, Object>> oprUnitMapList) throws Exception {
        NexacroResult result = new NexacroResult();

        try {

            //카멜 변환
            Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);

            List<String> oprUnit = new ArrayList<>();

            // 대상설정 목록
            if( oprUnitMapList != null ) {
                if( oprUnitMapList.size() > 0 ) {
                    for (int i = 0, size = oprUnitMapList.size(); i < size; i++) {
                        oprUnit.add(i, StringUtil.getString(oprUnitMapList.get(i).get("OPR_UNIT_ID")));
                    }
                    searchMap.put("oprUnitList", oprUnit);
                }
            }

            //입력한 대상 코드
            if( !"".equals(StringUtil.getString(searchMap.get("targetId"))) ) {
                String[] oprUnitList = StringUtil.getString(searchMap.get("targetId")).split(",");
                if( oprUnitList.length > 0 ) {
                    searchMap.put("oprUnitList", oprUnitList);
                }
            }

            //전체 카운트
            int totalCount = coNoticeService.selectNoticeListCount(searchMap);
            List<Map<String, Object>> list = new ArrayList<>();
            if( totalCount > 0 ) {
                list  = coNoticeService.selectNoticeList(searchMap);
            }

            //set
            result.addVariable("totalCount", totalCount);
            result.addDataSet("ds_output", list);

        } catch ( Exception ne ) {
            String message = "공지사항 목록 조회 에러";
            logger.error(message);
            throw new LoggingException(new String[]{"CO", "BO", "selectNoticeList", message}, ne);
        }
        return result;
    }


    /**
     *
     * <pre>
     * 1. MethodName : selectNoticeDetail
     * 2. ClassName : CoNoticeController
     * 3. Comment : 공지사항 상세조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-02-16
     * </pre>
     *
     * @param commandMap Map
     * @return NexacroResult
     * @throws Exception exception
     */
    @RequestMapping("/select-notice-detail")
    public NexacroResult selectNoticeDetail(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {

            //카멜 변환
            Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);

            //상세조회
            Map<String,Object> noticeDetail = coNoticeService.selectNoticeDetail(searchMap) ;

            // 파일목록
            searchMap.put("docRegId", StringUtil.getString(noticeDetail.get("DOC_REG_ID")));
            List<Map<String,Object>> fileList = coCommonService.selectFileList(searchMap);

            //set data
            result.addDataSet("ds_output", noticeDetail);
            result.addDataSet("ds_files", fileList);
        } catch ( Exception ne ) {
            String message = "공지사항 상세 조회 에러";
            logger.error(message);
            throw new LoggingException(new String[]{"CO", "BO", "selectNoticeDetail", message}, ne);
        }
        return result;
    }

    /**
     *
     * <pre>
     * 1. MethodName : saveNotice
     * 2. ClassName : CoNoticeController
     * 3. Comment : 공지사항 저장
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-02-16
     * </pre>
     *
     * @param commandMapList List
     * @return NexacroResult
     * @throws Exception exception
     */
    @RequestMapping("/save-notice")
    public NexacroResult saveNotice(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMapList
            , @ParamDataSet(name = "ds_oprUnit", required = false) List<Map<String, Object>> oprUnitMapList
            , @ParamDataSet(name = "ds_files", required = false) List<Map<String, Object>> fileMapList ) throws Exception {

        NexacroResult result =  new NexacroResult();

        try {
            coNoticeService.saveNotice(commandMapList, oprUnitMapList, fileMapList);
        } catch ( MessageException e ) {
            if( e.getCode() == -100 ) {
                result.setErrorCode(e.getCode());
                result.setErrorMsg(e.getMessage());
                return result;
            } else {
                String message = "공지사항 저장 에러";
                logger.error(message);
                throw new LoggingException(new String[]{"CO", "BO", "saveNotice", message}, e);
            }
        }
        return result;
    }


    /**
     *
     * <pre>
     * 1. MethodName : selectManualList
     * 2. ClassName : CoNoticeController
     * 3. Comment : 메뉴얼 등록 리스트를 조회한다.
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-02-25
     * </pre>
     *
     */
    @RequestMapping("/select-manual-list")
    public NexacroResult selectManualList(HttpServletRequest request, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {

            Enumeration<String> attributes = request.getSession().getAttributeNames();
            while (attributes.hasMoreElements()) {
                String attribute = attributes.nextElement();
                System.err.println(attribute+" : "+request.getSession().getAttribute(attribute));
            }

			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			commandMap.put("CO_CD", admin.get("CO_CD"));
			
            //카멜 변환
            Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);

            //전체 카운트
            int totalCount = coNoticeService.selectManualListCount(searchMap);
            List<Map<String, Object>> list = new ArrayList<>();
            if( totalCount > 0 ) {
                list  = coNoticeService.selectManualList(searchMap);
            }

            //set
            result.addVariable("totalCount", totalCount);
            result.addDataSet("ds_output", list);

        } catch ( Exception ne ) {
            String message = "공지사항 목록 조회 에러";
            logger.error(message);
            throw new LoggingException(new String[]{"CO", "BO", "selectNoticeList", message}, ne);
        }
        return result;
    }


    /**
     *
     * <pre>
     * 1. MethodName : selectNoticeDetail
     * 2. ClassName : CoNoticeController
     * 3. Comment : 메뉴얼 상세조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-02-25
     * </pre>
     *
     * @param commandMap Map
     * @return NexacroResult
     * @throws Exception exception
     */
    @RequestMapping("/select-manual-detail")
    public NexacroResult selectManualDetail(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	
        	Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
 			commandMap.put("CO_CD", admin.get("CO_CD"));
            //카멜 변환
            Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);

            //상세조회
            Map<String,Object> manualMap = coNoticeService.selectManualDetail(searchMap) ;

            // 파일목록
            String docRegId = StringUtil.getString(manualMap.get("DOC_REG_ID"));
            List<Map<String,Object>> fileList = new ArrayList<>();
            if( !docRegId.equals("") ) {
                searchMap.put("docRegId", docRegId);
                fileList = coCommonService.selectFileList(searchMap);
            }

            //set data
            result.addDataSet("ds_output", manualMap);
            result.addDataSet("ds_file_list", fileList);
        } catch ( Exception ne ) {
            String message = "공지사항 상세 조회 에러";
            logger.error(message);
            throw new LoggingException(new String[]{"CO", "BO", "selectNoticeDetail", message}, ne);
        }
        return result;
    }

    /**
     *
     * <pre>
     * 1. MethodName : saveNotice
     * 2. ClassName : CoNoticeController
     * 3. Comment : 공지사항 저장
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-02-16
     * </pre>
     *
     * @param commandMapList List
     * @return NexacroResult
     * @throws Exception exception
     */
    @RequestMapping("/save-manual")
    public NexacroResult saveManual(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMapList, @ParamDataSet(name = "ds_files", required = false) List<Map<String, Object>> fileMapList ) throws Exception {

        NexacroResult result =  new NexacroResult();

        try {
            coNoticeService.saveManual(commandMapList, fileMapList);

        } catch ( MessageException e ) {
            if( e.getCode() == -100 ) {
                result.setErrorCode(e.getCode());
                result.setErrorMsg(e.getMessage());
                return result;
            } else {   
                String message = "공지사항 저장 에러";
                logger.error(message);
                throw new LoggingException(new String[]{"CO", "BO", "saveNotice", message}, e);
            }
        }
        return result;
    }



}
