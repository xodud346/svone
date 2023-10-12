package com.ssp.bo.pr.dao;

import java.util.List;
import java.util.Map;

public interface PrProductNotificationDao {
	
	int selectNotificationCount(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectNotificationList(Map<String, Object> searchMap);
}
