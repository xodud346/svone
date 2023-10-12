package com.ssp.bo.pc.controller;

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
import com.ssp.bo.pc.service.PcExPrcMngService;
import com.ssp.bo.pc.service.PcPopupService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.od.exceptions.OdExceptions;
import com.ssp.core.od.utils.OU;

@Controller
@RequestMapping(value = "/pc/pc-ex-prc-mng")
public class PcExPrcMngController {
	private final Logger log = LoggerFactory.getLogger(PcPrdProcStbController.class);

	@Autowired
	private PcExPrcMngService pcExPrcMngService;
	
	@Autowired
	private PcPopupService pcPopupService;
	
	//상세페이지 전용상품영업지정판매가 조회
	@RequestMapping(value = "/get-ex-item-info.do")
	public NexacroResult getExItemInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{

		NexacroResult result = new NexacroResult();

    	try {

    		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			if(admin != null) {
				searchMap.put("coCd", admin.get("CO_CD"));
			}

    		result = pcExPrcMngService.getExItemInfo(searchMap);

        } catch (Exception e) {
            log.error("전용상품 추가정보 조회 실패");
            throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_39", "전용상품 추가정보 조회 실패" }, e);
        }


		return result;
	}
	//상세페이지 등록된운영단위정보 조회
	@RequestMapping(value = "/get-dp-disp-info.do")
	public NexacroResult getDpDisptInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{

		NexacroResult result = new NexacroResult();

    	try {
    		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			if(admin != null) {
				searchMap.put("coCd", admin.get("CO_CD"));
			}

    		result.addDataSet("dpDispInfo", pcExPrcMngService.getDpDispInfo(searchMap));

        } catch (Exception e) {
            log.error("운영단위정보 조회 실패");
            throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_39", "운영단위정보 조회 실패" }, e);
        }


		return result;
	}


