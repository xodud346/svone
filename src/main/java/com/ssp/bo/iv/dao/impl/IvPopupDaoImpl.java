package com.ssp.bo.iv.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.iv.dao.IvPopupDao;
import com.ssp.core.od.dao.OdCommonDAO;

/**
 * <pre>
 * @title 재고관리 팝업
 * @package com.ssp.bo.iv.dao
 * </pre>
 * @author 윤민우
 * @since 2022.03.16
 * @version 1.0
 * @see IvPopupDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.16	윤민우		최초등록
 */
@Repository("ivPopupDao")
public class IvPopupDaoImpl implements IvPopupDao {

	@Autowired
    private OdCommonDAO commonDAO;
	
	/**
	 * 구매 담당자 팝업 목록 카운트
	 */
	@Override
	public int selectOperatorPopupListCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("com.ssp.bo.iv.ivPopup.selectOperatorPopupListCount", searchMap);
	}
	
	/**
	 * 구매 담당자 팝업 목록
	 */
	@Override
	public List<Map<String, Object>> selectOperatorPopupList(Map<String, Object> searchMap) {
		return commonDAO.selectList("com.ssp.bo.iv.ivPopup.selectOperatorPopupList", searchMap);
	}
	
	/**
	 * 구매팀 팝업 목록
	 */
	@Override
	public List<Map<String, Object>> selectMbrOprtrOrgInfoList(Map<String, Object> searchMap) {
		return commonDAO.selectList("com.ssp.bo.iv.ivPopup.selectMbrOprtrOrgInfoList", searchMap);
	}

	/**
	 * 구매팀 팝업 목록 카운트
	 */
	@Override
	public int selectMbrOprtrOrgInfoListCnt(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("com.ssp.bo.iv.ivPopup.selectMbrOprtrOrgInfoListCnt", searchMap);
	}

}
