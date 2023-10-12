package com.ssp.bo.cc;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpSession;

import org.apache.commons.collections.map.HashedMap;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.od.service.impl.OdOrderCommServiceImpl;

@Component
public class CCUtils {
	private CCUtils() {}
	private static Map<String, Object> localMap;
	private HttpSession localSession;
	
	 public CCUtils(HttpSession session) {
		if(session != null) {
			if(session.getAttribute("SES_ID") != null)
	        {
	            System.out.println("old session is " + session.getAttribute("SES_ID").toString());
	            //return;
	        }
	        localMap = new HashedMap();
	        localMap = CCUtils.prefixSession(localMap, session);

	        if(localMap == null) {
	            Map<String,Object> userInfo = (Map<String,Object>)session.getAttribute("userInfo");
	            String strLoginId=OdOrderCommServiceImpl.strLoginId;
	            localMap = new HashedMap();
	            localMap.put("OPRTR_ID" , strLoginId);
	            localMap.put("REGPSN_ID", strLoginId);
	            localMap.put("UPDPSN_ID", strLoginId);
	        }
	        localMap.put("SES_ID", session.getId());
	        System.out.println("new session is " + localMap);

	        for (Map.Entry<String, Object> entry : localMap.entrySet()) {
	            session.setAttribute(entry.getKey(), entry.getValue());
	        }
	        localSession = session;
		}
    }
	
	public static Map<String, Object> cnvtParams(Map<String, Object> params) {
		if (params == null || params.size() < 1) { return params; }
		
		List<String> excludeToArrays = Arrays.asList("START_NUM", "ROW_COUNT", "");
		
		for (Map.Entry<String, Object> entry : params.entrySet()) {
			String k = entry.getKey();
			Object v = entry.getValue();
			
			if (excludeToArrays.contains(k)) { continue; }
			if (v != null && v instanceof String) {
				params.put(k, ((String) v).split(","));  // Arrays.asList(((String) v).split(",")));
			}
		}
		
		return params;
	}
	
	public static final NexacroResult cnvtMap2NexaRslt(Map<String, Object> map) {
		return cnvtMap2NexacroResult(map, null);
	}
	public static final NexacroResult cnvtMap2NexacroResult(Map<String, Object> map) {
		return cnvtMap2NexacroResult(map, null);
	}
	
	public static final NexacroResult cnvtMap2NexacroResult(Map<String, Object> map, NexacroResult nr) {
		if (nr == null) { nr = new NexacroResult(); }
		
		for (Map.Entry<String, Object> entry : map.entrySet()) {
			if (entry.getKey().startsWith("ds") || entry.getValue() instanceof List) {
				nr.addDataSet (entry.getKey(), entry.getValue());
			} else {
				nr.addVariable(entry.getKey(), entry.getValue());
			}
		}
		
		return nr;
	}
	
	private static final String CSV_SEPARATOR = ",";
	public static final List<?> cnvtCsv2List(String pCsv) {
		return cnvtCsv2List(pCsv, CSV_SEPARATOR);
	}
	public static final List<?> cnvtCsv2List(String pCsv, String pSep) {
		
		String rCsv = null;
		if (pCsv == null || "".equals(pCsv.trim())) { return null; }
		
		pCsv = pCsv.trim();
		if ( pCsv.startsWith(pSep) ) { pCsv = pCsv.substring(pSep.length()); }
		if ( pCsv.endsWith  (pSep) ) { pCsv = pCsv.substring(0, pCsv.length()-pSep.length()); }
		
		return Arrays.asList(pCsv.split(pSep));
	}
	
	
	public static final Map<String, Object> prefixSession(Map<String, Object> param, HttpSession session) {
		if (session==null) { return param; }
		Map<String, Object> sessInf = (Map<String, Object>) SessionsAdmin.getSessionAdmn(); // session.getAttribute("__MALL_ADMIN_SESSION_INFO__");
		
		if (sessInf==null) { return param; }
		
		String coCd   =(String) sessInf.get("CO_CD"   );
		String oprtrId=(String) sessInf.get("OPRTR_ID");
		String orgCd  =(String) sessInf.get("ORG_CD");
		String pstnNm =(String) sessInf.get("PSTN_NM");		
		if(oprtrId == null || oprtrId.isEmpty() ||"".equals(oprtrId)) oprtrId = "";
		if(orgCd == null || orgCd.isEmpty() ||"".equals(orgCd)) orgCd = "";
		if(pstnNm == null || pstnNm.isEmpty() ||"".equals(pstnNm)) pstnNm = "";
		param.put("OPRTR_CO_CD", coCd   );  param.put("oprtrCoCd", coCd   );
		param.put("OPRTR_ID"   , oprtrId);  param.put("oprtrId"  , oprtrId);
		param.put("ORG_CD"	   , orgCd  );  param.put("orgCd"    , orgCd  );
		param.put("PSTN_NM"    , pstnNm );  param.put("pstnNm"   , pstnNm );
		param.put("REGPSN_ID"  , oprtrId);  param.put("regpsnId" , oprtrId);
		param.put("UPDPSN_ID"  , oprtrId);  param.put("updpsnId" , oprtrId);
		param.put("USER_ID"    , oprtrId);  param.put("userId"   , oprtrId);
		param.put("USR_ID"     , oprtrId);  param.put("usrId"    , oprtrId);
		
		param.put("SES_ID"     , session.getAttribute("SES_ID"));
		
		prefixCoCd(param);
		return param;
	}
	public static final List<Map<String, Object>> prefixSession(List<Map<String, Object>> param, HttpSession session) {
		return prefixSessionList(param, session);
	}
	public static final List<Map<String, Object>> prefixSessionList(List<Map<String, Object>> param, HttpSession session) {
		if (session==null) { return param; }
		Map<String, Object> sessInf = (Map<String, Object>) SessionsAdmin.getSessionAdmn(); // session.getAttribute("__MALL_ADMIN_SESSION_INFO__");
		
		if (sessInf==null) { return param; }
		String coCd=(String) sessInf.get("CO_CD");
		String oprtrId=(String) sessInf.get("OPRTR_ID");
		
		for(int i=0; i<param.size(); i++) {
//			param.get(i).put("OPRTR_CO_CD" , coCd);  param.get(i).put("oprtrCoCd" , coCd);
//			param.get(i).put("OPRTR_ID" , oprtrId);  param.get(i).put("oprtrId" , oprtrId);
//			param.get(i).put("REGPSN_ID", oprtrId);  param.get(i).put("regpsnId", oprtrId);
//			param.get(i).put("UPDPSN_ID", oprtrId);  param.get(i).put("updpsnId", oprtrId);
			prefixSession(param.get(i), session);
		}
		
		prefixCoCd(param);
		return param;
	}

