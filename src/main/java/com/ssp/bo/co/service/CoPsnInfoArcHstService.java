package com.ssp.bo.co.service;

import java.util.List;
import java.util.Map;

public interface CoPsnInfoArcHstService {
	
	public int selectCoPsnInfoArcHstListCnt(Map<String, Object> param) throws Exception;
	
	public List<Map<String, Object>> selectCoPsnInfoArcHstList(Map<String, Object> param) throws Exception;
}
