package com.ssp.bo.od.dao.impl;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.od.dao.OdOrderChangeDao;

@Repository("odOrderChangeDao")
public class OdOrderChangeDaoImpl implements OdOrderChangeDao {

    @Autowired
    private SqlSession sqlSession;
    protected final Logger log = LoggerFactory.getLogger(OdOrderChangeDaoImpl.class);

    @Override
    public List<Map<String, Object>> selectChangeList(Map<String, String> searchMap) throws Exception {
        return sqlSession.selectList("com.ssp.bo.od.orderChange.selectOrderChangeList", searchMap);
    }

    @Override
    public int selectChangeCount(Map<String, String> searchMap) throws Exception {
        return sqlSession.selectOne("com.ssp.bo.od.orderChange.selectOrderChangeCount", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectOrderChangeDetail(Map<String, String> searchMap) throws Exception {
        return sqlSession.selectList("com.ssp.bo.od.orderChange.selectOrderChangeDetail", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectMbrPopup(Map<String, Object> searchMap,String gb) throws Exception {
        if ("1".equals(gb))
            return sqlSession.selectList("com.ssp.bo.od.orderChange.selectMbrPopupAprv", searchMap);
        else if("2".equals(gb))
            return sqlSession.selectList("com.ssp.bo.od.orderChange.selectMbrPopupOrd", searchMap);
        else
            return null;
    }

    @Override
    public List<Map<String, Object>> selectMbrPopupMbrList(Map<String, Object> searchMap,String gb) throws Exception {
        if("0".equals(gb))
            return sqlSession.selectList("com.ssp.bo.od.orderChange.selectMbrPopupMbrList", searchMap);
        else if("1".equals(gb))
            return sqlSession.selectList("com.ssp.bo.od.orderChange.selectMbrPopupAprvList", searchMap);
        else if("2".equals(gb))
            return sqlSession.selectList("com.ssp.bo.od.orderChange.selectMbrPopupOrdList", searchMap);
        else
            return null;
    }

    @Override
    public List<Map<String, Object>> selectRefCdPopupList(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectList("com.ssp.bo.od.orderChange.selectRefCdPopupList", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectDstrPathPopup(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectList("com.ssp.bo.od.orderChange.selectDstrPathPopup", searchMap);
    }

    @Override
    public int insertOrderDoc(Map<String, Object> searchMap) throws Exception {
        return sqlSession.insert("com.ssp.bo.od.orderChange.insertOrderDoc", searchMap);
    }

    @Override
    public int selectOrderDocOprUnit(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("com.ssp.bo.od.orderChange.selectOrderDocOprUnitCount", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectOrderDoc(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectList("com.ssp.bo.od.orderChange.selectOrderDoc", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectChgCtlItmGrpCdList(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectList("com.ssp.bo.od.orderChange.selectChgCtlItmGrpCdList", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectChgCtlItmGrpAuthList(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectList("com.ssp.bo.od.orderChange.selectChgCtlItmGrpAuthList", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectChgCtlItmGrpDtlList(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectList("com.ssp.bo.od.orderChange.selectChgCtlItmGrpDtlList", searchMap);
    }


    @Override
    public int saveChgCtlItmGrpCd(Map<String, Object> commandMap) throws Exception {
        return sqlSession.update("com.ssp.bo.od.orderChange.saveChgCtlItmGrpCd", commandMap);
    }

    @Override
    public int saveChgCtlItmGrpAuthInfo(Map<String, Object> commandMap) throws Exception {
        return sqlSession.update("com.ssp.bo.od.orderChange.saveChgCtlItmGrpAuthInfo", commandMap);
    }

    @Override
    public int deleteChgCtlItmGrpAuthInfo(Map<String, Object> data) throws Exception {
        return sqlSession.delete("com.ssp.bo.od.orderChange.deleteChgCtlItmGrpAuthInfo", data);
    }

    @Override
    public int saveChgCtlItmGrpDtl(Map<String, Object> commandMap) throws Exception {
        return sqlSession.update("com.ssp.bo.od.orderChange.saveChgCtlItmGrpDtl", commandMap);
    }

    @Override
    public List<Map<String, Object>> selectExcelUpldDtls(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectList("com.ssp.bo.od.orderChange.selectExcelUpldDtls", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectExcelUpldItmGrp(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectList("com.ssp.bo.od.orderChange.selectExcelUpldItmGrp", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectExcelUpldItmGrp2(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectList("com.ssp.bo.od.orderChange.selectExcelUpldItmGrp2", searchMap);
    }

    @Override
    public Map<String, Object> checkExcelUpldDtls(Map<String, Object> searchMap) throws Exception {
        sqlSession.update("com.ssp.bo.od.orderChange.checkExcelUpldDtls", searchMap);
        /*sqlSession.update("com.ssp.bo.od.orderChange.updateExcelUpldMst", searchMap);*/
        return searchMap;

    }

    @Override
    public int updateExcelUpldMstAfterSave(Map<String, Object> data) throws Exception {
        return sqlSession.update("com.ssp.bo.od.orderChange.updateExcelUpldMstAfterSave", data);
    }

    @Override
    public int updateExcelUpldAfterSave(Map<String, Object> data) throws Exception {
        return sqlSession.update("com.ssp.bo.od.orderChange.updateExcelUpldAfterSave", data);
    }

    @Override
    public List<Map<String, Object>> selectOrderChangeListDetail(Map<String, String> searchMap) throws Exception {
        return sqlSession.selectList("com.ssp.bo.od.orderChange.selectOrderChangeListDetail", searchMap);
    }

}