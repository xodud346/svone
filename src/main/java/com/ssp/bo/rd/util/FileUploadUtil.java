package com.ssp.bo.rd.util;

import java.io.File;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.util.StringUtils;

import com.nexacro17.xapi.data.ColumnHeader;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.ssp.bo.rd.dao.FileUploadDowloadDao;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;


/**
 * 파일업로드 및 데이터셋 파일 정보 전송 공통 기능
 *
 * @author 오왕표
 *
 */
@Component
public class FileUploadUtil {

	 private static final Logger logger = LoggerFactory.getLogger(FileUploadUtil.class);

	 protected static SspPropertyService propertiesService;

	 private static FileUploadDowloadDao fileUploadDowloadDao;

	 @Autowired
	 void setSspPropertyService(SspPropertyService propertiesService) {
		 FileUploadUtil.propertiesService = propertiesService;
	 }

	 @Autowired
	 void setFileUploadDowloadDao(FileUploadDowloadDao fileUploadDowloadDao) {
		 FileUploadUtil.fileUploadDowloadDao = fileUploadDowloadDao;
	 }

	/**
     * 파일업로드 (fileUpload)
     * @param input
     * @return
     * @throws Exception
     */
    public static ArrayList<Map<String, Object>> fileUpload (HttpServletRequest request,HttpServletResponse response)  throws Exception {

    	// logger.debug("* ---------------------- 업로드 시작 ---------------------- * ");
    	Map<String, Object> paramMap = null;
    	int intSeq  = 1;

    	ArrayList<Map<String, Object>> returnList = new ArrayList<Map<String, Object>>();

		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
        Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();

        HttpPlatformRequest req = new HttpPlatformRequest(request);
		req.receiveData();

        String contextRealPath = propertiesService.getString("file.path.root");//request.getSession().getServletContext().getRealPath("/");
		String serverPath      = "/attachFile"; //request.getParameter("savePath");

        //현재 일자 가져오기
        LocalDate now = LocalDate.now();

        // 년월일
        String year = String.valueOf(now.getYear());
        String monthValue = String.format("%02d", now.getMonthValue());
        String dayOfMonth = String.format("%02d", now.getDayOfMonth());

        // 폴더명 추가
        serverPath = serverPath + "/" + year + "/" + monthValue + "/" + dayOfMonth + "/";

        int docRegSeq  = 0;
        String etcFds2 = StringUtil.getString(multipartRequest.getParameter("etcFds2"));

        // 키 세팅
        String docRegIdOrigin = StringUtil.getString(multipartRequest.getParameter("docRegId"));
        String pgmId          = StringUtil.getString(multipartRequest.getParameter("pgmId"));
        String docRegId;

        if(!Objects.equals(docRegIdOrigin,"") && !Objects.equals(docRegIdOrigin, "undefined")) {
            docRegId  = docRegIdOrigin;
        	docRegSeq = fileUploadDowloadDao.selectAttcFileDtlsPKey(docRegId);
        }
        else
        {
            docRegId = UUID.randomUUID().toString();
        }

        String savePath = contextRealPath + File.separator + serverPath;

		Set<String> keySet = fileMap.keySet();

        for (String uploadFileName : keySet) {

        	MultipartFile multipartFile = fileMap.get(uploadFileName);
            String originalFilename = multipartFile.getOriginalFilename();   // 업로드 파일명
            long orgFileSize = multipartFile.getSize();
            // logger.debug("파일업로드 ============ [" + originalFilename +"]");

            // 파일 확장자명
            String sFileExt = "";

    		int i = originalFilename.lastIndexOf('.');

    		if (i > 0)
    		{
    			sFileExt = originalFilename.substring(i+1);
    		}

    		// 물리적파일명
    		//String uniqueFileName = originalFilename + "."+ EgovFileTool.getDateWithMillisecond(); // 서버에 저장될 Unique한 파일명을 생성한다.
            String uniqueFileName = UUID.randomUUID() + "." + sFileExt;

			// 파일업로드경로가 존재하지 않을경우 생성한다.
			File fileUploadPath = new File(savePath);

			if(!fileUploadPath.exists()) {

				fileUploadPath.mkdirs();

				// logger.debug("업로드경로 존재여부 ====> ["+fileUploadPath.exists()+"]");
			} else {

				// logger.debug("업로드경로 존재여부 ====> ["+fileUploadPath.exists()+"]");
			}

			File serverFile = new File(savePath + "/" + uniqueFileName);

            multipartFile.transferTo(serverFile); // 파일을 해당경로로 업로드한다.

		    // =========================================================================================
		    // 파일이 업로드되고 해당경로 파일이 존재할때
            // =========================================================================================
		    if(serverFile.exists()) {

            	paramMap = new HashMap<String, Object>();

            	// =========================================================================================
				// FILE_ID 조회 OR FILE_ID 입력
            	// DB Table 저장예제
            	// =========================================================================================
            	paramMap.put("DOC_REG_ID",    docRegId);											//  문서등록ID
            	paramMap.put("DOC_REG_SEQ",   docRegSeq > 0 ? docRegSeq : intSeq);					//  파일일련번호
            	paramMap.put("ATFL_NM",       originalFilename);									// 	업로드파일명
            	paramMap.put("ORI_ATFL_NM",   serverFile.getName());								//  서버에 저장된 파일명
            	paramMap.put("ATFL_LEN",      orgFileSize);											//  파일사이즈
            	paramMap.put("ATFL_STOR_PATH",serverPath);											//  서버저장경로
            	paramMap.put("FILE_TYPE",     sFileExt);											//  파일 확장자명
            	paramMap.put("ETC_FDS_2",     etcFds2);												//  고정 픽셀 값

            	// logger.debug("파일업로드 paramMap =====> " + paramMap);
            	returnList.add(paramMap);
            }
		    intSeq++;
        }

		return returnList;
    }

