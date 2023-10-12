package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

public interface EstmProcMailSendService {
	boolean isValidateCustMailRcvAgreYn(Map<String, Object> param) throws Exception;
	boolean isValidateCprtcpMailRcvAgreYn(Map<String, Object> param) throws Exception;
	int estmProcCompleteSendMail(Map<String, Object> param) throws Exception;
	int estmProcRejectSendMail(Map<String, Object> param) throws Exception;
	int estmProcRequestSendMail(List<Map<String, Object>> params) throws Exception;
}
