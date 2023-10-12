package com.ssp.bo.da.service.impl;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.co.controller.CoCommonController;
import com.ssp.bo.da.dao.dashBoardDao;
import com.ssp.bo.da.service.dashBoardService;
import com.ssp.core.od.utils.OU;
import com.ssp.core.util.StringUtil;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service("dashBoardService")
public class dashBoradServiceImpl implements dashBoardService{
	private final Logger logger = LoggerFactory.getLogger(CoCommonController.class);

	@Resource(name = "dashBoardDao")
	private dashBoardDao dashBoardDao;

	
	/**
	 * @param searchMap
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectDashBoardLst(Map<String, Object> paramMap, HttpSession session) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> map = new HashMap<>();
		List<Map<String, Object>> records = new ArrayList<>();
		List<Map<String, Object>> menuList = new ArrayList<>();
		
		String teamLeaderYn = "";	// 팀장여부 
		String RndYn = "";			// Rnd 여부 
		Map<String, Object> authMap = new HashMap<>();
		
		String coCd    = StringUtil.getString(paramMap.get("CO_CD"));
		String oprtrId = StringUtil.getString(paramMap.get("OPRTR_ID"));
//		String oprtrNm = StringUtil.getString(paramMap.get("OPRTR_NM"));
//		String jbCd    = StringUtil.getString(paramMap.get("JB_CD"));
		String jbposNm = StringUtil.getString(paramMap.get("JBPOS_NM"));
		String orgCd   = StringUtil.getString(paramMap.get("ORG_CD"));
		String period  = StringUtil.getString(paramMap.get("PERIOD"));
		String init    = StringUtil.getString(paramMap.get("INIT"));
		
		map.put("coCd", coCd);
		// 3개월 구분
		map.put("period", period);
		
		// 조직 구분
		Map<String, Object> sMap = OU.newMap();
		sMap.put("comClsfCd", "TO_DO_ORG_TGT_CD");
		sMap.put("comDtlCd", orgCd);
		Map<String, Object> orgTypeMap = dashBoardDao.selectOprType(sMap);
		
		// TO DO 타입
		String orgType         = orgTypeMap != null && orgTypeMap.get("comUsrDefnNm1") != null ? StringUtil.getString(orgTypeMap.get("comUsrDefnNm1")) : "";
		// 타입별 메뉴 목록
		String mnuSeqs         = orgTypeMap != null && orgTypeMap.get("comUsrDefnNm3") != null ? StringUtil.getString(orgTypeMap.get("comUsrDefnNm3")) : "";
		// 상품담당자 / MD 담당자 설정
		String prdClsfChrpsnTp = orgTypeMap != null && orgTypeMap.get("comUsrDefnNm4") != null ? StringUtil.getString(orgTypeMap.get("comUsrDefnNm4")) : "";
		
		if(StringUtils.equals(init, "Y")) {
			if(StringUtil.isNotEmpty(orgType)){
				authMap.put("SEARCH_YN", "Y");
			}else {
				authMap.put("SEARCH_YN", "N");
			}
			result.addDataSet("ds_auth", authMap);
			return result;
		} 
		
		if(StringUtil.isNotEmpty(orgType)) {
			
			map.put("prdClsfChrpsnTpCd", prdClsfChrpsnTp);
			
			map.put("mnuSeqs", mnuSeqs);
			menuList = dashBoardDao.selectMenuList(map);
			
			// 팀장 체크
			String teamReaderOrgCd = "";
			if("팀장".equals(jbposNm)) {
				teamReaderOrgCd = orgCd;
				teamLeaderYn = "Y";
			}else {
				sMap.clear();
				sMap.put("comClsfCd", "TO_DO_ORG_SUB_TM_CD");
				sMap.put("comDtlCd", oprtrId);
				teamReaderOrgCd = dashBoardDao.selectChildTeamReader(sMap);
			}
			
			if(StringUtil.isNotEmpty(teamReaderOrgCd)) {
				map.put("orgCd", teamReaderOrgCd);
			}else {
				map.put("oprtrId", oprtrId);
			}
			
			
			if("MD".equals(orgType)) { // MD1팀, MD2팀
				// 상품관리 - 전시상품관리 - 견적요청관리 : 요청
				map.put("menuNm", "견적요청관리(요청)");
				map.put("estmReqProcStatsCd", "10");
				records.addAll(dashBoardDao.selectBoardEstimateCntLst(map));
				
				// 상품관리 - 전시상품관리 - 견적요청관리 : 상품등록요청
				map.put("menuNm", "견적요청관리(상품등록요청)");
				map.put("estmReqProcStatsCd", "50");
				records.addAll(dashBoardDao.selectBoardEstimateCntLst(map));
				map.remove("estmReqProcStatsCd");
				
				// 상품관리 - 상품등록 - 신규상품요청처리 : 추가정보등록요청
				map.put("menuNm", "신규상품요청처리(추가정보등록요청)");
				map.put("newPrdReqStatsCd", "27");
				records.addAll(dashBoardDao.selectBoardNewProductCntLst(map)); // 27 : 추가정보등록요청
				map.remove("newPrdReqStatsCd");
				
				// 상품관리 - 상품등록 - 상품추가 : 요청
				map.put("menuNm", "상품추가(요청)");
				map.put("regProdPrdStatsCd", "REQ");
				records.addAll(dashBoardDao.selectBoardProductCntList(map));    // REQ : 요청
				
				// 상품관리 - 상품등록 - 상품추가 : 접수
				map.put("menuNm", "상품추가(접수)");
				map.put("regProdPrdStatsCd", "ACCEPT");
				records.addAll(dashBoardDao.selectBoardProductCntList(map)); // ACCEPT : 접수
				map.remove("regProdPrdStatsCd");
				
				// 가격/진열관리 - 가격/진열관리 - 공용상품가격관리
				// 일시품절_공급불가상태
				map.put("menuNm", "공용상품가격관리(일시품절,공급불가상태)");
				map.put("dispStatsCd", "30"); // 일시품절
				map.put("dispAbno", "20");    // 공급불가상태
				records.addAll(dashBoardDao.selectPubCntList(map));
				
				// 일시품절_판매유효기간만료
				map.put("menuNm", "공용상품가격관리(일시품절,판매유효기간만료)");
				map.put("dispStatsCd", "30"); // 일시품절
				map.put("dispAbno", "30");    // 판매유효기간만료
				records.addAll(dashBoardDao.selectPubCntList(map));
				
				// 일시품절_안전재고이하
				map.put("menuNm", "공용상품가격관리(일시품절,안전재고이하)");
				map.put("dispStatsCd", "30"); // 일시품절
				map.put("dispAbno", "40");    // 안전재고이하
				records.addAll(dashBoardDao.selectPubCntList(map));
				
				// 매입가인상
				map.put("menuNm", "공용상품가격관리(매입가인상)");
				map.put("dispStatsCd", ""); // 일시품절
				map.put("dispAbno", "10");    // 매입가인상
				records.addAll(dashBoardDao.selectPubCntList(map));
				
				// 공급불가상태
				map.put("menuNm", "공용상품가격관리(공급불가상태)");
				map.put("dispStatsCd", ""); // 일시품절
				map.put("dispAbno", "20");    // 공급불가상태
				records.addAll(dashBoardDao.selectPubCntList(map));
				
				// 상태 삭제
				map.remove("dispStatsCd");
				map.remove("dispAbno");
			}
			
			if("PRD".equals(orgType)) {	 // 컨텐츠관리팀
				// 상품관리 - 상품등록 - 신규상품요청처리 : 추가정보등록요청
				map.put("menuNm", "신규상품요청처리(요청)");
				map.put("newPrdReqStatsCd", "22");
				records.addAll(dashBoardDao.selectBoardNewProductCntLst(map)); // 27 : 추가정보등록요청
				map.remove("newPrdReqStatsCd");
				map.put("menuNm", "신규상품요청처리(접수)");
				map.put("newPrdReqStatsCd", "25");
				records.addAll(dashBoardDao.selectBoardNewProductCntLst(map)); // 27 : 추가정보등록요청
				map.remove("newPrdReqStatsCd");
				map.put("menuNm", "신규상품요청처리(처리대기)");
				map.put("newPrdReqStatsCd", "32");
				records.addAll(dashBoardDao.selectBoardNewProductCntLst(map)); // 27 : 추가정보등록요청
				map.remove("newPrdReqStatsCd");
				map.put("menuNm", "신규상품요청처리(R&D이관반려)");
				map.put("newPrdReqStatsCd", "35");
				records.addAll(dashBoardDao.selectBoardNewProductCntLst(map)); // 27 : 추가정보등록요청
				map.remove("newPrdReqStatsCd");
				
				// 상품관리 - 상품등록 - 상품추가 : 요청
				map.put("menuNm", "상품추가(요청)");
				map.put("regProdPrdStatsCd", "REQ");
				records.addAll(dashBoardDao.selectBoardProductCntList(map));    // REQ : 요청 
				// 상품관리 - 상품등록 - 상품추가 : 접수
				map.put("menuNm", "상품추가(접수)");
				map.put("regProdPrdStatsCd", "ACCEPT");
				records.addAll(dashBoardDao.selectBoardProductCntList(map)); // ACCEPT : 접수 
				map.remove("regProdPrdStatsCd");
			}
			
			if("EXH".equals(orgType)) {	 // SSP기획팀-> SSP전략기획팀
				// 고객관리 - 고객조회/변경 - 일반고객 종결대상 사업장  : SSP 기획팀 
				map.put("menuNm", "일반고객 종결대상 사업장(종결대기)");
				map.put("trmnProcDtm", "");
				records.addAll(dashBoardDao.selectCustTrmnTgEndtBzplc(map));
				map.remove("trmnProcDtm");
			}
			
			if("OPR".equals(orgType)) {	 // 플랫폼운영팀-> SSP운영팀
				// 정산관리 - 고객사입고처리
				map.put("menuNm", "고객사입고처리(주문자미입고)");
				map.put("giStatsCd", "10");
				records.addAll(dashBoardDao.selectWarehousingList(map));
				map.remove("giStatsCd");
				
				// 주문관리 - 주문조회/변경 - 주문조회
				map.put("menuNm", "주문조회(결재신청)");
				map.put("odrStatsCd", "A00,A25,A31,B12");
				map.put("custSprCd", "");
				records.addAll(dashBoardDao.selectOrderOprCntList(map));
				map.remove("odrStatsCd");
				map.remove("custSprCd");
			}
			if("SLS".equals(orgType)) {	 // SSP 수주팀 
				// 가격/진열관리 - 신규상품가격처리 - 전용상품처리대기
				map.put("menuNm", "전용상품처리대기(가격등록요청)");
				map.put("prcProcStatsCd", "10");
				map.put("pubOnlySprCd", "E");
				records.addAll(dashBoardDao.selectPcPubPrdProcStbCntList(map));  // 가격등록요청
				map.remove("prcProcStatsCd");
				map.remove("pubOnlySprCd");
			}
			
			if("RND".equals(orgType)) { // R&D
				// R&D상품관리 - R&D상품등록 - 신규상품등록요청목록 
				map.put("menuNm", "신규상품등록요청목록(요청)"); 
				map.put("newPrdReqStatsCd", "22,33");
				records.addAll(dashBoardDao.selectNewPrdReqCntList(map));  // 요청
				map.remove("newPrdReqStatsCd");
				
				map.put("menuNm", "신규상품등록요청목록(SSP반려)"); 
				map.put("newPrdReqStatsCd", "34");
				records.addAll(dashBoardDao.selectNewPrdReqCntList(map));  // 요청
				map.remove("newPrdReqStatsCd");
				
				// R&D상품관리 - R&D상품등록 - 신규상품일괄등록요청목록    (20230922 작업완료)
				map.put("menuNm", "신규상품일괄등록요청목록(요청)"); 
				map.put("newPrdReqStatsCd", "22,33");
				records.addAll(dashBoardDao.selectNewPrdMltReqList(map));  // 요청
				map.remove("newPrdReqStatsCd");
				
				// R&D상품관리 - R&D등록상품관리 - 견적요청목록(처리완료/처리불가제외)
				map.put("menuNm", "견적요청목록(처리완료/처리불가제외)"); 
				map.put("estmInfoStatsCd", "10,20,30,60");
				records.addAll(dashBoardDao.selectCprtcpEstmReqMngNotCntList(map)); 
				map.remove("estmInfoStatsCd");
				
				// R&D상품관리 - R&D등록상품관리 - 구매정보 일괄변경 관리 
				map.put("menuNm", "구매정보일괄변경관리 (요청)"); 
				map.put("elcContApprStatsCd", "10,20,30,60");
				records.addAll(dashBoardDao.selectPurgInfoPkgChgCntList(map));    // 요청
				map.remove("elcContApprStatsCd");
				
				// R&D상품관리 - R&D화학물질관리 - CMS 오류정비 
				map.put("menuNm", "CMS오류정비(정비완료제외)"); 
				map.put("estmInfoStatsCd", "10,20,30,50");
				records.addAll(dashBoardDao.selectCmsErrRepairCntList(map));    // 정비완료 제외 

				// R&D상품관리 - R&D전시상품관리  - 전시상품견적요청목록
				map.put("menuNm", "전시상품견적요청목록(처리완료/처리불가제외)");
//				map.put("procStatsCd", "999,10,20");
				map.put("procStatsCd", "");
				records.addAll(dashBoardDao.selectProductEstimateList(map));    //요청, 접수, 견적중
				map.remove("procStatsCd");
			
				// R&D가격관리 - 처리대기목록  - 공용상품처리대기
				map.put("menuNm", "공용상품처리대기(가격등록요청)");
				map.put("prcProcStatsCd", "10");
				map.put("pubOnlySprCd", "P");
				records.addAll(dashBoardDao.selectPubPrdProcStbList(map));    // 요청 	
				map.remove("prcProcStatsCd");
				map.remove("pubOnlySprCd");

				// R&D가격관리 - 처리대기목록  - 전용상품처리대기
				map.put("menuNm", "전용상품처리대기(가격등록요청)");
				map.put("prcProcStatsCd", "10");
				map.put("pubOnlySprCd", "E");
				records.addAll(dashBoardDao.selectOnlyPrdProcStbList(map));    // 요청 	
				map.remove("prcProcStatsCd");
				map.remove("pubOnlySprCd");
			}
			
			
			if(StringUtil.isNotEmpty(teamReaderOrgCd)) {
				// 팀장
				List<Map<String, Object>> dataList = personDataList(menuList, records);
				List<Map<String, Object>> ds_master = OU.newList();
				for (int i = 0; i < dataList.size(); i++) {
					if("1".equals(StringUtil.getString(dataList.get(i).get("MNU_LVL")))) {
						ds_master.add(dataList.get(i));
					}
				}
				result.addDataSet("ds_master", ds_master);
				 
				if("RND".equals(orgType)) {
					RndYn = "Y";
					List<Map<String, Object>> newItems = new ArrayList<>(); //  신규상품현황
					List<Map<String, Object>> buyInfos = new ArrayList<>(); //  구매정보현황
					// 신규상품등록현황
					// newItems.addAll(dashBoardDao.selectNewItemList(map));
					// 배치로 변경
					newItems.addAll(dashBoardDao.selectNewItemListBatch(map));
					
					List<Map<String, Object>> itemDataList = newItemDataList(newItems);
					result.addDataSet("ds_master4", itemDataList);
					
					//구매정보현황
//					buyInfos.addAll(dashBoardDao.selectRndPrdCprtcpCntList(map));
					// 배치로 변경
					buyInfos.addAll(dashBoardDao.selectRndPrdCprtcpCntListBatch(map));
					
					List<Map<String, Object>> buyDataList = buyInfoDataList(buyInfos);
					result.addDataSet("ds_master5", buyDataList);
				}else {
					// 항목별 팀원
					result.addDataSet("ds_master2", teamMenuDataList(menuList, records));
					// 팀원별 항목
					result.addDataSet("ds_master3", teamPersonDataList(menuList, records));
				}
				
			}else {
				// 개인
				List<Map<String, Object>> ds_master = personDataList(menuList, records);
				if("RND".equals(orgType)) {
					List<Map<String, Object>> dataListResult = OU.newList();
					for (int i = 0; i < ds_master.size(); i++) {
						if(StringUtil.isNotEmpty(StringUtil.getString(ds_master.get(i).get("OPRTR_NM")))) {
							dataListResult.add(ds_master.get(i));
						}
					}
					result.addDataSet("ds_master", dataListResult);
				} else {
					result.addDataSet("ds_master", ds_master);
				}
			}
			
			authMap.put("TEAM_LEADER_YN", teamLeaderYn);
			authMap.put("RND_YN", RndYn);
			authMap.put("R_YN", "Y");
			authMap.put("USER_ID", oprtrId);
			result.addDataSet("ds_auth", authMap);
		}
		return result;
	}
	
	public List<Map<String, Object>> personDataList(List<Map<String, Object>> menuList, List<Map<String, Object>> records) {
		List<Map<String, Object>> dataList = new ArrayList<>();
		Map<String, Object> menuListInfo = new HashMap<>();
		
		Map<String, Object> recordData = new HashMap<>();
		for(int i = 0 ; i < menuList.size(); i++) {
			dataList.add(menuList.get(i));
			menuListInfo = menuList.get(i);
			
			for(int k=0; k < records.size(); k++) {
				if(menuList.get(i).get("MNU_SEQ").equals(records.get(k).get("HRNK_MNU_SEQ"))) {
					Map<String, Object> dataMap = new HashMap<>(); 
					recordData = records.get(k);
					
					String mnuLvl = StringUtil.getString(menuListInfo.get("MNU_LVL"));
					int lvlCount = (Integer.parseInt(mnuLvl)+1);
					String idx = String.valueOf(lvlCount);
					
					String delayCnt = String.valueOf(recordData.get("DELAY_CNT"));
					String okCnt = String.valueOf(recordData.get("OK_CNT"));
					int delayInt = Integer.parseInt(delayCnt);
					int okInt = Integer.parseInt(okCnt);
					int cntSum = (delayInt+okInt); 
					
					dataMap.put("MNU_SEQ"       , StringUtil.getString(recordData.get("MNU_SEQ")));
					dataMap.put("MNU_NM"        , StringUtil.getString(recordData.get("MNU_NM")));
					dataMap.put("MNU_LVL"       , idx);
					dataMap.put("MNU_LVL_SPR_CD", StringUtil.getString(menuListInfo.get("MNU_LVL_SPR_CD")));
					dataMap.put("MNU_TP_CD"     , StringUtil.getString(menuListInfo.get("MNU_TP_CD")));
					dataMap.put("HRNK_MNU_SEQ"  , StringUtil.getString(recordData.get("HRNK_MNU_SEQ")));
					dataMap.put("PGM_TP_CD"     , StringUtil.getString(menuListInfo.get("PGM_TP_CD")));
					dataMap.put("SRT_SO"        , StringUtil.getString(menuListInfo.get("SRT_SO")));
					dataMap.put("DELAY_CNT"     , delayCnt);
					dataMap.put("OK_CNT"        , okCnt);
					dataMap.put("SUM_CNT"       , String.valueOf(cntSum));
					dataMap.put("STATUS"        , StringUtil.getString(recordData.get("STATUS")));
					dataMap.put("STATUS2"       , StringUtil.getString(recordData.get("STATUS2")));
					
					dataMap.put("OPRTR_NM"       , StringUtil.getString(recordData.get("OPRTR_NM")));
					dataList.add(dataMap);
				}
			}
		}
		
		sumData(dataList);
		
		List<Map<String, Object>> dataListResult = dataList.stream()  // 건수 없는 데이터 필터 
				.filter(t -> !StringUtils.equals(t.get("SUM_CNT").toString(), "0"))
				.collect(Collectors.toList());
		
		return dataListResult;
	}
	
	public List<Map<String, Object>> teamMenuDataList(List<Map<String, Object>> menuList, List<Map<String, Object>> records) {
		List<Map<String, Object>> dataList = new ArrayList<>();
		Map<String, Object> menuListInfo = new HashMap<>();
		
		Map<String, Object> recordData = new HashMap<>();
		for(int i = 0 ; i < menuList.size(); i++) {
			dataList.add(menuList.get(i));
			menuListInfo = menuList.get(i);
			
			for(int k=0; k < records.size(); k++) {
				if(menuListInfo.get("MNU_SEQ").equals(records.get(k).get("HRNK_MNU_SEQ"))) {
					Map<String, Object> dataMap = new HashMap<>(); 
					recordData = records.get(k);
					
					String mnuSeq = StringUtil.getString(recordData.get("MNU_SEQ"));
					String hrnkMnuSeq = StringUtil.getString(recordData.get("HRNK_MNU_SEQ"));
					checkAddSubMenu(mnuSeq, hrnkMnuSeq, dataList, menuListInfo, recordData);
					
					String mnuLvl = StringUtil.getString(menuListInfo.get("MNU_LVL"));
					int lvlCount = (Integer.parseInt(mnuLvl) + 2);
					String idx = String.valueOf(lvlCount);
					
					String delayCnt = String.valueOf(recordData.get("DELAY_CNT"));
					String okCnt = String.valueOf(recordData.get("OK_CNT"));
					int delayInt = Integer.parseInt(delayCnt);
					int okInt = Integer.parseInt(okCnt);
					int cntSum = (delayInt+okInt); 
					
					dataMap.put("MNU_SEQ"       , StringUtil.getString(recordData.get("OPRTR_ID")));
					dataMap.put("MNU_NM"        , StringUtil.getString(recordData.get("OPRTR_NM")));
					dataMap.put("MNU_LVL"       , idx);
					dataMap.put("MNU_LVL_SPR_CD", StringUtil.getString(menuListInfo.get("MNU_LVL_SPR_CD")));
					dataMap.put("MNU_TP_CD"     , StringUtil.getString(menuListInfo.get("MNU_TP_CD")));
					dataMap.put("HRNK_MNU_SEQ"  , StringUtil.getString(recordData.get("MNU_SEQ")));  // 최종레벨.
					dataMap.put("PGM_TP_CD"     , StringUtil.getString(menuListInfo.get("PGM_TP_CD")));
					dataMap.put("SRT_SO"        , StringUtil.getString(menuListInfo.get("SRT_SO")));
					dataMap.put("DELAY_CNT"     , delayCnt);
					dataMap.put("OK_CNT"        , okCnt);
					dataMap.put("SUM_CNT"       , String.valueOf(cntSum));
					dataMap.put("STATUS"        , StringUtil.getString(recordData.get("STATUS")));
					dataMap.put("STATUS2"       , StringUtil.getString(recordData.get("STATUS2")));
					dataList.add(dataMap);
				}
			}
		}
		
		sumData(dataList);
		
		List<Map<String, Object>> dataListResult = dataList.stream()  // 건수 없는 데이터 필터 
				.filter(t -> !StringUtils.equals(t.get("SUM_CNT").toString(), "0"))
				.collect(Collectors.toList());

		/* 비율계산을 위한 임시 데이터 */
        List<Map<String,Object>> topLvlList = dataListResult.stream()
                                                                .filter(t -> StringUtils.equals(t.get("MNU_LVL").toString(), "1"))
                                                                .collect(Collectors.toList());
        
