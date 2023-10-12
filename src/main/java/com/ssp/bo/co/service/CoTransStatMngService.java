package com.ssp.bo.co.service;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title CoTransStatMngService
 * @desc 거래명세서관리 service
 * @package com.ssp.bo.co.service
 * <pre>
 * @author lee
 * @since 2022-03-11
 * @version 1.0
 * @see CoTransStatMngService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-11	lee	최초작성
 */
public interface CoTransStatMngService {
    /** 거래명세서관리 목록 카운트 조회 */
    int selectTransStatMngListCount(Map<String, Object> searchMap);

    /** 거래명세서관리 목록 조회 */
    List<Map<String, Object>> selectTransStatMngList(Map<String, Object> searchMap);

    /** 거래명세서 목록 저장 */
    int saveTransStatMng(List<Map<String, Object>> commandMapList) throws Exception;
}
