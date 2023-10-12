package com.ssp.bo.pr.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pc.service.PcPlnPrfrtService;
import com.ssp.bo.pr.controller.PrCategoryController;
import com.ssp.bo.pr.dao.PrCategoryDao;
import com.ssp.bo.pr.service.PrCategoryService;
import com.ssp.bo.rd.service.FileUploadDowloadService;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;
/**
 * <pre>
 * @title  SSP속성 서비스
 * @package com.ssp.bo.pr.service.impl
 * </pre>
 * @author 이원준
 * @since 2022.02.17
 * @version 1.0
 * @see PrCategoryServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 
 */
@Service("PrCategoryService")
public class PrCategoryServiceImpl implements PrCategoryService {
    private final Logger log = LoggerFactory.getLogger(PrCategoryController.class);
    @Autowired
    private PrCategoryDao categoryDao;
    
    @Resource(name = "propertiesService")
    private SspPropertyService propertiesService;
    
    @Resource(name = "pcPlnPrfrtService")
    private PcPlnPrfrtService plnPrfrtService;
    
    @Resource(name = "fileUploadDowloadService")
    private FileUploadDowloadService fileUploadDowloadService;

    /**
     * <pre>
     * 1. MethodName : selectCategoryList
     * 2. ClassName  : PrCategoryServiceImpl.java
     * 3. Comment    : SSP카테고리 트리조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public List<Map<String,Object>> selectCategoryList(Map<String, Object> searchMap) throws Exception{
        return categoryDao.selectCategoryList(searchMap);
    }
    
    /**
     * <pre>
     * 1. MethodName : selectSubCategoryList
     * 2. ClassName  : PrCategoryServiceImpl.java
     * 3. Comment    : 하위 카테고리 조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public List<Map<String,Object>> selectSubCategoryList(Map<String, Object> searchMap) throws Exception{
        return categoryDao.selectSubCategoryList(searchMap);
    }
    
    /**
     * <pre>
     * 1. MethodName : selectCategory
     * 2. ClassName  : PrCategoryServiceImpl.java
     * 3. Comment    : SSP카테고리 상세조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public List<Map<String,Object>> selectCategory(Map<String, Object> searchMap) throws Exception{ 
        return categoryDao.selectCategory(searchMap); 
    }
    
    /**
     * <pre>
     * 1. MethodName : selectAttcFileDtlsInq
     * 2. ClassName  : PrCategoryServiceImpl.java
     * 3. Comment    : 첨부파일 정보조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public List<Map<String,Object>> selectAttcFileDtlsInq(Map<String, Object> searchMap) throws Exception{ 
        return categoryDao.selectAttcFileDtlsInq(searchMap); 
    }
    
    /**
     * <pre>
     * 1. MethodName : saveCategory
     * 2. ClassName  : PrCategoryServiceImpl.java
     * 3. Comment    : SSP카테고리 저장
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public NexacroResult saveCategory(Map<String, Object> commandMap, List<Map<String, Object>> fileMap, String contextRealPath) throws Exception {
        NexacroResult result = new NexacroResult();

        int saveType = StringUtil.getInt(commandMap.get("DataSetRowType"));
        int rtn      = 0;
        String msg = "";
        
        commandMap.put("DEL_YN", "N");
        
        if( saveType == 1 ) {           // 신규  
            rtn = categoryDao.insertCategory(commandMap);
            /* 2022.08.08 이종훈 책임님 요청으로 주석처리
            if(commandMap.get("LWST_CD_YN").equals("Y")) {
                Map<String,Object> insertData = new HashMap<String,Object>();
                insertData.put("coCd", commandMap.get("CO_CD")); //회사코드
                insertData.put("prdClcd",commandMap.get("PRD_CLCD")); //카테고리ID
                insertData.put("regpsnId",commandMap.get("USER_ID")); //등록자 ID
                insertData.put("updpsnId",commandMap.get("USER_ID")); //등록자 ID
                plnPrfrtService.insertPlnPrfrt(insertData);
            }
            */
            String prClsfChrpsnId = StringUtil.getString(commandMap, "PR_PRD_CLSF_CHRPSN_ID");
            String mdClsfChrpsnId = StringUtil.getString(commandMap, "MD_PRD_CLSF_CHRPSN_ID");
            
            if(!prClsfChrpsnId.isEmpty()) {
                // 상품담담자
                commandMap.put("PRD_CLSF_CHRPSN_ID", prClsfChrpsnId);
                commandMap.put("PRD_CLSF_CHRPSN_TP_CD", "10");
                rtn = categoryDao.insertPrdClsfChrpsn(commandMap);
            }
            
