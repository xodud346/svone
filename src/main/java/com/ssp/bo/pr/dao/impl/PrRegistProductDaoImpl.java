package com.ssp.bo.pr.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pr.dao.PrRegistProductDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title  등록상품 목록
 * @package com.ssp.bo.pr.dao.impl
 * <pre>
 * @author  조지훈
 * @since   2022.03.14
 * @version 1.0
 * @see PrRegistProductDaoImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.14    조지훈        최초작성
 */
@Repository("PrRegistProductDao")
public class PrRegistProductDaoImpl implements PrRegistProductDao {

	@Autowired
    private CommonDAO commonDAO;
	
	@Override
	public int selectRegistProductCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("PrRegistProduct.selectRegistProductCount", searchMap);
	}
	/**
	 * 등록상품 목록
	 */
	@Override
	public List<Map<String, Object>> selectRegistProductList(Map<String, Object> searchMap) {
		return commonDAO.selectList("PrRegistProduct.selectRegistProductList", searchMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > 기본정보
	 */
	@Override
	public Map<String, Object> selectRegistProductBasicInfo(Map<String, Object> searchMap) throws Exception {
		return commonDAO.select("PrRegistProduct.selectRegistProductBasicInfo", searchMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > MRO카테고리목록
	 */
	@Override
	public List<Map<String, Object>> selectMroCategoryAttrList(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrRegistProduct.selectMroCategoryAttrList", searchMap);
	}
	
	@Override
	public List<Map<String, Object>> selectMroCategoryAttrListDef(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrRegistProduct.selectMroCategoryAttrListDef", searchMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > SSP카테고리목록(MRO기준)
	 */
	@Override
	public List<Map<String, Object>> selectSspCategoryListByMroPrdClcd(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrRegistProduct.selectSspCategoryListByMroPrdClcd", searchMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > SSP속성정보
	 */
	@Override
	public List<Map<String, Object>> selectSspAttrList(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrRegistProduct.selectSspAttrList", searchMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > MRO부가정보
	 */
	@Override
	public Map<String, Object> selectMroAddInfo(Map<String, Object> searchMap) throws Exception {
		return commonDAO.select("PrRegistProduct.selectMroAddInfo", searchMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > SSP부가정보
	 */
	@Override
	public Map<String, Object> selectSspAddInfo(Map<String, Object> searchMap) throws Exception {
		return commonDAO.select("PrRegistProduct.selectSspAddInfo", searchMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > 배지목록
	 */
	@Override
	public List<Map<String, Object>> selectBgList(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrRegistProduct.selectBgList", searchMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > 이미지목록
	 */
	@Override
	public List<Map<String, Object>> selectProductImageList(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrRegistProduct.selectProductImageList", searchMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > 인증정보
	 */
	@Override
	public List<Map<String, Object>> selectProductCertList(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrRegistProduct.selectProductCertList", searchMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > 고시정보
	 */
	@Override
	public List<Map<String, Object>> selectProductNoticeList(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrRegistProduct.selectProductNoticeList", searchMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > 시리즈그룹정보
	 */
	@Override
	public List<Map<String, Object>> selectSeriesGroupList(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrRegistProduct.selectSeriesGroupList", searchMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > 가격대상
	 */
	@Override
	public Map<String, Object> selectProductPrice(Map<String, Object> searchMap) throws Exception {
		return commonDAO.select("PrRegistProduct.selectProductPrice", searchMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > 가격정보
	 */
	@Override
	public Map<String, Object> selectPriceInfo(Map<String, Object> searchMap) throws Exception {
		return commonDAO.select("PrRegistProduct.selectPriceInfo", searchMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > 속성정보등록
	 */
	@Override
	public int insertSspProductAttr(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrRegistProduct.insertSspProductAttr", dataMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > 속성정보수정
	 */
	@Override
	public int updateSspProductAttr(Map<String, Object> dataMap) throws Exception {
		return commonDAO.update("PrRegistProduct.updateSspProductAttr", dataMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > 속성정보삭제(상품ID기준으로 삭제. 여러건 삭제)
	 */
	@Override
	public int deleteSspProductAttrByPrdId(Map<String, Object> dataMap) throws Exception {
		return commonDAO.delete("PrRegistProduct.deleteSspProductAttrByPrdId", dataMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > 속성정보삭제
	 */
	@Override
	public int deleteSspProductAttr(Map<String, Object> dataMap) throws Exception {
		return commonDAO.delete("PrRegistProduct.deleteSspProductAttr", dataMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > 속성정보 동기화 대상목록
	 */
	@Override
	public List<Map<String, Object>> selectSeriesGroupListToAttrSync(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrRegistProduct.selectSeriesGroupListToAttrSync", searchMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > 속성정보 동기화(시리즈그룹)
	 */
	@Override
	public int updateSspProductAttrToAttrSync(Map<String, Object> dataMap) throws Exception {
		return commonDAO.update("PrRegistProduct.updateSspProductAttrToAttrSync", dataMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > 고시정보삭제
	 */
	@Override
	public int deleteSspProductNotiByPrdId(Map<String, Object> dataMap) throws Exception {
		return commonDAO.delete("PrRegistProduct.deleteSspProductNotiByPrdId", dataMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > 고시정보등록
	 */
	@Override
	public int insertSspProductNoti(Map<String, Object> dataMap) throws Exception {
		return commonDAO.insert("PrRegistProduct.insertSspProductNoti", dataMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > 고시정보수정
	 */
	@Override
	public int updateSspProductNoti(Map<String, Object> dataMap) throws Exception {
		return commonDAO.update("PrRegistProduct.updateSspProductNoti", dataMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > 고시정보삭제
	 */
	@Override
	public int deleteSspProductNoti(Map<String, Object> dataMap) throws Exception {
		return commonDAO.delete("PrRegistProduct.deleteSspProductNoti", dataMap);
	}
	
	/**
	 * 등록상품 > 상품상세 > 기본정보수정
	 */
	@Override
	public int updateProductBasicInfo(Map<String, Object> dataMap) throws Exception {
		return commonDAO.update("PrRegistProduct.updateProductBasicInfo", dataMap);
	}
	@Override
	public List<Map<String, Object>> selectProductAddRegulationList(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrRegistProduct.selectProductAddRegulationVerticalList", searchMap);
	}
	
	
	
	
	
	
	@Override
	public int mergeSspPrdNmInfo(Map<String, Object> dataMap) throws Exception {
		return commonDAO.update("PrRegistProduct.mergeSspPrdNmInfo", dataMap);
	}
	
	
}
