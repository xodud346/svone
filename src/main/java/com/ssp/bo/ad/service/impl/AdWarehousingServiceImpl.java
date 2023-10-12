package com.ssp.bo.ad.service.impl;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.ad.dao.AdWarehousingDao;
import com.ssp.bo.ad.service.AdWarehousingService;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.core.od.dto.GiDcnInfo;
import com.ssp.core.od.exceptions.OdBizException;
import com.ssp.core.od.service.OdOdrGiDcnTransService;
import com.ssp.core.od.utils.OU;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  입고 관리
 * @package com.ssp.bo.ad.service.impl
 * <pre>
 * @author  윤민우
 * @since   2022.03.11
 * @version 1.0
 * @see AdWarehousingServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.11    윤민우        최초작성a
 */
@Service("adWarehousingService")
public class AdWarehousingServiceImpl implements AdWarehousingService {

	@Autowired
	private AdWarehousingDao adWarehousingDao;

	@Autowired
	private OdOdrGiDcnTransService odOdrGiDcnTransService;

	@Override
	public NexacroResult selectComCdList(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

        List<Map<String, Object>> comCdList = adWarehousingDao.selectComCdList(searchMap);
        result.addDataSet("comCdList", comCdList);

        return result;
	}

	@Override
	public NexacroResult selectWarehousingList(Map<String, String> searchMap,OdOrderComm odComm) throws Exception {
		NexacroResult result = new NexacroResult();

		searchMap.put("SES_ID", odComm.getSessionId() );
        String strStart = searchMap.get("TOTAL_COUNT");
        int totalCount;


        if(strStart.equals("-1"))
        {
        	totalCount = adWarehousingDao.selectWarehousingListCount(searchMap);
			result.addVariable( "totalCount", totalCount);
	        searchMap.put("TOTAL_COUNT",String.valueOf(totalCount));

        } else {
        }

        List<Map<String, Object>> list = adWarehousingDao.selectWarehousingList(searchMap);


        result.addDataSet("ds_output1", list);
        result.addDataSet("ds_output2", searchMap);

        return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : updateWarehousingFinish
	 * 2. ClassName  : AdWarehousingServiceImpl
	 * 3. Comment    : 재고관리 입고처리 완료 저장
	 * 4. 작성자       : 윤민우
	 * 5. 작성일       : 2022.03.18
	 * </pre>
     */
	@Override
    public NexacroResult updateWarehousingFinish(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        int rtn = 0;
        String rtnCd = "";
        String rtnMsg = "";
        String strLoginId = "";
        strLoginId = (String) odComm.getSession().get("OPRTR_ID");

        List<GiDcnInfo> gdiList = OU.newList();

        Date date_now = new Date(System.currentTimeMillis()); // 현재시간을 가져와 Date형으로 저장한다
		// 년월일시분초 14자리 포멧
		SimpleDateFormat fourteen_format = new SimpleDateFormat("yyyyMMddHHmmss");
		String strNowTime = fourteen_format.format(date_now);

		for ( Map<String, Object> map : commandMap) {

		    map.put("GDPSN_ID", strLoginId);
			adWarehousingDao.callWarehousingFinish(map); // 프로시저 실행

			rtnCd = (String)map.get("RTN_CD");		// S 성공, F 오류
            rtnMsg = (String)map.get("RTN_MSG");

			//다건중 1개라도 오류시 전체 롤백
			if (!"S".equals(rtnCd)) {
				throw new OdBizException(rtnMsg); //오류 처리
			}

            if ("S".equals(rtnCd)) {
            	rtn++;

            	GiDcnInfo giDcnInfo = new GiDcnInfo();

            	giDcnInfo.setCO_CD(StringUtil.getString(map.get("CO_CD")));
            	giDcnInfo.setBZPLC_ID(StringUtil.getString(map.get("BZPLC_ID")));
            	giDcnInfo.setODR_NO(StringUtil.getString(map.get("ODR_NO")));
            	giDcnInfo.setODR_ITM_NO(StringUtil.getString(map.get("ODR_ITM_NO")));
            	giDcnInfo.setGI_QTY(StringUtil.getString(map.get("ODR_QTY")));
            	giDcnInfo.setGDPSN_ID(strLoginId);
            	giDcnInfo.setGI_DTM(strNowTime);
            	giDcnInfo.setGI_DCN_DT(StringUtil.getString(map.get("GI_DCN_DT")));
            	giDcnInfo.setGI_MEMO_CTS("");
            	giDcnInfo.setREGPSN_ID(strLoginId);
            	giDcnInfo.setREG_DTM(strNowTime);
            	giDcnInfo.setUPDPSN_ID(strLoginId);
            	giDcnInfo.setUPD_DTM(strNowTime);

            	gdiList.add(giDcnInfo);

            }
		}

		odOdrGiDcnTransService.transGiDcnInfo(gdiList);

		result.addVariable("rtn", rtn);
        return result;
    }

}
