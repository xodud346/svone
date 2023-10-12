/*------------------------------------------------------------------------------
 * NAME : PurgInfoMngServiceImpl.java
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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.ssp.bo.rd.dao.FileUploadDowloadDao;
import com.ssp.bo.rd.dao.KcCertInfoInqDao;
import com.ssp.bo.rd.dao.PurgInfoMngDao;
import com.ssp.bo.rd.service.FileUploadDowloadService;
import com.ssp.bo.rd.service.PurgInfoMngService;
import com.ssp.core.co.dao.CommonDAO;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.rd.service.Pi_1801_MM03240Service;
import com.ssp.core.util.StringUtil;

/**
 * 구매정보관리 ServiceImpl
 *
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.28			       최초작성
 */
@Service("purgInfoMngService")
public class PurgInfoMngServiceImpl implements PurgInfoMngService {

	@Resource(name = "fileUploadDowloadService")
	private FileUploadDowloadService fileUploadDowloadService;
	@Resource(name = "pi_1801_MM03240Service")
	private Pi_1801_MM03240Service pi_1801_MM03240Service;

	@Resource(name = "commonDAO")
	private CommonDAO commonDAO;
	@Resource(name = "purgInfoMngDao")
	private PurgInfoMngDao purgInfoMngDao;
	@Resource(name = "kcCertInfoInqDao")
	private KcCertInfoInqDao kcCertInfoInqDao;
	@Resource(name = "fileUploadDowloadDao")
	private FileUploadDowloadDao fileUploadDowloadDao;


