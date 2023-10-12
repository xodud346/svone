package com.ssp.bo.da.service;

import java.util.Map;

import javax.servlet.http.HttpSession;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

public interface dashBoardService {
	/**
     * 
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult selectDashBoardLst(Map<String, Object> map, HttpSession session) throws Exception;
	
}
