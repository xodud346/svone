package com.ssp.bo.cc.service;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title   	CorpService
 * @desc    	사업장기본
 * @package 	com.ssp.core.cc.service
 * </pre>
 * @author 
 * @since 2022.02.10
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜     	변경자   	내용
 * ------------------------------------------------
 * 2022.02.10  	박성근  	최초작성
 */
public interface CorpService {
	
	List<Map<String, Object>> list  (Map<String, Object> params) throws Exception;
	List<Map<String, Object>> xlsx  (Map<String, Object> params) throws Exception;
	
}
