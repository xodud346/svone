(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_20");
            this.set_titletext("엑셀업로드용양식관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UPLD_FRM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excelUpldDtls", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPLD_FRM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_STR_ROW_PST\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_STOR_TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BF_VLDT_CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BF_VLDT_METHOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POST_VLDT_CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POST_VLDT_METHOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delExcelUpldDtls", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPLD_FRM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_STR_ROW_PST\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_STOR_TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BF_VLDT_CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BF_VLDT_METHOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POST_VLDT_CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POST_VLDT_METHOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"108","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("업로드 Report명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_useYn","1022","24","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"62","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"62","65","26","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","882","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_upldFrmNm","160","24","712","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnLayoutClear",null,"138","110","28","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("레이아웃 초기화");
            obj.set_textPadding("0px");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnLayoutSave",null,"138","110","28","btnLayoutClear:4",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 저장");
            obj.set_textPadding("0px");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"138","110","28","248",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"138","79","28","btn_excelDown:4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regist",null,"138","81","28","btn_del:4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("등록");
            obj.set_textPadding("0px");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","148","200","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("(총 0건, 1 / 1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","176",null,null,"20","96",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_excelUpldDtls");
            obj.set_autofittype("none");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_readonly("false");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"141\"/><Column size=\"180\"/><Column size=\"266\"/><Column size=\"75\"/><Column size=\"266\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"125\"/><Column size=\"80\"/><Column size=\"131\"/><Column size=\"97\"/><Column size=\"97\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"프로그램ID\"/><Cell col=\"2\" text=\"업로드 Report명\"/><Cell col=\"3\" text=\"파일명\"/><Cell col=\"4\" text=\"시작행위치\"/><Cell col=\"5\" text=\"엑셀저장테이블명\"/><Cell col=\"6\" text=\"사전검증클래스명\"/><Cell col=\"7\" text=\"사전검증메소드명\"/><Cell col=\"8\" text=\"사후검증클래스명\"/><Cell col=\"9\" text=\"사후검증메소드명\"/><Cell col=\"10\" text=\"컬럼정보\"/><Cell col=\"11\" text=\"사용여부\"/><Cell col=\"12\" text=\"등록일자\"/><Cell col=\"13\" text=\"등록자ID\"/><Cell col=\"14\" text=\"등록자\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:PGM_ID\" combodataset=\"ds_gRfiTpCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:UPLD_FRM_NM\" textDecoration=\"underline\" cssclass=\"grid_active\"/><Cell col=\"3\" text=\"bind:ATFL_NM\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\" cssclass=\"grd_WF_left\"/><Cell col=\"4\" text=\"bind:DATA_STR_ROW_PST\"/><Cell col=\"5\" text=\"bind:EXCEL_STOR_TBL_NM\"/><Cell col=\"6\" text=\"bind:BF_VLDT_CLASS_NM\" cssclass=\"grd_WF_left\"/><Cell col=\"7\" text=\"bind:BF_VLDT_METHOD_NM\" cssclass=\"grd_WF_left\"/><Cell col=\"8\" text=\"bind:POST_VLDT_CLASS_NM\" cssclass=\"grd_WF_left\"/><Cell col=\"9\" text=\"bind:POST_VLDT_METHOD_NM\" cssclass=\"grd_WF_left\"/><Cell col=\"10\" text=\"bind:COL_INFO\" cssclass=\"grd_WF_left\"/><Cell col=\"11\" text=\"bind:USE_YN\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_gUseYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" edittype=\"combo\"/><Cell col=\"12\" text=\"bind:REG_DTM\"/><Cell col=\"13\" text=\"bind:REGPSN_ID\"/><Cell col=\"14\" text=\"bind:REGPSN_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excel","20","176",null,null,"20","96",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_excelUpldDtls");
            obj.set_visible("false");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"141\"/><Column size=\"180\"/><Column size=\"266\"/><Column size=\"75\"/><Column size=\"266\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"125\"/><Column size=\"80\"/><Column size=\"131\"/><Column size=\"97\"/><Column size=\"97\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"프로그램ID\"/><Cell col=\"2\" text=\"업로드 Report명\"/><Cell col=\"3\" text=\"파일명\"/><Cell col=\"4\" text=\"시작행위치\"/><Cell col=\"5\" text=\"엑셀저장테이블명\"/><Cell col=\"6\" text=\"사전검증클래스명\"/><Cell col=\"7\" text=\"사전검증메소드명\"/><Cell col=\"8\" text=\"사후검증클래스명\"/><Cell col=\"9\" text=\"사후검증메소드명\"/><Cell col=\"10\" text=\"컬럼정보\"/><Cell col=\"11\" text=\"사용여부\"/><Cell col=\"12\" text=\"등록일자\"/><Cell col=\"13\" text=\"등록자ID\"/><Cell col=\"14\" text=\"등록자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PGM_ID\" combodataset=\"ds_gRfiTpCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:UPLD_FRM_NM\" textDecoration=\"underline\" cssclass=\"grid_active\"/><Cell col=\"3\" text=\"bind:ATFL_NM\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\" cssclass=\"grd_WF_left\"/><Cell col=\"4\" text=\"bind:DATA_STR_ROW_PST\"/><Cell col=\"5\" text=\"bind:EXCEL_STOR_TBL_NM\"/><Cell col=\"6\" text=\"bind:BF_VLDT_CLASS_NM\" cssclass=\"grd_WF_left\"/><Cell col=\"7\" text=\"bind:BF_VLDT_METHOD_NM\" cssclass=\"grd_WF_left\"/><Cell col=\"8\" text=\"bind:POST_VLDT_CLASS_NM\" cssclass=\"grd_WF_left\"/><Cell col=\"9\" text=\"bind:POST_VLDT_METHOD_NM\" cssclass=\"grd_WF_left\"/><Cell col=\"10\" text=\"bind:COL_INFO\" cssclass=\"grd_WF_left\"/><Cell col=\"11\" text=\"bind:USE_YN\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_gUseYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" edittype=\"combo\"/><Cell col=\"12\" text=\"bind:REG_DTM\"/><Cell col=\"13\" text=\"bind:REGPSN_ID\"/><Cell col=\"14\" text=\"bind:REGPSN_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"grd_list:6.44%","55",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"81","28","535","btn_regist:-30",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","Div00.form.cmb_useYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.edt_upldFrmNm","value","ds_search","UPLD_FRM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_20.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_YA_20.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_YA_20.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();	//application object
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
        		SHIFT_S : "btnSave_onclick",
        		SHIFT_A : "",
        		SHIFT_D : "btn_regist_onclick",
        	});
        };

        /*this.fn_onkeyup = function(obj:nexacro.Form,e:nexacro.KeyEventInfo){
        	var objType = obj.getFocus();
        	if( e.keycode == 13 && objType == "[object Edit]"){
        		this.fn_search(true);
        	}
        };*/
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(bInit){
        	var sSvcId = "search";
        	var sUrl = "/co/select-excel-upld-dtls-info-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_excelUpldDtls=ds_output1";
        	var arg;

        	if(bInit) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM",0);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_useYn=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "USE_YN");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_delete = function(){
        	var sSvcId = "delete";
        	var sUrl = "/co/delete-excel-upld-dtls-info-list.do";
        	var inDs = "ds_delete=ds_excelUpldDtls:U";
        	var outDs = "";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };
        //엑셀다운로드 데이터 조회
        this.fn_excelSearch = function(){
        	var sSvcId = "excelSearch";
        	var sUrl = "/co/select-excel-upld-dtls-info-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_excelUpldDtls=ds_output1";
        	var arg;

        	this.ds_search.setColumn(0,"START_NUM",0);
        	this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");


        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	switch(svcID){
        		case "search":
        			trace(this.ds_excelUpldDtls.saveXML());
        			this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
        			break;
        		case "commonCodeSearch":
        			this.ds_gUseYn.copyData(this.ds_useYn);
        			this.ds_useYn.insertRow(0);
        			this.ds_useYn.setColumn(0,"COM_DTL_CD_NM","전체");
        			break;
        		case "delete" :
        			this.ds_delExcelUpldDtls.clearData();
        			alert("삭제되었습니다.");
        			this.fn_search();
        			break;
        		case "excelSearch":
        			this.ofn_exportExcel({form:this, grid:this.grd_excel, fileName:"엑셀다운로드용양식관리"});
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

        //등록 팝업 콜백
        this.fn_popupCallback = function(sPopupId, sRetValue){
        	switch(sPopupId){
        		case "SSP_BO_CN_24":
        		case "SSP_BO_YA_24":
        			if(sRetValue){
        				this.fn_search(true);
        			}

        			break;
        		default:
        			break;
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

        //등록화면 이동
        this.btn_regist_onclick = function(obj,e)
        {
        	this.gfn_openPopup("SSP_BO_CN_24", "CO_POP::SSP_BO_CN_24.xfdl");

        };

        //제목 클릭시 상세보기 팝업 호출SSP_BO_CN_12
        this.grd_list_oncellclick = function(obj,e)
        {
        	if(e.cell == 2){
        		var objParam = {};
        		objParam.pgmId = this.ds_excelUpldDtls.getColumn(e.row, "PGM_ID");
        		this.gfn_openPopup("SSP_BO_YA_24", "CO_POP::SSP_BO_YA_24.xfdl", objParam);
        	}
        };

        //초기화
        this.Div00_btn_clear_onclick = function(obj,e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.Div00.form.cmb_useYn.set_index(0);
        };

        this.btn_del_onclick = function(obj,e)
        {
        	var sReturn = this.confirm(this.gfn_getMessage("ERRC000048")); //삭제하시겠습니까?
        	if(sReturn == true){
        		var chkCnt = this.ds_excelUpldDtls.getCaseCount("CHK==1");

        		if( chkCnt == 0 ) {
        			alert(this.gfn_getMessage("COMS000008", ["선택", "행"])); //선택된 행이 없습니다.
        			return false;
        		}

        		var delArr = [];
        		for(var i=0; i < this.ds_excelUpldDtls.rowcount; i++){
        			var checkbox = this.ds_excelUpldDtls.getColumn(i, "CHK");
        			if( checkbox == 1 ) {
        				delArr.push(i);
        			}
        		}
        		this.ds_excelUpldDtls.deleteMultiRows(delArr);
        	}
        };


        this.btn_excelDown_onclick = function(obj,e)
        {
        	if(this.ds_search.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        		alert(this.gfn_getMessage("COMS000007")); //조회 조건이 변경 되었습니다.\n다시 조회하시기 바랍니다.
        		return;
        	}
        	this.fn_excelSearch();
        };

        this.btnSave_onclick = function(obj,e)
        {
        	var chkDsChange = this.fn_dataChangeCheck(this.ds_excelUpldDtls);
        	if( !chkDsChange ) {
        		alert(this.gfn_getMessage("COMS000008", ["수정", "내용"])); //선택된 행이 없습니다.
        		return false;
        	} else {
        		//그리드 필수값 체크
        		var validation = this.fn_validationGrid(this.grd_list, this.valiGridIds, this.ds_excelUpldDtls);

        		if(validation){
        			var sReturn = this.confirm(this.gfn_getMessage("COMS000013", ["저장"])); //저장하시겠습니까
        			if(sReturn == true){

        				this.fn_delete();
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_clear.addEventHandler("onclick",this.Div00_btn_clear_onclick,this);
            this.btnLayoutClear.addEventHandler("onclick",this.btnLayoutClear_onclick,this);
            this.btnLayoutSave.addEventHandler("onclick",this.btnLayoutSave_onclick,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_regist.addEventHandler("onclick",this.btn_regist_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_YA_20.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
