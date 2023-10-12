/*------------------------------------------------------------------------------
 * NAME : CmsErrRepairServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.10  홍길동
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.rd.dao.PICallDao;
import com.ssp.core.rd.service.PI_PrdInfoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.ssp.bo.rd.dao.ChmMtlInfoMngDao;
import com.ssp.bo.rd.dao.CmsErrRepairDao;
import com.ssp.bo.rd.service.CmsErrRepairService;
import com.ssp.bo.rd.service.FileUploadDowloadService;
import com.ssp.bo.rd.util.StringUtils;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.rd.dao.PICallDao;
import com.ssp.core.rd.service.PI_PrdInfoService;
import com.ssp.core.util.ObjectUtils;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   CmsErrRepairServiceImpl
 * @@desc   CMS오류 정비 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.05.10			       최초작성
 */
@Service("cmsErrRepairService")
public class CmsErrRepairServiceImpl implements CmsErrRepairService {
	private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Resource(name = "fileUploadDowloadService")
    private FileUploadDowloadService fileUploadDowloadService;
	@Resource(name = "pI_PrdInfoService")
	private PI_PrdInfoService piPrdInfoService;

	@Resource(name = "cmsErrRepairDao")
    private CmsErrRepairDao cmsErrRepairDao;
    @Resource(name = "chmMtlInfoMngDao")
    private ChmMtlInfoMngDao chmMtlInfoMngDao;
	@Resource(name = "pICallDao")
	private PICallDao piCallDao;


