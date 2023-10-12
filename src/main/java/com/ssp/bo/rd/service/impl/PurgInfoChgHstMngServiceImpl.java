/*------------------------------------------------------------------------------
 * NAME : PurgInfoChgHstMngServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.06.10  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.ssp.bo.rd.dao.FileUploadDowloadDao;
import com.ssp.bo.rd.dao.KcCertInfoInqDao;
import com.ssp.bo.rd.dao.PurgInfoChgHstMngDao;
import com.ssp.bo.rd.dao.PurgInfoMngDao;
import com.ssp.bo.rd.dao.PurgInfoPkgChgDao;
import com.ssp.bo.rd.service.FileUploadDowloadService;
import com.ssp.bo.rd.service.PurgInfoChgHstMngService;
import com.ssp.bo.rd.util.StringUtils;
import com.ssp.core.co.dao.CommonDAO;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.rd.service.Pi_1801_MM03240Service;
import com.ssp.core.rd.service.Pi_1802_MM03270Service;
import com.ssp.core.rd.service.Pi_1804_MM03260Service;
import com.ssp.core.util.ObjectUtils;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   PurgInfoChgHstMngServiceImpl
 * @@desc   구매정보변경이력관리 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.06.10
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.06.10			       최초작성
 */
@Service("purgInfoChgHstMngService")
public class PurgInfoChgHstMngServiceImpl implements PurgInfoChgHstMngService {
	private Logger log = LoggerFactory.getLogger(this.getClass());
	
    @Resource(name = "purgInfoChgHstMngDao")
    private PurgInfoChgHstMngDao purgInfoChgHstMngDao;

    @Resource(name = "purgInfoPkgChgDao")
    private PurgInfoPkgChgDao purgInfoPkgChgDao;

    @Resource(name = "kcCertInfoInqDao")
    private KcCertInfoInqDao kcCertInfoInqDao;

    @Resource(name = "purgInfoMngDao")
    private PurgInfoMngDao purgInfoMngDao;

    @Resource(name = "fileUploadDowloadDao")
    private FileUploadDowloadDao fileUploadDowloadDao;

    @Resource(name = "fileUploadDowloadService")
    private FileUploadDowloadService fileUploadDowloadService;

	@Resource(name = "pi_1801_MM03240Service")
	private Pi_1801_MM03240Service pi_1801_MM03240Service;
	
	@Resource(name = "pi_1802_MM03270Service")
	private Pi_1802_MM03270Service pi_1802_MM03270Service;

	@Resource(name = "pi_1804_MM03260Service")
	private Pi_1804_MM03260Service pi_1804_MM03260Service;

	@Resource(name="commonDAO")
	private CommonDAO commonDAO;

