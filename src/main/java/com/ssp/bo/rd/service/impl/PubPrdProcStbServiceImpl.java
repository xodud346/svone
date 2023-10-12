/*------------------------------------------------------------------------------
 * NAME : PubPrdProcStbServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.06  나용철
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.ssp.bo.rd.dao.PubPrdProcStbDao;
import com.ssp.bo.rd.service.PubPrdProcStbService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.legacy.mall.model.Admin;

/**
 * <pre>
 *
 * @title   PubPrdProcStbServiceImpl
 * @@desc   공용상품처리대기 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.05.06
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------ 
 * 2022.05.06			       최초작성
 */
@Service("pubPrdProcStbService")
public class PubPrdProcStbServiceImpl implements PubPrdProcStbService {

    @Resource(name = "pubPrdProcStbDao")
    private PubPrdProcStbDao pubPrdProcStbDao;

    /**
     * 공용상품처리대기 조회(selectPubPrdProcStb)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectPubPrdProcStb(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        int totalCount     = pubPrdProcStbDao.selectPubPrdProcStbCount(searchMap);
        List<Map> records  = pubPrdProcStbDao.selectPubPrdProcStb(searchMap);

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);

        return result;
    }

}