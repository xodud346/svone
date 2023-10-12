package com.ssp.bo.cc.service;

import java.util.List;
import java.util.Map;

import com.ssp.bo.cc.CCUtils;

/**
 * <pre>
 * @title 예산
 * @desc
 * @package com.ssp.bo.cc.service
 * @ClassName CustBizplcService
 * </pre>
 * @author  차상영
 * @since   2022. 02. 11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */

public interface CustBizplcService {
	
	List<Map<String,Object>> selectCodeList(Map<String,Object> searchMap);
	
	Map<String,Object> selectBizplcDtl(Map<String,Object> searchMap) throws Exception;

	List<Map<String,Object>> selectBilcltCondList(Map<String,Object> searchMap);
	
	List<Map<String,Object>> selectStlMeanList(Map<String,Object> searchMap);
	
	void saveBizplcDtl(Map<String,Object> map, CCUtils cCUtils) throws Exception;

	List<Map<String,Object>> selectBizFileList(Map<String,Object> searchMap);
	
	Map selectBzplcDupCheck(Map<String, Object> searchMap)  throws Exception ;
	

	/* [2023-03-01] sg.park AI-015 일반고객의 여신거래 가능 프로세스 추가 */
	/**
	 * 특약고객 종결처리
	 * 
	 * @param map
	 * @return
	 */
	Map<String, Object> fnshConsnCust(Map<String, Object> map) throws Exception;
	/*/[2023-03-01] sg.park AI-015 일반고객의 여신거래 가능 프로세스 추가 */
	
	/* [2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */
	/**
	 * CMS의료기기 판매허가 첨부파일
	 * 
	 * @param map
	 * @return
	 */
	List<Map<String, Object>> selectBzplcMediDeviSellPermitAtfls(Map<String, Object> map) throws Exception;
	/*/[2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */
	
}
