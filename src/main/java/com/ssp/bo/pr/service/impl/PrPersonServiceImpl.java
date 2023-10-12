package com.ssp.bo.pr.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pr.dao.PrPersonDao;
import com.ssp.bo.pr.service.PrPersonService;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 * @title  SSP 담당자 관리
 * @package com.ssp.bo.pr.service.impl
 * <pre>
 * @author  조지훈
 * @since   2022.02.22
 * @version 1.0
 * @see PrPersonServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.02.22    조지훈        최초작성
 */
@Service("PrPersonService")
public class PrPersonServiceImpl implements PrPersonService {
    
    @Autowired
    private PrPersonDao prPersonDao;
    
    @Autowired
    private SspPropertyService propertiesService;
    
	@Override
	public int selectPersonCount(Map<String, Object> searchMap) throws Exception {
		searchMap.put("CO_CD", propertiesService.getString("ssp.cocd"));	//cocd코드
		return prPersonDao.selectPersonCount(searchMap);
	}
    
    /**
	 * <pre>
	 * 1. MethodName : selectPersonList
	 * 2. ClassName  : PrPersonServiceImpl
	 * 3. Comment    : 담당자 목록 조회
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.02.22
	 * </pre>
     */
    @Override
    public List<Map<String, Object>> selectPersonList(Map<String, Object> searchMap) throws Exception {
        searchMap.put("CO_CD", propertiesService.getString("ssp.cocd"));	//cocd코드
        return prPersonDao.selectPersonList(searchMap);
    }

    /**
	 * <pre>
	 * 1. MethodName : selectPersonSprCd
	 * 2. ClassName  : PrPersonServiceImpl
	 * 3. Comment    : 담당자 정/부 구분 조회
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.03.07
	 * </pre>
     */
	@Override
	public String selectPersonSprCd(Map<String, Object> searchMap) throws Exception {
		return prPersonDao.selectPersonSprCd(searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : insertPerson
	 * 2. ClassName  : PrPersonServiceImpl
	 * 3. Comment    : 담당자 등록
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.03.08
	 * </pre>
     */
	@Override
	public int insertPerson(Map<String, Object> dataMap) throws Exception {
		dataMap.put("CO_CD", propertiesService.getString("ssp.cocd"));
		prPersonDao.insertPerson(dataMap);
		
		//dataMap.put("DATA_CHG_TP_CD", "I");
		//prPersonDao.insertPersonHistory(dataMap);
		return 1;
	}

	@Override
	public String selectPersonDuplicateCheck(Map<String, Object> searchMap) throws Exception {
		searchMap.put("CO_CD", propertiesService.getString("ssp.cocd"));
		return prPersonDao.selectPersonDuplicateCheck(searchMap);
	}

	@Override
	public List<Map<String, Object>> selectPersonDetail(Map<String, Object> searchMap) throws Exception {
		searchMap.put("CO_CD", propertiesService.getString("ssp.cocd"));
        return prPersonDao.selectPersonDetail(searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : insertPerson
	 * 2. ClassName  : PrPersonServiceImpl
	 * 3. Comment    : 담당자 수정
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.03.10
	 * </pre>
     */
	@Override
	public void updatePerson(Map<String, Object> dataMap) throws Exception {
		dataMap.put("CO_CD", propertiesService.getString("ssp.cocd"));
		prPersonDao.updatePerson(dataMap);
		
		//dataMap.put("DATA_CHG_TP_CD", "U");
		//prPersonDao.insertPersonHistory(dataMap);
	}

	@Override
    public List<Map<String, Object>> selectPersonOprtrOrgList(Map<String, Object> searchMap) throws Exception {
        searchMap.put("CO_CD", propertiesService.getString("ssp.cocd"));	//cocd코드
        return prPersonDao.selectPersonOprtrOrgList(searchMap);
    }
	
	@Override
	public Map<String, Object> callLargeExcelDownload(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception {
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
		String usrId = null;
		String pageType = "상품";
		if(admin!=null && !admin.isEmpty()) {
    		 usrId = (String) admin.get("OPRTR_ID");
    	} else {
    		throw new Exception("세션정보 없음.");
    	}
		
		if("20".equals(searchMap.get("PRD_CLSF_CHRPSN_TP_CD"))){
			pageType = "MD";
		}
		
		searchMap.put("coCd", propertiesService.getString("ssp.cocd"));	//cocd코드
    	searchMap.put("regpsnId", usrId);
		searchMap.put("updpsnId", usrId);
		searchMap.put("pgmId","SSP_BO_PA_20");
		searchMap.put("excelMetaSeq","1");
		searchMap.put("saveFileNm",pageType + "담당자목록.xlsx");
		
		searchMap = CommonUtil.toCamelCaseMap(searchMap);
        searchMap.put("sesId", odOrderComm.getSession().get("SES_ID").toString());
        return CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
	}

}
