package com.ssp.bo.od.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.od.dao.OdOrderListDao;
import com.ssp.bo.od.service.OdOderListService;
import com.ssp.core.od.dao.OdOrderCommDao;
import com.ssp.core.od.service.OdOrderCommService;
import com.ssp.core.od.utils.OU;

/**
 * <pre>
 * @title 주문목록
 * @package com.ssp.bo.od.service.impl
 * </pre>
 *
 * @author neonlee
 * @since 2022. 03. 15.
 * @version 1.0
 * @see OdOderListServiceImpl
 * =================== 변경 내역 ==================
 * 날짜           변경자     내용
 * ------------------------------------------------
 */

@Service("odOderListServiceImpl")
public class OdOderListServiceImpl implements OdOderListService {

    @Autowired
    private OdOrderListDao odOderListDao;

    @Autowired
    private OdOrderCommDao comDao;

    @Autowired
    private OdOrderCommService odService;


    @Override
    public NexacroResult selectOrderList(Map<String, String> searchMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        searchMap.put("SES_ID", odComm.getSessionId() );
        String strStart = searchMap.get("TOTAL_COUNT");
        int totalCount;

        if("-1".equals(strStart))
        {
            totalCount = odOderListDao.selectOrderCount(searchMap);
            result.addVariable( "totalCount", totalCount);
            searchMap.put("TOTAL_COUNT",String.valueOf(totalCount));
        }
        
        List<Map<String, Object>> list = odOderListDao.selectOrderList(searchMap);
        // 리턴값 set
        result.addDataSet("ds_output1", list);
        result.addDataSet("ds_output2", searchMap);

        return result;
    }

    @Override
    public NexacroResult selectOderDetailList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        List<Map<String, Object>> list = odOderListDao.selectOderDetailList(searchMap);

        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectCustOderInfo(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        List<Map<String, Object>> list1 = odOderListDao.selectCustOderInfo(searchMap);
        List<Map<String, Object>> list2 = odOderListDao.selectCustOderInfoRefCodeList(searchMap);
        List<Map<String, Object>> list3 = odOderListDao.selectCustOderInfoInstanceCodeList(searchMap);
        List<Map<String, Object>> list4 = comDao.selectOrderItemGroupList(searchMap);

        result.addDataSet("ds_output1", list1);
        result.addDataSet("ds_output2", list2);
        result.addDataSet("ds_output3", list3);
        result.addDataSet("ds_output4", list4);

        return result;
    }

    @Override
    public NexacroResult selectApprOrdInfo(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        List<Map<String, Object>> list1 = odOderListDao.selectApprInfo(searchMap);
        List<Map<String, Object>> list2 = odOderListDao.selectOrdInfo(searchMap);
        List<Map<String, Object>> list3 = comDao.selectOrderItemGroupList(searchMap);

        result.addDataSet("ds_output1", list1);
        result.addDataSet("ds_output2", list2);
        result.addDataSet("ds_output3", list3);

        return result;
    }

    @Override
    public NexacroResult selectChgHstList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        List<Map<String, Object>> list = odOderListDao.selectChgHstList(searchMap);

        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectSalsInfoList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        List<Map<String, Object>> list = odOderListDao.selectSalsInfoList(searchMap);
        List<Map<String, Object>> list02 = odOderListDao.selectSalsInfoList02(searchMap);
        List<Map<String, Object>> list03 = odOderListDao.selectSalsInfoList03(searchMap);

        result.addDataSet("ds_output1", list);
        result.addDataSet("ds_output2", list02);
        result.addDataSet("ds_output3", list03);

