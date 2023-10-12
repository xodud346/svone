package com.ssp.bo.cust.mbr.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cust.mbr.dao.CustMbrDao;
import com.ssp.bo.cust.mbr.service.CustMbrService;
import com.ssp.core.cc.dao.CustComDao;
import com.ssp.core.cc.dao.Pi1201Dao;
import com.ssp.core.cc.dao.Pi1204Dao;
import com.ssp.core.cc.service.CustComService;
import com.ssp.core.cc.service.ValidateService;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.EncrytUtil;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title   
 * @desc    회원관리를 위한 클래스 입니다.
 * -        CustMbrDaoImpl Class
 * @package com.ssp.bo.cust.mbr.service.impl
 * <pre>
 * @author  신경민
 * @since   2022. 02. 10
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜				변경자		내용
 * ------------------------------------------------
 * 2022. 02. 10.	신경민		최초작성
 * 2022. 02. 22.	문주환		휴먼회원관리 목록 추가
 * 2022. 02. 24.	문주환		휴먼회원관리 상세/수정 추가
 * 2022. 02. 25.	문주환		탈퇴회원관리 목록, 상세 추가
 */
@Service
public class CustMbrServiceImpl implements CustMbrService {
	
	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private CustMbrDao custMbrDao;
	
	@Autowired
	private ValidateService validateService;
	
    @Autowired
	protected SspPropertyService propertiesService;
    
    @Autowired
	private CustComService CustComService;

    
  @Autowired
  private Pi1204Dao pi1204Dao;
  
  @Autowired
  private Pi1201Dao pi1201Dao; 

  private String tempAdmin = "X0025958"; //비로그인시 임시 아이디	
  
	@Override
	public NexacroResult selectCodeList() {
		
		@SuppressWarnings("rawtypes")
		List codeList = custMbrDao.selectCodeList();
		
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("sv_codeList", codeList);
		
		return result;
	}

	@SuppressWarnings("unchecked")
	@Override
	public NexacroResult selectMbrList(  Map<String,Object> searchMap) {
        // input dataset id 카멜화
        Map<String, Object> searchMapAll = CommonUtil.toCamelCaseMap(searchMap);
				
        if(searchMapAll!=null && !CommUtil.nvl(searchMapAll.get("bzplcId")).equals("")) {  
        	searchMapAll.put("bzplcId", searchMapAll.get("bzplcId").toString().trim());
        	searchMapAll.put("bzplcIds", searchMapAll.get("bzplcId").toString().split(","));
        }        
        if(searchMapAll!=null && !CommUtil.nvl(searchMapAll.get("oprUnitId")).equals("")) {   
        	searchMapAll.put("oprUnitId", searchMapAll.get("oprUnitId").toString().trim());
        	searchMapAll.put("oprUnitIds", searchMapAll.get("oprUnitId").toString().split(","));
        }        
        if(searchMapAll!=null && !CommUtil.nvl(searchMapAll.get("deptId")).equals("")) {  
        	searchMapAll.put("deptId", searchMapAll.get("deptId").toString().trim());
        	searchMapAll.put("deptIds", searchMapAll.get("deptId").toString().split(","));
        }        
        if(searchMapAll!=null && !CommUtil.nvl(searchMapAll.get("mbrId")).equals("")) {      
        	searchMapAll.put("mbrId", searchMapAll.get("mbrId").toString().trim());
        	searchMapAll.put("mbrIds", searchMapAll.get("mbrId").toString().split(","));
        }          
                		
		log.info("전체 파라미터:{}",searchMapAll);
		
		int totalCount = custMbrDao.selectMbrListCnt(searchMapAll);
		searchMapAll.put("_PSN_LOG_MENU_ID", "SSP_BO_MA_12");
		List<Map<String,Object>> mbrList = custMbrDao.selectMbrList(searchMapAll);
		
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("sv_mbrList", mbrList);
		result.addVariable("totalCount", totalCount);

		return result;
		
	}
	
	@Override
	@Transactional
	public Map<String, Object> updateMbrUseCdList(List<Map<String,String>> updateInfoList, CCUtils cCUtils) throws NexacroException{
		String userId = CommUtil.nvl(cCUtils.getSession().get("OPRTR_ID")).equals("") ? tempAdmin : cCUtils.getSession().get("OPRTR_ID").toString();
		
		Map<String, Object> resMap = new HashMap();		
		String msgStr = "";
		
		try {
			for(int i=0;i<updateInfoList.size();i++) {
				Map<String,String> one = updateInfoList.get(i);
				one.put("USER_ID",userId);				
								
				boolean isUpdate = true;
				Map<String,String> deptUseYnMap= custMbrDao.selectMbrDeptUseYn(one); //소속부서의 미사용여부 체크
				
				if(CommUtil.nvl(deptUseYnMap.get("USE_YN")).equals("N") || CommUtil.nvl(deptUseYnMap.get("BZPLC_USE_YN")).equals("N") )  isUpdate = false;
				if(isUpdate == true) {
					custMbrDao.updateMbrUseCd(one);
					pi1204Dao.publishUpdateOne(one);
					if(one.get("MBR_USE_CD").equals("Y")) { //사용상태코드를 사용(Y)시 전환시
						msgStr = msgStr + one.get("MBR_NM") + " 님은 사용처리되었습니다.\r\n";			
					}
					else { //사용상태코드를 미사용(N)시 전환시
						msgStr = msgStr + one.get("MBR_NM") + " 님은 미사용처리되었습니다.\r\n";
					}
				}
				else {					
					msgStr = msgStr + one.get("MBR_NM") + " 님은 소속 사업장 또는 부서가 미사용처리되어 변경 할 수 없습니다.\r\n";	
				}	
			}
		}catch(Exception e) {
			throw new NexacroException("업데이트 도중 에러가 발생 하였습니다.", e.getCause(), 1, "DB 에러:"+e.getMessage());
		}
		
		resMap.put("msg", msgStr);
		
		return resMap;
	}

	/**
     * 휴먼회원관리 목록 조회
     * @param Map<String, Object> searchInfo
     * @return NexacroResult
     * @throws Exception Exception
     */
	@Override
	public List<Map<String, Object>> selectDrmcMbrList(Map<String, Object> searchInfo, CCUtils ccUtils) throws Exception {
		searchInfo.put("SES_ID", ccUtils.getSession().get("SES_ID").toString());
		
		// input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
       
        return custMbrDao.selectDrmcMbrList(searchMap);
	}

