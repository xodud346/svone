package com.ssp.bo.co.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao
 * <pre>    CoComCdMngDao
 * @author lee
 * @since 2022-01-25
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2017. 11. 8.		lee	최초작성
 */
public interface CoComCdMngDao {

    /** 분류코드 목록 카운트 인터페이스 */
    int selectComCdClsfSearchCount(Map<String, Object> searchMap) throws Exception;

    /** 분류코드 목록 인터페이스 */
    List<Map<String, Object>> selectComCdClsfSearchList(Map<String, Object> searchMap) throws Exception;

    /** 상세코드 목록 인터페이스 */
    List<Map<String, Object>> selectComCdClsfDtlSearchList(Map<String, Object> searchMap) throws Exception;

    /** 분류코드 등록 인터페이스 */
    int insertComCdClsf(Map<String, Object> saveMap) throws Exception;

    /** 분류코드 수정 인터페이스 */
    int updateComCdClsf(Map<String, Object> saveMap) throws Exception;

    /** 분류코드 삭제 인터페이스 */
    int deleteComCdClsf(Map<String, Object> saveMap) throws Exception;

    /** 상세코드 등록 인터페이스 */
    int insertComCdClsfDtl(Map<String, Object> saveMap) throws Exception;

    /** 상세코드 수정 인터페이스 */
    int updateComCdClsfDtl(Map<String, Object> saveMap) throws Exception;

    /** 상세코드 삭제 인터페이스 */
    int deleteComCdClsfDtl(Map<String, Object> saveMap) throws Exception;

    /** 상세코드 카운트 */
    int selectComCdClsfDtlCount(Map<String, Object> saveMap) throws Exception;

    /** 분류코드 존재여부 확인 */
    int selectComCdClsCount(Map<String, Object> saveMap) throws Exception;

    /**분류코드 존재여부 확인 */
    List<Map<String, Object>> comCodeExcelList(Map<String, Object> searchMap) throws Exception;
}
