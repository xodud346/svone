package com.ssp.bo.pr.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pr.controller.PrCategoryController;
import com.ssp.bo.pr.dao.PrCategoryDao;
import com.ssp.bo.pr.dao.PrProductPopupDao;
import com.ssp.bo.pr.service.PrProductPopupService;
import com.ssp.bo.pr.util.DiquestAPI;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  상품 공통팝업 컨트롤러
 * @package com.ssp.bo.pr.service.impl
 * </pre>
 * @author 조지훈
 * @since 2022.02.24
 * @version 1.0
 * @see PrProductPopupServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.02.24    조지훈        최초등록
 */
@Service("PrProductPopupService")
public class PrProductPopupServiceImpl implements PrProductPopupService {
	private final Logger log = LoggerFactory.getLogger(PrCategoryController.class);
    @Autowired
    private PrProductPopupDao prProductPopupDao;
    
	@Autowired
	private PrCategoryDao prCategoryDao;
	
	@Autowired
	private SspPropertyService propertiesService;	
	
    
    /**
	 * <pre>
	 * 1. MethodName : selectCategoryPopupList
	 * 2. ClassName  : PrProductPopupServiceImpl
	 * 3. Comment    : 카테고리 조회
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.02.22
	 * </pre>
     */
	@Override
	public int selectCategoryPopupCount(Map<String, Object> searchMap) throws Exception {
        return prProductPopupDao.selectCategoryPopupCount(searchMap);
	}
	@Override
	public List<Map<String, Object>> selectCategoryPopupList(Map<String, Object> searchMap) throws Exception {
        return prProductPopupDao.selectCategoryPopupList(searchMap);
	}

