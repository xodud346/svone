package com.ssp.bo.cc.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.service.CustAcctService;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  계정 컨트롤러
 * @package com.ssp.core.cc.service.controller
 * <pre>
 * @author  YOO CHANGHO
 * @since   2022. 02. 17.
 * @version 1.0
 * @see CustAcctController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/cc/acct")
public class CustAcctController {  
	private final Logger log = LoggerFactory.getLogger(CustAcctController.class);

	@Autowired
	private CustAcctService custAcctService;
	
	/**
	 * <pre>
	 * 1. MethodName : insertDvplcInfo
	 * 2. ClassName  : CustAcctController.java
	 * 3. Comment    : 계정 등록
	 * 4. 작성자      : 유창호
	 * 5. 작성일      : 2022. 02. 17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/insertAcctBasis.do")
	public NexacroResult insertAcctBasis(HttpSession session, @ParamDataSet(name = "ds_acct", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			
			//파라미터 하드코딩
			paramMap = CCUtils.prefixSession(paramMap, session);
			result.addDataSet("ds_output", custAcctService.insertAcctBasis(new CCUtils(session), paramMap));
			
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "insertAcctBasis", "계정 등록" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : updateAcctBasisList
	 * 2. ClassName  : CustAcctController.java
	 * 3. Comment    : 계정 정보 수정(다중)
	 * 4. 작성자      : 유창호
	 * 5. 작성일      : 2022. 02. 18.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/update-acct-basis-list.do")
	public NexacroResult updateAcctBasisList(HttpSession session, @ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> updateList) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			//파라미터 하드코딩
			updateList = CCUtils.prefixSessionList(updateList, session);
			result = custAcctService.updateAcctBasisList(updateList);
		} catch(Exception e) {			
			throw new LoggingException(new String[] { "CC", "BO", "updateAcctBasisList", "계정 정보 수정(다중)" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : updateAcctBasis
	 * 2. ClassName  : CustAcctController.java
	 * 3. Comment    : 계정 정보 수정
	 * 4. 작성자      : 유창호
	 * 5. 작성일      : 2022. 04. 24.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/update-acct-basis.do")
	public NexacroResult updateAcctBasis(HttpSession session, @ParamDataSet(name = "ds_save", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			//파라미터 하드코딩
			paramMap = CCUtils.prefixSession(paramMap, session);
			result = custAcctService.updateBgtAcctBasis(paramMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "updateBgtAcctBasis", "계정 정보 수정" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectAcctSinglePopupList
	 * 2. ClassName  : CustAcctController.java
	 * 3. Comment    : 계정 단일조회 팝업
	 * 4. 작성자      : 유창호
	 * 5. 작성일      : 2022. 02. 21.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-acct-single-popup-list.do")
	public NexacroResult selectAcctSinglePopupList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result = custAcctService.selectAcctSinglePopupList(paramMap);
		} catch(Exception e) {			
			throw new LoggingException(new String[] { "CC", "BO", "selectAcctSinglePopupList", "계정 단일조회 팝업" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectAcctMultiPopupList
	 * 2. ClassName  : CustAcctController.java
	 * 3. Comment    : 계정 멀티조회 팝업
	 * 4. 작성자      : 유창호
	 * 5. 작성일      : 2022. 02. 22.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/selectAcctMultiPopupList.do")
	public NexacroResult selectAcctMultiPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result = custAcctService.selectAcctMultiPopupList(paramMap);
		} catch(Exception e) {		
			throw new LoggingException(new String[] { "CC", "BO", "selectAcctSinglePopupList", "계정 멀티조회 팝업" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectAcctSettingTree
	 * 2. ClassName  : CustAcctController.java
	 * 3. Comment    : SSP_BO_MA_26
	 *                 계정관리 조회(트리)
	 * 4. 작성자     : 유창호
	 * 5. 작성일     : 2022. 02. 23.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-acct-setting-tree.do")
	public NexacroResult selectAcctSettingTree(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> paramMap, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			
			paramMap.put("CO_CD"  , "1000"		    );	//회사코드
			paramMap.put("SES_ID" , session.getId() );
			
			result = custAcctService.selectBizplcAcctTreeList(paramMap);
			
		} catch(Exception e) {			
			throw new LoggingException(new String[] { "CC", "BO", "selectAcctBasis", "계정 조회(트리)" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectMbrBasicInfoList
	 * 2. ClassName  : DpMngContoller.java
	 * 3. Comment    : 계정에 매핑된 부서 리스트 조회
	 * 4. 작성자      : 유창호
	 * 5. 작성일      : 2022. 02. 24.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/selectAcctDepthMappList.do")
	public NexacroResult selectMbrBasicInfoList(@ParamDataSet(name = "ds_grdParam", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result = custAcctService.selectAcctDeptMappList(paramMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "selectMbrBasicInfoList", "계정에 매핑된 부서 리스트 조회" }, e) {};
		}
		return result;
	}
	

	/**
	 * <pre>
	 * 1. MethodName : selectTreeList
	 * 2. ClassName  : CustAcctController.java
	 * 3. Comment    : 계정설정 조회(트리)
	 * 4. 작성자      : 차상영
	 * 5. 작성일      : 2022. 02. 23.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-tree-list.do")
	public NexacroResult selectTreeList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_treeList", custAcctService.selectTreeList(paramMap));
		} catch(Exception e) {			
			throw new LoggingException(new String[] { "CC", "BO", "selectTreeList", "계정 조회(트리)" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectAcctDeptDtlInfo
	 * 2. ClassName  : CustAcctController.java
	 * 3. Comment    : 계정설정 상세정보 조회
	 * 4. 작성자      : 차상영
	 * 5. 작성일      : 2022. 02. 23.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-acct-dept-dtl-info.do")
	public NexacroResult selectAcctDeptDtlInfo(@ParamDataSet(name = "ds_dtlParam", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {			
			result.addDataSet("ds_dtlInfo", custAcctService.selectAcctDeptDtlInfo(paramMap));
		} catch(Exception e) {			
			throw new LoggingException(new String[] { "CC", "BO", "selectAcctDeptDtlInfo", "계정설정 상세정보 조회" }, e) {};
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectAcctDeptMappListById
	 * 2. ClassName  : CustAcctController.java
	 * 3. Comment    : 매핑 부서, 계정 리스트 조회
	 * 4. 작성자      : 차상영
	 * 5. 작성일      : 2022. 02. 23.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-acct-dept-mapp-list-by-id.do")
	public NexacroResult selectAcctDeptMappListById(@ParamDataSet(name = "ds_dtlParam", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {			
			result.addDataSet("ds_subGrdList", custAcctService.selectAcctDeptMappListById(paramMap));
		} catch(Exception e) {			
			throw new LoggingException(new String[] { "CC", "BO", "selectAcctDeptMappListById", "매핑 계정 리스트 조회" }, e) {};
		}
		return result;
	}	

	/**
	 * <pre>
	 * 1. MethodName : saveAcctDeptMapp
	 * 2. ClassName  : CustAcctController.java
	 * 3. Comment    : 계정 설정 저장
	 * 4. 작성자      : 차상영
	 * 5. 작성일      : 2022. 02. 18.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/save-acct-dept-mapp.do")
	public NexacroResult saveAcctDeptMapp(HttpSession session, @ParamDataSet(name = "ds_dtlInfo", required = false) Map<String, Object> dtlInfo, @ParamDataSet(name = "ds_subGrdList", required = false) List<Map<String, Object>> subGrdList) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			custAcctService.saveAcctDeptMapp(dtlInfo, subGrdList, new CCUtils(session));			
		} catch(Exception e) {			
			throw new LoggingException(new String[] { "CC", "BO", "saveAcctDeptMapp", "계정 설정 저장" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectBgtAcctIdDetail
	 * 2. ClassName  : CustAcctController.java
	 * 3. Comment    : 계정관리 계정 상세정보 조회
	 * 4. 작성자      : 유창호
	 * 5. 작성일      : 2022. 04. 24.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-bgt-acct-id-detail.do")
	public NexacroResult selectBgtAcctIdDetail(@ParamDataSet(name = "ds_dtlSearch", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output", custAcctService.selectBgtAcctIdDetail(paramMap));
		} catch(Exception e) {			
			throw new LoggingException(new String[] { "CC", "BO", "selectBgtAcctIdDetail", "계정관리 계정 상세정보 조회" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectCheckHrnkAcct
	 * 2. ClassName  : CustAcctController.java
	 * 3. Comment    : 선택한 계정 하위에 존재하는 계정 선택여부 조회
	 * 4. 작성자      : 유창호
	 * 5. 작성일      : 2022. 04. 24.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-check-hrnk-acct.do")
	public NexacroResult selectCheckHrnkAcct(@ParamDataSet(name = "ds_searchCnt", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {			
			result.addDataSet("ds_cnt",custAcctService.selectCheckHrnkAcct(paramMap));			
		} catch(Exception e) {			
			throw new LoggingException(new String[] { "CC", "BO", "selectCheckHrnkAcct", "선택한 계정 하위에 존재하는 계정 선택여부 조회" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectAllExcelDownload
	 * 2. ClassName  : CustAcctController.java
	 * 3. Comment    : 대용량엑셀다운로드
	 * 4. 작성자      : 문주환
	 * 5. 작성일      : 2022. 05. 25.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-all-excel-download.do")
	public NexacroResult selectAllExcelDownload(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			//CCUtils.initSession(session);
			result = custAcctService.selectAllExcelDownload(searchMap, new CCUtils(session));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_74", "계정-부서설정 대용량엑셀다운로드" }, e) {
			};
		}
		return result;
    }
	
	//대용량엑셀
	@RequestMapping(value = "/select-all-acct-excel-download.do")
	public NexacroResult selectAllExcelDownload2(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			//CCUtils.initSession(session);
			result.addDataSet("ds_output1", custAcctService.selectAllExcelDownload2(searchMap, new CCUtils(session)));
			
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_20", "대용량엑셀테스트" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectCommonCostTrnsfDeptList
	 * 2. ClassName  : CustAcctController.java
	 * 3. Comment    : 비용부서 리스트 조회
	 * 4. 작성자      : 김명기
	 * 5. 작성일      : 2023. 02. 22.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/selectComCostTrnsfDeptList.do")
	public NexacroResult selectComCostTrnsfDeptList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result = custAcctService.selectComCostTrnsfDeptList(paramMap);
		} catch(Exception e) {			
			throw new LoggingException(new String[] { "CC", "BO", "selectAcctSinglePopupList", "계정 단일조회 팝업" }, e) {};
		}
		return result;
	}
	 
	/**
	 * <pre>
	 * 1. MethodName : selectRefSinglePopupList
	 * 2. ClassName  : CustAcctController.java
	 * 3. Comment    : 참조코드 단일조회 팝업
	 * 4. 작성자      : 김명기
	 * 5. 작성일      : 2023. 02. 22.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-ref-single-popup-list.do")
	public NexacroResult selectRefSinglePopupList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result = custAcctService.selectRefSinglePopupList(paramMap);
		} catch(Exception e) {			
			throw new LoggingException(new String[] { "CC", "BO", "selectAcctSinglePopupList", "계정 단일조회 팝업" }, e) {};
		}
		return result;
	}
}
