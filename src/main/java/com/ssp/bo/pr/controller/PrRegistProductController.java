package com.ssp.bo.pr.controller;

import java.util.ArrayList;
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
import com.ssp.bo.pc.service.PcPrcMngService;
import com.ssp.bo.pr.service.PrRegistProductService;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.pr.service.PrComProductChmService;
import com.ssp.core.util.ObjectUtils;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  등록상품 목록
 * @package com.ssp.bo.pr.controller
 * <pre>
 * @author  조지훈
 * @since   2022.03.14
 * @version 1.0
 * @see PrRegistProductController
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.14    조지훈        최초작성
 */
@Controller
@RequestMapping("/pr/prd-mng")
public class PrRegistProductController {

	private Logger logger = LoggerFactory.getLogger(PrRegistProductController.class);

	@Autowired
	private PrRegistProductService prRegistProductService;

	@Autowired
	protected SspPropertyService propertiesService;

	@Autowired
	private PcPrcMngService pcPrcMngService;

	@Autowired
	private PrComProductChmService prComProductChmService;

	/**
     * <pre>
     * 1. MethodName : selectRegistProductList
     * 2. ClassName  : PrRegistProductController
     * 3. Comment    : 등록상품 목록
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.03.14
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-regist-product-list.do")
    public NexacroResult selectRegistProductList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
    		searchMap.put("CO_CD", admin==null?propertiesService.getString("ssp.cocd"):admin.get("CO_CD"));
        	searchMap.put("SES_ID", new OdOrderComm(session).getSessionId());
            result.addVariable("totalCount", prRegistProductService.selectRegistProductCount(searchMap));
            result.addDataSet("productList", prRegistProductService.selectRegistProductList(searchMap));
        } catch (Exception e) {
            logger.error("등록상품목록 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_01", "등록상품목록 조회 실패" }, e);
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectRegistProductBasicInfo
     * 2. ClassName  : PrRegistProductController
     * 3. Comment    : 등록상품 목록 -> 등록상품 상세-> 기본정보
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.19
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-regist-product-basic-info.do")
    public NexacroResult selectRegistProductBasicInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            result.addDataSet("basicInfo", prRegistProductService.selectRegistProductBasicInfo(searchMap));
        } catch (Exception e) {
            logger.error("등록상품 상세 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_03", "등록상품 상세 조회 실패" }, e);
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectMroCategoryAttrInfo
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 등록상품 -> SSP상품추가상세 -> MRO 카테고리별 속성
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.03.30
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-mro-category-attr-list.do")
    public NexacroResult selectMroCategoryAttrList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	List<Map<String, Object>> list = prRegistProductService.selectMroCategoryAttrList(searchMap);
        	if(list == null || list.size() == 0) {
        		list = prRegistProductService.selectMroCategoryAttrListDef(searchMap);
        	}
            result.addDataSet("categoryAttrInfo", list);
        } catch (Exception e) {
            logger.error("MRO카테고리별 속성정보 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_03", "MRO카테고리별 속성정보 조회 실패" }, e);
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectMroCategoryAttrInfo
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 등록상품 -> SSP상품추가상세 -> SSP 카테고리, 속성 목록
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.03.30
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-ssp-category-list.do")
    public NexacroResult selectSspCategoryAttrInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            result.addDataSet("categoryInfo", prRegistProductService.selectSspCategoryListByMroPrdClcd(searchMap));

        } catch (Exception e) {
            logger.error("SSP 카테고리, 속성정보 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_03", "SSP 카테고리, 속성정보 조회 실패" }, e);
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectMroCategoryAttrInfo
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 등록상품 -> SSP상품추가상세 -> SSP 카테고리, 속성 목록
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.03.30
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-ssp-attr-list.do")
    public NexacroResult selectSspAttrInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            result.addDataSet("attrInfo", prRegistProductService.selectSspAttrList(searchMap));

        } catch (Exception e) {
            logger.error("SSP 카테고리, 속성정보 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_03", "SSP 카테고리, 속성정보 조회 실패" }, e);
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectMroCategoryAttrInfo
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 등록상품 -> SSP상품추가상세 -> MRO 추가정보
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.03.30
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-mro-add-info.do")
    public NexacroResult selectMroAddInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	Map<String, Object> addInfo = prRegistProductService.selectMroAddInfo(searchMap);

            List<Map<String, Object>> chmMtlList = prComProductChmService.selectProductChmMtlList(searchMap);	//화학정보
            for(Map<String, Object> chmInfo : chmMtlList) {
            	String TOXIC_MTL1 = StringUtil.getString(chmInfo, "TOXIC_MTL1");	//유독물질
            	String LMT_MTL1 = StringUtil.getString(chmInfo, "LMT_MTL1");	//제한물질
            	String ACCD_PSB_MTL1 = StringUtil.getString(chmInfo, "ACCD_PSB_MTL1");	//사고대비
            	String PHBT_MTL2 = StringUtil.getString(chmInfo, "PHBT_MTL2");	//금지물질
            	String PERMIT_MTL2 = StringUtil.getString(chmInfo, "PERMIT_MTL2");	//허가물질
            	if(TOXIC_MTL1.equals("Y")) {
            		addInfo.put("TOXIC_MTL1", "Y");
            	}
            	if(LMT_MTL1.equals("Y")) {
            		addInfo.put("LMT_MTL1", "Y");
            	}
            	if(ACCD_PSB_MTL1.equals("Y")) {
            		addInfo.put("ACCD_PSB_MTL1", "Y");
            	}
            	if(PHBT_MTL2.equals("Y")) {
            		addInfo.put("PHBT_MTL2", "Y");
            	}
            	if(PERMIT_MTL2.equals("Y")) {
            		addInfo.put("PERMIT_MTL2", "Y");
            	}
            }

            result.addDataSet("attrInfo", addInfo);
        } catch (Exception e) {
            logger.error("SSP 카테고리, 속성정보 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_03", "SSP 카테고리, 속성정보 조회 실패" }, e);
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectMroCategoryAttrInfo
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 등록상품 -> SSP상품추가상세 -> MRO 추가정보
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.03.30
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-ssp-add-info.do")
    public NexacroResult selectSspAddInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	String contextRealPath = propertiesService.getString("file.path.root");
        	searchMap.put("contextRealPath", contextRealPath);
        	result.addVariable("contextRealPath", contextRealPath);
            result.addDataSet("sspAddInfo", prRegistProductService.selectSspAddInfo(searchMap));
            result.addDataSet("bgList", prRegistProductService.selectBgList(searchMap));
        } catch (Exception e) {
            logger.error("SSP 카테고리, 속성정보 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_03", "SSP 카테고리, 속성정보 조회 실패" }, e);
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectProductImageList
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 등록상품 -> 상품상세 -> 상품이미지
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.03.30
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-product-image-list.do")
    public NexacroResult selectProductImageList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	String contextRealPath = propertiesService.getString("file.path.root");
        	searchMap.put("contextRealPath", contextRealPath);
        	result.addVariable("contextRealPath", contextRealPath);
            result.addDataSet("imageList", prRegistProductService.selectProductImageList(searchMap));
        } catch (Exception e) {
            logger.error("상품이미지 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_03", "상품이미지 조회 실패" }, e);
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectProductINoticeList
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 등록상품 -> 상품상세 -> 인증정보
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.07
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-product-cert-list.do")
    public NexacroResult selectProductCertList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            result.addDataSet("certList", prRegistProductService.selectProductCertList(searchMap));
        } catch (Exception e) {
            logger.error("인증정보 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_03", "인증정보 조회 실패" }, e);
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectProductINoticeList
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 등록상품 -> 등록상품상세 -> 고시품목
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.07
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-product-notice-list.do")
    public NexacroResult selectProductNoticeList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            result.addDataSet("noticeList", prRegistProductService.selectProductNoticeList(searchMap));
        } catch (Exception e) {
            logger.error("상품고시정보 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_03", "상품고시정보 조회 실패" }, e);
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectSeriesGroupList
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 상품등록 -> 등록상품상세 -> 시리즈그룹
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.07
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-series-group-list.do")
    public NexacroResult selectSeriesGroupList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	String prdId = StringUtil.getString(searchMap, "PRD_ID");
            List<Map<String, Object>> groupList = prRegistProductService.selectSeriesGroupList(searchMap);
        	List<Map<String, Object>> seriesList = new ArrayList<>();
        	List<Map<String, Object>> relationList = new ArrayList<>();
        	for(Map<String, Object> group : groupList) {
        		String rowPrdId = StringUtil.getString(group, "PRD_ID");
        		if(group.get("PRD_GRP_SPR_CD").equals("10") || group.get("PRD_GRP_SPR_CD").equals("20")) {
        			seriesList.add(group);
        		}else if(group.get("PRD_GRP_SPR_CD").equals("30") && !rowPrdId.equals(prdId)) {
        			relationList.add(group);
        		}
        	}
            result.addDataSet("seriesList", seriesList);
            result.addDataSet("relationList", relationList);
        } catch (Exception e) {
            logger.error("시리즈그룹정보 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_03", "시리즈그룹정보 조회 실패" }, e);
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectProductINoticeList
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 등록상품 -> 등록상품상세 -> 가격대상
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.19
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-product-price.do")
    public NexacroResult selectProductPrice(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	Map<String, Object> price = prRegistProductService.selectProductPrice(searchMap);

        	if(ObjectUtils.isEmpty(searchMap.get("CO_CD")) || ObjectUtils.isEmpty(searchMap.get("PRD_ID"))) {
        		throw new Exception("필수값 오류");
        	}
        	//가격정보 조회후 세팅
        	searchMap.put("coCd", searchMap.get("CO_CD"));
        	searchMap.put("prdId", searchMap.get("PRD_ID"));
        	NexacroResult pcPrdPrc = pcPrcMngService.getPcPrdPrc(searchMap);
        	if(pcPrdPrc!=null) {
            	Map<String, Object> prdPrc = pcPrdPrc.getDataSets();
            	Object obj = prdPrc.get("ds_output");
            	if(obj!=null) {
            		List<Map<String, Object>> prcData = (List<Map<String, Object>>) obj;
            		if(price!=null && prcData!=null && prcData.size()>0) {
	    				//STPRC : SSP기준가
	    				//MRK_LWST_SALSPRC - 시장최저판매가
	    				//INTL_LWST_SALSPRC - list price
	    				//PURG_DSGN_SALSPRC - 구매지정판매가
	    				price.put("STPRC", prcData.get(0).get("STPRC"));
	    				price.put("MRK_LWST_SALSPRC", prcData.get(0).get("mrkLwstSalsprc"));
	    				price.put("INTL_LWST_SALSPRC", prcData.get(0).get("intlLwstSalsprc"));
            		}
            	}
        	}
            result.addDataSet("price", price);
        } catch (Exception e) {
            logger.error("가격대상 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_03", "가격대상 조회 실패" }, e);
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectProductINoticeList
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 등록상품 -> 등록상품상세 -> 가격정보
     * 4. 작성자       : 박성진
     * 5. 작성일       : 2022.07.06
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-price-info.do")
    public NexacroResult selectPriceInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	Map<String, Object> price = prRegistProductService.selectPriceInfo(searchMap);
        	result.addDataSet("ds_output", price);
        } catch (Exception e) {
            logger.error("가격정보 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_03", "가격정보 조회 실패" }, e);
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectProductINoticeList
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 등록상품 -> 등록상품상세 -> SSP부가정보 저장(속성정보)
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.20
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/update-ssp-product-attr-info.do")
    public NexacroResult updateSspProductAttr(@ParamDataSet(name = "ds_search", required = true) Map<String, Object> searchMap,
    											@ParamDataSet(name = "ds_sspAttr", required = false) List<Map<String, Object>> sspAttrList) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
        	if(admin!=null && !admin.isEmpty()) {
        		searchMap.put("SESSION_OPRTR_ID", admin.get("OPRTR_ID"));
            }else {
                //throw new Exception("세션정보 없음.");
            }
			searchMap.put("sspAttrList", sspAttrList);
        	prRegistProductService.updateSspProductAttr(searchMap, sspAttrList);
        } catch (Exception e) {
            logger.error("SSP속성 저장 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_03", "SSP속성정보 저장 실패" }, e);
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectProductINoticeList
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 등록상품 -> 등록상품상세 -> SSP고시정보저장
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.20
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/update-ssp-product-noti-info.do")
    public NexacroResult updateSspProductNotiInfo(@ParamDataSet(name = "ds_search", required = true) Map<String, Object> searchMap,
    												@ParamDataSet(name = "ds_noticeDetail", required = false) List<Map<String, Object>> noticeList) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
        	if(admin!=null && !admin.isEmpty()) {
        		searchMap.put("SESSION_OPRTR_ID", admin.get("OPRTR_ID"));
            }else {
                //throw new Exception("세션정보 없음.");
            }
        	prRegistProductService.updateSspProductNoti(searchMap, noticeList);
        } catch (Exception e) {
            logger.error("SSP고시정보 저장 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_03", "SSP고시정보 저장 실패" }, e);
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectProductINoticeList
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 등록상품 -> 등록상품상세 -> SSP고시정보저장
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.20
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/update-product-info.do")
    public NexacroResult updateProductInfo(@ParamDataSet(name = "ds_basicSave", required = true) Map<String, Object> basicInfo,
    		@ParamDataSet(name = "ds_attrSave", required = false) List<Map<String, Object>> attrInfo,
    		@ParamDataSet(name = "ds_notiSave", required = false) List<Map<String, Object>> notiInfo) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
        	if(admin!=null && !admin.isEmpty()) {
        		basicInfo.put("SESSION_OPRTR_ID", admin.get("OPRTR_ID"));
            }else {
                //throw new Exception("세션정보 없음.");
            }
        	prRegistProductService.updateProductBasicInfo(basicInfo, attrInfo, notiInfo);
        } catch (Exception e) {
            logger.error("SSP상품기본정보 저장 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_03", "SSP상품기본정보 저장 실패" }, e);
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectProductINoticeList
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 등록상품 -> 등록상품상세 -> 화학물질정보
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.19
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-product-chm-info.do")
    public NexacroResult selectProductChmInfo(@ParamDataSet(name = "ds_searchLarge", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	//List<Map<String, Object>> addRegulation = prRegistProductService.selectProductAddRegulationList(searchMap);	//추가규제
        	List<Map<String, Object>> chmMtlList = prComProductChmService.selectProductChmMtlList(searchMap);	//화학정보
            result.addDataSet("chmMtlList", chmMtlList);
            List<Map<String, Object>> addRegulation = prComProductChmService.selectProductAddChmMtlList(searchMap);	//추가규제
            result.addDataSet("addRegulation", addRegulation);
        } catch (Exception e) {
            logger.error("화학물질정보 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_03", "화학물질정보 조회 실패" }, e);
        }
        return result;
    }

	//엑셀 대용량 다운로드 테스트 메소드
	@RequestMapping(value = "/call-large-excel-download.do")
	public NexacroResult callLargeExcelDownload(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
        	searchMap.put("SES_ID", new OdOrderComm(session).getSessionId());
			result.addDataSet("ds_outputlarge", CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap));
	    }catch(Exception e) {
	    	throw new LoggingException(new String[] { "PR", "BO", "SSP_XL_PR_01", "대용량 엑셀 다운로드" }, e);
		}
		return result;
    }
}
