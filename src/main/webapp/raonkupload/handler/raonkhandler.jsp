<%-- <%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> --%>
<%@page import="java.util.*,java.io.*,java.nio.file.attribute.*,java.nio.file.*,java.time.*"%>
<%@page import="java.nio.file.*"%>
<%@page import="java.sql.*"%>
<%@page import="org.slf4j.Logger"%>
<%@page import="org.slf4j.LoggerFactory"%>
<%@page import="org.springframework.beans.factory.annotation.Autowired"%>
<%@page import="org.springframework.web.context.support.WebApplicationContextUtils"%>
<%@page import="org.springframework.web.context.WebApplicationContext"%>
<%@page import="org.codehaus.jackson.map.ObjectMapper"%>
<%@page import="com.raonwiz.kupload.common.ImageApi"%>
<%@page import="com.raonwiz.kupload.event.*"%>
<%@page import="com.raonwiz.kupload.RAONKHandler"%>
<%@page import="com.raonwiz.kupload.util.EventVo"%>
<%@page import="com.raonwiz.kupload.util.RAONKParameterVo"%>
<%@page import="com.ssp.core.co.util.SspContainer"%>
<%@page import="com.ssp.core.common.property.SspPropertyService"%>
<%@page import="com.ssp.core.cc.CcPiUtils"%>
<%@page import="com.ssp.bo.rd.service.MsdsMngService"%>
<%!
private final Logger logger = LoggerFactory.getLogger(this.getClass());

@Autowired private SspPropertyService s;

@Autowired private WebApplicationContext wac;
@Autowired private MsdsMngService msdsMngService;
//@Autowired private MsdsMngComponent msdsMngComponent;
//@Autowired private SqlSession sqlSession;

