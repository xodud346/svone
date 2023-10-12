/*------------------------------------------------------------------------------
 * NAME : MetaTblInfoInqServiceImpl.java
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

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.dao.MetaTblInfoInqDao;
import com.ssp.bo.rd.service.MetaTblInfoInqService;

/**
 * <pre>
 *
 * @title   MetaTblInfoInqServiceImpl
 * @@desc   메타테이블정보조회 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.04.21
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------ 
 * 2022.04.21			       최초작성
 */
@Service("metaTblInfoInqService")
public class MetaTblInfoInqServiceImpl implements MetaTblInfoInqService {

    @Resource(name = "metaTblInfoInqDao")
    private MetaTblInfoInqDao metaTblInfoInqDao;

    /**
     * 메타테이블정보조회(selectMetaTblInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectMetaTblInfoInq(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records = metaTblInfoInqDao.selectMetaTblInfoInq(searchMap);

        result.addDataSet("ds_master",  records);

        return result;
    }
}