package com.ssp.bo.vo.dao;

import java.util.List;
import java.util.Map;

public interface VocHelperDao {
	/*test 주석*/
	List<Map<String, Object>> list(Map<String, Object> param) throws Exception;
	Map<String, Object> info(Map<String, Object> param) throws Exception;
	Map<String, Object> save(Map<String, Object> param) throws Exception;
}
