package com.ssp.bo.pr.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pr.dao.PrCategoryDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre></pre>
 * @title SSP속성 DAO
 * @package com.ssp.bo.pr.dao.impl
 * <pre>    PrPropertyDaoImpl</pre>
 * @author 이원준
 * @since 2022.02.17
 * @version 1.0
 * @see PrCategoryDaoImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 
 */
@Repository("PrCategoryDao")
public class PrCategoryDaoImpl implements PrCategoryDao {

    @Autowired
    private CommonDAO commonDAO;

    /**
	 *
	 * <pre>
	 * 1. MethodName : selectCategoryList
	 * 2. ClassName  : PrCategoryDaoImpl
	 * 3. Comment    : SSP카테고리 트리조회
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public List<Map<String, Object>> selectCategoryList(Map<String, Object> searchMap) {
        return commonDAO.selectList("PrCategory.selectCategoryList", searchMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectSubCategoryList
	 * 2. ClassName  : PrCategoryDaoImpl
	 * 3. Comment    : 하위 카테고리 조회
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public List<Map<String, Object>> selectSubCategoryList(Map<String, Object> searchMap) {
        return commonDAO.selectList("PrCategory.selectSubCategoryList", searchMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectCategory
	 * 2. ClassName  : PrCategoryDaoImpl
	 * 3. Comment    : SSP카테고리 상세조회
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override 
    public List<Map<String, Object>> selectCategory(Map<String, Object>    searchMap) { 
        return commonDAO.selectList("PrCategory.selectCategory", searchMap); 
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectAttcFileDtlsInq
	 * 2. ClassName  : PrCategoryDaoImpl
	 * 3. Comment    : 첨부파일 정보조회
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override 
    public List<Map<String, Object>> selectAttcFileDtlsInq(Map<String, Object>    searchMap) { 
        return commonDAO.selectList("PrCategory.selectAttcFileDtlsInq", searchMap); 
    }

    /**
	 *
	 * <pre>
	 * 1. MethodName : insertCategory
	 * 2. ClassName  : PrCategoryDaoImpl
	 * 3. Comment    : SSP카테고리 등록
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public int insertCategory(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("PrCategory.insertCategory", saveMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectPrdClcdSeq1
	 * 2. ClassName  : PrCategoryDaoImpl
	 * 3. Comment    : SSP카테고리ID 대분류
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override 
    public String selectPrdClcdSeq1(Map<String, Object>    searchMap) throws Exception { 
        return commonDAO.selectStr("PrCategory.selectPrdClcdSeq1", searchMap); 
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectPrdClcdSeq2
	 * 2. ClassName  : PrCategoryDaoImpl
	 * 3. Comment    : SSP카테고리ID 하위카테고리
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override 
    public String selectPrdClcdSeq2(Map<String, Object>    searchMap) throws Exception { 
        return commonDAO.selectStr("PrCategory.selectPrdClcdSeq2", searchMap); 
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : insertPrdClsfChrpsn
	 * 2. ClassName  : PrCategoryDaoImpl
	 * 3. Comment    : 상품담당자/MD담당자 저장
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public int insertPrdClsfChrpsn(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("PrCategory.insertPrdClsfChrpsn", saveMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : updateCategory
	 * 2. ClassName  : PrCategoryDaoImpl
	 * 3. Comment    : SSP카테고리 수정
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public int updateCategory(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("PrCategory.updateCategory", saveMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : deleteCategory
	 * 2. ClassName  : PrCategoryDaoImpl
	 * 3. Comment    : SSP카테고리 삭제
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public int deleteCategory(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("PrCategory.deleteCategory", saveMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : updateCategorySrtSo
	 * 2. ClassName  : PrCategoryDaoImpl
	 * 3. Comment    : 하위카테고리 순서변경
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public int updateCategorySrtSo(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("PrCategory.updateCategorySrtSo", saveMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectPrdAttrList
	 * 2. ClassName  : PrCategoryDaoImpl
	 * 3. Comment    : 속성명 조회
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override 
    public List<Map<String, Object>> selectPrdAttrList(Map<String, Object>    searchMap) throws Exception {
        return commonDAO.selectList("PrCategory.selectPrdAttrList", searchMap); 
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectClsfAttrMappList
	 * 2. ClassName  : PrCategoryDaoImpl
	 * 3. Comment    : 상품군 사용SSP속성 조회
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override 
    public List<Map<String, Object>> selectClsfAttrMappList(Map<String, Object>    searchMap) throws Exception {
        return commonDAO.selectList("PrCategory.selectClsfAttrMappList", searchMap); 
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : insertClsfAttrMapp
	 * 2. ClassName  : PrCategoryDaoImpl
	 * 3. Comment    : 상품군속성관리 등록
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public int insertClsfAttrMapp(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("PrCategory.insertClsfAttrMapp", saveMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : updateClsfAttrMapp
	 * 2. ClassName  : PrCategoryDaoImpl
	 * 3. Comment    : 상품군속성관리 수정
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public int updateClsfAttrMapp(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("PrCategory.updateClsfAttrMapp", saveMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : deleteClsfAttrMapp
	 * 2. ClassName  : PrCategoryDaoImpl
	 * 3. Comment    : 상품군속성관리 삭제
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override
    public int deleteClsfAttrMapp(Map<String, Object> saveMap) throws Exception {
        return commonDAO.delete("PrCategory.deleteClsfAttrMapp", saveMap);
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectPrdClsfNmCnt
	 * 2. ClassName  : PrCategoryDaoImpl
	 * 3. Comment    : 카테고리명 중복 체크
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override 
    public int selectPrdClsfNmCnt(Map<String, Object> searchMap) throws Exception { 
        return commonDAO.selectInteger("PrCategory.selectPrdClsfNmCnt", searchMap); 
    }
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : selectPrdClsfNm
	 * 2. ClassName  : PrCategoryDaoImpl
	 * 3. Comment    : 카테고리명 / 담당자 조회
	 * 4. 작성자      : 이원준
	 * 5. 작성일      : 2022.02.17
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
    @Override 
    public Map<String, Object> selectPrdClsfNm(Map<String, Object> searchMap) throws Exception { 
        return commonDAO.select("PrCategory.selectPrdClsfNm", searchMap); 
    }

	@Override
	public int updatePrdClsfAttrSrtInfo(Map<String, Object> data) throws Exception {
        return commonDAO.update("PrCategory.updateClsfAttrSrtInfo", data); 
	}

	@Override
	public int deletePrdClsfAttrSrtInfo(Map<String, Object> data) throws Exception {
        return commonDAO.delete("PrCategory.deletePrdClsfAttrSrtInfo", data); 
	}
    
    

    
    
    
    
	@Override
	public List<Map<String, Object>> selectSspPrdNmFrtMdfrList(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrCategory.selectSspPrdNmFrtMdfrList", searchMap); 
	}
	@Override
	public List<Map<String, Object>> selectSspPrdNmRearMdfrList(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrCategory.selectSspPrdNmRearMdfrList", searchMap); 
	}
	@Override
	public List<Map<String, Object>> selectSspPrdNmAttrList(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrCategory.selectSspPrdNmAttrList", searchMap); 
	}
	@Override
	public Map<String, Object> selectSspPrdNmAddInfo(Map<String, Object> searchMap) throws Exception {
		return commonDAO.select("PrCategory.selectSspPrdNmAddInfo", searchMap); 
	}
	@Override
	public List<Map<String, Object>> selectSspPrdNmMngList(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrCategory.selectSspPrdNmMngList", searchMap); 
	}

	@Override
	public List<Map<String, Object>> selectClsfAttrList(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrCategory.selectClsfAttrList", searchMap); 
	}

	@Override
	public int updateSspPrdNmFrtMdfrInfo(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("PrCategory.updateSspPrdNmFrtMdfrInfo", saveMap);
	}

	@Override
	public int updateSspPrdNmRearMdfrInfo(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("PrCategory.updateSspPrdNmRearMdfrInfo", saveMap);
	}

	@Override
	public int deleteSspPrdNmFrtMdfrInfo(Map<String, Object> saveMap) throws Exception {
		return commonDAO.delete("PrCategory.deleteSspPrdNmFrtMdfrInfo", saveMap);
	}

	@Override
	public int deleteSspPrdNmRearMdfrInfo(Map<String, Object> saveMap) throws Exception {
		return commonDAO.delete("PrCategory.deleteSspPrdNmRearMdfrInfo", saveMap);
	}

	@Override
	public int updateSspPrdNmAttrInfo(Map<String, Object> saveMap) throws Exception {
		return commonDAO.update("PrCategory.updateSspPrdNmAttrInfo", saveMap);
	}
	@Override
	public int deleteSspPrdNmAttrInfo(Map<String, Object> saveMap) throws Exception {
		return commonDAO.delete("PrCategory.deleteSspPrdNmAttrInfo", saveMap);
	}

	@Override
	public int updateSspPrdNmAddInfo(Map<String, Object> saveMap) throws Exception {
		return commonDAO.update("PrCategory.updateSspPrdNmAddInfo", saveMap);
	}

	@Override
	public int updateSspPrdNmMngInfo(Map<String, Object> saveMap) throws Exception {
		return commonDAO.update("PrCategory.updateSspPrdNmMngInfo", saveMap);
	}

	@Override
	public int deleteSspPrdNmMngInfo(Map<String, Object> saveMap) throws Exception {
		return commonDAO.delete("PrCategory.deleteSspPrdNmMngInfo", saveMap);
	}

	@Override
	public Map<String, Object> selectLastBatchTime(Map<String, Object> searchMap) throws Exception {
		return commonDAO.select("PrCategory.selectLastBatchTime", searchMap); 
	}

	@Override
	public int insertPrdClsfIddtMapp(Map<String, Object> commandMap) throws Exception {
		return commonDAO.insert("PrCategory.insertPrdClsfIddtMapp", commandMap);
	}
}
