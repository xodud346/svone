package com.ssp.bo.cc.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.dao.CustIddtDao;
import com.ssp.bo.cc.service.CustIddtService;
import com.ssp.bo.pr.dao.PrProductPopupDao;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title 산업군조회 목록/상세/등록/수정 service implements
 * @package com.ssp.bo.cc.service.impl
 * <pre> 
 * @author  moonjooh
 * @since   2022. 02. 21.
 * @version 1.0
 * @see CustIddtServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.02.21		최초작성
 */
@Service("custIddtService")
public class CustIddtServiceImpl implements CustIddtService {

    @Resource(name="custIddtDao")
    private CustIddtDao custIddtDao;

    private final Logger logger = LoggerFactory.getLogger(CustDeptServiceImpl.class);

    @Autowired
    private SqlSession sqlSession;
    
    @Autowired
    private PrProductPopupDao prProductPopupDao;
    
    /**
     * 부서목록 리스트를 조회한다.
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public NexacroResult selectCustIddtList(Map<String,Object> searchInfo) throws Exception {
    	
    	NexacroResult result = new NexacroResult();

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        
        //조회
        List<Map<String,Object>> list = custIddtDao.selectCustIddtList(searchMap);
        // 카운트
      	int totalCount = custIddtDao.selectCustIddtCount(searchMap);
      	
      	for(Map<String, Object>map : list) {
      		
      		if("N".equals(map.get("USE_YN")) || "N".equals(map.get("EXPS_YN")) ) {
      			map.put("EXPS_SO","-"); 
      		}
      	}
      	
      	// 리턴값 set
        result.addVariable( "totalCount", totalCount);
        result.addDataSet("ds_output1", list);
        
        return result;
	}
    
    /**
     * 산업군조회 저장
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
	@Override
    @Transactional
	public NexacroResult saveCustIddt(List<Map<String, Object>> saveListMap) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		try {
			for(Map<String, Object> rowMap : saveListMap){
				// input dataset id 카멜화
		        Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(rowMap);
		        
		        // 로그인 세션확인
		        String login = StringUtil.getString(saveMap.get("oprtrId"));
		        if(login == null || "".equals(login)) {
		        	throw new MessageException(-100, "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다."); 
		        }
		        
		        // 필수입력값 체크
		        String iddtNm = StringUtil.getString(saveMap.get("iddtNm"));
		        if(isStringEmpty(iddtNm)) {
		        	throw new MessageException(-1, "산업군명은 필수 입력값입니다.");
		        }
		        
		        // 해당 산업군 정보가 사용중인지 체크
		        if("N".equals(saveMap.get("useYn"))) {
		        	int iddtChk = custIddtDao.selectBzplcIddtChk(saveMap);
			        if(iddtChk > 0) {
						throw new MessageException(-1, "사업장에서 사용중인 산업군 정보 "+saveMap.get("iddtNm")+"이(가) 있습니다. 미사용처리 할 수 없습니다."); 
					}
		        }
		        
		        // 통합테스트 2022.06.09 추가 : 운영조직코드 입력 시 담당OPID는 필수입력
		        if(saveMap.get("oprOrgCd") != null && saveMap.get("chrOpId") == null) {
		        	throw new MessageException(-1, "운영조직코드 값이 존재하는 경우 담당OPID는 필수 입력값입니다."); 
		        }
		        
		        // 산업군조회 merge
		        int saveChk = custIddtDao.saveCustIddt(saveMap);
		        if(saveChk <= 0) {
		        	throw new MessageException(-1, "저장에 실패했습니다."); 
				}
		        
		        // 산업군명 중복여부 체크
	        	int nmChk = custIddtDao.selectDuplNmChk(saveMap);
		        if(nmChk > 1) {
		        	throw new MessageException(-1, " 이미 산업군명  "+saveMap.get("iddtNm")+" 이(가) 존재합니다. 산업군명을 확인해주세요.");
				}
		        
		        // 산업군 등록시 마케팅 노출여부 default 'N'
		        int saveIddtMktg = custIddtDao.saveCustIddtMktg(saveMap);
		        
		        //상품군 맵핑 삭제 
		        if( saveMap.get("iddtId") != null && !"".equals(saveMap.get("iddtId")) && "N".equals(saveMap.get("useYn"))) {
		        	Map<String, Object> prdSearchMap = new HashMap<>();
		        	prdSearchMap.put("CO_CD",saveMap.get("coCd"));	
		        	prdSearchMap.put("IDDT_ID",saveMap.get("iddtId"));
		        	prdSearchMap.put("USER_ID",saveMap.get("updpsnId"));
		        	
		        	List<Map<String,Object>> prdClcdList = new ArrayList<>();
		        	prdClcdList = custIddtDao.selectPrdPlcdList(prdSearchMap); 
		        	
		        	if(prdClcdList != null && prdClcdList.size() > 0 ) {
			        	for(Map<String,Object> prdClcd : prdClcdList){
			        		prdSearchMap.put("PRD_CLCD",prdClcd.get("PRD_CLCD"));
			        		prProductPopupDao.deleteSpecialIndustryGroupMappList(prdSearchMap);
			        	}
		        	}
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
	
	/**
     * 산업군조회 삭제
     * @param saveListMap
     * @return Map
     * @throws Exception
     */
	@Override
    @Transactional
	public NexacroResult deleteCustIddt(List<Map<String, Object>> saveListMap) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		try {
			for(Map<String, Object> rowMap : saveListMap){
				// input dataset id 카멜화
		        Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(rowMap);
		        
		        // 로그인 세션확인
		        String login = StringUtil.getString(saveMap.get("oprtrId"));
		        if(login == null || "".equals(login)) {
		        	throw new MessageException(-100, "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다."); 
		        }
		        
		        // id값이 없는 경우는 신규생성된 경우이므로 exception처리
		        String id = StringUtil.getString(saveMap.get("iddtId"));
		        if("".equals(id) || id == null) {
		        	throw new MessageException(-1, "신규생성 데이터를 먼저 저장해주세요."); 
		        }
		        
		        // 산업군조회 삭제
		        int saveChk = custIddtDao.deleteCustIddt(saveMap);
		        if(saveChk <= 0) {
		        	throw new MessageException(-1, "삭제에 실패하였습니다."); 
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
	
	/**
     * 산업군조회 영업담당 콤보박스 조회
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public NexacroResult selectCombo(Map<String,Object> searchInfo) throws Exception {
    	
    	NexacroResult result = new NexacroResult();
        
        //조회
        List<Map<String,Object>> list = custIddtDao.selectCombo(searchInfo);
      	
      	// 리턴값 set
        result.addDataSet("ds_output1", list);
        
        return result;
	}
    
    // 공백문자열 체크
    static boolean isStringEmpty(String str) {
    	return str == null || str.trim().isEmpty();
    }
    
    /**
     * 산업군 상세 패키지 정보 조회 
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public NexacroResult selectIddtMktgInfo(Map<String,Object> searchInfo) throws Exception {
    	
    	NexacroResult result = new NexacroResult();

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        
        //조회
        Map<String,Object> iddtMktgInfo = custIddtDao.selectIddtMktgInfo(searchMap);
        
      	// 리턴값 set
        result.addDataSet("ds_output1", iddtMktgInfo);
        
        return result;
	}
    
    /**
     * 산업군 상세 패키지 정보 저장
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public NexacroResult saveIddtMktgInfo(Map<String,Object> saveInfo) throws Exception {
    	
    	NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
    	try {
        // input dataset id 카멜화
        Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(saveInfo);
        
        //산업군 마케팅 정보 테이블 merge
        custIddtDao.saveIddtMktgInfo(saveMap);
        
        //산업군 기본정보(MRO_IDDT_ID) UPDATE
        custIddtDao.updateIddtInfo(saveMap);
        
        
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
    

}
