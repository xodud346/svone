package com.ssp.bo.iv.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.iv.dao.IvInventoryDao;
import com.ssp.bo.iv.service.IvInventoryService;
import com.ssp.bo.od.OdOrderComm;

/**
 * <pre>
 * @title  재고 관리
 * @package com.ssp.bo.iv.service.impl
 * <pre>
 * @author  윤민우
 * @since   2022.03.11
 * @version 1.0
 * @see IvInventoryServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.11    윤민우        최초작성
 */
@Service("ivInventoryService")
public class IvInventoryServiceImpl implements IvInventoryService {

	@Autowired
	private IvInventoryDao ivInventoryDao;

	/**
	 * <pre>
	 * 1. MethodName : selectComCdList
	 * 2. ClassName  : IvInventoryServiceImpl
	 * 3. Comment    : 공통코드 목록 조회
	 * 4. 작성자       : 윤민우
	 * 5. 작성일       : 2022.03.11
	 * </pre>
     */
	@Override
	public NexacroResult selectComCdList(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

        List<Map<String, Object>> comCdList = ivInventoryDao.selectComCdList(searchMap);
        result.addDataSet("comCdList", comCdList);

        return result;
	}

    /**
	 * <pre>
	 * 1. MethodName : selectInventoryList
	 * 2. ClassName  : IvInventoryServiceImpl
	 * 3. Comment    : 재고관리 마스터 목록 조회
	 * 4. 작성자       : 윤민우
	 * 5. 작성일       : 2022.03.11
	 * </pre>
     */
	@Override
	public NexacroResult selectInventoryList(Map<String, String> searchMap,OdOrderComm odComm) throws Exception {
		NexacroResult result = new NexacroResult();

		searchMap.put("SES_ID", odComm.getSessionId() );
        String strStart = searchMap.get("TOTAL_COUNT");
        int totalCount;


        if(strStart.equals("-1"))
        {
        	totalCount = ivInventoryDao.selectInventoryListCount(searchMap);
			result.addVariable( "totalCount", totalCount);
	        searchMap.put("TOTAL_COUNT",String.valueOf(totalCount));
        }

        List<Map<String, Object>> inventoryList = ivInventoryDao.selectInventoryList(searchMap);

        result.addDataSet("ds_output1", inventoryList);
        result.addDataSet("ds_output2", searchMap);

        return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectInventoryDetail
	 * 2. ClassName  : IvInventoryServiceImpl
	 * 3. Comment    : 재고관리 마스터 상세 조회
	 * 4. 작성자       : 윤민우
	 * 5. 작성일       : 2022.03.11
	 * </pre>
     */
	@Override
	public NexacroResult selectInventoryDetail(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

        List<Map<String, Object>> inventoryDetail = ivInventoryDao.selectInventoryDetail(searchMap);
        result.addDataSet("inventoryDetail", inventoryDetail);

        return result;
	}
}
