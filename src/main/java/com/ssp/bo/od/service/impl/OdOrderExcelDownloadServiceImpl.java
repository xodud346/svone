package com.ssp.bo.od.service.impl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.od.service.OdOrderExcelDownloadService;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.od.exceptions.OdBizException;
import com.ssp.core.od.exceptions.OdExceptions;
import com.ssp.core.od.utils.OU;

/**
 * <pre>
 * @title 주문목록
 * @package com.ssp.bo.od.service.impl
 * </pre>
 *
 * @author neonlee
 * @since 2022. 05. 25.
 * @version 1.0
 * @see OdOrderExcelDownloadServiceImpl
 * =================== 변경 내역 ==================
 * 날짜           변경자     내용
 * ------------------------------------------------
 */

@Service("odOrderExcelDownloadServiceImpl")
public class OdOrderExcelDownloadServiceImpl implements OdOrderExcelDownloadService {

    @Autowired
    protected SspPropertyService propertiesService;
    

	 private static ServletRequestAttributes currentRequestAttributes() {
		 try {
		    RequestAttributes requestAttr = RequestContextHolder.currentRequestAttributes();
		    if (!(requestAttr instanceof ServletRequestAttributes)) {
		        return null;
		    }
		    return (ServletRequestAttributes) requestAttr;
		 } catch (Exception e) {
			return null;
		 }
	}	
    

    /* OA_01 주문관리 엑셀 대용량 다운로드 */
    @Override
    public NexacroResult excelBigDownloadOA01(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
        	ServletRequestAttributes sra = currentRequestAttributes();
            searchMap.put("SES_ID", OU.asS(odOrderComm.getSessionId()));
            // 로그인 세션확인
            if(odOrderComm.getSession().get("OPRTR_CO_CD") == null) {
                throw new OdBizException("ERRS000347");      // "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다."
            } 
            // input dataset id 카멜화
            Map<String, Object> searchInfo = CommonUtil.toCamelCaseMap(searchMap);
            searchInfo.put("coCd", OU.asS(odOrderComm.getSession().get("OPRTR_CO_CD")));
            searchInfo.put("pgmId", "SSP_BO_OA_01");
            searchInfo.put("excelMetaSeq", 1);
            searchInfo.put("saveFileNm", "주문조회.xlsx");
            searchInfo.put("regpsnId", OU.asS(odOrderComm.getSession().get("OPRTR_ID")));
            searchInfo.put("updpsnId", OU.asS(odOrderComm.getSession().get("OPRTR_ID")));
            
            searchInfo.put("orgCd", OU.asS(odOrderComm.getSession().get("ORG_CD")));
            searchInfo.put("oprtrId", OU.asS(odOrderComm.getSession().get("OPRTR_ID")));
            searchInfo.put("pstnNm", OU.asS(odOrderComm.getSession().get("PSTN_NM")));
            searchInfo.put("cnsolIpAddr", sra.getRequest().getRemoteAddr());
            searchInfo.put("dbWrk", "BIGDOWNLOAD");

            /*
        	 * 2023.07.28 박철희 - SSP-3404_결함_박철희_주문조회 대용량다운로드 오류 확인 요청
        	 *                    - 대용량 다운로드 실패관련 알림로직 추가하기 위한 응답값 Return 처리 
        	 */            
            Map<String, Object> re = CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchInfo);
            
            if(re != null && re.get("errorCode") != null) {
            	result.setErrorCode(Integer.valueOf(re.get("errorCode").toString()));     		
            }
            
