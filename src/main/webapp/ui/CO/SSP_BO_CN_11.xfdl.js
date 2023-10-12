(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("work04");
            this.set_titletext("자주하는 질문");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"RFI_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"QST_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"REG_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_PERD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"INQ_PERD_SPR_CD\">7</Col><Col id=\"QST_CONTENTS\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rfiTpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oftenQst", this);
            obj._setContents("<ColumnInfo><Column id=\"OFTEN_QST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"QST_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"QST_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"RFI_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OFTEN_QST_YN\" type=\"STRING\" size=\"256\"/><Column id=\"QST_INQ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gRfiTpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"OFTEN_QST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"QST_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"QST_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"RFI_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OFTEN_QST_YN\" type=\"STRING\" size=\"256\"/><Column id=\"QST_INQ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_excel","60","967","710","143",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_excel");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_readonly("true");
            obj.set_positionstep("0");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"85\"/><Column size=\"307\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"75\"/><Column size=\"72\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"유형\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"등록일\"/><Cell col=\"4\" text=\"조회수\"/><Cell col=\"5\" text=\"등록자ID\"/><Cell col=\"6\" text=\"등록자\"/></Band><Band id=\"body\"><Cell text=\"bind:OFTEN_QST_SEQ\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:RFI_TP_CD\" combodataset=\"ds_gRfiTpCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" textAlign=\"center\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"2\" text=\"bind:QST_TTL\" textDecoration=\"underline\" cssclass=\"grid_active\"/><Cell col=\"3\" text=\"bind:REG_DTM\" textAlign=\"center\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" text=\"bind:QST_INQ_CNT\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:REGPSN_ID\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:REGPSN_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

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

            obj = new Static("Static04","312","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("검색어");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_qstContents","Static04:9","24",null,"24","579",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("유형");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_rfiTpCd","Static04_00:4","24","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_rfiTpCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"62","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"62","60","26","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_layoutClear",null,"138","110","28","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"138","100","28","btn_layoutClear:4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"138","110","28","btn_layoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rfiTpCdPop",null,"138","81","28","btn_excel:4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("유형관리");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regist",null,"138","81","28","btn_rfiTpCdPop:4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("등록");
            obj.set_textPadding("0px");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","151","200","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("(총 0건, 1 / 1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","176",null,null,"20","96",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_oftenQst");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_readonly("true");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"85\"/><Column size=\"307\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"75\"/><Column size=\"72\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"유형\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"등록일\"/><Cell col=\"4\" text=\"조회수\"/><Cell col=\"5\" text=\"등록자ID\"/><Cell col=\"6\" text=\"등록자\"/></Band><Band id=\"body\"><Cell text=\"bind:OFTEN_QST_SEQ\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:RFI_TP_CD\" combodataset=\"ds_gRfiTpCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" textAlign=\"center\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"2\" text=\"bind:QST_TTL\" textDecoration=\"underline\" cssclass=\"grid_active\"/><Cell col=\"3\" text=\"bind:REG_DTM\" textAlign=\"center\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" text=\"bind:QST_INQ_CNT\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:REGPSN_ID\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:REGPSN_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"grd_list:36","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","Div00.form.cmb_rfiTpCd","value","ds_search","RFI_TP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.edt_qstContents","value","ds_search","QST_CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CN_11.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_CN_11.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CN_11.xfdl", function() {
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
        	//this.fn_setSearchDate();
        	this.fn_search(true);

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "btn_search_onclick",
        		SHIFT_ENTER : "",
        		SHIFT_S : "",
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
        //검색어 특수문자 이벤트
        this.fn_searchWord = function() {
         	 var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;	//정규식 구문
 	 var searchWord = this.Div00.form.edt_qstContents.value;

         	    if(regExp.test(searchWord)){
         	       alert("특수문자는 입력하실수 없습니다.");
         	      return false;
        	   }
        	  return true;
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(bInit){
        /*
        	if(this.Div00.form.cal_regStartDate.value > this.Div00.form.cal_regEndDate.value){
        		//alert("종료일이 시작일보다 작습니다.");
        		alert(this.gfn_getMessage("IFMS000002"));
        		this.Div00.form.cal_regEndDate.setFocus();
        		return;
        	}
        	*/
        	if(this.fn_searchWord()){

        	var sSvcId = "search";
        	var sUrl = "/co/often-qst/select-often-qst-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_oftenQst=ds_output1";
        	var arg;

        	if(bInit) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM",0);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_inqPerdSprCd=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        //사용자 정의 조건 공통코드조회
        this.fn_commonCodeUsrDefnSearch = function(){
        	var sSvcId = "commonCodeUsrDefnSearch";
        	var sUrl = "/co/select-common-code-usr-defn-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_rfiTpCd=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "RFI_TP_CD");
        	this.ds_search.setColumn(0, "COM_USR_DEFN_NM_1", "Y");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //엑셀다운로드 데이터 조회
        this.fn_excelSearch = function(){
        	var sSvcId = "excelSearch";
        	var sUrl = "/co/often-qst/select-often-qst-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_excel=ds_output1";
        	var arg;

        	this.ds_search.setColumn(0,"START_NUM", null);
        	this.ds_search.setColumn(0,"ROW_COUNT", null);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0 && errorCode != -100){
        		alert(errorMsg);
        	}

        	switch(svcID){
        		case "search":
        			this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
        			break;
        		case "commonCodeSearch":
        			this.fn_commonCodeUsrDefnSearch();
        			break;
        		case "commonCodeUsrDefnSearch":
        			this.ds_gRfiTpCd.copyData(this.ds_rfiTpCd, true);
        			this.ds_rfiTpCd.insertRow(0);
        			this.ds_rfiTpCd.setColumn(0,"COM_DTL_CD_NM","전체");
        			break;
        		case "excelSearch":
        			this.ofn_exportExcel({form:this, grid:this.grd_excel, fileName:"자주하는질문관리"});
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

        this.fn_popupCallback = function(sPopupId, sRetValue){
        	switch(sPopupId){
        		//등록,상세 팝업 콜백
        		case "SSP_BO_CN_12":
        		case "SSP_BO_CN_13":
        			if(sRetValue){
        				this.fn_search(true);
        			}

        			break;
        		//유형관리 팝업 콜백
        		case "SSP_BO_CN_27":
        			this.ds_rfiTpCd.clearData();
        			this.fn_commonCodeSearch();
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

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_list";
        	this.grd_list.uRightMouse = "true";
        	this.grd_list.uPersonalFlag = "true";
        	this.grd_list.uDefaultFormat = "NO,RFI_TP_CD,USE_YN,QST_TTL,REG_DTM,QST_INQ_CNT,REGPSN_ID,REGPSN_NM";
        };

        this.cfn_personalPopupClose = function(sRet){
        	this.grd_list.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //기간 설정
        this.fn_setSearchDate = function() {

        	var term = this.Div00.form.cmb_inqPerdSprCd.value;
        	var objDate = new Date();
        	var sToday = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');

        	/*
        	1	1일
        	2	1주일
        	3	2주일
        	4	1개월
        	5	3개월
        	6	6개월
        	7	1년
        	*/
        	if( term == undefined ) term = "2";

        	objDate.setDate(objDate.getDate()+1);

        	if( term == "1" ) {
        		objDate.setDate(objDate.getDate() -1);
        	} else if( term == "2" ) {
        		objDate.setDate(objDate.getDate() -7);
        	} else if( term == "3" ) {
        		objDate.setDate(objDate.getDate() -14);
        	} else if( term == "4" ) {
        		objDate.setMonth(objDate.getMonth() -1);
        	} else if( term == "5" ) {
        		objDate.setMonth(objDate.getMonth() -3);
        	} else if( term == "6" ) {
        		objDate.setMonth(objDate.getMonth() -6);
        	} else if( term == "7" ) {
        		objDate.setMonth(objDate.getMonth() -12);
        	}

            this.Div00.form.cal_regStartDate.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
        	this.Div00.form.cal_regEndDate.set_value(sToday);
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회 click  이벤트
        this.btn_search_onclick = function(obj,e){
        	this.fn_search(true);
        };

        //등록일 조회기간 콤보박스 변경
        this.cmb_inqPerdSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_setSearchDate();
        };

        //유형관리 팝업 호출
        this.btn_rfiTpCdPop_onclick = function(obj,e)
        {
        	this.gfn_openPopup("SSP_BO_CN_27", "CO_POP::SSP_BO_CN_27.xfdl");
        };

        //등록화면 이동
        this.btn_regist_onclick = function(obj,e)
        {
        	this.gfn_openPopup("SSP_BO_CN_12", "CO_POP::SSP_BO_CN_12.xfdl");

        };

        //제목 클릭시 상세보기 팝업 호출SSP_BO_CN_12
        this.grd_list_oncellclick = function(obj,e)
        {
        	if(e.cell == 2){
        		var objParam = {};
        		objParam.oftenQstSeq = this.ds_oftenQst.getColumn(e.row, "OFTEN_QST_SEQ");
        		this.gfn_openPopup("SSP_BO_CN_13", "CO_POP::SSP_BO_CN_13.xfdl", objParam);
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

        //초기화
        this.Div00_btn_clear_onclick = function(obj,e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.Div00.form.cmb_inqPerdSprCd.set_index(6);
        	this.Div00.form.cmb_rfiTpCd.set_index(0);
        	//this.fn_setSearchDate();
        };

        //엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	if(this.ds_search.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        		alert(this.gfn_getMessage("COMS000007")); //조회 조건이 변경 되었습니다.\n다시 조회하시기 바랍니다.
        		return;
        	}

        	this.fn_excelSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.grd_excel.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_clear.addEventHandler("onclick",this.Div00_btn_clear_onclick,this);
            this.btn_layoutClear.addEventHandler("onclick",this.btn_layoutClear_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.btn_rfiTpCdPop.addEventHandler("onclick",this.btn_rfiTpCdPop_onclick,this);
            this.btn_regist.addEventHandler("onclick",this.btn_regist_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
        };
        this.loadIncludeScript("SSP_BO_CN_11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
