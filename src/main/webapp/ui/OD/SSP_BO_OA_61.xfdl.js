(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_61");
            this.set_titletext("도서산간 배송비 설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,980);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CRITERION\" type=\"STRING\" size=\"8\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col><Col id=\"CRITERION\">99991231</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CART_DLCST_NO\" type=\"STRING\" size=\"8\"/><Column id=\"APLY_STR_DT\" type=\"STRING\" size=\"8\"/><Column id=\"CART_DLCST_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CART_DLCST_SPR_CD\" type=\"STRING\" size=\"1\"/><Column id=\"DLCST_AMT\" type=\"STRING\" size=\"22\"/><Column id=\"DLCST_CURR_UNIT_CD\" type=\"STRING\" size=\"5\"/><Column id=\"APLY_END_DT\" type=\"STRING\" size=\"8\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REG_DTM\" type=\"DATETIME\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"10\"/><Column id=\"UPD_DTM\" type=\"DATETIME\" size=\"256\"/><Column id=\"ORG_STR_DT\" type=\"STRING\" size=\"8\"/><Column id=\"ORG_DLCST_AMT\" type=\"STRING\" size=\"22\"/><Column id=\"RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ISAREA_ZPCD_INFO_ID\" type=\"STRING\" size=\"8\"/><Column id=\"ZPCD_STR_NO\" type=\"STRING\" size=\"6\"/><Column id=\"ZPCD_END_NO\" type=\"STRING\" size=\"6\"/><Column id=\"CART_DLCST_NO\" type=\"STRING\" size=\"8\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"1000\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REG_DTM\" type=\"DATETIME\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"10\"/><Column id=\"UPD_DTM\" type=\"DATETIME\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ADD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CRITERION\" type=\"STRING\" size=\"8\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_updateBasisDlcst", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CART_DLCST_NO\" type=\"STRING\" size=\"8\"/><Column id=\"APLY_STR_DT\" type=\"STRING\" size=\"8\"/><Column id=\"CART_DLCST_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CART_DLCST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DLCST_AMT\" type=\"STRING\" size=\"22\"/><Column id=\"DLCST_CURR_UNIT_CD\" type=\"STRING\" size=\"5\"/><Column id=\"APLY_END_DT\" type=\"STRING\" size=\"8\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REG_DTM\" type=\"DATETIME\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"10\"/><Column id=\"UPD_DTM\" type=\"DATETIME\" size=\"256\"/><Column id=\"ORG_STR_DT\" type=\"STRING\" size=\"8\"/><Column id=\"ORG_DLCST_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"CRITERION\" type=\"STRING\" size=\"8\"/><Column id=\"RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cartdlcststr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"30\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"300\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_aplyYn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_zpcdGubun", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CART_DLCST_NO\" type=\"STRING\" size=\"8\"/><Column id=\"ISAREA_ZPCD_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_updateIsareaZpcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ISAREA_ZPCD_INFO_ID\" type=\"STRING\" size=\"8\"/><Column id=\"ZPCD_STR_NO\" type=\"STRING\" size=\"6\"/><Column id=\"ZPCD_END_NO\" type=\"STRING\" size=\"6\"/><Column id=\"CART_DLCST_NO\" type=\"STRING\" size=\"8\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"1000\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REG_DTM\" type=\"DATETIME\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"10\"/><Column id=\"UPD_DTM\" type=\"DATETIME\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCoCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TOTAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_CLSF_CD\">CART_DLCST_SPR_CD</Col><Col id=\"IS_TOTAL\"/></Row><Row><Col id=\"COM_CLSF_CD\">USE_YN</Col><Col id=\"IS_TOTAL\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00","20","123","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("■ 배송비 구분");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_list01","20","149",null,"190","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list01");
            obj.set_autoupdatetype("dateselect");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_autofittype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"141\"/><Column size=\"111\"/><Column size=\"106\"/><Column size=\"114\"/><Column size=\"25\"/><Column size=\"116\"/><Column size=\"81\"/><Column size=\"77\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"구분명\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"2\" text=\"배송비\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"3\" colspan=\"4\" text=\"적용일\"/><Cell col=\"7\" text=\"이력조회\"/></Band><Band id=\"body\"><Cell text=\"bind:CART_DLCST_SPR_CD\" edittype=\"expr:CART_DLCST_SPR_CD == &quot;&quot; ? &quot;combo&quot; : &quot;readonly&quot;\" combodataset=\"ds_cartdlcststr\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" displaytype=\"combocontrol\"/><Cell col=\"1\" text=\"bind:CART_DLCST_NM\" edittype=\"expr:CART_DLCST_NO == &quot;&quot; ? &quot;normal&quot; : &quot;none&quot;\"/><Cell col=\"2\" text=\"bind:DLCST_AMT\" edittype=\"normal\" maskeditformat=\"+999,999,999\" maskedittype=\"number\" displaytype=\"mask\" textAlign=\"right\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"3\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:APLY_STR_DT\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" calendarshowyearspin=\"true\" calendarshowmonthspin=\"true\" calendarusetrailingday=\"true\"/><Cell col=\"4\" text=\"~\" textAlign=\"center\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"none\" text=\"bind:APLY_END_DT\" calendardateformat=\"yyyy-MM-dd\" calendarautoselect=\"true\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"적용\"/><Cell col=\"7\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"이력조회\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addDLCST",null,"112","81","28","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("추가(도서)");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","20","356","190","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("■ 도서산간배송비 우편정보");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_zpcdTotalCount","20","382","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("(총 0건, 1/N)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging01","20",null,null,"38","20","50",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_batchAllNotUse",null,"369","81","28","23",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("일괄미사용");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_batchAllUse",null,"369","81","28","110",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("일괄사용");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addZPCD",null,"369","81","28","197",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("추가");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_saveZpcd",null,"369","81","28","284",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_textPadding("0px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retrieve",null,"112","81","28","107",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_textPadding("0px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retrieveZpcd",null,"369","81","28","371",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("조회");
            obj.set_textPadding("0px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","20",null,"62","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Div00");
            obj.set_background("transparent");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo","0","0","200","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("■ 도서산간 배송비");
            obj.set_cssclass("sta_WF_title01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","30",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","30","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("기준 일자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","130","30","10","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00","0","20","30","10",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_CriterionDate","140","34","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00","1286","339","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00","20","140","30","10",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_01","20","396","30","10",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_01_00","20","374","30","10",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_list02","20","406",null,null,"20","div_paging01:20",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_list02");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_autofittype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"41\"/><Column size=\"81\"/><Column size=\"82\"/><Column size=\"201\"/><Column size=\"120\"/><Column size=\"96\"/><Column size=\"108\"/><Column size=\"98\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" colspan=\"2\" text=\"우편번호\"/><Cell col=\"3\" rowspan=\"2\" text=\"비고\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"4\" rowspan=\"2\" text=\"도서산간구분\"/><Cell col=\"5\" rowspan=\"2\" text=\"적용여부\"/><Cell col=\"6\" rowspan=\"2\" text=\"최종수정일\"/><Cell col=\"7\" rowspan=\"2\" text=\"최종수정자\"/><Cell row=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell row=\"1\" col=\"1\" text=\"From\" cssclass=\"grd_WF_bg_image\"/><Cell row=\"1\" col=\"2\" text=\"To\" cssclass=\"grd_WF_bg_image\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"mask\" edittype=\"expr:ADD == &quot;Y&quot; ? &quot;mask&quot; : &quot;none&quot;\" maskeditformat=\"#####\" text=\"bind:ZPCD_STR_NO\" textAlign=\"center\"/><Cell col=\"2\" maskeditformat=\"#####\" displaytype=\"mask\" edittype=\"expr:ADD == &quot;Y&quot; ? &quot;mask&quot; : &quot;none&quot;\" text=\"bind:ZPCD_END_NO\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:RMKS_CTS\" edittype=\"expr:ADD == &quot;Y&quot; ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"4\" text=\"bind:CART_DLCST_NO\" edittype=\"expr:ADD==&quot;Y&quot; ? &quot;combo&quot; : &quot;readonly&quot;\" combodataset=\"ds_zpcdGubun\" combocodecol=\"CART_DLCST_NO\" combodatacol=\"ISAREA_ZPCD_GUBUN\" displaytype=\"combocontrol\"/><Cell col=\"5\" text=\"bind:USE_YN\" textAlign=\"center\" edittype=\"expr:ADD==&quot;Y&quot; ? &quot;combo&quot; : &quot;readonly&quot;\" combodataset=\"ds_aplyYn\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" displaytype=\"combocontrol\"/><Cell col=\"6\" text=\"bind:UPD_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:UPDPSN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"112","110","28","194",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,980,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","grid_list01","binddataset","ds_list02","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_61.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_61.xfdl", function() {
        // 도서산간 배송비 설정

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;
        this.zpcdTotalCount = 0;
        this.btnAddRow = false;

        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_61_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	//검색 영역 최소size 적용
        	this.resetScroll();
        	this.fn_odCommLoading();
        	this.copyPaste.addGrid(this.grid_list01);
        	this.copyPaste.addGrid(this.grid_list02);

        	this.Div00.form.cal_CriterionDate.set_value(new nexacro.Date());
        	this.div_paging01.uPage = 1;
        	this.fn_requestAll();
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

        // 배송비구분 조회
        this.fn_searchBasisDlcst = function() {
        	this.ds_search01.setColumn(0, "CRITERION", this.Div00.form.cal_CriterionDate.value);
        	var sSvcId = "selectBasisDlcstList";
        	var sUrl = "/od/basisDlcstZpcd/selectBasisDlcstList.do";
        	var inDs = "ds_search=ds_search01";
        	var outDs = "ds_list01=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 배송비구분 업데이트(Insert, Update)
        this.fn_updateBasisDlcst = function() {
        	this.ds_updateBasisDlcst.setColumn(0, "CRITERION", this.Div00.form.cal_CriterionDate.value);
        	var sSvcId = "updateBasisDlcst";
        	var sUrl = "/od/basisDlcstZpcd/updateBasisDlcst.do";
        	var inDs = "ds_updateData=ds_updateBasisDlcst";
        	var outDs = "ds_list01=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 배송비구분 추가(추가)
        this.fn_insertBasisDlcst = function() {
        	var sSvcId = "insertBasisDlcst";
        	var sUrl = "/od/basisDlcstZpcd/insertBasisDlcst.do";
        	var inDs = "ds_updateData=ds_updateBasisDlcst";
        	var outDs = "ds_list01=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 도서산간 배송비 우편번호 정보 조회
        this.fn_searchZpcd = function()	{
        	var sSvcId = "selectIsareaZpcdList";
        	var sUrl = "/od/basisDlcstZpcd/selectIsareaZpcdList.do";
        	var inDs = "ds_search=ds_search02";
        	var outDs = "ds_list02=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 도서산간 배송비 구분정보 조회
        this.fn_searchIsareaZpcdGubun = function() {
        	this.ds_search02.setColumn(0, "CRITERION", this.Div00.form.cal_CriterionDate.value);
        	var sSvcId = "selectIsareaZpcdGubunList";
        	var sUrl = "/od/basisDlcstZpcd/selectIsareaZpcdGubunList.do";
        	var inDs = "ds_search=ds_search02";
        	var outDs = "ds_zpcdGubun=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 도서산간 배송비 업데이트
        this.fn_updateIsareaZpcd = function() {
        	var sSvcId = "updateIsareaZpcd";
        	var sUrl = "/od/basisDlcstZpcd/updateIsareaZpcd.do";
        	var inDs = "ds_updateList=ds_updateIsareaZpcd";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 도서산간 배송비 추가
        this.fn_insertIsareaZpcd = function() {
        	var sSvcId = "insertIsareaZpcd";
        	var sUrl = "/od/basisDlcstZpcd/insertIsareaZpcd.do";
        	var inDs = "ds_insertData=ds_updateIsareaZpcd";
        	var outDs = "ds_list02=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 배송비구분 Count
        this.fn_searchBasisDlcstCount = function() {
        	var sSvcId = "selectBasisDlcstCount";
        	var sUrl = "/od/basisDlcstZpcd/selectBasisDlcstCount.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 도서산간 배송비 우편정보 Count
        this.fn_searchIsareaZpcdCount = function() {
        	var sSvcId = "selectIsareaZpcdCount";
        	var sUrl = "/od/basisDlcstZpcd/selectIsareaZpcdCount.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };



        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectBasisDlcstList") {
        		//this.ds_list01.addColumn("CHK","String");

        		//trace("ds_list01.getRowCount() : " + this.ds_list01.getRowCount());
        		//paging 처리
        		//this.div_paging01.form.cfn_createPage(this.div_paging01, this.totalCount, this.fv_oApp.gv_pageViewCnt, "fn_pageCallback");
        	}
        	// 공통코드
        	else if (svcID == "selectCommonCodeList") {
        		//trace("### ds_comAprvStepCd.rowcount : " + this.ds_comCd.rowcount);
        		this.fn_setCommonCode();
        	}
        	else if (svcID == "updateBasisDlcst") {
        		trace("updateBasisDlcst 작업 callBack");
        		if (errorCode < 0) {
        			//alert(this.fn_getMessage(errorMsg));
        		}
        		else {
        			var strRtnCd  = this.fn_getDSValue(this.ds_list01.getColumn(0,"RTN_CD"));
        			var strRtnMsg = this.fn_getDSValue(this.ds_list01.getColumn(0,"RTN_MSG"));

        			if (strRtnCd == "S")	alert(this.fn_getMessage("ERRS000156"));
        			else	alert(this.fn_getMessage(strRtnMsg));
        		}
        	}
        	else if (svcID == "insertBasisDlcst") {
        		trace("insertBasisDlcst 작업 callBack");
        	}
        	else if (svcID == "selectIsareaZpcdList") {
        		//trace("selectIsareaZpcdList 작업 callBack");
        		//this.ds_list02.addColumn("CHK","String");
        		this.div_paging01.form.cfn_createPage(this.div_paging01, this.totalCount, this.fv_oApp.gv_pageViewCnt, "fn_pageCallback");
        		this.fn_showIsareaZpcdSaveBtn();
        	}
        	else if (svcID == "updateIsareaZpcd") {
        		//trace("updateIsareaZpcd 작업 callBack");
        		if (errorCode < 0) {
        			//alert(this.fn_getMessage(errorMsg));
        		}
        		else {
        			alert(this.fn_getMessage("ERRS000156"));
        			this.fn_searchIsareaZpcdCount();
        		}
        	}
        	else if (svcID == "insertIsareaZpcd") {
        		//trace("insertIsareaZpcd 작업 callBack");
        		if (errorCode < 0) {
        			//alert(this.fn_getMessage(errorMsg));
        		}
        		else {
        			alert(this.fn_getMessage("ERRS000156"));
        			this.fn_searchIsareaZpcdCount();
        		}
        	}
        	else if (svcID == "selectIsareaZpcdGubunList") {
        		trace("ISAREA ZPCD GUBUN 조회 : " + this.ds_zpcdGubun.getRowCount());
        	}
        	else if (svcID == "selectBasisDlcstCount") {
        		trace("selectBasisDlcstCount : " + this.totalCount);
        		if (this.totalCount > 0) {
        			this.fn_searchBasisDlcst();
        		}
        	}
        	else if (svcID == "selectIsareaZpcdCount") {
        		trace("selectIsareaZpcdCount : " + this.zpcdTotalCount);
        		if (this.zpcdTotalCount > 0) {
        			this.fn_searchZpcd();
        		}
        	}
        };

        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging01;
        	if (sFlag) {
        		this.ds_search02.setColumn(0,"START_NUM", oPaging.uPageNum);
        		//this.ds_search02.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		this.fn_searchZpcd();
        	}

        	var sTotText = "(<b v='true'>총 "+ this.zpcdTotalCount +"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";

        // 	if (oPaging.uPage = 1) {
        // 		this.div_paging01.set_visible(false);
        // 	}
        	this.sta_zpcdTotalCount.set_text(sTotText);
        };

        /*
        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if (sGridId == "grd_mainList") {
        		oSortInfo = this.grd_mainList.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		this.fn_search();
        	}
        };
        */

        /***********************************************************************************************
        * 사용자함수 영역
        ************************************************************************************************/
        // 도서산간 배송비 우편정보의 "저장" 버튼의 VISIBLE 설정
        this.fn_showIsareaZpcdSaveBtn = function() {
        	var rowCount = this.ds_list02.getRowCount();
        	var nRowType = "";
        	trace("### showIsareaZpcdSaveBtn - rowCount : " + rowCount);
        	for (var i = 0; i < rowCount; i++) {
        		nRowType = this.ds_list02.getRowType(i);

        		if (nRowType == Dataset.ROWTYPE_INSERT) {
        			this.btn_saveZpcd.set_visible(true);
        			trace("### showIsareaZpcdSaveBtn - Dataset.ROWTYPE_INSERT - i : " + i);
        			return;
        		}
        	}

        	this.btn_saveZpcd.set_visible(false);
        };

        // 도서산간 저장시 데이터 검증
        this.fn_checkIsareaZpcdSaveData = function() {
        	var objDs = new Dataset();
        	var nRowType = "";
        	var rowCount = this.ds_list02.getRowCount();
        	for (var i = 0; i < rowCount; i++) {
        		nRowType = this.ds_list02.getRowType(i);

        		if (nRowType == Dataset.ROWTYPE_INSERT) {
        			var zpcdStrNo = this.ds_list02.getColumn(i, "ZPCD_STR_NO");
        			var zpcdEndNo = this.ds_list02.getColumn(i, "ZPCD_END_NO");
        			var rmksCTR = this.ds_list02.getColumn(i, "RMKS_CTS");

        			trace("zpcdStrNo : " + zpcdStrNo);

        			if (zpcdStrNo == undefined || zpcdStrNo == "") {
        				//alert("시작 우편번호 정보가 유효하지 않습니다.");
        				alert(this.fn_getMessage("ERRS000170", "시작"));
        				return false;
        			}
        			else if (zpcdEndNo == undefined || zpcdEndNo == "") {
        				//alert("종료 우편번호 정보가 유효하지 않습니다.");
        				alert(this.fn_getMessage("ERRS000170", "종료"));
        				return false;
        			}
        			else if (rmksCTR == undefined || rmksCTR == "") {
        				//alert("비고 정보가 존재하지 않습니다.");
        				alert(this.fn_getMessage("ERRS000171"));
        				return false;
        			}
        		}
        	}

        	return true;
        };

        // 화면 첫 로딩시 모두 조회
        this.fn_requestAll = function() {
        	// 공통코드 조회
        	this.fn_searchCommonCode();
        	// 도서산간 구분코드 조회
        	this.fn_searchIsareaZpcdGubun();

        	// 배송비구분 조회);
        	this.fn_searchBasisDlcstCount();
        	// 도서산간 정보 조회
        	this.fn_searchIsareaZpcdCount();
        };

        // 서버에서 리턴받은 공통코드 리스트를 공통코드별로 분류
        this.fn_setCommonCode = function() {
        	// 배송비구분
        	this.ds_comCd.filter("COM_CLSF_CD=='CART_DLCST_SPR_CD'");
        	this.ds_cartdlcststr.copyData(this.ds_comCd, true);

        	// 도서산간-사용여부
        	this.ds_comCd.filter("COM_CLSF_CD=='USE_YN'");
        	this.ds_aplyYn.copyData(this.ds_comCd, true);
        };

        // 우편번호 중복 검사
        this.fn_checkPostNumber = function(startPost, endPost) {
        	var strNoValue = startPost;
        	var endNoValue = endPost;
        	var fromValue = 0;
        	var toValue = 0;

        	for (var i = 0; i < this.ds_list02.getRowCount() - 1; i++) {
        		fromValue = nexacro.toNumber(this.ds_list02.getColumn(i, "ZPCD_STR_NO"));
        		toValue = nexacro.toNumber(this.ds_list02.getColumn(i, "ZPCD_END_NO"));

        		// 시작번호가 기존의 시작/종료번호 구간에 포함되는 경우
        		if (strNoValue >= fromValue && strNoValue <= toValue)	return false;
        		// 신규번호 구간이 기존의 시작/종료번호 구간을 포함한 경우
        		else if (strNoValue <= fromValue && endNoValue >= toValue)	return false;
        		// 종료번호가 기존의 시작/종료번호 구간에 포함되는 경우
        		else if (endNoValue >= fromValue && endNoValue <= toValue)	return false;
        		// 신규번호 구간이 기존의 시작/종료번호 구간에 포함된 경우
        		else if (strNoValue >= fromValue && endNoValue <= toValue)	return false;
        	}
        	return true;
        };

        // 일괄 사용/미사용
        this.fn_processBatchAll = function(useYn) {
        	this.grid_list02.set_binddataset();
        	this.ds_list02.filter("CHK=='1'");

        	if (this.ds_list02.rowcount == 0) {
        		this.ds_list02.filter("");
        		this.grid_list02.set_binddataset(this.ds_list02);
        		alert(this.fn_getMessage("ERRS000137"));
        		return;
        	}

        	this.ds_list02.filter("");
        	this.grid_list02.set_binddataset(this.ds_list02);

        	//var sReturn = this.confirm("선택하신 내역을 모두 사용처리하시겠습니까?");
        	var sReturn = this.confirm(this.fn_getMessage("ERRS000172", useYn == "Y" ? "사용" : "미사용"));
        	if (sReturn == false) {
        		return;
        	}

        	// 기존의 서버전달용 업데이트 대상을 모두 삭제
        	this.ds_updateIsareaZpcd.clearData();

        	for (var i = 0; i < this.ds_list02.rowcount; i++) {
        		if (this.ds_list02.getColumn(i, "CHK") == 1) {
        			this.ds_updateIsareaZpcd.addRow();
        			this.ds_updateIsareaZpcd.copyRow(this.ds_updateIsareaZpcd.getRowCount() - 1, this.ds_list02, i);
        			this.ds_updateIsareaZpcd.setColumn(this.ds_updateIsareaZpcd.getRowCount() - 1, "USE_YN", useYn);
        		}
        	}
        	this.fn_updateIsareaZpcd();
        };

        this.fn_isDuplicateCartDlcstNm = function(dlcstNm, exceptRow) {
        	if (this.gfn_isNull(dlcstNm))	return true;

        	var cartDlcstNm = "";
        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		if (i == exceptRow)	continue;

        		cartDlcstNm = this.ds_list01.getColumn(i, "CART_DLCST_NM");

        		if (dlcstNm == cartDlcstNm)	return true;
        	}

        	return false;
        };

        // 구분(CART_DLCST_SPR_CD)에 일반(1)이 하나있는지 검사
        this.fn_checkCartDlcstNormal = function(exceptRow) {
        	var cartDlcstNo = "";
        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		if (i == exceptRow)	continue;

        		cartDlcstNo = this.ds_list01.getColumn(i, "CART_DLCST_SPR_CD");

        		if (cartDlcstNo == "1")	return false;
        	}

        	return true;
        };

        // 배송비설정에는 삭제가 없기 때문에 삭제된 대상은 체크하지 않음.
        this.fn_isChanged = function(ds) {
        	if (ds.rowcount == 0)	return false;

        	var rowType = "";
        	for (var i = 0; i < ds.rowcount; i++) {
        		rowType = ds.getRowType(i);
        		if (rowType == Dataset.ROWTYPE_UPDATE || rowType == Dataset.ROWTYPE_INSERT)		return true;
        	}

        	return false;
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        // 배송비구분 조회(테스트용)
        this.btn_retrieve_onclick = function(obj,e)
        {
        	this.fn_searchBasisDlcst();
        };
        // 배송비구분 추가
        this.btn_addDLCST_onclick = function(obj,e)
        {
        	this.btnAddRow = true;
        	var nRow = this.ds_list01.addRow();
        	//var today = this.fn_today();
        	var today = this.fn_calcToday(1);
        	today = today.substr(0, 8);

        	this.ds_list01.setColumn(nRow, "CART_DLCST_NO", "");
        	this.ds_list01.setColumn(nRow, "CART_DLCST_SPR_CD", "");
        	this.ds_list01.setColumn(nRow, "APLY_STR_DT", today);
        	this.ds_list01.setColumn(nRow, "APLY_END_DT", "99991231");
        };

        // 엑셀 다운로드
        this.btn_excelDownload_onclick = function(obj,e)
        {
        	this.ofn_exportExcel({form:this, grid:[this.grid_list01, this.grid_list02], fileName:"도서산간배송비"});
        };

        // 도서산간 저장
        this.btn_saveZpcd_onclick = function(obj,e)
        {
        	this.ds_updateIsareaZpcd.clearData();

        	if (this.fn_checkIsareaZpcdSaveData() == false) {
        		return;
        	}

        	var nRow = -1;
        	var nRowType = "";
        	for (var i = 0; i < this.ds_list02.rowcount; i++) {
        		nRowType = this.ds_list02.getRowType(i);
        		if (nRowType == Dataset.ROWTYPE_INSERT) {
        			nRow = this.ds_updateIsareaZpcd.addRow();
        			this.ds_updateIsareaZpcd.copyRow(nRow, this.ds_list02, i);
        		}
        	}

        	if (this.ds_updateIsareaZpcd.getRowCount() > 0) {
        		this.fn_insertIsareaZpcd();
        	}
        };
        // 도서산간 추가
        this.btn_addZPCD_onclick = function(obj,e)
        {
        	var lastRowIndex = this.ds_list02.getRowCount() - 1;
        	var nRow = this.ds_list02.addRow();

        	// 기본값 설정(도서산간구분, 적용여부)
        	this.ds_list02.setColumn(nRow, "CART_DLCST_NO", this.ds_list02.getColumn(lastRowIndex, "CART_DLCST_NO"));
        	this.ds_list02.setColumn(nRow, "USE_YN", "Y");

        	// "추가"인 데이터 구분
        	this.ds_list02.setColumn(nRow, "ADD", "Y");

        	this.fn_showIsareaZpcdSaveBtn();
        };

        // 도서산간 일괄사용
        this.btn_batchAllUse_onclick = function(obj,e)
        {
        	this.fn_processBatchAll("Y");
        };

        // 도서산간 일괄미사용
        this.btn_batchAllNotUse_onclick = function(obj,e)
        {
        	this.fn_processBatchAll("N");
        };

        // 도서산간 조회(테스트용)
        this.btn_retrieveZpcd_onclick = function(obj,e)
        {
        alert(this.fn_getMessage("ERRS000211"));
        return;
        	this.fn_searchIsareaZpcdGubun();
        	this.fn_searchZpcd();
        };

        /***********************************************************************************************
        * GRID EVENT 영역
        ************************************************************************************************/

        this.grid_list01_oncellclick = function(obj,e)
        {
        	var dataSet = obj.getBindDataset();
        	trace("e.col : " + e.col + ", e.row : " + e.row);

        	if (e.col == 0 && obj.getCurEditType() == "combo") {
        		this.grid_list01.setCellPos(e.cell);
        		this.grid_list01.showEditor(true);
        		this.grid_list01.dropdownCombo();
        	}
        	else if ((e.col == 3 || e.col == 5) && obj.getCurEditType() == "date") {
        		this.grid_list01.setCellPos(e.cell);
        		this.grid_list01.showEditor(true);
        		this.grid_list01.dropdownCalendar();
        	}
        	// "적용" 버튼
        	else if (e.col == 6) {
        		// DB Update
        		if (this.ds_list01.getRowType(e.row) == Dataset.ROWTYPE_UPDATE ||
        		    this.ds_list01.getRowType(e.row) == Dataset.ROWTYPE_INSERT) {
        			trace("업데이트 대상입니다.");
        		}
        		else {
        			//alert("적용할 내용이 없습니다.");
        			alert(this.fn_getMessage("ERRS000174"));
        			return;
        		}

        		var cartDlcstSprCd = this.ds_list01.getColumn(e.row, "CART_DLCST_SPR_CD");
        		var cartDlcstNm = this.ds_list01.getColumn(e.row, "CART_DLCST_NM");
        		var dlcstAmt = this.ds_list01.getColumn(e.row, "DLCST_AMT");
        		var aplyStrDt = this.ds_list01.getColumn(e.row, "APLY_STR_DT");
        		var orgDlcstAmt = this.ds_list01.getColumn(e.row, "ORG_DLCST_AMT");
        		var orgAplyStrDt = this.ds_list01.getColumn(e.row, "ORG_STR_DT");

        		// 구분 - 필수입력
        		if (this.gfn_isNull(cartDlcstSprCd)) {
        			alert(this.fn_getMessage("ERRS000144", "구분"));
        			return;
        		}
        		// 구분명 - 필수입력
        		if (this.gfn_isNull(cartDlcstNm)) {
        			alert(this.fn_getMessage("ERRS000144", "구분명"));
        			return;
        		}
        		// 배송비 - 필수입력
        		if (this.gfn_isNull(dlcstAmt)) {
        			alert(this.fn_getMessage("ERRS000144", "배송비"));
        			return;
        		}

        		// 배송비가 변경된 경우
        		if (dlcstAmt != orgDlcstAmt) {
        			// 시작일자가 변경되었는지 검사
        			if (aplyStrDt == orgAplyStrDt) {
        				//alert("시작일자가 동일합니다. 시작일자를 변경하여 주십시오.");
        				alert(this.fn_getMessage("ERRS000418", "시작일자", "시작일자"));
        				return;
        			}
        		}

        		// 시작일자가 변경된 경우
        		if (aplyStrDt != orgAplyStrDt) {
        			// 배송비가 변경되었는지 검사
        			if (dlcstAmt == orgDlcstAmt) {
        				//alert("배송비가 동일합니다. 배송비를 변경하여 주십시오.");
        				alert(this.fn_getMessage("ERRS000418", "배송비", "배송비"));
        				return;
        			}
        		}

        		this.ds_updateBasisDlcst.clearData();
        		this.ds_updateBasisDlcst.addRow();
        		var bSucc = this.ds_updateBasisDlcst.copyRow(0, this.ds_list01, e.row);

        		if (!bSucc) {
        			trace("Dataset 복사 실패");
        			return;
        		}

        		this.fn_updateBasisDlcst();
        	}
        	// 이력조회
        	else if (e.col == 7) {
        		// key : CART_DLCST_NO
        		var cartDlcstNo = this.ds_list01.getColumn(e.row, "CART_DLCST_NO");

        		if (this.gfn_isNull(cartDlcstNo)) {
        			//alert("잘못된 카트배송비 번호 입니다. 이력을 조회할 수 없습니다.");
        			alert(this.fn_getMessage("ERRS000175"));
        			return;
        		}

        		trace("CellText : " + this.grid_list01.getCellText(e.row, 0));
        		var title = this.grid_list01.getCellText(e.row, 0) + "-" + this.grid_list01.getCellText(e.row, 1);
        		var objParam = {type:"history", cartDlcstNo:cartDlcstNo, subTitle:title};
        		this.gfn_openPopup("CartDlcstNoHistoryPopup", "OD::SSP_BO_OA_62.xfdl", objParam);
        	}
        };

        this.grid_list01_oninput = function(obj,e)
        {
        	var curRow = obj.getSelectedDatasetRows();

        	if(obj.getCellPos() == 3)  //해당 cell 의 index
        	{
        		var oriValue = this.ds_list01.getColumn(curRow, "APLY_STR_DT");
        		this.ds_list01.setColumn(curRow, "APLY_STR_DT", oriValue);
        		obj.setEditingValue(oriValue);
        	}
        };

        this.grid_list01_oncloseup = function(obj,e)
        {
        	if (e.col == 0) {
        		obj.moveToNextCell();
        	}
        	else if (e.col == 3) {
        		//var curRow = obj.getSelectedDatasetRows();
        		//this.ds_list01.setColumn(curRow, "APLY_STR_DT", e.value);
        	}
        };

        this.grid_list02_oncellclick = function(obj,e)
        {
        	var dataSet = obj.getBindDataset();
        	trace("e.col : " + e.col + ", e.row : " + e.row);

        	if ((e.col == 4 || e.col == 5) && obj.getCurEditType() == "combo") {
        		this.grid_list02.setCellPos(e.cell);
        		this.grid_list02.showEditor(true);
        		this.grid_list02.dropdownCombo();
        	}
        };

        /***********************************************************************************************
        * DATASET EVENT 영역
        ************************************************************************************************/
        // 그리드 컬럼값 변경 이벤트(배송비 음수, 적용일자 유효성 검사)
        this.ds_list01_oncolumnchanged = function(obj,e)
        {

        	// 구분
        	if (e.columnid == "CART_DLCST_SPR_CD") {
        		// "일반"은 하나만 존재할 수 있다.
        		if (e.newvalue == "1" && this.fn_checkCartDlcstNormal(e.row) == false) {
        			alert("'일반' 구분은 이미 존재 합니다. 다른 구분을 선택하십시오.");
        			this.ds_list01.setColumn(e.row, "CART_DLCST_SPR_CD", e.oldvalue);
        		}
        	}
        	// 배송비 설정
        	else if (e.columnid == "DLCST_AMT") {
        		var newDlcstAmt = nexacro.toNumber(e.newvalue);

        		if (nexacro.toNumber(e.newvalue) <= 0) {
        			// 음수 또는 0은 설정할 수 없음
        			alert(this.fn_getMessage("ERRS000211"));
        			this.ds_list01.setColumn(e.row, "DLCST_AMT", e.oldvalue);
        		}
        	}
        	// 구분명
        	else if (e.columnid == "CART_DLCST_NM") {
        		if (this.fn_isDuplicateCartDlcstNm(e.newvalue, e.row)) {
        		trace("### ds_list01 - oncolumnchanged - CART_DLCST_NM");
        			//alert("이미 사용중인 구분명 입니다. 다른 구분명을 입력하십시오.");
        			alert(this.fn_getMessage("ERRS000419", "구분명", "구분명"));
        			this.ds_list01.setColumn(e.row, "CART_DLCST_NM", e.oldvalue);
        		}
        	}
        	// 시작일 설정
        	else if (e.columnid == "APLY_STR_DT") {
        	trace("### ds_list01 - oncolumnchanged - APLY_STR_DT");
        		var oldStartValue = nexacro.toNumber(e.oldvalue);
        		var newStartValue = nexacro.toNumber(e.newvalue);
        		var endValue = nexacro.toNumber(this.ds_list01.getColumn(e.row, "APLY_END_DT"));
        		var today = this.fn_today();
        		var todayValue = nexacro.toNumber(today);

        		// 새로운 시작일자가 예전 시작일자보다 작은 경우
        		if (newStartValue < oldStartValue) {
        			//alert("새로운 시작일자가 이전 시작일자보다 과거 입니다.\r\n설정할 수 없는 일자정보 입니다.");
        			alert(this.fn_getMessage("ERRS000176"));
        			this.ds_list01.setColumn(e.row, "APLY_STR_DT", e.oldvalue);
        		}
        		else if (newStartValue >= endValue) {
        			//alert("새로운 시작일자가 종료일자보다 미래 입니다.\r\n설정할 수 없는 일자정보 입니다.");
        			alert(this.fn_getMessage("ERRS000177"));
        			this.ds_list01.setColumn(e.row, "APLY_STR_DT", e.oldvalue);
        		}
        		else if (newStartValue <= todayValue) {
        			//alert("새로운 시작일자가 현재일자보다 과거 입니다.\r\n설정할 수 없는 일자정보 입니다.");
        			alert(this.fn_getMessage("ERRS000178"));
        			this.ds_list01.setColumn(e.row, "APLY_STR_DT", e.oldvalue);
        		}
        	}
        	// 종료일 설정
        	else if (e.columnid == "APLY_END_DT") {
        		var oldEndValue = nexacro.toNumber(e.oldvalue);
        		var newEndValue = nexacro.toNumber(e.newvalue);
        		var startValue = nexacro.toNumber(this.ds_list01.getColumn(e.row, "APLY_STR_DT"));

        		if (newEndValue <= startValue) {
        			//alert("새로운 종료일자가 시작일자보다 과거입니다.\r\n설정할 수 없는 일자정보 입니다.");
        			alert(this.fn_getMessage("ERRS000179"));
        			this.ds_list01.setColumn(e.row, "APLY_END_DT", e.oldvalue);
        		}
        	}
        };

        this.ds_list01_canrowposchange = function(obj,e)
        {
        	if (this.fn_isChanged(this.ds_list01) == false ||
        		this.btnAddRow == true) {
        		this.btnAddRow = false;
        		return true;
        	}

        	// 수정된 내용이 있습니다. 적용하시겠습니까?
        	var rtn = this.confirm(this.fn_getMessage("ERRS000162"));
        	if (rtn) {	// "확인"
        		this.grid_list01_oncellclick(this.grid_list01, {row:e.oldrow, col:6});
        		return false;
        	}
        	else {	// "취소"
        		return true;
        	}
        };

        //
        this.ds_list02_oncolumnchanged = function(obj,e)
        {
        	trace("### ds_list02_oncolumnchanged - columnid : " + e.columnid);
        	if (e.columnid == "ZPCD_STR_NO") {
        		var strNoValue = nexacro.toNumber(e.newvalue);
        		var endNo = this.ds_list02.getColumn(e.row,"ZPCD_END_NO");
        		var endNoValue = nexacro.toNumber(endNo);

        		if (e.newvalue.length != 5) {
        			//alert("우편번호는 5자리를 입력해야 합니다.\r\n설정할 수 없는 우편번호 입니다.");
        			alert(this.fn_getMessage("ERRS000180", e.newvalue));
        			this.ds_list02.setColumn(e.row, "ZPCD_STR_NO", e.oldvalue);
        			return;
        		}

        		if (strNoValue <= 0) {
        			return;
        		}
        		else if (this.gfn_isNull(endNo)) {
        			return;
        		}

        		// 우편번호 범위 중복 검사
        		if (this.fn_checkPostNumber(strNoValue, endNoValue) == false) {
        			alert(this.fn_getMessage("ERRS000210"));
        			this.ds_list02.setColumn(e.row, "ZPCD_STR_NO", e.oldvalue);
        			return;
        		}
        	}
        	else if (e.columnid == "ZPCD_END_NO") {
        		var strNo = this.ds_list02.getColumn(e.row, "ZPCD_STR_NO");
        		var strNoValue = nexacro.toNumber(strNo);
        		var endNoValue = nexacro.toNumber(e.newvalue);

        		if (e.newvalue.length != 5) {
        			//alert("우편번호는 5자리를 입력해야 합니다.\r\n설정할 수 없는 우편번호 입니다.");
        			alert(this.fn_getMessage("ERRS000180", e.newvalue));
        			this.ds_list02.setColumn(e.row, "ZPCD_END_NO", e.oldvalue);
        			return;
        		}

        		if (strNoValue <= 0) {
        			return;
        		}
        		else if (endNoValue <= 0) {
        			return;
        		}
        		else if (strNoValue > endNoValue) {
        			//alert("시작 우편번호보다 종료 우편번호가 작습니다.\r\n설정할 수 없는 우편번호 입니다.");
        			alert(this.fn_getMessage("ERRS000181", strNoValue, endNoValue));
        			this.ds_list02.setColumn(e.row, "ZPCD_END_NO", e.oldvalue);
        			return;
        		}
        		// 우편번호 범위 중복 검사
        		if (this.fn_checkPostNumber(strNoValue, endNoValue) == false) {
        			alert(this.fn_getMessage("ERRS000210"));
        			this.ds_list02.setColumn(e.row, "ZPCD_END_NO", e.oldvalue);
        			return;
        		}
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_61_onload,this);
            this.grid_list01.addEventHandler("oncloseup",this.grid_list01_oncloseup,this);
            this.grid_list01.addEventHandler("oncellclick",this.grid_list01_oncellclick,this);
            this.grid_list01.addEventHandler("oninput",this.grid_list01_oninput,this);
            this.btn_addDLCST.addEventHandler("onclick",this.btn_addDLCST_onclick,this);
            this.sta_zpcdTotalCount.addEventHandler("onclick",this.totalPageCount_onclick,this);
            this.btn_batchAllNotUse.addEventHandler("onclick",this.btn_batchAllNotUse_onclick,this);
            this.btn_batchAllUse.addEventHandler("onclick",this.btn_batchAllUse_onclick,this);
            this.btn_addZPCD.addEventHandler("onclick",this.btn_addZPCD_onclick,this);
            this.btn_saveZpcd.addEventHandler("onclick",this.btn_saveZpcd_onclick,this);
            this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);
            this.btn_retrieveZpcd.addEventHandler("onclick",this.btn_retrieveZpcd_onclick,this);
            this.grid_list02.addEventHandler("oncellclick",this.grid_list02_oncellclick,this);
            this.btn_excelDownload.addEventHandler("onclick",this.btn_excelDownload_onclick,this);
            this.ds_list01.addEventHandler("oncolumnchanged",this.ds_list01_oncolumnchanged,this);
            this.ds_list01.addEventHandler("canrowposchange",this.ds_list01_canrowposchange,this);
            this.ds_list02.addEventHandler("oncolumnchanged",this.ds_list02_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_OA_61.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
