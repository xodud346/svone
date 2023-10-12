package com.ssp.bo.pr.service.impl;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import javax.annotation.Resource;

import com.ssp.core.pr.dao.Pi1304Dao;
import com.ssp.core.util.StringUtil;
import org.apache.axis.client.Stub;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.google.gson.Gson;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pr.service.PrProductEstimateService;
import com.ssp.bo.pr.service.PrProductNewService;
import com.ssp.core.co.dao.CoCommonSendDao;
import com.ssp.core.co.dao.CommonDAO;
import com.ssp.core.co.service.CoPiRcvLogService;
import com.ssp.core.common.property.SspPropertyService;

import kr.co.serveone.EAI.MMM.SSPF.DT_MM03190_SSPF;
import kr.co.serveone.EAI.MMM.SSPF.DT_MM03190_SSPFOUT_NEW_PRD;
import kr.co.serveone.EAI.MMM.SSPF.DT_MM03190_SSPFOUT_NEW_PRD_ATTR;
import kr.co.serveone.EAI.MMM.SSPF.DT_MM03190_SSPFOUT_NEW_PRD_DOC;
import kr.co.serveone.EAI.MMM.SSPF.DT_MM03190_SSPFOUT_NEW_PRD_MEMO;
import kr.co.serveone.EAI.MMM.SSPF.DT_MM03190_SSPF_response;
import kr.co.serveone.EAI.MMM.SSPF.MM03190_SSPF_SOBindingStub;

@Service("prProductEstimateService")
public class PrProductEstimateServiceImpl implements PrProductEstimateService {
	
