package com.ssp.bo.cc.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.MyBatisSystemException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.dao.CustBizplcDao;
import com.ssp.bo.cc.service.CustBizplcService;
import com.ssp.core.cc.CcPiUtils;
import com.ssp.core.cc.dao.Pi1202Dao;
import com.ssp.core.cc.dao.Pi1203Dao;
import com.ssp.core.co.service.CoCommonService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title 예산
 * @desc
 * @package com.ssp.bo.cc.service.impl
 * @ClassName CustBizplcServiceImpl
 * </pre>
 * @author  차상영
 * @since   2022. 02. 11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */
@Service("custBizplcService")
public class CustBizplcServiceImpl implements CustBizplcService {

    @Resource(name="custBizplcDao")
    private CustBizplcDao custBizplcDao;

	@Autowired
	private Pi1202Dao pi1202Dao;

	@Autowired
    private Pi1203Dao pi1203Dao;

	private final Logger logger = LoggerFactory.getLogger(this.getClass());



    /**
     * 콤보박스 데이터 조회
     * @param searchMap
     * @return List
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectCodeList(Map<String,Object> searchMap) {

        //조회
        return custBizplcDao.selectCodeList(searchMap);

	}

    /**
     * 사업장상세정보 조회
     * @param searchMap
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public Map<String,Object> selectBizplcDtl(Map<String,Object> searchMap) throws Exception {

		//조회
        return custBizplcDao.selectBizplcDtl(searchMap);

	}

    /**
     * 수금조건 조회
     * @param searchMap
     * @return List
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectBilcltCondList(Map<String,Object> searchMap) {

        //조회
        return custBizplcDao.selectBilcltCondList(searchMap);

	}

    
    /**
     * 결제수단 조회
     * @param searchMap
     * @return List
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectStlMeanList(Map<String,Object> searchMap) {

        //조회
        return custBizplcDao.selectStlMeanList(searchMap);

	}

	/* [2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */
	@Autowired
	private CoCommonService coCommonService;

