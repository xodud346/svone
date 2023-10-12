(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_LA_19");
            this.set_titletext("공용상품 영업지정판매가 등록");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,408);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_saveFileList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uploadResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_downLoad", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CTRY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_DSGN_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BSS_SALSPRC_USEYN\" type=\"STRING\" size=\"32\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_DSGN_SALSPRC_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_DSGN_SALSPRC_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_SALSPRC_ATFL_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SALSPRC_DSGN_RSN\" type=\"STRING\" size=\"32\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bg","0","22",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","181","61","605","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bzplc","12","61","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("사업장");
            obj.getSetter("uEssentiel").set("true");
            obj.set_usedecorate("false");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","186","66","103","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","295","65","216","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prd","12","92","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("상품");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","181","92","605","32",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","295","96","216","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","186","97","103","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mnfr","12","154","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_lwstPcprc","12","185","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("최저매입가");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_salsDsgnSalsprc","12","216","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("영업지정판매가");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_vldPerd","12","247","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("영업지정판매가 유효기간");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_salsprcDsgnRsn","12","278","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("판매가 지정사유");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_file","12","309","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("첨부서류");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec","12","123","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","181","123","605","32",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","181","154","605","32",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_02","181","185","605","32",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_03","181","216","605","32",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_04","181","247","605","32",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_05","181","278","605","32",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_06","181","309","605","32",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_orgplc","398","154","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_exptPrfrt","398","185","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("예상매익률");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bssSalsprc","398","216","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("기준판매가");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bzplcPopup","edt_bzplcNm:5","65","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("btn_WF_search02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdPopup","edt_prdNm:5","97","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_search02");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_salsDsgnSalsprc","186","220","174","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_limitbymask("both");
            obj.set_format("#,###,###,###,###,###.#000");
            obj.set_clipmode("excludespace");
            obj.set_type("number");
            obj.set_displaynulltext("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","edt_salsDsgnSalsprc:4","225","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("KRW");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_bssSalsprc","670","222","128","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("기준판매가 적용");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_salsprcDsgnRsn","187","282","592","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","330","251","9","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_vldPerdDtStr","186","251","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_vldPerdDtEnd","343","251","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_02","20","20","300","36",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("공용상품 영업지정판매가 등록");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","50",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","343",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","403","354","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","333","354",null,"32","btn_save:4",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","0","388",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_reprSpecNm","187","127","591","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mnfrNm","187","157","201","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("stc_lwstPcprcVal","187","190","201","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("stc_orgplcNm","577","157","201","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("stc_exptPrfrtNm","577","190","201","23",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_01","577","220","81","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName","187","314","244","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file","437","314","77","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("파일 등록");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","522","317","290","19",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","816","317","98","19",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("FileDownload");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileId","930","313","207","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_enable("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,408,this,function(p){});
            obj.set_description("공용상품 영업지정판매가 등록");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_bzplcNm","value","ds_master","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_prdNm","value","ds_master","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_fileId","value","ds_master","SALS_SALSPRC_ATFL_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_bzplcId","value","ds_master","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_prdId","value","ds_master","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","stc_reprSpecNm","text","ds_master","ATTR_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","stc_mnfrNm","text","ds_master","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","stc_orgplcNm","text","ds_master","CTRY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cal_vldPerdDtStr","value","ds_master","SALS_DSGN_SALSPRC_STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cal_vldPerdDtEnd","value","ds_master","SALS_DSGN_SALSPRC_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_salsprcDsgnRsn","value","ds_master","SALSPRC_DSGN_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_fileName","value","ds_master","ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_salsDsgnSalsprc","value","ds_master","SALS_DSGN_SALSPRC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_master");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_LA_19.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_LA_19.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_LA_19.xfdl(R&D 공용상품 영업지정판매가 등록 팝업)
        * 작 성			일 명: 손나라
        * 작 성	    	일 자: 2022/05/24
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
        this.fv_oApp                = nexacro.getApplication();	//application object
        this.sOptinoArg1;
        this.sOptinoArg2;
        this.sParamArg1;
        this.sParamArg2;
        this.sParamArg3;
        this.sParamArg4;
        this.mallSprCd 		= "20";
        this.totalCount 	= 0;
        this.strKeyValue 	= "";
        this.lv_coCd        = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
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
        	// 로컬 로그인 사용 않할시
        	this.fn_setLocalUserCreate(true);
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

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal03))
        	{
        		 this.sParamArg3 = this.getOwnerFrame().pv_sVal03;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal04))
        	{
        		 this.sParamArg4 = this.getOwnerFrame().pv_sVal04;
        	}

        	this.fn_PostformInit();

        // 	var strDs   = "ds_procSt";		        // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        // 	var strLgcd = "PRD_CLSF_CHRPSN_SPR_CD";           		// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        // 	var strComb = "X";   					// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        // 	var strOptn = "";						// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        // 	var svcId 	= "Init";

           // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
           // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
        //     this.fn_CmmnMultiComboLoad(strDs
        // 							  , strLgcd
        // 							  , strComb
        // 							  , strOptn
        // 							  , svcId);
        };

        this.fn_PostformInit = function()
        {
        	var nRow = this.ds_master.addRow();
        	this.ds_master.setColumn(nRow,"CO_CD",this.lv_coCd);
        	this.fn_setResetBtnCall();
        };

        /**
        * 화면 최초 초기화 작업 함수
        */
        this.fn_setResetBtnCall = function()
        {
            // 일자 날짜 초기화 Setting
            this.cal_vldPerdDtStr.set_value(new nexacro.Date());
        	this.cal_vldPerdDtEnd.set_value('9999-12-31');
        }


        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	if(nErrorCode != 0)
        	{
        		this.fn_alert(sErrorMsg,"에러정보","","error");
        		if(nErrorCode == -100)
        		{
        			this.edt_prdViewId.setFocus();
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
        			case "Save":
        			    this.fn_PostSave();
        				break;

        			default:
        				break;
        		}
        	}
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
            switch(strId)
            {
                // 사업장 조회팝업 후처리
        		case "btn_bzplcPopup" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.edt_bzplcId.set_value(jsonData.BZPLC_ID);
        				this.edt_bzplcNm.set_value(jsonData.BZPLC_NM);
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        		  	break;
        		// 상품 조회팝업 후처리
        		case "btn_prdPopup" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.edt_prdId.set_value(jsonData.PRD_ID);
        				this.edt_prdNm.set_value(jsonData.PRD_NM);
        				this.stc_reprSpecNm.set_text(jsonData.ATTR_VAL);
        				this.stc_mnfrNm.set_text('('+ jsonData.MNFR_NO+')'+jsonData.MNFR_NM);
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        			break;
                default:
                    break;
            }
        };

        /**********************************************************************
        	05. 조회 함수 선언
        ***********************************************************************/
        /**********************************************************************
                06. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 버튼 클릭시
         */
        this.btn_save_onclick = function(obj,e)
        {
        	this.fn_Save();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	 // 사업장 필수 체크
         	 if(this.gfn_isNull(this.edt_bzplcId.value) )
         	 {
        		this.fn_alert("ERRS000144","저장","사업장 ","question");      // 사업장 (&1은(는) 필수입력사항입니다.)
          		return false;
         	 }
        	 // 상품 필수 체크
        	 if(this.gfn_isNull(this.edt_prdId.value) )
         	 {
        		this.fn_alert("ERRS000144","저장","상품 ","question");      // 상품 (&1은(는) 필수입력사항입니다.)
          		return false;
         	 }
        	 // 기준판매가 적용 체크 해제일 경우
        	 if ( !this.chk_bssSalsprc.value ) {

        		// 영업지정판매가 필수 체크
        		if(this.gfn_isNull(this.edt_salsDsgnSalsprc.value) )
        		{
        			this.fn_alert("ERRS000144","저장","영업지정판매가 ","question");      // 영업지정판매가 (&1은(는) 필수입력사항입니다.)
        			return false;
        		}
        		// 영업지정판매가 유효기간 일자 체크
        		if(!this.fn_getDefaultDateChk(this.cal_vldPerdDtStr.value,this.cal_vldPerdDtEnd.value,"영업지정판매가 유효기간"))
        		{
        			this.cal_vldPerdDtStr.setFocus();
        			return false;
        		}
        	}
        	// 판매가 지정사유 필수 체크
        	 if(this.gfn_isNull(this.edt_salsprcDsgnRsn.value) )
         	 {
        		this.fn_alert("ERRS000144","저장","판매가 지정사유 ","question");      // 판매가 지정사유 (&1은(는) 필수입력사항입니다.)
          		return false;
         	 }

             var result = this.fn_confirm( "ERRR000098", "저장","", "question" ); // 저장 하시겠습니까?
             if(result == 0)
             {
                 return false;
             }

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
            var strUrl      = "/rd/pub-prd-sals-dsgn-salsprc-mng/insert-pub-prd-sals-dsgn-salsprc-mng.do";
            var strInDs     = "ds_master=ds_master:u"
        	                + " ds_saveFileList=ds_saveFileList:u"
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
        	var result = this.fn_confirm( "ERRN000053", "취소","", "question" ); // 취소 하시겠습니까?
            if(result == 1)
            {
        		this.fn_saveMultiFileDelUpdate("CLOSE");
        	}
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRN000053", "취소","", "question" ); // 취소 하시겠습니까?
            if(result == 1)
            {
        		this.fn_saveMultiFileDelUpdate("EXIT");
        	}
        };

        /**********************************************************************
        	08.Get, Set Method
        ***********************************************************************/
         /**********************************************************************
        	09.기타 Control Event
        ***********************************************************************/
        /**
         * 조회조건 사업장 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_bzplcPopup_onclick = function(obj,e)
        {
        	var params  = { coCd : this.lv_coCd };
        	var options = { title  : "사업장" };

        	// 사업장
        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_22.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 조회조건 상품 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_prdPopup_onclick = function(obj,e)
        {
        	var params  = { coCd : this.lv_coCd,prdId : this.edt_prdId.value, mallSprCd : this.mallSprCd, pubOnlySprCd : "P" };
            var options = { title  : "상품" };

            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_38.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 파일 첨부파일 업로드 버튼 클릭시 이벤트 발생 처리
         */
        this.btn_file_onclick = function(obj,e)
        {

        	if(obj.text == "파일 등록")
        	{
        		this.FileUploadSingle.deleteItem(0);
        		this.FileUploadSingle.appendItem();
        		this.FileUploadSingle.filefindbuttons[0].click();
        	}
        	else
        	{
        		var result = this.fn_confirm( "ERRR000134", "파일 삭제","", "question" ); // 등록된 파일을 삭제하시겠습니까?

        		if(result)
        		{
        			var delRow = this.ds_saveFileList.findRow("ETC_FDS_2","90");
        			this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");
        			this.edt_fileName.set_value("");
        			this.edt_fileId.set_value("");
        			this.edt_fileName_onchanged(this.edt_fileName,new nexacro.ChangeEventInfo());
        		}
        	}
        };

        /**
         * 이미지등록 아이템 값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.FileUploadSingle_onitemchanged = function(obj,e)
        {
        	var sCompValue = this.FileUploadSingle.value; // 파일 업로드 로컬패스(전용브라우저 가능)
        	var start = sCompValue.lastIndexOf(".");	   						// [object Grid]

        	if( start > -1)
        	{
        		sCompValue = sCompValue.substr(start + 1, sCompValue.length);  // 확장자명
        	}

        	if(!(sCompValue.toUpperCase() == "PPTX" || sCompValue.toUpperCase() == "PPT"
        	  || sCompValue.toUpperCase() == "DOCX" || sCompValue.toUpperCase() == "DOC"
        	  || sCompValue.toUpperCase() == "XLS"  || sCompValue.toUpperCase() == "XLSX"
        	  || sCompValue.toUpperCase() == "TEXT" || sCompValue.toUpperCase() == "ZIP"
        	  || sCompValue.toUpperCase() == "TXT"))
        	{
        		this.fn_alert("파일형식이 아닙니다.","파일 정보","","information");  // 파일형식이 아닙니다.
        		return false;
        	}

        	var sFilePath = this.FileUploadSingle.value;  // 파이로 로컬풀패스
        	var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;    // 파일이름 시작위치
        	var sFileName = sFilePath.substr(dirExpt);                          // 파일명
        	var docRegId  = this.gfn_nvl(this.ds_master.getColumn(0,"SALS_SALSPRC_ATFL_ID"),"");
        		docRegId  = docRegId != "" ? docRegId : this.gfn_nvl(this.ds_uploadResult.getColumn(0,"DOC_REG_ID"),"");

        	var objEnv  = nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcUrl"].url;               			        	 // web서버 URL ex)http://localhost:8080/
        	var strUrl  = svcUrl + "rd/file-upload-dowload/save-file-upload-dowload.do?";    // BLOB변환 && 파일업로드 기능
        		strUrl += "&docRegId="+ docRegId;
        		strUrl += "&etcFds2=" + "90";

        	var bSucc = this.FileUploadSingle.upload(strUrl); 		 // 파일 업로드
        };

        /**
         * 이미지 첨부파일 업로드 성공후 onsuccess 이벤트 발생 처리
         */
        this.FileUploadSingle_onsuccess = function(obj,e)
        {
        	this.ds_uploadResult.assign(e.datasets[0]);
        	this.ds_uploadResult.clear();
        	this.ds_uploadResult.copyData(e.datasets[0]);

        	var delRow = this.ds_saveFileList.findRow("ETC_FDS_2","90");
        	this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");

        	var nRow = this.ds_saveFileList.addRow();
        	this.ds_saveFileList.copyRow(nRow,this.ds_uploadResult);         	// 싱글 파일 패스

        	// 최초 파일 등록시 상품문서등록ID Set
        	if(this.gfn_nvl(this.ds_master.getColumn(0,"SALS_SALSPRC_ATFL_ID"),"") == "")
        	{
        		this.ds_master.setColumn(0,"SALS_SALSPRC_ATFL_ID",this.ds_uploadResult.getColumn(0,"DOC_REG_ID"));
        		this.ds_master.setColumn(0,"ATFL_NM",this.ds_uploadResult.getColumn(0,"ATFL_NM"));
        	}

        	this.edt_fileName_onchanged(this.edt_fileName,new nexacro.ChangeEventInfo());

        };

        /**
         * 파일 첨부파일 변경시 onchanged 이벤트 발생 처리
         */
        this.edt_fileName_onchanged = function(obj,e)
        {
        	this["btn_file"].set_text("파일 등록");

        	if(obj.value != "")
        	{
        		this["btn_file"].set_text("삭제");
        	}
        };

        /**
         * 첨부파일 다운로드 클릭시 oneditclick  이벤트 발생 처리
         */
        this.fileName_oneditclick = function(obj,e)
        {
        	if(this.gfn_nvl(this.edt_fileId.value,"") != "")
        	{
        		this.ds_uploadResult.clearData();
        		var nRow = this.ds_uploadResult.addRow();
        		this.ds_uploadResult.copyRow(nRow,this.ds_saveFileList,0);

        		this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.FileDownload);
        	}
        };

        this.chk_bssSalsprc_onchanged = function(obj,e)
        {
        	if ( this.chk_bssSalsprc.value) {
        		this.ds_master.setColumn(0,"BSS_SALSPRC_USEYN","Y");
        		this.edt_salsDsgnSalsprc.set_readonly(true);
        		this.cal_vldPerdDtStr.set_readonly(true);
        		this.cal_vldPerdDtEnd.set_readonly(true);
        	} else {
        		this.ds_master.setColumn(0,"BSS_SALSPRC_USEYN","N");
        		this.edt_salsDsgnSalsprc.set_readonly(false);
        		this.cal_vldPerdDtStr.set_readonly(false);
        		this.cal_vldPerdDtEnd.set_readonly(false);
        	}
        };

        this.edt_bzplcId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.edt_bzplcNm.set_value("");
        	}
        };

        this.edt_prdId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.edt_prdNm.set_value("");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.edt_bzplcId.addEventHandler("oninput",this.edt_bzplcId_oninput,this);
            this.edt_prdId.addEventHandler("oninput",this.edt_prdId_oninput,this);
            this.btn_bzplcPopup.addEventHandler("onclick",this.btn_bzplcPopup_onclick,this);
            this.btn_prdPopup.addEventHandler("onclick",this.btn_prdPopup_onclick,this);
            this.edt_salsDsgnSalsprc.addEventHandler("onchanged",this.edt_salsDsgnSalsprc_onchanged,this);
            this.chk_bssSalsprc.addEventHandler("onchanged",this.chk_bssSalsprc_onchanged,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_file.addEventHandler("onclick",this.btn_file_onclick,this);
            this.FileUploadSingle.addEventHandler("onitemchanged",this.FileUploadSingle_onitemchanged,this);
            this.FileUploadSingle.addEventHandler("onsuccess",this.FileUploadSingle_onsuccess,this);
            this.FileDownload.addEventHandler("onerror",this.FileDownload_onerror,this);
            this.FileDownload.addEventHandler("onsuccess",this.FileDownload_onsuccess,this);
        };
        this.loadIncludeScript("SSP_BO_LA_19.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
