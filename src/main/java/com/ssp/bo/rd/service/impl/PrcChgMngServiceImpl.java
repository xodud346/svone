/*------------------------------------------------------------------------------
 * NAME : PrcChgMngServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.10  나용철
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.ssp.bo.rd.dao.PrcChgMngDao;
import com.ssp.bo.rd.service.PrcChgMngService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.legacy.mall.model.Admin;

/**
 * <pre>
 *
 * @title   PrcChgMngServiceImpl
 * @@desc   가격변동이력관리 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------ 
 * 2022.05.10			       최초작성
 */
@Service("prcChgMngService")
public class PrcChgMngServiceImpl implements PrcChgMngService {

    @Resource(name = "prcChgMngDao")
    private PrcChgMngDao prcChgMngDao;

    /**
     * 가격변동이력관리 리스트 조회(selectPrcChgMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectPrcChgMng(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        int totalCount    = prcChgMngDao.selectPrcChgMngCount(searchMap);
        List<Map> records = prcChgMngDao.selectPrcChgMng(searchMap);

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);

        return result;
    }

    
}