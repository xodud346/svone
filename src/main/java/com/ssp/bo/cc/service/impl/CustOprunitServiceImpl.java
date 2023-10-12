package com.ssp.bo.cc.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.dao.CustDeptDao;
import com.ssp.bo.cc.dao.CustOprunitDao;
import com.ssp.bo.cc.service.CustDeptService;
import com.ssp.bo.cc.service.CustOprunitService;
import com.ssp.core.cc.dao.Pi1202Dao;
import com.ssp.core.cc.dao.Pi1209Dao;
import com.ssp.core.cc.dao.Pi1210Dao;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/** 
 * <pre>
 * @title 운영단위정보 service implements
 * @package com.ssp.bo.cc.service.impl
 * <pre> 
 * @author  moonjooh
 * @since   2022. 02. 16.
 * @version 1.0
 * @see CustOprunitService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.16		최초작성
 */
@Service("custOprunitService")
public class CustOprunitServiceImpl implements CustOprunitService {
    private final Logger logger = LoggerFactory.getLogger(CustOprunitServiceImpl.class);
    
    @Autowired
	protected SspPropertyService propertiesService;
    
    @Autowired
    private CustOprunitDao custOprunitDao;
    
    /**
     * 운영단위 리스트를 조회한다.
     * @param commandMap Map<String, Object>
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public Map<String, Object> selectCustOprunit(Map<String,Object> searchInfo, CCUtils ccUtils) throws Exception {
    	Map<String, Object> r = new HashMap<String, Object>();
    	searchInfo.put("SES_ID", ccUtils.getSession().get("SES_ID").toString());
    	
        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        
        // 조회
        List<Map<String,Object>> list = custOprunitDao.selectCustOprunit(searchMap); 
      	
      	// 리턴값 set
        r.put("ds_output1", list      );
      	
        return r;
    }
    
    
    /**
     * 사업장+운영단위+부서를 조회한다.
     * @param commandMap Map<String, Object>
     * @return Map
     * @throws Exception Exception
     */
    // 사업장+운영단위+부서
    public Map<String, Object> selectBzplcOprunitDept(Map<String,Object> param) throws Exception {
		Map<String, Object> r = new HashMap<String, Object>();
		param = CommonUtil.toCamelCaseMap(param);
		
		param.put("DEPT_ID"  , null  );
		param.put("DEPT_INFO", "전체");
		
		List<Map<String, Object>> listDept  = new ArrayList<Map<String, Object>>();
		listDept.add(param);
		listDept.addAll(custOprunitDao.selectBzplcOprunitDept(param));
		
		r.put("dsBzplcOprunitDept", listDept);
		
		return r;
	}
    
    /**
     * 운영단위 상세정보를 조회한다.
     * @param commandMap Map<String, Object>
     * @return Map
     * @throws Exception Exception
     */
    public Map<String, Object> selectOprunitBasis(Map<String,Object> param) throws Exception {
    	param = CommonUtil.toCamelCaseMap(param);
    	
    	// 상세정보
    	Map<String, Object> r = new HashMap<String, Object>();
    	List<Map<String,Object>> listOprunitBasis = custOprunitDao.selectOprunitBasis(param);
    	if (listOprunitBasis == null || listOprunitBasis.size() < 1) {
    		listOprunitBasis = new ArrayList<Map<String,Object>>();
    		listOprunitBasis.add(new HashMap<String,Object>());
    	}
    	
    	if (listOprunitBasis != null && listOprunitBasis.size() > 0) {
    		Map<String,Object> oprunitBasis = listOprunitBasis.get(0);
    		
    		List<Map<String,Object>> dsRefCdGrp = custOprunitDao.selectRefCdGrp(param);
    		List<Map<String,Object>> dsOshtCd   = custOprunitDao.selectOshtCd  (param);
    		List<Map<String,Object>> dsStlMean   = custOprunitDao.selectStlMeanCd(param);
    		
//    		dtl.put("REF_CD" , listOprunitRefCd );  // 참조코드
//    		dtl.put("OSHT_CD", listOprunitOshtCd);  // 일회성코드
    		
    		r.put("dsOprunitBasis", oprunitBasis);
    		r.put("dsRefCdGrp"    , dsRefCdGrp  );
    		r.put("dsOshtCd"      , dsOshtCd    );
    		r.put("dsStlMean"     , dsStlMean   );
    		
    	}
    	
    	return r;
    }

