(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_11_2");
            this.set_titletext("운영자권한그룹관리-운영자별메뉴권한");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ROLE_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprtr", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ROLE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ROLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_COL\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ROLE_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_oprtr", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ROLE_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_default", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"1000\"/><Column id=\"HRNK_MNU_SEQ\" type=\"INT\" size=\"5\"/><Column id=\"HGST_MNU_SEQ\" type=\"INT\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_GRP_ROLE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ROLE_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_auth_grp_role_cd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_auth_grp_role_clcd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ROLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ROLE_CL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_NM_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ROLE_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"108","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","20",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","310","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("조직");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("ORG_CD","Static02:10","24","146","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("ORG_NM","ORG_CD:4","24","186","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnOrgSearch","ORG_NM:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"62","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"62","60","26","btnSearch:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","820","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("운영자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("OPRTR_ID","960","24","146","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnOprtr","1300","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("OPRTR_NM","1110","24","186","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","-1","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("권한그룹 역할분류");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("AUTH_GRP_ROLE_CLCD","139","24","155","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_auth_grp_role_clcd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_oprtr","0","176","200",null,null,"6",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_oprtr");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"121\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"운영자명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:OPRTR_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnRegist",null,"Div00:30","81","28","332",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"Div00:30","81","28","417",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"Div00:30","81","28","502",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"Div00:30","110","28","218",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btnClearLayout",null,"Div00:30","110","28","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveLayout",null,"Div00:30","100","28","114",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_menu",null,"214","296",null,"0","6",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_menu");
            obj.set_scrollbartype("auto auto");
            obj.set_treeusecheckbox("false");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_cellmovingtype("none");
            obj.set_scrolltype("both");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/></Columns><Rows><Row size=\"31\"/></Rows><Band id=\"body\"><Cell text=\"bind:MNU_NM\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:MNU_LVL\" tooltiptext=\"bind:MNU_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_oprtr_auth_list","grd_oprtr:10","176",null,null,"grd_menu:10","6",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_main");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"38\"/><Column size=\"48\"/><Column size=\"116\"/><Column size=\"144\"/><Column size=\"192\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"권한분류코드\"/><Cell col=\"3\" text=\"등록자\"/><Cell col=\"4\" text=\"등록일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK_COL\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:AUTH_GRP_ROLE_CD\" displaytype=\"combotext\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &quot;combo&quot; : &quot;none&quot;\" combodataset=\"ds_auth_grp_role_cd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"3\" text=\"bind:REGPSN_NM\"/><Cell col=\"4\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd \" calendardisplaynulltype=\"none\" text=\"bind:REG_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_collapse",null,"176","70","28","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_treeAll");
            obj.set_text("-Close All");
            this.addChild(obj.name, obj);

            obj = new Button("btn_expand",null,"176","71","28","btn_collapse:4",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_treeAll");
            obj.set_text("+Open All");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_excel","20","944","1330","72",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_visible("false");
            obj.set_binddataset("ds_excel");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"119\"/><Column size=\"129\"/><Column size=\"127\"/><Column size=\"111\"/><Column size=\"104\"/><Column size=\"180\"/><Column size=\"164\"/><Column size=\"174\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"운영자명\"/><Cell col=\"2\" text=\"권한분류코드\"/><Cell col=\"3\" text=\"등록자\"/><Cell col=\"4\" text=\"등록일자\"/><Cell col=\"5\" text=\"메뉴 1-DEPTH\"/><Cell col=\"6\" text=\"메뉴 2-DEPTH\"/><Cell col=\"7\" text=\"메뉴 3-DEPTH\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:OPRTR_NM\"/><Cell col=\"2\" text=\"bind:AUTH_GRP_ROLE_NM\"/><Cell col=\"3\" text=\"bind:REGPSN_NM\"/><Cell col=\"4\" text=\"bind:REG_DTM\"/><Cell col=\"5\" text=\"bind:MNU_NM_1\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:MNU_NM_2\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:MNU_NM_3\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.ORG_CD","value","ds_search","ORG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.ORG_NM","value","ds_search","ORG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.OPRTR_ID","value","ds_search","OPRTR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.OPRTR_NM","value","ds_search","OPRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.AUTH_GRP_ROLE_CLCD","value","ds_search","AUTH_GRP_ROLE_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.USE_YN","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_11_2.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_YA_11_2.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_YA_11_2.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_YA_11_2
        /* 작 성 일 자 : 2022/03/21
        /* 작  성   자 : 이성민
        /* 설       명 : 시스템관리 > 운영자권한그룹관리 > 운영자별 메뉴권한
        /***********************************************************/

        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object

        this.selectOrgCount = 0;	//조직조회 카운트
        this.selectOprtrCount = 0;	//운영자 조회 카운트
        this.selectOrgCd = "";
        this.selectOrgNm= "";
        this.selectOprtrId = "";
        this.selectOprtrNm = "";
        this.ds_search.setColumn(0, "USE_YN", "Y");
        //오늘날짜
        this.today = "";

        this.valiGridIds = [
        	  {"name" : "권한분류코드", "id" : "AUTH_GRP_ROLE_CD"}
        ];

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);

        	this.fn_commonCodeSearch();

        	var objDate = new Date();
        	this.today = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "Div00_btnSearch_onclick",
        		SHIFT_ENTER : "",
        		SHIFT_S : "btnRegist_onclick",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_auth_grp_role_clcd=ds_output1 ds_auth_grp_role_cd=ds_output2";
        	var arg = "";

        	//ds_authClsfCd 권한 분류코드
        	this.ds_search.setColumn(0, "CODE_LIST", "AUTH_GRP_ROLE_CLCD,AUTH_GRP_CD");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //조회
        this.fn_search = function(sSvcId) {
            var sUrl = "";
        	var inDs = "";
            var outDs = "";
            var arg;
            var callback = "fn_callBack";

        	if( sSvcId == "selectOprtrMngList" ) {	//운영자명 목록 조회
        		sUrl = "/co/select-oprtr-info-list.do";
        		inDs = "ds_search=ds_search";
        		outDs = "ds_oprtr=ds_output";
        	} else if( sSvcId == "selectOprtrAuthInfoList" ) {	//운영자별 권한분류코드 목록

        		this.ds_search_oprtr.setColumn(0, "CO_CD", this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "CO_CD"));
        		this.ds_search_oprtr.setColumn(0, "OPRTR_ID", this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "OPRTR_ID"));
        		this.ds_search_oprtr.setColumn(i, "AUTH_GRP_ROLE_CLCD", this.ds_search.getColumn(0, "AUTH_GRP_ROLE_CLCD"));

        		sUrl = "/co/mnu_auth/select-oprtr-auth-info-list.do";
        		inDs = "ds_search=ds_search_oprtr";
        		outDs = "ds_main=ds_output";

        	} else if( sSvcId == "selectOprtrAuthMngMenu" ) {	//운영자별 권한 적용 메뉴
        		// 권한분류 목록의 분류코드값을 읽어와 데이터셋에 저장한다.
        		if( this.ds_main.rowcount > 0 ) {
        			this.ds_searchMenu.clearData();
        			for( var i = 0; i < this.ds_main.rowcount; i++ ) {
        				var authCd = this.ds_main.getColumn(i, "AUTH_GRP_ROLE_CD");
        				if( authCd != undefined ) {
        					this.ds_searchMenu.addRow();
        					this.ds_searchMenu.setColumn(i, "AUTH_GRP_ROLE_CD", this.ds_main.getColumn(i, "AUTH_GRP_ROLE_CD"));
        					this.ds_searchMenu.setColumn(i, "AUTH_GRP_ROLE_CLCD", this.ds_search.getColumn(0, "AUTH_GRP_ROLE_CLCD"));
        				}
        			}
        		} else {
        			this.ds_menu.clearData();
        			return false;
        		}

        		sUrl = "/co/mnu_auth/select-dept-auth-mng-menu.do";
        		inDs = "ds_search=ds_searchMenu";
        		outDs = "ds_menu=ds_output";
        	} else if( sSvcId == "selectOprtrAuthMngMenuExcel" ) {
        		sUrl = "/co/mnu_auth/select-oprtr-auth-mng-menu-excel.do";
        		inDs = "ds_search=ds_search_excel";
        		outDs = "ds_excel=ds_output";
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        //저장
        this.fn_save = function() {
        	if( !this.gfn_dsIsUpdated(this.ds_main) ) {
        		alert(this.gfn_getMessage("COMS000008", ["변경", "내용"])); //변경된 내용이 없습니다.
        		return false;
        	} else {

        		// 권한분류코드 중복 확인
        		this.fn_authClsfCdCheck(this.ds_main);

        		//폼 필수값 체크
        		var validation = this.fn_validationGrid(this.grd_oprtr_auth_list, this.valiGridIds, this.ds_main);

        		var sSvcId = "saveOprtrAuthInfo";
        		var sUrl = "/co/mnu_auth/save-oprtr-auth-info.do";
        		var inDs = "ds_search=ds_search ds_save=ds_main:U"
        		var outDs = "";
        		var arg;
        		var callback = "fn_callBack";

        		if( validation ) {
        			if( this.confirm(this.gfn_getMessage("COMS000001", ["운영자별 메뉴권한 정보", "저장"])) ) {	//운영자별 메뉴권한 정보를 저장 하시겠습니까?
        				this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        			}

        			/*
        			var chgMsg = ["운영자별 메뉴권한 정보를", "저장"];	//배열로 넘긴다.
        			var msg = "{0} {1} 하시겠습니까?";	// {} 로 받는다.
        			this.gfn_alert_null("MSGIDIDIDIDIDID", chgMsg, "MSGIDIDIDIDIDID", msg, "C", function(msgId, flag){
        				if( flag ) {
        					this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        				}
        			});
        			*/
        		}
        	}
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/

        this.fn_callBack = function(svcID, errorCode, errorMsg) {
        	if(errorCode != 0){
        		this.alert(errorCode+"\n"+errorMsg);
        		return;

        	}

        	if( svcID == "commonCodeSearch" ) { //공통코드 콜백
        		//초기화 용 데이터셋
        		this.ds_search_default.copyData(this.ds_search);

        		//선택
        		this.Div00.form.AUTH_GRP_ROLE_CLCD.set_index(0);

        	} else if( svcID == "commonCodeSearchRole" ) { //공통코드 콜백
        		this.fn_search("selectOprtrAuthInfoList");

        	} else if( svcID == "selectOptrOrgInfo" ) { //조직조회 콜백


        	} else if( svcID == "selectOprtrMngList" ) {

        		this.ds_search_oprtr.setColumn(0, "CO_CD", this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "CO_CD"));
        		this.ds_search_oprtr.setColumn(0, "OPRTR_ID", this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "OPRTR_ID"));

        	} else if( svcID == "selectOprtrAuthInfoList" ) { //운영자별 메뉴권한 목록 콜백
        		this.fn_search("selectOprtrAuthMngMenu");

        	} else if( svcID == "selectOprtrOrgInfoList" ) {  //조직조회(엔터입력) 콜백
        		if( this.selectOrgCount > 1 ) {
        			this.fn_popup("SSP_BO_PP_43");
        		} else if( this.selectOrgCount == 1 ) {
        			this.ds_search.setColumn(0, "ORG_CD", this.selectOrgCd);
        			this.ds_search.setColumn(0, "ORG_NM", this.selectOrgNm);
        		} else {
        			alert(this.gfn_getMessage("COMS000008", ["검색", "내용"])); //검색된 내용이 없습니다.
        			return false;
        		}
        	} else if( svcID == "selectOprtrInfoList" ) {
        		if( this.selectOprtrCount > 1 ) {
        			this.fn_popup("SSP_BO_PP_44");
        		} else if( this.selectOprtrCount == 1 ) {
        			this.ds_search.setColumn(0, "OPRTR_ID", this.selectOprtrId);
        			this.ds_search.setColumn(0, "OPRTR_NM", this.selectOprtrNm);
        		} else {
        			//this.gfn_alert_null("MSGIDIDIDIDIDID", "", "MSGIDIDIDIDIDID", "검색된 내용이 없습니다", "A", "");
        			alert(this.gfn_getMessage("COMS000008", ["검색", "내용"])); //검색된 내용이 없습니다.
        			return false;
        		}
        	} else if( svcID == "saveOprtrAuthInfo" ) {
        		/*
        		this.gfn_alert_null("MSGIDIDIDIDIDID", ["저장"], "MSGIDIDIDIDIDID", "{0} 되었습니다.", "A", function() {
        			this.ds_search_oprtr.setColumn(0, "CO_CD", this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "CO_CD"));
        			this.ds_search_oprtr.setColumn(0, "OPRTR_ID", this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "OPRTR_ID"));

        			this.fn_search("selectOprtrMngList");
        		});
        		*/

        		alert(this.gfn_getMessage("COMS000014", ["저장"])); //저장 되었습니다.

        		this.fn_search("selectOprtrAuthInfoList");

        	} else if( svcID == "selectOprtrAuthMngMenuExcel" ) {
        		this.ofn_exportExcel({ form:this, grid:this.grid_excel, fileName:"운영자별 메뉴 권한" });
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
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//grid cell size 변경
        	this.grd_oprtr_auth_list.uCellSizeType = "true";

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_oprtr_auth_list";
        	this.grd_oprtr_auth_list.uRightMouse = "true";
        	this.grd_oprtr_auth_list.uPersonalFlag = "true";
        	this.grd_oprtr_auth_list.uDefaultFormat = "AUTH_GRP_ROLE_CD,REGPSN_ID,REGPSN_NM";
        }

        this.cfn_personalPopupClose = function(sRet){
        	this.grd_oprtr_auth_list.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
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
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        this.clear = function() {
        	this.ds_search.copyData(this.ds_search_default);
        }


        this.fn_treeOpen = function(idx, type) {

        	var gridObj = this.grd_menu;
        	var nGridRow = gridObj.getTreeRow(idx);
        	var nStatus  = gridObj.getTreeStatus(nGridRow);

        	if(nStatus == 3) return;

        	if( type == "add" ) {
        		nStatus = (nStatus == 0 ? 1 : 1);
        	} else {
        		nStatus = (nStatus == 0 ? 1 : 0);
        	}
        	gridObj.setTreeStatus(nGridRow, nStatus);
        }


        //권한분류코드 중복 확인.
        this.fn_authClsfCdCheck = function(oDs) {
        	if( oDs.rowcount == 1 ) return true;
        	for( var i = 0; i < oDs.rowcount; i++ ) {
        		if( oDs.getRowType(i) == 1 ) {
        			if( oDs.getColumn(i, "AUTH_GRP_ROLE_CD") == oDs.getColumn(oDs.rowposition, "AUTH_GRP_ROLE_CD") ) {
        				//this.gfn_alert_null("MSGIDIDIDIDIDID", ["권한분류"], "MSGIDIDIDIDIDID", "{0} 가 중복 되었습니다.", "A");
        				alert(this.gfn_getMessage("ERRR000169", ["권한분류"])); //권한분류가 중복 되었습니다.
        				return false;
        			}
        		}
        	}
        }

        //멀티 삭제
        this.fn_multiDelete = function(chkId, dataSet) {
        	if( chkId == undefined ) chkId = "CHK_COL";
        	var chkCnt = dataSet.getCaseCount(chkId + "==1");

        	if( chkCnt == 0 ) {
        		alert(this.gfn_getMessage("COMS000008", ["선택", "행"])); //선택된 행이 없습니다.
        		return false;
        	}

        	var delArr = [];
        	for(var i=0; i < dataSet.rowcount; i++){
        		var checkbox = dataSet.getColumn(i, chkId);
        		if( checkbox == 1 ) {
        			delArr.push(i);
        		}
        	}
        	dataSet.deleteMultiRows(delArr);
        }

        //트리 열/닫
        this.fn_treeOpen = function(idx, type) {

        	var gridObj = this.grd_menu;
        	var nGridRow = gridObj.getTreeRow(idx);
        	var nStatus  = gridObj.getTreeStatus(nGridRow);

        	if(nStatus == 3) return;

        	if( type == "add" ) {
        		nStatus = (nStatus == 0 ? 1 : 1);
        	} else {
        		nStatus = (nStatus == 0 ? 1 : 0);
        	}

        	gridObj.setTreeStatus(nGridRow, nStatus);
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조직조회 팝업 SSP_BO_PP_43
        this.Div00_btnOrgSearch_onclick = function(obj,e)
        {
        	this.fn_popup("SSP_BO_PP_43");
        };

        //조직조회
        this.Div00_btnSearch_onclick = function(obj,e)
        {
        	this.fn_search("selectOprtrMngList");
        };

        //초기화
        this.Div00_btnClear_onclick = function(obj,e)
        {
        	this.clear();
        };

        //권한분류 추가
        this.btnAdd_onclick = function(obj,e)
        {
        	if( this.ds_oprtr.rowcount == 0 ) {
        		alert(this.gfn_getMessage("COMS000008", ["검색", "운영자 정보"])); //검색된 운영자 정보가 없습니다.
        	}

        	var idx = this.ds_main.addRow();
        	this.ds_main.setColumn(idx, "CO_CD", this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "CO_CD"));
        	this.ds_main.setColumn(idx, "OPRTR_ID", this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "OPRTR_ID"));
        };

        //그리드 셀 더블클릭 (트리)
        this.grd_menu_oncelldblclick = function(obj,e)
        {
        	this.fn_treeOpen(e.row);
        };

        //전체열기
        this.btn_expand_onclick = function(obj,e)
        {
        	this.grd_menu.set_treeinitstatus("expand,all");
        };

        //전체닫기
        this.btn_collapse_onclick = function(obj,e)
        {
        	this.grd_menu.set_treeinitstatus("collapse,all");
        };

        //저장버튼
        this.btnRegist_onclick = function(obj,e)
        {
        	this.fn_save();
        };

        //운영자 조회 버튼
        this.Div00_btnOprtr_onclick = function(obj,e)
        {
        	this.fn_popup("SSP_BO_PP_44");
        };

        //폼 키업 이벤트
        /*this.SSP_BO_YA_11_2_onkeyup = function(obj:nexacro.Form,e:nexacro.KeyEventInfo)
        {
        	if( e.keycode == 13 ) {
        		if( e.fromobject.valueOf() == "[object Edit]" ) {
        			if( e.fromobject.id == "ORG_CD" || e.fromobject.id == "ORG_NM") {
        				//조직조회 엔터
        				this.fn_popupAutoSearch("selectOprtrOrgInfoList", "/co/select-oprtr-org-info-list.do");

        			} else if( e.fromobject.id == "OPRTR_ID" || e.fromobject.id == "OPRTR_NM") {
        				//운영자 조회 엔터
        				this.fn_popupAutoSearch("selectOprtrInfoList", "/co/select-oprtr-info-list.do");
        			}
        		}
        	}
        };*/

        this.grd_oprtr_oncellposchanged = function(obj,e)
        {
        	//운영자별 권한목록 조회
        	if( this.ds_oprtr.rowcount > 0 ) {
        		this.ds_search_oprtr.setColumn(0, "CO_CD", this.ds_oprtr.getColumn(e.row, "CO_CD"));
        		this.ds_search_oprtr.setColumn(0, "OPRTR_ID", this.ds_oprtr.getColumn(e.row, "OPRTR_ID"));

        		this.fn_search("selectOprtrAuthInfoList");
        	}
        };

        //권한분류코드 변경 이벤트
        this.ds_main_oncolumnchanged = function(obj,e)
        {
        	if( e.columnid == "AUTH_GRP_ROLE_CD" ) {
        		//권한분류코드가 중복되었는지 확인한다.
        		this.fn_authClsfCdCheck(this.ds_main);
        		//콜백용 권한코드명 설정
        		this.ds_main.setColumn(e.row, "AUTH_GRP_ROLE_NM", this.grd_oprtr_auth_list.getCellText(e.row, 2));
        		//메뉴조회
        		this.fn_search("selectOprtrAuthMngMenu");
        	}
        };

        //삭제버튼
        this.btnDel_onclick = function(obj,e)
        {
        	if( this.ds_main.rowcount == 0 ) {
        		alert(this.gfn_getMessage("COMS000008", ["검색", "운영자 정보"])); //검색된 운영자 정보가 없습니다.
        		return false;
        	}

        	var chkCnt = this.ds_main.getCaseCount("CHK_COL==1");
        	if( chkCnt == 0 ) {
        		alert(this.gfn_getMessage("COMS000008", ["선택", "행"])); //검색된 운영자 정보가 없습니다.
        		return false;
        	} else {
        		if( this.confirm(this.gfn_getMessage("COMS000013", ["삭제"])) ){ //삭제 하시겠습니까?
        			this.fn_multiDelete("CHK_COL", this.ds_main);
        		}
        	}
        };


        this.btnSaveLayout_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_oprtr_auth_list", this.grd_oprtr_auth_list.getCurFormatString());
        };

        this.btnClearLayout_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_oprtr_auth_list");
        	this.grd_oprtr_auth_list.set_formats(this.grd_oprtr_auth_list.uOrgFormat);
        };

        this.Div00_AUTH_GRP_ROLE_CLCD_onitemchanged = function(obj,e)
        {
        	var roleClcd = this.Div00.form.AUTH_GRP_ROLE_CLCD.value;
        	var code = "";

        	if( roleClcd == "1" ) {
        		code = "AUTH_GRP_CD";
        	} else if( roleClcd == "2" ) {
        		code = "AUTH_ROLE_CD";
        	}

        	var sSvcId = "commonCodeSearchRole";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_auth_grp_role_cd=ds_output1";
        	var arg = "";

        	//ds_authClsfCd 권한 분류코드
        	this.ds_search.setColumn(0, "CODE_LIST", code);
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //그리드 셀 클릭 이벤트
        this.grd_oprtr_auth_list_oncellclick = function(obj,e)
        {
        	//강제 드롭다운 이벤트
        	if(e.cell == 2){
        		obj.dropdownCombo();
        	}
        };

        this.grd_menu_oncellclick = function(obj,e)
        {
        	this.fn_treeOpen(e.row);
        };

        this.btnExcel_onclick = function(obj,e)
        {
        	if(this.ds_search.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        		alert(this.gfn_getMessage("COMS000007")); //조회 조건이 변경 되었습니다.\n다시 조회하시기 바랍니다.
        		return false;
        	}

        	if( this.ds_oprtr.rowcount > 0 ) {
        	    this.ds_search_excel.setColumn(0, "OPRTR_ID", this.ds_search_oprtr.getColumn(0, "OPRTR_ID"));
        		this.ds_search_excel.setColumn(0, "CO_CD", this.ds_search.getColumn(0, "CO_CD"));
        		this.ds_search_excel.setColumn(0, "AUTH_GRP_ROLE_CLCD", this.ds_search.getColumn(0, "AUTH_GRP_ROLE_CLCD"));
        	}

        	this.fn_search("selectOprtrAuthMngMenuExcel");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Div00.form.btnOrgSearch.addEventHandler("onclick",this.Div00_btnOrgSearch_onclick,this);
            this.Div00.form.btnSearch.addEventHandler("onclick",this.Div00_btnSearch_onclick,this);
            this.Div00.form.btnClear.addEventHandler("onclick",this.Div00_btnClear_onclick,this);
            this.Div00.form.btnOprtr.addEventHandler("onclick",this.Div00_btnOprtr_onclick,this);
            this.Div00.form.AUTH_GRP_ROLE_CLCD.addEventHandler("onitemchanged",this.Div00_AUTH_GRP_ROLE_CLCD_onitemchanged,this);
            this.grd_oprtr.addEventHandler("oncellposchanged",this.grd_oprtr_oncellposchanged,this);
            this.btnRegist.addEventHandler("onclick",this.btnRegist_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.btnClearLayout.addEventHandler("onclick",this.btnClearLayout_onclick,this);
            this.btnSaveLayout.addEventHandler("onclick",this.btnSaveLayout_onclick,this);
            this.grd_menu.addEventHandler("oncellclick",this.grd_menu_oncellclick,this);
            this.grd_oprtr_auth_list.addEventHandler("oncellclick",this.grd_oprtr_auth_list_oncellclick,this);
            this.btn_collapse.addEventHandler("onclick",this.btn_collapse_onclick,this);
            this.btn_expand.addEventHandler("onclick",this.btn_expand_onclick,this);
            this.ds_main.addEventHandler("oncolumnchanged",this.ds_main_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_YA_11_2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
