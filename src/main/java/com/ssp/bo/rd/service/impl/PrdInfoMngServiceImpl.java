/*------------------------------------------------------------------------------
 * NAME : PrdInfoMngServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.10  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pr.dao.PrRegistProductDao;
import com.ssp.bo.rd.dao.PrdInfoMngDao;
import com.ssp.bo.rd.service.FileUploadDowloadService;
import com.ssp.bo.rd.service.PrdInfoMngService;
import com.ssp.bo.rd.util.StringUtils;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.ObjectUtils;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   PrdInfoMngServiceImpl
 * @@desc   MRO상품정보 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.05.10			       최초작성
 */
@Service("prdInfoMngService")
public class PrdInfoMngServiceImpl implements PrdInfoMngService {

    @Resource(name = "prdInfoMngDao")
    private PrdInfoMngDao prdInfoMngDao;

    @Resource(name = "fileUploadDowloadService")
    private FileUploadDowloadService fileUploadDowloadService;
    
    @Autowired
    private PrRegistProductDao prRegistProductDao;

    /**
     * MRO상품정보 리스트 조회(selectPrdInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectPrdInfoMng(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<String> list = new ArrayList<String>();

        if(!ObjectUtils.isNull(searchMap.get("MRO_PRD_STATS_CD")))
        {
           list = StringUtils.makeList(searchMap.get("MRO_PRD_STATS_CD").toString(),",");
        }

        searchMap.put("MRO_PRD_STATS_CD_LIST", list);

        int totalCount    = prdInfoMngDao.selectPrdInfoMngCount(searchMap);
        List<Map> records = prdInfoMngDao.selectPrdInfoMng(searchMap);

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);

        return result;
    }

    /**
     * 상품정보관리상세수정 리스트 조회(selectPrdInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectPrdInfoMngDtlUpdInq(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records1  = null;
        List<Map> records2  = null;
        List<Map> records3  = null;
        List<Map> records4  = null;
        List<Map> records5  = null;
        List<Map> records6  = null;
        List<Map> records7  = null;
        List<Map> records8  = null;
        List<Map> records9  = null;
        List<Map> records10 = null;
        List<Map> records11 = null;

        // 상품정보관리상세수정조회
        records1 = prdInfoMngDao.selectPrdInfoMngDtlUpdInq(searchMap);

        searchMap.put("PRD_ID", CommUtil.nvl(records1.get(0).get("PRD_ID")).toString());

        if(records1.get(0).get("PRD_CLCD") != null && "".equals(records1.get(0).get("PRD_CLCD").toString()) == false)
		{
        	searchMap.put("PRD_CLCD",     CommUtil.nvl(records1.get(0).get("PRD_CLCD")).toString());
        	searchMap.put("OLD_PRD_CLCD", CommUtil.nvl(records1.get(0).get("PRD_CLCD")).toString());

	        // 카테고리 추천&조회 조회
	        records2 = prdInfoMngDao.selectCatgAttrInfo(searchMap);
		}

        if(records1.get(0).get("NOTI_ITM_ID") != null && "".equals(records1.get(0).get("NOTI_ITM_ID").toString()) == false)
		{
	        searchMap.put("NOTI_ITM_ID", CommUtil.nvl(records1.get(0).get("NOTI_ITM_ID")).toString());

	        // 상품고시상품 조회
	        records3 = prdInfoMngDao.selectPrdNotiPrdInq(searchMap);
		}

        if(records1.get(0).get("PRD_DOC_REG_ID") != null && "".equals(records1.get(0).get("PRD_DOC_REG_ID").toString()) == false)
		{
        	searchMap.put("DOC_REG_ID", CommUtil.nvl(records1.get(0).get("PRD_DOC_REG_ID")).toString());

	        // 첨부파일내역 조회
	        records4 = prdInfoMngDao.selectAttcFileDtlsInq(searchMap);
		}

        // 시리즈상품그룹 조회
        records5 = prdInfoMngDao.selectSrsGrpPrdInq(searchMap);

        // 시리즈상품그룹이 존재시 리스트 조회
        if(records5.size() > 0)
        {
        	// 시리즈그룹상품 리스트 조회
        	records6 = prdInfoMngDao.selectSrsGrpPrdListInq(searchMap);
        }

        // 연관상품 리스트 조회
        records7 = prdInfoMngDao.selectReltPrdListInq(searchMap);

        // 구매정보리스트 조회
        records8 = prdInfoMngDao.selectPurgInfoListInq(searchMap);

        // 첫번째 구매정보 선택 값 Set
        if(records8.size() > 0)
        {
        	records8.get(0).put("CHK","1");
        }

        // 화학물질정보 조회(tab)
        records9 = prdInfoMngDao.selectChmMtlInfoInq(searchMap);

        // 화학물질 추가규제정보
        records10 = prdInfoMngDao.selectChmMtlAddInfoInq(searchMap);

        // 상품인증정보 조회
        records11 = prdInfoMngDao.selectPrdCertInfoInq(searchMap);

        result.addDataSet("ds_master",         records1);	 // 상품정보관리상세수정 조회
        result.addDataSet("ds_catgRcmdInq",    records2);	 // 카테고리 추천&조회 조회
        result.addDataSet("ds_notiItmList",    records3);	 // 상품고시상품 조회
        result.addDataSet("ds_saveFileList",   records4);	 // 첨부파일내역 조회
        result.addDataSet("ds_srsGrp",         records5);	 // 시리즈상품그룹 조회
        result.addDataSet("ds_srsGrpList",     records6);	 // 시리즈그룹상품 리스트 조회
        result.addDataSet("ds_reltPrdList",    records7);	 // 연관상품 리스트 조회
        result.addDataSet("ds_purgInfoList",   records8);	 // 구매정보 리스트 조회
        result.addDataSet("ds_chmMtlList",     records9);    // 화학물질정보 조회
        result.addDataSet("ds_chmMtlAddList",  records10);   // 화학물질추가정보 조회
        result.addDataSet("ds_prdCertInfoList",records11);   // 상품인증정보 조회

        return result;
    }

    /**
     * 카테고리속성정보 리스트 조회(selectCatgAttrInfo)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectCatgAttrInfo(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records = prdInfoMngDao.selectCatgAttrInfo(searchMap);

        result.addDataSet("ds_catgRcmdInq",records);

        return result;
    }

    /**
     * 상품이미지리스트다운로드 조회(selectPrdImgListDownInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectPrdImgListDownInq(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records = prdInfoMngDao.selectPrdImgListDownInq(searchMap);

        prdInfoMngDao.deleteOdrInqTgtDtlsDel(searchMap);

        result.addDataSet("ds_imgFileList",  records);

        return result;
    }


	/**
	 * MRO상품정보 리스트 저장/수정
	 *
	 * @param mainMap
	 * @param catgMap
	 * @param notiMap
	 * @param fileMap
	 * @param userInfo
	 * @param contextRealPath
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult savePrdInfoMng(
		List<Map<String, Object>> mainMap
		, List<Map<String, Object>> catgMap
		, List<Map<String, Object>> notiMap
		, List<Map<String, Object>> fileMap
		, Map<String, Object> userInfo
		, String contextRealPath) throws Exception {
		NexacroResult result = new NexacroResult();
		int strCnt = 0;

		try {
			Map<String, Object> saveData = mainMap.get(0);

			saveData.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
			saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

			// MRO 상품정보 수정
			prdInfoMngDao.updatePrdInfoMng(saveData);

			/*
			 * SSP-2942 상품상태/진열상태 "종결" 반영 오류
			 * - 상품상태(10:미사용, 20:종결) 변경일 경우 진열상태 미진열 처리
			 */
			if (!"00".equals(StringUtil.getString(saveData.get("MRO_PRD_STATS_CD")))) {
				prdInfoMngDao.updatePrdDispStatsInfo(saveData);
			}

