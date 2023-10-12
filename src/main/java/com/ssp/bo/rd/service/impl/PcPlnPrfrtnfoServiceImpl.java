package com.ssp.bo.rd.service.impl;


import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.dao.PcPlnPrfrtnfoDao;
import com.ssp.bo.rd.service.PcPlnPrfrtnfoService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * &#64;title  공용상품가격관리
 * &#64;desc 공용상품가격관리 Implementation
 * &#64;package com.ssp.bo.rd.service.impl
 * </pre>
 * 
 * @author
 * @since 2022. 03. 07
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2022.01.25 최초작성
 */
@Service("pcPlnPrfrtnfoService")
public class PcPlnPrfrtnfoServiceImpl implements PcPlnPrfrtnfoService {
	@Resource(name = "pcPlnPrfrtnfoDao")
	private PcPlnPrfrtnfoDao pcPlnPrfrtnfoDao;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectList
	 * 2. ClassName : PubPrdPrcMngDaoServiceImpl
	 * 3. Comment : 공용상품가격관리
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.03.07
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectPcPlnPrfrtnfo(Map<String,Object> searchInfo) throws Exception {
    	NexacroResult result = new NexacroResult();
    	
        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        
        // 사업장ID split
    	String bzplcId = (String) searchMap.get("bzplcId");
    	if(bzplcId != null && !"".equals(bzplcId)) {
    		if(bzplcId.contains(",")) {
	    		String[] bzplcIdArr = bzplcId.split(",");
	    		searchMap.put("bzplcIdArr", bzplcIdArr);
	    		searchMap.remove("bzplcId");
	    	}
    	}    	
    	
        // 사업장ID split
    	String oprUnitId = (String) searchMap.get("oprUnitId");
    	if(oprUnitId != null && !"".equals(oprUnitId)) {
    		if(oprUnitId.contains(",")) {
	    		String[] oprUnitIdArr = oprUnitId.split(",");
	    		searchMap.put("oprUnitIdArr", oprUnitIdArr);
	    		searchMap.remove("oprUnitId");
	    	}
    	}    
    	
    	// 상품ID split
    	String prdId = (String) searchMap.get("prdId");
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
      	int totalCount = pcPlnPrfrtnfoDao.selectPcPlnPrfrtInfoCount(searchMap);
        // 조회
        List<Map<String,Object>> list = pcPlnPrfrtnfoDao.selectPcPlnPrfrtInfo(searchMap); 
      	
      	// 리턴값 set
        result.addVariable( "totalCount", totalCount);
        result.addDataSet("ds_output1", list);
      	
        return result;
    }

	@Override
	public NexacroResult savePcPcPlnPrfrtInfo(List<Map<String, Object>> commandMapList) throws Exception {
		NexacroResult result = new NexacroResult();
	       
	    System.out.println("savePcPlnPrfrtnfo size="+commandMapList.size());

	    // 메뉴 저장
	    for( Map<String, Object> data : commandMapList ) {
	        int saveType = StringUtil.getInt(data.get("DataSetRowType"));
	        System.out.println("saveType="+saveType);
	           
	        int rtn = 0;
	        String msg = "";
	        Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
	           
	        if( saveType == 2 ) {    //  수정
		         rtn = pcPlnPrfrtnfoDao.updatePcPlnPrfrtInfo(saveMap);
		         msg = "수정";
	        }
	        if( rtn <= 0 ) throw new Exception("메인코드 " + msg + " 실패");

	    }

	    return result;
	}
}
