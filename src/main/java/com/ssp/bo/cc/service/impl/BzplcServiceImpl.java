package com.ssp.bo.cc.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.dao.BzplcDao;
import com.ssp.bo.cc.service.BzplcService;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 * &#64;title  사업장기본
 * &#64;desc   사업장기본 Implementation
 * &#64;package com.ssp.bo.cc.service.impl
 * </pre>
 * 
 * @author
 * @since 2022. 01. 25
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜        변경자  내용
 * ------------------------------------------------
 * 2022.02.09  박성근  최초작성
 * ------------------------------------------------
 */
@Service("bzplcService")
public class BzplcServiceImpl implements BzplcService {
	
	@Autowired
	private BzplcDao bzplcDao;
	
	@Autowired
	protected SspPropertyService propertiesService;
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : list
	 * 2. ClassName  : BzplcServiceImpl
	 * 3. Comment    : 사업장기본 목록
	 * 4. 작성자      : YOO CHANGHO
	 * 5. 작성일      : 2022.02.09
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> list(Map<String, Object> params, CCUtils ccUtils) throws Exception {
		params.put("SES_ID", ccUtils.getSession().get("SES_ID").toString());
		return bzplcDao.selectList(params);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : list
	 * 2. ClassName  : BzplcServiceImpl
	 * 3. Comment    : 사업장기본 상세
	 * 4. 작성자      : YOO CHANGHO
	 * 5. 작성일      : 2022.02.09
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	public Map<String, Object> detail(Map<String, Object> params) throws Exception {
		
		List<Map<String, Object>> listBzplc   = bzplcDao.selectDetail(params);  // 사업장 기본정보
		List<Map<String, Object>> listBzplcAcctg   = null;  // 사업장 회계
		List<Map<String, Object>> listBzplcCtlAuth = null;  // 사업장 제어권한
		
		Map<String, Object> detailBzplc = new HashMap<String, Object>();
		detailBzplc.put("dsBzplc"        , listBzplc       );
		detailBzplc.put("dsBzplcAcctg"   , listBzplcAcctg   );
		detailBzplc.put("dsBzplcCtlAuth" , listBzplcCtlAuth);
		
		return detailBzplc;
	}
	
	@Override
	public List<Map<String, Object>> xlsx(Map<String, Object> params) throws Exception {
		return bzplcDao.selectXlsx(params);
	}

	@Override
	public List<Map<String, Object>> delete(Map<String, Object> params) throws Exception {
		bzplcDao.delete(params);
		return null;
	}

	@Override
	public List<Map<String, Object>> save(Map<String, Object> params) throws Exception {
		bzplcDao.save(params);
		return null;
	}

	// 대용량엑셀
	@Override
	public NexacroResult selectAllExcelDownload(Map<String, Object> searchInfo, CCUtils ccUtils) throws Exception {
		NexacroResult result = new NexacroResult();
    	
        try {
    		searchInfo.put("SES_ID", ccUtils.getSession().get("SES_ID").toString());
        	
            // input dataset id 카멜화
    		Map<String, Object> searchMap = searchInfo; //CommonUtil.toCamelCaseMap(searchInfo);
            searchMap.put("coCd", ccUtils.getSession().get("OPRTR_CO_CD").toString());
            searchMap.put("pgmId", "SSP_BO_MA_01");
            searchMap.put("excelMetaSeq", 1);
            searchMap.put("saveFileNm", "사업장관리목록.xlsx");
            searchMap.put("regpsnId", ccUtils.getSession().get("OPRTR_ID").toString());
            searchMap.put("updpsnId", ccUtils.getSession().get("OPRTR_ID").toString());
            
            CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
            return result;
            
		}catch(MessageException e) {
			if( e.getCode() == -1 || e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
	            result.setErrorCode(e.getCode());
	            result.setErrorMsg(e.getMessage());
	            return result;
	        } else {
	            throw e;
	        }
		}
	}
}
