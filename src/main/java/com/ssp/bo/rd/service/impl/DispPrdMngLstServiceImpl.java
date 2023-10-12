/*------------------------------------------------------------------------------
 * NAME : DispPrdMngLstServiceImpl.java
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

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.dao.DispPrdMngLstDao;
import com.ssp.bo.rd.service.DispPrdMngLstService;
import com.ssp.core.co.dao.CoCommonDao;
import com.ssp.core.co.service.CoCommonService;
import com.ssp.core.common.exception.BizRuntimeException;
import com.ssp.core.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   DispPrdMngLstServiceImpl
 * @@desc   전시상품관리 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성
 */
@Service("dispPrdMngLstService")
public class DispPrdMngLstServiceImpl implements DispPrdMngLstService {

    private CoCommonService coCommonService;
    @Autowired
    private CoCommonDao coCommonDao;
    @Autowired
    private DispPrdMngLstDao dispPrdMngLstDao;

    /**
     * 전시상품관리 리스트 조회(selectDispPrdMngLst)
     * @param searchMap
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectDispPrdMngLst(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        int totalCount    = dispPrdMngLstDao.selectDispPrdMngLstCount(searchMap);
        List<Map<String, Object>> records = dispPrdMngLstDao.selectDispPrdMngLst(searchMap);

        result.addDataSet("ds_output",  records);
        result.addVariable("totalCount",totalCount);

        return result;
    }

    @Override
    public void updateSrtSo(Map<String, Object> paramMap) throws Exception {
        List<Map<String, Object>> srtList = (List<Map<String, Object>>) paramMap.get("srtList");
        if (srtList != null && srtList.size() > 0) {
            for (Map<String, Object> srtInfo : srtList) {
                dispPrdMngLstDao.updateSrtSo(srtInfo);
            }
        }
    }

    public Map<String, Object> selectDispBasis(Map<String, Object> searchMap) throws Exception {
        return dispPrdMngLstDao.selectDispBasis(searchMap);
    }

    @Override
    public List<Map<String, Object>> selectDispOptnBasis(Map<String, Object> searchMap) throws Exception {
        return dispPrdMngLstDao.selectDispOptnBasis(searchMap);
    }

    @Override
    public List<Map<String, Object>> selectDispOptnDtl(Map<String, Object> searchMap) throws Exception {
        return dispPrdMngLstDao.selectDispOptnDtl(searchMap);
    }

    @Override
    public List<Map<String, Object>> selectDispOptnDtlMapp(Map<String, Object> searchMap) throws Exception {
        List<Map<String, Object>> mapList = dispPrdMngLstDao.selectDispOptnDtlMapp(searchMap);
        for (Map<String, Object> map : mapList) {
            String OPTN_DTL_ITM_MAPP_CTS = StringUtil.getString(map, "OPTN_DTL_ITM_MAPP_CTS");
            for (String cts : OPTN_DTL_ITM_MAPP_CTS.split("_")) {
                map.put("OPTN_DTL_ITM_NO", cts);
                Map<String, Object> subMap = dispPrdMngLstDao.selectOptnNmByDtlItmno(map);
                if (subMap != null) {
                    String OPTN_NM = StringUtil.getString(subMap, "OPTN_NM");
                    map.put(OPTN_NM, cts);
                }
            }
        }
        return mapList;
    }

    @Override
    public List<Map<String, Object>> selectDispAddOptnBasis(Map<String, Object> searchMap) throws Exception {
        return dispPrdMngLstDao.selectDispAddOptnBasis(searchMap);
    }

    @Override
    public List<Map<String, Object>> selectDispAddOptnDtl(Map<String, Object> searchMap) throws Exception {
        return dispPrdMngLstDao.selectDispAddOptnDtl(searchMap);
    }

    @Override
	public Map<String, Object> selectProductDispOprtr(Map<String, Object> searchMap) throws Exception {
        return dispPrdMngLstDao.selectProductDispOprtr(searchMap);
	}

    /**
     * <pre>
     * 1. MethodName : saveRndProductDispInfo
     * 2. ClassName  : PrProductDispServiceImpl
     * 3. Comment    : 전시상품 저장
     * 4. 작성자      : 김재흥
     * 5. 작성일      : 2023.08.01
     * </pre>
     */
    @Transactional
    public String saveRndProductDispInfo(Map<String, Object> ds_basic,
                                      List<Map<String, Object>> ds_optnBasis,
                                      List<Map<String, Object>> ds_optnDtl,
                                      List<Map<String, Object>> ds_prdCon,
                                      List<Map<String, Object>> ds_addOptnBasis,
                                      List<Map<String, Object>> ds_addOptnDtl,
                                      List<Map<String, Object>> ds_delOptn) throws Exception {
        // 저장하는 상품군에 같은 대표상품이 있으면 Exception
        String dispGrpId = StringUtil.getString(ds_basic, "DISP_GRP_ID");
        String prdClcd = StringUtil.getString(ds_basic, "PRD_CLCD");
        String reprPrdId = StringUtil.getString(ds_basic, "REPR_PRD_ID");
        if (dispPrdMngLstDao.existsRndDispReprPrdId(prdClcd, reprPrdId, dispGrpId)) {
            return "EXISTS_ITM";
        }

        // 전시그룹ID 채번
        if (StringUtil.isEmpty(dispGrpId)) {
            dispGrpId = dispPrdMngLstDao.selectRndDispGrpId();
            ds_basic.put("DISP_GRP_ID", dispGrpId);
        }

        // 전시상품 마스터 등록
        dispPrdMngLstDao.insertRndDispBasis(ds_basic);

        String sessionOprtrId = StringUtil.getString(ds_basic, "SESSION_OPRTR_ID");
        String PRD_CON_DIFF = StringUtil.getString(ds_basic, "PRD_CON_DIFF");

        // 전시상품 옵션정보 삭제
        for (Map<String, Object> map : ds_delOptn) {
            String type = StringUtil.getString(map, "TYPE");
            map.put("DISP_GRP_ID", dispGrpId);
            if ("OPTN_BASIS".equals(type)) {
                dispPrdMngLstDao.deleteRndDispOptnBasis(map);
            } else if ("OPTN_DTL".equals(type)) {
                if (deleteImg(map, "delete")) {
                    dispPrdMngLstDao.deleteRndDispOptnDtl(map);
                }
            } else if ("ADD_OPTN_BASIS".equals(type)) {
                dispPrdMngLstDao.deleteRndDispAddOptnBasis(map);
            } else if ("ADD_OPTN_DTL".equals(type)) {
                dispPrdMngLstDao.deleteRndDispAddOptnDtl(map);
            }
        }

        // 전시상품 옵션정보 등록
        String sprCd = StringUtil.getString(ds_basic, "DISP_PRD_SPR_CD");
        String addInfo = StringUtil.getString(ds_basic, "ADD_INFO_SET_YN");
        for (Map<String, Object> map : ds_optnBasis) {
            map.put("DISP_GRP_ID", dispGrpId);
            int dataSetRowType = StringUtil.getInt(map, "ROW_TYPE");
            if (dataSetRowType > 0) {
                map.put("SESSION_OPRTR_ID", sessionOprtrId);
                dispPrdMngLstDao.insertRndDispOptnBasis(map);
            }
        }

        // 전시상품 옵션상세정보 등록
        for (Map<String, Object> map : ds_optnDtl) {
            int dataSetRowType = StringUtil.getInt(map, "ROW_TYPE");
            if (dataSetRowType > 0) {
                map.put("SESSION_OPRTR_ID", sessionOprtrId);
                map.put("DISP_GRP_ID", dispGrpId);
                if (deleteImg(map, "update")) {
                    dispPrdMngLstDao.insertRndDispOptnDtl(map);
                }
            }
        }

        // A타입 상품이면 상품연결 매핑 정보 추가
        if (sprCd.equals("A")) {
            if ("Y".equals(PRD_CON_DIFF)) {
                // 상품연결은 전체 삭제후 재세팅
                ds_basic.put("DISP_GRP_ID", dispGrpId);
                dispPrdMngLstDao.deleteRndDispOptnDtlMappAll(ds_basic);
                for (Map<String, Object> map : ds_prdCon) {
                    map.put("SESSION_OPRTR_ID", sessionOprtrId);
                    map.put("DISP_GRP_ID", dispGrpId);
                    dispPrdMngLstDao.insertRndDispOptnDtlMapp(map);
                }
            }
        }

        // 추가정보수취여부가 Y
        if (addInfo.equals("Y")) {
            for (Map<String, Object> map : ds_addOptnBasis) {
                int dataSetRowType = StringUtil.getInt(map, "ROW_TYPE");
                if (dataSetRowType > 0) {
                    map.put("SESSION_OPRTR_ID", sessionOprtrId);
                    map.put("DISP_GRP_ID", dispGrpId);
                    dispPrdMngLstDao.insertRndDispAddOptnBasis(map);
                }
            }
            for (Map<String, Object> map : ds_addOptnDtl) {
                int dataSetRowType = StringUtil.getInt(map, "ROW_TYPE");
                if (dataSetRowType > 0) {
                    map.put("SESSION_OPRTR_ID", sessionOprtrId);
                    map.put("DISP_GRP_ID", dispGrpId);
                    dispPrdMngLstDao.insertRndDispAddOptnDtl(map);
                }
            }
        }

        return "";
    }