	@Autowired private Pi1202Dao pi1202Dao;
	@Autowired private Pi1209Dao pi1209Dao;
	@Autowired private Pi1210Dao pi1210Dao;
	
	/**
	 * 운영단위 상세정보를 저장한다.
	 * @param commandMap Map<String, Object>
	 * @return Map
	 * @throws Exception Exception
	 */
	public Map<String, Object> saveOprunitBasis(Map<String,Object> dsOprunitBasis, List<Map<String,Object>> dsOprunitRefCd, List<Map<String,Object>> dsOprunitOshtCd) throws Exception {
		Map<String, Object> r = new HashMap<String, Object>();
		
		// 상세정보 저장
		// 운영단위 > 운영단위몰구분코드	OPR_UNIT_MALL_SPR_CD
		// 운영단위 > 로그인 후 첫 페이지
		// 운영단위 > 특정 로고 사용
		custOprunitDao.saveOprunitBasis      (dsOprunitBasis);
		
		// 제어권한 > 서브원자차이용여부	SRVON_OCAR_UT_YN
		// 제어권한 > 택배배송사용여부  	HDV_DLV_USE_YN
		// 제어권한 > 카트문구내용      	CART_PHS_CTS
		custOprunitDao.saveOprunitCtlAuthParts(dsOprunitBasis);
		
		
		// 참조코드 & 일회성 코드 저장처리
		dsOprunitBasis.put("PROC_REF_CD_GRP_YN", "Y"            );  // 참조코드 그룹(header) 정보만 PI연동처리.
		dsOprunitBasis.put("PROC_REF_CD_YN"    , "N"            );  // 참조코드 상세(body  ) 정보만 PI연동처리.
		for (Map<String, Object> mItem : dsOprunitRefCd) {       // 미사용처리가 있으면 참조코드도 처리함.
			if ( "N".equals(mItem.get("USE_YN")) ) {
				dsOprunitBasis.put("PROC_REF_CD_YN"    , "Y"    );
				break;
			}
		}
		
		dsOprunitBasis.put("REF_CD_GRP"     , dsOprunitRefCd );  // 참조코드 정보
		dsOprunitBasis.put("OSHT_CD"        , dsOprunitOshtCd);  // 일회성코드
		boolean isUpdtRefCd=dsOprunitRefCd.size()>0, isUpdtOshtCd=dsOprunitOshtCd.size()>0;
		
		// 테이블 저장처리
		if (isUpdtRefCd ) {  // 참조코드 정보
			custOprunitDao.saveRefCdGrp     (dsOprunitBasis );
			postSaveRefGrp                  (dsOprunitBasis );
			
			custOprunitDao.saveRefCdGrp4Post(dsOprunitBasis );
		}
		if (isUpdtOshtCd) {  // 일회성코드
			custOprunitDao.saveOshtCd       (dsOprunitBasis );
		}
		
		
		// PI연동처리
		if (dsOprunitBasis != null) { pi1202Dao.publishUpdate(dsOprunitBasis); }
		
		// [2022.05.19] 참조코드는 상세설정시에만 PI연동 처리함.
		Map<String, Object> cmOprunitBasis = CommonUtil.toCamelCaseMap(dsOprunitBasis);
		cmOprunitBasis.putAll(dsOprunitBasis);
		
		if (isUpdtRefCd ) { pi1209Dao.publishUpdate         (cmOprunitBasis ); }  // 참조코드 정보만 PI연동처리.
		if (isUpdtOshtCd) { pi1210Dao.publishUpdate         (cmOprunitBasis ); }  // 일회성코드 정보 PI연동처리.
		
		return r;
	}
	
