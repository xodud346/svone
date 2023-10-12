(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("R&D속성 상세 팝업");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,315);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"PRD_ATTR_CD\"/><Col id=\"PRNM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_master", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","157",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","260",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Div("div","20","48",null,"210","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("0px solid darkblue");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static29_00_00","1","6",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edtAttrCd","150","10","300","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00","0","6","140","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_text("R&D속성코드");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static07","1","68",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","68","140","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("4");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Radio("rdoUseYn","150","72","236","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_rowcount("1");
            obj.set_text("기본 배송지");
            obj.set_value("Y");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static29_00_00_00","1","37",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            this.div.addChild(obj.name, obj);

            obj = new Edit("PRNM","150","41","300","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_autoselect("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","37","140","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            obj.set_text("R&D속성명  <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static07_00","1","99",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","99","140","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_text("R&D속성사용 상품군수");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","1","130",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","0","130","140","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("12");
            obj.set_text("등록일");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","1","161",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","0","161","140","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("14");
            obj.set_text("최종수정일");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edtAttrCnt","150","103","300","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edtRegDtm","150","134","300","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edtUpdDtm","150","165","300","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static1","20","20","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("R&D속성 상세");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","0","20",null,null,"-1",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"0","20",null,"0","-1",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","15",null,null,"20","15","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","43",null,"10","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","15",null,null,"20","15","53",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","480","0","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","3","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            obj.set_text("수정");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,315,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","div.form.edtAttrCd","value","ds_master","PRD_ATTR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div.form.rdoUseYn","value","ds_master","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div.form.PRNM","value","ds_master","PRNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div.form.edtAttrCnt","value","ds_master","PRD_CLCD_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div.form.edtRegDtm","value","ds_master","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div.form.edtUpdDtm","value","ds_master","UPD_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_31.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_31.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_31.xfdl(R&D속성 상세 팝업)
        * 작 성			일 명: 나용철
        * 작 성	    	일 자: 2022/05/11
        * 변 경     	일 자:
        * 변 경			자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        this.fv_oApp     = nexacro.getApplication();	//application object
        this.lv_orgCd    = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        this.lv_btnChkYn = "";

        this.sOptinoArg1 = "";
        this.sOptinoArg2 = "";
        this.sParamArg1  = "";
        this.sParamArg2  = "";
        this.sParamArg3  = "";
        this.mallSprCd 	 = "20";
        this.totalCount  = 0;
        this.strKeyValue = "";
        /**********************************************************************
        	03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
        	//폼에 공통으로 로드시 사용하는 함수.
        	this.gfn_formOnLoad(this);
        	//사용자 초기화 함수
        	this.fn_formInit();
        };
        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };
        /**********************************************************************
        	04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
        	/******************* 기본셋팅 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp01))
        	{
        		 this.sOptinoArg1 = this.getOwnerFrame().pv_sOp01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp02))
        	{
        		 this.sOptinoArg2 = this.getOwnerFrame().pv_sOp02;
        	}

        	/******************* 넘어온 인자값 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal01))
        	{
        		 this.sParamArg1 = this.getOwnerFrame().pv_sVal01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal02))
        	{
        		 this.sParamArg2 = this.getOwnerFrame().pv_sVal02;
        	}


        	var strDs   = "ds_useYn|ds_rndPrdAuthCombo";		        // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd = "USE_YN|CHRPSN_TEAM_SPR_CD";           		// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb = "X|X";					   					// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn = "";											// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        	var svcId 	= "Init";

           // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
           // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.fn_CmmnMultiComboLoad(strDs
        							  , strLgcd
        							  , strComb
        							  , strOptn
        							  , svcId);
        };

        this.fn_PostformInit = function()
        {
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow,"CO_CD", 		 this.sParamArg1); 		// 회사코드
        	this.ds_search.setColumn(nRow,"PRD_ATTR_CD", this.sParamArg2); 		// 상품속성코드
        	this.div.form.PRNM.setFocus();

        	this.fn_Ret();
        };


        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	if(nErrorCode != 0)
        	{
        		if(nErrorCode == -200)
        		{
        			this.fn_alert("속성관리명이 중복되었습니다.","에러정보","","error");
        			this.div.form.PRNM.setFocus();
        		}
        		return false;
        	}else
        	{
        		/*sSvcId (Transaction Id)*/
        		switch(sSvcId)
        		{
        			case "Init":
        				this.fn_PostformInit();
        				break;
        			case "Ret":
        			    this.fn_postRet();
        				break;
        			case "Save":
        			    this.fn_PostSave();
        				break;

        			default:
        				break;
        		}
        	}
        };

        /**********************************************************************
        	05. 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_preRet = function()
        {
        	// 조회조건 셋팅
        	return true;
        };
        /**
         * 기능 : 화면조회 전 실행
         */
        this.fn_Ret = function()
        {
        	if(!this.fn_preRet())
        	{
        		return false;
        	}
        	var strSvc      = "Ret";
            var strUrl      = "/rd/attr-mng/select-attr-mng-dtl.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_master=ds_master";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        }

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_postRet = function()
        {

        	if(nexacro.toNumber(this.ds_master.getColumn(0,"PRD_CLCD_CNT")) > 0)
        	{
        		this.div.form.rdoUseYn.set_enable(false);
        	}

        	// RND화면권한제어 호출
        	this.fn_setRndUiAuthCtl();
        };

        /**
         * RND화면권한제어
         */
        this.fn_setRndUiAuthCtl = function()
        {
        	var strRndPrdAuth = this.ds_rndPrdAuthCombo.findRowExpr("COM_DTL_CD == '" + this.lv_orgCd + "' && USE_YN == 'Y'");

        	// RND상품담당권한 조직인 경우
        	if(strRndPrdAuth != -1)
        	{
        		this.lv_btnChkYn = "P";
        	}

        	// 화면권한 자가 아닐 경우 조회만 가능
        	if(this.gfn_isNull(this.lv_btnChkYn))
        	{
        		this.div.form.PRNM.set_readonly(true);
        		this.div.form.rdoUseYn.set_readonly(true);
        		this.btn_insert.set_visible(false);
        		this.btn_cancel.set_left(210);
        	}
        };
        /**********************************************************************
                06. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 버튼 클릭시
         */
        this.insert_btn_onclick = function(obj,e)
        {
        	this.fn_Save();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {

        	if(!this.gfn_dsIsUpdated(this.ds_master))
        	{
        		this.fn_alert("ERRC000035","저장정보","","question");           // 변경된 이력이 없습니다.!
        		return false;
        	}

        	 if(this.gfn_isNull(this.gfn_trim(this.div.form.PRNM.value)))
        	 {
        		this.fn_alert("ERRS000144","저장","R&D속성명 ","question");      // R&D속성명 (&1은(는) 필수입력사항입니다.)
        		this.div.form.PRNM.setFocus();
        		return false;
        	 }

             var result = this.fn_confirm( "ERRR000098", "저장","", "question" ); // 저장 하시겠습니까?
             if(result == 0)
             {
                 return false;
             }

        	 this.ds_search.setColumn(0,"PRNM",this.ds_master.getColumn(0,"PRNM"));
             return true;

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }


            var strSvc      = "Save";
            var strUrl      = "/rd/attr-mng/update-attr-mng.do";
            var strInDs     = "ds_search=ds_search ";
        	    strInDs    += "ds_master=ds_master:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**
         * 기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            var objRtnArr = new Array(2);
        	objRtnArr[0] = "SUCCESS";
        	objRtnArr[1] = this.strKeyValue;
        	this.close(objRtnArr.toString());

        };
        /**********************************************************************
        	07. 닫기버튼
        ***********************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        this.btn_clear_onclick = function(obj,e)
        {
        	this.close("EXIT");
        };

        /**********************************************************************
        	08.Get, Set Method
        ***********************************************************************/
         /**********************************************************************
        	09.기타 Control Event
        ***********************************************************************/




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_insert.addEventHandler("onclick",this.insert_btn_onclick,this);
            this.div.form.Static29_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div.form.Static29_00_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_RD_31.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
