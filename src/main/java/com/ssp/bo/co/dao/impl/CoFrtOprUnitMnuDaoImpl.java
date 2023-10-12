package com.ssp.bo.co.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.co.dao.CoFrtOprUnitMnuDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao.impl
 * <pre>    CoFrtPgmInfoDaoImpl
 * @author 
 * @since 2022.03.16
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */
@SuppressWarnings("unchecked")
@Repository("coFrtOprUnitMnuDao")
public class CoFrtOprUnitMnuDaoImpl implements CoFrtOprUnitMnuDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map<String, Object>> selectFrtOprUnitMnuList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.co.coFrtOprUnitMnu.selectFrtOprUnitMnuList", searchMap);
    }
    
    @Override
    public int selectFrtOprUnitMnuListCount(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("com.ssp.bo.co.coFrtOprUnitMnu.selectFrtOprUnitMnuListCount", searchMap);
    }

    @Override
    public int saveFrtOprUnitMnu(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("com.ssp.bo.co.coFrtOprUnitMnu.saveFrtOprUnitMnu", saveMap);
    }

    @Override
    public int updateFrtOprUnitMnu(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("com.ssp.bo.co.coFrtOprUnitMnu.updateFrtOprUnitMnu", saveMap);
    }

    @Override
    public int deletFrtOprUnitMnu(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("com.ssp.bo.co.coFrtOprUnitMnu.deletFrtOprUnitMnu", saveMap);
    }

    @Override
    public List<Map<String, Object>> selectPgmIdCheck(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.co.coFrtOprUnitMnu.selectPgmIdCheck", searchMap);
    }
}
