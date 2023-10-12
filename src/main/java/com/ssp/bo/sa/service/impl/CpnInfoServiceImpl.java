package com.ssp.bo.sa.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.sa.dao.CpnInfoDao;
import com.ssp.bo.sa.dao.SaComDao;
import com.ssp.bo.sa.service.CpnInfoService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 *
 * <pre>
 * @title 쿠폰 Serviceimpl
 * @package com.ssp.bo.sample.service.impl
 * <pre>
 * @author
 * @since 2022.03.17.
 * @version 1.0
 * @see CpnInfoServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.17.	박진원		최초작성
 */
@Service("cpnInfoService")
public class CpnInfoServiceImpl implements CpnInfoService
{
	@Autowired
	private CpnInfoDao cpnInfoDao;

	@Autowired
	private SaComDao saComDao;

	private final Logger logger = LoggerFactory.getLogger(CpnInfoServiceImpl.class);

	private static final String CPN_APLY_TGT_ALL =  "10";	 // 쿠폰적용대상구분코드 - 전체
	private static final String CPN_APLY_TGT_INDV =  "20";	 // 쿠폰적용대상구분코드 - 개별상품
	private static final String CPN_APLY_TGT_CATG =  "30"; // 쿠폰적용대상구분코드 - 상품군
	private static final String CPN_EXCPT_TGT_NO =  "10";	 // 쿠폰적용대상구분코드 - 제외없음
	private static final String CPN_EXCPT_TGT_INDV =  "20";	 // 쿠폰적용대상구분코드 - 개별상품
	private static final String CPN_EXCPT_TGT_CATG =  "30"; // 쿠폰적용대상구분코드 - 상품군

