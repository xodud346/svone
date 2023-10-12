package com.ssp.bo.co.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * <pre>
 * @title 회원 접속 로그
 * @package com.ssp.bo.co.service
 * <pre>    CoMbrSysCnctLogService
 * @author 박성진
 * @since 2022-03-18
 * @version 1.0
 * @see CoMbrSysCnctLogService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-18	박성진	최초작성
 */
public interface CoMbrSysCnctLogService {
    
    /** 접속 로그 조회 카운트 */
    int selectCoMbrSysCnctLogListCount(Map<String, Object> searchMap) throws Exception;

    /** 접속 로그 조회 목록 */
    List<Map<String, Object>> selectCoMbrSysCnctLogList(Map<String, Object> searchMap);
    
    /** 접속 로그 저장 */
    NexacroResult saveLog(List<Map<String, Object>> commandMapList) throws Exception;
}
