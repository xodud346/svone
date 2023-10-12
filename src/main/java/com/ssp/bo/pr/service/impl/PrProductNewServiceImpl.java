package com.ssp.bo.pr.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.pr.service.PrProductNewService;
import com.ssp.core.co.dao.CommonDAO;
import com.ssp.core.pr.service.PrCoreService;

/**
 * <pre>
 * @title  신규상품요청 목록
 * @package com.ssp.bo.pr.service.impl
 * <pre>
 * @author  김주화
 * @since   2022.04.12
 * @version 1.0
 * @see PrProductNewServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.04.12      김주화        최초작성
 */

@Service("prProductNewService")
public class PrProductNewServiceImpl implements PrProductNewService {
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	@Resource(name = "commonDAO")
	private CommonDAO commonDAO;
//	@Autowired
//	private FileUpload fileUpload;
	
	@Autowired
	private PrCoreService prCoreService;

	public List<Map<String, Object>> selectNewProductReqList(Map<String, Object> searchMap) throws Exception {
		return this.commonDAO.selectList("prProductNew.selectNewProductReqList", searchMap);
	}

	public List<Map<String, Object>> selectNewProductReqDetail(Map<String, Object> commandMap) throws Exception {
		return this.commonDAO.selectList("prProductNew.selectNewProductReqDetail", commandMap);
	}

	public List<Map<String, Object>> selectMroClPrdChrpsn(Map<String, Object> commandMap) throws Exception {
		return this.commonDAO.selectList("prProductNew.selectMroClPrdChrpsn", commandMap);
	}

    public List<Map<String, Object>> selectProductSpecList (Map<String, Object> commandMap) throws Exception  {
    	return commonDAO.selectList("prProductNew.selectProductSpecList",commandMap);
    }

    public List<Map<String, Object>> selectReqProcAttrInfoList (Map<String, Object> commandMap) throws Exception  {
    	return commonDAO.selectList("prProductNew.selectReqProcAttrInfoList",commandMap);
    }

    public int updateNewPrdReqProc(Map<String, Object> detailMap) throws Exception  {
    	return commonDAO.update("prProductNew.updateNewPrdReqProc", detailMap);
    }

    public int insertNewPrdReqStatsDtls(Map<String, Object> detailMap) throws Exception  {
    	return commonDAO.update("prProductNew.insertNewPrdReqStatsDtls", detailMap);
    }
    
    public int deleteReqProcAttrInfoList(Map<String, Object> detailMap) throws Exception  {
    	return commonDAO.update("prProductNew.deleteReqProcAttrInfoList", detailMap);
    }
    
    public int mergeReqProcAttrInfoList(Map<String, Object> detailMap, List<Map<String, Object>> prdAttrMap) throws Exception  {
   		for(Map<String, Object> map : prdAttrMap) {
    		map.put("CO_CD"         , detailMap.get("CO_CD")         );
    		map.put("NEW_PRD_REQ_NO", detailMap.get("NEW_PRD_REQ_NO"));
    		map.put("PRD_CLCD"      , detailMap.get("RP_PRD_CLCD")   );
    		commonDAO.update("prProductNew.mergeReqProcAttrInfoList", map);
    	}

    	return 1;
    }

    public int insertNewPrdReqStatsDtlsList(List<Map<String, Object>> listMap, Map<String, Object> adminMap) throws Exception  {
    	for(Map<String, Object> map : listMap) {
    		map.put("OPRTR_ID"    , adminMap.get("OPRTR_ID"));
			map.put("REQ_STATS_CD", "25"                    );  // 접수
			//SSP-2537 KYN
			Map<String, Object> checkMap = (Map)map.get("DataSetSavedData");
			checkMap.put("REQ_STATS_CD", "25"); 
    		if("Y".equals(prCoreService.checkDuplicateStatusRequest(checkMap).get("rtnCd"))) {	
    			commonDAO.update("prProductNew.insertNewPrdReqStatsDtls", map);
    		}
    	}

    	return 1;
    }

    public List<Map<String, Object>> selectNewPrdReqFileList(Map<String, Object> detailMap) throws Exception  {
    	return commonDAO.selectList("prProductNew.selectNewPrdReqFileList", detailMap);
    }

    public int mergeNewPrdReqRvwDtls(Map<String, Object> detailMap) throws Exception  {
    	return commonDAO.update("prProductNew.mergeNewPrdReqRvwDtls", detailMap);
    }
    
    @Override
    public Map<String, Object> selectSalsChrspnInfo(Map<String, Object> param) throws Exception {
    	return commonDAO.select("prProductNew.selectSalsChrspnInfo", param);
    }
    
    @Override
    public int insertNewPrdMemo(Map<String, Object> detailMap) throws Exception {
    	return commonDAO.insert("prProductNew.insertNewPrdMemo", detailMap);
    }
    
    @Override
    public int checkMnfrCnt(Map<String, Object> detailMap) throws Exception {
    	// TODO Auto-generated method stub
    	return commonDAO.selectCount("prProductNew.checkMnfrCnt", detailMap);
    }
    
    @Override
    public Map<String,Object> selectReSendMroRequestCheck(Map<String, Object> detailMap) throws Exception {
    	// TODO Auto-generated method stub
    	return commonDAO.select("prProductNew.selectReSendMroRequestCheck", detailMap);
    }
}