private void logReqParams(HttpServletRequest request) {
	
	Enumeration e = request.getParameterNames();
	while ( e.hasMoreElements() ){
		String name = (String) e.nextElement();
		String[] values = request.getParameterValues(name);
		for (String value : values) {
			logger.info(name + "=" + value);
		}
	}
}
%>
<%
	response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
	response.setHeader("Access-Control-Allow-Headers", "content-type, RAONK-Encoded");
	response.setHeader("Access-Control-Allow-Origin", "*");

	out.clear(); // Servlet으로 handler 작업을 하시려면 제거해주세요.

	request.setCharacterEncoding("UTF-8");

	SspPropertyService s = SspContainer.getSspPropertyService();

	RAONKHandler upload = new RAONKHandler();

	//디버깅
	//Log Type 설명

	//- C : 일반로그 출력(System.out.println 로그 출력)
	RAONKParameterVo parameterVo = new RAONKParameterVo();
	parameterVo.setIsDebugMode(true);
	parameterVo.setLogType("C");
	parameterVo.setLogLevel("ERROR");
	upload.settingVo.setDebugMode(parameterVo);

	//- L : Log4j 로그 출력
	// JDK 1.5 이하인 경우
	// 1. Log4j 로그 출력을 위한 모듈 추가 (/handler/JAVA/jdk1.5-/log4j-1.2.17.jar)
	// 2. Log4j 로그 출력을 위한 설정파일 추가 (/handler/JAVA/jdk1.5-/ 폴더의 log4j.properties 파일을 WEB-INF/classes에 적용)
	// 3. 기존 설정파일이 존재할 경우 /handler/JAVA/jdk1.5-/ 폴더의 log4j.properties 파일 내용 중 "# K Upload Log" 항목을 기존 설정파일에 적용
	// 4. 기존 설정파일의 위치가 WEB-INF/classes/log4j.properties 경로가 아닐 경우 parameterVo.setLogConfigPath("...")에 해당 경로 설정
	// JDK 1.6 인 경우
	// 1. Log4j 로그 출력을 위한 모듈 추가 (/handler/JAVA/jdk1.6/log4j-api-2.3.2.jar, log4j-core-2.3.2.jar, log4j-1.2-api-2.3.2.jar)
	// 2. Log4j 로그 출력을 위한 설정파일 추가 (/handler/JAVA/jdk1.6/ 폴더의 log4j2.xml 파일을 WEB-INF/classes에 적용)
	// 3. 기존 설정파일이 존재할 경우 /handler/JAVA/jdk1.6/ 폴더의 log4j2.xml 파일 내용 중 Appenders 내의 항목들과 Logger를 기존 설정파일에 적용
	// JDK 1.7 인 경우
	// 1. Log4j 로그 출력을 위한 모듈 추가 (/handler/JAVA/jdk1.7/log4j-api-2.12.4.jar, log4j-core-2.12.4.jar, log4j-1.2-api-2.12.4.jar)
	// 2. Log4j 로그 출력을 위한 설정파일 추가 (/handler/JAVA/jdk1.7/ 폴더의 log4j2.xml 파일을 WEB-INF/classes에 적용)
	// 3. 기존 설정파일이 존재할 경우 /handler/JAVA/jdk1.7/ 폴더의 log4j2.xml 파일 내용 중 Appenders 내의 항목들과 Logger를 기존 설정파일에 적용
	// JDK 1.8 이상인 경우
	// 1. Log4j 로그 출력을 위한 모듈 추가 (/handler/JAVA/jdk1.8+/log4j-api-2.17.1.jar, log4j-core-2.17.1.jar, log4j-1.2-api-2.17.1.jar)
	// 2. Log4j 로그 출력을 위한 설정파일 추가 (/handler/JAVA/jdk1.8+/ 폴더의 log4j2.xml 파일을 WEB-INF/classes에 적용)
	// 3. 기존 설정파일이 존재할 경우 /handler/JAVA/jdk1.8+/ 폴더의 log4j2.xml 파일 내용 중 Appenders 내의 항목들과 Logger를 기존 설정파일에 적용
	//RAONKParameterVo parameterVo = new RAONKParameterVo();
	//parameterVo.setIsDebugMode(true);
	//parameterVo.setLogType("L");
	//upload.settingVo.setDebugMode(parameterVo);

	///////////////////////////////
	//        이벤트를 등록 처리          //
	///////////////////////////////
	EventClass event = new EventClass();

	//-------------------- [설정방법1] 물리적 경로 설정 시작 --------------------//
	//해당 설정은 PhysicalPath를 RAONK Upload 제품폴더\raonkuploaddata\ 를 저장 Root 경로로 설정하는 내용입니다.
	String strPathChar = com.raonwiz.kupload.util.StaticVariables.strPathChar;
	String strRootFolder = request.getServletPath();
	strRootFolder = strRootFolder.substring(0,strRootFolder.lastIndexOf("/"));
	strRootFolder = request.getSession().getServletContext().getRealPath(strRootFolder.substring(0,strRootFolder.lastIndexOf("/")));
	final String rootCnfg = s.getString("file.path.root");
	final String rootPath = rootCnfg + "/attachFile";

	//실제 업로드 할 기본경로를 물리적 경로로 설정합니다.
	upload.settingVo.setPhysicalPath(rootPath + "/msds");

	//임시파일 물리적 경로설정 ( setPhysicalPath에 설정된 경로 + raonktemp )
	upload.settingVo.setTempPath(rootPath + strPathChar + "msds_temp");

	// ***************보안 설정 : 업로드 가능한 경로 설정 - 이외의 경로로 업로드 불가능***************
	//String[] arrAllowUploadDirectoryPath = { rootPath + "/msds" };
	String[] arrAllowUploadDirectoryPath = { rootPath + "/msds" };
	upload.settingVo.setAllowUploadDirectoryPath(arrAllowUploadDirectoryPath);

	// ***************보안 설정 : 다운로드 가능한 경로 설정 - 이외의 경로에서 다운로드 불가능***************
	// context.Request.MapPath("/") 값은 샘플 동작을 위한 설정으로 실제 적용 시 제외하시면 됩니다.
	String[] arrAllowDownloadDirectoryPath = { rootPath };
	upload.settingVo.setAllowDownloadDirectoryPath(arrAllowDownloadDirectoryPath);

	//-------------------- [설정방법1] 물리적 경로 설정 끝 --------------------//

	//위에 설정된 임시파일 물리적 경로에 불필요한 파일을 삭제 처리하는 설정 (단위: 일)
	upload.settingVo.setGarbageCleanDay(2);


