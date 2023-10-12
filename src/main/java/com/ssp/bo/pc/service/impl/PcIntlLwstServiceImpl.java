package com.ssp.bo.pc.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pc.dao.PcIntlLwstDao;
import com.ssp.bo.pc.service.PcIntlLwstService;
import com.ssp.core.common.exception.MessageException;

/**
 * <pre>
 * @title  
 * @package com.ssp.bo.pc.service.impl
 * </pre>
 * @author scvgo17
 * @since 2022. 01. 18.
 * @version 1.0
 * @see PcIntlLwstServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Service("pcIntlLwstService")
public class PcIntlLwstServiceImpl implements PcIntlLwstService {

	@Autowired
    private PcIntlLwstDao intlLwstDao;

	public NexacroResult selectIntlLwstList(Map<String,Object> searchMap) throws Exception{
		
		NexacroResult result = new NexacroResult();
		
		int totalCount = intlLwstDao.selectIntlLwstCount(searchMap);
		List<Map<String, Object>> list = intlLwstDao.selectIntlLwstList(searchMap);
		
		result.addDataSet("ds_output", list);
		result.addVariable("totalCount", totalCount);
		
        return result;
    }
	
	public NexacroResult insertIntlLwst(Map<String, Object> insertMap) throws Exception {
		
		NexacroResult result = new NexacroResult();
		
		try {
			
				insertMap.put("useYn", "Y");
				intlLwstDao.insertIntlLwst(insertMap);
		
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
	
	public Map<String, Object> selectIntlLwstDetail(Map<String,Object> searchMap) throws Exception{
		
		Map<String, Object> detail = intlLwstDao.selectIntlLwstDetail(searchMap);
		
		return detail;
	}


}
