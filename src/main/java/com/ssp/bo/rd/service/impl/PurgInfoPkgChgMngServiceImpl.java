/*------------------------------------------------------------------------------
 * NAME : PurgInfoPkgChgMngServiceImpl.java
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

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.ssp.bo.rd.dao.PurgInfoPkgChgMngDao;
import com.ssp.bo.rd.service.PurgInfoPkgChgMngService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.legacy.mall.model.Admin;

/**
 * <pre>
 *
 * @title   PurgInfoPkgChgMngServiceImpl
 * @@desc   업체공통클래스(샘풀) ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성
 */
@Service("purgInfoPkgChgMngService")
public class PurgInfoPkgChgMngServiceImpl implements PurgInfoPkgChgMngService {

    @Resource(name = "purgInfoPkgChgMngDao")
    private PurgInfoPkgChgMngDao purgInfoPkgChgMngDao;

    /**
     * 업체공통클래스(샘풀) 리스트 조회(selectPurgInfoPkgChgMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectPurgInfoPkgChgMng(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        int totalCount    = purgInfoPkgChgMngDao.selectPurgInfoPkgChgMngCount(searchMap);
        List<Map> records = purgInfoPkgChgMngDao.selectPurgInfoPkgChgMng(searchMap);

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);

        return result;
    }

    /**
     * 업체공통클래스(샘풀) 리스트 저장/수정(savePurgInfoPkgChgMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult savePurgInfoPkgChgMng(Map<String, Object> searchMap, List<Map<String, Object>> saveMap, Admin userInfo) throws Exception {

        NexacroResult result = new NexacroResult();

        int iCnt            = 0;
        int uCnt            = 0;
        int dCnt            = 0;
        int rowType;
        String recordPKeyValue = "";

        if(saveMap.size() > 0)
        {
             for (int i=0; i < saveMap.size() ; i++)
             {
                  Map<String,Object> saveData = saveMap.get(i);

                  rowType = Integer.parseInt(String.valueOf(saveData.get(DataSetRowTypeAccessor.NAME)));

                  if (rowType == DataSet.ROW_TYPE_INSERTED)
                  {
                      List <Map> recordKeyValue = purgInfoPkgChgMngDao.selectPurgInfoPkgChgMngPKey(saveData);

                      Map<String, Object> mapKeyValue = (Map<String, Object>)recordKeyValue.get(0);
                      saveData.put("PK_ID", mapKeyValue.get("KEY_CODE").toString());
                      saveData.put("REGPSN_ID", userInfo.getADM_MST_ID().toString());
                      saveData.put("UPDPSN_ID", userInfo.getADM_MST_ID().toString());

                      int dupList = purgInfoPkgChgMngDao.selectPurgInfoPkgChgMngCount(saveData);

                      if (dupList > 0)
                      {
                            throw new MessageException(-100, "PK코드가 중복되어 있습니다.");
                      }

                      iCnt += purgInfoPkgChgMngDao.insertPurgInfoPkgChgMng(saveData);
                  }
                  else if (rowType == DataSet.ROW_TYPE_UPDATED)
                  {
                      saveData.put("UPDPSN_ID", userInfo.getADM_MST_ID().toString());

                      uCnt += purgInfoPkgChgMngDao.updatePurgInfoPkgChgMng(saveData);
                  }
                  else if (rowType == DataSet.ROW_TYPE_DELETED)
                  {
                      dCnt += purgInfoPkgChgMngDao.deletePurgInfoPkgChgMng(saveData);
                  }
                  recordPKeyValue = CommUtil.nvl(saveData.get("PK_ID")).toString();
              }
        }

        int totalCount    = purgInfoPkgChgMngDao.selectPurgInfoPkgChgMngCount(searchMap);
        List <Map> dsList = purgInfoPkgChgMngDao.selectPurgInfoPkgChgMng(searchMap);

        result.addDataSet("ds_master",   dsList);
        result.addVariable("totalCount",totalCount);
        result.addVariable("strKeyValue",recordPKeyValue);

        return result;
    }

}