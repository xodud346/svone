package com.ssp.bo.cc.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.cc.dao.CustHelperDao;
import com.ssp.bo.cc.service.CustHelperService;
import com.ssp.core.cc.dao.Pi1208Dao;
import com.ssp.core.co.util.CommonUtil;

/**
 * <pre>
 * @title voc
 * @desc
 * @package com.ssp.bo.cc.service.impl
 * @ClassName CuseHelperServiceImpl
 * </pre>
 * @author  유창호
 * @since   2022. 04. 25.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */
@Service("custHelperService")
public class CuseHelperServiceImpl implements CustHelperService {

	@Autowired
    private CustHelperDao custHelperDao;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private Pi1208Dao pi1208Dao;
	
	@Override
	public Map<String, Object> selectCustHelperDetail(Map<String, Object> paramMap) throws Exception {
		System.out.println("paramMap.toString() : " + paramMap.toString() );
		return custHelperDao.selectCustHelperDetail(CommonUtil.toCamelCaseMap(paramMap));
	}

	@Override
	public Map<String, Object> updateCustHelperDetail(Map<String, Object> paramMap) throws Exception {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		Map<String, Object> cParamMap = CommonUtil.toCamelCaseMap(paramMap);
		System.out.println("camelParam : " + cParamMap);
		/**
		 * 사용여부에 미사용일 시 삭제처리
		 * 2022-06-20
		 */
		if("Y".equals(cParamMap.get("useYn"))) {
			custHelperDao.updateOprUnitCustHelperCaddrRegNo(cParamMap);  //고객도우미 담당자 매핑정보 수정
			custHelperDao.updtaeOprUnitZendeskGrpId        (cParamMap);  //고객도우미 젠데스크 매핑정보 수정
			resultMap.put("RETURN_MSG", "ERRC000081");					 //MSG - 저장되었습니다.
		}else {
			//미사용 시 데이터 삭제
			custHelperDao.deleteOprUnitCustHelperCaddrRegNo(cParamMap);  //고객도우미 담당자 매핑정보 삭제
			custHelperDao.deleteOprUnitZendeskGrpId        (cParamMap);  //고객도우미 젠데스크 매핑정보 삭제
			resultMap.put("RETURN_MSG", "ERRC000047");					 //MSG - 삭제되었습니다.
		}
		
		resultMap.put("SUCCESS_YN", "Y");
		
		// [2022.05.31] 박성근 일반고객 도우미(공용) 정보 PI전송용으로 전송처리 개선
		String cOprUnitId = (String) cParamMap.get("oprUnitId");
		if (!"SSSSSSSSS1".equals(cOprUnitId)) {  // 로그인전 설정정보는 인터페이스 처리 안함.
			cParamMap.put("cmnHelperYn", "SSSSSSSSS2".equals(cOprUnitId)?"Y":"N");
			pi1208Dao.publishUpdate(cParamMap);
		}
		
		return resultMap;
	}

	@Override
	public Map<String, Object> selectOprUnitChk(Map<String, Object> paramMap) throws Exception {
		Map<String, Object> resultMap = new HashMap<String, Object>();

		int chk = custHelperDao.selectOprUnitChk(CommonUtil.toCamelCaseMap(paramMap));
		
		if(chk > 0) {
			resultMap.put("SUCCESS_YN", "N");
		}else {
			resultMap.put("SUCCESS_YN", "Y");
		}
		
		resultMap.put("CO_CD"       , paramMap.get("CO_CD")       );
		resultMap.put("BZPLC_ID"    , paramMap.get("BZPLC_ID")    );
		resultMap.put("OPR_UNIT_ID" , paramMap.get("OPR_UNIT_ID") );
		
		return resultMap;
	}

	@Override
	public Map<String, Object> insertCustHelperInfo(Map<String, Object> paramMap) throws Exception {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		custHelperDao.insertOprUnitCustHelperInfo(CommonUtil.toCamelCaseMap(paramMap));
		custHelperDao.insertOprUnitZendeskInfo(CommonUtil.toCamelCaseMap(paramMap));
		
		resultMap.put("SUCCESS_YN", "Y");
		
		pi1208Dao.publishUpdate(CommonUtil.toCamelCaseMap(paramMap));  // [2022.06.17] 박성근 - 회원가입 이외에는 고객도우미정보(PI_1208)는 Update로 전송하게함.
		
		return resultMap;
	}



}