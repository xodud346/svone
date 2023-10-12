package com.ssp.bo.ad.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.ad.dao.AdCalculateDao;
import com.ssp.core.od.dao.OdCommonDAO;

/**
 * <pre>
 * @title 정산 관리 - 고객사 입고 처리
 * @package com.ssp.bo.ad.dao
 * </pre>
 * @author 윤민우
 * @since 2022.03.11
 * @version 1.0
 * @see AdCalculateDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.11	윤민우		최초등록
 */
@Repository("adCalculateDao")
public class AdCalculateDaoImpl implements AdCalculateDao {

	@Autowired
    private OdCommonDAO commonDAO;


	@Override
	public int selectCalculateListCount(Map<String, String> searchMap) throws Exception {
		return commonDAO.selectInteger("com.ssp.bo.ad.adCalculate.selectCalculateListCount", searchMap);
	}

	@Override
	public List<Map<String, Object>> selectCalculateList(Map<String, String> searchMap) {
		return commonDAO.selectList("com.ssp.bo.ad.adCalculate.selectCalculateList", searchMap);
	}

	@Override
	public int selectNoCalculateListCount(Map<String, String> searchMap) throws Exception {
		return commonDAO.selectInteger("com.ssp.bo.ad.adCalculate.selectNoCalculateListCount", searchMap);
	}

	@Override
	public List<Map<String, Object>> selectNoCalculateList(Map<String, String> searchMap) {
		return commonDAO.selectList("com.ssp.bo.ad.adCalculate.selectNoCalculateList", searchMap);
	}

}
