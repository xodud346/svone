package com.ssp.bo.cc.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import com.ssp.bo.cc.CCUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.dao.CustTrmnTgtBzplcDao;
import com.ssp.bo.cc.service.CustTrmnTgtBzplcService;
import com.ssp.core.cc.dao.Pi1202Dao;
import com.ssp.core.cc.service.CustTrmnProcService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title 일반고객 종결대상 사업장 목록 service implements
 * @package com.ssp.bo.cc.service.impl
 * <pre> 
 * @author  moonjooh
 * @since   2022. 05. 09.
 * @version 1.0
 * @see CustTrmnTgtBzplcServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.05.09		최초작성
 */
@Service("custTrmnTgtBzplcService")
public class CustTrmnTgtBzplcServiceImpl implements CustTrmnTgtBzplcService {

    @Resource(name="custTrmnTgtBzplcDao")
    private CustTrmnTgtBzplcDao custTrmnTgtBzplcDao;
    
    @Autowired
    CustTrmnProcService custTrmnProcService;
    
    /**
     * 일반고객 종결대상 사업장 목록 조회
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectCustTrmnTgtBzplc(Map<String,Object> searchInfo, CCUtils ccUtils) throws Exception {
        // input dataset id 카멜화
		searchInfo.put("SES_ID", ccUtils.getSession().get("SES_ID").toString());
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        return custTrmnTgtBzplcDao.selectCustTrmnTgtBzplc(searchMap);
	}
    
    @Autowired
    private Pi1202Dao pi1202Dao;
    
    /**
     * 일반고객 종결대상 사업장 종결처리
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
	@Override
    @Transactional
	public NexacroResult updateCustTrmnTgtBzplc(List<Map<String, Object>> saveMap1) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		try {
			for(Map<String, Object> rowMap : saveMap1){
				Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(rowMap);
				
				// 로그인 세션확인
				String login = StringUtil.getString(saveMap.get("oprtrId"));
				if(login == null || "".equals(login)) {
					throw new MessageException(-100, "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다.");
				}
				
				// *** http://배치:5733/cc/cust/trmn/oprunit.do?coCd=1000 에서 등록상태가'Q'로 들어오면 처리하므로 주석처리 함.
				//custTrmnTgtBzplcDao.updateMbrNoUse    (saveMap);
				//custTrmnTgtBzplcDao.updateDeptNoUse   (saveMap);
				
				// 사업장/운영단위/부서 사용여부 N으로 UPDATE
				custTrmnTgtBzplcDao.updateOprUnitNoUse(saveMap);
				custTrmnTgtBzplcDao.updateBzplcNoUse  (saveMap);
				
				// PI호출
				pi1202Dao.publishUpdate(saveMap);
				
				int chk = custTrmnTgtBzplcDao.updateTrmnTgtBzplc(saveMap);
				if(chk < 1) {
					throw new MessageException(-1, "종결요청 중 에러가 발생하였습니다."); 
				}
			}
		}catch(MessageException e) {
			if( e.getCode() == -1 || e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			} else {
				throw e;
			}
		}
		
		result.addDataSet("ds_output1", resultMap);
		return result;
	}

	@Override
	public NexacroResult selectChkOpenVoc(List<Map<String, Object>> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		// input dataset id 카멜화
		for(Map<String, Object> rowMap : searchInfo){
			Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(rowMap);
			
		}

		Map<String, Object> m = new HashMap<String, Object>();
		
		m.put("oprUnits", searchInfo);
		Map<String, Object> m2 = custTrmnProcService.validTrmnOprunit(m);
		
		System.out.println("m2 : "+m2);
		
		result.addDataSet("ds_output1", m2);
		return result;
	}
    
}
