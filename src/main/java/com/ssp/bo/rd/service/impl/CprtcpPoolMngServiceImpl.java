package com.ssp.bo.rd.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.dao.CprtcpEstmReqMngDao;
import com.ssp.bo.rd.dao.CprtcpPoolMngDao;
import com.ssp.bo.rd.service.CprtcpPoolMngService;
import com.ssp.bo.rd.util.StringUtils;
import com.ssp.core.util.ObjectUtils;

/**
 * <pre>
 *
 * @title   CprtcpPoolMngServiceImpl
 * @@desc   협력사 견적 POOL 관리 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2023.07.11
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.07.11			       최초작성
 */
@Service("CprtcpPoolMngService")
public class CprtcpPoolMngServiceImpl implements CprtcpPoolMngService {

	@Autowired
	private CprtcpPoolMngDao cprtcpPoolMngDao;
	
	
	/**
	 * 협력사 견적 POOL 관리 리스트 조회
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectCprtcpPoolReqMng(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		List<String> stbList = new ArrayList<>();
		List<Map> records = null;
		if (!ObjectUtils.isNull(searchMap.get("CPRTCP_TP_CD"))) {
			stbList = StringUtils.makeList(searchMap.get("CPRTCP_TP_CD").toString(), ",");
			searchMap.put("CPRTCP_TP_CD_LIST", stbList);
		}
		int totalCount = cprtcpPoolMngDao.selectCprtcpPoolMngCount(searchMap);
		if(totalCount > 0) {
			records = cprtcpPoolMngDao.selectCprtcpPoolMng(searchMap);
		}
		
		result.addDataSet("ds_master", records);
		result.addVariable("totalCount", totalCount);

		return result;
	}
	
	
	/**
	 * 협력사 견적 POOL 이력 리스트 조회
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectCprtcpPoolReqMngHstr(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		List<String> stbList = new ArrayList<>();
		List<Map> records = null;
		
		if (!ObjectUtils.isNull(searchMap.get("CPRTCP_TP_CD"))) {
			stbList = StringUtils.makeList(searchMap.get("CPRTCP_TP_CD").toString(), ",");
			searchMap.put("CPRTCP_TP_CD_LIST", stbList);
		}

		int totalCount = cprtcpPoolMngDao.selectCprtcpPoolHstrCount(searchMap);
		if(totalCount > 0) {
			records = cprtcpPoolMngDao.selectCprtcpPoolMngHstr(searchMap);
		}
		
		result.addDataSet("ds_master", records);
		result.addVariable("totalCount", totalCount);

		return result;
	}
}
