package com.ssp.bo.pr.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pr.dao.PrProductNotificationDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title 상품알림관리
 * @package com.ssp.bo.pc.dao
 * </pre>
 * @author 김명기
 * @since 2023.03.10
 * @version 1.0
 * @see PrManufacturerDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.22	조지훈		최초등록
 */
@Repository("PrProductNotificationDao")
public class PrProductNotificationDaoImpl implements PrProductNotificationDao {
	
	@Autowired
    private CommonDAO commonDAO;
	
	@Override
	public int selectNotificationCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("PrNotification.selectNotificationCount", searchMap);
	}
	
	/**
	 * 상품알림목록
	 */
	@Override
	public List<Map<String, Object>> selectNotificationList(Map<String, Object> searchMap) {
		return commonDAO.selectList("PrNotification.selectNotificationList", searchMap);
	}
}
