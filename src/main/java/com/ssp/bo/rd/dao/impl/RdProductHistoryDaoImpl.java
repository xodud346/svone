package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.RdProductHistoryDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title	상품공통팝업
 * @package com.ssp.bo.pr.dao.impl
 * </pre>
 * @author 김진섭
 * @since 2022.02.22
 * @version 1.0
 * @see RdProductHistoryDaoImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.02.22     깁진섭        최초작성
 */
@Repository("RdProductHistoryDao")
public class RdProductHistoryDaoImpl implements RdProductHistoryDao {

	@Autowired
    private CommonDAO commonDAO;
	
	/**
	 * 담당자
	 */
	@Override
	public int selectProductHistoryCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("RdProductHistory.selectProductHistoryCount", searchMap);
	}
	@Override
	public List<Map<String, Object>> selectProductHistoryList(Map<String, Object> searchMap) {
		return commonDAO.selectList("RdProductHistory.selectProductHistoryList", searchMap);
	}
	
}
