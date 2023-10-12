package com.ssp.bo.rd.service.impl;


import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.dao.PubPrdSalsprcQtyDao;
import com.ssp.bo.rd.service.PubPrdSalsprcQtyService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * &#64;title  공용상품처리대기 
 * &#64;desc 공용상품처리대기 Implementation
 * &#64;package com.ssp.bo.rd.service.impl
 * </pre>
 * 
 * @author
 * @since 2022. 01. 25
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2022.01.25 최초작성
 */
@Service("pubPrdSalsprcQtyService")
public class PubPrdSalsprcQtyServiceImpl implements PubPrdSalsprcQtyService {
	@Resource(name = "pubPrdSalsprcQtyDao")
	private PubPrdSalsprcQtyDao pubPrdSalsprcQtyDao;

	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectRndDesc
	 * 2. ClassName : PubPrdProcStbServiceImpl
	 * 3. Comment : 공용상품 기준판매가 상세
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.02.23
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectPrPrdInfo(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		searchMap = CommonUtil.toCamelCaseMap(searchMap);    
		
		//R&D상품
		List<Map<String, Object>> ds_main = pubPrdSalsprcQtyDao.selectPrPrdInfo(searchMap);
		result.addDataSet("ds_main",ds_main);
		
		return result;
	}

	@Override
	public NexacroResult selectDpPrdStatsInfo(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		searchMap = CommonUtil.toCamelCaseMap(searchMap);    
		
		List<Map<String, Object>> ds_main = pubPrdSalsprcQtyDao.selectDpPrdStatsInfo(searchMap);
		result.addDataSet("ds_main",ds_main);
		
		return result;
	}

	@Override
	public NexacroResult selectPurcInfo(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		searchMap = CommonUtil.toCamelCaseMap(searchMap);    
		int totalCount = pubPrdSalsprcQtyDao.selectPurcInfoCount(searchMap);

		List<Map<String, Object>> list = pubPrdSalsprcQtyDao.selectPurcInfo(searchMap);
		
        result.addVariable("totalCount", totalCount);
        result.addDataSet("ds_output1", list);
		
		return result;
	}
	
	@Override
	public NexacroResult selectPcPrdPrc(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		searchMap = CommonUtil.toCamelCaseMap(searchMap);    
		//int totalCount = pubPrdProcStbDao.selectCount(searchMap);

		List<Map<String, Object>> ds_main = pubPrdSalsprcQtyDao.selectPcPrdPrc(searchMap);
		result.addDataSet("ds_main",ds_main);
		
		return result;
	}
	
	//물량
	@Override
	public NexacroResult selectPcPrdQty(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		searchMap = CommonUtil.toCamelCaseMap(searchMap);    
		int totalCount = pubPrdSalsprcQtyDao.selectPcPrdQtyCount(searchMap);

		List<Map<String, Object>> ds_main = pubPrdSalsprcQtyDao.selectPcPrdQty(searchMap);
		
		result.addVariable("totalCount",totalCount);
		result.addDataSet("ds_main",ds_main);
		
		return result;
	}
	
	//배송비
	@Override
	public NexacroResult selectPcPrdDlcstDtls(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		searchMap = CommonUtil.toCamelCaseMap(searchMap);    
		int totalCount = pubPrdSalsprcQtyDao.selectPcPrdDlcstDtlsCount(searchMap);

		List<Map<String, Object>> ds_main = pubPrdSalsprcQtyDao.selectPcPrdDlcstDtls(searchMap);
		
		result.addVariable("totalCount2", totalCount);
		result.addDataSet("ds_main",ds_main);
		
		return result;
	}
	
	//요청상품정보
	@Override
	public NexacroResult selectRdReqNewPrdInfo(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		searchMap = CommonUtil.toCamelCaseMap(searchMap);    
		//int totalCount = pubPrdSalsprcQtyDao.selectPcPrdDlcstCount(searchMap);

		List<Map<String, Object>> ds_main = pubPrdSalsprcQtyDao.selectRdReqNewPrdInfo(searchMap);
		
		result.addDataSet("ds_main",ds_main);
		
		return result;
	}	
	
