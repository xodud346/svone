(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_81");
            this.set_titletext("주문변경항목관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_MTD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_MTD_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_UPD_MTD_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_APLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CLSF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list03", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_FDS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_TBL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_FDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_IPT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_IPT_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_INQ_IPT_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TBL_NM_ALS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ALS\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_COND_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"RECALC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCoCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TOTAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_CLSF_CD\">UPD_MTD_CD</Col><Col id=\"IS_TOTAL\"/></Row><Row><Col id=\"COM_CLSF_CD\">MAND_YN</Col><Col id=\"IS_TOTAL\"/></Row><Row><Col id=\"COM_CLSF_CD\">INQ_IPT_SPR_CD</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comUdpMtdCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comAplYn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comInqIptSprCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comRecalcYn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_forServer01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_MTD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_MTD_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_UPD_MTD_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_APLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_forServer02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CLSF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IUD_GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_forServer03", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_FDS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_TBL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_FDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_IPT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_IPT_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_INQ_IPT_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TBL_NM_ALS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ALS\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_COND_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"RECALC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromServer01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromServer02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromServer03", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","20",null,null,"20","20",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo","0","10","200","16",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("■ 그룹코드");
            obj.set_cssclass("sta_WF_title01");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Grid("grid_list01","0","36","40.00%",null,null,"0",null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list01");
            obj.set_cellsizingtype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"행선택\"/><Cell col=\"1\" text=\"변경코드\"/><Cell col=\"2\" text=\"변경항목명\"/><Cell col=\"3\" text=\"수정방법\"/><Cell col=\"4\" text=\"권한적용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"imagecontrol\" text=\"expr:comp.parent.parent.parent.parent.parent.fn_isSelectedRow(currow, comp.currentcell) == true ? &quot;url(&apos;theme://images/btn_WF_page_last.png&apos;)&quot; : &quot;&quot;\"/><Cell col=\"1\" text=\"bind:CHG_ITM_GRP_CD\"/><Cell col=\"2\" text=\"bind:CHG_ITM_GRP_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:UPD_MTD_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_comUdpMtdCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"4\" text=\"bind:AUTH_APLY_YN\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_comAplYn\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/></Band></Format></Formats>");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00",null,"26","30","10","1256",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"0","60","28","128",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_default");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"0","60","28","192",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_default");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo00","grid_list01:10","10","200","16",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("■ 권한");
            obj.set_cssclass("sta_WF_title01");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Grid("grid_list02","grid_list01:10","36",null,"317","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list02");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"179\"/><Column size=\"30\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"170\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"사번\"/><Cell col=\"2\" text=\"사원명\"/><Cell col=\"3\" text=\"시작일자\"/><Cell col=\"4\" text=\"종료일자\"/></Band><Band id=\"body\"><Cell text=\"bind:OPRTR_ID\"/><Cell col=\"1\" expandshow=\"show\" expandsize=\"32\"/><Cell col=\"2\" text=\"bind:OPRTR_NM\"/><Cell col=\"3\" text=\"bind:APLY_STR_DT\" displaytype=\"calendarcontrol\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltext=\" \" calendardisplayinvalidtext=\" \" edittype=\"date\" calendarautoselect=\"true\"/><Cell col=\"4\" text=\"bind:APLY_END_DT\" displaytype=\"calendarcontrol\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltext=\" \" calendardisplayinvalidtext=\" \" edittype=\"date\" calendarautoselect=\"true\"/></Band></Format></Formats>");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo00_00","grid_list01:10","364","200","16",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("■ 상세");
            obj.set_cssclass("sta_WF_title01");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Grid("grid_list03","grid_list01:10","390",null,null,"0","0",null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("8");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_list03");
            obj.set_cellsizingtype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_selecttype("area");
            obj.set_autoenter("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"입력구분\"/><Cell col=\"2\" text=\"테이블명\"/><Cell col=\"3\" text=\"테이블 별칭\"/><Cell col=\"4\" text=\"컬럼명\"/><Cell col=\"5\" text=\"컬럼 별칭\"/><Cell col=\"6\" text=\"검색조건\"/><Cell col=\"7\" text=\"재계산여부\"/><Cell col=\"8\" text=\"실행내용\"/></Band><Band id=\"body\"><Cell text=\"bind:CHG_SEQ\"/><Cell col=\"1\" text=\"bind:INQ_IPT_SPR_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_comInqIptSprCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"2\" text=\"bind:TBL_NM\" tooltiptext=\"bind:TBL_NM\"/><Cell col=\"3\" text=\"bind:TBL_NM_ALS\"/><Cell col=\"4\" text=\"bind:COL_NM\" tooltiptext=\"bind:COL_NM\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:COL_ALS\" tooltiptext=\"bind:COL_ALS\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:SRCH_COND_CTS\" tooltiptext=\"bind:SRCH_COND_CTS\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:RECALC_YN\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_comRecalcYn\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"8\" text=\"bind:EXCE_CTS\" tooltiptext=\"bind:EXCE_CTS\" edittype=\"none\"/></Band></Format></Formats>");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","28","64",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","60","28","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.Div00.form.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_81.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_81.xfdl", function() {
        // 주문변경항목관리

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        this.odrNo = "";
        this.odrItmNo = "";
        this.bzplcId = "";
        this.odrpsnId = "";
        this.selectedRow = -1;
        this.preAplyStrDt = "";		// 변경이전 시작일자
        this.preAplyEndDt = "";		// 변경이전 종료일자
        this.popupId = "";
        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_81_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        	this.fn_odCommLoading();

        	this.fn_searchCommonCode();

        	this.copyPaste.addGrid(this.Div00.form.Div01.form.grid_list01);
        	this.copyPaste.addGrid(this.Div00.form.Div01.form.grid_list02);
        	this.copyPaste.addGrid(this.Div00.form.Div01.form.grid_list03,this);	// 마지막 인자 "this" 그리드 붙여넣기 기능

        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_81_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        // 공통코드
        this.fn_searchCommonCode = function() {
        	var sSvcId = "selectCommonCodeList";
        	var sUrl = "/od/odrPopup/selectCommonCodeList.do";
        	var inDs = "ds_search=ds_searchCoCd";
        	var outDs = "ds_comCd=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_search = function() {//TB_DL_CHG_CTL_ITM_GRP_CD
        	var sSvcId = "selectChgCtlItmGrpCdList";
        	var sUrl = "/od/orderChange/selectChgCtlItmGrpCdList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_searchGrpAuth = function() {
        	var sSvcId = "selectChgCtlItmGrpAuthList";
        	var sUrl = "/od/orderChange/selectChgCtlItmGrpAuthList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list02=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_searchGrpDtl = function() {
        	var sSvcId = "selectChgCtlItmGrpDtlList";
        	var sUrl = "/od/orderChange/selectChgCtlItmGrpDtlList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list03=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_searchAuthAndDtl = function() {//TB_DL_CHG_CTL_ITM_GRP_CD
        	var sSvcId = "selectChgCtlItmGrpAuthAndDtlList";
        	var sUrl = "/od/orderChange/selectChgCtlItmGrpAuthAndDtlList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list02=ds_output2 ds_list03=ds_output3";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 변경제어항목그룹코드 목록만 저장
        this.fn_saveChgCtlItmGrpCd = function() {
        	var sSvcId = "saveChgCtlItmGrpCd";
        	var sUrl = "/od/orderChange/saveChgCtlItmGrpCd.do";
        	var inDs = "ds_update1=ds_forServer01";
        	var outDs = "ds_fromServer01=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 변경제어항목그룹권한만 저장
        this.fn_saveChgCtlItmGrpAuthInfo = function() {
        	var sSvcId = "saveChgCtlItmGrpAuthInfo";
        	var sUrl = "/od/orderChange/saveChgCtlItmGrpAuthInfo.do";
        	var inDs = "ds_update1=ds_forServer02";
        	var outDs = "ds_fromServer02=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 변경제어항목그룹상세만 저장
        this.fn_saveChgCtlItmGrpDtl = function() {
        	var sSvcId = "saveChgCtlItmGrpDtl";
        	var sUrl = "/od/orderChange/saveChgCtlItmGrpDtl.do";
        	var inDs = "ds_update1=ds_forServer03";
        	var outDs = "ds_fromServer03=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 변경제어항목그룹코드, 권한, 상세정보 3개 동시 저장
        this.fn_saveChgCtlItmGrpCdAndAll = function() {
        	var sSvcId = "saveChgCtlItmGrpCdAndAll";
        	var sUrl = "/od/orderChange/saveChgCtlItmGrpCdAndAll.do";
        	var inDs = "ds_update1=ds_forServer01 ds_update2=ds_forServer02 ds_update3=ds_forServer03";
        	var outDs = "ds_fromServer01=ds_output1 ds_fromServer02=ds_output2 ds_fromServer03=ds_output3";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 변경제어항목그룹코드, 권한 2개 동시 저장
        this.fn_saveChgCtlItmGrpCdAndAuth = function() {
        	var sSvcId = "saveChgCtlItmGrpCdAndAuth";
        	var sUrl = "/od/orderChange/saveChgCtlItmGrpCdAndAuth.do";
        	var inDs = "ds_update1=ds_forServer01 ds_update2=ds_forServer02";
        	var outDs = "ds_fromServer01=ds_output1 ds_fromServer02=ds_output2";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 변경제어항목그룹코드, 상세정보 2개 동시 저장
        this.fn_saveChgCtlItmGrpCdAndDtl = function() {
        	var sSvcId = "saveChgCtlItmGrpCdAndDtl";
        	var sUrl = "/od/orderChange/saveChgCtlItmGrpCdAndDtl.do";
        	var inDs = "ds_update1=ds_forServer01 ds_update2=ds_forServer03";
        	var outDs = "ds_fromServer01=ds_output1 ds_fromServer03=ds_output3";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 변경제어항목권한, 상세정보 2개 동시 저장
        this.fn_saveChgCtlItmGrpAuthAndDtl = function() {
        	var sSvcId = "saveChgCtlItmGrpAuthAndDtl";
        	var sUrl = "/od/orderChange/saveChgCtlItmGrpAuthAndDtl.do";
        	var inDs = "ds_update1=ds_forServer02 ds_update2=ds_forServer03";
        	var outDs = "ds_fromServer02=ds_output2 ds_fromServer03=ds_output3";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectChgCtlItmGrpCdList") {
        		trace("### selectChgCtlItmGrpCdList - ds_list01.rowcount : " + this.ds_list01.rowcount + ", selectedRow : " + this.selectedRow);
        		if (this.ds_list01.rowcount < 0)	return;
        		this.grid_list01_oncellclick(this.Div00.form.Div01.form.grid_list01, {row:(this.selectedRow < 0 ? 0 : this.selectedRow), col:0});
        		this.Div00.form.Div01.form.grid_list01.redrawExprCell();
        	}
        	if (svcID == "selectChgCtlItmGrpAuthList") {
        		trace("### selectChgCtlItmGrpAuthList - ds_list02.rowcount : " + this.ds_list02.rowcount);
        	}
        	if (svcID == "selectChgCtlItmGrpDtlList") {
        		trace("### selectChgCtlItmGrpDtlList - ds_list03.rowcount : " + this.ds_list03.rowcount);
        	}
        	else if (svcID == "selectChgCtlItmGrpAuthAndDtlList") {
        		trace("### selectChgCtlItmGrpAuthAndDtlList - ds_list02.rowcount : " + this.ds_list02.rowcount + ", ds_list03.rowcount : " + this.ds_list03.rowcount);
        	}
        	else if (svcID == "selectCommonCodeList") {
        		this.fn_setCommonCode();
        		this.fn_search();
        	}
        	else if (svcID == "saveChgCtlItmGrpCd") {
        		//trace(this.fn_getStrFromDataset(this.ds_fromServer01,0));
        		if (errorCode == "0") {
        			var strRtnCd  = this.fn_getDSValue(this.ds_fromServer01.getColumn(0,"RTN_CD"));
        			var strRtnMsg = this.fn_getDSValue(this.ds_fromServer01.getColumn(0,"RTN_MSG"));

        			if (strRtnCd == "S") {
        				alert(this.fn_getMessage("ERRS000156"));
        				this.fn_search();
        			}
        			else if (strRtnCd == "E") {
        				alert(strRtnMsg);
        			}
        			else if (errorCode < 0) {
        				//alert(this.fn_getMessage(errorMsg));
        			}
        		}
        	}
        	else if (svcID == "saveChgCtlItmGrpAuthInfo") {
        		if (errorCode == "0") {
        			var strRtnCd  = this.fn_getDSValue(this.ds_fromServer02.getColumn(0,"RTN_CD"));
        			var strRtnMsg = this.fn_getDSValue(this.ds_fromServer02.getColumn(0,"RTN_MSG"));

        			if (strRtnCd == "S") {
        				alert(this.fn_getMessage("ERRS000156"));
        				this.fn_changeSavedDataset(this.ds_list02);
        				this.fn_search();
        			}
        			else if (strRtnCd == "E") {
        				alert(strRtnMsg);
        			}
        			else if (errorCode < 0) {
        				//alert(this.fn_getMessage(errorMsg));
        			}
        		}
        	}
        	else if (svcID == "saveChgCtlItmGrpDtl") {
        		if (errorCode == "0") {
        			var strRtnCd  = this.fn_getDSValue(this.ds_fromServer03.getColumn(0,"RTN_CD"));
        			var strRtnMsg = this.fn_getDSValue(this.ds_fromServer03.getColumn(0,"RTN_MSG"));

        			if (strRtnCd == "S") {
        				alert(this.fn_getMessage("ERRS000156"));
        				this.fn_changeSavedDataset(this.ds_list03);
        				this.fn_search();
        			}
        			else if (strRtnCd == "E") {
        				alert(strRtnMsg);
        			}
        			else if (errorCode < 0) {
        				//alert(this.fn_getMessage(errorMsg));
        			}
        		}
        	}
        	else if (svcID == "saveChgCtlItmGrpCdAndAll") {
        		if (errorCode == "0") {
        			var strRtnCd1  = this.fn_getDSValue(this.ds_fromServer01.getColumn(0,"RTN_CD"));
        			var strRtnMsg1 = this.fn_getDSValue(this.ds_fromServer01.getColumn(0,"RTN_MSG"));
        			var strRtnCd2 = this.fn_getDSValue(this.ds_fromServer02.getColumn(0,"RTN_CD"));
        			var strRtnMsg2 = this.fn_getDSValue(this.ds_fromServer02.getColumn(0,"RTN_MSG"));
        			var strRtnCd3 = this.fn_getDSValue(this.ds_fromServer03.getColumn(0,"RTN_CD"));
        			var strRtnMsg3 = this.fn_getDSValue(this.ds_fromServer03.getColumn(0,"RTN_MSG"));

        			if (strRtnCd1 == "S" && strRtnCd2 == "S" && strRtnCd3 == "S") {
        				alert(this.fn_getMessage("ERRS000156"));
        				this.fn_changeSavedDataset(this.ds_list02);
        				this.fn_changeSavedDataset(this.ds_list03);
        				this.fn_search();
        			}
        			else if (strRtnCd1 == "E") {
        				alert(strRtnMsg1);
        			}
        			else if (strRtnCd2 == "E") {
        				alert(strRtnMsg2);
        			}
        			else if (strRtnCd3 == "E") {
        				alert(strRtnMsg3);
        			}
        			else if (errorCode < 0) {
        				//alert(this.fn_getMessage(errorMsg));
        			}
        		}
        	}
        	else if (svcID == "saveChgCtlItmGrpCdAndAuth") {
        		if (errorCode == "0") {
        			var strRtnCd1  = this.fn_getDSValue(this.ds_fromServer01.getColumn(0,"RTN_CD"));
        			var strRtnMsg1 = this.fn_getDSValue(this.ds_fromServer01.getColumn(0,"RTN_MSG"));
        			var strRtnCd2 = this.fn_getDSValue(this.ds_fromServer02.getColumn(0,"RTN_CD"));
        			var strRtnMsg2 = this.fn_getDSValue(this.ds_fromServer02.getColumn(0,"RTN_MSG"));

        			if (strRtnCd1 == "S" && strRtnCd2 == "S") {
        				alert(this.fn_getMessage("ERRS000156"));
        				this.fn_changeSavedDataset(this.ds_list02);
        				this.fn_search();
        			}
        			else if (strRtnCd1 == "E") {
        				alert(strRtnMsg1);
        			}
        			else if (strRtnCd2 == "E") {
        				alert(strRtnMsg2);
        			}
        			else if (errorCode < 0) {
        				//alert(this.fn_getMessage(errorMsg));
        			}
        		}
        	}
        	else if (svcID == "saveChgCtlItmGrpCdAndDtl") {
        		if (errorCode == "0") {
        			var strRtnCd1  = this.fn_getDSValue(this.ds_fromServer01.getColumn(0,"RTN_CD"));
        			var strRtnMsg1 = this.fn_getDSValue(this.ds_fromServer01.getColumn(0,"RTN_MSG"));
        			var strRtnCd3 = this.fn_getDSValue(this.ds_fromServer03.getColumn(0,"RTN_CD"));
        			var strRtnMsg3 = this.fn_getDSValue(this.ds_fromServer03.getColumn(0,"RTN_MSG"));

        			if (strRtnCd1 == "S" && strRtnCd3 == "S") {
        				alert(this.fn_getMessage("ERRS000156"));
        				this.fn_changeSavedDataset(this.ds_list03);
        				this.fn_search();
        			}
        			else if (strRtnCd1 == "E") {
        				alert(strRtnMsg1);
        			}
        			else if (strRtnCd3 == "E") {
        				alert(strRtnMsg3);
        			}
        			else if (errorCode < 0) {
        				//alert(this.fn_getMessage(errorMsg));
        			}
        		}
        	}
        	else if (svcID == "saveChgCtlItmGrpAuthAndDtl") {
        		if (errorCode == "0") {
        			var strRtnCd1  = this.fn_getDSValue(this.ds_fromServer02.getColumn(0,"RTN_CD"));
        			var strRtnMsg1 = this.fn_getDSValue(this.ds_fromServer02.getColumn(0,"RTN_MSG"));
        			var strRtnCd2 = this.fn_getDSValue(this.ds_fromServer03.getColumn(0,"RTN_CD"));
        			var strRtnMsg2 = this.fn_getDSValue(this.ds_fromServer03.getColumn(0,"RTN_MSG"));

        			if (strRtnCd1 == "S" && strRtnCd2 == "S") {
        				alert(this.fn_getMessage("ERRS000156"));
        				this.fn_changeSavedDataset(this.ds_list02);
        				this.fn_changeSavedDataset(this.ds_list03);
        				this.fn_search();
        			}
        			else if (strRtnCd1 == "E") {
        				alert(strRtnMsg1);
        			}
        			else if (strRtnCd2 == "E") {
        				alert(strRtnMsg2);
        			}
        			else if (errorCode < 0) {
        				//alert(this.fn_getMessage(errorMsg));
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
        		case "oprIdPopup":	// 운영자 팝업
        			var oprtrId = "";

        			for (var i = 0; i < this.ds_list02.rowcount; i++) {
        				oprtrId = this.ds_list02.getColumn(i, "OPRTR_ID");

        				if (oprtrId == resData.OPRTR_ID) {
        					//alert("동일한 사번이 이미 존재합니다. 추가할 수 없는 사번입니다.");
        					alert(this.fn_getMessage("ERRS000167", resData.OPRTR_ID));
        					return;
        				}
        			}

        			this.ds_list02.setColumn(this.ds_list02.rowposition, "OPRTR_ID", resData.OPRTR_ID);
        			this.ds_list02.setColumn(this.ds_list02.rowposition, "OPRTR_NM", resData.OPRTR_NM);
        			break;
        		case this.popupId:
        			trace("### popupId : " + this.popupId + ", column_name : " + resData.COLUMN_NAME + ", comments : " + resData.COMMENTS);
        			this.ds_list03.setColumn(this.ds_list03.rowposition, "COL_NM", resData.COLUMN_NAME);
        			break;
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/


        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        // 서버에서 리턴받은 공통코드 리스트를 공통코드별로 분류
        this.fn_setCommonCode = function() {
        	// 수정방법코드
        	this.ds_comCd.filter("COM_CLSF_CD=='UPD_MTD_CD'");
        	this.ds_comUdpMtdCd.copyData(this.ds_comCd, true);

        	// 적용여부
        	this.ds_comCd.filter("COM_CLSF_CD=='MAND_YN'");
        	this.ds_comAplYn.copyData(this.ds_comCd, true);

        	// 조회입력구분코드
        	this.ds_comCd.filter("COM_CLSF_CD=='INQ_IPT_SPR_CD'");
        	this.ds_comInqIptSprCd.copyData(this.ds_comCd, true);

        	// 재계산여부
        	this.ds_comCd.filter("COM_CLSF_CD=='MAND_YN'");
        	this.ds_comRecalcYn.copyData(this.ds_comCd, true);
        };

        this.fn_searchMapSetting = function() {
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_search.setColumn(0, "CHG_ITM_GRP_CD", this.ds_list01.getColumn(this.selectedRow, "CHG_ITM_GRP_CD"));
        };

        // 행선택
        this.fn_isSelectedRow = function(currow, cellPos) {
        	if (cellPos == 0) {
        		if (currow == this.ds_list01.rowposition)	return true;
        		else	return false;
        	}

        	if (currow == this.selectedRow) {
        		return true;
        	}

        	return false;
        };

        this.fn_setDefaultFromTo = function() {
        	var objCurr = new nexacro.Date();
        	var sToday = objCurr.getFullYear() + ((objCurr.getMonth() + 1) + "").padLeft(2, '0') + (objCurr.getDate() + "").padLeft(2, '0');

        	this.ds_list02.setColumn(this.ds_list02.rowposition, "APLY_STR_DT", sToday);
        	this.ds_list02.setColumn(this.ds_list02.rowposition, "APLY_END_DT", "99991231");
        };

        // 목록 데이터셋 변경유무 검사(데이터 추가/삭제 작업이 있는지 확인해야됨)
        this.fn_shouldSaveInList01 = function() {
        	var rowType = -1;
        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		rowType = this.ds_list01.getRowType(i);

        		// 추가작업이 있는지 확인해야됨
        		//if (rowType == Dataset.ROWTYPE_UPDATE || rowType == Dataset.ROWTYPE_INSERT) {
        		if (rowType == Dataset.ROWTYPE_UPDATE) {
        			return true;
        		}
        	}
        	return false;
        };

        // 권한 데이터셋 변경유무 검사
        this.fn_shouldSaveInList02 = function() {
        	var rowType = -1;
        	var deletedCount = this.ds_list02.getDeletedRowCount();
        	for (var i = 0; i < this.ds_list02.rowcount; i++) {
        		rowType = this.ds_list02.getRowType(i);

        		if (rowType == Dataset.ROWTYPE_UPDATE ||
        			rowType == Dataset.ROWTYPE_INSERT ||
        			deletedCount > 0) {
        			return true;
        		}
        	}

        	if (deletedCount > 0)	return true;

        	return false;
        };

        // 상세 데이터셋 변경유무 검사
        this.fn_shouldSaveInList03 = function() {
        	var rowType = -1;
        	for (var i = 0; i < this.ds_list03.rowcount; i++) {
        		rowType = this.ds_list03.getRowType(i);

        		if (rowType == Dataset.ROWTYPE_UPDATE) {
        			return true;
        		}
        	}
        	return false;
        };

        // 권한 데이터셋 저장가능 여부 검사(사용자 선택, 일자정보 설정)
        this.fn_isValidDataInList02 = function() {
        	var oprtrId = "";
        	var startDate = "";
        	var endDate = "";

        	for (var i = 0; i < this.ds_list02.rowcount; i++) {
        		oprtrId = this.ds_list02.getColumn(i, "OPRTR_ID");
        		startDate = this.ds_list02.getColumn(i, "APLY_STR_DT");
        		endDate = this.ds_list02.getColumn(i, "APLY_END_DT");
        		if (this.gfn_isNull(oprtrId)) {
        			alert(this.fn_getMessage("ERRS000168", "권한"));
        			return false;
        		}

        		if (startDate == endDate) {
        			// 아래 메세지는 처리해야될지 말지 정해야될... 수도....
        			alert("시작일자와 종료일자가 동일한 일자입니다.");
        			return false;
        		}
        	}

        	return true;
        };

        // 변경제어항목그룹코드 저장데이터 생성, 추가/삭제 없고 업데이트만 있음
        this.fn_makeChgCtlItmGrpCd = function() {
        	this.ds_forServer01.clearData();

        	var rowType = "";
        	var addedRow = -1;

        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		rowType = this.ds_list01.getRowType(i);

        		if (rowType == Dataset.ROWTYPE_NORMAL)	continue;

        		addedRow = this.ds_forServer01.addRow();
        		this.ds_forServer01.copyRow(addedRow, this.ds_list01, i);
        	}
        };

        // 변경제어항목권한 저장데이터 생성
        this.fn_makeChgCtlItmGrpAuth = function() {
        	this.ds_forServer02.clearData();

        	var rowType = "";
        	var addedRow = -1;
        	var deletedCount = this.ds_list02.getDeletedRowCount();

        	for (var i = 0; i < this.ds_list02.rowcount; i++) {
        		rowType = this.ds_list02.getRowType(i);

        		if (rowType == Dataset.ROWTYPE_NORMAL)	continue;

        		addedRow = this.ds_forServer02.addRow();
        		this.ds_forServer02.copyRow(addedRow, this.ds_list02, i);

        		if (rowType == Dataset.ROWTYPE_INSERT) {
        			this.ds_forServer02.setColumn(addedRow, "IUD_GB", "I");
        		}
        		else if (rowType == Dataset.ROWTYPE_UPDATE) {
        			this.ds_forServer02.setColumn(addedRow, "IUD_GB", "U");
        		}
        	}

        	if (deletedCount <= 0)	return;

        	var deletedArray = this.ds_list02.getDeletedRowset();
        	this.fn_setDeletedDataToServer02Set(deletedArray);
        };

        // 변경제어항목권한 데이터셋(ds_forServer02)에 삭제된 데이터 추가
        this.fn_setDeletedDataToServer02Set = function(deletedArray) {
        	if (deletedArray.length <= 0) {
        		trace("### fn_setDeletedDataToServer02Set - 삭제된 데이터가 없습니다.");
        		return;
        	}

        	var nRow = -1;
        	var data = "";
        	for (var i = 0; i < deletedArray.length; i++) {
        		data = deletedArray[i];
        		//trace("### datas : " + datas);
        		nRow = this.ds_forServer02.addRow();
        		this.ds_forServer02.setColumn(nRow, "CHG_ITM_GRP_CD", data[0]);
        		this.ds_forServer02.setColumn(nRow, "ITM_SEQ", data[1]);
        		this.ds_forServer02.setColumn(nRow, "OPRTR_ID", data[2]);
        		this.ds_forServer02.setColumn(nRow, "OPRTR_NM", data[3]);
        		this.ds_forServer02.setColumn(nRow, "AUTH_CLSF_CD", data[4]);
        		this.ds_forServer02.setColumn(nRow, "AUTH_CLSF_CD_NM", data[5]);
        		this.ds_forServer02.setColumn(nRow, "APLY_STR_DT", data[6]);
        		this.ds_forServer02.setColumn(nRow, "APLY_END_DT", data[7]);
        		this.ds_forServer02.setColumn(nRow, "IUD_GB", "D");
        	}
        };

        // 변경제어항목상세 저장데이터 생성
        this.fn_makeChgCtlItmGrpDtl = function() {
        	this.ds_forServer03.clearData();

        	var rowType = "";
        	var addedRow = -1;

        	for (var i = 0; i < this.ds_list03.rowcount; i++) {
        		rowType = this.ds_list03.getRowType(i);

        		if (rowType == Dataset.ROWTYPE_NORMAL)	continue;

        		addedRow = this.ds_forServer03.addRow();
        		this.ds_forServer03.copyRow(addedRow, this.ds_list03, i);
        	}
        };

        // 저장
        this.fn_saveDatas = function() {
        	// 유효성 검사
        	if (this.fn_isValidDataInList02() == false)		return false;

        	// 그룹코드 데이터셋 저장
        	var shouldSave01 = this.fn_shouldSaveInList01();
        	//var shouldSave01 = false;
        	// 권한 데이터셋 저장
        	var shouldSave02 = this.fn_shouldSaveInList02();
        	// 상세 데이터셋 저장
        	var shouldSave03 = this.fn_shouldSaveInList03();
        	//var shouldSave03 = false;

        	trace("### 001 - shouldSave01 : " + shouldSave01 + ", shouldSave02 : " + shouldSave02 + ", shouldSave03 : " + shouldSave03);

        	// 그룹 코드, 권한, 상세 3건 모두 저장
        	if (shouldSave01 && shouldSave02 && shouldSave03) {
        		this.fn_makeChgCtlItmGrpCd();
        		this.fn_makeChgCtlItmGrpAuth();
        		this.fn_makeChgCtlItmGrpDtl();
        		this.fn_saveChgCtlItmGrpCdAndAll();
        	}
        	// 그룹 코드, 권한 2건 저장
        	else if (shouldSave01 && shouldSave02) {
        		this.fn_makeChgCtlItmGrpCd();
        		this.fn_makeChgCtlItmGrpAuth();
        		this.fn_saveChgCtlItmGrpCdAndAuth();
        	}
        	// 그룹 코드, 상세 2건 저장
        	else if (shouldSave01 && shouldSave03) {
        		this.fn_makeChgCtlItmGrpCd();
        		this.fn_makeChgCtlItmGrpDtl();
        		this.fn_saveChgCtlItmGrpCdAndDtl();
        	}
        	// 그룹 권한, 상세 2건 저장
        	else if (shouldSave02 && shouldSave03) {
        		this.fn_makeChgCtlItmGrpAuth();
        		this.fn_makeChgCtlItmGrpDtl();
        		this.fn_saveChgCtlItmGrpAuthAndDtl();
        	}
        	// 그룹 코드만 저장
        	else if (shouldSave01) {
        		this.fn_makeChgCtlItmGrpCd();
        		this.fn_saveChgCtlItmGrpCd();
        	}
        	// 그룹 권한만 저장
        	else if (shouldSave02) {
        		this.fn_makeChgCtlItmGrpAuth();
        		trace(this.fn_getStrFromDataset(this.ds_forServer02,0));
        		this.fn_saveChgCtlItmGrpAuthInfo();
        	}
        	// 그룹 상세만 저장
        	else if (shouldSave03) {
        		this.fn_makeChgCtlItmGrpDtl();
        		this.fn_saveChgCtlItmGrpDtl();
        	}
        };

        // 저장해야되는 항목이 1개라도 있는지 검사
        this.fn_shouldSave = function() {
        	var shouldSave01 = this.fn_shouldSaveInList01();
        	var shouldSave02 = this.fn_shouldSaveInList02();
        	var shouldSave03 = this.fn_shouldSaveInList03();

        	trace("### 002 - shouldSave01 : " + shouldSave01 + ", shouldSave02 : " + shouldSave02 + ", shouldSave03 : " + shouldSave03);

        	if (shouldSave01 || shouldSave02 || shouldSave03) {
        		return true;
        	}

        	return false;
        };

        // 저장 성공시 Dataset 상태를 Dataset.ROWTYPE_NORMAL로 변경
        this.fn_changeSavedDataset = function(dataset) {
        	var ds = new Dataset;
        	ds.copyData(dataset);

        	dataset.copyData(ds);
        	/*
        	dataset.set_updatecontrol(false);
        	var resultValue = false;
        	for (var i = 0; i < dataset.rowcount; i++) {
        		resultValue = dataset.setRowType(i, Dataset.ROWTYPE_NORMAL);
        	}

        	if (dataset.rowcount == 0 && dataset.getDeletedRowCount() > 0) {
        		dataset.clearData();
        	}
        	dataset.set_updatecontrol(true);
        	*/
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodCtrlENTER("btn_search_onclick");
        	this.fn_regMethodSave("btn_save_onclick");
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        // 변경항목그룹 멀티 팝업
        this.btn_chgItemMultiPopup_onclick = function(obj,e)
        {
        	var objParam = {};
        	this.gfn_openPopup("chgItmGrpCdPopup", "OD::SSP_BO_OA_57.xfdl", objParam);
        };

        // 저장 // 모든 변경사항 저장(목록, 권한, 상세)
        this.btn_save_onclick = function(obj,e)
        {
        	this.fn_saveDatas();
        };

        // 조회
        this.btn_search_onclick = function(obj,e)
        {
        	if (this.fn_shouldSave()) {
        		var rtn = this.confirm(this.fn_getMessage("ERRS000162"));

        		if (rtn) {
        			if (this.fn_saveDatas() == false)	return;
        		}
        	}

        	this.fn_search();
        };

        // 행추가
        this.btn_addRow_onclick = function(obj,e)
        {
        	if (this.selectedRow < 0) {
        		//alert("권한 목록에서 권한그룹을 선택하여 주십시오.");
        		alert(this.fn_getMessage("ERRS000262"));
        		return;
        	}

        	var nRow = this.ds_list02.addRow();
        	this.ds_list02.setColumn(nRow, "CHG_ITM_GRP_CD", this.ds_list01.getColumn(this.selectedRow, "CHG_ITM_GRP_CD"));
        	this.fn_setDefaultFromTo();
        };

        // 행삭제("행선택"으로 선택된 행을 삭제하는가? 현재 포커스되어있는 행을 삭제하는가?)
        this.btn_delRow_onclick = function(obj,e)
        {
        	if (this.ds_list02.rowposition < 0) {
        		alert(this.fn_getMessage("ERRS000137"));
        		return;
        	}

        	var rtn = this.confirm(this.fn_getMessage("ERRS000234"));
        	// 삭제하지 않음
        	if (rtn == false)	return;

        	this.ds_list02.deleteRow(this.ds_list02.rowposition);
        };

        /***********************************************************************************************
        * Dataset EVENT 영역
        ************************************************************************************************/



        /***********************************************************************************************
        * GRID EVENT 영역
        ************************************************************************************************/
        // 목록 그리드
        this.grid_list01_oncellclick = function(obj,e)
        {
        	if (e.col != 0) {
        		// 콤보박스 한번 클릭으로 Dropdown
        		if ((e.col == 3 || e.col == 4) && obj.getCurEditType() == "combo") {
        			this.Div00.form.Div01.form.grid_list01.setCellPos(e.cell);
        			this.Div00.form.Div01.form.grid_list01.showEditor(true);
        			this.Div00.form.Div01.form.grid_list01.dropdownCombo();
        		}
        	}
        	else {
        		// 권한의 "행추가", "행삭제" 제어
        		if (this.ds_list01.getColumn(e.row, "AUTH_APLY_YN") == "Y") {
        			this.Div00.form.Div01.form.btn_delRow.set_visible(true);
        			this.Div00.form.Div01.form.btn_addRow.set_visible(true);
        		}
        		else {
        			this.Div00.form.Div01.form.btn_delRow.set_visible(false);
        			this.Div00.form.Div01.form.btn_addRow.set_visible(false);
        		}

        		// 저장해야될 변경사항이 있음
        		if (this.fn_shouldSave()) {
        			var rtn = this.confirm(this.fn_getMessage("ERRS000162"));
        			// 저장 작업 진행
        			if (rtn) {
        				this.fn_saveDatas();
        				this.selectedRow = e.row;
        				return;
        			}
        		}

        		this.selectedRow = e.row;
        		this.fn_searchMapSetting();
        		this.fn_searchAuthAndDtl();
        	}
        };

        // 상세 그리드
        this.grid_list03_oncellclick = function(obj,e)
        {
        	// 콤보박스 한번 클릭으로 Dropdown
        	if ((e.col == 1 || e.col == 7) && obj.getCurEditType() == "combo") {
        		this.Div00.form.Div01.form.grid_list03.setCellPos(e.cell);
        		this.Div00.form.Div01.form.grid_list03.showEditor(true);
        		this.Div00.form.Div01.form.grid_list03.dropdownCombo();
        	}
        	// 컬럼명
        	else if (e.col == 4) {
        		var cellText = obj.getCellText(e.row, e.cell);
        		if (cellText == undefined) {
        			return;
        		}

        		this.Div00.form.Div01.form.grid_list03.setEditSelect(0, cellText.length);
        		this.popupId = "SSP_APP;" + obj.getCellText(e.row, 2);
        		this.fn_showColSearch("SSP_APP", obj.getCellText(e.row, 2), "fn_popupCallback", 200, 400, this);
        	}
        	else if (e.col == 5 || e.col == 6 || e.col == 8) {
        		var cellText = obj.getCellText(e.row, e.cell);
        		if (cellText == undefined) {
        			return;
        		}
        		this.Div00.form.Div01.form.grid_list03.setEditSelect(0, cellText.length);
        	}
        };


        this.grid_list02_oncellclick = function(obj,e)
        {
        	if (e.row < 0) return;

        	if (e.col == 1) {
        		var objParam = {coCod:this.fv_coCd, oprtrId:"", oprtrNm:""}
        		this.gfn_openPopup("oprIdPopup", "CO_POP::SSP_BO_PP_44.xfdl", objParam);
        	}
        	else if ((e.col == 3 || e.col == 4) && obj.getCurEditType() == "date") {
        		this.Div00.form.Div01.form.grid_list02.setCellPos(e.cell);
        		this.Div00.form.Div01.form.grid_list02.showEditor(true);
        		this.Div00.form.Div01.form.grid_list02.dropdownCalendar();

        		if (e.col == 3)	this.preAplyStrDt = this.ds_list02.getColumn(e.row, "APLY_STR_DT");
        		if (e.col == 4)	this.preAplyEndDt = this.ds_list02.getColumn(e.row, "APLY_END_DT");
        	}
        };

        this.grid_list02_oncloseup = function(obj,e)
        {
        	// 시작일자 수정
        	if (e.col == 3) {
        		obj.moveToNextCell();
        		var startDate = this.ds_list02.getColumn(e.row, "APLY_STR_DT");
        		var endDate = this.ds_list02.getColumn(e.row, "APLY_END_DT");

        		if (startDate > endDate) {
        			//alert("시작일자를 종료일자보다 크게 설정할 수 없습니다.");
        			alert(this.fn_getMessage("ERRS000258", "시작일자", "종료일자", "크게"));
        			this.ds_list02.setColumn(e.row, "APLY_STR_DT", this.preAplyStrDt);
        			return;
        		}
        	}
        	// 종료일자 수정
        	else if (e.col == 4) {
        		obj.moveToNextCell();
        		var startDate = this.ds_list02.getColumn(e.row, "APLY_STR_DT");
        		var endDate = this.ds_list02.getColumn(e.row, "APLY_END_DT");

        		if (endDate < startDate) {
        			//alert("종료일자를 시작일자보다 작게 설정할  수 없습니다.");
        			alert(this.fn_getMessage("ERRS000258", "종료일자", "시작일자", "작게"));
        			this.ds_list02.setColumn(e.row, "APLY_END_DT", this.preAplyEndDt);
        			return;
        		}
        	}
        };

        /***********************************************************************************************
        * Dataset EVENT 영역
        ************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_81_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_81_onkeyup,this);
            this.Div00.form.Div01.form.grid_list01.addEventHandler("oncellclick",this.grid_list01_oncellclick,this);
            this.Div00.form.Div01.form.btn_addRow.addEventHandler("onclick",this.btn_addRow_onclick,this);
            this.Div00.form.Div01.form.btn_delRow.addEventHandler("onclick",this.btn_delRow_onclick,this);
            this.Div00.form.Div01.form.grid_list02.addEventHandler("oncellclick",this.grid_list02_oncellclick,this);
            this.Div00.form.Div01.form.grid_list02.addEventHandler("oncloseup",this.grid_list02_oncloseup,this);
            this.Div00.form.Div01.form.grid_list03.addEventHandler("oncellclick",this.grid_list03_oncellclick,this);
            this.Div00.form.Div01.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.Div01.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.ds_forServer02.addEventHandler("oncolumnchanged",this.ds_list02_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_OA_81.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