    /**
     * 구매정보변경이력관리 리스트 조회(selectPurgInfoChgHstMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectPurgInfoChgHstMng(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<String> list = new ArrayList<String>();

        if(!ObjectUtils.isNull(searchMap.get("ELC_CONT_APPR_STATS_CD")))
        {
           list = StringUtils.makeList(searchMap.get("ELC_CONT_APPR_STATS_CD").toString(),",");
        }

        searchMap.put("ELC_CONT_APPR_STATS_CD_LIST", list);

        int totalCount    = purgInfoChgHstMngDao.selectPurgInfoChgHstMngCount(searchMap);
        List<Map> records = purgInfoChgHstMngDao.selectPurgInfoChgHstMng(searchMap);

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);

        return result;
    }

	/**
	 * 구매정보변경상세 조회(selectPurgInfoChgDtlInq)
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectPurgInfoChgDtlInq(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

		List<Map> records1 = null;
		List<Map> records2 = null;
		List<Map> records3 = null;
		List<Map> records4 = null;
		List<Map> records5 = null;
		List<Map> records6 = null;
		List<Map> records7 = new ArrayList<>();
		List<Map> records8 = new ArrayList<>();
		List<Map> records9 = null;

		// 상품정보 조회
		records1 = purgInfoChgHstMngDao.selectPrdInfoInq(searchMap);

		// 상품정보 조회
		result.addDataSet("ds_master", records1);

		if (records1.size() > 0) {
			searchMap.put("PRD_ID", records1.get(0).get("PRD_ID").toString());
			searchMap.put("CUST_PREQNO", records1.get(0).get("CUST_PREQNO").toString());
		}

		// 구매정보 조회
		records2 = purgInfoChgHstMngDao.selectPurgInfoInq(searchMap);

		// 구매정보 조회
		result.addDataSet("ds_purgInfo_L", records2);

		// 구매정보 존재시
		if (records2 != null && records2.size() > 0) {
			// 물량할인정보 조회
			searchMap.put("CONT_NO", records2.get(0).get("CONT_NO"));
			records3 = purgInfoChgHstMngDao.selectQtyDcInfoInq(searchMap);

			// 물량할인정보 조회
			result.addDataSet("ds_qtyDcList_L", records3);

			// KC인증정보 조회
			records4 = kcCertInfoInqDao.selectKcCertInfoInq(searchMap);

			// KC인증정보 조회
			result.addDataSet("ds_kcCertInfoList", records4);

			// <!-- 2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리 -->
			//if(records2.get(0).get("PRD_ATTC_FILEID") != null && "".equals(records2.get(0).get("PRD_ATTC_FILEID").toString()) == false)
			//{
			//    // MSDS첨부파일 조회
			//    searchMap.put("DOC_REG_ID", records2.get(0).get("PRD_ATTC_FILEID").toString());
			//    searchMap.put("ETC_FDS_2", "95");
			//    records5 = fileUploadDowloadDao.selectAttcFileDtlsInq(searchMap);
			//
			//    if(records5 != null && records5.size() > 0)
			//    {
			//    	Map<String, Object> dataMap = records5.get(0);
			//		records7.add(dataMap);
			//    }
			//}
			String[][] attcFiles = {
				{(String) records2.get(0).get("PRD_ATTC_FILEID"), "95"},  // MSDS - 95
				{(String) records2.get(0).get("LOC_ATTC_FILEID"), "9A"}   // LOC  - 9A
			};
			for (String[] attcFile : attcFiles) {
				if (attcFile[0] != null && !"".equals(attcFile[0].trim())) {
					searchMap.put("DOC_REG_ID", attcFile[0]);
					searchMap.put("ETC_FDS_2", attcFile[1]);  // ATFL_TP_CD [ 95: MSDS ]

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
				for (int idx = 0; idx < records6.size(); idx++) {
					Map<String, Object> dataMap = records6.get(idx);
					records7.add(dataMap);
				}
			}

			result.addDataSet("ds_saveFileList", records7);    // 첨부파일 조회
		}

		// 구매정보변경이력에서 호출시:Y, 구매정보등록에서 호출시:N
		searchMap.put("CHG_HST_YN", "Y");

		// 임시구매정보 조회
		records2 = purgInfoMngDao.selectPurgTmpInfoInq(searchMap);

		// 임시구매정보 조회
		result.addDataSet("ds_purgInfo_R", records2);

		// 임시구매정보 존재시
		if (records2 != null && records2.size() > 0) {
			// 계약번호 Set
			searchMap.put("CONT_NO", records2.get(0).get("CONT_NO").toString());
			// 계약변경차수 Set
			searchMap.put("CONT_CHG_DGRCNT", records2.get(0).get("CONT_CHG_DGRCNT").toString());
			// 임시물량할인정보 조회
			records3 = purgInfoMngDao.selectTmpQtyDcInfoInq(searchMap);

			// 임시물량할인정보 조회
			result.addDataSet("ds_qtyDcList_R", records3);

			// 임시KC인증정보 조회
			records4 = purgInfoMngDao.selectTbRdReqCprtcpConsnKcCertInfo(searchMap);

			// KC인증정보 조회
			result.addDataSet("ds_kcCertInfoList_R", records4);

			if (records2.get(0).get("PRD_ATTC_FILEID") != null && "".equals(records2.get(0).get("PRD_ATTC_FILEID").toString()) == false) {
				// MSDS첨부파일 조회
				searchMap.put("DOC_REG_ID", records2.get(0).get("PRD_ATTC_FILEID").toString());
				searchMap.put("ETC_FDS_2", "95");
				records5 = fileUploadDowloadDao.selectAttcFileDtlsInq(searchMap);

				if (records5 != null && records5.size() > 0) {
					Map<String, Object> dataMap = records5.get(0);
					records8.add(dataMap);
				}
			}

			// KC인증정보첨부파일내역 조회
			records6 = purgInfoMngDao.selectKcCertInfoAttcFileDtlsInq(searchMap);

			if (records6.size() > 0) {
				for (int idx = 0; idx < records6.size(); idx++) {
					Map<String, Object> dataMap = records6.get(idx);
					records8.add(dataMap);
				}
			}

			result.addDataSet("ds_saveFileList_R", records8);    // 첨부파일 조회
		}

		searchMap.put("CONT_NO", records1.get(0).get("CONT_NO").toString());          // 계약번호
		searchMap.put("CONT_CHG_DGRCNT", records1.get(0).get("CONT_CHG_DGRCNT").toString());  // 계약변경차수

		// 요청처리정보 조회
		records9 = purgInfoChgHstMngDao.selectReqProcDtlsInq(searchMap);

		// 요청처리정보 조회
		result.addDataSet("ds_reqProcDtlsList", records9);

		return result;
	}


    
    /**
     * 구매정보관리 리스트 저장/수정(savePurgInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult savePurgInfoMng(Map<String, Object>       saveMap
                                        , List<Map<String, Object>> qtyDcMap
                                        , List<Map<String, Object>> fileMap
                                        , List<Map<String, Object>> kcMap
                                        , Map<String, Object>       userInfo
                                        , String contextRealPath) throws Exception
    {
        NexacroResult result = new NexacroResult();

        String piSendYn = "N";
        int rowType;

	    try
	    {
	    	saveMap.put("ELC_CONT_APPR_STATS_CD","40"); // 전자계약승인상태코드 : 40[반려]
            saveMap.put("REGPSN_ID",             StringUtil.getString(userInfo.get("EMP_NO")));
            saveMap.put("UPDPSN_ID",             StringUtil.getString(userInfo.get("EMP_NO")));
	    	purgInfoPkgChgDao.insertReqCprtcpConsnStatsDtlsStor(saveMap);
	    	
	    	elcContMap(saveMap);//전자계약 반려 PI

	    	// 계약변경차수 PK키값 조회
            int recordKeyValue = purgInfoChgHstMngDao.selectContChgDgrcntKey(saveMap);

            saveMap.put("CONT_CHG_DGRCNT",recordKeyValue);

            // 구매정보신규생성 저장
            purgInfoChgHstMngDao.insertPurgInfoNewCrtStor(saveMap);

            // 구매정보 물량할인 리스트 존재시
            if(qtyDcMap.size() > 0)
            {
                for(int idx=0; idx<qtyDcMap.size(); idx++)
                {
                	Map<String,Object> dataMap = qtyDcMap.get(idx);

                	rowType = Integer.parseInt(String.valueOf(dataMap.get(DataSetRowTypeAccessor.NAME)));
                	dataMap.put("CONT_NO",        saveMap.get("CONT_NO").toString());         // 계약번호
                	dataMap.put("CONT_CHG_DGRCNT",saveMap.get("CONT_CHG_DGRCNT").toString()); // 계약변경차수

                	rowType = rowType == 0 ? DataSet.ROW_TYPE_UPDATED : rowType;
                	
                	if(rowType == DataSet.ROW_TYPE_INSERTED || rowType == DataSet.ROW_TYPE_UPDATED)
                    {
	                	dataMap.put("REGPSN_ID",      StringUtil.getString(userInfo.get("EMP_NO")));
	                	dataMap.put("UPDPSN_ID",      StringUtil.getString(userInfo.get("EMP_NO")));

	                	if(rowType == DataSet.ROW_TYPE_UPDATED)
	                	{
		                	// 수정건 존재시
		                	purgInfoMngDao.deleteReqCprtcpQtyConsnInfoStor(dataMap);
	                	}

	                    // 구매물량할인 리스트 존재시
	                	purgInfoMngDao.insertReqCprtcpQtyConsnInfoStor(dataMap);
                    }
                	else if(rowType == DataSet.ROW_TYPE_DELETED)
                	{
                		// 구매물량할인 삭제건 존재시
	                	purgInfoMngDao.deleteReqCprtcpQtyConsnInfoStor(dataMap);
                	}
                }
            }

            // KC인증정보 리스트 존재시
            if(kcMap.size() > 0)
            {
                for(int idx=0; idx<kcMap.size(); idx++)
                {
                	Map<String,Object> dataMap = kcMap.get(idx);

                	dataMap.put("CONT_NO",        saveMap.get("CONT_NO").toString());         // 계약번호
                	dataMap.put("CONT_CHG_DGRCNT",saveMap.get("CONT_CHG_DGRCNT").toString()); // 계약변경차수
                	dataMap.put("REGPSN_ID",      StringUtil.getString(userInfo.get("EMP_NO")));
                	dataMap.put("UPDPSN_ID",      StringUtil.getString(userInfo.get("EMP_NO")));

                    // 요청협력사합의KC인증정보 저장
                	purgInfoMngDao.insertTbRdReqCprtcpConsnKcCertInfo(dataMap);
                }
            }

            // 이미지 & 첨부파일 로직 처리
            if(fileMap.size() > 0)
            {
            	// 이미지&첨부파일 삭제&수정 함수 호출
            	fileUploadDowloadService.saveMultiFileDelUpdate(fileMap, contextRealPath);
            }

            piSendYn = "Y";
	    }
	    catch(MessageException e)
	    {
	        if(e.getCode() == -100)
	        {
	            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
	            result.setErrorCode(e.getCode());
	            result.setErrorMsg(e.getMessage());
	            return result;
	        }
	        else
	        {
	            throw e;
	        }
	    }

	    //전자계약 요청 PI
	    if("Y".equals(piSendYn))
        {
	    	saveMap.put("ELC_CONT_APPR_STATS_CD","20"); // 전자계약승인상태코드 : 20[요청신청]
	    	elcContMap(saveMap);
        }

        return result;
    }
    
    // 전자계약
    public Map<String,Object> elcContMap(Map<String,Object> saveMap){
    	
    	Map<String,Object> resultPi = null;
    	String XSTAT = null;
    	
    	String elcContApprStatsCd = StringUtil.getString(saveMap.get("ELC_CONT_APPR_STATS_CD"));
    	
    	try {
    		// 반려 : 40
        	if("40".equals(elcContApprStatsCd)) 
        	{
        		saveMap.put("ELC_CONT_APPR_STATS_CD","41"); // 전자계약승인상태코드 : 41[요청전자계약요청]
    	    	commonDAO.insert("RdElcCont.insertTbRdReqCprtcpConsnStatsDtls", saveMap);
    	    	
    	    	resultPi = this.pi_1804_MM03260Service.pi_1804_MM03260Request(saveMap);
    	    	
    	    	// 송신 결과
        		XSTAT = resultPi.get("XSTAT").toString();

        		// 등록불가 : 42, 반려전자계약요청실패 : 43  
    			if("S".equals(XSTAT))
    			{
    				saveMap.put("ELC_CONT_APPR_STATS_CD","42");
    			}
    			else
    			{
    				saveMap.put("ELC_CONT_APPR_STATS_CD","43");
    			}

    			commonDAO.insert("RdElcCont.insertTbRdReqCprtcpConsnStatsDtls", saveMap);
        	}
        	else if("20".equals(elcContApprStatsCd)) 
       		// 요청 : 20
        	{
        		saveMap.put("ELC_CONT_APPR_STATS_CD","21"); // 전자계약승인상태코드 : 21[요청전자계약요청]
    	    	commonDAO.insert("RdElcCont.insertTbRdReqCprtcpConsnStatsDtls", saveMap);
		    	
		    	// 등록 : 1, 변경 : 2
		    	if("1".equals(StringUtil.getString(saveMap.get("CONT_CHG_DGRCNT"))))
		    	{
		    		saveMap.put("contType",       "15");// R&D몰 구매정보등록 : 15
		    		saveMap.put("isExcelFile",    "N"); // 개별		    	
			    	resultPi = this.pi_1801_MM03240Service.pi_1801_MM03240Request(saveMap);
			    }
		    	else 
		    	{
		    		saveMap.put("contType",       "10");// R&D몰 구매정보(가격)변경요청_개별 : 10-1인 경우는 요청사유가 있어서 PI_1802로 전송한다.
		    		saveMap.put("isExcelFile",    "N"); // 개별		
		    		saveMap.put("reqSbjCd",       "20");// 요청 주체 코드 자사 : 20, 협력사 : 30
		    		saveMap.put("chgrqstRsn",     StringUtil.getString(saveMap.get("CHGRQST_RSN"))); // 요청사유		
			    	resultPi = this.pi_1802_MM03270Service.pi_1802_MM03270Request(saveMap);
			    	
			    }		    	
		    	
    	    	// 송신 결과
        		XSTAT = resultPi.get("XSTAT").toString();
        		
        		// 요청 : 22, 요청전자계약요청실패 : 23
    			if("D".equals(XSTAT))
    			{
    				saveMap.put("ELC_CONT_APPR_STATS_CD","22");
    			}
    			else
    			{
    				saveMap.put("ELC_CONT_APPR_STATS_CD","23");
    			}

    	    	commonDAO.insert("RdElcCont.insertTbRdReqCprtcpConsnStatsDtls", saveMap);     		
        	}
        	
        	
    	}catch(Exception e) {
    		log.error("elcContMap exception :", e);
    	}

    	
    	return resultPi;
    }

}
