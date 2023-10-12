package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pr.dao.impl.PrPersonDaoImpl;
import com.ssp.bo.rd.dao.RdPrdChrpsnDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title R&D상품담당자관리
 * @package com.ssp.bo.pc.dao
 * </pre>
 * @author 김진섭
 * @since 2022.03.27
 * @version 1.0
 * @see PrPersonDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.27	김진섭		최초등록
 */
@Repository("RdPrdChrpsnDao")
public class RdPrdChrpsnDaoImpl implements RdPrdChrpsnDao {

	@Autowired
    private CommonDAO commonDAO;
	
	@Override
	public int selectPersonCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("RdPrdChrpsn.selectPersonCount", searchMap);
	}
	
	/**
	 * 담당자 조회
	 */
	@Override
	public List<Map<String, Object>> selectPersonList(Map<String, Object> searchMap) {
		return commonDAO.selectList("RdPrdChrpsn.selectPersonList", searchMap);
	}

	@Override
	public String selectPersonSprCd(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectStr("RdPrdChrpsn.selectPersonSprCd", searchMap);
	}

	@Override
	public Integer insertPerson(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("RdPrdChrpsn.insertPerson", dataMap);
	}

	@Override
	public String selectPersonDuplicateCheck(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectStr("RdPrdChrpsn.selectPersonDuplicateCheck", searchMap);
	}

	@Override
	public List<Map<String, Object>> selectPersonDetail(Map<String, Object> searchMap) {
		return commonDAO.selectList("RdPrdChrpsn.selectPersonDetail", searchMap);
	}

	@Override
	public Integer updatePerson(Map<String, Object> dataMap) throws Exception {
		return commonDAO.update("RdPrdChrpsn.updatePerson", dataMap);
	}
	
	@Override
	public Integer insertPersonHistory(Map<String, Object> dataMap) throws Exception {
		return commonDAO.update("RdPrdChrpsn.insertPersonHistory", dataMap);
	}

}
