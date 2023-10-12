package com.ssp.bo.co.service;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 시스템메시지관리
 * @desc 서비스 인터페이스
 * @package com.ssp.bo.co.service
 * <pre>    CoSysMsgService
 * @author lee
 * @since 2022-03-08
 * @version 1.0
 * @see CoSysMsgService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-08	lee	최초작성
 */
public interface CoSysMsgService {

    /** 시스템 메시지 관리 카운트 */
    int selectSystemMessageMngListCount(Map<String, Object> searchMap) throws Exception;

    /** 시스템 메시지 관리 목록 */
    List<Map<String, Object>> selectSystemMessageMngList(Map<String, Object> searchMap) throws Exception;

    /** 시스템 메시지 관리 저장 */
    int saveSysMessageMng(List<Map<String, Object>> commandMapList) throws Exception;
}
