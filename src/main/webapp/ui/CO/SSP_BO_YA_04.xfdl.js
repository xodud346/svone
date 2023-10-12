(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_04");
            this.set_titletext("운영자조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"USE_YN\"/><Col id=\"ORG_CD\"/><Col id=\"ORG_NM\"/><Col id=\"OPRTR_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprtrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_TASK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBPOS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_CERT_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RTCO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_usrStatsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_TASK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBPOS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT_CERT_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RTCO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ORG_CD\"/><Col id=\"ORG_NM\"/><Col id=\"OPRTR_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"108","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"62","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"62","60","26","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_useYn","1184","25","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnOprtr","1012","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("OPRTR_NM","822","24","186","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("OPRTR_ID","672","24","146","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("ORG_CD","160","24","146","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("ORG_NM","310","24","186","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnOrgSearch","500","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","532","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("운영자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("조직코드");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static18","1044","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"138","100","28","134",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"138","110","28","238",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutClear",null,"138","110","28","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","150","200","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("(총 0건, 1 / 1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","176",null,null,"20","96",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_oprtrInfo");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_readonly("true");
            obj.set_cssclass("grd_WF_list");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"92\"/><Column size=\"87\"/><Column size=\"85\"/><Column size=\"128\"/><Column size=\"94\"/><Column size=\"97\"/><Column size=\"76\"/><Column size=\"123\"/><Column size=\"134\"/><Column size=\"92\"/><Column size=\"77\"/><Column size=\"96\"/><Column size=\"134\"/><Column size=\"96\"/><Column size=\"92\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"조직코드\"/><Cell col=\"2\" text=\"조직명\"/><Cell col=\"3\" text=\"운영자ID\"/><Cell col=\"4\" text=\"사원번호\"/><Cell col=\"5\" text=\"운영자명\"/><Cell col=\"6\" text=\"담당업무\"/><Cell col=\"7\" text=\"직위명\"/><Cell col=\"8\" text=\"직급명\"/><Cell col=\"9\" text=\"사용여부\"/><Cell col=\"10\" text=\"전화번호\"/><Cell col=\"11\" text=\"휴대폰번호\"/><Cell col=\"12\" text=\"사용자상태\"/><Cell col=\"13\" text=\"영업팀\"/><Cell col=\"14\" text=\"영업담당\"/><Cell col=\"15\" text=\"계좌인증권한여부\"/><Cell col=\"16\" text=\"입사일자\"/><Cell col=\"17\" text=\"퇴사일자\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"1\" text=\"bind:ORG_CD\" combodataset=\"ds_gUtClausSprCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:ORG_NM\" textDecoration=\"none\" cssclass=\"grd_WF_left\"/><Cell col=\"3\" text=\"bind:OPRTR_ID\" cssclass=\"grid_active\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:EMP_NO\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:OPRTR_NM\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:CHR_TASK_NM\" cssclass=\"grd_WF_left\"/><Cell col=\"7\" text=\"bind:PSTN_NM\"/><Cell col=\"8\" text=\"bind:JBPOS_NM\"/><Cell col=\"9\" text=\"bind:USE_YN\" expr=\"USE_YN == &quot;Y&quot; ? &quot;사용&quot; :  &quot;미사용&quot;\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:TEL_NO\"/><Cell col=\"11\" text=\"bind:HP_NO\"/><Cell col=\"12\" text=\"bind:USR_STATS_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_usrStatsCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"13\" text=\"bind:SALS_TEAM_NM\"/><Cell col=\"14\" text=\"bind:SALS_CHR_NM\"/><Cell col=\"15\" text=\"bind:ACNT_CERT_AUTH_YN\"/><Cell col=\"16\" text=\"bind:ENT_DT\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:RTCO_DT\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"36","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excel","0","986",null,null,"40","-284",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_excel");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_readonly("true");
            obj.set_cssclass("grd_WF_list");
            obj.set_selecttype("row");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"92\"/><Column size=\"87\"/><Column size=\"85\"/><Column size=\"128\"/><Column size=\"94\"/><Column size=\"97\"/><Column size=\"76\"/><Column size=\"123\"/><Column size=\"134\"/><Column size=\"92\"/><Column size=\"77\"/><Column size=\"96\"/><Column size=\"134\"/><Column size=\"96\"/><Column size=\"92\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"조직코드\"/><Cell col=\"2\" text=\"조직명\"/><Cell col=\"3\" text=\"운영자ID\"/><Cell col=\"4\" text=\"사원번호\"/><Cell col=\"5\" text=\"운영자명\"/><Cell col=\"6\" text=\"담당업무\"/><Cell col=\"7\" text=\"직위명\"/><Cell col=\"8\" text=\"직급명\"/><Cell col=\"9\" text=\"사용여부\"/><Cell col=\"10\" text=\"전화번호\"/><Cell col=\"11\" text=\"휴대폰번호\"/><Cell col=\"12\" text=\"사용자상태\"/><Cell col=\"13\" text=\"영업팀\"/><Cell col=\"14\" text=\"영업담당\"/><Cell col=\"15\" text=\"계좌인증권한여부\"/><Cell col=\"16\" text=\"입사일자\"/><Cell col=\"17\" text=\"퇴사일자\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"1\" text=\"bind:ORG_CD\" combodataset=\"ds_gUtClausSprCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:ORG_NM\" textDecoration=\"none\" cssclass=\"grd_WF_left\"/><Cell col=\"3\" text=\"bind:OPRTR_ID\" cssclass=\"grid_active\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:EMP_NO\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:OPRTR_NM\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:CHR_TASK_NM\"/><Cell col=\"7\" text=\"bind:PSTN_NM\"/><Cell col=\"8\" text=\"bind:JBPOS_NM\"/><Cell col=\"9\" text=\"bind:USE_YN\" expr=\"USE_YN == &quot;Y&quot; ? &quot;사용&quot; :  &quot;미사용&quot;\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:TEL_NO\"/><Cell col=\"11\" text=\"bind:HP_NO\"/><Cell col=\"12\" text=\"bind:USR_STATS_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_usrStatsCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"13\" text=\"bind:SALS_TEAM_CD\"/><Cell col=\"14\" text=\"bind:SALS_CHR_CD\"/><Cell col=\"15\" text=\"bind:ACNT_CERT_AUTH_YN\"/><Cell col=\"16\" text=\"bind:ENT_DT\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:RTCO_DT\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Div00.form.cmb_useYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.OPRTR_NM","value","ds_search","OPRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.OPRTR_ID","value","ds_search","OPRTR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.ORG_CD","value","ds_search","ORG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.ORG_NM","value","ds_search","ORG_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_04.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_YA_04.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();	//application object
        //조직조회 팝업 관련
        this.selectOrgCount = 0;
        this.selectOrgCd ="";
        this.selectOrgNm ="";
        //운영자 조회 팝업 관련
        this.selectOprtrCount = 0;
        this.selectOprtrId ="";
        this.selectOprtrNm ="";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	this.fn_commonCodeSearch();
        	this.fn_search(true);

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "btn_search_onclick",
        		SHIFT_ENTER : "",
        		SHIFT_S : "",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});
        };

        /*this.fn_onkeyup = function(obj:nexacro.Form,e:nexacro.KeyEventInfo){
        	var objType = obj.getFocus();
        	//if( e.keycode == 13 && objType == "[object Edit]"){
        		//this.fn_search(true);
        	//}

        	if( e.keycode == 13 ) {

        		this.ds_popSearch.clearData();
        		this.ds_popSearch.addRow();

        		if( e.fromobject.valueOf() == "[object Edit]" ) {
        			if( e.fromobject.id == "ORG_CD" || e.fromobject.id == "ORG_NM") {
        				//조직조회 엔터
        				this.ds_popSearch.setColumn(0, "ORG_CD", this.ds_search.getColumn(0, "ORG_CD"));
        				this.ds_popSearch.setColumn(0, "ORG_NM", this.ds_search.getColumn(0, "ORG_NM"));
        				this.fn_popupAutoSearch("selectOprtrOrgInfoList", "/co/select-oprtr-org-info-list.do");
        			} else if( e.fromobject.id == "OPRTR_ID" || e.fromobject.id == "OPRTR_NM") {
        				//운영자 조회 엔터
        				this.ds_popSearch.setColumn(0, "OPRTR_ID", this.ds_search.getColumn(0, "OPRTR_ID"));
        				this.ds_popSearch.setColumn(0, "OPRTR_NM", this.ds_search.getColumn(0, "OPRTR_NM"));
        				this.fn_popupAutoSearch("selectOprtrInfoList", "/co/select-oprtr-info-list.do");
        			}
        		}
        	}
        };*/


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(bInit){
        	var sSvcId = "search";
        	var sUrl = "/co/select-oprtr-info-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_oprtrInfo=ds_output";
        	var arg;

        	if(bInit) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0, "START_NUM", 0);
        		this.ds_search.setColumn(0, "ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_useYn=ds_output1 ds_usrStatsCd=ds_output2";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "USE_YN,USR_STATS_CD");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //엑셀다운로드 데이터 조회
        this.fn_excelSearch = function(){
        	var sSvcId = "excelSearch";
        	var sUrl = "/co/select-oprtr-info-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_excel=ds_output";
        	var arg;

        	this.ds_search.setColumn(0,"START_NUM", null);
        	this.ds_search.setColumn(0,"ROW_COUNT", null);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_popupSearch = function (svcId, url){
        	var sSvcId = svcId;
        	var sUrl = url;
        	var inDs = "ds_search=ds_popSearch";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	var oPaging = this.div_paging;
        	var objParam = {};

        	if(errorCode != 0 && errorCode != -100){
        		alert(errorMsg);
        	}

        	switch(svcID){
        		case "search":
        			this.div_paging.form.cfn_createPage(this.div_paging ,this.totalCount, this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
        			break;
        		case "commonCodeSearch":
        			this.ds_useYn.insertRow(0);
        			this.ds_useYn.setColumn(0, "COM_DTL_CD", "");
        			this.ds_useYn.setColumn(0, "COM_DTL_CD_NM", "전체");
        			break;
        		case "excelSearch":
        			this.ofn_exportExcel({form:this, grid:this.grd_excel, fileName:"운영자조회"});
        			break;
        		case "selectOprtrOrgInfoList":
        			if(this.selectOrgCount == 1){
        				this.ds_search.setColumn(0, "ORG_CD", this.selectOrgCd);
        				this.ds_search.setColumn(0, "ORG_NM", this.selectOrgNm);
        			}else{
        				this.gfn_openPopup("SSP_BO_PP_43", "CO_POP::SSP_BO_PP_43.xfdl", objParam);
        			}
        			break;
        		case "selectOprtrInfoList":
        			if(this.selectOprtrCount == 1){
        				this.ds_search.setColumn(0, "OPRTR_ID", this.selectOprtrId);
        				this.ds_search.setColumn(0, "OPRTR_NM", this.selectOprtrNm);
        			}else{
        				this.gfn_openPopup("SSP_BO_PP_44", "CO_POP::SSP_BO_PP_44.xfdl", objParam);
        			}
        			break;
        		default:
        			break;
        	}
        };

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		this.fn_search();
        	}

        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건, "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.sta_totcnt.set_text(sTotText);
        };

        //정렬콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid = null;
        	if(sGridId == "grd_list"){
        		oSortInfo = this.grd_list.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		this.fn_search();
        	}
        };

        //팝업 콜백
        this.fn_popupCallback = function(sPopupId, sRetValue) {
        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";

        	if(sRetValue == undefined){
        		return;
        	}else{
        		resData = JSON.parse(sRetValue);
        	}

        	if( sPopupId == "SSP_BO_PP_43" ) {
        		// 조직명 조회 리턴
        		this.ds_search.setColumn(0, "ORG_CD", resData.ORG_CD);
        		this.ds_search.setColumn(0, "ORG_NM", resData.ORG_NM);
        	} else if( sPopupId == "SSP_BO_PP_44" ) {
        		// 조직명 조회 리턴
        		this.ds_search.setColumn(0, "OPRTR_ID", resData.OPRTR_ID);
        		this.ds_search.setColumn(0, "OPRTR_NM", resData.OPRTR_NM);
        	}
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        this.cfn_formInit = function(){
        	//grid 초기 설정
        	this.grd_list.uSortFlag = "false";
        	this.grd_list.uServerSortFlag = "true";
        	this.grd_list.uSortCallback = "fn_sortCallback";
        	this.grd_list.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_list";
        	this.grd_list.uRightMouse = "true";
        	this.grd_list.uPersonalFlag = "true";
        	this.grd_list.uDefaultFormat = "NO,ORG_CD,ORG_NM,OPRTR_ID,EMP_NO,OPRTR_NM,CHR_TASK_NM,PSTN_NM,JBPOS_NM,USE_YN,TEL_NO,HP_NO,USR_STATS_CD,SALS_TEAM_CD,SALS_CHR_CD,ACNT_CERT_AUTH_YN,ENT_DT,RTCO_DT";
        };

        this.cfn_personalPopupClose = function(sRet){
        	this.grd_list.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };


        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회 click  이벤트
        this.btn_search_onclick = function(obj,e){
        	this.fn_search(true);
        };

        this.Div01_btn_excel_onclick = function(obj,e)
        {
        	if(this.ds_search.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        		alert('조회 조건이 변경 되었습니다.\n다시 조회하시기 바랍니다.');
        		return;
        	}

        	this.fn_excelSearch();
        };

        this.Div00_btn_clear_onclick = function(obj,e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.Div00.form.cmb_useYn.set_index(0);
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        	if(e.col == 3){
        		var objParam = {};
        		objParam.oprtrId = this.ds_oprtrInfo.getColumn(e.row, "OPRTR_ID");
        		this.gfn_openPopup("SSP_BO_YA_22", "CO_POP::SSP_BO_YA_22.xfdl", objParam);
        	}
        };

        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list", this.grd_list.getCurFormatString());
        };

        this.btn_layoutClear_onclick = function(obj,e)
        {
        	//suOrgFormat
        	this.gfn_personalSave("grd_list", this.grd_list.uOrgFormat);
        	this.grd_list.set_formats(this.grd_list.uOrgFormat);
        };

        //조직조회 팝업 SSP_BO_PP_43
        this.Div00_btnOrgSearch_onclick = function(obj,e)
        {
        	this.fn_popup("SSP_BO_PP_43");
        };

        //운영자 조회 버튼
        this.Div00_btnOprtr_onclick = function(obj,e)
        {
        	this.fn_popup("SSP_BO_PP_44");
        };

        //팝업 호출 함수
        this.fn_popup = function(popupId) {
        	var objParam = {};

        	if( popupId == "SSP_BO_PP_43" ){
        		// 조직명 조회 팝업
        		objParam.orgCd = this.ds_search.getColumn(0, "ORG_CD");
        		objParam.orgNm = this.ds_search.getColumn(0, "ORG_NM");
        	} else if( popupId == "SSP_BO_PP_44" ){
        		// 운영자명 조회 팝업
        		objParam.oprtrId = this.ds_search.getColumn(0, "OPRTR_ID");
        		objParam.oprtrNm = this.ds_search.getColumn(0, "OPRTR_NM");
        	}

        	this.gfn_openPopup(popupId, "CO_POP::" + popupId + ".xfdl", objParam, "fn_popupCallback");
        };


        //팝업 입력창에 입력 후 엔터 칠 경우.
        this.fn_popupAutoSearch = function(id, url) {
        	var sSvcId = id;
        	var sUrl = url;
        	var inDs = "ds_search=ds_popSearch";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_clear.addEventHandler("onclick",this.Div00_btn_clear_onclick,this);
            this.Div00.form.cmb_useYn.addEventHandler("onitemchanged",this.Div00_cmb_useYn_onitemchanged,this);
            this.Div00.form.btnOprtr.addEventHandler("onclick",this.Div00_btnOprtr_onclick,this);
            this.Div00.form.ORG_CD.addEventHandler("onkeydown",this.ORG_CD_onkeydown,this);
            this.Div00.form.ORG_NM.addEventHandler("onchanged",this.Div00_Edit38_onchanged,this);
            this.Div00.form.btnOrgSearch.addEventHandler("onclick",this.Div00_btnOrgSearch_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.Div01_btn_excel_onclick,this);
            this.btn_layoutClear.addEventHandler("onclick",this.btn_layoutClear_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.grd_excel.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
        };
        this.loadIncludeScript("SSP_BO_YA_04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