    /**
	 * <pre>
	 * 1. MethodName : selectProductNoticePopupList
	 * 2. ClassName  : PrProductPopupServiceImpl
	 * 3. Comment    : 고시 품목 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 
	 * </pre>
     */
	@Override
	public int selectProductNoticePopupCount(Map<String, Object> searchMap) throws Exception {
        return prProductPopupDao.selectProductNoticePopupCount(searchMap);
	}
	@Override
	public List<Map<String, Object>> selectProductNoticePopupList(Map<String, Object> searchMap) throws Exception {
        return prProductPopupDao.selectProductNoticePopupList(searchMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectProductPopupList
	 * 2. ClassName  : PrProductPopupServiceImpl
	 * 3. Comment    : 상품목록
	 * 4. 작성자       : 
	 * 5. 작성일       : 
	 * </pre>
     */
	@Override
	public int selectProductPopupCount(Map<String, Object> searchMap) throws Exception {
        return prProductPopupDao.selectProductPopupCount(searchMap);
	}
	@Override
	public List<Map<String, Object>> selectProductPopupList(Map<String, Object> searchMap) throws Exception {
        return prProductPopupDao.selectProductPopupList(searchMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectProductPopupListForDupProc
	 * 2. ClassName  : PrProductPopupServiceImpl
	 * 3. Comment    : 상품목록(중복처리)
	 * 4. 작성자       : 
	 * 5. 작성일       : 
	 * </pre>
     */
	@Override
	public List<Map<String, Object>> selectProductPopupListForDupProc(Map<String, Object> searchMap) throws Exception {
        return prProductPopupDao.selectProductPopupListForDupProc(searchMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectMroPrdPopupListCount
	 * 2. ClassName  : PrProductPopupServiceImpl
	 * 3. Comment    : S-MRO 카테고리 검색 카운터
	 * 4. 작성자       : 이원준
	 * 5. 작성일       : 
	 * </pre>
     */
	public int selectMroPrdPopupListCount(Map<String, Object> searchMap) throws Exception{
		return prProductPopupDao.selectMroPrdPopupListCount(searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectMroPrdPopupList
	 * 2. ClassName  : PrProductPopupServiceImpl
	 * 3. Comment    : S-MRO 카테고리 검색조회
	 * 4. 작성자       : 이원준
	 * 5. 작성일       : 
	 * </pre>
	 */
	public List<Map<String,Object>> selectMroPrdPopupList(Map<String, Object> searchMap) throws Exception{
		return prProductPopupDao.selectMroPrdPopupList(searchMap);
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectCtryPopupListCount
	 * 2. ClassName  : PrProductPopupServiceImpl
	 * 3. Comment    : 원산지 검색 카운터 
	 * 4. 작성자       : 이원준
	 * 5. 작성일       : 
	 * </pre>
	 */
	public int selectCtryPopupListCount(Map<String, Object> searchMap) throws Exception{
		return prProductPopupDao.selectCtryPopupListCount(searchMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectCtryPopupList
	 * 2. ClassName  : PrProductPopupServiceImpl
	 * 3. Comment    : 원산지 검색조회
	 * 4. 작성자       : 이원준
	 * 5. 작성일       : 
	 * </pre>
	 */
	public List<Map<String,Object>> selectCtryPopupList(Map<String, Object> searchMap) throws Exception{
		return prProductPopupDao.selectCtryPopupList(searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectPrdClsfList
	 * 2. ClassName  : PrProductPopupServiceImpl
	 * 3. Comment    : 카테고리 추천&조회
	 * 4. 작성자       : 이원준
	 * 5. 작성일       : 
	 * </pre>
	 */
	public List<Map<String,Object>> selectPrdClsfList(Map<String, Object> searchMap) throws Exception{
		List<Map<String,Object>> rtnList = new ArrayList<>();
		
		// 다이퀘스트 조회
		if(StringUtil.getString(searchMap.get("SEARCH_TYPE")).equals("D")) {
			searchMap.put("IP", propertiesService.getString("diquest.host"));
			searchMap.put("PORT", propertiesService.getInt("diquest.port"));
			// 다이퀘스트 호출
			List<Map<String,Object>> list = DiquestAPI.diquestRequest(searchMap);
			for(Map<String, Object> data : list) {
				// 카테고리명 / 담당자 조회
				Map<String, Object> map = prCategoryDao.selectPrdClsfNm(data);
				if(map != null && map.size() > 0) {
					data.put("PRD_CLSF_LVL_NM", map.get("PRD_CLSF_LVL_NM"));
					data.put("OPRTR_NM", map.get("OPRTR_NM"));
				}
				data.put("CHK", "");
				rtnList.add(data);
			}
		}else if(StringUtil.getString(searchMap.get("SEARCH_TYPE")).equals("S")){
			// 등록상품명으로 조회
			rtnList = prProductPopupDao.selectPrdClsfList(searchMap);
		}else {
			// 카테고리명으로 조회
			rtnList = prProductPopupDao.selectPrdClsfNmList(searchMap);
		}
		
		return rtnList;
	}

	/**
	 * <pre>
	 * 1. MethodName : saveNewPrdStats
	 * 2. ClassName  : PrProductPopupServiceImpl
	 * 3. Comment    : 카테고리 추천 R&D 이관이력 저장
	 * 4. 작성자       : 이원준
	 * 5. 작성일       : 
	 * </pre>
	 */
    public NexacroResult saveNewPrdStats(Map<String, Object> commandMap) throws Exception {
        NexacroResult result = new NexacroResult();
        int rtn      = 0;
        String msg = "";
        
        if(commandMap != null && commandMap.size() > 0) {
	        rtn += prProductPopupDao.insertNewPrdStats(commandMap); // 신규상품요청상태내역 저장
	        rtn += prProductPopupDao.updateNewPrdReqProc(commandMap); // 신규상품요청처리 수정
	        rtn += prProductPopupDao.updateNewPrdCustReqInfo(commandMap); // 신규상품고객요청정보 수정
	        msg = "등록";
        }
        if( rtn <= 0 ) throw new Exception("이관 " + msg + " 실패");
        
        return result;
    }
    
    /**
	 * <pre>
	 * 1. MethodName : selectBgPopupList
	 * 2. ClassName  : PrProductPopupServiceImpl
	 * 3. Comment    : 배지팝업
	 * 4. 작성자       : 
	 * 5. 작성일       : 
	 * </pre>
     */
	public List<Map<String,Object>> selectBgPopupList(Map<String, Object> searchMap) throws Exception{
		return prProductPopupDao.selectBgPopupList(searchMap);
    }

	/**
	 * <pre>
	 * 1. MethodName : selectNewPrdProcHst
	 * 2. ClassName  : PrProductPopupServiceImpl
	 * 3. Comment    : R&D 이관이력 조회
	 * 4. 작성자       : 이원준
	 * 5. 작성일       : 
	 * </pre>
	 */
	public List<Map<String,Object>> selectNewPrdProcHst(Map<String, Object> searchMap) throws Exception{
		return prProductPopupDao.selectNewPrdProcHst(searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectSpecialIndustryGroup
	 * 2. ClassName  : PrProductPopupServiceImpl
	 * 3. Comment    : 특화산업군 조회
	 * 4. 작성자       : 김영남
	 * 5. 작성일       : 
	 * </pre>
	 */
	@Override
	public List<Map<String, Object>> selectSpecialIndustryGroup(Map<String, Object> searchMap) throws Exception {
		return prProductPopupDao.selectSpecialIndustryGroup(searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectSpecialIndustryGroupMappList
	 * 2. ClassName  : PrProductPopupServiceImpl
	 * 3. Comment    : 특화산업군 카테고리 조회
	 * 4. 작성자       : 김영남
	 * 5. 작성일       :
	 * </pre>
	 */
	@Override
	public List<Map<String, Object>> selectSpecialIndustryGroupMappList(Map<String, Object> searchMap) throws Exception {
		return prProductPopupDao.selectSpecialIndustryGroupMappList(searchMap);
	}


	@Override
	public NexacroResult updateSpecialIndustryGroupMappList(List<Map<String, Object>> commandMap, Map<String, Object> admin) throws Exception {
		NexacroResult result = new NexacroResult();

		int rtn      = 0;
		String msg = "";

		String coCd = admin.get("CO_CD").toString();
		String userId = admin.get("OPRTR_ID").toString();

		if(commandMap != null && commandMap.size() > 0) {
   			for (Map<String, Object> data : commandMap) {
				int saveType = StringUtil.getInt(data.get("DataSetRowType"));

				data.put("CO_CD", coCd);
				data.put("USER_ID", userId);
				if( saveType == 1 ) {
					rtn += prProductPopupDao.insertSpecialIndustryGroupMappList(data);
					msg = "저장";
				} else if(saveType == 2 || saveType == 3) {
					if("0".equals(StringUtil.getString(data, "CHK"))) {
						rtn += prProductPopupDao.deleteSpecialIndustryGroupMappList(data);
						msg = "삭제";
					} else if ("1".equals(StringUtil.getString(data, "CHK"))) {
						rtn += prProductPopupDao.insertSpecialIndustryGroupMappList(data);
						msg = "저장";
					}
				}
			}
		}
		if( rtn <= 0 ) throw new Exception("특화산업군 카테고리 " + msg + " 실패");

		return result;
	}
}
