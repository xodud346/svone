package com.ssp.bo.pr.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pr.controller.PrPropertyController;
import com.ssp.bo.pr.dao.PrPropertyDao;
import com.ssp.bo.pr.service.PrPropertyService;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;
/**
 * <pre>
 * @title  SSP속성 서비스
 * @package com.ssp.bo.pr.service.impl
 * </pre>
 * @author 이원준
 * @since 2022.02.17
 * @version 1.0
 * @see PrPropertyServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 
 */
@Service("PrPropertyService")
public class PrPropertyServiceImpl implements PrPropertyService {
    private final Logger log = LoggerFactory.getLogger(PrPropertyController.class);
    @Autowired
    private PrPropertyDao propertyDao;
    
    @Resource(name = "propertiesService")
    private SspPropertyService propertiesService;

    /**
     * <pre>
     * 1. MethodName : selectPropertyList
     * 2. ClassName  : PrPropertyServiceImpl.java
     * 3. Comment    : SSP속성 목록 조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public List<Map<String,Object>> selectPropertyList(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception{
    	searchMap.put("SES_ID", odOrderComm.getSession().get("SES_ID").toString());
    	return propertyDao.selectPropertyList(searchMap);
    }
    
    /**
     * <pre>
     * 1. MethodName : selectPropertyCount
     * 2. ClassName  : PrPropertyServiceImpl.java
     * 3. Comment    : SSP속성 목록 카운터
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public int selectPropertyCount(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception{
    	searchMap.put("SES_ID", odOrderComm.getSession().get("SES_ID").toString());
    	return propertyDao.selectPropertyCount(searchMap);
    }

    /**
     * <pre>
     * 1. MethodName : selectProperty
     * 2. ClassName  : PrPropertyServiceImpl.java
     * 3. Comment    : SSP속성 상세 조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public List<Map<String,Object>> selectProperty(Map<String, Object> searchMap) throws Exception{
        return propertyDao.selectProperty(searchMap);
    }
    
    /**
     * <pre>
     * 1. MethodName : saveProperty
     * 2. ClassName  : PrPropertyServiceImpl.java
     * 3. Comment    : SSP속성 저장
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return 
     * @throws Exception 
     */

    public NexacroResult saveProperty(Map<String, Object> commandMap) throws Exception {
        NexacroResult result = new NexacroResult();

        int saveType = StringUtil.getInt(commandMap.get("DataSetRowType"));
        int rtn      = 0;
        String msg = "";
        
        if( saveType == 1 ) {           // 신규  
            rtn = propertyDao.insertProperty(commandMap);
            msg = "등록";
        } else if( saveType == 2 ) {    //  수정
            rtn = propertyDao.updateProperty(commandMap);
            msg = "수정";
        }
        if( rtn <= 0 ) { throw new Exception("SSP속성 " + msg + " 실패"); };
        
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectPropertyPrNm
     * 2. ClassName  : PrPropertyServiceImpl.java
     * 3. Comment    : SSP속성명 중복조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return 
     * @throws Exception 
     */

    public int selectPropertyPrNm(Map<String, Object> searchMap) throws Exception{
        return propertyDao.selectPropertyPrNm(searchMap);
    }
}
