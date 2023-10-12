package com.ssp.bo.cc.controller;

import com.ssp.bo.cc.CCUtils;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.service.StockService;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  StockNo관리 목록
 * @package com.ssp.bo.cc.controller
 * <pre>
 * @author  moonjooh
 * @since   2022. 03. 22.
 * @version 1.0
 * @see StockController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.03.22		최초작성
 */
@Controller
@RequestMapping("/cust/stock/mng")
public class StockController {
	private final Logger log = LoggerFactory.getLogger(StockController.class);
		
	@Resource(name="stockService") 
	private StockService stockService;
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustStockList
	 * 2. ClassName  : StockController.java
	 * 3. Comment    : StockNo관리 목록
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 03. 22.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-cust-stock-list.do", method = RequestMethod.POST)
	public NexacroResult selectCustStockList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			//CCUtils.initSession(session);
			result.addDataSet("ds_output1", stockService.selectCustStockList(searchMap, new CCUtils(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_25", "StockNo관리 목록" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectPrdInfoByPrdId
	 * 2. ClassName  : StockController.java
	 * 3. Comment    : StockNo관리 상품 상세정보 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 03. 22.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-prdinfo-by-prdid.do", method = RequestMethod.POST)
	public NexacroResult selectPrdInfoByPrdId(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output1", stockService.selectPrdInfoByPrdId(searchMap));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_26", "StockNo관리 상품 상세정보 조회" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectCheckStockNo
	 * 2. ClassName  : StockController.java
	 * 3. Comment    : StockNo관리 stockNo 중복체크
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 03. 22.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-check-stock-no.do", method = RequestMethod.POST)
	public NexacroResult selectCheckStockNo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output1", stockService.selectCheckStockNo(searchMap));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_26", "StockNo관리 stockNo 중복체크" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : saveDrmcMbrDeatil
	 * 2. ClassName  : CustBgtByacctAprvlController.java
	 * 3. Comment    : StockNo관리 생성
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 03. 22.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/save-cust-stock-list.do", method = RequestMethod.POST)
	public NexacroResult saveCustStockList(@ParamDataSet(name = "ds_save", required = false) Map<String, Object> input, HttpSession session) throws Exception{	
		NexacroResult result = new NexacroResult();
		try {
			input = CCUtils.prefixSession(input, session);
			result = stockService.saveCustStockList(input);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_26", "StockNo관리 생성" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : saveDrmcMbrDeatil
	 * 2. ClassName  : CustBgtByacctAprvlController.java
	 * 3. Comment    : StockNo관리 수정
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 03. 22.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/update-cust-stock-list.do", method = RequestMethod.POST)
	public NexacroResult updateCustStockList(@ParamDataSet(name = "ds_save", required = false) Map<String, Object> input, HttpSession session) throws Exception{	
		NexacroResult result = new NexacroResult();
		try {
			input = CCUtils.prefixSession(input, session);
			result = stockService.updateCustStockList(input);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_26", "StockNo관리 수정" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustStockHst
	 * 2. ClassName  : StockController.java
	 * 3. Comment    : StockNo관리 이력조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 03. 23.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-cust-stock-hst.do", method = RequestMethod.POST)
	public NexacroResult selectCustStockHst(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output1", stockService.selectCustStockHst(searchMap));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_30", "StockNo관리 이력조회" }, e) {
			};
		}
		return result;
    }
	
	// 대용량엑셀
	@RequestMapping(value = "/select-all-excel-download.do")
	public NexacroResult selectAllExcelDownload(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			//CCUtils.initSession(session);
			result = stockService.selectAllExcelDownload(searchMap, new CCUtils(session));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_25", "대용량엑셀 다운로드" }, e) {
			};
		}
		return result;
    }
		
}
