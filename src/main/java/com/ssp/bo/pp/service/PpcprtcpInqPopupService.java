package com.ssp.bo.pp.service;

import java.util.List;
import java.util.Map;

public interface PpcprtcpInqPopupService {
	
	int selectManufacturerCount(Map<String, Object> searchMap) throws Exception; 
	List<Map<String, Object>> selectManufacturerList(Map<String, Object> searchMap) throws Exception; 


}
