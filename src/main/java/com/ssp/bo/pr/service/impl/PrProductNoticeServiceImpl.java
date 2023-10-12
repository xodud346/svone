package com.ssp.bo.pr.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.pr.dao.PrProductNoticeDao;
import com.ssp.bo.pr.service.PrProductNoticeService;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 * @title  고시항목관리
 * @package com.ssp.bo.pr.service.impl
 * @author 조지훈
 * @since 2022.02.22
 * @version 1.0
 * </pre>
 * @see PrProductNoticeServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.02.17    조지훈        최초등록
 */
@Service("PrProductNoticeService")
public class PrProductNoticeServiceImpl implements PrProductNoticeService {

    @Autowired
    private PrProductNoticeDao productNoticeDao;
    
    @Autowired
    private SspPropertyService propertiesService;
    
    /**
     * <pre>
     * 1. MethodName : selectProductNoticeList
     * 2. ClassName  : PrProductNoticeServiceImpl
     * 3. Comment    : 품목 목록 조회
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.02.22
     * </pre>
     */
    @Override
    public List<Map<String, Object>> selectProductNoticeList(Map<String, Object> searchMap) {
        return  productNoticeDao.selectProductNoticeList(searchMap);
    }
    
    /**
     * <pre>
     * 1. MethodName : selectProductNoticeDetail
     * 2. ClassName  : PrProductNoticeServiceImpl
     * 3. Comment    : 품목 상세항목 조회
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.02.22
     * </pre>
     */
    @Override
    public List<Map<String, Object>> selectProductNoticeDetail(Map<String, Object> searchMap) {
        return productNoticeDao.selectProductNoticeDetailList(searchMap);
    }
    
    /**
     * <pre>
     * 1. MethodName : selectProductNoticeDetail
     * 2. ClassName  : PrProductNoticeServiceImpl
     * 3. Comment    : 품목, 상세항목 저장
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.02.22
     * </pre>
     */
    @SuppressWarnings("unchecked")
    @Override 
    public void saveProductNotice(Map<String, Object> paramMap) throws Exception {
        String coCd = propertiesService.getString("ssp.cocd");    //cocd코드
        
        //품목정보수정
        Map<String, Object> noticeInfo = (Map<String, Object>) paramMap.get("noticeInfo");
        noticeInfo.put("CO_CD", coCd);
        Object NOTI_ITM_ID = noticeInfo.get("NOTI_ITM_ID");
        if(NOTI_ITM_ID == null || (NOTI_ITM_ID != null && NOTI_ITM_ID.toString().isEmpty())) {
            NOTI_ITM_ID = productNoticeDao.selectProductNoticeNextval();
            noticeInfo.put("NOTI_ITM_ID", NOTI_ITM_ID);
        }
        noticeInfo.put("SESSION_OPRTR_ID", paramMap.get("SESSION_OPRTR_ID"));
        productNoticeDao.mergeProductNotice(noticeInfo);
        
        //상세항목 추가,수정
        List<Map<String, Object>> changeList = (List<Map<String, Object>>) paramMap.get("changeList");
        for(Map<String, Object> changeInfo : changeList) {
            Object NOTI_ITM_DTL_NO = changeInfo.get("NOTI_ITM_DTL_NO");
            changeInfo.put("CO_CD", coCd);
            if(NOTI_ITM_DTL_NO == null) {
                changeInfo.put("NOTI_ITM_ID", NOTI_ITM_ID);
                changeInfo.put("NOTI_ITM_DTL_NO", productNoticeDao.selectProductNoticeDetailNextval(changeInfo));
            }
            changeInfo.put("SESSION_OPRTR_ID", paramMap.get("SESSION_OPRTR_ID"));
            productNoticeDao.mergeProductNoticeDetail(changeInfo);
        }
        
        //상세항목 삭제(delyn=Y)
        List<Map<String, Object>> deleteList = (List<Map<String, Object>>) paramMap.get("deleteList");
        for(Map<String, Object> deleteInfo : deleteList) {
            deleteInfo.put("CO_CD", coCd);
            productNoticeDao.deleteProductNoticeDetail(deleteInfo);
        }
    }
}
