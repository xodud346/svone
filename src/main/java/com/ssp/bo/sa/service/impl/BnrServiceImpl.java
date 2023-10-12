package com.ssp.bo.sa.service.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.sa.dao.BnrDao;
import com.ssp.bo.sa.dao.SaComDao;
import com.ssp.bo.sa.service.BnrService;
import com.ssp.bo.sa.service.SaComService;
import com.ssp.core.co.dao.CoCommonDao;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 *
 * <pre>
 * @desc    배너 Serviceimpl
 * @package com.ssp.bo.sa.service.impl
 * <pre>
 *
 * @author
 * @since 2022. 03. 14.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.14.		87minho	최초작성
 */
@Service("bnrService")
public class BnrServiceImpl implements BnrService {
	private final Logger logger = LoggerFactory.getLogger(BnrServiceImpl.class);

	@Autowired
	private BnrDao bnrDao;

	@Autowired
	private SaComDao saComDao;

	@Autowired
	private CoCommonDao coCommonDao;

	@Autowired
	protected SspPropertyService propertiesService;

	@Autowired
	private SaComService saComService;


	private static final int ONE_DPTH_CATG_BNR =  40000; // 1뎁스 카테고리 배너

	/**
	*
	* <pre>
	* 1. MethodName : selectBnrExpsList
	* 2. ClassName : BnrServiceImpl
	* 3. Comment : 배너 노출 목록 조회
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022.03.14
	* </pre>
	*
	* @param searchInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult selectBnrExpsList(Map<String, Object> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
		//searchMap.put("coCd", "1000");
		List<Map<String,Object>> list = new ArrayList<>();
		searchMap.put("oneDpthCatgBnrId", ONE_DPTH_CATG_BNR);

		list = bnrDao.selectBnrExpsList(searchMap);

		//리턴값 set
		result.addDataSet("ds_output", list);
		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectBnrList
	* 2. ClassName : BnrServiceImpl
	* 3. Comment : 배너 목록 조회
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022.03.15
	* </pre>
	*
	* @param searchInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult selectBnrList(Map<String, Object> searchInfo, List<Map<String, Object>> oprUnitList, OdOrderComm odComm) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
		searchMap.put("sesId", odComm.getSession().get("SES_ID").toString());

		// 게시구분이 운영단위일 경우에만 운영단위 세팅
		String sExpsNoticSprCd = StringUtil.getString(searchMap.get("noticSprCd"));
		if("30".equals(sExpsNoticSprCd) && "50".equals(sExpsNoticSprCd)
        		&& "60".equals(sExpsNoticSprCd) && "70".equals(sExpsNoticSprCd)) {
			searchMap.put("oprUnitList", oprUnitList);
		}
		List<Map<String,Object>> list = new ArrayList<>();

		int totalCount = bnrDao.selectBnrListCnt(searchMap);

		if( totalCount > 0 ) {
			list = bnrDao.selectBnrList(searchMap);
		}

		//리턴값 set
		result.addVariable( "totalCount", totalCount );
		result.addDataSet("ds_output", list);
		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectBnrListCnt
	* 2. ClassName : BnrServiceImpl
	* 3. Comment : 게시구분:전체 배너 개수 조회
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022.03.30
	* </pre>
	*
	* @param searchInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult selectNoticAllBnrCnt(Map<String, Object> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);

		Map<String, Object> bnrMap = new HashMap<String, Object>();
		bnrMap.put("coCd", StringUtil.getString(searchMap.get("coCd")));
		bnrMap.put("bnrExpsPstId", StringUtil.getString(searchMap.get("bnrExpsPstId")));
		bnrMap.put("chnTpCd", StringUtil.getString(searchMap.get("chnTpCd")));
		bnrMap.put("mallSprCd", StringUtil.getString(searchMap.get("mallSprCd")));
		bnrMap.put("noticSprCd", "10");

		int noticAllBnrCount = bnrDao.selectBnrListCnt(bnrMap);

		//리턴값 set
		result.addVariable( "noticAllBnrCount", noticAllBnrCount );

		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : updateBnrDispSo
	* 2. ClassName : BnrServiceImpl
	* 3. Comment : 배너 순서 저장
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022.03.16
	* </pre>
	*
	* @param saveInfoList
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult updateBnrDispSo(List<Map<String, Object>> saveInfoList) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
		int rtn = 0;
		String oprtrId = "";

		try {
			if (sessionsAdmin != null) {
				oprtrId = sessionsAdmin.get("OPRTR_ID").toString();
			}

			for(Map<String, Object> saveInfo : saveInfoList) {
				Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(saveInfo);

				saveMap.put("updpsnId", oprtrId);

				rtn += bnrDao.updateBnrDispSo(saveMap);
			}
			if (rtn < 0) {
				throw new MessageException(-100, "저장에 실패하였습니다");
			}
		} catch(MessageException e) {
			if(e.getCode() == -100) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			} else {
				throw e;
			}
		}
		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : deleteBnrExps
	* 2. ClassName : BnrServiceImpl
	* 3. Comment : 배너 노출정보 및 배너정보 삭제(삭제된 카테고리의 garbage 데이터를 삭제하는 용도)
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022.03.16
	* </pre>
	*
	* @param updateInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult deleteBnrExps(Map<String, Object> deleteInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		int rtn = 0;

		try {
			Map<String, Object> deleteMap = CommonUtil.toCamelCaseMap(deleteInfo);
			List<Map<String, Object>> selectBnrList = bnrDao.selectBnrList(deleteMap);

			rtn = bnrDao.deleteBnrExps(deleteMap);
			if(rtn > 0) {
				//배너 삭제
				bnrDao.deleteBnrExpsRelBnr(deleteMap);

				// 운영단위, 상품 삭제
				for(Map<String, Object> bnr : selectBnrList) {
					Map<String, Object> bnrMap = CommonUtil.toCamelCaseMap(bnr);
					bnrDao.deleteBnrOprUnit(bnrMap);
					bnrDao.deleteBnrPrd(bnrMap);
				}
			} else {
				throw new MessageException(-100, "삭제에 실패하였습니다");
			}
		} catch(MessageException e) {
			if( e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			} else {
				throw e;
			}
		}
		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectBnrInfo
	* 2. ClassName : BnrServiceImpl
	* 3. Comment : 배너 상세 조회
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022.03.16
	* </pre>
	*
	* @param searchInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult selectBnrInfo(Map<String, Object> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);

		Map<String,Object> bnrDtlMap = bnrDao.selectBnrInfo(searchMap);
		List<Map<String,Object>> oprUnitList = bnrDao.selectBnrOprUnitList(searchMap);

		//리턴값 set
		result.addDataSet("ds_output1", bnrDtlMap);
		result.addDataSet("ds_output2", oprUnitList);
		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : saveBnrInfo
	* 2. ClassName : BnrServiceImpl
	* 3. Comment : 배너 저장
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022.03.16
	* </pre>
	*
	* @param saveInfo, oprUnitInfoList
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult saveBnrInfo(Map<String, Object> saveInfo, List<Map<String, Object>> oprUnitInfoList) throws Exception {
		NexacroResult result = new NexacroResult();
		int rtn = 0;
		Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
		Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(saveInfo);

		String expsNoticSprCd = StringUtil.getString(saveMap.get("expsNoticSprCd"));

		String oprtrId = "";

		try {
			if (sessionsAdmin != null) {
				oprtrId = StringUtil.getString(sessionsAdmin.get("OPRTR_ID"));
			}
			saveMap.put("regpsnId", oprtrId);
			saveMap.put("updpsnId", oprtrId);

			String sPrdIds = StringUtil.getString(saveMap.get("prdIds"), "");
			String[] arrPrdId= sPrdIds.split(",");

			// 카테고리는 최초 노출정보에 등록이 안 되어 있어 노출정보에 등록 필요
			if(Integer.parseInt(saveMap.get("bnrExpsPstId").toString()) == 0) {
				saveMap.put("oneDpthCatgBnr", ONE_DPTH_CATG_BNR);
				bnrDao.insertBnrExpsInfo(saveMap);
			}

			if(StringUtil.getString(saveMap.get("bnrInfoSeq")).equals("")) {
				rtn = bnrDao.insertBnrInfo(saveMap);
			} else {
				// docRegId 가 빈 값이 아니고, atflNm이 빈 값이면 지운걸로 판단
				if (!Objects.equals(StringUtil.getString(saveMap.get("mainDocRegId")), "") && Objects.equals(StringUtil.getString(saveMap.get("mainAtflNm")), "") ) {
					this.deleteCoAtflFile(StringUtil.getString(saveMap.get("mainDocRegId")), StringUtil.getString(saveMap.get("mainDocRegSeq")), StringUtil.getString(saveMap.get("mainAtflStorPath")), StringUtil.getString(saveMap.get("mainOriAtflNm")));
					saveMap.put("mainDocRegId", null);
				}
				if (!Objects.equals(StringUtil.getString(saveMap.get("subDocRegId")), "") && Objects.equals(StringUtil.getString(saveMap.get("subAtflNm")), "") ) {
					this.deleteCoAtflFile(StringUtil.getString(saveMap.get("subDocRegId")), StringUtil.getString(saveMap.get("subDocRegSeq")), StringUtil.getString(saveMap.get("subAtflStorPath")), StringUtil.getString(saveMap.get("subOriAtflNm")));
					saveMap.put("subDocRegId", null);
				}

				rtn = bnrDao.updateBnrInfo(saveMap);
			}
			
			if(rtn > 0) {
				if("30".equals(expsNoticSprCd) || "50".equals(expsNoticSprCd)
						|| "60".equals(expsNoticSprCd) || "70".equals(expsNoticSprCd)) {
					for(Map<String, Object> oprUnitInfo : oprUnitInfoList ) {
						int dataSetRowtype = StringUtil.getInt(oprUnitInfo.get("DataSetRowType"));

						Map<String, Object> oprUnitMap = CommonUtil.toCamelCaseMap(oprUnitInfo);
						oprUnitMap.put("coCd", StringUtil.getString(saveMap.get("coCd")));
						oprUnitMap.put("bnrInfoSeq", StringUtil.getString(saveMap.get("bnrInfoSeq")));

						oprUnitMap.put("regpsnId", oprtrId);
						oprUnitMap.put("updpsnId", oprtrId);

						if(dataSetRowtype == 1) {
							bnrDao.insertBnrOprUnit(oprUnitMap);
						} else if(dataSetRowtype == 3) {
							bnrDao.deleteBnrOprUnit(oprUnitMap);
						}
					}
				} else { // 게시구분:운영단위가 아니면 운영단위 id 삭제
					for(Map<String, Object> oprUnitInfo : oprUnitInfoList ) {
						Map<String, Object> oprUnitMap = CommonUtil.toCamelCaseMap(oprUnitInfo);
						oprUnitMap.put("coCd", StringUtil.getString(saveMap.get("coCd")));
						oprUnitMap.put("bnrInfoSeq", StringUtil.getString(saveMap.get("bnrInfoSeq")));

						bnrDao.deleteBnrOprUnit(oprUnitMap);
					}
				}
			}
			// 상품 저장
			if(rtn > 0 && !sPrdIds.equals("")) {
				bnrDao.deleteBnrPrd(saveMap);
				for(String prdId : arrPrdId) {
					saveMap.put("prdId", prdId);
					bnrDao.insertBnrPrdDtl(saveMap);
				}
			}
		} catch(MessageException e) {
			if(e.getCode() == -100) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			} else {
				throw e;
			}
		}
		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : deleteBnrInfo
	* 2. ClassName : BnrServiceImpl
	* 3. Comment : 배너 삭제
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022.03.17
	* </pre>
	*
	* @param deleteInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult deleteBnrInfo(Map<String, Object> deleteInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		int rtn = 0;

		try {
			Map<String, Object> deleteMap = CommonUtil.toCamelCaseMap(deleteInfo);

			rtn = bnrDao.deleteBnrInfo(deleteMap);
			if(rtn > 0) {
				//배너 삭제
				bnrDao.deleteBnrOprUnit(deleteMap);
				bnrDao.deleteBnrPrd(deleteMap);
			} else {
				throw new MessageException(-100, "삭제에 실패하였습니다");
			}

			if(!Objects.equals(StringUtil.getString(deleteMap.get("mainDocRegId")), "")) {
				String contextRealPath = propertiesService.getString("file.path.root");

				//docRegId 있으면 기존 파일 삭제함
				HashMap<String, Object> delMap = new HashMap<>();
				delMap.put("docRegId", StringUtil.getString(deleteMap.get("mainDocRegId")));
				delMap.put("docRegSeq", StringUtil.getString(deleteMap.get("mainDocRegSeq")));
				int fileDelRtn = coCommonDao.deleteFileInfo(delMap);
				//실제 경로 삭제
				if(fileDelRtn <= 0 ) {
					//throw new MessageException(-100, "첨부파일 삭제 실패");
				} else {
					// 실 파일 삭제
					saComService.deleteFile(contextRealPath, StringUtil.getString(deleteMap.get("mainAtflStorPath")), StringUtil.getString(deleteMap.get("mainOriAtflNm")));
				}
			}
			if(!Objects.equals(StringUtil.getString(deleteMap.get("subDocRegId")), "")) {
				String contextRealPath = propertiesService.getString("file.path.root");

				//docRegId 있으면 기존 파일 삭제함
				HashMap<String, Object> delMap = new HashMap<>();
				delMap.put("docRegId", StringUtil.getString(deleteMap.get("subDocRegId")));
				delMap.put("docRegSeq", StringUtil.getString(deleteMap.get("subDocRegSeq")));
				int fileDelRtn = coCommonDao.deleteFileInfo(delMap);
				//실제 경로 삭제
				if(fileDelRtn <= 0 ) {
					//throw new MessageException(-100, "첨부파일 삭제 실패");
				} else {
					// 실 파일 삭제
					saComService.deleteFile(contextRealPath, StringUtil.getString(deleteMap.get("subAtflStorPath")), StringUtil.getString(deleteMap.get("subOriAtflNm")));
				}
			}

		} catch(MessageException e) {
			if( e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			} else {
				throw e;
			}
		}
		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectPprCatgBnrList
	* 2. ClassName : BnrServiceImpl
	* 3. Comment : 인기카테고리 배너 목록 조회
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022.03.15
	* </pre>
	*
	* @param searchInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult selectPprCatgBnrList(Map<String, Object> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);

		List<Map<String,Object>> list = new ArrayList<>();

		list = bnrDao.selectPprCatgBnrList(searchMap);

		//리턴값 set
		result.addDataSet("ds_output", list);
		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectPprCatgBnrInfo
	* 2. ClassName : BnrServiceImpl
	* 3. Comment : 인기카테고리 배너 상세 조회
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022.04.21
	* </pre>
	*
	* @param searchInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult selectPprCatgBnrInfo(Map<String, Object> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);

		Map<String,Object> bnrDtlMap = bnrDao.selectPprCatgBnrInfo(searchMap);
		List<Map<String,Object>> mnfrList = bnrDao.selectPprCatgBnrMnfrList(searchMap);

		//리턴값 set
		result.addDataSet("ds_output1", bnrDtlMap);
		result.addDataSet("ds_output2", mnfrList);
		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : savePprCatgBnrInfo
	* 2. ClassName : BnrServiceImpl
	* 3. Comment : 인기카테고리 배너 저장
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022.04.22
	* </pre>
	*
	* @param saveInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult savePprCatgBnrInfo(Map<String, Object> saveInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		int rtn = 0;
		Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
		Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(saveInfo);
		String oprtrId = "";

		try {
			if (sessionsAdmin != null) {
				oprtrId = StringUtil.getString(sessionsAdmin.get("OPRTR_ID"));
			}
			saveMap.put("regpsnId", oprtrId);
			saveMap.put("updpsnId", oprtrId);

			// docRegId 가 빈 값이 아니고, atflNm이 빈 값이면 지운걸로 판단
			if (!Objects.equals(StringUtil.getString(saveMap.get("prdClcdDocRegId")), "") && Objects.equals(StringUtil.getString(saveMap.get("prdClcdAtflNm")), "") ) {
				this.deleteCoAtflFile(StringUtil.getString(saveMap.get("prdClcdDocRegId")), StringUtil.getString(saveMap.get("prdClcdDocRegSeq")), StringUtil.getString(saveMap.get("prdClcdAtflStorPath")), StringUtil.getString(saveMap.get("prdClcdOriAtflNm")));
				saveMap.put("prdClcdDocRegId", null);
			}
			rtn = bnrDao.updatePprCatgBnrInfo(saveMap);

			if(rtn > 0) {
				bnrDao.deletePprCatgBnrMnfrInfo(saveMap);

				if(!StringUtil.getString(saveMap.get("mnfrDocRegId1")).equals("") || !StringUtil.getString(saveMap.get("mnfrNo1")).equals("") ) {
					saveMap.put("mnfrNo", StringUtil.getString(saveMap.get("mnfrNo1")));
					saveMap.put("mnfrDocRegId", StringUtil.getString(saveMap.get("mnfrDocRegId1")));

					// docRegId 가 빈 값이 아니고, atflNm이 빈 값이면 지운걸로 판단
					if (!Objects.equals(StringUtil.getString(saveMap.get("mnfrDocRegId")), "") && Objects.equals(StringUtil.getString(saveMap.get("mnfrAtflNm1")), "") ) {
						this.deleteCoAtflFile(StringUtil.getString(saveMap.get("mnfrDocRegId1")), StringUtil.getString(saveMap.get("mnfrDocRegSeq1")), StringUtil.getString(saveMap.get("mnfrAtflStorPath1")), StringUtil.getString(saveMap.get("mnfrOriAtflNm1")));
						saveMap.put("mnfrDocRegId", null);
					}
				}
				if(!Objects.equals(StringUtil.getString(saveMap.get("mnfrNo1")), "")) {
					bnrDao.insertPprCatgBnrMnfrInfo(saveMap);
				}

				if(!StringUtil.getString(saveMap.get("mnfrDocRegId2")).equals("") || !StringUtil.getString(saveMap.get("mnfrNo2")).equals("") ) {
					saveMap.put("mnfrNo", StringUtil.getString(saveMap.get("mnfrNo2")));
					saveMap.put("mnfrDocRegId", StringUtil.getString(saveMap.get("mnfrDocRegId2")));

					// docRegId 가 빈 값이 아니고, atflNm이 빈 값이면 지운걸로 판단
					if (!Objects.equals(StringUtil.getString(saveMap.get("mnfrDocRegId")), "") && Objects.equals(StringUtil.getString(saveMap.get("mnfrAtflNm2")), "") ) {
						this.deleteCoAtflFile(StringUtil.getString(saveMap.get("mnfrDocRegId2")), StringUtil.getString(saveMap.get("mnfrDocRegSeq2")), StringUtil.getString(saveMap.get("mnfrAtflStorPath2")), StringUtil.getString(saveMap.get("mnfrOriAtflNm2")));
						saveMap.put("mnfrDocRegId", null);
					}
				}
				if(!Objects.equals(StringUtil.getString(saveMap.get("mnfrNo2")), "")) {
					bnrDao.insertPprCatgBnrMnfrInfo(saveMap);
				}

				if(!StringUtil.getString(saveMap.get("mnfrDocRegId3")).equals("") || !StringUtil.getString(saveMap.get("mnfrNo3")).equals("") ) {
					saveMap.put("mnfrNo", StringUtil.getString(saveMap.get("mnfrNo3")));
					saveMap.put("mnfrDocRegId", StringUtil.getString(saveMap.get("mnfrDocRegId3")));

					// docRegId 가 빈 값이 아니고, atflNm이 빈 값이면 지운걸로 판단
					if (!Objects.equals(StringUtil.getString(saveMap.get("mnfrDocRegId")), "") && Objects.equals(StringUtil.getString(saveMap.get("mnfrAtflNm3")), "") ) {
						this.deleteCoAtflFile(StringUtil.getString(saveMap.get("mnfrDocRegId3")), StringUtil.getString(saveMap.get("mnfrDocRegSeq3")), StringUtil.getString(saveMap.get("mnfrAtflStorPath3")), StringUtil.getString(saveMap.get("mnfrOriAtflNm3")));
						saveMap.put("mnfrDocRegId", null);
					}
				}
				if(!Objects.equals(StringUtil.getString(saveMap.get("mnfrNo3")), "")) {
					bnrDao.insertPprCatgBnrMnfrInfo(saveMap);
				}
			}

		} catch(MessageException e) {
			if(e.getCode() == -100) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			} else {
				throw e;
			}
		}
		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : deleteCoAtflFile
	* 2. ClassName : BnrServiceImpl
	* 3. Comment : 공통 첨부파일 삭제
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022.04.22
	* </pre>
	*
	* @param deleteMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public int deleteCoAtflFile(String strDocRegId, String strDocRegSeq, String strAtflStorPath, String strOriAtflNm) throws Exception {

			String contextRealPath = propertiesService.getString("file.path.root");

			//docRegId 있으면 기존 파일 삭제함
			HashMap<String, Object> delMap = new HashMap<>();
			delMap.put("docRegId", strDocRegId);
			delMap.put("docRegSeq", Integer.parseInt(strDocRegSeq));
			int fileDelRtn = coCommonDao.deleteFileInfo(delMap);
			//실제 경로 삭제
			if(fileDelRtn <= 0 ) {
				//throw new MessageException(-100, "첨부파일 삭제 실패");
			} else {
				// 실 파일 삭제
				saComService.deleteFile(contextRealPath, strAtflStorPath, strOriAtflNm);
			}
			return fileDelRtn;
		}

}