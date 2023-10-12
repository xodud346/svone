package com.ssp.bo.pc.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pc.dao.PcExPrcMngDao;
import com.ssp.bo.pc.dao.PcPrcMngDao;
import com.ssp.bo.pc.service.PcPrcMngService;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;


@Service("pcPrcMngService")
public class PcPrcMngServiceImpl implements PcPrcMngService{
    private final Logger log = LoggerFactory.getLogger(PcPrcMngServiceImpl.class);

	@Autowired
	private PcPrcMngDao pcPrcMngDao;

	@Autowired
	private PcExPrcMngDao pcExPrcMngDao;

    @Autowired
	protected SspPropertyService propertiesService;

	@Override
	public NexacroResult selectList(Map<String, Object> searchMap,OdOrderComm odComm) throws Exception {
		// TODO Auto-generated method stub
		NexacroResult result = new NexacroResult();

		searchMap.put("sesId", odComm.getSessionId() );
		searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD") );

		int totalCount = pcPrcMngDao.selectCount(searchMap);
		List<Map<String, Object>> list = pcPrcMngDao.selectList(searchMap);

		result.addDataSet("ds_output", list);
		result.addVariable("totalCount", totalCount);
		return result;
	}

    @Override
    public NexacroResult selectBzplcList(Map<String, Object> searchMap,OdOrderComm odComm) throws Exception {
        // TODO Auto-generated method stub
        NexacroResult result = new NexacroResult();

        searchMap.put("sesId", odComm.getSessionId() );
        searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD") );

        int totalCount = pcPrcMngDao.selectBzplcCount(searchMap);
        List<Map<String, Object>> list = pcPrcMngDao.selectBzplcList(searchMap);

        result.addDataSet("ds_output", list);
        result.addVariable("totalCount", totalCount);
        return result;
    }

    @Override
    public NexacroResult selectPrcHistList(Map<String, Object> searchMap,OdOrderComm odComm) throws Exception {
        // TODO Auto-generated method stub
        NexacroResult result = new NexacroResult();

        searchMap.put("sesId", odComm.getSessionId() );
        searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD") );

        int totalCount = pcPrcMngDao.selectPrcHistCount(searchMap);
        List<Map<String, Object>> list = pcPrcMngDao.selectPrcHistList(searchMap);

        result.addDataSet("ds_output", list);
        result.addVariable("totalCount", totalCount);
        return result;
    }

	@Override
	public NexacroResult selectPubPrcList(Map<String, Object> searchMap,OdOrderComm odComm) throws Exception {
		// TODO Auto-generated method stub
		NexacroResult result = new NexacroResult();

		searchMap.put("sesId", odComm.getSessionId() );
		searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD") );

		int totalCount = pcPrcMngDao.selectPubPrcCount(searchMap);
		List<Map<String, Object>> list = pcPrcMngDao.selectPubPrcList(searchMap);

		result.addDataSet("ds_output", list);
		result.addVariable("totalCount", totalCount);
		return result;
	}


	//탭3 기획전 대상여부
	@Override
	public List<Map<String, Object>> getExhbnInfo(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub

		//카멜표기법 사용
		List<Map<String, Object>> result = pcPrcMngDao.selectListExhbnInfo(searchMap);

		return result;
	}

	@Override
    public NexacroResult getPcPrdPrc(Map<String, Object> searchMap) throws Exception {
        // TODO Auto-generated method stub
	    NexacroResult result = new NexacroResult();
        List<Map<String, Object>> pcPrdPrcInfos = pcPrcMngDao.selectPcPrdPrcList(searchMap);
        result.addDataSet("ds_output", pcPrdPrcInfos);

        return result;
    }


	//탭1 현재적용 기준가격 조회
	@Override
	public List<Map<String, Object>> getPcPrdPrcList(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub

		List<Map<String, Object>> pcPrdPrcInfos = pcPrcMngDao.selectPcPrdPrcList(searchMap);
		return pcPrdPrcInfos;
	}

   @Override
    public List<Map<String, Object>> getPcPrdPrcSimulList(Map<String, Object> searchMap) throws Exception {
        // TODO Auto-generated method stub

        List<Map<String, Object>> pcPrdPrcInfos = pcPrcMngDao.getPcPrdPrcSimulList(searchMap);
        return pcPrdPrcInfos;
    }

	@Override
    public List<Map<String, Object>> getPrcList(Map<String, Object> searchMap) throws Exception {

        int totalCount = pcPrcMngDao.selectPrcListCount(searchMap);
        List<Map<String, Object>> list = pcPrcMngDao.selectPrcList(searchMap);

        return list;
    }


	//탭2 pcPrdQty 조회
	@Override
	public List<Map<String, Object>> getPcPrdQty(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		List<Map<String, Object>> result = pcPrcMngDao.selectListPcPrdQty(searchMap);
		return result;
	}
	//탭2 pcPrdDlcst
	@Override
	public List<Map<String, Object>> getPcPrdDlcst(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		List<Map<String, Object>> result = pcPrcMngDao.selectListPcPrdDlcst(searchMap);
		return result;
	}


	//요청사항 정보
	@Override
	public NexacroResult getPcPrdReq(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		NexacroResult result = new NexacroResult();

		Map<String, Object> pcPrdReqInfo = pcPrcMngDao.selectPcPrdReq(searchMap);
		result.addDataSet("ds_detail", pcPrdReqInfo);
		return result;
	}

	@Override
    public NexacroResult getNewItemInfo(Map<String, Object> searchMap) throws Exception{
        NexacroResult result = new NexacroResult();

        result.addDataSet("dpDispInfo", pcExPrcMngDao.selectPcPrdSalsprcNew(searchMap));
        result.addDataSet("oprUnitInfo", pcPrcMngDao.selectPubDispList(searchMap));

        return result;

    }

}
