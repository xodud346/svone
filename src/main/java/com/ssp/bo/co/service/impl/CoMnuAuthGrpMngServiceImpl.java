package com.ssp.bo.co.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.ssp.bo.co.dao.CoMnuAuthGrpMngDao;
import com.ssp.bo.co.service.CoMnuAuthGrpMngService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * &#64;title  메뉴권한관리 
 * &#64;desc 메뉴권한관리 Implementation
 * &#64;package com.serveone.co.service.impl
 * </pre>
 * 
 * @author
 * @since 2022. 01. 27
 * @version 1.0
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.27			최초작성
 */
@Service("coMnuAuthGrpMngService")
public class CoMnuAuthGrpMngServiceImpl implements CoMnuAuthGrpMngService {
    @Autowired
	private CoMnuAuthGrpMngDao coMnuAuthGrpMngDao;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectMnuMngList
	 * 2. ClassName : CoMnuAuthGrpMngServiceImpl
	 * 3. Comment : 메뉴권한정보-메뉴 목록 조회
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.01.27
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String,Object>> selectMnuMngList(Map<String, Object> searchMap) throws Exception {
		return coMnuAuthGrpMngDao.selectMnuMngList(searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectMnuAuthInfoList
	 * 2. ClassName : CoMnuAuthGrpMngServiceImpl
	 * 3. Comment : 메뉴권한정보조회
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.01.27
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String,Object>>  selectMnuAuthInfoList(Map<String, Object> searchMap) throws Exception {
		return coMnuAuthGrpMngDao.selectMnuAuthInfoList(searchMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectMnuAuthGrpInfoList
	 * 2. ClassName : CoMnuAuthGrpMngServiceImpl
	 * 3. Comment : 메뉴권한그룹정보 조회
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.01.27
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String,Object>>  selectMnuAuthGrpInfoList(Map<String, Object> searchMap) throws Exception {
		return coMnuAuthGrpMngDao.selectMnuAuthGrpInfoList(searchMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : saveMnuAuthInfoList
	 * 2. ClassName : CoMnuAuthGrpMngServiceImpl
	 * 3. Comment : 메뉴권한정보 저장
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.01.27
	 * </pre>
	 *
	 * @param saveMap, list
	 * @return
	 * @throws Exception
	 */
	@Override
	public void saveMnuAuthInfoList(Map<String, Object> saveMap, List<Map<String, Object>> list)
			throws Exception {
	
		int delRtn = 0;
		int saveRtn = 0;
		int saveCnt = 0;
		int delCnt = 0;
		
        
		//삭제 먼저 진행
		for (Map<String, Object> data : list) {
			data = CommonUtil.toCamelCaseMap(data);
			int saveType = StringUtil.getInt(data.get("DataSetRowType"));
			data.put("authRoleCd", saveMap.get("authRoleCd"));
			
			if (saveType == 3) {
				delRtn = coMnuAuthGrpMngDao.deleteMnuAuthInfo(data);
				delCnt++;
			}	
		}
			
		if(delCnt > 0) {
			if (delRtn <= 0) throw new Exception("삭제 실패");
		}
		

		for( Map<String, Object> data : list ) {
			data = CommonUtil.toCamelCaseMap(data);
			int saveType = StringUtil.getInt(data.get("DataSetRowType"));
			
			if (saveType == 1) {
				data.put("authRoleCd", saveMap.get("authRoleCd"));
				data.put("regpsnId", saveMap.get("regpsnId"));
				saveRtn += coMnuAuthGrpMngDao.insertMnuAuthInfo(data);
				saveCnt++;
			}
		}
		
		if(saveCnt > 0) {
			if (saveRtn <= 0) throw new Exception("저장 실패");
		}
	
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : saveMnuAuthGrpInfo
	 * 2. ClassName : CoMnuAuthGrpMngServiceImpl
	 * 3. Comment : 메뉴권한그룹정보 저장
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.04.13
	 * </pre>
	 *
	 * @param saveMap, list
	 * @return
	 * @throws Exception
	 */
	@Override
	public void saveMnuAuthGrpInfo(Map<String, Object> saveMap, List<Map<String, Object>> list)
			throws Exception {
	
		int saveRtn = 0;
		int saveCnt = 0;

		for( Map<String, Object> data : list ) {
			data = CommonUtil.toCamelCaseMap(data);
			int saveType = StringUtil.getInt(data.get("DataSetRowType"));
			
			if (saveType == 1) {
				data.put("authGrpCd", saveMap.get("authGrpCd"));
				data.put("regpsnId", saveMap.get("regpsnId"));
				saveRtn += coMnuAuthGrpMngDao.insertMnuAuthGrpInfo(data);
				saveCnt++;
			}
		}
		
		if(saveCnt > 0) {
			if (saveRtn <= 0) throw new Exception("저장 실패");
		}
	
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteMnuAuthGrpInfoList
	 * 2. ClassName : CoMnuAuthGrpMngServiceImpl
	 * 3. Comment : 메뉴권한그룹정보 삭제  삭제
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.04.13
	 * </pre>
	 *
	 * @param list
	 * @throws Exception
	 */
	@Override
	public void deleteMnuAuthGrpInfoList(List<Map<String, Object>> list) throws Exception {
		int rtn = 0;
		
		for (Map<String, Object> data : list) {
			data = CommonUtil.toCamelCaseMap(data);    
			rtn = coMnuAuthGrpMngDao.deleteMnuAuthGrpInfo(data);
		}
		
		if(rtn <= 0) {
			throw new Exception("삭제 실패");
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectDeptAuthMngList
	 * 2. ClassName : CoMnuAuthGrpMngServiceImpl
	 * 3. Comment : 부서별 권한 목록
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-03-17
	 * </pre>
	 *
	 * @param searchMap Map
	 * @return List
	 */
	@Override
	public List<Map<String, Object>> selectDeptAuthMngList(Map<String, Object> searchMap) {
		return coMnuAuthGrpMngDao.selectDeptAuthMngList(searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectDeptAuthMngMenu
	 * 2. ClassName : CoMnuAuthGrpMngServiceImpl
	 * 3. Comment : 부서별 권한 메뉴 정보
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-03-17
	 * </pre>
	 *
	 * @param searchMapList List
	 * @return List
	 */
	@Override
	public List<Map<String, Object>> selectDeptAuthMngMenu(List<Map<String, Object>> searchMapList) {
		List<String> codeList = new ArrayList<>();
		HashMap<String, Object> param = new HashMap<>();

		for (Map<String, Object> stringObjectMap : searchMapList) {
			codeList.add((String) stringObjectMap.get("AUTH_GRP_ROLE_CD"));
		}
		param.put("authClsfCdList", codeList);
		param.put("authGrpRoleClcd", StringUtil.getString(searchMapList.get(0).get("AUTH_GRP_ROLE_CLCD")));

		return coMnuAuthGrpMngDao.selectDeptAuthMngMenu(param);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : saveDeptAuthMngMenu
	 * 2. ClassName : CoMnuAuthGrpMngServiceImpl
	 * 3. Comment : 부서별 권한 저장
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-03-17
	 * </pre>
	 *
	 *
	 * @param commonMap
	 * @param saveList List
	 * @throws Exception sql
	 */
	@Override
	public void saveDeptAuthMngMenu(Map<String, Object> commonMap, List<Map<String, Object>> saveList) throws Exception {
		int rtn = 0;
		String msg = "";
		// 메인코드 저장.
		try{
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

			for( Map<String, Object> data : saveList ) {
				int saveType = StringUtil.getInt(data.get("DataSetRowType"));
				Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
				saveMap.put("regpsnId", admin.get("OPRTR_ID"));
				saveMap.put("updpsnId", admin.get("OPRTR_ID"));
				saveMap.put("authGrpRoleClcd", commonMap.get("AUTH_GRP_ROLE_CLCD"));

				if( saveType == 1 ) {   // 신규

					saveMap.put("useYn" ,"");
					int cnt = coMnuAuthGrpMngDao.selectDeptAuthMngCount(saveMap);

					if( cnt > 0 ) {
						throw new MessageException(-100, "권한분류코드 : " + saveMap.get("authClsfNm") + " 가 중복되어 등록 할 수 없습니다.");
					}

					rtn = coMnuAuthGrpMngDao.insertDeptAuthMngMenu(saveMap);
					msg = "등록";
				} else if( saveType == 2 ) {    //  수정
					rtn = coMnuAuthGrpMngDao.updateDeptAuthMngMenu(saveMap);
					msg = "수정";
				} else if( saveType == 3 ) {    //  삭제
					rtn = coMnuAuthGrpMngDao.deleteDeptAuthMngMenu(saveMap);
					msg = "삭제";
				}
				if( rtn <= 0 ) throw new Exception("부서별 권한 " + msg + " 실패");
			}

		} catch ( MessageException e ) {
			if( e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
			}
			throw e;
		}

	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectOprtrAuthInfoList
	 * 2. ClassName : CoMnuAuthGrpMngServiceImpl
	 * 3. Comment : 운영자별 메뉴권한분류코드 목록
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-03-21
	 * </pre>
	 *
	 * @param searchMap Map
	 * @return List
	 */
	@Override
	public List<Map<String, Object>> selectOprtrAuthInfoList(Map<String, Object> searchMap) {
		return coMnuAuthGrpMngDao.selectOprtrAuthInfoList(searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : saveOprtrAuthInfo
	 * 2. ClassName : CoMnuAuthGrpMngServiceImpl
	 * 3. Comment : 운영자별 메뉴 권한 저장
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-03-21
	 * </pre>
	 *
	 *
	 * @param commonMap
	 * @param saveList List
	 * @throws Exception sql
	 */
	@Override
	public void saveOprtrAuthInfo(Map<String, Object> commonMap, List<Map<String, Object>> saveList) throws Exception {
		int rtn = 0;
		String msg = "";

		// 메인코드 저장.
		try{

			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

			for( Map<String, Object> data : saveList ) {
				int saveType = StringUtil.getInt(data.get("DataSetRowType"));
				Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

				saveMap.put("regpsnId", admin.get("OPRTR_ID"));
				saveMap.put("updpsnId", admin.get("OPRTR_ID"));
				saveMap.put("authGrpRoleClcd", commonMap.get("AUTH_GRP_ROLE_CLCD"));

				if( saveType == 1 ) {   // 신규


					int cnt = coMnuAuthGrpMngDao.selectOprtrAuthInfoCount(saveMap);

					if( cnt > 0 ) {
						throw new MessageException(-100, "권한분류코드 : " + saveMap.get("authClsfNm") + " 가 중복되어 등록 할 수 없습니다.");
					}

					rtn = coMnuAuthGrpMngDao.insertOprtrAuthInfo(saveMap);
					msg = "등록";
				} else if( saveType == 2 ) {    //  수정
					rtn = coMnuAuthGrpMngDao.updateOprtrAuthInfo(saveMap);
					msg = "수정";
				} else if( saveType == 3 ) {    //  삭제
					rtn = coMnuAuthGrpMngDao.deleteOprtrAuthInfo(saveMap);
					msg = "삭제";
				}
				if( rtn <= 0 ) throw new Exception("운영자별 메뉴 권한 " + msg + " 실패");
			}

		} catch ( MessageException e ) {
			if( e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
			}
			throw e;
		}
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectOprtrMnuMngList
	 * 2. ClassName : CoMnuAuthGrpMngServiceImpl
	 * 3. Comment :  운영자 권한 제외 메뉴 목록
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-03-22
	 * </pre>
	 *
	 * @param searchMap Map
	 * @return List
	 */
	@Override
	public List<Map<String, Object>> selectOprtrMnuMngList(Map<String, Object> searchMap) {
		return coMnuAuthGrpMngDao.selectOprtrMnuMngList(searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectOprtrMnuAuthGrpMngList
	 * 2. ClassName : CoMnuAuthGrpMngServiceImpl
	 * 3. Comment :  운영자별 메뉴 목록
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-03-22
	 * </pre>
	 *
	 * @param searchMap Map
	 * @return List
	 */
	@Override
	public List<Map<String, Object>> selectOprtrMnuAuthGrpMngList(Map<String, Object> searchMap) {
		return coMnuAuthGrpMngDao.selectOprtrMnuAuthGrpMngList(searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : saveAuthOprtrMngList
	 * 2. ClassName : CoMnuAuthGrpMngServiceImpl
	 * 3. Comment : 운영자별 메뉴목록 저장
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-03-22
	 * </pre>
	 *
	 * @param saveMap Map
	 * @param list  List
	 * @throws Exception io
	 */
	@Override
	public void saveAuthOprtrMngList(Map<String, Object> saveMap, List<Map<String, Object>> list) throws Exception {
		int delRtn = 0;
		int saveRtn = 0;
		int saveCnt = 0;
		int delCnt = 0;


		try {

			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

			//삭제 먼저 진행
			for (Map<String, Object> data : list) {
				data = CommonUtil.toCamelCaseMap(data);
				int saveType = StringUtil.getInt(data.get("DataSetRowType"));
				data.put("oprtrId", saveMap.get("oprtrId"));
				data.put("coCd", saveMap.get("coCd"));

				if (saveType == 3) {
					delRtn = coMnuAuthGrpMngDao.deleteAuthOprtrMng(data);
					delCnt++;
				}
			}

			if(delCnt > 0) {
				if (delRtn <= 0) throw new MessageException(-100, "운영자별 메뉴목록 삭제에 실패하였습니다.");
			}


			for( Map<String, Object> data : list ) {
				data = CommonUtil.toCamelCaseMap(data);
				int saveType = StringUtil.getInt(data.get("DataSetRowType"));

				if (saveType == 1) {
					data.put("oprtrId", saveMap.get("oprtrId"));
					data.put("coCd", saveMap.get("coCd"));
					data.put("regpsnId", admin.get("OPRTR_ID"));
					data.put("updpsnId", admin.get("OPRTR_ID"));

					//data.put("regpsnId", saveMap.get("regpsnId"));
					saveRtn += coMnuAuthGrpMngDao.insertAuthOprtrMng(data);
					saveCnt++;
				}
			}

			if(saveCnt > 0) {
				if (saveRtn <= 0) throw new MessageException(-100, "운영자별 메뉴목록 저장에 실패하였습니다.");
			}

		} catch ( MessageException e ) {
			if( e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
			}
			throw e;
		}
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectDeptAuthMngMenuExcel
	 * 2. ClassName : CoMnuAuthGrpMngServiceImpl
	 * 3. Comment : 부서별 메뉴 권한 엑셀 조회
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-05-18
	 * </pre>
	 *
	 * @param searchMap Map
	 * @return List
	 * @throws Exception exceltion
	 */
	@Override
	public List<Map<String, Object>> selectDeptAuthMngMenuExcel(Map<String, Object> searchMap) throws Exception {
		return coMnuAuthGrpMngDao.selectDeptAuthMngMenuExcel(searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectOprtrAuthMngMenuExcel
	 * 2. ClassName : CoMnuAuthGrpMngServiceImpl
	 * 3. Comment : 운영자별 메뉴 권한 엑셀 조회
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-05-19
	 * </pre>
	 *
	 * @param searchMap Map
	 * @return List
	 * @throws Exception exceltion
	 */
	@Override
	public List<Map<String, Object>> selectOprtrAuthMngMenuExcel(Map<String, Object> searchMap) throws Exception {
		return coMnuAuthGrpMngDao.selectOprtrAuthMngMenuExcel(searchMap);
	}

}
