package com.ssp.bo.co.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.co.dao.CoFrtPgmInfoDao;
import com.ssp.bo.co.service.CoFrtPgmInfoService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.util.StringUtil;


/**
 * <pre>
 * title  프론트프로그램관리
 * desc 프론트프로그램관리 Implementation
 * package com.serveone.co.service.impl
 * </pre>
 * 
 * @author
 * @since 2022. 03.16
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Service("coFrtPgmInfoService")
public class CoFrtPgmInfoServiceImpl implements CoFrtPgmInfoService {
    @Autowired
	private CoFrtPgmInfoDao coFrtPgmInfoDao;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectFrtPgmList
	 * 2. ClassName : CoFrtPgmInfoServiceImpl
	 * 3. Comment : 프론트프로그램관리 목록 조회
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.03.16
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectFrtPgmList(Map<String, Object> searchMap) throws Exception {
		return coFrtPgmInfoDao.selectFrtPgmList(searchMap);
	}

	/**
    *
    * <pre>
    * 1. MethodName : selectFrtPgmListCount
    * 2. ClassName : CoFrtPgmInfoServiceImpl
    * 3. Comment : 프론트프로그램관리 카운트 조회
    * 4. 작성자 : 
    * 5. 작성일 : 2022.03.16
    * </pre>
    *
    * @param searchMap Map
    * @return NexacroResult
    */
	@Override
	public int selectFrtPgmListCount(Map<String, Object> searchMap) throws Exception {
		return coFrtPgmInfoDao.selectFrtPgmListCount(searchMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : saveFrtPgmList
	 * 2. ClassName : CoFrtPgmInfoServiceImpl
	 * 3. Comment : 프론트프로그램관리저장
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
	public void saveFrtPgmList(Map<String, Object> searchMap, List<Map<String, Object>> list)
			throws Exception {
		
		int rtn = 0;
		String msg = "";
			
		for (Map<String, Object> data : list) {
			data = CommonUtil.toCamelCaseMap(data);    
			int saveType = StringUtil.getInt(data.get("DataSetRowType"));
			data.put("coCd", searchMap.get("coCd"));
			
			if (saveType == 2) {
				data.put("updpsnId", searchMap.get("regpsnId"));
				rtn += coFrtPgmInfoDao.saveFrtPgmInfo(data);
				msg = "수정";
			} else if (saveType == 1) {
				data.put("regpsnId", searchMap.get("regpsnId"));
				rtn += coFrtPgmInfoDao.saveFrtPgmInfo(data);
				msg = "등록";
			} else {}
			
			if (rtn <= 0) throw new Exception(msg + " 실패");
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteFrtPgmList
	 * 2. ClassName : CoFrtPgmInfoServiceImpl
	 * 3. Comment : 프론트프로그램관리 삭제
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
	public void deleteFrtPgmList(List<Map<String, Object>> list, Map<String, Object> admin) throws Exception {
		int rtn = 0;
		
		for (Map<String, Object> data : list) {
			data = CommonUtil.toCamelCaseMap(data);    
			data.put("coCd", admin.get("CO_CD"));
			rtn = coFrtPgmInfoDao.deleteFrtPgmInfo(data);
		}
		
		if(rtn <= 0) {
			throw new Exception("삭제 실패");
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectFrtPgmPopupList
	 * 2. ClassName : CoFrtPgmInfoServiceImpl
	 * 3. Comment : 프론트프로그램관리 팝업  조회
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.03.23
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectFrtPgmPopupList(Map<String, Object> searchMap) throws Exception {
		return coFrtPgmInfoDao.selectFrtPgmPopupList(searchMap);
	}
	
}
