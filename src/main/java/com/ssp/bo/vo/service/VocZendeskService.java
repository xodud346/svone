package com.ssp.bo.vo.service;

import java.util.Map;

public interface VocZendeskService {
	Map<String, Object> list(Map<String, Object> param) throws Exception;
	Map<String, Object> info(Map<String, Object> param) throws Exception;
	Map<String, Object> save(Map<String, Object> param) throws Exception;
}
