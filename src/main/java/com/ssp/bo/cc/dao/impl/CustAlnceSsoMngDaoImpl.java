package com.ssp.bo.cc.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.dao.CustAlnceSsoMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao.impl
 * <pre>    CustAlnceSsoMngDaoImpl
 * @author 
 * @since 2023.05.09
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.05.09		최초작성
 */
@SuppressWarnings("unchecked")
@Repository("custAlnceSsoMngDao")
public class CustAlnceSsoMngDaoImpl implements CustAlnceSsoMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map<String, Object>> selectSsoMngList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.cc.custAlnceSsoMng.selectSsoMngList", searchMap);
    }
    
    @Override
    public int selectSsoMngCount(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("com.ssp.bo.cc.custAlnceSsoMng.selectSsoMngCount", searchMap);
    }

    @Override
    public int insertSsoMng(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("com.ssp.bo.cc.custAlnceSsoMng.insertSsoMng", saveMap);
    }

    @Override
    public int updateSsoMng(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("com.ssp.bo.cc.custAlnceSsoMng.updateSsoMng", saveMap);
    }

    @Override
    public int deleteSsoMng(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("com.ssp.bo.cc.custAlnceSsoMng.deleteSsoMng", saveMap);
    }

    @Override
    public List<Map<String, Object>> selectSsoIdCheck(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.cc.custAlnceSsoMng.selectSsoIdCheck", searchMap);
    }
 
    @Override
    public List<Map<String, Object>> selectSsoMngPopupList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.cc.custAlnceSsoMng.selectSsoMngPopupList", searchMap);
    }
}
