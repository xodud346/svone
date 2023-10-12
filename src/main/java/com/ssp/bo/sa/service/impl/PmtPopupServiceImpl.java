package com.ssp.bo.sa.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.sa.dao.PmtPopupDao;
import com.ssp.bo.sa.dao.SaComDao;
import com.ssp.bo.sa.service.PmtPopupService;
import com.ssp.bo.sa.service.SaComService;
import com.ssp.core.co.dao.CoCommonDao;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 *
 * <pre>
 * @desc    프로모션 팝업 Serviceimpl
 * @package com.ssp.bo.sa.service.impl
 * <pre>
 *
 * @author
 * @since 2023. 01. 26.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.26.		87minho	최초작성
 */
@Service("pmtPopupService")
public class PmtPopupServiceImpl implements PmtPopupService {
	private final Logger logger = LoggerFactory.getLogger(PmtPopupServiceImpl.class);

	@Autowired
	private PmtPopupDao pmtPopupDao;

	@Autowired
	private SaComDao saComDao;

	@Autowired
	private CoCommonDao coCommonDao;

	@Autowired
	protected SspPropertyService propertiesService;

	@Autowired
	private SaComService saComService;
	
	/**
	*
	* <pre>
	* 1. MethodName : selectPmtPopupList
	* 2. ClassName : PmtPopupServiceImpl
	* 3. Comment : 프로모션 팝업 목록 조회
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2023.01.26.
	* </pre>
	*
	* @param searchInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult selectPmtPopupList(Map<String, Object> paramInfo, OdOrderComm odComm) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		Map<String, Object> paramMap = CommonUtil.toCamelCaseMap(paramInfo);
		paramMap.put("sesId", StringUtil.getString(odComm.getSession().get("SES_ID")));
		
		List<Map<String,Object>> list = new ArrayList<>();
		
		int totalCount = pmtPopupDao.selectPmtPopupListCnt(paramMap);

		if( totalCount > 0 ) {
			list = pmtPopupDao.selectPmtPopupList(paramMap);
		}

		//리턴값 set
		result.addVariable( "totalCount", totalCount );
		result.addDataSet("ds_output1", list);
		
		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : updatePmtPopupDispSo
	* 2. ClassName : PmtPopupServiceImpl
	* 3. Comment : 프로모션 팝업 순서 저장
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2023.01.26.
	* </pre>
	*
	* @param saveInfoList
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult updatePmtPopupDispSo(List<Map<String, Object>> paramInfoList) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
		int rtn = 0;
		String oprtrId = "";

		try {
			if (sessionsAdmin != null) {
				oprtrId = StringUtil.getString(sessionsAdmin.get("OPRTR_ID"));				
			}

			for(Map<String, Object> paramInfo : paramInfoList) {
				Map<String, Object> paramMap = CommonUtil.toCamelCaseMap(paramInfo);

				paramMap.put("updpsnId", oprtrId);

				rtn += pmtPopupDao.updatePmtPopupDispSo(paramMap);
			}
			if (rtn < 0) {
				throw new MessageException(-100, "저장에 실패하였습니다");
			}
		} catch(MessageException e) {
			if(e.getCode() == -100) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			} else {
				throw e;
			}
		}
		return result;
	}
	
	/**
	*
	* <pre>
	* 1. MethodName : selectPmtPopupInfo
	* 2. ClassName : PmtPopupServiceImpl
	* 3. Comment : 프로모션 팝업 상세 조회
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2023.01.26.
	* </pre>
	*
	* @param searchInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult selectPmtPopupInfo(Map<String, Object> paramInfo) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(paramInfo);

		Map<String,Object> pmtPopupDtlMap = pmtPopupDao.selectPmtPopupInfo(searchMap);
		List<Map<String,Object>> oprUnitList = pmtPopupDao.selectPmtPopupOprUnitList(searchMap);
		List<Map<String,Object>> dtlList = pmtPopupDao.selectPmtPopupAplyDtlList(searchMap);

		List<Map<String,Object>> aplyDtlList = dtlList.stream()
													  .filter(t -> "10".equals(t.get("PMT_POPUP_PROC_TYPE_CD")))
													  .collect(Collectors.toList());
		
		List<Map<String,Object>> excptDtlList = dtlList.stream()
													   .filter(t -> "20".equals(t.get("PMT_POPUP_PROC_TYPE_CD")))
													   .collect(Collectors.toList());
		
		List<Map<String,Object>> prmDtlList = dtlList.stream()
												     .filter(t -> "30".equals(t.get("PMT_POPUP_PROC_TYPE_CD")))
												     .collect(Collectors.toList());
		
		//리턴값 set
		result.addDataSet("ds_output1", pmtPopupDtlMap);
		result.addDataSet("ds_output2", oprUnitList);
		result.addDataSet("ds_output3", aplyDtlList);
		result.addDataSet("ds_output4", excptDtlList);
		result.addDataSet("ds_output5", prmDtlList);
		return result;
	}
	
	/**
	*
	* <pre>
	* 1. MethodName : savePmtPopupInfo
	* 2. ClassName : PmtPopupServiceImpl
	* 3. Comment : 프로모션 팝업 저장
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2023.01.26.
	* </pre>
	*
	* @param paramInfo, oprUnitInfoList
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult savePmtPopupInfo(Map<String, Object> paramInfo, List<Map<String, Object>> oprUnitInfoList, List<Map<String, Object>> aplyDtlList
			, List<Map<String, Object>> excptDtlList, List<Map<String, Object>> prmDtlList) throws Exception {
		NexacroResult result = new NexacroResult();
		int rtn = 0;
		Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
		Map<String, Object> paramMap = CommonUtil.toCamelCaseMap(paramInfo);

		String pmtPopupSeq = StringUtil.getString(paramMap.get("pmtPopupSeq"));
		String expsNoticSprCd = StringUtil.getString(paramMap.get("expsNoticSprCd"));

		String oprtrId = "";

		try {
			if (sessionsAdmin != null) {
				oprtrId = StringUtil.getString(sessionsAdmin.get("OPRTR_ID"));
			}
			paramMap.put("regpsnId", oprtrId);
			paramMap.put("updpsnId", oprtrId);
			
			if("".equals(pmtPopupSeq)) {
				pmtPopupSeq = pmtPopupDao.selectPmtPopupSeq(paramMap);
				paramMap.put("pmtPopupSeq", pmtPopupSeq);
				rtn = pmtPopupDao.insertPmtPopupDtl(paramMap);
			} else {
				rtn = pmtPopupDao.updatePmtPopupDtl(paramMap);
			}

			if(rtn > 0) {
				
				for(Map<String, Object> oprUnitInfo : oprUnitInfoList ) {
					int dataSetRowtype = StringUtil.getInt(oprUnitInfo.get("DataSetRowType")); // -- 1 : 추가, 2 : 수정, 3 : 삭제
					Map<String, Object> oprUnitMap = CommonUtil.toCamelCaseMap(oprUnitInfo);

					if(dataSetRowtype == 3) {
						oprUnitMap.put("pmtPopupSeq", pmtPopupSeq);
						pmtPopupDao.deletePmtPopupOprUnit(oprUnitMap);
					} else if(dataSetRowtype == 1) {
						 oprUnitMap.put("pmtPopupSeq", pmtPopupSeq);
						 oprUnitMap.put("regpsnId", oprtrId);
						 oprUnitMap.put("updpsnId", oprtrId);
						 pmtPopupDao.insertPmtPopupOprUnit(oprUnitMap);
					}
				}
									
				// 노출 페이지, 제외 페이지, 적용페이지
				List<Map<String, Object>> dtlList = new ArrayList<Map<String, Object>>();
				dtlList.addAll(aplyDtlList);
				dtlList.addAll(excptDtlList);
				dtlList.addAll(prmDtlList);
				for(Map<String, Object> dtlInfo : dtlList ) {
					int dataSetRowtype = StringUtil.getInt(dtlInfo.get("DataSetRowType")); // -- 1 : 추가, 2 : 수정, 3 : 삭제
					Map<String, Object> dtlMap = CommonUtil.toCamelCaseMap(dtlInfo);
					dtlMap.put("pmtPopupSeq", pmtPopupSeq);
					dtlMap.put("regpsnId", oprtrId);
					dtlMap.put("updpsnId", oprtrId);
					 if(dataSetRowtype == 1) {
						pmtPopupDao.insertPmtPopupAplyDtl(dtlMap);
					} else if(dataSetRowtype == 2) {
						pmtPopupDao.updatePmtPopupAplyDtl(dtlMap);
					} else if(dataSetRowtype == 3) {
						pmtPopupDao.deletePmtPopupAplyDtl(dtlMap);
					}	
				}
				
			}
			
		} catch(MessageException e) {
			if(e.getCode() == -100) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			} else {
				throw e;
			}
		}
		return result;
	}
	
	/**
	*
	* <pre>
	* 1. MethodName : deletePmtPopupInfo
	* 2. ClassName : PmtPopupServiceImpl
	* 3. Comment : 프로모션 팝업 삭제
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2023.01.26
	* </pre>
	*
	* @param paramInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult deletePmtPopupInfo(Map<String, Object> paramInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		int rtn = 0;

		try {
			Map<String, Object> paramMap = CommonUtil.toCamelCaseMap(paramInfo);

			rtn = pmtPopupDao.deletePmtPopupInfo(paramMap);
			
			if(rtn > 0) {
				pmtPopupDao.deletePmtPopupOprUnit(paramMap);
				pmtPopupDao.deletePmtPopupAplyDtl(paramMap);
			} else {
				throw new MessageException(-100, "삭제에 실패하였습니다");
			}

			if(!"".equals(StringUtil.getString(paramMap.get("docRegId")))) {
				String contextRealPath = propertiesService.getString("file.path.root");

				//docRegId 있으면 기존 파일 삭제함
				HashMap<String, Object> delMap = new HashMap<>();
				delMap.put("docRegId", StringUtil.getString(paramMap.get("docRegId")));
				delMap.put("docRegSeq", StringUtil.getString(paramMap.get("docRegSeq")));
				int fileDelRtn = coCommonDao.deleteFileInfo(delMap);
				//실제 경로 삭제
				if(fileDelRtn <= 0 ) {
					//throw new MessageException(-100, "첨부파일 삭제 실패");
				} else {
					// 실 파일 삭제
					saComService.deleteFile(contextRealPath, StringUtil.getString(paramMap.get("atflStorPath")), StringUtil.getString(paramMap.get("oriAtflNm")));
				}
			}

		} catch(MessageException e) {
			if( e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			} else {
				throw e;
			}
		}
		return result;
	}
}