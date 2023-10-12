package com.ssp.bo.co.service;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 공통 컨트롤러
 * @package com.ssp.core.co.service
 * </pre>
 * @author lee
 * @since 2022. 01. 18.
 * @version 1.0
 * @see CoMnuMngService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2017. 11. 8.		lee	최초작성
 */
public interface CoMnuMngService {

    /** 메뉴 목록 조회 */
    List<Map<String, Object>> selectMnuMngList(Map<String, Object> commandMap) throws Exception;
    
    /** 메뉴관리 목록 조회 */
    List<Map<String, Object>> selectMnuList(Map<String, Object> commandMap) throws Exception;

    /** 메뉴 저장 */
    void comMenuSave(List<Map<String, Object>> commandMapList, List<Map<String, Object>> fileMapList ) throws Exception;

    /** 메뉴 시퀀스 채번 */
    int selectMenuSeq(Map<String, Object> searchMap) throws Exception;

    /** 즐겨찾기 목록 조회 */
    List<Map<String, Object>> selectMnuFvrtsList(Map<String, String> commandMap) throws Exception;

    /** 즐겨찾기 저장 */
    void saveMnuFvrts(List<Map<String, Object>> commandMapList) throws Exception;
    
    /** 즐겨찾기 삭제 */
    void delMnuFvrts(List<Map<String, Object>> commandMapList) throws Exception;

    /** 메뉴관리 메뉴 목록 */
    List<Map<String, Object>> selectMenuMngList(Map<String, Object> searchMap) throws Exception;
    
    List<Map<String, Object>> selectMenuFileList(Map<String, Object> searchMap)  throws Exception;
}
