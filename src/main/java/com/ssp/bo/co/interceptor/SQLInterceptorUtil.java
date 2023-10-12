package com.ssp.bo.co.interceptor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ssp.bo.co.dao.CoPsnInfoArcHstDao;

@Component
public class SQLInterceptorUtil {
	public static CoPsnInfoArcHstDao coPsnInfoArcHstDao;
	
	@Autowired
	void setCoPsnInfoArcHstDao(CoPsnInfoArcHstDao coPsnInfoArcHstDao) {
		SQLInterceptorUtil.coPsnInfoArcHstDao = coPsnInfoArcHstDao;
	}	
}
