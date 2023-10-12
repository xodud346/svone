package com.ssp.bo.pp.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pp.dao.PpcprtcpInqPopupDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title 협력사 조회
 * @package com.ssp.bo.pc.dao
 * </pre>
 * @author 김진섭
 * @since 2022.03.17
 * @version 1.0
 * @see PpcprtcpInqPopupDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.17	김진섭		최초등록
 */
@Repository("PpcprtcpInqPopupDao")
public class PpcprtcpInqPopupDaoImpl implements PpcprtcpInqPopupDao {

	@Autowired
    private CommonDAO commonDAO;
	
	@Override
	public int selectManufacturerCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("PpcprtcpInqPopup.selectManufacturerCount", searchMap);
	}
	
	/**
	 * 협력사목록
	 */
	@Override
	public List<Map<String, Object>> selectManufacturerList(Map<String, Object> searchMap) {
		return commonDAO.selectList("PpcprtcpInqPopup.selectManufacturerList", searchMap);
	}
	
}
