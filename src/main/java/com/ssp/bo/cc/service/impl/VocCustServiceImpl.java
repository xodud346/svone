package com.ssp.bo.cc.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.cc.dao.VocCustDao;
import com.ssp.bo.cc.service.VocCustService;
import com.ssp.core.co.util.CommonUtil;

/** 
 * <pre>
 * @title voc
 * @desc
 * @package com.ssp.bo.cc.service.impl
 * @ClassName VocCustServiceImpl
 * </pre>
 * @author  차상영
 * @since   2022. 02. 11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */
@Service("vocCustService")
public class VocCustServiceImpl implements VocCustService {

	@Autowired
    private VocCustDao vocCustDao;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());


    /**
     * VOC현황목록을 조회한다.
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectVocStatusList(Map<String,Object> searchMap) {
    	
        // input dataset id 카멜화
        Map<String, Object> searchMap2 = CommonUtil.toCamelCaseMap(searchMap);
       
        Object vocItmNm = searchMap2.get("vocItmNm");
        Object odrItmNm = searchMap2.get("odrItmNm");
        Object bzplcId = searchMap2.get("bzplcId");
        Object oprUnitId = searchMap2.get("oprUnitId");
        
        if(vocItmNm!=null && !vocItmNm.toString().equals("")) {        	
        	searchMap2.put("arrVocItmNm", vocItmNm.toString().split(","));
        }
        if(odrItmNm!=null && !odrItmNm.toString().equals("")) {        	
        	searchMap2.put("arrOdrItmNm", odrItmNm.toString().split(","));
        }
        if(bzplcId!=null && !bzplcId.toString().equals("")) {        	
        	searchMap2.put("arrBzplcId", bzplcId.toString().split(","));
        }
        if(oprUnitId!=null && !oprUnitId.toString().equals("")) {        	
        	searchMap2.put("arrOprUnitId", oprUnitId.toString().split(","));
        }
       
        //조회
        return vocCustDao.selectVocStatusList(searchMap2);
      
	}

    /**
     * VOC대분류목록을 조회한다.
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectVocGclsList(Map<String,Object> searchMap) {
    	
        // input dataset id 카멜화
        Map<String, Object> searchMap2 = CommonUtil.toCamelCaseMap(searchMap);
       
        //조회
        return vocCustDao.selectVocGclsList(searchMap2);
      
	}

    /**
     * VOC중분류목록을 조회한다.
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectVocMclasList(Map<String,Object> searchMap) {
    	
        // input dataset id 카멜화
        Map<String, Object> searchMap2 = CommonUtil.toCamelCaseMap(searchMap);
       
        //조회
        return vocCustDao.selectVocMclasList(searchMap2);
      
	}

    /**
     * VOC소분류목록을 조회한다.
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectVocSclsList(Map<String,Object> searchMap) {
    	
        // input dataset id 카멜화
        Map<String, Object> searchMap2 = CommonUtil.toCamelCaseMap(searchMap);
       
        //조회
        return vocCustDao.selectVocSclsList(searchMap2);
      
	}    

    /**
     * VOC상세정보를 조회한다.
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public Map<String,Object> selectVocDtlInfo(Map<String,Object> searchMap) throws Exception {
    	
        // input dataset id 카멜화
        Map<String, Object> searchMap2 = CommonUtil.toCamelCaseMap(searchMap);
       
        //조회
        return vocCustDao.selectVocDtlInfo(searchMap2);
      
	}    

    /**
     * VOC처리현황목록을 조회한다.
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectVocProcList(Map<String,Object> searchMap) {
    	
        // input dataset id 카멜화
        Map<String, Object> searchMap2 = CommonUtil.toCamelCaseMap(searchMap);
       
        //조회
        return vocCustDao.selectVocProcList(searchMap2);
      
	}    

    /**
     * VOC반품/교환/AS를 조회한다.
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public Map<String,Object> selectExceptionProcDtl(Map<String,Object> searchMap) throws Exception {
    	
        // input dataset id 카멜화
        Map<String, Object> searchMap2 = CommonUtil.toCamelCaseMap(searchMap);
       
        //조회
        return vocCustDao.selectExceptionProcDtl(searchMap2);
      
	}    

    /**
     * voc반품/교환/AS 목록1을 조회한다.
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectExceptionProcList1(Map<String,Object> searchMap) {
    	
        // input dataset id 카멜화
        Map<String, Object> searchMap2 = CommonUtil.toCamelCaseMap(searchMap);
       
        //조회
        return vocCustDao.selectExceptionProcList1(searchMap2);
      
	}   

    /**
     * voc반품/교환/AS 목록2을 조회한다.
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectExceptionProcList2(Map<String,Object> searchMap) {
    	
        // input dataset id 카멜화
        Map<String, Object> searchMap2 = CommonUtil.toCamelCaseMap(searchMap);
       
        //조회
        return vocCustDao.selectExceptionProcList2(searchMap2);
      
	}   

    /**
     * voc첨부파일목록을 조회한다.
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectVocReqFileList(Map<String,Object> searchMap) {
    	
        // input dataset id 카멜화
        Map<String, Object> searchMap2 = CommonUtil.toCamelCaseMap(searchMap);
       
        //조회
        return vocCustDao.selectVocReqFileList(searchMap2);
      
	}

	@Override
	public List<Map<String, Object>> selectDlvSrvonInfo(Map<String, Object> searchMap) {
		Map<String, Object> searchMap2 = CommonUtil.toCamelCaseMap(searchMap);
		return vocCustDao.selectDlvSrvonInfo(searchMap2);
	}

	@Override
	public List<Map<String, Object>> selectDlvHdvInfo(Map<String, Object> searchMap) {
		Map<String, Object> searchMap2 = CommonUtil.toCamelCaseMap(searchMap);
		return vocCustDao.selectDlvHdvInfo(searchMap2);
	}

	@Override
	public List<Map<String, Object>> selectVocDocFileList(Map<String, Object> searchMap) {
		Map<String, Object> searchMap2 = CommonUtil.toCamelCaseMap(searchMap);
		return vocCustDao.selectVocDocFileList(searchMap2);
	}   

}