package com.ssp.bo.od.service;

import java.util.Map;

public interface OdOdrQtyLmtService {
	
	Map<String, Object> selectQtyLmtUseYn(Map<String, Object> map) throws Exception;
	
	Map<String, Object> listOdrQtyLmt(Map<String, Object> map) throws Exception;
	Map<String, Object> xlsxOdrQtyLmt(Map<String, Object> map) throws Exception;
	Map<String, Object> infoOdrQtyLmt(Map<String, Object> map) throws Exception;
	Map<String, Object> histOdrQtyLmt(Map<String, Object> map) throws Exception;
	Map<String, Object> saveOdrQtyLmt(Map<String, Object> map) throws Exception;
	Map<String, Object> trmnOdrQtyLmt(Map<String, Object> map) throws Exception;
	
	Map<String, Object> infoPrd(Map<String, Object> map) throws Exception;
	
	
	Map<String, Object> patchOdrQtyLmt(Map<String, Object> map) throws Exception;
	
	
	Map<String, Object> validatePrd  (Map<String, Object> map) throws Exception;
	Map<String, Object> validateBzplc(Map<String, Object> map) throws Exception;
	
	Map<String, Object> xlsxDownload (Map<String, Object> map) throws Exception;
	Map<String, Object> xlsxBackgroundDownload (Map<String, Object> map) throws Exception;
}
