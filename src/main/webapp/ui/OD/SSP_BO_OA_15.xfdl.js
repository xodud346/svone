(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_02_02");
            this.set_titletext("결재/발주");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"APRVR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APRVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_MEMO_CTS\" type=\"STRING\" size=\"2000\"/><Column id=\"DLGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DLGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JBPOS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APRVR_NM_REF\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"APRVR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APRVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_MEMO_CTS\" type=\"STRING\" size=\"2000\"/><Column id=\"DLGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DLGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JBPOS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCoCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TOTAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_CLSF_CD\">APRV_STEP_CD</Col><Col id=\"IS_TOTAL\"/></Row><Row><Col id=\"COM_CLSF_CD\">APRV_STATS_CD</Col><Col id=\"IS_TOTAL\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comAprvSeq", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comAprvStats", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comAprvSeq2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_forServer01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IUD_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_MEMO_CTS\" type=\"STRING\" size=\"2000\"/><Column id=\"APRV_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"APRVR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromServer01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"loginId\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IUD_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_GB\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_ADJ_STATS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_forServer02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IUD_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_MEMO_CTS\" type=\"STRING\" size=\"2000\"/><Column id=\"APRV_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"APRVR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromServer02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"loginId\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IUD_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_GB\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_ADJ_STATS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromServer03", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,null,"0","90",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","20",null,"45%","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo","0","10","200","20",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("■ 결재 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_emailSndHstStl",null,"0","102","30","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("E-mail 발송이력");
            obj.set_cssclass("btn_WF_default");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_emailSndStl",null,"0","102","30","btn_emailSndHstStl:4",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("E-mail 발송");
            obj.set_cssclass("btn_WF_default");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Grid("grid_stlInfo","0","btn_emailSndHstStl:10",null,null,"0","0",null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_list01");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"300\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"단계\"/><Cell col=\"1\" colspan=\"2\" text=\"회원 ID\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"3\" text=\"직급\"/><Cell col=\"4\" text=\"이름\"/><Cell col=\"5\" text=\"위임자 ID\"/><Cell col=\"6\" text=\"위임자명\"/><Cell col=\"7\" text=\"상태코드\"/><Cell col=\"8\" text=\"상태\"/><Cell col=\"9\" text=\"승인 일시\"/><Cell col=\"10\" text=\"메모\"/><Cell col=\"11\" text=\"삭제\"/></Band><Band id=\"body\"><Cell displaytype=\"combocontrol\" combodataset=\"ds_comAprvSeq\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" text=\"bind:APRV_SEQ\" edittype=\"expr:APRV_STATS_CD==&quot;02&quot; ? &quot;readonly&quot; : &quot;combo&quot;\"/><Cell col=\"1\" text=\"bind:APRVR_ID\" expandshow=\"hide\"/><Cell col=\"2\" edittype=\"none\" displaytype=\"normal\" autosizecol=\"default\" expandshow=\"show\" expandsize=\"32\"/><Cell col=\"3\" text=\"bind:JBPOS_NM\"/><Cell col=\"4\" text=\"bind:APRVR_NM\"/><Cell col=\"5\" text=\"bind:DLGR_ID\"/><Cell col=\"6\" text=\"bind:DLGR_NM\"/><Cell col=\"7\" text=\"bind:APRV_STATS_CD\"/><Cell col=\"8\" text=\"bind:COM_DTL_CD_NM\"/><Cell col=\"9\" text=\"bind:APRV_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" text=\"bind:APRV_MEMO_CTS\"/><Cell col=\"11\" edittype=\"expr:APRV_STATS_CD==&quot;02&quot; ? &quot;none&quot; : &quot;button&quot;\" displaytype=\"expr:APRV_STATS_CD==&quot;02&quot; ? &quot;none&quot; : &quot;buttoncontrol&quot;\" text=\"삭제\"/></Band></Format></Formats>");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_addRowStl",null,"0","102","30","btn_emailSndStl:4",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("행추가");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","0","Div01:30",null,null,"0","45",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo","0","10","200","20",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("■ 발주 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_emailSndHstOrd",null,"0","102","30","106",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("E-mail 발송이력");
            obj.set_cssclass("btn_WF_default");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_emailSndOrd",null,"0","102","30","btn_emailSndHstOrd:4",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("E-mail 발송");
            obj.set_cssclass("btn_WF_default");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Grid("grid_ordInfo","0","btn_emailSndHstOrd:10",null,null,"0","0",null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_list02");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_selecttype("area");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"440\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"단계\"/><Cell col=\"1\" colspan=\"2\" text=\"회원 ID\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"3\" text=\"직급\"/><Cell col=\"4\" text=\"이름\"/><Cell col=\"5\" text=\"상태\"/><Cell col=\"6\" text=\"승인 일시\"/><Cell col=\"7\" text=\"메모\"/><Cell col=\"8\" text=\"삭제\"/></Band><Band id=\"body\"><Cell displaytype=\"combocontrol\" edittype=\"expr:APRV_STATS_CD==&quot;02&quot; ? &quot;readonly&quot; : &quot;combo&quot;\" text=\"bind:APRV_SEQ\" combodataset=\"ds_comAprvSeq2\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"1\" text=\"bind:APRVR_ID\"/><Cell col=\"2\" edittype=\"none\" displaytype=\"normal\" autosizecol=\"default\" expandshow=\"show\" expandsize=\"32\"/><Cell col=\"3\" text=\"bind:JBPOS_NM\"/><Cell col=\"4\" text=\"bind:APRVR_NM\"/><Cell col=\"5\" text=\"bind:COM_DTL_CD_NM\"/><Cell col=\"6\" text=\"bind:APRV_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:APRV_MEMO_CTS\"/><Cell col=\"8\" edittype=\"button\" displaytype=\"buttoncontrol\" text=\"삭제\"/></Band></Format></Formats>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_addRowOrd",null,"0","102","30","0",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("행추가");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"30","30","10","1296",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"50","30","10","1296",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"32","0","5",null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0",null,"129","32",null,"5",null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("참조자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_aprvrNm","139",null,null,"22","10","10",null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("등록된 문구가 있는 경우 등록 문구 출력");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_cancel","45.66%","Div00:30","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_cancel:10","Div00:30","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edt_aprvrNm","value","ds_list01","APRVR_NM_REF");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_15.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_15.xfdl", function() {
        // 주문관리 상세 - 결재/발주

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        this.odrNo = "";
        this.odrItmNo = "";
        this.bzplcId = "";
        this.odrpsnId = "";


        // 결재/발주 - 요청/응답
        this.requestStl = false;
        this.requestOrd = false;
        this.responseStl = false;
        this.responseOrd = false;

        this.fv_preAprvSeq = "";	// 결재정보에서 "단계"를 선택했을 때 이전 "단계"의 정보

        this.moveType = {UNKNOWN:-1, FIRST:0, PREVIEW:1, NEXT:2, LAST:3, PREVIEW_TAB:10, NEXT_TAB:11};
        this.moveStep = this.moveType.UNKNOWN;

        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_02_02_oninit = function(obj,e)
        {
        	this.addEventHandlerLookup( "onload", "fn_afterFormLoad", this.parent.parent.parent);
        };

        this.SSP_BO_OA_15_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        	this.fn_odCommLoading();
        	this.copyPaste.addGrid(this.Div00.form.Div01.form.grid_stlInfo);
        	this.copyPaste.addGrid(this.Div00.form.Div00.form.grid_ordInfo);

        	this.fn_searchCommonCode();
        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_02_02_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function() {
        	var sSvcId = "selectApprOrdInfo";
        	var sUrl = "/od/oderlist/selectApprOrdInfo.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1 ds_list02=ds_output2";
        	//var outDs = "ds_list01=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        // 공통코드
        this.fn_searchCommonCode = function() {
        	var sSvcId = "selectCommonCodeList";
        	var sUrl = "/od/odrPopup/selectCommonCodeList.do";
        	var inDs = "ds_search=ds_searchCoCd";
        	var outDs = "ds_comCd=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectApprOrdInfo") {
        		trace("### selectApprOrdInfo - ds_list01.rowcount : " + this.ds_list01.rowcount + ", ds_list02.rowcount : " + this.ds_list02.rowcount);
        	}
        	else if (svcID == "selectCommonCodeList") {
        		//trace("### ds_comAprvStepCd.rowcount : " + this.ds_comCd.rowcount);
        		this.fn_setCommonCode();
        	}
        	else if(svcID == "sendApprEmailInfo")	{
        		var strRtnCd  = this.fn_getDSValue(this.ds_fromServer03.getColumn(0,"RTN_CD"));
        		var strRtnMsg = this.fn_getDSValue(this.ds_fromServer03.getColumn(0,"RTN_MSG"));
        		alert(strRtnMsg);
        	}
        	else if (svcID == "saveOrderDetailAprvInfo" || svcID == "saveOrderDetailAprvOdr") {
        		var  strRtnCdStl  = "S";
        		var  strRtnMsgStl = "";
        		var  strRtnCdOrd  = "S";
        		var  strRtnMsgOrd = "";

        		if (errorCode == "0") {
        			// 일반적인 저장(사용자가 저장버튼을 클릭한 경우)
        			if (this.moveStep == this.moveType.UNKNOWN) {
        				if(this.requestStl == true)	{
        					strRtnCdStl  = this.fn_getDSValue(this.ds_fromServer01.getColumn(0,"RTN_CD"));
        					strRtnMsgStl = this.fn_getDSValue(this.ds_fromServer01.getColumn(0,"RTN_MSG"));
        				}

        				if(this.requestOrd == true)	{
        					strRtnCdOrd  = this.fn_getDSValue(this.ds_fromServer02.getColumn(0,"RTN_CD"));
        					strRtnMsgOrd = this.fn_getDSValue(this.ds_fromServer02.getColumn(0,"RTN_MSG"));
        				}

        				if( strRtnCdStl == "S" && strRtnCdOrd == "S" ) {
        					alert(this.fn_getMessage("ERRS000156"));
        					this.fn_search();
        				}
        				else {
        					var strRtnMsg = "";
        					if (this.gfn_isNull(strRtnMsgStl) == false) {
        						strRtnMsg = strRtnMsgStl;
        					}
        					if (this.gfn_isNull(strRtnMsgOrd) == false) {
        						if (this.gfn_isNull(strRtnMsgStl))	strRtnMsg = strRtnMsgOrd;
        						else	strRtnMsg = strRtnMsg + ", " + strRtnMsgOrd;
        					}
        					alert(strRtnMsg);
        				}
        			}
        			else {
        				this.fn_processMoveStep(this.moveStep, strRtnCdStl, strRtnCdOrd, strRtnMsg);
        			}
        		}
        	}
        };

        /***********************************************************************************************
        * POPUP CALLBACK 영역
        ************************************************************************************************/
        this.fn_popupCallback = function(sPopupId, sRetValue) {
        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";

            if (sRetValue == undefined) {
                return;
            }
        	else {
        		resData = JSON.parse(sRetValue);
        	}

        	switch (sPopupId) {
        		// 결재정보 회원ID 팝업
        		case "stlMemIdPopup":
        			if (this.fn_isAvailableAprvrId(resData.MBR_ID) == false) {
        				alert(this.fn_getMessage("ERRS000167", resData.MBR_ID));
        				return;
        			}

        			// 필요 데이터 : ID, 직급, 이름... 직급이 없음
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "APRVR_ID", resData.MBR_ID);
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "APRVR_NM", resData.MBR_NM);
        			this.ds_list01.setColumn(this.ds_list01.rowposition, "JBPOS_NM", resData.JBPOS_NM);
        			break;
        		// 결재정보 위임자ID 팝업
        		case "stlDlgrIdPopup":
        			//var result = resData.DEPT_ID + " | " + resData.DEPT_NM;
        			break;
        		// 발주정보 회원ID 팝업
        		case "ordMemIdPopup":
        			// 필요 데이터 : ID, 직급, 이름... 직급이 없음
        			this.ds_list02.setColumn(this.ds_list02.rowposition, "APRVR_ID", resData.MBR_ID);
        			this.ds_list02.setColumn(this.ds_list02.rowposition, "APRVR_NM", resData.MBR_NM);
        			this.ds_list02.setColumn(this.ds_list02.rowposition, "JBPOS_NM", resData.JBPOS_NM);
        			break;
        		// E-mail 발송이력 팝업
        		case "emailSentHistPopup":
        			break;
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/


        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        // 조회 함수(모든 탭 폼에 있어야되는 함수)
        this.fn_searchOdrInfo = function(odrNo, odrItmNo, bzplcId, odrpsnId) {
        	//trace("### SSP_BO_OA_15 - fn_searchOdrInfo");
        	trace("### fn_searchOdrInfo - odrNo : " + odrNo + ", odrItmNo : " + odrItmNo + ", bzplcId : " + bzplcId);
        	this.odrNo = odrNo;
        	this.odrItmNo = odrItmNo;
        	this.bzplcId = bzplcId;
        	this.odrpsnId = odrpsnId;

        	this.ds_search.setColumn(0, "ODR_NO", this.odrNo);
        	this.ds_search.setColumn(0, "ODR_ITM_NO", this.odrItmNo);
        	this.ds_search.setColumn(0, "BZPLC_ID", this.bzplcId);
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);

        	this.fn_search();
        };
        // 데이터 변경내역 유무 조회(모든 탭 폼에 있어야되는 함수)
        this.fn_shouldSave = function() {
        	var rowType = "";
        	var deletedCount = 0;
        	deletedCount = this.ds_list01.getDeletedRowCount();

        	// ds_list01
        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		rowType = this.ds_list01.getRowType(i);

        		if (rowType == Dataset.ROWTYPE_UPDATE ||
        			rowType == Dataset.ROWTYPE_INSERT ||
        			deletedCount > 0) {
        			return true;
        		}
        	}

        	if (this.ds_list01.rowcount <= 0 && deletedCount > 0)	return true;

        	deletedCount = 0;
        	deletedCount = this.ds_list02.getDeletedRowCount();

        	// ds_list02
        	for (var i = 0; i < this.ds_list02.rowcount; i++) {
        		rowType = this.ds_list02.getRowType(i);

        		if (rowType == Dataset.ROWTYPE_UPDATE ||
        			rowType == Dataset.ROWTYPE_INSERT ||
        			deletedCount > 0) {

        			return true;
        		}
        	}

        	if (this.ds_list02.rowcount <= 0 && deletedCount > 0)	return true;

        	return false;
        };

        // 주문상세 화면에서 저장기능 사용(저장기능을 포함한 모든 탭 폼에 있어야되는 함수)
        this.fn_saveChangedDataByParent = function(withMoveStep) {
        	this.moveStep = withMoveStep;
        	trace("### moveStep : " + withMoveStep);
        	if (this.fn_saveToServer() == false) {
        		this.moveStep = this.moveType.UNKNOWN;
        	}
        };

        // fn_saveChangedDataByParent 저장 후처리 작업this.fn_processMoveStep(this.moveStep, strRtnCdStl, strRtnCdOrd, strRtnMsg);
        this.fn_processMoveStep = function(moveStep, saveResult1, saveResult2, strRtnMsg) {
        	// 저장작업 성공
        	var  strRtnCdStl  = "S";
        	var  strRtnMsgStl = "";
        	var  strRtnCdOrd  = "S";
        	var  strRtnMsgOrd = "";
        	if(this.requestStl == true)	{
        		strRtnCdStl  = this.fn_getDSValue(this.ds_fromServer01.getColumn(0,"RTN_CD"));
        		strRtnMsgStl = this.fn_getDSValue(this.ds_fromServer01.getColumn(0,"RTN_MSG"));
        	}

        	if(this.requestOrd == true)	{
        		strRtnCdOrd  = this.fn_getDSValue(this.ds_fromServer02.getColumn(0,"RTN_CD"));
        		strRtnMsgOrd = this.fn_getDSValue(this.ds_fromServer02.getColumn(0,"RTN_MSG"));
        	}

        	if( strRtnCdStl == "S" && strRtnCdOrd == "S" ) {
        		alert(this.fn_getMessage("ERRS000156"));
        		//this.fn_search();
        		this.fn_changeSavedDataset();
        		this.parent.parent.parent.fn_afterSaveChildForm(moveStep, saveResult1);
        	}
        	else {
        		var strRtnMsg = "";
        		if (this.gfn_isNull(strRtnMsgStl) == false) {
        			strRtnMsg = strRtnMsgStl;
        		}
        		if (this.gfn_isNull(strRtnMsgOrd) == false) {
        			if (this.gfn_isNull(strRtnMsgStl))	strRtnMsg = strRtnMsgOrd;
        			else	strRtnMsg = strRtnMsg + ", " + strRtnMsgOrd;
        		}
        		alert(strRtnMsg);
        		//this.fn_search();	의견을 듣고 주석을 해제하던지....
        	}
        	this.moveStep = this.moveType.UNKNOWN;
        };

        // 저장 성공시 모든 Dataset 상태를 Dataset.ROWTYPE_NORMAL로 변경
        this.fn_changeSavedDataset = function() {
        	this.ds_list01.updatecontrol = false;
        	this.ds_list02.updatecontrol = false;
        	var resultValue = false;
        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		resultValue = this.ds_list01.setRowType(i, Dataset.ROWTYPE_NORMAL);
        	}
        	for (var i = 0; i < this.ds_list02.rowcount; i++) {
        		resultValue = this.ds_list02.setRowType(i, Dataset.ROWTYPE_NORMAL);
        	}
        	this.ds_list01.updatecontrol = true;
        	this.ds_list02.updatecontrol = true;
        };

        // 서버에서 리턴받은 공통코드 리스트를 공통코드별로 분류
        this.fn_setCommonCode = function() {
        	// 결재단계코드
        	this.ds_comCd.filter("COM_CLSF_CD=='APRV_STEP_CD'");
        	this.ds_comAprvSeq.copyData(this.ds_comCd, true);
        	this.ds_comAprvSeq2.copyData(this.ds_comCd, true);

        	// 결재상태코드
        	this.ds_comCd.filter("COM_CLSF_CD=='APRV_STATS_CD'");
        	this.ds_comAprvStats.copyData(this.ds_comCd, true);

        	this.ds_comAprvSeq2.insertRow(0);
        	this.ds_comAprvSeq2.setColumn(0, "COM_DTL_CD_NM", "선택");
        };

        // 결재정보 그리드의 "단계" 컬럼 활성화/비활성화 체크
        this.fn_checkStlGridStepEnable = function() {
        	// APRV_STATS_CD
        };

        // APRV_SEQ 값 리턴, 01 ~ 10 사이 비어있는 값
        // 실패시 -1 리턴
        this.fn_getMinNumberOfAprvSeq = function() {
        	// 모든 단계를 사용했다고 간주함.
        	//if (this.ds_list01.rowcount == 10) {
        	if (this.ds_list01.rowcount == this.ds_comAprvSeq.rowcount) {
        		trace("### fn_getMinNumberOfAprvSeq is over 10 - rowcount : " + this.ds_list01.rowcount);
        		return "-1";
        	}

        	var aprvSeq = "";
        	for (var i = 0; i < this.ds_comAprvSeq.rowcount; i++) {
        		aprvSeq = this.ds_comAprvSeq.getColumn(i, "COM_DTL_CD");
        		this.ds_list01.filter("APRV_SEQ=='" + aprvSeq + "'");
        		if (this.ds_list01.rowcount > 0)	continue;	// 중복된 APRV_SEQ

        		trace("### fn_getMinNumberOfAprvSeq - aprvSeq : " + aprvSeq);
        		this.ds_list01.filter("");
        		return aprvSeq;
        	}

        	return "-1";
        };

        // "단계" 중복 검사, "단계" 순서 검사
        // nowAprvSeq : 선택한 APRV_SEQ, row : 화면 그리드 행
        this.fn_isAvailableAprvSeq = function(nowAprvSeq, row) {
        	var aprvSeq = "";
        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		if (i == row)	continue;
        		aprvSeq = this.ds_list01.getColumn(i, "APRV_SEQ");
        		//trace("### fn_isAvailableAprvSeq : " + aprvSeq + ", nowAprvSeq : " + nowAprvSeq + ", row : " + i);
        		if (nowAprvSeq == aprvSeq) {
        			return false;
        		}
        	}

        	return true;
        };

        // 결재정보에서 회원ID 중복 검사
        this.fn_isAvailableAprvrId = function(selectedAprvrId) {
        	var aprvrId = "";
        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		aprvrId = this.ds_list01.getColumn(i, "APRVR_ID");
        		if (aprvrId == selectedAprvrId)		return false;
        	}

        	return true;
        };

        // APRV_SEQ의 순서 정렬(2, 5, 6, 3 -> 1(2), 2(3), 3(5), 4(6))
        // ds_list01의 APRV_SEQ의 값을 수정한다.
        this.fn_sortAprvSeqForList01 = function() {
        	var sortArr = new Array(this.ds_list01.rowcount);
        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		sortArr[i] = this.ds_list01.getColumn(i, "APRV_SEQ");
        	}

        	//sortArr.sort((a, b) => a - b);
        	sortArr.sort();
        	var rowValue = "";
        	for (var i = 0; i < sortArr.length; i++) {
        		rowValue = sortArr[i];
        		for (var j = 0; j < sortArr.length; j++) {
        			if (this.ds_list01.getColumn(j, "APRV_SEQ") == rowValue) {
        				this.ds_list01.setColumn(j, "APRV_SEQ", (i + 1).toString().padLeft(2, "0"));
        				break;
        			}
        		}
        	}
        };

        // 결재정보 저장 데이터 설정
        this.fn_makeStlInfo = function() {
        	this.ds_forServer01.clearData();

        	// 테스트용 - 데이터 삭제처리
        	//this.ds_list01.deleteRow(0);

        	var insertedCount = 0;
        	var updatedCount = 0;
        	var deletedCount = this.ds_list01.getDeletedRowCount();
        	var rowType = "";
        	var nRow = "";
        	var aprvSeq = "";
        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		rowType = this.ds_list01.getRowType(i);

        		if (rowType == Dataset.ROWTYPE_NORMAL)	continue;

        		this.ds_comAprvSeq.filter("COM_DTL_CD=='" + this.ds_list01.getColumn(i, "APRV_SEQ") + "'");
        		aprvSeq = this.ds_comAprvSeq.getColumn(0, "SRT_SO");
        		this.ds_comAprvSeq.filter("");

        		nRow = this.ds_forServer01.addRow();
        		this.ds_forServer01.setColumn(nRow, "CO_CD", this.fv_coCd);
        		this.ds_forServer01.setColumn(nRow, "BZPLC_ID", this.bzplcId);
        		this.ds_forServer01.setColumn(nRow, "ODR_NO", this.odrNo);
        		this.ds_forServer01.setColumn(nRow, "ODR_ITM_NO", this.odrItmNo);
        		this.ds_forServer01.setColumn(nRow, "ITM_GRP_CD", "G21");
        		this.ds_forServer01.setColumn(nRow, "ODRPSN_ID", this.odrpsnId);
        		this.ds_forServer01.setColumn(nRow, "CHN_GB", "BO");
        		this.ds_forServer01.setColumn(nRow, "CHG_MEMO_CTS", "");
        		this.ds_forServer01.setColumn(nRow, "APRV_ITM_NO", this.ds_list01.getColumn(i, "APRV_ITM_NO"));		// 결재항목번호
        		this.ds_forServer01.setColumn(nRow, "APRVR_ID", this.ds_list01.getColumn(i, "APRVR_ID"));			// 결재자 ID
        		this.ds_forServer01.setColumn(nRow, "APRV_SEQ", aprvSeq);			// 결재순번

        		if (rowType == Dataset.ROWTYPE_INSERT) {
        			insertedCount = insertedCount + 1;
        			this.ds_forServer01.setColumn(nRow, "IUD_GB", "I");
        		}
        		else if (rowType == Dataset.ROWTYPE_UPDATE) {
        			updatedCount = updatedCount + 1;
        			this.ds_forServer01.setColumn(nRow, "IUD_GB", "U");
        		}
        	}

        	// 삭제된 데이터 찾기
        	if (deletedCount <= 0)	return;		// 원본 데이터에서 삭제된 데이터가 없음

        	var deletedArray = this.ds_list01.getDeletedRowset();
        	this.fn_setDeletedDataToServer01Set(deletedArray);
        };
        // 결재정보 데이터셋(ds_forServer01)에 삭제된 데이터 추가
        this.fn_setDeletedDataToServer01Set = function(deletedArray) {
        	if (deletedArray.length <= 0) {
        		trace("### fn_setDeletedDataToServer01Set - 삭제된 데이터가 없습니다.");
        		return;
        	}

        	// Dataset의 컬럼 순서
        	// CO_CD, BZPLC_ID, ODR_NO, ODR_ITM_NO, APRV_ITM_NO, APRVR_ID, APRVR_NM, APRVL_SPR_CD, APRV_SEQ, APRV_STATS_CD, COM_DTL_CD_NM, APRV_DTM, PRV_MEMO_CTS, DLGR_ID, DLGR_NM, CHK
        	// forServer
        	// CO_CD, BZPLC_ID, ODR_NO, ODR_ITM_NO, ITM_GRP_CD, ODRPSN_ID, IUD_GB, CHN_GB, CHG_MEMO_CTS, APRV_ITM_NO, APRVR_ID, APRV_SEQ
        	var nRow = -1;
        	var data = "";
        	for (var i = 0; i < deletedArray.length; i++) {
        		data = deletedArray[i];
        		//trace("### datas : " + datas);
        		//nRow = this.ds_forServer01.addRow();
        		nRow = this.ds_forServer01.insertRow(0);
        		this.ds_forServer01.setColumn(nRow, "CO_CD", data[0]);
        		this.ds_forServer01.setColumn(nRow, "BZPLC_ID", data[1]);
        		this.ds_forServer01.setColumn(nRow, "ODR_NO", data[2]);
        		this.ds_forServer01.setColumn(nRow, "ODR_ITM_NO", data[3]);
        		this.ds_forServer01.setColumn(nRow, "ITM_GRP_CD", "G21");
        		this.ds_forServer01.setColumn(nRow, "ODRPSN_ID", this.odrpsnId);
        		this.ds_forServer01.setColumn(nRow, "CHN_GB", "BO");
        		this.ds_forServer01.setColumn(nRow, "CHG_MEMO_CTS", "");
        		this.ds_forServer01.setColumn(nRow, "APRV_ITM_NO", nexacro.toNumber(data[4]));		// 결재항목번호
        		this.ds_forServer01.setColumn(nRow, "APRVR_ID", data[5]);			// 결재자 ID
        		this.ds_forServer01.setColumn(nRow, "APRV_SEQ", nexacro.toNumber(data[8]));			// 결재순번
        		this.ds_forServer01.setColumn(nRow, "IUD_GB", "D");
        	}
        };

        // APRV_SEQ 값 리턴, 01 ~ 10 사이 비어있는 값
        // 실패시 -1 리턴
        this.fn_getMinNumberOfOrdSeq = function() {
        	var ordSeq = "";
        	for (var i = 1; i < this.ds_comAprvSeq2.rowcount; i++) {
        		ordSeq = this.ds_comAprvSeq2.getColumn(i, "COM_DTL_CD");
        		this.ds_list02.filter("APRV_SEQ=='" + ordSeq + "'");
        		if (this.ds_list02.rowcount > 0)	continue;	// 중복된 APRV_SEQ

        		trace("### fn_getMinNumberOfOrdSeq - ordSeq : " + ordSeq);
        		this.ds_list02.filter("");
        		return ordSeq;
        	}

        	return "-1";
        };

        // APRV_SEQ의 순서 정렬(2, 5, 6, 3 -> 1(2), 2(3), 3(5), 4(6))
        // ds_list02의 APRV_SEQ의 값을 수정한다.
        this.fn_sortAprvSeqForList02 = function() {
        	var sortArr = new Array(this.ds_list02.rowcount);
        	for (var i = 0; i < this.ds_list02.rowcount; i++) {
        		sortArr[i] = this.ds_list02.getColumn(i, "APRV_SEQ");
        	}

        	const uniqueArr = sortArr.sort(function(a, b)  { return a - b; });
        	var aprvSeq = "";
        	var ordSeq = "";
        	for (var i = 0; i < this.ds_list02.rowcount; i++) {
        		aprvSeq = this.ds_list02.getColumn(i, "APRV_SEQ");
        		for (var j = 0; j < uniqueArr.length; j++) {
        			ordSeq = uniqueArr[j];
        			if (aprvSeq == ordSeq) {
        				this.ds_list02.setColumn(i, "APRV_SEQ", (j + 1).toString().padLeft(2, "0"));
        				break;
        			}
        		}
        	}
        };

        // 발주정보 저장 데이터 설정
        this.fn_makeOrdInfo = function() {
        	this.ds_forServer02.clearData();

        	var insertedCount = 0;
        	var updatedCount = 0;
        	var deletedCount = this.ds_list02.getDeletedRowCount();
        	var rowType = "";
        	var nRow = "";
        	var aprvSeq = "";
        	var oldAprvSeq = "";
        	for (var i = 0; i < this.ds_list02.rowcount; i++) {
        		rowType = this.ds_list02.getRowType(i);

        		if (rowType == Dataset.ROWTYPE_NORMAL)	continue;

        		this.ds_comAprvSeq2.filter("COM_DTL_CD=='" + this.ds_list02.getColumn(i, "APRV_SEQ") + "'");
        		aprvSeq = this.ds_comAprvSeq2.getColumn(0, "SRT_SO");
        		this.ds_comAprvSeq2.filter("");

        		if (i == 0) {
        			nRow = this.ds_forServer02.addRow();
        		}
        		else {
        			var found = false;
        			for (var j = 0; j < this.ds_forServer02.rowcount; j++) {
        				oldAprvSeq = this.ds_forServer02.getColumn(j, "APRV_SEQ");

        				// 이미 추가된값이 신규값보다 크다면(INSERT)
        				if (aprvSeq < oldAprvSeq) {
        					nRow = this.ds_forServer02.insertRow(j);
        					found = true;
        					break;
        				}
        			}

        			if (!found) {
        				nRow = this.ds_forServer02.addRow();
        			}
        		}

        		this.ds_forServer02.setColumn(nRow, "CO_CD", this.fv_coCd);
        		this.ds_forServer02.setColumn(nRow, "BZPLC_ID", this.bzplcId);
        		this.ds_forServer02.setColumn(nRow, "ODR_NO", this.odrNo);
        		this.ds_forServer02.setColumn(nRow, "ODR_ITM_NO", this.odrItmNo);
        		this.ds_forServer02.setColumn(nRow, "ITM_GRP_CD", "G22");
        		this.ds_forServer02.setColumn(nRow, "ODRPSN_ID", this.odrpsnId);
        		this.ds_forServer02.setColumn(nRow, "CHN_GB", "BO");
        		this.ds_forServer02.setColumn(nRow, "CHG_MEMO_CTS", "");
        		this.ds_forServer02.setColumn(nRow, "APRV_ITM_NO", this.ds_list02.getColumn(i, "APRV_ITM_NO"));		// 결재항목번호
        		this.ds_forServer02.setColumn(nRow, "APRVR_ID", this.ds_list02.getColumn(i, "APRVR_ID"));			// 결재자 ID
        		this.ds_forServer02.setColumn(nRow, "APRV_SEQ", aprvSeq);			// 결재순번

        		if (rowType == Dataset.ROWTYPE_INSERT) {
        			insertedCount = insertedCount + 1;
        			this.ds_forServer02.setColumn(nRow, "IUD_GB", "I");
        		}
        		else if (rowType == Dataset.ROWTYPE_UPDATE) {
        			updatedCount = updatedCount + 1;
        			this.ds_forServer02.setColumn(nRow, "IUD_GB", "U");
        		}
        	}

        	// 삭제된 데이터 찾기
        	if (deletedCount <= 0)	return;		// 원본 데이터에서 삭제된 데이터가 없음

        	var deletedArray = this.ds_list02.getDeletedRowset();
        	this.fn_setDeletedDataToServer02Set(deletedArray);
        };

        // 결재정보 데이터셋(ds_forServer02)에 삭제된 데이터 추가
        this.fn_setDeletedDataToServer02Set = function(deletedArray) {
        	if (deletedArray.length <= 0) {
        		trace("### fn_setDeletedDataToServer02Set - 삭제된 데이터가 없습니다.");
        		return;
        	}

        	// Dataset의 컬럼 순서
        	// CO_CD, BZPLC_ID, ODR_NO, ODR_ITM_NO, APRV_ITM_NO, APRVR_ID, APRVR_NM, APRVL_SPR_CD, APRV_SEQ, APRV_STATS_CD, COM_DTL_CD_NM, APRV_DTM, PRV_MEMO_CTS, DLGR_ID, DLGR_NM, CHK
        	// forServer
        	// CO_CD, BZPLC_ID, ODR_NO, ODR_ITM_NO, ITM_GRP_CD, ODRPSN_ID, IUD_GB, CHN_GB, CHG_MEMO_CTS, APRV_ITM_NO, APRVR_ID, APRV_SEQ
        	var nRow = -1;
        	var data = "";
        	for (var i = 0; i < deletedArray.length; i++) {
        		data = deletedArray[i];
        		//trace("### datas : " + datas);
        		//nRow = this.ds_forServer02.addRow();
        		nRow = this.ds_forServer02.insertRow(0);
        		this.ds_forServer02.setColumn(nRow, "CO_CD", data[0]);
        		this.ds_forServer02.setColumn(nRow, "BZPLC_ID", data[1]);
        		this.ds_forServer02.setColumn(nRow, "ODR_NO", data[2]);
        		this.ds_forServer02.setColumn(nRow, "ODR_ITM_NO", data[3]);
        		this.ds_forServer02.setColumn(nRow, "ITM_GRP_CD", "G22");
        		this.ds_forServer02.setColumn(nRow, "ODRPSN_ID", this.odrpsnId);
        		this.ds_forServer02.setColumn(nRow, "CHN_GB", "BO");
        		this.ds_forServer02.setColumn(nRow, "CHG_MEMO_CTS", "");
        		this.ds_forServer02.setColumn(nRow, "APRV_ITM_NO", nexacro.toNumber(data[4]));		// 결재항목번호
        		this.ds_forServer02.setColumn(nRow, "APRVR_ID", data[5]);			// 결재자 ID
        		this.ds_forServer02.setColumn(nRow, "APRV_SEQ", nexacro.toNumber(data[8]));			// 결재순번
        		this.ds_forServer02.setColumn(nRow, "IUD_GB", "D");
        	}
        };

        // 필수정보인 회원ID 유무 검사
        // type = "1" : 결재정보, type = "2" : 발주정보
        this.fn_checkAprvrId = function(type) {
        	var aprvrId = "";
        	if (type == "1") {
        		for (var i = 0; i < this.ds_list01.rowcount; i++) {
        			aprvrId = this.ds_list01.getColumn(i, "APRVR_ID");
        			if (this.gfn_isNull(aprvrId)) {
        				return false;
        			}
        		}
        		return true;
        	}
        	else if (type == "2") {
        		for (var i = 0; i < this.ds_list02.rowcount; i++) {
        			aprvrId = this.ds_list02.getColumn(i, "APRVR_ID");
        			if (this.gfn_isNull(aprvrId)) {
        				return false;
        			}
        		}
        		return true;
        	}

        	return false;
        };

        // 요청/응답 리셋
        this.fn_resetRequestResponse = function() {
        	this.requestStl = false;
        	this.requestOrd = false;
        	this.responseStl = false;
        	this.responseOrd = false;
        };

        // 저장기능
        this.fn_saveToServer = function() {
        	this.fn_resetRequestResponse();

        	if (this.fn_checkAprvrId("1") == false) {
        		//alert("결재정보 테이블에 회원ID정보가 누락되었습니다.");
        		alert(this.fn_getMessage("ERRS000168", "결재"));
        		return false;
        	}

        	// 결재정보 "단계" 순서 설정
        	this.fn_sortAprvSeqForList01();
        	// 결재정보 저장데이터 생성
        	this.fn_makeStlInfo();

        	if (this.fn_checkAprvrId("2") == false) {
        		//alert("발주정보 테이블에 회원ID정보가 누락되었습니다.");
        		alert(this.fn_getMessage("ERRS000168", "발주"));
        		return false;
        	}
        	// 발주정보 저장데이터 생성
        	trace("### btn_save_onclick - ds_forServer02.rowcount : " + this.ds_forServer02.rowcount);
        	this.fn_sortAprvSeqForList02();
        	this.fn_makeOrdInfo();

        	// 결재, 발주정보 저장
        	if (this.ds_forServer01.rowcount > 0 && this.ds_forServer02.rowcount > 0)	{
        		var sSvcId = "saveOrderDetailAprvOdr";
        		var sUrl = "/od/orderChange/saveOrderDetailAprvOdr.do";
        		var inDs = "ds_update1=ds_forServer01 ds_update2=ds_forServer02";
        		var outDs = "ds_fromServer01=ds_output1 ds_fromServer02=ds_output2";
        		var arg = "";
        		this.requestStl = true;
        		this.requestOrd = true;
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        	else if (this.ds_forServer01.rowcount > 0 )	{
        		var sSvcId = "saveOrderDetailAprvInfo";
        		var sUrl = "/od/orderChange/saveOrderDetailAprvInfo.do";
        		var inDs = "ds_update1=ds_forServer01";
        		var outDs = "ds_fromServer01=ds_output1";
        		var arg = "";
        		this.requestStl = true;
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        	else if (this.ds_forServer02.rowcount > 0 )	{
        		var sSvcId = "saveOrderDetailAprvInfo";
        		var sUrl = "/od/orderChange/saveOrderDetailAprvInfo.do";
        		var inDs = "ds_update1=ds_forServer02";
        		var outDs = "ds_fromServer02=ds_output1";
        		var arg = "";
        		this.requestOrd = true;
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        	else {
        		// 임시 메세지
        		alert(this.fn_getMessage("ERRS000155"));
        	}

        	return true;
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	//this.fn_regMethodCtrlENTER("fn_search");
        	this.fn_regMethodSave("btn_save_onclick");
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        // 결재정보 행추가
        this.btn_addRowStl_onclick = function(obj,e)
        {
        	var upStep = this.fn_getMinNumberOfAprvSeq();
        	if (upStep == "-1") {
        		alert(this.fn_getMessage("ERRS000157"));
        		return;
        	}

        	// 다음차수 설정
        	var nRow = this.ds_list01.addRow();
        	this.ds_list01.setColumn(nRow, "APRV_SEQ", upStep);
        };

        // 결재정보 E-mail발송
        this.btn_emailSndStl_onclick = function(obj,e)
        {
        	var sSvcId = "sendApprEmailInfo";
        	var sUrl = "/od/orderChange/sendApprEmailInfo.do";
        	var inDs = "ds_update1=ds_search";
        	var outDs = "ds_fromServer03=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };

        // 결재정보 E-mail 발송이력
        this.btn_emailSndHstStl_onclick = function(obj,e)
        {
        	var objParam = {pv1:this.bzplcId, pv2:this.odrNo, pv3:this.odrItmNo, pv4:this.odrpsnId};
        	this.gfn_openPopup("emailSentHistPopup", "OD::SSP_BO_OA_16.xfdl", objParam);
        };

        // 발주정보 행추가
        this.btn_addRowOrd_onclick = function(obj,e)
        {
        	var upStep = this.fn_getMinNumberOfOrdSeq();
        	if (upStep == "-1") {
        		//alert(this.fn_getMessage("ERRS000157"));
        		//return;
        		upStep = "10";
        	}

        	// 다음차수 설정
        	var nRow = this.ds_list02.addRow();
        	this.ds_list02.setColumn(nRow, "APRV_SEQ", upStep);
        };
        // 발주정보 E-mail발송
        this.btn_emailSndOrd_onclick = function(obj,e)
        {

        };
        // 발주정보 E-mail 발송이력
        this.btn_emailSndHstOrd_onclick = function(obj,e)
        {

        };

        // 취소
        this.btn_cancel_onclick = function(obj,e)
        {
        	if (this.fn_shouldSave()) {
        		var rtn = this.confirm(this.fn_getMessage("ERRS000162"));
        		// 저장하지 않고 진행
        		if (rtn == false) {
        			this.fn_search();
        		}
        		else {
        			// 변경된 내용에 관해서 진행을 물어보는데 "확인"라고 해서 꼭 저장하는것인지 확인이 필요할 것 같음
        			this.fn_saveToServer();
        		}
        	}
        	else {
        		this.fn_search();
        	}
        };
        // 저장
        this.btn_save_onclick = function(obj,e)
        {
        	this.fn_saveToServer();
        };

        /***********************************************************************************************
        * GRID EVENT 영역
        ************************************************************************************************/
        // 결재정보 그리드 셀 클릭
        this.grid_stlInfo_oncellclick = function(obj,e)
        {
        	// 콤보박스 한번 클릭으로 Dropdown
        	if (e.col == 0 && obj.getCurEditType() == "combo") {
        		this.Div00.form.Div01.form.grid_stlInfo.setCellPos(e.cell);
        		this.Div00.form.Div01.form.grid_stlInfo.showEditor(true);
        		this.Div00.form.Div01.form.grid_stlInfo.dropdownCombo();
        		//trace("### oncellclick - combo : " + this.ds_list01.getColumn(e.row, "APRV_SEQ"));
        		this.fv_preAprvSeq = this.ds_list01.getColumn(e.row, "APRV_SEQ");
        	}
        	// 회원ID 팝업버튼
        	else if (e.col == 2) {
        		var aprvStatsCd = this.ds_list01.getColumn(e.row, "APRV_STATS_CD");
        		if (this.gfn_isNull(aprvStatsCd) == false) {
        			alert(this.fn_getMessage("ERRS000169", aprvStatsCd, "결재"));
        			//alert("주문상태(" + aprvStatsCd + ")가 존재합니다. 결재자 변경 대상이 아닙니다.");
        			return;
        		}

        		var objParam = {pv1:"1", pv2:this.bzplcId};
        		this.gfn_openPopup("stlMemIdPopup", "OD::SSP_BO_OA_55.xfdl", objParam);
        	}
        	// 삭제 버튼
        	else if (e.col == 11) {
        		var aprvStatsCd = this.ds_list01.getColumn(e.row, "APRV_STATS_CD");
        		// 결재상태 : 완료
        		if (aprvStatsCd == "02")	return;

        		if (this.gfn_isNull(aprvStatsCd) == false) {
        			alert(this.fn_getMessage("ERRS000146"));
        			//alert("주문상태(" + aprvStatsCd + ")가 존재합니다. 삭제 대상이 아닙니다.");
        			return;
        		}

        		this.ds_list01.deleteRow(e.row);
        	}
        };

        this.grid_stlInfo_oncloseup = function(obj,e)
        {
        	// 단계 콤보박스
        	if (e.col == 0) {
        		obj.moveToNextCell();
        		//trace("### grid_stlInfo_oncloseup - row : " + e.row + ", APRV_SEQ : " + this.ds_list01.getColumn(e.row, "APRV_SEQ"));

        		// 사용할 수 없는 "단계"를 선택함 -> 선택 이전의 "단계" 정보로 변경해야됨
        		if (this.fn_isAvailableAprvSeq(this.ds_list01.getColumn(e.row, "APRV_SEQ"), e.row) == false) {
        			alert(this.fn_getMessage("ERRS000149"));
        			this.ds_list01.setColumn(e.row, "APRV_SEQ", this.fv_preAprvSeq);
        		}
        	}
        };


        // 발주정보 그리드 셀 클릭
        this.grid_ordInfo_oncellclick = function(obj,e)
        {
        	// 콤보박스 한번 클릭으로 Dropdown
        	if (e.col == 0 && obj.getCurEditType() == "combo") {
        		this.Div00.form.Div00.form.grid_ordInfo.setCellPos(e.cell);
        		this.Div00.form.Div00.form.grid_ordInfo.showEditor(true);
        		this.Div00.form.Div00.form.grid_ordInfo.dropdownCombo();
        	}
        	// 회원ID 팝업버튼
        	else if (e.col == 2) {
        		var aprvStatsCd = this.ds_list02.getColumn(e.row, "APRV_STATS_CD");
        		if (this.gfn_isNull(aprvStatsCd) == false) {
        			alert(this.fn_getMessage("ERRS000169", aprvStatsCd, "발주"));
        			//alert("결재상태(" + aprvStatsCd + ")가 존재합니다. 발주자 변경 대상이 아닙니다.");
        			return;
        		}

        		var objParam = {pv1:"2", pv2:this.bzplcId};
        		this.gfn_openPopup("ordMemIdPopup", "OD::SSP_BO_OA_55.xfdl", objParam);
        	}
        	// 삭제 버튼
        	else if (e.col == 8) {
        		// 삭제 가능한 조건이 필요함(아래는 임의로 만든것임)
        		var aprvStatsCd = this.ds_list02.getColumn(e.row, "APRV_STATS_CD");
        		if (this.gfn_isNull(aprvStatsCd) == false) {
        			alert(this.fn_getMessage("ERRS000146"));
        			//alert("주문상태가 결재완료(02) 입니다.\n삭제할 수 없습니다.");
        			return;
        		}

        		this.ds_list02.deleteRow(e.row);
        	}
        };


        /***********************************************************************************************
        * Dataset EVENT 영역
        ************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_15_onload,this);
            this.addEventHandler("oninit",this.SSP_BO_OA_02_02_oninit,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_02_02_onkeyup,this);
            this.Div00.form.Div01.form.btn_emailSndHstStl.addEventHandler("onclick",this.btn_emailSndHstStl_onclick,this);
            this.Div00.form.Div01.form.btn_emailSndStl.addEventHandler("onclick",this.btn_emailSndStl_onclick,this);
            this.Div00.form.Div01.form.grid_stlInfo.addEventHandler("oncellclick",this.grid_stlInfo_oncellclick,this);
            this.Div00.form.Div01.form.grid_stlInfo.addEventHandler("oncloseup",this.grid_stlInfo_oncloseup,this);
            this.Div00.form.Div01.form.btn_addRowStl.addEventHandler("onclick",this.btn_addRowStl_onclick,this);
            this.Div00.form.Div00.form.btn_emailSndHstOrd.addEventHandler("onclick",this.btn_emailSndHstOrd_onclick,this);
            this.Div00.form.Div00.form.btn_emailSndOrd.addEventHandler("onclick",this.btn_emailSndOrd_onclick,this);
            this.Div00.form.Div00.form.grid_ordInfo.addEventHandler("oncellclick",this.grid_ordInfo_oncellclick,this);
            this.Div00.form.Div00.form.btn_addRowOrd.addEventHandler("onclick",this.btn_addRowOrd_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_15.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
