package com.ssp.bo.pr.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.pr.dao.PrProductAddDao;
import com.ssp.bo.pr.dao.PrRegistProductDao;
import com.ssp.bo.pr.service.PrProductAddService;
import com.ssp.bo.pr.util.PrdUtils;
import com.ssp.core.pc.service.PcCoreService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  SSP 상품추가
 * @package com.ssp.bo.pr.service.impl
 * <pre>
 * @author  조지훈
 * @since   2022.03.14
 * @version 1.0
 * @see PrProductAddServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.14    조지훈        최초작성
 */
@Service("PrProductAddService")
public class PrProductAddServiceImpl implements PrProductAddService {
    
    @Autowired
    private PrProductAddDao prProductAddDao;
    
    @Autowired
    private PcCoreService pcCoreService;
    
    @Autowired
    private PrRegistProductDao prRegistProductDao;
    
	@Override
	public int selectProductAddCount(Map<String, Object> searchMap) throws Exception {
		return prProductAddDao.selectProductAddCount(searchMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectProductAddList
	 * 2. ClassName  : PrProductAddServiceImpl
	 * 3. Comment    : SSP 추가상품목록
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.03.22
	 * </pre>
     */
	@Override
	public List<Map<String, Object>> selectProductAddList(Map<String, Object> searchMap) throws Exception {
		return prProductAddDao.selectProductAddList(searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectProductAddBasicInfo
	 * 2. ClassName  : PrProductAddServiceImpl
	 * 3. Comment    : SSP 추가상품상세 > 기본정보
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.04.13
	 * </pre>
     */
	@Override
	public Map<String, Object> selectProductAddBasicInfo(Map<String, Object> searchMap) throws Exception {
		Map<String, Object> basicInfo = prProductAddDao.selectProductAddBasicInfo(searchMap);
		if(basicInfo!=null) {
	    	basicInfo.replace("PRD_DTL_DESC", PrdUtils.clobToString(basicInfo, "PRD_DTL_DESC"));
		}
		return basicInfo;
	}

	/**
	 * <pre>
	 * 1. MethodName : insertRegProcPrdInfo
	 * 2. ClassName  : PrProductAddServiceImpl
	 * 3. Comment    : SSP 추가상품 > 접수처리
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.04.13
	 * </pre>
     */
	@Override
	public int insertRegProcPrdInfo(Map<String, Object> dataMap) throws Exception {
		return prProductAddDao.insertRegProcPrdInfo(dataMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : insertProductRegProc
	 * 2. ClassName  : PrProductAddServiceImpl
	 * 3. Comment    : SSP 추가상품상세 > 등록처리
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.04.13
	 * </pre>
     */
	@Override
	public void insertProductRegProc(Map<String, Object> paramMap) throws Exception {
		//기본정보
        Map<String, Object> basicInfo = (Map<String, Object>) paramMap.get("basicInfo");
        String SESSION_OPRTR_ID = (String) paramMap.get("SESSION_OPRTR_ID");
        //속성정보
        List<Map<String, Object>> attrList = (List<Map<String, Object>>) paramMap.get("attrList");
        if(attrList!=null && attrList.size()>0) {
        	for(Map<String, Object> attrInfo : attrList) {
        		attrInfo.put("SESSION_OPRTR_ID", SESSION_OPRTR_ID);
        		attrInfo.put("PRD_ID", basicInfo.get("PRD_ID"));
        		prProductAddDao.insertPrdInfoAttrMap(attrInfo);	//본테이블
        	}
        	prProductAddDao.insertRegProcPrdInfoAttrMap(basicInfo);	//등록처리테이블(본테이블 select insert)
        }
        
        //고시정보
        List<Map<String, Object>> notiLIst = (List<Map<String, Object>>) paramMap.get("notiList");
        if(notiLIst!=null && notiLIst.size()>0) {
        	for(Map<String, Object> notiInfo : notiLIst) {
        		notiInfo.put("SESSION_OPRTR_ID", SESSION_OPRTR_ID);
        		notiInfo.put("PRD_ID", basicInfo.get("PRD_ID"));
        		prProductAddDao.insertPrdNotiItmMapp(notiInfo);	//본테이블
        	}
        	prProductAddDao.insertRegProcPrdNotiItmMapp(basicInfo);	//등록처리테이블(본테이블 select insert)
        }
        
        basicInfo.put("SESSION_OPRTR_ID", SESSION_OPRTR_ID);
        prProductAddDao.insertPrdInfo(basicInfo);
        prProductAddDao.updateRegProcPrdInfo(basicInfo);
        prRegistProductDao.mergeSspPrdNmInfo(basicInfo);//ssp상품명
        
        //가격진열 메소드 호출(요청번호가 존재시에만 호출 필요)
        String SSP_PRD_REG_REQ_ID = StringUtil.getString(basicInfo, "NEW_PRD_REQ_NO");
        if(!StringUtil.isEmpty(SSP_PRD_REG_REQ_ID)){
    		Map<String,Object> insertData = new HashMap<String,Object>();
    		// 필수 파라미터 : coCd(회사코드), newPrdReqNo(신규상품번호), prdId(상품ID), regpsnId(등록자)
    		insertData.put("coCd", StringUtil.getString(basicInfo, "CO_CD")); //회사코드
    		insertData.put("newPrdReqNo", SSP_PRD_REG_REQ_ID); //신규상품요청번호
    		insertData.put("prdId", StringUtil.getString(basicInfo, "PRD_ID")); //상품ID
    		insertData.put("regpsnId", SESSION_OPRTR_ID); //등록자ID
    		insertData.put("updpsnId", SESSION_OPRTR_ID); //등록자ID
    		pcCoreService.insertNewPrdReqPrc(insertData);
        }
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectSspAttrList
	 * 2. ClassName  : PrProductAddServiceImpl
	 * 3. Comment    : SSP 추가상품상세 > SSP속성정보
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.04.13
	 * </pre>
     */
	@Override
	public List<Map<String, Object>> selectSspAttrList(Map<String, Object> searchMap) throws Exception {
		return prProductAddDao.selectSspAttrList(searchMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectSspAddInfo
	 * 2. ClassName  : PrProductAddServiceImpl
	 * 3. Comment    : SSP 추가상품상세 > SSP추가정보
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.04.13
	 * </pre>
     */
	@Override
	public Map<String, Object> selectSspAddInfo(Map<String, Object> searchMap) throws Exception {
		return prProductAddDao.selectSspAddInfo(searchMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectProductNoticeList
	 * 2. ClassName  : PrProductAddServiceImpl
	 * 3. Comment    : SSP 추가상품상세 > SSP고시정보
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.04.13
	 * </pre>
     */
	@Override
	public List<Map<String, Object>> selectProductNoticeList(Map<String, Object> searchMap) throws Exception {
		return prProductAddDao.selectProductNoticeList(searchMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectRegProcProductImageList
	 * 2. ClassName  : PrProductAddServiceImpl
	 * 3. Comment    : SSP상품추가상세 > SSP이미지정보(기타컬럼 활용)
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.04.13
	 * </pre>
     */
	@Override
	public List<Map<String, Object>> selectRegProcProductImageList(Map<String, Object> searchMap) throws Exception {
		return prProductAddDao.selectRegProcProductImageList(searchMap);
	}

}
