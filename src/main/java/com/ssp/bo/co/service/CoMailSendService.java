package com.ssp.bo.co.service;

import java.util.Map;

public interface CoMailSendService {
	int newProductAltMailSend(Map<String, Object> param) throws Exception;
	int newProductRejectedMailSend(Map<String, Object> param) throws Exception;
	int newProductMultiRejectedMailSend(Map<String, Object> param) throws Exception;
	int newProductCompleteMailSend(Map<String, Object> param) throws Exception;
	boolean isValidateCustMailRcvAgreYn(Map<String, Object> param) throws Exception;
	boolean isValidateCprtcpMailRcvAgreYn(Map<String, Object> param) throws Exception;
}
