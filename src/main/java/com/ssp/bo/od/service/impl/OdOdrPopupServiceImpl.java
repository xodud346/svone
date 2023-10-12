package com.ssp.bo.od.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.od.dao.OdOrderPopupDao;
import com.ssp.bo.od.service.OdOdrPopupService;
import com.ssp.core.od.service.OdOrderCommService;
import com.ssp.core.od.utils.OU;


/**
 * <pre>
 * @title 주문번호
 * @package com.ssp.bo.od.service.impl
 * </pre>
 *
 * @author neonlee
 * @since 2022. 03. 04.
 * @version 1.0
 * @see OdOdrPopupServiceImpl
 * =================== 변경 내역 ==================
 * 날짜           변경자     내용
 * ------------------------------------------------
 */

@Service("odOdrPopupServiceImpl")
public class OdOdrPopupServiceImpl implements OdOdrPopupService {

    @Autowired
    private OdOrderPopupDao odOdrPopupDao;


    @Autowired
    private OdOrderCommService odService;

    @Override
    public NexacroResult selectOdrNumberList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        int totalCount;

        List<Map<String, Object>> list = odOdrPopupDao.selectOdrNumberList(searchMap);
        totalCount = list.size();
        result.addVariable( "totalCount", totalCount);
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectOdrNumberCount(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        int count = odOdrPopupDao.selectOdrNumberCount(searchMap);

        result.addDataSet("ds_output1", null);
        result.addVariable("totalCount", count);

        return result;
    }

    @Override
    public NexacroResult insertOdrInqTgtBatch(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        int insertCount = 0;
        List<Map<String, Object>> list = OU.newList();

        for (Map<String, Object> data : commandMap) {
            data.put("SES_ID", odComm.getSessionId() );
            data.put("REGPSN_ID", odComm.getSession().get("REGPSN_ID") );

            insertCount++;

            data = odService.changeToCamel(data,false);
            list.add(data);
        }

        odService.insertOdrInqTgtBatch(list);
        result.addDataSet("ds_output1", null);
        result.addVariable("insertCount", insertCount);

        return result;
    }

    @Override
    public NexacroResult deleteOdrInqTgtDtls(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        int insertCount = 0;

        Map<String, Object> delData = commandMap.get(0);
        delData.put("SES_ID", odComm.getSessionId() );

        delData = odService.changeToCamel(delData,false);

        odService.deleteOdrInqTgtDtls(delData);
        result.addDataSet("ds_output1", null);
        result.addVariable("insertCount", insertCount);

        return result;
    }

    @Override
    public NexacroResult selectOrdNumberCount(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        int count = odOdrPopupDao.selectOrdNumberCount(searchMap);

        result.addDataSet("ds_output1", null);
        result.addVariable("totalCount", count);

        return result;
    }

    @Override
    public NexacroResult selectOrdNumberList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        int totalCount;
        List<Map<String, Object>> list = odOdrPopupDao.selectOrdNumberList(searchMap);
        totalCount = list.size();
        result.addVariable( "totalCount", totalCount);
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectOdrPsnCount(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        int count = odOdrPopupDao.selectOdrPsnCount(searchMap);

        result.addDataSet("ds_output1", null);
        result.addVariable("totalCount", count);

        return result;
    }

    @Override
    public NexacroResult selectOdrPsnList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        int totalCount;
        List<Map<String, Object>> list = odOdrPopupDao.selectOdrPsnList(searchMap);
        totalCount = list.size();
        result.addVariable( "totalCount", totalCount);
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectOdrPlntCount(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        int count = odOdrPopupDao.selectOdrPlntCount(searchMap);

        result.addDataSet("ds_output1", null);
        result.addVariable("totalCount", count);

        return result;
    }

    @Override
    public NexacroResult selectOdrPlntList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        int totalCount;
        String strStart = searchMap.get("TOTAL_COUNT");
        if("-1".equals(strStart))
        {
            totalCount = odOdrPopupDao.selectOdrPlntCount(searchMap);
            result.addVariable( "totalCount", totalCount);
            searchMap.put("TOTAL_COUNT",String.valueOf(totalCount));
        }

        List<Map<String, Object>> list = odOdrPopupDao.selectOdrPlntList(searchMap);
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectChgItmGrpCount(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        int count = odOdrPopupDao.selectChgItmGrpCount(searchMap);

        result.addDataSet("ds_output1", null);
        result.addVariable("totalCount", count);

        return result;
    }

    @Override
    public NexacroResult selectChgItmGrpList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> list = odOdrPopupDao.selectChgItmGrpList(searchMap);

        result.addDataSet("ds_output1", list);