	private void postSaveRefGrp(Map<String,Object> dsOprunitBasis) throws Exception {
		//List<Map<String,Object>> dsOprunitRefCdGrp = (List<Map<String,Object>>) dsOprunitBasis.get("REF_CD_GRP");
		// 미사용 처리하는 참조코드 그룹이 있으면, 참조코드 미사용처리
		/*
		if (dsOprunitRefCd!=null && dsOprunitRefCd.size()>0) {
			List<Map<String, Object>> refCd4ProcUseN = new ArrayList<Map<String, Object>>();
			for(Map<String, Object> refGrpItem : dsOprunitRefCd) {
				String useYn=(String) refGrpItem.get("USE_YN");
				if (!"N".equals(useYn)) { continue; }
				
				refCd4ProcUseN.add(refGrpItem);
			}
			
			if (refCd4ProcUseN!=null && refCd4ProcUseN.size()>0) {
				String[] refKeys = { "CO_CD", "BZPLC_ID", "OPR_UNIT_ID" };
				
				Map<String, Object> mUesNPram = new HashMap<String, Object>();
				for (String key : refKeys) { mUesNPram.put(key, cmOprunitBasis.get(key)); }
				mUesNPram.put("USE_YN", "Y");
				
				List<Map<String, Object>> listRefCd4ProcUseN = custOprunitDao.selectRefCd(mUesNPram);
				if (listRefCd4ProcUseN!=null && listRefCd4ProcUseN.size()>0) {
				
				}
			}   // refCd4ProcUseN!=null
		}   // dsOprunitRefCd!=null
		*/
		String[] refKeys = { "coCd", "bzplcId", "oprUnitId" };
		Map<String, Object> mUesNPram = new HashMap<String, Object>();
		for (String key : refKeys) { mUesNPram.put(key, dsOprunitBasis.get(key)); }
		mUesNPram.put("refGrpYCdN", "Y");
		
		List<Map<String, Object>> listRefGrpNCdY=custOprunitDao.selectRefCd(mUesNPram);
		if (listRefGrpNCdY!=null && listRefGrpNCdY.size()>0) {
			dsOprunitBasis.put("REF_CD_USE_N", listRefGrpNCdY);
		}
		
	}
	
	@Override
	public Map<String, Object> listDept(Map<String, Object> param) throws Exception {
		Map<String, Object> r = new HashMap<String, Object>();
		
		param = CommonUtil.toCamelCaseMap(param);
		
		return r;
	}
	
    /**
     * 운영단위 참조코드 상세리스트 조회
     * @param commandMap Map<String, Object>
     * @return Map
     * @throws Exception Exception
     */
    public Map<String, Object> selectRefCd(Map<String, Object> param) throws Exception {
    	Map<String, Object> r = new HashMap<String, Object>();
    	
    	param = CommonUtil.toCamelCaseMap(param);
    	String sprCd = (String) param.get("deptOprUnitSprCd"), outDSNm="dsRefCd";
    	
    	if (sprCd != null) {
    		outDSNm = outDSNm + (!"DEP".equals(sprCd)?"4Opru":"4Dept");
    	}
    	
    	r.put(outDSNm, custOprunitDao.selectRefCd(param));
    	
    	return r;
    }
    
    
	/**
	 * 운영단위 참조코드 상세리스트 저장
	 * @param commandMap Map<String, Object>
	 * @return Map
	 * @throws Exception Exception
	 */
	@Override
	public Map<String, Object> saveRefCd(Map<String, Object> param) throws Exception {
		Map<String, Object> r = new HashMap<String, Object>();
		
		//param = CommonUtil.toCamelCaseMap(param);
		custOprunitDao.saveRefCd(param);
		
		param.put("PROC_REF_CD_GRP_YN", "N"            );  // 참조코드 그룹(header) 정보만 PI연동처리.
		param.put("PROC_REF_CD_YN"    , "Y"            );  // 참조코드 상세(body  ) 정보만 PI연동처리.
		
		pi1209Dao.publishUpdate(param);
		
		return r;
	}
	
	
	// 운영단위 제어권한 설정
	@Override
	public Map<String, Object> selectCtlAuthInfo(Map<String, Object> param) throws Exception {
		Map<String, Object> r = new HashMap<String, Object>();
		
		r.put("dsCtlAuthInfo", custOprunitDao.selectCtlAuthInfo(param));
		
		return r;
	}
	
	@Override
	@Transactional
	public NexacroResult saveCtlAuthInfo(Map<String, Object> param) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> r = new HashMap<String, Object>();
		
