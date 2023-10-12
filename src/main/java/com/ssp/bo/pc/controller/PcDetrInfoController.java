package com.ssp.bo.pc.controller;

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
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pc.service.PcDetrInfoService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  메뉴관리 컨트롤러
 * @package com.ssp.bo.pc.controller
 * <pre>
 * @author  scvgo17
 * @since   2022. 01. 18.
 * @version 1.0
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/pc/detrInfo")
public class PcDetrInfoController {
	private final Logger log = LoggerFactory.getLogger(PcDetrInfoController.class);
		
	@Autowired
    private PcDetrInfoService pcDetrInfoService;

	/**
	 * <pre>
	 * 1. MethodName : selectMnuMngList
	 * 2. ClassName  : PropertyController.java
	 * 3. Comment    : 절사관리 조회
	 * 4. 작성자       : scvgo17
	 * 5. 작성일       : 2021. 09. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-detr-info-list.do")
	public NexacroResult selectDetrInfoList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			if(searchMap == null) {
				searchMap = new HashMap<String, Object>();
			}
			
			List<Map<String,Object>> list = pcDetrInfoService.selectDetrInfoList(searchMap, new OdOrderComm(session));
			result.addDataSet("ds_output", list);
						
		} catch (Exception e ) {
			String message = "절사 관리 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectDetrInfoList", "절사 관리 조회"}, e) {};
		}
		return result;
	}
	
	@RequestMapping("/detr-info-update.do")
    public NexacroResult detrInfoUpdate(HttpSession session,
    									@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap,
    									@ParamDataSet(name = "ds_list", required = false) List<Map<String, Object>> list) throws Exception {
        NexacroResult result;
        try {
        	
        	searchMap = CommonUtil.toCamelCaseMap(searchMap);
        	
            result = pcDetrInfoService.updateDetrInfo(searchMap,list, new OdOrderComm(session));
        } catch ( Exception ne ) {
            String message = "절사 관리 저장 에러";
            log.error(message);
            throw new LoggingException(new String[]{"CO", "BO", "comCdClsfSave", message}, ne);
        }
        return result;
    }
	
}
