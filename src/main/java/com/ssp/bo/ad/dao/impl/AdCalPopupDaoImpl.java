package com.ssp.bo.ad.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.ad.dao.AdCalPopupDao;
import com.ssp.core.od.dao.OdCommonDAO;

/**
 * <pre>
 * @title 정산 관리 - 정산 대사 팝업
 * @package com.ssp.bo.ad.dao
 * </pre>
 * @author 윤민우
 * @since 2022.04.04
 * @version 1.0
 * @see AdCalPopupDaoImpl
 * =================== 변경 내역 ==================
 * 날짜           변경자     내용
 * ------------------------------------------------
 * 2022.04.04   윤민우     최초등록
 */
@Repository("adCalPopupDao")
public class AdCalPopupDaoImpl implements AdCalPopupDao {

    @Autowired
    private OdCommonDAO commonDAO;
    
    /**
     * 정산 확인취소 목록
     */
    @Override
    public List<Map<String, Object>> selectCalCxlList(Map<String, String> searchMap) {
        return commonDAO.selectList("com.ssp.bo.ad.adCalPopup.selectCalCxlList", searchMap);
    }
    
    /**
     * 정산 이력 목록 카운트
     */
    @Override
    public int selectCalHistoryListCount(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectInteger("com.ssp.bo.ad.adCalPopup.selectCalHistoryListCount", searchMap);
    }
    
    /**
     * 정산 이력 목록
     */
    @Override
    public List<Map<String, Object>> selectCalHistoryList(Map<String, String> searchMap) {
        return commonDAO.selectList("com.ssp.bo.ad.adCalPopup.selectCalHistoryList", searchMap);
    }
    
    @Override
    public Map<String, Object> saveCalCxlList(Map<String, Object> searchMap) throws Exception {
        commonDAO.insert("com.ssp.bo.ad.adCalPopup.saveCalCxlList", searchMap);
        return searchMap;
        
    }
}
