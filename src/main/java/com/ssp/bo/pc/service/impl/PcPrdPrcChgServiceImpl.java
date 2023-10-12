package com.ssp.bo.pc.service.impl;

import java.io.File;
import java.io.IOException;
import java.io.StringReader;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pc.dao.PcPrdPrcChgDao;
import com.ssp.bo.pc.service.PcPrdPrcChgService;
import com.ssp.core.co.dao.CoCommonDao;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  
 * @package com.ssp.bo.pc.service.impl
 * </pre>
 * @author scvgo17
 * @since 2022. 01. 18.
 * @version 1.0
 * @see PcPrdPrcChgServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
@Service("pcPrdPrcChgService")
public class PcPrdPrcChgServiceImpl implements PcPrdPrcChgService {
	
	private final Logger logger = LoggerFactory.getLogger(PcPrdPrcChgServiceImpl.class);

	@Autowired
    private PcPrdPrcChgDao pcPrdPrcChgDao;
	
	@Autowired
	private CoCommonDao coCommonDao;
	
	@Autowired
	protected SspPropertyService propertiesService;
	
	public NexacroResult selectExPrdPrcList(Map<String,Object> searchMap) throws Exception{
		
		NexacroResult result = new NexacroResult();
		
		int totalCount = pcPrdPrcChgDao.selectExPrdPrcCount(searchMap);
		List<Map<String, Object>> list = pcPrdPrcChgDao.selectExPrdPrcList(searchMap);
		
		result.addDataSet("ds_output", list);
		result.addVariable("totalCount", totalCount);
		
        return result;
    }
	
	public NexacroResult updateExPrdPrc(Map<String, Object> commandMap, List<Map<String, Object>> updateList) throws Exception {
		
		NexacroResult result = new NexacroResult();
		
		try {
			
			for( Map<String, Object> data : updateList ) {
				data = CommonUtil.toCamelCaseMap(data);
				data.put("coCd", commandMap.get("coCd"));
				data.put("regpsnId", commandMap.get("regpsnId"));
				data.put("updpsnId", commandMap.get("updpsnId"));
				data.put("prdId", commandMap.get("prdId"));
				data.put("bzplcId", "*");
				pcPrdPrcChgDao.insertExPrdPrc(data);
			}
			
		
		}catch ( MessageException e ) {
            if( e.getCode() == -100 ) {
                result.setErrorCode(e.getCode());
                result.setErrorMsg(e.getMessage());
                return result;
            } else {
                throw e;
            }
		}
		
		return result;
	}

	@Override
	public NexacroResult selectExPrdPrcDetail(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub

		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> detail = pcPrdPrcChgDao.selectExPrdPrcDetail(searchMap);
		
		result.addDataSet("ds_output", detail);
		
		return result;
	}

