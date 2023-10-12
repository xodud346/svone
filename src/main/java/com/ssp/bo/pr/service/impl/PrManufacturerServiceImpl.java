package com.ssp.bo.pr.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.pr.dao.PrManufacturerDao;
import com.ssp.bo.pr.service.PrManufacturerService;

/**
 * <pre>
 * @title  SSP 제조원 목록관리
 * @package com.ssp.bo.pr.service.impl
 * <pre>
 * @author  조지훈
 * @since   2022.02.22
 * @version 1.0
 * @see PrManufacturerServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.02.22    조지훈        최초작성
 */
@Service("PrManufacturerService")
public class PrManufacturerServiceImpl implements PrManufacturerService {
	
	@Autowired
	private PrManufacturerDao prManufacturerDao;
	
	@Override
	public int selectManufacturerCount(Map<String, Object> searchMap) throws Exception {
        return prManufacturerDao.selectManufacturerCount(searchMap);
	}
	
    /**
	 * <pre>
	 * 1. MethodName : selectManufacturerList
	 * 2. ClassName  : PrManufacturerServiceImpl
	 * 3. Comment    : 제조원 목록 조회
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.02.22
	 * </pre>
     */
	@Override
	public List<Map<String, Object>> selectManufacturerList(Map<String, Object> searchMap) throws Exception {
        return prManufacturerDao.selectManufacturerList(searchMap);
	}

    /**
	 * <pre>
	 * 1. MethodName : saveManufacturer
	 * 2. ClassName  : PrManufacturerServiceImpl
	 * 3. Comment    : 제조명 저장
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.02.22
	 * </pre>
     */
	@Override
	public void saveManufacturer(Map<String, Object> dataMap) throws Exception {
		prManufacturerDao.savetManufacturer(dataMap);
	}

}
