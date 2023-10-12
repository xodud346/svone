package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title R&D카테고리
 * @package com.ssp.bo.pr.dao
 * </pre>
 * @author 김진섭
 * @since 2022.03.22
 * @version 1.0
 * @see RdCategoryDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface RdCategoryDao {

    /** R&D속성 목록 조회 */
	List<Map> selectCategoryList(Map<String, Object> searchMap) throws Exception;

	List<Map> selectSubCategoryList(Map<String, Object> searchMap) throws Exception;

	List<Map> selectCategory(Map<String, Object> searchMap) throws Exception;
	
	List<Map> selectAttcFileDtlsInq(Map<String, Object> searchMap) throws Exception;
	
	//카테고리명 중복체크
	String selectRdCategoryDuplicateCheck(Map<String, Object> commandMap) throws Exception;
	
	//카테고리명 중복체크_상품분류코드가 null일 경우
	String selectRdCategoryDuplicateCheckNull(Map<String, Object> commandMap) throws Exception;
	
	int updateCategory(Map<String, Object> saveMap) throws Exception;
	
	int deleteCategory(Map<String, Object> saveMap) throws Exception;
	
	int updateCategorySrtSo(Map<String, Object> saveMap) throws Exception;
	
	
	// 하이 카테고리 팝업 저장 처리
	String selectPrdClcdSeq1(Map<String, Object> searchMap) throws Exception;
	
	// 하이 카테고리 팝업 저장 처리
	String selectPrdClcdSeq2(Map<String, Object> searchMap) throws Exception;
	
	int insertCategory(Map<String, Object> commandMap) throws Exception;
	
	int insertPrdClsfChrpsn(Map<String, Object> commandMap) throws Exception;
	
	Map<String, Object> selectPlnPrfrtDetail(Map<String, Object> searchMap) throws Exception;
	
	/*사전설정매익률 생성*/
	int insertPlnPrfrt(Map<String, Object> commandMap) throws Exception;
	
	int updatePlnPrfrt(Map<String, Object> commandMap) throws Exception;
	
	List<Map> selectPrdAttrList(Map<String, Object> searchMap) throws Exception;

	List<Map> selectClsfAttrMappList(Map<String, Object> searchMap)  throws Exception;
	
	int insertClsfAttrMapp(Map<String, Object> data) throws Exception;

	int updateClsfAttrMapp(Map<String, Object> data) throws Exception;

	int deleteClsfAttrMapp(Map<String, Object> data) throws Exception;

	int selectPrdClsfNm(Map<String, Object> searchMap) throws Exception;
	
	/**
     * 신규 저장 코드체크여부 조회(selectCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectCodeChkYn(Map<String, Object> map) throws Exception;
    
    /**
     * 수정 코드체크여부 조회(selectUpCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectUpCodeChkYn(Map<String, Object> map) throws Exception;
    
    int updatePrdClsfAttrSrtInfo(Map<String, Object> data) throws Exception;
    int deletePrdClsfAttrSrtInfo(Map<String, Object> data) throws Exception;

}
