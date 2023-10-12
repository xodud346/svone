package com.ssp.bo.pr.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pr.dao.PrManufacturerDao;
import com.ssp.bo.pr.dao.PrProductNotificationDao;
import com.ssp.bo.pr.service.PrManufacturerService;
import com.ssp.bo.pr.service.PrProductNotificationService;

/**
 * <pre>
 * @title  상품알림관리
 * @package com.ssp.bo.pr.service.impl
 * <pre>
 * @author  김명기
 * @since   2023.03.10
 * @version 1.0
 * @see PrProductNotificationServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.02.22    조지훈        최초작성
 */
@Service("PrProductNotificationService")
public class PrProductNotificationServiceImpl implements PrProductNotificationService{
	
	@Autowired
	private PrProductNotificationDao prProductNotificationDao;
	
	@Override
	public int selectNotificationCount(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		
		searchMap.put("sesId", odComm.getSessionId() );
		
        return prProductNotificationDao.selectNotificationCount(searchMap);
	}
	
    /**
	 * <pre>
	 * 1. MethodName : selectManufacturerList
	 * 2. ClassName  : PrManufacturerServiceImpl
	 * 3. Comment    : 상품알림 목록 조회
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.02.22
	 * </pre>
     */
	@Override
	public List<Map<String, Object>> selectNotificationList(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		
		searchMap.put("sesId", odComm.getSessionId() );
		
		return prProductNotificationDao.selectNotificationList(searchMap);
	}
	
}
