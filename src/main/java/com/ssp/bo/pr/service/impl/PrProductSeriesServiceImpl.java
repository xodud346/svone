package com.ssp.bo.pr.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pr.controller.PrPropertyController;
import com.ssp.bo.pr.dao.PrProductSeriesDao;
import com.ssp.bo.pr.service.PrProductSeriesService;
import com.ssp.bo.pr.service.PrRegistProductService;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;
/**
 * <pre>
 * @title  시리즈그룹상품관리 서비스
 * @package com.ssp.bo.pr.service.impl
 * </pre>
 * @author 이원준
 * @since 2022.03.25
 * @version 1.0
 * @see PrProductSeriesServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 
 */
@Service("PrProductSeriesService")
public class PrProductSeriesServiceImpl implements PrProductSeriesService {
    private final Logger log = LoggerFactory.getLogger(PrPropertyController.class);
    @Autowired
    private PrProductSeriesDao productSeriesDao;

    @Autowired
    private PrRegistProductService prRegistProductService;
    
    @Resource(name = "propertiesService")
    private SspPropertyService propertiesService;

    /**
     * <pre>
     * 1. MethodName : selectProductSeriesList
     * 2. ClassName  : PrProductSeriesServiceImpl.java
     * 3. Comment    : 시리즈 상품그룹 목록 조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.03.25
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public List<Map<String, Object>> selectProductSeriesList(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception{
    	searchMap.put("SES_ID", odOrderComm.getSession().get("SES_ID").toString());
    	return productSeriesDao.selectProductSeriesList(searchMap);
    }
    
    /**
     * <pre>
     * 1. MethodName : selectProductSeriesCount
     * 2. ClassName  : PrProductSeriesServiceImpl.java
     * 3. Comment    : 시리즈 상품그룹 목록 카운터
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.03.25
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public int selectProductSeriesCount(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception{
    	searchMap.put("SES_ID", odOrderComm.getSession().get("SES_ID").toString());
        return productSeriesDao.selectProductSeriesCount(searchMap);
    }
    
    /**
     * <pre>
     * 1. MethodName : selectProductSeriesBasis
     * 2. ClassName  : PrProductSeriesServiceImpl.java
     * 3. Comment    : 시리즈 상품그룹 기본 조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.03.25
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public List<Map<String, Object>> selectProductSeriesBasis(Map<String, Object> searchMap) throws Exception{
        return productSeriesDao.selectProductSeriesBasis(searchMap);
    }
    
    /**
     * <pre>
     * 1. MethodName : selectProductSeriesDtl
     * 2. ClassName  : PrProductSeriesServiceImpl.java
     * 3. Comment    : 시리즈 상품그룹 상세 조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.03.25
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public List<Map<String, Object>> selectProductSeriesDtl(Map<String, Object> searchMap) throws Exception{
        String prdGrpSprCd = StringUtil.getString(searchMap.get("PRD_GRP_SPR_CD"));
        List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
        // 그룹구분 시리즈(10,20)
        // 연관(30) 
        if(prdGrpSprCd != null) {
	        if(!prdGrpSprCd.equals("30")) {
	            list = productSeriesDao.selectProductSeriesDtl01(searchMap);
	        }else {
	            list = productSeriesDao.selectProductSeriesDtl02(searchMap);
	        }
        }
        return list;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectSeriesTemp
     * 2. ClassName  : PrProductSeriesServiceImpl.java
     * 3. Comment    : 그룹상품추가 조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.03.25
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public List<Map<String, Object>> selectSeriesTemp(Map<String, Object> searchMap) throws Exception{
        
        String prdGrpSprCd = StringUtil.getString(searchMap.get("PRD_GRP_SPR_CD"));
        List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
        // 그룹구분 시리즈(10,20)
        // 연관(30) 
        if(prdGrpSprCd != null) {
	        if(!prdGrpSprCd.equals("30")) {
	            list = productSeriesDao.selectSeriesTemp01(searchMap);
	        }else {
	            list = productSeriesDao.selectSeriesTemp02(searchMap);
	        }
        }
        return list;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectSeriesBssTmp
     * 2. ClassName  : PrProductSeriesServiceImpl.java
     * 3. Comment    : 기준상품 중복 체크
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.03.25
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public int selectSeriesBssTmp(Map<String, Object> searchMap) throws Exception{
        return productSeriesDao.selectSeriesBssTmp(searchMap);
    }
    
    /**
     * <pre>
     * 1. MethodName : saveProductSeries
     * 2. ClassName  : PrProductSeriesServiceImpl.java
     * 3. Comment    : 상품그룹 저장
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.03.25
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public NexacroResult saveProductSeries(Map<String, Object> commandMap, List<Map<String, Object>> listMap, Map<String, Object> admin) throws Exception {
        NexacroResult result = new NexacroResult();

        int rtn      = 0;
        String msg = "";
        String prdGrpId = null;
        String updRsn = null;
        String prdId = null;
        String coCd = StringUtil.getString(admin.get("CO_CD"));
        String userId = StringUtil.getString(admin.get("OPRTR_ID"));
        String prdGrpSprCd = null;
        
        // 상품그룹기본 테이블 
        if(commandMap != null && commandMap.size() > 0) {
            int saveType = StringUtil.getInt(commandMap.get("DataSetRowType"));
            updRsn =  StringUtil.getString(commandMap.get("UPD_RSN"));
            prdGrpSprCd =  StringUtil.getString(commandMap.get("PRD_GRP_SPR_CD"));
            commandMap.put("CO_CD", coCd);
            commandMap.put("USER_ID", userId);
            
            if( saveType == 1 ) {           // 신규  
                prdGrpId = productSeriesDao.selectPrdGrpId(commandMap); //신규인경우 그룹ID 생성
                commandMap.put("PRD_GRP_ID", prdGrpId);
                rtn = productSeriesDao.insertProductSeriesBasis(commandMap);
                msg = "등록";
            } else if( saveType == 2 ) {    //  수정
                rtn = productSeriesDao.updateProductSeriesBasis(commandMap);
                msg = "수정";
            }
        }
        
        // 상품그룹상세 테이블 
        if(listMap != null && listMap.size() > 0) {
            List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
            for(int i=0; i<listMap.size(); i++) {
                Map<String, Object> map = new HashMap<String, Object>();
                map.put("PRD_GRP_ID", listMap.get(i).get("PRD_GRP_ID"));
                map.put("PRD_ID", listMap.get(i).get("PRD_ID"));
                map.put("BSS_PRD_YN", listMap.get(i).get("BSS_PRD_YN"));
                map.put("PRD_SEQ", listMap.get(i).get("PRD_SEQ"));
                map.put("BSS_PRD_ATTR_INFO", listMap.get(i).get("BSS_PRD_ATTR_INFO"));
                map.put("DataSetRowType", listMap.get(i).get("DataSetRowType"));
                map.put("CO_CD", coCd);
                map.put("USER_ID", userId);
                list.add(map);
            }
            
            // 중복상품 제거
            List<Map<String, Object>> newList = list.stream().distinct().collect(Collectors.toList());
            
            for (Map<String, Object> data : newList) {
                 int saveDataType = StringUtil.getInt(data.get("DataSetRowType"));
                 String vPrdGrpId = StringUtil.getString(data.get("PRD_GRP_ID"));
                 data.put("UPD_RSN", updRsn);
                 
                 if(StringUtil.getString(data.get("BSS_PRD_YN")).equals("Y")) {
                     coCd = StringUtil.getString(data.get("CO_CD"));    
                     prdId = StringUtil.getString(data.get("PRD_ID"));    
                     userId = StringUtil.getString(data.get("USER_ID"));
                 }
                
                 if( saveDataType == 1 ) {     
                     if(StringUtil.isEmpty(vPrdGrpId)) {
                    	 // 신규인경우 그룹ID 값이없기 때문에 상품그룹기본테이블 생성시 그룹ID값을 변수에 담아 저장
                         data.put("PRD_GRP_ID", prdGrpId);
                     }
                     rtn = productSeriesDao.insertProductSeriesDtl(data);
                     msg = "상품등록";
                 } else if(saveDataType == 2) {
                     rtn = productSeriesDao.updateProductSeriesDtl(data);
                     msg = "상품수정";
                 } else if(saveDataType == 3) {
                     rtn = productSeriesDao.deleteProductSeriesDtl(data);
                     msg = "상품삭제";
                 }
            }

        	if(prdGrpSprCd != null && prdGrpSprCd.equals("20")) {
        		// 시리즈-상품속성 동기화
        		prRegistProductService.syncProductAttrInfoByBssProduct(coCd, prdId, null, null, userId);
        	}
        }
        if( rtn <= 0 ) { throw new Exception("시리즈그룹 " + msg + " 실패"); };
        
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : callLargeExcelDownload
     * 2. ClassName  : PrProductSeriesServiceImpl.java
     * 3. Comment    : 엑셀 대용량 다운로드
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    @Override
	public Map<String, Object> callLargeExcelDownload(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		// TODO Auto-generated method stub
        searchMap = CommonUtil.toCamelCaseMap(searchMap);
        if("SSP_BO_PA_09".equals(searchMap.get("pgmId"))) {
        	searchMap.put("newPrdProcStatsCd", ((String) searchMap.get("newPrdProcStatsCd")).replaceAll(",", "','"));
        }
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
        
	}
    
}
