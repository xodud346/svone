package com.ssp.bo.rd.service.impl;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.rd.service.RdXlsxDownService;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.od.utils.OU;


@Service("rdXlsxDownService")
public class RdXlsxDownServiceImpl implements RdXlsxDownService{
    private final Logger log = LoggerFactory.getLogger(RdXlsxDownServiceImpl.class);
    
 
    @Autowired
	protected SspPropertyService propertiesService;
    
    
	private static ServletRequestAttributes currentRequestAttributes() {
		 try {
		    RequestAttributes requestAttr = RequestContextHolder.currentRequestAttributes();
		    if (!(requestAttr instanceof ServletRequestAttributes)) {
		        return null;
		    }
		    return (ServletRequestAttributes) requestAttr;
		 } catch (Exception e) {
			return null;
		 }
	}
    
	@Override
	public Map<String, Object> excelPrdPrc(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		// TODO Auto-generated method stub
        //searchMap = CommonUtil.toCamelCaseMap(searchMap);
        searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_LA_01");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "R&D공용상품가격관리.xlsx");
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        System.out.println("searchMap : "+searchMap.toString());
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
        
	}

	@Override
	public Map<String, Object> excelExPrdPrc(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		// TODO Auto-generated method stub
		//searchMap = CommonUtil.toCamelCaseMap(searchMap);
        searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_LA_05");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "R&D전용상품가격관리.xlsx");
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        System.out.println("searchMap : "+searchMap.toString());
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}
	
	
	@Override
	public Map<String, Object> excelPrdPrcHst(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		// TODO Auto-generated method stub
	    //searchMap = CommonUtil.toCamelCaseMap(searchMap);
	    searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
	    searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
	    searchMap.put("pgmId", "SSP_BO_LA_23");
	    searchMap.put("excelMetaSeq", 1);
	    searchMap.put("saveFileNm", "R&D가격변동이력관리.xlsx");
	    searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
	    searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
	    System.out.println("searchMap : "+searchMap.toString());
	    return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}


	@Override
	public Map<String, Object> excelPrdPrcStb(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {

		ServletRequestAttributes sra = currentRequestAttributes();
		
        searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_LA_24");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "R&D공용상품처리대기.xlsx");
        searchMap.put("excelPasswd", searchMap.get("EXCEL_PASSWD"));
        searchMap.put("downRsn", searchMap.get("DOWN_RSN"));
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        System.out.println("searchMap : "+searchMap.toString());

        searchMap.put("orgCd", OU.asS(odComm.getSession().get("ORG_CD")));
        searchMap.put("oprtrId", OU.asS(odComm.getSession().get("OPRTR_ID")));
        searchMap.put("pstnNm", OU.asS(odComm.getSession().get("PSTN_NM")));
        searchMap.put("cnsolIpAddr", sra.getRequest().getRemoteAddr());
        searchMap.put("dbWrk", "BIGDOWNLOAD");
        
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}

	@Override
	public Map<String, Object> excelExPrdPrcStb(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		ServletRequestAttributes sra = currentRequestAttributes();
		
        searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_LA_25");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "R&D전용상품처리대기.xlsx");
        searchMap.put("excelPasswd", searchMap.get("EXCEL_PASSWD"));
        searchMap.put("downRsn", searchMap.get("DOWN_RSN"));
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        System.out.println("searchMap : "+searchMap.toString());
        
        searchMap.put("orgCd", OU.asS(odComm.getSession().get("ORG_CD")));
        searchMap.put("oprtrId", OU.asS(odComm.getSession().get("OPRTR_ID")));
        searchMap.put("pstnNm", OU.asS(odComm.getSession().get("PSTN_NM")));
        searchMap.put("cnsolIpAddr", sra.getRequest().getRemoteAddr());
        searchMap.put("dbWrk", "BIGDOWNLOAD");
        
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}
	
	@Override
	public Map<String, Object> excelSalsPrdPrc(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		// TODO Auto-generated method stub
		//searchMap = CommonUtil.toCamelCaseMap(searchMap);
        searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_LA_18");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "R&D공용상품영업지정판매가관리.xlsx");
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        System.out.println("searchMap : "+searchMap.toString());
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}



}