	/**
	 * 구매정보관리 리스트 조회
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectPurgInfoMng(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

		int totalCount = purgInfoMngDao.selectPurgInfoMngCount(searchMap);
		List<Map> records = purgInfoMngDao.selectPurgInfoMng(searchMap);

		result.addDataSet("ds_master", records);
		result.addVariable("totalCount", totalCount);

		return result;
	}


    /**
     * 구매상품정보 조회(selectPrdInfoInq)
     * @param searchMap
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectPurgPrdInfoInq(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records1 = null;
        List<Map> records2 = null;
        List<Map> records3 = null;
        List<Map> records4 = null;
        List<Map> records5 = new ArrayList<Map>();
        List<Map> records6 = null;

        String strServerMsg = "";

        // 상품정보 조회
        records1 = purgInfoMngDao.selectPrdInfoInq(searchMap);

    	// 조회조건 상품ID & 협력사 값이 넘어왔을 경우에만 조회
        if((searchMap.get("PRD_ID") != null && "".equals(searchMap.get("PRD_ID").toString()) == false)
        && (searchMap.get("CPRTCP_ID") != null && "".equals(searchMap.get("CPRTCP_ID").toString()) == false))
        {
	        // 구매정보 조회
	        records2 = purgInfoMngDao.selectPurgInfoInq(searchMap);
        }

        // 구매정보 존재시
        if(records2 != null && records2.size() > 0)
        {
	        // 물량할인정보 조회
	        records3 = purgInfoMngDao.selectQtyDcInfoInq(searchMap);
	        // KC인증정보 조회
	        records4 = kcCertInfoInqDao.selectKcCertInfoInq(searchMap);

	        if(records2.get(0).get("PRD_ATTC_FILEID") != null && "".equals(records2.get(0).get("PRD_ATTC_FILEID").toString()) == false)
	        {
		        // MSDS첨부파일 조회
		        searchMap.put("DOC_REG_ID", records2.get(0).get("PRD_ATTC_FILEID").toString());
		        searchMap.put("ETC_FDS_2", "95");
		        records5 = fileUploadDowloadDao.selectAttcFileDtlsInq(searchMap);
	        }

	        // KC인증정보첨부파일내역 조회
	        records6 = kcCertInfoInqDao.selectKcCertInfoAttcFileDtlsInq(searchMap);

	        if(records6.size() > 0)
	        {
	        	for(int idx=0; idx<records6.size(); idx++)
	        	{
	        		Map<String, Object> dataMap = records6.get(idx);
	        		records5.add(dataMap);
	        	}
	        }

	        strServerMsg = "MAIN";
        }
        else
        {
        	// 조회조건 상품ID & 협력사 값이 넘어왔을 경우에만 조회
            if((searchMap.get("PRD_ID") != null && "".equals(searchMap.get("PRD_ID").toString()) == false)
            && (searchMap.get("CPRTCP_ID") != null && "".equals(searchMap.get("CPRTCP_ID").toString()) == false))
            {
                // 구매정보변경이력에서 호출시:Y, 구매정보등록에서 호출시:N
                searchMap.put("CHG_HST_YN","N");
	            // 임시구매정보 조회
	            records2 = purgInfoMngDao.selectPurgTmpInfoInq(searchMap);
            }

            // 임시구매정보 존재시
            if(records2 != null && records2.size() > 0)
            {
            	// 계약번호 Set
            	searchMap.put("CONT_NO",         records2.get(0).get("CONT_NO").toString());
            	// 계약변경차수 Set
            	searchMap.put("CONT_CHG_DGRCNT", records2.get(0).get("CONT_CHG_DGRCNT").toString());
                // 임시물량할인정보 조회
		        records3 = purgInfoMngDao.selectTmpQtyDcInfoInq(searchMap);
                // 임시KC인증정보 조회
		        records4 = purgInfoMngDao.selectTbRdReqCprtcpConsnKcCertInfo(searchMap);

		        if(records2.get(0).get("PRD_ATTC_FILEID") != null && "".equals(records2.get(0).get("PRD_ATTC_FILEID").toString()) == false)
		        {
			        // MSDS첨부파일 조회
			        searchMap.put("DOC_REG_ID", records2.get(0).get("PRD_ATTC_FILEID").toString());
			        searchMap.put("ETC_FDS_2", "95");
			        records5 = fileUploadDowloadDao.selectAttcFileDtlsInq(searchMap);
		        }

		        // KC인증정보첨부파일내역 조회
		        records6 = purgInfoMngDao.selectKcCertInfoAttcFileDtlsInq(searchMap);

		        if(records6.size() > 0)
		        {
		        	for(int idx=0; idx<records6.size(); idx++)
		        	{
		        		Map<String, Object> dataMap = records6.get(idx);
	        			records5.add(dataMap);
		        	};
		        }

		        strServerMsg = "TMP";
            }
        }

        result.addDataSet("ds_master",        records1);	// 상품정보 조회
        result.addDataSet("ds_purgInfo",      records2);	// 구매정보 조회
        result.addDataSet("ds_qtyDcList",     records3);	// 물량할인정보 조회
        result.addDataSet("ds_kcCertInfoList",records4);	// KC인증정보 조회
        result.addDataSet("ds_saveFileList",  records5);	// 첨부파일 조회
        result.addVariable("strServerMsg",    strServerMsg);

        return result;
    }

    /**
     * 구매정보상세 조회(selectPurgInfoDtlInq)
     * @param searchMap
     * @return
     * @throws Exception
     */
    @SuppressWarnings("null")
	@Override
    public NexacroResult selectPurgInfoDtlInq(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records1 = null;
        List<Map> records2 = null;
        List<Map> records3 = null;
        List<Map> records4 = null;
        List<Map> records5 = null;
        List<Map> records6 = null;
        List<Map> records7 = new ArrayList<Map>();
        List<Map> records8 = new ArrayList<Map>();

        // 상품정보 조회
        records1 = purgInfoMngDao.selectPrdInfoInq(searchMap);

        // 상품정보 조회
        result.addDataSet("ds_master",records1);

        // 구매정보 조회
        records2 = purgInfoMngDao.selectPurgInfoInq(searchMap);

        // 구매정보 조회
        result.addDataSet("ds_purgInfo_L",records2);

        // 구매정보 존재시
        if(records2 != null && records2.size() > 0)
        {
	        // 물량할인정보 조회
        	// 2022.12.06 sg.park - 가격유효기간을 설정하여 검색
			Map<String, Object> mPurgInfoInq = records2.get(0);
			searchMap.put("PERD_STR_DT", mPurgInfoInq.get("VLD_STR_DT"));    // PERD_STR_DT, PERD_END_DT
			searchMap.put("PERD_END_DT", mPurgInfoInq.get("VLD_END_DT"));
			records3 = purgInfoMngDao.selectQtyDcInfoInq(searchMap);
			searchMap.put("PERD_STR_DT", null);
			searchMap.put("PERD_END_DT", null);
			// 2022.12.06 sg.park - 가격유효기간을 설정하여 검색

	        // 물량할인정보 조회
	        result.addDataSet("ds_qtyDcList_L",records3);

	        // KC인증정보 조회
	        records4 = kcCertInfoInqDao.selectKcCertInfoInq(searchMap);

	        // KC인증정보 조회
	        result.addDataSet("ds_kcCertInfoList",records4);

 			//<!-- 2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리 -->	
			//if(records2.get(0).get("PRD_ATTC_FILEID") != null && "".equals(records2.get(0).get("PRD_ATTC_FILEID").toString()) == false)
			//{
			//	// MSDS첨부파일 조회
			//	searchMap.put("DOC_REG_ID", records2.get(0).get("PRD_ATTC_FILEID").toString());
			//	searchMap.put("ETC_FDS_2", "95");
			//	records5 = fileUploadDowloadDao.selectAttcFileDtlsInq(searchMap);
			//	
			//	if(records5 != null && records5.size() > 0)
			//	{
			//		Map<String, Object> dataMap = records5.get(0);
			//		records7.add(dataMap);
			//	}
			//}
			String[][] attcFiles = {
				  { (String) records2.get(0).get("PRD_ATTC_FILEID"), "95" }  // MSDS - 95
				, { (String) records2.get(0).get("LOC_ATTC_FILEID"), "9A" }  // LOC  - 9A
			};
			for (String[] attcFile : attcFiles) {
				if (attcFile[0] != null && !"".equals(attcFile[0].trim())) {
					searchMap.put("DOC_REG_ID", attcFile[0]);
					searchMap.put("ETC_FDS_2" , attcFile[1]);  // ATFL_TP_CD [ 95: MSDS ]
					
					records5 = fileUploadDowloadDao.selectAttcFileDtlsInq(searchMap);
					if (records5 != null && records5.size() > 0) {
						records7.addAll(records5);
					}
				}
			}
			// <!-- /2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리 -->

			// KC인증정보첨부파일내역 조회
			records6 = kcCertInfoInqDao.selectKcCertInfoAttcFileDtlsInq(searchMap);
			if (records6.size() > 0) {
				records7.addAll(records6);
			}

	        result.addDataSet("ds_saveFileList",records7);	// 첨부파일 조회
        }

        // 구매정보변경이력에서 호출시:Y, 구매정보등록에서 호출시:N
        searchMap.put("CHG_HST_YN","N");

        // 임시구매정보 조회
        records2 = purgInfoMngDao.selectPurgTmpInfoInq(searchMap);

        // 임시구매정보 조회
	    result.addDataSet("ds_purgInfo_R", records2);

        // 임시구매정보 존재시
        if(records2 != null && records2.size() > 0)
        {
        	// 계약번호 Set
        	searchMap.put("CONT_NO",         records2.get(0).get("CONT_NO").toString());
        	// 계약변경차수 Set
        	searchMap.put("CONT_CHG_DGRCNT", records2.get(0).get("CONT_CHG_DGRCNT").toString());
            // 임시물량할인정보 조회
	        records3 = purgInfoMngDao.selectTmpQtyDcInfoInq(searchMap);

	        // 임시물량할인정보 조회
	        result.addDataSet("ds_qtyDcList_R",records3);

            // 임시KC인증정보 조회
	        records4 = purgInfoMngDao.selectTbRdReqCprtcpConsnKcCertInfo(searchMap);

	        // KC인증정보 조회
	        result.addDataSet("ds_kcCertInfoList_R",records4);

// <!-- 2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리 -->
//			if(records2.get(0).get("PRD_ATTC_FILEID") != null && "".equals(records2.get(0).get("PRD_ATTC_FILEID").toString()) == false)
//			{
//				// MSDS첨부파일 조회
//				searchMap.put("DOC_REG_ID", records2.get(0).get("PRD_ATTC_FILEID").toString());
//				searchMap.put("ETC_FDS_2", "95");
//				records5 = fileUploadDowloadDao.selectAttcFileDtlsInq(searchMap);
//				
//				if(records5 != null && records5.size() > 0)
//				{
//					Map<String, Object> dataMap = records5.get(0);
//					records8.add(dataMap);
//				}
//			}
			String[][] attcFiles = {
				  { (String) records2.get(0).get("PRD_ATTC_FILEID"), "95" }  // MSDS - 95
				, { (String) records2.get(0).get("LOC_ATTC_FILEID"), "9A" }  // LOC  - 9A
			};
			for (String[] attcFile : attcFiles) {
				if (attcFile[0] != null && !"".equals(attcFile[0].trim())) {
					searchMap.put("DOC_REG_ID", attcFile[0]);
					searchMap.put("ETC_FDS_2" , attcFile[1]);  // ATFL_TP_CD [ 95: MSDS ]
					
					records5 = fileUploadDowloadDao.selectAttcFileDtlsInq(searchMap);
					if (records5 != null && records5.size() > 0) {
						records8.addAll(records5);
					}
				}
			}
// <!-- /2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리 -->
			
			// KC인증정보첨부파일내역 조회
			records6 = purgInfoMngDao.selectKcCertInfoAttcFileDtlsInq(searchMap);
			if(records6.size() > 0) {
				records8.addAll(records6);
			}

	        result.addDataSet("ds_saveFileList_R",records8);	// 첨부파일 조회
        }

        return result;
    }
    
