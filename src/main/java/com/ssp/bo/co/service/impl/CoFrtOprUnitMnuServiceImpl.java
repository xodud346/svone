package com.ssp.bo.co.service.impl;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.co.dao.CoFrtOprUnitMnuDao;
import com.ssp.bo.co.service.CoFrtOprUnitMnuService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * title  프론트메뉴관리
 * desc 프론트메뉴관리 Implementation
 * package com.serveone.co.service.impl
 * </pre>
 * 
 * @author
 * @since 2022.03.17
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Service("coFrtOprUnitMnuService")
public class CoFrtOprUnitMnuServiceImpl implements CoFrtOprUnitMnuService {
    @Autowired
	private CoFrtOprUnitMnuDao coFrtOprUnitMnuDao;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectFrtOprUnitMnuList
	 * 2. ClassName : CoFrtOprUnitMnuServiceImpl
	 * 3. Comment : 프론트메뉴관리 목록 조회
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.03.17
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectFrtOprUnitMnuList(Map<String, Object> searchMap) throws Exception {
		return coFrtOprUnitMnuDao.selectFrtOprUnitMnuList(searchMap);
	}

	/**
    *
    * <pre>
    * 1. MethodName : selectFrtOprUnitMnuListCount
    * 2. ClassName : CoFrtOprUnitMnuServiceImpl
    * 3. Comment : 프론트메뉴관리 카운트 조회
    * 4. 작성자 : 
    * 5. 작성일 : 2022.03.17
    * </pre>
    *
    * @param searchMap Map
    * @return NexacroResult
    */
	@Override
	public int selectFrtOprUnitMnuListCount(Map<String, Object> searchMap) throws Exception {
		return coFrtOprUnitMnuDao.selectFrtOprUnitMnuListCount(searchMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : saveFrtOprUnitMnuList
	 * 2. ClassName : CoFrtOprUnitMnuServiceImpl
	 * 3. Comment : 프론트메뉴관리저장
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.03.17
	 * </pre>
	 *
	 * @param request
	 * @param list
	 * @return
	 * @throws Exception
	 */
	@Override
	public void saveFrtOprUnitMnuList(Map<String, Object> searchMap, List<Map<String, Object>> list)
			throws Exception {
		// 중복 데이터가 존재하지 않는 경우 저장진행
		int rtn = 0;
		String msg = "";
	
		/*
		// 프로그램ID 중복체크
		List<Map<String, Object>> checkList = new ArrayList<Map<String, Object>>();
		List<String> pgmId = StringUtil.getStringList(searchMap, "pgmIdList");
		if (pgmId.size() > 0) {
			searchMap.put("pgmIdList", pgmId);
			checkList = coFrtOprUnitMnuDao.selectPgmIdCheck(searchMap);
		}
			
		if (!checkList.isEmpty()) {
			throw new MessageException(-100, "프로그램ID : " + checkList.get(0).get("PGM_ID")  + "가 중복되었습니다.");
		}
		*/
		for (Map<String, Object> data : list) {
			data = CommonUtil.toCamelCaseMap(data);    
			int saveType = StringUtil.getInt(data.get("DataSetRowType"));
			data.put("coCd", searchMap.get("coCd"));
			
			if (saveType == 2) {
				data.put("updpsnId", searchMap.get("regpsnId"));
				rtn += coFrtOprUnitMnuDao.updateFrtOprUnitMnu(data);
				msg = "수정";
			} else if (saveType == 1) {
				data.put("regpsnId", searchMap.get("regpsnId"));
				rtn += coFrtOprUnitMnuDao.saveFrtOprUnitMnu(data);
				msg = "등록";
			} else {
			}
			
			if (rtn <= 0) throw new Exception(msg + " 실패");
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteOprUnitMnuList
	 * 2. ClassName : CoFrtOprUnitMnuServiceImpl
	 * 3. Comment : 프론트메뉴관리 삭제
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.03.17
	 * </pre>
	 *
	 * @param request
	 * @param list
	 * @return
	 * @throws Exception
	 */
	@Override
	public void deleteOprUnitMnuList(List<Map<String, Object>> list, Map<String, Object> admin) throws Exception {
		int rtn = 0;
		
		for (Map<String, Object> data : list) {
			data = CommonUtil.toCamelCaseMap(data);    
			data.put("coCd", admin.get("CO_CD"));
			rtn = coFrtOprUnitMnuDao.deletFrtOprUnitMnu(data);
		}
		
		if(rtn <= 0) {
			throw new Exception("삭제 실패");
		}
	}
	
}
