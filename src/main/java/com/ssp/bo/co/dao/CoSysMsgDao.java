package com.ssp.bo.co.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 시스템메시지관리
 * @desc dao 인터페이스
 * @package com.ssp.bo.co.dao
 * <pre>    CoSysMsgDao
 * @author lee
 * @since 2022-03-08
 * @version 1.0
 * @see CoSysMsgDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-08	lee	최초작성
 */
public interface CoSysMsgDao  {
    /** 시스템 메세지관리 목록 개수 조회 */
    int selectSystemMessageMngListCount(Map<String, Object> searchMap) throws Exception;

    /** 시스템 메세지 관리 목록 조회 */
    List<Map<String, Object>> selectSystemMessageMngList(Map<String, Object> searchMap) throws Exception;

    /** 시스템 메세지 등록 */
    int insertSysMessageMng(Map<String, Object> saveMap) throws Exception;

    /** 시스템 메세지 수정 */
    int updateSysMessageMng(Map<String, Object> saveMap) throws Exception;

    /** 시스템 메세지 삭제 */
    int deleteSysMessageMng(Map<String, Object> saveMap) throws Exception;
}
