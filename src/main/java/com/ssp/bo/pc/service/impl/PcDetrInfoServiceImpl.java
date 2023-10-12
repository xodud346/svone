package com.ssp.bo.pc.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pc.dao.PcDetrInfoDao;
import com.ssp.bo.pc.service.PcDetrInfoService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.od.service.OdOrderCommService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  절사관리 서비스
 * @package com.ssp.bo.pc.service.impl
 * </pre>
 * @author scvgo17
 * @since 2022. 01. 18.
 * @version 1.0
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Service("pcDetrInfoService")
public class PcDetrInfoServiceImpl implements PcDetrInfoService {

	@Autowired
    private PcDetrInfoDao pcDetrInfoDao;
	
	@Autowired
    private OdOrderCommService svcComm;

	public List<Map<String,Object>> selectDetrInfoList(Map<String,Object> searchMap, OdOrderComm odComm) throws Exception{
		searchMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
        return pcDetrInfoDao.selectDetrInfoList(searchMap);
    }

	@Override
	public NexacroResult updateDetrInfo(Map<String, Object> searchMap, List<Map<String, Object>> commandMap, OdOrderComm odComm) throws Exception {
		
		NexacroResult result = new NexacroResult();
		
		try {
			for (Map<String, Object> data : commandMap) {
				int saveType = StringUtil.getInt(data.get("DataSetRowType"));
				
				if (saveType == 2) {
					data = svcComm.changeToCamel(data);
					
					data.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
					data.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
					data.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
					
					pcDetrInfoDao.updateDetrInfo(data);
					
				}
			}
		
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
