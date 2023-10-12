/*------------------------------------------------------------------------------
 * NAME : MsdsMngServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.28  newwhite7
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.util.CollectionUtils;

import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.ssp.bo.rd.dao.MsdsMngDao;
import com.ssp.bo.rd.service.FileUploadDowloadService;
import com.ssp.bo.rd.service.MsdsMngService;
import com.ssp.core.co.dao.CommonDAO;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * @title   MsdsMngServiceImpl
 * @@desc   MSDS관리 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성
 */
@Service("msdsMngService")
public class MsdsMngServiceImpl implements MsdsMngService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "msdsMngDao")
	private MsdsMngDao msdsMngDao;

	@Resource(name = "fileUploadDowloadService")
	private FileUploadDowloadService fileUploadDowloadService;
	
	@Resource(name = "commonDAO")
	private CommonDAO commonDAO;


	/**
	 * MSDS관리 목록 조회
	 *
	 * @param searchMap
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectMsdsMng(
		Map<String, Object> searchMap
		, HttpSession session
	) throws Exception {
		NexacroResult result = new NexacroResult();
		int totalCount = 0;

		searchMap.put("SES_ID", session.getId());

//        int totalCount    = msdsMngDao.selectMsdsMngCount(searchMap);
//        List<Map> records = msdsMngDao.selectMsdsMng(searchMap);
		List<Map> records = msdsMngDao.selectMsdsMng(searchMap);

		if (records != null && records.size() > 0) {
			totalCount = ((BigDecimal) records.get(0).get("TOT_CUNT")).intValue();
		}

		result.addDataSet("ds_master", records);
		result.addVariable("totalCount", totalCount);

		return result;
	}


	/**
     * MSDS관리 상세 조회(selectMsdsMngDtl)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public NexacroResult selectMsdsMngDtl(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		List<Map> records = msdsMngDao.selectMsdsMngDtl(searchMap);
		List<Map> records1 = null;
		
		// <!-- 2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리 -->
		//// if(records.get(0).get("MSDS_ATTC_FILEID") != null && "".equals(records.get(0).get("MSDS_ATTC_FILEID").toString()) == false)
		//{
		//	searchMap.put("DOC_REG_ID", CommUtil.nvl(records.get(0).get("MSDS_ATTC_FILEID")).toString());
		//
		//	// 첨부파일내역 조회
		//	records1 = msdsMngDao.selectAttcFileDtlsInq(searchMap);
		//}
		if (records != null && records.size() > 0) {
			Map<String, Object> info = (Map<String, Object>) records.get(0);
			if ( info != null) {
				String MSDS_ATTC_FILEID = (String) info.get("MSDS_ATTC_FILEID"), LOC_ATTC_FILEID = (String) info.get("LOC_ATTC_FILEID");
				if (   (MSDS_ATTC_FILEID != null && !"".equals(MSDS_ATTC_FILEID.trim()) )
					|| (LOC_ATTC_FILEID  != null && !"".equals(LOC_ATTC_FILEID .trim()) )
				) {
					// 첨부파일내역 조회
					records1 = msdsMngDao.selectAttcFileDtlsInq( info );
				}
				
			}
		}
		// <!-- /2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리 -->
		
		result.addDataSet("ds_master"      , records);
		result.addDataSet("ds_saveFileList", records1);
		
		return result;
	}
	
	
	
	/**
     * 협력사 MSDS정보 중복체크(cprtcpValidation)
     * @param searchMap    
     * @return
     * @throws Exception
     */
	@Override
	public NexacroResult cprtcpValidation(List<Map<String, Object>> searchMap) throws Exception {

		NexacroResult result = new NexacroResult();
		
		Map<String, Object> searchData = searchMap.get(0);
		try {
			int intDupCnt = msdsMngDao.selectMsdsMngDupl(searchData);
      	    if(intDupCnt > 0) {
      	    	throw new MessageException(-200, "");          
      	    } 
		}catch(MessageException e) {
			if( e.getCode() == -200 ) {				
	            result.setErrorCode(e.getCode());
	            result.setErrorMsg(e.getMessage());
	            result.addVariable("existYn","Y");
	            return result;
	        }else {
	        	throw e;
	        }
		}
		result.addVariable("existYn","N");
		return result;
	}
	
	
	
	@Override
	public NexacroResult saveMsdsMng(List<Map<String, Object>> saveMap, Map<String, Object> userInfo,
			List<Map<String, Object>> fileMap, String contextRealPath) throws Exception {
		
		NexacroResult result = new NexacroResult();
       
        int rowType;        
        String recordPKeyValue = "";
        
        try {
	        if(saveMap.size() > 0)
	        {
	             for (int i=0; i < saveMap.size() ; i++)
	             {
	                  Map<String,Object> saveData = saveMap.get(i);
	
	                  rowType = Integer.parseInt(String.valueOf(saveData.get(DataSetRowTypeAccessor.NAME)));
	                  
	                  if (rowType == DataSet.ROW_TYPE_INSERTED)
	                  {	  
	                	  int cprtcpPrdCnt = msdsMngDao.selectCprtcpPrdInfo(saveData);
	                	  
	                	  // 협력사 상품정보 테이블에 데이터가 없다면 (구매정보가 없다면) 에러
	                	  // SSP-480 MSDS 등록은 구매정보가 필수
	                	  if(cprtcpPrdCnt == 0) {
		                	  throw new MessageException(-150, "");
	                	  } else {
	                		  // 데이터가 있다면 (구매정보가 있다면) 업데이트
	                		  saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));
			                  msdsMngDao.updateMsdsMng(saveData);
	                	  }
	                  } 
	                  else if (rowType == DataSet.ROW_TYPE_UPDATED)
	                  {
	                	  saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));
	                	  msdsMngDao.updateMsdsMng(saveData);	
	                  }
	                  
	                  recordPKeyValue = StringUtil.getString(saveData.get("CO_CD")) + "|" +StringUtil.getString(saveData.get("PRD_VIEW_ID")) + "|" + 
	                                    StringUtil.getString(saveData.get("CPRTCP_ID"));
	              }
	        }
	        
	        // 이미지 & 첨부파일 로직 처리
	        if(fileMap.size() > 0)
	        {
	        	// 이미지&첨부파일 삭제&수정 함수 호출
	        	fileUploadDowloadService.saveMultiFileDelUpdate(fileMap, contextRealPath);
	        }
	        
        }catch(MessageException e) {
        	if( e.getCode() == -150 ) {	
        		result.setErrorCode(e.getCode());
        		result.setErrorMsg(e.getMessage());
        		return result;
	        }else {
	        	TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
	        	throw e;
	        }
        }
        result.addVariable("strKeyValue",recordPKeyValue);
        return result;
	}
	
	/**
     * 저장 코드체크여부 조회(selectCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectCodeChkYn(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records = msdsMngDao.selectCodeChkYn(searchMap);

        result.addDataSet("ds_codeChkYn",  records);

        return result;
    }
	
	/**
	 * MSDS 엑셀업로드 후 데이터 처리
	 * @param lsMap
	 * @return
	 * @throws Exception
	 */
	@Transactional
	public int saveSpRdCprtrMsdsLocMultiUpld(Map<String, Object> map) throws Exception {
		return msdsMngDao.saveSpRdCprtrMsdsLocMultiUpld(map);
	}
	
	
	/**
	 * MSDS 엑셀업로드 후 데이터 처리 ->  -> 속도개선을 위해 프로시저 JAVA로 변경 
	 * @param lsMap
	 * @return
	 * @throws Exception
	 */
	@Transactional
	public List<Map<String, Object>>  saveSpRdCprtrMsdsLocMultiUpldReNew(List<Map<String, Object>> lsXlsx, String iUserId) throws Exception {
	
		List<Map<String, Object>> resultList =  new ArrayList<Map<String, Object>>();
		
		// 기존 SSP_APP.SP_RD_CPRTCP_MSDS_LOC_MUTI_FILE_UPLD 프로시저 java 분리 처리
		//트리거 disable
		Map<String, Object> data1 = new HashMap<String, Object>(); 
		//int trCnt = commonDAO.update("MsdsMng.disableTbCoAtflDtlsTriger", data1);
		
		logger.info("lsXlsx.size()  {} ", lsXlsx.size());
		
		for (Map<String, Object> data : lsXlsx) {
			
			Map<String, Object> resultMap = new HashMap<String, Object>();

			data.put("I_USER_ID", iUserId); // session 값 주입.
			String urlOnly = StringUtil.getString(data.get("I_URL_ONLY"));

			Map<String, Object> selectVo = commonDAO.select("MsdsMng.selectPcCprtPrdInfo", data);  //이전정보 조회 
			logger.info("selectVo  {} ", selectVo);
			
			if (!CollectionUtils.isEmpty(selectVo)) { // 값이 존재시 update 처리
				
				data.putAll(selectVo);
								
			
				int upCnt = commonDAO.update("MsdsMng.updateKPcCprtPrdInfo", data);

				String atflNm = StringUtil.getString(data.get("I_ATFL_NM"));
				String locAttcFilenm = StringUtil.getString(data.get("I_LOC_ATTC_FILENM"));
				String vOldExistsMsdsFileYn = StringUtil.getString(data.get("V_OLD_EXISTS_MSDS_FILE_YN"));
				String vOldExistsLocFileYn = StringUtil.getString(data.get("V_OLD_EXISTS_LOC__FILE_YN"));

				if ((!atflNm.equals("") || !locAttcFilenm.equals("")) || vOldExistsMsdsFileYn.equals("Y")) {

					int msdsPicDelCnt = commonDAO.delete("MsdsMng.deleteTbCoAtflDtls", data);
				}

				if (!atflNm.equals("")) {
					
					data.put("U_USER_ID","KUP");
					int msdsPicInsertCnt = commonDAO.insert("MsdsMng.insertTbCoAtflDtls", data);
					int msdsPicInsertMailCnt = commonDAO.insert("MsdsMng.insertTbRdChmMtlChgMailSndBatDtls", data);
				}

				if ((!atflNm.equals("") || !locAttcFilenm.equals("")) || vOldExistsLocFileYn.equals("Y")) {
					data.put("I_ATCH_TP_CD", "9A");
					int locPicDelCnt = commonDAO.delete("MsdsMng.deleteTbCoAtflDtls", data);

				}

				if (!locAttcFilenm.equals("")) {
					data.put("I_ATCH_TP_CD", "9A");
					data.put("U_USER_ID",StringUtil.getString(data.get("I_USER_ID")));
					int locPicInsertCnt = commonDAO.insert("MsdsMng.insertTbCoAtflDtls", data);
				}
				
			
				
				logger.info("upCnt   " + upCnt);
				if (upCnt < 0) {
					// 실패리스트 담기
					resultMap.put("R_PRD_ID", StringUtil.getString(data.get("I_PRD_ID")));
					resultMap.put("R_NM", "(TB_PC_CPRTCP_PRD_INFO .테이블 업데이트 실패)");
				}

			} else { // null 이면 Error 처리
				String prdId = StringUtil.getString(data.get("I_PRD_ID")); 
				String coCd = StringUtil.getString(data.get("I_CO_CD")); 
				String cprtcpId = StringUtil.getString(data.get("I_CPRTCP_ID")); 
				// 실패리스트 담기
				if((!prdId.equals("") || !coCd.equals("") || !cprtcpId.equals("") )){
					resultMap.put("R_PRD_ID", StringUtil.getString(data.get("I_PRD_ID")));
					resultMap.put("R_NM", "(TB_PC_CPRTCP_PRD_INFO .테이블 내역 X)");
				}
				
			}

			if (!resultMap.isEmpty()) {
				resultList.add(resultMap);
			}
			
		}
		//트리거 
		//int trEnCnt = commonDAO.update("MsdsMng.enableTbCoAtflDtlsTriger", data1);
		
		logger.info("resultList  {} ",resultList);
		
		return resultList;
	}
	
	
	
	
}