	/**
     * 휴먼회원관리 상세 조회
     * @param Map<String, Object> searchInfo
     * @return NexacroResult
     * @throws Exception Exception
     */
	@Override
	public NexacroResult selectDrmcMbrDeatil(Map<String, Object> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        
        // 조회
        List<Map<String,Object>> list = custMbrDao.selectDrmcMbrDeatil(searchMap);
        
        Map<String, Object> dtlMap = null;
        List<Map<String, Object>> list2 = custMbrDao.selectMbrRegCtlAuthMapp(searchMap);
		if(list2!=null && list2.size()>0) { //제어권한 (예산,정산,관리) 병합
			String bgtBzplcId = "";
			String bgtOprUnitId = "";
			String bgtOprUnitNm = "";
			String adjBzplcId = "";
			String adjOprUnitId = "";
			String adjOprUnitNm = "";
			String mngBzplcId = "";
			String mngOprUnitId = "";
			String mngOprUnitNm = "";
			
			for(int i=0; i<list2.size(); i++) {
				Map item = list2.get(i);
				if(item.get("CTL_SPR_CD").toString().equals("20")) { //예산				
					bgtBzplcId += item.get("BZPLC_ID") + ",";
					bgtOprUnitId += item.get("OPR_UNIT_ID") + ",";
					bgtOprUnitNm += item.get("OPR_UNIT_NM") + "(" + item.get("OPR_UNIT_ID") + ")" + ",";				
				}
				else if(item.get("CTL_SPR_CD").toString().equals("30")) { //정산			
					adjBzplcId += item.get("BZPLC_ID") + ",";
					adjOprUnitId += item.get("OPR_UNIT_ID") + ",";
					adjOprUnitNm += item.get("OPR_UNIT_NM") + "(" + item.get("OPR_UNIT_ID") + ")" + ",";				
				}
				else if(item.get("CTL_SPR_CD").toString().equals("40")) { //관리				
					mngBzplcId += item.get("BZPLC_ID") + ",";
					mngOprUnitId += item.get("OPR_UNIT_ID") + ",";
					mngOprUnitNm += item.get("OPR_UNIT_NM") + "(" + item.get("OPR_UNIT_ID") + ")" + ",";				
				}								
			}
			dtlMap.put("BGT_AUTH_BZPLC_ID", bgtBzplcId.length()>0 ? bgtBzplcId.substring(0, bgtBzplcId.length()-1) : "");
			dtlMap.put("BGT_AUTH_OPR_UNIT_ID", bgtOprUnitId.length()>0 ? bgtOprUnitId.substring(0, bgtOprUnitId.length()-1) : "");
			dtlMap.put("BGT_AUTH_OPR_UNIT_NM", bgtOprUnitNm.length()>0 ? bgtOprUnitNm.substring(0, bgtOprUnitNm.length()-1) : "");
			dtlMap.put("ADJ_AUTH_BZPLC_ID", adjBzplcId.length()>0 ? adjBzplcId.substring(0, adjBzplcId.length()-1) : "");
			dtlMap.put("ADJ_AUTH_OPR_UNIT_ID", adjOprUnitId.length()>0 ? adjOprUnitId.substring(0, adjOprUnitId.length()-1) : "");
			dtlMap.put("ADJ_AUTH_OPR_UNIT_NM", adjOprUnitNm.length()>0 ? adjOprUnitNm.substring(0, adjOprUnitNm.length()-1) : "");
			dtlMap.put("MNG_AUTH_BZPLC_ID", mngBzplcId.length()>0 ? mngBzplcId.substring(0, mngBzplcId.length()-1) : "");
			dtlMap.put("MNG_AUTH_OPR_UNIT_ID", mngOprUnitId.length()>0 ? mngOprUnitId.substring(0, mngOprUnitId.length()-1) : "");
			dtlMap.put("MNG_AUTH_OPR_UNIT_NM", mngOprUnitNm.length()>0 ? mngOprUnitNm.substring(0, mngOprUnitNm.length()-1) : "");
		}
        
        result.addDataSet("ds_output1", list);
        result.addDataSet("ds_output2", dtlMap);
        
        return result;
	}