            if(!mdClsfChrpsnId.isEmpty()) {
                // MD담당자
                commandMap.put("PRD_CLSF_CHRPSN_ID", mdClsfChrpsnId);
                commandMap.put("PRD_CLSF_CHRPSN_TP_CD", "20");
                rtn = categoryDao.insertPrdClsfChrpsn(commandMap);
            }
            
            // 이미지 & 첨부파일 로직 처리
            if(fileMap.size() > 0){
                // 이미지&첨부파일 삭제&수정 함수 호출
                fileUploadDowloadService.saveMultiFileDelUpdate(fileMap, contextRealPath);
            }
            if(commandMap.get("LWST_CD_YN").equals("Y")) {
                categoryDao.insertPrdClsfIddtMapp(commandMap);
            }
            msg = "등록";
        }
        if( rtn <= 0 ) { throw new Exception("SSP카테고리 생성 " + msg + " 실패"); };
        
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectPrdClcdSeq
     * 2. ClassName  : PrCategoryServiceImpl.java
     * 3. Comment    : SSP카테고리ID 생성
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public String selectPrdClcdSeq(Map<String, Object> searchMap) throws Exception{
        String hrnkPrdClcd = StringUtil.getString(searchMap, "HRNK_PRD_CLCD");
        String prdClcd = null;
        
        if(hrnkPrdClcd.isEmpty()) {
            prdClcd = categoryDao.selectPrdClcdSeq1(searchMap);    // 대분류 카테고리 PRD_CLCD
        }else {
            prdClcd = categoryDao.selectPrdClcdSeq2(searchMap); // 하위 카테고리 PRD_CLCD
        }
        
        return prdClcd; 
    }
    
    /**
     * <pre>
     * 1. MethodName : saveCategoryInfo
     * 2. ClassName  : PrCategoryServiceImpl.java
     * 3. Comment    : SSP카테고리 상세 저장
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public NexacroResult saveCategoryInfo(List<Map<String, Object>> commandMap, List<Map<String, Object>> mainList, 
             List<Map<String, Object>> subList, Map<String, Object> admin, List<Map<String, Object>> fileMap, String contextRealPath ) throws Exception {
        NexacroResult result = new NexacroResult();

        int rtn      = 0;
        String msg = "";
        
        if(commandMap != null && commandMap.size() > 0) {
            for (Map<String, Object> data : commandMap) {
                int saveType = StringUtil.getInt(data.get("DataSetRowType"));
                
                if( saveType == 2 ) {           // 수정  
                	int cnt = categoryDao.selectPrdClsfNmCnt(data);
                	if(cnt > 0) {
                		result.addVariable("prdNmCnt", cnt);
                		return result;
                	}
                    data.put("CO_CD", admin.get("CO_CD")); 
                    data.put("USER_ID", admin.get("OPRTR_ID")); 
                    rtn += categoryDao.updateCategory(data);
                    msg = "수정";
                }
            }
        }
        
        if(mainList != null && mainList.size() > 0) {
            for (Map<String, Object> mainData : mainList) {
                int saveMainType = StringUtil.getInt(mainData.get("DataSetRowType"));
                
                if (saveMainType == 3) {    // 삭제
                    mainData.put("CO_CD", admin.get("CO_CD")); 
                    mainData.put("USER_ID", admin.get("OPRTR_ID"));
                    mainData.put("DEL_YN", "Y");
                    rtn += categoryDao.deleteCategory(mainData);
                    msg = "삭제";
                }
                
            }
        }
        if(subList != null && subList.size() > 0) {
            for (Map<String, Object> subData : subList) {
                int saveSubType = StringUtil.getInt(subData.get("DataSetRowType"));
                
                if (saveSubType == 2) {        // 수정
                    subData.put("CO_CD", admin.get("CO_CD")); 
                    subData.put("USER_ID", admin.get("OPRTR_ID")); 
                    rtn += categoryDao.updateCategorySrtSo(subData);
                    msg = "순서수정";
                }
            }
        }
        // 이미지 & 첨부파일 로직 처리
        if(fileMap.size() > 0){
            // 이미지&첨부파일 삭제&수정 함수 호출
            fileUploadDowloadService.saveMultiFileDelUpdate(fileMap, contextRealPath);
        }
        
        if( rtn < 0 ) { throw new Exception("SSP카테고리 생성 " + msg + " 실패"); };
        
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectPrdAttrList
     * 2. ClassName  : PrCategoryServiceImpl.java
     * 3. Comment    : 속성명 조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public List<Map<String,Object>> selectPrdAttrList(Map<String, Object> searchMap) throws Exception{ 
        return categoryDao.selectPrdAttrList(searchMap); 
    }
    
    /**
     * <pre>
     * 1. MethodName : selectClsfAttrMappList
     * 2. ClassName  : PrCategoryServiceImpl.java
     * 3. Comment    : 상품군 사용SSP속성 조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public List<Map<String,Object>> selectClsfAttrMappList(Map<String, Object> searchMap) throws Exception{ 
        return categoryDao.selectClsfAttrMappList(searchMap); 
    }
    
    /**
     * <pre>
     * 1. MethodName : saveClsfAttrMapp
     * 2. ClassName  : PrCategoryServiceImpl.java
     * 3. Comment    : 상품군속성관리 저장
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public NexacroResult saveClsfAttrMapp(List<Map<String, Object>> commandMap, Map<String, Object> admin) throws Exception {
        NexacroResult result = new NexacroResult();

        int rtn      = 0;
        String msg = "";
        
        if(commandMap != null && commandMap.size() > 0) {
            for (Map<String, Object> data : commandMap) {
                int saveType = StringUtil.getInt(data.get("DataSetRowType"));
                
                data.put("CO_CD", admin.get("CO_CD")); 
                data.put("USER_ID", admin.get("OPRTR_ID"));
                
                //신규 속성정렬 정보
                rtn += categoryDao.updatePrdClsfAttrSrtInfo(data);
                
                String INTG_ATTR_SPR_CD = StringUtil.getString(data.get("INTG_ATTR_SPR_CD"));
                if(!INTG_ATTR_SPR_CD.equals("10")) {	//SSP속성일경우만
                	continue;
                }
                	
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
    
    /**
     * <pre>
     * 1. MethodName : selectPrdClsfNmCnt
     * 2. ClassName  : PrCategoryServiceImpl.java
     * 3. Comment    : 카테고리명 중복 체크
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    public int selectPrdClsfNmCnt(Map<String, Object> searchMap) throws Exception{ 
        return categoryDao.selectPrdClsfNmCnt(searchMap); 
    }
    
    /**
     * <pre>
     * 1. MethodName : callLargeExcelDownload
     * 2. ClassName  : PrCategoryServiceImpl.java
     * 3. Comment    : 엑셀 대용량 다운로드
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return 
     * @throws Exception 
     */
    @Override
	public Map<String, Object> callLargeExcelDownload(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception {
		// TODO Auto-generated method stub
        searchMap = CommonUtil.toCamelCaseMap(searchMap);
        searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
        
	}
    
    
    
    @Override
	public List<Map<String, Object>> selectSspPrdNmFrtMdfrList(Map<String, Object> searchMap) throws Exception {
		return categoryDao.selectSspPrdNmFrtMdfrList(searchMap);
	}
	@Override
	public List<Map<String, Object>> selectSspPrdNmRearMdfrList(Map<String, Object> searchMap) throws Exception {
		return categoryDao.selectSspPrdNmRearMdfrList(searchMap);
	}
	@Override
	public List<Map<String, Object>> selectSspPrdNmAttrList(Map<String, Object> searchMap) throws Exception {
		return categoryDao.selectSspPrdNmAttrList(searchMap);
	}
	@Override
	public Map<String, Object> selectSspPrdNmAddInfo(Map<String, Object> searchMap) throws Exception {
		return categoryDao.selectSspPrdNmAddInfo(searchMap);
	}
	@Override
	public List<Map<String, Object>> selectSspPrdNmMngList(Map<String, Object> searchMap) throws Exception {
		return categoryDao.selectSspPrdNmMngList(searchMap);
	}

	@Override
	public List<Map<String, Object>> selectClsfAttrList(Map<String, Object> searchMap) throws Exception {
		return categoryDao.selectClsfAttrList(searchMap);
	}

	@Override
	public int saveSspPrdNmInfo(
			List<Map<String, Object>> ds_frtMdfr, 
			List<Map<String, Object>> ds_rearMdfr, 
			List<Map<String, Object>> ds_attr, 
			List<Map<String, Object>> ds_addInfo,
			List<Map<String, Object>> ds_mng,
			Map<String, Object> adminMap) throws Exception {
		
		int rs = 0;
		String CO_CD = "";
		String PRD_CLCD = "";
		
		//삭제 선실행
		for(Map<String, Object> frtMdfr : ds_frtMdfr) {
            int saveType = StringUtil.getInt(frtMdfr.get("DataSetRowType"));
            if(saveType == 3) {
            	categoryDao.deleteSspPrdNmFrtMdfrInfo(frtMdfr);
            	CO_CD = (String) frtMdfr.get("CO_CD");
            	PRD_CLCD = (String) frtMdfr.get("PRD_CLCD");
            	rs = 1;
            }
		}
		for(Map<String, Object> rearMdfr : ds_rearMdfr) {
			int saveType = StringUtil.getInt(rearMdfr.get("DataSetRowType"));
            if(saveType == 3) {
            	categoryDao.deleteSspPrdNmRearMdfrInfo(rearMdfr);
            	CO_CD = (String) rearMdfr.get("CO_CD");
            	PRD_CLCD = (String) rearMdfr.get("PRD_CLCD");
            	rs = 1;
            }
		}
		for(Map<String, Object> attr : ds_attr) {
			int saveType = StringUtil.getInt(attr.get("DataSetRowType"));
            if(saveType == 3) {
            	categoryDao.deleteSspPrdNmAttrInfo(attr);
            	CO_CD = (String) attr.get("CO_CD");
            	PRD_CLCD = (String) attr.get("PRD_CLCD");
            	rs = 1;
            }
		}
		for(Map<String, Object> mng : ds_mng) {
			int saveType = StringUtil.getInt(mng.get("DataSetRowType"));
            if(saveType == 3) {
            	categoryDao.deleteSspPrdNmMngInfo(mng);
            	CO_CD = (String) mng.get("CO_CD");
            	PRD_CLCD = (String) mng.get("PRD_CLCD");
            	rs = 1;
            }
		}
		
		//등록/수정
		for(Map<String, Object> frtMdfr : ds_frtMdfr) {
            int saveType = StringUtil.getInt(frtMdfr.get("DataSetRowType"));
            if(saveType == 1 || saveType == 2) {
            	frtMdfr.put("SESSION_OPRTR_ID", adminMap.get("OPRTR_ID"));
    			categoryDao.updateSspPrdNmFrtMdfrInfo(frtMdfr);
            }
		}
		for(Map<String, Object> rearMdfr : ds_rearMdfr) {
			int saveType = StringUtil.getInt(rearMdfr.get("DataSetRowType"));
            if(saveType == 1 || saveType == 2) {
            	rearMdfr.put("SESSION_OPRTR_ID", adminMap.get("OPRTR_ID"));
    			categoryDao.updateSspPrdNmRearMdfrInfo(rearMdfr);
            }
		}
		for(Map<String, Object> attr : ds_attr) {
			int saveType = StringUtil.getInt(attr.get("DataSetRowType"));
            if(saveType == 1 || saveType == 2) {
            	attr.put("SESSION_OPRTR_ID", adminMap.get("OPRTR_ID"));
    			categoryDao.updateSspPrdNmAttrInfo(attr);
            }
		}
		for(Map<String, Object> add : ds_addInfo) {
			int saveType = StringUtil.getInt(add.get("DataSetRowType"));
            if(saveType == 1 || saveType == 2) {
            	add.put("SESSION_OPRTR_ID", adminMap.get("OPRTR_ID"));
    			categoryDao.updateSspPrdNmAddInfo(add);
            }
		}
		for(Map<String, Object> mng : ds_mng) {
			int saveType = StringUtil.getInt(mng.get("DataSetRowType"));
            if(saveType == 1 || saveType == 2) {
            	mng.put("SESSION_OPRTR_ID", adminMap.get("OPRTR_ID"));
    			categoryDao.updateSspPrdNmMngInfo(mng);
            }
		}
		//속성 삭제시 변경점 확인용으로 업데이트
		if(rs > 0) {
			Map<String, Object> mng = new HashMap<>();
			mng.put("CO_CD", CO_CD);
			mng.put("PRD_CLCD", PRD_CLCD);
			mng.put("SSP_PRD_NM_TP_CD", "5");
			mng.put("ITM_NO", "1");
			mng.put("SESSION_OPRTR_ID", adminMap.get("OPRTR_ID"));
			categoryDao.updateSspPrdNmMngInfo(mng);
		}
		return 0;
	}

	@Override
	public Map<String, Object> selectLastBatchTime(Map<String, Object> searchMap) throws Exception {
		return categoryDao.selectLastBatchTime(searchMap);
	}

    @Override
    public int deleteCategory(Map<String, Object> commandMap, Map<String, Object> admin) throws Exception {
        commandMap.put("USER_ID", admin.get("OPRTR_ID"));
        return categoryDao.deleteCategory(commandMap);
    }
}