            return result;
        }
        catch (MessageException e) {
            if (e.getCode() == -100) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
                result.setErrorCode(e.getCode());
                result.setErrorMsg(e.getMessage());
                return result;
            }
            else {
                throw e;
            }
        }
    }

    /* OA_04 주문변경목록 엑셀 대용량 다운로드 */
    @Override
    public NexacroResult excelBigDownloadOA04(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
        	ServletRequestAttributes sra = currentRequestAttributes();
            searchMap.put("SES_ID", OU.asS(odOrderComm.getSessionId()));
            // 로그인 세션확인
            if(odOrderComm.getSession().get("OPRTR_CO_CD") == null) {
                throw new OdBizException("ERRS000347");     // "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다."
            } 
            // input dataset id 카멜화
            Map<String, Object> searchInfo = CommonUtil.toCamelCaseMap(searchMap);
            searchInfo.put("coCd", OU.asS(odOrderComm.getSession().get("OPRTR_CO_CD")));
            searchInfo.put("pgmId", "SSP_BO_OA_04");
            searchInfo.put("excelMetaSeq", 1);
            searchInfo.put("saveFileNm", "주문변경.xlsx");
            searchInfo.put("regpsnId", OU.asS(odOrderComm.getSession().get("OPRTR_ID")));
            searchInfo.put("updpsnId", OU.asS(odOrderComm.getSession().get("OPRTR_ID")));
            
            searchInfo.put("orgCd", OU.asS(odOrderComm.getSession().get("ORG_CD")));
            searchInfo.put("oprtrId", OU.asS(odOrderComm.getSession().get("OPRTR_ID")));
            searchInfo.put("pstnNm", OU.asS(odOrderComm.getSession().get("PSTN_NM")));
            searchInfo.put("cnsolIpAddr", sra.getRequest().getRemoteAddr());
            searchInfo.put("dbWrk", "BIGDOWNLOAD");

            CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchInfo);
            return result;
        }
        catch (MessageException e) {
            if (e.getCode() == -100) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
                result.setErrorCode(e.getCode());
                result.setErrorMsg(e.getMessage());
                return result;
            }
            else {
                throw e;
            }
        }
    }

    /* KA_01 재고관리(S-MRP) 엑셀 대용량 다운로드 */
    @Override
    public NexacroResult excelBigDownloadKA01(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            searchMap.put("SES_ID", OU.asS(odOrderComm.getSessionId()));
            // 로그인 세션확인
            if(odOrderComm.getSession().get("OPRTR_CO_CD") == null) {
                throw new OdBizException("ERRS000347");     // "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다."
            }
            // input dataset id 카멜화
            Map<String, Object> searchInfo = CommonUtil.toCamelCaseMap(searchMap);
            searchInfo.put("coCd", OU.asS(odOrderComm.getSession().get("OPRTR_CO_CD")));
            searchInfo.put("pgmId", "SSP_BO_KA_01");
            searchInfo.put("excelMetaSeq", 1);
            searchInfo.put("saveFileNm", "재고관리.xlsx");
            searchInfo.put("regpsnId", OU.asS(odOrderComm.getSession().get("OPRTR_ID")));
            searchInfo.put("updpsnId", OU.asS(odOrderComm.getSession().get("OPRTR_ID")));

            CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchInfo);
            return result;
        }
        catch (MessageException e) {
            if (e.getCode() == -100) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
                result.setErrorCode(e.getCode());
                result.setErrorMsg(e.getMessage());
                return result;
            }
            else {
                throw e;
            }
        }
    }

    /* SN_09 정산대사 엑셀 대용량 다운로드 */
    @Override
    public NexacroResult excelBigDownloadSN09(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
        	ServletRequestAttributes sra = currentRequestAttributes();
            searchMap.put("SES_ID", OU.asS(odOrderComm.getSessionId()));
            // 로그인 세션확인
            if(odOrderComm.getSession().get("OPRTR_CO_CD") == null) {
                throw new OdBizException("ERRS000347");     // "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다."
            }
            // input dataset id 카멜화
            Map<String, Object> searchInfo = CommonUtil.toCamelCaseMap(searchMap);
            searchInfo.put("coCd", OU.asS(odOrderComm.getSession().get("OPRTR_CO_CD")));
            searchInfo.put("pgmId", "SSP_BO_SN_09");
            searchInfo.put("excelMetaSeq", 1);
            if(searchInfo.get("noCal").toString().equals("N")) {
            	searchInfo.put("saveFileNm", "정산대사.xlsx");
            } else {
            	searchInfo.put("saveFileNm", "미정산대사.xlsx");
            }
            searchInfo.put("regpsnId", OU.asS(odOrderComm.getSession().get("OPRTR_ID")));
            searchInfo.put("updpsnId", OU.asS(odOrderComm.getSession().get("OPRTR_ID")));

            searchInfo.put("orgCd", OU.asS(odOrderComm.getSession().get("ORG_CD")));
            searchInfo.put("oprtrId", OU.asS(odOrderComm.getSession().get("OPRTR_ID")));
            searchInfo.put("pstnNm", OU.asS(odOrderComm.getSession().get("PSTN_NM")));
            searchInfo.put("cnsolIpAddr", sra.getRequest().getRemoteAddr());
            searchInfo.put("dbWrk", "BIGDOWNLOAD");


            CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchInfo);
            return result;
        }
        catch (MessageException e) {
            if (e.getCode() == -100) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
                result.setErrorCode(e.getCode());
                result.setErrorMsg(e.getMessage());
                return result;
            }
            else {
                throw e;
            }
        }
    }

}
