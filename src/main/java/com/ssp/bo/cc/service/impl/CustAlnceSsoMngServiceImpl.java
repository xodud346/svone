package com.ssp.bo.cc.service.impl;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.cc.dao.CustAlnceSsoMngDao;
import com.ssp.bo.cc.service.CustAlnceSsoMngService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * &#64;title  SSO회원관리 목록
 * &#64;desc SSO회원관리 목록 Implementation
 * &#64;package com.serveone.co.service.impl
 * </pre>
 * 
 * @author
 * @since 2023.05.09
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2023.05.09 최초작성
 */
@Service("custAlnceSsoMngService")
public class CustAlnceSsoMngServiceImpl implements CustAlnceSsoMngService {
    @Autowired
	private CustAlnceSsoMngDao custAlnceSsoMngDao;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectSsoMngList
	 * 2. ClassName : CustAlnceSsoMngServiceImpl
	 * 3. Comment : SSO회원관리 목록 조회
	 * 4. 작성자 : 
	 * 5. 작성일 : 2023.05.09
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectSsoMngList(Map<String, Object> searchMap) throws Exception {
		return custAlnceSsoMngDao.selectSsoMngList(searchMap);
	}

	/**
    *
    * <pre>
    * 1. MethodName : selectSsoMngCount
    * 2. ClassName : CustAlnceSsoMngServiceImpl
    * 3. Comment : SSO회원관리 목록 카운트 조회
    * 4. 작성자 : 
    * 5. 작성일 : 2023.05.09
    * </pre>
    *
    * @param searchMap Map
    * @return NexacroResult
    */
	@Override
	public int selectSsoMngCount(Map<String, Object> searchMap) throws Exception {
		return custAlnceSsoMngDao.selectSsoMngCount(searchMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : saveSsoMngList
	 * 2. ClassName : CustAlnceSsoMngServiceImpl
	 * 3. Comment : SSO회원목록 관리 저장
	 * 4. 작성자 : 
	 * 5. 작성일 : 2023.05.09
	 * </pre>
	 *
	 * @param request
	 * @param list
	 * @return
	 * @throws Exception
	 */
	@Override
	public void saveSsoMngList(Map<String, Object> searchMap, List<Map<String, Object>> list)
			throws Exception {
		
		List<Map<String, Object>> checkList = new ArrayList<Map<String, Object>>();

		// 중복 데이터가 존재하지 않는 경우 저장진행
		int rtn = 0;
		String msg = "";
	
		// 프로그램ID 중복체크
		List<String> BIZNO = StringUtil.getStringList(searchMap, "ssoList");
		if (BIZNO.size() > 0) {
			searchMap.put("BIZNO", BIZNO);
			checkList = custAlnceSsoMngDao.selectSsoIdCheck(searchMap);
		}
			
		if (!checkList.isEmpty()) {
			throw new MessageException(-100, "사업장ID : " + checkList.get(0).get("BIZNO")  + "가 중복되었습니다.");
		}
		
		for (Map<String, Object> data : list) {
			data = CommonUtil.toCamelCaseMap(data);    
			int saveType = StringUtil.getInt(data.get("DataSetRowType"));

			if (saveType == 2) {
				Map<String, Object> checkMap = (Map)data.get("DataSetSavedData");
				
				/*RMKS가 DataSetSavedData에만 존재*/
				checkMap.put("RMKS", (String)data.get("RMKS")); 
				checkMap.put("USE_YN", (String)data.get("useYn"));
				checkMap.put("PWD_CTL_YN", (String)data.get("pwdCtlYn"));
				
				Map<String, Object> checkMapData = CommonUtil.toCamelCaseMap(checkMap); 

				data.put("updpsnId", searchMap.get("regpsnId"));
				rtn += custAlnceSsoMngDao.updateSsoMng(checkMapData);
				msg = "수정";
			} else if (checkList.isEmpty() && saveType == 1) {
				data.put("regpsnId", searchMap.get("regpsnId"));
				rtn += custAlnceSsoMngDao.insertSsoMng(data);
				msg = "등록";
			} else {
			}
			
			if (rtn <= 0) throw new Exception(msg + " 실패");
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteSsoMngList
	 * 2. ClassName : CustAlnceSsoMngServiceImpl
	 * 3. Comment : SSO회원목록 관리 삭제
	 * 4. 작성자 : 
	 * 5. 작성일 : 2023.05.09
	 * </pre>
	 *
	 * @param request
	 * @param list
	 * @return
	 * @throws Exception
	 */
	@Override
	public void deleteSsoMngList(List<Map<String, Object>> list) throws Exception {
		int rtn = 0;
		
		for (Map<String, Object> data : list) {
			data = CommonUtil.toCamelCaseMap(data);    
			rtn = custAlnceSsoMngDao.deleteSsoMng(data);
		}
		
		if(rtn <= 0) {
			throw new Exception("삭제 실패");
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectSsoMngPopupList
	 * 2. ClassName : CustAlnceSsoMngServiceImpl
	 * 3. Comment : SSO회원관리 팝업 목록 조회
	 * 4. 작성자 : 
	 * 5. 작성일 : 2023.05.09
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String,Object>> selectSsoMngPopupList(Map<String, Object> searchMap) throws Exception {
		return custAlnceSsoMngDao.selectSsoMngPopupList(searchMap);
	}

}