	/* [2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */
    /**
     * 사업장 정보 변경사항 저장
     * @param map
     * @return 
     * @throws Exception Exception
     */
	@SuppressWarnings("unchecked")
	@Transactional
	public void saveBizplcDtl(Map<String,Object> map, CCUtils cCUtils) throws Exception {
		Map<String, Object> map2 = CommonUtil.toCamelCaseMap(map);  // input dataset id 카멜화
		Map<String, Object> userInfo = new HashMap<>();
		String userId = CommUtil.nvl(cCUtils.getSession().get("OPRTR_ID")).equals("") ? SessionsAdmin.ANONYMOUS_LOGIN_ID : cCUtils.getSession().get("OPRTR_ID").toString();
		map2.put("userId", userId);

		/* [2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */
		boolean isReqtMdsp=false;
		List<Map<String, Object>>
				ds_mediDeviSellPermitAtflsDele = (List<Map<String, Object>>) map.get("ds_mediDeviSellPermitAtflsDele"),
			ds_mediDeviSellPermitAtfls     = (List<Map<String, Object>>) map.get("ds_mediDeviSellPermitAtfls"    )
		;

		String sMdspYn=(String) map.get("MEDI_DEVI_SELL_PERMIT_YN"), sMdspDocRegId=null;
		if (ds_mediDeviSellPermitAtfls != null && ds_mediDeviSellPermitAtfls.size() > 0) {
			sMdspDocRegId=(String) ds_mediDeviSellPermitAtfls.get(0).get("SELL_PERMIT_ATTC_FILEID" );
		}
		if ((sMdspYn == null || !"Y".equals(sMdspYn)) && ds_mediDeviSellPermitAtfls != null && ds_mediDeviSellPermitAtfls.size() > 0) {
			sMdspDocRegId=(String) ds_mediDeviSellPermitAtfls.get(0).get("SELL_PERMIT_ATTC_FILEID" );
			if (sMdspDocRegId != null && !"".equals(sMdspDocRegId.trim())) {
				for (Map<String, Object> mItem : ds_mediDeviSellPermitAtfls) {
					mItem.put("DataSetRowType", "3");
					mItem.put("docRegId"      , mItem.get("SELL_PERMIT_ATTC_FILEID" ));
					mItem.put("docRegSeq"     , mItem.get("SELL_PERMIT_ATTC_FILESEQ"));
				}
				coCommonService.fileDelete(ds_mediDeviSellPermitAtfls);
				isReqtMdsp=true;
			}
		}
		if (ds_mediDeviSellPermitAtflsDele != null && ds_mediDeviSellPermitAtflsDele.size() > 0) {
			for (Map<String, Object> mItem : ds_mediDeviSellPermitAtflsDele) {
				mItem.put("DataSetRowType", "3");
				mItem.put("docRegId"      , mItem.get("SELL_PERMIT_ATTC_FILEID" ));
				mItem.put("docRegSeq"     , mItem.get("SELL_PERMIT_ATTC_FILESEQ"));
			}
			coCommonService.fileDelete(ds_mediDeviSellPermitAtflsDele);
			isReqtMdsp=true;
		}

		if (ds_mediDeviSellPermitAtfls     != null && ds_mediDeviSellPermitAtfls    .size() > 0) {
			if (sMdspDocRegId==null) {
				List<Map<String, Object>> lsAtfls=custBizplcDao.selectBzplcMediDeviSellPermitAtfls(map2);
				if (lsAtfls!=null && lsAtfls.size()>0) {
					sMdspDocRegId=(String) ds_mediDeviSellPermitAtfls.get(0).get("SELL_PERMIT_ATTC_FILEID");
				}
			}

			map .put("sellPermitAttcFileid", sMdspDocRegId);
			map2.put("sellPermitAttcFileid", sMdspDocRegId);
			custBizplcDao.saveMediDeviSellPermitAtfls(map2);

			isReqtMdsp=true;

		}
		/* /[2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */

		custBizplcDao.updateBizplcDtl(map2); //사업자 산업군, 등릅 수정
		custBizplcDao.updateBizplcCtlAuth(map2); //예산년도 시작월 수정
		custBizplcDao.insertBizplcCtlAuthHst(map2); //사업장 산업군, 등급 수정, 예산년도 시작월 이력 등록

		userInfo = CommonUtil.toCamelCaseMap(custBizplcDao.selectBzplcOne(map2));

		/* [2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */
		String sCustSprCd = (String) map2.get("custSprCd");
		if ( isReqtMdsp && "30".equals(sCustSprCd) ) {
			publishBzplc4Mdsp(map2);  // [2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리
		} else
			/* /[2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */
			if (   "30".equals(map2.get("custSprCd")) &&
					"Y" .equals(map2.get("dupInfoYn")) && //중복검사 YN
					!StringUtil.getString(userInfo.get("bzplcNm"),"").equals(map2.get("bzplcNm")) &&
					("02210096".equals(userId)||"01500127".equals(userId))      // 중복검사 실시 - 사업자명 변경 및 PI 전송 02210096, 01500127>운영자ID
			) {
				map2.put("ifSystemId", "SSP");
				map2.put("ifMsgId"   , CcPiUtils.genIfMsgId(null, 0));  // LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSSSS"))+"000000");
				map2.put("ifMsgSeq"  , "1"  );
				map2.put("ifCoCd"    , map2.get("coCd"));
				map2.put("ifProcTpCd", "U"  );
				map2.put("currUnitCd", "KRW");

				custBizplcDao.insertSelectBzplcBasisReqInfo(map2);
				custBizplcDao.insertSelectOprUnitBasisReqInfo(map2);
				if ("Y".equals(sMdspYn) && isReqtMdsp) {
					map2.put("docRegId", sMdspDocRegId);
					custBizplcDao.reqtMediDeviSellPermitAtfls(map2);
				}

				//사업장,운영단위 PI
				pi1202Dao.publishRequest(map2);

				custBizplcDao.updateDeptDtl(map2);
				//부서 PI
				pi1203Dao.publishUpdate(map2);
			}

	}

	/* [2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */
	/**
	 * CMS의료기기 사업장 정보 PI 전송
	 */
	private void publishBzplc4Mdsp(Map<String, Object> map2) throws Exception {
		map2.put("ifSystemId", "SSP");
		map2.put("ifMsgId"   , CcPiUtils.genIfMsgId(null, 0));  // LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSSSS"))+"000000");
		map2.put("ifMsgSeq"  , "1"  );
		map2.put("ifCoCd"    , map2.get("coCd"));
		map2.put("ifProcTpCd", "U"  );
		map2.put("currUnitCd", "KRW");

		String sMdspYn=(String) map2.get("mediDeviSellPermitYn"), sMdspDocRegId=(String) map2.get("sellPermitAttcFileid");

		custBizplcDao.insertSelectBzplcBasisReqInfo(map2);
		custBizplcDao.insertSelectOprUnitBasisReqInfo(map2);
		if ("Y".equals(sMdspYn)) {
			map2.put("docRegId", sMdspDocRegId);
			custBizplcDao.reqtMediDeviSellPermitAtfls(map2);
		}

		pi1202Dao.publishRequest(map2);  //사업장,운영단위 PI
	}
	/* /[2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */

	/**
     * 파일첨부 조회
     * @param searchMap
     * @return List
     * @throws Exception Exception
     */
    @Override
	public List<Map<String,Object>> selectBizFileList(Map<String,Object> searchMap) {
        //조회
        return custBizplcDao.selectBizFileList(searchMap);

	}


	/**
     * 회원생성 아이디 중복 체크
     * @param searchMap Map
     * @return int
     */
	@Override
	public Map selectBzplcDupCheck(Map<String, Object> searchMap) throws Exception {
		return custBizplcDao.selectBzplcDupCheck(CommonUtil.toCamelCaseMap(searchMap));
	}


