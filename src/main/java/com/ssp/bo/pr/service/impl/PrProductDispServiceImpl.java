package com.ssp.bo.pr.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pc.service.PcPrcMngService;
import com.ssp.bo.pr.dao.PrProductDispDao;
import com.ssp.bo.pr.service.PrProductDispService;
import com.ssp.core.co.dao.CoCommonDao;
import com.ssp.core.co.service.CoCommonService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  SSP 전시상품(BO)
 * @package com.ssp.bo.pr.service.impl
 * <pre>
 * @author  조지훈
 * @since   2022.03.14
 * @version 1.0
 * @see PrProductDispServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.14    조지훈        최초작성
 */
@Service("PrProductDispService")
public class PrProductDispServiceImpl implements PrProductDispService {
    
	@Autowired
    private PrProductDispDao prProductDispDao;
	
	@Autowired
    private CoCommonDao coCommonDao;
    
    @Autowired
    private PcPrcMngService pcPrcMngService;
    
    @Autowired
    private CoCommonService coCommonService;
    
    @Override
    public Map<String, Object> selectDispBasis(Map<String, Object> searchMap) throws Exception {
        return prProductDispDao.selectDispBasis(searchMap);
    }

    /**
     * <pre>
     * 1. MethodName : selectDispReprProductInfo
     * 2. ClassName  : PrProductDispServiceImpl
     * 3. Comment    : 전시상세 대표상품정보
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.06.17
     * </pre>
     */
    @Override
    public Map<String, Object> selectDispReprProductInfo(Map<String, Object> searchMap) throws Exception {
        Map<String, Object> rerpPrdInfo = prProductDispDao.selectDispReprProductInfo(searchMap);
        //가격정보 조회후 세팅
        searchMap.put("coCd", searchMap.get("CO_CD"));
        searchMap.put("prdId", searchMap.get("PRD_ID"));
        NexacroResult pcPrdPrc = pcPrcMngService.getPcPrdPrc(searchMap);
        if(pcPrdPrc!=null) {
            Map<String, Object> prdPrc = pcPrdPrc.getDataSets();
            Object obj = prdPrc.get("ds_output");
            if(obj!=null) {
                List<Map<String, Object>> prcData = (List<Map<String, Object>>) obj;
                if(rerpPrdInfo!=null && prcData!=null && prcData.size()>0) {
                    //STPRC : SSP기준가
                    rerpPrdInfo.put("STPRC", prcData.get(0).get("STPRC"));
                }
            }
        }
        return rerpPrdInfo;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectDispOptnBasis
     * 2. ClassName  : PrProductDispServiceImpl
     * 3. Comment    : 전시상세 옵션정보
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.06.17
     * </pre>
     */
    @Override
    public List<Map<String, Object>> selectDispOptnBasis(Map<String, Object> searchMap) throws Exception {
        return prProductDispDao.selectDispOptnBasis(searchMap);
    }

    /**
     * <pre>
     * 1. MethodName : selectDispOptnDtl
     * 2. ClassName  : PrProductDispServiceImpl
     * 3. Comment    : 전시상세 옵션상세
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.06.17
     * </pre>
     */
    @Override
    public List<Map<String, Object>> selectDispOptnDtl(Map<String, Object> searchMap) throws Exception {
        return prProductDispDao.selectDispOptnDtl(searchMap);
    }

    /**
     * <pre>
     * 1. MethodName : selectDispOptnDtlMapp
     * 2. ClassName  : PrProductDispServiceImpl
     * 3. Comment    : 전시상세 상품연결
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.06.17
     * </pre>
     */
    @Override
    public List<Map<String, Object>> selectDispOptnDtlMapp(Map<String, Object> searchMap) throws Exception {
        List<Map<String, Object>> mapList = prProductDispDao.selectDispOptnDtlMapp(searchMap);
        for(Map<String, Object> map : mapList) {
            String OPTN_DTL_ITM_MAPP_CTS = StringUtil.getString(map, "OPTN_DTL_ITM_MAPP_CTS");
            for(String cts : OPTN_DTL_ITM_MAPP_CTS.split("_")) {
                map.put("OPTN_DTL_ITM_NO", cts);
                Map<String, Object> subMap = prProductDispDao.selectOptnNmByDtlItmno(map);
                if(subMap!=null) {
                    String OPTN_NM = StringUtil.getString(subMap, "OPTN_NM");
                    map.put(OPTN_NM, cts);
                }
            }
        }
        return mapList;
    }

    /**
     * <pre>
     * 1. MethodName : saveProductDispInfo
     * 2. ClassName  : PrProductDispServiceImpl
     * 3. Comment    : 전시상세 정보
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.06.17
     * </pre>
     */
    @Override
    public int saveProductDispInfo(Map<String, Object> ds_basic,
            List<Map<String, Object>> ds_optnBasis,
            List<Map<String, Object>> ds_optnDtl,
            List<Map<String, Object>> ds_prdCon, 
            List<Map<String, Object>> ds_addOptnBasis,
            List<Map<String, Object>> ds_addOptnDtl,
            List<Map<String, Object>> ds_delOptn) throws Exception {
        prProductDispDao.insertDispBasis(ds_basic);
        
        String sessionOprtrid = StringUtil.getString(ds_basic, "SESSION_OPRTR_ID");
        String PRD_CON_DIFF = StringUtil.getString(ds_basic, "PRD_CON_DIFF");
        
        //삭제건
        for(Map<String, Object> map : ds_delOptn) {
            String type = StringUtil.getString(map, "TYPE");
            if("OPTN_BASIS".equals(type)) {
                prProductDispDao.deleteDispOptnBasis(map);
            }else if("OPTN_DTL".equals(type)) {
                if(deleteImg(map, "delete")) {
                	prProductDispDao.deleteDispOptnDtl(map);
                }
            }else if("ADD_OPTN_BASIS".equals(type)) {
                prProductDispDao.deleteDispAddOptnBasis(map);
            }else if("ADD_OPTN_DTL".equals(type)) {
                prProductDispDao.deleteDispAddOptnDtl(map);
            }
        }
        
        String sprCd = StringUtil.getString(ds_basic, "DISP_PRD_SPR_CD");
        String addInfo = StringUtil.getString(ds_basic, "ADD_INFO_SET_YN");
        for(Map<String, Object> map : ds_optnBasis) {
            int dataSetRowType = StringUtil.getInt(map, "ROW_TYPE");
            if(dataSetRowType > 0) {
                map.put("SESSION_OPRTR_ID", sessionOprtrid);
                prProductDispDao.insertDispOptnBasis(map);
            }
        }
        for(Map<String, Object> map : ds_optnDtl) {
            int dataSetRowType = StringUtil.getInt(map, "ROW_TYPE");
            if(dataSetRowType > 0) {
                map.put("SESSION_OPRTR_ID", sessionOprtrid);
                if(deleteImg(map, "update")) {
                	prProductDispDao.insertDispOptnDtl(map);
                }
            }
        }
        
        if(sprCd.equals("A")) {
            if("Y".equals(PRD_CON_DIFF)) {
                //상품연결은 전체 삭제후 재세팅
                prProductDispDao.deleteDispOptnDtlMappAll(ds_basic);
                for(Map<String, Object> map : ds_prdCon) {
                    map.put("SESSION_OPRTR_ID", sessionOprtrid);
                    prProductDispDao.insertDispOptnDtlMapp(map);
                }
            }
        }
        if(addInfo.equals("Y")) {
            for(Map<String, Object> map : ds_addOptnBasis) {
                int dataSetRowType = StringUtil.getInt(map, "ROW_TYPE");
                if(dataSetRowType > 0) {
                    map.put("SESSION_OPRTR_ID", sessionOprtrid);
                    prProductDispDao.insertDispAddOptnBasis(map);
                }
            }
            for(Map<String, Object> map : ds_addOptnDtl) {
                int dataSetRowType = StringUtil.getInt(map, "ROW_TYPE");
                if(dataSetRowType > 0) {
                    map.put("SESSION_OPRTR_ID", sessionOprtrid);
                    prProductDispDao.insertDispAddOptnDtl(map);
                }
            }
        }
        
        return 1;
    }
    
    //첨부파일 삭제
    private boolean deleteImg(Map<String, Object> map, String procType) throws Exception{
        String DOC_REG_ID = StringUtil.getString(map, "DOC_REG_ID");
        String ASIS_DOC_REG_ID = StringUtil.getString(map, "ASIS_DOC_REG_ID");
        String IPT_TYPE_CD = StringUtil.getString(map, "IPT_TYPE_CD");

        if("4".equals(IPT_TYPE_CD) && "update".equals(procType)){
            if("update".equals(procType)){
                if(!DOC_REG_ID.equals(ASIS_DOC_REG_ID)){
                    if(!"".equals(ASIS_DOC_REG_ID)){
                        fileDelete(ASIS_DOC_REG_ID);
                    }
                }
            }
        }else{
            if(!DOC_REG_ID.equals(ASIS_DOC_REG_ID)){
                if(!"".equals(DOC_REG_ID)){
                    fileDelete(DOC_REG_ID);
                }
                if(!"".equals(ASIS_DOC_REG_ID)){
                    fileDelete(ASIS_DOC_REG_ID);
                }
            }else{
                if(!"".equals(DOC_REG_ID)){
                    fileDelete(DOC_REG_ID);
                }
            }
        }
        return true;
    }

    /**
     * <pre>
     * 1. MethodName : selectProductDispExists
     * 2. ClassName  : PrProductDispServiceImpl
     * 3. Comment    : 전시상품 존재여부 체크
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.06.17
     * </pre>
     */
    @Override
    public String selectProductDispExists(Map<String, Object> searchMap) throws Exception {
        return prProductDispDao.selectProductDispExists(searchMap);
    }

    /**
     * <pre>
     * 1. MethodName : selectDispAddOptnBasis
     * 2. ClassName  : PrProductDispServiceImpl
     * 3. Comment    : 전시상품 추가정보
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.06.17
     * </pre>
     */
    @Override
    public List<Map<String, Object>> selectDispAddOptnBasis(Map<String, Object> searchMap) throws Exception {
        return prProductDispDao.selectDispAddOptnBasis(searchMap);
    }

    /**
     * <pre>
     * 1. MethodName : selectDispAddOptnDtl
     * 2. ClassName  : PrProductDispServiceImpl
     * 3. Comment    : 전시상품 추가정보 상세
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.06.17
     * </pre>
     */
    @Override
    public List<Map<String, Object>> selectDispAddOptnDtl(Map<String, Object> searchMap) throws Exception {
        return prProductDispDao.selectDispAddOptnDtl(searchMap);
    }

    /**
     * <pre>
     * 1. MethodName : fileDelete
     * 2. ClassName  : PrProductDispServiceImpl
     * 3. Comment    : 첨부파일 삭제
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.06.17
     * </pre>
     */
    public void fileDelete(String DOC_REG_ID) throws Exception {
        List<Map<String, Object>> fileMapList = new ArrayList<>();
        Map<String, Object> fileMap = new HashMap<>();
        fileMap.put("DataSetRowType", "3");
        fileMap.put("docRegId", DOC_REG_ID);
        fileMap.put("docRegSeq", "1");
        fileMap.putAll(coCommonDao.selectFileInfo(fileMap));
        fileMapList.add(fileMap);
        coCommonService.fileDelete(fileMapList);
    }

    /**
     * <pre>
     * 1. MethodName : selectProductDispOprtr
     * 2. ClassName  : PrProductDispServiceImpl
     * 3. Comment    : 전시상세 담당자 정보
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.06.17
     * </pre>
     */
	@Override
	public Map<String, Object> selectProductDispOprtr(Map<String, Object> searchMap) throws Exception {
        return prProductDispDao.selectProductDispOprtr(searchMap);
	}

}
