package com.ssp.bo.pr.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.pr.dao.PrProductHistoryDao;
import com.ssp.bo.pr.service.PrProductHistoryService;

/**
 * <pre>
 * @title  상품 공통팝업 컨트롤러
 * @package com.ssp.bo.pr.service.impl
 * </pre>
 * @author 조지훈
 * @since 2022.03.10
 * @version 1.0
 * @see PrProductHistoryServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.10    조지훈        최초등록
 */
@Service("PrProductHistoryService")
public class PrProductHistoryServiceImpl implements PrProductHistoryService {
    
    @Autowired
    private PrProductHistoryDao prProductHistoryDao;
    
    /**
	 * <pre>
	 * 1. MethodName : selectPersonHistoryList
	 * 2. ClassName  : PrProductHistoryServiceImpl
	 * 3. Comment    : 담당자 변경이력
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.03.10
	 * </pre>
     */
	@Override
	public int selectProductHistoryCount(Map<String, Object> searchMap) throws Exception {
        return prProductHistoryDao.selectProductHistoryCount(searchMap);
	}
	public List<Map<String, Object>> selectProductHistoryList(Map<String, Object> searchMap) throws Exception {
        return prProductHistoryDao.selectProductHistoryList(searchMap);
	}
	@Override
	public Map<String, Object> selectPrdHstDtlHtmlInfo(Map<String, Object> searchMap) throws Exception {
        return prProductHistoryDao.selectPrdHstDtlHtmlInfo(searchMap);
	}

}
