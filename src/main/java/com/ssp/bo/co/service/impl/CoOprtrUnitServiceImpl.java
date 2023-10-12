package com.ssp.bo.co.service.impl;

import com.ssp.bo.co.dao.CoOprtrUnitDao;
import com.ssp.bo.co.service.CoOprtrUnitService;
import com.ssp.core.co.dao.CommonDAO;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title CoOprtrUnitServiceImpl
 * @package com.ssp.bo.co.service.impl
 * <pre>
 * @author lee
 * @since 2022-05-24
 * @version 1.0
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-05-24	lee	최초작성
 */
@Service("coOprtrUnitService")
public class CoOprtrUnitServiceImpl implements CoOprtrUnitService {

	@Autowired
	private CoOprtrUnitDao coOprtrUnitDao;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectOprtrUnitListAjax
	 * 2. ClassName : CoOprtrUnitServiceImpl
	 * 3. Comment : 멀티 텍스트 입력시 대상설정 목록을 조회한다.
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-05-24
	 * </pre>
	 *
	 */
	@Override
	public List<Map<String, Object>> selectOprtrUnitListAjax(List<Map<String, Object>> searchMap) throws Exception {

		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
		Map<String, Object> commandMap = new HashMap<>();

		if( admin == null ) throw new Exception("세션이 존재하지 않음.");

		List<String> oprtrUnitList = new ArrayList<>();
		for( Map<String, Object> data : searchMap ) {
			oprtrUnitList.add(StringUtil.getString(data.get("OPR_UNIT_ID")));
		}

		commandMap.put("oprtrUnitList", oprtrUnitList);
		commandMap.put("coCd", admin.get("CO_CD"));

		return coOprtrUnitDao.selectOprtrUnitList(commandMap);
	}
}
