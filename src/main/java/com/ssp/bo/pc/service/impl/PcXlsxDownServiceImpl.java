package com.ssp.bo.pc.service.impl;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pc.service.PcXlsxDownService;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.property.SspPropertyService;


@Service("pcXlsxDownService")
public class PcXlsxDownServiceImpl implements PcXlsxDownService{
    private final Logger log = LoggerFactory.getLogger(PcXlsxDownServiceImpl.class);
    

    @Autowired
	protected SspPropertyService propertiesService;
    
	@Override
	public Map<String, Object> excelPrdPrcBzplc(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		// TODO Auto-generated method stub
        searchMap = CommonUtil.toCamelCaseMap(searchMap);
        searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_CA_01");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "사업장별가격조회.xlsx");
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        System.out.println("searchMap : "+searchMap.toString());
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
        
	}

	@Override
	public Map<String, Object> excelPrdPrc(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		// TODO Auto-generated method stub
        searchMap = CommonUtil.toCamelCaseMap(searchMap);
        searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_CA_20");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "공용상품가격관리.xlsx");
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        System.out.println("searchMap : "+searchMap.toString());
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
        
	}

	@Override
	public Map<String, Object> excelPrdPrcHst(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		// TODO Auto-generated method stub
	    searchMap = CommonUtil.toCamelCaseMap(searchMap);
	    searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
	    searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
	    searchMap.put("pgmId", "SSP_BO_CA_02");
	    searchMap.put("excelMetaSeq", 1);
	    searchMap.put("saveFileNm", "가격변동이력관리.xlsx");
	    searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
	    searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
	    System.out.println("searchMap : "+searchMap.toString());
	    return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}

	@Override
	public Map<String, Object> excelPrdPrcBatch(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		// TODO Auto-generated method stub
		searchMap = CommonUtil.toCamelCaseMap(searchMap);
        searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_YA_35");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "기준판매가정기배치.xlsx");
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        String pubOnlySprCd = null;
        if("W0002".equals(searchMap.get("downloadSprCd"))) {
            pubOnlySprCd = "P";
            searchMap.put("saveFileNm", "기준판매가정기배치(공용).xlsx");
        }else if("W0003".equals(searchMap.get("downloadSprCd"))) {
            pubOnlySprCd = "E";
            searchMap.put("saveFileNm", "기준판매가정기배치(전용).xlsx");
        }
        searchMap.put("downloadSprCd", pubOnlySprCd);

        System.out.println("searchMap : "+searchMap.toString());
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}

	@Override
	public Map<String, Object> excelPrdPrcStb(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		// TODO Auto-generated method stub
		searchMap = CommonUtil.toCamelCaseMap(searchMap);
        searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_CA_10");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "공용상품처리대기.xlsx");
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("orgCd", odComm.getSession().get("ORG_CD").toString());
        searchMap.put("oprtrId", odComm.getSession().get("OPRTR_ID").toString());
        System.out.println("searchMap : "+searchMap.toString());
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}

	@Override
	public Map<String, Object> excelExPrdPrcStb(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		// TODO Auto-generated method stub
		searchMap = CommonUtil.toCamelCaseMap(searchMap);
        searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_CA_11");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "전용상품처리대기.xlsx");
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("orgCd", odComm.getSession().get("ORG_CD").toString());
        searchMap.put("oprtrId", odComm.getSession().get("OPRTR_ID").toString());
        System.out.println("searchMap : "+searchMap.toString());
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}
	
	@Override
	public Map<String, Object> excelSalsPrdPrc(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		// TODO Auto-generated method stub
		searchMap = CommonUtil.toCamelCaseMap(searchMap);
        searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_CA_32");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "공용상품영업지정판매가관리.xlsx");
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        System.out.println("searchMap : "+searchMap.toString());
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}

	@Override
	public Map<String, Object> excelExPrdPrc(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		// TODO Auto-generated method stub
		searchMap = CommonUtil.toCamelCaseMap(searchMap);
        searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_CA_37");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "전용상품가격관리.xlsx");
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        System.out.println("searchMap : "+searchMap.toString());
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}
	
	@Override
	public Map<String, Object> excelIntlLwst(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		// TODO Auto-generated method stub
		searchMap = CommonUtil.toCamelCaseMap(searchMap);
        searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_CA_55");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "내부최저판매가관리.xlsx");
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        System.out.println("searchMap : "+searchMap.toString());
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}
	
	@Override
	public Map<String, Object> excelPrdPrcChg(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		// TODO Auto-generated method stub
		searchMap = CommonUtil.toCamelCaseMap(searchMap);
        searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_CA_55");
        searchMap.put("excelMetaSeq", 2);
        searchMap.put("saveFileNm", "참조가격관리.xlsx");
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        System.out.println("searchMap : "+searchMap.toString());
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}
}
