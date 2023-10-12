package com.ssp.bo.cc.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.dao.CustCmnDao;
import com.ssp.bo.cc.service.CustCmnService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title 고객 공통 팝업 service implements
 * @package com.ssp.bo.cc.service.impl
 * <pre> 
 * @author  moonjooh
 * @since   2022. 02. 22.
 * @version 1.0
 * @see CustCmnServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.02.22		최초작성
 */
@Service("custCmnService")
public class CustCmnServiceImpl implements CustCmnService {

    @Resource(name="custCmnDao")
    private CustCmnDao custCmnDao;

    private final Logger logger = LoggerFactory.getLogger(CustCmnServiceImpl.class);

    @Autowired
    private SqlSession sqlSession;
    
    /**
     * 산업군 멀티조회
     * @param Map<String,Object> searchInfo
     * @return NexacroResult
     * @throws Exception
     */
    @Override
	public NexacroResult selectIddtMultiPop(Map<String,Object> searchInfo) throws Exception {
    	NexacroResult result = new NexacroResult();

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        
        // 멀티입력시 split
    	String iddtId = (String) searchMap.get("iddtId");
    	if(iddtId != null && !"".equals(iddtId)) {
    		if(iddtId.contains(",")) {
        		String[] iddtIdStrArr = iddtId.split(",");
        		searchMap.put("iddtIdStrArr", iddtIdStrArr);
        		searchMap.remove("iddtId");
        	}
    	}
    	String iddtNm = (String) searchMap.get("iddtNm");
    	if(iddtNm != null && !"".equals(iddtNm)) {
    		if(iddtNm.contains(",")) {
        		String[] iddtNmStrArr = iddtNm.split(",");
        		searchMap.put("iddtNmStrArr", iddtNmStrArr);
        		searchMap.remove("iddtNm");
        	}
    	}
        
        // 조회
        List<Map<String,Object>> list = custCmnDao.selectIddtMultiPop(searchMap);
      	
      	// 리턴값 set
        result.addDataSet("ds_output1", list);
        
        return result;
	}

	@Override
	public NexacroResult selectUsdIddtMultiPop(Map<String, Object> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);

		// 멀티입력시 split
		String iddtId = (String) searchMap.get("iddtId");
		if(iddtId != null && !"".equals(iddtId)) {
			if(iddtId.contains(",")) {
				String[] iddtIdStrArr = iddtId.split(",");
				searchMap.put("iddtIdStrArr", iddtIdStrArr);
				searchMap.remove("iddtId");
			}
		}
		String iddtNm = (String) searchMap.get("iddtNm");
		if(iddtNm != null && !"".equals(iddtNm)) {
			if(iddtNm.contains(",")) {
				String[] iddtNmStrArr = iddtNm.split(",");
				searchMap.put("iddtNmStrArr", iddtNmStrArr);
				searchMap.remove("iddtNm");
			}
		}

		// 조회
		List<Map<String,Object>> list = custCmnDao.selectUsdIddtMultiPop(searchMap);

		// 리턴값 set
		result.addDataSet("ds_output1", list);

