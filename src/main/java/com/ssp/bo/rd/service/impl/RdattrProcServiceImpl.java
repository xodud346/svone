package com.ssp.bo.rd.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pr.controller.PrPropertyController;
import com.ssp.bo.rd.dao.RdattrProcDao;
import com.ssp.bo.rd.service.RdattrProcService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;
/**
 * <pre>
 * @title  R&D속성 서비스
 * @package com.ssp.bo.rd.service.impl
 * </pre>
 * @author 김진섭
 * @since 2022.03.11
 * @version 1.0
 * @see RdattrProcServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Service("RdattrProcService")
public class RdattrProcServiceImpl implements RdattrProcService {
	private final Logger log = LoggerFactory.getLogger(PrPropertyController.class);
	@Autowired
    private RdattrProcDao rdattrProcDao;
	
	@Resource(name = "propertiesService")
	private SspPropertyService propertiesService;

	public List<Map<String,Object>> selectPropertyList(Map<String, Object> searchInfo) throws Exception{
		
	    // input dataset id 카멜화
	    //Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);

	    log.debug("searchInfo_ggggg111aaaabbbeee==>:{}",searchInfo);
	    
	    // 속성명 split
		String prdId = (String) searchInfo.get("PRNM");
		if(prdId != null && !"".equals(prdId)) {
			if(prdId.contains(",")) {
	    		String[] prdIdArr = prdId.split(",");
	    		searchInfo.put("attrNmArr", prdIdArr);
	    		//searchMap.remove("prnm");
	    	}
		}    	

	    // 속성코드 split
		String tmpPrdAttrCd = (String) searchInfo.get("PRD_ATTR_CD");
		if(prdId != null && !"".equals(tmpPrdAttrCd)) {
			if(tmpPrdAttrCd.contains(",")) {
	    		String[] prdIdArrCd = tmpPrdAttrCd.split(",");
	    		searchInfo.put("attrCdArr", prdIdArrCd);
	    		//searchMap.remove("prnm");
	    	}
		}    	
		
		log.debug("searchMap_ggggg_11111222bbbbcccddd==>:{}",searchInfo);
		
		return rdattrProcDao.selectPropertyList(searchInfo);
    }
	
	public int selectPropertyCount(Map<String, Object> searchInfo) throws Exception{
		
	    // input dataset id 카멜화
	    Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);

	    log.debug("searchInfo_ggggg111==>:{}",searchMap);
	    
	    // 속성명 split
		String prdId = (String) searchMap.get("PRNM");
		if(prdId != null && !"".equals(prdId)) {
			if(prdId.contains(",")) {
	    		String[] prdIdArr = prdId.split(",");
	    		searchMap.put("attrNmArr", prdIdArr);
	    		//searchMap.remove("prnm");
	    	}
		}    	

	    // 속성코드 split
		String tmpPrdAttrCd = (String) searchInfo.get("PRD_ATTR_CD");
		if(prdId != null && !"".equals(tmpPrdAttrCd)) {
			if(tmpPrdAttrCd.contains(",")) {
	    		String[] prdIdArrCd = tmpPrdAttrCd.split(",");
	    		searchInfo.put("attrCdArr", prdIdArrCd);
	    		//searchMap.remove("prnm");
	    	}
		}    	

		log.debug("searchMap_ggggg_11111222==>:{}",searchMap);
		
		return rdattrProcDao.selectPropertyCount(searchMap);
	}

	public List<Map<String,Object>> selectProperty(Map<String, Object> searchMap) throws Exception{
		return rdattrProcDao.selectProperty(searchMap);
	}
	
	@Override
	public String selectRdAttrDuplicateCheck(Map<String, Object> searchMap) throws Exception {
		searchMap.put("CO_CD", propertiesService.getString("ssp.cocd"));
		return rdattrProcDao.selectRdAttrDuplicateCheck(searchMap);
	}

    public NexacroResult saveProperty(Map<String, Object> commandMap) throws Exception {
        NexacroResult result = new NexacroResult();

        int saveType = StringUtil.getInt(commandMap.get("DataSetRowType"));
        int rtn      = 0;
        String msg = "";
        String cocd = propertiesService.getString("ssp.cocd");
        
        commandMap.put("CO_CD", cocd); 
        commandMap.put("USER_ID", "TEST"); 
        
        if( saveType == 1 ) {           // 신규  
            rtn = rdattrProcDao.insertProperty(commandMap);
            msg = "등록";
        } else if( saveType == 2 ) {    //  수정
            rtn = rdattrProcDao.updateProperty(commandMap);
            msg = "수정";
        }
        if( rtn <= 0 ) throw new Exception("R&D속성 " + msg + " 실패");
        
        return result;
    }
}
