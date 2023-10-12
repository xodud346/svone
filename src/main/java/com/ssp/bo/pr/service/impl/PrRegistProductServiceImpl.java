package com.ssp.bo.pr.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssp.bo.pr.dao.PrRegistProductDao;
import com.ssp.bo.pr.service.PrRegistProductService;
import com.ssp.bo.pr.util.PrdUtils;
import com.ssp.core.pr.service.PrComProductSyncAttrService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  등록상품 목록
 * @package com.ssp.bo.pr.service.impl
 * <pre>
 * @author  조지훈
 * @since   2022.03.14
 * @version 1.0
 * @see PrRegistProductServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.14    조지훈        최초작성
 */
@Service("PrRegistProductService")
public class PrRegistProductServiceImpl implements PrRegistProductService {
    
    private Logger logger = LoggerFactory.getLogger(PrRegistProductServiceImpl.class);
    
    @Autowired
    private PrRegistProductDao prRegistProductDao;
    
    @Autowired
	private PrComProductSyncAttrService prComProductSyncAttrService;
    
    @Override
    public int selectRegistProductCount(Map<String, Object> searchMap) throws Exception {
        return prRegistProductDao.selectRegistProductCount(searchMap);
    }

    /**
     * <pre>
     * 1. MethodName : selectRegistProductList
     * 2. ClassName  : PrRegistProductServiceImpl
     * 3. Comment    : 등록상품 목록
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.03.14
     * </pre>
     */
    @Override
    public List<Map<String, Object>> selectRegistProductList(Map<String, Object> searchMap) throws Exception {
        return prRegistProductDao.selectRegistProductList(searchMap);
    }
    

