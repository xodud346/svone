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
import com.ssp.bo.sa.dao.BgDao;
import com.ssp.bo.sa.service.BgService;
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
 * @desc    배지 Serviceimpl
 * @package com.ssp.bo.sample.service.impl
 * <pre>
 *
 * @author
 * @since 2022. 02. 22.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.22.		87minho	최초작성
 */
@Service("bgService")
public class BgServiceImpl implements BgService {
	private final Logger logger = LoggerFactory.getLogger(BgServiceImpl.class);

	@Autowired
	private BgDao bgDao;

	@Autowired
	protected SspPropertyService propertiesService;

	@Autowired
	private CoCommonDao coCommonDao;

	@Autowired
	private SaComService saComService;

	/**
	*
	* <pre>
	* 1. MethodName : selectBgList
	* 2. ClassName : BgServiceImpl
	* 3. Comment : 배지 목록 조회
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022-02-23
	* </pre>
	*
	* @param searchInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult selectBgList(Map<String, Object> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);

		List<Map<String,Object>> list = new ArrayList<>();
		int totalCount = bgDao.selectBgListCnt(searchMap);

		if( totalCount > 0 ) {
			String ssoServiceUrl = propertiesService.getString("sso.service.url");
			searchMap.put("ssoServiceUrl", ssoServiceUrl); // 이미지경로 위하여 추가
			list = bgDao.selectBgList(searchMap);
		}

		//리턴값 set
		result.addVariable( "totalCount", totalCount );
		result.addDataSet("ds_output1", list);
		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectBgDtlInfo
	* 2. ClassName : BgServiceImpl
	* 3. Comment : 배지 상세 조회
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022-02-24
	* </pre>
	*
	* @param searchInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult selectBgDetail(Map<String, Object> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);

		Map<String,Object> dtlInfo = bgDao.selectBgDetail(searchMap);

		//리턴값 set
		result.addDataSet("ds_output1", dtlInfo);
		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : insertBgDetail
	* 2. ClassName : BgServiceImpl
	* 3. Comment : 배지 상세 등록
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022-02-24
	* </pre>
	*
	* @param searchInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult insertBgDetail(Map<String, Object> insertInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> insertMap = CommonUtil.toCamelCaseMap(insertInfo);
		Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
		int rtn = 0;

		try {
			if (sessionsAdmin != null) {
				insertMap.put("regpsnId", sessionsAdmin.get("OPRTR_ID"));
				insertMap.put("updpsnId", sessionsAdmin.get("OPRTR_ID"));
			}

			rtn = bgDao.insertBgDetail(insertMap);
			if( rtn < 0 ) {
				throw new MessageException(-100, "등록에 실패하였습니다");
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
	* 1. MethodName : updateBgDetail
	* 2. ClassName : BgServiceImpl
	* 3. Comment : 배지 상세 수정
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022-02-24
	* </pre>
	*
	* @param updateInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult updateBgDetail(Map<String, Object> updateInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> updateMap = CommonUtil.toCamelCaseMap(updateInfo);
		int rtn = 0;

		try {
			Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
			if (sessionsAdmin != null) {
				updateMap.put("updpsnId", sessionsAdmin.get("OPRTR_ID"));
			}

			rtn = bgDao.updateBgDetail(updateMap);
			if( rtn < 0 ) {
				throw new MessageException(-100, "수정에 실패하였습니다");
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
	* 1. MethodName : selectBgPrdAplyCnt
	* 2. ClassName : BgServiceImpl
	* 3. Comment : 상품에 배지 적용된 개수 조회
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022-06-28
	* </pre>
	*
	* @param deleteInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult selectBgPrdAplyCnt(Map<String, Object> deleteInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> deleteMap = CommonUtil.toCamelCaseMap(deleteInfo);

		Map<String,Object> bgPrdAplyInfo = bgDao.selectBgPrdAplyCnt(deleteMap);
		//리턴값 set
		result.addDataSet("ds_output1", bgPrdAplyInfo);

		return result;
	}

	/**
	*
	* <pre>
	* 1. MethodName : deleteBgDetail
	* 2. ClassName : BgServiceImpl
	* 3. Comment : 배지 상세 삭제
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022-02-24
	* </pre>
	*
	* @param deleteInfo
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult deleteBgDetail(Map<String, Object> deleteInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> deleteMap = CommonUtil.toCamelCaseMap(deleteInfo);
		int rtn = 0;

		try {
			if (!Objects.equals(StringUtil.getString(deleteMap.get("docRegId")), "")) {
				String contextRealPath = propertiesService.getString("file.path.root");

				//docRegId 있으면 기존 파일 삭제함
				HashMap<String, Object> delMap = new HashMap<>();
				delMap.put("docRegId", StringUtil.getString(deleteMap.get("docRegId")));
				delMap.put("docRegSeq", StringUtil.getString(deleteMap.get("docRegSeq")));
				int fileDelRtn = coCommonDao.deleteFileInfo(delMap);
				//실제 경로 삭제
				if(fileDelRtn <= 0 ) {
					//throw new MessageException(-100, "첨부파일 삭제 실패");
				} else {
					// 실 파일 삭제
					saComService.deleteFile(contextRealPath, StringUtil.getString(deleteMap.get("atflStorPath")), StringUtil.getString(deleteMap.get("oriAtflNm")));
				}
			}

			rtn = bgDao.deleteBgDetail(deleteMap);
			if( rtn < 0 ) {
				throw new MessageException(-100, "삭제에 실패하였습니다");
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

}