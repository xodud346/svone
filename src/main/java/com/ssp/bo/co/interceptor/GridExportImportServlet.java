package com.ssp.bo.co.interceptor;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.ssp.core.co.util.SessionsAdmin;

@SuppressWarnings("serial")
@Component
public class GridExportImportServlet extends com.nexacro17.xeni.services.GridExportImportServlet {
	final Logger logger = LoggerFactory.getLogger(GridExportImportServlet.class);
	
	public void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		
		try {
			String dbWrk = req.getParameter("dbWrk");
			String downRsn = req.getParameter("downRsn");
			String pgmId = req.getParameter("pgmId");
			
			if (dbWrk != null && !dbWrk.isEmpty()) {
				dbWrk = java.net.URLDecoder.decode(dbWrk, StandardCharsets.UTF_8.name());
				
				Map<String, Object> admin = SessionsAdmin.getSessionAdmn();	
				Map<String, Object> log = new HashMap<String, Object>();
				log.put("orgCd", admin.get("ORG_CD"));
				log.put("oprtrId", admin.get("OPRTR_ID"));
				log.put("pstnNm", admin.get("PSTN_NM"));
				log.put("pgmId", pgmId);
				log.put("cnsolIpAddr", req.getRemoteAddr());
				log.put("dbWrk", dbWrk);
				log.put("inqCnt", 0);
				log.put("dbInq", "");
				log.put("downRsn", downRsn);
				
				SQLInterceptorUtil.coPsnInfoArcHstDao.insertCoPsnInfoArcHst(log);
			}
		} catch (Exception e) {
			logger.error(e.toString());
		}
		
		
		super.doPost(req, res);
	}
}

