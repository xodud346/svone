package com.ssp.bo.sa.service.impl;

import java.io.File;
import java.io.IOException;
import java.io.StringReader;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.sa.dao.SaComDao;
import com.ssp.bo.sa.service.SaComService;
import com.ssp.core.co.dao.CoCommonDao;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @desc 영업마케팅 공통 ServiceImpl
 * @package com.ssp.bo.service.impl
 * <pre>
 *
 * @author 87minho
 * @since 2022.03.18.
 * @version 1.0
 * @see SaComServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자	내용
 * ------------------------------------------------
 * 2022.03.18.	87minho	최초작성
 * 2022.04.11.	박진원	상품, 운영단위 벨리데이션 체크
 */
@Service("saComService")
public class SaComServiceImpl implements SaComService
{
	private final Logger logger = LoggerFactory.getLogger(SaComServiceImpl.class);

	@Resource(name = "saComDao")
	private SaComDao saComDao;

	@Autowired
	private CoCommonDao coCommonDao;

	@Autowired
	protected SspPropertyService propertiesService;

	/**
	*
	* <pre>
	* 1. MethodName : fileUpload
	* 2. ClassName : SaComServiceImpl
	* 3. Comment : 파일 업로드
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022.03.18.
	* </pre>
	*
	* @param request HttpServletRequest
	* @throws Exception exception
	*/
	@Override
	public NexacroResult singleFileUpload(HttpServletRequest request) throws Exception
	{
		logger.info("=====================================================fileUpload=========================================================");

		HashMap<String, Object> resMap = new HashMap<>();
		NexacroResult result = new NexacroResult();

		MultipartHttpServletRequest multi = (MultipartHttpServletRequest) request;
		Iterator<String> fileNames = multi.getFileNames();

		if( multi.getFileMap().size() == 0 )
		{
			resMap.put("result", "none");
			result.addDataSet("ds_output", resMap);
			return result;
		}

		String contextRealPath = propertiesService.getString("file.path.root");
		String getFolderName = "/attach";
		String msg = "첨부파일 저장";

		//현재 일자 가져오기
		LocalDate now = LocalDate.now();

		// 년월일
		String year = String.valueOf(now.getYear());
		String monthValue = String.format("%02d", now.getMonthValue());
		String dayOfMonth = String.format("%02d", now.getDayOfMonth());

		//폴더명 추가
		getFolderName = getFolderName + "/" + year + "/" + monthValue + "/" + dayOfMonth + "/";

		List<HashMap<String, Object>> fileList = new ArrayList<>();
		String docRegId = "";
		int docRegSeq = 1;
		int rtn = 0;

		try
		{
			// 키 세팅
			String docRegIdOrigin = StringUtil.getString(request.getParameter("docRegId"));
			int docRegSeqOrigin = Integer.valueOf(StringUtil.getString(request.getParameter("docRegSeq")));
			String atflStorPathOrigin = StringUtil.getString(request.getParameter("atflStorPath"));
			String oriAtflNm = StringUtil.getString(request.getParameter("oriAtflNm"));

			while (fileNames.hasNext())
			{
				HashMap<String, Object> fileMap = new HashMap<>();
				String fileName = fileNames.next();
				MultipartFile multiFile = multi.getFile(fileName);

				String filename_ext = fileName.substring(fileName.lastIndexOf(".") + 1);
				String realFileNm = UUID.randomUUID() + "." + filename_ext;
				String rlFileNm = getFolderName + realFileNm;

				long start = System.currentTimeMillis(); //TODO 시간 체크

				File file = new File(contextRealPath + rlFileNm);

				//File Null Check
				if (multiFile.getSize() != 0)
				{
					//경로상에 파일이 존재하지 않을 경우
					if (!file.exists())
					{
						if (file.getParentFile().mkdirs())
						{
							//경로에 해당하는 디렉토리들을 생성
							boolean fileCreated = file.createNewFile();

							if (!fileCreated)
							{
								throw new IOException("경로를 찾을수 없음.");
							}
						}
					}

					//임시로 저장된 multipartFile을 실제 파일로 전송
					multiFile.transferTo(file);
				}

				if(!Objects.equals(docRegIdOrigin, "") && !Objects.equals(docRegIdOrigin, "undefined"))
				{
					//docRegId 있으면 기존 파일 삭제함
					HashMap<String, Object> delMap = new HashMap<>();
					delMap.put("docRegId", docRegIdOrigin);
					delMap.put("docRegSeq", docRegSeqOrigin);
					rtn = coCommonDao.deleteFileInfo(delMap);

					//실제 경로 삭제
					if( rtn <= 0 )
					{
						//throw new MessageException(-100, "첨부파일 삭제 실패");
					}
					else
					{
						// 실 파일 삭제
						logger.info("실삭제파일위치:"+contextRealPath + atflStorPathOrigin + oriAtflNm);
						this.deleteFile(contextRealPath, atflStorPathOrigin,  CommUtil.filterPath(oriAtflNm));
					}
				}

				docRegId = coCommonDao.selectDocRegId();
//				docRegSeq = coCommonDao.selectFileDocRegSeq(docRegId);
//				if(!Objects.equals(docRegIdOrigin, "") && !Objects.equals(docRegIdOrigin, "undefined"))
//				{
//					docRegId = docRegIdOrigin;
//					docRegSeq = docRegSeqOrigin;
//				}
//				else
//				{
//					docRegId = coCommonDao.selectDocRegId();
//				}

				long end = System.currentTimeMillis(); //TODO 시간 체크

				// 측정 시간 출력
				logger.info( "실행 시간 : " + ( end - start )/1000.0 +"초");

				fileMap.put("atflNm", fileName);
				fileMap.put("oriAtflNm", realFileNm);
				fileMap.put("atflLen", file.length());
				//fileMap.put("atflStorPath", file.getPath());
				fileMap.put("atflStorPath", getFolderName);
				fileMap.put("storPlcSprCd", "1");
				fileMap.put("docRegId", docRegId);
				fileMap.put("docRegSeq", docRegSeq);

				// 파일 저장 dao 호출
				rtn = coCommonDao.insertFile(fileMap);
			}

			//저장 실패
			if (rtn <= 0)
			{
				throw new MessageException(-100, msg + " 실패");
			}

			resMap.put("docRegId", docRegId);
			resMap.put("result", "success");

			result.addDataSet("ds_output", resMap);
		}
		catch(MessageException e)
		{
			if(e.getCode() == -100)
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
	* 1. MethodName : fileUpload
	* 2. ClassName : SaComServiceImpl
	* 3. Comment : 파일 업로드
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022.03.21.
	* </pre>
	*
	* @param request HttpServletRequest
	* @throws Exception exception
	*/
	@Override
	public NexacroResult fileUpload(HttpServletRequest request) throws Exception
	{
		logger.info("=====================================================fileUpload=========================================================");

		HashMap<String, Object> resMap = new HashMap<>();
		NexacroResult result = new NexacroResult();

		JSONParser jsonParser = new JSONParser();
		List<Map<String, Object>> fileRtnList = new ArrayList<>();
		Map<String, String[]> map = request.getParameterMap();

		MultipartHttpServletRequest multi = (MultipartHttpServletRequest) request;
		Iterator<String> fileNames = multi.getFileNames();

		if( multi.getFileMap().size() == 0 )
		{
			result.addDataSet("ds_output", fileRtnList);
			return result;
		}

		String contextRealPath = propertiesService.getString("file.path.root");
		String getFolderName = "/attach";
		String msg = "첨부파일 저장";

		//현재 일자 가져오기
		LocalDate now = LocalDate.now();

		// 년월일
		String year = String.valueOf(now.getYear());
		String monthValue = String.format("%02d", now.getMonthValue());
		String dayOfMonth = String.format("%02d", now.getDayOfMonth());

		//폴더명 추가
		getFolderName = getFolderName + "/" + year + "/" + monthValue + "/" + dayOfMonth + "/";

		// 파일 정보담는list
		List<Map<String, Object>> fileInfoList = new ArrayList<>();

		List<HashMap<String, Object>> fileSaveList = new ArrayList<>();
		int index = 0;
		int rtn = 0;

		String docRegIdOrigin = "";
		int docRegSeqOrigin = 1;

		try
		{
			// 키 세팅
			if (!map.isEmpty())
			{
				String[] jsonString = request.getParameterMap().get("resList");
				JSONArray jsonArray = (JSONArray) jsonParser.parse(new StringReader(jsonString[0]));

				for (int i = 0; i < jsonArray.size(); i++)
				{
					HashMap<String, Object> fileInfoMap = new HashMap<>();
					JSONObject jsonObj = (JSONObject) jsonArray.get(i);
					fileInfoMap.put("IMG_TYPE", jsonObj.get("IMG_TYPE"));
					fileInfoMap.put("DOC_REG_ID", jsonObj.get("DOC_REG_ID"));
					fileInfoMap.put("DOC_REG_SEQ", jsonObj.get("DOC_REG_SEQ"));
					fileInfoMap.put("ATFL_STOR_PATH", jsonObj.get("ATFL_STOR_PATH"));
					fileInfoMap.put("ORI_ATFL_NM", jsonObj.get("ORI_ATFL_NM"));
					fileInfoMap.put("ATFL_NM", jsonObj.get("ATFL_NM"));
					fileInfoList.add(i, fileInfoMap);
				}

				if(fileInfoList.size() == 0)
				{
					throw new MessageException(-100, "파일 정보를 찾을 수 없습니다.");
				}

				while (fileNames.hasNext())
				{
					HashMap<String, Object> fileMap = new HashMap<>();
					String fileName = fileNames.next();
					MultipartFile multiFile = multi.getFile(fileName);

					String orgFileName = "";
					String docRegId = "";
					int docRegSeq = 1;
					String atflStorPath = "";
					String oriAtflNm = "";
					String imgType = "";

					for (int i = 0; i < fileInfoList.size(); i++)
					{
						Map<String, Object> infoMap = fileInfoList.get(i);

						if (infoMap.containsKey("IMG_TYPE"))
						{
							imgType = StringUtil.getString(infoMap.get("IMG_TYPE"),"");

							if(imgType.equals(fileName))
							{
								docRegIdOrigin = StringUtil.getString(infoMap.get("DOC_REG_ID"),"");

								if(!StringUtil.getString(infoMap.get("DOC_REG_SEQ")).equals(""))
								{
									logger.info("================================================== " + StringUtil.getString((infoMap.get("DOC_REG_SEQ"))));
									docRegSeqOrigin = Integer.valueOf(StringUtil.getString((infoMap.get("DOC_REG_SEQ"))));
								}

								orgFileName = StringUtil.getString(infoMap.get("ATFL_NM"),"");
								atflStorPath = StringUtil.getString(infoMap.get("ATFL_STOR_PATH"),"");
								oriAtflNm = StringUtil.getString(infoMap.get("ORI_ATFL_NM"),"");
							}
							else if("".equals(StringUtil.getString(infoMap.get("IMG_TYPE"),"")))
							{
								throw new MessageException(-100, "파일 정보를 찾을 수 없습니다.");
							}
						}
						else
						{
							throw new MessageException(-100, "파일 정보를 찾을 수 없습니다.");
						}
					}

					if(!Objects.equals(docRegIdOrigin, ""))
					{
						//docRegId 있으면 기존 파일 삭제함
						HashMap<String, Object> delMap = new HashMap<>();
						delMap.put("docRegId", docRegIdOrigin);
						delMap.put("docRegSeq", docRegSeqOrigin);
						rtn = coCommonDao.deleteFileInfo(delMap);

						//실제 경로 삭제
						if( rtn <= 0 )
						{
							//throw new MessageException(-100, "첨부파일 삭제 실패");
						}
						else
						{
							// 실 파일 삭제
							logger.info("실삭제파일위치:"+contextRealPath + atflStorPath + oriAtflNm);
							this.deleteFile(contextRealPath, atflStorPath, oriAtflNm);
						}
					}

					String oFileName = orgFileName;
					String filename_ext = oFileName.substring(oFileName.lastIndexOf(".") + 1);
					String realFileNm = UUID.randomUUID() + "." + filename_ext;
					String rlFileNm = getFolderName + realFileNm;

					File file = new File(contextRealPath + rlFileNm);

					//File Null Check
					if (multiFile.getSize() != 0)
					{
						//경로상에 파일이 존재하지 않을 경우
						if (!file.exists())
						{
							if (file.getParentFile().mkdirs())
							{
								//경로에 해당하는 디렉토리들을 생성
								boolean fileCreated = file.createNewFile();

								if (!fileCreated)
								{
									throw new IOException("경로를 찾을수 없음.");
								}
							}
						}

						//임시로 저장된 multipartFile을 실제 파일로 전송
						multiFile.transferTo(file);
					}

					docRegId = coCommonDao.selectDocRegId();
//					docRegSeq = coCommonDao.selectFileDocRegSeq(docRegId);
//					if(!Objects.equals(docRegIdOrigin, ""))
//					{
//						docRegId = docRegIdOrigin;
//						docRegSeq = docRegSeqOrigin;
//					}
//					else
//					{
//						docRegId = coCommonDao.selectDocRegId();
//					}

					fileMap.put("atflNm", oFileName);
					fileMap.put("oriAtflNm", realFileNm);
					fileMap.put("atflLen", file.length());
					//fileMap.put("atflStorPath", file.getPath());
					fileMap.put("atflStorPath", getFolderName);
					fileMap.put("storPlcSprCd", "1");
					fileMap.put("docRegId", docRegId);
					fileMap.put("docRegSeq", docRegSeq);

					fileMap.put("imgType", fileName);

					fileRtnList.add(index, fileMap);
					index++;
					// 파일 저장 dao 호출
					rtn = coCommonDao.insertFile(fileMap);
				}

				//저장 실패
				if (rtn <= 0)
				{
					throw new MessageException(-100, msg + " 실패");
				}

				result.addDataSet("ds_output", fileRtnList);
			}
		}
		catch(MessageException e)
		{
			if(e.getCode() == -100)
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
	* 1. MethodName : selectPrdIdCheckList
	* 2. ClassName : SaComServiceImpl
	* 3. Comment : 상품ID 유효성 검사
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.04.11.
	* </pre>
	*
	* @param searchMap, searchPrdIdCheckMapList
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectPrdIdCheckList(Map<String, Object> searchMap, List<Map<String, Object>> searchPrdIdCheckMapList) throws Exception
	{
		String sQueryString = "";

		// 쿼리 만들기
		for( Map<String, Object> searchData : searchPrdIdCheckMapList )
		{
			Map<String, Object> searchDataMap = CommonUtil.toCamelCaseMap(searchData);

			String sCoCd = StringUtil.getString(searchDataMap.get("coCd"));
			String sPrdId = StringUtil.getString(searchDataMap.get("prdId"));

			sQueryString = sQueryString + " SELECT ";
			sQueryString = sQueryString + sCoCd + " AS CO_CD, ";
			sQueryString = sQueryString + " LPAD('" + sPrdId + "', 18, '0') AS PRD_ID ";
			sQueryString = sQueryString + " FROM DUAL ";
			sQueryString = sQueryString + " UNION ALL ";
		}

		sQueryString = sQueryString.substring(0, sQueryString.length()-10);

		searchMap.put("queryString", sQueryString);

		return saComDao.selectPrdIdCheckList(searchMap);
	}

	/**
	*
	* <pre>
	* 1. MethodName : selectOprUnitCheckList
	* 2. ClassName : SaComServiceImpl
	* 3. Comment : 운영단위ID 유효성 검사
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.04.12.
	* </pre>
	*
	* @param searchMap, ds_searchOprUnitCheckList
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectOprUnitCheckList(Map<String, Object> searchMap, List<Map<String, Object>> ds_searchOprUnitCheckList) throws Exception
	{
		String sQueryString = "";
		List<Map<String, Object>> selectOprUnitCheckList = new ArrayList<Map<String, Object>>();

		// 쿼리 만들기
		for( Map<String, Object> searchData : ds_searchOprUnitCheckList )
		{
			Map<String, Object> searchDataMap = CommonUtil.toCamelCaseMap(searchData);

			String sCoCd = StringUtil.getString(searchDataMap.get("coCd"));
			String sBzplcId = StringUtil.getString(searchDataMap.get("bzplcId"));
			String sOprUnitId = StringUtil.getString(searchDataMap.get("oprUnitId"));

			sQueryString = sQueryString + " SELECT ";
			sQueryString = sQueryString + sCoCd + " AS CO_CD, ";
			sQueryString = sQueryString + "'" + sBzplcId + "' AS BZPLC_ID, ";
			sQueryString = sQueryString + "'" + sOprUnitId + "' AS OPR_UNIT_ID ";
			sQueryString = sQueryString + " FROM DUAL ";
			sQueryString = sQueryString + " UNION ALL ";
		}

		if(!"".equals(sQueryString))
		{
			sQueryString = sQueryString.substring(0, sQueryString.length()-10);

			searchMap.put("queryString", sQueryString);

			selectOprUnitCheckList = saComDao.selectOprUnitCheckList(searchMap);
		}
		else
		{
			selectOprUnitCheckList = null;
		}

		return selectOprUnitCheckList;

	}

	/**
	*
	* <pre>
	* 1. MethodName : selectPrdClcdCheckList
	* 2. ClassName : SaComServiceImpl
	* 3. Comment : 상품군ID 유효성 검사
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022.04.14.
	* </pre>
	*
	* @param searchMap, searchPrdClcdCheckMapList
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectPrdClcdCheckList(Map<String, Object> searchMap, List<Map<String, Object>> searchPrdClcdCheckMapList) throws Exception
	{
		String sQueryString = "";

		// 쿼리 만들기
		for( Map<String, Object> searchData : searchPrdClcdCheckMapList )
		{
			Map<String, Object> searchDataMap = CommonUtil.toCamelCaseMap(searchData);

			String sCoCd = StringUtil.getString(searchDataMap.get("coCd"));
			String sPrdClcd = StringUtil.getString(searchDataMap.get("prdClcd"));
			//String sMallSprCd = StringUtil.getString(searchDataMap.get("mallSprCd"));

			sQueryString = sQueryString + " SELECT ";
			sQueryString = sQueryString + sCoCd + " AS CO_CD, ";
			sQueryString = sQueryString + "'" + sPrdClcd + "' AS PRD_CLCD ";
			//sQueryString = sQueryString + "'" + sMallSprCd + "' AS MALL_SPR_CD ";
			sQueryString = sQueryString + " FROM DUAL ";
			sQueryString = sQueryString + " UNION ALL ";
		}

		sQueryString = sQueryString.substring(0, sQueryString.length()-10);

		searchMap.put("queryString", sQueryString);

		return saComDao.selectPrdClcdCheckList(searchMap);
	}

	/**
	*
	* <pre>
	* 1. MethodName : deleteFile
	* 2. ClassName : SaComServiceImpl
	* 3. Comment : 파일 삭제
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2022.06.27.
	* </pre>
	*
	* @param contextRealPath, atflStorPath, oriAtflNm
	* @return
	* @throws
	*/
	public synchronized void deleteFile(String contextRealPath, String atflStorPath, String oriAtflNm) {
		File file = new File(contextRealPath + atflStorPath + oriAtflNm);

		if( file.exists() ) {
			if(file.delete()) {
				logger.info("파일삭제 성공");
			} else {
				logger.info("파일삭제 실패");
			}
		} else {
			logger.info("파일 없음");
		}
	}

	/**
	*
	* <pre>
	* 1. MethodName : deleteCoAtflFile
	* 2. ClassName : SaComServiceImpl
	* 3. Comment : 공통 첨부파일 삭제
	* 4. 작성자 : 87minho
	* 5. 작성일 : 2023.01.01.
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
			deleteFile(contextRealPath, strAtflStorPath, strOriAtflNm);
		}
		return fileDelRtn;
	}
}
