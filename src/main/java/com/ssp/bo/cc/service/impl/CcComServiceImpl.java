package com.ssp.bo.cc.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.dao.CcComCodeDao;
import com.ssp.bo.cc.service.CcComService;
import com.ssp.core.co.util.CommonUtil;

@Service("ccComService")
public class CcComServiceImpl implements CcComService {
    private final Logger logger = LoggerFactory.getLogger(CcComServiceImpl.class);
    
//    @Resource(name="coComCdMngDao")
//    private CoComCdMngDao coComCdMngDao;
    
    @Resource(name="ccComCodeDao")
    private CcComCodeDao ccComCodeDao;
    
    private Map<String, Object> makeComCodeItem(String cd, String nm) {
        Map<String, Object> item = new HashMap<String, Object>();
        
        item.put("COM_DTL_CD"   , cd);  item.put("CD", cd);
        item.put("COM_DTL_CD_NM", nm);  item.put("NM", nm);
        
        return item;
    }
    
	@Override
	public NexacroResult comCdClsfDtlSearchList(Map<String, Object> commandMap) throws Exception {
        NexacroResult result = new NexacroResult();
        
        String dsTrgt = (String) commandMap.get("TRGT"), sDfltCD = (String) commandMap.get("CD"), sDfltNM = (String) commandMap.get("NM");
//        if (dsTrgt != null && "LG_GRP_YN".indexOf(dsTrgt.replaceAll("ds", "")) > -1) {
//            List<Map<String, Object>> cdList = new ArrayList<Map<String, Object>>();
//            
//            cdList.add(makeComCodeItem(sDfltCD, sDfltNM));
//            cdList.add(makeComCodeItem("Y"    , "LG그룹"));
//            cdList.add(makeComCodeItem("N"    , "-"     ));
//            
//            result.addDataSet(dsTrgt, cdList);
//            return result;
//        }
        
        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);
        
        //조회
        List<Map<String,Object>> list = ccComCodeDao.selectComCodeDtl(searchMap); //coCommonService.selectExceptionInfoList(searchMap);
        if (dsTrgt != null) {
            List<Map<String, Object>> cdList = new ArrayList<Map<String, Object>>();
            
            cdList.add(makeComCodeItem(sDfltCD, sDfltNM));
            cdList.addAll(list);
            
            result.addDataSet(dsTrgt, cdList);
        } else {
        	result.addDataSet("ds_output1", list);
        }
        
        return result;
    }
    
    
    public NexacroResult comCodes(List<Map<String, Object>> listComCodes) throws Exception {
    	NexacroResult r = new NexacroResult();
    	
    	for(Map<String, Object> mapItem : listComCodes) {
    		Map<String, Object> mapParam = CommonUtil.toCamelCaseMap(mapItem);
    		
    		List<Map<String,Object>> listCode = new ArrayList<Map<String,Object>>();
    		
    		String sComClsfCd = (String) mapParam.get("comClsfCd");
    		if (sComClsfCd == null) { continue; }
    		if (sComClsfCd.indexOf(":") > -1) {
    			String[] aComClsfCd = sComClsfCd.split(":", 2);
    			
    			listCode.add(makeComCodeItem(null, aComClsfCd[0]));
    			
    			sComClsfCd = aComClsfCd[1];
    			mapParam.put("comClsfCd", sComClsfCd);
    			
    		}
			listCode.addAll(ccComCodeDao.selectComCodeDtl(mapParam));
			r.addDataSet("dsCom"+sComClsfCd, listCode);
    	}
    	
    	return r;
    }

    
    
    public NexacroResult selectBzplcOprunit(Map<String, Object> param) throws Exception {
    	NexacroResult r = new NexacroResult();
    	
    	// list row 0 is parameter 
    	String[][] pKeys = {
    		  { "coCd"     , "CO_CD"       }
    		, { "grpId"    , "GRP_ID"      }
    		, { "corpId"   , "CORP_ID"     }
    		, { "bzplcId"  , "BZPLC_ID"    }
    		, { "oprUnitId", "OPR_UNIT_ID" }
    		, { "oprUnitNm", "OPR_UNIT_NM" }
    	};
    	for (String[] pKey : pKeys) {
    		param.put(pKey[1], param.get(pKey[0]));
    	}
    	
    	String col=null;
    	List<Map<String, Object>> listBzplcOprunit = ccComCodeDao.selectBzplcOprunit(param);
    	if (listBzplcOprunit != null && listBzplcOprunit.size() > 0) {
    		Map<String, Object> row0 = listBzplcOprunit.get(0);
    		col="TOT_CUNT"; param.put(col, row0.get(col));
    	}
    	List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
    	list.add   (param);
    	list.addAll(listBzplcOprunit);
    	
    	r.addDataSet("dsBzplcOprunit", list);
    	
    	return r;
    }
    
    /*
     * 결재선 상 mbrId가 유효한 회원정보인지 체크 
     * */
    public int checkMbrExist(Map<String, Object> param) throws Exception {
    	int chk = ccComCodeDao.checkMbrExist(param);
		return chk;
    }
    
}
