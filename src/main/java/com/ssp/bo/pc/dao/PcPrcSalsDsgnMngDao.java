package com.ssp.bo.pc.dao;

import java.util.List;
import java.util.Map;

public interface PcPrcSalsDsgnMngDao {

	List<Map<String, Object>> selectList(Map<String, Object> searchMap) throws Exception;
	
	int selectListCount(Map<String, Object> searchMap) throws Exception;
}
