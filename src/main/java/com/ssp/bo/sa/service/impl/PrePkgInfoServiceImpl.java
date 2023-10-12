package com.ssp.bo.sa.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.co.service.impl.CoComCdMngServiceImpl;
import com.ssp.bo.sa.dao.PrePkgInfoDao;
import com.ssp.bo.sa.service.PrePkgInfoService;
import com.ssp.bo.sa.service.SaComService;
import com.ssp.core.co.dao.CoCommonDao;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title 프리패키지 Serviceimpl
 * @package com.ssp.bo.sample.service.impl
 * </pre>
 * 
 * @author 박진원
 * @since 2022.02.25.
 * @version 1.0
 * @see PrePkgInfoServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.25.	박진원		최초작성
 */
@Service("PrePkgInfoService")
public class PrePkgInfoServiceImpl implements PrePkgInfoService {
	
	@Resource(name = "PrePkgInfoDao")
	private PrePkgInfoDao PrePkgInfoDao;
	
	@Autowired
	protected SspPropertyService propertyService;

	@Autowired
	private SaComService saComService;
	
	@Autowired
	private CoCommonDao coCommonDao;
	
    private final Logger logger = LoggerFactory.getLogger(CoComCdMngServiceImpl.class);

	/**
	 * 프리패키지 목록 조회
	 */
	@Override
	public List<Map<String,Object>> selectPrePkgInfoList(Map<String, Object> searchMap) throws Exception {
		return PrePkgInfoDao.selectPrePkgInfoList(searchMap);
	}

	/**
	 * 프리패키지 목록 건수 조회
	 */
	@Override
	public int selectPrePkgInfoListCount(Map<String, Object> searchMap) throws Exception {
		return PrePkgInfoDao.selectPrePkgInfoListCount(searchMap);
	}

	/**
	 * 프리패키지 상세
	 */
	@Override
	public List<Map<String,Object>> selectPrePkgInfo(Map<String, Object> searchMap) throws Exception {
		return PrePkgInfoDao.selectPrePkgInfo(searchMap);
	}