/*
	event.addBeforeUploadEventListener(new BeforeUploadEventListener() {
		public void beforeUploadEvent(EventVo eventVo) {
			//파일을 업로드하기 전에 발생하는 이벤트 입니다.
			//파일에 대한 저장 경로를 변경해야 하는 경우 사용합니다.

			//HttpServletRequest request = eventVo.getRequest(); //Request Value
			//HttpServletResponse response = eventVo.getResponse(); //Response Value
			//String strNewFileLocation = eventVo.getNewFileLocation(); //NewFileLocation Value
			//String strCustomValue = eventVo.getCustomValue(); //CustomValue
			//String strFileIndex = eventVo.getFileIndex(); //FileIndex Value - 마지막 파일은 index 뒤에 z가 붙습니다.
			//String strOriginalFileName = eventVo.getOriginalFileName(); //Original File Name
			//String strGuid = eventVo.getGuid(); //Guid

			//String[] aryParameterValue = eventVo.getUpload().getParameterValue("ParameterName"); //클라이언트에서 AddFormData를 이용하여 추가된 파라미터를 얻습니다.

			//eventVo.setNewFileLocation(strNewFileLocation); //Change NewFileLocation Value

			//eventVo.setCustomError("사용자오류");
			//eventVo.setCustomError("999", "사용자오류"); //Error Code를 설정하실 때에는 900이상의 3자리로 설정
		}
	});
*/

