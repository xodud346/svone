package com.ssp.bo.co.dao;

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
 * @see CoMnuMngDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2017. 11. 8.		lee	최초작성
 */
public interface CoMnuMngDao {

    /** 코드 등록  Dao interface */
    int insertComMenu(Map<String, Object> saveMap) throws Exception;

    /** 코드 수정  Dao interface */
    int updateComMenu(Map<String, Object> saveMap) throws Exception;

    /** 코드 삭제  Dao interface */
    int deleteComMenu(Map<String, Object> saveMap) throws Exception;

    /** 메뉴 시퀀스 채번 */
    int selectMenuSeq(Map<String, Object> searchMap) throws Exception;;

    /** 메뉴 리스트 조회 */
    List<Map<String, Object>> selectMnuMngList(Map<String, Object> searchMap);
    
    /** 메뉴관리 리스트 조회 */
    List<Map<String, Object>> selectMnuList(Map<String, Object> searchMap);
    
    /** 즐겨찾기 리스트 조회 */
    List<Map<String, Object>> selectMnuFvrtsList(Map<String, String> searchMap);
    

    /** 즐겨찾기 등록  Dao interface */
    int insertMnuFvrts(Map<String, Object> saveMap) throws Exception;

    /** 즐겨찾기 삭제  Dao interface */
    int deleteMnuFvrts(Map<String, Object> saveMap) throws Exception;

    /** 즐겨찾기 건수 */
    int selectMnuFvrtsCnt(Map<String, Object> searchMap) throws Exception;

    /** 메뉴관리 메뉴 목록 */
    List<Map<String, Object>> selectMenuMngList(Map<String, Object> searchMap)  throws Exception;
    
    List<Map<String, Object>> selectMenuFileList(Map<String, Object> searchMap)  throws Exception;

	Map<String, Object> selectMnuMng(Map<String, Object> searchMap) throws Exception;

	Map<String, Object> selectMnuMng(String pgmId) throws Exception;
}