    private Map<String, Object> setReqCprtcpConsnInfo(List<Map> purgInfo, Map<String, Object> param, Map<String, Object> userInfo) {
    	Map<String, Object> reqCprtcpConsnInfo = new HashMap<String, Object>();
    	
		if (purgInfo!=null && purgInfo.size() > 0) {
			reqCprtcpConsnInfo.put("CO_CD"    , purgInfo.get(0).get("CO_CD"    ));
			reqCprtcpConsnInfo.put("CPRTCP_ID", purgInfo.get(0).get("CPRTCP_ID"));
		} else {
			reqCprtcpConsnInfo.put("CO_CD"    , param.get("CO_CD"    ));
			reqCprtcpConsnInfo.put("CPRTCP_ID", param.get("CPRTCP_ID"));
		}
    	
    	reqCprtcpConsnInfo.put("CONT_NO", param.get("CONT_NO"));
    	reqCprtcpConsnInfo.put("CONT_CHG_DGRCNT", 0);
    	reqCprtcpConsnInfo.put("CUST_PURG_REQ_RULE_NO", param.get("CUST_PURG_REQ_RULE_NO"));
    	reqCprtcpConsnInfo.put("FNL_CONSN_YN", "N");
    	reqCprtcpConsnInfo.put("RJT_SBJ_CD", param.get("RJT_SBJ_CD"));
    	reqCprtcpConsnInfo.put("REGPSN_ID", userInfo.get("EMP_NO"));
    	reqCprtcpConsnInfo.put("UPDPSN_ID", userInfo.get("EMP_NO"));
    	
    	return reqCprtcpConsnInfo;
    }
    
