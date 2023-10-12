package com.ssp.bo.pr.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pr.dao.PrProductAddDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title  등록상품 목록
 * @package com.ssp.bo.pr.dao.impl
 * <pre>
 * @author  조지훈
 * @since   2022.03.14
 * @version 1.0
 * @see PrProductAddDaoImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.14    조지훈        최초작성
 */
@Repository("PrProductAddDao")
public class PrProductAddDaoImpl implements PrProductAddDao {

	@Autowired
    private CommonDAO commonDAO;
	
	/**
	 * SSP상품추가 > SSP추가상품목록
	 */
	@Override
	public int selectProductAddCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("PrProductAdd.selectProductAddCount", searchMap);
	}
	
	/**
	 * SSP상품추가 > SSP추가상품목록
	 */
	@Override
	public List<Map<String, Object>> selectProductAddList(Map<String, Object> searchMap) {
		return commonDAO.selectList("PrProductAdd.selectProductAddList", searchMap);
	}
	
	/**
	 * SSP상품추가 > SSP추가상품상세 > 기본정보
	 */
	@Override
	public Map<String, Object> selectProductAddBasicInfo(Map<String, Object> searchMap) throws Exception {
		return commonDAO.select("PrProductAdd.selectProductAddBasicInfo", searchMap);
	}
	
	/**
	 * SSP상품추가 > 접수처리
	 */
	@Override
	public int insertRegProcPrdInfo(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrProductAdd.insertRegProcPrdInfo", dataMap);
	}
	
	/**
	 * SSP상품추가상세 > 등록처리 > 기본정보
	 */
	@Override
	public int insertPrdInfo(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrProductAdd.insertPrdInfo", dataMap);
	}
	
	/**
	 * SSP상품추가상세 > 등록처리 > 속성정보
	 */
	@Override
	public int insertPrdInfoAttrMap(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrProductAdd.insertPrdInfoAttrMap", dataMap);
	}
	
	/**
	 * SSP상품추가상세 > 등록처리 > 고시정보
	 */
	@Override
	public int insertPrdNotiItmMapp(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrProductAdd.insertPrdNotiItmMapp", dataMap);
	}
	
	/**
	 * SSP상품추가상세 > 등록처리 > 기본정보(등록처리 테이블)
	 */
	@Override
	public int updateRegProcPrdInfo(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrProductAdd.updateRegProcPrdInfo", dataMap);
	}
	
	/**
	 * SSP상품추가상세 > 등록처리 > 속성정보(등록처리 테이블)
	 */
	@Override
	public int insertRegProcPrdInfoAttrMap(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrProductAdd.insertRegProcPrdInfoAttrMap", dataMap);
	}
	
	/**
	 * SSP상품추가상세 > 등록처리 > 고시정보(등록처리 테이블)
	 */
	@Override
	public int insertRegProcPrdNotiItmMapp(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrProductAdd.insertRegProcPrdNotiItmMapp", dataMap);
	}
	
	/**
	 * SSP상품추가상세 > SSP속성정보
	 */
	@Override
	public List<Map<String, Object>> selectSspAttrList(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrProductAdd.selectSspAttrList", searchMap);
	}
	
	/**
	 * SSP상품추가상세 > SSP부가정보
	 */
	@Override
	public Map<String, Object> selectSspAddInfo(Map<String, Object> searchMap) throws Exception {
		return commonDAO.select("PrProductAdd.selectSspAddInfo", searchMap);
	}
	
	/**
	 * SSP상품추가상세 > SSP고시정보
	 */
	@Override
	public List<Map<String, Object>> selectProductNoticeList(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrProductAdd.selectProductNoticeList", searchMap);
	}
	
	/**
	 * SSP상품추가상세 > SSP이미지정보(기타컬럼 활용)
	 */
	@Override
	public List<Map<String, Object>> selectRegProcProductImageList(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrProductAdd.selectRegProcProductImageList", searchMap);
	}
	
}
