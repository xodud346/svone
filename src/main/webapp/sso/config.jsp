<%@ page
	import="sun.misc.*,
			java.util.*,
			java.math.*,
			java.net.*,
			com.initech.eam.nls.*,
			com.initech.eam.nls.CookieManager,
			com.initech.eam.api.*,
			com.initech.eam.base.*,
			com.initech.eam.nls.command.*,
			com.initech.eam.smartenforcer.*, 
			examples.api.*"
%>
<%! 
	/************************************************************************
	* 업무시스템 설정 사항 (업무 환경에 맞게 변경)
	*************************************************************************/
	// 아래의 이름에 해당하는 어플리케이션이 SSO에 자원으로 등록되어 있어야 함
	private String SERVICE_NAME = "SERVEONE_SSO";
	// 업무시스템 접속 URL(설명 : http://업무시스템도메인:서비스포트)
	private String SERVER_URL = "http://devad.serveonestore.com";
	// ASCP (업무시스템에 접근 시 SSO 인증 여부 체크 및 세션 처리
	private String ASCP_URL          
		= SERVER_URL + "/sso/login_exec.jsp"; 
	//기본값 유지 
	private String[] SKIP_URL
		= {"", "/", "/index.html", "/index.htm", "/index.jsp", "/index.asp"};

	/************************************************************************
	* SSO환경 설정 사항 (연동하고자 하는 서버타입에 맞게 아래 정보를 참조하여 변수값 구성하시기 바랍니다.)
	* SSO 개발환경
	NLS_URL - http://nssodev.serveone.net:9090
	ND_URL1 - http://nssodev.serveone.net:5480
	ND_URL2 - http://nssodev.serveone.net:5480
	SSO_DOMAIN - .serveone.net
	
	* SSO  운영환경
	NLS_URL - http://nsso.serveone.co.kr:6061
	ND_URL1 - http://nsso.serveone.co.kr:5480
	ND_URL2 - http://nsso.serveone.co.kr:5480
	SSO_DOMAIN - .serveone.co.kr	
		
	*************************************************************************/
	// SSO 통합 로그인페이지 접속 URL
	 private static String NLS_URL = "http://nssodev.serveonestore.com:9090";
	 // SSO 통합 로그인을 위해 NLS로 redirect할 전체 URL (fail-over는 L4 기준)
	 private static String NLS_LOGIN_URL
	  = NLS_URL +  "/nls/clientLogin.jsp";
	 // SSO 통합 로그아웃 URL
	 private static String NLS_LOGOUT_URL
	  = NLS_URL +  "/nls/logout.jsp";
	 // SSO 에러 페이지 URL
	 private static String NLS_ERROR_URL
	  = NLS_URL + "/nls/error.jsp";
	 // Nexess API가 사용할 Nexess Daemon의 주소
	 private static String ND_URL1 = "http://nssodev.serveonestore.com:5480";
	 private static String ND_URL2 = "http://nssodev.serveonestore.com:5480";
	 // 인증 타입 (ID/PW 방식 : 1)
	 private static String TOA = "1";
	 // 도메인 base (.initech.com)
	 private static String SSO_DOMAIN = ".serveonestore.com";

%>

<%!
	// EAM 데몬 접속
	public NXContext getContext()
	{
		NXContext context = null;
		try {
			List serverurlList = new ArrayList();
			serverurlList.add(ND_URL1); 
			serverurlList.add(ND_URL2);
			
			context = new NXContext(serverurlList);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return context;
	}

	// 통합 SSO 로그인페이지 이동
	public void goLoginPage(HttpServletResponse response, String uurl)
	throws Exception {
		CookieManager.addCookie(SECode.USER_URL, uurl, SSO_DOMAIN, response);
		CookieManager.addCookie(SECode.R_TOA, TOA, SSO_DOMAIN, response);
		response.sendRedirect(NLS_LOGIN_URL);
	}

	// SSO 에러페이지 URL
	public void goErrorPage(HttpServletResponse response, int error_code)
	throws Exception {
		CookieManager.removeNexessCookie(SSO_DOMAIN, response);
		response.sendRedirect(NLS_ERROR_URL + "?errorCode=" + error_code);
	}

	// 통합 SSO ID 조회 SSOTEST
	public String getSsoId(HttpServletRequest request) {
        String sso_id = null;
        CookieManager.setEncStatus(true);  //추가
        sso_id = CookieManager.getCookieValue(SECode.USER_ID, request); // SSOTEST
        return sso_id;
    }
	

	// 통합인증 세션을 체크 하기 위하여 사용되는 API
	public String getEamSessionCheck(HttpServletRequest request,HttpServletResponse response)
	{
		String retCode = "";
		NXContext context = null;
		try {
			context = getContext();
			NXNLSAPI nxNLSAPI = new NXNLSAPI(context);
			retCode = nxNLSAPI.readNexessCookie(request, response, 0, 0);
		} catch(Exception npe) {
			npe.printStackTrace();
		}
		return retCode;
	}


%>