	/**
     * 휴먼회원관리 상세 수정
     * @param commandMap NexacroResult
     * @return NexacroResult
     * @throws Exception Exception
     */
	@Override
    @Transactional
	public NexacroResult saveDrmcMbrDeatil(List<Map<String, Object>> saveListMap) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		try {
			for(Map<String, Object> rowMap : saveListMap){
				// input dataset id 카멜화
		        Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(rowMap);
		        
		        // 로그인 세션확인
		        String login = StringUtil.getString(saveMap.get("oprtrId"));
		        if(login == null || "".equals(login)) {
		        	throw new MessageException(-1, "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다.");
		        }
		        
		        // 해당 회원이 휴면상태인지 확인 220621 추가
		        int chkMbr = custMbrDao.selectChkDrmcMbr(saveMap);
				if(chkMbr < 1) {
					throw new MessageException(-1, "해당 회원은 현재 휴면 상태가 아닙니다. 다시 확인하세요.");
				}
		        
		        // 휴먼회원관리 상세 수정
		        custMbrDao.saveDrmcMbrDeatil(saveMap);
		        
		        //회원상세이력정보 추가
				custMbrDao.insertMbrHumHst(saveMap);
				
				//PI호출
				pi1204Dao.publishUpdateOne(saveMap);
				pi1201Dao.publishUpdateOne(saveMap);
			}
		}catch(MessageException e) {
			if( e.getCode() == -1 ) {
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
     * 휴먼회원관리 결재자관리 조회
     * @param commandMap NexacroResult
     * @return NexacroResult
     * @throws Exception Exception
     */
	@Override
	public NexacroResult selectDrmcMbrAprvl(Map<String, Object> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        
        //조회
        List<Map<String,Object>> list = custMbrDao.selectDrmcMbrAprvl(searchMap);
      	
      	// 리턴값 set
        result.addDataSet("ds_output1", list);
        
        return result;
	}

	/**
     * 탈퇴회원관리 목록
     * @param commandMap NexacroResult
     * @return NexacroResult
     * @throws Exception Exception
     */
	@Override
	public List<Map<String, Object>> selectLevMbrList(Map<String, Object> searchInfo, CCUtils ccUtils) throws Exception {
		searchInfo.put("SES_ID", ccUtils.getSession().get("SES_ID").toString());
		
		// input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
       
        return custMbrDao.selectLevMbrList(searchMap);
	}
	
	/**
     * 탈퇴회원관리 상세
     * @param commandMap NexacroResult
     * @return NexacroResult
     * @throws Exception Exception
     */
	@Override
	public List<Map<String, Object>> selectLevMbrDeatail(Map<String, Object> searchInfo) throws Exception {
		// input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        
        return custMbrDao.selectLevMbrDeatail(searchMap);
	}


    /** 회원생성 코드 조회
    * @param 
    * @return List
    * @throws
    */
	@Override
	public List selectMbrRegCodeList() {
		return custMbrDao.selectMbrRegCodeList();
	}
	
	/**
    * 회원생성 고객유형 조회
    * @param map
    * @return Map
    * @throws Exception Exception
    */
	@Override
	public Map selectMbrRegCustSprCd(Map<String, Object> searchMap)  throws Exception {
		return custMbrDao.selectMbrRegCustSprCd(CommonUtil.toCamelCaseMap(searchMap));
	}
	/**
	 * 부서 사용 상태 조회
	 * @param map
	 * @return map
	 * 
	 * 
	 */
	@Override
	public Map selectDeptInfo(Map<String, Object> map) throws Exception{
		return custMbrDao.selectDeptInfo(CommonUtil.toCamelCaseMap(map));
	}
	
	/**
    * 회원생성 저장
    * @param map
    * @return 
    * @throws Exception Exception
    */	
	@Override
	@Transactional
	public Map<String,Object>  insertMbrRegDtl(Map<String, Object> map, List<Map<String, Object>> aprvlList, List<Map<String, Object>> orderList, CCUtils cCUtils) throws Exception {  
		Map<String, Object> dtlMap = CommonUtil.toCamelCaseMap(map);
		String userId = CommUtil.nvl(cCUtils.getSession().get("OPRTR_ID")).equals("") ? tempAdmin : cCUtils.getSession().get("OPRTR_ID").toString();
		dtlMap.put("userId", userId);
		dtlMap.put("hstSprCd", "C"); //회원상세이력구분코드(등록:C,수정:U,삭제:D)
		dtlMap.put("joinDeviCd","B"); //가입기기(B:BO 대행가입)
		
		String pwd = (String)dtlMap.get("lognId"); //comUtil.randomPwdCreate();
		//비밀번호 해쉬변환
		String encPwd = EncrytUtil.getSpinApiEncrypt(pwd, propertiesService.getString("spinapi.loc"), EncrytUtil.POLICY_PASSWD);
		dtlMap.put("pwd",encPwd);
		
		custMbrDao.insertMbrRegLognId(dtlMap); //회원 로그인ID 저장		
		custMbrDao.insertMbrRegDtl(dtlMap); //회원상세정보	
		//custMbrDao.insertMbrRegDtlHst(dtlMap); //회원상세이력정보 추가
		custMbrDao.insertMbrRegCtlAuth(dtlMap); //제어권한	
				
		//제어권한(예산)
		String bgtCtlSprCd = "20"; //예산
		Map bgtAuthMapp = new HashMap();		
		bgtAuthMapp.put("ctlSprCd", bgtCtlSprCd);
		bgtAuthMapp.put("coCd", dtlMap.get("coCd"));
		bgtAuthMapp.put("mbrId", dtlMap.get("mbrId"));								
		custMbrDao.deleteMbrRegCtlAuthMapp(bgtAuthMapp);		
		if(dtlMap.get("bgtAuthOprUnitId") != null && !dtlMap.get("bgtAuthOprUnitId").toString().trim().equals("")) {
			String[] bgtAuthBzplcId = dtlMap.get("bgtAuthBzplcId").toString().split(",");
			String[] bgtAuthOprUnitId = dtlMap.get("bgtAuthOprUnitId").toString().split(",");			
			
			for(int i=0; i<bgtAuthBzplcId.length; i++) {				
				bgtAuthMapp = new HashMap();
				bgtAuthMapp.put("ctlSprCd", bgtCtlSprCd);
				bgtAuthMapp.put("coCd", dtlMap.get("coCd"));
				bgtAuthMapp.put("mbrId", dtlMap.get("mbrId"));
				bgtAuthMapp.put("bzplcId", bgtAuthBzplcId[i].trim());
				bgtAuthMapp.put("oprUnitId", bgtAuthOprUnitId[i].trim());
				bgtAuthMapp.put("userId", userId);
				custMbrDao.insertMbrRegCtlAuthMapp(bgtAuthMapp);
			}
		}
		//제어권한(정산)
		String adjCtlSprCd = "30"; //정산
		Map adjAuthMapp = new HashMap();
		adjAuthMapp.put("ctlSprCd", adjCtlSprCd);
		adjAuthMapp.put("coCd", dtlMap.get("coCd"));
		adjAuthMapp.put("mbrId", dtlMap.get("mbrId"));						
		custMbrDao.deleteMbrRegCtlAuthMapp(adjAuthMapp);		
		if(dtlMap.get("adjAuthOprUnitId") != null && !dtlMap.get("adjAuthOprUnitId").toString().trim().equals("")) {
			String[] adjAuthBzplcId = dtlMap.get("adjAuthBzplcId").toString().split(",");
			String[] adjAuthOprUnitId = dtlMap.get("adjAuthOprUnitId").toString().split(",");
			
			for(int i=0; i<adjAuthBzplcId.length; i++) {				
				adjAuthMapp = new HashMap();
				adjAuthMapp.put("ctlSprCd", adjCtlSprCd);
				adjAuthMapp.put("coCd", dtlMap.get("coCd"));
				adjAuthMapp.put("mbrId", dtlMap.get("mbrId"));
				adjAuthMapp.put("bzplcId", adjAuthBzplcId[i].trim());
				adjAuthMapp.put("oprUnitId", adjAuthOprUnitId[i].trim());
				adjAuthMapp.put("userId", userId);
				custMbrDao.insertMbrRegCtlAuthMapp(adjAuthMapp);
			}
		}
		//제어권한(관리)
		String mngCtlSprCd = "40"; //관리
		Map mngAuthMapp = new HashMap();
		mngAuthMapp.put("ctlSprCd", mngCtlSprCd);
		mngAuthMapp.put("coCd", dtlMap.get("coCd"));
		mngAuthMapp.put("mbrId", dtlMap.get("mbrId"));						
		custMbrDao.deleteMbrRegCtlAuthMapp(mngAuthMapp);		
		if(dtlMap.get("mngAuthOprUnitId") != null && !dtlMap.get("mngAuthOprUnitId").toString().trim().equals("")) {
			String[] mngAuthBzplcId = dtlMap.get("mngAuthBzplcId").toString().split(",");
			String[] mngAuthOprUnitId = dtlMap.get("mngAuthOprUnitId").toString().split(",");
			
			for(int i=0; i<mngAuthBzplcId.length; i++) {				
				mngAuthMapp = new HashMap();
				mngAuthMapp.put("ctlSprCd", mngCtlSprCd);
				mngAuthMapp.put("coCd", dtlMap.get("coCd"));
				mngAuthMapp.put("mbrId", dtlMap.get("mbrId"));
				mngAuthMapp.put("bzplcId", mngAuthBzplcId[i].trim());
				mngAuthMapp.put("oprUnitId", mngAuthOprUnitId[i].trim());
				mngAuthMapp.put("userId", userId);
				custMbrDao.insertMbrRegCtlAuthMapp(mngAuthMapp);
			}
		}
			
		//결재자
		String aprvlMbrAprvlSprCd = "A"; //결제자			
		Map<String, Object> aprvlMap = new HashMap();
		aprvlMap.put("coCd", dtlMap.get("coCd"));
		aprvlMap.put("mbrId", dtlMap.get("mbrId"));
		aprvlMap.put("mbrAprvlSprCd", aprvlMbrAprvlSprCd);
		custMbrDao.deleteMbrRegAprvl(aprvlMap);		
		if(aprvlList != null && aprvlList.size() > 0) {
			for(int i=0; i<aprvlList.size(); i++) {			
				aprvlMap = CommonUtil.toCamelCaseMap(aprvlList.get(i));
				aprvlMap.put("coCd", dtlMap.get("coCd"));
				aprvlMap.put("mbrId", dtlMap.get("mbrId"));
				aprvlMap.put("mbrAprvlSprCd", aprvlMbrAprvlSprCd);
				aprvlMap.put("userId", userId);
				
				if(aprvlMap.get("aprvrId")!=null && !aprvlMap.get("aprvrId").toString().equals("")) {
					custMbrDao.insertMbrRegAprvl(aprvlMap);
				}				
			}
		}
		//발주자
		String orderMbrAprvlSprCd = "O"; //발주자			
		Map<String, Object> orderMap = new HashMap();
		orderMap.put("coCd", dtlMap.get("coCd"));
		orderMap.put("mbrId", dtlMap.get("mbrId"));
		orderMap.put("mbrAprvlSprCd", orderMbrAprvlSprCd);		
		custMbrDao.deleteMbrRegAprvl(orderMap);				
		if(orderList != null && orderList.size() > 0) {			
			for(int i=0; i<orderList.size(); i++) {			
				orderMap = CommonUtil.toCamelCaseMap(orderList.get(i));
				orderMap.put("coCd", dtlMap.get("coCd"));
				orderMap.put("mbrId", dtlMap.get("mbrId"));
				orderMap.put("mbrAprvlSprCd", orderMbrAprvlSprCd);
				orderMap.put("userId", userId);
				
				if(orderMap.get("aprvrId")!=null && !orderMap.get("aprvrId").toString().equals("")) {
					custMbrDao.insertMbrRegAprvl(orderMap);
				}
								
			}	
		}		
		
		map.put("MBR_ID", dtlMap.get("mbrId")); //신규 생성된 MBR_ID를 화면 조회용으로 넘김
		
		pi1204Dao.publishRequestOne(dtlMap);
		pi1201Dao.publishRequestOne(dtlMap);
		
		return map;
	}
	
	/**
    * 회원생성 아이디 중복 체크
    * @param map
    * @return Map
    * @throws Exception Exception
    */
	@Override
	public Map selectMbrRegDupCheck(Map<String, Object> searchMap)  throws Exception {
		return custMbrDao.selectMbrRegDupCheck(CommonUtil.toCamelCaseMap(searchMap));
	}

	
	@Autowired
	private CustComDao custComDao;

	/**
    * 회원생성 상세정보 조회
    * @param map
    * @return Map
    * @throws Exception Exception
    */
	@Override
	public Map selectMbrRegDtl(Map<String, Object> searchMap)  throws Exception {
		Map<String, Object> camelMap = CommonUtil.toCamelCaseMap(searchMap);
		Map dtlMap = custMbrDao.selectMbrRegDtl(camelMap);  //회원상세정보
		Map mroMap = custComDao.selectMroMbrDtl(camelMap);  // custMbrDao.selectMroMbrDtl(camelMap); //MRO회원정보 [2022.07.18] 박성근 Core로 구현이동 예정
		
		if(mroMap!=null && mroMap.get("MRO_MBR_ID")!=null) { //MRO회원정보가 있을 경우, 회원상세정보에 추가
			dtlMap.put("MRO_MBR_ID", mroMap.get("MRO_MBR_ID"));
			dtlMap.put("MRO_MBR_NM", mroMap.get("MRO_MBR_NM"));
		}
		
		
		List<Map<String, Object>> list = custMbrDao.selectMbrRegCtlAuthMapp(camelMap);
		
		if(list!=null && list.size()>0) { //제어권한 (예산,정산,관리) 병합
			String bgtBzplcId = "";
			String bgtOprUnitId = "";
			String bgtOprUnitNm = "";
			String adjBzplcId = "";
			String adjOprUnitId = "";
			String adjOprUnitNm = "";
			String mngBzplcId = "";
			String mngOprUnitId = "";
			String mngOprUnitNm = "";
			
			for(int i=0; i<list.size(); i++) {
				Map item = list.get(i);
				if(item.get("CTL_SPR_CD").toString().equals("20")) { //예산				
					bgtBzplcId += item.get("BZPLC_ID") + ",";
					bgtOprUnitId += item.get("OPR_UNIT_ID") + ",";
					bgtOprUnitNm += item.get("OPR_UNIT_NM") + "(" + item.get("OPR_UNIT_ID") + ")" + ",";				
				}
				else if(item.get("CTL_SPR_CD").toString().equals("30")) { //정산			
					adjBzplcId += item.get("BZPLC_ID") + ",";
					adjOprUnitId += item.get("OPR_UNIT_ID") + ",";
					adjOprUnitNm += item.get("OPR_UNIT_NM") + "(" + item.get("OPR_UNIT_ID") + ")" + ",";				
				}
				else if(item.get("CTL_SPR_CD").toString().equals("40")) { //관리				
					mngBzplcId += item.get("BZPLC_ID") + ",";
					mngOprUnitId += item.get("OPR_UNIT_ID") + ",";
					mngOprUnitNm += item.get("OPR_UNIT_NM") + "(" + item.get("OPR_UNIT_ID") + ")" + ",";				
				}								
			}
			
			dtlMap.put("BGT_AUTH_BZPLC_ID", bgtBzplcId.length()>0 ? bgtBzplcId.substring(0, bgtBzplcId.length()-1) : "");
			dtlMap.put("BGT_AUTH_OPR_UNIT_ID", bgtOprUnitId.length()>0 ? bgtOprUnitId.substring(0, bgtOprUnitId.length()-1) : "");
			dtlMap.put("BGT_AUTH_OPR_UNIT_NM", bgtOprUnitNm.length()>0 ? bgtOprUnitNm.substring(0, bgtOprUnitNm.length()-1) : "");
			dtlMap.put("ADJ_AUTH_BZPLC_ID", adjBzplcId.length()>0 ? adjBzplcId.substring(0, adjBzplcId.length()-1) : "");
			dtlMap.put("ADJ_AUTH_OPR_UNIT_ID", adjOprUnitId.length()>0 ? adjOprUnitId.substring(0, adjOprUnitId.length()-1) : "");
			dtlMap.put("ADJ_AUTH_OPR_UNIT_NM", adjOprUnitNm.length()>0 ? adjOprUnitNm.substring(0, adjOprUnitNm.length()-1) : "");
			dtlMap.put("MNG_AUTH_BZPLC_ID", mngBzplcId.length()>0 ? mngBzplcId.substring(0, mngBzplcId.length()-1) : "");
			dtlMap.put("MNG_AUTH_OPR_UNIT_ID", mngOprUnitId.length()>0 ? mngOprUnitId.substring(0, mngOprUnitId.length()-1) : "");
			dtlMap.put("MNG_AUTH_OPR_UNIT_NM", mngOprUnitNm.length()>0 ? mngOprUnitNm.substring(0, mngOprUnitNm.length()-1) : "");
			
		}	
		
		return dtlMap;
	}
	

	/**
    * 회원생성 상세정보 수정
    * @param map
    * @return 
    * @throws Exception Exception
    */	
	@Override
	@Transactional
	public Map<String, Object> updateMbrRegDtl(Map<String, Object> map, List<Map<String, Object>> aprvlList, List<Map<String, Object>> orderList, CCUtils cCUtils, List<Map<String, Object>> otherInfo) throws Exception {
		Map<String, Object> resMap = new HashMap();
		Map<String, Object> dtlMap = CommonUtil.toCamelCaseMap(map);
		Map<String, Object> mbrInfo = new HashMap<>();
        if(dtlMap.get("mbrUseCd").toString().equals("L")) { //회원상태가 휴면시
        	String dbMbrUseCd = custMbrDao.selectMbrOne(dtlMap);
	        if(!dtlMap.get("mbrUseCd").toString().equals(dbMbrUseCd)) { //서버와 회원상태가 다른 경우 이후 프로세스는 중단함
	            resMap.put("msg", "서버와 회원상태가 달라 회원정보를 수정하지 못했습니다. 회원상태 데이터를 확인하세요.");				
	            return resMap;
	        }					
        }
        
		String userId = CommUtil.nvl(cCUtils.getSession().get("OPRTR_ID")).equals("") ? tempAdmin : cCUtils.getSession().get("OPRTR_ID").toString();
		dtlMap.put("userId", userId);
		dtlMap.put("hstSprCd", "U"); //회원상세이력구분코드(등록:C,수정:U,삭제:D)
		
		mbrInfo = custMbrDao.selectMbrinfo(dtlMap);
		dtlMap.put("osfCertYn","");
		String hpNo = (String) mbrInfo.get("HP_NO");
		if(!((String)dtlMap.get("hpNo")).equals(hpNo)) {
			dtlMap.put("osfCertYn","N");
			dtlMap.put("corpHpYn","N");
			dtlMap.put("frnrNmHpYn","N");
		}
		if(!dtlMap.get("lognId").toString().equals(dtlMap.get("lognIdOrg"))) { //원래 ID와 입력된 ID가 다를 경우 로그인ID 수정
			custMbrDao.updateMbrRegLognId(dtlMap); //회원 로그인 ID 수정
		}
		custMbrDao.updateMbrRegDtl(dtlMap); //회원 상세정보 수정
		//custMbrDao.insertMbrRegDtlHst(dtlMap); //회원상세이력정보 추가 controller로 이동 
		custMbrDao.insertMbrRegCtlAuth(dtlMap); //제어권한		
		
		/* 20220629 수정시 배송지 미등록 요청
		if(custMbrDao.selectExistMbrDlvplcBasis(dtlMap).equals("N")) { //기존 배송지에 등록된 건이 없을 때 배송지 테이블 등록 
			if(!CommUtil.nvl(dtlMap.get("dlvZpcd")).equals("")) { //배송지 우편번호가 공백이 아닐때
				custMbrDao.insertMbrRegDlvplc(dtlMap); //배송지 등록
			}
		}
		*/
		
		//MRO회원 id 수정
		custMbrDao.deleteMroMbr(dtlMap); //기존 MRO 회원 id 삭제
		if(dtlMap!=null && !CommUtil.nvl(dtlMap.get("mroMbrId")).equals("")) {
			String[] mroMbrId = dtlMap.get("mroMbrId").toString().split(",");
								
			for(int i=0; i<mroMbrId.length; i++) {	
				Map mroMbrIdMap = new HashMap();
				mroMbrIdMap.put("coCd", dtlMap.get("coCd"));
				mroMbrIdMap.put("mbrId", dtlMap.get("mbrId"));
				mroMbrIdMap.put("mroMbrId", mroMbrId[i]);
				mroMbrIdMap.put("userId", userId);				
				custMbrDao.insertMroMbr(mroMbrIdMap); //MRO 회원 id 등록
			}
		}
		
		//제어권한(예산)
		String bgtCtlSprCd = "20"; //예산
		Map bgtAuthMapp = new HashMap();		
		bgtAuthMapp.put("ctlSprCd", bgtCtlSprCd);
		bgtAuthMapp.put("coCd", dtlMap.get("coCd"));
		bgtAuthMapp.put("mbrId", dtlMap.get("mbrId"));								
		custMbrDao.deleteMbrRegCtlAuthMapp(bgtAuthMapp);		
		if(dtlMap.get("bgtAuthOprUnitId") != null && !dtlMap.get("bgtAuthOprUnitId").toString().trim().equals("")) {
			String[] bgtAuthBzplcId = dtlMap.get("bgtAuthBzplcId").toString().split(",");
			String[] bgtAuthOprUnitId = dtlMap.get("bgtAuthOprUnitId").toString().split(",");			
			
			for(int i=0; i<bgtAuthBzplcId.length; i++) {				
				bgtAuthMapp = new HashMap();
				bgtAuthMapp.put("ctlSprCd", bgtCtlSprCd);
				bgtAuthMapp.put("coCd", dtlMap.get("coCd"));
				bgtAuthMapp.put("mbrId", dtlMap.get("mbrId"));
				bgtAuthMapp.put("bzplcId", bgtAuthBzplcId[i].trim());
				bgtAuthMapp.put("oprUnitId", bgtAuthOprUnitId[i].trim());
				bgtAuthMapp.put("userId", userId);
				custMbrDao.insertMbrRegCtlAuthMapp(bgtAuthMapp);
			}
		}
		//제어권한(정산)
		String adjCtlSprCd = "30"; //정산
		Map adjAuthMapp = new HashMap();
		adjAuthMapp.put("ctlSprCd", adjCtlSprCd);
		adjAuthMapp.put("coCd", dtlMap.get("coCd"));
		adjAuthMapp.put("mbrId", dtlMap.get("mbrId"));						
		custMbrDao.deleteMbrRegCtlAuthMapp(adjAuthMapp);		
		if(dtlMap.get("adjAuthOprUnitId") != null && !dtlMap.get("adjAuthOprUnitId").toString().trim().equals("")) {
			String[] adjAuthBzplcId = dtlMap.get("adjAuthBzplcId").toString().split(",");
			String[] adjAuthOprUnitId = dtlMap.get("adjAuthOprUnitId").toString().split(",");
			
			for(int i=0; i<adjAuthBzplcId.length; i++) {				
				adjAuthMapp = new HashMap();
				adjAuthMapp.put("ctlSprCd", adjCtlSprCd);
				adjAuthMapp.put("coCd", dtlMap.get("coCd"));
				adjAuthMapp.put("mbrId", dtlMap.get("mbrId"));
				adjAuthMapp.put("bzplcId", adjAuthBzplcId[i].trim());
				adjAuthMapp.put("oprUnitId", adjAuthOprUnitId[i].trim());
				adjAuthMapp.put("userId", userId);
				custMbrDao.insertMbrRegCtlAuthMapp(adjAuthMapp);
			}
		}
		//제어권한(관리)
		String mngCtlSprCd = "40"; //관리
		Map mngAuthMapp = new HashMap();
		mngAuthMapp.put("ctlSprCd", mngCtlSprCd);
		mngAuthMapp.put("coCd", dtlMap.get("coCd"));
		mngAuthMapp.put("mbrId", dtlMap.get("mbrId"));						
		custMbrDao.deleteMbrRegCtlAuthMapp(mngAuthMapp);		
		if(dtlMap.get("mngAuthOprUnitId") != null && !dtlMap.get("mngAuthOprUnitId").toString().trim().equals("")) {
			String[] mngAuthBzplcId = dtlMap.get("mngAuthBzplcId").toString().split(",");
			String[] mngAuthOprUnitId = dtlMap.get("mngAuthOprUnitId").toString().split(",");
			
			for(int i=0; i<mngAuthBzplcId.length; i++) {				
				mngAuthMapp = new HashMap();
				mngAuthMapp.put("ctlSprCd", mngCtlSprCd);
				mngAuthMapp.put("coCd", dtlMap.get("coCd"));
				mngAuthMapp.put("mbrId", dtlMap.get("mbrId"));
				mngAuthMapp.put("bzplcId", mngAuthBzplcId[i].trim());
				mngAuthMapp.put("oprUnitId", mngAuthOprUnitId[i].trim());
				mngAuthMapp.put("userId", userId);
				custMbrDao.insertMbrRegCtlAuthMapp(mngAuthMapp);
			}
		}
			
		//결재자
		String aprvlMbrAprvlSprCd = "A"; //결제자			
		Map<String, Object> aprvlMap = new HashMap();
		aprvlMap.put("coCd", dtlMap.get("coCd"));
		aprvlMap.put("mbrId", dtlMap.get("mbrId"));
		aprvlMap.put("mbrAprvlSprCd", aprvlMbrAprvlSprCd);
		custMbrDao.deleteMbrRegAprvl(aprvlMap);		
		if(aprvlList != null && aprvlList.size() > 0) {
			for(int i=0; i<aprvlList.size(); i++) {			
				aprvlMap = CommonUtil.toCamelCaseMap(aprvlList.get(i));
				aprvlMap.put("coCd", dtlMap.get("coCd"));
				aprvlMap.put("mbrId", dtlMap.get("mbrId"));
				aprvlMap.put("mbrAprvlSprCd", aprvlMbrAprvlSprCd);
				aprvlMap.put("userId", userId);
				
				if(aprvlMap.get("aprvrId")!=null && !aprvlMap.get("aprvrId").toString().equals("")) {
					custMbrDao.insertMbrRegAprvl(aprvlMap);
				}				
			}
		}
		//발주자
		String orderMbrAprvlSprCd = "O"; //발주자			
		Map<String, Object> orderMap = new HashMap();
		orderMap.put("coCd", dtlMap.get("coCd"));
		orderMap.put("mbrId", dtlMap.get("mbrId"));
		orderMap.put("mbrAprvlSprCd", orderMbrAprvlSprCd);		
		custMbrDao.deleteMbrRegAprvl(orderMap);				
		if(orderList != null && orderList.size() > 0) {			
			for(int i=0; i<orderList.size(); i++) {			
				orderMap = CommonUtil.toCamelCaseMap(orderList.get(i));
				orderMap.put("coCd", dtlMap.get("coCd"));
				orderMap.put("mbrId", dtlMap.get("mbrId"));
				orderMap.put("mbrAprvlSprCd", orderMbrAprvlSprCd);
				orderMap.put("userId", userId);
				
				if(orderMap.get("aprvrId")!=null && !orderMap.get("aprvrId").toString().equals("")) {
					custMbrDao.insertMbrRegAprvl(orderMap);
				}
								
			}	
		}
		
		pi1204Dao.publishUpdateOne(dtlMap);
		pi1201Dao.publishUpdateOne(dtlMap);
		
		resMap.put("msg", "수정되었습니다.");
		return resMap;		
	}
	

	/**
     * 회원생성 결제자, 발주자 조회
     * @param commandMap NexacroResult
     * @return NexacroResult
     * @throws Exception Exception
     */
	@Override
	public List<Map<String,Object>> selectMbrRegAprvl(Map<String, Object> searchMap) throws Exception {		
        return custMbrDao.selectMbrRegAprvl(CommonUtil.toCamelCaseMap(searchMap));
	}
	
	/**
    * 회원탈퇴
    * @param map
    * @return 
    * @throws Exception Exception
    */	
	@Override
	@Transactional
	public Map<String, Object> updateStopMbrStatus(List<Map<String, Object>> list, CCUtils cCUtils) throws Exception {  
		String userId = CommUtil.nvl(cCUtils.getSession().get("OPRTR_ID")).equals("") ? tempAdmin : cCUtils.getSession().get("OPRTR_ID").toString();
		Map<String, Object> resMap = new HashMap();		
		String msgStr = "";
		
		for(int i=0; i<list.size(); i++) {
			Map<String, Object> camelMap = CommonUtil.toCamelCaseMap(list.get(i));
			camelMap.put("updpsnId", userId);
			//custMbrDao.updateStopMbrStatus(CommonUtil.toCamelCaseMap(camelMap);
			Map<String, Object> resItem = validateService.withdrawalProcess(camelMap);	
			
			msgStr = msgStr + camelMap.get("mbrNm") + " 님은 " + resItem.get("mesg").toString() + "\r\n";			
		}
		
		resMap.put("msg", msgStr);
		
		return resMap;
	}
	
	/**
    * 회원정보 복사
    * @param map
    * @return 
    * @throws Exception Exception
    */	
	@Override
	@Transactional
	public Map<String,Object> copyMbrInfo(Map<String, Object> map, List<Map<String, Object>> aprvlList, List<Map<String, Object>> orderList, CCUtils cCUtils) throws Exception {  		
		Map<String, Object> dtlMap = CommonUtil.toCamelCaseMap(map);
		String userId = CommUtil.nvl(cCUtils.getSession().get("OPRTR_ID")).equals("") ? tempAdmin : cCUtils.getSession().get("OPRTR_ID").toString();
		dtlMap.put("userId", userId);
		dtlMap.put("hstSprCd", "C"); //회원상세이력구분코드(등록:C,수정:U,삭제:D)
		dtlMap.put("joinDeviCd","B"); //가입기기(B:BO 대행가입)
		
		String pwd = (String)dtlMap.get("lognId"); //comUtil.randomPwdCreate();
		//비밀번호 해쉬변환
		String encPwd = EncrytUtil.getSpinApiEncrypt(pwd, propertiesService.getString("spinapi.loc"), EncrytUtil.POLICY_PASSWD);
		dtlMap.put("pwd",encPwd);
		
		custMbrDao.insertMbrRegLognId(dtlMap); //회원 로그인ID 저장		
		custMbrDao.insertMbrRegDtlFull(dtlMap); //회원상세정보	
		//custMbrDao.insertMbrRegDtlHst(dtlMap); //회원상세이력정보 추가
		custMbrDao.insertMbrRegCtlAuth(dtlMap); //제어권한				
		//custMbrDao.insertMbrRegDlvplc(dtlMap); //20220609 회원복사시 배송지 미저장 요청 

		//MRO회원 id 수정
		custMbrDao.deleteMroMbr(dtlMap); //기존 MRO 회원 id 삭제
		if(dtlMap!=null && !CommUtil.nvl(dtlMap.get("mroMbrId")).equals("")) {
			String[] mroMbrId = dtlMap.get("mroMbrId").toString().split(",");
								
			for(int i=0; i<mroMbrId.length; i++) {	
				Map mroMbrIdMap = new HashMap();
				mroMbrIdMap.put("coCd", dtlMap.get("coCd"));
				mroMbrIdMap.put("mbrId", dtlMap.get("mbrId"));
				mroMbrIdMap.put("mroMbrId", mroMbrId[i]);
				mroMbrIdMap.put("userId", userId);				
				custMbrDao.insertMroMbr(mroMbrIdMap); //MRO 회원 id 등록
			}
		}

		//제어권한(예산)
		String bgtCtlSprCd = "20"; //예산
		Map bgtAuthMapp = new HashMap();		
		bgtAuthMapp.put("ctlSprCd", bgtCtlSprCd);
		bgtAuthMapp.put("coCd", dtlMap.get("coCd"));
		bgtAuthMapp.put("mbrId", dtlMap.get("mbrId"));								
		custMbrDao.deleteMbrRegCtlAuthMapp(bgtAuthMapp);		
		if(dtlMap.get("bgtAuthOprUnitId") != null && !dtlMap.get("bgtAuthOprUnitId").toString().trim().equals("")) {
			String[] bgtAuthBzplcId = dtlMap.get("bgtAuthBzplcId").toString().split(",");
			String[] bgtAuthOprUnitId = dtlMap.get("bgtAuthOprUnitId").toString().split(",");			
			
			for(int i=0; i<bgtAuthBzplcId.length; i++) {				
				bgtAuthMapp = new HashMap();
				bgtAuthMapp.put("ctlSprCd", bgtCtlSprCd);
				bgtAuthMapp.put("coCd", dtlMap.get("coCd"));
				bgtAuthMapp.put("mbrId", dtlMap.get("mbrId"));
				bgtAuthMapp.put("bzplcId", bgtAuthBzplcId[i].trim());
				bgtAuthMapp.put("oprUnitId", bgtAuthOprUnitId[i].trim());
				bgtAuthMapp.put("userId", userId);
				custMbrDao.insertMbrRegCtlAuthMapp(bgtAuthMapp);
			}
		}
		//제어권한(정산)
		String adjCtlSprCd = "30"; //정산
		Map adjAuthMapp = new HashMap();
		adjAuthMapp.put("ctlSprCd", adjCtlSprCd);
		adjAuthMapp.put("coCd", dtlMap.get("coCd"));
		adjAuthMapp.put("mbrId", dtlMap.get("mbrId"));						
		custMbrDao.deleteMbrRegCtlAuthMapp(adjAuthMapp);		
		if(dtlMap.get("adjAuthOprUnitId") != null && !dtlMap.get("adjAuthOprUnitId").toString().trim().equals("")) {
			String[] adjAuthBzplcId = dtlMap.get("adjAuthBzplcId").toString().split(",");
			String[] adjAuthOprUnitId = dtlMap.get("adjAuthOprUnitId").toString().split(",");
			
			for(int i=0; i<adjAuthBzplcId.length; i++) {				
				adjAuthMapp = new HashMap();
				adjAuthMapp.put("ctlSprCd", adjCtlSprCd);
				adjAuthMapp.put("coCd", dtlMap.get("coCd"));
				adjAuthMapp.put("mbrId", dtlMap.get("mbrId"));
				adjAuthMapp.put("bzplcId", adjAuthBzplcId[i].trim());
				adjAuthMapp.put("oprUnitId", adjAuthOprUnitId[i].trim());
				adjAuthMapp.put("userId", userId);
				custMbrDao.insertMbrRegCtlAuthMapp(adjAuthMapp);
			}
		}
		//제어권한(관리)
		String mngCtlSprCd = "40"; //관리
		Map mngAuthMapp = new HashMap();
		mngAuthMapp.put("ctlSprCd", mngCtlSprCd);
		mngAuthMapp.put("coCd", dtlMap.get("coCd"));
		mngAuthMapp.put("mbrId", dtlMap.get("mbrId"));						
		custMbrDao.deleteMbrRegCtlAuthMapp(mngAuthMapp);		
		if(dtlMap.get("mngAuthOprUnitId") != null && !dtlMap.get("mngAuthOprUnitId").toString().trim().equals("")) {
			String[] mngAuthBzplcId = dtlMap.get("mngAuthBzplcId").toString().split(",");
			String[] mngAuthOprUnitId = dtlMap.get("mngAuthOprUnitId").toString().split(",");
			
			for(int i=0; i<mngAuthBzplcId.length; i++) {				
				mngAuthMapp = new HashMap();
				mngAuthMapp.put("ctlSprCd", mngCtlSprCd);
				mngAuthMapp.put("coCd", dtlMap.get("coCd"));
				mngAuthMapp.put("mbrId", dtlMap.get("mbrId"));
				mngAuthMapp.put("bzplcId", mngAuthBzplcId[i].trim());
				mngAuthMapp.put("oprUnitId", mngAuthOprUnitId[i].trim());
				mngAuthMapp.put("userId", userId);
				custMbrDao.insertMbrRegCtlAuthMapp(mngAuthMapp);
			}
		}
			
		//결재자
		String aprvlMbrAprvlSprCd = "A"; //결제자			
		Map<String, Object> aprvlMap = new HashMap();
		aprvlMap.put("coCd", dtlMap.get("coCd"));
		aprvlMap.put("mbrId", dtlMap.get("mbrId"));
		aprvlMap.put("mbrAprvlSprCd", aprvlMbrAprvlSprCd);
		custMbrDao.deleteMbrRegAprvl(aprvlMap);		
		if(aprvlList != null && aprvlList.size() > 0) {
			for(int i=0; i<aprvlList.size(); i++) {			
				aprvlMap = CommonUtil.toCamelCaseMap(aprvlList.get(i));
				aprvlMap.put("coCd", dtlMap.get("coCd"));
				aprvlMap.put("mbrId", dtlMap.get("mbrId"));
				aprvlMap.put("mbrAprvlSprCd", aprvlMbrAprvlSprCd);
				aprvlMap.put("userId", userId);
				
				if(aprvlMap.get("aprvrId")!=null && !aprvlMap.get("aprvrId").toString().equals("")) {
					custMbrDao.insertMbrRegAprvl(aprvlMap);
				}				
			}
		}
		//발주자
		String orderMbrAprvlSprCd = "O"; //발주자			
		Map<String, Object> orderMap = new HashMap();
		orderMap.put("coCd", dtlMap.get("coCd"));
		orderMap.put("mbrId", dtlMap.get("mbrId"));
		orderMap.put("mbrAprvlSprCd", orderMbrAprvlSprCd);		
		custMbrDao.deleteMbrRegAprvl(orderMap);				
		if(orderList != null && orderList.size() > 0) {			
			for(int i=0; i<orderList.size(); i++) {			
				orderMap = CommonUtil.toCamelCaseMap(orderList.get(i));
				orderMap.put("coCd", dtlMap.get("coCd"));
				orderMap.put("mbrId", dtlMap.get("mbrId"));
				orderMap.put("mbrAprvlSprCd", orderMbrAprvlSprCd);
				orderMap.put("userId", userId);
				
				if(orderMap.get("aprvrId")!=null && !orderMap.get("aprvrId").toString().equals("")) {
					custMbrDao.insertMbrRegAprvl(orderMap);
				}
								
			}	
		}
		
			
		map.put("MBR_ID", dtlMap.get("mbrId")); //신규 생성된 MBR_ID를 화면 조회용으로 넘김
		
		pi1204Dao.publishRequestOne(dtlMap);
		pi1201Dao.publishRequestOne(dtlMap);
		
		return map;
	}
	
	/**
     * MRO 회원목록 조회
     * @param commandMap NexacroResult
     * @return NexacroResult
     * @throws Exception Exception
     */
	@Override
	public List<Map<String,Object>> selectMroMbrList(Map<String, Object> searchMap) throws Exception {		
		Map<String, Object> searchMap2 = CommonUtil.toCamelCaseMap(searchMap);		
	    Object mroMbrId = searchMap2.get("mroMbrId");
	        
        if(mroMbrId!=null && !mroMbrId.toString().equals("")) {        	
        	searchMap2.put("arrMroMbrId", mroMbrId.toString().split(","));
        }
              		
        return custMbrDao.selectMroMbrList(searchMap2);
	}

	// 대용량엑셀
	@Override
	public void selectAllExcelDownload(Map<String, Object> searchInfo, CCUtils ccUtils) throws Exception {
	
   		// 로그인 세션확인
        if(ccUtils.getSession().get("OPRTR_CO_CD") == null) {
        	TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
        	throw new MessageException(-1, "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다.");
        }

		searchInfo.put("SES_ID", ccUtils.getSession().get("SES_ID").toString());
	    	        
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
                
        searchMap.put("coCd", ccUtils.getSession().get("OPRTR_CO_CD").toString());
		searchMap.put("oprtrId",  ccUtils.getSession().get("OPRTR_ID").toString());
		searchMap.put("orgCd",  ccUtils.getSession().get("ORG_CD").toString());
		searchMap.put("pstnNm",  ccUtils.getSession().get("PSTN_NM").toString());
        searchMap.put("pgmId", "SSP_BO_MA_12");
        searchMap.put("excelMetaSeq", 1);
        searchMap.put("saveFileNm", "회원목록.xlsx");
        searchMap.put("regpsnId", ccUtils.getSession().get("OPRTR_ID").toString());
        searchMap.put("updpsnId", ccUtils.getSession().get("OPRTR_ID").toString());     

        CoHttp.sendPost(propertiesService.getString("host.excel") + "/co/excel/create-large-excel.do", searchMap);
		
	}
	/**
	    * 회원 pw 초기화
	    * @param map
	    * @return 
	    * @throws Exception Exception
	    */	
	@Override
	@Transactional
	public String updatePwd(Map<String, Object> map, CCUtils cCUtils) throws Exception {  
		
		Map<String, Object> dtlMap = CommonUtil.toCamelCaseMap(map);
		String userId = CommUtil.nvl(cCUtils.getSession().get("OPRTR_ID")).equals("") ? tempAdmin : cCUtils.getSession().get("OPRTR_ID").toString();
		dtlMap.put("userId", userId);
		dtlMap.put("updpsnId", userId);
		
		String pwd = (String)dtlMap.get("changePwd");
		
		//비밀번호 해쉬변환
		String encPwd = EncrytUtil.getSpinApiEncrypt(pwd, propertiesService.getString("spinapi.loc"), EncrytUtil.POLICY_PASSWD);
		dtlMap.put("pwd",encPwd);
		
		custMbrDao.updateMbrRegLognId(dtlMap); //logn 테이블 pw 업데이트
		System.out.println("TB_CO_MBR_LOGN_INFO pw 업데이트 " );
		
		CustComService.updateMbrBasicPW(dtlMap);//회원정보 수정(pw로 변경)
		System.out.println("회원정보 수정(pw로 변경) " );
		
		custMbrDao.insertMbrChangePwdHst(dtlMap); //회원정보 수정 이력 추가
		System.out.println("회원정보 수정 이력 남기기 " );
		
		
			
		return userId;
	}
	
	/**
     * 회원/부서 기타정보 조회
     * @param commandMap NexacroResult
     * @return NexacroResult
     * @throws Exception Exception
     */
	@Override
	public List<Map<String,Object>> selectMbrOtherInfo(Map<String, Object> searchMap) throws Exception {		
        return custMbrDao.selectMbrOtherInfo(CommonUtil.toCamelCaseMap(searchMap));
	}
}