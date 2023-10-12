package com.ssp.bo.pr.controller;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pr.service.PrProductNewService;
import com.ssp.core.co.service.CoCommonSendService;
import com.ssp.core.co.service.CoPiRcvLogService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.BaseController;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.pc.service.PcCoreService;
import com.ssp.core.pr.service.PrCoreService;
import com.ssp.core.util.StringUtil;
import kr.co.serveone.EAI.MMM.SSPF.*;
import org.apache.axis.client.Stub;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

/**
 * <pre>
 * @title  신규상품요청 목록
 * @package com.ssp.bo.pr.controller
 * <pre>
 * @author  김주화
 * @since   2022.04.12
 * @version 1.0
 * @see PrProductNewController
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.04.12      김주화        최초작성
 */

@Controller
@RequestMapping({"/pr/prdNew"})
public class PrProductNewController extends BaseController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private PrProductNewService prProductNewService;
    @Autowired
    protected SspPropertyService propertiesService;
    @Resource(name="coCommonSendService") 
    private CoCommonSendService coCommonSendService;
    @Autowired
	private SspPropertyService sspPropertyService;
    @Autowired
    private PcCoreService pcCoreService;
    @Autowired
    private PrCoreService prCoreService;
    @Autowired
    CoPiRcvLogService coPiRcvLogService;

    /**
     * <pre>
     * 1. MethodName : selectNewProductReqList
     * 2. ClassName  : PrProductNewController
     * 3. Comment    : 신규상품요청 목록 조회
     * 4. 작성자     : 김주화
     * 5. 작성일     : 2022.04.12
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping({"/select-new-product-req-list.do"})
    public NexacroResult selectNewProductReqList(@ParamDataSet(name = "ds_search", required = false) List<Map<String, Object>> ds_search, @ParamVariable(name="idx") int idx, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        Map<String, Object> searchMap = ds_search.get(idx);
        Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
		searchMap.put("CO_CD", admin == null ? propertiesService.getString("ssp.cocd") : admin.get("CO_CD"));
    	searchMap.put("SES_ID", new OdOrderComm(session).getSessionId());
        try {
            searchMap.put("NEW_PRD_PROC_STATS_CD", ((String) searchMap.get("NEW_PRD_PROC_STATS_CD")).replaceAll(",", "','"));
            result.addDataSet("ds_list", this.prProductNewService.selectNewProductReqList(searchMap));

            return result;
        } catch (Exception e) {
            this.logger.error("신규상품요청 목록 조회");
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_09", "신규상품요청 목록 조회"}, e);
        }
    }

    /**
     * <pre>
     * 1. MethodName : selectNewProductReqDetail
     * 2. ClassName  : PrProductNewController
     * 3. Comment    : 신규상품요청 상세 조회
     * 4. 작성자     : 김주화
     * 5. 작성일     : 2022.04.12
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping({"/select-new-product-req-detail.do"})
    public NexacroResult selectNewProductReqDetail(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            List<Map<String, Object>> detail  = this.prProductNewService.selectNewProductReqDetail(searchMap);
            List<Map<String, Object>> prdAttr = this.prProductNewService.selectReqProcAttrInfoList(detail.get(0));
            if(prdAttr.size() == 0) {
                prdAttr = this.prProductNewService.selectProductSpecList(detail.get(0));
            }
            List<Map<String, Object>> atflList = this.prProductNewService.selectNewPrdReqFileList(searchMap);

            result.addDataSet("ds_detail"  , detail  );
            result.addDataSet("ds_prdAttr" , prdAttr );
            result.addDataSet("ds_atflList", atflList);

            return result;

        } catch (Exception e) {
            this.logger.error("신규상품요청 상세 조회");
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_10", "신규상품요청 상세 조회"}, e);
        }
    }

    /**
     * <pre>
     * 1. MethodName : selectMroClPrdChrpsn
     * 2. ClassName  : PrProductNewController
     * 3. Comment    : S-MRO 카테고리 및 상품 담당자 조회
     * 4. 작성자     : 김주화
     * 5. 작성일     : 2022.04.12
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping({"/select-mro-cl-prd-chrpsn.do"})
    public NexacroResult selectMroClPrdChrpsn (@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result.addDataSet("ds_mroClPrdChrpsn", this.prProductNewService.selectMroClPrdChrpsn(searchMap ));
            // 상품분류코드변경여부
            if(!(Objects.toString(searchMap.get("RP_PRD_CLCD"), "")).equals(searchMap.get("RP_PRD_CLCD_ORG"))) { 
                result.addDataSet("ds_prdAttr", this.prProductNewService.selectProductSpecList(searchMap));
            } else {
                result.addDataSet("ds_prdAttr", this.prProductNewService.selectReqProcAttrInfoList(searchMap));
            }

            return result;

        } catch (Exception e) {
            this.logger.error("S-MRO 카테고리 및 상품 담당자 조회");
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_10", "S-MRO 카테고리 및 상품 담당자 조회"}, e);
        }
    }


    /**
     * <pre>
     * 1. MethodName : updateNewPrdReqProcList
     * 2. ClassName  : PrProductNewController
     * 3. Comment    : 신규상품요청처리 수정(접수처리)
     * 4. 작성자     : 김주화
     * 5. 작성일     : 2022.04.12
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping({"/update-new-prd-req-proc-list.do"})
    public NexacroResult updateNewPrdReqProcList(@ParamDataSet(name = "ds_list", required = false) List<Map<String, Object>> ds_list) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
                SessionsAdmin.setSessionAdminLocal();
            }

            Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
            if(admin == null || admin.isEmpty()) {
                throw new Exception("세션정보 없음.");
            }

               /* 신규상품요청상태내역 테이블 insert */
            this.prProductNewService.insertNewPrdReqStatsDtlsList(ds_list, admin);

        } catch (Exception e) {
            this.logger.error("신규상품요청처리 수정(접수처리)");
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_09", "신규상품요청처리 수정(접수처리)"}, e);
        }

        return result;
    }

    /**
     * <pre>
     * 1. MethodName : updateNewPrdReqProc
     * 2. ClassName  : PrProductNewController
     * 3. Comment    : 신규상품요청처리 수정
     * 4. 작성자     : 김주화
     * 5. 작성일     : 2022.04.12
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping({"/update-new-prd-req-proc.do"})
    public NexacroResult updateNewPrdReqProc (@ParamDataSet(name = "ds_detail" , required = false) Map<String, Object> detailMap
                                             ,@ParamDataSet(name = "ds_prdAttr", required = false) List<Map<String, Object>> ds_prdAttr
    										 ,@ParamDataSet(name = "ds_prdRegDisTpNm", required = false) Map<String, Object> ds_prdRegDisTpNm) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
                SessionsAdmin.setSessionAdminLocal();
            }

            Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
            if(admin == null || admin.isEmpty()) {
                throw new Exception("세션정보 없음.");
            }

            // 사용자 정보 설정
            detailMap.put("OPRTR_ID", admin.get("OPRTR_ID"));
            /** SSP-2537 KYN */
            Map<String, Object>checkMap = prCoreService.checkDuplicateStatusRequest(detailMap);
            
