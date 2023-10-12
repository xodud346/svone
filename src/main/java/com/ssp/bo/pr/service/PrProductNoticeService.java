package com.ssp.bo.pr.service;

import java.util.List;
import java.util.Map;

public interface PrProductNoticeService {

	List<Map<String, Object>> selectProductNoticeList(Map<String, Object> searchMap); 
	List<Map<String, Object>> selectProductNoticeDetail(Map<String, Object> searchMap); 
    void saveProductNotice(Map<String, Object> searchMap) throws Exception; 

}
