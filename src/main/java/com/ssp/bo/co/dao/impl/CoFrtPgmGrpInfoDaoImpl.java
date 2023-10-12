package com.ssp.bo.co.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.co.dao.CoFrtPgmGrpInfoDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao.impl
 * <pre>    CoFrtPgmGrpInfoDaoImpl
 * @author 
 * @since 2022.03.16
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */
@SuppressWarnings("unchecked")
@Repository("coFrtPgmGrpInfoDao")
public class CoFrtPgmGrpInfoDaoImpl implements CoFrtPgmGrpInfoDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map<String, Object>> selectFrtPgmGrpList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.co.coFrtPgmGrpInfo.selectFrtPgmGrpList", searchMap);
    }
    
    @Override
    public int selectFrtPgmGrpListCount(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("com.ssp.bo.co.coFrtPgmGrpInfo.selectFrtPgmGrpListCount", searchMap);
    }

    @Override
    public int insertFrtPgmGrpInfo(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("com.ssp.bo.co.coFrtPgmGrpInfo.insertFrtPgmGrpInfo", saveMap);
    }

    @Override
    public int updateFrtPgmGrpInfo(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("com.ssp.bo.co.coFrtPgmGrpInfo.updateFrtPgmGrpInfo", saveMap);
    }

    @Override
    public int deleteFrtPgmGrpInfo(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("com.ssp.bo.co.coFrtPgmGrpInfo.deleteFrtPgmGrpInfo", saveMap);
    }

    @Override
    public List<Map<String, Object>> selectPgmGrpIdCheck(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.co.coFrtPgmGrpInfo.selectPgmGrpIdCheck", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectFrtPgmGrpPopupList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.co.coFrtPgmGrpInfo.selectFrtPgmGrpPopupList", searchMap);
    }
}
