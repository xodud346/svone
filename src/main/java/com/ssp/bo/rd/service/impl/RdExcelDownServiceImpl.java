package com.ssp.bo.rd.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.rd.service.RdExcelDownService;
import com.ssp.bo.rd.util.StringUtils;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.od.utils.OU;
import com.ssp.core.util.ObjectUtils;


@Service("rdExcelDownService")
public class RdExcelDownServiceImpl implements RdExcelDownService{
    private final Logger log = LoggerFactory.getLogger(RdExcelDownServiceImpl.class);
    
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
    
    //신규 상품등록 요청목록
	@Override
	public Map<String, Object> newProductRegist(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		ServletRequestAttributes sra = currentRequestAttributes();
		
		searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_RD_18");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "R&D신규상품등록요청목록.xlsx");
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        

        searchMap.put("orgCd", OU.asS(odComm.getSession().get("ORG_CD")));
        searchMap.put("oprtrId", OU.asS(odComm.getSession().get("OPRTR_ID")));
        searchMap.put("pstnNm", OU.asS(odComm.getSession().get("PSTN_NM")));
        searchMap.put("cnsolIpAddr", sra.getRequest().getRemoteAddr());
        searchMap.put("dbWrk", "BIGDOWNLOAD");

        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}
	
	//신규 상품일괄등록요청목록
	@Override
	public Map<String, Object> newProductMultiRegist(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		ServletRequestAttributes sra = currentRequestAttributes();
		
		searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
		searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
		searchMap.put("pgmId", "SSP_BO_RD_71");
		searchMap.put("excelMetaSeq", 1);
		searchMap.put("saveFileNm", "R&D신규상품 일괄선제안_대용량.xlsx");
		searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
		searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
		
		
		searchMap.put("orgCd", OU.asS(odComm.getSession().get("ORG_CD")));
		searchMap.put("oprtrId", OU.asS(odComm.getSession().get("OPRTR_ID")));
		searchMap.put("pstnNm", OU.asS(odComm.getSession().get("PSTN_NM")));
		searchMap.put("cnsolIpAddr", sra.getRequest().getRemoteAddr());
		searchMap.put("dbWrk", "BIGDOWNLOAD");
		
		return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}
	
	//상품정보 관리
	@Override
	public Map<String, Object> productInfo(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
	
		searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_RD_01");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "R&D상품정보관리.xlsx");
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}

	//구매정보 관리
	@Override
	public Map<String, Object> purchaseInfo(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		
		searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_RD_09");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "R&D구매정보관리.xlsx");
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}

	//시리즈 그룹 상품 관리
	@Override
	public Map<String, Object> groupProduct(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {

		searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_RD_04");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "R&D시리즈그룹상품관리.xlsx");
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}

	//화학물질 정보 관리
	@Override
	public Map<String, Object> chemicalMeterialInfo(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		
		String searchType = searchMap.get("INQ_BSS") + "";
		
		  //조회기준 단일처리
//		  searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
//        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
//        searchMap.put("pgmId", "SSP_BO_RD_42");
//        searchMap.put("excelMetaSeq", 1);
//        searchMap.put("saveFileNm", "R&D화학물질정보관리.xlsx");
//        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
//        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
		
		//조회기준 분기처리
		if ( "PRD_ID".equals(searchType)) {
			searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
	        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
	        searchMap.put("pgmId", "SSP_BO_RD_42");
	        searchMap.put("excelMetaSeq", 1);
	        searchMap.put("saveFileNm", "R&D화학물질정보관리.xlsx");
	        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
	        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
		} else {
			searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
	        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
	        searchMap.put("pgmId", "SSP_BO_RD_42");
	        searchMap.put("excelMetaSeq", 2);
	        searchMap.put("saveFileNm", "R&D화학물질정보관리_CASNO.xlsx");
	        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
	        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
		}

        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}

	//구매정보 변경이력 관리
	@Override
	public Map<String, Object> purchaseInfoChangeHistory(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {

		searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_RD_10");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "R&D구매정보변경이력관리.xlsx");
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}
	
	// 협력사 견적 POOL 관리
	@Override
	public Map<String, Object> cprtcpPoolInfoMng(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		List<String> stbList = new ArrayList<>();
		if (!ObjectUtils.isNull(searchMap.get("CPRTCP_TP_CD"))) {
			stbList = StringUtils.makeList(searchMap.get("CPRTCP_TP_CD").toString(), ",");
			searchMap.put("CPRTCP_TP_CD_LIST", stbList);
		}
		
		searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_RD_19");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "R&D협력사견적POOL관리.xlsx");
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}
	
	// 협력사 견적 POOL 이력조회
	@Override
	public Map<String, Object> cprtcpPoolInfoMngHstr(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		List<String> stbList = new ArrayList<>();
		if (!ObjectUtils.isNull(searchMap.get("CPRTCP_TP_CD"))) {
			stbList = StringUtils.makeList(searchMap.get("CPRTCP_TP_CD").toString(), ",");
			searchMap.put("CPRTCP_TP_CD_LIST", stbList);
		}
		
		searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        searchMap.put("pgmId", "SSP_BO_RD_19_01");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "R&D협력사견적POOL이력조회.xlsx");
        searchMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}
}
