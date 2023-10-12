package com.ssp.bo.co.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.co.dao.CoFrtPgmInfoDao;
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
@Repository("coFrtPgmInfoDao")
public class CoFrtPgmInfoDaoImpl implements CoFrtPgmInfoDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map<String, Object>> selectFrtPgmList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.co.coFrtPgmInfo.selectFrtPgmList", searchMap);
    }
    
    @Override
    public int selectFrtPgmListCount(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("com.ssp.bo.co.coFrtPgmInfo.selectFrtPgmListCount", searchMap);
    }

    @Override
    public int saveFrtPgmInfo(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("com.ssp.bo.co.coFrtPgmInfo.saveFrtPgmInfo", saveMap);
    }

    @Override
    public int updateFrtPgmInfo(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("com.ssp.bo.co.coFrtPgmInfo.updateFrtPgmInfo", saveMap);
    }

    @Override
    public int deleteFrtPgmInfo(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("com.ssp.bo.co.coFrtPgmInfo.deleteFrtPgmInfo", saveMap);
    }

    @Override
    public List<Map<String, Object>> selectPgmIdCheck(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.co.coFrtPgmInfo.selectPgmIdCheck", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectFrtPgmPopupList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.co.coFrtPgmInfo.selectFrtPgmPopupList", searchMap);
    }
    
    @Override
    public int updateHrnkPgmId(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("com.ssp.bo.co.coFrtPgmInfo.updateHrnkPgmId", saveMap);
    }
}
