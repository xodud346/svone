package com.ssp.bo.cc.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.service.CustBgtService;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  예산
 * @package com.ssp.bo.cc.controller
 * @ClassName CustBgtController
 * </pre>
 * @author  차상영
 * @since   2022. 02. 11.
 * @version 1.0
 * @see CustBgtController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/bo/cust/bgt")
public class CustBgtController {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
		
	@Resource(name="custBgtService") 
	private CustBgtService custBgtervice;	
	
	/**
	 * <pre>
	 * 1. MethodName : selectBgtList
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    : 예산목록 조회
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_60/selectBgtList.do")
	public NexacroResult selectBgtList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
				
    	List<Map<String,Object>> list = custBgtervice.selectBgtList(searchMap);    	
    	
		NexacroResult result = new NexacroResult();		
		result.addDataSet("ds_list", list);

		return result;
    }

	/**
	 * <pre>
	 * 1. MethodName : selectBgtTransMonthList
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    : 예산이체목록 조회
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_87/select-bgt-trans-month-list.do")
	public NexacroResult selectBgtTransMonthList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
				
    	List<Map<String,Object>> list = custBgtervice.selectBgtTransMonthList(searchMap);    	
    	
		NexacroResult result = new NexacroResult();		
		result.addDataSet("ds_list", list);

		return result;
    }


	/**
	 * <pre>
	 * 1. MethodName : saveBgtTransMonth
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    : 일반예산이월 상세 저장(부서별)
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_87/save-bgt-trans-month.do", method = RequestMethod.POST)
	public NexacroResult saveBgtTransMonth(HttpSession session, @ParamDataSet(name = "ds_list", required = false) List<Map<String, Object>> list) throws Exception{	
		NexacroResult result = new NexacroResult();
		
		try {				
			custBgtervice.saveBgtTransMonth(list, new CCUtils(session));
		}
		 catch (Exception e) {
			 throw new LoggingException(new String[] { "CC", "BO", "saveBgtTransMonth", "일반예산이월 상세 저장(부서별)" }, e) {	};
		}
		
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectBgtDeptMappList
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    : 예산목록 조회(부서별)
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_61/selectBgtDeptMappList.do")
	public NexacroResult selectBgtDeptMappList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
				
    	List<Map<String,Object>> list = custBgtervice.selectBgtDeptMappList(searchMap);    	
    	
		NexacroResult result = new NexacroResult();		
		result.addDataSet("ds_list", list);

		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectBgtDeptMappListByAcct
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    : 예산목록 조회(계정별)
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_78/select-bgt-dept-mapp-list-by-acct.do")
	public NexacroResult selectBgtDeptMappListByAcct(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
				
    	List<Map<String,Object>> list = custBgtervice.selectBgtDeptMappListByAcct(searchMap);    	
    	
		NexacroResult result = new NexacroResult();		
		result.addDataSet("ds_list", list);

		return result;
    }

	
	/**
	 * <pre>
	 * 1. MethodName : updateBgtMappDept
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    : 예산설정 부서/계정 부서 수정
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_61/updateBgtMappDept.do", method = RequestMethod.POST)
	public NexacroResult updateBgtMappDept(@ParamDataSet(name = "ds_list", required = false) List<Map<String, Object>> list) throws Exception{	
		NexacroResult result = new NexacroResult();
		
		try {		
			custBgtervice.updateBgtMappDept(list);
		}
		 catch (Exception e) {
			 throw new LoggingException(new String[] { "CC", "BO", "updateBgtMappDept", "예산설정 부서/계정 부서 수정" }, e) {	};
		}
		
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : updateBgtMappBgtUseHrnkAcct
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    : 예산설정 부서/계정 상위계정 수정
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_78/update-bgt-mapp-bgt-use-hrnk-acct.do", method = RequestMethod.POST)
	public NexacroResult updateBgtMappBgtUseHrnkAcct( HttpSession session, @ParamDataSet(name = "ds_list", required = false) List<Map<String, Object>> list) throws Exception{	
		NexacroResult result = new NexacroResult();
		
		try {					
			custBgtervice.updateBgtMappBgtUseHrnkAcct(list, new CCUtils(session));
		}
		 catch (Exception e) {
			 throw new LoggingException(new String[] { "CC", "BO", "updateBgtMappBgtUseHrnkAcct", "예산설정 계정/부서 상위계정 수정" }, e) {	};
		}
		
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectQrtBgtUseYn
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    : 분기예산사용여부 조회
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_84/selectQrtBgtUseYn.do")
	public NexacroResult selectQrtBgtUseYn(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
				
    	Map<String,Object> map = custBgtervice.selectQrtBgtUseYn(searchMap);    	
    	
		NexacroResult result = new NexacroResult();		
		result.addDataSet("ds_qrtBgtUseYn", map);

		return result;
    }

	
	/**
	 * <pre>
	 * 1. MethodName : selectBgtDeptDtlMappListByDept
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    :  부서/계정 설정 상세 조회(부서별)
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_84/select-bgt-dept-dtl-mapp-list-by-dept.do")
	public NexacroResult selectBgtDeptDtlMappListByDept(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
				
    	List<Map<String,Object>> list = custBgtervice.selectBgtDeptDtlMappListByDept(searchMap);    	
    	
		NexacroResult result = new NexacroResult();		
		result.addDataSet("ds_list", list);

		return result;
    }

	/**
	 * <pre>
	 * 1. MethodName : selectBgtDeptDtlMappListByAcct
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    :  부서/계정 설정 상세 조회(계정별)
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_83/select-bgt-dept-dtl-mapp-list-by-acct.do")
	public NexacroResult selectBgtDeptDtlMappListByAcct(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
				
    	List<Map<String,Object>> list = custBgtervice.selectBgtDeptDtlMappListByAcct(searchMap);    	
    	
		NexacroResult result = new NexacroResult();		
		result.addDataSet("ds_list", list);

		return result;
    }

	
	/**
	 * <pre>
	 * 1. MethodName : selectBzplcQrtBgtUseYn
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    : 분기예산사용여부 조회
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_85/selectBzplcQrtBgtUseYn.do")
	public NexacroResult selectBzplcQrtBgtUseYn(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{
    	Map<String,Object> map = custBgtervice.selectBzplcQrtBgtUseYn(searchMap, new CCUtils(session));    	
    	
		NexacroResult result = new NexacroResult();		
		result.addDataSet("ds_qrtBgtUseYn", map);

		return result;
    }

	
	/**
	 * <pre>
	 * 1. MethodName : selectBgtDeptDtlMappListByCommonAcct
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    :  부서/계정 설정 상세 조회(공통)
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_85/select-bgt-dept-dtl-mapp-list-by-common-acct.do")
	public NexacroResult selectBgtDeptDtlMappListByCommonAcct(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
				
    	List<Map<String,Object>> list = custBgtervice.selectBgtDeptDtlMappListByCommonAcct(searchMap);    	
    	
		NexacroResult result = new NexacroResult();		
		result.addDataSet("ds_list", list);

		return result;
    }

	
	/**
	 * <pre>
	 * 1. MethodName : saveBgtDeptDtl
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    : 부서/계정 설정 상세 저장(부서별)
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_84/save-bgt-dept-dtl.do", method = RequestMethod.POST)
	public NexacroResult saveBgtDeptDtl(HttpSession session, @ParamDataSet(name = "ds_list", required = false) List<Map<String, Object>> list) throws Exception{	
		NexacroResult result = new NexacroResult();
		
		try {	
			custBgtervice.saveBgtDeptDtl(list, new CCUtils(session));
		}
		 catch (Exception e) {
			 throw new LoggingException(new String[] { "CC", "BO", "saveBgtDeptDtl", "부서/계정 설정 상세 저장(부서별)" }, e) {	};
		}
		
		return result;
    }

	/**
	 * <pre>
	 * 1. MethodName : saveBgtCommonAcctDtl
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    : 부서/계정 설정 상세 저장(공통)
	 * 4. 작성자       : 차상영
	 * 5. 작성일       : 2022. 02. 17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_85/save-bgt-common-acct-dtl.do", method = RequestMethod.POST)
	public NexacroResult saveBgtCommonAcctDtl(HttpSession session, @ParamDataSet(name = "ds_list", required = false) List<Map<String, Object>> list) throws Exception{	
		NexacroResult result = new NexacroResult();
		
		try {				
			custBgtervice.saveBgtCommonAcctDtl(list, new CCUtils(session));
		}
		 catch (Exception e) {
			 throw new LoggingException(new String[] { "CC", "BO", "saveBgtCommonAcctDtl", "부서/계정 설정 상세 저장(공통)" }, e) {	};
		}
		
		return result;
    }

	
	
	// 일반 예산 이체 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
	
	/**
	 * <pre>
	 * 1. MethodName : selectQrtBgtUseYn
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    : 분기예산사용여부 조회
	 * selectQrtBgtUseYn 메소드의 호출주소가 카멜케이스라, 서비스는 그대로 쓰고 주소만 스네이크케이스로 바꿔서 하나 더 만듦 
	 * 4. 작성자       : 박재광
	 * 5. 작성일       : 2022. 05. 06.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_84/select-qrt-bgt-use-yn.do")
	public NexacroResult selectQrtBgtUseYnCopy(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
    	Map<String,Object> map = custBgtervice.selectQrtBgtUseYn(searchMap);    	
		NexacroResult result = new NexacroResult();		
		result.addDataSet("ds_qrtBgtUseYn", map);
		return result;
    }

	/**
	 * <pre>
	 * 1. MethodName : selectBalanceAmt
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    : 일반예산이체 계정잔액 조회
	 * 4. 작성자       : 박재광
	 * 5. 작성일       : 2022. 03. 28.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_62/select-acct-bal.do")
	public NexacroResult selectBalanceAmt(@ParamDataSet(name = "ds_searchBal", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		Map<String,Object> map = custBgtervice.selectBalanceAmt(searchMap);
		result.addDataSet("ds_bal", map);
		return result;
    }	
	
	/**
	 * <pre>
	 * 1. MethodName : saveGenBgtTrnsf
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    : 일반예산이체 저장
	 * 4. 작성자       : 박재광
	 * 5. 작성일       : 2022. 03. 28.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_62/save-gen-bgt-trnsf.do", method = RequestMethod.POST)
    public NexacroResult saveGenBgtTrnsf(HttpSession session, @ParamDataSet(name = "ds_param", required = false) Map<String, Object> map) throws Exception{
        NexacroResult result = new NexacroResult();
        try {
            custBgtervice.saveGenBgtTrnsf(map, new CCUtils(session));
        } catch (Exception e) {
             throw new LoggingException(new String[] { "CC", "BO", "saveGenBgtTrnsf", "일반예산이체 저장" }, e) {   };
        }
        return result;
    }
	// 일반 예산 이체 ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
	
	
	// 공통예산이월 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
	/**
	 * <pre>
	 * 1. MethodName : selectComBgtFwList
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    : 공통예산이월 목록 조회
	 * 4. 작성자       : 박재광
	 * 5. 작성일       : 2022. 04. 06.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_63/select-com-bgt-fw-list.do")
	public NexacroResult selectComBgtFwList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> list = custBgtervice.selectComBgtFwList(searchMap);
		result.addDataSet("ds_list", list);
		return result;
    }	
	
	/**
	 * <pre>
	 * 1. MethodName : saveComBgtFwList
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    : 공통예산이월 저장
	 * 4. 작성자       : 박재광
	 * 5. 작성일       : 2022. 04. 06.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_63/save-com-bgt-fw-list.do", method = RequestMethod.POST)
    public NexacroResult saveComBgtFwList(HttpSession session, @ParamDataSet(name = "ds_list", required = false) List<Map<String, Object>> list) throws Exception{
        NexacroResult result = new NexacroResult();
        try {
            custBgtervice.saveComBgtFwList(list, new CCUtils(session));
        } catch (Exception e) {        
            throw new LoggingException(new String[] { "CC", "BO", "saveComBgtFwList", "공통예산이월 저장" }, e) {   };
        }
        return result;
    }
	// 공통예산이월 ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
	
	/**
	 * <pre>
	 * 1. MethodName : selectAllExcelDownload
	 * 2. ClassName  : CustBgtController.java
	 * 3. Comment    : 대용량엑셀다운로드
	 * 4. 작성자      : 문주환
	 * 5. 작성일      : 2022. 05. 25.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ssp_bo_ma_60/select-all-excel-download.do")
	public NexacroResult selectAllExcelDownload(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			//CCUtils.initSession(session);
			result = custBgtervice.selectAllExcelDownload(searchMap, new CCUtils(session));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_60", "예산조회 대용량엑셀다운로드" }, e) {
			};
		}
		return result;
    }
	
}