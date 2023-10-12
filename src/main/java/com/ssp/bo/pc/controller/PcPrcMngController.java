package com.ssp.bo.pc.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pc.service.PcPrcMngService;
import com.ssp.bo.pr.service.PrProductNewService;
import com.ssp.bo.pr.service.PrRegistProductService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

@Controller
@RequestMapping(value = "/pc/pc-prc-mng")
public class PcPrcMngController {
	private final Logger log = LoggerFactory.getLogger(PcPrdProcStbController.class);

	@Autowired
	private PcPrcMngService pcPrcMngService;

	@Autowired
	private PrRegistProductService prRegistProductService;

	@Autowired
	protected SspPropertyService propertiesService;

    @Autowired
    private PrProductNewService prProductNewService;
	
	@RequestMapping(value = "/list.do")
	public NexacroResult List(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{

		NexacroResult result = new NexacroResult();

		try {

		searchMap = CommonUtil.toCamelCaseMap(searchMap);
		result = pcPrcMngService.selectList(searchMap,new OdOrderComm(session));

		} catch (Exception e ) {
			log.error("전용상품리스트 조회 실패");
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_CA_37", "전용상품리스트 조회 실패"}, e);
		}

		return  result;
	}

   @RequestMapping(value = "/selectBzplcList.do")
    public NexacroResult selectBzplcList(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{

        NexacroResult result = new NexacroResult();

        try {

        searchMap = CommonUtil.toCamelCaseMap(searchMap);
        result = pcPrcMngService.selectBzplcList(searchMap,new OdOrderComm(session));

        } catch (Exception e ) {
            log.error("사업장별 가격 조회 실패");
            throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_CA_01", "사업장별 가격 조회 실패"}, e);
        }

        return  result;
    }

   @RequestMapping(value = "/selectPrcHistList.do")
   public NexacroResult selectPrcHistList(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{

       NexacroResult result = new NexacroResult();

       try {

       searchMap = CommonUtil.toCamelCaseMap(searchMap);
       result = pcPrcMngService.selectPrcHistList(searchMap,new OdOrderComm(session));

       } catch (Exception e ) {
           log.error("가격이력 조회 실패");
           throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_CA_02", "가격이력 조회 실패"}, e);
       }

       return  result;
   }

	//
	@RequestMapping(value = "/selectPubPrcList.do")
	public NexacroResult selectPubPrcList(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{

		NexacroResult result = new NexacroResult();

		try {

		searchMap = CommonUtil.toCamelCaseMap(searchMap);
		result = pcPrcMngService.selectPubPrcList(searchMap,new OdOrderComm(session));

		} catch (Exception e ) {
			log.error("공용상품리스트 조회 실패");
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_CA_20", "공용상품리스트 조회 실패"}, e);
		}

		return  result;
	}

	//getPrdPrcDetails 가격정보
		@RequestMapping(value = "/prc-details.do")
		public NexacroResult getPrdPrcDtls(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{

			NexacroResult result = new NexacroResult();

			try {
    			searchMap = CommonUtil.toCamelCaseMap(searchMap);
    			if(searchMap.get("searchGb").equals("1"))
    			{
    			    result.addDataSet("ds_output1", pcPrcMngService.getPcPrdPrcList(searchMap));
    			}
    			else if(searchMap.get("searchGb").equals("2"))
                {
    			    result.addDataSet("ds_output1", pcPrcMngService.getPcPrdPrcSimulList(searchMap));
                }
    			result.addDataSet("ds_output2", pcPrcMngService.getPrcList(searchMap));
			}
			catch (Exception e ) {
				log.error("가격정보 조회 실패", e);
				throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_CA_22_1", "가격정보 조회 실패"}, e);
			}

			return result;
		}

		@RequestMapping(value = "/get-basic-info.do")
		public NexacroResult getinfo(HttpServletRequest request,
										@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
			NexacroResult result = new NexacroResult();

			if(searchMap != null) {
				String prdId = searchMap.get("PRD_ID").toString();
				int intPrdId = Integer.parseInt(prdId);
				prdId = String.format("%018d", intPrdId);
				searchMap.put("PRD_ID", prdId);
			}

			//1.기본정보 (snake표기법 이용)
        	try {
        		Map<String, Object> temp = prRegistProductService.selectRegistProductBasicInfo(searchMap);
                result.addDataSet("basicInfo", temp);

                if(temp != null) {
                	if(temp.get("MRO_PRD_CLCD") != null) {//카테고리 검색시 MRO_PRD_CLCD 필요
                		if(searchMap != null) {
                			searchMap.put("MRO_PRD_CLCD", temp.get("MRO_PRD_CLCD"));
                		}
                    }
                    if(temp.get("PRD_CLCD") != null) {//SSP 카테고리 검색시 PRD_CLCD 필요
                    	if(searchMap != null) {
                    		searchMap.put("PRD_CLCD", temp.get("PRD_CLCD"));
                    	}
                    }
                }

            } catch (Exception e) {
                log.error("SSP상품추가목록 조회 실패");
                throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_22_3", "SSP상품추가목록 조회 실패" }, e);
            }

        	//2.S-MRO 카테고리,속성 정보 (snake표기법 이용)
        	 try {
                 result.addDataSet("categoryAttrInfo", prRegistProductService.selectMroCategoryAttrList(searchMap));
             } catch (Exception e) {
                 log.error("MRO카테고리별 속성정보 조회 실패");
                 throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_22_3", "MRO카테고리별 속성정보 조회 실패" }, e);
             }

 			//3-1.SSP 카테고리 (snake표기법 이용)
        	 try {
                 result.addDataSet("categoryInfo", prRegistProductService.selectSspCategoryListByMroPrdClcd(searchMap));
             } catch (Exception e) {
                 log.error("SSP 카테고리, 속성정보 조회 실패");
                 throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_22_3", "SSP 카테고리, 속성정보 조회 실패" }, e);
             }

        	 //3-2.SSP속성 정보 (snake표기법 이용)
        	 try {
                 result.addDataSet("attrInfo", prRegistProductService.selectSspAttrList(searchMap));

             } catch (Exception e) {
                 log.error("SSP 카테고리, 속성정보 조회 실패");
                 throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_22_3", "SSP 카테고리, 속성정보 조회 실패" }, e);
             }





 			//4.S-MRO 부가 정보 (snake표기법 이용)
        	 try {
                 result.addDataSet("addInfo", prRegistProductService.selectMroAddInfo(searchMap));

             } catch (Exception e) {
                 log.error("SSP 카테고리, 속성정보 조회 실패");
                 throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_22_3", "SSP 카테고리, 속성정보 조회 실패" }, e);
             }


 			//5.SSP 부가 정보 (snake표기법 이용)
        	 try {
             	String contextRealPath = propertiesService.getString("file.path.root");
             	if(searchMap != null) {
             		searchMap.put("contextRealPath", contextRealPath);
             	}
             	result.addVariable("contextRealPath", contextRealPath);
                 result.addDataSet("sspAddInfo", prRegistProductService.selectSspAddInfo(searchMap));
                 result.addDataSet("bgList", prRegistProductService.selectBgList(searchMap));
             } catch (Exception e) {
                 log.error("SSP 카테고리, 속성정보 조회 실패");
                 throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_22_3", "SSP 카테고리, 속성정보 조회 실패" }, e);
             }


 			//6.기획전 대상 여부 (camel표기법 이용)

        	 Map<String, Object> camelSearchMap = CommonUtil.toCamelCaseMap(searchMap);
        	 try {
        		 result.addDataSet("exhbnInfo", pcPrcMngService.getExhbnInfo(camelSearchMap));
             } catch (Exception e) {
                 log.error("기획전 대상여부 조회 실패");
                 throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_22_3", "기획전 대상여부 조회 실패" }, e);
             }


			return result;


		}

		@RequestMapping(value = "/get-pc-prd-qty-dlcst-info.do")
		public NexacroResult getPcPrdQtyDlcstInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{

			NexacroResult result = new NexacroResult();

        	searchMap = CommonUtil.toCamelCaseMap(searchMap);

        	try {
        		result.addDataSet("pcPrdQtyInfo", pcPrcMngService.getPcPrdQty(searchMap));
    			result.addDataSet("pcPrdDlcstInfo", pcPrcMngService.getPcPrdDlcst(searchMap));

            } catch (Exception e) {
                log.error("물량할인, 배송비 조회 실패");
                throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_23_2", "물량할인, 배송비 조회 실패" }, e);
            }


			return result;
		}

		@RequestMapping(value = "/get-pc-prd-req-info.do")
		public NexacroResult getPcPrdReqInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{

			NexacroResult result = new NexacroResult();

        	try {
        		result = pcPrcMngService.getPcPrdReq(searchMap);        		
                result.addDataSet("ds_atflList", prProductNewService.selectNewPrdReqFileList(searchMap));

            } catch (Exception e) {
                log.error("요청상품정보 조회 실패");
                throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_23_4", "요청상품조회 조회 실패" }, e);
            }

			return result;
		}

		//상세페이지 공용상품 조회
	   @RequestMapping(value = "/get-new-item-info.do")
	   public NexacroResult getNewExItemInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{

	       NexacroResult result = new NexacroResult();
	       searchMap = CommonUtil.toCamelCaseMap(searchMap);
	       try {
	           System.out.println(searchMap);
	           result = pcPrcMngService.getNewItemInfo(searchMap);

	       } catch (Exception e) {
	           log.error("공용상품 추가정보 조회 실패");
	           throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_39", "공용상품 추가정보 조회 실패" }, e);
	       }


	       return result;
	   }

}