    private Map<String, Object> setReqCprtcpConsnDtl(Map<String, Object> reqCprtcpConsnInfo, List<Map> purgInfo, Map<String, Object> param, Map<String, Object> userInfo) {
    	Map<String, Object> reqCprtcpConsnDtl = new HashMap<String, Object>();
    	reqCprtcpConsnDtl.put("CO_CD", reqCprtcpConsnInfo.get("CO_CD"));
    	reqCprtcpConsnDtl.put("CONT_NO", reqCprtcpConsnInfo.get("CONT_NO"));
    	reqCprtcpConsnDtl.put("CONT_CHG_DGRCNT", reqCprtcpConsnInfo.get("CONT_CHG_DGRCNT"));
    	reqCprtcpConsnDtl.put("PRD_ID", param.get("PRD_ID"));
    	
    	if (purgInfo!=null && purgInfo.size() > 0) {
    	reqCprtcpConsnDtl.put("SPL_PSB_YN", purgInfo.get(0).get("SPL_PSB_YN"));
    	reqCprtcpConsnDtl.put("MIN_ODR_QTY", purgInfo.get(0).get("MIN_ODR_QTY"));
    	reqCprtcpConsnDtl.put("PRD_PRC", purgInfo.get(0).get("PRD_PRC"));
    	reqCprtcpConsnDtl.put("DLV_AMT", purgInfo.get(0).get("DLV_AMT"));
    	reqCprtcpConsnDtl.put("DLV_LT", purgInfo.get(0).get("DLV_LT"));
    	reqCprtcpConsnDtl.put("VLD_STR_DT", purgInfo.get(0).get("VLD_STR_DT"));
    	reqCprtcpConsnDtl.put("VLD_END_DT", purgInfo.get(0).get("VLD_END_DT"));
    	reqCprtcpConsnDtl.put("KC_CERT_YN", purgInfo.get(0).get("KC_CERT_YN"));
    	reqCprtcpConsnDtl.put("PRD_ATTC_FILEID", purgInfo.get(0).get("PRD_ATTC_FILEID"));
    	reqCprtcpConsnDtl.put("RND_MSDS_URL", purgInfo.get(0).get("RND_MSDS_URL"));
    	reqCprtcpConsnDtl.put("MSDS_FNL_CHG_DTM", purgInfo.get(0).get("MSDS_FNL_CHG_DTM"));
    	reqCprtcpConsnDtl.put("RND_DC_VLD_STR_DTM", purgInfo.get(0).get("RND_DC_VLD_STR_DTM"));
    	reqCprtcpConsnDtl.put("RND_DC_VLD_END_DTM", purgInfo.get(0).get("RND_DC_VLD_END_DTM"));
    	reqCprtcpConsnDtl.put("RND_DC_QTY", purgInfo.get(0).get("RND_DC_QTY"));
    	}
    	
    	reqCprtcpConsnDtl.put("MTL_GRAVITY", param.get("MTL_GRAVITY"));
    	reqCprtcpConsnDtl.put("PHASE_SPR_CD", param.get("PHASE_SPR_CD"));
    	reqCprtcpConsnDtl.put("REGPSN_ID", userInfo.get("EMP_NO"));
    	reqCprtcpConsnDtl.put("UPDPSN_ID", userInfo.get("EMP_NO"));
    	
    	return reqCprtcpConsnDtl;
    }
    