	/**
	*
	* <pre>
	* 1. MethodName : selectCpnInfoList
	* 2. ClassName : CpnInfoServiceImpl
	* 3. Comment : 쿠폰 목록 조회
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.17
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectCpnInfoList(Map<String, Object> searchMap) throws Exception
	{
		return cpnInfoDao.selectCpnInfoList(searchMap);
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectCpnInfoListCount
	* 2. ClassName : CpnInfoServiceImpl
	* 3. Comment : 쿠폰 목록 건수 조회
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.17
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public int selectCpnInfoListCount(Map<String, Object> searchMap) throws Exception
	{
		return cpnInfoDao.selectCpnInfoListCount(searchMap);
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectCpnPubcUseDtlsList
	* 2. ClassName : CpnInfoServiceImpl
	* 3. Comment : 쿠폰 발행 내역 목록 조회
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.17
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectCpnPubcUseDtlsList(Map<String, Object> searchMap) throws Exception
	{
		return cpnInfoDao.selectCpnPubcUseDtlsList(searchMap);
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectCpnPubcUseDtlsListCount
	* 2. ClassName : CpnInfoServiceImpl
	* 3. Comment : 쿠폰 발행 내역 목록 건수 조회
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.17
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public int selectCpnPubcUseDtlsListCount(Map<String, Object> searchMap) throws Exception
	{
		return cpnInfoDao.selectCpnPubcUseDtlsListCount(searchMap);
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectCpnPubcMbrList
	* 2. ClassName : CpnInfoServiceImpl
	* 3. Comment : 쿠폰 발급 대상 목록
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.21
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectCpnPubcMbrList(Map<String, Object> searchMap) throws Exception
	{
		return cpnInfoDao.selectCpnPubcMbrList(searchMap);
	}

	/**
	*
	* <pre>
	* 1. MethodName : saveCpnInfo
	* 2. ClassName : CpnInfoServiceImpl
	* 3. Comment : 쿠폰 등록/수정/삭제
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.22
	* </pre>
	*
	* @param saveCpnInfoMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult saveCpnInfo(Map<String, Object> saveCpnInfoMap,
			List<Map<String, Object>> saveCpnPubcUseDtlsMapList,
			List<Map<String, Object>> saveCpnAplyTgtPrd20MapList,
			List<Map<String, Object>> saveCpnAplyTgtPrd30MapList,
			List<Map<String, Object>> saveCpnExcptTgtPrd20MapList,
			List<Map<String, Object>> saveCpnExcptTgtPrd30MapList) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
			int rtn = 0;
			String msg = "";

			String sCpnEvtNo = StringUtil.getString(saveCpnInfoMap.get("cpnEvtNo"));
			String sPubcEndDtNo = StringUtil.getString(saveCpnInfoMap.get("pubcEndDtNo"));
			String sUnlmtPubcYn = StringUtil.getString(saveCpnInfoMap.get("unlmtPubcYn"));
			int iPubcQty = Integer.parseInt(StringUtil.getString(saveCpnInfoMap.get("pubcQty")));
			String sRegpsnId = StringUtil.getString(saveCpnInfoMap.get("regpsnId"));
			String sUpdpsnId = StringUtil.getString(saveCpnInfoMap.get("updpsnId"));

			if ("Y".equals(sPubcEndDtNo))
			{
				saveCpnInfoMap.put("pubcEndDt", "99991231");
			}

			if ("Y".equals(sUnlmtPubcYn))
			{
				saveCpnInfoMap.put("pubcQty", "0");
			}

			if ("".equals(sCpnEvtNo))
			{

				// 쿠폰 시퀀스 값 조회
				Map<String,Object> cpnInfoSeqMap = cpnInfoDao.selectCpnInfoSeq(saveCpnInfoMap);

				String sCpnEvtNoNew = StringUtil.getString(cpnInfoSeqMap.get("CPN_EVT_NO"));

				sCpnEvtNo = sCpnEvtNoNew;

				saveCpnInfoMap.put("cpnEvtNo", sCpnEvtNo);

				// 쿠폰 기본 정보 등록
				rtn = cpnInfoDao.insertCpnInfo(saveCpnInfoMap);
				msg = "쿠폰 기본 정보 등록";
			}
			else
			{
				// 쿠폰 기본 정보 수정
				rtn = cpnInfoDao.updateCpnInfo(saveCpnInfoMap);
				msg = "쿠폰 기본 정보 수정";
			}

			// 개별 발행 대상 삭제
//            for( Map<String, Object> data : saveCpnPubcUseDtlsMapList )
//            {
//            	int saveType = StringUtil.getInt(data.get("DataSetRowType"));
//
//                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
//
//                saveMap.put("cpnEvtNo", sCpnEvtNo);
//            	saveMap.put("regpsnId", sRegpsnId);
//            	saveMap.put("updpsnId", sUpdpsnId);
//
//                if( saveType == 3 )
//                {
//                	// 삭제
//
//                	// 쿠폰 개별 발행 대상 삭제
//                    rtn = cpnInfoDao.deleteCpnPubcUseDtls(saveMap);
//                    msg = "쿠폰 개별 발행 대상 삭제";
//                }
//            }

			if (!"".equals(sCpnEvtNo))
			{
				// 쿠폰 이벤트 수정시에만 발급 가능

				int pubcDuplCnt = 0;
				int pubcCnt = cpnInfoDao.selectCpnPubcCount(saveCpnInfoMap);
				// 개별 발행 대상 유효성 체크(중복 발급 체크)
				for( Map<String, Object> data : saveCpnPubcUseDtlsMapList )
				{
					int saveType = StringUtil.getInt(data.get("DataSetRowType"));

					Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

					saveMap.put("cpnEvtNo", sCpnEvtNo);

					if( saveType == 1)
					{
						// 등록

						// 쿠폰 개별 발행 대상 중복 발급 체크
						pubcDuplCnt = cpnInfoDao.selectCpnDuplPubcCount(saveMap);
						msg = "이미 발행된 회원이 존재합니다.";

						pubcCnt = pubcCnt +1;
						if( pubcDuplCnt > 0 )
						{
							throw new MessageException(-100, msg);
						}
					}
				}

				if (!"Y".equals(sUnlmtPubcYn) && iPubcQty < pubcCnt)
				{
					msg = "발급수량이 초과하였습니다.";
					throw new MessageException(-100, msg);
				}

				// 개별 발행 대상 등록/수정.
				for( Map<String, Object> data : saveCpnPubcUseDtlsMapList )
				{
					int saveType = StringUtil.getInt(data.get("DataSetRowType"));

					Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

					saveMap.put("cpnEvtNo", sCpnEvtNo);
					saveMap.put("regpsnId", sRegpsnId);
					saveMap.put("updpsnId", sUpdpsnId);

					if( saveType == 1)
					{
						// 등록

						// 쿠폰 개별 발행 대상 등록
						rtn = cpnInfoDao.insertCpnPubcUseDtls(saveMap);
						msg = "쿠폰 개별 발행 대상 등록";
					}
					else if( saveType == 2 )
					{
						// 수정
					}
				}
			}

			// 적용 대상 상품 삭제
			for( Map<String, Object> data : saveCpnAplyTgtPrd20MapList )
			{
				int saveType = StringUtil.getInt(data.get("DataSetRowType"));

				Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

				saveMap.put("cpnEvtNo", sCpnEvtNo);
				saveMap.put("regpsnId", sRegpsnId);
				saveMap.put("updpsnId", sUpdpsnId);

				if( saveType == 3 )
				{
					// 삭제

					// 쿠폰 적용 대상 상품 삭제
					rtn = cpnInfoDao.deleteCpnPrdDtl(saveMap);
					msg = "쿠폰 적용 대상 상품 삭제";
				}
			}

			// 적용 대상 상품 등록/수정.
			for( Map<String, Object> data : saveCpnAplyTgtPrd20MapList )
			{
				int saveType = StringUtil.getInt(data.get("DataSetRowType"));

				Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

				saveMap.put("cpnEvtNo", sCpnEvtNo);
				saveMap.put("regpsnId", sRegpsnId);
				saveMap.put("updpsnId", sUpdpsnId);

				if( saveType == 1)
				{
					// 등록

					// 쿠폰 적용 대상 상품 등록
					rtn = cpnInfoDao.insertCpnPrdDtl(saveMap);
					msg = "쿠폰 적용 대상 상품 등록";
				}
				else if( saveType == 2 )
				{
					// 수정
				}
			}

			// 적용 대상 상품군 삭제
			for( Map<String, Object> data : saveCpnAplyTgtPrd30MapList )
			{
				int saveType = StringUtil.getInt(data.get("DataSetRowType"));

				Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

				saveMap.put("cpnEvtNo", sCpnEvtNo);
				saveMap.put("regpsnId", sRegpsnId);
				saveMap.put("updpsnId", sUpdpsnId);

				if( saveType == 3 )
				{
					// 삭제

					// 쿠폰 적용 대상 상품군 삭제
					rtn = cpnInfoDao.deleteCpnPrdDtl(saveMap);
					msg = "쿠폰 적용 대상 상품군 삭제";
				}
			}

			// 적용 대상 상품군 등록/수정.
			for( Map<String, Object> data : saveCpnAplyTgtPrd30MapList )
			{
				int saveType = StringUtil.getInt(data.get("DataSetRowType"));

				Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

				saveMap.put("cpnEvtNo", sCpnEvtNo);
				saveMap.put("regpsnId", sRegpsnId);
				saveMap.put("updpsnId", sUpdpsnId);

				if( saveType == 1)
				{
					// 등록

					// 쿠폰 적용 대상 상품 등록
					rtn = cpnInfoDao.insertCpnPrdDtl(saveMap);
					msg = "쿠폰 적용 대상 상품군 등록";
				}
				else if( saveType == 2 )
				{
					// 수정
				}
			}

			// 제외 대상 상품 삭제
			for( Map<String, Object> data : saveCpnExcptTgtPrd20MapList )
			{
				int saveType = StringUtil.getInt(data.get("DataSetRowType"));

				Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

				saveMap.put("cpnEvtNo", sCpnEvtNo);
				saveMap.put("regpsnId", sRegpsnId);
				saveMap.put("updpsnId", sUpdpsnId);

				if( saveType == 3 )
				{
					// 삭제

					// 쿠폰 제외 대상 상품 삭제
					rtn = cpnInfoDao.deleteCpnPrdDtl(saveMap);
					msg = "쿠폰 제외 대상 상품 삭제";
				}
			}

			// 제외 대상 상품 등록/수정.
			for( Map<String, Object> data : saveCpnExcptTgtPrd20MapList )
			{
				int saveType = StringUtil.getInt(data.get("DataSetRowType"));

				Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

				saveMap.put("cpnEvtNo", sCpnEvtNo);
				saveMap.put("regpsnId", sRegpsnId);
				saveMap.put("updpsnId", sUpdpsnId);

				if( saveType == 1)
				{
					// 등록

					// 쿠폰 제외 대상 상품 등록
					rtn = cpnInfoDao.insertCpnPrdDtl(saveMap);
					msg = "쿠폰 제외 대상 상품 등록";
				}
				else if( saveType == 2 )
				{
					// 수정
				}
			}

			// 제외 대상 상품군 삭제
			for( Map<String, Object> data : saveCpnExcptTgtPrd30MapList )
			{
				int saveType = StringUtil.getInt(data.get("DataSetRowType"));

				Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

				saveMap.put("cpnEvtNo", sCpnEvtNo);
				saveMap.put("regpsnId", sRegpsnId);
				saveMap.put("updpsnId", sUpdpsnId);

				if( saveType == 3 )
				{
					// 삭제

					// 쿠폰 제외 대상 상품군 삭제
					rtn = cpnInfoDao.deleteCpnPrdDtl(saveMap);
					msg = "쿠폰 제외 대상 상품군 삭제";
				}
			}

			// 제외 대상 상품군 등록/수정.
			for( Map<String, Object> data : saveCpnExcptTgtPrd30MapList )
			{
				int saveType = StringUtil.getInt(data.get("DataSetRowType"));

				Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

				saveMap.put("cpnEvtNo", sCpnEvtNo);
				saveMap.put("regpsnId", sRegpsnId);
				saveMap.put("updpsnId", sUpdpsnId);

				if( saveType == 1)
				{
					// 등록

					// 쿠폰 제외 대상 상품군 등록
					rtn = cpnInfoDao.insertCpnPrdDtl(saveMap);
					msg = "쿠폰 제외 대상 상품군 등록";
				}
				else if( saveType == 2 )
				{
					// 수정
				}
			}

			if( rtn < 0 )
			{
				throw new MessageException(-100, msg + " 실패");
			}
		}
		catch ( MessageException e )
		{
			logger.info("result==>" + e.getCode());
			logger.info("result==>" + e.getMessage());

			// 에러코드 반환시만 처리하자
			if( e.getCode() == -100 )
			{
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			}
			else
			{
				throw e;
			}
		}

		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectCpnInfo
	* 2. ClassName : CpnInfoServiceImpl
	* 3. Comment : 쿠폰 상세
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.22
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public Map<String,Object> selectCpnInfo(Map<String, Object> searchMap) throws Exception
	{
		return cpnInfoDao.selectCpnInfo(searchMap);
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectCpnPubcUseDtlsInfoList
	* 2. ClassName : CpnInfoServiceImpl
	* 3. Comment : 쿠폰 발급 대상 목록
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.22
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectCpnPubcUseDtlsInfoList(Map<String, Object> searchMap) throws Exception
	{
		return cpnInfoDao.selectCpnPubcUseDtlsInfoList(searchMap);
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectCpnAplyTgtPrd20List
	* 2. ClassName : CpnInfoServiceImpl
	* 3. Comment : 쿠폰 적용 대상 상품 목록
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.22
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectCpnAplyTgtPrd20List(Map<String, Object> searchMap) throws Exception
	{
		searchMap.put("cpnAplyExcptSprCd", "10");
		searchMap.put("prdClcd", "N");
		searchMap.put("prdId", "Y");

		return cpnInfoDao.selectCpnPrdDtlList(searchMap);
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectCpnAplyTgtPrd30List
	* 2. ClassName : CpnInfoServiceImpl
	* 3. Comment : 쿠폰 적용 대상 상품군 목록
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.22
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectCpnAplyTgtPrd30List(Map<String, Object> searchMap) throws Exception
	{
		searchMap.put("cpnAplyExcptSprCd", "10");
		searchMap.put("prdClcd", "Y");
		searchMap.put("prdId", "N");

		return cpnInfoDao.selectCpnPrdDtlList(searchMap);
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectCpnExcptTgtPrd20List
	* 2. ClassName : CpnInfoServiceImpl
	* 3. Comment : 쿠폰 제외 대상 상품 목록
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.22
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectCpnExcptTgtPrd20List(Map<String, Object> searchMap) throws Exception
	{
		searchMap.put("cpnAplyExcptSprCd", "20");
		searchMap.put("prdClcd", "N");
		searchMap.put("prdId", "Y");

		return cpnInfoDao.selectCpnPrdDtlList(searchMap);
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectCpnExcptTgtPrd30List
	* 2. ClassName : CpnInfoServiceImpl
	* 3. Comment : 쿠폰 제외 대상 상품군 목록
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.22
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectCpnExcptTgtPrd30List(Map<String, Object> searchMap) throws Exception
	{
		searchMap.put("cpnAplyExcptSprCd", "20");
		searchMap.put("prdClcd", "Y");
		searchMap.put("prdId", "N");

		return cpnInfoDao.selectCpnPrdDtlList(searchMap);
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectCpnInfoPopupList
	* 2. ClassName : CpnInfoServiceImpl
	* 3. Comment : 쿠폰 - 목록 - 쿠폰설정 팝업
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.23
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectCpnInfoPopupList(Map<String, Object> searchMap) throws Exception
	{
		return cpnInfoDao.selectCpnInfoPopupList(searchMap);
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectCpnInfoMbrList
	* 2. ClassName : CpnInfoServiceImpl
	* 3. Comment : 쿠폰 목록 (회원) 조회
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.23
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectCpnInfoMbrList(Map<String, Object> searchMap) throws Exception
	{
		return cpnInfoDao.selectCpnInfoMbrList(searchMap);
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectCpnInfoMbrListCount
	* 2. ClassName : CpnInfoServiceImpl
	* 3. Comment : 쿠폰 목록 (회원) 건수 조회
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.23
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public int selectCpnInfoMbrListCount(Map<String, Object> searchMap) throws Exception
	{
		return cpnInfoDao.selectCpnInfoMbrListCount(searchMap);
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectCpnInfoMbrCount
	* 2. ClassName : CpnInfoServiceImpl
	* 3. Comment : 쿠폰 목록 (회원) 사용가능/사용한/만료된 건수 조회
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.23
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public Map<String,Object> selectCpnInfoMbrCount(Map<String, Object> searchMap) throws Exception
	{
		return cpnInfoDao.selectCpnInfoMbrCount(searchMap);
	}
}
