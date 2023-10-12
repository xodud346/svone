package com.ssp.bo.pp.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.pp.dao.PpcprtcpInqPopupDao;
import com.ssp.bo.pp.service.PpcprtcpInqPopupService;

/**
 * <pre>
 * @title  R&D 협력사 목록관리
 * @package com.ssp.bo.pr.service.impl
 * <pre>
 * @author  김진섭
 * @since   2022.03.17
 * @version 1.0
 * @see PpcprtcpInqPopupServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.17    김진섭        최초작성
 */
@Service("PpcprtcpInqPopupService")
public class PpcprtcpInqPopupServiceImpl implements PpcprtcpInqPopupService {
	
	@Autowired
	private PpcprtcpInqPopupDao ppcprtcpInqPopupDao;
	
	@Override
	public int selectManufacturerCount(Map<String, Object> searchMap) throws Exception {
        return ppcprtcpInqPopupDao.selectManufacturerCount(searchMap);
	}
	
    /**
	 * <pre>
	 * 1. MethodName : selectManufacturerList
	 * 2. ClassName  : PpcprtcpInqPopupServiceImpl
	 * 3. Comment    : 협력사 목록 조회
	 * 4. 작성자       : 김진섭
	 * 5. 작성일       : 2022.03.17
	 * </pre>
     */
	@Override
	public List<Map<String, Object>> selectManufacturerList(Map<String, Object> searchMap) throws Exception {
        return ppcprtcpInqPopupDao.selectManufacturerList(searchMap);
	}

}
