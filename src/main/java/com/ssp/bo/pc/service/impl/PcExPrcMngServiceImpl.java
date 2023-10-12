package com.ssp.bo.pc.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.dp.dao.DpPrdDispStatsDao;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pc.dao.PcExPrcMngDao;
import com.ssp.bo.pc.dao.PcNewPrdReqPrcDao;
import com.ssp.bo.pc.dao.PcPrcMngDao;
import com.ssp.bo.pc.dao.PcPrdDlcstDtlsDao;
import com.ssp.bo.pc.dao.PcPrdPrcDao;
import com.ssp.bo.pc.dao.PcPrdQtyDtlsDao;
import com.ssp.bo.pc.dao.PcSalsDsgnSalsprcDao;
import com.ssp.bo.pc.service.PcExPrcMngService;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.od.dao.OdOrderCommDao;
import com.ssp.core.od.exceptions.OdExceptions;
import com.ssp.core.od.service.OdOrderCommService;
import com.ssp.core.od.utils.OU;
import com.ssp.core.util.StringUtil;


@Service("pcExPrcMngService")
public class PcExPrcMngServiceImpl implements PcExPrcMngService {
    private final Logger log = LoggerFactory.getLogger(PcExPrcMngServiceImpl.class);

	@Autowired
	private PcExPrcMngDao pcExPrcMngDao;

	@Autowired
	private PcPrcMngDao pcPrcMngDao;

	@Autowired
	private DpPrdDispStatsDao dpPrdDispStatsDao;

	@Autowired
	private PcPrdPrcDao pcPrdPrcDao;

	@Autowired
	private PcPrdQtyDtlsDao pcPrdQtyDtlsDao;

	@Autowired
	private PcPrdDlcstDtlsDao pcPrdDlcstDtlsDao;

	@Autowired
	private PcSalsDsgnSalsprcDao pcSalsDsgnSalsprcDao;

	@Autowired
    private OdOrderCommDao daoComm;

	@Autowired
    private OdOrderCommService svcComm;

	@Override
	public List<Map<String, Object>> getDpDispInfo(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		return pcExPrcMngDao.selectUpdatedListOprUnit(searchMap);
	}

	@Override
	public NexacroResult getExItemInfo(Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		result.addDataSet("exItemInfo",pcExPrcMngDao.selectPcPrdSalsprc(searchMap));

		return result;

	}

