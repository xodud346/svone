package com.ssp.bo.rd.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pr.controller.PrCategoryController;
import com.ssp.bo.pr.service.impl.PrCategoryServiceImpl;
import com.ssp.bo.rd.dao.RdCategoryDao;
import com.ssp.bo.rd.service.FileUploadDowloadService;
import com.ssp.bo.rd.service.RdCategoryService;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.DateUtil;
import com.ssp.core.util.StringUtil;
/**
 * <pre>
 * @title  R&D카테고리 관리
 * @package com.ssp.bo.pr.service.impl
 * </pre>
 * @author 김진섭
 * @since 2022.03.22
 * @version 1.0
 * @see PrCategoryServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Service("RdCategoryService")
public class RdCategoryServiceImpl implements RdCategoryService {
	private final Logger log = LoggerFactory.getLogger(PrCategoryController.class);
	@Autowired
	private RdCategoryDao categoryDao;
	
	@Resource(name = "propertiesService")
	private SspPropertyService rdopertiesService;
	
    @Resource(name = "fileUploadDowloadService")
    private FileUploadDowloadService fileUploadDowloadService;

	 /**
     *  R&D카테고리관리 조회(selectCategoryList)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectCategoryList(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records1 = categoryDao.selectCategoryList(searchMap);
        List<Map> records2 = categoryDao.selectSubCategoryList(searchMap);

        result.addDataSet("ds_output1",records1);
        result.addDataSet("ds_output2",records2);

        return result;
    }	
    
	
    /**
     * R&D카테고리관리 상세조회 (selectCategory)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectCategory(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records1 = categoryDao.selectCategory(searchMap);
        List<Map> records2 = categoryDao.selectSubCategoryList(searchMap);

        result.addDataSet("ds_output1",records1);
        result.addDataSet("ds_output2",records2);

        if(records1.size() > 0)
        {
        	if(records1.get(0).get("DISP_PRD_FILE_ATTC_ID") != null)
        	{
		        searchMap.put("DOC_REG_ID",records1.get(0).get("DISP_PRD_FILE_ATTC_ID").toString());

		        List<Map> records3 = categoryDao.selectAttcFileDtlsInq(searchMap);

		        result.addDataSet("ds_saveFileList",records3);
        	}
        }

        return result;
    }
    
    /**
     * 카테고리명 중복체크 조회(selectRdCategoryDuplicateCheck)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectRdCategoryDuplicateCheck(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();
        String strCategoryDupChk = "";
        if(searchMap.get("PRD_CLCD") == null) {
        	strCategoryDupChk =  categoryDao.selectRdCategoryDuplicateCheckNull(searchMap);
		}else {
			strCategoryDupChk = categoryDao.selectRdCategoryDuplicateCheck(searchMap);
		}
        result.addVariable("rdCategoryDupChk",strCategoryDupChk);

        return result;
    }
    

    /**
     * R&D카테고리 상세저장 조회(saveCategoryInfo)
     * @param input
     * @return
     * @throws Exception
     */
    
    public NexacroResult saveCategoryInfo(List<Map<String, Object>> commandMap
                                         , List<Map<String, Object>> mainList
                                         , List<Map<String, Object>> subList
                                         , List<Map<String, Object>> fileMap
                                         , Map<String, Object> userInfo
                                         , String contextRealPath) throws Exception {
		NexacroResult result = new NexacroResult();

		log.debug("commandMap_HHHH==>:{}",commandMap);
		
       int procCnt = 0; //DB 처리건수
       
       String msg  = "";
       String cocd = rdopertiesService.getString("ssp.cocd");
       
       if(commandMap != null && commandMap.size() > 0) {
	        for (Map<String, Object> data : commandMap) {
	        	int saveType = StringUtil.getInt(data.get("DataSetRowType"));
	        	
		        if( saveType == 2 ) {           // 수정  
		        	data.put("CO_CD", cocd); 
		           	data.put("USER_ID", StringUtil.getString(userInfo.get("EMP_NO")));
		            categoryDao.updateCategory(data);
		            procCnt++;
		            msg = "수정";
		        }
	        }
       }
       
       if(mainList != null && mainList.size() > 0) {
	        for (Map<String, Object> mainData : mainList) {
	        	int saveMainType = StringUtil.getInt(mainData.get("DataSetRowType"));
	        	
	        	if (saveMainType == 3) {	// 삭제
	        		mainData.put("CO_CD", cocd); 
	        		mainData.put("USER_ID", StringUtil.getString(userInfo.get("EMP_NO")));
	        		categoryDao.deleteCategory(mainData);
	        		procCnt++;
	        		msg = "삭제";
	        	}
	        	
	        }
       }
       if(subList != null && subList.size() > 0) {
	        for (Map<String, Object> subData : subList) {
	        	int saveSubType = StringUtil.getInt(subData.get("DataSetRowType"));
	        	
	    		if (saveSubType == 2) {		// 수정
	    			subData.put("CO_CD", cocd); 
	    			subData.put("USER_ID", StringUtil.getString(userInfo.get("EMP_NO")));
	    			categoryDao.updateCategorySrtSo(subData);
	    			procCnt++;
	    			msg = "순서수정";
	    		}
	        }
       }

       // 이미지 & 첨부파일 로직 처리
       if(fileMap.size() > 0)
       {
       	// 이미지&첨부파일 삭제&수정 함수 호출
       	fileUploadDowloadService.saveMultiFileDelUpdate(fileMap, contextRealPath);
       }

       if( procCnt == 0 ) throw new Exception("R&D카테고리 생성 " + msg + " 실패");
       
       return result;
	}
    
    /**
     * R&D하위 카테고리 팝업 생성 저장(saveCategory)
     * @param input
     * @return
     * @throws Exception
     */
	public NexacroResult saveCategory(Map<String, Object> commandMap, List<Map<String, Object>> fileMap,  Map<String, Object> userInfo, String contextRealPath) throws Exception {
		NexacroResult result = new NexacroResult();

		
        int saveType = StringUtil.getInt(commandMap.get("DataSetRowType"));
        int rtn      = 0;
        String msg   = "";
        String cocd  = rdopertiesService.getString("ssp.cocd");
       
        String prdClcd = selectPrdClcdSeq(commandMap);
        
        commandMap.put("PRD_CLCD", prdClcd);
        commandMap.put("CO_CD",    cocd); 
        commandMap.put("USER_ID",  StringUtil.getString(userInfo.get("EMP_NO")));
    	
        if( saveType == 1 || saveType == 2 ) {           // 신규  
            rtn = categoryDao.insertCategory(commandMap);
            
            String prClsfChrpsnId = StringUtil.getString(commandMap, "PR_PRD_CLSF_CHRPSN_ID");
            String mdClsfChrpsnId = StringUtil.getString(commandMap, "MD_PRD_CLSF_CHRPSN_ID");
            
            if(!prClsfChrpsnId.isEmpty()) {
	            // 상품담담자
	            commandMap.put("PRD_CLSF_CHRPSN_ID", prClsfChrpsnId);
	            commandMap.put("PRD_CLSF_CHRPSN_TP_CD", "10");
	            rtn = categoryDao.insertPrdClsfChrpsn(commandMap);
            }
            
            if(!mdClsfChrpsnId.isEmpty()) {
	            // 구매담당자
	            commandMap.put("PRD_CLSF_CHRPSN_ID", mdClsfChrpsnId);
	            commandMap.put("PRD_CLSF_CHRPSN_TP_CD", "30");
	            rtn = categoryDao.insertPrdClsfChrpsn(commandMap);
            }
            
            //## 사전설정매익률 생성 ##
            try {
    			
				//공통 카테고리 계획율 조회
				Map<String, Object> searchMap = new HashMap<String, Object>();
				searchMap.put("prdClcd", commandMap.get("PRD_CLCD"));
				searchMap.put("useYn",  "Y");
				searchMap.put("strDtm", DateUtil.getToday());
				searchMap.put("endDtm", "99991231");
				

            	Map<String, Object> detail = categoryDao.selectPlnPrfrtDetail(searchMap);
            	
   				if(detail == null){
   					
    				categoryDao.insertPlnPrfrt(commandMap);
    			
    			} else {
    			
    				//공통 카테고리 계획매익율 입력
    				commandMap.put("useYn", "N");
    				categoryDao.updatePlnPrfrt(commandMap);
    				
    				commandMap.put("useYn", "Y");
    				categoryDao.insertPlnPrfrt(commandMap);
    				
    			}
    		
    		}catch ( MessageException e ) {
                if( e.getCode() == -100 ) {
                    result.setErrorCode(e.getCode());
                    result.setErrorMsg(e.getMessage());
                    return result;
                } else {
                    throw e;
                }
    		}

            // 이미지 & 첨부파일 로직 처리
            if(fileMap.size() > 0)
            {
            	// 이미지&첨부파일 삭제&수정 함수 호출
            	fileUploadDowloadService.saveMultiFileDelUpdate(fileMap, contextRealPath);
            }

            msg = "등록";
        }
        if( rtn <= 0 ) throw new Exception("R&D카테고리 생성 " + msg + " 실패");
        
        result.addVariable("prdClcd" , prdClcd);
        return result;
	}    
	  /**
     * R&D하위 시퀀서 생성 (selectPrdClcdSeq)
     * @param input
     * @return
     * @throws Exception
     */
	public String selectPrdClcdSeq(Map<String, Object> searchMap) throws Exception{
		String hrnkPrdClcd = StringUtil.getString(searchMap, "HRNK_PRD_CLCD");
		String prdClcd = null;
		
		if(hrnkPrdClcd.isEmpty()) {
			prdClcd = categoryDao.selectPrdClcdSeq1(searchMap);	// 대분류 카테고리 PRD_CLCD
		}else {
			prdClcd = categoryDao.selectPrdClcdSeq2(searchMap); // 하위 카테고리 PRD_CLCD
		}
		
		return prdClcd; 
	}
 	
	/**
     * 상품군 조회(selectPrdAttrList)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectPrdAttrList(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records = categoryDao.selectPrdAttrList(searchMap);

        result.addDataSet("ds_output",  records);

        return result;
    }
		
	/**
     * 상품군 사용 SSP속성 조회(selectClsfAttrMappList)
     * @param input
     * @return
     * @throws Exception
     */
	
    @Override
    public NexacroResult selectClsfAttrMappList(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records = categoryDao.selectClsfAttrMappList(searchMap);

        result.addDataSet("ds_output",  records);
       
        return result;
    }


	 /**
     * 상품군 사용 SSP속성 저장/수정/삭제(saveClsfAttrMapp)
     * @param input
     * @return
     * @throws Exception
     */

    @Override
    public NexacroResult saveClsfAttrMapp(List<Map<String, Object>> commandMap, Map<String, Object> userInfo) throws Exception {
		NexacroResult result = new NexacroResult();

        int rtn      = 0;
        String msg = "";
        String cocd = rdopertiesService.getString("ssp.cocd");
        
        if(commandMap != null && commandMap.size() > 0) {
	        for (Map<String, Object> data : commandMap) {
	        	int saveType = StringUtil.getInt(data.get("DataSetRowType"));
	        	
	        	data.put("CO_CD", cocd); 
	        	data.put("USER_ID",  StringUtil.getString(userInfo.get("EMP_NO")));
	        	data.put("INTG_ATTR_SPR_CD",  "20");	//고정
	        	data.put("MRO_PRD_CLCD",  "*");	//고정
	        	//신규 속성정렬 정보	
                rtn += categoryDao.updatePrdClsfAttrSrtInfo(data);
                
	        	if( saveType == 1 ) {           // 수정  
		            rtn += categoryDao.insertClsfAttrMapp(data);
		            msg = "저장";
		        }else if(saveType == 2) {
		        	rtn += categoryDao.updateClsfAttrMapp(data);
		        	msg = "수정";
		        }else if(saveType == 3) {
		        	rtn += categoryDao.deleteClsfAttrMapp(data);
		        	rtn += categoryDao.deletePrdClsfAttrSrtInfo(data);
		        	msg = "삭제";
		        }
	        }
        }
        
        if( rtn <= 0 ) throw new Exception("상품군 사용 SSP속성 " + msg + " 실패");
        
        return result;
    }
	
	
	
	public int selectPrdClsfNm(Map<String, Object> searchMap) throws Exception{ 
		return categoryDao.selectPrdClsfNm(searchMap); 
	}
	
	
	/**
     * 신규 저장 코드체크여부 조회(selectCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectCodeChkYn(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records = categoryDao.selectCodeChkYn(searchMap);

        result.addDataSet("ds_codeChkYn",  records);

        return result;
    }
    
    /**
     * 수정 코드체크여부 조회(selectUpCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectUpCodeChkYn(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records = categoryDao.selectUpCodeChkYn(searchMap);

        result.addDataSet("ds_codeChkYn",  records);

        return result;
    }

}
