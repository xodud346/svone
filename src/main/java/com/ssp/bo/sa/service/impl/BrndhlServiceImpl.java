package com.ssp.bo.sa.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.sa.dao.BrndhlDao;
import com.ssp.bo.sa.service.BrndhlService;
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
 * @desc    전문관 Serviceimpl
 * @package com.ssp.bo.sa.service.impl
 * <pre>
 *
 * @author
 * @since 2023. 02. 20.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.03.14.		87minho	최초작성
 */
@Service("brndhlService")
public class BrndhlServiceImpl implements BrndhlService {
	private final Logger logger = LoggerFactory.getLogger(BrndhlServiceImpl.class);

	@Autowired
	private BrndhlDao brndhlDao;

	@Autowired
	private CoCommonDao coCommonDao;

	@Autowired
	protected SspPropertyService propertiesService;

	@Autowired
	private SaComService saComService;

	private static final String NOTIC_SPR_CD_OPR = "30"; // 게시구분코드 - 운영단위
	private static final String NOTIC_SPR_CD_OPR_EXCPT = "50"; // 게시구분코드 - 운영단위(제외)
	private static final String NOTIC_SPR_CD_CONT_CUST = "60"; // 게시구분코드 - 계약(제외)
	private static final String NOTIC_SPR_CD_GEN_CUST = "70"; // 게시구분코드 - 일반(제외)
	