        return result;
    }

    @Override
    public NexacroResult selectSalsInfoList04(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        List<Map<String, Object>> list = odOderListDao.selectSalsInfoList04(searchMap);

        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectDlvInfo(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        List<Map<String, Object>> list1 = odOderListDao.selectDlvInfo(searchMap);
        List<Map<String, Object>> list2 = odOderListDao.selectDlvProcInfo(searchMap);
        List<Map<String, Object>> list3 = odOderListDao.selectDlvSrvonInfo(searchMap);
        List<Map<String, Object>> list4 = odOderListDao.selectDlvHdvInfo(searchMap);

        result.addDataSet("ds_output1", list1);
        result.addDataSet("ds_output2", list2);
        result.addDataSet("ds_output3", list3);
        result.addDataSet("ds_output4", list4);

        return result;
    }

    @Override
    public NexacroResult selectAdjInfo(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        List<Map<String, Object>> list1 = odOderListDao.selectAdjInfo(searchMap);
        List<Map<String, Object>> list2 = odOderListDao.selectAdjGiVerfInfo(searchMap);
        List<Map<String, Object>> list3 = odOderListDao.selectAdjCustVerfInfo(searchMap);

        result.addDataSet("ds_output1", list1);
        result.addDataSet("ds_output2", list2);
        result.addDataSet("ds_output3", list3);

        return result;
    }

    @Override
    public NexacroResult selectSndRcvList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        List<Map<String, Object>> list = odOderListDao.selectSndRcvList(searchMap);

        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectSndRcvList2(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        List<Map<String, Object>> list = odOderListDao.selectSndRcvList2(searchMap);
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectQtyDstrList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        List<Map<String, Object>> list1 = odOderListDao.selectQtyDstrList(searchMap);
        List<Map<String, Object>> list2 = odOderListDao.selectDvdpayList(searchMap);

        result.addDataSet("ds_output1", list1);
        result.addDataSet("ds_output2", list2);

        return result;
    }

    @Override
    public NexacroResult selectDvdpayList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        List<Map<String, Object>> list = odOderListDao.selectDvdpayList(searchMap);

        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectExcProcList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        List<Map<String, Object>> list = odOderListDao.selectExcProcList(searchMap);

        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectExcProcVocDlvInfo(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        List<Map<String, Object>> list1 = odOderListDao.selectExcProcVocDlv01Info(searchMap);
        List<Map<String, Object>> list2 = odOderListDao.selectExcProcVocDlv02Info(searchMap);

        result.addDataSet("ds_output1", list1);
        result.addDataSet("ds_output2", list2);

        return result;
    }

    @Override
    public NexacroResult selectOdrInfo(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        List<Map<String, Object>> list1 = odOderListDao.selectOdrInfo(searchMap);
        List<Map<String, Object>> list2 = odOderListDao.selectOdrInfoAttFile(searchMap);

        result.addDataSet("ds_output1", list1);
        result.addDataSet("ds_output2", list2);

        return result;
    }

    @Override
    public NexacroResult selectMbrList(Map<String, String> searchMap, OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        searchMap.put("SES_ID", odComm.getSessionId() );
        String strStart = searchMap.get("TOTAL_COUNT");
        int totalCount;

        if("-1".equals(strStart))
        {
            totalCount = odOderListDao.selectMbrListCount(searchMap);
            result.addVariable( "totalCount", totalCount);
            searchMap.put("TOTAL_COUNT",String.valueOf(totalCount));
        }
        List<Map<String, Object>> list = odOderListDao.selectMbrList(searchMap);
        // 리턴값 set
        result.addDataSet("ds_output1", list);
        result.addDataSet("ds_output2", searchMap);

        return result;
    }

    @Override
    public NexacroResult conHstList(Map<String, String> searchMap, OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        searchMap.put("SES_ID", odComm.getSessionId() );
        String strStart = searchMap.get("TOTAL_COUNT");
        int totalCount;

        if("-1".equals(strStart))
        {
            totalCount = odOderListDao.conHstListCount(searchMap);
            result.addVariable( "totalCount", totalCount);
            searchMap.put("TOTAL_COUNT",String.valueOf(totalCount));
        }
        List<Map<String, Object>> list = odOderListDao.conHstList(searchMap);
        // 리턴값 set
        result.addDataSet("ds_output1", list);
        result.addDataSet("ds_output2", searchMap);

        return result;
    }

    /* 주문조회 오즈리포트 ID 조회 */
    @Override
    public NexacroResult selectReportId(Map<String, Object> commandMap, OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> rtnList = OU.newList();
        Map<String, Object> rtnMap = OU.newMap();
        commandMap = odService.setLangCd(commandMap);

        commandMap = odService.changeToCamel(commandMap,false);
        rtnMap.putAll(odService.selectReportUrl(commandMap));
        rtnMap.put("SES_ID", odComm.getSessionId());
        rtnList.add(rtnMap);
        result.addDataSet("ds_output1", rtnList);
        return result;
    }

    /* 주문조회 오즈리포트 insert 동작 이전에 동일한 데이터 삭제 */
    @Override
    public NexacroResult deleteOdrInqTgtDtls(List<Map<String, Object>> commandMap, OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        //int insertCount = 0;

        Map<String, Object> delData = commandMap.get(0);
        delData.put("SES_ID", odComm.getSessionId());
        delData = odService.setLangCd(delData);

        delData = odService.changeToCamel(delData,false);

        odService.deleteOdrInqTgtDtls(delData);
        result.addDataSet("ds_output1", null);
        //result.addVariable("insertCount", insertCount);

        return result;
    }

    /* 주문조회 오즈리포트 조회대상 주문번호 insert */
    @Override
    public NexacroResult insertReportItemToSession(List<Map<String, Object>> commandMap, OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        int insertCount = 0;
        List<Map<String, Object>> list = OU.newList();
        List<Map<String, Object>> rtnList = OU.newList();
        Map<String, Object> rtnMap = OU.newMap();

        for (Map<String, Object> data : commandMap) {
            data.put("SES_ID", odComm.getSessionId() );
            data.put("REGPSN_ID", odComm.getSession().get("REGPSN_ID") );
            data = odService.setLangCd(data);

            if(insertCount==0)  {
                rtnMap.putAll(data);
            }
            data = odService.changeToCamel(data,false);
            list.add(data);

            insertCount++;
        }

        odService.insertOdrInqTgtBatch(list);
        Map<String, Object> dataMap = OU.newMap();
        dataMap = list.get(0);
        dataMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD"));
        int oprUnitIdCount = odService.selectOprUnitIdCount(dataMap);

        rtnList.add(rtnMap);
        result.addDataSet("ds_output1", rtnList);
        result.addVariable("insertCount", insertCount);
        result.addVariable("oprUnitIdCount", oprUnitIdCount);

        return result;
    }

    @Override
    public NexacroResult selectSndRcvInfoList(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCd(searchMap);
        searchMap.put("SES_ID", odComm.getSessionId() );
        String strStart = OU.asS(searchMap.get("TOTAL_COUNT"));
        int totalCount;

        if("-1".equals(strStart))
        {
            totalCount = odOderListDao.selectSndRcvInfoListCount(searchMap);
            result.addVariable( "totalCount", totalCount);
            searchMap.put("TOTAL_COUNT",String.valueOf(totalCount));
        }
        List<Map<String, Object>> list = odOderListDao.selectSndRcvInfoList(searchMap);
        // 리턴값 set
        result.addDataSet("ds_output1", list);
        result.addDataSet("ds_output2", searchMap);

        return result;
    }

    @Override
    public NexacroResult selectSndRcvInfoList2(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap = odService.setLangCdWithString(searchMap);
        List<Map<String, Object>> list = odOderListDao.selectSndRcvInfoList2(searchMap);
        result.addDataSet("ds_output1", list);

        return result;
    }


}
