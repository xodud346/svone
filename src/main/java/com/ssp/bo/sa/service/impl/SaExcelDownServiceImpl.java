package com.ssp.bo.sa.service.impl;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.sa.dao.EdmInfoDao;
import com.ssp.bo.sa.service.ExhbnInfoService;
import com.ssp.bo.sa.service.PrePkgInfoService;
import com.ssp.bo.sa.service.SaExcelDownService;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.od.utils.OU;
import com.ssp.core.util.StringUtil;

/**
 * 영업마케팅 엑셀다운로드  SaExcelDownServiceImpl
 * YHK
 * 2022.12.13.
 */

@Service
public class SaExcelDownServiceImpl implements SaExcelDownService{
	
	private final Logger logger = LoggerFactory.getLogger(SaExcelDownServiceImpl.class);
			
	@Autowired
	protected SspPropertyService propertiesService;
			
	@Autowired
	private ExhbnInfoService exhbnInfoService;
	
	@Autowired
	private PrePkgInfoService prePkgInfoService;
	
	@Autowired
	private EdmInfoDao edmInfoDao;
	
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
	
	

	/** 기획전 목록 대용량 엑셀 다운로드 */
	@Override
	public NexacroResult createLargeExcelexhbnInfo(Map<String, Object> saveMap, OdOrderComm odComm) throws Exception {

		NexacroResult result = new NexacroResult();
		
		try {			
			
			Map<String, Object> saveInfo = CommonUtil.toCamelCaseMap(saveMap);
			
			// 기획전 리스트 조회
			List<Map<String,Object>> exhbnList = exhbnInfoService.selectExhbnInfoList(saveInfo);
			
			// 기획전 리스트에서 시퀀스만 추출					
			List<String> seqList = exhbnList.stream().map(exhbn -> StringUtil.getString(exhbn.get("EXHBN_SEQ")))
					.collect(Collectors.toList());
			saveInfo.put("seqList", seqList);
			
			// 엑셀 메타 정보 입력
			saveInfo.put("coCd", "1000");
			saveInfo.put("excelMetaSeq", 1);
            saveInfo.put("sesId", odComm.getSession().get("SES_ID").toString());
            saveInfo.put("pgmId", "SSP_BO_NA_01");	
            saveInfo.put("saveFileNm", "기획전관리_EXCEL_EXPORT.xlsx");
            saveInfo.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
            saveInfo.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
           	       
	        saveInfo.put("orgCd", OU.asS(odComm.getSession().get("ORG_CD")));
	        saveInfo.put("oprtrId", OU.asS(odComm.getSession().get("OPRTR_ID")));
	        saveInfo.put("pstnNm", OU.asS(odComm.getSession().get("PSTN_NM")));
	        saveInfo.put("dbWrk", "BIGDOWNLOAD");
	        
	        
	        
	        CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", saveInfo);
	        
	        	        	         						
		} catch (Exception e ) {
			String message = "기획전 목록 대용량 엑셀다운로드 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_01", "기획전 목록 대용량 엑셀다운로드"}, e) {};
		}
		
		return result;
		
	}
	
	/** 프리패키지 목록 대용량 엑셀 다운로드 */
	@Override
	public NexacroResult createLargeExcelprePkgInfo(Map<String, Object> saveMap, OdOrderComm odComm) throws Exception {
		
		NexacroResult result = new NexacroResult();
		
		try {			
			
			Map<String, Object> saveInfo = CommonUtil.toCamelCaseMap(saveMap);
			
			
			// 프리패키지 리스트 조회
			List<Map<String,Object>> prePkglist = prePkgInfoService.selectPrePkgInfoList(saveInfo);
			
			// 프리패키지 리스트에서 시퀀스만 추출					
			List<String> seqList = prePkglist.stream().map(prePkg -> StringUtil.getString(prePkg.get("PRE_PKG_SEQ")))
					.collect(Collectors.toList());
			saveInfo.put("seqList", seqList);
			
			// 엑셀 메타 정보 입력
			saveInfo.put("coCd", "1000");
			saveInfo.put("excelMetaSeq", 1);
            saveInfo.put("sesId", odComm.getSession().get("SES_ID").toString());
            saveInfo.put("pgmId", "SSP_BO_NA_21");	
            saveInfo.put("saveFileNm", "프리패키지_EXCEL_EXPORT.xlsx");
            saveInfo.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
            saveInfo.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
           	       
	        saveInfo.put("orgCd", OU.asS(odComm.getSession().get("ORG_CD")));
	        saveInfo.put("oprtrId", OU.asS(odComm.getSession().get("OPRTR_ID")));
	        saveInfo.put("pstnNm", OU.asS(odComm.getSession().get("PSTN_NM")));
	        saveInfo.put("dbWrk", "BIGDOWNLOAD");
	        
	        
	        
	        CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", saveInfo);
	        
	        	        	         						
		} catch (Exception e ) {
			String message = "프리패키지 목록 대용량 엑셀다운로드 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_21", "프리패키지 목록 대용량 엑셀다운로드"}, e) {};
		}
		
		return result;
	}

	/** 메인상품 목록 대용량 엑셀 다운로드 */
	@Override
	public NexacroResult createLargeExcelmainPrdInfo(Map<String, Object> saveMap, OdOrderComm odComm) throws Exception {

		NexacroResult result = new NexacroResult();
		
		try {			
			
			Map<String, Object> saveInfo = CommonUtil.toCamelCaseMap(saveMap);	
									
			// 엑셀 메타 정보 입력
			saveInfo.put("coCd", "1000");
			saveInfo.put("excelMetaSeq", 1);
            saveInfo.put("sesId", odComm.getSession().get("SES_ID").toString());
            saveInfo.put("pgmId", "SSP_BO_VA_01");	
            saveInfo.put("saveFileNm", "메인상품_EXCEL_EXPORT.xlsx");
            saveInfo.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
            saveInfo.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
           	       
	        saveInfo.put("orgCd", OU.asS(odComm.getSession().get("ORG_CD")));
	        saveInfo.put("oprtrId", OU.asS(odComm.getSession().get("OPRTR_ID")));
	        saveInfo.put("pstnNm", OU.asS(odComm.getSession().get("PSTN_NM")));
	        saveInfo.put("dbWrk", "BIGDOWNLOAD");
	        
	        
	        
	        CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", saveInfo);
	        
	        	        	         						
		} catch (Exception e ) {
			String message = "메인상품 목록 대용량 엑셀다운로드 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_21", "메인상품 목록 대용량 엑셀다운로드"}, e) {};
		}
		
		return result;
		
	}
	
	/** EDM 타겟 관리 대용량 엑셀 다운로드 */
	@Override
	public NexacroResult createLargeExcelEdmInfo(Map<String, Object> saveMap, OdOrderComm odComm) throws Exception {
		
		NexacroResult result = new NexacroResult();
		
		try {
			ServletRequestAttributes sra = currentRequestAttributes();
			
			Map<String, Object> saveInfo = CommonUtil.toCamelCaseMap(saveMap);
			
			// 이메일,문자 구분 및 엑셀메타시퀀스 할당
			if("E".equals(StringUtil.getString(saveInfo.get("edmFormCd")))) {
				saveInfo.put("mktgMailRcvAgreYn", "Y");
				saveInfo.put("excelMetaSeq", 1);
			} else if("S".equals(StringUtil.getString(saveInfo.get("edmFormCd")))) {
				saveInfo.put("mktgCharRcvAgreYn", "Y");
				saveInfo.put("excelMetaSeq", 2);
			}
					
			
            saveInfo.put("sesId", odComm.getSession().get("SES_ID").toString());
            saveInfo.put("pgmId", "SSP_BO_ED_01");	
            saveInfo.put("saveFileNm", "EDM타겟관리리스트.xlsx");
            saveInfo.put("excelPasswd", saveInfo.get("excelPw"));
            saveInfo.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
            saveInfo.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
           	       
	        saveInfo.put("orgCd", OU.asS(odComm.getSession().get("ORG_CD")));
	        saveInfo.put("oprtrId", OU.asS(odComm.getSession().get("OPRTR_ID")));
	        saveInfo.put("pstnNm", OU.asS(odComm.getSession().get("PSTN_NM")));
	        saveInfo.put("cnsolIpAddr", sra.getRequest().getRemoteAddr());
	        saveInfo.put("dbWrk", "BIGDOWNLOAD");
	        
	        Map<String,Object> map = CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", saveInfo);
	        saveInfo.put("fileSeq", Integer.parseInt((String.valueOf(map.get("fileSeq")))));
	        edmInfoDao.updateEdmInfo(saveInfo);
	        
	        	        	         						
		} catch (Exception e ) {
			String message = "EDM 타겟 관리 대용량 엑셀다운로드 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_ED_02", "EDM 타겟 관리 대용량 엑셀다운로드"}, e) {};
		}
		
		return result;
				
	}
	
}
