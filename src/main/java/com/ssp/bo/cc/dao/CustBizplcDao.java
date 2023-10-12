package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 예산
 * @desc
 * @package com.ssp.core.co.dao
 * @ClassName CustBizplcDao
 * </pre>    
 * @author  차상영
 * @since   2022. 02. 11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface CustBizplcDao {
	
	List<Map<String, Object>> selectCodeList(Map<String, Object> searchMap);
	
    Map<String, Object> selectBizplcDtl(Map<String, Object> searchMap) throws Exception;
    
    List<Map<String, Object>> selectBilcltCondList(Map<String, Object> searchMap);
    
    List<Map<String, Object>> selectStlMeanList(Map<String, Object> searchMap);
  
    void updateBizplcDtl(Map<String, Object> map) throws Exception;
    
    void updateBizplcCtlAuth(Map<String, Object> map) throws Exception;
    
    void insertBizplcCtlAuthHst(Map<String, Object> map) throws Exception;
    
    List<Map<String, Object>> selectBizFileList(Map<String, Object> searchMap);

	Map<String, Object> selectBzplcDupCheck(Map<String, Object> camelCaseMap) throws Exception;

	Map<String, Object> selectBzplcOne(Map<String, Object> searchMap) throws Exception;

	int insertSelectBzplcBasisReqInfo(Map<String, Object> map);

	int insertSelectOprUnitBasisReqInfo(Map<String, Object> map);

	int updateDeptDtl(Map<String, Object> map);
	
	/* [2023-03-01] sg.park AI-015 일반고객의 여신거래 가능 프로세스 추가 */
	Map<String, String> selectPiLog(Map<String, Object> map) throws Exception;
	int selectPiBzplc(Map<String, Object> map) throws Exception;
	/* /[2023-03-01] sg.park AI-015 일반고객의 여신거래 가능 프로세스 추가 */
	
	/* [2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */
	/**
	 * CMS의료기기 판매허가 첨부파일
	 * 
	 * @param map
	 * @return
	 */
	List<Map<String, Object>> selectBzplcMediDeviSellPermitAtfls(Map<String, Object> map) throws Exception;
	int saveMediDeviSellPermitAtfls(Map<String, Object> map) throws Exception;
	int reqtMediDeviSellPermitAtfls(Map<String, Object> map) throws Exception;

//	int deleBzplcMediDeviSellPermitAtfls(Map<String, Object> map) throws Exception;
	/* /[2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */

	int bzplcChrpsnInfoReset(Map<String, Object> map);
	int oprUnitChrpsnInfoReset(Map<String, Object> map);
}