	/* [2023-03-01] sg.park AI-015 일반고객의 여신거래 가능 프로세스 추가 */
	/**
	 * 특약고객 종결처리
	 *
	 * @param map
	 * @return
	 */
	public Map<String, Object> fnshConsnCust(Map<String, Object> map) throws Exception {
		Map<String, Object> cmap = CommonUtil.toCamelCaseMap(map);
		map.putAll(cmap);

		try {
			map.put("ifSystemId", "SSP");
			map.put("ifMsgId"   , CcPiUtils.genIfMsgId(null, 0));  // LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSSSS"))+"000000");
			map.put("ifMsgSeq"  , "1"  );
			map.put("ifCoCd"    , map.get("coCd"));
			map.put("ifProcTpCd", "U"  );
			map.put("currUnitCd", "KRW");

			// fnshConsnCustYn
			int iRsltBzplc   = custBizplcDao.insertSelectBzplcBasisReqInfo  (map);
			int iRsltOprunit = custBizplcDao.insertSelectOprUnitBasisReqInfo(map);

			if (iRsltBzplc<1 && iRsltOprunit<0) { throw new MessageException(-1, "특약고객 사업장 정보를 확인할 수 없습니다."); }

			// [SSP-3408] 사업장/운영단위 담당자 정보 리셋
			chrpsnInfoReset(map);

			pi1202Dao.publishRequest(map);

			// 처리요청 성공여부 확인 - 확인루틴이 있으면 좋겠어요... - FO > CcCustMbrServiceImpl L:1070
			// PI_1202 완료정보 확인
            /*
			int iRtyLimit = 60, iRtyIntvlSec = 1 * 1000;
			String ifPricRsltCd=null;
			Map<String, String> piResMap = null;
			
			int tryCnt = 1;
			while (true) {
				piResMap = custBizplcDao.selectPiLog(map);
				if ( piResMap != null ) {
					ifPricRsltCd=StringUtil.getString(piResMap.get("ifProcRsltCd"),"").trim();
					if( tryCnt > iRtyLimit || "S,E,X".indexOf(ifPricRsltCd) > -1 ) { break; } // 처리종료 조건을 더 명시적이게 변경
				}
				
				Thread.sleep(iRtyIntvlSec);
				logger.debug("tryCnt : {}", tryCnt);
				tryCnt++;
			}
			if (piResMap != null && "S".equals(ifPricRsltCd) ) {
				//map.put("bzplcId"  , piResMap.get("ifRsltFld1"));
				//map.put("oprUnitId", piResMap.get("ifRsltFld2"));
			} else {
				throw new RuntimeException("ERRC000179");//사업장 정보 생성 요청에 실패 하였습니다.
			}
			*/
			// /처리요청 성공여부 확인

			map.put("RSLT", iRsltBzplc>0 ? "sucess" : "fail");

		} catch (Exception e) {
			map.put("RSLT", "exception");
			if(e instanceof MyBatisSystemException && "SelectKey returned no data.".equals(e.getCause().getMessage())) {
				throw new MessageException(-1, "특약고객 운영단위(30) 정보를 확인할 수 없습니다.");
			}
			throw e;
		}

		return map;
	}
	/* /[2023-03-01] sg.park AI-015 일반고객의 여신거래 가능 프로세스 추가 */

	// 사업장/운영단위 담당자 정보 리셋
	private void chrpsnInfoReset(Map<String, Object> map) throws Exception {
		Map<String, Object> param = new HashMap<>();
		param.put("userId", map.get("userId"));
		param.put("coCd", map.get("IF_CO_CD"));
		param.put("bzplcId", map.get("REQ_BZPLC_ID"));
		param.put("oprUnitId", map.get("REQ_OPR_UNIT_ID"));

		// [SSP-3408] TB_CC_BZPLC_BASIS - SALS_CHRPSN_ID1, SVC_CHRPSN_ID1 리셋(NULL)
		custBizplcDao.bzplcChrpsnInfoReset(param);

		// [SSP-3408] TB_CC_OPR_UNIT_BASIS - SALS_CHR_CD, SALS_TEAM_CD, SVC_TEAM_CD, OPR_TEAM_CD, SALS_CHRPSN_ID, SVC_CHRPSN_ID, OPR_CHRPSN_ID 리셋(NULL)
		custBizplcDao.oprUnitChrpsnInfoReset(param);
	}

	/* [2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */
	/**
	 * CMS의료기기 판매허가 첨부파일
	 */
	public List<Map<String, Object>> selectBzplcMediDeviSellPermitAtfls(Map<String, Object> map) throws Exception {
		return custBizplcDao.selectBzplcMediDeviSellPermitAtfls(CommonUtil.toCamelCaseMap(map));
	}
	/* /[2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */

}
