package com.ssp.bo.pr.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title SSP카테고리
 * @package com.ssp.bo.pr.dao
 * </pre>
 * @author 이원준
 * @since 2022.02.17
 * @version 1.0
 * @see PrCategoryDao
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 
 */
public interface PrCategoryDao {

	/** SSP카테고리 트리조회 */
    List<Map<String, Object>> selectCategoryList(Map<String, Object> searchMap) throws Exception;

    /** 하위 카테고리 조회 */
    List<Map<String, Object>> selectSubCategoryList(Map<String, Object> searchMap) throws Exception;

    /** SSP카테고리 상세조회 */
    List<Map<String, Object>> selectCategory(Map<String, Object> searchMap) throws Exception;

    /** SSP카테고리 등록*/
    int insertCategory(Map<String, Object> commandMap) throws Exception;
    
    /** SSP카테고리ID 대분류*/
    String selectPrdClcdSeq1(Map<String, Object> searchMap) throws Exception;

    /** SSP카테고리ID 하위카테고리*/
    String selectPrdClcdSeq2(Map<String, Object> searchMap) throws Exception;

    /** 상품담당자/MD담당자 저장 */
    int insertPrdClsfChrpsn(Map<String, Object> commandMap) throws Exception;

    /** SSP카테고리 수정*/
    int updateCategory(Map<String, Object> saveMap) throws Exception;

    /** SSP카테고리 삭제*/
    int deleteCategory(Map<String, Object> saveMap) throws Exception;

    /** 하위카테고리 순서변경 */
    int updateCategorySrtSo(Map<String, Object> saveMap) throws Exception;

    /** 속성명 조회 */
    List<Map<String, Object>> selectPrdAttrList(Map<String, Object> searchMap) throws Exception;

    /** 상품군 사용SSP속성 조회 */
    List<Map<String, Object>> selectClsfAttrMappList(Map<String, Object> searchMap)  throws Exception;

    /** 상품군속성관리 등록 */
    int insertClsfAttrMapp(Map<String, Object> data) throws Exception;

    /** 상품군속성관리 수정 */
    int updateClsfAttrMapp(Map<String, Object> data) throws Exception;

    /** 상품군속성관리 삭제 */
    int deleteClsfAttrMapp(Map<String, Object> data) throws Exception;

    /** 카테고리명 중복 체크*/
    int selectPrdClsfNmCnt(Map<String, Object> searchMap) throws Exception;

    /** 카테고리명 / 담당자 조회 */
    Map<String, Object> selectPrdClsfNm(Map<String, Object> searchMap) throws Exception;

    /** 첨부파일 정보조회 */
    List<Map<String, Object>> selectAttcFileDtlsInq(Map<String, Object> searchMap) throws Exception;
    
    int updatePrdClsfAttrSrtInfo(Map<String, Object> data) throws Exception;
    int deletePrdClsfAttrSrtInfo(Map<String, Object> data) throws Exception;

    
    
    List<Map<String, Object>> selectSspPrdNmFrtMdfrList(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectSspPrdNmRearMdfrList(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectSspPrdNmAttrList(Map<String, Object> searchMap) throws Exception;
    Map<String, Object> selectSspPrdNmAddInfo(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectSspPrdNmMngList(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectClsfAttrList(Map<String, Object> searchMap) throws Exception;
    int updateSspPrdNmFrtMdfrInfo(Map<String, Object> saveMap) throws Exception;
    int deleteSspPrdNmFrtMdfrInfo(Map<String, Object> saveMap) throws Exception;
    int updateSspPrdNmRearMdfrInfo(Map<String, Object> saveMap) throws Exception;
    int deleteSspPrdNmRearMdfrInfo(Map<String, Object> saveMap) throws Exception;
    int updateSspPrdNmAttrInfo(Map<String, Object> saveMap) throws Exception;
    int deleteSspPrdNmAttrInfo(Map<String, Object> saveMap) throws Exception;
    int updateSspPrdNmAddInfo(Map<String, Object> saveMap) throws Exception;
    int updateSspPrdNmMngInfo(Map<String, Object> saveMap) throws Exception;
    int deleteSspPrdNmMngInfo(Map<String, Object> saveMap) throws Exception;
    Map<String, Object> selectLastBatchTime(Map<String, Object> searchMap) throws Exception;
    int insertPrdClsfIddtMapp(Map<String, Object> commandMap)throws Exception;
}
