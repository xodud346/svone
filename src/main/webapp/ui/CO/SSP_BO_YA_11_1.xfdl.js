(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_11_1");
            this.set_titletext("운영자권한그룹관리-부서별메뉴권한");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ROLE_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"1000\"/><Column id=\"HRNK_MNU_SEQ\" type=\"INT\" size=\"5\"/><Column id=\"HGST_MNU_SEQ\" type=\"INT\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprtr_org_info", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DISP_MNG_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_auth_grp_role_cd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_dept_auth", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ROLE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_COL\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ROLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ROLE_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_default", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">1000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ROLE_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_GRP_ROLE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ROLE_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_auth_grp_role_clcd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ROLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ROLE_CL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_NM_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_ROLE_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"110","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","20",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","420","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("조직");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("ORG_CD","Static02:10","24","146","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("ORG_NM","ORG_CD:4","24","186","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button39","ORG_NM:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"Static03:10","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"Static03:10","60","26","btnSearch:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","-1","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("권한그룹 역할분류");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("AUTH_GRP_ROLE_CLCD","Static02_00:10","24","186","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_auth_grp_role_clcd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_oprtr","0","176","200",null,null,"6",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_oprtr_org_info");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"121\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"조직명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:ORG_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnRegist",null,"Div00:30","81","28","332",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"Div00:30","81","28","417",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"Div00:30","81","28","502",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"Div00:30","110","28","218",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btnClearLayout",null,"Div00:30","110","28","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveLayout",null,"Div00:30","100","28","114",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_menu",null,"214","296",null,"0","6",null,null,null,null,this);
            obj.set_taborder("8");
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

            obj = new Grid("grd_list","grd_oprtr:10","176",null,null,"grd_menu:10","6",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_list_dept_auth");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"38\"/><Column size=\"48\"/><Column size=\"116\"/><Column size=\"144\"/><Column size=\"192\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"권한분류코드\"/><Cell col=\"3\" text=\"등록자\"/><Cell col=\"4\" text=\"등록일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK_COL\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:AUTH_GRP_ROLE_CD\" displaytype=\"combotext\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &quot;combo&quot; : &quot;none&quot;\" combodataset=\"ds_auth_grp_role_cd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"3\" text=\"bind:REGPSN_NM\"/><Cell col=\"4\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd \" calendardisplaynulltype=\"none\" text=\"bind:REG_DTM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_collapse",null,"176","70","28","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_treeAll");
            obj.set_text("-Close All");
            this.addChild(obj.name, obj);

            obj = new Button("btn_expand",null,"176","71","28","btn_collapse:4",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_treeAll");
            obj.set_text("+Open All");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_excel","20","944","1330","72",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_visible("false");
            obj.set_binddataset("ds_excel");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"119\"/><Column size=\"129\"/><Column size=\"127\"/><Column size=\"111\"/><Column size=\"104\"/><Column size=\"180\"/><Column size=\"164\"/><Column size=\"174\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"조직명\"/><Cell col=\"2\" text=\"권한분류코드\"/><Cell col=\"3\" text=\"등록자\"/><Cell col=\"4\" text=\"등록일자\"/><Cell col=\"5\" text=\"메뉴 1-DEPTH\"/><Cell col=\"6\" text=\"메뉴 2-DEPTH\"/><Cell col=\"7\" text=\"메뉴 3-DEPTH\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:ORG_NM\"/><Cell col=\"2\" text=\"bind:AUTH_GRP_ROLE_NM\"/><Cell col=\"3\" text=\"bind:REGPSN_NM\"/><Cell col=\"4\" text=\"bind:REG_DTM\"/><Cell col=\"5\" text=\"bind:MNU_NM_1\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:MNU_NM_2\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:MNU_NM_3\" textAlign=\"left\"/></Band></Format></Formats>");
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

            obj = new BindItem("item2","Div00.form.AUTH_GRP_ROLE_CLCD","value","ds_search","AUTH_GRP_ROLE_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.USE_YN","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_11_1.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_YA_11_1.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_YA_11_1.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_YA_11_1
        /* 작 성 일 자 : 2022/03/14
        /* 작  성   자 : 이성민
        /* 설       명 : 시스템관리 > 운영자권한그룹관리 > 부서별 메뉴권한
        /***********************************************************/

        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.selectOrgCount = 0;
        this.selectOrgCd = "";
        this.selectOrgNm= "";
        this.ds_search.setColumn(0, "USE_YN", "Y");
        this.valiGridIds = [
        	  {"name" : "권한분류코드", "id" : "AUTH_GRP_ROLE_CD"}
        ];

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	this.fn_commonCodeSearch();

        	//console.log(this.fv_oApp.gds_userInfo);

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

        	if( sSvcId == "selectOptrOrgInfo" ) {
        		//조직조회 리스트
        		 sUrl = "/co/select-oprtr-org-info-list.do";
        		 inDs = "ds_search=ds_search";
        		 outDs = "ds_oprtr_org_info=ds_output";

        	} else if( sSvcId == "selectDeptAuthMngList" ) {
        		 sUrl = "/co/mnu_auth/select-dept-auth-mng-list.do";
        		 inDs = "ds_search=ds_search_dept";
        		 outDs = "ds_list_dept_auth=ds_output";

        	} else if( sSvcId == "selectDeptAuthMngMenu" ) {
        		// 권한분류 목록의 분류코드값을 읽어와 데이터셋에 저장한다.
        		if( this.ds_list_dept_auth.rowcount > 0 ) {
        			this.ds_searchMenu.clearData();
        			for( var i = 0; i < this.ds_list_dept_auth.rowcount; i++ ) {
        				var authCd = this.ds_list_dept_auth.getColumn(i, "AUTH_GRP_ROLE_CD");
        				if( authCd != undefined ) {
        					this.ds_searchMenu.addRow();
        					this.ds_searchMenu.setColumn(i, "AUTH_GRP_ROLE_CD", this.ds_list_dept_auth.getColumn(i, "AUTH_GRP_ROLE_CD"));
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

        	} else if( sSvcId == "selectDeptAuthMngMenuExcel" ) {
        		sUrl = "/co/mnu_auth/select-dept-auth-mng-menu-excel.do";
        		inDs = "ds_search=ds_search_excel";
        		outDs = "ds_excel=ds_output";

        		console.log(this.ds_search_excel);
        		console.log(this.ds_excel);
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        //저장
        this.fn_save = function() {
        	if( !this.gfn_dsIsUpdated(this.ds_list_dept_auth) ) {
        		alert(this.gfn_getMessage("COMS000008", ["변경", "내용"])); //변경된 내용이 없습니다.
        		return false;
        	} else {
        		// 권한분류코드 중복 확인
        		this.fn_authClsfCdCheck(this.ds_list_dept_auth);

        		// 폼 필수값 체크
        		var validation = this.fn_validationGrid(this.grd_list, this.valiGridIds, this.ds_list_dept_auth);

        		if( validation ) {

        			var sSvcId = "saveDeptAuthMngMenu";
        			var sUrl = "/co/mnu_auth/save-dept-auth-mng-menu.do";
        			var inDs = "ds_search=ds_search ds_save=ds_list_dept_auth:U"
        			var outDs = "";
        			var arg;
        			var callback = "fn_callBack";


        			if( this.confirm(this.gfn_getMessage("COMS000001", ["메뉴", "저장"])) ) { //메뉴를 저장 하시겠습니까?
        				this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        			}
        		}
        	}
        }

        this.fn_searchDeptAuthMngList = function(){

        	var row = this.ds_oprtr_org_info.rowposition;

        	//부서별 권한목록 조회
        	if( this.ds_oprtr_org_info.rowcount > 0 ) {
        		this.ds_search_dept.setColumn(0, "ORG_CD", this.ds_oprtr_org_info.getColumn(row, "ORG_CD"));
        		this.ds_search_dept.setColumn(0, "CO_CD", this.ds_oprtr_org_info.getColumn(row, "CO_CD"));
        		this.ds_search_dept.setColumn(0, "AUTH_GRP_ROLE_CLCD", this.ds_search.getColumn(0, "AUTH_GRP_ROLE_CLCD"));

        		this.fn_search("selectDeptAuthMngList");
        	}
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/

        this.fn_callBack = function(svcID, errorCode, errorMsg) {
        	if(errorCode != 0){
        		this.alert(errorMsg);
        		return;
        	}

        	//헤더 초기화
        	this.grd_list.setCellProperty("head",0, "text", "0");

        	if( svcID == "commonCodeSearch" ) { //공통코드 콜백
        		//초기화 용 데이터셋
        		this.ds_search_default.copyData(this.ds_search);

        		//선택
        		this.Div00.form.AUTH_GRP_ROLE_CLCD.set_index(0);

        	} else if( svcID == "commonCodeSearchRole" ) { //공통코드 콜백
        		//console.log(this.ds_auth_grp_role_cd);
        		this.fn_searchDeptAuthMngList();

        	} else if( svcID == "selectOptrOrgInfo" ) { //조직조회 콜백

        	} else if( svcID == "selectDeptAuthMngList" ) { //권한분류코드 조회 콜백
        		this.fn_search("selectDeptAuthMngMenu");

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

        	} else if( svcID == "saveDeptAuthMngMenu" ) {
        		alert(this.gfn_getMessage("COMS000014", ["저장", "내용"])); //저장 되었습니다
        		this.fn_searchDeptAuthMngList();

        		/*
        		this.gfn_alert_null("MSGIDIDIDIDIDID", ["저장"], "MSGIDIDIDIDIDID", "{0} 되었습니다.", "A", function() {
        			this.ds_search_dept.setColumn(0, "ORG_CD", this.ds_oprtr_org_info.getColumn(this.ds_oprtr_org_info.rowposition, "ORG_CD"));
        			this.ds_search_dept.setColumn(0, "CO_CD", this.ds_oprtr_org_info.getColumn(this.ds_oprtr_org_info.rowposition, "CO_CD"));

        			this.fn_search("selectDeptAuthMngList");
        		});
        		*/
        	} else if( svcID == "selectDeptAuthMngMenuExcel" ) {

        		this.ofn_exportExcel({ form:this, grid:this.grid_excel, fileName:"부서별 메뉴 권한" });
        	}
        };

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
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//grid cell size 변경
        	this.grd_list.uCellSizeType = "true";

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_list";
        	this.grd_list.uRightMouse = "true";
        	this.grd_list.uPersonalFlag = "true";
        	this.grd_list.uDefaultFormat = "AUTH_GRP_ROLE_CD,REGPSN_ID,REGPSN_NM";
        }

        this.cfn_personalPopupClose = function(sRet){
        	this.grd_list.set_formats(sRet);
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
        	}

        	this.gfn_openPopup(popupId, "CO_POP::" + popupId + ".xfdl", objParam, "fn_popupCallback");
        };

        //팝업 입력창에 입력 후 엔터 칠 경우.
        this.fn_popupAutoSearch = function(id, url) {
        	if( "selectOprtrOrgInfoList" == id ) {
        		var sSvcId = id;
        		var sUrl = url;
        		var inDs = "ds_search=ds_search";
        		var outDs = "";
        		var arg = "";

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        }

        this.clear = function() {
        	this.ds_search.copyData(this.ds_search_default);
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

        //권한분류코드 중복 확인.
        this.fn_authClsfCdCheck = function(oDs) {
        	if( oDs.rowcount == 1 ) return true;

        	for( var i = 0; i < oDs.rowcount; i++ ) {
        		if( oDs.getRowType(i) == 1 ) {
        			if( oDs.getColumn(i, "AUTH_GRP_ROLE_CD") == oDs.getColumn(oDs.rowposition, "AUTH_GRP_ROLE_NM") ) {
        				alert(this.gfn_getMessage("COMS000014", ["권한분류", "중복"])); //권한분류 가 중복 되었습니다.
        				return false;
        			}
        		}
        	}
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조직조회 팝업 SSP_BO_PP_43
        this.Div00_Button39_onclick = function(obj,e)
        {
        	this.fn_popup("SSP_BO_PP_43");
        };

        //조직조회
        this.Div00_btnSearch_onclick = function(obj,e)
        {
        	this.fn_search("selectOptrOrgInfo");
        };

        //그리드 포지션 이동 이벤트
        this.grd_oprtr_oncellposchanged = function(obj,e)
        {
        	this.fn_searchDeptAuthMngList();
        };

        //폼 키업 이벤트
        /*this.SSP_BO_YA_11_1_onkeyup = function(obj:nexacro.Form,e:nexacro.KeyEventInfo)
        {
        	if( e.keycode == 13 ) {
        		if( e.fromobject.valueOf() == "[object Edit]" ) {
        			if( e.fromobject.id == "ORG_CD" || e.fromobject.id == "ORG_NM") {
        				this.fn_popupAutoSearch("selectOprtrOrgInfoList", "/co/select-oprtr-org-info-list.do");
        			} else {
        				this.fn_search(0);
        			}
        		}
        	}
        };*/

        //초기화
        this.Div00_btnClear_onclick = function(obj,e)
        {
        	this.clear();
        };

        //권한분류 추가
        this.btnAdd_onclick = function(obj,e)
        {
        	if( this.ds_oprtr_org_info.rowcount == 0 ) {
        		/*
        		var sMsgId = "MSG000011111";							//메세지ID
        		var aArg = "";													//메세지치환될값 배열[생략가능]
        		var sPopId = sMsgId;											//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var nullValue = "검색된 조직 정보가없습니다.";				//메세지 ID 못찾을때 값
        		var sMsgType = "A";												// 타입
        		var sMsgCallback = "fnMsgCallback";								//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요
        		this.gfn_alert_null(sMsgId, aArg, sPopId, nullValue, sMsgType, sMsgCallback);
        		*/
        		alert(this.gfn_getMessage("COMS000008", ["검색", "조직정보"])); //검색된 조직정보 이(가)없습니다.

        		return false;
        	}

        	var idx = this.ds_list_dept_auth.addRow();
        	this.ds_list_dept_auth.setColumn(idx, "CO_CD", this.ds_oprtr_org_info.getColumn(this.ds_oprtr_org_info.rowposition, "CO_CD"));
        	this.ds_list_dept_auth.setColumn(idx, "ORG_CD", this.ds_oprtr_org_info.getColumn(this.ds_oprtr_org_info.rowposition, "ORG_CD"));
        };

        //데이터셋 변경 이벤트
        this.ds_list_dept_auth_oncolumnchanged = function(obj,e)
        {
        	if( e.columnid == "AUTH_GRP_ROLE_CD" ) {
        		//권한분류코드가 중복되었는지 확인한다.
        		this.fn_authClsfCdCheck(this.ds_list_dept_auth);
        		//콜백용 권한코드명 설정
        		this.ds_list_dept_auth.setColumn(e.row, "AUTH_GRP_ROLE_NM", this.grd_list.getCellText(e.row, 2));
        		//메뉴조회
        		this.fn_search("selectDeptAuthMngMenu");
        	}
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

        // 레이아웃 저장
        this.btnSaveLayout_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list", this.grd_list.getCurFormatString());
        };

        //레이아웃 초기화
        this.btnClearLayout_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_list");
        	this.grd_list.set_formats(this.grd_list.uOrgFormat);
        };

        //권한 분류코드 삭제
        this.btnDel_onclick = function(obj,e)
        {
        	if( this.ds_list_dept_auth.rowcount == 0 ) {
        		/*
        		var sMsgId = "MSG000011111";									//메세지ID
        		var aArg = "";													//메세지취환될값 배열[생략가능]
        		var sPopId = sMsgId;											//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var nullValue = "검색된 조직 정보가없습니다.";				//메세지 ID 못찾을때 값
        		var sMsgType = "A";												// 타입
        		var sMsgCallback = "fnMsgCallback";								//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		this.gfn_alert_null(sMsgId, aArg, sPopId, nullValue, sMsgType, sMsgCallback);
        		*/
        		alert(this.gfn_getMessage("COMS000008", ["검색", "조직정보"])); //검색된 조직정보 이(가)없습니다.

        		return false;
        	}
        	var chkCnt = this.ds_list_dept_auth.getCaseCount("CHK_COL==1");
        	if( chkCnt == 0 ) {
        		alert(this.gfn_getMessage("COMS000008", ["선택", "행"])); //선택된 행이 없습니다.
        		return false;
        	} else {
        		if( this.confirm(this.gfn_getMessage("COMS000013", ["삭제"])) ) {	//삭제하시겠습니까?
        			this.fn_multiDelete("CHK_COL", this.ds_list_dept_auth);
        		}
        	}


        };

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

        //권한그룹 역할분류 변경 이벤트
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

        this.grd_list_oncellclick = function(obj,e)
        {
        	//강제 드롭다운 이벤트
        	if(e.cell == 2){
        		obj.dropdownCombo();
        	}
        };

        //그리드 셀 클릭 이벤트
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
            this.ds_search_excel.setColumn(0, "ORG_CD", this.ds_search_dept.getColumn(0, "ORG_CD"));
        	this.ds_search_excel.setColumn(0, "AUTH_GRP_ROLE_CLCD", this.ds_search.getColumn(0, "AUTH_GRP_ROLE_CLCD"));

        	this.fn_search("selectDeptAuthMngMenuExcel");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Div00.form.ORG_CD.addEventHandler("onchanged",this.Div00_Edit38_onchanged,this);
            this.Div00.form.ORG_NM.addEventHandler("onchanged",this.Div00_Edit38_onchanged,this);
            this.Div00.form.Button39.addEventHandler("onclick",this.Div00_Button39_onclick,this);
            this.Div00.form.btnSearch.addEventHandler("onclick",this.Div00_btnSearch_onclick,this);
            this.Div00.form.btnClear.addEventHandler("onclick",this.Div00_btnClear_onclick,this);
            this.Div00.form.AUTH_GRP_ROLE_CLCD.addEventHandler("onitemchanged",this.Div00_AUTH_GRP_ROLE_CLCD_onitemchanged,this);
            this.grd_oprtr.addEventHandler("oncellposchanged",this.grd_oprtr_oncellposchanged,this);
            this.btnRegist.addEventHandler("onclick",this.btnRegist_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.btnClearLayout.addEventHandler("onclick",this.btnClearLayout_onclick,this);
            this.btnSaveLayout.addEventHandler("onclick",this.btnSaveLayout_onclick,this);
            this.grd_menu.addEventHandler("oncellclick",this.grd_menu_oncellclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_collapse.addEventHandler("onclick",this.btn_collapse_onclick,this);
            this.btn_expand.addEventHandler("onclick",this.btn_expand_onclick,this);
            this.ds_list_dept_auth.addEventHandler("oncolumnchanged",this.ds_list_dept_auth_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_YA_11_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