		try {
			String sMBR_JOIN_DSGN_APPRR_USE_YN = (String) param.get("MBR_JOIN_DSGN_APPRR_USE_YN");
			String sMBR_JOIN_APPRR_IDS         = (String) param.get("MBR_JOIN_APPRR_IDS"        );
			if ("Y".equals(sMBR_JOIN_DSGN_APPRR_USE_YN) && sMBR_JOIN_APPRR_IDS != null) {
				List<String> listMBR_JOIN_APPRR = Arrays.asList(sMBR_JOIN_APPRR_IDS.split(","));
				
				if(listMBR_JOIN_APPRR.size() < 1) {
					throw new MessageException(-1, "회원가입 지정 승인자가 사용인 경우 승인자는 필수 입력값 입니다."); 
				}
				
				Map<String, Object> chkMap = new HashMap<String, Object>();
				chkMap.put("coCd", param.get("CO_CD"));
				chkMap.put("bzplcId", param.get("BZPLC_ID"));
				chkMap.put("oprUnitId", param.get("OPR_UNIT_ID"));
				
				for(int i=0; i<listMBR_JOIN_APPRR.size(); i++) {
					chkMap.put("mbrId", listMBR_JOIN_APPRR.get(i));
					int chk = custOprunitDao.chkMbrJoinAppr(chkMap);
					if(chk < 1) {
						throw new MessageException(-1, "회원ID '"+listMBR_JOIN_APPRR.get(i)+"' 는 해당 사업장에 존재하지 않는 회원입니다."); 
					}
				}
				
				param.put("MBR_JOIN_APPRR", listMBR_JOIN_APPRR);
			}
			
			custOprunitDao.saveCtlAuthInfo             (param);  // 운영단위 제어권한 저장
			custOprunitDao.saveCtlAuthInfo4MbrJoinApprr(param);  // 회원가입 지정 승인자 정보가 존재하면
			
			postSaveOprunitCtlAuthInfo(param);  // 예산사용 미사용 처리 시 부서제어권한정보 테이블 예산초과허용여부/이체허용여부 N처리
			
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
		
		result.addDataSet("ds_output1", r);
		return result;
	}
	
	
	@Autowired private CustDeptService custDeptService;
	@Autowired private CustDeptDao     custDeptDao;
	
