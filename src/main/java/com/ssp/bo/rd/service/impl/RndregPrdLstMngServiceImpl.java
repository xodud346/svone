package com.ssp.bo.rd.service.impl;


import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.controller.RdattrProcController;
import com.ssp.bo.rd.dao.RndregPrdLstMngDao;
import com.ssp.bo.rd.service.RndregPrdLstMngService;
import com.ssp.core.co.util.CommonUtil;

/**
 * <pre>
 * &#64;title  R&D등록상품목록관리
 * &#64;desc R&D등록상품목록관리 Implementation
 * &#64;package com.ssp.bo.rd.service.impl
 * </pre>
 * 
 * @author
 * @since 2022. 03. 16
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2022.03.16 최초작성
 */
@Service("rndregPrdLstMngService")
public class RndregPrdLstMngServiceImpl implements RndregPrdLstMngService {
	
	private final Logger logger = LoggerFactory.getLogger(RdattrProcController.class);
	
	@Resource(name = "rndregPrdLstMngDao")
	private RndregPrdLstMngDao rndregPrdLstMngDao;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectList
	 * 2. ClassName : RndregPrdLstMngDaoServiceImpl
	 * 3. Comment : R&D등록상품목록관리
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.03.16
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectPcPrdPrcDtls(Map<String,Object> searchInfo) throws Exception {
		
		logger.debug("<<시작>>####################RndregPrdLstMngServiceImpl####################################");
		logger.debug("searchInfo_AAAAA==>:{}",searchInfo);
		
    	NexacroResult result = new NexacroResult();
    	
        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
    	
        // 상품ID split
    	String prdId = (String) searchMap.get("prdId");
    	System.out.println("prdId="+prdId);
    	
    	if(prdId != null && !"".equals(prdId)) {
    		if(prdId.contains(",")) {
	    		String[] prdIdArr = prdId.split(",");
	    		searchMap.put("prdIdArr", prdIdArr);
	    		searchMap.remove("prdId");
	    	}
    	}    	
    	
    	//카테고리 split
    	String prdClcd = (String) searchMap.get("prdClcd");
    	if(prdClcd != null && !"".equals(prdClcd)) {
    		if(prdClcd.contains(",")) {
	    		String[] prdClcdArr = prdClcd.split(",");
	    		searchMap.put("prdClcdArr", prdClcdArr);
	    		searchMap.remove("prdClcd");
	    	}
    	}
    	
    	//담당자 split
    	String regpsnId = (String) searchMap.get("regpsnId");
    	if(regpsnId != null && !"".equals(regpsnId)) {
    		if(regpsnId.contains(",")) {
	    		String[] regpsnIdArr = regpsnId.split(",");
	    		searchMap.put("regpsnIdArr", regpsnIdArr);
	    		searchMap.remove("regpsnId");
	    	}
    	}
    	
    	//상품명 split
    	String prdNm = (String) searchMap.get("prdNm");
    	if(prdNm != null && !"".equals(prdNm)) {
    		if(prdNm.contains(",")) {
	    		String[] prdNmArr = prdNm.split(",");
	    		searchMap.put("prdNmArr", prdNmArr);
	    		searchMap.remove("prdNm");
	    	}
    	}
    	
    	//제조원 split
    	String mnfrNo = (String) searchMap.get("mnfrNo");
    	if(mnfrNo != null && !"".equals(mnfrNo)) {
    		if(mnfrNo.contains(",")) {
	    		String[] mnfrNoArr = mnfrNo.split(",");
	    		searchMap.put("mnfrNoArr", mnfrNoArr);
	    		searchMap.remove("mnfrNo");
	    	}
    	}
    	
        // 카운트
      	int totalCount = rndregPrdLstMngDao.selectPcPrdPrcDtlsCount(searchMap);
        // 조회
        List<Map<String,Object>> list = rndregPrdLstMngDao.selectPcPrdPrcDtls(searchMap); 
      	
      	// 리턴값 set
        result.addVariable( "totalCount", totalCount);
        result.addDataSet("ds_output1", list);
      	
        logger.debug("<<종료>>####################RndregPrdLstMngServiceImpl####################################");
		logger.debug("searchInfo_GGGGGGG==>:{}",result);
		
        return result;
    }

}