        double total_sum = topLvlList.stream().mapToInt(t -> Integer.parseInt(t.get("SUM_CNT").toString())).sum();
        double total_ok = topLvlList.stream().mapToInt(t -> Integer.parseInt(t.get("OK_CNT").toString())).sum();
        double total_delay = topLvlList.stream().mapToInt(t -> Integer.parseInt(t.get("DELAY_CNT").toString())).sum();
        for(int i=0; i<dataListResult.size(); i++) {
            	//소수점 1자리 반올림 
        	double okPercent = Math.round(((double)Integer.parseInt(StringUtil.getString(dataListResult.get(i).get("OK_CNT")))/(double)total_sum * 100)*10)/10.0;
        	double delayPercent = Math.round(((double)Integer.parseInt(StringUtil.getString(dataListResult.get(i).get("DELAY_CNT")))/(double)total_sum * 100)*10)/10.0;
        	double sumPercent = Math.round(((double)Integer.parseInt(StringUtil.getString(dataListResult.get(i).get("SUM_CNT")))/(double)total_sum * 100)*10)/10.0;
        	dataListResult.get(i).put("OK_RATE", okPercent);
        	dataListResult.get(i).put("DELAY_RATE", delayPercent);
        	dataListResult.get(i).put("SUM_RATE", sumPercent);
        }
		return dataListResult;
	}
	
	public void checkAddSubMenu(String mnuSeq, String hrnkMnuSeq, List<Map<String, Object>> dataList, Map<String, Object> menu, Map<String, Object> record) {
		boolean isExist = false;
		for(Map<String, Object> data : dataList) {
			if(mnuSeq.equals(StringUtil.getString(data.get("MNU_SEQ"))) && hrnkMnuSeq.equals(StringUtil.getString(data.get("HRNK_MNU_SEQ")))) {
				isExist = true;
				break;
			}
		}
		
		if(!isExist){
			Map<String, Object> dataMap = new HashMap<>();
			
			String mnuLvl = StringUtil.getString(menu.get("MNU_LVL"));
			int lvlCount = (Integer.parseInt(mnuLvl) + 1);
			String idx = String.valueOf(lvlCount);
			
			dataMap.put("MNU_SEQ"       , StringUtil.getString(record.get("MNU_SEQ")));
			dataMap.put("MNU_NM"        , StringUtil.getString(record.get("MNU_NM")));
			dataMap.put("MNU_LVL"       , idx);
			dataMap.put("MNU_LVL_SPR_CD", StringUtil.getString(menu.get("MNU_LVL_SPR_CD")));
			dataMap.put("MNU_TP_CD"     , StringUtil.getString(menu.get("MNU_TP_CD")));
			dataMap.put("HRNK_MNU_SEQ"  , StringUtil.getString(record.get("HRNK_MNU_SEQ")));  // 최종레벨.
			dataMap.put("PGM_TP_CD"     , StringUtil.getString(menu.get("PGM_TP_CD")));
			dataMap.put("SRT_SO"        , StringUtil.getString(menu.get("SRT_SO")));
			dataMap.put("DELAY_CNT"     , "0");
			dataMap.put("OK_CNT"        , "0");
			dataMap.put("SUM_CNT"       , "0");
			dataMap.put("STATUS"        , "");
			dataMap.put("STATUS2"       , "");
			dataList.add(dataMap);
		}
	}
	
	
	public List<Map<String, Object>> teamPersonDataList(List<Map<String, Object>> menuList, List<Map<String, Object>> records) {
		List<Map<String, Object>> dataList = new ArrayList<>();
		
		Map<String, Object> menuListInfo = new HashMap<>();
		Map<String, Object> recordData = new HashMap<>();
		
		List<Map<String, Object>> personList = OU.newList();
		for (Map<String, Object> record : records) {
			Map<String, Object> personMap = OU.newMap();
			
			personMap.put("MNU_SEQ"       , StringUtil.getString(record.get("OPRTR_ID")));
			personMap.put("MNU_NM"        , StringUtil.getString(record.get("OPRTR_NM")));
			personMap.put("MNU_LVL"       , "1");
			personMap.put("MNU_LVL_SPR_CD", "");
			personMap.put("MNU_TP_CD"     , "");
			personMap.put("HRNK_MNU_SEQ"  , "0");
			personMap.put("PGM_TP_CD"     , "");
			personMap.put("SRT_SO"        , "");
			personMap.put("DELAY_CNT"     , "0");
			personMap.put("OK_CNT"        , "0");
			personMap.put("SUM_CNT"       , "0");
			personMap.put("STATUS"        , "");
			personMap.put("STATUS2"       , "");
			personMap.put("GROUP_ID"      , StringUtil.getString(record.get("OPRTR_ID")));
			personList.add(personMap);
		}
		
		personList = personList.stream().distinct().collect(Collectors.toList());
		personList.sort(Comparator.comparing((Map<String, Object> map) -> (String) map.get("MNU_NM")));
		for (int p = 0; p < personList.size(); p++) {
			Map<String, Object> person = personList.get(p);
			person.put("SRT_SO", p + 1);
			
			dataList.add(person);
			
			for(int i = 0 ; i < menuList.size(); i++) {
				menuListInfo = menuList.get(i);
				int mnuLvl = Integer.parseInt(StringUtil.getString(menuListInfo.get("MNU_LVL"))) + 1;
				
				Map<String, Object> menuMap = new HashMap<>();
				
				menuMap.put("MNU_SEQ"         , StringUtil.getString(menuListInfo.get("MNU_SEQ")));
				menuMap.put("MNU_NM"          , StringUtil.getString(menuListInfo.get("MNU_NM")));
				menuMap.put("MNU_LVL"         , mnuLvl);
				menuMap.put("MNU_LVL_SPR_CD"  , StringUtil.getString(menuListInfo.get("MNU_LVL_SPR_CD")));
				menuMap.put("MNU_TP_CD"       , StringUtil.getString(menuListInfo.get("MNU_TP_CD")));
				if("0".equals(StringUtil.getString(menuListInfo.get("HRNK_MNU_SEQ")))){
					menuMap.put("HRNK_MNU_SEQ", StringUtil.getString(person.get("MNU_SEQ")));
				}else {
					menuMap.put("HRNK_MNU_SEQ", StringUtil.getString(menuListInfo.get("HRNK_MNU_SEQ")));
				}
				menuMap.put("PGM_TP_CD"       , StringUtil.getString(menuListInfo.get("PGM_TP_CD")));
				menuMap.put("SRT_SO"          , StringUtil.getString(menuListInfo.get("SRT_SO")));
				menuMap.put("DELAY_CNT"       , "0");
				menuMap.put("OK_CNT"          , "0");
				menuMap.put("SUM_CNT"         , "0");
				menuMap.put("STATUS"          , "");
				menuMap.put("STATUS2"         , "");
				menuMap.put("GROUP_ID"        , StringUtil.getString(person.get("GROUP_ID")));
				dataList.add(menuMap);
				
				for(int k=0; k < records.size(); k++) {
					recordData = records.get(k);
					
					String mnuSeq     = StringUtil.getString(menuListInfo.get("MNU_SEQ"));
					String hrnkMnuSeq = StringUtil.getString(recordData.get("HRNK_MNU_SEQ"));
					String perMnuSeq  = StringUtil.getString(person.get("MNU_SEQ"));
					String oprtrId    = StringUtil.getString(recordData.get("OPRTR_ID"));
					
					if(mnuSeq.equals(hrnkMnuSeq) && perMnuSeq.equals(oprtrId)) {
						
						Map<String, Object> dataMap = new HashMap<>(); 
						
						String delayCnt = String.valueOf(recordData.get("DELAY_CNT"));
						String okCnt = String.valueOf(recordData.get("OK_CNT"));
						int delayInt = Integer.parseInt(delayCnt);
						int okInt = Integer.parseInt(okCnt);
						int cntSum = (delayInt+okInt);
						
						dataMap.put("MNU_SEQ"       , StringUtil.getString(recordData.get("MNU_SEQ")));
						dataMap.put("MNU_NM"        , StringUtil.getString(recordData.get("MNU_NM")));
						dataMap.put("MNU_LVL"       , mnuLvl + 1);
						dataMap.put("MNU_LVL_SPR_CD", StringUtil.getString(menuListInfo.get("MNU_LVL_SPR_CD")));
						dataMap.put("MNU_TP_CD"     , StringUtil.getString(menuListInfo.get("MNU_TP_CD")));
						dataMap.put("HRNK_MNU_SEQ"  , StringUtil.getString(recordData.get("HRNK_MNU_SEQ")));
						dataMap.put("PGM_TP_CD"     , StringUtil.getString(menuListInfo.get("PGM_TP_CD")));
						dataMap.put("SRT_SO"        , StringUtil.getString(menuListInfo.get("SRT_SO")));
						dataMap.put("DELAY_CNT"     , delayCnt);
						dataMap.put("OK_CNT"        , okCnt);
						dataMap.put("SUM_CNT"       , String.valueOf(cntSum));
						dataMap.put("STATUS"        , StringUtil.getString(recordData.get("STATUS")));
						dataMap.put("STATUS2"       , StringUtil.getString(recordData.get("STATUS2")));
						dataMap.put("GROUP_ID"      , StringUtil.getString(person.get("GROUP_ID")));
						dataList.add(dataMap);
					}
				}
			}
			
		}
		
		groupSumData(dataList);
		
		List<Map<String, Object>> dataListResult = dataList.stream()  // 건수 없는 데이터 필터 
				.filter(t -> !StringUtils.equals(t.get("SUM_CNT").toString(), "0"))
				.collect(Collectors.toList());
		
		/* 비율계산을 위한 임시 데이터 */
        List<Map<String,Object>> topLvlList = dataListResult.stream()
                                                                .filter(t -> StringUtils.equals(t.get("MNU_LVL").toString(), "1"))
                                                                .collect(Collectors.toList());
        
        double total_sum = topLvlList.stream().mapToInt(t -> Integer.parseInt(t.get("SUM_CNT").toString())).sum();
        double total_ok = topLvlList.stream().mapToInt(t -> Integer.parseInt(t.get("OK_CNT").toString())).sum();
        double total_delay = topLvlList.stream().mapToInt(t -> Integer.parseInt(t.get("DELAY_CNT").toString())).sum();
        for(int i=0; i<dataListResult.size(); i++) {
            //소수점 1자리 반올림 
        	double okPercent = Math.round(((double)Integer.parseInt(StringUtil.getString(dataListResult.get(i).get("OK_CNT")))/(double)total_sum * 100)*10)/10.0;
        	double delayPercent = Math.round(((double)Integer.parseInt(StringUtil.getString(dataListResult.get(i).get("DELAY_CNT")))/(double)total_sum * 100)*10)/10.0;
        	double sumPercent = Math.round(((double)Integer.parseInt(StringUtil.getString(dataListResult.get(i).get("SUM_CNT")))/(double)total_sum * 100)*10)/10.0;
        	dataListResult.get(i).put("OK_RATE", okPercent);
        	dataListResult.get(i).put("DELAY_RATE", delayPercent);
        	dataListResult.get(i).put("SUM_RATE", sumPercent);
        }
		
		return dataListResult;
	}
	
	public void sumData(List<Map<String, Object>> list) {
		// check Max level
		int maxLevel = 1;
		for(Map<String, Object> data : list) {
			int level = Integer.parseInt(StringUtil.getString(data.get("MNU_LVL")));
			if(level > maxLevel) {
				maxLevel = level;
			}
		}
		logger.info("maxLevel : {}", maxLevel);
		for(int i = maxLevel - 1; i > 0; i--) {
			logger.info("Level : {}", i);
			sum(i, list);
		}
	}
	
	public void sum(int level, List<Map<String, Object>> list) {
		for(int i = 0; i < list.size(); i++) { 
			if(StringUtil.getString(level).equals(StringUtil.getString(list.get(i).get("MNU_LVL")))) {
				int sum_delay = 0;
				int sum_ok    = 0;
				int sum_total = 0;
				
				for(int j = 0; j < list.size(); j++) {
					if(StringUtil.getString(list.get(i).get("MNU_SEQ")).equals(StringUtil.getString(list.get(j).get("HRNK_MNU_SEQ")))) {
						sum_delay += Integer.parseInt(StringUtil.getString(list.get(j).get("DELAY_CNT")));
						sum_ok    += Integer.parseInt(StringUtil.getString(list.get(j).get("OK_CNT")));
						sum_total += Integer.parseInt(StringUtil.getString(list.get(j).get("SUM_CNT")));
					}
				}
				
				list.get(i).put("DELAY_CNT", sum_delay);
				list.get(i).put("OK_CNT"   , sum_ok);
				list.get(i).put("SUM_CNT"  , sum_total);
			}
		}
	}
	
	public void groupSumData(List<Map<String, Object>> list) {
		// check Max level
		int maxLevel = 1;
		for(Map<String, Object> data : list) {
			int level = Integer.parseInt(StringUtil.getString(data.get("MNU_LVL")));
			if(level > maxLevel) {
				maxLevel = level;
			}
		}
		logger.info("maxLevel : {}", maxLevel);
		for(int i = maxLevel - 1; i > 0; i--) {
			logger.info("Level : {}", i);
			groupSum(i, list);
		}
		
	}
	
	public void groupSum(int level, List<Map<String, Object>> list) {
		for(int i = 0; i < list.size(); i++) {
			if(StringUtil.getString(level).equals(StringUtil.getString(list.get(i).get("MNU_LVL")))) {
				int sum_delay = 0;
				int sum_ok    = 0;
				int sum_total = 0;
				
				for(int j = 0; j < list.size(); j++) {
					if(
							StringUtil.getString(list.get(i).get("GROUP_ID")).equals(StringUtil.getString(list.get(j).get("GROUP_ID"))) &&
							StringUtil.getString(list.get(i).get("MNU_SEQ")).equals(StringUtil.getString(list.get(j).get("HRNK_MNU_SEQ")))) {
						sum_delay += Integer.parseInt(StringUtil.getString(list.get(j).get("DELAY_CNT")));
						sum_ok    += Integer.parseInt(StringUtil.getString(list.get(j).get("OK_CNT")));
						sum_total += Integer.parseInt(StringUtil.getString(list.get(j).get("SUM_CNT")));
					}
				}
				
				list.get(i).put("DELAY_CNT", sum_delay);
				list.get(i).put("OK_CNT"   , sum_ok);
				list.get(i).put("SUM_CNT"  , sum_total);
			}
		}
	}
	
	public List<Map<String, Object>> newItemDataList(List<Map<String, Object>> newItems) {
		List<Map<String, Object>> dataListResult = new ArrayList<>();
		Map<String, Object> topDataMap = new HashMap<>();
		
		Map<String, Object> newItemInfo = new HashMap<>();
		
		int sumEstm = 0;
		int sumNew = 0;
		int sumRnd = 0;
		int totSum = 0;
		topDataMap.put("MNU_LVL", "1");
		topDataMap.put("PURG_CHRPSN_NM", "총합계");
		topDataMap.put("ESTM_CNT", "");
		topDataMap.put("NEW_PRD_CNT", "");
		topDataMap.put("RND_ESTM_CNT", "");
		topDataMap.put("SUM_CNT", "0");
		dataListResult.add(topDataMap);
		for(int i = 0; i < newItems.size(); i++) {
			newItemInfo = newItems.get(i);
			Map<String, Object> dataMap = new HashMap<>();
			dataMap.put("MNU_LVL", "2");
//			dataMap.put("PURG_CHRPSN_NM", StringUtil.getString(newItemInfo.get("PURG_CHRPSN_NM")));
//			dataMap.put("ESTM_CNT", StringUtil.getString(newItemInfo.get("ESTM_CNT")));
//			dataMap.put("NEW_PRD_CNT", StringUtil.getString(newItemInfo.get("NEW_PRD_CNT")));
//			dataMap.put("RND_ESTM_CNT", StringUtil.getString(newItemInfo.get("RND_ESTM_CNT")));
			
//			int estmCnt = Integer.parseInt(StringUtil.getString(newItemInfo.get("ESTM_CNT")));
//			int newPrdCnt = Integer.parseInt(StringUtil.getString(newItemInfo.get("NEW_PRD_CNT")));
//			int rndEstmCnt = Integer.parseInt(StringUtil.getString(newItemInfo.get("RND_ESTM_CNT")));
			
			// 배치데이터 사용
			dataMap.put("PURG_CHRPSN_NM", StringUtil.getString(newItemInfo.get("OPRTR_NM")));
			dataMap.put("ESTM_CNT", StringUtil.getString(newItemInfo.get("A_CNT")));
			dataMap.put("NEW_PRD_CNT", StringUtil.getString(newItemInfo.get("B_CNT")));
			dataMap.put("RND_ESTM_CNT", StringUtil.getString(newItemInfo.get("C_CNT")));
			
			int estmCnt = Integer.parseInt(StringUtil.getString(newItemInfo.get("A_CNT")));
			int newPrdCnt = Integer.parseInt(StringUtil.getString(newItemInfo.get("B_CNT")));
			int rndEstmCnt = Integer.parseInt(StringUtil.getString(newItemInfo.get("C_CNT")));
			int sumCnt = estmCnt+newPrdCnt+rndEstmCnt;
			sumEstm += estmCnt;
			sumNew += newPrdCnt;
			sumRnd += rndEstmCnt;
			totSum += sumCnt;
			dataMap.put("SUM_CNT", String.valueOf(sumCnt));
			dataListResult.add(dataMap);
		}
		Map<String, Object> sumDataMap = new HashMap<>();
		sumDataMap.put("ESTM_CNT", String.valueOf(sumEstm));
		sumDataMap.put("NEW_PRD_CNT", String.valueOf(sumNew));
		sumDataMap.put("RND_ESTM_CNT", String.valueOf(sumRnd));
		sumDataMap.put("SUM_CNT", String.valueOf(totSum));
		dataListResult.get(0).putAll(sumDataMap);

		return dataListResult;
	}
	
	public List<Map<String, Object>> buyInfoDataList(List<Map<String, Object>> buyInfos) {
		List<Map<String, Object>> dataListResult = new ArrayList<>();
		Map<String, Object> topDataMap = new HashMap<>();
		
		Map<String, Object> newItemInfo = new HashMap<>();
		
		int sumEstm = 0;
		int sumNew = 0;
		int sumRnd = 0;
		int totSum = 0;
		topDataMap.put("MNU_LVL", "1");
		topDataMap.put("OPRTR_NM", "총합계");
		topDataMap.put("A_CNT", "");
		topDataMap.put("B_CNT", "");
		topDataMap.put("C_CNT", "");
		topDataMap.put("SUM_CNT", "0");
		dataListResult.add(topDataMap);
		for(int i = 0; i < buyInfos.size(); i++) {
			newItemInfo = buyInfos.get(i);
			Map<String, Object> dataMap = new HashMap<>();
			dataMap.put("MNU_LVL", "2");
			dataMap.put("OPRTR_NM", StringUtil.getString(newItemInfo.get("OPRTR_NM")));
			dataMap.put("A_CNT", StringUtil.getString(newItemInfo.get("A_CNT")));
			dataMap.put("B_CNT", StringUtil.getString(newItemInfo.get("B_CNT")));
			dataMap.put("C_CNT", StringUtil.getString(newItemInfo.get("C_CNT")));
			
			int estmCnt = Integer.parseInt(StringUtil.getString(newItemInfo.get("A_CNT")));
			int newPrdCnt = Integer.parseInt(StringUtil.getString(newItemInfo.get("B_CNT")));
			int rndEstmCnt = Integer.parseInt(StringUtil.getString(newItemInfo.get("C_CNT")));
			int sumCnt = estmCnt+newPrdCnt+rndEstmCnt;
			sumEstm += estmCnt;
			sumNew += newPrdCnt;
			sumRnd += rndEstmCnt;
			totSum += sumCnt;
			dataMap.put("SUM_CNT", String.valueOf(sumCnt));
			dataListResult.add(dataMap);
		}
		Map<String, Object> sumDataMap = new HashMap<>();
		sumDataMap.put("A_CNT", String.valueOf(sumEstm));
		sumDataMap.put("B_CNT", String.valueOf(sumNew));
		sumDataMap.put("C_CNT", String.valueOf(sumRnd));
		sumDataMap.put("SUM_CNT", String.valueOf(totSum));
		dataListResult.get(0).putAll(sumDataMap);

        double total_sum = Integer.parseInt(StringUtil.getString(dataListResult.get(0).get("A_CNT")));
        double total_ok = Integer.parseInt(StringUtil.getString(dataListResult.get(0).get("B_CNT")));
        double total_delay = Integer.parseInt(StringUtil.getString(dataListResult.get(0).get("C_CNT")));
        for(int i=0; i<dataListResult.size(); i++) {
            //소수점 1자리 반올림 
        	double okPercent = Math.round(((double)Integer.parseInt(StringUtil.getString(dataListResult.get(i).get("A_CNT")))/(double)total_sum * 100)*10)/10.0;
        	double delayPercent = Math.round(((double)Integer.parseInt(StringUtil.getString(dataListResult.get(i).get("B_CNT")))/(double)total_ok * 100)*10)/10.0;
        	double sumPercent = Math.round(((double)Integer.parseInt(StringUtil.getString(dataListResult.get(i).get("C_CNT")))/(double)total_delay * 100)*10)/10.0;
        	dataListResult.get(i).put("OK_RATE", okPercent);
        	dataListResult.get(i).put("DELAY_RATE", delayPercent);
        	dataListResult.get(i).put("SUM_RATE", sumPercent);
        }
		
		return dataListResult;
	}
	
	
}