	 private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name="commonDAO") 
    private CommonDAO commonDAO;
	
	@Resource(name = "prProductNewService")
    private PrProductNewService prProductNewService;
	
	@Autowired
	private SspPropertyService sspPropertyService;
	
	@Autowired
	private CoPiRcvLogService coPiRcvLogService;

	@Autowired
	private Pi1304Dao pi1304Dao;
	
	@Autowired
	private CoCommonSendDao coCommonSendDao;
	
	/**
     * <pre>
     * 1. MethodName : selectProductEstimateCount
     * 2. ClassName  : PrProductEstimateServiceImpl.java
     * 3. Comment    : 견적요청 카운트 조회
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param searchMap
     * @return
     * @throws Exception
     */
	public int selectProductEstimateCount(Map<String, Object> searchMap, OdOrderComm odOrder) throws Exception {
		searchMap.put("SES_ID", odOrder.getSession().get("SES_ID"));
		return commonDAO.selectCount("com.ssp.bo.pr.prProductEstimate.selectProductEstimateCount", searchMap);
	}

	/**
     * <pre>
     * 1. MethodName : selectProductEstimateList
     * 2. ClassName  : PrProductEstimateServiceImpl.java
     * 3. Comment    : 견적요청 조회
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param searchMap
     * @return
     * @throws Exception
     */
	public List<Map<String, Object>> selectProductEstimateList(Map<String, Object> searchMap, OdOrderComm odOrder) throws Exception {
		searchMap.put("SES_ID", odOrder.getSession().get("SES_ID"));
		return commonDAO.selectList("com.ssp.bo.pr.prProductEstimate.selectProductEstimateList", searchMap);
	}

	/**
     * <pre>
     * 1. MethodName : selectProductEstimateDetail
     * 2. ClassName  : PrProductEstimateServiceImpl.java
     * 3. Comment    : 견적요청 상세 조회
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param searchMap
     * @return
     * @throws Exception
     */
	public Map<String, String> selectProductEstimateDetail(Map<String, Object> searchMap) throws Exception {
		return commonDAO.select("com.ssp.bo.pr.prProductEstimate.selectProductEstimateDetail", searchMap);
	}
	
	/**
     * <pre>
     * 1. MethodName : selectProductEstimateOption
     * 2. ClassName  : PrProductEstimateServiceImpl.java
     * 3. Comment    : 견적요청 옵션 조회
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param searchMap
     * @return
     * @throws Exception
     */
	public List<Map<String, String>> selectProductEstimateOption(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("com.ssp.bo.pr.prProductEstimate.selectProductEstimateOption", searchMap);
	}
	
	/**
     * <pre>
     * 1. MethodName : selectProductEstimateAddOption
     * 2. ClassName  : PrProductEstimateServiceImpl.java
     * 3. Comment    : 견적요청 추가옵션 조회
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param searchMap
     * @return
     * @throws Exception
     */
	public List<Map<String, String>> selectProductEstimateAddOption(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("com.ssp.bo.pr.prProductEstimate.selectProductEstimateAddOption", searchMap);
	}
	
	/**
     * <pre>
     * 1. MethodName : selectProductEstimateHistory
     * 2. ClassName  : PrProductEstimateServiceImpl.java
     * 3. Comment    : 견적요청 히스토리 조회
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param searchMap
     * @return
     * @throws Exception
     */
	public List<Map<String, String>> selectProductEstimateHistory(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("com.ssp.bo.pr.prProductEstimate.selectProductEstimateHistory", searchMap);
	}
	
	/**
     * <pre>
     * 1. MethodName : insertProductEstimateStatusList
     * 2. ClassName  : PrProductEstimateServiceImpl.java
     * 3. Comment    : 견적요청 접수
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param list, userInfo
     * @return
     * @throws Exception
     */
	public int insertProductEstimateStatusList(List<Map<String, Object>> list, Map<String, Object> userInfo) throws Exception {
		int cnt = 0;
		
		for(Map map : list) {
			map.put("OPRTR_ID", userInfo.get("OPRTR_ID"));
			map.put("ESTM_REQ_PROC_STATS_CD", "20");
			
			commonDAO.update("com.ssp.bo.pr.prProductEstimate.insertProductEstimateStatus", map);
			cnt++;
		}

		return cnt;
	}
	
	/**
     * <pre>
     * 1. MethodName : insertProductEstimateStatus
     * 2. ClassName  : PrProductEstimateServiceImpl.java
     * 3. Comment    : 견적요청 상태 등록
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param searchMap
     * @return
     * @throws Exception
     */
	@Transactional(isolation = Isolation.SERIALIZABLE, rollbackFor = Exception.class)
	public Map insertProductEstimateStatus(Map<String, Object> searchMap) throws Exception {
		Map< String, Object> resultMap  = new HashMap<String, Object>();
		DT_MM03190_SSPF_response res = null;
		String newPrdReqNo = "";
		Map< String, Object> piReturnMap  = new HashMap<String, Object>();
		
		if("30".equals(searchMap.get("ESTM_REQ_PROC_STATS_CD")) || "40".equals(searchMap.get("ESTM_REQ_PROC_STATS_CD")) || "70".equals(searchMap.get("ESTM_REQ_PROC_STATS_CD"))) {	//	견적처리중
			commonDAO.update("com.ssp.bo.pr.prProductEstimate.updateProductEstimateReqDtl", searchMap);
			commonDAO.insert("com.ssp.bo.pr.prProductEstimate.insertProductEstimateStatus", searchMap);
			
			if("40".equals(searchMap.get("ESTM_REQ_PROC_STATS_CD")) || "70".equals(searchMap.get("ESTM_REQ_PROC_STATS_CD"))){
				
				if("40".equals(searchMap.get("ESTM_REQ_PROC_STATS_CD"))){
					commonDAO.update("com.ssp.bo.pr.prProductEstimate.updateProductEstimateReqAtflDtl", searchMap);
				}
				
				Map< String, Object> mailMap  = new HashMap<String, Object>();
				
				mailMap = commonDAO.select("com.ssp.bo.pr.prProductEstimate.selectProductEstimateProcMailInfo", searchMap);
				
				// 견적처리완료메일 발송
				this.estmProcCompleteSendMail(mailMap);
			}
		}else if("50".equals(searchMap.get("ESTM_REQ_PROC_STATS_CD"))){
			newPrdReqNo = commonDAO.selectStr("com.ssp.bo.pr.prProductEstimate.selectProductEstimateNewPrdReqNo", searchMap);
			searchMap.put("NEW_PRD_REQ_NO", newPrdReqNo);
	    	
	    	commonDAO.insert("com.ssp.bo.pr.prProductEstimate.insertProductEstimateNewCustReqInfo", searchMap);
	    	
	    	List<Map<String, Object>> list = commonDAO.selectList("com.ssp.bo.pr.prProductEstimate.selectProductEstimateMroAttrInfo", searchMap);
	    	
	    	for(int i = 0; i < list.size(); i++) {
	    		Map<String, Object> map = list.get(i);
	    		map.putAll(searchMap);
	    		
	    		commonDAO.insert("com.ssp.bo.pr.prProductEstimate.insertProductEstimateNewCustReqAttrInfo", map);
	    	}
	    	
	    	commonDAO.insert("com.ssp.bo.pr.prProductEstimate.insertProductEstimateNewReqProc", searchMap);
	    	commonDAO.insert("com.ssp.bo.pr.prProductEstimate.insertProductEstimateNewReqStatsDtls", searchMap);
	    	commonDAO.insert("com.ssp.bo.pr.prProductEstimate.insertProductEstimateStatus", searchMap);
	    	
    		Map<String, Object> map = new HashMap<String, Object>();
			
			map.put("CO_CD", searchMap.get("CO_CD"));
        	map.put("NEW_PRD_REQ_NO", newPrdReqNo);
        	map.put("OPRTR_ID", searchMap.get("OPRTR_ID"));
        	map.put("LANG_CD", "KO");
        	map.put("ESTM_REQ_NO", searchMap.get("ESTM_REQ_NO"));
        	map.put("PRD_CLCD", searchMap.get("PRD_CLCD"));

			Map<String, Object> fprd = commonDAO.select("com.ssp.bo.pr.prProductEstimate.selectNewProductReqDetail", map);						// 요청상품정보
			List<Map<String, Object>> fatt = commonDAO.selectList("com.ssp.bo.pr.prProductEstimate.selectReqProcAttrInfoList", map);			// 속성정보
			Map<String, Object> fdoc = commonDAO.select("com.ssp.bo.pr.prProductEstimate.selectNewProductReqAtflInfo", map);					// 첨부파일정보
			String fmem = commonDAO.selectStr("com.ssp.bo.pr.prProductEstimate.selectNewProductReqMemo", map);									// 메모
			List<Map<String, String>> opList = commonDAO.selectList("com.ssp.bo.pr.prProductEstimate.selectProductEstimateOption", map);		// 옵션정보
			List<Map<String, String>> addList = commonDAO.selectList("com.ssp.bo.pr.prProductEstimate.selectProductEstimateAddOption", map);	// 추가옵션정보


			piReturnMap = pi1304Dao.sendNewProductReqPI(map, fprd, fatt, fdoc , fmem, opList, addList);

			if("S".equals(StringUtil.getString(piReturnMap.get("ifProcRsltCd")))) {
				Map<String, Object> updateMap = new HashMap<>();
				updateMap.put("CO_CD",searchMap.get("coCd"));
				updateMap.put("OPRTR_ID",searchMap.get("usrId"));
				updateMap.put("MRO_REQ_NO", piReturnMap.get("mroReqNo"));
				updateMap.put("NEW_PRD_REQ_NO", newPrdReqNo);
				commonDAO.update("com.ssp.core.pr.prCore.updateMroReqNo", updateMap);

			} else {
				resultMap.put("RST_CD", "E");
				resultMap.put("RST_MSG", "상품 등록 요청에 실패하였습니다. 관리자에게 문의하세요.");
				throw new Exception();
			}
        }else{
			commonDAO.insert("com.ssp.bo.pr.prProductEstimate.insertProductEstimateStatus", searchMap);
		}
		
		return resultMap;
	}
	
	/**
     * <pre>
     * 1. MethodName : insertProductEstimateStatus
     * 2. ClassName  : PrProductEstimateServiceImpl.java
     * 3. Comment    : 상품등록 요청
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param commandMap
     * @return
     * @throws Exception
     */
	public DT_MM03190_SSPF_response sendNewProductReqPI(Map<String, Object> map) throws Exception{
    	MM03190_SSPF_SOBindingStub stub = null;
    	DT_MM03190_SSPF_response res = null;

        try {
        	String mPiUser = sspPropertyService.getString("wsdl.pi.user");
            String mPiPw = sspPropertyService.getString("wsdl.pi.pwd");
            String mPiHost = sspPropertyService.getString("wsdl.pi.url.host");
            String mPiSaveFile = sspPropertyService.getString("wsdl.pi.url.mm03190");
            
            String coCd = Objects.toString(map.get("CO_CD"), "");
            String langCd = Objects.toString(map.get("LANG_CD"), "");
            String prdReqNo = Objects.toString(map.get("NEW_PRD_REQ_NO"), "");

            stub = new MM03190_SSPF_SOBindingStub();
            stub.setUsername(mPiUser);
            stub.setPassword(mPiPw);
            stub._setProperty(Stub.ENDPOINT_ADDRESS_PROPERTY, mPiHost + mPiSaveFile);
       
            // 정보조회
            Map<String, Object> fprd = commonDAO.select("com.ssp.bo.pr.prProductEstimate.selectNewProductReqDetail", map);						// 요청상품정보
            List<Map<String, Object>> fatt = commonDAO.selectList("com.ssp.bo.pr.prProductEstimate.selectReqProcAttrInfoList", map);			// 속성정보
            Map<String, Object> fdoc = commonDAO.select("com.ssp.bo.pr.prProductEstimate.selectNewProductReqAtflInfo", map);					// 첨부파일정보
            String fmem = commonDAO.selectStr("com.ssp.bo.pr.prProductEstimate.selectNewProductReqMemo", map);									// 메모
            List<Map<String, String>> opList = commonDAO.selectList("com.ssp.bo.pr.prProductEstimate.selectProductEstimateOption", map);		// 옵션정보
            List<Map<String, String>> addList = commonDAO.selectList("com.ssp.bo.pr.prProductEstimate.selectProductEstimateAddOption", map);	// 추가옵션정보

            DT_MM03190_SSPF masterInfo = new DT_MM03190_SSPF();
            masterInfo.setXBUKRS(coCd);
            masterInfo.setXLANG(langCd);
            masterInfo.setXDATE(new SimpleDateFormat("yyyyMMdd").format(Calendar.getInstance().getTime()));
            masterInfo.setXTIME(new SimpleDateFormat("HHmmss").format(Calendar.getInstance().getTime()));

            DT_MM03190_SSPFOUT_NEW_PRD[] tprd = new DT_MM03190_SSPFOUT_NEW_PRD[1];						// 요청상품정보
            DT_MM03190_SSPFOUT_NEW_PRD_ATTR[] tatt = new DT_MM03190_SSPFOUT_NEW_PRD_ATTR[fatt.size()];  // 속성정보
            DT_MM03190_SSPFOUT_NEW_PRD_DOC[]  tdoc = new DT_MM03190_SSPFOUT_NEW_PRD_DOC[1];   // 첨부파일정보
            DT_MM03190_SSPFOUT_NEW_PRD_MEMO[] tmem = new DT_MM03190_SSPFOUT_NEW_PRD_MEMO[1];            // 메모

            // 요청상품정보
            tprd[0] = new DT_MM03190_SSPFOUT_NEW_PRD();
            tprd[0].setCO_CD(Objects.toString(fprd.get("CO_CD"), ""));  							/* 회사코드         */
            tprd[0].setNEW_PRD_REQ_NO(Objects.toString(fprd.get("NEW_PRD_REQ_NO"), ""));			/* 신규상품요청번호 */
            tprd[0].setREQ_PRD_NM(Objects.toString(fprd.get("REQ_PRD_NM"), ""));					/* 요청상품명       */
            tprd[0].setBZPLC_ID(Objects.toString(fprd.get("BZPLC_ID"), ""));						/* 사업장ID         */
            tprd[0].setOPR_UNIT_ID(Objects.toString(fprd.get("OPR_UNIT_ID"), ""));					/* 운영단위ID       */
            tprd[0].setDEPT_CD(Objects.toString(fprd.get("DEPT_ID"), ""));							/* 부서코드         */
            tprd[0].setMBR_ID(Objects.toString(fprd.get("REQPSN_ID"), ""));							/* 회원ID           */
            tprd[0].setPRD_CLCD(Objects.toString(fprd.get("RP_MRO_PRD_CLCD"), ""));					/* MRO상품분류코드  */
            tprd[0].setMNFR_NO(Objects.toString(fprd.get("RP_MNFR_NO"), ""));						/* 제조사번호       */
            tprd[0].setORGPLC_CTRY_CD(Objects.toString(fprd.get("RP_ORGPLC_CTRY_CD"), ""));			/* 원산지국가코드   */
            tprd[0].setBASIS_UNIT_CD(Objects.toString(fprd.get("RP_BASIS_UNIT_CD"), ""));			/* 기본단위코드     */
            tprd[0].setBASIS_UNIT_QTY(Objects.toString(fprd.get("RP_BASIS_UNIT_QTY"), ""));			/* 기본단위수량     */
            tprd[0].setSELL_UNIT_CD(Objects.toString(fprd.get("RP_SELL_UNIT_CD"), ""));				/* 판매단위코드     */
            tprd[0].setSELL_UNIT_QTY(Objects.toString(fprd.get("SELL_UNIT_QTY"), ""));				/* 판매단위수량     */
            tprd[0].setHPE_SELL_UPRC(Objects.toString(fprd.get("HPE_SELL_UPRC_NUM"), ""));			/* 희망판매단가     */
            tprd[0].setCURR_UNIT_CD("KRW");															/* 통화단위코드     */
            tprd[0].setCHM_MTL_YN(Objects.toString(fprd.get("CHM_MTL_YN"), ""));					/* 화학물질여부     */
            tprd[0].setHPE_SELL_UNIT_QTY(Objects.toString(fprd.get("HPE_SELL_UNIT_QTY_NUM"), ""));	/* 희망판매단위수량 */
            tprd[0].setPUB_ONLY_SPR_CD("43");														/* 공용(P)전용(E)구분코드 */
            tprd[0].setREQ_RSN(Objects.toString(fprd.get("REQ_RSN"), ""));							/* 요청사유         */
            tprd[0].setREPR_ATTR(Objects.toString(fprd.get("PI_REQ_PRVL"), ""));					/* 대표규격         */
            tprd[0].setEMP_NO(Objects.toString(fprd.get("RP_EMP_NO"), ""));							/* 사원번호         */

            // 속성정보
            for(int i = 0; i < fatt.size(); i++) {
                Map<String, Object> att = fatt.get(i);
                tatt[i] = new DT_MM03190_SSPFOUT_NEW_PRD_ATTR();
                tatt[i].setCO_CD(Objects.toString(att.get("CO_CD"), ""));  /* 회사코드           */
                tatt[i].setNEW_PRD_REQ_NO(Objects.toString(att.get("NEW_PRD_REQ_NO"), ""));  /* 신규상품요청번호   */
                tatt[i].setREQ_SEQ(Objects.toString(att.get("REQ_SEQ"), ""));  /* 요청순번           */
                tatt[i].setATTR_CD(Objects.toString(att.get("ATTR_CD"), ""));  /* 속성코드           */
                //tatt[i].setNEW_PRD_REQ_PRVL(Objects.toString(att.get("PRVL"), ""));  /* 신규상품요청속성값 */
                if("A00181".equals(att.get("ATTR_CD"))) {
                	tatt[i].setNEW_PRD_REQ_PRVL("[전시상품]구매전용메모확인필수");
                }else{
                	tatt[i].setNEW_PRD_REQ_PRVL("");	
                }
            }
            
            // 첨부파일정보
            tdoc[0] = new DT_MM03190_SSPFOUT_NEW_PRD_DOC();
            tdoc[0].setCO_CD(coCd);
            tdoc[0].setNEW_PRD_REQ_NO(prdReqNo);
            tdoc[0].setDOC_REG_ID(Objects.toString(fdoc.get("DOC_REG_ID"), ""));
            tdoc[0].setDOC_REG_SEQ(Objects.toString(fdoc.get("DOC_REG_SEQ"), ""));
            tdoc[0].setATFL_TP(Objects.toString(fdoc.get("ATFL_TP"), ""));
            tdoc[0].setSTOR_PLC_SPR_VAL(Objects.toString(fdoc.get("STOR_PLC_SPR_VAL"), ""));
            tdoc[0].setATTC_STOR_PATH(Objects.toString(fdoc.get("ATTC_STOR_PATH"), ""));
            tdoc[0].setORI_ATFL_NM(Objects.toString(fdoc.get("ORI_ATFL_NM"), ""));
            tdoc[0].setSERVER_ATFL_NM(Objects.toString(fdoc.get("SERVER_ATFL_NM"), ""));
            tdoc[0].setSAP_DOC_ID(Objects.toString(fdoc.get("SAP_DOC_ID"), ""));
            
            String op = "";
            for(Map<String, String> attr : opList) {
            	String nm = attr.get("OPTN_NM");
            	String vl = attr.get("OPTN_ITM_SLT_CTS");
            	
            	op += nm + ":" + vl + ";";
            }
            
            String add = "";
            for(Map<String, String> attr : addList) {
            	String nm = attr.get("ADD_OPTN_NM");
            	String vl = attr.get("ADD_OPTN_ITM_SLT_CTS");
            	
            	add += nm + ":" + vl + ";";
            }
            
            // 메모
            tmem[0] = new DT_MM03190_SSPFOUT_NEW_PRD_MEMO();
            tmem[0].setCO_CD(coCd);
            tmem[0].setNEW_PRD_REQ_NO(prdReqNo);
            tmem[0].setMEMO_TP_CD("15");
            tmem[0].setMEMO(op + add + fmem);

            masterInfo.setOUT_NEW_PRD(tprd);
            masterInfo.setOUT_NEW_PRD_ATTR(tatt);
            masterInfo.setOUT_NEW_PRD_DOC(tdoc);
            masterInfo.setOUT_NEW_PRD_MEMO(tmem);
            
         // PI I/F 로그 생성
            Map< String, Object> logMap  = new HashMap<String, Object>();
            
            logMap.put("ifSystemId", "SSP"    );
            logMap.put("ifPiId"    , "PI_3190");
            logMap.put("ifMsgId"   , (new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date())) + "00000000");
            logMap.put("ifMsgSeq"  , "1"      );
            logMap.put("coCd"      , Objects.toString(fprd.get("CO_CD"), ""));
            logMap.put("syncYn"    , "Y"      );

//            coPiRcvLogService.insertCoPiRcvLog(logMap, masterInfo, (Class<?>)masterInfo.getClass());
            Gson gson = new Gson();
        	String j = gson.toJson(masterInfo);
        	
        	logMap.put("sndDataClassNm", masterInfo.getClass().getName());
        	logMap.put("sndDataCts", j);
        	
            commonDAO.insert("com.ssp.core.co.coPiRcvLog.insertPiRcvLog", logMap);
            
            res = stub.MM03190_SSPF_SO(masterInfo);
        } catch (Exception e) {
        	if(res == null) {
         	   Map< String, Object> log  = new HashMap<String, Object>();
         	   log.put("IF_SYSTEM_ID", "SSP");
         	   log.put("IF_PI_ID", "PI_3190");
         	   log.put("IF_MSG_ID", (new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date())) + "00000000");
         	   log.put("IF_MSG_SEQ", "1");
         	   log.put("IF_PROC_RSLT_CD", "X");  // 데이터 재 전송 대상
         	   
                commonDAO.update("com.ssp.core.co.coPiRcvLog.updatPiRcvLogStatus", log);
        	}
        }
        
        return res;
    }
	
	/**
     * <pre>
     * 1. MethodName : deleteProductEstimateLayoutReset
     * 2. ClassName  : PrProductEstimateServiceImpl.java
     * 3. Comment    : 레이아웃 초기화
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param searchMap
     * @return
     * @throws Exception
     */
	public int deleteProductEstimateLayoutReset(Map<String, Object> searchMap) throws Exception {
		return commonDAO.delete("com.ssp.bo.pr.prProductEstimate.deleteProductEstimateLayoutReset", searchMap);
	}
	
	@Override
	public void estmProcCompleteSendMail(Map<String, Object> joinReqInfo) {
		Map<String,Object> mailParamMap = new HashMap();
		try {
			//승인 이메일 발송 파라미터 세팅
			mailParamMap.put("eventId" , "20056"                   );
			mailParamMap.put("sspEvtId", "20056-01"                );
			mailParamMap.put("mbrId"   , joinReqInfo.get("MBR_ID") );

			// [2] 이메일 발송 로그테이블 등록
			coCommonSendDao.insertEmailTransLogInfo(mailParamMap);
			
			mailParamMap.put("subInfoYn"   , "Y"                                                                               );	//이메일 디테일 유무
			mailParamMap.put("toEmail"     , joinReqInfo.get("EMAIL_ADDR")                                                     );	//수신자 이메일 
			mailParamMap.put("toName"      , joinReqInfo.get("MBR_NM")                                                         );	//수신자 이름 
			mailParamMap.put("fromEmail"   , sspPropertyService.getString("mail.ssp")                                          );	//발신자 이메일
			
			if("20".equals(joinReqInfo.get("MALL_SPR_CD"))) {
				mailParamMap.put("fromName"    , "서브원스토어 G-lab"                                                            	   );	//발신자 이름
			} else {
				mailParamMap.put("fromName"    , "서브원스토어"                                                                  	   );	//발신자 이름
			}
			
			mailParamMap.put("title"       , joinReqInfo.get("MBR_NM") + " 님, 요청하신 전문 제작품이 견적 완료 되었습니다."               );   //메일 제목
			
			if("20".equals(joinReqInfo.get("MALL_SPR_CD"))) {
				mailParamMap.put("mapping1"    , sspPropertyService.getString("mail.resource.root")
                                               + sspPropertyService.getString("mail.resource.rnd.logo")                                );	//치환값1
			} else {
			    mailParamMap.put("mapping1"    , sspPropertyService.getString("mail.resource.root")
	                                           + sspPropertyService.getString("mail.resource.logo")                                );	//치환값1
			}
			
			mailParamMap.put("mapping2"    , "전문제작품 견적 완료 안내"                                                           	   );	//치환값2
			mailParamMap.put("mapping3"    , joinReqInfo.get("MBR_NM") + " 님, 요청하신 " + joinReqInfo.get("DISP_PRD_NM") + " 의 견적이 완료 되었습니다."                   );   //치환값3
			mailParamMap.put("mapping4"    , "견적 완료 내역은 마이페이지>상품요청>전문제작품 견적현황에서 확인하실 수 있습니다."                          		   );	//치환값4
			mailParamMap.put("mapping5"    , "가격 및 배송정보 확인 후 주문 필요 시, 위 메뉴에서 상품등록요청 하시면 됩니다."                         	                                                   );	//치환값5
			mailParamMap.put("mapping6"    , ""                                                                                );	//치환값6
			mailParamMap.put("mapping7"    , ""                                                                                );	//치환값7
			mailParamMap.put("mapping8"    , ""                                                                                );	//치환값8
			mailParamMap.put("mapping9"    , ""                                                                                );	//치환값9
			mailParamMap.put("mapping10"   , sspPropertyService.getString("front.domain")                                      );	//치환값10(서브원스토어 URL경로)
			mailParamMap.put("sendTime"    , ""                                                                                );	//예약전송일시
			mailParamMap.put("userId"      , joinReqInfo.get("MBR_ID")                                                         );   //회원ID
			
			mailParamMap.put("mstSeq"      , "1"                                                                               );
			mailParamMap.put("reptNo"      , "1"                                                                               );
			mailParamMap.put("reptSeq"     , "1"                                                                               );
			mailParamMap.put("transEtcFds1", joinReqInfo.get("ESTM_REQ_NO")                                                         );	//요청번호
			mailParamMap.put("transEtcFds2", joinReqInfo.get("PRD_NM")                                                        );   //상품명
			mailParamMap.put("transEtcFds3", joinReqInfo.get("ESTM_SBM_AMT")                                                     );   //판매가
			mailParamMap.put("transEtcFds4", joinReqInfo.get("MIN_ORD_QTY")                                                        );   //최소주문수량
			mailParamMap.put("transEtcFds5", joinReqInfo.get("MULT_ODR_UNIT")                                           );   //배수주문단위
			mailParamMap.put("transEtcFds6", joinReqInfo.get("DLV_LT")                                           );   //배송 L/T
			mailParamMap.put("transEtcFds7", joinReqInfo.get("ESTM_VLD_DT")                                      );   //견적 유효 기간
			mailParamMap.put("transEtcFds8", joinReqInfo.get("EXCEPT_END_RSN")                                      );   //예외종료사유
			mailParamMap.put("transEtcFds9", sspPropertyService.getString("mail.resource.root") + "/pr/pr-product-estimate-detail.do?estmReqNo=" + joinReqInfo.get("ESTM_REQ_NO") + "&prdClcd=" + joinReqInfo.get("PRD_CLCD")  );   //전문제작품 견적상세
			
			coCommonSendDao.insertCoSendMail(mailParamMap);     //[3] 이메일전송정보마스터 등록
			coCommonSendDao.insertCoSendMailSub(mailParamMap);  //[4] 이메일전송정보상세 등록
		} catch(Exception e) {
			logger.error(e.getMessage(), e);
		}
	}

}
