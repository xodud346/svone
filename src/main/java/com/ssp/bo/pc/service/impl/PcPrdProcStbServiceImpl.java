package com.ssp.bo.pc.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.dp.dao.DpPrdDispStatsDao;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pc.dao.PcExPrcMngDao;
import com.ssp.bo.pc.dao.PcNewPrdReqPrcDao;
import com.ssp.bo.pc.dao.PcPrcMngDao;
import com.ssp.bo.pc.dao.PcPrdPrcDao;
import com.ssp.bo.pc.dao.PcPrdProcStbDao;
import com.ssp.bo.pc.dao.PcSalsDsgnSalsprcDao;
import com.ssp.bo.pc.service.PcPrdProcStbService;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.od.service.OdOrderCommService;
import com.ssp.core.pc.dao.PcCoreDao;
import com.ssp.core.pr.service.PrCoreService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title
 * @package com.ssp.bo.pc.service.impl
 * </pre>
 * @author scvgo17
 * @since 2022. 01. 18.
 * @version 1.0
 * @see PcPrdProcStbServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *
 */
@Service("pcPrdProcStbService")
public class PcPrdProcStbServiceImpl implements PcPrdProcStbService {

	@Autowired
    private PcPrdProcStbDao prdProcStb;

	@Autowired
	private PcNewPrdReqPrcDao newPrdReqPrcDao;
	
	@Autowired
	private PcPrcMngDao pcPrcMngDao;
	
	@Autowired
	private PcPrdPrcDao pcPrdPrcDao;
	
	@Autowired
	private PcExPrcMngDao pcExPrcMngDao;
	
	@Autowired
	private DpPrdDispStatsDao dpPrdDispStatsDao;
	
	@Autowired
	private PcSalsDsgnSalsprcDao pcSalsDsgnSalsprcDao;

    @Autowired
	protected SspPropertyService propertiesService;
    
	@Autowired
	private PcCoreDao pcCoreDao;
    
    @Autowired
    private OdOrderCommService svcComm;
    
    @Autowired
	private PrCoreService prCoreService;


	public NexacroResult selectPcPubPrdProcStbList(Map<String,Object> searchMap) throws Exception{

		NexacroResult result = new NexacroResult();

		String newPrdReqNos = StringUtil.getString(searchMap.get("newPrdReqNo"), "");

		if(!"".equals(newPrdReqNos) && null != newPrdReqNos) {
			String[] newPrdReqList = newPrdReqNos.split(",");
			searchMap.put("newPrdReqList", newPrdReqList);
		}



		int totalCount = prdProcStb.selectPcPubPrdProcStbCount(searchMap);
		List<Map<String, Object>> list = prdProcStb.selectPcPubPrdProcStbList(searchMap);

		result.addDataSet("ds_output", list);
		result.addVariable("totalCount", totalCount);

        return result;
    }

	@Override
	public int insertNewPrdReqPrc(Map<String, Object> commandMap) throws Exception {

		// 필수 파라미터 : coCd(회사코드), newPrdReqNo(신규상품번호), prdId(상품ID), regpsnId(등록자)
		commandMap.put("prcProcStatsCd","10");

		return newPrdReqPrcDao.updatePcNewPrdReqPrc(commandMap);
	}
	
