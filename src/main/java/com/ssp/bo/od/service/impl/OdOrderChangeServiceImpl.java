package com.ssp.bo.od.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.od.dao.OdOrderChangeDao;
import com.ssp.bo.od.service.OdOrderChangeService;
import com.ssp.core.od.exceptions.OdBizException;
import com.ssp.core.od.service.OdExecuteBatchService;
import com.ssp.core.od.service.OdOrderCommService;
import com.ssp.core.od.utils.OU;


@Service("odOrderChangeServiceImpl")
public class OdOrderChangeServiceImpl implements OdOrderChangeService {
    protected final Logger log = LoggerFactory.getLogger(OdOrderChangeServiceImpl.class);

    @Autowired
    private OdOrderChangeDao daoChange;

    @Autowired
    private OdOrderCommService orderComm;

    @Autowired
    private OdExecuteBatchService odExecuteBatch;

    @Override
    public NexacroResult selectOrderChangeList(Map<String, String> searchMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap.put("SES_ID", odComm.getSessionId() );
        String strStart = searchMap.get("TOTAL_COUNT");
        int totalCount;

        if("-1".equals(strStart))
        {
            totalCount = daoChange.selectChangeCount(searchMap);
            result.addVariable( "totalCount", totalCount);
            searchMap.put("TOTAL_COUNT",String.valueOf(totalCount));
        }
        List<Map<String, Object>> list = daoChange.selectChangeList(searchMap);
        // 리턴값 set
        result.addDataSet("ds_output1", list);
        result.addDataSet("ds_output2", searchMap);

        return result;
    }

    public NexacroResult selectOrderChangeDetail(Map<String, String> searchMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap.put("SES_ID", odComm.getSessionId() );
        List<Map<String, Object>> list = daoChange.selectOrderChangeDetail(searchMap);
        // 리턴값 set
        result.addDataSet("ds_output1", list);

        return result;
    }

    public NexacroResult selectMbrPopup(Map<String, Object> searchMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap.put("SES_ID", odComm.getSessionId() );
        String strGb = OU.asS(searchMap.get("GB"));
        List<Map<String, Object>> list = daoChange.selectMbrPopup(searchMap,strGb);
        // 리턴값 set
        result.addDataSet("ds_output1", list);

        return result;
    }

    public NexacroResult selectMbrPopupMbrList(Map<String, Object> searchMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap.put("SES_ID", odComm.getSessionId() );
        String strGb = OU.asS(searchMap.get("GB"));
        List<Map<String, Object>> list = daoChange.selectMbrPopupMbrList(searchMap,strGb);
        // 리턴값 set
        result.addDataSet("ds_output1", list);

        return result;
    }

    public NexacroResult selectRefCdPopupList(Map<String, Object> searchMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap.put("SES_ID", odComm.getSessionId() );
        List<Map<String, Object>> list = daoChange.selectRefCdPopupList(searchMap);
        // 리턴값 set
        result.addDataSet("ds_output1", list);
        result.addVariable("totalCount", String.valueOf(list.size()));

        return result;
    }

    public NexacroResult selectDstrPathPopup(Map<String, Object> searchMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap.put("SES_ID", odComm.getSessionId() );
        List<Map<String, Object>> list = daoChange.selectDstrPathPopup(searchMap);
        // 리턴값 set
        result.addDataSet("ds_output1", list);

        return result;
    }

    public NexacroResult saveOrderDetail(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        Map<String, Object> returnMap = OU.newMap();
        List<Map<String, Object>> listReturn = new ArrayList<Map<String, Object>>();

        for (Map<String, Object> data : commandMap) {
            returnMap = orderComm.saveOrderDetailMap(data, returnMap, odComm.getSessionId(), OU.asS(odComm.getSession().get("OPRTR_ID")));
            listReturn.add(returnMap);
        }
        result.addDataSet("ds_output1", listReturn);
        return result;
    }

