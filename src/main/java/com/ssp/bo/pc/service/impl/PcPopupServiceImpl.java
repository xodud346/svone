package com.ssp.bo.pc.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.dp.dao.DpPrdDispStatsDao;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pc.dao.PcNewPrdReqPrcDao;
import com.ssp.bo.pc.dao.PcPrcCondDao;
import com.ssp.bo.pc.dao.PcPrcMngDao;
import com.ssp.bo.pc.dao.PcPrdDlcstDtlsDao;
import com.ssp.bo.pc.dao.PcPrdPrcDao;
import com.ssp.bo.pc.dao.PcPrdQtyDtlsDao;
import com.ssp.bo.pc.dao.PcSalsDsgnSalsprcDao;
import com.ssp.bo.pc.service.PcPopupService;
import com.ssp.bo.rd.dao.CprtcpOcarTrnsreDao;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.od.service.OdOrderCommService;
import com.ssp.core.od.utils.OU;
import com.ssp.core.pc.dao.PcCoreDao;
import com.ssp.core.pr.service.PrCoreService;

/**
 * <pre>
 * @title  
 * @package com.ssp.bo.pc.service.impl
 * </pre>
 * @author scvgo17
 * @since 2022. 01. 18.
 * @version 1.0
 * @see PcPopupServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Service("pcPopupService")
public class PcPopupServiceImpl implements PcPopupService {

	@Autowired
    private PcPrcCondDao pcPrcCondDao;
	
	@Autowired
	private CprtcpOcarTrnsreDao cprtcpOcarTrnsreDao;
	
	@Autowired
	private PcPrdQtyDtlsDao prdQtyDtlsDao;
	
	@Autowired
	private PcPrdDlcstDtlsDao prdDlcstDtlsDao;
	
	@Autowired
	private PcSalsDsgnSalsprcDao salsDsgnSalsprcDao;
	
	@Autowired
	private PcNewPrdReqPrcDao pcNewPrdReqPrcDao;
	
	@Autowired
	protected SspPropertyService propertiesService;
	
	@Autowired
	private PcPrdPrcDao pcPrdPrcDao;
	
	@Autowired
	private PcPrcMngDao pcPrcMngDao;
	
	@Autowired
	private DpPrdDispStatsDao pcPrdDispDao;
	
	@Autowired
	private PcCoreDao pcCore;
	
	@Autowired
    private OdOrderCommService svcComm;
	
	@Autowired
	private PrCoreService prCoreService;
	
	/* 가격 Cond 목록 조회 */
	public NexacroResult selectPrcCondList(Map<String,Object> searchMap) throws Exception{
		
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> list = pcPrcCondDao.selectPrcCondList(searchMap);
		
		result.addDataSet("ds_output", list);
        return result;
    }
	
	/* 협력사 배송가능지역 */
	public NexacroResult selectCprtcpOcarTrnsreList(Map<String,Object> searchMap) throws Exception{
		
		NexacroResult result = new NexacroResult();
		
		int totalCount = cprtcpOcarTrnsreDao.selectCprtcpOcarTrnsreCount(searchMap);
		List<Map<String, Object>> list = cprtcpOcarTrnsreDao.selectCprtcpOcarTrnsreList(searchMap);
		
		result.addDataSet("ds_output", list);
		result.addVariable("totalCount", totalCount);
		return result;
	}
	
	/* 물랑이력 목록 */
	public NexacroResult selectPrdQtyHstList(Map<String,Object> searchMap) throws Exception{
		
		NexacroResult result = new NexacroResult();
		
		int totalCount = prdQtyDtlsDao.selectPrdQtyHstCount(searchMap);
		List<Map<String, Object>> list = prdQtyDtlsDao.selectPrdQtyHstList(searchMap);
		
		result.addDataSet("ds_output", list);
		result.addVariable("totalCount", totalCount);
		return result;
	}
	
	/* 배송비 목록 */
	public NexacroResult selectPrdDlcstHstList(Map<String,Object> searchMap) throws Exception{
		
		NexacroResult result = new NexacroResult();
		
		int totalCount = prdDlcstDtlsDao.selectPrdDlcstHstCount(searchMap);
		List<Map<String, Object>> list = prdDlcstDtlsDao.selectPrdDlcstHstList(searchMap);
		
		result.addDataSet("ds_output", list);
		result.addVariable("totalCount", totalCount);
		return result;
	}
	
	/* 영업지정판매가 이력조회 */
	public NexacroResult selectSalsDsgnSalsprcHstList(Map<String,Object> searchMap) throws Exception{
		
		NexacroResult result = new NexacroResult();
		
		String contextRealPath = propertiesService.getString("file.path.root");
		searchMap.put("contextRealPath", contextRealPath); // 이미지경로 위하여 추가
		
		int totalCount = salsDsgnSalsprcDao.selectSalsDsgnSalsprcHstCount(searchMap);
		List<Map<String, Object>> list = salsDsgnSalsprcDao.selectSalsDsgnSalsprcHstList(searchMap);
		
		result.addDataSet("ds_output", list);
		result.addVariable("totalCount", totalCount);
		return result;
	}
	
	/* 신규상품가격 예외처리 */
	public NexacroResult updateNewPrdReqPrcExcept(Map<String, Object> insertMap,List<Map<String, Object>> insertListMap) throws Exception{
		
		NexacroResult result = new NexacroResult();
		String msg = "";
		for( Map<String, Object> data : insertListMap ) {
			data = CommonUtil.toCamelCaseMap(data);
			insertMap.put("prdId", data.get("prdId"));
			insertMap.put("newPrdReqNo", data.get("newPrdReqNo"));
			insertMap.put("reqStatsCd","42");
			if("Y".equals(prCoreService.checkDuplicateStatusRequest(insertMap).get("rtnCd"))) {
				pcNewPrdReqPrcDao.updatePcNewPrdReqPrc(insertMap);
			
				if("30".equals(insertMap.get("prcProcStatsCd"))) {
					Map<  String,Object> commandMap = new HashMap<String,Object>();
					commandMap.put("coCd"       , insertMap.get("coCd")        );  // 회사코드
					commandMap.put("newPrdReqNo", insertMap.get("newPrdReqNo")   );  // 신규상품요청번호
					commandMap.put("regDisRsn"  , insertMap.get("regDisRsn"));  // 등록불가사유
					commandMap.put("usrId"      , insertMap.get("updpsnId")  );  // 수정자ID
					
					prCoreService.updateRegDisRsn(commandMap);
					pcNewPrdReqPrcDao.insertEmailNewPrdReqExcept(insertMap);
				}
			} else {
				result.addVariable("rtnMsg", "이미 예외종료된 요청이 있습니다.");
			}
			
		}
		
		return result;
	}
	
	/* 단가변동 트랜드 */
	public NexacroResult selectPrcTrendList(Map<String,Object> searchMap) throws Exception{
		
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> itemInfo = pcPrcMngDao.selectItem(searchMap);
		
		result.addDataSet("ds_output2", itemInfo);

		return result;
	}
	
	/* 가격 히스토리 목록 */
	public NexacroResult selectPrcHistoryList(Map<String,Object> searchMap) throws Exception{
		
		NexacroResult result = new NexacroResult();
		
		int totalCount = pcPrdPrcDao.selectPrcHistoryCount(searchMap);
		List<Map<String, Object>> list = pcPrdPrcDao.selectPrcHistoryList(searchMap);
		
		result.addDataSet("ds_output", list);
		result.addVariable("totalCount", totalCount);
		
        return result;
    }
	
	/* 가격 히스토리 목록 */
	public NexacroResult selectDispHistoryList(Map<String,Object> searchMap) throws Exception{
		
		NexacroResult result = new NexacroResult();
		
		int totalCount = pcPrdDispDao.selectDispHistoryCount(searchMap);
		List<Map<String, Object>> list = pcPrdDispDao.selectDispHistoryList(searchMap);
		
		result.addDataSet("ds_output", list);
		result.addVariable("totalCount", totalCount);
		
		return result;
	}
	
	/* 신규상품가격 등록처리 */
	public Map<String, Object> updateNewPrdReqPrc(Map<String, Object> insertMap, OdOrderComm odComm) throws Exception{
		
		Map<String, Object> dataMap = OU.newMap();
        Map<String, Object> returnMap = OU.newMap();

        returnMap = OU.newMap();
        
        try {
        	insertMap = svcComm.changeToCamel(insertMap);
        	insertMap.put("updpsnId", odComm.getSession().get("OPRTR_ID").toString());
        	insertMap.put("regpsnId", odComm.getSession().get("OPRTR_ID").toString());

        	//신규상품요청처리상태/가격등록요청상태를 변경할 수 있는 상태인지 확인
        	insertMap.put("REQ_STATS_CD", pcNewPrdReqPrcDao.checkDuplicateRequest(insertMap).equals("Y") ? "56" : "52"        );
        	if("Y".equals(prCoreService.checkDuplicateStatusRequest(insertMap).get("rtnCd"))) {
	        	pcNewPrdReqPrcDao.updatePcNewPrdReqPrc(insertMap);
	        	
	        	Map<  String,Object> commandMap = new HashMap<  String,Object>();
	        	commandMap.put("coCd"            , insertMap.get("coCd"));  // 회사코드
	        	commandMap.put("newPrdReqNo"     , insertMap.get("newPrdReqNo") );  // 신규상품요청번호
	        	commandMap.put("newPrdReqStatsCd", insertMap.get("REQ_STATS_CD") );  // 요청상태코드
	        	commandMap.put("usrId"           , insertMap.get("updpsnId"));  // 수정자ID
	        	
	        	prCoreService.insertPrNewPrdReqStatsDtls(commandMap);
	        	
	        	/* 221004 전시&전용 상품 생성 시 견적요청 상태 완료 변경 - KYN*/
	        	prCoreService.insertPrEstiReqStatus(commandMap);
	
	        	
	        	//pcCore.insertEmailNewPrdReqComplete(insertMap);
	        	/* 기존 상품 가격등록 완료 후 즉시 이메일 프로시저를 호출하는 방식에서 8시간 interval을 주기위해 임시 테이블에 insert*/
	        	insertMap.put("langCd","KO");
	        	pcNewPrdReqPrcDao.insertEmailSendRequest(insertMap);
        	}

        } catch (Exception e) {
            throw new LoggingException(new String[] { "PC", "BO", "savePrcMngMaster", e.getMessage() }, e);
        }
        returnMap.put("rtnCd","S");
        returnMap.put("rtnMsg","SUCCESS");
		
		return returnMap;
	}
	
}