//         	if("F".equals(checkMap.get("rtnCd")) || "E".equals(checkMap.get("rtnCd"))) {
//         		result.addVariable("rsltMsg", "이미 " + checkMap.get("rtnMsg") + " 상태입니다.");
//    			return result;
//    		}
         	
         	if(!"Y".equals(checkMap.get("rtnCd"))) {
         		result.addVariable("rsltMsg", "이미 " + checkMap.get("rtnMsg") + " 상태입니다.");
    			return result;
    		}
            
            
            if("25".equals(detailMap.get("REQ_STATS_CD")) ||"42".equals(detailMap.get("REQ_STATS_CD"))) {
            	//접수중복, 등록불가중복인지 체크
             	if(!"Y".equals(checkMap.get("rtnCd"))) {
            		result.addVariable("rsltMsg", "이미 " + checkMap.get("rtnMsg") + " 상태입니다.");
        			return result;
        		}
            } else if ( "26".equals(detailMap.get("REQ_STATS_CD"))) {
            	//등록요청 생성 시 (pi 전송 시 MRO중복처리 / MRO예외종료 케이스가 아니라면 )
            	Map<String, Object>mroResultStatus = prProductNewService.selectReSendMroRequestCheck(detailMap);
            	if(mroResultStatus != null && !mroResultStatus.isEmpty()) {
            		if(mroResultStatus.get("MRO_REQ_NO") != null && (!"20".equals(mroResultStatus.get("MRO_PROC_STATS_CD")) && !"30".equals(mroResultStatus.get("MRO_PROC_STATS_CD")))) {
                   		String mroStatsNm = "";
                        if(mroResultStatus.get("MRO_PROC_STATS_CD") == null) {
                            mroStatsNm = "처리 중";
                        } else if ("10".equals(mroResultStatus.get("MRO_PROC_STATS_CD"))) {
                            mroStatsNm = "추가정보등록요청";
                        }
                        result.addVariable("rsltMsg", "이미 " + mroStatsNm + " 상태입니다.");
                   		return result;
            		}
        		}
        	}
            
            /** SSP-2537 KYN */
            
            

           if("MEMO".equals(detailMap.get("REQ_STATS_CD"))) {
        	   int resultCnt = this.prProductNewService.insertNewPrdMemo(detailMap);
        	   if(resultCnt > 0 ) {
        		   result.addVariable("rsltMsg", "메모가 저장되었습니다.");
        	   }
        	   return result;
           }

            // 접수 시는 상태만 생성
            if("25".equals(detailMap.get("REQ_STATS_CD"))) {  // 접수 시
                /* 신규상품요청상태내역 테이블 insert */
                this.prProductNewService.insertNewPrdReqStatsDtls(detailMap);

                return result;
            }

            // 신규상품요청처리 수정
            this.prProductNewService.updateNewPrdReqProc(detailMap);
            
            /* ■ MD검토 요청시는 상태내역 생성하지 않음 */
            if("MD".equals(detailMap.get("REQ_STATS_CD"))) {
                /* 신규상품요청검토내역 테이블 MERGE */
                if(!detailMap.get("RP_PRD_CLCD").equals(detailMap.get("RP_PRD_CLCD_ORG"))) {  // 상품분류코드변경 시
                    this.prProductNewService.deleteReqProcAttrInfoList(detailMap);
                }
                // 신규상품요청처리속성정보 MERGE
                this.prProductNewService.mergeReqProcAttrInfoList(detailMap, ds_prdAttr);

                this.prProductNewService.mergeNewPrdReqRvwDtls(detailMap);
                return result;
            }
            
            if("TEMP".equals(detailMap.get("REQ_STATS_CD"))) {  // 임시저장 시
                detailMap.put("RP_PRD_CLCD_ORG", detailMap.get("RP_PRD_CLCD_ORG") == null ? "TEMP_SAVE" : detailMap.get("RP_PRD_CLCD_ORG")); 
                detailMap.put("RP_PRD_CLCD", detailMap.get("RP_PRD_CLCD") == null ? "TEMP_SAVE" : detailMap.get("RP_PRD_CLCD")); 
            	if(!detailMap.get("RP_PRD_CLCD").equals(detailMap.get("RP_PRD_CLCD_ORG"))) {  // 상품분류코드변경 시
                    this.prProductNewService.deleteReqProcAttrInfoList(detailMap);
                }
                // 신규상품요청처리속성정보 MERGE
                this.prProductNewService.mergeReqProcAttrInfoList(detailMap, ds_prdAttr);
                return result;
            }

            if("26".equals(detailMap.get("REQ_STATS_CD"))) {  // 등록요청생성 시
                if(!detailMap.get("RP_PRD_CLCD").equals(detailMap.get("RP_PRD_CLCD_ORG"))) {  // 상품분류코드변경 시
                    this.prProductNewService.deleteReqProcAttrInfoList(detailMap);
                }
                // 신규상품요청처리속성정보 MERGE
                this.prProductNewService.mergeReqProcAttrInfoList(detailMap, ds_prdAttr);

                // 유효한 제조원인지 체크
                int mnfrCnt = prProductNewService.checkMnfrCnt(detailMap);
                if(mnfrCnt != 1) {
                	result.addVariable("rsltMsg", "유효한 제조원이 아닙니다.");
                    return result;
                }
                // S-MRO 에 요청정보 전송
                // ----------------------
                String msg = this.sendNewPrdReqDataToMro(detailMap, admin);
                if(!StringUtil.isEmpty(msg)) {
                	result.addVariable("rsltMsg", msg);

                    return result;
                }
            }

            // 등록불가 시 메일 전송
            if("42".equals(detailMap.get("REQ_STATS_CD"))) {
                this.sendRegDisMailToMbr(detailMap, ds_prdRegDisTpNm);
            }

            // 대체상품제안 메일 전송
            if("30".equals(detailMap.get("REQ_STATS_CD"))) {
                this.sendAltPrdMailToMbr(detailMap);
            }

            // 중복상품처리시
            if("56".equals(detailMap.get("REQ_STATS_CD"))) {
            	Map<String,Object> insertData = new HashMap<String,Object>();

            	// 필수 파라미터 : coCd(회사코드), newPrdReqNo(신규상품번호), prdId(상품ID), regpsnId(등록자)
            	insertData.put("coCd"       , detailMap.get("CO_CD"         )); //회사코드
            	insertData.put("newPrdReqNo", detailMap.get("NEW_PRD_REQ_NO")); //신규상품요청번호
            	insertData.put("prdId"      , StringUtil.fillLeft(detailMap.get("PRPS_PRD_ID").toString(), 18, "0")); //상품ID
            	insertData.put("regpsnId"   , detailMap.get("OPRTR_ID"      )); //등록자ID
            	insertData.put("updpsnId"   , detailMap.get("OPRTR_ID"      )); //등록자ID
            	insertData.put("dupPrd", "Y"); // 중복 처리여부
            	int chkCnt = pcCoreService.insertNewPrdReqPrc(insertData);
            	if(chkCnt < 0 ) {
            		String absChkCnt = String.valueOf(Math.abs(chkCnt));
            		String msg ="";
            		if(absChkCnt.equals("29")) {
            			msg ="이미 가격정보등록요청 상태입니다.";
            		} else if(absChkCnt.equals("56")) {
            			msg ="이미 중복상품처리 상태입니다.";
            		}
            		result.addVariable("rsltMsg", msg);
            	}
            	
            	return result;
            }

            /* 신규상품요청상태내역 테이블 insert */
            this.prProductNewService.insertNewPrdReqStatsDtls(detailMap);

        } catch (Exception e) {
        	e.printStackTrace();
            this.logger.error("신규상품요청처리 수정");
            result.addVariable("rsltMsg", "신규상품요청처리 오류!\n(" + e.getMessage() + "[" + e.getCause() + "])");
            //throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_10", "신규상품요청처리 수정"}, e);
        }

        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : sendNewPrdReqDataToMro
     * 2. ClassName  : PrProductNewController
     * 3. Comment    : 신규상품요청정보 MRO 전송
     * 4. 작성자     : 김주화
     * 5. 작성일     : 2022.05.04
     * </pre>
     * @return NexacroResult
     */
    public String sendNewPrdReqDataToMro(Map<String, Object> map, Map<String, Object> admin) throws Exception {
    	MM03190_SSPF_SOBindingStub stub = null;

        // PI I/F 로그 생성용 map
        Map< String, Object> logMap  = new HashMap<String, Object>();
    	// 결과
        DT_MM03190_SSPF_response res = null;

        try {
        	String mPiUser     = sspPropertyService.getString("wsdl.pi.user"       );
            String mPiPw       = sspPropertyService.getString("wsdl.pi.pwd"        );
            String mPiHost     = sspPropertyService.getString("wsdl.pi.url.host"   );
            String mPiSaveFile = sspPropertyService.getString("wsdl.pi.url.mm03190");

            try {
                logger.debug("mPiUser:{}, mPiPw:{}, mPiHost:{}, mPiSaveFile:{}",mPiUser,mPiPw,mPiHost,mPiSaveFile);

                stub = new MM03190_SSPF_SOBindingStub();
                stub.setUsername(mPiUser);
                stub.setPassword(mPiPw);
                stub._setProperty(Stub.ENDPOINT_ADDRESS_PROPERTY, mPiHost + mPiSaveFile);

                logger.debug("endpoint url:{}", stub._getProperty(Stub.ENDPOINT_ADDRESS_PROPERTY));

            } catch(Exception e) {
                logger.error("MM03190_SSPF_SOBindingStub create Error :", e);
            }

            // 정보조회
            Map<String, Object>       fprd = this.prProductNewService.selectNewProductReqDetail(map).get(0);  // 요청상품정보
            List<Map<String, Object>> fatt = this.prProductNewService.selectReqProcAttrInfoList(fprd);        // 속성정보
            List<Map<String, Object>> fdoc = this.prProductNewService.selectNewPrdReqFileList(map);           // 첨부파일정보

            DT_MM03190_SSPF masterInfo = new DT_MM03190_SSPF();
            masterInfo.setXBUKRS(admin.get("CO_CD").toString());
            masterInfo.setXLANG("KO");
            //masterInfo.setXROWS("1" );
            String todateStr = new SimpleDateFormat("yyyyMMdd").format(Calendar.getInstance().getTime());
            String nowStr    = new SimpleDateFormat("HHmmss"  ).format(Calendar.getInstance().getTime());
            masterInfo.setXDATE(todateStr);
            masterInfo.setXTIME(nowStr);
            
            // MRO 속성만 보냄
            for(int i = fatt.size() - 1; i >= 0; i--) {
                Map<String, Object> att = fatt.get(i);
                if(!"30".equals(Objects.toString(att.get("ATTR_TP"), ""))) { fatt.remove(i); }
            }

            DT_MM03190_SSPFOUT_NEW_PRD[]      tprd = new DT_MM03190_SSPFOUT_NEW_PRD[1];                 // 요청상품정보
            DT_MM03190_SSPFOUT_NEW_PRD_ATTR[] tatt = new DT_MM03190_SSPFOUT_NEW_PRD_ATTR[fatt.size()];  // 속성정보
            DT_MM03190_SSPFOUT_NEW_PRD_DOC[]  tdoc = new DT_MM03190_SSPFOUT_NEW_PRD_DOC[fdoc.size()];   // 첨부파일정보
            DT_MM03190_SSPFOUT_NEW_PRD_MEMO[] tmem = new DT_MM03190_SSPFOUT_NEW_PRD_MEMO[StringUtil.isEmpty(Objects.toString(fprd.get("RP_MEMO_CTS"), "")) ? 0  : 1]; // 메모

            // 요청상품정보
            tprd[0] = new DT_MM03190_SSPFOUT_NEW_PRD();
            tprd[0].setCO_CD            (Objects.toString(fprd.get("CO_CD"                ), ""));  /* 회사코드         */
            tprd[0].setNEW_PRD_REQ_NO   (Objects.toString(fprd.get("NEW_PRD_REQ_NO"       ), ""));  /* 신규상품요청번호 */
            tprd[0].setREQ_PRD_NM       (Objects.toString(fprd.get("RP_REQ_PRD_NM"        ), ""));  /* 요청상품명       */
            tprd[0].setBZPLC_ID         (Objects.toString(fprd.get("BZPLC_ID"             ), ""));  /* 사업장ID         */
            tprd[0].setOPR_UNIT_ID      (Objects.toString(fprd.get("OPR_UNIT_ID"          ), ""));  /* 운영단위ID       */
            tprd[0].setDEPT_CD          (Objects.toString(fprd.get("DEPT_ID"              ), ""));  /* 부서코드         */
            tprd[0].setMBR_ID           (Objects.toString(fprd.get("REQPSN_ID"            ), ""));  /* 회원ID           */
            tprd[0].setPRD_CLCD         (Objects.toString(fprd.get("RP_MRO_PRD_CLCD"      ), ""));  /* MRO상품분류코드  */
            tprd[0].setMNFR_NO          (Objects.toString(fprd.get("RP_MNFR_NO"           ), ""));  /* 제조사번호       */
            tprd[0].setORGPLC_CTRY_CD   (Objects.toString(fprd.get("RP_ORGPLC_CTRY_CD"    ), ""));  /* 원산지국가코드   */
            tprd[0].setBASIS_UNIT_CD    (Objects.toString(fprd.get("RP_BASIS_UNIT_CD"     ), ""));  /* 기본단위코드     */
            tprd[0].setBASIS_UNIT_QTY   (Objects.toString(fprd.get("RP_BASIS_UNIT_QTY"    ), ""));  /* 기본단위수량     */
            tprd[0].setSELL_UNIT_CD     (Objects.toString(fprd.get("RP_SELL_UNIT_CD"      ), ""));  /* 판매단위코드     */
            tprd[0].setSELL_UNIT_QTY    (Objects.toString(fprd.get("SELL_UNIT_QTY"        ), ""));  /* 판매단위수량     */
            tprd[0].setHPE_SELL_UPRC    (Objects.toString(fprd.get("HPE_SELL_UPRC_NUM"    ), ""));  /* 희망판매단가     */
            
            tprd[0].setCURR_UNIT_CD     ("KRW"                                                  );  /* 통화단위코드     */
            tprd[0].setCHM_MTL_YN       (Objects.toString(fprd.get("CHM_MTL_YN"           ), ""));  /* 화학물질여부     */
            tprd[0].setHPE_SELL_UNIT_QTY(Objects.toString(fprd.get("HPE_SELL_UNIT_QTY_NUM"), ""));  /* 희망판매단위수량 */
            String cd = Objects.toString(fprd.get("RP_PUB_ONLY_SPR_CD"), "");
            tprd[0].setPUB_ONLY_SPR_CD  ("P".equals(cd) ? "41" : ("E".equals(cd) ? "42" : "")   );  /* 공용(P)전용(E)구분코드 */
            tprd[0].setREQ_RSN          (Objects.toString(fprd.get("REQ_RSN"              ), ""));  /* 요청사유         */
            tprd[0].setREPR_ATTR        (Objects.toString(fprd.get("PI_REQ_PRVL"          ), ""));  /* 대표규격         */
            tprd[0].setEMP_NO           (Objects.toString(admin.get("EMP_NO"              ), ""));  /* 사원번호         */

            // 속성정보
            for(int i = 0; i < fatt.size(); i++) {
                Map<String, Object> att = fatt.get(i);
                tatt[i] = new DT_MM03190_SSPFOUT_NEW_PRD_ATTR();
                tatt[i].setCO_CD           (Objects.toString(att.get("CO_CD"         ), ""));  /* 회사코드           */
                tatt[i].setNEW_PRD_REQ_NO  (Objects.toString(att.get("NEW_PRD_REQ_NO"), ""));  /* 신규상품요청번호   */
                tatt[i].setREQ_SEQ         (Objects.toString(att.get("REQ_SEQ"       ), ""));  /* 요청순번           */
                tatt[i].setATTR_CD         (Objects.toString(att.get("ATTR_CD"       ), ""));  /* 속성코드           */
                tatt[i].setNEW_PRD_REQ_PRVL(Objects.toString(att.get("PRVL"          ), ""));  /* 신규상품요청속성값 */
            }

            // 첨부파일정보
            for(int i = 0; i < fdoc.size(); i++) {
                Map<String, Object> doc = fdoc.get(i);
                tdoc[i] = new DT_MM03190_SSPFOUT_NEW_PRD_DOC();
                tdoc[i].setCO_CD           (Objects.toString(fprd.get("CO_CD"         ), ""));  /* 회사코드           */
                tdoc[i].setNEW_PRD_REQ_NO  (Objects.toString(fprd.get("NEW_PRD_REQ_NO"), ""));  /* 신규상품요청번호   */
                tdoc[i].setDOC_REG_ID      (Objects.toString(doc.get("DOC_REG_ID"     ), ""));  /* 문서등록ID         */
                tdoc[i].setDOC_REG_SEQ     (Objects.toString(doc.get("DOC_REG_SEQ"    ), ""));  /* 문서등록순번       */
                tdoc[i].setATFL_TP         (Objects.toString(doc.get("ETC_FDS_1"      ), ""));  /* [MM] 첨부파일 유형 */
                tdoc[i].setSTOR_PLC_SPR_VAL(Objects.toString(doc.get("STOR_PLC_SPR_CD"), ""));  /* 저장장소구분값     */
                tdoc[i].setATTC_STOR_PATH  (Objects.toString(doc.get("ATFL_STOR_PATH" ), ""));  /* 첨부저장경로       */
                tdoc[i].setORI_ATFL_NM     (Objects.toString(doc.get("ATFL_NM"        ), ""));  /* 원첨부파일명       */
                tdoc[i].setSERVER_ATFL_NM  (Objects.toString(doc.get("ORI_ATFL_NM"    ), ""));  /* 첨부파일명(서버)   */
                tdoc[i].setSAP_DOC_ID      (Objects.toString(doc.get("SAP_DOC_ID"     ), ""));  /* SAP문서ID          */
            }

            // 메모정보
            if(tmem.length > 0) {
                tmem[0] = new DT_MM03190_SSPFOUT_NEW_PRD_MEMO();
                tmem[0].setCO_CD         (Objects.toString(fprd.get("CO_CD"         ), ""));  /* 회사코드         */
                tmem[0].setNEW_PRD_REQ_NO(Objects.toString(fprd.get("NEW_PRD_REQ_NO"), ""));  /* 신규상품요청번호 */
                tmem[0].setMEMO_TP_CD    ("15"                                            );  /* 메모유형코드     */
                tmem[0].setMEMO          (Objects.toString(fprd.get("RP_MEMO_CTS"   ), ""));  /* 메모             */
            }

            masterInfo.setOUT_NEW_PRD(tprd);
            masterInfo.setOUT_NEW_PRD_ATTR(tatt);
            masterInfo.setOUT_NEW_PRD_DOC(tdoc);
            masterInfo.setOUT_NEW_PRD_MEMO(tmem);

            //String ifMsgId = (new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date())) + "00000000";
            String ifMsgId = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSS")) + "00000000";
            // PI I/F 로그 생성
            logMap.put("ifSystemId", "SSP"    );
            logMap.put("ifPiId"    , "MM03190");
            logMap.put("ifMsgId"   , ifMsgId);
            logMap.put("ifMsgSeq"  , "1"      );
            logMap.put("coCd"      , Objects.toString(fprd.get("CO_CD"), ""));
            logMap.put("syncYn"    , "Y"      );
            coPiRcvLogService.insertCoPiRcvLog(logMap, masterInfo, (Class<?>)masterInfo.getClass());

            // PI 전송
            res = stub.MM03190_SSPF_SO(masterInfo);


            if("S".equals(res.getXSTAT())) {
                // 데이터 오류
                logMap.put("ifProcRsltCd", "S");
                logMap.put("ifProcRsltMsg","정상처리되었습니다.");
                coPiRcvLogService.updateSyncPiRcvLog(logMap);
            }else {
            	// 데이터 오류
                logMap.put("ifProcRsltCd", "E");
                logMap.put("ifProcRsltMsg",res.getXMSGS());
                coPiRcvLogService.updateSyncPiRcvLog(logMap);
                return "S-MRO 요청정보 전송 오류!\n(" + res.getXMSGS() + ")";
            }

            // 신규상품요청처리 수정
            map.put("MRO_REQ_NO", res.getMRO_REQ_NO());  // MRO요청번호
            this.prCoreService.updateNewPrdReqProc(map);
        } catch (Exception e) {
            this.logger.error("신규상품요청정보 S-MRO 전송 오류");
            logMap.put("ifProcRsltCd", "E");
            logMap.put("ifProcRsltMsg",e.getMessage());
            coPiRcvLogService.updateSyncPiRcvLog(logMap);
            // 데이터 전송 오류
            return "S-MRO 요청정보 전송 오류!\n(" + e.getMessage() + "[" + e.getCause() + "])";
        }

        return null;
    }

    /**
     * <pre>
     * 1. MethodName : sendRegDisMailToMbr
     * 2. ClassName  : PrProductNewController
     * 3. Comment    : 요청자에 등록불가 메일 전송
     * 4. 작성자     : 김주화
     * 5. 작성일     : 2022.05.06
     * </pre>
     * @return NexacroResult
     */
    public void sendRegDisMailToMbr(Map<String, Object> param, Map<String, Object> param2) throws Exception {
        Map<String,Object> commandMap = new HashMap<String,Object>();
        try {
        	Map<String, Object> salsChrpsnInfo = this.prProductNewService.selectSalsChrspnInfo(param);  // 영업담당자정보 조회
            // 이메일 헤더정보
            commandMap.put("eventId"  , "20053");                                 // 이메일 템플릿 정보
            commandMap.put("subInfoYn", "Y");                                     // 이메일 디테일 유무
            commandMap.put("fromEmail", "mail@serveone.co.kr");                   // 발신자 이메일
            commandMap.put("fromName" , "서브원스토어");                          // 발신자 이름
            commandMap.put("toEmail"  , param.get("EMAIL_ADDR"));                 // 수신자 이메일 
            commandMap.put("toName"   , param.get("MBR_NM")   );                  // 수신자 이름 
            commandMap.put("title"    , "[" + param.get("NEW_PRD_REQ_NO") + "]"
                                      + " 신규상품등록이 취소처리 되었습니다.");  // 메일 제목

            commandMap.put("mapping1", sspPropertyService.getString("mail.resource.root")
                                     + sspPropertyService.getString("mail.resource.logo"));                      // 서브원스토어의 이미지 URL경로
            commandMap.put("mapping2", "상품등록 취소 안내");                                                    // 치환값2
            commandMap.put("mapping3", param.get("MBR_NM"));            // 치환값3
            commandMap.put("mapping4", "마이페이지>신규상품처리현황");  // 치환값4
            commandMap.put("mapping5", salsChrpsnInfo.get("SALS_CHRPSN_NM1"));                                            // 치환값5
            commandMap.put("mapping6", salsChrpsnInfo.get("EMAIL_ADDR"));                                      // 치환값6
            commandMap.put("mapping7", "");                                                                      // 치환값7
            commandMap.put("mapping8", "");                                                                      // 치환값8
            commandMap.put("mapping9", "");                                                                      // 치환값9
            commandMap.put("mapping10", sspPropertyService.getString("mail.resource.root"));                     // 서브원스토어의 URL경로
            commandMap.put("sendTime", "");                                                                      // 예약전송일시
            commandMap.put("userId", param.get("MBR_ID"));                                                       // 주문 회원자ID

            // 이메일 디테일정보
            List<Map<String, Object>> map = new ArrayList<>();
            
            // 디테일정보_01
            Map<String, Object> tMap = new HashMap<String,Object>();
            tMap.put("eventId", "20053");                           // 이메일 템플릿 정보
            tMap.put("mstSeq" , 1);                                 // 마스터순번
            tMap.put("reptNo" , 1);                                 // 반복번호
            tMap.put("reptSeq", 1);                                 // 반복순번
            tMap.put("transEtcFds1", param.get("NEW_PRD_REQ_NO"));  // 신규상품요청번호
            tMap.put("transEtcFds2", param.get("REQ_PRD_NM"    ));  // 상품명
            tMap.put("transEtcFds3", param.get("RQ_MNFR_NM"    ));  // 제조사명
            tMap.put("transEtcFds4", param.get("REQ_PRVL"      ));  // 요청규격

            map.add(CommonUtil.toCamelCaseMap(tMap)); 
            
            // 디테일정보_02
            Map<String, Object> tMap2 = new HashMap<String,Object>();
            tMap2.put("eventId", "20053");                          // 이메일 템플릿 정보
            tMap2.put("mstSeq" , 1);                                // 마스터순번
            tMap2.put("reptNo" , 2);                                // 반복번호
            tMap2.put("reptSeq", 1);                                // 반복순번
            tMap2.put("transEtcFds2", "등록불가유형 : "+param2.get("PRD_REG_DIS_TP_NM"));    // 등록불가유형
            tMap2.put("transEtcFds1", param.get("REG_DIS_RSN"));    // 취소사유

            map.add(CommonUtil.toCamelCaseMap(tMap2)); 

            coCommonSendService.insertCoSendMail(commandMap, map);
        } catch(Exception e) {
            this.logger.error("신규상품요청 등록불가 메일전송 오류");
            throw new Exception(e);
        }
    }
    
       /**
     * <pre>
     * 1. MethodName : sendAltPrdMailToMbr
     * 2. ClassName  : PrProductNewController
     * 3. Comment    : 요청자에 대체상품제안 메일 전송
     * 4. 작성자     : 김주화
     * 5. 작성일     : 2022.05.23
     * </pre>
     * @return NexacroResult
     */
    public void sendAltPrdMailToMbr(Map<String, Object> param) throws Exception {
        Map<String,Object> commandMap = new HashMap<String,Object>();
        try {
            // 정보조회
            Map<String, Object> prdInf = this.prProductNewService.selectNewProductReqDetail(param).get(0);  // 요청상품정보
            Map<String, Object> salsChrpsnInfo = this.prProductNewService.selectSalsChrspnInfo(param);  // 영업담당자정보 조회

            // 이메일 헤더정보
            commandMap.put("eventId"  , "20052");                            // 이메일 템플릿 정보
            commandMap.put("subInfoYn", "Y");                                // 이메일 디테일 유무
            commandMap.put("fromEmail", "mail@serveone.co.kr");              // 발신자 이메일
            commandMap.put("fromName" , "서브원스토어");                     // 발신자 이름
            commandMap.put("toEmail"  , prdInf.get("EMAIL_ADDR"));           // 수신자 이메일 
            commandMap.put("toName"   , prdInf.get("MBR_NM")   );            // 수신자 이름 
            commandMap.put("title"    , "[" + prdInf.get("NEW_PRD_REQ_NO") + "]"
                                      + " 신규상품등록에 대하여 당사의 경쟁력있는 상품으로 제안드립니다.");      // 메일 제목
            commandMap.put("mapping1", sspPropertyService.getString("mail.resource.root")
                                     + sspPropertyService.getString("mail.resource.logo"));                      // 서브원스토어의 이미지 URL경로
            commandMap.put("mapping2", "상품등록 안내");                                                         // 치환값2
            commandMap.put("mapping3", prdInf.get("MBR_NM"));                                                    // 치환값3
            commandMap.put("mapping4", "마이페이지>신규상품처리현황");                                           // 치환값4
            commandMap.put("mapping5", salsChrpsnInfo.get("SALS_CHRPSN_NM1"));                                           // 치환값5
            commandMap.put("mapping6", salsChrpsnInfo.get("EMAIL_ADDR"));                                     // 치환값6
            commandMap.put("mapping7", "");                                                                      // 치환값7
            commandMap.put("mapping8", "");                                                                      // 치환값8
            commandMap.put("mapping9", "");                                                                      // 치환값9
            commandMap.put("mapping10", sspPropertyService.getString("mail.resource.root"));                     // 서브원스토어의 URL경로
            commandMap.put("sendTime", "");                                                                      // 예약전송일시
            commandMap.put("userId", prdInf.get("MBR_ID"));                                                      // 주문 회원자ID

            // 이메일 디테일정보
            List<Map<String, Object>> map = new ArrayList<>();
            
            // 디테일정보_01
            Map<String, Object> tMap = new HashMap<String,Object>();
            tMap.put("eventId", "20052");                                    // 이메일 템플릿 정보
            tMap.put("mstSeq" , 1);                                          // 마스터순번
            tMap.put("reptNo" , 1);                                          // 반복번호
            tMap.put("reptSeq", 1);                                          // 반복순번
            tMap.put("transEtcFds1", prdInf.get("NEW_PRD_REQ_NO"));          // 신규상품요청번호
            tMap.put("transEtcFds2", prdInf.get("REQ_PRD_NM"    ));          // 상품명
            tMap.put("transEtcFds3", prdInf.get("RQ_MNFR_NM"    ));          // 제조사명
            tMap.put("transEtcFds4", prdInf.get("REQ_PRVL"      ));          // 요청규격

            map.add(CommonUtil.toCamelCaseMap(tMap)); 
            
            // 디테일정보_02
            Map<String, Object> tMap2 = new HashMap<String,Object>();
			String ssoServiceUrl = propertiesService.getString("mail.resource.root");
            tMap2.put("eventId", "20052");                                   // 이메일 템플릿 정보
            tMap2.put("mstSeq" , 1);                                         // 마스터순번
            tMap2.put("reptNo" , 2);                                         // 반복번호
            tMap2.put("reptSeq", 1);                                         // 반복순번
            tMap2.put("transEtcFds1", prdInf.get("PRD_IMG"));                // 상품의 이미지
            tMap2.put("transEtcFds2", prdInf.get("PRPS_PRD_ID"));            // 상품ID
            tMap2.put("transEtcFds3", prdInf.get("PRPS_PRD_NM"));            // 상품명
            tMap2.put("transEtcFds4", prdInf.get("MRO_PRD_PRVL"));           // 대표규격
            tMap2.put("transEtcFds5", prdInf.get("PRPS_MNFR_NM") + "/" + prdInf.get("MAIL_ORGPLC_CTRY_NM"));
                                                                             // 제조원/원산지
            tMap2.put("transEtcFds6", prdInf.get("MAIL_HPE_SELL_UNIT_CD"));  // 단위
            tMap2.put("transEtcFds7", prdInf.get("MAIL_HPE_SELL_UNIT_QTY")); // 최소구매수량
            
            tMap2.put("transEtcFds8", sspPropertyService.getString("mail.resource.root") + "/pr/pr-product-detail.do?mailYn=Y&prdId=" + prdInf.get("PRPS_PRD_ID"));    // 상품상세URL

            map.add(CommonUtil.toCamelCaseMap(tMap2)); 

            coCommonSendService.insertCoSendMail(commandMap, map);
        } catch(Exception e) {
            this.logger.error("신규상품요청 대체상품 메일전송 오류");
            throw new Exception(e);
        }
    }
}