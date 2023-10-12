package com.ssp.bo.pr.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pr.dao.PrProductDispDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title  등록상품 목록
 * @package com.ssp.bo.pr.dao.impl
 * <pre>
 * @author  조지훈
 * @since   2022.03.14
 * @version 1.0
 * @see PrProductDispDaoImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.14    조지훈        최초작성
 */
@Repository("PrProductDispDao")
public class PrProductDispDaoImpl implements PrProductDispDao {
	
	private final String SPACE_NAME = "com.ssp.bo.pr.prProductDisp.";

	@Autowired
    private CommonDAO commonDAO;

	@Override
	public Map<String, Object> selectDispBasis(Map<String, Object> searchMap) throws Exception {
		return commonDAO.select(SPACE_NAME+"selectDispBasis", searchMap);
	}
	
	@Override
	public Map<String, Object> selectDispReprProductInfo(Map<String, Object> searchMap) throws Exception {
		return commonDAO.select(SPACE_NAME+"selectDispReprProductInfo", searchMap);
	}
	
	@Override
	public Map<String, Object> selectOptnNmByDtlItmno(Map<String, Object> searchMap) throws Exception {
		return commonDAO.select(SPACE_NAME+"selectOptnNmByDtlItmno", searchMap);
	}
	
	@Override
	public List<Map<String, Object>> selectDispOptnBasis(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList(SPACE_NAME+"selectDispOptnBasis", searchMap);
	}

	@Override
	public List<Map<String, Object>> selectDispOptnDtl(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList(SPACE_NAME+"selectDispOptnDtl", searchMap);
	}

	@Override
	public List<Map<String, Object>> selectDispOptnDtlMapp(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList(SPACE_NAME+"selectDispOptnDtlMapp", searchMap);
	}

	@Override
	public int insertDispBasis(Map<String, Object> searchMap) throws Exception {
		return commonDAO.insert(SPACE_NAME+"insertDispBasis", searchMap);
	}

	@Override
	public int insertDispOptnBasis(Map<String, Object> searchMap) throws Exception {
		return commonDAO.insert(SPACE_NAME+"insertDispOptnBasis", searchMap);
	}

	@Override
	public int insertDispOptnDtl(Map<String, Object> searchMap) throws Exception {
		return commonDAO.insert(SPACE_NAME+"insertDispOptnDtl", searchMap);
	}

	@Override
	public int insertDispOptnDtlMapp(Map<String, Object> searchMap) throws Exception {
		return commonDAO.insert(SPACE_NAME+"insertDispOptnDtlMapp", searchMap);
	}
	
	@Override
	public int insertDispAddOptnBasis(Map<String, Object> searchMap) throws Exception {
		return commonDAO.insert(SPACE_NAME+"insertDispAddOptnBasis", searchMap);
	}

	@Override
	public int insertDispAddOptnDtl(Map<String, Object> searchMap) throws Exception {
		return commonDAO.insert(SPACE_NAME+"insertDispAddOptnDtl", searchMap);
	}

	@Override
	public String selectProductDispExists(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectStr(SPACE_NAME+"selectProductDispExists", searchMap);
	}

	@Override
	public List<Map<String, Object>> selectDispAddOptnBasis(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList(SPACE_NAME+"selectDispAddOptnBasis", searchMap);
	}

	@Override
	public List<Map<String, Object>> selectDispAddOptnDtl(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList(SPACE_NAME+"selectDispAddOptnDtl", searchMap);
	}

	@Override
	public int deleteDispOptnBasis(Map<String, Object> searchMap) throws Exception {
		return commonDAO.delete(SPACE_NAME+"deleteDispOptnBasis", searchMap);
	}
	
	@Override
	public int deleteDispOptnDtlByBasis(Map<String, Object> searchMap) throws Exception {
		return commonDAO.delete(SPACE_NAME+"deleteDispOptnDtlByBasis", searchMap);
	}

	@Override
	public int deleteDispOptnDtl(Map<String, Object> searchMap) throws Exception {
		return commonDAO.delete(SPACE_NAME+"deleteDispOptnDtl", searchMap);
	}

	@Override
	public int deleteDispOptnDtlMappAll(Map<String, Object> searchMap) throws Exception {
		return commonDAO.delete(SPACE_NAME+"deleteDispOptnDtlMappAll", searchMap);
	}

	@Override
	public int deleteDispAddOptnBasis(Map<String, Object> searchMap) throws Exception {
		return commonDAO.delete(SPACE_NAME+"deleteDispAddOptnBasis", searchMap);
	}
	
	@Override
	public int deleteDispAddOptnDtlByBasis(Map<String, Object> searchMap) throws Exception {
		return commonDAO.delete(SPACE_NAME+"deleteDispAddOptnDtlByBasis", searchMap);
	}

	@Override
	public int deleteDispAddOptnDtl(Map<String, Object> searchMap) throws Exception {
		return commonDAO.delete(SPACE_NAME+"deleteDispAddOptnDtl", searchMap);
	}

	@Override
	public Map<String, Object> selectProductDispOprtr(Map<String, Object> searchMap) throws Exception {
		return commonDAO.select(SPACE_NAME+"selectProductDispOprtr", searchMap);
	}




}
