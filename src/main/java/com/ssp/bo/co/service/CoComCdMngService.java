package com.ssp.bo.co.service;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.service
 * <pre>    CoComCdMngService
 * @author  lee
 * @since   2022-01-25
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2017. 11. 8.		lee	최초작성
 */

public interface CoComCdMngService {

    /** 분류코드 리스트 서비스 interface */
    List<Map<String, Object>> comCdClsfSearchList(Map<String, Object> searchMap) throws Exception;

    /** 분류코드 상세 리스트 서비스 interface */
    List<Map<String, Object>> comCdClsfDtlSearchList(Map<String, Object> searchMap) throws Exception;

    /** 분류코드 저장 서비스 interface  */
    void comCdClsfSave(List<Map<String, Object>> searchMap, List<Map<String, Object>> commandMapList) throws Exception;

    /** 분류코드 리스트 카운트 */
    int selectComCdClsfSearchCount(Map<String, Object> searchMap) throws Exception;

    /** 공통코드 엑셀 다운로드 */
    List<Map<String, Object>> comCodeExcelList(Map<String, Object> searchMap) throws Exception;
}
