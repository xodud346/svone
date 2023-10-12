package com.ssp.bo.od.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.od.dao.OdBasisDlcstZpcdDao;
import com.ssp.core.od.dao.OdCommonDAO;

/**
 * 
 * <pre>
 * @title 도서산간 배송비
 * @package com.ssp.bo.od.dao.impl
 * </pre>
 * @author neonlee
 * @since 2022-02-24
 * @version 1.0
 * @see OdBasisDlcstZpcdDaoImpl 
 * =================== 변경 내역 ==================
 * 날짜           변경자     내용
 * ------------------------------------------------ 
 */

@Repository("odBasisDlcstZpcdDao")
public class OdBasisDlcstZpcdDaoImpl implements OdBasisDlcstZpcdDao {

    @Autowired
    private OdCommonDAO commonDAO;
    
    @Autowired
    private SqlSession sqlSession;

    @Override
    public List<Map<String, Object>> selectBasisDlcstList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.odBasisDlcstZpcd.selectBasisDlcstList", searchMap);
    }

    @Override
    public int insertBasisDlcst(Map<String, Object> commandMap) throws Exception {
        return commonDAO.insert("com.ssp.bo.od.odBasisDlcstZpcd.insertBasisDlcst", commandMap);
    }

    @Override
    public int insertBasisDlcst2(Map<String, Object> commandMap) throws Exception {
        return commonDAO.insert("com.ssp.bo.od.odBasisDlcstZpcd.insertBasisDlcst2", commandMap);
    }

    @Override
    public int updateBasisDlcst(Map<String, Object> commandMap) throws Exception {
        return commonDAO.update("com.ssp.bo.od.odBasisDlcstZpcd.updateBasisDlcst", commandMap);
    }

    @Override
    public int updateBasisDlcstWithStartDate(Map<String, Object> commandMap) throws Exception {
        return commonDAO.update("com.ssp.bo.od.odBasisDlcstZpcd.updateBasisDlcstWithStartDate", commandMap);
    }

    @Override
    public int deleteBasisDlcst(Map<String, Object> commandMap) throws Exception {
        return 0;
    }

    @Override
    public int selectBasisDlcstKeyCount(Map<String, Object> searchMap) throws Exception {
        int keyCount = commonDAO.selectCount("com.ssp.bo.od.odBasisDlcstZpcd.selectBasisDlcstKeyCount", searchMap);
        return keyCount;
    }

    @Override
    public int selectBasisDlcstFirstKeyCount(Map<String, Object> searchMap) throws Exception {
        int keyCount = commonDAO.selectCount("com.ssp.bo.od.odBasisDlcstZpcd.selectBasisDlcstFirstKeyCount", searchMap);
        return keyCount;
    }

    @Override
    public int selectBasisDlcstCount(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("com.ssp.bo.od.odBasisDlcstZpcd.selectBasisDlcstCount", searchMap);
    }

    @Override
    public int selectBasisDlcstHistoryCount(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("com.ssp.bo.od.odBasisDlcstZpcd.selectBasisDlcstHistoryCount", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectCartDlcstPopupList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.odBasisDlcstZpcd.selectCartDlcstPopupList", searchMap);
    }

    @Override
    public int selectIsareaZpcdCount(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectCount("com.ssp.bo.od.odBasisDlcstZpcd.selectIsareaZpcdCount", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectIsareaZpcdList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.odBasisDlcstZpcd.selectIsareaZpcdList", searchMap);
    }

    @Override
    public int insertIsareaZpcd(Map<String, Object> commandMap) throws Exception {
        return commonDAO.insert("com.ssp.bo.od.odBasisDlcstZpcd.insertIsareaZpcd", commandMap);
    }

    @Override
    public int updateIsareaZpcd(Map<String, Object> commandMap) throws Exception {
        return commonDAO.update("com.ssp.bo.od.odBasisDlcstZpcd.updateIsareaZpcd", commandMap);
    }

    @Override
    public int deleteIsareaZpcd(Map<String, Object> commandMap) throws Exception {
        return 0;
        // return commonDAO.delete("com.ssp.bo.od.odBasisDlcstZpcd.deleteIsareaZpcd", commandMap);
    }

    @Override
    public List<Map<String, Object>> selectIsareaZpcdGubunList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.odBasisDlcstZpcd.selectIsareaZpcdGubunList", searchMap);
    }

    @Override
    public Map<String, Object> updateCartDlcstPopupListSP(Map<String, Object> searchMap) throws Exception {
        sqlSession.update("com.ssp.bo.od.odBasisDlcstZpcd.updateBasisDlcstSP", searchMap);
        return searchMap;
    }
}
