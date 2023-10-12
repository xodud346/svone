package com.ssp.bo.od;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ssp.core.od.utils.OU;

public class OdOrderComm {

    public static final String SES_ID = "SES_ID";
    protected static final Logger logger = LoggerFactory.getLogger(OdOrderComm.class);
    private Map<String, Object> localMap = null;

    public OdOrderComm(HttpSession session) {

        localMap = OU.newMap(OU.getSessionAdmn());

        String coCd= OU.asS(localMap.get("CO_CD"));
        String oprtrId=OU.asS(localMap.get("OPRTR_ID"));
        localMap.put("OPRTR_CO_CD" , coCd);  localMap.put("oprtrCoCd" , coCd);
        localMap.put("OPRTR_ID" , oprtrId);  localMap.put("oprtrId" , oprtrId);
        localMap.put("REGPSN_ID", oprtrId);  localMap.put("regpsnId", oprtrId);
        localMap.put("UPDPSN_ID", oprtrId);  localMap.put("updpsnId", oprtrId);
        if (session.getAttribute(SES_ID) != null) {
            localMap.put(SES_ID, session.getAttribute(SES_ID));
            logger.info("old session is {}", OU.asS(session.getAttribute(SES_ID)));
        } else {
            localMap.put(SES_ID, session.getId());
            session.setAttribute(SES_ID, session.getId());
            logger.info("new session is {}",session.getId());
        }
    }
    public String getSessionId() {
        return OU.asS(localMap.get(SES_ID));
    }

    public  Map<String, Object> getSession() {
        return localMap;
    }
    public static Map<String, Object> getSearchMap(HttpServletRequest request) {
        Map<String, Object> map = OU.newMap();

        Map<String, String[]> paraMap = request.getParameterMap();

        for (String parameterName : paraMap.keySet()) {
            String[] values = paraMap.get(parameterName);

            if (values != null && values.length > 0) {
                map.put(parameterName, values[0]);
            } else {
                map.put(parameterName, "");
            }
        }
        return map;
    }

}
