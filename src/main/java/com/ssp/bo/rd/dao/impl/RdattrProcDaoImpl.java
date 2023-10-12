package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.RdattrProcDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre></pre>
 * @title R&D속성 DAO
 * @package com.ssp.bo.rd.dao.impl
 * <pre>    RdattrProcDaoImpl</pre>
 * @author 김진섭
 * @since 2022.03.11
 * @version 1.0
 * @see RdattrProcDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Repository("rdattrProcDao")
public class RdattrProcDaoImpl implements RdattrProcDao {

	@Autowired
    private CommonDAO commonDAO;

    @Override
    public List<Map<String, Object>> selectPropertyList(Map<String, Object> searchMap) {
        return commonDAO.selectList("RdattrProc.selectPropertyList", searchMap);
    }
    
    @Override
    public int selectPropertyCount(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("RdattrProc.selectPropertyCount", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectProperty(Map<String, Object> searchMap) {
    	return commonDAO.selectList("RdattrProc.selectProperty", searchMap);
    }
    
    @Override
    public int insertProperty(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("RdattrProc.insertProperty", saveMap);
    }
    
    @Override
    public int updateProperty(Map<String, Object> saveMap) throws Exception {
    	return commonDAO.update("RdattrProc.updateProperty", saveMap);
    }
    
    @Override
	public String selectRdAttrDuplicateCheck(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectStr("RdattrProc.selectRdAttrDuplicateCheck", searchMap);
	}
}
