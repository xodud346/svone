package com.ssp.bo.od.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.od.dao.OdBasisDlcstZpcdDao;
import com.ssp.bo.od.service.OdBasisDlcstZpcdService;
import com.ssp.core.od.exceptions.OdBizException;
import com.ssp.core.od.utils.OU;

/**
 * <pre>
 * @title 도서산간 배송비
 * @package com.ssp.bo.od.service.impl
 * </pre>
 *
 * @author neonlee
 * @since 2022. 02. 24.
 * @version 1.0
 * @see OdBasisDlcstZpcdServiceImpl
 * =================== 변경 내역 ==================
 * 날짜           변경자     내용
 * ------------------------------------------------
 */

@Service("odBasisDlcstZpcdService")
public class OdBasisDlcstZpcdServiceImpl implements OdBasisDlcstZpcdService {

    @Autowired
    private OdBasisDlcstZpcdDao odBasisDlcstZpcdDao;

    @Override
    public NexacroResult selectBasisDlcstList(Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> list = odBasisDlcstZpcdDao.selectBasisDlcstList(searchMap);
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public int insertBasisDlcst(Map<String, Object> searchMap) throws Exception {
        return odBasisDlcstZpcdDao.insertBasisDlcst(searchMap);
    }

    @Override
    public NexacroResult insertBasisDlcst2(Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        odBasisDlcstZpcdDao.insertBasisDlcst2(searchMap);
        result.addDataSet("ds_output1", null);

        return result;
    }

    @Override
    public NexacroResult updateBasisDlcst(Map<String, Object> commandMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        
        commandMap.put("UPDPSN_ID", (String) odComm.getSession().get("UPDPSN_ID"));
        commandMap.put("REGPSN_ID", (String) odComm.getSession().get("REGPSN_ID"));
        
        Map<String, Object> rMap = odBasisDlcstZpcdDao.updateCartDlcstPopupListSP(commandMap);
        
        if ("S".equals(OU.asS(rMap.get("RTN_CD")))) {
            List<Map<String, Object>> list = odBasisDlcstZpcdDao.selectBasisDlcstList(commandMap);
            Map<String, Object> first = list.get(0);
            first.put("RTN_CD", "S");
            result.addDataSet("ds_output1", list);
        }
        else {
            throw new OdBizException("ERRS000344");     // 업데이트 작업을 실패하였습니다.
        }
        
        return result;
    }

    @Override
    public int updateBasisDlcstWithStartDate(Map<String, Object> commandMap) throws Exception {
        int rtn = odBasisDlcstZpcdDao.updateBasisDlcstWithStartDate(commandMap);
        return rtn;
    }

    @Override
    public NexacroResult deleteBasisDlcst(Map<String, Object> commandMap) throws Exception {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public int selectBasisDlcstKeyCount(Map<String, Object> searchMap) throws Exception {
        return odBasisDlcstZpcdDao.selectBasisDlcstKeyCount(searchMap);
    }

    @Override
    public int selectBasisDlcstFirstKeyCount(Map<String, Object> searchMap) throws Exception {
        return odBasisDlcstZpcdDao.selectBasisDlcstFirstKeyCount(searchMap);
    }

    @Override
    public NexacroResult selectBasisDlcstCount(Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        int count = odBasisDlcstZpcdDao.selectBasisDlcstCount(searchMap);
        result.addVariable("totalCount", count);

        return result;
    }

    @Override
    public NexacroResult selectBasisDlcstHistoryCount(Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        int count = odBasisDlcstZpcdDao.selectBasisDlcstHistoryCount(searchMap);

        result.addVariable("totalCount", count);
        return result;
    }

    @Override
    public NexacroResult selectCartDlcstPopupList(Map<String, Object> searchMap)throws Exception {
        NexacroResult result = new NexacroResult();

        List<Map<String, Object>> list = odBasisDlcstZpcdDao.selectCartDlcstPopupList(searchMap);
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult selectIsareaZpcdCount(Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        int count = odBasisDlcstZpcdDao.selectIsareaZpcdCount(searchMap);
        result.addDataSet("ds_output1", null);
        result.addVariable("zpcdTotalCount", count);

        return result;
    }

    @Override
    public NexacroResult selectIsareaZpcdList(Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> list = odBasisDlcstZpcdDao.selectIsareaZpcdList(searchMap);
        result.addDataSet("ds_output1", list);

        return result;
    }

    @Override
    public NexacroResult insertIsareaZpcd(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        int rtn = 0;
        String updpsnId = (String) odComm.getSession().get("UPDPSN_ID");
        String regpsnId = (String) odComm.getSession().get("REGPSN_ID");
        for (Map<String, Object> data : commandMap) {
            data.put("UPDPSN_ID", updpsnId);
            data.put("REGPSN_ID", regpsnId);
            rtn = odBasisDlcstZpcdDao.insertIsareaZpcd(data);

            if (rtn < 1) {
                throw new OdBizException("ERRS000345");     // 추가 작업을 실패하였습니다.
            }
        }

        result.addDataSet("ds_output1", null);

        return result;
    }

    @Override
    public NexacroResult updateIsareaZpcd(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception {
        NexacroResult result = new NexacroResult();
        int rtn = 0;
        String updpsnId = (String) odComm.getSession().get("UPDPSN_ID");
        String regpsnId = (String) odComm.getSession().get("REGPSN_ID");
        for (Map<String, Object> data : commandMap) {
            data.put("UPDPSN_ID", updpsnId);
            data.put("REGPSN_ID", regpsnId);
            rtn = odBasisDlcstZpcdDao.updateIsareaZpcd(data);

            if (rtn < 1) {
                throw new OdBizException("ERRS000344");     // 업데이트 작업을 실패하였습니다.
            }
        }

        result.addDataSet("ds_output1", null);

        return result;
    }

    @Override
    public NexacroResult deleteIsareaZpcd(Map<String, Object> commandMap) throws Exception {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public NexacroResult selectIsareaZpcdGubunList(Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> list = odBasisDlcstZpcdDao.selectIsareaZpcdGubunList(searchMap);
        result.addDataSet("ds_output1", list);

        return result;
    }

}
