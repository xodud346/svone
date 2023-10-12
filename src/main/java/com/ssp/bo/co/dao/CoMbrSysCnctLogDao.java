package com.ssp.bo.co.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 회원접속로그관리
 * @package com.ssp.bo.co.dao
 * <pre>
 * @author 박성진
 * @since 2022-03-18
 * @version 1.0
 * @see CoExcelMetaMngDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-18	박성진	최초작성
 */
public interface CoMbrSysCnctLogDao {

    /** 접속 로그 목록 카운트 */
    int selectCoMbrSysCnctLogListCount(Map<String, Object> searchMap);

    /** 접속 로그 목록 */
    List<Map<String, Object>> selectCoMbrSysCnctLogList(Map<String, Object> searchMap);	

    /** 접속 로그 저장 */
    int insertBoSysCnctLog(Map<String, Object> saveMap) throws Exception;
}