	/**
	*
	* <pre>
	* 1. MethodName : selectBrndhlList
	* 2. ClassName : BrndhlServiceImpl
	* 3. Comment : 전문관 목록 조회
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2023.03.14.
	* </pre>
	*
	* @param searchInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult selectBrndhlList(Map<String, Object> paramInfo, OdOrderComm odComm) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		Map<String, Object> paramMap = CommonUtil.toCamelCaseMap(paramInfo);
		paramMap.put("sesId", StringUtil.getString(odComm.getSession().get("SES_ID")));
		
		List<Map<String,Object>> list = new ArrayList<>();
		
		int totalCount = brndhlDao.selectBrndhlListCnt(paramMap);

		if( totalCount > 0 ) {
			list = brndhlDao.selectBrndhlList(paramMap);
		}

		//리턴값 set
		result.addVariable( "totalCount", totalCount );
		result.addDataSet("ds_output1", list);
		
		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : updateBrndhlDispSo
	* 2. ClassName : BrndhlServiceImpl
	* 3. Comment : 전문관 순서 저장
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2023.03.14.
	* </pre>
	*
	* @param saveInfoList
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult updateBrndhlDispSo(List<Map<String, Object>> paramInfoList) throws Exception {
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

				rtn += brndhlDao.updateBrndhlDispSo(paramMap);
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
	* 1. MethodName : selectBrndhlInfo
	* 2. ClassName : BrndhlServiceImpl
	* 3. Comment : 전문관 상세 조회
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2023.03.14.
	* </pre>
	*
	* @param searchInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult selectBrndhlInfo(Map<String, Object> paramInfo) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(paramInfo);

		Map<String,Object> brndhlDtlMap = brndhlDao.selectBrndhlInfo(searchMap);
		List<Map<String,Object>> oprUnitList = brndhlDao.selectBrndhlOprUnitList(searchMap);
		List<Map<String,Object>> brndhlCatgDtlList = brndhlDao.selectBrndhlCatgDtlList(searchMap);
		List<Map<String,Object>> brndhlCatgPrdDtlList = brndhlDao.selectBrndhlCatgPrdDtlList(searchMap);
		
		//리턴값 set
		result.addDataSet("ds_output1", brndhlDtlMap);
		result.addDataSet("ds_output2", oprUnitList);
		result.addDataSet("ds_output3", brndhlCatgDtlList);
		result.addDataSet("ds_output4", brndhlCatgPrdDtlList);		
		
		return result;
	}
	
	/**
	*
	* <pre>
	* 1. MethodName : saveBrndhlInfo
	* 2. ClassName : BrndhlServiceImpl
	* 3. Comment : 전문관 저장
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2023.03.14.
	* </pre>
	*
	* @param paramInfo, oprUnitInfoList
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult saveBrndhlInfo(Map<String, Object> paramInfo, List<Map<String, Object>> oprUnitInfoList
			, List<Map<String, Object>> saveBrndhlCatgDtlMapList, List<Map<String, Object>> saveBrndhlCatgPrdDtlMapList) throws Exception {
		NexacroResult result = new NexacroResult();
		int rtn = 0;
		Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
		Map<String, Object> paramMap = CommonUtil.toCamelCaseMap(paramInfo);

		String expsNoticSprCd = StringUtil.getString(paramMap.get("expsNoticSprCd"));

		String oprtrId = "";
        String msg = "";

		try {
			if (sessionsAdmin != null) {
				oprtrId = StringUtil.getString(sessionsAdmin.get("OPRTR_ID"));
			}
			paramMap.put("regpsnId", oprtrId);
			paramMap.put("updpsnId", oprtrId);
			
			String sBrndhlSeq = StringUtil.getString(paramMap.get("brndhlSeq"));
			
			if(StringUtil.getString(paramMap.get("brndhlSeq")).equals("")) {
				// 시퀀스 값 조회
				sBrndhlSeq = brndhlDao.selectBrndhlSeq(paramMap);
                
                paramMap.put("brndhlSeq", sBrndhlSeq);
                
				rtn = brndhlDao.insertBrndhlDtl(paramMap);
			} else {
				// docRegId 가 빈 값이 아니고, atflNm이 빈 값이면 지운걸로 판단
				if (!Objects.equals(StringUtil.getString(paramMap.get("docRegId")), "") && Objects.equals(StringUtil.getString(paramMap.get("atflNm")), "") ) {
					saComService.deleteCoAtflFile(StringUtil.getString(paramMap.get("docRegId")), StringUtil.getString(paramMap.get("docRegSeq")), StringUtil.getString(paramMap.get("atflStorPath")), StringUtil.getString(paramMap.get("oriAtflNm")));
					paramMap.put("docRegId", null);
				}

				rtn = brndhlDao.updateBrndhlDtl(paramMap);
			}

			if(rtn > 0) {	// SSP-2971
				if(expsNoticSprCd.equals(NOTIC_SPR_CD_OPR) || expsNoticSprCd.equals(NOTIC_SPR_CD_OPR_EXCPT)
					|| expsNoticSprCd.equals(NOTIC_SPR_CD_CONT_CUST) || expsNoticSprCd.equals(NOTIC_SPR_CD_GEN_CUST)) {
					
					for(Map<String, Object> oprUnitInfo : oprUnitInfoList ) {
						int dataSetRowtype = StringUtil.getInt(oprUnitInfo.get("DataSetRowType")); // -- 1 : 추가, 2 : 수정, 3 : 삭제
						Map<String, Object> oprUnitMap = CommonUtil.toCamelCaseMap(oprUnitInfo);
						
						if(dataSetRowtype == 3) {
    						oprUnitMap.put("brndhlSeq", sBrndhlSeq);
							brndhlDao.deleteBrndhlOprUnit(oprUnitMap);
						} else if(dataSetRowtype == 1) {
							 oprUnitMap.put("brndhlSeq", sBrndhlSeq);
							 oprUnitMap.put("regpsnId", oprtrId);
							 oprUnitMap.put("updpsnId", oprtrId);
							 brndhlDao.insertBrndhlOprUnit(oprUnitMap);
					    }
					}
				}
				
				if(saveBrndhlCatgDtlMapList != null) {
    				// 카테고리 삭제.
    	            for( Map<String, Object> data : saveBrndhlCatgDtlMapList ) {
    	                int saveType = StringUtil.getInt(data.get("DataSetRowType"));
    
    	                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
    	                
    	                saveMap.put("brndhlSeq", sBrndhlSeq);
    	            	saveMap.put("regpsnId", oprtrId);
    	            	saveMap.put("updpsnId", oprtrId);
    	    			
    	                if( saveType == 3 ) { // 전문관 카테고리 정보 삭제
    	                    rtn = brndhlDao.deleteBrndhlCatgDtl(saveMap);
    	                    msg = "전문관 카테고리 정보 삭제";                    
    	                }
    	            }
    	            
    	            // 카테고리 등록/수정.
    	            for( Map<String, Object> data : saveBrndhlCatgDtlMapList ) {
    	                int saveType = StringUtil.getInt(data.get("DataSetRowType"));

    	                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

    	                String sBrndhlCatgSeq = StringUtil.getString(saveMap.get("brndhlCatgSeq"));
    	                
    	                saveMap.put("brndhlSeq", sBrndhlSeq);
    	            	saveMap.put("regpsnId", oprtrId);
    	            	saveMap.put("updpsnId", oprtrId);
    	    			
    	                if( saveType == 1) { // 등록
    	                	// 전문관 카테고리 시퀀스 값 조회
    	                	String sBrndhlCatgSeqNew = brndhlDao.selectBrndhlCatgDtlSeq(saveMap);

    	                    for( Map<String, Object> data2 : saveBrndhlCatgPrdDtlMapList ) {
    	                        Map<String, Object> saveMap2 = CommonUtil.toCamelCaseMap(data2);

    	                        String sBrndhlCatgSeq2 = StringUtil.getString(saveMap2.get("brndhlCatgSeq"));
    	                        
    	                        if (sBrndhlCatgSeq2.equals(sBrndhlCatgSeq)) {
    	                        	saveMap2.put("brndhlSeq", sBrndhlSeq);
    	                            saveMap2.put("brndhlCatgSeq", sBrndhlCatgSeqNew);
    	                            saveMap2.put("regpsnId", oprtrId);
    	                            saveMap2.put("updpsnId", oprtrId);

    	                        	// 전문관 카테고리 상품 정보 정보 등록
    	                            rtn = brndhlDao.insertBrndhlCatgPrdDtl(saveMap2);
    	                            msg = "전문관 카테고리 상품 정보 등록";
    	                        }
    	                    }

    	                    saveMap.put("brndhlCatgSeq", sBrndhlCatgSeqNew);
    	                	
    	                	// 전문관 카테고리 정보 등록
    	                    rtn = brndhlDao.insertBrndhlCatgDtl(saveMap);
    	                    msg = "전문관 카테고리 정보 등록";
    	            	} else if( saveType == 2 ) { // 수정
    	            		// 전문관 카테고리 정보 수정
    	                    rtn = brndhlDao.updateBrndhlCatgDtl(saveMap);
    	                    msg = "전문관 카테고리 정보 수정";
    	                }
    	            }
				}

				if(saveBrndhlCatgPrdDtlMapList != null) {
					// 카티고리 상품 삭제.
		            for( Map<String, Object> data : saveBrndhlCatgPrdDtlMapList ) {
		                int saveType = StringUtil.getInt(data.get("DataSetRowType"));

		                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
		                
		                saveMap.put("brndhlSeq", sBrndhlSeq);
		            	saveMap.put("regpsnId", oprtrId);
		            	saveMap.put("updpsnId", oprtrId);
		    			
		                if( saveType == 3 ) { // 삭제
		                	// 전문관 카테고리 상품 정보 삭제
		                    rtn = brndhlDao.deleteBrndhlCatgPrdDtl(saveMap);
		                    msg = "전문관 카테고리 상품 정보 삭제";                    
		                }
		            }

		            // 전문관 상품 정보 등록/수정.
		            for( Map<String, Object> data : saveBrndhlCatgPrdDtlMapList ) {
		                int saveType = StringUtil.getInt(data.get("DataSetRowType"));

		                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

		                saveMap.put("brndhlSeq", sBrndhlSeq);
		            	saveMap.put("regpsnId", oprtrId);
		            	saveMap.put("updpsnId", oprtrId);

		                if( saveType == 1) { // 등록
		                    String sBrndhlCatgSeq = StringUtil.getString(saveMap.get("brndhlCatgSeq"));
		                    
		                    if (!"C".equals(sBrndhlCatgSeq.substring(0, 1))) {
		                    	// 전문관 메인 노출 상품 정보 등록
		                        rtn = brndhlDao.insertBrndhlCatgPrdDtl(saveMap);
		                        msg = "전문관 상품 정보 등록";  
		                    }
		            	} else if( saveType == 2 ) {
		                	// 수정
		                }
		            }
				}
				
			}
			
			 if( rtn < 0 ) {
				 throw new MessageException(-100, msg + " 실패");
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
	* 1. MethodName : deleteBrndhlInfo
	* 2. ClassName : BrndhlServiceImpl
	* 3. Comment : 전문관 삭제
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2023.03.14
	* </pre>
	*
	* @param paramInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult deleteBrndhlInfo(Map<String, Object> paramInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		int rtn = 0;

		try {
			Map<String, Object> paramMap = CommonUtil.toCamelCaseMap(paramInfo);

			rtn = brndhlDao.deleteBrndhlInfo(paramMap); // 기본정보 삭제
			
			if(rtn > 0) {
				brndhlDao.deleteBrndhlCatgDtl(paramMap); // 카테고리 삭제
				brndhlDao.deleteBrndhlCatgPrdDtl(paramMap); // 카테고리 상품 삭제
				brndhlDao.deleteBrndhlOprUnit(paramMap); // 운영단위 삭제
			} else {
				throw new MessageException(-100, "삭제에 실패하였습니다");
			}

			if(!Objects.equals(StringUtil.getString(paramMap.get("docRegId")), "")) {
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
	
	/**
	*
	* <pre>
	* 1. MethodName : selectBrndhlList
	* 2. ClassName : BrndhlServiceImpl
	* 3. Comment : 전문관 엑셀 다운 목록 조회
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2023.03.14.
	* </pre>
	*
	* @param searchInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult selectExcelBrndhlList(Map<String, Object> paramInfo) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		Map<String, Object> paramMap = CommonUtil.toCamelCaseMap(paramInfo);
		
		List<Map<String,Object>> list = new ArrayList<>();

		list = brndhlDao.selectExcelBrndhlList(paramMap);

		//리턴값 set
		result.addDataSet("ds_output1", list);
		
		return result;
	}
}