			// 상품가격내역카운트 조회
			strCnt = prdInfoMngDao.selectPrdPrcDtlsInqCount(saveData);

			// 상품가격내역카운트 존재시
			if (strCnt == 0) {
				prdInfoMngDao.insertPrdPrcDtlsReg(saveData);
			} else {
				if ("".equals(StringUtil.getString(saveData.get("DSTRB_STD_PRC")))) {
					saveData.put("DSTRB_STD_PRC", new BigDecimal("0"));
				}
				if ("".equals(StringUtil.getString(saveData.get("OLD_DSTRB_STD_PRC")))) {
					saveData.put("OLD_DSTRB_STD_PRC", new BigDecimal("0"));
				}
				// List Price가 바뀌었을 경우에만 상품가격이력 쌓음
				if (!StringUtil.getString(saveData.get("DSTRB_STD_PRC")).equals(StringUtil.getString(saveData.get("OLD_DSTRB_STD_PRC")))) {
					prdInfoMngDao.updatePrdPrcDtlsUpd(saveData);
				}
			}

			// 카테고리속성 리스트 존재 시
			if (catgMap.size() > 0) {
				for (int idx = 0; idx < catgMap.size(); idx++) {
					Map<String, Object> dataMap = catgMap.get(idx);
					
					dataMap.put("CO_CD", StringUtil.getString(saveData.get("CO_CD")));
					dataMap.put("PRD_ID", StringUtil.getString(saveData.get("PRD_ID")));
					dataMap.put("UPD_RSN", StringUtil.getString(saveData.get("UPD_RSN")));
					dataMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
					dataMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

					prdInfoMngDao.insertPrdInfoAttrMappStor(dataMap);
				}
			}

			// 상품고시품목속성 리스트 존재시
			if (notiMap.size() > 0) {
				for (int idx = 0; idx < notiMap.size(); idx++) {
					Map<String, Object> dataMap = notiMap.get(idx);

					dataMap.put("CO_CD", StringUtil.getString(saveData.get("CO_CD")));
					dataMap.put("PRD_ID", StringUtil.getString(saveData.get("PRD_ID")));
					dataMap.put("UPD_RSN", StringUtil.getString(saveData.get("UPD_RSN")));
					dataMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
					dataMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

					prdInfoMngDao.insertPrdNotiItmMappStor(dataMap);
				}
			}

			// 이미지 & 첨부파일 로직 처리
			if (fileMap.size() > 0) {
				// 이미지&첨부파일 삭제&수정 함수 호출
				fileUploadDowloadService.saveMultiFileDelUpdate(fileMap, contextRealPath);
			}

			//SSP상품명 저장
			if ("N".equals(StringUtil.getString(saveData, "SSP_PRD_NM_CHG_YN"))) {
				Map<String, Object> tmpMap = new HashMap<>();
				tmpMap.put("CO_CD", StringUtil.getString(saveData.get("CO_CD")));
				tmpMap.put("PRD_ID", StringUtil.getString(saveData.get("PRD_ID")));
				tmpMap.put("SESSION_OPRTR_ID", userInfo.get("EMP_NO"));
				prRegistProductDao.mergeSspPrdNmInfo(tmpMap);
			}
		} catch (MessageException e) {
			if (e.getCode() == -100) {
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
}