	private void postSaveOprunitCtlAuthInfo(Map<String, Object> param) throws Exception {
		/* [2022.06.03] 박성근 개선내용
		 1. 운영단위 > 예산권한사용여부(BGT_AUTH_USE_YN)="N" 이면, 부서 > 예산이체허용여부(BGT_TRNSF_AGD_YN)="N" 처리.
		 2. 운영단위 > 예산초과허용여부(BGT_OVER_AGD_YN)="N" 이면, 부서 > 예산초과허용여부(BGT_OVER_AGD_YN )="N" 처리. */
		/*
		if("N".equals(param.get("BGT_AUTH_USE_YN"))) {  // 예산권한사용여부
			// 예산사용 미사용 처리 시 부서제어권한정보 테이블 예산초과허용여부/이체허용여부 N처리
			custOprunitDao.saveDeptCtlAuthInfo(param);
			custOprunitDao.saveDeptCtlAuthInfoHst(param);
		}
		*/
		String soACCT_USE_YN=(String) param.get("ACCT_USE_YN"), soBGT_AUTH_USE_YN=(String) param.get("BGT_AUTH_USE_YN"), soCOST_DEPT_CHG_PSB_YN=(String) param.get("COST_DEPT_CHG_PSB_YN"), soBGT_OVER_AGD_YN=(String) param.get("BGT_OVER_AGD_YN");
		if ("N".equals(soBGT_AUTH_USE_YN) || "N".equals(soCOST_DEPT_CHG_PSB_YN) || "N".equals(soBGT_OVER_AGD_YN)) {
			Map<String, Object> mDeptParam = new HashMap<String, Object>();
			mDeptParam.put("coCd"     , param.get("CO_CD"      ));
			mDeptParam.put("bzplcId"  , param.get("BZPLC_ID"   ));
			mDeptParam.put("oprUnitId", param.get("OPR_UNIT_ID"));
			
			List<Map<String, Object>> listDeptCtlAuth = custDeptDao.selectCustDeptDetailInfo(mDeptParam);
			if (null != listDeptCtlAuth && listDeptCtlAuth.size() > 0) {
				
				List<Map<String, Object>> modiDeptCtlAuth = new ArrayList<Map<String, Object>>();
				for (Map<String, Object> mDeptCtlAuth : listDeptCtlAuth) {
					boolean isModified = false;
					
					String sdBGT_TRNSF_AGD_YN=(String) mDeptCtlAuth.get("BGT_TRNSF_AGD_YN"), sdBGT_OVER_AGD_YN=(String) mDeptCtlAuth.get("BGT_OVER_AGD_YN");
					if (("N".equals(soACCT_USE_YN) || "N".equals(soCOST_DEPT_CHG_PSB_YN)) && "Y".equals(sdBGT_TRNSF_AGD_YN)) {
						mDeptCtlAuth.put("BGT_TRNSF_AGD_YN", "N");
						isModified = true;
					}
					if (("N".equals(soBGT_AUTH_USE_YN) || "N".equals(soBGT_OVER_AGD_YN     )) && "Y".equals(sdBGT_OVER_AGD_YN )) {
						mDeptCtlAuth.put("BGT_OVER_AGD_YN", "N");
						isModified = true;
					}
					
					if (!isModified) { continue; }
					
					mDeptCtlAuth.put("oprtrId", param.get("oprtrId"));
					modiDeptCtlAuth.add(mDeptCtlAuth);
				}  // for
				
				if (modiDeptCtlAuth!=null && modiDeptCtlAuth.size()>0) {
					custDeptService.saveCustDeptDetailInfo( modiDeptCtlAuth );
				}
			}  // if
		}
		/* /[2022.06.03] 박성근 개선내용 */
		
		/* [2022.07.05] 박성근 설정된 입고레벨 이외의 입고담당자 정보는 삭제처리 */
		String sGiLvlCd = (String) param.get("GI_LVL_CD");
		if (!"1".equals(sGiLvlCd)) { custOprunitDao.deleteByoprunitGiChrpsn(param); }
		if (!"2".equals(sGiLvlCd)) { custOprunitDao.deleteBydeptGiChrpsn   (param); }
		/*/[2022.07.05] 박성근 설정된 입고레벨 이외의 입고담당자 정보는 삭제처리 */
	}
	
	
	// 입고책임자 설정
	public Map<String, Object> selectGiChrpsnInfo(Map<String, Object> param) throws Exception {
		Map<String, Object> r = new HashMap<String, Object>();
		
		String giChrpsnType = (String) param.get("giChrpsnType");;
		if (giChrpsnType == null || "OPU".equals(giChrpsnType)) { r.put("dsByoprunitGiChrpsn", custOprunitDao.selectByoprunitGiChrpsn(param)); }
		if (giChrpsnType == null || "DEP".equals(giChrpsnType)) { r.put("dsBydeptGiChrpsn"   , custOprunitDao.selectBydeptGiChrpsn   (param)); }
		
		return r;
	}
	public Map<String, Object> saveGiChrpsnInfo  (Map<String, Object> param) throws Exception {
		Map<String, Object> r = new HashMap<String, Object>();
		
		String sGiLvlCd = null;
		String dsOprName="BYOPRUNIT_GI_CHRPSN", dsDeptName="BYDEPT_GI_CHRPSN", colName = "GI_CHRPSN_ID";
		
		List<Map<String, Object>> listByoprunitGiChrpsn     = (List<Map<String, Object>>) param.get(dsOprName);
		if (listByoprunitGiChrpsn != null && listByoprunitGiChrpsn.size() > 0) {
			List<Map<String, Object>> listSaveByoprunitGiChrpsn = new ArrayList<Map<String, Object>>();
			
			for (Map<String, Object> byoprunitGiChrpsn : listByoprunitGiChrpsn) {
				String sGI_CHRPSN_ID = (String) byoprunitGiChrpsn.get(colName);
				byoprunitGiChrpsn.put(colName, CCUtils.cnvtCsv2List(sGI_CHRPSN_ID));
				
				listSaveByoprunitGiChrpsn.add(byoprunitGiChrpsn);
			}
			param.put(dsOprName, listSaveByoprunitGiChrpsn);
			custOprunitDao.saveByoprunitGiChrpsn(param);
			
			sGiLvlCd="1";
		}
		
		
		List<Map<String, Object>> listBydeptGiChrpsn     = (List<Map<String, Object>>) param.get(dsDeptName);
		if (listBydeptGiChrpsn != null && listBydeptGiChrpsn.size() > 0) {
			List<Map<String, Object>> listSaveBydeptGiChrpsn = new ArrayList<Map<String, Object>>();
			
			for (Map<String, Object> bydeptGiChrpsn : listBydeptGiChrpsn) {
				String sGI_CHRPSN_ID = (String) bydeptGiChrpsn.get(colName);
				bydeptGiChrpsn.put(colName, CCUtils.cnvtCsv2List(sGI_CHRPSN_ID));
				
				listSaveBydeptGiChrpsn.add(bydeptGiChrpsn);
			}
			param.put(dsOprName, listSaveBydeptGiChrpsn);
			custOprunitDao.saveBydeptGiChrpsn   (param);
			
			sGiLvlCd="2";
		}
		
		if (sGiLvlCd != null) {
			param.put("GI_LVL_CD", sGiLvlCd);
			custOprunitDao.saveOprunitGiLvl(param);
			
			if (!"1".equals(sGiLvlCd)) { custOprunitDao.deleteByoprunitGiChrpsn(param); }
			if (!"2".equals(sGiLvlCd)) { custOprunitDao.deleteBydeptGiChrpsn   (param); }
		}
		
		return r;
	}
	
	
    /**
     * 출고명세서 목록 팝업
     * @param commandMap Map<String, Object>
     * @return Map
     * @throws Exception Exception
     * 박재광,	2022. 05. 10.
     */
    @Override
    public NexacroResult selectGoStmList(Map<String, Object> param) throws Exception {
    	NexacroResult result = new NexacroResult();
    	param = CommonUtil.toCamelCaseMap(param);
    	
		int totalCount = custOprunitDao.selectGoStmListCnt(param);	//카운트
		List<Map<String,Object>> list = custOprunitDao.selectGoStmList(param);	//조회목록
		
		result.addVariable("totalCount", totalCount);
		result.addDataSet("ds_goStmList", list);
		
    	return result;
    }
    
