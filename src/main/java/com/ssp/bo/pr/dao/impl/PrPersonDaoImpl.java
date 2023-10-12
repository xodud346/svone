package com.ssp.bo.pr.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pr.dao.PrPersonDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title 담당자관리
 * @package com.ssp.bo.pc.dao
 * </pre>
 * @author 조지훈
 * @since 2022.02.22
 * @version 1.0
 * @see PrPersonDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.22	조지훈		최초등록
 */
@Repository("PrPersonDao")
public class PrPersonDaoImpl implements PrPersonDao {

	@Autowired
    private CommonDAO commonDAO;
	
	@Override
	public int selectPersonCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("PrPerson.selectPersonCount", searchMap);
	}
	
	/**
	 * 담당자 조회
	 */
	@Override
	public List<Map<String, Object>> selectPersonList(Map<String, Object> searchMap) {
		return commonDAO.selectList("PrPerson.selectPersonList", searchMap);
	}

	@Override
	public String selectPersonSprCd(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectStr("PrPerson.selectPersonSprCd", searchMap);
	}

	@Override
	public Integer insertPerson(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrPerson.insertPerson", dataMap);
	}

	@Override
	public String selectPersonDuplicateCheck(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectStr("PrPerson.selectPersonDuplicateCheck", searchMap);
	}

	@Override
	public List<Map<String, Object>> selectPersonDetail(Map<String, Object> searchMap) {
		return commonDAO.selectList("PrPerson.selectPersonDetail", searchMap);
	}

	@Override
	public Integer updatePerson(Map<String, Object> dataMap) throws Exception {
		return commonDAO.update("PrPerson.updatePerson", dataMap);
	}
	
	@Override
	public Integer insertPersonHistory(Map<String, Object> dataMap) throws Exception {
		return commonDAO.update("PrPerson.insertPersonHistory", dataMap);
	}

	@Override
	public List<Map<String, Object>> selectPersonOprtrOrgList(Map<String, Object> searchMap) {
		return commonDAO.selectList("PrPerson.selectPersonOprtrOrgList", searchMap);
	}
	
}
