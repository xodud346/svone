package com.ssp.bo.co.login.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.co.dao.CoMbrSysCnctLogDao;
import com.ssp.bo.co.login.service.LoginManagerService;
import com.ssp.core.co.dao.CommonDAO;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.util.SspMap;
import com.ssp.core.util.StringHash;

/**
 * @PackageName: com.ssp.core.legacy.mall.am.manager.service.impl
 * @FileName : LoginManagerServiceImpl.java
 * @Date : 2019. 3. 21.
 * @프로그램 설명 : 관리자 로그인을 처리하는 Service Implement Class
 * @author jangsin
 */
@Service("loginManagerService")
public class LoginManagerServiceImpl implements LoginManagerService{

	@Resource(name="commonDAO")
	private CommonDAO commonDAO;

	@Resource(name="coMbrSysCnctLogDao")
	private CoMbrSysCnctLogDao coMbrSysCnctLogDao;
	
	@Autowired private
	StringHash stringHash;

	/**
	* <pre>
	* 1. MethodName : loginProc
	* 2. ClassName  : LoginManagerServiceImpl.java
	* 3. Comment    : 관리자 로그인을 처리한다.
	* 4. 작성자       : jangsin
	* 5. 작성일       : 2019. 3. 21.
	* </pre>
	*
	* @param admin
	* @param request
	* @return
	* @throws Exception
	*/
	@SuppressWarnings("unchecked")
	public Map<String, Object> loginProc (String wptal_id, String serverName) throws Exception{
		Map<String, Object> param = new HashMap<String, Object>();
		Map<String, Object> userInfo = null;


		if("".equals(wptal_id)){
		    throw new RuntimeException("Empty wptal ID");
		} else {
		    param.put("WPTAL_ID", wptal_id);
			userInfo = (Map<String, Object>) commonDAO.select("com.ssp.bo.co.LoginManager.selectLoginManagerInfo", param);

//			if(userInfo == null){ // 관리자 정보 없음
//			    admin.setLoginStateCode(Code.LOGIN_ID_NULL);
//			    admin.setADM_MST_LOGIN_YN("N");
//			}else{
//				// 로그인한 사용자 아이디, 초기메뉴, 레벨, 로그인 유무를 저장한다.
//				admin.setADM_MST_ID(loginId);
//				admin.setRoleAdmin(ROLEADMIN.administrator);
//				admin.setLoginStateCode(Code.LOGIN_SUCCESS);
//				admin.setADM_MST_LOGIN_YN("Y");
//			}
		}
		
		return userInfo;
	}

	/**
	* <pre>
	* 1. MethodName : insertLoginManagerHistroy
	* 2. ClassName  : LoginManagerServiceImpl.java
	* 3. Comment    : 관리자 로그인 이력을 남긴다.
	* 4. 작성자       : jangsin
	* 5. 작성일       : 2019. 3. 21.
	* </pre>
	*
	* @param request
	* @param admin
	* @return
	* @throws Exception
	*/
	public int insertLoginManagerHistroy (String loginId, String remotAddr, String loginYn) throws Exception{
		Map<String, Object> commandMap = new HashMap<String, Object>();
/*
		commandMap.put("ADM_ADM_MST_ID", loginId);
		commandMap.put("ADM_MST_LOGIN_YN", loginYn);
		commandMap.put("ADM_MST_REG_IP", remotAddr);
		return commonDAO.insert("LoginManager.insertLoginManagerHistroy", commandMap);
*/		
		return 0;		
	}

	/**
	* <pre>
	* 1. MethodName : insertLoginManagerHistroy
	* 2. ClassName  : LoginManagerServiceImpl.java
	* 3. Comment    : 관리자 로그인 이력을 남긴다.
	* 4. 작성자       : jangsin
	* 5. 작성일       : 2019. 3. 21.
	* </pre>
	*
	* @param request
	* @param admin
	* @return
	* @throws Exception
	*/
	public int insertBoSysCnctLog (Map<String, Object> paramMap) throws Exception{
		return this.coMbrSysCnctLogDao.insertBoSysCnctLog(paramMap);		
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectAdminMenuList
	 * 2. ClassName  : LoginManagerService.java
	 * 3. Comment    : 관리자 메뉴 리스트 조회
	 * 4. 작성자       :
	 * 5. 작성일       :
	 * </pre>
	 *
	 * @param paramMap
	 * @return List<Map<String, Object>>
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String, Object>> selectAdminMenuList (Map<String, Object> paramMap) throws Exception{
		return (List<Map<String, Object>>)commonDAO.selectList("MenuManager.selectAdminMenuList", paramMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectLoginManagerInfo
	 * 2. ClassName  : LoginManagerService.java
	 * 3. Comment    : 관리자 정보 조회
	 * 4. 작성자       :
	 * 5. 작성일       :
	 * </pre>
	 *
	 * @param Admin admin
	 * @return List<Map<String, Object>>
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public Map<String, Object> selectLoginManagerInfo (String wptal_id, String serverName) throws Exception{
	    Map<String, Object> param = new HashMap<String, Object>();
	    param.put("WPTAL_ID", wptal_id);
		return (Map<String, Object>)commonDAO.select("com.ssp.bo.co.LoginManager.selectLoginManagerInfo", param);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectUserAuthList
	 * 2. ClassName  : LoginManagerService.java
	 * 3. Comment    : 관리자 권한목록 조회
	 * 4. 작성자       :
	 * 5. 작성일       :
	 * </pre>
	 *
	 * @param Admin admin
	 * @return List<SspMap>
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<SspMap> selectUserAuthList(String wptal_id) throws Exception {
	    Map<String, Object> param = new HashMap<String, Object>();
        param.put("ADM_MST_ID", wptal_id);
		return commonDAO.selectList("LoginManager.selectUserAuthList", param);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectUserChrpsn
	 * 2. ClassName  : LoginManagerService.java
	 * 3. Comment    : 관리자 상품담당자 목록 조회
	 * 4. 작성자       :
	 * 5. 작성일       :
	 * </pre>
	 *
	 * @param Admin admin
	 * @return List<SspMap>
	 * @throws Exception
	 */
	public SspMap selectUserChrpsn(String wptal_id) throws Exception {
	    Map<String, Object> param = new HashMap<String, Object>();
        param.put("ADM_MST_ID", wptal_id);
		return (SspMap) commonDAO.select("LoginManager.selectUserChrpsnList", param);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectUserChrpsnList
	 * 2. ClassName  : LoginManagerService.java
	 * 3. Comment    : 관리자 상품담당자 목록 조회
	 * 4. 작성자       :
	 * 5. 작성일       :
	 * </pre>
	 *
	 * @param Admin admin
	 * @return List<SspMap>
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<SspMap> selectUserChrpsnList(Admin admin) throws Exception {
		return commonDAO.selectList("LoginManager.selectUserChrpsnList", admin);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectLoginManagerInfo
	 * 2. ClassName  : LoginManagerService.java
	 * 3. Comment    : 관리자 정보 조회
	 * 4. 작성자       :
	 * 5. 작성일       :
	 * </pre>
	 *
	 * @param Admin admin
	 * @return List<Map<String, Object>>
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public Map<String, Object> selectSystemDateList () throws Exception{
	    Map<String, Object> param = new HashMap<String, Object>();		
		return (Map<String, Object>)commonDAO.select("com.ssp.bo.co.LoginManager.selectSystemDateList", param);
	}

}
