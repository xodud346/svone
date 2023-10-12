package com.ssp.bo.pr.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pr.dao.PrProductSeriesDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre></pre>
 * @title 시리즈그룹상품관리 DAO
 * @package com.ssp.bo.pr.dao.impl
 * @author 이원준
 * @since 2022.03.25
 * @version 1.0
 * @see PrProductSeriesDaoImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 
 */
@Repository("productSeriesDao")
public class PrProductSeriesDaoImpl implements PrProductSeriesDao {

    @Autowired
    private CommonDAO commonDAO;

    /**
	 *
	 * <pre>
	 * 1. MethodName : selectProductSeriesList
	 * 2. ClassName  : PrProductSeriesDaoImpl
	 * 3. Comment    : 시리즈 상품그룹 목록 조회
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.03.25
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public List<Map<String, Object>> selectProductSeriesList(Map<String, Object> searchMap) {
        return commonDAO.selectList("PrSeries.selectProductSeriesList", searchMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectProductSeriesCount
	 * 2. ClassName  : PrProductSeriesDaoImpl
	 * 3. Comment    : 시리즈 상품그룹 목록 카운터
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.03.25
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public int selectProductSeriesCount(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("PrSeries.selectProductSeriesCount", searchMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectProductSeriesBasis
	 * 2. ClassName  : PrProductSeriesDaoImpl
	 * 3. Comment    : 시리즈 상품그룹 기본 조회
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.03.25
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public List<Map<String, Object>> selectProductSeriesBasis(Map<String, Object> searchMap) {
        return commonDAO.selectList("PrSeries.selectProductSeriesBasis", searchMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectProductSeriesDtl01
	 * 2. ClassName  : PrProductSeriesDaoImpl
	 * 3. Comment    : 시리즈 상품그룹 상세 조회(동기화/비동기화)
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.03.25
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public List<Map<String, Object>> selectProductSeriesDtl01(Map<String, Object> searchMap) {
        return commonDAO.selectList("PrSeries.selectProductSeriesDtl01", searchMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectProductSeriesDtl02
	 * 2. ClassName  : PrProductSeriesDaoImpl
	 * 3. Comment    : 시리즈 상품그룹 상세 조회(연관)
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.03.25
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public List<Map<String, Object>> selectProductSeriesDtl02(Map<String, Object> searchMap) {
        return commonDAO.selectList("PrSeries.selectProductSeriesDtl02", searchMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : insertProductSeriesBasis
	 * 2. ClassName  : PrProductSeriesDaoImpl
	 * 3. Comment    : 상품그룹기본 등록
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.03.25
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public int insertProductSeriesBasis(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("PrSeries.insertProductSeriesBasis", saveMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : updateProductSeriesBasis
	 * 2. ClassName  : PrProductSeriesDaoImpl
	 * 3. Comment    : 상품그룹기본 수정
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.03.25
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public int updateProductSeriesBasis(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("PrSeries.updateProductSeriesBasis", saveMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : insertProductSeriesDtl
	 * 2. ClassName  : PrProductSeriesDaoImpl
	 * 3. Comment    : 상품그룹상세 등록
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.03.25
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public int insertProductSeriesDtl(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("PrSeries.insertProductSeriesDtl", saveMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : updateProductSeriesDtl
	 * 2. ClassName  : PrProductSeriesDaoImpl
	 * 3. Comment    : 상품그룹상세 수정
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.03.25
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public int updateProductSeriesDtl(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("PrSeries.updateProductSeriesDtl", saveMap);
    }
     
    /**
	 *
	 * <pre>
	 * 1. MethodName : deleteProductSeriesDtl
	 * 2. ClassName  : PrProductSeriesDaoImpl
	 * 3. Comment    : 상품그룹상세 삭제
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.03.25
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public int deleteProductSeriesDtl(Map<String, Object> saveMap) throws Exception {
        return commonDAO.delete("PrSeries.deleteProductSeriesDtl", saveMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectSeriesTemp01
	 * 2. ClassName  : PrProductSeriesDaoImpl
	 * 3. Comment    : 그룹상품추가 조회(동기화/비동기화)
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.03.25
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public List<Map<String, Object>> selectSeriesTemp01(Map<String, Object> searchMap) {
        return commonDAO.selectList("PrSeries.selectSeriesTemp01", searchMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectSeriesTemp02
	 * 2. ClassName  : PrProductSeriesDaoImpl
	 * 3. Comment    : 그룹상품추가 조회(연관)
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.03.25
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public List<Map<String, Object>> selectSeriesTemp02(Map<String, Object> searchMap) {
        return commonDAO.selectList("PrSeries.selectSeriesTemp02", searchMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectPrdGrpId
	 * 2. ClassName  : PrProductSeriesDaoImpl
	 * 3. Comment    : 그룹ID 생성
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.03.25
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public String selectPrdGrpId(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectStr("PrSeries.selectPrdGrpId", searchMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectSeriesBssTmp
	 * 2. ClassName  : PrProductSeriesDaoImpl
	 * 3. Comment    : 기준상품 중복 체크
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.03.25
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public int selectSeriesBssTmp(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("PrSeries.selectSeriesBssTmp", searchMap);
    }
}