        return result;
    }


    // 공통코드 조회 테스트
    @Override
    public NexacroResult selectCommonCodeList(List<Map<String, String>> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        List<String> searchList = new ArrayList<String>();
        String str = new String("");
        for (Map<String, String> data : searchMap) {
            searchList.add(data.get("COM_CLSF_CD"));
            str = str + data.get("COM_CLSF_CD")+"-";
            if(data.get("IS_TOTAL")==null)
                str = str + "N,";
            else
                str = str + data.get("IS_TOTAL") + ",";
        }

        //List<Map<String, Object>> list = odOdrPopupDao.selectCommonCodeList(searchList);
        List<Map<String, Object>> list = odOdrPopupDao.selectCommonCodeMulti(str);
        result.addDataSet("ds_output1", list);

        return result;
    }

    // 배송지 목록 조회
    @Override
    public NexacroResult selectDlvplcList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        List<Map<String, Object>> list = odOdrPopupDao.selectDlvplcList(searchMap);
        result.addDataSet("ds_output2", list);

        return result;
    }

    @Override
    public NexacroResult selectOdrBzcrdPrdInfo(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        List<Map<String, Object>> list = odOdrPopupDao.selectOdrBzcrdPrdInfo(searchMap);
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectCostTrnsfDeptList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        int totalCount;
        String strStart = searchMap.get("TOTAL_COUNT");
        if("-1".equals(strStart))
        {
            totalCount = odOdrPopupDao.selectCostTrnsfDeptCount(searchMap);
            result.addVariable( "totalCount", totalCount);
            searchMap.put("TOTAL_COUNT",String.valueOf(totalCount));
        }

        List<Map<String, Object>> list = odOdrPopupDao.selectCostTrnsfDeptList(searchMap);
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectCostTrnsfDeptAcctList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        int totalCount;
        String strStart = searchMap.get("TOTAL_COUNT");
        if("-1".equals(strStart))
        {
            totalCount = odOdrPopupDao.selectCostTrnsfDeptAcctCount(searchMap);
            result.addVariable( "totalCount", totalCount);
            searchMap.put("TOTAL_COUNT",String.valueOf(totalCount));
        }

        List<Map<String, Object>> list = odOdrPopupDao.selectCostTrnsfDeptAcctList(searchMap);
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectBlngDeptList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        int totalCount;
        String strStart = searchMap.get("TOTAL_COUNT");
        if("-1".equals(strStart))
        {
            totalCount = odOdrPopupDao.selectBlngDeptCount(searchMap);
            result.addVariable( "totalCount", totalCount);
            searchMap.put("TOTAL_COUNT",String.valueOf(totalCount));
        }

        List<Map<String, Object>> list = odOdrPopupDao.selectBlngDeptList(searchMap);
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectEmailSentHstList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        int totalCount;
        String strStart = searchMap.get("TOTAL_COUNT");
        if("-1".equals(strStart))
        {
            totalCount = odOdrPopupDao.selectEmailSentHstListCount(searchMap);
            result.addVariable( "totalCount", totalCount);
            searchMap.put("TOTAL_COUNT",String.valueOf(totalCount));
        }

        List<Map<String, Object>> list = odOdrPopupDao.selectEmailSentHstList(searchMap);
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectColumnList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> list = odOdrPopupDao.selectColumnList(searchMap);

        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectExcelUpldDtlsHstList(Map<String, String> searchMap, OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap.put("SES_ID", odComm.getSessionId());
        List<Map<String, Object>> list = odOdrPopupDao.selectExcelUpldDtlsHstList(searchMap);

        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectOprtrList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        int totalCount;
        String strStart = searchMap.get("TOTAL_COUNT");
        if("-1".equals(strStart))
        {
            totalCount = odOdrPopupDao.selectOprtrListCount(searchMap);
            result.addVariable( "totalCount", totalCount);
            searchMap.put("TOTAL_COUNT",String.valueOf(totalCount));
        }

        List<Map<String, Object>> list = odOdrPopupDao.selectOprtrList(searchMap);
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectMDOprtrList(Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        int totalCount;
        String strStart = searchMap.get("TOTAL_COUNT");
        if("-1".equals(strStart))
        {
            totalCount = odOdrPopupDao.selectMDOprtrListCount(searchMap);
            result.addVariable( "totalCount", totalCount);
            searchMap.put("TOTAL_COUNT",String.valueOf(totalCount));
        }

        List<Map<String, Object>> list = odOdrPopupDao.selectMDOprtrList(searchMap);
        result.addDataSet("ds_output1", list);

        return result;
    }


    /*
    @Override
    public NexacroResult insertReportItemToSession(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        int insertCount = 0;
        List<Map<String, Object>> list = OU.newList();
        List<Map<String, Object>> rtnList = OU.newList();
        Map<String, Object> rtnMap = OU.newMap();

        for (Map<String, Object> data : commandMap) {
            data.put("SES_ID", odComm.getSessionId() );
            data.put("REGPSN_ID", odComm.getSession().get("REGPSN_ID") );

            if(insertCount==0)  {
                rtnMap.putAll(data);
            }
            data = odService.changeToCamel(data,false);
            list.add(data);

            //if(insertCount==0)  {
            //    rtnMap.putAll(odService.selectReportUrl(data));
            //}
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
    */

    /*
    @Override
    public NexacroResult selectReportId(Map<String, Object> commandMap, OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> rtnList = OU.newList();
        Map<String, Object> rtnMap = OU.newMap();

        commandMap = odService.changeToCamel(commandMap,false);
        rtnMap.putAll(odService.selectReportUrl(commandMap));
        rtnMap.put("SES_ID", odComm.getSessionId());
        rtnList.add(rtnMap);
        result.addDataSet("ds_output1", rtnList);
        return result;
    }
    */
}
