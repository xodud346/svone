(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_17");
            this.set_titletext("SSP속성 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_List", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRNM\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"ATTR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboDate", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">0</Col><Col id=\"COM_DTL_CD_NM\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"131","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","40","21",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static31_00","40","52",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","20","21","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("SSP속성명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10","20","52","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cboGubun","159","56","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cboGubun_innerdataset = new nexacro.NormalDataset("div_search_form_cboGubun_innerdataset", obj);
            div_search_form_cboGubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">등록일</Col><Col id=\"codecolumn\">10</Col></Row><Row><Col id=\"datacolumn\">최종수정일</Col><Col id=\"codecolumn\">20</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cboGubun_innerdataset);
            obj.set_text("등록일");
            obj.set_value("10");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edtPrnm","159","25","557","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("calStartDt","314","56","140","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static59","458","56","9","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("calEndDt","471","56","140","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cboCalSel","616","56","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_comboDate");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static66","882","52","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","882","21","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("SSP속성코드");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edtAttrCd","1021","25","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","1021","56","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,null,"60","26","20","11",null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,null,"60","28","84","10",null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_attrCdMultiInput","1170","24","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","20","198",null,null,"20","100",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_List");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"650\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"SSP속성코드\"/><Cell col=\"1\" text=\"SSP속성명\"/><Cell col=\"2\" text=\"SSP속성사용 상품군수\"/><Cell col=\"3\" text=\"상품수\"/><Cell col=\"4\" text=\"사용여부\"/><Cell col=\"5\" text=\"등록일\"/><Cell col=\"6\" text=\"등록자ID\"/><Cell col=\"7\" text=\"등록자명\"/><Cell col=\"8\" text=\"최종수정일\"/><Cell col=\"9\" text=\"최종수정자ID\"/><Cell col=\"10\" text=\"최종수정자명\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ATTR_CD\" textAlign=\"center\" cursor=\"pointer\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"1\" text=\"bind:PRNM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRD_CLCD_CNT\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:ATTR_CNT\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:USE_YN\" textAlign=\"center\" combodataset=\"ds_useYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\"/><Cell col=\"5\" text=\"bind:REG_DTM\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:REGPSN_ID\"/><Cell col=\"7\" text=\"bind:REGPSN_NM\"/><Cell col=\"8\" text=\"bind:UPD_DTM\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:UPDPSN_ID\"/><Cell col=\"10\" text=\"bind:UPDPSN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_mainList:30",null,"38","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCount","20","165","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("(총 0건 0 / 0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnReg",null,"160","60","28","349",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"160","107","28","238",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"160","100","28","134",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"160","110","28","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);
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
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_17.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_PA_17.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PA_17.xfdl", function() {
        /*******************************************************
          PROJECT NAME : MarketA
          CREATION DATES :
        *******************************************************/
        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object

        this.totalCount = 0;

        this.coCd = this.gfn_isNull(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"))?"1000":this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD");
        this.mallSprCd = "10";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	// 공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.copyPaste.addGrid(this.grd_mainList);

        	this.fn_commonCodeSearch();
        	// 초기화
        	this.fn_init();

        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(bInit)	{

        	var sSvcId = "selectPropertyList";
        	var sUrl = "/pr/ctg-mng/select-property-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_List=ds_output";
        	var arg = "";

        	var prnm = this.div_search.form.edtPrnm.value;
        	if(!this.gfn_isNull(prnm)) prnm = nexacro.replaceAll(prnm,",","|");

        	if(bInit) {
                this.div_paging.uPage = 1;
                this.div_paging.uPageNum = 0;
                this.ds_search.setColumn(0,"START_NUM",0);
                this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
            }

        	this.ds_search.setColumn(0,"PRNM", prnm);
        	//this.ds_search.setColumn(0,"PRD_ATTR_CD", this.div_search.form.edtAttrCd.value);
        	this.ds_search.setColumn(0,"USE_YN", this.div_search.form.cboUseYn.value);
        	this.ds_search.setColumn(0,"CAL_GUBUN", this.div_search.form.cboGubun.value);
        	this.ds_search.setColumn(0,"START_DT", this.div_search.form.calStartDt.value);
        	this.ds_search.setColumn(0,"END_DT", this.div_search.form.calEndDt.value);
        	this.ds_search.setColumn(0,"MALL_SPR_CD", this.mallSprCd);
        	this.ds_search.setColumn(0,"CO_CD", this.coCd);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){

        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_comboDate=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD"); // 조회기간구분코드
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0){
        		this.alert(errorMsg);
        		return;
        	}

        	if(svcID == "selectPropertyList"){
        		this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
        	}else if(svcID == "commonCodeSearch"){
        		var row = this.ds_comboDate.insertRow(0);
        		this.ds_comboDate.setColumn(row,"COM_DTL_CD",null);
        		this.ds_comboDate.setColumn(row,"COM_DTL_CD_NM","전체");
        		this.div_search.form.cboCalSel.set_index(0);
        	}
        };

        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;
        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
        		this.fn_search(false);
        	}

        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0) +"건 </b>"+ this.gfn_appendComma(oPaging.uPage) +" / "+ this.gfn_appendComma(oPaging.uPageCnt) +")";
        	this.sta_totCount.set_text(sTotText);
        };

        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	var oPaging = this.div_paging;

        	if(sGridId == "grd_mainList"){
        		oSortInfo = this.grd_mainList.uaSortInfo;
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
                this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		this.fn_search(false);
        	}
        };

        this.fn_popupCallback = function(svcID, args){

        	if(svcID == "ssp_bo_pp_13" ) {
        		var jsonData = JSON.parse(args);
        		this.div_search.form.edtAttrCd.set_value(jsonData.textValue);
        		this.fn_setMSearch(this.name,"PRD_ATTR_CD",jsonData.textValue);
        	}else{
        		if(args){
        			this.fn_search(true);
        		}
        	}
        };

        //멀티입력처리 콜백
        this.fn_callBackForSearch = function() {
        	this.fn_search(true);
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//grid 초기 설정
        	this.grd_mainList.uSortFlag = "false";
        	this.grd_mainList.uServerSortFlag = "true";
        	this.grd_mainList.uSortCallback = "fn_sortCallback";
        	this.grd_mainList.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_mainList";
        	this.grd_mainList.uRightMouse = "true";
        	this.grd_mainList.uPersonalFlag = "true";
        	this.grd_mainList.uDefaultFormat = "PRD_ATTR_CD,PRNM,PRD_CLCD_CNT,ATTR_CNT,USE_YN,REG_DTM,REGPSN_ID,REGPSN_NM,UPD_DTM,UPDPSN_ID,UPDPSN_NM";
        };
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        	this.fn_init = function(){
         		this.div_search.form.cboGubun.set_index(0);
         		this.div_search.form.cboCalSel.set_index(0);
         		this.div_search.form.cboUseYn.set_index(0);
        		this.div_search.form.edtPrnm.set_value("");
        		this.div_search.form.calStartDt.set_value("");
        		this.div_search.form.calEndDt.set_value("");
        		this.div_search.form.edtAttrCd.set_value("");
        	}

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회 버튼 click  이벤트
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
        	if(!this.gfn_isNull(this.div_search.form.edtAttrCd.value)){
        		this.fn_setMSearch(this.name,"PRD_ATTR_CD",this.div_search.form.edtAttrCd.value,"ds_search");
        	}else{
        		this.ds_search.setColumn(0, "PRD_ATTR_CD", null);
        	}

        	if(this.ds_select.getRowCount() > 0){
        		//멀티입력은 시간차때문에 콜백에서 조회처리
        		this.fn_insertSelectedData("fn_callBackForSearch");
        	}else{
        		this.fn_search(true);
        	}
        };

        // 엑셀다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	if(this.ds_List.rowcount > 0){
        		this.ofn_exportExcel({form:this, grid:this.grd_mainList, fileName:"SSP속성 목록"});
        	}
        	else
        	{
        		this.alert(this.fn_getMessage("ERRS000202"));
        		//this.alert("엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.");
        	}
        };

        // 등록 버튼
        this.btnReg_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.coCd};
        	this.gfn_openPopup("ssp_bo_pa_18", "PR::SSP_BO_PA_18.xfdl", objParam);
        };

        // 그리드 cell 클릭 이벤트
        this.grd_mainList_oncellclick = function(obj,e)
        {
        	if(e.col == 0){
        		// SSP속성 상세팝업 호출
        		var objParam = {attrCd:this.ds_List.getColumn(e.row,"PRD_ATTR_CD"), coCd:this.coCd};
        		this.gfn_openPopup("ssp_bo_pa_19", "PR::SSP_BO_PA_19.xfdl", objParam);
        	}
        };

        this.div_search_cboCalSel_onitemchanged = function(obj,e)
        {
        	var objCurr = new nexacro.Date();
        	var sToday = objCurr.getFullYear() + ((objCurr.getMonth() + 1) + "").padLeft(2, '0') + (objCurr.getDate() + "").padLeft(2, '0');
        	var sFrom = this.fn_CalDate(this.div_search.form.cboCalSel.value,objCurr);

        	// "전체"를 선택한 경우
        	if (e.postindex == 0) {
        		this.div_search.form.calStartDt.set_value("");
        		this.div_search.form.calEndDt.set_value("");
        	}
        	// "1일"을 선택한 경우 동일한 일자 설정
        	else if (e.postindex == 1) {
        		this.div_search.form.calStartDt.set_value(sToday);
        		this.div_search.form.calEndDt.set_value(sToday);
        	}
        	else {
        		this.div_search.form.calStartDt.set_value(sFrom);
        		this.div_search.form.calEndDt.set_value(sToday);
        	}
        };

        // 초기화 버튼
        this.div_search_btn_init_onclick = function(obj,e)
        {
        	this.fn_init();
        };
        // 레이아웃 저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_mainList",this.grd_mainList.getCurFormatString());
        };
        // 레이아웃 초기화
        this.btn_layoutInit_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_mainList");
        	this.grd_mainList.set_formats(this.grd_mainList.uOrgFormat);
        };

        this.div_search_btn_attrCdMultiInput_onclick = function(obj,e)
        {
        	var params = {textId:'PRD_ATTR_CD'};
            this.gfn_openPopup("ssp_bo_pp_13", "CO_POP::SSP_BO_PP_13.xfdl", params);
        };

        // 단축키
        this.SSP_BO_PA_17_onkeyup = function(obj,e)
        {
        	// CTRL + ENTER
        	if (e.keycode == 13 && e.ctrlkey == true) {
        		// 조회
        		this.btn_search_onclick();
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_PA_17_onkeyup,this);
            this.div_search.form.cboCalSel.addEventHandler("onitemchanged",this.div_search_cboCalSel_onitemchanged,this);
            this.div_search.form.cboUseYn.addEventHandler("onitemchanged",this.Div00_Combo49_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.div_search_btn_init_onclick,this);
            this.div_search.form.btn_attrCdMultiInput.addEventHandler("onclick",this.div_search_btn_attrCdMultiInput_onclick,this);
            this.grd_mainList.addEventHandler("oncellclick",this.grd_mainList_oncellclick,this);
            this.btnReg.addEventHandler("onclick",this.btnReg_onclick,this);
            this.btnExcel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_17.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
