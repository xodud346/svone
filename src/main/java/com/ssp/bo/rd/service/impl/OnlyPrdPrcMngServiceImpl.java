/*------------------------------------------------------------------------------
 * NAME : OnlyPrdPrcMngServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.09  나용철
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import com.ssp.bo.co.service.CoMailSendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.ibm.wsdl.util.StringUtils;
import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.ssp.bo.rd.dao.OnlyPrdPrcMngDao;
import com.ssp.bo.rd.service.OnlyPrdPrcMngService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.pr.service.PrCoreService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   OnlyPrdPrcMngServiceImpl
 * @@desc   전용상품가격관리 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.05.09
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------ 
 * 2022.05.09			       최초작성
 */
@Service("onlyPrdPrcMngService")
public class OnlyPrdPrcMngServiceImpl implements OnlyPrdPrcMngService {

    @Resource(name = "onlyPrdPrcMngDao")
    private OnlyPrdPrcMngDao onlyPrdPrcMngDao;

	@Autowired
    private PrCoreService prCoreService;
	
	@Autowired
	private CoMailSendService coMailSendService;
	
    /**
     * 전용상품가격관리 리스트 조회(selectOnlyPrdPrcMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectOnlyPrdPrcMng(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        int totalCount    = onlyPrdPrcMngDao.selectOnlyPrdPrcMngCount(searchMap);
        List<Map> records = onlyPrdPrcMngDao.selectOnlyPrdPrcMng(searchMap);

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);

        return result;
    }

    /**
     * 전용상품가격관리 등록 시 (운영단위정보) 조회(selectOprUnitInfo)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public NexacroResult selectOprUnitInfo(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

        List<Map> records = onlyPrdPrcMngDao.selectOprUnitInfo(searchMap);
        result.addDataSet("ds_oprUnitInfo",  records);

        return result;
	}


	/**
	 * 전용상품가격관리 등록/수정(saveOnlyPrdPrcMngDtl)
	 *
	 * @param userInfo
	 * @param saveMap1
	 * @param saveMap2
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult saveOnlyPrdPrcMngDtl(
		Map<String, Object> userInfo
		, List<Map<String, Object>> saveMap1
		, List<Map<String, Object>> saveMap2
	) throws Exception {
		NexacroResult result = new NexacroResult();

		int iCnt = 0;
		int iCnt2 = 0;
		int iCnt3 = 0;
		int rowType = 0;
		String prdId = "";
		String newPrdReqNo = "";
		String dispStatsChgrsn = "";
		String oldDispStatsChgrsn = "";
		String rndUscustDispStatsChgrsn = "";
		String oldRndUscustDispStatsChgrsn = "";
		String recordPKeyValue = "";

        try {
	        //영업지정판매가 등록
        	if(saveMap1.size() > 0)
	        {
	             for (int i=0; i < saveMap1.size() ; i++)
	             {
	                  Map<String,Object> saveData = saveMap1.get(i);

	                  rowType = Integer.parseInt(String.valueOf(saveData.get(DataSetRowTypeAccessor.NAME)));
	                  prdId = saveData.get("PRD_ID") + "";

					  if ( saveData.get("DISP_STATS_CHGRSN") != null ) {
	                	  dispStatsChgrsn = saveData.get("DISP_STATS_CHGRSN") + "";
	                  }
	                  oldDispStatsChgrsn = saveData.get("OLD_DISP_STATS_CHGRSN") + "";
	                  if ( saveData.get("RND_USCUST_DISP_STATS_CHGRSN") != null ) {
	                	  rndUscustDispStatsChgrsn = saveData.get("RND_USCUST_DISP_STATS_CHGRSN") + "";
	                  }
	                  oldRndUscustDispStatsChgrsn = saveData.get("OLD_RND_USCUST_DISP_STATS_CHGRSN") + "";

	                  saveData.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));
	                  if ( rowType == DataSet.ROW_TYPE_INSERTED )
	                  {
	                	  String strDt = StringUtil.getString(saveData.get("SALS_DSGN_SALSPRC_STR_DTM"));
	                	  String endDt = StringUtil.getString(saveData.get("SALS_DSGN_SALSPRC_END_DTM"));
	                	  if ( strDt.length() > 14 ) {
	            	  		saveData.put("SALS_DSGN_SALSPRC_STR_DTM", strDt.substring(0,14));
	                	  }
            	  		  if ( endDt.length() > 14 ) {
            	  			saveData.put("SALS_DSGN_SALSPRC_END_DTM", endDt.substring(0,14));
            	  		  }

	                	  iCnt += onlyPrdPrcMngDao.insertOnlyPrdSalsDsgnSalsprcMng(saveData);   // 영업지정가판매 등록
	                  }
	                  else if (rowType == DataSet.ROW_TYPE_UPDATED)
	                  {
	                	  String strDt = StringUtil.getString(saveData.get("SALS_DSGN_SALSPRC_STR_DTM"));
	                	  String endDt = StringUtil.getString(saveData.get("SALS_DSGN_SALSPRC_END_DTM"));
	                	  String oldStrDt = StringUtil.getString(saveData.get("OLD_SALS_DSGN_SALSPRC_STR_DTM"));
	                	  String oldEndDt = StringUtil.getString(saveData.get("OLD_SALS_DSGN_SALSPRC_END_DTM"));
	                	  boolean chgYn = false;
	                	  if ( !strDt.equals(oldStrDt) ) {
	                		  chgYn = true;
	                	  }
	                	  if ( !endDt.equals(oldEndDt) ) {
	                		  chgYn = true;
	                	  }

            	  		  if ( strDt.length() > 14 ) {
            	  			saveData.put("SALS_DSGN_SALSPRC_STR_DTM", strDt.substring(0,14));
	                	  }
            	  		  if ( endDt.length() > 14 ) {
            	  			saveData.put("SALS_DSGN_SALSPRC_END_DTM", endDt.substring(0,14));
            	  		  }

             	  		  //일자가 변경 되었을경우에만 처리
            	  		  if ( chgYn ) {
		                	  // 종료일자가 9999.12.31 23:59:59인경우 미래일자 삭제됨
            	  			  onlyPrdPrcMngDao.deleteOnlyPrdSalsDsgnSalsprcMngHst(saveData);
		                	  // 일자 등록 전 히스토리수정
            	  			  onlyPrdPrcMngDao.updateOnlyPrdSalsDsgnSalsprcMngHst(saveData);
            	  		  }

	                      if ( !chgYn ) {
	                    	  onlyPrdPrcMngDao.updateOnlyPrdSalsDsgnSalsprcMngHst2(saveData);
	                      }

	                      if ( chgYn ) {
	                    	  //일자 변경 시 이력 생성
	                    	  iCnt += onlyPrdPrcMngDao.insertOnlyPrdSalsDsgnSalsprcMng(saveData);
	                      }

	                  }
	              }
	        }

        	//진열정보 등록
	        if (saveMap2.size() > 0) {
		        for (int i = 0; i < saveMap2.size(); i++) {
			        Map<String, Object> saveData = saveMap2.get(i);
			        if (!"".equals(StringUtil.getString(saveData.get("NEW_PRD_REQ_NO"))))
			        {
			        	newPrdReqNo = saveData.get("NEW_PRD_REQ_NO").toString();
			        };

			        rowType = Integer.parseInt(String.valueOf(saveData.get(DataSetRowTypeAccessor.NAME)));
			        saveData.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));
//			        saveData.put("PRD_ID", prdId);
			        saveData.put("DISP_STATS_CHGRSN", dispStatsChgrsn);
			        saveData.put("RND_USCUST_DISP_STATS_CHGRSN", rndUscustDispStatsChgrsn);

			        if (rowType == DataSet.ROW_TYPE_INSERTED) {
				        iCnt2 += onlyPrdPrcMngDao.insertOnlyPrdDispStatsInfo(saveData);
				        // 진열정보 수정시 이력등록
				        onlyPrdPrcMngDao.insertOnlyPrdDispRegHst(saveData);
				        // 진열정보 상태변경시 이력등록
				        onlyPrdPrcMngDao.insertOnlyPrdDispStatsInfoHst(saveData);

				        // 2022-12-07 기준 개발된 로직 적용 | 개발의도 및 요건 확인 필요
				        Map<String, Object> map = onlyPrdPrcMngDao.selectNewPrdReqInfo(saveData);
				        if (map != null && !"".equals(StringUtil.getString(map.get("ESTM_REQ_NO")))) {
					        map.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));
					        map.put("coCd", map.get("CO_CD"));
					        map.put("newPrdReqNo", map.get("NEW_PRD_REQ_NO"));
					        map.put("usrId", StringUtil.getString(userInfo.get("OPRTR_ID")));

					        // TB_PR_DISP_ESTM_STATS_DTLS.ESTM_REQ_PROC_STATS_CD = 60(상품등록완료) 등록
					        prCoreService.insertPrEstiReqStatus(map);
				        }
			        } else if (rowType == DataSet.ROW_TYPE_UPDATED) {
				        String dispStatsCd = saveData.get("DISP_STATS_CD") + "";
				        String oldDispStatsCd = saveData.get("OLD_DISP_STATS_CD") + "";
				        iCnt2 += onlyPrdPrcMngDao.updateOnlyPrdDispStatsInfo(saveData);

				        // 진열정보 수정시 이력등록
				        onlyPrdPrcMngDao.insertOnlyPrdDispRegHst(saveData);

				        if (!dispStatsCd.equals(oldDispStatsCd) || !dispStatsChgrsn.equals(oldDispStatsChgrsn)) {
					        // 진열정보 상태변경시 이력등록
					        onlyPrdPrcMngDao.insertOnlyPrdDispStatsInfoHst(saveData);
				        }
			        }
		        }

		        Map<String, Object> PrdReqStatsCountMap = new HashMap<>();
		        PrdReqStatsCountMap.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("EMP_NO")));
		        PrdReqStatsCountMap.put("CO_CD", StringUtil.getString(userInfo.get("CO_CD")));
		        PrdReqStatsCountMap.put("NEW_PRD_REQ_NO", newPrdReqNo);
		        PrdReqStatsCountMap.put("PRD_ID", prdId);
		        // SSP-2623
		        // 최초 신규상품요청처리인지 체크 (진열상태나 영업지정판매가 수정 및, 중복처리요청 제외 )
		        int cnt = onlyPrdPrcMngDao.selectNewPrdReqStatsCount(PrdReqStatsCountMap);
		        if (cnt > 0) {
		        	// 신규상품 처리완료시
		        	PrdReqStatsCountMap.put("NEW_PRD_REQ_STATS_CD", "52");
		        	onlyPrdPrcMngDao.insertNewPrdReqStats(PrdReqStatsCountMap);
		        	// [전용] 신규상품 등록 완료 메일 발송
		        	Map<String, Object> emailDataMap = new HashMap<>();
		        	emailDataMap.put("langCd", "KO");
		        	emailDataMap.put("coCd", StringUtil.getString(userInfo.get("CO_CD")));
		        	emailDataMap.put("usrId", StringUtil.getString(userInfo.get("EMP_NO")));
		        	emailDataMap.put("newPrdReqNo", newPrdReqNo);
		        	emailDataMap.put("prdId", prdId);
		        	
		        	coMailSendService.newProductCompleteMailSend(emailDataMap);
		        	
		        }
	        }

	        recordPKeyValue = StringUtil.getString(prdId);

        } catch (MessageException e) {
	        if (e.getCode() == -100) {
		        TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
		        result.setErrorCode(e.getCode());
		        result.setErrorMsg(e.getMessage());
		        return result;
	        } else {
		        throw e;
	        }
        }

        result.addVariable("strKeyValue",recordPKeyValue);

		return result;
	}
	
	/**
     * 전용상품가격관리 등록 시 상세 조회(selectOnlyPrdPrcMngDtlReg)
     * @param searchMap
     * @return
     * @throws Exception
     */
	@Override
	public NexacroResult selectOnlyPrdPrcMngDtlReg(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		List<Map> records2 = onlyPrdPrcMngDao.selectOnlyPrdBasisInfo(searchMap);  // 전용상품 기본정보
		if(records2.size() > 0 ) 
        {	
	        if(records2.get(0).get("PRD_CLCD") != null && "".equals(records2.get(0).get("PRD_CLCD").toString()) == false)
			{
	        	searchMap.put("PRD_CLCD",     CommUtil.nvl(records2.get(0).get("PRD_CLCD")).toString());
			}
	        if (records2.get(0).get("MNFR_NO") != null && "".equals(records2.get(0).get("MNFR_NO").toString()) == false)
	        {
	        	searchMap.put("MNFR_NO",     CommUtil.nvl(records2.get(0).get("MNFR_NO")).toString());
	        }
        }
		List<Map> records = onlyPrdPrcMngDao.selectOnlyPrdPrcInfo(searchMap);     // 현재적용기준가격
		List<Map> records3 = onlyPrdPrcMngDao.selectCprtcpReqInfoInq(searchMap);  // 전용상품 요청상품정보
		List<Map> records4 = null;
		List<Map> records7= onlyPrdPrcMngDao.selectPrcList(searchMap);
		List<Map> records8  = null;
        result.addDataSet("ds_prcInfo",  records);
        result.addDataSet("ds_prdBasisInfo",  records2);
        result.addDataSet("ds_cprtcpReqInfoInq",  records3);
        result.addDataSet("ds_purcInfo",  records7);
        if(records2.size() > 0 ) 
        {	
	        if(records2.get(0).get("PRD_CLCD") != null && "".equals(records2.get(0).get("PRD_CLCD").toString()) == false)
			{
	        	searchMap.put("PRD_CLCD",     CommUtil.nvl(records2.get(0).get("PRD_CLCD")).toString());
	        	searchMap.put("OLD_PRD_CLCD", CommUtil.nvl(records2.get(0).get("PRD_CLCD")).toString());
	
		        // 카테고리 추천&조회 조회
		        records8 = onlyPrdPrcMngDao.selectCatgAttrInfo(searchMap);
		        result.addDataSet("ds_catgRcmdInq",  records8);
			}
        }
        
        if (records3.size() > 0) 
        {
	        if(records3.get(0).get("DOC_REG_ID") != null && "".equals(records3.get(0).get("DOC_REG_ID")+"") == false)
			{
	        	searchMap.put("DOC_REG_ID", CommUtil.nvl(records3.get(0).get("DOC_REG_ID")).toString());
	
		        // 협력사요청 첨부파일내역 조회
		        records4 = onlyPrdPrcMngDao.selectAttcFileDtlsInq(searchMap);      // 요청상품 첨부파일
	
		        result.addDataSet("ds_cprtcpReqAttcFile",records4);
			}
        }
        
        return result;
	}