   @RequestMapping(value = "/savePrcMngInfo.do")
    public NexacroResult savePrcMngInfo(
                                    @ParamDataSet(name = "ds_save1", required = false) List<Map<String, Object>> saveMap1, /* 가격진열 마스터 */
                                    @ParamDataSet(name = "ds_save2", required = false) List<Map<String, Object>> saveMap2, /* SSP기준 판매가 */
                                    @ParamDataSet(name = "ds_save3", required = false) List<Map<String, Object>> saveMap3, /* 물량 할인 */
                                    @ParamDataSet(name = "ds_save4", required = false) List<Map<String, Object>> saveMap4, /* 배송비 할인 */
                                    @ParamDataSet(name = "ds_save5", required = false) List<Map<String, Object>> saveMap5, /* 영업지정 판매가 */
                                    @ParamDataSet(name = "ds_save6", required = false) List<Map<String, Object>> saveMap6, /* 영업지정 판매가 삭제*/
                                    @ParamDataSet(name = "ds_save7", required = false) Map<String, Object> saveMap7, /* 진열생성 대상*/
                                    @ParamDataSet(name = "ds_save8", required = false) Map<String, Object> saveMap8, /* 신규상품요청*/
                                    HttpSession session) throws Exception{

        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> listReturn = OU.newList();
        Map<String, Object> returnMap = OU.newMap();

        try {

            if(saveMap1 != null && saveMap1.size() != 0)    {
                returnMap = pcExPrcMngService.savePrcMngMaster(saveMap1, new OdOrderComm(session));
                if(returnMap.get("rtnCd").equals("E"))
                {
                    listReturn.add(returnMap);
                    result.addDataSet("ds_output1", listReturn);
                    return result;
                }
            }
            if(saveMap2 != null && saveMap2.size() != 0)    {
                returnMap = pcExPrcMngService.savePrcMngSspPrc(saveMap2, new OdOrderComm(session));
                if(returnMap.get("rtnCd").equals("E"))
                {
                    listReturn.add(returnMap);
                    result.addDataSet("ds_output1", listReturn);
                    return result;
                }
            }
            if(saveMap3 != null && saveMap3.size() != 0)    {
                returnMap = pcExPrcMngService.savePrcMngQtyDtls(saveMap3, new OdOrderComm(session));
                if(returnMap.get("rtnCd").equals("E"))
                {
                    listReturn.add(returnMap);
                    result.addDataSet("ds_output1", listReturn);
                    return result;
                }
            }
            if(saveMap4 != null && saveMap4.size() != 0)    {
                returnMap = pcExPrcMngService.savePrcMngDlcstDtls(saveMap4, new OdOrderComm(session));
                if(returnMap.get("rtnCd").equals("E"))
                {
                    listReturn.add(returnMap);
                    result.addDataSet("ds_output1", listReturn);
                    return result;
                }
            }
            if(saveMap6 != null && saveMap6.size() != 0)    {
                returnMap = pcExPrcMngService.deletePrcMngSalsPrc(saveMap6, new OdOrderComm(session));
                if(returnMap.get("rtnCd").equals("E"))
                {
                    listReturn.add(returnMap);
                    result.addDataSet("ds_output1", listReturn);
                    return result;
                }
            }
            if(saveMap5 != null && saveMap5.size() != 0)    {
                returnMap = pcExPrcMngService.savePrcMngSalsPrc(saveMap5, new OdOrderComm(session));
                if(returnMap.get("rtnCd").equals("E"))
                {
                    listReturn.add(returnMap);
                    result.addDataSet("ds_output1", listReturn);
                    return result;
                }
            }

            if(saveMap7 != null && saveMap7.size() != 0)    {
                returnMap = pcExPrcMngService.savePrcMngDispHist(saveMap7, new OdOrderComm(session));
                if(returnMap.get("rtnCd").equals("E"))
                {
                    listReturn.add(returnMap);
                    result.addDataSet("ds_output1", listReturn);
                    return result;
                }
            }
            
            if(saveMap8 != null && saveMap8.size() != 0)    {
            	returnMap = pcPopupService.updateNewPrdReqPrc(saveMap8, new OdOrderComm(session));
            	
            	if(returnMap.get("rtnCd").equals("E"))
            	{
            		listReturn.add(returnMap);
            		result.addDataSet("ds_output1", listReturn);
            		return result;
            	}
            }

        } catch (Exception e) {
            String message = "가격진열,영업지정 판매가,물량할인,배송비할인,기준 판매가 저장";
            log.error(message, e);
            throw new LoggingException(new String[] { "PC", "BO", "savePrcMngInfo", message }, e);
        }

        returnMap.put("rtnCd","S");
        returnMap.put("rtnMsg",OdExceptions.getMessage("IFMS000001"));
        listReturn.add(returnMap);
        result.addDataSet("ds_output1", listReturn);
        return result;

    }

   @RequestMapping(value = "/select-sals-prc-hist.do")
   public NexacroResult selectSalsPrcHistList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{

       NexacroResult result = new NexacroResult();
       searchMap = CommonUtil.toCamelCaseMap(searchMap);

       try {
           result = pcExPrcMngService.selectSalsPrcHistList(searchMap);

       } catch (Exception e) {
           log.error("영업지정가-ssp기준판매가 조회");
           throw new LoggingException(new String[] { "PC", "BO", "selectSalsPrcHistList", "영업지정가-ssp기준판매가 조회 실패" }, e);
       }


       return result;
   }

 //상세페이지 전용상품영업지정판매가 조회
   @RequestMapping(value = "/get-new-ex-item-info.do")
   public NexacroResult getNewExItemInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
	   
	   
       NexacroResult result = new NexacroResult();
       searchMap = CommonUtil.toCamelCaseMap(searchMap);

       try {
           System.out.println(searchMap);
           result = pcExPrcMngService.getNewExItemInfo(searchMap);

       } catch (Exception e) {
           log.error("전용상품 추가정보 조회 실패");
           throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_39", "전용상품 추가정보 조회 실패" }, e);
       }


       return result;
   }

}