	@Override
	public List<Map<String, Object>> updateExFile(HttpServletRequest request) throws Exception {

		JSONParser jsonParser = new JSONParser();
		// DOC_REG_ID, DOC_REG_SEQ 리턴 list
		List<Map<String, Object>> fileRtnList = new ArrayList<>();
		Map<String, String[]> map = request.getParameterMap();
		
		MultipartHttpServletRequest multi = (MultipartHttpServletRequest) request;
		Iterator<String> fileNames = multi.getFileNames();
		if (multi.getFileMap().size() == 0)
			return fileRtnList;

		String contextRealPath = propertiesService.getString("file.path.root");
		String getFolderName = "/attach";
		String msg = "첨부파일 저장";

		// 현재 일자 가져오기
		LocalDate now = LocalDate.now();

		// 년월일
		String year = String.valueOf(now.getYear());
		String monthValue = String.format("%02d", now.getMonthValue());
		String dayOfMonth = String.valueOf(now.getDayOfMonth());

		// 폴더명 추가
		getFolderName = getFolderName + "/" + year + "/" + monthValue + "/" + dayOfMonth + "/";

		// 파일 정보담는list
		List<Map<String, Object>> fileInfoList = new ArrayList<>();

		List<HashMap<String, Object>> fileSaveList = new ArrayList<>();
		int index = 0;
		int rtn = 0;
		
		if (!map.isEmpty()) {
			String[] jsonString = request.getParameterMap().get("resList");
			JSONArray rfiArray = (JSONArray) jsonParser.parse(new StringReader(jsonString[0]));
			for (int i = 0; i < rfiArray.size(); i++) {
				HashMap<String, Object> fileInfoMap = new HashMap<>();
				JSONObject rfiObj = (JSONObject) rfiArray.get(i);
				fileInfoMap.put("COM_DTL_CD_NM", rfiObj.get("COM_DTL_CD_NM"));
				fileInfoMap.put("ORG_FILE_NAME", rfiObj.get("ORG_FILE_NAME"));
				fileInfoMap.put("ATFL_STOR_PATH", rfiObj.get("ATFL_STOR_PATH"));
				fileInfoMap.put("ORI_ATFL_NM", rfiObj.get("ORI_ATFL_NM"));
				fileInfoList.add(i, fileInfoMap);
			}

			if(fileInfoList.size() == 0) {
				throw new MessageException(-100, "파일 정보를 찾을 수 없습니다.");
			}
			
			while (fileNames.hasNext()) {
				String orgFileName = "";
				String docRegId = "";
				int docRegSeq = 0;
				String fileName = fileNames.next();
				String comDtlCdNm ="";
				String atflStorPath = "";
				String oriAtflNm = "";
				
				for (int i = 0; i < fileInfoList.size(); i++) {
					Map<String, Object> infoMap = fileInfoList.get(i);
					
					if (infoMap.containsKey("COM_DTL_CD_NM")){
						if(StringUtil.getString(StringUtil.getString(infoMap.get("COM_DTL_CD_NM"),""),"").equals(fileName)) {
							comDtlCdNm = StringUtil.getString(infoMap.get("COM_DTL_CD_NM"),"");
							docRegId = StringUtil.getString(infoMap.get("COM_USR_DEFN_NM_1"),"");
							
							if(infoMap.get("COM_USR_DEFN_NM_2") != null) {
								if(!"".equals(infoMap.get("COM_USR_DEFN_NM_2").toString())){
									docRegSeq = Integer.valueOf(StringUtil.getString((infoMap.get("COM_USR_DEFN_NM_2"))));
								}
							}
							
							orgFileName = StringUtil.getString(infoMap.get("ORG_FILE_NAME"),"");
							atflStorPath = StringUtil.getString(infoMap.get("ATFL_STOR_PATH"),"");
							oriAtflNm = StringUtil.getString(infoMap.get("ORI_ATFL_NM"),"");
						}else if("".equals(StringUtil.getString(infoMap.get("COM_DTL_CD_NM"),""))) {
							throw new MessageException(-100, "파일 정보를 찾을 수 없습니다.");
						}
					}else {
						throw new MessageException(-100, "파일 정보를 찾을 수 없습니다.");
					}
				}
				
				
				docRegId = coCommonDao.selectDocRegId();
				docRegSeq = coCommonDao.selectFileDocRegSeq(docRegId);

				HashMap<String, Object> fileMap = new HashMap<>();
				MultipartFile multiFile = multi.getFile(fileName);
				
				String oFileName = orgFileName;
				String filename_ext = oFileName.substring(oFileName.lastIndexOf(".") + 1);
				String realFileNm = UUID.randomUUID() + "." + filename_ext;
				String rlFileNm = getFolderName + realFileNm;

				File file = new File(contextRealPath + rlFileNm);
				
				if(file != null) {
					// File Null Check
					if (multiFile.getSize() != 0) {
						// 경로상에 파일이 존재하지 않을 경우
						if (!file.exists()) {
							if (file.getParentFile().mkdirs()) {
								// 경로에 해당하는 디렉토리들을 생성
								boolean fileCreated = file.createNewFile();
								if (!fileCreated) {
									throw new IOException("경로를 찾을수 없음.");
								}
							}
						}
	
						// 임시로 저장된 multipartFile을 실제 파일로 전송
						multiFile.transferTo(file);
					}
				}

				fileMap.put("atflNm", oFileName);
				fileMap.put("oriAtflNm", realFileNm);
				fileMap.put("atflLen", file.length());
				// fileMap.put("atflStorPath", file.getPath());
				fileMap.put("atflStorPath", getFolderName);
				fileMap.put("storPlcSprCd", "1");
				fileMap.put("docRegId", docRegId);
				fileMap.put("docRegSeq", docRegSeq);
				fileSaveList.add(index, fileMap);
				
				fileMap.put("comDtlCdNm", comDtlCdNm);
				fileRtnList.add(index, fileMap);
				index++;
				
				// 파일 저장 dao 호출
				rtn = coCommonDao.insertFile(fileMap);
				
				// 저장 실패
				if (rtn <= 0)
					throw new MessageException(-100, msg + " 실패");
			}

		}
		return fileRtnList;
		
	}
	
	public NexacroResult selectExPrdPrcHstList(Map<String,Object> searchMap) throws Exception{
		
		NexacroResult result = new NexacroResult();
		String contextRealPath = propertiesService.getString("file.path.root");
		searchMap.put("contextRealPath", contextRealPath); // 이미지경로 위하여 추가
		
		int totalCount = pcPrdPrcChgDao.selectExPrdPrcHstCount(searchMap);
		List<Map<String, Object>> list = pcPrdPrcChgDao.selectExPrdPrcHstList(searchMap);
		
		result.addDataSet("ds_output", list);
		result.addVariable("totalCount", totalCount);
		
        return result;
    }

}
