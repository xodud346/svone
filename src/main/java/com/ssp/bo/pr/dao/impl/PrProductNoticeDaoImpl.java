package com.ssp.bo.pr.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pr.dao.PrProductNoticeDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre></pre>
 * @title	상품고시정보관리
 * @package com.ssp.bo.pr.dao.impl
 * @author 조지훈
 * @since 2022.02.22
 * @version 1.0
 * @see PrProductNoticeDaoImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.02.22     조지훈        최초작성
 */
@Repository("PrProductNoticeDao")
public class PrProductNoticeDaoImpl implements PrProductNoticeDao {
    
    @Autowired
    private CommonDAO commonDAO;

    /**
     * 고시 품목 목록
     */
    @Override
    public List<Map<String, Object>> selectProductNoticeList(Map<String, Object> searchMap) {
        return commonDAO.selectList("PrProductNotice.selectProductNoticeList", searchMap);
    }
    /**
     * 고시 상세항목 목록
     */
    @Override
    public List<Map<String, Object>> selectProductNoticeDetailList(Map<String, Object> searchMap) {
        return commonDAO.selectList("PrProductNotice.selectProductNoticeDetailList", searchMap);
    }
    /**
     * 품목고시 Nextval
     */
    @Override
    public String selectProductNoticeNextval() throws Exception {
        return commonDAO.selectStr("PrProductNotice.selectProductNoticeNextVal", new HashMap<>());
    }
    /**
     * 품목 상세항목 Nextval
     */
    @Override
    public String selectProductNoticeDetailNextval(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectStr("PrProductNotice.selectProductNoticeDetailNextVal", searchMap);
    }
    /**
     * 품목고시 저장
     */
    @Override
    public Integer mergeProductNotice(Map<String, Object> searchMap) throws Exception {
        return commonDAO.update("PrProductNotice.mergeProductNotice", searchMap);
    }
    /**
     * 고시 상세항목 저장
     */
    @Override
    public Integer mergeProductNoticeDetail(Map<String, Object> searchMap) throws Exception {
        return commonDAO.update("PrProductNotice.mergeProductNoticeDetail", searchMap);
    }
    /**
     * 품목고시 삭제(delyn = Y)
     */
    @Override
    public Integer deleteProductNoticeDetail(Map<String, Object> searchMap) throws Exception {
        return commonDAO.update("PrProductNotice.deleteProductNoticeDetail", searchMap);
    }
}
