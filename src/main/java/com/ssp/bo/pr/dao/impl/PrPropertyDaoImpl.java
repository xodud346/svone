package com.ssp.bo.pr.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pr.dao.PrPropertyDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre></pre>
 * @title SSP속성 DAO
 * @package com.ssp.bo.pr.dao.impl
 * <pre>    PrPropertyDaoImpl</pre>
 * @author 이원준
 * @since 2022.02.17
 * @version 1.0
 * @see PrPropertyDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Repository("propertyDao")
public class PrPropertyDaoImpl implements PrPropertyDao {

	@Autowired
    private CommonDAO commonDAO;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectPropertyList
	 * 2. ClassName  : PrPropertyDaoImpl
	 * 3. Comment    : SSP속성 목록 조회
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public List<Map<String, Object>> selectPropertyList(Map<String, Object> searchMap) {
        return commonDAO.selectList("PrProperty.selectPropertyList", searchMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectPropertyCount
	 * 2. ClassName  : PrPropertyDaoImpl
	 * 3. Comment    : SSP속성 목록 카운터
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public int selectPropertyCount(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("PrProperty.selectPropertyCount", searchMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectProperty
	 * 2. ClassName  : PrPropertyDaoImpl
	 * 3. Comment    : SP속성 상세 조회
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public List<Map<String, Object>> selectProperty(Map<String, Object> searchMap) {
    	return commonDAO.selectList("PrProperty.selectProperty", searchMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : insertProperty
	 * 2. ClassName  : PrPropertyDaoImpl
	 * 3. Comment    : SSP속성 등록 
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public int insertProperty(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("PrProperty.insertProperty", saveMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : updateProperty
	 * 2. ClassName  : PrPropertyDaoImpl
	 * 3. Comment    : SSP속성 수정
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public int updateProperty(Map<String, Object> saveMap) throws Exception {
    	return commonDAO.update("PrProperty.updateProperty", saveMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectPropertyPrNm
	 * 2. ClassName  : PrPropertyDaoImpl
	 * 3. Comment    : SSP속성명 중복조회
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public int selectPropertyPrNm(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("PrProperty.selectPropertyPrNm", searchMap);
    }
}
