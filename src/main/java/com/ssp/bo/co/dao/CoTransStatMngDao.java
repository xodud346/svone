package com.ssp.bo.co.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title CoTransStatMngDao
 * @desc 거래명세서관리 dao
 * @package com.ssp.bo.co.dao
 * <pre>
 * @author lee
 * @since 2022-03-11
 * @version 1.0
 * @see CoTransStatMngDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-11	lee	최초작성
 */
public interface CoTransStatMngDao {

    /** 거래명세서관리 목록 카운트 조회 */
    int selectTransStatMngListCount(Map<String, Object> searchMap);

    /** 거래명세서관리 목록 조회 */
    List<Map<String, Object>> selectTransStatMngList(Map<String, Object> searchMap);

    /** 거래명세서관리 등록 */
    int insertTransStatMng(Map<String, Object> saveMap) throws Exception;

    /** 거래명세서관리 수정 */
    int updateTransStatMng(Map<String, Object> saveMap) throws Exception;

    /** 거래명세서관리 삭제 */
    int deleteTransStatMng(Map<String, Object> saveMap) throws Exception;
}
