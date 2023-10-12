package com.ssp.bo.ad.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.ad.dao.AdCalculateDao;
import com.ssp.bo.ad.service.AdCalculateService;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.core.od.service.OdOrderCommService;

/**
 * <pre>
 * @title  정산 관리
 * @package com.ssp.bo.ad.service.impl
 * <pre>
 * @author  윤민우
 * @since   2022.03.11
 * @version 1.0
 * @see AdCalculateServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.11    윤민우        최초작성
 */
@Service("adCalculateService")
public class AdCalculateServiceImpl implements AdCalculateService {

	@Autowired
	private AdCalculateDao adCalculateDao;
	
	@Autowired
    private OdOrderCommService odService;

	@Override
	public NexacroResult selectCalculateList(Map<String, String> searchMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        searchMap.put("SES_ID", odComm.getSessionId() );
        String strStart = searchMap.get("TOTAL_COUNT");
        int totalCount;

        if(strStart.equals("-1"))
        {
            totalCount = adCalculateDao.selectCalculateListCount(searchMap);
            result.addVariable( "totalCount", totalCount);
            searchMap.put("TOTAL_COUNT",String.valueOf(totalCount));
        }

        List<Map<String, Object>> list = adCalculateDao.selectCalculateList(searchMap);

        result.addDataSet("ds_output1", list);
        result.addDataSet("ds_output2", searchMap);

        return result;
	}

	@Override
	public NexacroResult selectNoCalculateList(Map<String, String> searchMap,OdOrderComm odComm) throws Exception {
		NexacroResult result = new NexacroResult();

		searchMap.put("SES_ID", odComm.getSessionId() );
        String strStart = searchMap.get("TOTAL_COUNT");
        int totalCount;


        if(strStart.equals("-1"))
        {
        	totalCount = adCalculateDao.selectNoCalculateListCount(searchMap);
			result.addVariable( "totalCount", totalCount);
	        searchMap.put("TOTAL_COUNT",String.valueOf(totalCount));

        }

        List<Map<String, Object>> list = adCalculateDao.selectNoCalculateList(searchMap);


        result.addDataSet("ds_output1", list);
        result.addDataSet("ds_output2", searchMap);

        return result;
	}
}