	/**
	 * CMS오류 정비 리스트 조회(selectCmsErrRepair)
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectCmsErrRepair(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		List<String> list = new ArrayList<String>();

		if (!ObjectUtils.isNull(searchMap.get("ESTM_INFO_STATS_CD"))) {
			list = StringUtils.makeList(searchMap.get("ESTM_INFO_STATS_CD").toString(), ",");
		}

		searchMap.put("ESTM_INFO_STATS_CD_LIST", list);

		int totalCount = cmsErrRepairDao.selectCmsErrRepairCount(searchMap);
		List<Map> records = cmsErrRepairDao.selectCmsErrRepair(searchMap);

		result.addDataSet("ds_master", records);
		result.addVariable("totalCount", totalCount);

		return result;
	}


    /**
     * CMS오류정비상세 조회(selectCmsErrRepairDtlInq)
     * @param searchMap
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectCmsErrRepairDtlInq(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        // CMS오류정비상세 조회
        List<Map> records1 = cmsErrRepairDao.selectCmsErrRepairDtlInq(searchMap);

        // CMS오류정보요청 리스트 조회
        List<Map> records2 = cmsErrRepairDao.selectCmsErrRepairReqInq(searchMap);

        result.addDataSet("ds_master",records1);
        result.addDataSet("ds_detail",records2);

        return result;
    }

    /**
     * MSDS화학물질정보 조회(selectMsdsChmMtlInfoInq)
     * @param searchMap
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectMsdsChmMtlInfoInq(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records1 = null;
        List<Map> records2 = null;
        List<Map> records3 = null;
        List<Map> records4 = null;
        List<Map> records5 = new ArrayList<>();

        // MSDS화학물질정보 조회
    	records1 = cmsErrRepairDao.selectMsdsChmMtlInfoInq(searchMap);

    	// 화학물질정보 리스트 조회
    	records2 = cmsErrRepairDao.selectChmMtlInfoInq(searchMap);

    	// 화학물질정보추가 리스트 조회
    	records3 = cmsErrRepairDao.selectChmMtlAddInfoInq(searchMap);

    	if(records1.size() > 0)
    	{
    		// <!-- 2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리 -->
    		//// 첨부파일 MSDS파일 존재시
	    	//if(records1.get(0).get("DOC_ID1") != null && "".equals(records1.get(0).get("DOC_ID1").toString()) == false)
	    	//{
	    	//	searchMap.put("PRD_ATTC_FILEID",records1.get(0).get("DOC_ID1").toString());
	    	//	searchMap.put("ETC_FDS_2",      "95");
            //
	    	//	// MSDS첨부파일내역 조회
		    //    records4 = cmsErrRepairDao.selectAttcFileDtlsInq(searchMap);
            //
		    //    if(records4 != null && records4.size() > 0)
		    //    {
		    //    	for(int idx=0; idx<records4.size(); idx++)
		    //    	{
			//        	Map<String, Object> dataMap = records4.get(idx);
			//        	records5.add(dataMap);
		    //    	}
		    //    }
	    	//}
            //
	    	//// 시약요약정보 첨부파일 존재시
	    	//if(records1.get(0).get("DOC_ID2") != null && "".equals(records1.get(0).get("DOC_ID2").toString()) == false)
	    	//{
	    	//	searchMap.put("PRD_ATTC_FILEID",records1.get(0).get("DOC_ID2").toString());
	    	//	searchMap.put("ETC_FDS_2",      "S2");
            //
		    //    // 시약요약정보 첨부파일내역 조회
		    //    records4 = cmsErrRepairDao.selectAttcFileDtlsInq(searchMap);
            //
		    //    if(records4 != null && records4.size() > 0)
		    //    {
		    //    	for(int idx=0; idx<records4.size(); idx++)
		    //    	{
			//        	Map<String, Object> dataMap = records4.get(idx);
			//        	records5.add(dataMap);
		    //    	}
		    //    }
			//}
			String[][] aAtfls = {
				{ "DOC_ID1"        , "95" },  // 첨부파일 - MSDS파일 존재 시
				{ "DOC_ID2"        , "S2" },  // 첨부파일 - 시약요약정보 존재 시
				{ "LOC_ATTC_FILEID", "9A" }   // 첨부파일 - 레터파일 존재 시
			};
			for (String[] aAtfl : aAtfls) {
				String sAtflColId=aAtfl[0], sEtcFds2=aAtfl[1], vAtflId=(String) records1.get(0).get(sAtflColId);
				if (vAtflId != null && !"".equals(vAtflId)) {
					searchMap.put("PRD_ATTC_FILEID", vAtflId );
					searchMap.put("ETC_FDS_2"      , sEtcFds2);
					records4 = cmsErrRepairDao.selectAttcFileDtlsInq(searchMap);
					if (records4 != null && records4.size() > 0) {
						records5.addAll(records4);
					}
				}   // if (vAtflId != null && !"".equals(vAtflId)) {
			}   // for (String[] aAtfl : aAtfls) {
			// <!-- /2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리 -->
		}

        result.addDataSet("ds_msdsMaster",   records1);		// 화학물질상품정보 리스트 조회
        result.addDataSet("ds_chmMtlList",   records2);		// 화학물질정보 리스트 조회
        result.addDataSet("ds_chmMtlAddList",records3);		// 화학물질정보추가 리스트 조회
        result.addDataSet("ds_saveFileList", records5);		// 첨부파일 리스트 조회

        return result;
    }

	/**
	 * CMS오류상세견적상태내역 저장(saveCmsErrDtlEstmStatsDtlsStor)
	 *
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult saveCmsErrDtlEstmStatsDtlsStor(Map<String, Object> searchMap
		, List<Map<String, Object>> saveMap
		, Map<String, Object> userInfo) throws Exception {

		NexacroResult result = new NexacroResult();

		try {
			for (int idx = 0; idx < saveMap.size(); idx++) {
				Map<String, Object> dataMap = saveMap.get(idx);

				// 선택된 대상만 프로시저 호출
				if ("1".equals(dataMap.get("CHK").toString())) {
					Map<String, Object> procMap = new HashMap<>();
					procMap.put("O_RTN_CD", "");
					procMap.put("O_RTN_MSG", "");
					procMap.put("I_CO_CD", dataMap.get("CO_CD").toString());
					procMap.put("I_CUST_PREQNO", dataMap.get("CUST_PREQNO").toString());
					procMap.put("I_CPRTCP_ID", dataMap.get("CPRTCP_ID").toString());
					procMap.put("I_UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
					procMap.put("I_GB", dataMap.get("CO_GB").toString());

					// CMS오류정비 저장
					cmsErrRepairDao.updateSpRdCmsRepair(procMap);

					// 프로시저에서 에러로 나올 경우
					if ("E".equals(procMap.get("O_RTN_CD"))) {
						throw new MessageException(-200, procMap.get("O_RTN_MSG").toString());
					}
				}
			}

			// CMS오류정비메인화면에서 호출시
			if ("Y".equals(StringUtil.getString(searchMap.get("MAIN_GUBUN")))) {
				List<String> list = new ArrayList<String>();

				if (!ObjectUtils.isNull(searchMap.get("ESTM_INFO_STATS_CD"))) {
					list = StringUtils.makeList(searchMap.get("ESTM_INFO_STATS_CD").toString(), ",");
				}

				searchMap.put("ESTM_INFO_STATS_CD_LIST", list);

				int totalCount = cmsErrRepairDao.selectCmsErrRepairCount(searchMap);
				List<Map> records = cmsErrRepairDao.selectCmsErrRepair(searchMap);

				result.addDataSet("ds_master", records);
				result.addVariable("totalCount", totalCount);
			} else {
				// CMS오류정비상세 조회
				List<Map> records1 = cmsErrRepairDao.selectCmsErrRepairDtlInq(searchMap);

				// CMS오류정보요청 리스트 조회
				List<Map> records2 = cmsErrRepairDao.selectCmsErrRepairReqInq(searchMap);

				result.addDataSet("ds_master", records1);
				result.addDataSet("ds_detail", records2);
			}
		} catch (MessageException e) {
			if (e.getCode() == -200) {
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



    /**
     * CMS오류상세 저장(saveCmsErrDtlStor)
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult saveCmsErrDtlStor(Map<String, Object> searchMap
                                         , Map<String, Object> mainMap
                                         , List<Map<String, Object>> saveMap
                                         , List<Map<String, Object>> saveFileMap
                                         , Map<String, Object> userInfo
                                         , String contextRealPath) throws Exception {

        NexacroResult result = new NexacroResult();

        int rowType;

	    try
	    {
	    	mainMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
	    	mainMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

	    	// CMS오류상세 저장
	    	cmsErrRepairDao.updateCmsErrDtlStor(mainMap);

	        if(saveMap.size() > 0)
	        {
	            LocalDate nowDate = LocalDate.now();
	            DateTimeFormatter formatter1 = DateTimeFormatter.ofPattern("yyyy-MM-dd");
	            String formatedNow = nowDate.format(formatter1);

	            LocalTime nowTime = LocalTime.now();
	            DateTimeFormatter formatter2 = DateTimeFormatter.ofPattern("HH:mm:ss");
	            String formatedTime = nowTime.format(formatter2);

	            String dateDtm = formatedNow + " " + formatedTime;

	            for(int idx=0; idx<saveMap.size(); idx++)
	            {
	                 Map<String,Object> saveData = saveMap.get(idx);

	                 rowType = Integer.parseInt(String.valueOf(saveData.get(DataSetRowTypeAccessor.NAME)));

	                 saveData.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
	                 saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

	                 saveData.put("REG_DTM",dateDtm);
	                 saveData.put("UPD_DTM",dateDtm);

	                 if(rowType == DataSet.ROW_TYPE_INSERTED)
	                 {
	                	  // 화학물질정보확인 저장
	                     chmMtlInfoMngDao.insertChmMtlInfoCnf(saveData);
	                 }
	                 else if(rowType == DataSet.ROW_TYPE_UPDATED)
	                 {
	                	  // 화학물질정보확인 수정
	                	  chmMtlInfoMngDao.updateChmMtlInfoCnf(saveData);
	                 }
	                 else if(rowType == DataSet.ROW_TYPE_DELETED)
	                 {
	                	  // 화학물질정보 삭제
	                     chmMtlInfoMngDao.deleteChmMtlInfoDel(saveData);
	                 }
	            }
	            Map<String, Object> procMap = new HashMap<>();
		    	procMap.put("I_CO_CD", mainMap.get("CO_CD").toString());
		    	procMap.put("I_PRD_ID",mainMap.get("PRD_ID").toString());

		    	 // 화학물질처리 저장
		    	chmMtlInfoMngDao.updateSpRdChmMtlsProc(procMap);
	        }

	        if(saveFileMap.size() > 0)
	        {
	        	// 이미지&첨부파일 삭제&수정 함수 호출
	        	fileUploadDowloadService.saveMultiFileDelUpdate(saveFileMap,contextRealPath);
	        }

	    	Map<String, Object> procMap = new HashMap<>();
	    	procMap.put("O_RTN_CD"       , "");
	    	procMap.put("O_RTN_MSG"      , "");
	    	procMap.put("I_CO_CD"        , mainMap.get("CO_CD"              ).toString());
	    	procMap.put("I_PRD_ID"       , mainMap.get("PRD_ID"             ).toString());
	    	procMap.put("I_CPRTCP_ID"    , mainMap.get("CPRTCP_ID"          ).toString());
	    	procMap.put("I_UPDPSN_ID"    , StringUtil.getString(userInfo.get("EMP_NO" )));
	    	procMap.put("I_CUR_DOC_ID"   , StringUtil.getString(mainMap .get("DOC_ID1")));
//	    	procMap.put("LOC_ATTC_FILEID", StringUtil.getString(mainMap .get("DOC_ID3")));

	    	// CMS오류정비MSDS파일 저장
	    	cmsErrRepairDao.updateSpRdCmsRepairMsds(procMap);

	    	// 프로시저에서 에러로 나올 경우
            if("E".equals(procMap.get("O_RTN_CD")))
            {
            	throw new MessageException(-200, procMap.get("O_RTN_MSG").toString());
            }
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
        return result;
    }


	/**
	 * <PRE>
	 * 상품정보 PI-1301 호출
	 * - 상품전송정보 저장
	 * - PI 호출
	 * </PRE>
	 * @param prdMap
	 * @param userInfo
	 * @return
	 * @throws Exception
	 */
	@Override
	public int savePIPrdInfo(List<Map<String, Object>> prdMap, Map<String, Object> userInfo) throws Exception {
		int resultCnt = 0;

		if (prdMap.size() > 0) {
			Map<String, Object> piPrdInfoMap = new HashMap<>();
			// PI MESSAGE ID SEQ.NEXTVAL
			String piPrdInfoMessageID = cmsErrRepairDao.selectPIPrdInfoMessageID(piPrdInfoMap);

			piPrdInfoMap.put("loginId", userInfo.get("EMP_NO"));
			piPrdInfoMap.put("ifCoCd", userInfo.get("CO_CD"));
			piPrdInfoMap.put("indvPkgSprCd", "10");   // 개별
			piPrdInfoMap.put("IF_MSG_ID", piPrdInfoMessageID);
			piPrdInfoMap.put("ifMsgId", piPrdInfoMessageID);
			piPrdInfoMap.put("IF_MSG_SEQ", 100001);

			for (Map<String, Object> mapItem : prdMap) {
				piPrdInfoMap.put("PRD_ID", mapItem.get("PRD_ID"));

				// 상품 정보 전송 테이블 등록
				int prdInfoTransCnt = piCallDao.insertPrdInfo(piPrdInfoMap);
				if (prdInfoTransCnt > 0) {
 					resultCnt = piPrdInfoService.PI_PrdInfo(piPrdInfoMap);
					if (resultCnt > 0) {
						//전송 후 SND_YN 상태값 변경(P)
						piCallDao.updatePrdInfo(piPrdInfoMap);
					}
				}
			}
		}

		return resultCnt;
	}

}
