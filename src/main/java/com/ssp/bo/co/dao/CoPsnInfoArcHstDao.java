package com.ssp.bo.co.dao;

import java.util.List;
import java.util.Map;

public interface CoPsnInfoArcHstDao {
	int insertCoPsnInfoArcHst(Map<String, Object> param) throws Exception;
	
	Map<String, Object> selectPgmInfo(String uri) throws Exception;
	
	Map<String, Object> selectPgmInfo(Map<String, Object> param) throws Exception;
	
	int selectCoPsnInfoArcHstListCnt(Map<String, Object> param) throws Exception;
	
	List<Map<String, Object>> selectCoPsnInfoArcHstList(Map<String, Object> param) throws Exception;

	int selectCount(Map<String, Object> param) throws Exception;
}
