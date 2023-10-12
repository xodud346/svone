package com.ssp.bo.co.login.service;


import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.util.SspMap;

/**
 * @PackageName: com.ssp.core.legacy.mall.am.manager.service
 * @FileName : LoginManagerService.java
 * @Date : 2019. 3. 21.
 * @프로그램 설명 : 관리자 로그인을 처리하는 Service Interface
 * @author jangsin
 */
@Service
public interface LoginManagerService {

	/**
	* <pre>
	* 1. MethodName : loginProc
	* 2. ClassName  : LoginManagerService.java
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
	public Map<String, Object> loginProc (String wptal_id, String srveName) throws Exception;

	/**
	* <pre>
	* 1. MethodName : insertLoginManagerHistroy
	* 2. ClassName  : LoginManagerService.java
	* 3. Comment    : 관리자 로그인 기록을 남긴다.
	* 4. 작성자       : jangsin
	* 5. 작성일       : 2019. 3. 21.
	* </pre>
	*
	* @param request
	* @param admin
	* @return
	* @throws Exception
	*/
	public int insertLoginManagerHistroy (String loginId, String remotAddr, String loginYn) throws Exception;

	/**
	* <pre>
	* 1. MethodName : insertLoginManagerHistroy
	* 2. ClassName  : LoginManagerService.java
	* 3. Comment    : 관리자 로그인 기록을 남긴다.
	* 4. 작성자       : jangsin
	* 5. 작성일       : 2019. 3. 21.
	* </pre>
	*
	* @param request
	* @param admin
	* @return
	* @throws Exception
	*/
	public int insertBoSysCnctLog (Map<String, Object> paramMap) throws Exception;

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
	public List<Map<String, Object>> selectAdminMenuList (Map<String, Object> paramMap) throws Exception;

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
	public Map<String, Object> selectLoginManagerInfo (String wptal_id, String srveName) throws Exception;

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
	public List<SspMap> selectUserAuthList(String wptal_id) throws Exception;

	/**
	 * <pre>
	 * 1. MethodName : selectUserChrpsn
	 * 2. ClassName  : LoginManagerService.java
	 * 3. Comment    : 관리자 상품담당자 정보 단건 조회
	 * 4. 작성자       :
	 * 5. 작성일       :
	 * </pre>
	 *
	 * @param Admin admin
	 * @return List<SspMap>
	 * @throws Exception
	 */
	public SspMap selectUserChrpsn(String wptal_id) throws Exception;

	/**
	 * <pre>
	 * 1. MethodName : selectUserChrpsnList
	 * 2. ClassName  : LoginManagerService.java
	 * 3. Comment    : 관리자 상품담당자 정보 목록 조회
	 * 4. 작성자       :
	 * 5. 작성일       :
	 * </pre>
	 *
	 * @param Admin admin
	 * @return List<SspMap>
	 * @throws Exception
	 */
	public List<SspMap> selectUserChrpsnList(Admin admin) throws Exception;

	/**
	 * <pre>
	 * 1. MethodName : selectSystemDateList
	 * 2. ClassName  : LoginManagerService.java
	 * 3. Comment    : 
	 * 4. 작성자       :
	 * 5. 작성일       :
	 * </pre>
	 *
	 * @param Admin admin
	 * @return List<Map<String, Object>>
	 * @throws Exception
	 */
	public Map<String, Object> selectSystemDateList () throws Exception;


}
