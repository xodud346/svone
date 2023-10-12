
package com.ssp.bo.od.service.impl;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.service.OdOrderBoCommService;

@Service("odOrderBoCommServiceImpl")
public class OdOrderBoCommServiceImpl implements OdOrderBoCommService {

    @Autowired
    private com.ssp.core.od.service.OdOrderCommService coreOrderCommService;
    protected Logger logger = LoggerFactory.getLogger(OdOrderBoCommServiceImpl.class);

    @Override
    public NexacroResult selectCommonCodeName(Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("ds_output1", coreOrderCommService.selectCommonCodeName(searchMap));
        return result;
    }

    @Override
    public NexacroResult selectCommonMessage(Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("ds_output1", coreOrderCommService.selectCommonMessage(searchMap));
        return result;
    }

}
