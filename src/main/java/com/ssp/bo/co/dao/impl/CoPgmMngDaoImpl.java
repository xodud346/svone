package com.ssp.bo.co.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.co.dao.CoPgmMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao.impl
 * <pre>    CoPgmMngDaoImpl
 * @author 
 * @since 2022.01.26
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.26		최초작성
 */
@SuppressWarnings("unchecked")
@Repository("coPgmMngDao")
public class CoPgmMngDaoImpl implements CoPgmMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map<String, Object>> selectPgmMngList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.co.coPgmMng.selectPgmMngList", searchMap);
    }
    
    @Override
    public int selectPgmMngCount(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("com.ssp.bo.co.coPgmMng.selectPgmMngCount", searchMap);
    }

    @Override
    public int insertPgmMng(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("com.ssp.bo.co.coPgmMng.insertPgmMng", saveMap);
    }

    @Override
    public int updatePgmMng(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("com.ssp.bo.co.coPgmMng.updatePgmMng", saveMap);
    }

    @Override
    public int deletePgmMng(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("com.ssp.bo.co.coPgmMng.deletePgmMng", saveMap);
    }

    @Override
    public List<Map<String, Object>> selectPgmIdCheck(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.co.coPgmMng.selectPgmIdCheck", searchMap);
    }
 
    @Override
    public List<Map<String, Object>> selectPgmMngPopupList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.co.coPgmMng.selectPgmMngPopupList", searchMap);
    }
}
