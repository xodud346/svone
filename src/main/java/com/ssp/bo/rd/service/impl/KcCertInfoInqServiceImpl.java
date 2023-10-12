/*------------------------------------------------------------------------------
 * NAME : KcCertInfoInqServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.24  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.ssp.bo.rd.dao.KcCertInfoInqDao;
import com.ssp.bo.rd.service.FileUploadDowloadService;
import com.ssp.bo.rd.service.KcCertInfoInqService;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   KcCertInfoInqServiceImpl
 * @@desc    ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.05.24
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------ 
 * 2022.05.24			       최초작성
 */
@Service("kcCertInfoInqService")
public class KcCertInfoInqServiceImpl implements KcCertInfoInqService {

    @Resource(name = "kcCertInfoInqDao")
    private KcCertInfoInqDao kcCertInfoInqDao;

    @Resource(name = "fileUploadDowloadService")
    private FileUploadDowloadService fileUploadDowloadService;

    /**
     * KC인증정보 조회(selectKcCertInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectKcCertInfoInq(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        // KC인증정보 조회
        List<Map> records1 = kcCertInfoInqDao.selectTbRdReqCprtcpConsnKcCertInfo(searchMap);

        if(records1.size() > 0)
        {
        	searchMap.put("CONT_CHG_DGRCNT", records1.get(0).get("CONT_CHG_DGRCNT").toString());
        }

        // KC인증요청협력사첨부파일 조회
        List<Map> records2 = kcCertInfoInqDao.selectKcCertReqCprtcpAttcFileInq(searchMap);

        result.addDataSet("ds_master",      records1);
        result.addDataSet("ds_saveFileList",records2); 

        return result;
    }

    /**
     * KC인증정보 리스트 조회(selectKcCertInfoListInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectKcCertInfoListInq(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records = kcCertInfoInqDao.selectKcCertInfoListInq(searchMap);

        result.addDataSet("ds_master",records);

        return result;
    }

    /**
     * KC인증정보 저장/수정(saveKcCertInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult saveKcCertInfoInq(List<Map<String, Object>> saveMap
                                          , List<Map<String, Object>> fileMap
                                          , Map<String, Object> userInfo
                                          , String contextRealPath) throws Exception {

        NexacroResult result = new NexacroResult();

        int iCnt            = 0;
        int uCnt            = 0;
        int dCnt            = 0;
        int rowType;

    try
    {

        if(saveMap.size() > 0)
        {
             for (int i=0; i < saveMap.size() ; i++)
             {
                  Map<String,Object> saveData = saveMap.get(i);

                  rowType = Integer.parseInt(String.valueOf(saveData.get(DataSetRowTypeAccessor.NAME)));

                  saveData.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
                  saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

                  if(rowType == DataSet.ROW_TYPE_INSERTED || rowType == DataSet.ROW_TYPE_UPDATED)
                  {
                      kcCertInfoInqDao.deleteTbRdReqCprtcpConsnKcCertInfo(saveData);

                      kcCertInfoInqDao.insertTbRdReqCprtcpConsnKcCertInfo(saveData);
                  }
                  else if (rowType == DataSet.ROW_TYPE_DELETED)
                  {
                      kcCertInfoInqDao.deleteTbRdReqCprtcpConsnKcCertInfo(saveData);
                  }
              }
        }

        // 이미지 & 첨부파일 로직 처리
        if(fileMap.size() > 0)
        {
        	// 이미지&첨부파일 삭제&수정 함수 호출
        	fileUploadDowloadService.saveMultiFileDelUpdate(fileMap, contextRealPath);
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

}