    /**
     * 대용량엑셀
     * @param commandMap Map<String, Object>
     * @return Map
     * @throws Exception Exception
     * 문주환,	2022. 06. 02.
     */
 	@Override
 	public NexacroResult selectAllExcelDownload(Map<String, Object> searchInfo, CCUtils ccUtils) throws Exception {
     	NexacroResult result = new NexacroResult();
     	
         try {
     		searchInfo.put("SES_ID", ccUtils.getSession().get("SES_ID").toString());
     		
     		// 로그인 세션확인
             if(ccUtils.getSession().get("OPRTR_CO_CD") == null) throw new MessageException(-100, "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다."); 
     			
             // input dataset id 카멜화
             Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
             searchMap.put("coCd", ccUtils.getSession().get("OPRTR_CO_CD").toString());
             searchMap.put("pgmId", "SSP_BO_MA_05");
             searchMap.put("excelMetaSeq", 1);
             searchMap.put("saveFileNm", "운영단위목록.xlsx");
             searchMap.put("regpsnId", ccUtils.getSession().get("OPRTR_ID").toString());
             searchMap.put("updpsnId", ccUtils.getSession().get("OPRTR_ID").toString());
             
             CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
             return result;
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
 	}

 	/**
     * 대용량엑셀
     * @param commandMap Map<String, Object>
     * @return Map
     * @throws Exception Exception
     * 문주환,	2022. 06. 02.
     */
	@Override
	public NexacroResult selectAuthAllExcelDownload(Map<String, Object> searchInfo, CCUtils ccUtils) throws Exception {
     	NexacroResult result = new NexacroResult();
     	
        try {
    		searchInfo.put("SES_ID", ccUtils.getSession().get("SES_ID").toString());
    		
    		// 로그인 세션확인
            if(ccUtils.getSession().get("OPRTR_CO_CD") == null) throw new MessageException(-100, "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다."); 
    			
            // input dataset id 카멜화
            Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
            searchMap.put("coCd", ccUtils.getSession().get("OPRTR_CO_CD").toString());
            searchMap.put("pgmId", "SSP_BO_MA_05");
            searchMap.put("excelMetaSeq", 2);
            searchMap.put("saveFileNm", "운영단위제어권한목록.xlsx");
            searchMap.put("regpsnId", ccUtils.getSession().get("OPRTR_ID").toString());
            searchMap.put("updpsnId", ccUtils.getSession().get("OPRTR_ID").toString());
            
            CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
            return result;
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
	}


	@Override
	public NexacroResult selectChkCcoDetail(Map<String, Object> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        
        System.out.println("test : "+searchMap);
        
        //조회
        List<Map<String,Object>> list = custOprunitDao.selectChkCcoDetail(searchMap);
      	
      	// 리턴값 set
        result.addDataSet("ds_output1", list);
        
        return result;
	}
    
}
