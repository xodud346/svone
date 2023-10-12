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
            this.set_titletext("R&D구매담당자 상세");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"PRD_CLSF_CHRPSN_ID\"/><Col id=\"PRD_CLCD\"/><Col id=\"MNFR_NO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_master", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_USEYN\" type=\"STRING\" size=\"32\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"OLD_PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"OLD_PRD_CLSF_CHRPSN_USEYN\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_procSt", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_purgChrpsnPiCall", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRD_CLCD\"/><Col id=\"MNFR_NO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchChkYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MD_EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"MALL_SPR_CD\"/><Col id=\"MD_EMP_NO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_codeChkYn", this);
            obj._setContents("<ColumnInfo><Column id=\"MD_EMP_NO_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"MD_EMP_NO_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bg","0","22",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Div("div","20","80",null,"415","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","6",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00","0","6","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_text("상품군");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","67",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","139","68","160","30",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","67","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("4");
            obj.set_text("상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","0","98",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00","0","129",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00_00","0","160",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00_00_00","0","191",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00_00_00_00","0","222",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00_00_00_00_00","0","253",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00_00_00_00_00_00","0","284",null,"90","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("stc_purgChrpsn","0","98","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("12");
            obj.set_text("R&D 구매담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_purgChrpsnNm","244","102","184","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_purgChrpsnId","139","102","101","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("sta_sprCd","139","130",null,"30","20",null,null,null,null,null,this.div.form);
            obj.set_taborder("15");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","129","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("16");
            obj.set_text("담당자 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","160","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("17");
            obj.set_text("등록일");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","0","191","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("18");
            obj.set_text("등록자");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","0","222","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("19");
            obj.set_text("최종수정일");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","253","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("20");
            obj.set_text("최종수정자");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new TextArea("tae_reason","139","288",null,"82","10",null,null,null,null,null,this.div.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","0","284","130","90",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("22");
            obj.set_text("변경사유");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","0","37",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","0","37","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("24");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","139","10","611","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","139","41","611","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_regDtm","139","164","611","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_regpsnId","139","195","611","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_updDtm","139","226","611","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_updpsnId","139","257","611","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_purgChrpsnPopup","433","102","24","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_cancel","298",null,"100","32",null,"50",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","401",null,"100","32",null,"50",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_history_popup",null,"49","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("변경이력");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","160","212","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_procSt");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            obj.set_visible("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_02","20","20","300","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("R&D구매담당자 상세");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","3","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            obj.set_text("수정");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,590,this,function(p){});
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div.form.rdo_useYn","value","ds_master","PRD_CLSF_CHRPSN_USEYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div.form.edt_purgChrpsnId","value","ds_master","PRD_CLSF_CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div.form.edt_purgChrpsnNm","value","ds_master","PRD_CLSF_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Radio00","value","ds_master","PRD_CLSF_CHRPSN_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div.form.tae_reason","value","ds_master","UPD_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div.form.edt_prdClcd","value","ds_master","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div.form.edt_mnfrNm","value","ds_master","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div.form.edt_regDtm","value","ds_master","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div.form.edt_regpsnId","value","ds_master","REGPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div.form.edt_updDtm","value","ds_master","UPD_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div.form.edt_updpsnId","value","ds_master","UPDPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_36.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_36.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_36.xfdl(R&D구매담당자 상세 팝업)
        * 작 성			일 명: 손나라
        * 작 성	    	일 자: 2022/05/12
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
        this.lv_piCount     = "";
        this.lv_coCd        = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lv_orgCd       = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        this.lv_btnChkYn    = "";
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

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal03))
        	{
        		 this.sParamArg3 = this.getOwnerFrame().pv_sVal03;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal04))
        	{
        		 this.sParamArg4 = this.getOwnerFrame().pv_sVal04;
        	}


        	var strDs   = "ds_useYn|ds_procSt|ds_rndPrdAuthCombo";		        				// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd = "USE_YN|PRD_CLSF_CHRPSN_SPR_CD|CHRPSN_TEAM_SPR_CD";           		// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb = "X|X|X"; 											  					// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn = "";																	// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
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
        	this.ds_search.setColumn(nRow,"CO_CD", 		        this.sParamArg1); 		// 회사코드
        	this.ds_search.setColumn(nRow,"PRD_CLSF_CHRPSN_ID", this.sParamArg2); 		// 구매담당자ID
        	this.ds_search.setColumn(nRow,"PRD_CLCD"          , this.sParamArg3); 		// 카테고리CD
        	this.ds_search.setColumn(nRow,"MNFR_NO"           , this.sParamArg4); 		// 제조원NO


        	this.div.form.rdo_useYn.setFocus();

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
        			this.fn_alert("정담당자는 1명만 등록 가능합니다.","에러정보","","error");
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

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
            switch(strId)
            {
        		// 담당자 조회팝업 후처리
        		case "SSP_BO_PP_27" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.div.form.edt_purgChrpsnId.set_value(jsonData.OPRTR_ID.replace(/,\s*$/, ""));
        				this.div.form.edt_purgChrpsnNm.set_value(jsonData.OPRTR_NM.replace(/,\s*$/, ""));
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        			break;
        		case "SSP_BO_RD_56" :                         // 변경 이력 처리시
                    if(!this.gfn_isNull(strVal))
                    {
                        //일반
                        var sRtn = strVal.split(",");
        				if(sRtn[0] == "CLOSE")
                        {
                        }else if(sRtn[0] == "EXIT")
                        {
                        }else
        				{

        				}
                    }
        		    break;
                default:
                    break;
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
            var strUrl      = "/rd/purg-chrpsn-mng/select-purg-chrpsn-mng-dtl.do";
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
        	// 제조원 미존재하고, 상태가 사용이고, 카테고리 사용인 경우엔 상태값 변경 금지
        // 	if (
        // 		this.gfn_isNull(this.gfn_trim(this.ds_master.getColumn(0,"MNFR_NO")))
        // 		&& this.ds_master.getColumn(0,"USE_YN") == "Y"
        // 		&& this.ds_master.getColumn(0,"PRD_CLSF_CHRPSN_USEYN") == "Y"
        // 	) {
        // 		this.div.form.rdo_useYn.set_readonly(true);
        // 	} else {
        // 		this.div.form.rdo_useYn.set_readonly(false);
        // 	}

        	// 2023.05.08 이상민 : 구매담당자 구분코드가 정(10)인 경우, 수정하지 못하도록 함.
        	if ( this.ds_master.getColumn(0,"PRD_CLSF_CHRPSN_SPR_CD") == "10") {
         		this.Radio00.set_readonly(true);
         	} else {
         		this.Radio00.set_readonly(false);
         	}

        	// RND화면권한제어
        	this.fn_setRndUiAuthCtl();
        };

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
        	if(!this.gfn_dsIsUpdated(this.ds_master))
        	{
        		this.fn_alert("ERRC000035","저장정보","","question");           // 변경된 이력이 없습니다.!
        		return false;
        	}
        	if(this.gfn_isNull(this.div.form.tae_reason.value))
        	{
        		this.fn_alert("ERRS000144","저장","변경사유 ","question");      // R&D속성명 (&1은(는) 필수입력사항입니다.)
        		this.div.form.tae_reason.setFocus();
        		return false;
        	}

        	// R&D구매담당자 적합성 체크
        	if(!this.fn_codeChkYn())
        	{
        		return false;
        	}

        	// 구분(정:삭제처리불가, 부:삭제처리가능) 체크
        	if(
        		this.ds_master.getColumn(0, "PRD_CLSF_CHRPSN_SPR_CD") == "10"
        		&& this.ds_master.getColumn(0, "PRD_CLSF_CHRPSN_USEYN") == "N"
        	) {
        		this.fn_alert("ERRR000484", "저장", "구분", "question");      // 상품군 '정'담당자는 미사용 처리가 불가합니다.
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
            var strUrl      = "/rd/purg-chrpsn-mng/update-purg-chrpsn-mng.do";
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
        	this.ds_purgChrpsnPiCall.setColumn(0,"PRD_CLCD",this.ds_master.getColumn(0,"PRD_CLCD"));
        	this.ds_purgChrpsnPiCall.setColumn(0,"MNFR_NO", this.ds_master.getColumn(0,"MNFR_NO"));

            var strSvc      = "Ret";
            var strUrl      = "/rd/purg-chrpsn-mng/save-purg-chrpsn-pi-call.do";
            var strInDs     = "ds_purgChrpsnPiCall=ds_purgChrpsnPiCall";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;            //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

        // 	if(this.lv_piCount > 0)
        // 	{
        // 		this.fn_alert("ERRC000121","저장정보","","question"); // 정상적으로 처리되었습니다.

        		var objRtnArr = new Array(2);
        		objRtnArr[0] = "SUCCESS";
        		objRtnArr[1] = this.strKeyValue;
        		this.close(objRtnArr.toString());
        //	}
        };


        /**
         * R&D구매담당자 적합성 체크
         */
        this.fn_codeChkYn = function()
        {
        	this.ds_searchChkYn.clearData();
        	var nRow = this.ds_searchChkYn.addRow();

        	this.ds_searchChkYn.setColumn(nRow,"CO_CD",			this.lv_coCd);
        	this.ds_searchChkYn.setColumn(nRow,"MALL_SPR_CD",	this.mallSprCd);
        	this.ds_searchChkYn.setColumn(nRow,"MD_EMP_NO",	    this.gfn_trim(this.div.form.edt_purgChrpsnId.value));

        	var strSvc      = "CodeYn";
            var strUrl      = "/rd/purg-chrpsn-mng/select-code-chk-yn.do";
            var strInDs     = "ds_searchChkYn=ds_searchChkYn";
            var strOutDs    = "ds_codeChkYn=ds_codeChkYn";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

        	var strMdEmpNoYn    = this.ds_codeChkYn.getColumn(0,"MD_EMP_NO_YN");


        	// 구매담당자
        	if(strMdEmpNoYn == "N")
        	{
        		this.fn_alert("ERRR000174","저장정보","R&D구매담당자 코드","question"); // 존재하지 않는 &1 입니다.
        		this.div.form.edt_purgChrpsnId.setFocus();
        		return false;
        	}

        	return true;
        };
        /**********************************************************************
        	07. 닫기버튼
        ***********************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRN000053", "취소","", "question" ); // 취소 하시겠습니까?
            if(result == 1)
            {
        		this.close("CLOSE");
        	}
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRN000053", "취소","", "question" ); // 취소 하시겠습니까?
            if(result == 1)
            {
        		this.close("EXIT");
        	}
        };

        /**********************************************************************
        	08.Get, Set Method
        ***********************************************************************/
         /**********************************************************************
        	09.기타 Control Event
        ***********************************************************************/
        /**
         * RND화면권한제어
         */
        this.fn_setRndUiAuthCtl = function()
        {
        	var strRndPrdAuth = this.ds_rndPrdAuthCombo.findRowExpr("COM_DTL_CD == '" + this.lv_orgCd + "' && USE_YN == 'Y'");

        	// RND상품담당권한 슈퍼 조직인 경우
        	if(strRndPrdAuth != -1)
        	{
        		this.lv_btnChkYn = "P";
        	}

        	// 슈퍼권한 혹은 구매담당자 or 상품담당자가 아닐 경우 조회만 가능
        	if(this.gfn_isNull(this.lv_btnChkYn))
        	{
        		this.fn_compontAllControl();
        	}
        };

        this.fn_compontAllControl = function ()
        {
        	var btnEnableTreu   = {
        							btn_close         : this.btn_close
        						  , btn_cancel        : this.btn_cancel
        						  , btn_history_popup : this.btn_history_popup
        	                      };
        	var btnVisibleFalse = {
        							btn_save : this.btn_save
        	                      };

        	this.fn_componentInitViewControl(this,btnEnableTreu,btnVisibleFalse);

        	this.btn_cancel.set_left(365);
        };
        /***********************************************************************************************
        *  R&D구매담당자 시작
        /***********************************************************************************************/

        /**
         * 조회조건 담당자 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_btn_purgChrpsnPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div.form.edt_purgChrpsnId.value);
        	this.fn_setCallPopup01(sCodeId);
        };

        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div_edt_purgChrpsnId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div.form.edt_purgChrpsnNm.set_value("");
        	}
        };

        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.div_edt_purgChrpsnId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div.form.edt_purgChrpsnId.value);

        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{	if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup01(sCodeId);
        		}
        	}
        };
        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup01 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"EMP_NO",     sCodeId);
        		this.ds_input.setColumn(nRow,"CO_CD",	   this.coCd);
        		this.ds_input.setColumn(nRow,"ROW_COUNT",  1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/co/popup/select-operator-popup-list.do";
        		var strInDs  	= "ds_search=ds_input";                        // 물리적 생성 ds_search
        		var strOutDs 	= "ds_popupList=ds_output1";                   // 물리적 생성 ds_popupList
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    					       // 공백일시 기본 fn_callBack
        		var strASync    = false;								       // 생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);

        	}

        	if(this.ds_popupList.rowcount == 1)
        	{
        		this.ds_master.setColumn(this.ds_master.rowposition,"PRD_CLSF_CHRPSN_ID", this.ds_popupList.getColumn(0,"OPRTR_ID"));
        		this.ds_master.setColumn(this.ds_master.rowposition,"PRD_CLSF_CHRPSN_NM", this.ds_popupList.getColumn(0,"OPRTR_NM"));

        	} else
        	{
        		var objParam = {empNo: sCodeId
        	                  , coCd :this.lv_coCd};
        		 var options = { title        : this.div.form.stc_purgChrpsn.text };
        		this.gfn_openPopup( "SSP_BO_PP_27"
        	                      , "CO_POP::SSP_BO_PP_27.xfdl"
        					      , objParam
        						  , "fn_popupCallback"
        						  , options);
        	}
        };
        /***********************************************************************************************
        *  R&D구매담당자 종료
        /***********************************************************************************************/
        this.btn_history_popup_onclick = function(obj,e)
        {
        	var lv_sFlag01 			= "FORMAT01";						                     // GRID(그리드)에 formatid:포멧ID
        	var lv_sFlag02			= "TB_PR_PRD_CLSF_CHRPSN_INFO_HST";			             // 로그테이블 이름(담당자 로그-구매/상품담당자)
        	var lv_sValue01 		= this.ds_search.getColumn(0, "PRD_CLCD");	             // 상품분류코드
        	var lv_sValue02 		= this.ds_master.getColumn(0, "PRD_CLSF_CHRPSN_SPR_CD"); // 상품분류담당자ID
        	var lv_sValue03 		= this.ds_master.getColumn(0, "PRD_CLSF_CHRPSN_SEQ");    // 상품분류담당자순번
        	var lv_sValue04 		= this.ds_search.getColumn(0, "MNFR_NO");                // 제조원
        	var lv_sValue05		    = "";  	                        // 부모에서 넘어가는 파라미터(폼이름)

        	var sPopId 			= "SSP_BO_RD_56";
        	var sUrl 			= "RD_POP::SSP_BO_RD_56.xfdl";
        	var oArg 			= { pv_sOp01:lv_sFlag01      	  // GRID(그리드)에 formatid:포멧ID
        						  , pv_sOp02:lv_sFlag02       	  // 로그테이블 이름
        						  , pv_sVal01:lv_sValue01         // 파라미터1
        						  , pv_sVal02:lv_sValue02         // 파라미터2
        						  , pv_sVal03:lv_sValue03         // 파라미터3
        						  , pv_sVal04:lv_sValue04         // 파라미터4
        						  , pv_sVal05:lv_sValue05};       // 파라미터5
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {titlebar:"false"};

        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.div.form.rdo_useYn.addEventHandler("onitemchanged",this.div_rdo_useYn_onitemchanged,this);
            this.div.form.edt_purgChrpsnId.addEventHandler("oninput",this.div_edt_purgChrpsnId_oninput,this);
            this.div.form.edt_purgChrpsnId.addEventHandler("onkeyup",this.div_edt_purgChrpsnId_onkeyup,this);
            this.div.form.tae_reason.addEventHandler("onchanged",this.div_tae_reason_onchanged,this);
            this.div.form.btn_purgChrpsnPopup.addEventHandler("onclick",this.div_btn_purgChrpsnPopup_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_history_popup.addEventHandler("onclick",this.btn_history_popup_onclick,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
        };
        this.loadIncludeScript("SSP_BO_RD_36.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
