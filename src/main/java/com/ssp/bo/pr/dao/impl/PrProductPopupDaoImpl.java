package com.ssp.bo.pr.dao.impl;

import com.ssp.bo.pr.dao.PrProductPopupDao;
import com.ssp.core.co.dao.CommonDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title	상품공통팝업
 * @package com.ssp.bo.pr.dao.impl
 * </pre>
 * @author 조지훈
 * @since 2022.02.22
 * @version 1.0
 * @see PrProductPopupDaoImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.02.22     조지훈        최초작성
 */
@Repository("PrProductPopupDao")
public class PrProductPopupDaoImpl implements PrProductPopupDao {

	@Autowired
    private CommonDAO commonDAO;
	
	/**
	 * 카테고리 조회
	 */
	@Override
	public int selectCategoryPopupCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("PrProductPopup.selectCategoryPopupCount", searchMap);
	}
	@Override
	public List<Map<String, Object>> selectCategoryPopupList(Map<String, Object> searchMap) {
		return commonDAO.selectList("PrProductPopup.selectCategoryPopupList", searchMap);
	}
	
	/**
	 * 상품고시품목
	 */
	@Override
	public int selectProductNoticePopupCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("PrProductPopup.selectProductNoticePopupCount", searchMap);
	}
	@Override
	public List<Map<String, Object>> selectProductNoticePopupList(Map<String, Object> searchMap) {
		return commonDAO.selectList("PrProductPopup.selectProductNoticePopupList", searchMap);
	}
	
	/**
	 * 상품고시품목
	 */
	@Override
	public int selectProductPopupCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("PrProductPopup.selectProductPopupCount", searchMap);
	}
	@Override
	public List<Map<String, Object>> selectProductPopupList(Map<String, Object> searchMap) {
		return commonDAO.selectList("PrProductPopup.selectProductPopupList", searchMap);
	}
	
	@Override
	public List<Map<String, Object>> selectProductPopupListForDupProc(Map<String, Object> searchMap) {
		return commonDAO.selectList("PrProductPopup.selectProductPopupListForDupProc", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectMroPrdPopupListCount
	 * 2. ClassName  : PrProductPopupDaoImpl
	 * 3. Comment    : S-MRO 카테고리 검색 카운터
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int selectMroPrdPopupListCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectCount("PrProductPopup.selectMroPrdPopupListCount", searchMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectMroPrdPopupList
	 * 2. ClassName  : PrProductPopupDaoImpl
	 * 3. Comment    : S-MRO 카테고리 검색조
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
    public List<Map<String, Object>> selectMroPrdPopupList(Map<String, Object> searchMap) {
    	return commonDAO.selectList("PrProductPopup.selectMroPrdPopupList", searchMap);
    }
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCtryPopupListCount
	 * 2. ClassName  : PrProductPopupDaoImpl
	 * 3. Comment    : 원산지 검색 카운터
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int selectCtryPopupListCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectCount("PrProductPopup.selectCtryPopupListCount", searchMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCtryPopupList
	 * 2. ClassName  : PrProductPopupDaoImpl
	 * 3. Comment    : 원산지 검색조회
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectCtryPopupList(Map<String, Object> searchMap) {
		return commonDAO.selectList("PrProductPopup.selectCtryPopupList", searchMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectPrdClsfList
	 * 2. ClassName  : PrProductPopupDaoImpl
	 * 3. Comment    : 등록상품명으로 조회
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectPrdClsfList(Map<String, Object> searchMap) {
		return commonDAO.selectList("PrProductPopup.selectPrdClsfList", searchMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : insertNewPrdStats
	 * 2. ClassName  : PrProductPopupDaoImpl
	 * 3. Comment    : 신규상품요청상태내역 저장
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertNewPrdStats(Map<String, Object> saveMap) throws Exception {
		return commonDAO.insert("PrProductPopup.insertNewPrdStats", saveMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : updateNewPrdReqProc
	 * 2. ClassName  : PrProductPopupDaoImpl
	 * 3. Comment    : 신규상품요청처리 수정
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updateNewPrdReqProc(Map<String, Object> saveMap) throws Exception {
		return commonDAO.update("PrProductPopup.updateNewPrdReqProc", saveMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : updateNewPrdCustReqInfo
	 * 2. ClassName  : PrProductPopupDaoImpl
	 * 3. Comment    : 신규상품고객요청정보 수정
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updateNewPrdCustReqInfo(Map<String, Object> saveMap) throws Exception {
		return commonDAO.update("PrProductPopup.updateNewPrdCustReqInfo", saveMap);
	}
	
	/**
	 * 배지
	 */
	@Override
    public List<Map<String, Object>> selectBgPopupList(Map<String, Object> searchMap) {
    	return commonDAO.selectList("PrProductPopup.selectBgPopupList", searchMap);
    }
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectNewPrdProcHst
	 * 2. ClassName  : PrProductPopupDaoImpl
	 * 3. Comment    : R&D 이관이력 조회
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectNewPrdProcHst(Map<String, Object> searchMap) {
		return commonDAO.selectList("PrProductPopup.selectNewPrdProcHst", searchMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectPrdClsfNmList
	 * 2. ClassName  : PrProductPopupDaoImpl
	 * 3. Comment    : 카테고리명으로 조회
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectPrdClsfNmList(Map<String, Object> searchMap) {
		return commonDAO.selectList("PrProductPopup.selectPrdClsfNmList", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectSpecialIndustryGroup
	 * 2. ClassName  : PrProductPopupDaoImpl
	 * 3. Comment    : 특화산업군 조회
	 * 4. 작성자      : 김영남
	 * 5. 작성일      :
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectSpecialIndustryGroup(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrProductPopup.selectSpecialIndustryGroup", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectSpecialIndustryGroupMappList
	 * 2. ClassName  : PrProductPopupDaoImpl
	 * 3. Comment    : 특화산업군 카테고리 조회
	 * 4. 작성자      : 김영남
	 * 5. 작성일      :
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectSpecialIndustryGroupMappList(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrProductPopup.selectSpecialIndustryGroupMappList", searchMap);
	}

	@Override
	public int insertSpecialIndustryGroupMappList(Map<String, Object> data) throws Exception {
		return commonDAO.insert("PrProductPopup.insertSpecialIndustryGroupMappList", data);
	}


	@Override
	public int deleteSpecialIndustryGroupMappList(Map<String, Object> data) throws Exception {
		return commonDAO.delete("PrProductPopup.deleteSpecialIndustryGroupMappList", data);
	}

}