	@Override
	public NexacroResult saveDpPrdStatsInfo(List<Map<String, Object>> commandMapList) throws Exception {
	       NexacroResult result = new NexacroResult();
	       
	       System.out.println("size="+commandMapList.size());

	       // 메뉴 저장
	       for( Map<String, Object> data : commandMapList ) {
	           int saveType = StringUtil.getInt(data.get("DataSetRowType"));
	           System.out.println("saveType="+saveType);
	           
	           int rtn = 0;
	           String msg = "";
	           Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
	           
	           if( saveType == 2 ) {    //  수정
		            rtn = pubPrdSalsprcQtyDao.updateDpPrdStatsInfo(saveMap);
		            msg = "수정";
	           }

	           if( saveType == 1 ) {   // 신규
	               rtn = pubPrdSalsprcQtyDao.insertDpPrdStatsInfo(saveMap);
	               msg = "등록";
	           }
//	           } else if( saveType == 2 ) {    //  수정
//	               rtn = coMnuMngDao.updateComMenu(saveMap);
//	               msg = "수정";
//	           } else if( saveType == 3 ) {    //  삭제
//	               rtn = coMnuMngDao.deleteComMenu(saveMap);
//	               msg = "삭제";
//	           }
	           if( rtn <= 0 ) throw new Exception("메인코드 " + msg + " 실패");

	       }

	       return result;
	}
	
	@Override
	public NexacroResult savePcPrdPrcDtls(List<Map<String, Object>> commandMapList) throws Exception {
	       NexacroResult result = new NexacroResult();
	       
	       System.out.println("savePcPrdPrcDtls size="+commandMapList.size());

	       // 메뉴 저장
	       for( Map<String, Object> data : commandMapList ) {
	           int saveType = StringUtil.getInt(data.get("DataSetRowType"));
	           System.out.println("saveType="+saveType);
	           
	           int rtn = 0;
	           String msg = "";
	           Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
	           
	           if( saveType == 2 ) {    //  수정
		            rtn = pubPrdSalsprcQtyDao.updatePcPrdPrcDtls(saveMap);
		            msg = "수정";
	           }

//	           if( saveType == 1 ) {   // 신규
//	               rtn = pubPrdSalsprcQtyDao.insertDpPrdStatsInfo(saveMap);
//	               msg = "등록";
//	           }
//	           } else if( saveType == 2 ) {    //  수정
//	               rtn = coMnuMngDao.updateComMenu(saveMap);
//	               msg = "수정";
//	           } else if( saveType == 3 ) {    //  삭제
//	               rtn = coMnuMngDao.deleteComMenu(saveMap);
//	               msg = "삭제";
//	           }
	           if( rtn <= 0 ) throw new Exception("메인코드 " + msg + " 실패");

	       }

	       return result;
	   }
	
	
	@Override
	public NexacroResult saveRndQtyDc(List<Map<String, Object>> commandMapList) throws Exception {
	       NexacroResult result = new NexacroResult();
	       
	       System.out.println("saveRndQtyDc size="+commandMapList.size());

	       // 메뉴 저장
	       for( Map<String, Object> data : commandMapList ) {
	           int saveType = StringUtil.getInt(data.get("DataSetRowType"));
	           System.out.println("saveType="+saveType);
	           
	           int rtn = 0;
	           String msg = "";
	           Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
	           
	           if( saveType == 2 ) {    //  수정
		           rtn = pubPrdSalsprcQtyDao.updatePcPrdQtyDtls(saveMap);
		           msg = "수정";
	           }

	           if( saveType == 1 ) {   // 신규
	               rtn = pubPrdSalsprcQtyDao.insertPcPrdQtyDtls(saveMap);
	               msg = "등록";
	           } 
	           
	           if( saveType == 3 ) {    //  삭제
	               rtn = pubPrdSalsprcQtyDao.deletePcPrdQtyDtls(saveMap);
	               msg = "삭제";
	           }
//	           } else if( saveType == 2 ) {    //  수정
//	               rtn = coMnuMngDao.updateComMenu(saveMap);
//	               msg = "수정";
//	           } 
	           if( rtn <= 0 ) throw new Exception("메인코드 " + msg + " 실패");

	       }

	       return result;
	   }
	
	@Override
	public NexacroResult savePcPrdDlcstDtls(List<Map<String, Object>> commandMapList) throws Exception {
	       NexacroResult result = new NexacroResult();
	       
	       // 메뉴 저장
	       for( Map<String, Object> data : commandMapList ) {
	           int saveType = StringUtil.getInt(data.get("DataSetRowType"));
	           System.out.println("saveType="+saveType);
	           
	           int rtn = 0;
	           String msg = "";
	           Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
	           
	           if( saveType == 2 ) {    //  수정
		           rtn = pubPrdSalsprcQtyDao.updatePcPrdDlcstDtls(saveMap);
		           msg = "수정";
	           }

	           if( saveType == 1 ) {   // 신규
	               rtn = pubPrdSalsprcQtyDao.insertPcPrdDlcstDtls(saveMap);
	               msg = "등록";
	           } 
	           
	           if( saveType == 3 ) {    //  삭제
	               rtn = pubPrdSalsprcQtyDao.deletePcPrdDlcstDtls(saveMap);
	               msg = "삭제";
	           }

	           if( rtn <= 0 ) throw new Exception("메인코드 " + msg + " 실패");

	       }

	       return result;
	   }
}