	public static void initSession(HttpSession session) {
		if (session  ==null ) return ;
        if (localMap !=null ) return ;
        localMap = new HashedMap();
        localMap = CCUtils.prefixSession(localMap, session);
        System.out.println("sessing is " + localMap);

        if(localMap == null) {
            Map<String,Object> userInfo = (Map<String,Object>)session.getAttribute("userInfo");
            String strLoginId=OdOrderCommServiceImpl.strLoginId;
            localMap = new HashedMap();
            localMap.put("OPRTR_ID" , strLoginId);
            localMap.put("REGPSN_ID", strLoginId);
            localMap.put("UPDPSN_ID", strLoginId);
        }
        localMap.put("SES_ID", session.getId());
        /*if (sessInf==null) { return param; }
        String coCd=(String) sessInf.get("CO_CD");
        String oprtrId=(String) sessInf.get("OPRTR_ID");
        param.put("OPRTR_CO_CD" , coCd);  param.put("oprtrCoCd" , coCd);
        param.put("OPRTR_ID" , oprtrId);  param.put("oprtrId" , oprtrId);
        param.put("REGPSN_ID", oprtrId);  param.put("regpsnId", oprtrId);
        param.put("UPDPSN_ID", oprtrId);  param.put("updpsnId", oprtrId);
        */
	}
	
	public static final Map<String, Object> getSession() {
        return localMap;
    }
	
	
	@Value("${ssp.cocd}")
	protected        String _sspCoCd;
	protected static String  sspCoCd = null;
	
	@PostConstruct
	void postConstruct() {
		sspCoCd = (sspCoCd != null) ? sspCoCd : _sspCoCd;  // System.out.println("sys > properties > [ssp.cocd:"+ sspCoCd +"]");
	}
	
	public static final void prefixCoCd(List<Map<String, Object>> l) {
		if (null == l) { return; }
		for (Map<String, Object> m : l) { prefixCoCd(m); }
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static final void prefixCoCd(Map m) {
		String sCoCd = (String) m.get("coCd"),      sCO_CD = (String) m.get("CO_CD")
		   , sIfCoCd = (String) m.get("ifCoCd"), sIF_CO_CD = (String) m.get("IF_CO_CD");      // System.out.println("sys > properties > [ssp.cocd:"+ sspCoCd +"]");
		
		if (null == sCoCd     || "".equals(sCoCd  .trim())) { m.put("coCd"    , sspCoCd); }
		if (null == sCO_CD    || "".equals(sCO_CD .trim())) { m.put("CO_CD"   , sspCoCd); }
		if (null == sIfCoCd   || "".equals(sIfCoCd.trim())) { m.put("ifCoCd"  , sspCoCd); }
		if (null == sIF_CO_CD || "".equals(sCO_CD .trim())) { m.put("IF_CO_CD", sspCoCd); }
	}
	
}
