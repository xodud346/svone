package com.ssp.bo.co.dao.impl;

import com.ssp.bo.co.dao.CoOprtrUnitDao;
import com.ssp.core.co.dao.CommonDAO;

import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title CoOprtrUnitDaoImpl
 * @package com.ssp.bo.co.dao.impl
 * <pre>
 * @author lee
 * @since 2022-05-24
 * @version 1.0
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-05-24	lee	최초작성
 */
@Repository("coOprtrUnitDao")
public class CoOprtrUnitDaoImpl implements CoOprtrUnitDao {

	@Resource(name="commonDAO")
	private CommonDAO commonDAO;

	/**
	 * 멀티 텍스트 입력 용 대상조회
	 * @param commandMap Map
	 * @return List
	 */
	@Override
	public List<Map<String, Object>> selectOprtrUnitList(Map<String, Object> commandMap) {
		return commonDAO.selectList("com.ssp.bo.co.oprtrUnit.selectOprtrUnitList", commandMap);
	}
}
