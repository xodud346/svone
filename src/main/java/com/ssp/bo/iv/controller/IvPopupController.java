package com.ssp.bo.iv.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.iv.service.IvPopupService;
import com.ssp.bo.od.util.OBU;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.od.exceptions.OdBizException;

/**
 * <pre>
 * @title  재고관리 팝업관리
 * @package com.ssp.bo.vi.controller
 * <pre>
 * @author  윤민우
 * @since   2022.03.16
 * @version 1.0
 * @see IvPopupController
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.16    윤민우        최초작성
 */
@Controller
@RequestMapping("/iv/popup")
public class IvPopupController {

    private Logger logger = LoggerFactory.getLogger(IvPopupController.class);

    @Autowired
    private IvPopupService popupService;


    /**
     * <pre>
     * 1. MethodName : selectOperatorPopupList
     * 2. ClassName  : IvPopupController
     * 3. Comment    : 재고관리 구매담당자 팝업 목록 조회
     * 4. 작성자       : 윤민우
     * 5. 작성일       : 2022.03.16
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-operator-popup-list.do")
    public NexacroResult selectOperatorPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			//searchMap.put("coCd", propertiesService.getString("ssp.cocd"));
			searchMap.put("type", "BO");

			int totalCount = popupService.selectOperatorPopupListCount(searchMap);
			List<Map<String,Object>> list = popupService.selectOperatorPopupList(searchMap);

			//조회한 데이터가 1개인지 여부 확인
			result.addVariable("oprtrCount", totalCount);
			if( totalCount == 1 && list.size() > 0 ) {
				result.addVariable("searchEmpNo", list.get(0).get("EMP_NO"));
				result.addVariable("searchOprtrNm", list.get(0).get("OPRTR_NM"));
			}
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		} catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception ne) {
			String message = "재고관리 구매담당자 팝업 목록 조회 실패";
			logger.error(message);
			throw new LoggingException(new String[]{"IV", "BO", "selectOperatorPopupList", message}, ne);
		}
		return result;
    }

    /**
	 * <pre>
	 * 1. MethodName : selectMbrOprtrOrgInfoList
	 * 2. ClassName  : IvPopupController
	 * 3. Comment    : [팝업]팀 조회 옵션 설정
	 * 4. 작성자       : 윤민우
	 * 5. 작성일       : 2022. 03. 17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-mbr-oprtr-org-info-list.do")
	public NexacroResult selectMbrOprtrOrgInfoList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result = popupService.selectMbrOprtrOrgInfoList(searchMap);
		} catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch(Exception e) {
			String message = "[팝업]팀 조회 옵션 설정 실패";
			logger.error(message);
			throw new LoggingException(new String[] { "IV", "BO", "selectMbrOprtrOrgInfoList", message}, e) ;
		}

		return result;
    }

}
