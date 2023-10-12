package com.ssp.bo.pr.service;

import java.util.List;
import java.util.Map;

import com.ssp.bo.od.OdOrderComm;

public interface PrProductNotificationService {
	
	int selectNotificationCount(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception; 
	List<Map<String, Object>> selectNotificationList(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception; 
}