/* 2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리 */
event.addAfterUploadEventListener(new AfterUploadEventListener() {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	private final ObjectMapper oMapper = new ObjectMapper();
	
	private Map<String, Object> cnvtJson2Map(String json) throws Exception {
		Map<String, Object> mo = new HashMap<String, Object>(), mi = null;
	
		mi = oMapper.readValue(json, HashMap.class);
		mo.put("O_RTN_CD", null);
		mo.put("O_RTN_CD", null);
		
		/* row.customValue: {
		  "coCd": "1000",
		  "productId": "7000221619",
		  "partnerId": "92712",
		  "msdsFnlChgDt": "20190202",
		  "etcFds": "95",
		  "msdsUrl": "",
		  "msdsFile": "C:\\jwork\\docs\\01. SSP 2023\\2023-02-01 MSDS 관리\\01.MSDS샘플파일.png",
		  "locAttcFile": "C:\\jwork\\docs\\01. SSP 2023\\2023-02-01 MSDS 관리\\02.래터파일샘플.png",
		  "locAtflFnlChgDt": "20220201",
		  "srvonCertYn": "",
		  "srvonCertFnlChgDt": "",
		  "trId": "4d683fd3-67b2-4ad8-b23a-57a3499a21f1"
		} */
		mo.put("I_USER_ID"              ,        "BO_MSDS_LOC"       );
		mo.put("I_CO_CD"                , mi.get("coCd"             ));
		mo.put("I_PRD_ID"               , mi.get("productId"        ));
		mo.put("I_CPRTCP_ID"            , mi.get("partnerId"        ));
		mo.put("I_MSDS_FNL_CHG_DT"      , mi.get("msdsFnlChgDt"     ));
		mo.put("I_ATCH_TP_CD"           , mi.get("etcFds"           ));
		mo.put("I_RND_MSDS_URL"         , mi.get("msdsUrl"          ));
		mo.put("I_ORI_ATFL_NM"          , mi.get("oriAtflNm"        ));
		mo.put("I_ATFL_STOR_PATH"       , mi.get("atflStorPath"     ));
		mo.put("I_ATFL_LEN"             , mi.get("atflLen"          ));
		mo.put("I_ATFL_NM"              , mi.get("msdsFileNm"       ));
		mo.put("I_LOC_ATTC_FILENM"      , mi.get("locAttcFilenm"    ));
		mo.put("I_LOC_ATTC_FILEPATH"    , mi.get("locAttcFilepath"  ));
		mo.put("I_LOC_ATTC_FILESIZE"    , mi.get("locAttcFilesize"  ));
		mo.put("I_LOC_ATTC_FILE_ORI_NM" , mi.get("locAttcFileOriNm" ));
		mo.put("I_LOC_ATFL_FNL_CHG_DT"  , mi.get("locAtflFnlChgDt"  ));
		mo.put("I_SRVON_CERT_YN"        , mi.get("srvonCertYn"      ));
		mo.put("I_SRVON_CERT_FNL_CHG_DT", mi.get("srvonCertFnlChgDt"));

		mo.putAll(mi);
		
		return mo;
	}

	public void afterUploadEvent(EventVo eventVo) {
		try {
			//파일을 업로드한 후에 발생하는 이벤트 입니다.
			//업로드된 파일을 변경하는 경우 사용됩니다.(DRM처리, Image API 처리)
			//경로가 변경된 경우 Response되는 파일경로도 변경해야 합니다.(ResponseFileServerPath)

			String cvJson=eventVo.getCustomValue();
			logger.info(" eventVo.getCustomValue() >> "+ eventVo.getCustomValue());
			if (cvJson==null || "".equals(cvJson .trim())) { return; }

			Map<String, Object> map = cnvtJson2Map(cvJson);

			String etcFds = (String) map.get("etcFds");
			String trId   = (String) map.get("trId");
			String fName  = null;
			String fPath  = null; Path p = Paths.get(eventVo.getNewFileLocation()); fPath = (p.getParent().toString().replaceAll("\\\\", "/") + "/").replace(rootCnfg, "");
			String fOrnm  = p.getFileName().toString();
			String fSize  = String.valueOf(Files.size(p));

			if ("95".equals(etcFds)) {
				map.put("I_ATFL_STOR_PATH"       , fPath         );  fName = (String) map.get("msdsFileNm"       );
				map.put("I_ORI_ATFL_NM"          , fOrnm         );
				map.put("I_ATFL_LEN"             , fSize         );
				map.put("I_ATFL_NM"              , fName         );

				logger.info("eventVo.getCustomValue() ---- MSDS --> [trId:"+ map.get("trId") +"][etcFds:"+ map.get("etcFds") +"][fName:"+ map.get("I_ATFL_NM"             ) +"][fPath:"+ map.get("I_ATFL_STOR_PATH"   ) +"][fOrnm:"+ map.get("I_ORI_ATFL_NM"         ) +"][fSize:"+ map.get("I_ATFL_LEN"            ) +"]");
			} else
			if ("9A".equals(etcFds)) {
				map.put("I_LOC_ATTC_FILEPATH"    , fPath         );  fName = (String) map.get("locAttcFilenm"    );
				map.put("I_LOC_ATTC_FILE_ORI_NM" , fOrnm         );
				map.put("I_LOC_ATTC_FILESIZE"    , fSize         );
				//map.put("I_LOC_ATTC_FILENM"      , fName         );

				logger.info("eventVo.getCustomValue() ---- LOC  --> [trId:"+ map.get("trId") +"][etcFds:"+ map.get("etcFds") +"][fName:"+ map.get("I_LOC_ATTC_FILENM"     ) +"][fPath:"+ map.get("I_LOC_ATTC_FILEPATH") +"][fOrnm:"+ map.get("I_LOC_ATTC_FILE_ORI_NM") +"][fSize:"+ map.get("I_LOC_ATTC_FILESIZE"   ) +"]");
			}
				logger.info("eventVo.getCustomValue() ------------> "+ CcPiUtils.toJsonString(map));

			// msdsMngComponent.saveSpRdCprtrMsdsLocMultiUpld(request, map);  // 이거로 실행하니까 Servlet 오류가 발생하여 변경

			String rtnCd  = (String) map.get("O_RTN_CD" );
			String rtnMsg = (String) map.get("O_RTN_MSG");
			logger.info("Data Process => [rtnCd:"+ rtnCd +", rtnMsg:"+ rtnMsg +"]");

		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
	}
});
/* /2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리 */
/*
	event.addAfterUploadEventListener(new AfterUploadEventListener() {
		public void afterUploadEvent(EventVo eventVo) {
			//파일을 업로드한 후에 발생하는 이벤트 입니다.
			//업로드된 파일을 변경하는 경우 사용됩니다.(DRM처리, Image API 처리)
			//경로가 변경된 경우 Response되는 파일경로도 변경해야 합니다.(ResponseFileServerPath)

			//HttpServletRequest request = eventVo.getRequest(); //Request Value
			//HttpServletResponse response = eventVo.getResponse(); //Response Value
			//String strNewFileLocation = eventVo.getNewFileLocation(); //NewFileLocation Value
			//String strResponseFileServerPath = eventVo.getResponseFileServerPath(); //ResponseFileServerPath Value
			//String strCustomValue = eventVo.getCustomValue(); //CustomValue
			//String strFileIndex = eventVo.getFileIndex(); //FileIndex Value - 마지막 파일은 index 뒤에 z가 붙습니다.
			//String strOriginalFileName = eventVo.getOriginalFileName(); //Original File Name
			//String strGuid = eventVo.getGuid(); //Guid
			//String strHashValue = eventVo.getHashValue(); //File Hash(MD5) 값 추출(Client UseHashExtract 1 설정시)

			//String[] aryParameterValue = eventVo.getUpload().getParameterValue("ParameterName"); //클라이언트에서 AddFormData를 이용하여 추가된 파라미터를 얻습니다.

			//eventVo.setResponseFileServerPath(strResponseFileServerPath); //Change ResponseFileServerPath Value
			//eventVo.setResponseCustomValue("ResponseCustomValue"); //Set ResponseCustomValue

			//eventVo.setCustomError("사용자오류");
			//eventVo.setCustomError("999", "사용자오류"); //Error Code를 설정하실 때에는 900이상의 3자리로 설정

			//이미지 처리 관련 API (SMB Protocol 설정 후 업로드시 사용이 불가능합니다.)
			//try {
				//float fJpegQuality = 100; // JPG 품질 (1 ~ 100)
				//boolean bAntialiasing = false; // 이미지 안티앨리어싱 활성화

				//String strTempFilePath = "";
				//String strSourceFileFullPath = strNewFileLocation;

				//동일 폴더에 이미지 썸네일 생성하기
				//strTempFilePath = ImageApi.makeThumbnail(strSourceFileFullPath, "", 200, 0, true, fJpegQuality, bAntialiasing);

				//특정위치에 이미지 썸네일 생성하기
				//String targetFileFullPath = "c:\\temp\\test_thumb.jpg";
				//strTempFilePath = ImageApi.makeThumbnailEX(strSourceFileFullPath, targetFileFullPath, 200, 0, false, fJpegQuality, bAntialiasing);

				//이미지 포멧 변경
				//strTempFilePath = ImageApi.convertImageFormat(strSourceFileFullPath, "", "png", false, false, fJpegQuality, bAntialiasing);

				//이미지 크기 변환
				//ImageApi.convertImageSize(strSourceFileFullPath, 500, 30, fJpegQuality, bAntialiasing);

				//비율로 이미지 크기 변환
				//ImageApi.convertImageSizeByPercent(strSourceFileFullPath, 50, fJpegQuality, bAntialiasing);

				//이미지 회전
				//ImageApi.rotate(strSourceFileFullPath, 90, fJpegQuality);

				//이미지 워터마크
				//String strWaterMarkFilePath = "c:\\temp\\raonk_logo.png";
				//ImageApi.setImageWaterMark(strSourceFileFullPath, strWaterMarkFilePath, "TOP", 10, "RIGHT", 10, 0, fJpegQuality);

				//텍스트 워터마크
				//com.raonwiz.kupload.util.TextWaterMarkVo txtWaterMarkVo = new com.raonwiz.kupload.util.TextWaterMarkVo("RAONK Upload", "굴림", 12, "#FF00FF");
				//ImageApi.setTextWaterMark(strSourceFileFullPath, txtWaterMarkVo, "TOP", 10, "CENTER", 10, 0, 0, fJpegQuality);

				//이미지 크기
				//java.awt.Dimension size = ImageApi.getImageSize(strSourceFileFullPath);
				//int _width = size.width;
				//int _height = size.height;

				//EXIF 추출 (Exif standard 2.2, JEITA CP-2451)
				//jdk 1.6 이상에서만 사용가능합니다.
				//기능 활성화를 원하시면 1.6버전으로 컴파일된 jar를 고객센터로 요청하십시오.
				//com.raonwiz.kupload.common.ImageExif exif = new com.raonwiz.kupload.common.ImageExif();
				//com.raonwiz.kupload.common.exif.ExifEntity exifData = exif.getExifData(strSourceFileFullPath);

				//동일 폴더에 잘라낸 이미지 생성하기 (좌,우,상,하)
				//strTempFilePath = ImageApi.makeCropImage(strSourceFileFullPath, "", 10, 10, 10, 10, true, fJpegQuality);

				//특정위치에 잘라낸 이미지 생성하기 (좌,우,상,하)
				//String targetFileFullPath = "c:\\temp\\test_crop.jpg";
				//strTempFilePath = ImageApi.makeCropImageEX(strSourceFileFullPath, targetFileFullPath, 10, 10, 10, 10, false, fJpegQuality);
			//} catch (Exception ex) {
				//String errorMsg = ex.getMessage();
			//}


			Connection conn = null;

			// 디렉토리 권한 변경
			try {
				String customValue[] = eventVo.getCustomValue().substring(37).split("\\|");
				String trId = eventVo.getCustomValue().substring(0,36);

				Path p = Paths.get(eventVo.getNewFileLocation());
				String fname = p.getFileName().toString();
				String fpath = p.getParent().toString().replaceAll("\\\\", "/") + "/";
					   fpath = fpath.replace(rootCnfg, "");
				String flength = String.valueOf(Files.size(p));
				String t[] = customValue[6].split("\\\\");

				/ * Runtime.getRuntime().exec("chmod -R 755 " + upload.settingVo.getPhysicalPath()); * /

				String dburl = "jdbc:oracle:thin:@//10.59.132.165:1521/SSPDBDEV_PDB1.testinternalsub.serveonedrvpn.oraclevcn.com";
				String dbid = "SSP_APP";
				String dbpw = "SspApp11!!";

				Class.forName("oracle.jdbc.driver.OracleDriver");

				conn = DriverManager.getConnection(dburl, dbid, dbpw);
				String sql = "{call SP_RD_CPRTCP_MSDS_MUTI_FILE_UPLD (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) }";
				CallableStatement cs = conn.prepareCall(sql);
				cs.registerOutParameter(1, java.sql.Types.VARCHAR);  //리턴 코드 S : 성공 , E : 오류
				cs.registerOutParameter(2, java.sql.Types.VARCHAR);  //실패시 메시지
				cs.setString(3, customValue[0]);  //회사코드 필수
                cs.setString(4, customValue[1]);  //상품ID
                cs.setString(5, customValue[2]);  //협력사ID
                cs.setString(6, customValue[3]);  //최정개정일
                cs.setString(7, customValue[4]);  //유형
                cs.setString(8, customValue[5]);  //MSDS URL
                cs.setString(9, fname);  //원본첨부파일명
                cs.setString(10, fpath);  //파일저장경로
                cs.setString(11, flength);  //첨부파일저장경로
                cs.setString(12, t[t.length - 1]); //실제 파일명
                cs.setString(13, "SYSTEM");  //수정자 아이디

                String sqlf = "{call SP_RD_CPRTCP_MSDS_MUTI_FILE_UPLD (%d, %d, '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s') }";
                System.out.println(String.format(sqlf,
                                  java.sql.Types.VARCHAR
                                , java.sql.Types.VARCHAR
                                , customValue[0]
                                , customValue[1]
                                , customValue[2]
                                , customValue[3]
                                , customValue[4]
                                , customValue[5]
                                , fname
                                , fpath
                                , flength
                                , t[t.length - 1]
                                , "SYSTEM"
                ));

				cs.execute();

				String rtnCd = cs.getString(1);
				String rtnMsg = cs.getString(2);

				cs.close();
				conn.close();

				String rtnStr = rtnCd + "|" + rtnMsg;
				System.out.println("DATA STR ====> " + rtnStr);
			} catch(ClassNotFoundException ex) {
				System.err.println("Error loading driver");
				 String errorMsg = ex.getMessage();
			} catch (Exception ex) {
				System.out.println(ex);
				String errorMsg = ex.getMessage();
			}
		}
	});
*/



	event.addBeforeDownloadEventListener(new BeforeDownloadEventListener() {
		public void beforeDownloadEvent(EventVo eventVo) {
			//파일을 다운로드하기 전에 발생하는 이벤트 입니다.
			//파일에 대한 다운로드 경로를 변경하거나 서버에서 구해지는 Stream 다운로드로 처리할 경우 사용합니다.

			HttpServletRequest request = eventVo.getRequest(); //Request Value
			HttpServletResponse response = eventVo.getResponse(); //Response Value
			String[] aryDownloadFilePath = eventVo.getDownloadFilePath(); //DownloadFilePath Value
			String[] aryDownloadCustomValue = eventVo.getDownloadCustomValue();  //DownloadCustomValue

			//eventVo.setDownloadFilePath(aryDownloadFilePath); //Change DownloadFilePath Value

			//eventVo.setCustomError("사용자오류");
			//eventVo.setCustomError("999", "사용자오류"); //Error Code를 설정하실 때에는 900이상의 3자리로 설정

			///////////////////////////////////////////////////////////////////////////
			//Stream 다운로드 처리 시 해당 Stream을 이용하여 특정 위치에 파일을 쓰고,//
			//해당 파일 경로를 SetDownloadFilePath에 설정하시면 됩니다.              //
			///////////////////////////////////////////////////////////////////////////
			//예)
			// String[] aryDownloadFilePath = eventVo.getDownloadFilePath();
			int iDownloadFilePathLength = aryDownloadFilePath.length;
			for (int i = 0; i < iDownloadFilePathLength; i++) {
			    //Stream을 이용하여 파일을 쓴 후 해당 파일의 경로를 strDownloadFilePath 변수에 설정
			    String strDownloadFilePath = aryDownloadFilePath[i];
			    aryDownloadFilePath[i] = rootCnfg + strDownloadFilePath;

			    System.out.println(aryDownloadFilePath[i]);
			}
			eventVo.setDownloadFilePath(aryDownloadFilePath);
			///////////////////////////////////////////////////////////////////////////
		}
	});


	/*
	event.addAfterDownloadEventListener(new AfterDownloadEventListener() {
		public void afterDownloadEvent(EventVo eventVo) {
			//파일을 다운로드한 후에 발생하는 이벤트 입니다.
			//다운로드 받을 파일에 대한 정보를 얻은 후 해당 정보에 대하여 로그출력을 하려는 경우 사용합니다.

			//HttpServletRequest request = eventVo.getRequest(); //Request Value
			//HttpServletResponse response = eventVo.getResponse(); //Response Value
			//String[] aryDownloadFilePath = eventVo.getDownloadFilePath(); //DownloadFilePath Value
			//String[] aryDownloadCustomValue = eventVo.getDownloadCustomValue();  //DownloadCustomValue

			//////////////////////////////////////////////////////////////////////////////////
			//Stream 다운로드 처리 시 특정 위치에 써진 파일을 다음과 같이 제거하시면 됩니다.//
			//////////////////////////////////////////////////////////////////////////////////
			//예)
			// String[] aryDownloadFilePath = eventVo.getDownloadFilePath();
			// int iDownloadFilePathLength = aryDownloadFilePath.length;
			// for (int i = 0; i < iDownloadFilePathLength; i++) {
			//     new java.io.File(aryDownloadFilePath[i]).delete();
			// }
			//////////////////////////////////////////////////////////////////////////////////
		}
	});
	*/

	/*
	event.addLoggerEventListener(new LoggerEventListener() {
		public void loggerEvent(EventVo eventVo) {
			//로그 출력 전에 발생하는 이벤트 입니다.
			//로그 출력 전에 로그 정보를 변경하거나 로그 출력 여부를 변경하려는 경우 사용합니다.

			String strDateTime = eventVo.getDatetime(); //DateTime Value
			String strPathInfo = eventVo.getPathInfo(); //PathInfo Value
			String strLogMode = eventVo.getLogMode(); //LogMode Value (FATAL,ERROR,WARN,INFO,DEBUG)
			String strLogText = eventVo.getLogText(); //LogText Value

			eventVo.setDatetime(strDateTime); //Change DateTime Value
			eventVo.setPathInfo(strPathInfo); //Change PathInfo Value
			eventVo.setLogMode(strLogMode); //Change LogMode Value (FATAL,ERROR,WARN,INFO,DEBUG)
			eventVo.setLogText(strLogText); //Change LogText Value
			eventVo.setLogWriteFlag(true); // 로그 출력여부 설정
		}
	});
	*/

	///////////////////////////////
	//         서버모듈 설정              //
	///////////////////////////////

	//실제 업로드 할 기본경로 설정 (가상경로와 물리적 경로로 설정 가능)
	//폴더명 제일 뒤에 .과 공백이 있다면 제거하시고 설정해 주세요.(운영체제에서 지원되지 않는 문자열입니다.)

	//-------------------- [설정방법1] 물리적 경로 설정 시작 --------------------//

	//해당 설정은 PhysicalPath를 RAONK Upload 제품폴더\raonkuploaddata\ 를 저장 Root 경로로 설정하는 내용입니다.
	//String strPathChar = com.raonwiz.kupload.util.StaticVariables.strPathChar;
	//String strRootFolder = request.getServletPath();
	//strRootFolder = strRootFolder.substring(0,strRootFolder.lastIndexOf("/"));
	//strRootFolder = request.getSession().getServletContext().getRealPath(strRootFolder.substring(0,strRootFolder.lastIndexOf("/")));
	//String rootPath = "/mnt/ServeOneFileStorage/SSP/SSP_DEV/attach";

	//upload.settingVo.setPhysicalPath(rootPath + "/msds");

	//임시파일 물리적 경로설정 ( setPhysicalPath에 설정된 경로 + raonktemp )
	//upload.settingVo.setTempPath(rootPath + strPathChar + "raonktemp");

	// ***************보안 설정 : 업로드 가능한 경로 설정 - 이외의 경로로 업로드 불가능***************
	//String[] arrAllowUploadDirectoryPath = { rootPath + "/msds" };
	//upload.settingVo.setAllowUploadDirectoryPath(arrAllowUploadDirectoryPath);

	// ***************보안 설정 : 다운로드 가능한 경로 설정 - 이외의 경로에서 다운로드 불가능***************
	// context.Request.MapPath("/") 값은 샘플 동작을 위한 설정으로 실제 적용 시 제외하시면 됩니다.
	//String[] arrAllowDownloadDirectoryPath = { rootPath + "/msds" };
	//upload.settingVo.setAllowDownloadDirectoryPath(arrAllowDownloadDirectoryPath);

	//-------------------- [설정방법1] 물리적 경로 설정 끝 --------------------//


	//위에 설정된 임시파일 물리적 경로에 불필요한 파일을 삭제 처리하는 설정 (단위: 일)
	//upload.settingVo.setGarbageCleanDay(2);

	///////////////////////////////
	//      SMB Protocol 설정        //
	///////////////////////////////

	//1. SMB Protocol 연결 설정
	//SMB Protocol 사용을 위한 연결설정을 해야 합니다.
	//upload.settingVo.setNtlmAuthentication("smb://SMB Domain 또는 IP", "ID", "Password");

	//2. 파일 업로드시 사용되는 Temp Path 설정
	//파일 업로드시 사용되는 Temp Path를 SMB Protocol의 경로로 설정해야 합니다.
	//upload.settingVo.setTempPath("smb://SMB Domain 또는 IP/temp ");

	//3. 파일이 업로드 될 최종 Path 설정
	//파일이 업로드 될 최종 Path를 SMB Protocol의 경로로 설정해야 합니다.
	//upload.settingVo.setPhysicalPath("smb://SMB Domain 또는 IP/savePath");

	///////////////////////////////

	//환경설정파일 물리적 폴더 (서버 환경설정 파일을 사용할 경우)
	//upload.settingVo.setConfigPhysicalPath("D:\\raonkuploaddata\\config");

	//서버 구성정보중 Context Path가 있다면, 아래와 같이 설정해주세요. (SetVirtualPath 사용시만 필요)
	//upload.settingVo.setContextPath("Context Path");

	//***************보안 설정 : 업로드 제한 확장자 설정***************
	//적용에 필요 없는 확장자는 제외하시면 됩니다.
	//setUploadCheckFileExtension 1번째 Parameter : 0-제한,1-허용 , 2번째 Parameter : 확장자 리스트 Array Type
	String[] arrUploadCheckFileExtension = {"exe", "bat", "sh", "jsp", "php"};
	upload.settingVo.setUploadCheckFileExtension(0, arrUploadCheckFileExtension);
	String result = upload.Process(request, response, application, event);

	if(!result.equals("")) {
		out.print(result);
	}

	// Servlet으로 handler 작업을 하시려면 다음과 같이 작성해 주세요.
	// Servlet으로 구성하실 때 해당 Function의 Return Type은 void로 선언 후 return 되는 값은 반드시 없어야합니다.
	/*
	// 만일 getServletContext()가 undefined 이면 request.getSession().getServletContext(); 으로 하시면 됩니다.
	ServletContext application = getServletContext();

	String result = "";
	try {
		result = upload.Process(request, response, application, event);
	} catch (Exception e) {
		e.printStackTrace();
	}

	if(!result.equals("")) {
		response.setContentType("text/html");
		ServletOutputStream out = response.getOutputStream();
		out.print(result);
		out.close();
	}
	*/
%>