    public NexacroResult sendApprEmailInfo(Map<String, Object> commandMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();

        commandMap.put("loginId", OU.asS(odComm.getSession().get("REGPSN_ID")));
        List<Map<String, Object>> listReturn = new ArrayList<Map<String, Object>>();
        Map<String, Object> rData = orderComm.sendEmailToAprvOrOrder(commandMap);

        Logger log = LoggerFactory.getLogger(OdOrderChangeServiceImpl.class);
        log.info("rData is " + rData);

        listReturn.add(rData);
        result.addDataSet("ds_output1", listReturn);
        return result;
    }

    public NexacroResult saveOrderDetailAprvInfo(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("ds_output1", orderComm.saveOrderDetailAprv(commandMap, OU.asS(odComm.getSession().get("OPRTR_ID"))));
        return result;
    }

    public NexacroResult saveOrderDetailAprvOdr(List<Map<String, Object>> commandMap,List<Map<String, Object>> commandMap2,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();

        result.addDataSet("ds_output1", orderComm.saveOrderDetailAprv(commandMap, OU.asS(odComm.getSession().get("OPRTR_ID"))));
        result.addDataSet("ds_output2", orderComm.saveOrderDetailAprv(commandMap2, OU.asS(odComm.getSession().get("OPRTR_ID"))));
        return result;
    }

