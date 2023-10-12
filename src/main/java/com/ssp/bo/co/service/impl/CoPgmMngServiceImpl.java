package com.ssp.bo.co.service.impl;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.co.dao.CoPgmMngDao;
import com.ssp.bo.co.service.CoPgmMngService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * &#64;title  프로그램 관리 목록
 * &#64;desc 프로그램 관리 목록 Implementation
 * &#64;package com.serveone.co.service.impl
 * </pre>
 * 
 * @author
 * @since 2022. 01. 25
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2022.01.25 최초작성
 */
@Service("coPgmMngService")
public class CoPgmMngServiceImpl implements CoPgmMngService {
    @Autowired
	private CoPgmMngDao coPgmMngDao;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectPgmMngList
	 * 2. ClassName : CoPgmMngServiceImpl
	 * 3. Comment : 프로그램 관리 목록 조회
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.01.25
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectPgmMngList(Map<String, Object> searchMap) throws Exception {
		return coPgmMngDao.selectPgmMngList(searchMap);
	}

	/**
    *
    * <pre>
    * 1. MethodName : selectPgmMngCount
    * 2. ClassName : CoPgmMngServiceImpl
    * 3. Comment : 프로그램 관리 목록 카운트 조회
    * 4. 작성자 : 
    * 5. 작성일 : 2022.02.28
    * </pre>
    *
    * @param searchMap Map
    * @return NexacroResult
    */
	@Override
	public int selectPgmMngCount(Map<String, Object> searchMap) throws Exception {
		return coPgmMngDao.selectPgmMngCount(searchMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : savePgmMngList
	 * 2. ClassName : CoPgmMngServiceImpl
	 * 3. Comment : 프로그램 목록 관리 저장
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.01.25
	 * </pre>
	 *
	 * @param request
	 * @param list
	 * @return
	 * @throws Exception
	 */
	@Override
	public void savePgmMngList(Map<String, Object> searchMap, List<Map<String, Object>> list)
			throws Exception {
		
		List<Map<String, Object>> checkList = new ArrayList<Map<String, Object>>();

		// 중복 데이터가 존재하지 않는 경우 저장진행
		int rtn = 0;
		String msg = "";
	
		// 프로그램ID 중복체크
		List<String> pgmId = StringUtil.getStringList(searchMap, "pgmIdList");
		if (pgmId.size() > 0) {
			searchMap.put("pgmIdList", pgmId);
			checkList = coPgmMngDao.selectPgmIdCheck(searchMap);
		}
			
		if (!checkList.isEmpty()) {
			throw new MessageException(-100, "프로그램ID : " + checkList.get(0).get("PGM_ID")  + "가 중복되었습니다.");
		}
		
		for (Map<String, Object> data : list) {
			data = CommonUtil.toCamelCaseMap(data);    
			int saveType = StringUtil.getInt(data.get("DataSetRowType"));

			if (saveType == 2) {
				data.put("updpsnId", searchMap.get("regpsnId"));
				rtn += coPgmMngDao.updatePgmMng(data);
				msg = "수정";
			} else if (checkList.isEmpty() && saveType == 1) {
				data.put("regpsnId", searchMap.get("regpsnId"));
				rtn += coPgmMngDao.insertPgmMng(data);
				msg = "등록";
			} else {
			}
			
			if (rtn <= 0) throw new Exception(msg + " 실패");
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : deletePgmMngList
	 * 2. ClassName : CoPgmMngServiceImpl
	 * 3. Comment : 프로그램 목록 관리 삭제
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.02.08
	 * </pre>
	 *
	 * @param request
	 * @param list
	 * @return
	 * @throws Exception
	 */
	@Override
	public void deletePgmMngList(List<Map<String, Object>> list) throws Exception {
		int rtn = 0;
		
		for (Map<String, Object> data : list) {
			data = CommonUtil.toCamelCaseMap(data);    
			rtn = coPgmMngDao.deletePgmMng(data);
		}
		
		if(rtn <= 0) {
			throw new Exception("삭제 실패");
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectPgmMngPopupList
	 * 2. ClassName : CoPgmMngServiceImpl
	 * 3. Comment : 프로그램 관리 팝업 목록 조회
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.01.25
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String,Object>> selectPgmMngPopupList(Map<String, Object> searchMap) throws Exception {
		return coPgmMngDao.selectPgmMngPopupList(searchMap);
	}

}