	/**
	 * 프리패키지 저장
	 */
	@Override
	public NexacroResult savePrePkgInfo(Map<String, Object> savePrePkgInfoMap
										, List<Map<String, Object>> savePrePkgIddtDtlMapList
										, List<Map<String, Object>> savePrePkgCatgDtlMapList
										, List<Map<String, Object>> savePrePkgPrdDtlMapList
										) throws Exception {
		
        NexacroResult result = new NexacroResult();

        try {
            int rtn = 0;
            String msg = "";
    		
            String sCoCd = StringUtil.getString(savePrePkgInfoMap.get("coCd"));
            String sPrePkgSeq = StringUtil.getString(savePrePkgInfoMap.get("prePkgSeq"));
            String sCatgUseYn = StringUtil.getString(savePrePkgInfoMap.get("catgUseYn"));
            String sRegpsnId = StringUtil.getString(savePrePkgInfoMap.get("regpsnId"));
            String sUpdpsnId = StringUtil.getString(savePrePkgInfoMap.get("updpsnId"));
    		
            /* 프리패키지 등록, 수정 */
            if ("".equals(sPrePkgSeq)) { 	
            	sPrePkgSeq = PrePkgInfoDao.selectPrePkgInfoSeq(savePrePkgInfoMap);
                savePrePkgInfoMap.put("prePkgSeq", sPrePkgSeq);
            	
                rtn = PrePkgInfoDao.insertPrePkgInfo(savePrePkgInfoMap);
                msg = "프리패키지 기본 정보 등록";    
                
            } else {
                rtn = PrePkgInfoDao.updatePrePkgInfo(savePrePkgInfoMap);
                msg = "프리패키지 기본 정보 수정";            	
            }
            
            if(rtn > 0) { // 프리패키지 등록 or 수정 성공시
            	
            	/* 산업군 등록, 삭제 */
            	if(savePrePkgIddtDtlMapList != null) { 
            		for(Map<String, Object> data : savePrePkgIddtDtlMapList) {
            			int saveType = StringUtil.getInt(data.get("DataSetRowType"));
            			
            			Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
            			
            			saveMap.put("prePkgSeq", sPrePkgSeq);
            			saveMap.put("regpsnId", sRegpsnId);
            			saveMap.put("updpsnId", sUpdpsnId);
            			
            			if(saveType == 1) {
            				rtn = PrePkgInfoDao.insertPrePkgIddtDtl(saveMap);
            				msg = "프리패키지 산업군상세 정보 등록";   
            				
            			} else if(saveType == 3) {
            				rtn = PrePkgInfoDao.deletePrePkgIddtDtl(saveMap);
            				msg = "프리패키지 산업군상세 정보 삭제";   
            			}
            		}
            	}
            	
            	/* 카테고리 등록, 수정, 삭제 */
            	/* 카테고리사용, 카테고리미사용인 경우 */
            	if(savePrePkgCatgDtlMapList != null || "N".equals(sCatgUseYn)) { 
            		// 사전 작업
            		// 1.카테고리 사용하는 경우 
            		if("Y".equals(sCatgUseYn)) {          			
            			// 1-1.기존의 카테고리미사용 상품데이터 삭제
            			savePrePkgInfoMap.put("prePkgCatgSeq", 0);
						rtn = PrePkgInfoDao.deletePrePkgPrdDtl(savePrePkgInfoMap);
						msg = "프리패키지 기존 카테고리미사용 상품 정보 삭제";
						
					// 2.카테고리 미사용인 경우		
            		} else {
            			Map<String,Object> searchMap = new HashMap<String, Object>();
            			searchMap.put("coCd", sCoCd);
            			searchMap.put("prePkgSeq", sPrePkgSeq);
            			
            			List<Map<String,Object>> prePkgCatgList = PrePkgInfoDao.selectPrePkgCatgDtlList(searchMap);
            			
            			// 2-1.기존에 카테고리를 사용해서 카테고리 정보와 상품정보가 있을경우
            			if(prePkgCatgList != null && prePkgCatgList.size() != 0) {
            				for(Map<String, Object> prePkgCatg : prePkgCatgList) {
    	            			// a.기존의 카테고리 상품삭제
                				String prePkgCatgSeq = StringUtil.getString(prePkgCatg.get("PRE_PKG_CATG_SEQ"));
                				searchMap.put("prePkgCatgSeq", prePkgCatgSeq);
                				
    							rtn = PrePkgInfoDao.deletePrePkgPrdDtl(searchMap);
    							msg = "프리패키지 기존 상품 정보 삭제";
    	    					
    	            			// b.기존에 매핑된 카테고리 삭제
    	            			rtn = PrePkgInfoDao.deletePrePkgCatgDtl(searchMap);
    	    					msg = "프리패키지 기존 카테고리 삭제";
                			}
            			}
            		}
            		// 본작업
            		// 1.삭제
            		for(Map<String, Object> data : savePrePkgCatgDtlMapList) {
            			int saveType = StringUtil.getInt(data.get("DataSetRowType"));
        				
        				Map<String,Object> saveMap = CommonUtil.toCamelCaseMap(data);
        				
        				String sPrePkgCatgSeq = StringUtil.getString(saveMap.get("prePkgCatgSeq"));
        				
        				saveMap.put("prePkgSeq", sPrePkgSeq);
        				saveMap.put("regpsnId", sRegpsnId);
        				saveMap.put("updpsnId", sUpdpsnId);
        			
        				if(saveType == 3) {
        					// 카테고리에 매핑된 상품삭제
        					for(Map<String, Object> prdData : savePrePkgPrdDtlMapList) {           					
        						Map<String,Object> prdDataMap = CommonUtil.toCamelCaseMap(prdData);
        						prdDataMap.put("regpsnId", sRegpsnId);
        						prdDataMap.put("updpsnId", sUpdpsnId);
        						
        						rtn = PrePkgInfoDao.deletePrePkgPrdDtl(prdDataMap);
        						msg = "프리패키지 상품 정보 삭제";
        					}
        					// 카테고리 삭제
        					rtn = PrePkgInfoDao.deletePrePkgCatgDtl(saveMap);
        					msg = "프리패키지 카테고리 삭제";
        				}
            		}
            		// 2.등록, 수정
        			for(Map<String, Object> data : savePrePkgCatgDtlMapList) {
        				int saveType = StringUtil.getInt(data.get("DataSetRowType"));
        				
        				Map<String,Object> saveMap = CommonUtil.toCamelCaseMap(data);
        				
        				String sPrePkgCatgSeq = StringUtil.getString(saveMap.get("prePkgCatgSeq"));
        				
        				saveMap.put("prePkgSeq", sPrePkgSeq);
        				saveMap.put("regpsnId", sRegpsnId);
        				saveMap.put("updpsnId", sUpdpsnId);
        				
        				/**
        				 *  카테고리 추가시에는 시퀀스가 존재하지 않기때문에 
        				 *  넥사크로에서 "C + ROWINDEX"형태로 생성하여 넘어온다
        				 *  각 카테고리에 매핑되는 상품들은 등록시에 카테고리시퀀스가 필요하다
        				 *  -> 카테고리 등록시에 상품도 같이 등록한다  
        				 */  
        				if(saveType == 1) {
        					String prePkgCatgSeqNew = PrePkgInfoDao.selectPrePkgCatgSeq(savePrePkgInfoMap);
        					
        					// 상품 등록
        					for(Map<String, Object> prdData : savePrePkgPrdDtlMapList) {
        						Map<String,Object> prdDataMap = CommonUtil.toCamelCaseMap(prdData);
        						String prePkgCatgSeq2 = StringUtil.getString(prdDataMap.get("prePkgCatgSeq"));
        						
        						if(prePkgCatgSeq2.equals(sPrePkgCatgSeq)) {
        							prdDataMap.put("prePkgSeq", sPrePkgSeq);
        							prdDataMap.put("prePkgCatgSeq", prePkgCatgSeqNew);
        							prdDataMap.put("regpsnId", sRegpsnId);
        							prdDataMap.put("updpsnId", sUpdpsnId);
        							
        							rtn = PrePkgInfoDao.insertPrePkgPrdDtl(prdDataMap);
        							msg = "프리패키지 상품 정보 등록";  
        						}
        					}
        					// 카테고리 등록
        					saveMap.put("prePkgCatgSeq", prePkgCatgSeqNew);
        					rtn = PrePkgInfoDao.insertPrePkgCatgDtl(saveMap);
        					msg = "프리패키지 카테고리 등록";
        					
        				} else if(saveType == 2) {
        					rtn = PrePkgInfoDao.updatePrePkgCatgDtl(saveMap);
        					msg = "프리패키지 카테고리 수정";
        				}
        			}
            	}
            	/* 상품 등록, 수정, 삭제 */
            	if(savePrePkgPrdDtlMapList != null) { 
            		// 1.삭제
            		// 삭제를 먼저해야 동일상품을 등록시 PK오류가 안난다.
            		for(Map<String, Object> data : savePrePkgPrdDtlMapList) {
            			int saveType = StringUtil.getInt(data.get("DataSetRowType"));
            			
            			Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
            			
            			saveMap.put("prePkgSeq", sPrePkgSeq);
            			saveMap.put("regpsnId", sRegpsnId);
            			saveMap.put("updpsnId", sUpdpsnId);
            			
            			if(saveType == 3) {
            				rtn = PrePkgInfoDao.deletePrePkgPrdDtl(saveMap);
            				msg = "프리패키지 상품 정보 삭제"; 
            			} 
            		}	
            		// 2.등록,수정
            		for(Map<String, Object> data : savePrePkgPrdDtlMapList) {
            			int saveType = StringUtil.getInt(data.get("DataSetRowType"));
            			
            			Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
            			
            			saveMap.put("prePkgSeq", sPrePkgSeq);
            			saveMap.put("regpsnId", sRegpsnId);
            			saveMap.put("updpsnId", sUpdpsnId);
            			
            			// 상품등록의 경우 최초에 카테고리가 생성될때 같이 저장된다.
            			if(saveType == 1) {
            				String sPrePkgCatgSeq = StringUtil.getString(saveMap.get("prePkgCatgSeq"));
            				
            				// 임시시퀀스(C + ROWNUMBER)가 아닌 경우만 저장한다.
            				if(!sPrePkgCatgSeq.startsWith("C")) {
            					rtn = PrePkgInfoDao.insertPrePkgPrdDtl(saveMap);
            					msg = "프리패키지 상품 정보 등록";  
            				}
            			} else if(saveType == 2) {
            				rtn = PrePkgInfoDao.updatePrePkgPrdDtl(saveMap);
            				msg = "프리패키지 상품 정보 수정";  
            			}  
            		}
            	}
            }
            if(rtn < 0) {
            	throw new MessageException(-100, msg + " 실패");
            }
            
		} catch (MessageException e) {
            logger.info("result==>" + e.getCode());
            logger.info("result==>" + e.getMessage());

            if(e.getCode() == -100) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly(); 
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
	 * 프리패키지 삭제
	 */
	@Override
	public NexacroResult deletePrePkgInfo(Map<String, Object> deleteMap) throws Exception {
		NexacroResult result = new NexacroResult();
		int rtn = 0;

		try {
			Map<String, Object> paramMap = CommonUtil.toCamelCaseMap(deleteMap);

			rtn = PrePkgInfoDao.deletePrePkgInfo(paramMap); // 기본정보 삭제
			
			if(rtn > 0) {
				PrePkgInfoDao.deletePrePkgIddtDtl(paramMap); // 산업군 삭제
				PrePkgInfoDao.deletePrePkgCatgDtl(paramMap); // 카테고리 삭제
				PrePkgInfoDao.deletePrePkgPrdDtl(paramMap); // 카테고리 상품 삭제
			} else {
				throw new MessageException(-100, "삭제에 실패하였습니다");
			}

			if(!Objects.equals(StringUtil.getString(paramMap.get("docRegId")), "")) {
				String contextRealPath = propertyService.getString("file.path.root");

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
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
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
	 * 프리패키지 산업군 조회
	 */
	@Override
	public List<Map<String,Object>> selectPrePkgIddtDtlList(Map<String, Object> searchMap) throws Exception {
		return PrePkgInfoDao.selectPrePkgIddtDtlList(searchMap);
	}
	
	/**
	 * 프리패키지 카테고리 조회
	 */
	@Override
	public List<Map<String, Object>> selectPrePkgCatgDtlList(Map<String, Object> searchMap) throws Exception{
		return PrePkgInfoDao.selectPrePkgCatgDtlList(searchMap);
	}
	
	/**
	 * 프리패키지 상품 조회
	 */
	@Override
	public List<Map<String,Object>> selectPrePkgPrdDtlList(Map<String, Object> searchMap) throws Exception {
		return PrePkgInfoDao.selectPrePkgPrdDtlList(searchMap);
	}	
	
	
	
	/**
	 * 프리패키지 순서저장
	 */
	@Override
	public NexacroResult updatePrePkgExpsSo(List<Map<String, Object>> saveList, Map<String, Object> typeMap) throws Exception {
		NexacroResult result = new NexacroResult();
		
		Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
		
		int rtn = 0;
		String oprtrId = "";
		
		try {
			if(sessionsAdmin != null) {
				oprtrId = StringUtil.getString(sessionsAdmin.get("OPRTR_ID"));
			}			
			String typeNm = StringUtil.getString(typeMap.get("TYPE_NM"));
			
			for(Map<String, Object> saveMap : saveList) {
				saveMap.put("OPRTR_ID", oprtrId);
			
				if("prePkgList".equals(typeNm)) {
					rtn += PrePkgInfoDao.updatePrePkgExpsSo(saveMap);
					
				} else if("prePkgPrd".equals(typeNm)) {
					rtn += PrePkgInfoDao.updatePrePkgPrdExpsSo(saveMap);
				} 
			}			
			if(rtn < 0) {
				throw new MessageException(-200, "순서 저장에 실패하였습니다");
			}
			
		} catch(MessageException e) {
			if(e.getCode() == -200) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			} else {
				throw e;
			}
		}				
		return result;
	}
	
	/** SSP-2111 : 엑셀용 프리패키지 목록 및 상세 조회 */
	@Override
	public List<Map<String,Object>> selectPrePkgInfoDtlForExcel(List<Map<String,Object>> list) throws Exception {
				
		List<String> seqList = list.stream().map(m -> m.get("PRE_PKG_SEQ").toString()).collect(Collectors.toList());
		Map<String, List<String>> seqMap = new HashMap<String, List<String>>();
		seqMap.put("seqList", seqList);
		return PrePkgInfoDao.selectPrePkgInfoDtlForExcel(seqMap);
		
//		List<Map<String, Object>> prePkgInfoExcel = new ArrayList<Map<String,Object>>();
//		
//		for(Map<String,Object> map : list) {	
//			
//			Map<String,Object> seqMap = new HashMap<String,Object>();			
//			seqMap.put("prePkgSeq", StringUtil.getString(map.get("PRE_PKG_SEQ")));
//			List<Map<String,Object>> prePkgDtl = PrePkgInfoDao.selectPrePkgInfoDtlForExcel(seqMap);
//			prePkgInfoExcel.addAll(prePkgDtl);
//			
//		}
//		return prePkgInfoExcel;
		
	}

	
	
}
