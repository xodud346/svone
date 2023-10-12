package com.ssp.bo.od.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.ssp.bo.od.service.OdOdrQtyLmtService;
import com.ssp.core.co.dao.CommonDAO;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.od.exceptions.OdBizException;
import com.ssp.core.od.utils.OU;

@Service("odOdrQtyLmtService")
public class OdOdrQtyLmtServiceImpl implements OdOdrQtyLmtService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private CommonDAO dao;
	

	private final String NS = "com.ssp.bo.od.odr.qty.lmt.";
	private final String ns(String q) {
		return new StringBuffer(NS).append(q).toString();
	}
	
	@SuppressWarnings("unchecked")
	public Map<String, Object> selectQtyLmtUseYn(Map<String, Object> map) throws Exception {
		
		String sUseYn = (String) map.get("USE_YN");
		if (sUseYn != null) { dao.update(ns("updateQtyLmtUseYn"), map); }
		map.put("ds_odrQtyLmtUseYn", (List<Map<String, Object>>) dao.selectList(ns("selectQtyLmtUseYn"), map));
		
		return map;
	}
	
	
	@SuppressWarnings("unchecked")
	public Map<String, Object> listOdrQtyLmt(Map<String, Object> map) throws Exception {
		
		List<Map<String, Object>> list = (List<Map<String, Object>>) dao.selectList(ns("listOdrQtyLmt"), map);
		map.put("ds_list", list);
		
		return map;
	}
	
	@SuppressWarnings("unchecked")
	public Map<String, Object> xlsxOdrQtyLmt(Map<String, Object> map) throws Exception {
		
		List<Map<String, Object>> list = (List<Map<String, Object>>) dao.selectList(ns("xlsxOdrQtyLmt"), map);
		map.put("ds_xlsx", list);
		
		return map;
	}

	@SuppressWarnings("unchecked")
	public Map<String, Object> infoOdrQtyLmt(Map<String, Object> map) throws Exception {
		
		map.put("ds_info"             , (List<Map<String, Object>>) dao.selectList(ns("infoOdrQtyLmt"            ), map));
		map.put("ds_info_tgt_prd"     , (List<Map<String, Object>>) dao.selectList(ns("infoOdrQtyLmt4TgtPrd"     ), map));
		map.put("ds_info_except_bzplc", (List<Map<String, Object>>) dao.selectList(ns("infoOdrQtyLmt4ExceptBzplc"), map));
		
		return map;
	}
	
	@SuppressWarnings("unchecked")
	public Map<String, Object> histOdrQtyLmt(Map<String, Object> map) throws Exception {
		
		List<Map<String, Object>> hist = (List<Map<String, Object>>) dao.selectList(ns("histOdrQtyLmt"), map);
		map.put("dsHist", hist);
		
		return map;
	}
	
	public Map<String, Object> saveOdrQtyLmt(Map<String, Object> map) throws Exception {
		
		dao.insert(ns("saveOdrQtyLmt"), map);
		
		return map;
	}
	
	public Map<String, Object> patchOdrQtyLmt(Map<String, Object> map) throws Exception {
		
		dao.insert(ns("patchOdrQtyLmt"), map);
		
		return map;
	}
	
	public Map<String, Object> trmnOdrQtyLmt(Map<String, Object> map) throws Exception {
		
		dao.insert(ns("trmnOdrQtyLmt"), map);
		
		return map;
	}
	
	
	
	public Map<String, Object> infoPrd(Map<String, Object> map) throws Exception {
		
		List<Map<String, Object>> info = (List<Map<String, Object>>) dao.selectList(ns("infoPrdInfo"), map);
		map.put("dsPrdInfo", info);
		
		return map;
	}
	
	
	public Map<String, Object> validatePrd  (Map<String, Object> map) throws Exception {
		map.put("ds_validate_result", dao.selectList(ns("validatePrd"), map));
		
		return map;
	}
	
	public Map<String, Object> validateBzplc(Map<String, Object> map) throws Exception {
		map.put("ds_validate_result", dao.selectList(ns("validateBzplc"), map));
		
		return map;
	}
	
	
	@Autowired
	protected SspPropertyService sspPropertiesService;

	public Map<String, Object> xlsxDownload (Map<String, Object> map) throws Exception {
		ServletRequestAttributes sra = currentRequestAttributes();
		
		try {
			// 로그인 세션확인
			String coCd=(String) map.get("CO_CD");
			if (coCd == null) { throw new OdBizException("ERRS000347"); }  // "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다."
			
			// input dataset id 카멜화
			Map<String, Object> mInfo=CommonUtil.toCamelCaseMap(map   );
			mInfo.put("coCd"        , coCd                            );
			mInfo.put("pgmId"       , "SSP_BO_OA_82"                  );
			mInfo.put("excelMetaSeq", 1                               );
			mInfo.put("saveFileNm"  , "주문 수량제한.xlsx"            );
			mInfo.put("regpsnId"    , map.get("OPRTR_ID"             ));
			mInfo.put("updpsnId"    , map.get("OPRTR_ID"             ));
			mInfo.put("orgCd"       , map.get("ORG_CD"               ));
			mInfo.put("oprtrId"     , map.get("OPRTR_ID"             ));
			mInfo.put("pstnNm"      , map.get("PSTN_NM"              ));
			mInfo.put("cnsolIpAddr" , sra.getRequest().getRemoteAddr());
			mInfo.put("dbWrk"       , "BIGDOWNLOAD" );
			
			CoHttp.sendPost(sspPropertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", mInfo);
			return map;
			
		} catch (MessageException e) {
			if (e.getCode() == -100) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				map.put("errorCode", e.getCode   ());  // result.setErrorCode(e.getCode   ());
				map.put("errorMsg" , e.getMessage());  // result.setErrorMsg (e.getMessage());
				return map;
			} else {
				throw e;
			}
		}   //  catch
	}
	
	public Map<String, Object> xlsxBackgroundDownload (Map<String, Object> map) throws Exception {
		ServletRequestAttributes sra = currentRequestAttributes();
		
		try {
			// 로그인 세션확인
			String coCd=(String) map.get("CO_CD");
			if (coCd == null) { throw new OdBizException("ERRS000347"); }  // "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다."
			
			// input dataset id 카멜화
			Map<String, Object> mInfo=CommonUtil.toCamelCaseMap(map   );
			mInfo.put("coCd"        , coCd                            );
			mInfo.put("pgmId"       , "SSP_BO_OA_82"                  );
			mInfo.put("excelMetaSeq", 1                               );
			mInfo.put("saveFileNm"  , "주문 수량제한.xlsx"            );
			mInfo.put("regpsnId"    , map.get("OPRTR_ID"             ));
			mInfo.put("updpsnId"    , map.get("OPRTR_ID"             ));
			mInfo.put("orgCd"       , map.get("ORG_CD"               ));
			mInfo.put("oprtrId"     , map.get("OPRTR_ID"             ));
			mInfo.put("pstnNm"      , map.get("PSTN_NM"              ));
			mInfo.put("cnsolIpAddr" , sra.getRequest().getRemoteAddr());
			mInfo.put("dbWrk"       , "BIGDOWNLOAD" );
			
			CoHttp.sendPost(sspPropertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", mInfo);
			return map;
			
		} catch (MessageException e) {
			if (e.getCode() == -100) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				map.put("errorCode", e.getCode   ());  // result.setErrorCode(e.getCode   ());
				map.put("errorMsg" , e.getMessage());  // result.setErrorMsg (e.getMessage());
				return map;
			} else {
				throw e;
			}
		}   //  catch
	}
	
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
}
