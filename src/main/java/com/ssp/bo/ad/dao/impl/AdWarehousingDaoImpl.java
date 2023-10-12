package com.ssp.bo.ad.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.ad.dao.AdWarehousingDao;
import com.ssp.core.od.dao.OdCommonDAO;

/**
 * <pre>
 * @title 정산 관리 - 고객사 입고 처리
 * @package com.ssp.bo.ad.dao
 * </pre>
 * @author 윤민우
 * @since 2022.03.11
 * @version 1.0
 * @see AdWarehousingDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.11	윤민우		최초등록a
 */
@Repository("adWarehousingDao")
public class AdWarehousingDaoImpl implements AdWarehousingDao {

	@Autowired
    private OdCommonDAO commonDAO;
	
	/**
	 * 콩통코드 목록
	 */
	@Override
	public List<Map<String, Object>> selectComCdList(Map<String, Object> searchMap) {
		return commonDAO.selectList("com.ssp.bo.iv.ivInventory.selectComCdList", searchMap);
	}
	
	@Override
	public int selectWarehousingListCount(Map<String, String> searchMap) throws Exception {
		return commonDAO.selectInteger("com.ssp.bo.ad.adWarehousing.selectWarehousingListCount", searchMap);
	}
	
	@Override
	public List<Map<String, Object>> selectWarehousingList(Map<String, String> searchMap) {
		return commonDAO.selectList("com.ssp.bo.ad.adWarehousing.selectWarehousingList", searchMap);
	}
	
	@Override
	public Map<String, Object> callWarehousingFinish(Map<String, Object> commandMap) throws Exception {
		commonDAO.insert("com.ssp.bo.ad.adWarehousing.callWarehousingFinish", commandMap);
        return commandMap;
	}

}