	/**
	 * 파일업로드2 (fileUpload2)
	 *
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	public static ArrayList<Map<String, Object>> fileUpload2(HttpServletRequest request, HttpServletResponse response) throws Exception {

		// logger.debug("* ---------------------- 업로드 시작 ---------------------- * ");
		Map<String, Object> paramMap = null;
		int intSeq = 1;

		ArrayList<Map<String, Object>> returnList = new ArrayList<>();

		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();

		HttpPlatformRequest req = new HttpPlatformRequest(request);
		req.receiveData();

		String contextRealPath = propertiesService.getString("file.path.root");//request.getSession().getServletContext().getRealPath("/");
		String serverPath = "/attachFile";

		// 현재 일자 가져오기
		LocalDate now = LocalDate.now();

		// 년월일
		String year = String.valueOf(now.getYear());
		String monthValue = String.format("%02d", now.getMonthValue());
		String dayOfMonth = String.format("%02d", now.getDayOfMonth());

		// 폴더명 추가
		serverPath = serverPath + "/" + year + "/" + monthValue + "/" + dayOfMonth + "/";

		int docRegSeq = 0;
		String etcFds1 = StringUtil.getString(multipartRequest.getParameter("etcFds1"));

		// 키 세팅
		String docRegIdOrigin = StringUtil.getString(multipartRequest.getParameter("docRegId"));
		String docRegId;

		if (!Objects.equals(docRegIdOrigin, "") && !Objects.equals(docRegIdOrigin, "undefined")) {
			docRegId = docRegIdOrigin;
			docRegSeq = fileUploadDowloadDao.selectAttcFileDtlsPKey(docRegId);
		} else {
			docRegId = UUID.randomUUID().toString();
		}

		String savePath = contextRealPath + File.separator + serverPath;

		Set<String> keySet = fileMap.keySet();
		for (String uploadFileName : keySet) {

			MultipartFile multipartFile = fileMap.get(uploadFileName);
			String originalFilename = multipartFile.getOriginalFilename();   // 업로드 파일명
			long orgFileSize = multipartFile.getSize();

			// 파일 확장자명
			String sFileExt = "";
			int i = originalFilename.lastIndexOf('.');
			if (i > 0) {
				sFileExt = originalFilename.substring(i + 1);
			}

			// 물리적파일명
			String uniqueFileName = UUID.randomUUID() + "." + sFileExt;

			// 파일업로드경로가 존재하지 않을경우 생성한다.
			File fileUploadPath = new File(savePath);

			if (!fileUploadPath.exists()) {
				fileUploadPath.mkdirs();
			}

			File serverFile = new File(savePath + "/" + uniqueFileName);
			multipartFile.transferTo(serverFile); // 파일을 해당경로로 업로드한다.

			// =========================================================================================
			// 파일이 업로드되고 해당경로 파일이 존재할때
			// =========================================================================================
			if (serverFile.exists()) {
				paramMap = new HashMap<>();

				// =========================================================================================
				// FILE_ID 조회 OR FILE_ID 입력
				// DB Table 저장예제
				// =========================================================================================
				paramMap.put("DOC_REG_ID", docRegId);                               // 문서등록ID
				paramMap.put("DOC_REG_SEQ", docRegSeq > 0 ? docRegSeq : intSeq);	// 파일일련번호
				paramMap.put("ATFL_NM", originalFilename);                          // 업로드파일명
				paramMap.put("ORI_ATFL_NM", serverFile.getName());                  // 서버에 저장된 파일명
				paramMap.put("ATFL_LEN", orgFileSize);                              // 파일사이즈
				paramMap.put("ATFL_STOR_PATH", serverPath);                         // 서버저장경로
				paramMap.put("FILE_TYPE", sFileExt);                                // 파일 확장자명
				paramMap.put("ETC_FDS_1", etcFds1);                                 // 추가정보 ADD_OPTN_NO
				paramMap.put("ETC_FDS_2", ""); 	                                    //

				logger.debug("파일업로드 paramMap =====> {}", paramMap);
				returnList.add(paramMap);
			}
			intSeq++;
		}

		return returnList;
	}

	/**
     * 데이터셋 파일업로드 리턴 (fileDataSet)
     * @param input
     * @return
     * @throws Exception
     */
    public static void fileDataSet (ArrayList<Map<String, Object>> returnList, HttpServletResponse response)  throws Exception {

    	PlatformData resData         = new PlatformData();

    	List<HashMap<String, Object>> fileList = new ArrayList<>();

        // =========================================================================================
		//응답메세지 작성
		// =========================================================================================
		DataSet ds = new DataSet("dsFileUploadMFiles");
		ds.addColumn(new ColumnHeader("CHK",           DataTypes.STRING)); 	// CHK
		ds.addColumn(new ColumnHeader("DOC_REG_ID",    DataTypes.STRING)); 	// 문서등록ID
		ds.addColumn(new ColumnHeader("DOC_REG_SEQ",   DataTypes.STRING)); 	// 파일일련번호
		ds.addColumn(new ColumnHeader("ATFL_NM",       DataTypes.STRING)); 	// 업로드파일명
		ds.addColumn(new ColumnHeader("ORI_ATFL_NM",   DataTypes.STRING));	    // 서버에 저장된 파일명
		ds.addColumn(new ColumnHeader("ATFL_LEN",      DataTypes.LONG));		// 파일사이즈
		ds.addColumn(new ColumnHeader("ATFL_STOR_PATH",DataTypes.STRING));	    // 서버저장경로
		ds.addColumn(new ColumnHeader("FILE_TYPE",     DataTypes.STRING));	    // 파일확장자명
		ds.addColumn(new ColumnHeader("ETC_FDS_1",     DataTypes.STRING));	    // 파일사용유무 0:미사용 1:사용
		ds.addColumn(new ColumnHeader("ETC_FDS_2",     DataTypes.STRING));	    // 고정 픽셀 값

		for (int i = 0; i < returnList.size(); i++)
		{
			 Map<String, Object> map1 = (Map<String, Object>)returnList.get(i);
			// =========================================================================================
		 	// 업로드 성공시에 클라이언트로 Dataset Return !!!!!!
		 	// =========================================================================================
		 	int row = ds.newRow();

			ds.set(row, "CHK",           "0");						                            // CHK
			ds.set(row, "DOC_REG_ID",    map1.get("DOC_REG_ID").toString());					// 문서등록ID
			ds.set(row, "DOC_REG_SEQ",   map1.get("DOC_REG_SEQ").toString());					// 파일시퀀스
			ds.set(row, "ATFL_NM",       map1.get("ATFL_NM").toString());		                // 업로드파일명
			ds.set(row, "ORI_ATFL_NM",   map1.get("ORI_ATFL_NM").toString());		            // 서버에 저장된 파일명
			ds.set(row, "ATFL_LEN",      Long.parseLong(map1.get("ATFL_LEN").toString()));	    // 파일사이즈
			ds.set(row, "ATFL_STOR_PATH",map1.get("ATFL_STOR_PATH").toString());				// 서버저장경로
			ds.set(row, "FILE_TYPE",     map1.get("FILE_TYPE").toString());				        // 파일 확장자명
						
			//SSP-3514 이상민 : ETC_FDS_1 항목에 대한 NULL EXCEPTION 방지
			if (StringUtils.hasText((CharSequence) map1.get("ETC_FDS_1"))){				
					ds.set(row, "ETC_FDS_1",     map1.get("ETC_FDS_1").toString());	// 파일사용유무 0:미사용 1:사용
			}
			else{
				ds.set(row, "ETC_FDS_1",     "0");
			};
			ds.set(row, "ETC_FDS_2", StringUtil.isEmpty(map1.get("ETC_FDS_2").toString()) ? null : map1.get("ETC_FDS_2").toString());	// 고정 픽셀 값

			HashMap<String, Object> fileMap = new HashMap<>();

			fileMap.put("atflNm",      map1.get("ATFL_NM").toString());
            fileMap.put("oriAtflNm",   map1.get("ORI_ATFL_NM").toString());
            fileMap.put("atflLen",     Long.parseLong(map1.get("ATFL_LEN").toString()));
            fileMap.put("atflStorPath",map1.get("ATFL_STOR_PATH").toString());
            fileMap.put("storPlcSprCd","1");
            
            //SSP-3514 이상민 : ETC_FDS_1 항목에 대한 NULL EXCEPTION 방지
            if (StringUtils.hasText((CharSequence) map1.get("ETC_FDS_1"))){				
            	fileMap.put("etcFds1", StringUtil.isEmpty(map1.get("ETC_FDS_1").toString()) ? "0" : map1.get("ETC_FDS_1").toString());
			}
			else{
				fileMap.put("etcFds1","0");
			};
            fileMap.put("etcFds2",     StringUtil.isEmpty(map1.get("ETC_FDS_2").toString()) ? null : map1.get("ETC_FDS_2").toString());
            fileMap.put("docRegId",    map1.get("DOC_REG_ID").toString());
            fileMap.put("docRegSeq",   map1.get("DOC_REG_SEQ").toString());

            // 리스트 저장
            fileList.add(row, fileMap);
		}

		// 파일 저장 dao 호출
        int rtn = fileUploadDowloadDao.insertFileUploadDowload(fileList);

		resData.addDataSet(ds);
        HttpPlatformResponse res = new HttpPlatformResponse(response);
		res.setData(resData);
		res.sendData();
    }

}