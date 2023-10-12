package com.ssp.bo.rd.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.pr.controller.PrCategoryController;
import com.ssp.bo.rd.dao.RdPrdChrpsnDao;
import com.ssp.bo.rd.service.RdPrdChrpsnService;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 * @title  R&D상품담당자관리
 * @package com.ssp.bo.pr.service.impl
 * <pre>
 * @author  김진섭
 * @since   2022.03.27
 * @version 1.0
 * @see RdPrdChrpsnServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.27    김진섭        최초작성
 */
@Service("RdPrdChrpsnService")
public class RdPrdChrpsnServiceImpl implements RdPrdChrpsnService {
    
	private final Logger log = LoggerFactory.getLogger(PrCategoryController.class);
	
    @Autowired
    private RdPrdChrpsnDao rdPrdChrpsnDao;
    
    @Autowired
    private SspPropertyService propertiesService;
    
	@Override
	public int selectPersonCount(Map<String, Object> searchMap) throws Exception {
		searchMap.put("CO_CD", propertiesService.getString("ssp.cocd"));	//cocd코드
		return rdPrdChrpsnDao.selectPersonCount(searchMap);
	}
    
    /**
	 * <pre>
	 * 1. MethodName : selectPersonList
	 * 2. ClassName  : RdPrdChrpsnServiceImpl
	 * 3. Comment    : 담당자 목록 조회
	 * 4. 작성자       : 김진섭
	 * 5. 작성일       : 2022.02.22
	 * </pre>
     */
    @Override
    public List<Map<String, Object>> selectPersonList(Map<String, Object> searchMap) throws Exception {
    	
    	log.debug("searchMap_AAAA==>:{}",searchMap);
    	
        searchMap.put("CO_CD", propertiesService.getString("ssp.cocd"));	//cocd코드
        return rdPrdChrpsnDao.selectPersonList(searchMap);
    }

    /**
	 * <pre>
	 * 1. MethodName : selectPersonSprCd
	 * 2. ClassName  : RdPrdChrpsnServiceImpl
	 * 3. Comment    : 담당자 정/부 구분 조회
	 * 4. 작성자       : 김진섭
	 * 5. 작성일       : 2022.03.07
	 * </pre>
     */
	@Override
	public String selectPersonSprCd(Map<String, Object> searchMap) throws Exception {
		return rdPrdChrpsnDao.selectPersonSprCd(searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : insertPerson
	 * 2. ClassName  : RdPrdChrpsnServiceImpl
	 * 3. Comment    : 담당자 등록
	 * 4. 작성자       : 김진섭
	 * 5. 작성일       : 2022.03.08
	 * </pre>
     */
	@Override
	public int insertPerson(Map<String, Object> dataMap) throws Exception {
		dataMap.put("CO_CD", propertiesService.getString("ssp.cocd"));
		rdPrdChrpsnDao.insertPerson(dataMap);
		
		dataMap.put("DATA_CHG_TP_CD", "I");
		rdPrdChrpsnDao.insertPersonHistory(dataMap);
		return 1;
	}

	@Override
	public String selectPersonDuplicateCheck(Map<String, Object> searchMap) throws Exception {
		searchMap.put("CO_CD", propertiesService.getString("ssp.cocd"));
		return rdPrdChrpsnDao.selectPersonDuplicateCheck(searchMap);
	}

	@Override
	public List<Map<String, Object>> selectPersonDetail(Map<String, Object> searchMap) throws Exception {
		searchMap.put("CO_CD", propertiesService.getString("ssp.cocd"));
        return rdPrdChrpsnDao.selectPersonDetail(searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : insertPerson
	 * 2. ClassName  : RdPrdChrpsnServiceImpl
	 * 3. Comment    : 담당자 수정 - 신규담당자가 넘어올 경우 기존 담당자를 ROW삭제 처리후 신규로 등록함.
	 * 4. 작성자       : 김진섭
	 * 5. 작성일       : 2022.03.10
	 * </pre>
     */
	@Override
	public void updatePerson(Map<String, Object> dataMap) throws Exception {
		dataMap.put("CO_CD", propertiesService.getString("ssp.cocd"));
		rdPrdChrpsnDao.updatePerson(dataMap);
		
		dataMap.put("DATA_CHG_TP_CD", "U");
		rdPrdChrpsnDao.insertPersonHistory(dataMap);
	}


}