    /**
     * <pre>
     * 1. MethodName : selectRegistProductBasicInfo
     * 2. ClassName  : PrRegistProductServiceImpl
     * 3. Comment    : 등록상품 -> 상품상세 -> 기본정보
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.27
     * </pre>
     */
    @Override
    public Map<String, Object> selectRegistProductBasicInfo(Map<String, Object> searchMap) throws Exception {
        Map<String, Object> basicInfo = prRegistProductDao.selectRegistProductBasicInfo(searchMap);
        if(basicInfo!=null) {
            basicInfo.replace("PRD_DTL_DESC", PrdUtils.clobToString(basicInfo, "PRD_DTL_DESC"));
        }
        return basicInfo;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectMroCategoryAttrList
     * 2. ClassName  : PrRegistProductServiceImpl
     * 3. Comment    : 등록상품 -> 상품상세 -> MRO카테고리목록
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.27
     * </pre>
     */
    @Override
    public List<Map<String, Object>> selectMroCategoryAttrList(Map<String, Object> searchMap) throws Exception {
        return prRegistProductDao.selectMroCategoryAttrList(searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectMroCategoryAttrListDef(Map<String, Object> searchMap) throws Exception {
        return prRegistProductDao.selectMroCategoryAttrListDef(searchMap);
    }
    
    /**
     * <pre>
     * 1. MethodName : selectSspCategoryListByMroPrdClcd
     * 2. ClassName  : PrRegistProductServiceImpl
     * 3. Comment    : 등록상품 -> 상품상세 -> SSP카테고리목록(MRO기준)
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.27
     * </pre>
     */
    @Override
    public List<Map<String, Object>> selectSspCategoryListByMroPrdClcd(Map<String, Object> searchMap) throws Exception {
        return prRegistProductDao.selectSspCategoryListByMroPrdClcd(searchMap);
    }
    
    /**
     * <pre>
     * 1. MethodName : selectSspAttrList
     * 2. ClassName  : PrRegistProductServiceImpl
     * 3. Comment    : 등록상품 -> 상품상세 -> SSP속성정보
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.27
     * </pre>
     */
    @Override
    public List<Map<String, Object>> selectSspAttrList(Map<String, Object> searchMap) throws Exception {
        return prRegistProductDao.selectSspAttrList(searchMap);
    }

    /**
     * <pre>
     * 1. MethodName : selectMroAddInfo
     * 2. ClassName  : PrRegistProductServiceImpl
     * 3. Comment    : 등록상품 -> 상품상세 -> MRO부가정보
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.27
     * </pre>
     */
    @Override
    public Map<String, Object> selectMroAddInfo(Map<String, Object> searchMap) throws Exception {
        return prRegistProductDao.selectMroAddInfo(searchMap);
    }
    
    /**
     * <pre>
     * 1. MethodName : selectSspAddInfo
     * 2. ClassName  : PrRegistProductServiceImpl
     * 3. Comment    : 등록상품 -> 상품상세 -> SSP부가정보
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.27
     * </pre>
     */
    @Override
    public Map<String, Object> selectSspAddInfo(Map<String, Object> searchMap) throws Exception {
        return prRegistProductDao.selectSspAddInfo(searchMap);
    }

    /**
     * <pre>
     * 1. MethodName : selectBgList
     * 2. ClassName  : PrRegistProductServiceImpl
     * 3. Comment    : 등록상품 -> 상품상세 -> 배지목록
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.27
     * </pre>
     */
    @Override
    public List<Map<String, Object>> selectBgList(Map<String, Object> searchMap) throws Exception {
        return prRegistProductDao.selectBgList(searchMap);
    }

    /**
     * <pre>
     * 1. MethodName : selectProductImageList
     * 2. ClassName  : PrRegistProductServiceImpl
     * 3. Comment    : 등록상품 -> 상품상세 -> 이미지목록
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.27
     * </pre>
     */
    @Override
    public List<Map<String, Object>> selectProductImageList(Map<String, Object> searchMap) throws Exception {
        return prRegistProductDao.selectProductImageList(searchMap);
    }

    /**
     * <pre>
     * 1. MethodName : selectProductCertList
     * 2. ClassName  : PrRegistProductServiceImpl
     * 3. Comment    : 등록상품 -> 상품상세 -> 인증정보
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.27
     * </pre>
     */
    @Override
    public List<Map<String, Object>> selectProductCertList(Map<String, Object> searchMap) throws Exception {
        return prRegistProductDao.selectProductCertList(searchMap);
    }
    
    /**
     * <pre>
     * 1. MethodName : selectProductNoticeList
     * 2. ClassName  : PrRegistProductServiceImpl
     * 3. Comment    : 등록상품 -> 상품상세 -> 고시정보
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.27
     * </pre>
     */
    @Override
    public List<Map<String, Object>> selectProductNoticeList(Map<String, Object> searchMap) throws Exception {
        return prRegistProductDao.selectProductNoticeList(searchMap);
    }

    /**
     * <pre>
     * 1. MethodName : selectSeriesGroupList
     * 2. ClassName  : PrRegistProductServiceImpl
     * 3. Comment    : 등록상품 -> 상품상세 -> 시리즈정보
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.27
     * </pre>
     */
    @Override
    public List<Map<String, Object>> selectSeriesGroupList(Map<String, Object> searchMap) throws Exception {
        return prRegistProductDao.selectSeriesGroupList(searchMap);
    }

    /**
     * <pre>
     * 1. MethodName : selectProductPrice
     * 2. ClassName  : PrRegistProductServiceImpl
     * 3. Comment    : 등록상품 -> 상품상세 -> 가격대상
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.27
     * </pre>
     */
    @Override
    public Map<String, Object> selectProductPrice(Map<String, Object> searchMap) throws Exception {
        return prRegistProductDao.selectProductPrice(searchMap);
    }
    
    /**
     * <pre>
     * 1. MethodName : selectProductPrice
     * 2. ClassName  : PrRegistProductServiceImpl
     * 3. Comment    : 등록상품 -> 상품상세 -> 가격정보
     * 4. 작성자       : 박성진
     * 5. 작성일       : 2022.07.06
     * </pre>
     */
    @Override
    public Map<String, Object> selectPriceInfo(Map<String, Object> searchMap) throws Exception {
        return prRegistProductDao.selectPriceInfo(searchMap);
    }

    /**
     * <pre>
     * 1. MethodName : selectProductPrice
     * 2. ClassName  : PrRegistProductServiceImpl
     * 3. Comment    : 등록상품 -> 상품상세 -> 속성정보 저장
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.27
     * </pre>
     */
    @Override
    public void updateSspProductAttr(Map<String, Object> dataMap, List<Map<String, Object>> sspAttrList) throws Exception {
        String asisPrdClcd = StringUtil.getString(dataMap, "ASIS_PRD_CLCD");
        String tobePrdClcd = StringUtil.getString(dataMap, "TOBE_PRD_CLCD");
        
        if(!asisPrdClcd.equals(tobePrdClcd)) {    //카테고리가 변경됐을경우 기존속성 데이터 삭제
            //prRegistProductDao.deleteSspProductAttrByPrdId(dataMap);
        }
        
        int updateCnt = 0;
        
        String sessionOprtrid = StringUtil.getString(dataMap, "SESSION_OPRTR_ID");
        
        if(sspAttrList!=null && sspAttrList.size()>0) {
        	for (Map<String, Object> sspAttr : sspAttrList) {
                int resultCnt = 0;
                sspAttr.put("SESSION_OPRTR_ID", sessionOprtrid);
                
                int dataSetRowType = StringUtil.getInt(sspAttr, "DataSetRowType");
                int dataSetRowType2 = StringUtil.getInt(sspAttr, "DataSetRowType2");	//상품상세에서 일괄로 저장시 DataSetRowType값 수기세팅
                
                //동기화대상 조건. 시리즈그룹상품 & 기준상품 & 동기화속성
                boolean isSyncTarget = StringUtil.getString(sspAttr, "GRP_PRD_YN").equals("Y") 
                        && StringUtil.getString(sspAttr, "BSS_PRD_YN").equals("Y") 
                        && StringUtil.getString(sspAttr, "BSS_ATTR_YN").equals("N");
                
                String prdId = StringUtil.getString(sspAttr, "PRD_ID");
                
            	if (dataSetRowType == 1 || dataSetRowType2 == 1) {    //등록
                    if(StringUtil.isEmpty(prdId)) {    //카테고리가 변경된경우(모든속성에 상품ID가 없기때문에 따로 세팅)
                        sspAttr.put("PRD_ID", StringUtil.getString(dataMap, "PRD_ID"));
                    }
                    resultCnt = prRegistProductDao.insertSspProductAttr(sspAttr);
                    
                }else if (dataSetRowType == 2 || dataSetRowType2 == 2) {    //수정
                    if(StringUtil.isEmpty(prdId)) {    //화면에서 목록에는 가져왔지만 상품이 해당속성 정보를 가지고 있지 않은경우.(카테고리에 속성이 새로 추가 매핑된경우)
                        sspAttr.put("PRD_ID", StringUtil.getString(sspAttr, "REF_PRD_ID"));
                        resultCnt = prRegistProductDao.insertSspProductAttr(sspAttr);
                    }else {
                        resultCnt = prRegistProductDao.updateSspProductAttr(sspAttr);
                    }
                    
                }else if (dataSetRowType == 3 || dataSetRowType2 == 3) {    //삭제
                    //카테고리에서 속성이 지워졌을경우.(상품속성정보에서 지워진 속성정보를 삭제)
                    resultCnt = prRegistProductDao.deleteSspProductAttr(sspAttr);
                    
                }
                updateCnt += resultCnt;
                
                if(resultCnt>0 && isSyncTarget) {
                    this.syncProductAttrInfoByBssProduct(
                    		StringUtil.getString(sspAttr, "CO_CD"), 	//회사코드
                    		StringUtil.getString(sspAttr, "PRD_ID"), 	//기준상품
                    		"",	//하위상품
                    		StringUtil.getString(sspAttr, "PRD_ATTR_CD"),	//속성코드
                    		sessionOprtrid);
                }
                
            }
        }
        
    }

    /**
     * <pre>
     * 1. MethodName : syncProductAttrInfoByBssProduct
     * 2. ClassName  : PrRegistProductServiceImpl
     * 3. Comment    : 상품속성 동기화(시리즈그룹상품의 기준상품 속성정보를 기준으로 하위상품의 속성정보 동기화처리. 단독속성 제외. 시리즈 주문단위의 경우 모든속성 동기화)
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.21
     * @param CO_CD, BSS_PRD_ID(기준상품), 하위상품(필수아님), 속성코드(필수아님), 수정자ID
     * </pre>
     */
    @Override
    @Transactional
    public void syncProductAttrInfoByBssProduct(String coCd, String bssPrdId, String prdId, String prdAttrCd, String sessionOprtrId) throws Exception {
    	//공통(core)호출로 변경
    	prComProductSyncAttrService.syncProductAttrInfoByBssProduct(coCd, bssPrdId, prdId, prdAttrCd, sessionOprtrId);
    }

    /**
     * <pre>
     * 1. MethodName : selectProductPrice
     * 2. ClassName  : PrRegistProductServiceImpl
     * 3. Comment    : 등록상품 -> 상품상세 -> 고시정보 저장
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.27
     * </pre>
     */
    @Override
    public void updateSspProductNoti(Map<String, Object> dataMap, List<Map<String, Object>> noticeList) throws Exception {
    	String asisNotiItmId = StringUtil.getString(dataMap, "ASIS_NOTI_ITM_ID");
        String tobeNotiItmId = StringUtil.getString(dataMap, "TOBE_NOTI_ITM_ID");
        
        if(!asisNotiItmId.equals(tobeNotiItmId)) {    //고시품목이 변경됐을경우 기존고시항목 삭제
        	dataMap.put("NOTI_ITM_ID", tobeNotiItmId);	//삭제할 고시품목
            prRegistProductDao.deleteSspProductNotiByPrdId(dataMap);
        }
        
        String sessionOprtrid = StringUtil.getString(dataMap, "SESSION_OPRTR_ID");
        int updateCnt = 0;
        
        if(noticeList!=null && noticeList.size()>0) {
        	for (Map<String, Object> notice : noticeList) {
        		int resultCnt = 0;
        		notice.put("SESSION_OPRTR_ID", sessionOprtrid);
        		
        		int dataSetRowType = StringUtil.getInt(notice, "DataSetRowType");
                int dataSetRowType2 = StringUtil.getInt(notice, "DataSetRowType2");	//상품상세에서 일괄로 저장시 DataSetRowType값 수기세팅

        		String prdId = StringUtil.getString(notice, "PRD_ID");
        		
        		if (dataSetRowType == 1 || dataSetRowType2 == 1) {    //등록
        			resultCnt = prRegistProductDao.insertSspProductNoti(notice);
        			
        		}else if (dataSetRowType == 2 || dataSetRowType2 == 2) {    //수정
        			if(StringUtil.isEmpty(prdId)) {    //고시품목 맵핑에서 추가된경우
        				notice.put("PRD_ID", StringUtil.getString(notice, "REF_PRD_ID"));
        				resultCnt = prRegistProductDao.insertSspProductNoti(notice);
        			}else {
        				resultCnt = prRegistProductDao.updateSspProductNoti(notice);
        			}
        			
        		}else if (dataSetRowType == 3 || dataSetRowType2 == 3) {    //삭제
        			//고시품목 맵핑에서 삭제된경우
        			resultCnt = prRegistProductDao.deleteSspProductNoti(notice);
        			
        		}
        		updateCnt += resultCnt;
        		
        	}
        }
        
    }
    
    /**
     * <pre>
     * 1. MethodName : selectProductPrice
     * 2. ClassName  : PrRegistProductServiceImpl
     * 3. Comment    : 등록상품 -> 상품상세 -> 저장 변경내역이 있을경우에만 저장한다.
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.27
     * </pre>
     */
    @Override
    public void updateProductBasicInfo(Map<String, Object> basicInfo, List<Map<String, Object>> attrInfo, List<Map<String, Object>> noticeInfo) throws Exception {
        this.updateSspProductAttr(basicInfo, attrInfo);	//속성정보
        this.updateSspProductNoti(basicInfo, noticeInfo);	//고시정보
        if("2".equals(StringUtil.getString(basicInfo, "DataSetRowType2"))) {	//변경값이 있을경우에만 저장
            prRegistProductDao.updateProductBasicInfo(basicInfo);	//기본정보	(대표속성 저장때문에 제일 나중에 저장함)
        }
		if("N".equals(StringUtil.getString(basicInfo, "SSP_PRD_NM_CHG_YN"))) {	//ssp상품명 저장 변경여부N일경우
			prRegistProductDao.mergeSspPrdNmInfo(basicInfo);
		}
    }

	@Override
	public List<Map<String, Object>> selectProductAddRegulationList(Map<String, Object> searchMap) throws Exception {
        return prRegistProductDao.selectProductAddRegulationList(searchMap);
	}

}
