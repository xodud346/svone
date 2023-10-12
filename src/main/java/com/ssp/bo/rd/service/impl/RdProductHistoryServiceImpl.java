package com.ssp.bo.rd.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.rd.dao.RdProductHistoryDao;
import com.ssp.bo.rd.service.RdProductHistoryService;

/**
 * <pre>
 * @title  R&D상품 공통팝업 컨트롤러
 * @package com.ssp.bo.pr.service.impl
 * </pre>
 * @author 김진섭
 * @since 2022.04.01
 * @version 1.0
 * @see RdProductHistoryServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.04.01    김진섭        최초등록
 */
@Service("RdProductHistoryService")
public class RdProductHistoryServiceImpl implements RdProductHistoryService {
    
    @Autowired
    private RdProductHistoryDao rdProductHistoryDao;
    
    /**
	 * <pre>
	 * 1. MethodName : selectPersonHistoryList
	 * 2. ClassName  : RdProductHistoryServiceImpl
	 * 3. Comment    : 담당자 변경이력
	 * 4. 작성자       : 김진섭
	 * 5. 작성일       : 2022.03.10
	 * </pre>
     */
	@Override
	public int selectProductHistoryCount(Map<String, Object> searchMap) throws Exception {
        return rdProductHistoryDao.selectProductHistoryCount(searchMap);
	}
	public List<Map<String, Object>> selectProductHistoryList(Map<String, Object> searchMap) throws Exception {
        return rdProductHistoryDao.selectProductHistoryList(searchMap);
	}

}
