package com.ssp.bo.ad.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.ad.dao.AdCalPopupDao;
import com.ssp.bo.ad.service.AdCalPopupService;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.core.od.exceptions.OdBizException;
import com.ssp.core.od.utils.OU;

/**
 * <pre>
 * @title  정산 관리 - 정산 대사 팝업
 * @package com.ssp.bo.ad.service.impl
 * <pre>
 * @author  윤민우
 * @since   2022.04.04
 * @version 1.0
 * @see AdCalPopupServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.04.04    윤민우        최초작성
 */
@Service("adCalPopupService")
public class AdCalPopupServiceImpl implements AdCalPopupService {

    @Autowired
    private AdCalPopupDao adCalPopupDao;

    /**
     * <pre>
     * 1. MethodName : selectCalCxlList
     * 2. ClassName  : AdCalPopupServiceImpl
     * 3. Comment    : 정산 확인취소 목록 조회
     * 4. 작성자       : 윤민우
     * 5. 작성일       : 2022.04.04
     * </pre>
     */
    @Override
    public NexacroResult selectCalCxlList(Map<String, String> searchMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap.put("SES_ID", odComm.getSessionId() );
        List<Map<String, Object>> list = adCalPopupDao.selectCalCxlList(searchMap);
        // 리턴값 set
        result.addDataSet("ds_output1", list);
        result.addDataSet("ds_output2", searchMap);

        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectCalHistoryList
     * 2. ClassName  : AdCalPopupServiceImpl
     * 3. Comment    : 정산 이력 목록 조회
     * 4. 작성자       : 윤민우
     * 5. 작성일       : 2022.04.06
     * </pre>
     */
    @Override
    public NexacroResult selectCalHistoryList(Map<String, String> searchMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();

        searchMap.put("SES_ID", odComm.getSessionId() );
        String strStart = searchMap.get("TOTAL_COUNT");
        int totalCount = 0;

        if(strStart.equals("-1"))
        {
            totalCount = adCalPopupDao.selectCalHistoryListCount(searchMap);
            result.addVariable( "totalCount", totalCount);
            searchMap.put("TOTAL_COUNT",String.valueOf(totalCount));
        }

        List<Map<String, Object>> list = adCalPopupDao.selectCalHistoryList(searchMap);
        // 리턴값 set
        result.addDataSet("ds_output1", list);
        result.addDataSet("ds_output2", searchMap);

        return result;
    }

    public NexacroResult saveCalCxlList(List<Map<String, Object>> list,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> listReturn = new ArrayList<Map<String, Object>>();
        Map<String, Object> rMap;
        for (Map<String, Object> data : list) {
            data.put("SES_ID", odComm.getSessionId() );
            data.put("loginId", OU.asS(odComm.getSession().get("OPRTR_ID")));
            rMap = adCalPopupDao.saveCalCxlList(data);
            String strRtnCd = OU.asS(rMap.get("RTN_CD"));

            if(strRtnCd.equals("E"))    {
                throw new OdBizException(OU.asS(rMap.get("RTN_MSG")));
            }
            listReturn.add(rMap);
        }
        result.addDataSet("ds_output1", listReturn);
        return result;
    }
}
