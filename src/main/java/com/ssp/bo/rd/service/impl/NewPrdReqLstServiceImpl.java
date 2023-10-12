/*------------------------------------------------------------------------------
 * NAME : NewPrdReqLstServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.21  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import com.ssp.bo.co.service.CoMailSendService;
import com.ssp.bo.pc.dao.PcNewPrdReqPrcDao;
import com.ssp.bo.pr.dao.PrRegistProductDao;

import com.ssp.core.rd.service.RdProductStatusService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.dao.NewPrdReqLstDao;
import com.ssp.bo.rd.service.FileUploadDowloadService;
import com.ssp.bo.rd.service.NewPrdReqLstService;
import com.ssp.bo.rd.util.StringUtils;
import com.ssp.core.co.dao.CommonDAO;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.rd.service.Pi_1804_MM03260Service;
import com.ssp.core.rd.service.Pi_1805_MM03280Service;
import com.ssp.core.util.ObjectUtils;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   NewPrdReqLstServiceImpl
 * @@desc   신규상품요청처리 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.04.21
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.21			       최초작성
 */
@Service("newPrdReqLstService")
public class NewPrdReqLstServiceImpl implements NewPrdReqLstService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "fileUploadDowloadService")
	private FileUploadDowloadService fileUploadDowloadService;
	@Resource(name = "pi_1805_MM03280Service")
	private Pi_1805_MM03280Service pi_1805_MM03280Service;
	@Resource(name = "pi_1804_MM03260Service")
	private Pi_1804_MM03260Service pi_1804_MM03260Service;
	@Autowired
	private CoMailSendService coMailSendService;
	@Autowired
	private RdProductStatusService rdProductStatusService;

	@Resource(name = "commonDAO")
	private CommonDAO commonDAO;
	@Resource(name = "newPrdReqLstDao")
	private NewPrdReqLstDao newPrdReqLstDao;
	@Autowired
	private PrRegistProductDao prRegistProductDao;
	@Autowired
	private PcNewPrdReqPrcDao pcNewPrdReqPrcDao;


	/**
	 * 신규상품요청처리 리스트 조회(selectNewPrdReqLst)
	 *
	 * @param searchMap
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectNewPrdReqLst(Map<String, Object> searchMap, HttpSession session) throws Exception {
		NexacroResult result = new NexacroResult();
		List<String> list = new ArrayList<String>();

		searchMap.put("SES_ID", session.getId());

		if (!ObjectUtils.isNull(searchMap.get("NEW_PRD_REQ_STATS_CD"))) {
			list = StringUtils.makeList(searchMap.get("NEW_PRD_REQ_STATS_CD").toString(), ",");
		}

		searchMap.put("NEW_PRD_REQ_STATS_CD_LIST", list);

		int totalCount = newPrdReqLstDao.selectNewPrdReqLstCount(searchMap);
		List<Map> records = newPrdReqLstDao.selectNewPrdReqLst(searchMap);

		result.addDataSet("ds_master", records);
		result.addVariable("totalCount", totalCount);

		return result;
	}

    /**
     * 상품등록자사조회 리스트 조회(selectPrdRegOcorpInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectPrdRegOcorpInq(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records1 = null;
        List<Map> records2 = null;
        List<Map> records3 = null;
        List<Map> records4 = null;
        List<Map> records5 = null;
        List<Map> records6 = null;
        List<Map> records7 = null;
        List<Map> records8 = null;
        List<Map> records9 = null;

        // R&D상품등록(자사) 메인 조회
        records1 = newPrdReqLstDao.selectPrdRegOcorpInq(searchMap);

        if(records1.get(0).get("PRD_CLCD") != null && "".equals(records1.get(0).get("PRD_CLCD").toString()) == false)
		{
	        searchMap.put("PRD_CLCD",    CommUtil.nvl(records1.get(0).get("PRD_CLCD")).toString());
	        searchMap.put("OLD_PRD_CLCD",CommUtil.nvl(records1.get(0).get("PRD_CLCD")).toString());
            int procCnt = newPrdReqLstDao.selectNewPrdProcCount(searchMap);
            
            if(procCnt > 0) {
            	searchMap.put("STATE", "PROC");
            } else {
            	searchMap.put("STATE", "REQ");
            }
            
	        // 카테고리 추천&조회 조회
	        records2 = newPrdReqLstDao.selectCatgAttrInfo(searchMap);
		}

        if(records1.get(0).get("NOTI_ITM_ID") != null && "".equals(records1.get(0).get("NOTI_ITM_ID").toString()) == false)
		{
	        searchMap.put("PRD_ID",      CommUtil.nvl(records1.get(0).get("RND_REQ_PRD_ID")).toString());
	        searchMap.put("NOTI_ITM_ID", CommUtil.nvl(records1.get(0).get("NOTI_ITM_ID")).toString());

	        // 상품고시상품 조회
	        records3 = newPrdReqLstDao.selectPrdNotiPrdInq(searchMap);
		}

        if(records1.get(0).get("PPI_DOC_REG_ID") != null && "".equals(records1.get(0).get("PPI_DOC_REG_ID").toString()) == false)
		{
        	searchMap.put("DOC_REG_ID", CommUtil.nvl(records1.get(0).get("PPI_DOC_REG_ID")).toString());

	        // 첨부파일내역 조회
	        records4 = newPrdReqLstDao.selectAttcFileDtlsInq(searchMap);
		}

        // 요청처리내역 리스트 조회
        records5 = newPrdReqLstDao.selectReqProcDtlsInq(searchMap);

        result.addDataSet("ds_master",         records1);	// R&D상품등록(자사) 메인 조회
        result.addDataSet("ds_catgRcmdInq",    records2);	// 카테고리 추천&조회 조회
        result.addDataSet("ds_notiItmList",    records3);	// 상품고시상품 조회
        result.addDataSet("ds_saveFileList",   records4);	// 첨부파일내역 조회
        result.addDataSet("ds_reqProcDtlsList",records5);	// 요청처리내역 리스트 조회

        // R&D상품등록(협력사) & (고객) 요청 정보 조회
        if(searchMap.get("REQ_SBJ_CD") != null && ("30".equals(searchMap.get("REQ_SBJ_CD").toString()) || "10".equals(searchMap.get("REQ_SBJ_CD").toString())))
        {
        	// R&D상품등록(협력사) 요청 정보 조회
        	records6 = newPrdReqLstDao.selectCprtcpReqInfoInq(searchMap);

        	result.addDataSet("ds_cprtcpReqInfoInq",records6);

            if(records6.get(0).get("DOC_REG_ID") != null && "".equals(records6.get(0).get("DOC_REG_ID").toString()) == false)
    		{
            	searchMap.put("DOC_REG_ID", CommUtil.nvl(records6.get(0).get("DOC_REG_ID")).toString());

    	        // 협력사요청 첨부파일내역 조회
    	        records7 = newPrdReqLstDao.selectAttcFileDtlsInq(searchMap);

    	        result.addDataSet("ds_cprtcpReqAttcFile",records7);
    		}

            // 협력사인 경우에만 구매정보 조회
            if("30".equals(searchMap.get("REQ_SBJ_CD").toString()))
            {
	        	// 신규상품고객요청정보 리스트 조회
	        	records8 = newPrdReqLstDao.selectNewPrdCustReqInfo(searchMap);

	        	result.addDataSet("ds_newPrdCustReqInfo",records8);

	        	// 신규상품구매물량내역 리스트 조회
	        	records9 = newPrdReqLstDao.selectNewPrdPurgQtyDtls(searchMap);

	        	result.addDataSet("ds_newPrdPurgQtyDtls",records9);
            }
        }

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
        
        int procCnt = newPrdReqLstDao.selectNewPrdProcCount(searchMap);
        
        if(procCnt > 0) {
        	searchMap.put("STATE", "PROC");
        } else {
        	searchMap.put("STATE", "REQ");
        }

        List<Map> records = newPrdReqLstDao.selectCatgAttrInfo(searchMap);

        result.addDataSet("ds_catgRcmdInq", records);

        return result;
    }

    /**
     * 상품고시상품 리스트 조회(selectPrdNotiPrdInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectPrdNotiPrdInq(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records = newPrdReqLstDao.selectPrdNotiPrdInq(searchMap);

        result.addDataSet("ds_notiItmList", records);

        return result;
    }


	/**
	 * 상품ID존재여부 리스트 조회(selectPrdIdExstYn)
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectPrdIdExstYn(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

		String strPrdIdExstYn = newPrdReqLstDao.selectPrdIdExstYn(searchMap);

		result.addVariable("lv_PrdIdExstYn", strPrdIdExstYn);

		return result;
	}


    /**
     * 배지 리스트 정보 조회(selectBgListInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectBgListInfoInq(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records = newPrdReqLstDao.selectBgListInfoInq(searchMap);

        result.addDataSet("ds_bgList", records);

        return result;
    }

    /**
     * 코드체크여부 조회(selectCdChkYnInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectCdChkYnInq(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records = newPrdReqLstDao.selectCdChkYnInq(searchMap);

        result.addVariable("lv_ctryCdYn",records.get(0).get("CTRY_CD_YN").toString()); // 국가코드 정합성 여부
        result.addVariable("lv_mnfrNoYn",records.get(0).get("MNFR_NO_YN").toString()); // 제조원코드 정합성 여부

        return result;
    }


	/**
	 * 신규상품요청처리 리스트 저장/수정
	 *
	 * @param mainMap1
	 * @param catgMap2
	 * @param notiMap3
	 * @param fileMap4
	 * @param userInfo
	 * @param contextRealPath
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult saveNewPrdReqLst(
		List<Map<String, Object>> mainMap1
		, List<Map<String, Object>> catgMap2
		, List<Map<String, Object>> notiMap3
		, List<Map<String, Object>> fileMap4
		, Map<String, Object> userInfo
		, String contextRealPath
	) throws Exception {
		NexacroResult result = new NexacroResult();
		String strNewPrdReoNo = "";
		String strRndReqPrdId = "";

		Map<String, Object> saveData = mainMap1.get(0);

		// 신규 상품 요청번호
		List<Map> recordKeyValue = newPrdReqLstDao.selectNewPrdReqNoPKey(saveData);

		Map<String, Object> mapKeyValue = (Map<String, Object>) recordKeyValue.get(0);
		saveData.put("NEW_PRD_REQ_NO", mapKeyValue.get("NEW_PRD_REQ_NO").toString());

		// 신규 상품 ID
		recordKeyValue = newPrdReqLstDao.selectNewPrdIdPKey(saveData);

		mapKeyValue = (Map<String, Object>) recordKeyValue.get(0);
		saveData.put("RND_REQ_PRD_ID", mapKeyValue.get("RND_REQ_PRD_ID").toString());

		saveData.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
		saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

		newPrdReqLstDao.insertNewPrdReqLst(saveData);

		// 신규상품요청상태내역 요청 등록
		saveData.put("NEW_PRD_REQ_STATS_CD", "22"); // 요청상태
		saveData.put("MALL_SPR_CD", "20");          // R&D
		newPrdReqLstDao.insertNewPrdReqStatsDtls(saveData);

		// 신규상품요청상태내역 완료 등록
		saveData.put("NEW_PRD_REQ_STATS_CD", "52"); // 처리완료
		saveData.put("MALL_SPR_CD", "20");          // R&D MALL
		newPrdReqLstDao.insertNewPrdReqStatsDtls(saveData);

		strNewPrdReoNo = CommUtil.nvl(saveData.get("NEW_PRD_REQ_NO"));
		strRndReqPrdId = CommUtil.nvl(saveData.get("RND_REQ_PRD_ID"));

		// 카테고리속성정보 등록 로직 처리
		if (catgMap2.size() > 0) {
			for (Map<String, Object> dataMap : catgMap2) {
				dataMap.put("NEW_PRD_REQ_NO", strNewPrdReoNo);  // 상품 등록 요청번호
				dataMap.put("PRD_ID", strRndReqPrdId);          // 신규 상품 ID
				dataMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
				dataMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

				newPrdReqLstDao.insertNewPrdCustReqAttrInfo(dataMap);
			}
		}

		// 상품고시품목속성 등록 로직 처리
		if (notiMap3.size() > 0) {
			for (Map<String, Object> dataMap : notiMap3) {
				dataMap.put("NEW_PRD_REQ_NO", strNewPrdReoNo);    // 상품 등록 요청번호
				dataMap.put("RND_REQ_PRD_ID", strRndReqPrdId);    // 신규 상품 ID
				dataMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
				dataMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

				newPrdReqLstDao.insertRegProcPrdNotiItmMapp(dataMap);
			}
		}

		// 이미지 & 첨부파일 로직 처리
		if (fileMap4.size() > 0) {
			// 이미지&첨부파일 삭제&수정 함수 호출
			fileUploadDowloadService.saveMultiFileDelUpdate(fileMap4, contextRealPath);
		}

		// SSP 상품명
		Map<String, Object> sspPrdNmMap = new HashMap<>();
		sspPrdNmMap.put("CO_CD", StringUtil.getString(saveData.get("CO_CD")));
		sspPrdNmMap.put("PRD_ID", strRndReqPrdId);  // 상품 ID
		sspPrdNmMap.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("EMP_NO")));
		prRegistProductDao.mergeSspPrdNmInfo(sspPrdNmMap);

		return result;
	}


	/**
	 * 고객, 협력사 신규상품 등록 처리
	 *
	 * @param mainMap1
	 * @param catgMap2
	 * @param notiMap3
	 * @param fileMap4
	 * @param custMap5
	 * @param purgMap6
	 * @param userInfo
	 * @param contextRealPath
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult saveCprtcpRegStor(
		List<Map<String, Object>> mainMap1
		, List<Map<String, Object>> catgMap2
		, List<Map<String, Object>> notiMap3
		, List<Map<String, Object>> fileMap4
		, List<Map<String, Object>> custMap5
		, List<Map<String, Object>> purgMap6
		, Map<String, Object> userInfo
		, String contextRealPath
	) throws Exception {
		NexacroResult result = new NexacroResult();
		String strNewPrdReoNo = "";
		String strRndReqPrdId = "";

		Map<String, Object> saveData = mainMap1.get(0);

		/*
			SSP-3052
			신규상품 요청 처리 중복 체크
		 */
		Map<String, Object> productDuplicateStatusMap = rdProductStatusService.selectProductDuplicateStatusInfo(saveData, userInfo);

		// 중복 처리가 아닌 경우
		if ("Y".equals(productDuplicateStatusMap.get("SUCCESS"))) {
			List<Map> recordKeyValue = newPrdReqLstDao.selectNewPrdIdPKey(saveData);

			Map<String, Object> mapKeyValue = (Map<String, Object>) recordKeyValue.get(0);
			saveData.put("RND_REQ_PRD_ID", mapKeyValue.get("RND_REQ_PRD_ID").toString());
			saveData.put("MALL_SPR_CD", "20");    // R&D : 20

			saveData.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
			saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

			newPrdReqLstDao.insertCprtcpRegStor(saveData);

			if ("10".equals(saveData.get("REQ_SBJ_CD").toString())) {
				// R&D 신규상품 상품등록(고객)인 경우
				saveData.put("NEW_PRD_REQ_STATS_CD", "29");
			} else {
				// 협력사인 경우
				saveData.put("NEW_PRD_REQ_STATS_CD", "50");
			}

			newPrdReqLstDao.insertNewPrdReqStatsDtls(saveData);

			strNewPrdReoNo = CommUtil.nvl(saveData.get("NEW_PRD_REQ_NO"));
			strRndReqPrdId = CommUtil.nvl(saveData.get("RND_REQ_PRD_ID"));

			// 카테고리속성정보 등록 로직 처리
			if (catgMap2.size() > 0) {
				for (Map<String, Object> dataMap : catgMap2) {
					dataMap.put("NEW_PRD_REQ_NO", strNewPrdReoNo);  // 신규상품 요청번호
					dataMap.put("PRD_ID", strRndReqPrdId);          // 신규상품 ID
					dataMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
					dataMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

					newPrdReqLstDao.insertNewPrdReqProcAttrInfoStor(dataMap);
				}
			}

			// 상품고시품목속성 등록 로직 처리
			if (notiMap3.size() > 0) {
				for (Map<String, Object> dataMap : notiMap3) {
					dataMap.put("RND_REQ_PRD_ID", strRndReqPrdId);    // 신규상품 ID
					dataMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
					dataMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

					newPrdReqLstDao.insertRegProcPrdNotiItmMapp(dataMap);
				}
			}

			// 가격조건내역 등록 처리
			if (custMap5.size() > 0) {
				Map<String, Object> dataMap1 = custMap5.get(0);
				dataMap1.put("PRD_ID", strRndReqPrdId);         // 신규상품 ID
				dataMap1.put("RND_REQ_PRD_ID", strRndReqPrdId); // 신규상품 ID
				dataMap1.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
				dataMap1.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

				newPrdReqLstDao.insertCprtcpDupPrdProcStor(dataMap1);

				// 기간할인 등록
				if (!"".equals(StringUtil.getString(dataMap1.get("RND_DC_QTY")))) {
					Map<String, Object> periodDcMap = new HashMap<>();
					periodDcMap.putAll(dataMap1);
					periodDcMap.put("QTY_ITV_STR", 0);
					periodDcMap.put("END_QTY_CNT", 0);
					periodDcMap.put("PRC_COND_SPR_CD", "ZM02");
					periodDcMap.put("VLD_STR_DT", StringUtil.getString(dataMap1.get("RND_DC_VLD_STR_DTM")).replace(".", ""));
					periodDcMap.put("VLD_END_DT", StringUtil.getString(dataMap1.get("RND_DC_VLD_END_DTM")).replace(".", ""));
					periodDcMap.put("DC_AMT", dataMap1.get("RND_DC_QTY"));

					newPrdReqLstDao.insertPrcCondDtls(periodDcMap);
				}

				if (purgMap6.size() > 0) {
					for (Map<String, Object> dataMap2 : purgMap6) {
						// 할인금액
						if (dataMap2.get("DC_AMT") != null && !"".equals(dataMap2.get("DC_AMT").toString())) {
							dataMap1.put("DC_AMT", dataMap2.get("DC_AMT").toString());
						}

						// 할인 시작 물량 개수
						dataMap1.put("QTY_ITV_STR", dataMap2.get("QTY_ITV_STR").toString());

						newPrdReqLstDao.insertPrcCondDtls(dataMap1);
					}
			/*} else {
				newPrdReqLstDao.insertPrcCondDtls(dataMap1);*/
				}
			}

			// 이미지 & 첨부파일 로직 처리
			if (fileMap4.size() > 0) {
				// 이미지&첨부파일 삭제&수정 함수 호출
				fileUploadDowloadService.saveMultiFileDelUpdate(fileMap4, contextRealPath);
			}

			// SSP 상품명 저장
			Map<String, Object> sspPrdNmMap = new HashMap<>();
			sspPrdNmMap.put("CO_CD", StringUtil.getString(saveData.get("CO_CD")));
			sspPrdNmMap.put("PRD_ID", strRndReqPrdId);
			sspPrdNmMap.put("SESSION_OPRTR_ID", userInfo.get("EMP_NO"));

			prRegistProductDao.mergeSspPrdNmInfo(sspPrdNmMap);

			// R&D상품등록(협력사)인 경우
			if ("30".equals(saveData.get("REQ_SBJ_CD").toString())) {
				// 51 : 승인전자계약요청
				saveData.put("NEW_PRD_REQ_STATS_CD", "51");

				commonDAO.insert("RdElcCont.insertNewPrdReqStatsDtls", saveData);

				saveData.put("REQ_TYPE", "SSP_BD_RD_23");
				saveData.put("CPRTCP_ID", custMap5.get(0).get("CPRTCP_ID").toString());

				// PI_1805(구매정보 확정:서브원 서명) 전송
				Map<String, Object> resultPi = this.pi_1805_MM03280Service.pi_1805_MM03280Request(saveData);

				// PI 전송 결과
				String XSTAT = resultPi.get("XSTAT").toString();
				saveData.put("PI_IFID", "PI_1805");
				saveData.put("PI_STAT", XSTAT);
				saveData.put("PI_MSG", resultPi.get("XMSGS").toString());
				saveData.put("PI_DATE", resultPi.get("XDATE").toString());
				saveData.put("PI_TIME", resultPi.get("XTIME").toString());

				if ("S".equals(XSTAT)) {
					// 52 : 처리 완료
					saveData.put("NEW_PRD_REQ_STATS_CD", "52");
				} else {
					// 53 : 승인전자계약실패
					saveData.put("NEW_PRD_REQ_STATS_CD", "53");
				}

				commonDAO.insert("RdElcCont.insertNewPrdReqStatsDtls", saveData);
			}
		}

		result.addDataSet("ds_output", productDuplicateStatusMap);

		return result;
	}


	/**
	 * 협력사중복상품처리저장 리스트 저장/수정
	 *
	 * @param mainMap1
	 * @param custMap2
	 * @param purgMap3
	 * @param userInfo
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult saveCprtcpDupPrdProcStor(
		List<Map<String, Object>> mainMap1
		, List<Map<String, Object>> custMap2
		, List<Map<String, Object>> purgMap3
		, Map<String, Object> userInfo
	) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> saveData = custMap2.get(0);
		saveData.put("MALL_SPR_CD", "20");
		saveData.put("NEW_PRD_REQ_STATS_CD", "56");     // 중복상품처리승인신청
		saveData.put("PRD_PRPS_SPR_CD", "20");          // 제안코드 : 중복
		saveData.put("PRD_ID", mainMap1.get(0).get("RND_REQ_PRD_ID").toString());
		saveData.put("RND_REQ_PRD_ID", mainMap1.get(0).get("RND_REQ_PRD_ID").toString());
		saveData.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
		saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

		newPrdReqLstDao.insertNewPrdReqStatsDtls(saveData);
		newPrdReqLstDao.insertCprtcpDupPrdProcStor(saveData);

		// 가격조건내역 등록 로직 처리
		if (custMap2.size() > 0) {
			// 가격조건내역 삭제
			newPrdReqLstDao.deletePrcCondDtls(saveData);

			if (purgMap3.size() > 0) {
				for (int idx = 0; idx < purgMap3.size(); idx++) {
					Map<String, Object> dataMap = purgMap3.get(idx);

					if (dataMap.get("DC_AMT") != null && !"".equals(dataMap.get("DC_AMT").toString())) {
						saveData.put("DC_AMT", dataMap.get("DC_AMT").toString());        // 할인금액
					}
					saveData.put("QTY_ITV_STR", dataMap.get("QTY_ITV_STR").toString());    // 시작물량개수

					newPrdReqLstDao.insertPrcCondDtls(saveData);
				}
			} else {
				newPrdReqLstDao.insertPrcCondDtls(saveData);
			}
		}

		return result;
	}


	/**
	 * 상품요청반려처리저장
	 *
	 * @param mainMap
	 * @param userInfo
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult savePrdReqRjctProcStor(
		List<Map<String, Object>> mainMap
		, Map<String, Object> userInfo
	) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> saveData = mainMap.get(0);

		/*
			SSP-3052
			신규상품 요청 처리 중복 체크
		 */
		Map<String, Object> productDuplicateStatusMap = rdProductStatusService.selectProductDuplicateStatusInfo(saveData, userInfo);

		// 중복 처리가 아닌 경우
		if ("Y".equals(productDuplicateStatusMap.get("SUCCESS"))) {
			saveData.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
			saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

			int resultUpdate = newPrdReqLstDao.updateNewPrdReqRjctProc(saveData);

			if (resultUpdate != 0) {
				// 신규상품 예외종료시(반려) 고객에게 메일발송
				coMailSendService.newProductRejectedMailSend(saveData);

				String reqSbjCd = StringUtil.getString(saveData.get("REQ_SBJ_CD"));

				// 협력사인 경우만 전자계약. 협력사 : 30, 고객 : 10
				if ("30".equals(reqSbjCd)) {
					//41 : 반려전자계약요청
					saveData.put("MALL_SPR_CD", "20");
					saveData.put("NEW_PRD_REQ_STATS_CD", "41");
					commonDAO.insert("RdElcCont.insertNewPrdReqStatsDtls", saveData);

					// START PI 전송
					//계약번호 가지고 와서 삭제 PI 전송
					List<Map> contNoList = commonDAO.selectList("RdElcCont.selectContNo", saveData);
					String contNo = StringUtil.getString(contNoList.get(0).get("CONT_NO"));

					saveData.put("CONT_NO", contNo);
					Map<String, Object> resultPi = this.pi_1804_MM03260Service.pi_1804_MM03260Request(saveData);

					// pi 전송 결과
					String XSTAT = resultPi.get("XSTAT").toString();
					String XMSGS = resultPi.get("XMSGS").toString();
					String XDATE = resultPi.get("XDATE").toString();
					String XTIME = resultPi.get("XTIME").toString();

					saveData.put("PI_IFID", "PI_1804");
					saveData.put("PI_STAT", XSTAT);
					saveData.put("PI_MSG", XMSGS);
					saveData.put("PI_DATE", XDATE);
					saveData.put("PI_TIME", XTIME);

					// 42 : 등록불가, 43 : 반려전자계약요청실패
					if ("S".equals(XSTAT)) {
						saveData.put("NEW_PRD_REQ_STATS_CD", "42");
					} else {
						saveData.put("NEW_PRD_REQ_STATS_CD", "43");
					}

					commonDAO.insert("RdElcCont.insertNewPrdReqStatsDtls", saveData);
				}
			}
		}

		result.addDataSet("ds_output", productDuplicateStatusMap);

		return result;
	}


	/**
	 * 고객요청처리 저장
	 * - 대체제안
	 * - 중복상품처리
	 * - SSP이관
	 *
	 * @param mainMap
	 * @param userInfo
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult saveCustReqProc(
		List<Map<String, Object>> mainMap
		, Map<String, Object> userInfo
	) throws Exception {
		NexacroResult result = new NexacroResult();

		Map<String, Object> saveData = mainMap.get(0);

		/*
			SSP-3052
			신규상품 요청 처리 중복 체크
		 */
		Map<String, Object> productDuplicateStatusMap = rdProductStatusService.selectProductDuplicateStatusInfo(saveData, userInfo);

		// 중복 처리가 아닌 경우
		if ("Y".equals(productDuplicateStatusMap.get("SUCCESS"))) {
			saveData.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
			saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

			// 중복상품처리
			if ("56".equals(StringUtil.getString(saveData.get("NEW_PRD_REQ_STATS_CD")))) {
				// 공용
				if ("P".equals(StringUtil.getString(saveData.get("PUB_ONLY_SPR_CD")))) {
					// 구매정보유무, 진열여부 검증
					int cnt = newPrdReqLstDao.validatePurgInfo(saveData);
					// 구매정보 미존재시, 미진열 일경우 신규상품상태코드 29로 설정 (가격정보등록요청)
					if (cnt == 0) {
						saveData.put("NEW_PRD_REQ_STATS_CD", "29");
					}
					// 구매정보 존재, 진열상태면 고객 메일 발송
					else {
						Map<String, Object> emailData = new HashMap<>();
						emailData.put("coCd", StringUtil.getString(saveData.get("CO_CD")));
						emailData.put("langCd", "KO");
						emailData.put("usrId", StringUtil.getString(userInfo.get("EMP_NO")));
						emailData.put("prdId", StringUtil.getString(saveData.get("RND_REQ_PRD_ID")));
						emailData.put("newPrdReqNo", StringUtil.getString(saveData.get("NEW_PRD_REQ_NO")));
						coMailSendService.newProductCompleteMailSend(emailData);
					}
				}
				// 전용
				else if ("E".equals(StringUtil.getString(saveData.get("PUB_ONLY_SPR_CD")))) {
					// 해당사업장,운영단위 진열정보유무 검증
					int cnt = newPrdReqLstDao.validateDispInfo(saveData);
					// 진열정보 미존재시 신규상품상태코드 29로 설정 (가격정보등록요청)
					if (cnt == 0) {
						saveData.put("NEW_PRD_REQ_STATS_CD", "29");
					}
					// 진열정보 존재시 고객 메일 발송
					else {
						Map<String, Object> emailData = new HashMap<>();
						emailData.put("coCd", saveData.get("CO_CD").toString());
						emailData.put("langCd", "KO");
						emailData.put("usrId", StringUtil.getString(userInfo.get("EMP_NO")));
						emailData.put("prdId", StringUtil.getString(saveData.get("RND_REQ_PRD_ID")));
						emailData.put("newPrdReqNo", StringUtil.getString(saveData.get("NEW_PRD_REQ_NO")));
						coMailSendService.newProductCompleteMailSend(emailData);
					}
				}
			}

			// 대체중복제안시 고객 메일 발송
			if ("30".equals(StringUtil.getString(saveData.get("NEW_PRD_REQ_STATS_CD")))) {
				coMailSendService.newProductAltMailSend(saveData);
			}
			newPrdReqLstDao.updateCustReqProc(saveData);
		}

		result.addDataSet("ds_output", productDuplicateStatusMap);

		return result;
	}



    /**
     * 협력사 신규상품요청 검증(validateReqInfo) 
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public NexacroResult validateReqInfo(List<Map<String, Object>> mainMap) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String,Object> dataMap = mainMap.get(0);
		
		int cnt = newPrdReqLstDao.selectValidReqInfo(dataMap);
		if(cnt == 0) {
			result.addVariable("validYn","N");
		}else {
			result.addVariable("validYn","Y");
		}

		return result;
	}
}