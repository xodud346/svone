/*------------------------------------------------------------------------------
 * NAME : ComTestServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.09  홍길동
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.ssp.bo.rd.dao.ComTestDao;
import com.ssp.bo.rd.service.ComTestService;
import com.ssp.core.rd.service.PI_PrdDormancyService;
import com.ssp.core.rd.service.PI_PrdInfoService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.legacy.mall.model.Admin;

/**
 * <pre>
 *
 * @title   ComTestServiceImpl
 * @@desc   상품전송정보 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.05.09
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------ 
 * 2022.05.09			       최초작성
 */
@Service("comTestService")
public class ComTestServiceImpl implements ComTestService {

    @Resource(name = "comTestDao")
    private ComTestDao comTestDao;
    
    @Resource(name = "pI_PrdInfoService")
    private PI_PrdInfoService pI_PrdInfoService;
    
    @Resource(name = "pI_PrdDormancyService")
    private PI_PrdDormancyService pI_PrdDormancyService;

    /**
     * 상품전송정보 리스트 조회(selectComTest)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectComTest(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        int totalCount    = comTestDao.selectComTestCount(searchMap);
        List<Map> records = comTestDao.selectComTest(searchMap);

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);

        return result;
    }

    /**
     * 상품전송정보 리스트 저장/수정(saveComTest)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult saveComTest(List<Map<String, Object>> prdMap, Admin userInfo) throws Exception {

        NexacroResult result = new NexacroResult();
        
        Map<String, Object> commandMap = new HashMap<String,Object>();

        int resultCnt 		= 0;

        if(prdMap.size() > 0)
        {
        	String ifMsgId = comTestDao.selectComTestPKey(commandMap);
             for (int i=0; i < prdMap.size() ; i++)
             {
                  Map<String,Object> saveData = prdMap.get(i);
                  //저장 전 체크로직
                  saveData.put("SND_YN", "P','N");
                  List <Map> dsList = comTestDao.selectComTest(saveData);
                  
                  if(dsList.isEmpty()) {
                	  saveData.put("IF_MSG_ID", ifMsgId);
                	  saveData.put("loginId", userInfo.getADM_MST_ID());
                	  saveData.put("indvPkgSprCd", prdMap.get(i).get("INDV_PKG_SPR_CD"));
                	  //PI 테이블 Insert
                	  comTestDao.insertComTest(saveData);
                	  
                	  //10000건 단위로 전송
                	  if(i != 0) {
                		  if( (i % 10000) == 0){
                			 commandMap.put("ifCoCd","1000");
            	             commandMap.put("ifMsgId",ifMsgId);
            	             //PI 호출
            	             resultCnt = pI_PrdInfoService.PI_PrdInfo(commandMap);
            	             if(resultCnt != 0) {
            	            	 comTestDao.updateComTest(commandMap);
            	             }
                		  }
                	  }
                	  resultCnt = 0;
                  } else {
                	  throw new Exception("처리 중인 건이 존재합니다.");
                  }
              }
             commandMap.put("ifCoCd","1000");
             commandMap.put("ifMsgId",ifMsgId);
             //10000만 이하 또는 10000만 초과 나머지 Data 에 대한 PI 호출
             resultCnt = pI_PrdInfoService.PI_PrdInfo(commandMap);
             if(resultCnt != 0) {
            	 //전송 후 SND_YN 상태값 변경(P)
            	 comTestDao.updateComTest(commandMap);
             }
        }
        
        //처리 후 화면 조회 Query
        List <Map> dsList = comTestDao.selectComTest(commandMap);

        result.addDataSet("ds_master",   dsList);

        return result;
    }
    
    /**
     * 상품전송정보 리스트 저장/수정(saveComTest)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult saveComTestBatch(List<Map<String, Object>> prdMap, Admin userInfo) throws Exception {

        NexacroResult result = new NexacroResult();
        
        Map<String, Object> commandMap = new HashMap<String,Object>();

        int iCnt            = 0;
        int uCnt            = 0;
        int dCnt            = 0;
        int rowType;
        String recordPKeyValue = "";


        Map<String,Object> saveData = new HashMap<String,Object>();
        Map<String,Object> saveData2 = new HashMap<String,Object>();
        //저장 전 체크로직
        saveData.put("SND_YN", "P");
        List<Map<String,Object>> dsList = comTestDao.selectComTestBatch(saveData);
        if(dsList.isEmpty()) {
        	saveData2.put("SND_YN", "N");
        	List<Map<String,Object>> dsListBatch = comTestDao.selectComTestBatch(saveData2);
        	commandMap.put("ifCoCd","1000");
            commandMap.put("ifMsgId",dsListBatch.get(0).get("IF_MSG_ID"));
            commandMap.put("indvPkgSprCd", prdMap.get(0).get("INDV_PKG_SPR_CD"));
            //PI 호출
            int resultCnt = pI_PrdInfoService.PI_PrdInfo(commandMap);
            if(resultCnt != 0) {
           	 	comTestDao.updateComTest(commandMap);
            }
        } else {
    	    throw new Exception("처리 중인 건이 존재합니다.");
        }
 
        List <Map> dsListSearch = comTestDao.selectComTest(commandMap);

        result.addDataSet("ds_master",   dsListSearch);
        result.addVariable("strKeyValue",recordPKeyValue);

        return result;
    }

	@Override
	public NexacroResult selectComTestprd(Map<String, Object> searchMap) throws Exception {
		// List<Map> records = comTestDao.selectComTest(searchMap);
		NexacroResult result = new NexacroResult();
		
		List<Map> records = comTestDao.selectComTestPrd(searchMap);
		
        result.addDataSet("ds_prd",  records);
		return result;
	}
	
	/**
     * 상품전송정보 리스트 저장/수정(saveComTest)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult saveComTestOnly(List<Map<String, Object>> prdMap, Admin userInfo) throws Exception {

    	NexacroResult result = new NexacroResult();
        
        Map<String, Object> commandMap = new HashMap<String,Object>();

        int iCnt            = 0;
        int uCnt            = 0;
        int dCnt            = 0;
        int rowType;
        String recordPKeyValue = "";

        if(prdMap.size() > 0)
        {
        	String ifMsgId = comTestDao.selectComTestPKey(commandMap);
             for (int i=0; i < prdMap.size() ; i++)
             {
                  Map<String,Object> saveData = prdMap.get(i);
                  //저장 전 체크로직
                  saveData.put("SND_YN", "P','N");
                  List <Map> dsList = comTestDao.selectComTest(saveData);
                  if(dsList.isEmpty()) {
                	  saveData.put("IF_MSG_ID", ifMsgId);
                	  saveData.put("loginId", userInfo.getADM_MST_ID());
                	  saveData.put("indvPkgSprCd", prdMap.get(i).get("INDV_PKG_SPR_CD"));
                	  //PI 테이블 Insert
                	  comTestDao.insertComTest(saveData);
                  } else {
                	  throw new Exception("처리 중인 건이 존재합니다.");
                  }
              }
        }
    
        List <Map> dsList = comTestDao.selectComTest(commandMap);

        result.addDataSet("ds_master",   dsList);
        result.addVariable("strKeyValue",recordPKeyValue);

        return result;
    }
    
    /**
     * 상품전송정보 리스트 저장/수정(saveComTest)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult saveComTest1303(List<Map<String, Object>> prdMap, Admin userInfo) throws Exception {

    	NexacroResult result = new NexacroResult();
        
        Map<String, Object> commandMap = new HashMap<String,Object>();
        int resultCnt		= 0;
        String recordPKeyValue = "";

        if(prdMap.size() > 0)
        {
        	String ifMsgId = comTestDao.selectComTestPKey(commandMap);
             for (int i=0; i < prdMap.size() ; i++)
             {
                  Map<String,Object> saveData = prdMap.get(i);
                  //저장 전 체크로직
                  saveData.put("SND_YN", "P','N");
                  List <Map> dsList = comTestDao.selectComTest1303(saveData);
                  if(dsList.isEmpty()) {
                	  saveData.put("IF_MSG_ID", ifMsgId);
                	  saveData.put("loginId", userInfo.getADM_MST_ID());
                	  saveData.put("indvPkgSprCd", prdMap.get(i).get("INDV_PKG_SPR_CD"));
                	  //PI 테이블 Insert
                	  comTestDao.insertComTest1303(saveData);
                	  
                	  if(i != 0) {
                		  if( (i % 10000) == 0){
                			 commandMap.put("ifCoCd","1000");
            	             commandMap.put("ifMsgId",ifMsgId);
            	             //PI 호출
            	             resultCnt = pI_PrdDormancyService.PI_PrdDormancy(commandMap);
            	             if(resultCnt != 0) {
            	            	 comTestDao.updateComTest3(commandMap);
            	             }
                		  }
                	  }
                	  resultCnt = 0;
                  } else {
                	  throw new Exception("처리 중인 건이 존재합니다.");
                  }
              }
             commandMap.put("ifCoCd","1000");
             commandMap.put("ifMsgId",ifMsgId);
             //PI 호출
             resultCnt = pI_PrdDormancyService.PI_PrdDormancy(commandMap);
             if(resultCnt != 0) {
            	 comTestDao.updateComTest3(commandMap);
             }
        }
    
        List <Map> dsList = comTestDao.selectComTest(commandMap);

        result.addDataSet("ds_master",   dsList);
        result.addVariable("strKeyValue",recordPKeyValue);

        return result;
    }

}