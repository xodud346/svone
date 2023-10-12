package com.ssp.bo.pc.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pc.dao.PcCustPremrtDao;
import com.ssp.bo.pc.service.PcCustPremrtService;
import com.ssp.core.common.exception.MessageException;

/**
 * <pre>
 * @title  
 * @package com.ssp.bo.pc.service.impl
 * </pre>
 * @author scvgo17
 * @since 2022. 01. 18.
 * @version 1.0
 * @see PcCustPremrtServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Service("pcCustPremrtService")
public class PcCustPremrtServiceImpl implements PcCustPremrtService {

	@Autowired
    private PcCustPremrtDao pcDetrInfoDao;

	public NexacroResult selectCustPremrtList(Map<String,Object> searchMap, OdOrderComm odComm) throws Exception{
		
		NexacroResult result = new NexacroResult();
		
		searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
		
		int totalCount = pcDetrInfoDao.selectCustPremrtCount(searchMap);
		List<Map<String, Object>> list = pcDetrInfoDao.selectCustPremrtList(searchMap);
		
		result.addDataSet("ds_output", list);
		result.addVariable("totalCount", totalCount);
		
        return result;
    }
	
	public Map<String, Object> selectCustPremrtDetail(Map<String,Object> searchMap, OdOrderComm odComm) throws Exception{
		NexacroResult result = new NexacroResult();
		searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
		
		Map<String, Object> detail = pcDetrInfoDao.selectCustPremrtDetail(searchMap);
		
		return detail;
	}
	
	public NexacroResult insertCustPremrt(Map<String, Object> insertMap, OdOrderComm odComm) throws Exception {
		
		NexacroResult result = new NexacroResult();
		
		try {
				insertMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
				insertMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
				insertMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
				
				//공통 카테고리 계획매익율 입력
				insertMap.put("useYn", "N");
				pcDetrInfoDao.updateCustPremrt(insertMap);
				
				insertMap.put("useYn", "Y");
				pcDetrInfoDao.insertCustPremrt(insertMap);
		
		}catch ( MessageException e ) {
            if( e.getCode() == -100 ) {
                result.setErrorCode(e.getCode());
                result.setErrorMsg(e.getMessage());
                return result;
            } else {
                throw e;
            }
		}
		
		return result;
	}


}