    /**
     * <pre>
     * 1. MethodName : selectCategoryOptionValues
     * 2. ClassName  : PrProductDispServiceImpl
     * 3. Comment    : 상품군 옵션값 조회
     * 4. 작성자      : 김재흥
     * 5. 작성일      : 2023.07.25
     * </pre>
     */
    @Override
    public List<Map<String, Object>> selectCategoryOptionValues(Map<String, Object> searchMap) throws Exception {
        return dispPrdMngLstDao.selectCategoryOptionValues(searchMap);
    }

    private boolean deleteImg(Map<String, Object> map, String procType) throws Exception {
        String DOC_REG_ID = StringUtil.getString(map, "DOC_REG_ID");
        String ASIS_DOC_REG_ID = StringUtil.getString(map, "ASIS_DOC_REG_ID");
        String IPT_TYPE_CD = StringUtil.getString(map, "IPT_TYPE_CD");

        if ("4".equals(IPT_TYPE_CD) && "update".equals(procType)) {
            if ("update".equals(procType)) {
                if (!DOC_REG_ID.equals(ASIS_DOC_REG_ID)) {
                    if (!"".equals(ASIS_DOC_REG_ID)) {
                        fileDelete(ASIS_DOC_REG_ID);
                    }
                }
            }
        } else {
            if (!DOC_REG_ID.equals(ASIS_DOC_REG_ID)) {
                if (!"".equals(DOC_REG_ID)) {
                    fileDelete(DOC_REG_ID);
                }
                if (!"".equals(ASIS_DOC_REG_ID)) {
                    fileDelete(ASIS_DOC_REG_ID);
                }
            } else {
                if (!"".equals(DOC_REG_ID)) {
                    fileDelete(DOC_REG_ID);
                }
            }
        }
        return true;
    }

    /**
     * <pre>
     * 1. MethodName : fileDelete
     * 2. ClassName  : PrProductDispServiceImpl
     * 3. Comment    : 첨부파일 삭제
     * 4. 작성자      : 김재흥
     * 5. 작성일      : 2023.08.01
     * </pre>
     */
    private void fileDelete(String DOC_REG_ID) throws Exception {
        List<Map<String, Object>> fileMapList = new ArrayList<>();
        Map<String, Object> fileMap = new HashMap<>();
        fileMap.put("DataSetRowType", "3");
        fileMap.put("docRegId", DOC_REG_ID);
        fileMap.put("docRegSeq", "1");
        fileMap.putAll(coCommonDao.selectFileInfo(fileMap));
        fileMapList.add(fileMap);
        coCommonService.fileDelete(fileMapList);
    }

}