    public NexacroResult insertnselectOrderDoc(Map<String, Object> searchMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap.put("SES_ID", odComm.getSessionId() );

        daoChange.selectOrderDocOprUnit(searchMap);
        /*SSP-2458.성진우.주발배.주문전체거래명세서조회 조건값 저장 로직 변경*/
         
        /*_TMP 조건 값 삭제*/
        Map<String, Object> delData = searchMap;
        delData.put("SES_ID", odComm.getSessionId() );
        delData = orderComm.changeToCamel(delData,false);
        delData.put("inqCondDtls", searchMap.get("INQ_COND_DTLS")+"_TMP");
        orderComm.deleteOdrInqTgtDtls(delData);

        /*_TMP 조건 값 삽입*/
        daoChange.insertOrderDoc(searchMap);
        
        /* 기존 조회조건 삭제*/
        delData.put("inqCondDtls", searchMap.get("INQ_COND_DTLS"));
        orderComm.deleteOdrInqTgtDtls(delData);
 
        /* _TMP 기준(화면상 조회된 값)으로 데이터 셋이 넣기 <-> 단순 조회조건에 있는 값 기준 */
        List<Map<String, Object>> list = daoChange.selectOrderDoc(searchMap);
        // 리턴값 set
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectChgCtlItmGrpCdList(Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> list = daoChange.selectChgCtlItmGrpCdList(searchMap);
        // 리턴값 set
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectChgCtlItmGrpAuthList(Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> list = daoChange.selectChgCtlItmGrpAuthList(searchMap);
        // 리턴값 set
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectChgCtlItmGrpDtlList(Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> list = daoChange.selectChgCtlItmGrpDtlList(searchMap);
        // 리턴값 set
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectChgCtlItmGrpAuthAndDtlList(Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> list2 = daoChange.selectChgCtlItmGrpAuthList(searchMap);
        List<Map<String, Object>> list3 = daoChange.selectChgCtlItmGrpDtlList(searchMap);
        // 리턴값 set
        result.addDataSet("ds_output2", list2);
        result.addDataSet("ds_output3", list3);

        return result;
    }

    @Override
    public NexacroResult saveChgCtlItmGrpCd(List<Map<String, Object>> commandMap, OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> list = updateChgCtlItmGrpCd(commandMap, odComm);

        // 리턴값 set
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult saveChgCtlItmGrpAuthInfo(List<Map<String, Object>> commandMap, OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> list = saveAndUpdateChgCtlItmGrpAuthInfo(commandMap, odComm);

        // 리턴값 set
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult saveChgCtlItmGrpDtl(List<Map<String, Object>> commandMap, OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> list = updateChgCtlItmGrpDtl(commandMap, odComm);

        // 리턴값 set
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult saveChgCtlItmGrpAuthAndDtl(List<Map<String, Object>> commandMap1, List<Map<String, Object>> commandMap2, OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> list1 = new ArrayList<Map<String, Object>>();
        List<Map<String, Object>> list2 = new ArrayList<Map<String, Object>>();

        // 권한 저장
        list1 = saveAndUpdateChgCtlItmGrpAuthInfo(commandMap1, odComm);
        // 상세 저장
        list2 = updateChgCtlItmGrpDtl(commandMap2, odComm);

        result.addDataSet("ds_output2", list1);
        result.addDataSet("ds_output3", list2);
        return result;
    }

    @Override
    public NexacroResult saveChgCtlItmGrpCdAndDtl(List<Map<String, Object>> commandMap1, List<Map<String, Object>> commandMap2, OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> list1 = new ArrayList<Map<String, Object>>();
        List<Map<String, Object>> list3 = new ArrayList<Map<String, Object>>();

        // 목록 저장
        list1 = updateChgCtlItmGrpCd(commandMap1, odComm);
        // 상세 저장
        list3 = updateChgCtlItmGrpDtl(commandMap2, odComm);

        result.addDataSet("ds_output1", list1);
        result.addDataSet("ds_output3", list3);
        return result;
    }

    @Override
    public NexacroResult saveChgCtlItmGrpCdAndAuth(List<Map<String, Object>> commandMap1, List<Map<String, Object>> commandMap2, OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> list1 = new ArrayList<Map<String, Object>>();
        List<Map<String, Object>> list2 = new ArrayList<Map<String, Object>>();

        // 목록 저장
        list1 = updateChgCtlItmGrpCd(commandMap1, odComm);
        // 권한 저장
        list2 = saveAndUpdateChgCtlItmGrpAuthInfo(commandMap2, odComm);

        result.addDataSet("ds_output1", list1);
        result.addDataSet("ds_output2", list2);

        return result;
    }

    @Override
    public NexacroResult saveChgCtlItmGrpCdAndAll(List<Map<String, Object>> commandMap1, List<Map<String, Object>> commandMap2, List<Map<String, Object>> commandMap3, OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> list1 = new ArrayList<Map<String, Object>>();
        List<Map<String, Object>> list2 = new ArrayList<Map<String, Object>>();
        List<Map<String, Object>> list3 = new ArrayList<Map<String, Object>>();

        // 목록 저장
        list1 = updateChgCtlItmGrpCd(commandMap1, odComm);
        // 권한 저장
        list2 = saveAndUpdateChgCtlItmGrpAuthInfo(commandMap2, odComm);
        // 상세 저장
        list3 = updateChgCtlItmGrpDtl(commandMap3, odComm);

        result.addDataSet("ds_output1", list1);
        result.addDataSet("ds_output2", list2);
        result.addDataSet("ds_output3", list3);
        return result;
    }

    @Override
    public boolean uploadExcelUpldDtls(List<Map<String, Object>> commandMap,  Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
        if(odComm.getSession().get("OPRTR_ID") == null) throw new OdBizException("ERRS000347");

        String strUUID = OU.asS(UUID.randomUUID());
        int excelRowNo = 1;
        String strChgItm = "";

        for (Map<String, Object> data : commandMap) {
            data.put("CO_CD", searchMap.get("CO_CD"));

            data.put("CHG_ITM_GRP_CD", searchMap.get("CHG_ITM_GRP_CD"));
            data.put("UPLD_PGM_IDT_NM", searchMap.get("UPLD_PGM_IDT_NM"));
            data.put("EXCEL_ROW_NO", excelRowNo++);
            data.put("USR_ID", odComm.getSession().get("OPRTR_ID") + "-" + strUUID);//odComm.getSessionId());
            data.put("REGPSN_ID", odComm.getSession().get("OPRTR_ID"));

            strChgItm = OU.asS(searchMap.get("CHG_ITM_GRP_CD"));
            if("G19".equals(strChgItm))
                data.put("EXCEL_DATA_VAL_01", "A31");
            else if("G57".equals(strChgItm))
                data.put("EXCEL_DATA_VAL_01", "B21");
            else if("S16".equals(strChgItm))
                data.put("EXCEL_DATA_VAL_01", "Z10");
            else if("S13".equals(strChgItm))
                data.put("EXCEL_DATA_VAL_01", "0");
        }

        Map<String, Object> master = commandMap.get(0);
        searchMap.put("USR_ID", master.get("USR_ID"));
        searchMap.put("REGPSN_ID", master.get("REGPSN_ID"));

        master.put("UPLD_CNT", commandMap.size());
        // TB_OD_ODR_EXCEL_UPLD_MST(주문엑셀업로드마스터) Insert
        insertOdrExcelUpldMst(master);
        // TB_OD_EXCEL_UPLD_DTLS(엑셀업로드내역) Insert
        return insertExcelUpldDtls(commandMap);
    }
    ///* 주문일괄변경 엑셀데이터 저장 */
    @Override
    public NexacroResult saveExcelUpldDtls(List<Map<String, Object>> commandMap, OdOrderComm odComm) throws Exception {
        if(odComm.getSession().get("OPRTR_ID") == null) throw new OdBizException("ERRS000347");

        Map<String, Object> sendMap = OU.newMap();
        Map<String, Object> masterMap = OU.newMap();
        Map<String, Object> returnMap = OU.newMap();
        List<Map<String, Object>> listReturn = new ArrayList<Map<String, Object>>();
        String strChgItm = "";
        String strSavedCd = "";

        for (Map<String, Object> data : commandMap) {
//
            if(data.get("MRO_RSLT_CD") != null) strSavedCd = OU.asS(data.get("MRO_RSLT_CD"));
            if("1".equals(data.get("CHK")) && "S".equals(data.get("ERR_OCUR_CD")) && !"S".equals(strSavedCd)) {
                masterMap.putAll(data);
                sendMap = OU.newMap();
                returnMap = OU.newMap();
                sendMap.put("CO_CD", data.get("CO_CD"));
                sendMap.put("BZPLC_ID", data.get("BZPLC_ID"));
                sendMap.put("ODR_NO", data.get("ODR_NO"));
                sendMap.put("ODR_ITM_NO", data.get("ODR_ITM_NO"));
                sendMap.put("ITM_GRP_CD", data.get("CHG_ITM_GRP_CD"));
                sendMap.put("SES_ID", odComm.getSessionId());
                sendMap.put("loginId", odComm.getSession().get("OPRTR_ID"));
                sendMap.put("ODRPSN_ID", data.get("ODRPSN_ID"));
                sendMap.put("CHN_GB", "BO");
                sendMap.put("CHG_MEMO_CTS", data.get("CHG_MEMO_CTS"));

                strChgItm = OU.asS(data.get("CHG_ITM_GRP_CD"));

                if("S15".equals(strChgItm) || "G27".equals(strChgItm))
                    sendMap.put("MEMO_CTS",data.get("EXCEL_DATA_VAL_01"));
                else if("S14".equals(strChgItm))
                    sendMap.put("MEMO_CTSD",data.get("EXCEL_DATA_VAL_01"));
                else if("G29".equals(strChgItm))
                    sendMap.put("CUST_PURG_ODR_NO",data.get("EXCEL_DATA_VAL_01"));
                else if("G30".equals(strChgItm))
                    sendMap.put("STOCK_NO",data.get("EXCEL_DATA_VAL_01"));
                else if("G19".equals(strChgItm) || "G57".equals(strChgItm) || "S16".equals(strChgItm))
                    sendMap.put("CHG_ODR_STATS_CD",data.get("EXCEL_DATA_VAL_01"));
                else if("G42".equals(strChgItm))
                    sendMap.put("BLNG_DEPT_ID",data.get("EXCEL_DATA_VAL_01"));
                else if("G41".equals(strChgItm))   {
                    sendMap.put("COST_TRNSF_DEPT_ID",data.get("EXCEL_DATA_VAL_01"));
                    sendMap.put("ACCT_ID",data.get("EXCEL_DATA_VAL_02"));
                }
                else if("G62".equals(strChgItm))   {
                    sendMap.put("DLVPLC_ID",data.get("EXCEL_DATA_VAL_01"));
                    sendMap.put("RCVR_NM",data.get("EXCEL_DATA_VAL_02"));
                    sendMap.put("ZPCD",data.get("EXCEL_DATA_VAL_03"));
                    sendMap.put("REPR_ADDR",data.get("EXCEL_DATA_VAL_04"));
                    sendMap.put("DTL_ADDR",data.get("EXCEL_DATA_VAL_05"));
                    sendMap.put("TEL_NO",data.get("EXCEL_DATA_VAL_06"));
                    sendMap.put("HP_NO",data.get("EXCEL_DATA_VAL_07"));
                }
                else if("S13".equals(strChgItm))
                    sendMap.put("PRD_DLCST_AMT",data.get("EXCEL_DATA_VAL_01"));
                else if("S11".equals(strChgItm))
                    sendMap.put("SALE_AMT",data.get("EXCEL_DATA_VAL_01"));
                else if("G23".equals(strChgItm))   {
                    sendMap.put("REF_CD_SEQ_1",data.get("EXCEL_DATA_VAL_01"));
                    sendMap.put("REF_CD_SEQ_2",data.get("EXCEL_DATA_VAL_02"));
                    sendMap.put("REF_CD_SEQ_3",data.get("EXCEL_DATA_VAL_03"));
                    sendMap.put("REF_CD_SEQ_4",data.get("EXCEL_DATA_VAL_04"));
                    sendMap.put("REF_CD_SEQ_5",data.get("EXCEL_DATA_VAL_05"));
                }
                else if("G80".equals(strChgItm))   {
                    sendMap.put("OSHT_CD_1",data.get("EXCEL_DATA_VAL_01"));
                    sendMap.put("OSHT_CD_2",data.get("EXCEL_DATA_VAL_02"));
                    sendMap.put("OSHT_CD_3",data.get("EXCEL_DATA_VAL_03"));
                    sendMap.put("OSHT_CD_4",data.get("EXCEL_DATA_VAL_04"));
                    sendMap.put("OSHT_CD_5",data.get("EXCEL_DATA_VAL_05"));
                }
                else if("G54".equals(strChgItm))
                    sendMap.put("PRC_DECI_DTM",data.get("EXCEL_DATA_VAL_01"));
                else if("G03".equals(strChgItm))
                    sendMap.put("DSTRB_PATH_CD",data.get("EXCEL_DATA_VAL_01"));

                //else if(strChgItm.equals("G19") || strChgItm.equals("G57") || strChgItm.equals("S16") )
                //    sendMap.put("ODR_STATS_CD",data.get("EXCEL_DATA_VAL_01"));

                returnMap = orderComm.saveOrderDetailMap(sendMap, returnMap, odComm.getSessionId(), OU.asS(odComm.getSession().get("OPRTR_ID")));
                data.putAll(returnMap);
                daoChange.updateExcelUpldAfterSave(data);
                listReturn.add(returnMap);
            }
        }
        if(listReturn.size() == 0 )
            throw new OdBizException("ERRS000346");

        daoChange.updateExcelUpldMstAfterSave(masterMap);

        return selectExcelUpldDtls(masterMap);
    }

    @Override
    public NexacroResult selectExcelUpldDtls(Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> list = daoChange.selectExcelUpldDtls(searchMap);

        result.addDataSet("ds_output1", list);
        return result;
    }

    @Override
    public Map<String, Object> checkExcelUpldDtls(Map<String, Object> searchMap) throws Exception {
        return daoChange.checkExcelUpldDtls(searchMap);
    }

    @Override
    public NexacroResult selectExcelUpldItmGrp(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
        //if(odComm.getSession().get("OPRTR_CO_CD") == null) throw new OdBizException("ERRS000347");
        if(odComm.getSession().get("OPRTR_ID") == null) throw new OdBizException("ERRS000347");

        NexacroResult result = new NexacroResult();
        searchMap.put("OPRTR_ID", odComm.getSession().get("OPRTR_ID"));
        List<Map<String, Object>> list = daoChange.selectExcelUpldItmGrp(searchMap);
        result.addDataSet("ds_output1", list);
        return result;
    }

    @Override
    public NexacroResult selectExcelUpldItmGrp2(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception {
        if(odOrderComm.getSession().get("OPRTR_ID") == null) throw new OdBizException("ERRS000347");

        NexacroResult result = new NexacroResult();
        searchMap.put("OPRTR_ID", odOrderComm.getSession().get("OPRTR_ID"));
        List<Map<String, Object>> list = daoChange.selectExcelUpldItmGrp2(searchMap);
        result.addDataSet("ds_output1", list);
        return result;
    }

    private boolean insertOdrExcelUpldMst(Map<String, Object> data) throws Exception {
        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
        list.add(data);
        odExecuteBatch.insert("com.ssp.bo.od.orderChange.insertOdrExcelUpldMst", list);
        return true;
    }

    private boolean insertExcelUpldDtls(List<Map<String, Object>> commandMap) throws Exception {
        odExecuteBatch.insert("com.ssp.bo.od.orderChange.insertExcelUpldDtls", commandMap);
        return true;
    }

    private List<Map<String, Object>> updateChgCtlItmGrpCd(List<Map<String, Object>> commandMap, OdOrderComm odComm) throws Exception {
        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
        int returnValue = -1;

        for (Map<String, Object> data : commandMap) {
            HashMap<String, Object> valueMap = new HashMap<>();
            data.put("UPDPSN_ID", OU.asS(odComm.getSession().get("UPDPSN_ID")));
            returnValue = daoChange.saveChgCtlItmGrpCd(data);

            if (returnValue == 1) {
                valueMap.put("RTN_CD", "S");
                valueMap.put("RTN_MSG", "정상적으로 저장되었습니다.");
            }
            else {
                valueMap.put("RTN_CD", "E");
                valueMap.put("RTN_MSG", "updateChgCtlItmGrpCd 업데이트 실패");
                throw new OdBizException(OU.asS(valueMap.get("RTN_MSG")));
            }

            list.add(valueMap);
        }

        return list;
    }

    private List<Map<String, Object>> saveAndUpdateChgCtlItmGrpAuthInfo(List<Map<String, Object>> commandMap, OdOrderComm odComm) throws Exception {
        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
        int returnValue = -1;

        for (Map<String, Object> data : commandMap) {
            HashMap<String, Object> valueMap = new HashMap<>();
            data.put("UPDPSN_ID", OU.asS(odComm.getSession().get("UPDPSN_ID")));
            data.put("REGPSN_ID", OU.asS(odComm.getSession().get("REGPSN_ID")));

            if ("D".equals(data.get("IUD_GB"))) {
                returnValue = daoChange.deleteChgCtlItmGrpAuthInfo(data);
            }
            else {
                returnValue = daoChange.saveChgCtlItmGrpAuthInfo(data);
            }

            if (returnValue == 1) {
                valueMap.put("RTN_CD", "S");
                valueMap.put("RTN_MSG", "정상적으로 저장되었습니다.");
            }
            else {
                valueMap.put("RTN_CD", "E");
                valueMap.put("RTN_MSG", "saveAndUpdateChgCtlItmGrpAuthInfo 업데이트 실패");
                throw new OdBizException(OU.asS(valueMap.get("RTN_MSG")));
            }

            list.add(valueMap);
        }
        return list;
    }

    private List<Map<String, Object>> updateChgCtlItmGrpDtl(List<Map<String, Object>> commandMap, OdOrderComm odComm) throws Exception {
        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
        int returnValue = -1;

        for (Map<String, Object> data : commandMap) {
            HashMap<String, Object> valueMap = new HashMap<>();
            data.put("UPDPSN_ID", OU.asS(odComm.getSession().get("UPDPSN_ID")));
            returnValue = daoChange.saveChgCtlItmGrpDtl(data);

            if (returnValue == 1) {
                valueMap.put("RTN_CD", "S");
                valueMap.put("RTN_MSG", "정상적으로 저장되었습니다.");
            }
            else {
                valueMap.put("RTN_CD", "E");
                valueMap.put("RTN_MSG", "저장할 대상 레코드가 존재하지 않습니다.");
                throw new OdBizException(OU.asS(valueMap.get("RTN_MSG")));
            }

            list.add(valueMap);
        }

        return list;
    }

    @Override
    public NexacroResult selectOrderChangeListDetail(Map<String, String> searchMap, OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        searchMap.put("SES_ID", odComm.getSessionId() );
        List<Map<String, Object>> list = daoChange.selectOrderChangeListDetail(searchMap);
        // 리턴값 set
        result.addDataSet("ds_output1", list);

        return result;
    }

}
