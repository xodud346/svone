package com.ssp.bo.od.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.od.dao.OdOrderListDao;
import com.ssp.core.od.dao.OdCommonDAO;


/**
 * 
 * <pre>
 * @title 주문번호
 * @package com.ssp.bo.od.dao.impl
 * </pre>
 * 
 * @author neonlee
 * @since 2022-03-15
 * @version 1.0
 * @see OdOrderListDaoImpl 
 * =================== 변경 내역 ==================
 * 날짜           변경자     내용
 * ------------------------------------------------ 
 */

@Repository("odOrderListDao")
public class OdOrderListDaoImpl implements OdOrderListDao {

    @Autowired
    private OdCommonDAO commonDAO;
    
    @Override
    public List<Map<String, Object>> selectSampleList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectSampleList", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectOrderList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectOrderList", searchMap);
    }
    
    @Override
    public int selectOrderCount(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectInteger("com.ssp.bo.od.orderList.selectOrderCount", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectOderDetailList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectOderDetailList", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectCustOderInfo(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectCustOderInfo", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectCustOderInfoRefCodeList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectCustOderInfoRefCodeList", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectCustOderInfoInstanceCodeList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectCustOderInfoInstanceCodeList", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectApprInfo(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectApprInfo", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectOrdInfo(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectOrdInfo", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectChgHstList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectChgHstList", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectSalsInfoList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectSalsInfoList", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectSalsInfoList02(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectSalsInfoList02", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectSalsInfoList03(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectSalsInfoList03", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectSalsInfoList04(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectSalsInfoList04", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectDlvInfo(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectDlvInfo", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectDlvProcInfo(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectDlvProcInfo", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectDlvSrvonInfo(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectDlvSrvonInfo", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectDlvHdvInfo(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectDlvHdvInfo", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectAdjInfo(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectAdjInfo", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectAdjGiVerfInfo(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectAdjGiVerfInfo", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectAdjCustVerfInfo(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectAdjCustVerfInfo", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectSndRcvList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectSndRcvList", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectSndRcvList2(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectSndRcvList2", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectQtyDstrList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectQtyDstrList", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectDvdpayList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectDvdpayList", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectExcProcList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectExcProcList", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectExcProcVocDlv01Info(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectExcProcVocDlv01Info", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectExcProcVocDlv02Info(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectExcProcVocDlv02Info", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectOdrInfo(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectOdrInfo", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectOdrInfoAttFile(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectOdrInfoAttFile", searchMap);
    }

    @Override
    public int selectMbrListCount(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectInteger("com.ssp.bo.od.orderList.selectMbrListCount", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectMbrList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectMbrList", searchMap);
    }

    @Override
    public int conHstListCount(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectInteger("com.ssp.bo.od.orderList.conHstListCount", searchMap);
    }

    @Override
    public List<Map<String, Object>> conHstList(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.conHstList", searchMap);
    }

    @Override
    public int selectSndRcvInfoListCount(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectInteger("com.ssp.bo.od.orderList.selectSndRcvInfoListCount", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectSndRcvInfoList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectSndRcvInfoList", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectSndRcvInfoList2(Map<String, String> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.od.orderList.selectSndRcvInfoList2", searchMap);
    }


}