	@Override
    public Map<String, Object> savePrcMngMaster(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception {
	    Map<String, Object> dataMap = OU.newMap();
        Map<String, Object> returnMap = OU.newMap();
        String strIudGb = "";
        String strCurrDtm = "";

        for (Map<String, Object> data : commandMap) {

            System.out.println(data);
            returnMap = OU.newMap();

            try {
                dataMap = svcComm.changeToCamel(data);
                dataMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
                dataMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
                strIudGb = dataMap.get("iudGb").toString();

                if(strCurrDtm.equals(""))   strCurrDtm = pcPrdPrcDao.selectCurrentDtm(null);
                dataMap.put("dispRegStrDtm", strCurrDtm);

             System.out.println(dataMap);

                if(strIudGb.equals("I") || strIudGb.equals("U"))    {
                    dpPrdDispStatsDao.insertDispRegHist(dataMap);
                    dpPrdDispStatsDao.insertDispRegHistLast(dataMap);
                }

            } catch (Exception e) {
                throw new LoggingException(new String[] { "PC", "BO", "savePrcMngMaster", e.getMessage() }, e);
            }
            returnMap.put("rtnCd","S");
            returnMap.put("rtnMsg","SUCCESS");
        }
        return returnMap;
    }

    @Override
    public Map<String, Object> savePrcMngSspPrc(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception {
        Map<String, Object> dataMap = OU.newMap();
        Map<String, Object> returnMap = OU.newMap();
        String strIudGb = "";
        String strCurrDtm = "";

        for (Map<String, Object> data : commandMap) {

            System.out.println(data);
            returnMap = OU.newMap();

            try {
                dataMap = svcComm.changeToCamel(data);
                dataMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
                dataMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
                strIudGb = dataMap.get("iudGb").toString();

                if(strCurrDtm.equals(""))   strCurrDtm = pcPrdPrcDao.selectCurrentDtm(null);
                dataMap.put("bssSalsprcStrDtm", strCurrDtm);

             System.out.println(dataMap);

                if(strIudGb.equals("I") || strIudGb.equals("U"))    {
                    pcPrdPrcDao.insertPcPrdPrcHist(dataMap);
                    pcPrdPrcDao.insertPcPrdPrcHistLast(dataMap);
                }

            } catch (Exception e) {
                throw new LoggingException(new String[] { "PC", "BO", "savePrcMngSspPrc", e.getMessage() }, e);
            }
            returnMap.put("rtnCd","S");
            returnMap.put("rtnMsg","SUCCESS");
        }
        return returnMap;
    }

    @Override
    public Map<String, Object> savePrcMngDlcstDtls(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception   {
        Map<String, Object> dataMap = OU.newMap();
        Map<String, Object> returnMap = OU.newMap();
        String strIudGb = "";
        String strPreDate = "";
        String strRightNow = "";
        String strRightNowEnd = "";
        String strCurrDtm = "";

        for (Map<String, Object> data : commandMap) {

            System.out.println(data);
            returnMap = OU.newMap();

            try {
                dataMap = svcComm.changeToCamel(data);
                dataMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
                dataMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
                strIudGb = dataMap.get("iudGb").toString();
                if(dataMap.get("rightNow") == null) strRightNow = "0";
                else strRightNow = dataMap.get("rightNow").toString();
                
                if(dataMap.get("rightNowEnd") == null) strRightNowEnd = "0";
                else strRightNowEnd = dataMap.get("rightNowEnd").toString();

                if( !strIudGb.equals("D") && strRightNow.equals("0") && !strRightNowEnd.equals("1") && daoComm.checkDateValid(dataMap.get("dlcstStrDtm").toString()) == false)    {
                    returnMap.put("rtnCd","E");
                    returnMap.put("rtnMsg",OdExceptions.getMessage("ERRS000302"));
                    return returnMap;
                }

                if( strIudGb.equals("D") && strRightNowEnd.equals("0") && daoComm.checkDateValid(dataMap.get("dlcstEndDtm").toString()) == false)    {
                    returnMap.put("rtnCd","E");
                    returnMap.put("rtnMsg",OdExceptions.getMessage("ERRS000302"));
                    return returnMap;
                }

                if(strCurrDtm.equals(""))   strCurrDtm = pcPrdPrcDao.selectCurrentDtm(null);
                if(strRightNow.equals("1")) dataMap.put("dlcstStrDtm", strCurrDtm);
                if(strRightNowEnd.equals("1")) dataMap.put("dlcstEndDtm", strCurrDtm);


                if(strIudGb.equals("I"))    {
                    pcPrdDlcstDtlsDao.insertPcPrdDlcstHist(dataMap);
                }
                else if(strIudGb.equals("U"))    {
                    pcPrdDlcstDtlsDao.updatePcPrdDlcstHist(dataMap);
                }
                else if(strIudGb.equals("D"))    {
                    pcPrdDlcstDtlsDao.deletePcPrdDlcstHist(dataMap);
                    pcPrdDlcstDtlsDao.insertPcPrdDlcstHistLast(dataMap);
                }

                if(!dataMap.get("dlcstStrDtm").equals(strPreDate) && !strIudGb.equals("D")) {
                    pcPrdDlcstDtlsDao.insertPcPrdDlcstHistLast(dataMap);
                    strPreDate = dataMap.get("dlcstStrDtm").toString();
                }
                	pcPrdDlcstDtlsDao.updatePcPrdDlcsHistPairUpdateUser(dataMap);

            } catch (Exception e) {
                throw new LoggingException(new String[] { "PC", "BO", "savePrcMngDlcstDtls", e.getMessage() }, e);
            }
            returnMap.put("rtnCd","S");
            returnMap.put("rtnMsg","SUCCESS");

        }

        return returnMap;
    }

    @Override
    public Map<String, Object> savePrcMngQtyDtls(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception   {
        Map<String, Object> dataMap = OU.newMap();
        Map<String, Object> returnMap = OU.newMap();
        String strIudGb = "";
        String strPreDate = "";
        String strRightNow = "";
        String strRightNowEnd = "";
        String strCurrDtm = "";

        for (Map<String, Object> data : commandMap) {

            System.out.println(data);
            returnMap = OU.newMap();

            try {
                dataMap = svcComm.changeToCamel(data);
                dataMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
                dataMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());

                System.out.println(dataMap);
                strIudGb = dataMap.get("iudGb").toString();
                if(dataMap.get("rightNow") == null) strRightNow = "0";
                else strRightNow = dataMap.get("rightNow").toString();

                if(dataMap.get("rightNowEnd") == null) strRightNowEnd = "0";
                else strRightNowEnd = dataMap.get("rightNowEnd").toString();

                if( !strIudGb.equals("D") && strRightNow.equals("0") && !strRightNowEnd.equals("1") && daoComm.checkDateValid(dataMap.get("qtyStrDtm").toString()) == false)    {
                    returnMap.put("rtnCd","E");
                    returnMap.put("rtnMsg",OdExceptions.getMessage("ERRS000302"));
                    return returnMap;
                }

                if( strIudGb.equals("D") && strRightNowEnd.equals("0") && daoComm.checkDateValid(dataMap.get("qtyEndDtm").toString()) == false)    {
                    returnMap.put("rtnCd","E");
                    returnMap.put("rtnMsg",OdExceptions.getMessage("ERRS000302"));
                    return returnMap;
                }

                if(strCurrDtm.equals(""))   strCurrDtm = pcPrdPrcDao.selectCurrentDtm(null);
                if(strRightNow.equals("1")) dataMap.put("qtyStrDtm", strCurrDtm);
                if(strRightNowEnd.equals("1")) dataMap.put("qtyEndDtm", strCurrDtm);

                if(strIudGb.equals("I"))    {
                    pcPrdQtyDtlsDao.insertPcPrdQtyHist(dataMap);
                }
                else if(strIudGb.equals("U"))    {
                    pcPrdQtyDtlsDao.updatePcPrdQtyHist(dataMap);
                }
                else if(strIudGb.equals("D"))    {
                    pcPrdQtyDtlsDao.deletePcPrdQtyHist(dataMap);
                    pcPrdQtyDtlsDao.insertPcPrdQtyHistLast(dataMap);
                }
                if(!dataMap.get("qtyStrDtm").equals(strPreDate) && !strIudGb.equals("D")) {

                    pcPrdQtyDtlsDao.insertPcPrdQtyHistLast(dataMap);
                    strPreDate = dataMap.get("qtyStrDtm").toString();
                }
                pcPrdQtyDtlsDao.updatePcPrdQtyHistPairUpdateUser(dataMap);

            } catch (Exception e) {
                throw new LoggingException(new String[] { "PC", "BO", "savePrcMngQtyDtls", e.getMessage() }, e);
            }
            returnMap.put("rtnCd","S");
            returnMap.put("rtnMsg","SUCCESS");
        }

        return returnMap;
    }

    @Override
    public Map<String, Object> savePrcMngSalsPrc(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception {
        Map<String, Object> dataMap = OU.newMap();
        Map<String, Object> returnMap = OU.newMap();
        String strPreDate = "";
        String strIudGb = "";
        String strRightNow = "";
        String strCurrDtm = "";
        //commandMap2 삭제, commandMap1 :신규,변경

        for (Map<String, Object> data : commandMap) {

            returnMap = OU.newMap();

            try {
                dataMap =svcComm.changeToCamel(data);
                System.out.println(dataMap);
                dataMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
                dataMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
                strIudGb = dataMap.get("iudGb").toString();
                if(dataMap.get("rightNow") == null) strRightNow = "0";
                else strRightNow = dataMap.get("rightNow").toString();

                dataMap.put("salsDsgnSalsprcStrDtm",dataMap.get("salsDsgnSalsprcStrDtm").toString().substring(0,14));

                if( strRightNow.equals("0") && daoComm.checkDateValid(dataMap.get("salsDsgnSalsprcStrDtm").toString()) == false)    {
                    returnMap.put("rtnCd","E");
                    returnMap.put("rtnMsg",OdExceptions.getMessage("ERRS000302"));
                    return returnMap;
                }

                if(strCurrDtm.equals(""))   strCurrDtm = pcPrdPrcDao.selectCurrentDtm(null);
                if(strRightNow.equals("1")) dataMap.put("salsDsgnSalsprcStrDtm", strCurrDtm);

                if(strIudGb.equals("I") || strIudGb.equals("U"))    {
                    pcSalsDsgnSalsprcDao.insertPcSalsprcHist(dataMap);
                }

                if(!dataMap.get("salsDsgnSalsprcStrDtm").equals(strPreDate)) {
                    pcSalsDsgnSalsprcDao.insertPcSalsprcHistLast(dataMap);
                    strPreDate = dataMap.get("salsDsgnSalsprcStrDtm").toString();
                }

            } catch (Exception e) {
                throw new LoggingException(new String[] { "PC", "BO", "savePrcMngSalsPrc", e.getMessage() }, e);
            }
            returnMap.put("rtnCd","S");
            returnMap.put("rtnMsg","SUCCESS");

        }

        return returnMap;
    }

    @Override
    public Map<String, Object> deletePrcMngSalsPrc(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception {
        Map<String, Object> dataMapD = OU.newMap();
        Map<String, Object> returnMap = OU.newMap();
        String strIudGb = "";

        for (Map<String, Object> data2 : commandMap) {

            returnMap = OU.newMap();
            try {
                dataMapD = svcComm.changeToCamel(data2);
                System.out.println(dataMapD);
                dataMapD.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
                dataMapD.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
                strIudGb = dataMapD.get("iudGb").toString();

                if( daoComm.checkDateValid(dataMapD.get("salsDsgnSalsprcStrDtm").toString()) == false)    {
                    returnMap.put("rtnCd","E");
                    returnMap.put("rtnMsg",OdExceptions.getMessage("ERRS000302"));
                    return returnMap;
                }

                if(strIudGb.equals("D"))    {
                    pcSalsDsgnSalsprcDao.deletePcSalsprcHist(dataMapD);
                    pcSalsDsgnSalsprcDao.insertPcSalsprcHistLast(dataMapD);
                }

            } catch (Exception e) {
                throw new LoggingException(new String[] { "PC", "BO", "savePrcMngSalsPrc", e.getMessage() }, e);
            }
            returnMap.put("rtnCd","S");
            returnMap.put("rtnMsg","SUCCESS");
        }
        return returnMap;
    }

    @Override
    public Map<String, Object> savePrcMngDispHist(Map<String, Object> data,OdOrderComm odComm) throws Exception {
        Map<String, Object> dataMap = OU.newMap();
        Map<String, Object> returnMap = OU.newMap();

            System.out.println(data);
            returnMap = OU.newMap();

            try {
                dataMap = svcComm.changeToCamel(data);
                dataMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
                dataMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());

             System.out.println(dataMap);

                /*전체 데이터 다 저장하고 프로시져 호출 필요*/
                dpPrdDispStatsDao.insertDispStatsInfoHist(dataMap);

            } catch (Exception e) {
                throw new LoggingException(new String[] { "PC", "BO", "savePrcMngMaster", e.getMessage() }, e);
            }
            returnMap.put("rtnCd","S");
            returnMap.put("rtnMsg","SUCCESS");
        return returnMap;
    }

    @Override
    public NexacroResult selectSalsPrcHistList(Map<String, Object> searchMap) throws Exception{
        NexacroResult result = new NexacroResult();

        //result.addDataSet("ds_output1",pcExPrcMngDao.selectSalsPrcHistList(searchMap));
        return result;
    }

    @Override
    public NexacroResult getNewExItemInfo(Map<String, Object> searchMap) throws Exception{
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> dsDispInfo = pcExPrcMngDao.selectPcPrdSalsprcNew(searchMap);
        
        String newPrdReqNo = StringUtil.getString(dsDispInfo.get(0).get("NEW_PRD_REQ_NO"));
        
        if(newPrdReqNo != null && newPrdReqNo != "") {
        	Map<String, Object> dataMap = new HashMap<>();
            dataMap.put("newPrdReqNo", newPrdReqNo);
            String newPrdReqStatsCd  = StringUtil.getString(pcExPrcMngDao.selectCurrentStatus(dataMap).get("NEW_PRD_REQ_STATS_CD"));
        	if(!"29".equals(newPrdReqStatsCd)) {
        		dsDispInfo.get(0).put("NEW_PRD_REQ_NO", "");
        	}
        	
        };
        result.addDataSet("dpDispInfo",dsDispInfo);
        result.addDataSet("oprUnitInfo",pcExPrcMngDao.selectOprUnitDispList(searchMap));
        result.addDataSet("exItemInfo",pcExPrcMngDao.selectSalsPrcHistList(searchMap));
        return result;

    }
}