		return result;
	}

	/**
     * 부서 멀티조회
     * @param Map<String,Object> searchInfo
     * @return NexacroResult
     * @throws Exception
     */
    @Override
	public NexacroResult selectDeptMultiPop(Map<String,Object> searchInfo) throws Exception {
    	NexacroResult result = new NexacroResult();

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        
        // 멀티입력시 split
    	String oprUnitId = (String) searchMap.get("oprUnitId");
    	if(oprUnitId != null && !"".equals(oprUnitId)) {
    		if(oprUnitId.contains(",")) {
        		String[] oprUnitIdStrArr = oprUnitId.split(",");
        		searchMap.put("oprUnitIdStrArr", oprUnitIdStrArr);
        		searchMap.remove("oprUnitId");
        	}
    	}
    	
    	String bzplcId = (String) searchMap.get("bzplcId");
    	if(bzplcId != null && !"".equals(bzplcId)) {
    		if(bzplcId.contains(",")) {
        		String[] bzplcIdStrArr = bzplcId.split(",");
        		searchMap.put("bzplcIdStrArr", bzplcIdStrArr);
        		searchMap.remove("bzplcId");
        	}
    	}
    	
    	String deptId = (String) searchMap.get("deptId");
    	if(deptId != null && !"".equals(deptId)) {
    		if(deptId.contains(",")) {
        		String[] deptIdStrArr = deptId.split(",");
        		searchMap.put("deptIdStrArr", deptIdStrArr);
        		searchMap.remove("deptId");
        	}
    	}
    	
    	String deptNm = (String) searchMap.get("deptNm");
    	if(deptNm != null && !"".equals(deptNm)) {
    		if(deptNm.contains(",")) {
        		String[] deptNmStrArr = deptNm.split(",");
        		searchMap.put("deptNmStrArr", deptNmStrArr);
        		searchMap.remove("deptNm");
        	}
    	}
    	
    	String ccoDeptCd = (String) searchMap.get("ccoDeptCd");
    	if(ccoDeptCd != null && !"".equals(ccoDeptCd)) {
    		if(ccoDeptCd.contains(",")) {
        		String[] ccoDeptCdStrArr = ccoDeptCd.split(",");
        		searchMap.put("ccoDeptCdStrArr", ccoDeptCdStrArr);
        		searchMap.remove("ccoDeptCd");
        	}
    	}
    	
    	String bzplcNm = (String) searchMap.get("bzplcNm");
    	if(bzplcNm != null && !"".equals(bzplcNm)) {
    		if(bzplcNm.contains(",")) {
        		String[] bzplcNmStrArr = bzplcNm.split(",");
        		searchMap.put("bzplcNmStrArr", bzplcNmStrArr);
        		searchMap.remove("bzplcNm");
        	}
    	}
    	
    	String oprUnitNm = (String) searchMap.get("oprUnitNm");
    	if(oprUnitNm != null && !"".equals(oprUnitNm)) {
    		if(oprUnitNm.contains(",")) {
        		String[] oprUnitNmStrArr = oprUnitNm.split(",");
        		searchMap.put("oprUnitNmStrArr", oprUnitNmStrArr);
        		searchMap.remove("oprUnitNm");
        	}
    	}
        
        // 조회
        List<Map<String,Object>> list = custCmnDao.selectDeptMultiPop(searchMap);
      	
      	// 리턴값 set
        result.addDataSet("ds_output1", list);
        
        return result;
	}

	@Override
	public NexacroResult selectMbrOprtrOrgInfoList(Map<String, Object> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();    // 리스트
        int totalCount = 0;                                                     // 카운트

        //SESSION
        Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
        //searchMap.put("coCd", admin.get("CO_CD"));
        System.out.println("searchInfo.toString() : " + searchInfo.toString());
        /*
        if(searchInfo.get("TYPE").equals("05")) {                               //운영팀
        	list = custCmnDao.selectMbrOprtrSalsInfoList(searchMap);
        	totalCount = custCmnDao.selectMbrOprtrSalsInfoListCnt(searchMap);
        } else {                                                                //그외
        	list = custCmnDao.selectMbrOprtrOrgInfoList(searchMap);
        	totalCount = custCmnDao.selectMbrOprtrOrgInfoListCnt(searchMap);
        }
      	*/
        
        list = custCmnDao.selectMbrOprtrOrgInfoListNewVersion(searchMap);
    	totalCount = custCmnDao.selectMbrOprtrOrgInfoListNewVersionCnt(searchMap);
        
      	// 리턴값 set
        result.addVariable( "totalCount", totalCount);
        result.addDataSet("ds_output1", list);
        
        return result;
	}

	@Override
	public List<Map<String,Object>> selectSvcOprtrMbr(Map<String, Object> searchInfo) {
        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        if(searchMap.get("coCd") == null || "".equals(searchMap.get("coCd"))) searchMap.put("coCd", "1000");
        return custCmnDao.selectSvcOprtrMbr(searchMap);
	}

	@Override
	public List<Map<String, Object>> selectCaddrRegNum(Map<String, Object> searchInfo) throws Exception {
        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        if(searchMap.get("coCd") == null || "".equals(searchMap.get("coCd"))) searchMap.put("coCd", "1000");
        return custCmnDao.selectCaddrRegNum(searchMap);
	}
	
	/**
     * <pre>
     * 1. MethodName : selectClientPopupListCount
     * 2. ClassName  : CustCmnServiceImpl.java
     * 3. Comment    : [팝업] 회원멀티조회 SSP_BO_PP_25_1
     * 4. 작성자       : 문주환
     * 5. 작성일       : 2022. 06. 02.
     * </pre>
     *
     * @param commandMap
     * @return
     * @throws Exception
     */
	public List<Map<String, Object>> selectClientPopupList(Map<String, Object> commandMap) throws Exception {
		if (!StringUtil.getString(commandMap.get("mbrId")).isEmpty()) {
			String[] splitStr = commandMap.get("mbrId").toString().trim().split("\\s*,\\s*");
			if(splitStr.length > 0) {
				commandMap.put("arrMbrId", splitStr);
				commandMap.put("mbrId", "");
			}else {
				commandMap.put("mbrId", commandMap.get("mbrId"));
				commandMap.put("arrMbrId", "");
			}
		}
		return custCmnDao.selectClientPopupList(commandMap);
	}

}
