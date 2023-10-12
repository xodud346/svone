package com.ssp.bo.pc.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pc.dao.PcPlnPrfrtDao;
import com.ssp.bo.pc.service.PcPlnPrfrtService;
import com.ssp.bo.pc.service.PcPrdProcStbService;
import com.ssp.core.common.exception.MessageException;

/**
 * <pre>
 * @title  
 * @package com.ssp.bo.pc.service.impl
 * </pre>
 * @author scvgo17
 * @since 2022. 01. 18.
 * @version 1.0
 * @see PcPlnPrfrtServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Service("pcPlnPrfrtService")
public class PcPlnPrfrtServiceImpl implements PcPlnPrfrtService {

	@Autowired
    private PcPlnPrfrtDao pcDetrInfoDao;
	
	public NexacroResult selectPlnPrfrtList(Map<String,Object> searchMap) throws Exception{
		
		NexacroResult result = new NexacroResult();
		
		int totalCount = pcDetrInfoDao.selectPlnPrfrtCount(searchMap);
		List<Map<String, Object>> list = pcDetrInfoDao.selectPlnPrfrtList(searchMap);
		
		result.addDataSet("ds_output", list);
		result.addVariable("totalCount", totalCount);
		
        return result;
    }
	
	public Map<String, Object> selectPlnPrfrtDetail(Map<String,Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		
		Map<String, Object> detail = pcDetrInfoDao.selectPlnPrfrtDetail(searchMap);
		
		return detail;
	}
	
	public NexacroResult insertPlnPrfrt(Map<String, Object> insertMap) throws Exception {
		
		NexacroResult result = new NexacroResult();
		insertMap.put("mnfrNo", "*");
		try {
			
			if(!"*".equals(insertMap.get("prdClcd"))){
				//카테고리 등록시 공통계획율 입력 필수 파라미터
				//prdClcd : 카테고리 Id
				//regpsnId : 등록자ID
				//updpsnId : 등록자ID
				
				//공통 카테고리 계획율 조회
				Map<String, Object> searchMap = new HashMap<String, Object>();
				searchMap.put("prdClcd", "*");
				searchMap.put("useYn", "Y");
				Map<String, Object> detail = pcDetrInfoDao.selectPlnPrfrtDetail(searchMap);
				
				insertMap.put("useYn", "N");
				pcDetrInfoDao.updatePlnPrfrt(insertMap);
				
				insertMap.put("plnPrfrt", detail.get("PLN_PRFRT"));
				insertMap.put("useYn", "Y");
				pcDetrInfoDao.insertPlnPrfrt(insertMap);
			
			}else {
				//공통 카테고리 계획매익율 입력
				insertMap.put("useYn", "N");
				pcDetrInfoDao.updatePlnPrfrt(insertMap);
				
				insertMap.put("useYn", "Y");
				pcDetrInfoDao.insertPlnPrfrt(insertMap);
				
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
