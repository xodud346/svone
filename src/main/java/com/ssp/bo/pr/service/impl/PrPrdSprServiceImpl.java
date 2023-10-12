package com.ssp.bo.pr.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pr.controller.PrPrdSprController;
import com.ssp.bo.pr.controller.PrPropertyController;
import com.ssp.bo.pr.dao.PrPrdSprDao;
import com.ssp.bo.pr.dao.PrPropertyDao;
import com.ssp.bo.pr.service.PrPrdSprService;
import com.ssp.bo.pr.service.PrPropertyService;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;
/**
 * <pre>
 * @title  SSP 전시상품 서비스
 * @package com.ssp.bo.pr.service.impl
 * </pre>
 * @author 박성진
 * @since 2022.04.25
 * @version 1.0
 * @see PrPrdSprServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Service("PrPrdSprService")
public class PrPrdSprServiceImpl implements PrPrdSprService {
	private final Logger log = LoggerFactory.getLogger(PrPrdSprController.class);
	@Autowired
    private PrPrdSprDao prprdsprDao;

	public List<Map<String,Object>> selectPrdSprList(Map<String, Object> searchMap) throws Exception{
		return prprdsprDao.selectPrdSprList(searchMap);
    }
	
	public List<Map<String,Object>> selectSearchDisp(Map<String, Object> searchMap) throws Exception{
		return prprdsprDao.selectSearchDisp(searchMap);
    }
	
	public List<Map<String,Object>> selectPrdSprOptList(Map<String, Object> searchMap) throws Exception{
		return prprdsprDao.selectPrdSprOptList(searchMap);
    }
	
	public List<Map<String,Object>> selectPrdSprAddList(Map<String, Object> searchMap) throws Exception{
		return prprdsprDao.selectPrdSprAddList(searchMap);
    }
	
	public List<Map<String,Object>> selectPrdSprConnList(Map<String, Object> searchMap) throws Exception{
		return prprdsprDao.selectPrdSprConnList(searchMap);
    }
	
	public List<Map<String,Object>> selectPrdSprStgList(Map<String, Object> searchMap) throws Exception{
		return prprdsprDao.selectPrdSprStgList(searchMap);
    }
	
	public List<Map<String,Object>> selectPrdSprStgDtlList(Map<String, Object> searchMap) throws Exception{
		return prprdsprDao.selectPrdSprStgDtlList(searchMap);
    }
	
	public int selectPrdSprCount(Map<String, Object> searchMap) throws Exception{
		return prprdsprDao.selectPrdSprCount(searchMap);
	}
	
	public int selectPrdClcdCount(Map<String, Object> searchMap) throws Exception{
		return prprdsprDao.selectPrdClcdCount(searchMap);
	}
	
	public int selectPrdSprOptCount(Map<String, Object> searchMap) throws Exception{
		return prprdsprDao.selectPrdSprOptCount(searchMap);
	}
	
	public int selectPrdSprAddCount(Map<String, Object> searchMap) throws Exception{
		return prprdsprDao.selectPrdSprAddCount(searchMap);
	}
	
	public int selectPrdSprConnCount(Map<String, Object> searchMap) throws Exception{
		return prprdsprDao.selectPrdSprConnCount(searchMap);
	}
	
	public int selectPrdSprStgCount(Map<String, Object> searchMap) throws Exception{
		return prprdsprDao.selectPrdSprStgCount(searchMap);
	}
	
	public int selectPrdSprStgDtlCount(Map<String, Object> searchMap) throws Exception{
		return prprdsprDao.selectPrdSprStgDtlCount(searchMap);
	}

	@Override
	public NexacroResult savePrdSpr(Map<String, Object> param) throws Exception {
		NexacroResult result = new NexacroResult();
        int rtn      = 0;
        String msg = "";
          
      	rtn = prprdsprDao.insertPrdSpr(param);
        msg = "등록";
        
        return result;
	}
	
	@Override
	public void savePrdSprTwo(Map<String, Object> paramMap) throws Exception {
        List<Map<String, Object>> optList = (List<Map<String, Object>>) paramMap.get("optList");
        if(optList!=null && optList.size()>0) {
        	for(Map<String, Object> oprInfo : optList) {
        		prprdsprDao.insertPrdSprTwo(oprInfo);	//본테이블
        	}
        }
	}	
	
	@Override
	public void savePrdSpraddInfo(Map<String, Object> paramMap) throws Exception {
        List<Map<String, Object>> infoList = (List<Map<String, Object>>) paramMap.get("infoList");
        if(infoList!=null && infoList.size()>0) {
        	for(Map<String, Object> infoInfo : infoList) {
        		prprdsprDao.savePrdSpraddInfo(infoInfo);
        	}
        }
	}
	
	@Override
	public void savePrdSprConn(Map<String, Object> paramMap) throws Exception {
        List<Map<String, Object>> connList = (List<Map<String, Object>>) paramMap.get("connList");
        if(connList!=null && connList.size()>0) {
        	for(Map<String, Object> connInfo : connList) {
        		prprdsprDao.savePrdSprConn(connInfo);
        	}
        }
	}
	
	@Override
	public void savePrdSprStg(Map<String, Object> paramMap) throws Exception {
        List<Map<String, Object>> stgList = (List<Map<String, Object>>) paramMap.get("stgList");
        if(stgList!=null && stgList.size()>0) {
        	for(Map<String, Object> stgInfo : stgList) {
        		prprdsprDao.savePrdSprStg(stgInfo);
        	}
        }
	}
	
	@Override
	public void savePrdSprStgDtl(Map<String, Object> paramMap) throws Exception {
		
        List<Map<String, Object>> stgDtlList = (List<Map<String, Object>>) paramMap.get("stgDtlList");
        if(stgDtlList!=null && stgDtlList.size()>0) {
        	for(Map<String, Object> stgDtlInfo : stgDtlList) {
        		prprdsprDao.savePrdSprStgDtl(stgDtlInfo);
        	}
        }
	}
	
	@Override
	public NexacroResult savePrdSprRsn(Map<String, Object> param) throws Exception {
		NexacroResult result = new NexacroResult();
		
        int rtn      = 0;
        String msg = "";
          
      	rtn = prprdsprDao.insertPrdSprRsn(param);
        msg = "변경 이유 등록";
        
        return result;
	}

	@Override
	public List<Map<String, Object>> selectPrdSpr(Map<String, Object> searchMap) throws Exception {
		return prprdsprDao.selectPrdSpr(searchMap);
	}

	@Override
	public List<Map<String, Object>> selectPrdId(Map<String, Object> searchMap) throws Exception {
		return prprdsprDao.selectPrdId(searchMap);
	}

	@Override
	public NexacroResult updatePrdSpr(Map<String, Object> param) throws Exception {
		NexacroResult result = new NexacroResult();
		
        int rtn      = 0;
        String msg = "";
          
      	rtn = prprdsprDao.updatePrdSpr(param);
        msg = "수정";
        
        return result;
	}
	
	@Override
	public void updateSrtSo(Map<String, Object> paramMap) throws Exception {
        List<Map<String, Object>> srtList = (List<Map<String, Object>>) paramMap.get("srtList");
        if(srtList!=null && srtList.size()>0) {
        	for(Map<String, Object> srtInfo : srtList) {
        		prprdsprDao.updateSrtSo(srtInfo);
        	}
        }
	}
	
	@Override
	public void updatePrdSprOpt(List<Map<String, Object>> optList) throws Exception {
        NexacroResult result = new NexacroResult();
        
        int rtn      = 0;
        String msg = "";
        
        if(optList!=null && optList.size()>0) {
        	for(Map<String, Object> optInfo : optList) {
        		int saveDataType = StringUtil.getInt(optInfo.get("DataSetRowType"));
        		
        		if( saveDataType == 1 ) {
                    rtn = prprdsprDao.insertPrdSprTwo(optInfo);
                    msg = "옵션 등록";
                } else if(saveDataType == 2) {
                    rtn = prprdsprDao.updatePrdSprOpt(optInfo);
                    msg = "옵션 수정";
                } else if(saveDataType == 3) {
                    rtn = prprdsprDao.deletePrdSprOpt(optInfo);
                    msg = "옵션 삭제";
                }
        	}
        }
	}
	
	@Override
	public void updatePrdSprOptDtl(List<Map<String, Object>> optDtlList) throws Exception {
        NexacroResult result = new NexacroResult();
        
        int rtn      = 0;
        String msg = "";
        
        if(optDtlList!=null && optDtlList.size()>0) {
        	for(Map<String, Object> optDtlInfo : optDtlList) {
        		int saveDataType = StringUtil.getInt(optDtlInfo.get("DataSetRowType"));
        		
        		if( saveDataType == 1 ) {
                    rtn = prprdsprDao.savePrdSpraddInfo(optDtlInfo);
                    msg = "상세 옵션 등록";
                } else if(saveDataType == 2) {
                    rtn = prprdsprDao.updatePrdSprOptDtl(optDtlInfo);
                    msg = "상세 옵션 수정";
                } else if(saveDataType == 3) {
                    rtn = prprdsprDao.deletePrdSprOptDtl(optDtlInfo);
                    msg = "상세 옵션 삭제";
                }
        	}
        }
	}
	
	@Override
	public void updatePrdSprStg(List<Map<String, Object>> stgList) throws Exception {
        NexacroResult result = new NexacroResult();
        
        int rtn      = 0;
        String msg = "";
        
        if(stgList!=null && stgList.size()>0) {
        	for(Map<String, Object> stgInfo : stgList) {
        		int saveDataType = StringUtil.getInt(stgInfo.get("DataSetRowType"));
        		
        		if( saveDataType == 1 ) {
                    rtn = prprdsprDao.savePrdSprStg(stgInfo);
                    msg = "추가 정보 등록";
                } else if(saveDataType == 2) {
                    rtn = prprdsprDao.updatePrdSprStg(stgInfo);
                    msg = "추가 정보 수정";
                } else if(saveDataType == 3) {
                    rtn = prprdsprDao.deletePrdSprStg(stgInfo);
                    msg = "추가 정보 삭제";
                }
        	}
        }
	}
	
	@Override
	public void updatePrdSprStgDtl(List<Map<String, Object>> stgDtlList) throws Exception {
        NexacroResult result = new NexacroResult();
        
        int rtn      = 0;
        String msg = "";
        
        if(stgDtlList!=null && stgDtlList.size()>0) {
        	for(Map<String, Object> stgDtlInfo : stgDtlList) {
        		int saveDataType = StringUtil.getInt(stgDtlInfo.get("DataSetRowType"));
        		
        		if( saveDataType == 1 ) {
                    rtn = prprdsprDao.savePrdSprStgDtl(stgDtlInfo);
                    msg = "추가 정보 상세 등록";
                } else if(saveDataType == 2) {
                    rtn = prprdsprDao.updatePrdSprStgDtl(stgDtlInfo);
                    msg = "추가 정보 상세 수정";
                } else if(saveDataType == 3) {
                    rtn = prprdsprDao.deletePrdSprStgDtl(stgDtlInfo);
                    msg = "추가 정보 상세 삭제";
                }
        	}
        }
	}
}
