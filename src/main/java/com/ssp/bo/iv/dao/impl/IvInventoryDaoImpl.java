package com.ssp.bo.iv.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.iv.dao.IvInventoryDao;
import com.ssp.core.od.dao.OdCommonDAO;

/**
 * <pre>
 * @title 재고 관리
 * @package com.ssp.bo.iv.dao
 * </pre>
 * @author 윤민우
 * @since 2022.03.11
 * @version 1.0
 * @see IvInventoryDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.11	윤민우		최초등록
 */
@Repository("ivInventoryDao")
public class IvInventoryDaoImpl implements IvInventoryDao {

	@Autowired
    private OdCommonDAO commonDAO;
	
	/**
	 * 공통코드 목록
	 */
	@Override
	public List<Map<String, Object>> selectComCdList(Map<String, Object> searchMap) {
		return commonDAO.selectList("com.ssp.bo.iv.ivInventory.selectComCdList", searchMap);
	}
	
	/**
	 * 재고관리 마스터 목록 카운트
	 */
	@Override
	public int selectInventoryListCount(Map<String, String> searchMap) throws Exception {
		return commonDAO.selectInteger("com.ssp.bo.iv.ivInventory.selectInventoryListCount", searchMap);
	}
	
	/**
	 * 재고관리 마스터 목록
	 */
	@Override
	public List<Map<String, Object>> selectInventoryList(Map<String, String> searchMap) {
		return commonDAO.selectList("com.ssp.bo.iv.ivInventory.selectInventoryList", searchMap);
	}
	
	/**
	 * 재고관리 마스터 상세
	 */
	@Override
	public List<Map<String, Object>> selectInventoryDetail(Map<String, Object> searchMap) {
		return commonDAO.selectList("com.ssp.bo.iv.ivInventory.selectInventoryDetail", searchMap);
	}
	
	
	/**
	 * 재고관리 마스터 엑셀목록
	 */
	@Override
	public List<Map<String, Object>> selectInventoryListExcel(Map<String, String> searchMap) {
		return commonDAO.selectList("com.ssp.bo.iv.ivInventory.selectInventoryListExcel", searchMap);
	}

}
