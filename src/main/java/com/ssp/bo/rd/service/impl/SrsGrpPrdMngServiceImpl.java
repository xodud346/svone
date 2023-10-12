/*------------------------------------------------------------------------------
 * NAME : SrsGrpPrdMngServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.28  newwhite7
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pr.service.PrRegistProductService;
import com.ssp.bo.rd.dao.SrsGrpPrdMngDao;
import com.ssp.bo.rd.service.SrsGrpPrdMngService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   SrsGrpPrdMngServiceImpl
 * @@desc   R&D 시리즈그룹 상품 관리 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성
 */
@Service("srsGrpPrdMngService")
public class SrsGrpPrdMngServiceImpl implements SrsGrpPrdMngService {

	private Logger logger = LoggerFactory.getLogger(SrsGrpPrdMngServiceImpl.class);
	@Resource(name = "srsGrpPrdMngDao")
    private SrsGrpPrdMngDao srsGrpPrdMngDao;
    
    
    @Autowired
    private PrRegistProductService prRegistProductService;
    

    /**
     * R&D 시리즈그룹 상품 관리 리스트 조회(selectSrsGrpPrdMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectSrsGrpPrdMng(Map<String, Object> searchMap, HttpSession session) throws Exception {

        NexacroResult result = new NexacroResult();
        searchMap.put("SES_ID", session.getId());

        int totalCount    = srsGrpPrdMngDao.selectSrsGrpPrdMngCount(searchMap);
        List<Map> records = srsGrpPrdMngDao.selectSrsGrpPrdMng(searchMap);

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);

        return result;
    }
    
    
    /**
     * 기준상품 중복 체크 조회(selectSeriesBssTemp)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectSeriesBssTemp(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        int bssCnt = srsGrpPrdMngDao.selectSeriesBssTemp(searchMap);
        
        result.addVariable("bssCnt", bssCnt);

        return result;
    }

    /**
     * 그룹상품추가 조회(selectSeriesTemp)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectSeriesTemp(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        String prdGrpSprCd = StringUtil.getString(searchMap.get("PRD_GRP_SPR_CD"));
        List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();

        if(!prdGrpSprCd.equals("30")) {
        	list = srsGrpPrdMngDao.selectSeriesTemp01(searchMap);    //그룹구분 시리즈(10,20)
        }else {
            list = srsGrpPrdMngDao.selectSeriesTemp02(searchMap);    //연관(30)
        }
    	
        result.addDataSet("ds_output", list);
       
    	return result;
    }
    
    /**
     * 그룹상품추가 저장/수정/및 상세저장/수정/삭제(saveProductSeries)
     * @param input
     * @return
     * @throws Exception
     */
    public NexacroResult saveProductSeries(Map<String, Object> commandMap, List<Map<String, Object>> listMap,Map<String, Object> userInfo) throws Exception {
        NexacroResult result = new NexacroResult();

        int rtn            		= 0;
        String msg         		= "";
        String prdGrpId    		= null;
        String updRsn      		= null;
        String coCd        		= null;
        String prdId       		= null;
        String userId      		= null;
        String prdGrpSprCd 		= null;
        String recordPKeyValue 	= "";
        
        if(commandMap != null && commandMap.size() > 0) {
            int saveType = StringUtil.getInt(commandMap.get("DataSetRowType"));
            updRsn       = StringUtil.getString(commandMap.get("UPD_RSN"));
            prdGrpSprCd  = StringUtil.getString(commandMap.get("PRD_GRP_SPR_CD"));
            
            if( saveType == 1 ) {            // 신규  
                prdGrpId = srsGrpPrdMngDao.selectPrdGrpId(commandMap);
                commandMap.put("PRD_GRP_ID", prdGrpId);
                rtn = srsGrpPrdMngDao.insertProductSeriesBasis(commandMap);
                msg = "등록";
            } else if( saveType == 2 ) {    //  수정
                rtn = srsGrpPrdMngDao.updateProductSeriesBasis(commandMap);
                msg = "수정";
            }
        }
        
        if(listMap != null && listMap.size() > 0) {
            List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
            for(int i=0; i<listMap.size(); i++) {
                Map<String, Object> map = new HashMap<String, Object>();
                map.put("PRD_GRP_ID",        listMap.get(i).get("PRD_GRP_ID"));
                map.put("PRD_ID",            listMap.get(i).get("PRD_ID"));
                map.put("BSS_PRD_YN",        listMap.get(i).get("BSS_PRD_YN"));
                map.put("PRD_SEQ",           listMap.get(i).get("PRD_SEQ"));
                map.put("BSS_PRD_ATTR_INFO", listMap.get(i).get("BSS_PRD_ATTR_INFO"));
                map.put("DataSetRowType",    listMap.get(i).get("DataSetRowType"));
                map.put("CO_CD",             StringUtil.getString(commandMap.get("CO_CD")));
                map.put("USER_ID",           StringUtil.getString(commandMap.get("USER_ID")));
                list.add(map);
            }
            
            // 중복상품 제거
            List<Map<String, Object>> newList = list.stream().distinct().collect(Collectors.toList());
            
            for (Map<String, Object> data : newList) {
                 int saveDataType = StringUtil.getInt(data.get("DataSetRowType"));
                 String vPrdGrpId = StringUtil.getString(data.get("PRD_GRP_ID"));
                 data.put("UPD_RSN", updRsn);
                 
                 if(StringUtil.getString(data.get("BSS_PRD_YN")).equals("Y")) {
                     coCd    = StringUtil.getString(data.get("CO_CD"));    
                     prdId   = StringUtil.getString(data.get("PRD_ID"));    
                     userId  = StringUtil.getString(data.get("USER_ID"));
                 }
                
                 if( saveDataType == 1 ) {     
                     if(StringUtil.isEmpty(vPrdGrpId)) {
                         data.put("PRD_GRP_ID", prdGrpId);
                     }
                     rtn = srsGrpPrdMngDao.insertProductSeriesDtl(data);
                     msg = "상품등록";
                 } else if(saveDataType == 2) {
                     rtn = srsGrpPrdMngDao.updateProductSeriesDtl(data);
                     msg = "상품수정";
                 } else if(saveDataType == 3) {
                     rtn = srsGrpPrdMngDao.deleteProductSeriesDtl(data);
                     msg = "상품삭제";
                 }
            }
            recordPKeyValue = StringUtil.getString(commandMap.get("CO_CD")) + "|" +StringUtil.getString(commandMap.get("PRD_GRP_ID")); 
                    
            // 시리즈-속성만 동기화
            if(prdGrpSprCd.equals("20")) {
            	// 상품속성 동기화
            	syncProductAttrInfoByBssProduct(coCd, prdId, null, null, userId);
            }
        }
        
        if( rtn <= 0 ) throw new Exception("시리즈그룹 " + msg + " 실패");
        result.addVariable("strKeyValue",recordPKeyValue);
        
        return result;
    }
    
    
    /**
     * 상품속성동기화
     */
    public void syncProductAttrInfoByBssProduct(String coCd, String bssPrdId, String prdId, String prdAttrCd, String sessionOprtrId) throws Exception {
		Map<String, Object> param = new HashMap<>();
        param.put("CO_CD", coCd);
        param.put("BSS_PRD_ID", bssPrdId);
        
        if(!StringUtil.isEmpty(prdId)) {
            param.put("PRD_ID", prdId);
        }
        
        if(!StringUtil.isEmpty(prdAttrCd)) {
            param.put("PRD_ATTR_CD", prdAttrCd);
        }
        
        //대상조회 조건 몰구분:RND, 시리즈그룹(속성, 주문단위), 사용여부:Y  bssPrdId가 기준상품인 시리즈그룹(속성,주문단위) 조회
        List<Map<String, Object>> groupList = srsGrpPrdMngDao.selectSeriesGroupListToAttrSync(param);
        
        //대상이 존재할경우 기준상품의 속성을 베이스로 조회된 비기준상품의 속성정보를 업데이트
        if (groupList!=null && groupList.size() > 0) {
            for (Map<String, Object> group : groupList) {
            	Map<String, Object> paramMap = new HashMap<>();
            	
                String targetPrdId = StringUtil.getString(group, "PRD_ID");
                String TARGET_PRD_ATTR_INFO = StringUtil.getString(group, "TARGET_PRD_ATTR_INFO");      
                String[] targetAttr = StringUtil.split(TARGET_PRD_ATTR_INFO, ",");    //대표상품에 설정된 기준속성 제외한 동기화할 속성코드
                
                paramMap.put("CO_CD", coCd);
                paramMap.put("BSS_PRD_ID", bssPrdId);    //기준상품
                paramMap.put("PRD_ID", targetPrdId);          //대상상품
                paramMap.put("SESSION_OPRTR_ID", sessionOprtrId);
                
                for(String attrCd : targetAttr) {
                    if(!attrCd.isEmpty()) {
                    	paramMap.put("PRD_ATTR_CD", attrCd);
                    	srsGrpPrdMngDao.updateRndProductAttrToAttrSync(paramMap);
                    }
                }
            }
        }
	}
    
    
    /**
     * 상품그룹 상세 조회(selectProductSeries)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectProductSeries(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();
        
        List<Map<String,Object>>  list1 =  srsGrpPrdMngDao.selectProductSeriesBasis(searchMap);
        
        String prdGrpSprCd = StringUtil.getString(searchMap.get("PRD_GRP_SPR_CD"));
        
        List<Map<String,Object>>  list2 = new ArrayList<Map<String,Object>>();            //그룹구분에 따라 시리즈(10,20) / 연관(30)
        
        if(!prdGrpSprCd.equals("30")) {
        	list2 = srsGrpPrdMngDao.selectProductSeriesDtl01(searchMap);  // 그룹구분 시리즈(10,20) 
        }else {
        	list2 = srsGrpPrdMngDao.selectProductSeriesDtl02(searchMap);  // 그룹구분 시리즈 연관(30)
        }
        result.addDataSet("ds_output1", list1);
		result.addDataSet("ds_output2", list2);

        return result;
    }

}