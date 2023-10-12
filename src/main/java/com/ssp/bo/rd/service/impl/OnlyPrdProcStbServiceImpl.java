/*------------------------------------------------------------------------------
 * NAME : OnlyPrdProcStbServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.06  나용철
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.dao.OnlyPrdPrcMngDao;
import com.ssp.bo.rd.dao.OnlyPrdProcStbDao;
import com.ssp.bo.rd.service.OnlyPrdProcStbService;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.pr.service.PrCoreService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   OnlyPrdProcStbServiceImpl
 * @@desc   업체공통클래스(샘풀) ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.05.06
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------ 
 * 2022.05.06			       최초작성
 */
@Service("onlyPrdProcStbService")
public class OnlyPrdProcStbServiceImpl implements OnlyPrdProcStbService {

    @Resource(name = "onlyPrdProcStbDao")
    private OnlyPrdProcStbDao onlyPrdProcStbDao;
    
    @Resource(name = "onlyPrdPrcMngDao")
    private OnlyPrdPrcMngDao onlyPrdPrcMngDao;
    
    @Autowired
    private PrCoreService prCoreService;
    
    /**
     * 전용상품 처리대기 리스트 조회(selectOnlyPrdProcStb)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectOnlyPrdProcStb(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        int totalCount    = onlyPrdProcStbDao.selectOnlyPrdProcStbCount(searchMap);
        List<Map> records = onlyPrdProcStbDao.selectOnlyPrdProcStb(searchMap);

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);

        return result;
    }
    
    /**
     * 전용상품처리대기 기준판매가 수정(saveOnlyPrdBssSalsprcProc)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public NexacroResult saveOnlyPrdBssSalsprcProc(List<Map<String, Object>> saveMap, Map<String, Object> userInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		String dispStatsCd = "10"; // 진열 상태
		
        try {
        	if(saveMap.size() > 0)
	        {
        		Date today = new Date();
        		SimpleDateFormat formatDate = new SimpleDateFormat("yyyyMMddHHmmss");
        		String strDt = formatDate.format(today); // 기준판매가 여부가 변경되면 시작시간을 현재시간으로 세팅하는 로직(화면에 처리와 같게)
        		
	             for (int i=0; i < saveMap.size() ; i++)
	             {
	                  Map<String,Object> saveData = saveMap.get(i);
	                  saveData.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));
	                  saveData.put("BSS_SALSPRC_USEYN", "Y");
	                  saveData.put("DISP_STATS_CD", dispStatsCd); // 진열 상태로 세팅

	                  List<Map> dsgnSalsprcList = onlyPrdPrcMngDao.selectOnlyPrdSalsDsgnSalsprc(saveData); // 영업지정판매가
	                  if(dsgnSalsprcList.size() > 0) {
	                	  Map<String, Object> dsgnSalsprdMap = dsgnSalsprcList.get(0);
	                	  
	                	  int dupCnt = onlyPrdPrcMngDao.selectOnlyPrdPrcMngDupl(saveData); // 영업지정판매가 기등록여부 확인
	                	  if(dupCnt <= 0) {
	                		  onlyPrdPrcMngDao.insertOnlyPrdSalsDsgnSalsprcMng(saveData);   // 영업지정가판매 등록  
	                	  } else {
	                		  String endDt = StringUtil.getString(dsgnSalsprdMap.get("SALS_DSGN_SALSPRC_END_DTM"));
                        	  String oldStrDt = StringUtil.getString(dsgnSalsprdMap.get("OLD_SALS_DSGN_SALSPRC_STR_DTM"));
                        	  String oldEndDt = StringUtil.getString(dsgnSalsprdMap.get("OLD_SALS_DSGN_SALSPRC_END_DTM"));
                        	  boolean chgYn = false;
                        	  if ( !strDt.equals(oldStrDt) ) {
                        		  chgYn = true;
                        	  }
                        	  if ( !endDt.equals(oldEndDt) ) {
                        		  chgYn = true;
                        	  }
                        	  
                        	  saveData.put("SALS_DSGN_SALSPRC_STR_DTM", strDt);
                	  		  saveData.put("SALS_DSGN_SALSPRC_END_DTM", endDt);
                	  		  
                 	  		  //일자가 변경 되었을경우에만 처리
                	  		  if ( chgYn ) {
        	                	  // 종료일자가 9999.12.31 23:59:59인경우 미래일자 삭제됨  
                	  			  onlyPrdPrcMngDao.deleteOnlyPrdSalsDsgnSalsprcMngHst(saveData);
        	                	  // 일자 등록 전 히스토리수정
                	  			  onlyPrdPrcMngDao.updateOnlyPrdSalsDsgnSalsprcMngHst(saveData);
                	  		  }
                	  		  
                              if ( !chgYn ) {
                            	  // 상세에서는 수정시에는 SALSPRC_DSGN_RSN, SALS_SALSPRC_ATFL_ID 값을 업데이트하여, 해당 값 업데이트 하지 않는 메소드 하나 추가
                            	  onlyPrdProcStbDao.updateOnlyPrdBssSalsprcProc(saveData); 
                              }
                              
                              if ( chgYn ) {
                            	  //일자 변경 시 이력 생성
                            	  onlyPrdPrcMngDao.insertOnlyPrdSalsDsgnSalsprcMng(saveData);
                              }
	                	  }
                              
                          // 운영단위 전체 조회하여 진열정보 등록
    	                  List<Map<String, Object>> oprUnitList = onlyPrdProcStbDao.selectOprUnitList(saveData);
    	                  
    	                  for(Map<String, Object>oprUnit : oprUnitList)
    	                  {
    	                	  saveData.put("OPR_UNIT_ID", oprUnit.get("OPR_UNIT_ID"));
    	               
    	                	  String oldDispStatsCd = onlyPrdProcStbDao.selectOldDispStatsCd(saveData);
    	                  	
    	                	  // 진열상태가 없을 경우 등록
                              if(StringUtil.isEmpty(oldDispStatsCd)) {
                              
                            	  onlyPrdPrcMngDao.insertOnlyPrdDispStatsInfo(saveData);
                                  // 진열정보 수정시 이력등록
                            	  onlyPrdPrcMngDao.insertOnlyPrdDispRegHst(saveData);
                            	  // 진열정보 상태변경시 이력등록
                            	  onlyPrdPrcMngDao.insertOnlyPrdDispStatsInfoHst(saveData);
                            	  
                            	  Map<String,Object> map = onlyPrdPrcMngDao.selectNewPrdReqInfo(saveData);
        	                	  
        	                	  if(null != map) {
        	                		  
        	                		  map.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));
        	                		  
        	                		  onlyPrdPrcMngDao.insertNewPrdReqStats(map);
        	                		  
        	                		  
        	                		  if(!"".equals(StringUtil.getString(map.get("ESTM_REQ_NO")))) {
        	                			  map.put("coCd", map.get("CO_CD"));
        	                			  map.put("newPrdReqNo", map.get("NEW_PRD_REQ_NO"));
        	                			  map.put("usrId", StringUtil.getString(userInfo.get("OPRTR_ID")));
        	                			  
        	                			  prCoreService.insertPrEstiReqStatus(map);
        	                		  }
        	                		  
        	                	  }
        	                	  
                              } else {
                            	  // 진열상태가 변경될 경우만 수정
                            	  if(!dispStatsCd.equals(oldDispStatsCd)) {
                                	  onlyPrdPrcMngDao.updateOnlyPrdDispStatsInfo(saveData);
                                	  // 진열정보 수정시 이력등록
                                	  onlyPrdPrcMngDao.insertOnlyPrdDispRegHst(saveData);
                                	  
                                	  if( !dispStatsCd.equals(oldDispStatsCd)) {
                                		  // 진열정보 상태변경시 이력등록
                                		  onlyPrdPrcMngDao.insertOnlyPrdDispStatsInfoHst(saveData);
                                	  }
                            	  }
                              }
    	                  }
	                  }
	                  
	             }
	        }
        }catch(MessageException e) {
			if( e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
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
