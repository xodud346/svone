package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.RdCategoryDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre></pre>
 * @title R&D카테고리 관리 DAO
 * @package com.ssp.bo.rd.dao.impl
 * <pre>    PrPropertyDaoImpl</pre>
 * @author 김진섭
 * @since 2022.03.22
 * @version 1.0
 * @see RdCategoryDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Repository("RdCategoryDao")
public class RdCategoryDaoImpl implements RdCategoryDao {

	@Autowired
    private CommonDAO commonDAO;

    @Override
    public  List<Map> selectCategoryList(Map<String, Object> searchMap) {
        return commonDAO.selectList("RdCategory.selectCategoryList", searchMap);
    }
    
    @Override
    public  List<Map> selectSubCategoryList(Map<String, Object> searchMap) {
    	return commonDAO.selectList("RdCategory.selectSubCategoryList", searchMap);
    }
    
	@Override 
	public List<Map> selectCategory(Map<String, Object>	searchMap) { 
		return commonDAO.selectList("RdCategory.selectCategory", searchMap); 
	}

	@Override 
	public List<Map> selectAttcFileDtlsInq(Map<String, Object>	searchMap) { 
		return commonDAO.selectList("RdCategory.selectAttcFileDtlsInq", searchMap); 
	}
	
	@Override
	public String selectRdCategoryDuplicateCheck(Map<String, Object> saveMap) throws Exception {
		return commonDAO.selectStr("RdCategory.selectRdCategoryDuplicateCheck", saveMap);
	}
	
	@Override
	public String selectRdCategoryDuplicateCheckNull(Map<String, Object> saveMap) throws Exception {
		return commonDAO.selectStr("RdCategory.selectRdCategoryDuplicateCheckNull", saveMap);
	}
	
    @Override
	public int updateCategory(Map<String, Object> saveMap) throws Exception {
		return commonDAO.update("RdCategory.updateCategory", saveMap);
	}
	
	@Override
	public int deleteCategory(Map<String, Object> saveMap) throws Exception {
		return commonDAO.update("RdCategory.deleteCategory", saveMap);
	}
	
	@Override
	public int updateCategorySrtSo(Map<String, Object> saveMap) throws Exception {
		return commonDAO.update("RdCategory.updateCategorySrtSo", saveMap);
	}
	@Override 
	public String selectPrdClcdSeq1(Map<String, Object>	searchMap) throws Exception { 
		return commonDAO.selectStr("RdCategory.selectPrdClcdSeq1", searchMap); 
	}
	
	@Override 
	public String selectPrdClcdSeq2(Map<String, Object>	searchMap) throws Exception { 
		return commonDAO.selectStr("RdCategory.selectPrdClcdSeq2", searchMap); 
	}
	
	@Override
    public int insertCategory(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("RdCategory.insertCategory", saveMap);
    }
    
	@Override
	public int insertPrdClsfChrpsn(Map<String, Object> saveMap) throws Exception {
		return commonDAO.insert("RdCategory.insertPrdClsfChrpsn", saveMap);
	}
    
	 @Override
    public Map<String, Object> selectPlnPrfrtDetail(Map<String, Object> searchMap) throws Exception {
    	//noinspection unchecked
    	return commonDAO.select("RdCategory.selectPlnPrfrtDetail", searchMap);
    }
	
	@Override
	public int insertPlnPrfrt(Map<String, Object> saveMap) throws Exception {
			return commonDAO.insert("RdCategory.insertPlnPrfrt", saveMap);
	}
	
	 @Override
    public int updatePlnPrfrt(Map<String, Object> commandMap) throws Exception {
    	//noinspection unchecked
    	return commonDAO.update("RdCategory.updatePlnPrfrt", commandMap);
    }
	
	@Override 
	public List<Map> selectPrdAttrList(Map<String, Object>	searchMap) throws Exception {
		return commonDAO.selectList("RdCategory.selectPrdAttrList", searchMap); 
	}
	
	@Override 
	public List<Map> selectClsfAttrMappList(Map<String, Object>	searchMap) throws Exception {
		return commonDAO.selectList("RdCategory.selectClsfAttrMappList", searchMap); 
	}
	
	@Override
	public int insertClsfAttrMapp(Map<String, Object> saveMap) throws Exception {
		return commonDAO.insert("RdCategory.insertClsfAttrMapp", saveMap);
	}
	
	@Override
	public int updateClsfAttrMapp(Map<String, Object> saveMap) throws Exception {
		return commonDAO.update("RdCategory.updateClsfAttrMapp", saveMap);
	}
	
	@Override
	public int deleteClsfAttrMapp(Map<String, Object> saveMap) throws Exception {
		return commonDAO.delete("RdCategory.deleteClsfAttrMapp", saveMap);
	}
	
	@Override 
	public int selectPrdClsfNm(Map<String, Object>	searchMap) throws Exception { 
		return commonDAO.selectInteger("RdCategory.selectPrdClsfNm", searchMap); 
	}
	
    /**
     * 신규 저장 코드체크여부 조회(selectCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectCodeChkYn(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("RdCategory.selectCodeChkYn", map);
    }
    
    /**
     * 수정 코드체크여부 조회(selectUpCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectUpCodeChkYn(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("RdCategory.selectUpCodeChkYn", map);
    }

    @Override
	public int updatePrdClsfAttrSrtInfo(Map<String, Object> data) throws Exception {
        return commonDAO.update("RdCategory.updateClsfAttrSrtInfo", data); 
	}

	@Override
	public int deletePrdClsfAttrSrtInfo(Map<String, Object> data) throws Exception {
        return commonDAO.delete("RdCategory.deletePrdClsfAttrSrtInfo", data); 
	}

}
