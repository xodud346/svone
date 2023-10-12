package com.ssp.bo.pr.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pr.dao.PrManufacturerDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title 제조원 관리
 * @package com.ssp.bo.pc.dao
 * </pre>
 * @author 조지훈
 * @since 2022.02.22
 * @version 1.0
 * @see PrManufacturerDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.22	조지훈		최초등록
 */
@Repository("PrManufacturerDao")
public class PrManufacturerDaoImpl implements PrManufacturerDao {

	@Autowired
    private CommonDAO commonDAO;
	
	@Override
	public int selectManufacturerCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("PrManufacturer.selectManufacturerCount", searchMap);
	}
	
	/**
	 * 제조원목록
	 */
	@Override
	public List<Map<String, Object>> selectManufacturerList(Map<String, Object> searchMap) {
		return commonDAO.selectList("PrManufacturer.selectManufacturerList", searchMap);
	}
	
	/**
	 * SSP제조원명 저장
	 */
	@Override
	public int savetManufacturer(Map<String, Object> searchMap) throws Exception {
		return commonDAO.update("PrManufacturer.updateManufacturer", searchMap);
	}

}