	@Override
	public NexacroResult insertPcPrdProcStb(List<Map<String, Object>> commandMapList,OdOrderComm odComm) throws Exception {
		// TODO Auto-generated method stub
		
		NexacroResult result = new NexacroResult();
		int totalcnt = 0;
		int successCnt = 0;
		int failedCnt = 0;
		
		if(commandMapList != null) {
			
			totalcnt = commandMapList.size();
			String strCurrDtm = pcPrdPrcDao.selectCurrentDtm(null);
			
	        for( Map<String, Object> data : commandMapList ) {
	        	
	            Map<String, Object> saveMap = svcComm.changeToCamel(data);
	            saveMap.put("coCd", odComm.getSession().get("OPRTR_CO_CD").toString());
	            saveMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
	            saveMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
	            
	            List<Map<String, Object>> dispMap = null;
	            if(saveMap.get("bzplcId") != null && !"*".equals(saveMap.get("bzplcId"))) {
	            	dispMap = pcExPrcMngDao.selectOprUnitDispList(saveMap);
                }else {
                	dispMap = pcPrcMngDao.selectPubDispList(saveMap);
                }
	            
	            if(dispMap != null && dispMap.size() > 0) {
	            	List<Map<String, Object>> pcPrdPrcInfos = pcPrcMngDao.selectPcPrdPrcList(saveMap);
	            	if(pcPrdPrcInfos != null && pcPrdPrcInfos.size() > 0) {
	            		Map<String, Object> prcMap = pcPrdPrcInfos.get(0);
	            		prcMap = svcComm.changeToCamel(prcMap);
	            		System.out.println(prcMap);
	            		
	            		//영업지정판매가 등록
	                    if(saveMap.get("bzplcId") != null && !"*".equals(saveMap.get("bzplcId"))) {
	                    	List<Map<String, Object>> salsPrcHist = pcExPrcMngDao.selectSalsPrcHistList(saveMap);
	                    	if(salsPrcHist == null || (salsPrcHist != null && salsPrcHist.size() == 0)) {
	                    		Map<String, Object> saveSals = saveMap;
	                    		saveSals.put("salsDsgnSalsprc",0);
	                    		saveSals.put("salsDsgnSalsprcStrDtm",strCurrDtm);
	                    		saveSals.put("salsDsgnSalsprcEndDtm","99991231235959");
	                    		saveSals.put("bssSalsprcUseyn","Y");
	                    		saveSals.put("fstHstYn","Y");
	                    		pcSalsDsgnSalsprcDao.insertPcSalsprcHist(saveSals);
	                    	}
	                    }
	            		
	            		for(int i = 0; i< dispMap.size(); i++) {
	            			//진열 등록
		            		Map<String, Object> forMap = dispMap.get(i);
		            		forMap = svcComm.changeToCamel(forMap);
		            		System.out.println(forMap);
		            		forMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
	            			forMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
	            			forMap.put("dispRegStrDtm", strCurrDtm);
	            			forMap.put("dispStatsCd", "10");
	            			forMap.put("iudGb", "I");
							if( dpPrdDispStatsDao.selectPcPrdDispHistCount(forMap) < 1) {
            					dpPrdDispStatsDao.insertDispRegHist(forMap);
        						dpPrdDispStatsDao.insertDispRegHistLast(forMap);
							}
		            	}

						// 다중 처리 시 기준판매가 중복 여부 체크 후

							//기준판매가 등록
							prcMap.put("bssSalsprcStrDtm", strCurrDtm);
							prcMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
							prcMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());
							prcMap.put("iudGb", "U");
							if(pcPrdPrcDao.selectPcPrdPrcFstHstCount(prcMap) > 0) {
								prcMap.put("fstHstYn","N");
							}
							if( pcPrdPrcDao.selectPcPrdPrcHistCount(prcMap) < 1) {
							pcPrdPrcDao.insertPcPrdPrcHist(prcMap);
							pcPrdPrcDao.insertPcPrdPrcHistLast(prcMap);
							}
	                    
	                    //진열 이력 등록
	                    dpPrdDispStatsDao.insertDispStatsInfoHist(saveMap);
	                    saveMap.put("reqStatsCd",newPrdReqPrcDao.checkDuplicateRequest(saveMap).equals("Y") ? "56" : "52");
	                    //신규상품요청처리상태/가격등록요청상태를 변경할 수 있는 상태인지 확인
	                    if("Y".equals(prCoreService.checkDuplicateStatusRequest(saveMap).get("rtnCd"))) {
	                    	saveMap.put("prcProcStatsCd", "20");
	                    	newPrdReqPrcDao.updatePcNewPrdReqPrc(saveMap);
	                	
	                    	Map<  String,Object> commandMap = new HashMap<  String,Object>();

	                    	commandMap.put("coCd"            , saveMap.get("coCd"));  // 회사코드
	                    	commandMap.put("newPrdReqNo"     , saveMap.get("newPrdReqNo") );  // 신규상품요청번호
	                    	commandMap.put("newPrdReqStatsCd", saveMap.get("reqStatsCd")        );  // 요청상태코드
	                		commandMap.put("usrId"           , saveMap.get("updpsnId"));  // 수정자ID
	                		commandMap.put("reqStatsCd", commandMap.get("newPrdReqStatsCd"));  // 요청상태코드
	                	
	                	
	                		prCoreService.insertPrNewPrdReqStatsDtls(commandMap);
	                	
	                		/* 221004 전시&전용 상품 생성 시 견적요청 상태 완료 변경 - KYN*/
	                		prCoreService.insertPrEstiReqStatus(commandMap);

	                		//	완료 메일 보내기
	                		//	pcCoreDao.insertEmailNewPrdReqComplete(saveMap);
	                		/* 기존 상품 가격등록 완료 후 즉시 이메일 프로시저를 호출하는 방식에서 8시간 interval을 주기위해 임시 테이블에 insert*/
	                		saveMap.put("langCd","KO");
							saveMap.put("usrId",odComm.getSession().get("OPRTR_ID").toString());
	                		newPrdReqPrcDao.insertEmailSendRequest(saveMap);
	                	}
	                	successCnt++;
	            		
	            	}else {
	            		//구매정보 없음
	            		failedCnt++;
	            	}
	            }
	        }
		}
	        
        if(failedCnt > 0) {
        	result.setErrorCode(-100);
        	result.setErrorMsg("총 "+totalcnt+"건 중 "+successCnt+"건 성공, "+failedCnt+"건 처리 실패하였습니다.\r\n" + 
        			"구매정보 확인 후 재처리 해주시기 바랍니다. \r\n" + 
        			"");
        }
		
		return result;
	}

}