	@Override
	public NexacroResult selectOnlyPrdPrcMngDtl(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		List<Map> records = onlyPrdPrcMngDao.selectOnlyPrdSalsDsgnSalsprc(searchMap); // 영업지정판매가
		List<Map> records2 = onlyPrdPrcMngDao.selectOnlyPrdBasisInfo(searchMap);      // 전용상품 기본정보
		if(records2.size() > 0 ) 
        {	
	        if(records2.get(0).get("PRD_CLCD") != null && "".equals(records2.get(0).get("PRD_CLCD").toString()) == false)
			{
	        	searchMap.put("PRD_CLCD",     CommUtil.nvl(records2.get(0).get("PRD_CLCD")).toString());
			}
	        if (records2.get(0).get("MNFR_NO") != null && "".equals(records2.get(0).get("MNFR_NO").toString()) == false)
	        {
	        	searchMap.put("MNFR_NO",     CommUtil.nvl(records2.get(0).get("MNFR_NO")).toString());
	        }
        }
		List<Map> records1 = onlyPrdPrcMngDao.selectOnlyPrdPrcInfo(searchMap);        // 현재적용기준가격
		List<Map> records3 = onlyPrdPrcMngDao.selectCprtcpReqInfoInq(searchMap);      // 전용상품 요청상품정보
		List<Map> records4 = null;
		List<Map> records5 = onlyPrdPrcMngDao.selectOnlyPrdSalsDsgnSalsprcHst(searchMap); // 영업지정판매가 이력
		List<Map> records6= onlyPrdPrcMngDao.selectOprUnitInfo(searchMap);
		List<Map> records7= onlyPrdPrcMngDao.selectPrcList(searchMap);
		List<Map> records8  = null;
        
		result.addDataSet("ds_master",  records);
        result.addDataSet("ds_prcInfo",  records1);
        result.addDataSet("ds_prdBasisInfo",  records2);
        result.addDataSet("ds_cprtcpReqInfoInq",  records3);
        result.addDataSet("ds_salsDsgnSalsprcHst", records5);
        result.addDataSet("ds_oprUnitInfo",  records6);
        result.addDataSet("ds_purcInfo",  records7);
        
        if(records2.size() > 0 ) 
        {	
	        if(records2.get(0).get("PRD_CLCD") != null && "".equals(records2.get(0).get("PRD_CLCD").toString()) == false)
			{
	        	searchMap.put("PRD_CLCD",     CommUtil.nvl(records2.get(0).get("PRD_CLCD")).toString());
	        	searchMap.put("OLD_PRD_CLCD", CommUtil.nvl(records2.get(0).get("PRD_CLCD")).toString());
	
		        // 카테고리 추천&조회 조회
		        records8 = onlyPrdPrcMngDao.selectCatgAttrInfo(searchMap);
		        result.addDataSet("ds_catgRcmdInq",  records8);
			}
        }
        
        if (records3.size() > 0) 
        {
	        if(records3.get(0).get("DOC_REG_ID") != null && "".equals(records3.get(0).get("DOC_REG_ID")+"") == false)
			{
	        	searchMap.put("DOC_REG_ID", CommUtil.nvl(records3.get(0).get("DOC_REG_ID")).toString());
	
		        // 협력사요청 첨부파일내역 조회
		        records4 = onlyPrdPrcMngDao.selectAttcFileDtlsInq(searchMap);      // 요청상품 첨부파일
	
		        result.addDataSet("ds_cprtcpReqAttcFile",records4);
			}
        }
        
        return result;
	}

	@Override
	public NexacroResult selectOnlyPrdPrcMngDupl(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		int duplCount    = onlyPrdPrcMngDao.selectOnlyPrdPrcMngDupl(searchMap);
		result.addVariable("duplCount",duplCount);
		return result;
	}

}