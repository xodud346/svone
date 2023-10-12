package com.ssp.bo.co.service.impl;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.co.dao.CoFrtPgmGrpInfoDao;
import com.ssp.bo.co.service.CoFrtPgmGrpInfoService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * title  프론트프로그램그룹관리
 * desc 프론트프로그램그룹관리 Implementation
 * package com.serveone.co.service.impl
 * </pre>
 * 
 * @author
 * @since 2022. 03.16
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Service("coFrtPgmGrpInfoService")
public class CoFrtPgmGrpInfoServiceImpl implements CoFrtPgmGrpInfoService {
    @Autowired
	private CoFrtPgmGrpInfoDao coFrtPgmGrpInfoDao;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectFrtPgmGrpList
	 * 2. ClassName : CoFrtPgmGrpInfoServiceImpl
	 * 3. Comment : 프론트프로그램그룹관리 목록 조회
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.03.16
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectFrtPgmGrpList(Map<String, Object> searchMap) throws Exception {
		return coFrtPgmGrpInfoDao.selectFrtPgmGrpList(searchMap);
	}

	/**
    *
    * <pre>
    * 1. MethodName : selectFrtPgmGrpListCount
    * 2. ClassName : CoFrtPgmGrpInfoServiceImpl
    * 3. Comment : 프론트프로그램그룹관리 카운트 조회
    * 4. 작성자 : 
    * 5. 작성일 : 2022.03.16
    * </pre>
    *
    * @param searchMap Map
    * @return NexacroResult
    */
	@Override
	public int selectFrtPgmGrpListCount(Map<String, Object> searchMap) throws Exception {
		return coFrtPgmGrpInfoDao.selectFrtPgmGrpListCount(searchMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : saveFrtPgmGrpList
	 * 2. ClassName : CoFrtPgmGrpInfoServiceImpl
	 * 3. Comment : 프론트프로그램그룹관리저장
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.03.16
	 * </pre>
	 *
	 * @param request
	 * @param list
	 * @return
	 * @throws Exception
	 */
	@Override
	public void saveFrtPgmGrpList(Map<String, Object> searchMap, List<Map<String, Object>> list)
			throws Exception {
		
		List<Map<String, Object>> checkList = new ArrayList<Map<String, Object>>();

		// 중복 데이터가 존재하지 않는 경우 저장진행
		int rtn = 0;
		String msg = "";
	
		// 프로그램ID 중복체크
		List<String> pgmGrpId = StringUtil.getStringList(searchMap, "pgmGrpIdList");
		if (pgmGrpId.size() > 0) {
			searchMap.put("pgmGrpIdList", pgmGrpId);
			checkList = coFrtPgmGrpInfoDao.selectPgmGrpIdCheck(searchMap);
		}
			
		if (!checkList.isEmpty()) {
			throw new MessageException(-100, "프로그램ID : " + checkList.get(0).get("PGM_GRP_ID")  + "가 중복되었습니다.");
		}
		
		for (Map<String, Object> data : list) {
			data = CommonUtil.toCamelCaseMap(data);    
			int saveType = StringUtil.getInt(data.get("DataSetRowType"));
			data.put("coCd", searchMap.get("coCd"));
			
			if (saveType == 2) {
				data.put("updpsnId", searchMap.get("regpsnId"));
				rtn += coFrtPgmGrpInfoDao.updateFrtPgmGrpInfo(data);
				msg = "수정";
			} else if (checkList.isEmpty() && saveType == 1) {
				data.put("regpsnId", searchMap.get("regpsnId"));
				rtn += coFrtPgmGrpInfoDao.insertFrtPgmGrpInfo(data);
				msg = "등록";
			} else {
			}
			
			if (rtn <= 0) throw new Exception(msg + " 실패");
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteFrtPgmGrpList
	 * 2. ClassName : CoFrtPgmGrpInfoServiceImpl
	 * 3. Comment : 프론트프로그램그룹관리 삭제
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.03.16
	 * </pre>
	 *
	 * @param request
	 * @param list
	 * @return
	 * @throws Exception
	 */
	@Override
	public void deleteFrtPgmGrpList(List<Map<String, Object>> list, Map<String, Object> admin ) throws Exception {
		int rtn = 0;
		
		for (Map<String, Object> data : list) {
			data = CommonUtil.toCamelCaseMap(data);    
			data.put("coCd", admin.get("CO_CD"));
			rtn = coFrtPgmGrpInfoDao.deleteFrtPgmGrpInfo(data);
		}
		
		if(rtn <= 0) {
			throw new Exception("삭제 실패");
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectFrtPgmGrpPopupList
	 * 2. ClassName : CoFrtPgmGrpInfoServiceImpl
	 * 3. Comment : 프론트프로그램그룹관리 팝업 목록 조회
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.03.23
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectFrtPgmGrpPopupList(Map<String, Object> searchMap) throws Exception {
		return coFrtPgmGrpInfoDao.selectFrtPgmGrpPopupList(searchMap);
	}
	
}
