(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_02_2");
            this.set_titletext("메뉴권한그룹관리-메뉴권한그룹정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mnuAuthGrpInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_ROLE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_authGrpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"1000\"/><Column id=\"HRNK_MNU_SEQ\" type=\"INT\" size=\"5\"/><Column id=\"HGST_MNU_SEQ\" type=\"INT\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_ROLE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_authRoleCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delMnuAuthGrpInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_ROLE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mnuAuthGrpInfoCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_ROLE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","20",null,"88","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","0",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("권한그룹코드");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"42","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"42","60","26","btnSearch:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_authGrpCd","140","4","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_authGrpCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnRegist",null,"Div00:30","81","28","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"Div00:30","81","28","btnRegist:4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"Div00:30","81","28","btnDel:4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_menu",null,"214","296",null,"0","6",null,null,null,null,this);
            obj.set_taborder("4");
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

            obj = new Grid("grd_auth_list","0","176",null,null,"grd_menu:10","6",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_mnuAuthGrpInfo");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"38\"/><Column size=\"48\"/><Column size=\"116\"/><Column size=\"131\"/><Column size=\"144\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"권한역할코드\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"3\" text=\"등록일시\"/><Cell col=\"4\" text=\"등록자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:AUTH_ROLE_CD\" displaytype=\"combotext\" edittype=\"expr:AUTH_ROLE_CD== undefined || dataset.getRowType(currow) == 2 ? &quot;combo&quot; : &quot;none&quot; \" combodataset=\"ds_authRoleCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" combotype=\"dropdown\"/><Cell col=\"3\" text=\"bind:REG_DTM\"/><Cell col=\"4\" text=\"bind:REGPSN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_collapse",null,"176","70","28","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_treeAll");
            obj.set_text("+Close All");
            this.addChild(obj.name, obj);

            obj = new Button("btn_expand",null,"176","71","28","btn_collapse:4",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_treeAll");
            obj.set_text("-Open All");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.cmb_authGrpCd","value","ds_search","AUTH_GRP_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_02_2.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_YA_02_2.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_YA_11_2
        /* 작 성 일 자 : 2022/03/21
        /* 작  성   자 : 이성민
        /* 설       명 : 시스템관리 > 운영자권한그룹관리 > 운영자별 메뉴권한
        /***********************************************************/

        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object

        this.valiGridIds = [
        	  {"name" : "권한역할코드", "id" : "AUTH_ROLE_CD"}
        ];

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	this.fn_commonCodeSearch();

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
        	var outDs = "ds_authGrpCd=ds_output1 ds_authRoleCd=ds_output2";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "AUTH_GRP_CD,AUTH_ROLE_CD");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //메뉴권한그룹정보- 권한정보 조회
        this.fn_mnuAuthGrpSearch = function() {
        	var sSvcId = "mnuAuthGrpSearch";
        	var sUrl = "/co/mnu_auth/select-mnu-auth-grp-info-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_mnuAuthGrpInfo=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //메뉴권한그룹정보- 권한역할코드별 메뉴 조회
        this.fn_oprtrAuthGrpMenu = function() {
        	if( this.ds_mnuAuthGrpInfo.rowcount > 0 ) {
        		this.ds_searchMenu.clearData();
        		var authRoleCd = this.ds_mnuAuthGrpInfo.getColumn(this.ds_mnuAuthGrpInfo.rowposition , "AUTH_ROLE_CD");
        		if( authRoleCd != undefined ) {
        			this.ds_searchMenu.addRow();
        			this.ds_searchMenu.setColumn(0, "AUTH_ROLE_CD", authRoleCd);
        		}
        	} else {
        		this.ds_menu.clearData();
        		return false;
        	}

        	var sSvcId = "oprtrAuthGrpMenuSearch";
        	var sUrl = "/co/mnu_auth/select-oprtr-auth-grp-menu-list.do";
        	var inDs = "ds_search=ds_searchMenu"
        	var outDs = "ds_menu=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function() {
        	if( !this.gfn_dsIsUpdated(this.ds_mnuAuthGrpInfo) ) {
        		alert(this.gfn_getMessage("COMS000008", ["수정", "내용"]));	//수정된 내용이 없습니다.
        		return false;
        	} else {

        		// 권한역할코드 중복 확인
        		if(this.fn_authRoleCdCheck(this.ds_mnuAuthGrpInfo)){
        			//폼 필수값 체크
        			var validation = this.fn_validationGrid(this.grd_auth_list, this.valiGridIds, this.ds_mnuAuthGrpInfo);
        			if(validation) {
        				var sReturn = this.confirm(this.gfn_getMessage("COMS000013", ["저장"]));
        				if(sReturn == true){
        					var sSvcId = "save";
        					var sUrl = "/co/mnu_auth/save-mnu-auth-grp-info.do";
        					var inDs = "ds_search=ds_search ds_save=ds_mnuAuthGrpInfo:U"
        					var outDs = "";
        					var arg;
        					this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        				}
        			}
        		}
        	}
        };


        //삭제
        this.fn_delete = function(){
        	var sSvcId = "delete";
        	var sUrl = "/co/mnu_auth/delete-mnu-auth-grp-info-list.do";
        	var inDs = "ds_delete=ds_delMnuAuthGrpInfo:U"
        	var outDs = "";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/

        this.fn_callBack = function(svcID, errorCode, errorMsg) {
        	switch(svcID){
        	case "mnuAuthGrpSearch":
        		if(this.ds_mnuAuthGrpInfo.rowcount < 1){
        			this.ds_mnuAuthGrpInfo.copyData(this.ds_mnuAuthGrpInfoCopy);
        		}
        		this.fn_oprtrAuthGrpMenu();
        		break;
        	case "oprtrAuthGrpMenuSearch":
        		//this.grd_menu.set_treeinitstatus("collapse,all");
        		break;
        	case "save":
        		alert(this.gfn_getMessage("COMS000014", ["저장"])); //저장되었습니다.
        		this.fn_mnuAuthGrpSearch();
        		break;
        	case "commonCodeSearch":
        		this.Div00.form.cmb_authGrpCd.set_index(0);
        		this.fn_mnuAuthGrpSearch();
        		break;
        	case "delete":
        		if(this.ds_delMnuAuthGrpInfo.rowcount >= 0){
        			this.grd_auth_list.setCellProperty("head", 0,"text","0");
        		}

        		this.ds_delMnuAuthGrpInfo.clearData();
        		alert(this.gfn_getMessage("COMS000014", ["삭제"])); //삭제되었습니다.
        		this.fn_mnuAuthGrpSearch();
        		break;
        	default:
        		break;
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
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

        //권한역할코드 중복 확인.
        this.fn_authRoleCdCheck = function(oDs) {
        	if( oDs.rowcount == 1 ) return true;
        	for( var i = 0; i < oDs.rowcount; i++ ) {
        		if( oDs.getRowType(i) == 1 ) {
        			if( oDs.getColumn(i, "AUTH_ROLE_CD") == oDs.getColumn(oDs.rowposition, "AUTH_ROLE_CD") ) {
        				alert(this.gfn_getMessage("COMS000015", ["권한역할코드", "중복"])); //&1 가 &2 되었습니다.
        				return false;
        			}
        		}
        	}

        	return true;
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //초기화
        this.Div00_btnClear_onclick = function(obj,e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.Div00.form.cmb_authGrpCd.set_index(0);
        };

        //권한분류 추가
        this.btnAdd_onclick = function(obj,e)
        {
        	var row = this.ds_mnuAuthGrpInfo.addRow();
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

        //삭제버튼
        this.btnDel_onclick = function(obj,e)
        {
        	var delArr = [];
        	var chkCnt = this.ds_mnuAuthGrpInfo.getCaseCount("CHK == 1");
        	var nRowType = "";
        	var delArr = [];

        	if(chkCnt == 0){
        		alert(this.gfn_getMessage("COMS000022", ["삭제", "데이터"])); //&1할 &2을(를) 선택해주세요.
        		return;
        	}

        	var sReturn = this.confirm(this.gfn_getMessage("COMS000001",  ["선택한 데이터", "삭제"])); //선택한 데이터를 삭제하시겠습니까?
        	if(sReturn == true){
        		for(var i=0; i < this.ds_mnuAuthGrpInfo.rowcount; i++){
        			if(this.ds_mnuAuthGrpInfo.getColumn(i, "CHK") == 1){
        				nRowType = this.ds_mnuAuthGrpInfo.getRowType(i);
        				if(nRowType == Dataset.ROWTYPE_INSERT){
        					delArr.push(i);
        				}else{
        					var nRow = this.ds_delMnuAuthGrpInfo.addRow();
        					this.ds_delMnuAuthGrpInfo.copyRow(nRow, this.ds_mnuAuthGrpInfo, i);
        				}
        			}
        		}

        		this.ds_mnuAuthGrpInfo.deleteMultiRows(delArr);
        		if(this.ds_delMnuAuthGrpInfo.rowcount > 0){
        			this.fn_delete();
        		}else{
        			this.grd_auth_list.setCellProperty("head", 0,"text","0");
        		}
        	}

        };

        this.Div00_btnSearch_onclick = function(obj,e)
        {
        	this.fn_mnuAuthGrpSearch();
        };

        this.grd_auth_list_oncellclick = function(obj,e)
        {
        	if(this.ds_mnuAuthGrpInfo.getRowType(e.row) != Dataset.ROWTYPE_INSERT){
        		this.fn_oprtrAuthGrpMenu();
        	}

        	if(e.col ==  2){
        		obj.dropdownCombo();
        	}

        };

        this.Div00_cmb_authGrpCd_onitemchanged = function(obj,e)
        {
        	var bReturn  = true;

        	if(this.gfn_dsIsUpdated(this.ds_mnuAuthGrpInfo)){
        		bReturn = this.confirm(this.gfn_getMessage("COMS000023")); //변경된 내역이 존재합니다. 조회하시겠습니까?
        	}

        	if(bReturn == true){
        		this.ds_menu.clearData();
        		this.ds_mnuAuthGrpInfo.clearData();
        		this.fn_mnuAuthGrpSearch();
        	}else{
        		this.Div00.form.cmb_authGrpCd.set_value(e.prevalue);
        	}
        };


        this.grd_menu_oncellclick = function(obj,e)
        {
        	var nGridRow = this.grd_menu.getTreeRow(e.row);
        	var nStatus  = this.grd_menu.getTreeStatus(nGridRow);

        	if(nStatus == 3) return;

        	nStatus = (nStatus == 0 ? 1 : 0);

        	this.grd_menu.setTreeStatus(nGridRow, nStatus);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Div00.form.btnSearch.addEventHandler("onclick",this.Div00_btnSearch_onclick,this);
            this.Div00.form.btnClear.addEventHandler("onclick",this.Div00_btnClear_onclick,this);
            this.Div00.form.cmb_authGrpCd.addEventHandler("onitemchanged",this.Div00_cmb_authGrpCd_onitemchanged,this);
            this.btnRegist.addEventHandler("onclick",this.btnRegist_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.grd_menu.addEventHandler("oncellclick",this.grd_menu_oncellclick,this);
            this.grd_auth_list.addEventHandler("oncellclick",this.grd_auth_list_oncellclick,this);
            this.btn_collapse.addEventHandler("onclick",this.btn_collapse_onclick,this);
            this.btn_expand.addEventHandler("onclick",this.btn_expand_onclick,this);
            this.ds_mnuAuthGrpInfo.addEventHandler("oncolumnchanged",this.ds_main_oncolumnchanged,this);
            this.ds_delMnuAuthGrpInfo.addEventHandler("oncolumnchanged",this.ds_main_oncolumnchanged,this);
            this.ds_mnuAuthGrpInfoCopy.addEventHandler("oncolumnchanged",this.ds_main_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_YA_02_2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
