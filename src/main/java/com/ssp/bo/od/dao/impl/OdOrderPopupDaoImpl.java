package com.ssp.bo.od.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.od.dao.OdOrderPopupDao;
import com.ssp.core.od.dao.OdCommonDAO;


/**
 *
 * <pre>
 * @title 주문번호
 * @package com.ssp.bo.od.dao.impl
 * </pre>
 *
 * @author neonlee
 * @since 2022-03-04
 * @version 1.0
 * @see OdOrderPopupDaoImpl
 * =================== 변경 내역 ==================
 * 날짜           변경자     내용
 * ------------------------------------------------
 */

@Repository("odOrderPopupDao")
public class OdOrderPopupDaoImpl implements OdOrderPopupDao {

    @Autowired
    private OdCommonDAO commonDAO;

    @Override
    public List<Map<String, Object>> selectOdrNumberList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderPopup.selectOdrNumberList", searchMap);
    }

    @Override
    public int selectOdrNumberCount(Map<String, String> searchMap) throws Exception {
        int count = commonDAO.selectCount("com.ssp.bo.od.orderPopup.selectOdrNumberCount", searchMap);
        return count;
    }

    @Override
    public int selectOrdNumberCount(Map<String, String> searchMap) throws Exception {
        int count = commonDAO.selectCount("com.ssp.bo.od.orderPopup.selectOrdNumberCount", searchMap);
        return count;
    }

    @Override
    public List<Map<String, Object>> selectOrdNumberList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderPopup.selectOrdNumberList", searchMap);
    }

    @Override
    public int selectOdrPsnCount(Map<String, String> searchMap) throws Exception {
        int count = commonDAO.selectCount("com.ssp.bo.od.orderPopup.selectOdrPsnCount", searchMap);
        return count;
    }

    @Override
    public List<Map<String, Object>> selectOdrPsnList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderPopup.selectOdrPsnList", searchMap);
    }

    @Override
    public int selectOdrPlntCount(Map<String, String> searchMap) throws Exception {
        int count = commonDAO.selectCount("com.ssp.bo.od.orderPopup.selectOdrPlntCount", searchMap);
        return count;
    }

    @Override
    public List<Map<String, Object>> selectOdrPlntList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderPopup.selectOdrPlntList", searchMap);
    }

    @Override
    public int selectChgItmGrpCount(Map<String, String> searchMap) throws Exception {
        int count = commonDAO.selectCount("com.ssp.bo.od.orderPopup.selectChgItmGrpCount", searchMap);
        return count;
    }

    @Override
    public List<Map<String, Object>> selectChgItmGrpList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderPopup.selectChgItmGrpList", searchMap);
    }

    // 공통코드 조회 테스트
    @Override
    public List<Map<String, Object>> selectCommonCodeList(List<String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderPopup.selectCommonCodeList", searchMap);
    }

    // 공통코드 조회
    @Override
    public List<Map<String, Object>> selectCommonCodeMulti(String str) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderPopup.selectCommonCodeMulti", str);
    }
    // 배송지목록 조회
    @Override
    public List<Map<String, Object>> selectDlvplcList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderPopup.selectDlvplcList", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectOdrBzcrdPrdInfo(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderPopup.selectOdrBzcrdPrdInfo", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectCostTrnsfDeptList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderPopup.selectCostTrnsfDeptList", searchMap);
    }

    @Override
    public int selectCostTrnsfDeptCount(Map<String, String> searchMap) throws Exception {
        int count = commonDAO.selectCount("com.ssp.bo.od.orderPopup.selectCostTrnsfDeptCount", searchMap);
        return count;
    }

    @Override
    public List<Map<String, Object>> selectCostTrnsfDeptAcctList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderPopup.selectCostTrnsfDeptAcctList", searchMap);
    }

    @Override
    public int selectCostTrnsfDeptAcctCount(Map<String, String> searchMap) throws Exception {
        int count = commonDAO.selectCount("com.ssp.bo.od.orderPopup.selectCostTrnsfDeptAcctCount", searchMap);
        return count;
    }

    @Override
    public int selectBlngDeptCount(Map<String, String> searchMap) throws Exception {
        int count = commonDAO.selectCount("com.ssp.bo.od.orderPopup.selectBlngDeptCount", searchMap);
        return count;
    }

    @Override
    public List<Map<String, Object>> selectBlngDeptList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderPopup.selectBlngDeptList", searchMap);
    }

    @Override
    public int selectEmailSentHstListCount(Map<String, String> searchMap) throws Exception {
        int count = commonDAO.selectCount("com.ssp.bo.od.orderPopup.selectEmailSentHstListCount", searchMap);
        return count;
    }

    @Override
    public List<Map<String, Object>> selectEmailSentHstList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderPopup.selectEmailSentHstList", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectColumnList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderPopup.selectColumnList", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectExcelUpldDtlsHstList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderPopup.selectExcelUpldDtlsHstList", searchMap);
    }

    @Override
    public int selectOprtrListCount(Map<String, String> searchMap) throws Exception {
        int count = commonDAO.selectCount("com.ssp.bo.od.orderPopup.selectOprtrListCount", searchMap);
        return count;
    }

    @Override
    public List<Map<String, Object>> selectOprtrList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderPopup.selectOprtrList", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectMDOprtrList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderPopup.selectMDOprtrList", searchMap);
    }

    @Override
    public int selectMDOprtrListCount(Map<String, String> searchMap) throws Exception {
        int count = commonDAO.selectCount("com.ssp.bo.od.orderPopup.selectMDOprtrListCount", searchMap);
        return count;
    }

}