    private Map<String, Object> setReqCprtcpConsnStatsDtls(Map<String, Object> reqCprtcpConsnInfo, List<Map> purgInfo, Map<String, Object> param, Map<String, Object> userInfo) {
    	Map<String, Object> reqCprtcpConsnStatsDtls = new HashMap<String, Object>();
    	reqCprtcpConsnStatsDtls.put("CO_CD", reqCprtcpConsnInfo.get("CO_CD"));
    	reqCprtcpConsnStatsDtls.put("CONT_NO", reqCprtcpConsnInfo.get("CONT_NO"));
    	reqCprtcpConsnStatsDtls.put("CONT_CHG_DGRCNT", reqCprtcpConsnInfo.get("CONT_CHG_DGRCNT"));
    	reqCprtcpConsnStatsDtls.put("CHGRQST_RSN", "0차수 등록");
    	reqCprtcpConsnStatsDtls.put("REGPSN_ID", userInfo.get("EMP_NO"));
    	reqCprtcpConsnStatsDtls.put("UPDPSN_ID", userInfo.get("EMP_NO"));
    	
    	return reqCprtcpConsnStatsDtls;
    }


	/**
	 * 구매정보관리 상세 합의요청 처리
	 *
	 * @param saveMap
	 * @param qtyDcMap
	 * @param fileMap
	 * @param kcMap
	 * @param userInfo
	 * @param contextRealPath
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult savePurgInfoMng(
		Map<String, Object> saveMap
		, List<Map<String, Object>> qtyDcMap
		, List<Map<String, Object>> fileMap
		, List<Map<String, Object>> kcMap
		, Map<String, Object> userInfo
		, String contextRealPath
	) throws Exception {
		NexacroResult result = new NexacroResult();
		String piSendYn = "N";
		int rowType;

		try {
			saveMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
			saveMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

			// 임시계약 번호 생성
			saveMap.put("CONT_NO", purgInfoMngDao.selectContNoPKey(saveMap));

			// 계약변경차수 미존재 시 default : '1'
			if ("".equals(StringUtil.getString(saveMap.get("CONT_CHG_DGRCNT")))) {
				saveMap.put("CONT_CHG_DGRCNT", "1");
			}

			// [합의번호] 견적요청 번호 생성 -> 견적요청과 동일한 시퀀스 사용중.
			saveMap.put("CUST_PURG_REQ_RULE_NO", purgInfoMngDao.selectCustPreqnoPKey(saveMap));

			// 구매정보신규생성 저장
			makeZeroReq(saveMap, userInfo);
			purgInfoMngDao.insertPurgInfoNewCrtStor(saveMap);

			// 구매정보 물량할인 리스트 존재 시
			if (qtyDcMap.size() > 0) {
				for (Map<String, Object> dataMap : qtyDcMap) {
					rowType = Integer.parseInt(String.valueOf(dataMap.get(DataSetRowTypeAccessor.NAME)));
					dataMap.put("CONT_NO", saveMap.get("CONT_NO").toString());  // 계약번호
					dataMap.put("CONT_CHG_DGRCNT", saveMap.get("CONT_CHG_DGRCNT").toString());  // 계약변경차수

					if (rowType != DataSet.ROW_TYPE_DELETED) {
						purgInfoMngDao.insertReqCprtcpQtyConsnInfoStor(dataMap);
					}
				}
			}

			// KC 인증정보 리스트 존재 시
			if (kcMap.size() > 0) {
				for (Map<String, Object> dataMap : kcMap) {
					dataMap.put("CONT_NO", saveMap.get("CONT_NO").toString());  // 계약번호
					dataMap.put("CONT_CHG_DGRCNT", saveMap.get("CONT_CHG_DGRCNT").toString());  // 계약변경차수
					dataMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
					dataMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

					// 요청 협력사 합의 KC 인증정보 저장
					purgInfoMngDao.insertTbRdReqCprtcpConsnKcCertInfo(dataMap);
				}
			}

			// 이미지 & 첨부파일 로직 처리
			if (fileMap.size() > 0) {
				// 이미지&첨부파일 삭제&수정 함수 호출
				fileUploadDowloadService.saveMultiFileDelUpdate(fileMap, contextRealPath);
			}

			piSendYn = "Y";
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

		// start pi 전송
		if ("Y".equals(piSendYn)) {
			try {
				String consnReqSpr = StringUtil.getString(saveMap.get("CONSN_REQ_SPR"));

				if ("I".equals(consnReqSpr)) {
					saveMap.put("contType", "15");  // 15:R&D몰 구매정보등록
				} else {
					saveMap.put("contType", "10");  // 10:R&D몰 구매정보(가격)변경요청_개별
				}

				saveMap.put("isExcelFile", "N"); // 개별
				saveMap.put("CONT_CHG_DGRCNT", "1"); // 차수는 무조건 1
				saveMap.put("ELC_CONT_APPR_STATS_CD", "21"); // 전자계약 요청

				commonDAO.insert("RdElcCont.insertTbRdReqCprtcpConsnStatsDtls", saveMap);

				Map<String, Object> resultPi = pi_1801_MM03240Service.pi_1801_MM03240Request(saveMap);

				// 송신 결과
//			    String XSTAT = "D";
				String XSTAT = resultPi.get("XSTAT").toString();

				// 신규상품요청상태내역 변경
				// 22:요청, 23:요청전자계약요청실패
				if ("D".equals(XSTAT)) {
					saveMap.put("ELC_CONT_APPR_STATS_CD", "22");
				} else {
					saveMap.put("ELC_CONT_APPR_STATS_CD", "23");
				}

				commonDAO.insert("RdElcCont.insertTbRdReqCprtcpConsnStatsDtls", saveMap);
			} catch (Exception e) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();

				Map<String, Object> responseMap = new HashMap<>();
				responseMap.put("PI_EXCEPTION_CODE", "ERRR000490");

				result.addDataSet("ds_master", responseMap);
			}
		}
		// end pi 전송

		return result;
	}


	/**
	 * 구매정보 수정(updatePurgInfoUpd)
	 *
	 * @param saveMap
	 * @param fileMap
	 * @param kcMap
	 * @param kcDelMap
	 * @param userInfo
	 * @param contextRealPath
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@Override
	public NexacroResult updatePurgInfoUpd(
		Map<String, Object> saveMap
		, List<Map<String, Object>> fileMap
		, List<Map<String, Object>> kcMap
		, List<Map<String, Object>> kcDelMap
		, Map<String, Object> userInfo
		, String contextRealPath
	) throws Exception {
		NexacroResult result = new NexacroResult();

		try {
			saveMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

			// 구매정보 변경
			purgInfoMngDao.updatePurgInfoUpd(saveMap);

			// 구매정보 변경 시 상품가격 관련 정보 등록
			purgInfoMngDao.insertRdPrdPrc(saveMap);

			// KC인증정보 리스트 존재시
			if (kcMap.size() > 0) {
				for (int idx = 0; idx < kcMap.size(); idx++) {
					Map<String, Object> insertMap = kcMap.get(idx);

					insertMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
					insertMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

					if (insertMap.get("KC_CERT_ITM_NO") == null) {
						// KC인증정보 저장
						kcCertInfoInqDao.insertKcCertInfoInq(insertMap);
					}
				}
			}

			// KC인증정보 삭제 리스트 존재시
			if (kcDelMap.size() > 0) {
				for (int idx = 0; idx < kcDelMap.size(); idx++) {
					Map<String, Object> deleteMap = kcDelMap.get(idx);

					// KC인증정보 삭제
					kcCertInfoInqDao.deleteKcCertInfoInq(deleteMap);
				}
			}

			// 이미지 & 첨부파일 로직 처리
			if (fileMap.size() > 0) {
				// 이미지&첨부파일 삭제&수정 함수 호출
				fileUploadDowloadService.saveMultiFileDelUpdate(fileMap, contextRealPath);
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


	@SuppressWarnings("unchecked")
	private void saveReqCprtcpQtyConsnInfoStor(
		List<Map> prcCond
		, Map<String, Object> reqCprtcpConsnInfo
		, Map<String, Object> param
		, Map<String, Object> userInfo
	) throws Exception {
		for (Map<String, Object> pc : prcCond) {
			Map<String, Object> savePc = new HashMap<>();

			savePc.put("CO_CD", reqCprtcpConsnInfo.get("CO_CD"));
			savePc.put("CONT_NO", reqCprtcpConsnInfo.get("CONT_NO"));
			savePc.put("CONT_CHG_DGRCNT", reqCprtcpConsnInfo.get("CONT_CHG_DGRCNT"));
			savePc.put("PRD_ID", param.get("PRD_ID"));
			savePc.put("STR_QTY_CNT", pc.get("STR_QTY_CNT"));
			savePc.put("QTY_DC_AMT", pc.get("QTY_DC_AMT"));
			savePc.put("REGPSN_ID", userInfo.get("EMP_NO"));
			savePc.put("UPDPSN_ID", userInfo.get("EMP_NO"));

			purgInfoMngDao.insertReqCprtcpQtyConsnInfoStor(savePc);
		}
	}


	@SuppressWarnings("unchecked")
	private void saveReqCprtcpConsnKcCert(
		Map<String, Object> reqCprtcpConsnInfo
		, Map<String, Object> param
		, Map<String, Object> userInfo
	) throws Exception {
		List<Map> kcCertInfo = kcCertInfoInqDao.selectKcCertInfoInq(param);

		if (kcCertInfo != null && kcCertInfo.size() > 0) {
			for (Map<String, Object> kc : kcCertInfo) {
				Map<String, Object> reqCprtcpConsnKcCert = new HashMap<>();

				reqCprtcpConsnKcCert.put("CO_CD", reqCprtcpConsnInfo.get("CO_CD"));
				reqCprtcpConsnKcCert.put("CONT_NO", reqCprtcpConsnInfo.get("CONT_NO"));
				reqCprtcpConsnKcCert.put("CONT_CHG_DGRCNT", reqCprtcpConsnInfo.get("CONT_CHG_DGRCNT"));

				reqCprtcpConsnKcCert.put("PRD_ID", param.get("PRD_ID"));
				reqCprtcpConsnKcCert.put("KC_CERT_YN", kc.get("KC_CERT_YN"));
				reqCprtcpConsnKcCert.put("KC_CERT_CD", kc.get("KC_CERT_CD"));
				reqCprtcpConsnKcCert.put("KC_CERT_NO", kc.get("KC_CERT_NO"));
				reqCprtcpConsnKcCert.put("DOC_REG_ID", kc.get("DOC_REG_ID"));
				reqCprtcpConsnKcCert.put("MEMO_CTS", "MEMO_CTS");
				reqCprtcpConsnKcCert.put("REGPSN_ID", userInfo.get("EMP_NO"));
				reqCprtcpConsnKcCert.put("UPDPSN_ID", userInfo.get("EMP_NO"));

				purgInfoMngDao.insertTbRdReqCprtcpConsnKcCertInfo(reqCprtcpConsnKcCert);
			}
		}
	}


	/**
	 * 전자계약 0차수 생성
	 *
	 * @param param
	 * @param userInfo
	 * @throws Exception
	 */
	private void makeZeroReq(Map<String, Object> param, Map<String, Object> userInfo) throws Exception {
		List<Map> purgInfo = purgInfoMngDao.selectPurgInfoInq(param);
		List<Map> prcCond = purgInfoMngDao.selectQtyDcInfoInq(param);

		Map<String, Object> reqCprtcpConsnInfo = setReqCprtcpConsnInfo(purgInfo, param, userInfo);
		Map<String, Object> reqCprtcpConsnDtl = setReqCprtcpConsnDtl(reqCprtcpConsnInfo, purgInfo, param, userInfo);
		Map<String, Object> reqCprtcpConsnStatsDtls = setReqCprtcpConsnStatsDtls(reqCprtcpConsnInfo, purgInfo, param, userInfo);

		Map<String, Object> saveParam = new HashMap<>();
		saveParam.putAll(reqCprtcpConsnInfo);
		saveParam.putAll(reqCprtcpConsnDtl);
		saveParam.putAll(reqCprtcpConsnStatsDtls);

		purgInfoMngDao.insertPurgInfoNewCrtStor(saveParam);
		saveReqCprtcpQtyConsnInfoStor(prcCond, reqCprtcpConsnInfo, param, userInfo);

		if (purgInfo != null && purgInfo.size() > 0 && "Y".equals(purgInfo.get(0).get("KC_CERT_YN"))) {
			saveReqCprtcpConsnKcCert(reqCprtcpConsnInfo, param, userInfo);
		}
	}
}
