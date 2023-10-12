package com.ssp.bo.pc.service.impl;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.dp.dao.DpPrdDispStatsDao;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pc.dao.PcDetrInfoDao;
import com.ssp.bo.pc.dao.PcPrdPrcDao;
import com.ssp.bo.pc.dao.PcPrdPrcHstDao;
import com.ssp.bo.pc.dao.PcSalsDsgnSalsprcDao;
import com.ssp.bo.pc.service.PcPrdPrcService;
import com.ssp.bo.pc.util.PrcUtils;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.LoggingException;

import com.ssp.core.co.util.CoHttp;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 * @title
 * @package com.ssp.bo.pc.service.impl
 * </pre>
 * @author scvgo17
 * @since 2022. 01. 18.
 * @version 1.0
 * @see PcPrdPrcServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *
 */
@Service("pcPrdPrcService")
public class PcPrdPrcServiceImpl implements PcPrdPrcService {

	@Autowired
    private PcPrdPrcDao pcPrdPrcDao;

	@Autowired
    private DpPrdDispStatsDao dpPrdDispStatsDao;

	@Autowired
	private PcSalsDsgnSalsprcDao pcSalsDsgnSalsprcDao;

	@Autowired
	private PcDetrInfoDao pcDetrInfoDao;

	@Autowired
    private PcPrdPrcHstDao pcPrdPrcHstDao;

	 @Autowired
	protected SspPropertyService propertiesService;


	@Override
	public Map<String, Object> updateBssSalsprcCalc(Map<String, Object> commandMap, OdOrderComm odComm) throws Exception {

	    Map<String, Object> rMap;
	    commandMap.put("sesId", odComm.getSessionId() );
	    commandMap.put("updpsnId",odComm.getSession().get("OPRTR_ID").toString() );
        rMap = pcPrdPrcDao.updatePrdPrc(commandMap);

        String strRtnCd = rMap.get("rtnCd").toString();

        if(strRtnCd.equals("E"))    {
            throw new LoggingException(new String[] { "PC", "BO", "updateBssSalsprcCalc", rMap.get("RTN_MSG").toString()} ,new Exception());
        }
        return rMap;
	}

	@Override
	public Map<String, Object> selectCurrentDate(Map<String, Object> commandMap) throws Exception{
		return pcPrdPrcDao.selectCurrentDate(commandMap);
	}

	@Override
	public NexacroResult prcHistoryList(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		NexacroResult result = new NexacroResult();

		int totalCount = pcPrdPrcHstDao.selectPrdPrcHstCount(searchMap);
		List<Map<String, Object>> list = pcPrdPrcHstDao.selectPrdPrcHstList(searchMap);

		result.addDataSet("ds_output", list);
		result.addVariable("totalCount", totalCount);
		return result;
	}


}
