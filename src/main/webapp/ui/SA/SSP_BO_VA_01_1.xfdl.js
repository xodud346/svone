(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_VA_01");
            this.set_titletext("메인상품");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_noticSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mainPrdDtlList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_PRD_DTL_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"MAIN_PRD_EXPS_PST_ID\" type=\"INT\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_SO\" type=\"INT\" size=\"256\"/><Column id=\"PRD_REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CHK\" type=\"INT\" size=\"256\"/><Column id=\"SORT_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtlSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_PRD_EXPS_PST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitList", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mainPrd", this);
            obj._setContents("<ColumnInfo><Column id=\"MAIN_PRD_LVL\" type=\"INT\" size=\"16\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MAIN_PRD_EXPS_PST_ID\" type=\"INT\" size=\"16\"/><Column id=\"MAIN_PRD_EXPS_PST_NM\" type=\"STRING\" size=\"16\"/><Column id=\"HRNK_MAIN_PRD_EXPS_PST_ID\" type=\"INT\" size=\"32\"/><Column id=\"SRT_SO\" type=\"INT\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"URL_CNSOL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"URL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTO_MNL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTO_LOGIC_TGT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SLAMT_WGT\" type=\"INT\" size=\"256\"/><Column id=\"ODR_CNT_WGT\" type=\"INT\" size=\"256\"/><Column id=\"INVN_PRD_WGT\" type=\"INT\" size=\"256\"/><Column id=\"CATG_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_REQ_CNT\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchOprUnitList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchOprUnitCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rtnOprUnitCheckList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20","226","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_title02");
            obj.set_text("■ 목록");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainPrdDtlList","20","317",null,null,"20","43",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_mainPrdDtlList");
            obj.set_visible("true");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"270\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"정렬순번\"/><Cell col=\"2\" text=\"상품코드\"/><Cell col=\"3\" text=\"상품명\"/><Cell col=\"4\" text=\"구분\"/><Cell col=\"5\" text=\"공용전용구분\"/><Cell col=\"6\" text=\"대표상품구분\"/><Cell col=\"7\" text=\"SSP상품상태\"/><Cell col=\"8\" text=\"SSP진열상태\"/><Cell col=\"9\" text=\"등록일\"/><Cell col=\"10\" colspan=\"2\" text=\"전시순서\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:SORT_NO\"/><Cell col=\"2\" text=\"bind:PRD_ID_VIEW\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"3\" text=\"bind:PRD_NM\"/><Cell col=\"4\" text=\"bind:EXPS_NOTIC_SPR_CD_NM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:PUB_ONLY_SPR_NM\"/><Cell col=\"6\" text=\"bind:REPR_PRD_SPR_NM\"/><Cell col=\"7\" text=\"bind:PRD_USE_YN\" expr=\"PRD_USE_YN==&apos;Y&apos; ? &apos;사용&apos; : &apos;미사용&apos;\"/><Cell col=\"8\" text=\"bind:DISP_STATS_NM\"/><Cell col=\"9\" text=\"bind:PRD_REG_DT\" edittype=\"none\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"10\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\" textAlign=\"right\" text=\"&lt;fs v=&apos;13&apos;&gt;▲&lt;/fs&gt;\" displaytype=\"decoratetext\"/><Cell col=\"11\" text=\"&lt;fs v=&apos;13&apos;&gt;▼&lt;/fs&gt;\" border=\"1px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4,0px solid #d4d4d4\" textAlign=\"left\" displaytype=\"decoratetext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dtlSave",null,null,"81","28","20","grd_mainPrdDtlList:10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("순서저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dtlRegist",null,null,"81","28","105","grd_mainPrdDtlList:10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("상품등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dtlDelete",null,null,"81","28","190","grd_mainPrdDtlList:10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("선택삭제");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totalCount","20","277","209","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("총 0건");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","244","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("※사용 상태 상품 10개 등록 필수 (PC)\r\n※사용 상태 상품 2개 등록 필수 (모바일)");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail","0","0",null,"224","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","36",null,"152","20",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static01","20","36","130","152",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_text("게시구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_noticSprCd","160","55","155","115",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_noticSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_rowcount("0");
            obj.set_tooltiptext("1");
            obj.set_direction("horizontal");
            obj.set_text("포함");
            obj.set_value("");
            obj.set_index("0");
            this.div_detail.addChild(obj.name, obj);

            obj = new Grid("grd_oprUnitList","330","44","592","135",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_oprUnitList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"126\"/><Column size=\"200\"/><Column size=\"48\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"운영단위ID\"/><Cell col=\"1\" text=\"운영단위명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:OPR_UNIT_ID\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMulti","926","44","24","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_multi");
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMultiText","926","72","24","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_document");
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"196","60","28","20",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"196","60","28","btn_search:4",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("초기화");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_title00","20","5","200","23",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_title02");
            obj.set_text("■ 조회");
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"279","110","28","275",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainPrdDtlListExcel","20","855",null,null,"-10","-275",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_mainPrdDtlList");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("none");
            obj.set_autoenter("none");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"146\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"92\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"정렬순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"공용전용구분\"/><Cell col=\"5\" text=\"대표상품구분\"/><Cell col=\"6\" text=\"SSP상품상태\"/><Cell col=\"7\" text=\"SSP진열상태\"/><Cell col=\"8\" text=\"등록일\"/></Band><Band id=\"body\"><Cell text=\"bind:SORT_NO\"/><Cell col=\"1\" text=\"bind:PRD_ID_VIEW\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"2\" text=\"bind:PRD_NM\"/><Cell col=\"3\" text=\"bind:NOTIC_SPR_CD\" textAlign=\"center\" expr=\"NOTIC_SPR_CD==&apos;20&apos; ? &apos;로그인후전체&apos; : NOTIC_SPR_CD==&apos;30&apos; ? OPR_UNIT_NM : &apos;전체&apos;\"/><Cell col=\"4\" text=\"bind:PUB_ONLY_SPR_NM\"/><Cell col=\"5\" text=\"bind:REPR_PRD_SPR_NM\"/><Cell col=\"6\" text=\"bind:PRD_USE_YN\" expr=\"PRD_USE_YN==&apos;Y&apos; ? &apos;사용&apos; : &apos;미사용&apos;\"/><Cell col=\"7\" text=\"bind:DISP_STATS_NM\"/><Cell col=\"8\" text=\"bind:PRD_REG_DT\" edittype=\"none\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_largeExcel",null,"196","118","28","148",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1100,770,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_detail.form.rdo_noticSprCd","value","ds_dtlSearch","EXPS_NOTIC_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_VA_01_1.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_VA_01_1.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_VA_01_1.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 메인상품(MD추천상품)
        CREATION DATES : 2022.03.04
        CREATER        : 이민호
        *******************************************************/
        //인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드 조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_noticSprCd=ds_output1";
        	var arg = "";

        	//조회 값 담기
        	this.ds_search.setColumn(0, "CODE_LIST", "EXPS_NOTIC_SPR_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	//전송
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //메인상품 상세리스트 조회
        this.fn_mainPrdDtlListSearch = function()
        {
        	var sSvcId = "mainPrdDtlList";
        	var sUrl = "/sa/main-prd/select-main-prd-dtl-list.do";
        	var inDs = "ds_search=ds_dtlSearch ds_oprUnitList=ds_searchOprUnitList";
        	var outDs = "ds_mainPrdDtlList=ds_output";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        //저장
        this.fn_dtlSave = function()
        {
        	if( !this.fn_dataCheck(this.ds_mainPrdDtlList) ) {
        		alert(this.fn_getMessage("ERRN000036")); // 변경된 내용이 없습니다.
        		return false;
        	} else {

        		var chnTpCd = this.ds_mainPrd.getColumn(0, "CHN_TP_CD");
        		// 필요 개수 체크를 위한 값 세팅
        		if(chnTpCd == "P") {
        			this.ds_mainPrd.setColumn(0, "PRD_REQ_CNT", 10);
        		} else {
        			this.ds_mainPrd.setColumn(0, "PRD_REQ_CNT", 2);
        		}

        		var sSvcId = "updateMainPrdDtlSo";
        		var sUrl = "/sa/main-prd/update-main-prd-dtl-so.do";
        		var inDs = "ds_save=ds_mainPrdDtlList:U ds_chk=ds_mainPrd"
        		var outDs = "";
        		var arg = "";
        		var callback = "fn_callBack";

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        	}
        }

        //메인상품 상세 삭제
        this.fn_dtlDelete = function() {
        	var sSvcId = "deleteMainPrdDtl";
        	var sUrl = "/sa/main-prd/delete-main-prd-dtl.do";
        	var inDs = "ds_delete=ds_mainPrdDtlList:U"
        	var outDs = "";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        // 운영단위ID 유효성 검사
        this.fn_oprUnitCheck = function() {
        	var sSvcId = "oprUnitCheck";
        	var sUrl = "/sa/com/select-opr-unit-check-list.do";
        	var sInData = "ds_searchOprUnitCheckList=ds_searchOprUnitCheckList:A"
        	var sOutData = "ds_rtnOprUnitCheckList=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        /** SSP-2369
         * 대용량엑셀다운로드
        */
        this.fn_largeExcelDownload = function(){

        	var sSvcId = "largeExcelDown";
        	var sUrl = "/sa/excelDown/large/mainPrdInfo.do";
        	var inDs = "ds_save=ds_dtlSearch";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "");

        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID) {
        		case "commonCodeSearch" :
        			//게시구분코드에 All 추가
        			var nRow = this.ds_noticSprCd.insertRow(0);
        			this.ds_noticSprCd.setColumn(nRow, "COM_DTL_CD", "");
        			this.ds_noticSprCd.setColumn(nRow, "COM_DTL_CD_NM", "ALL");

        			this.div_detail.form.rdo_noticSprCd.set_index(0);

        			this.fn_chgNoticSprCd();

        			break;

        		case "insertOdrInqTgtDtls" :

        			this.fn_mainPrdDtlListSearch();

        			break;

        		case "mainPrdDtlList" :
        			this.sta_totalCount.set_text("총 " + this.totalCount + " 건");

        			break;

        		case "updateMainPrdDtlSo" :
        			if(errorCode == ""){
        				alert(this.fn_getMessage("ERRN000030")); // 저장되었습니다.
        				this.fn_mainPrdDtlListSearch();
        			} else {
        				alert(errorMsg);
        			}
        			break;

        		case "deleteMainPrdDtl" :
        			this.fn_mainPrdDtlListSearch();
        			break;

        		case "oprUnitCheck" :

        			var tempOprUnitId = "";

        			for (var x = 0; x < this.ds_rtnOprUnitCheckList.getRowCount(); x++) {
        				var sBzplcId = this.ds_rtnOprUnitCheckList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_NM");

        				if (sOprUnitNm == "" || sOprUnitNm == undefined) {
        					tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        				}
        			}

        			if (tempOprUnitId != "") {
        				alert(this.fn_getMessage("ERRN000023", tempOprUnitId)); // 없는 운영단위ID를 입력하였습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var totalCount2 = 0;
        			tempOprUnitId = "";

        			for (var x = 0; x < this.ds_rtnOprUnitCheckList.getRowCount(); x++) {
        				var sBzplcId = this.ds_rtnOprUnitCheckList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_NM");

        				if (sOprUnitNm != "" && sOprUnitNm != undefined) {
        					var findRow = this.ds_oprUnitList.findRowExpr("BZPLC_ID == '" + sBzplcId + "' && OPR_UNIT_ID == '" + sOprUnitId + "'");

        					if(findRow < 0) {
        						var nRow = this.ds_oprUnitList.addRow();

        						this.ds_oprUnitList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        						this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_NM", sOprUnitNm);
        					} else {
        						totalCount2 = totalCount2 + 1;

        						tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        					}
        				}
        			}

        			if (totalCount2 > 0) {
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			break;

        		default :
        			break;
        	}
        }

        this.fn_popupCallback = function(sPopupId, sRetValue)
        {
        	if(this.gfn_isNull(sRetValue)) {
        		return;
        	}
        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId) {
        		case "btn_oprUnitMulti" :
        			var totalCount2 = 0;
        			var tempOprUnitId = "";

        			for(var i=0; i < retObj.length; i++) {
        				var rowData = JSON.parse(retObj[i]);
        				var findRow = this.ds_oprUnitList.findRowExpr("BZPLC_ID == '" + rowData.OPR_BZPLC_ID + "' && OPR_UNIT_ID == '" + rowData.OPR_UNIT_ID + "'");

        				if(findRow < 0) {
        					var nRow = this.ds_oprUnitList.addRow();
        					this.ds_oprUnitList.setColumn(nRow, "BZPLC_ID", rowData.OPR_BZPLC_ID);
        					this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_ID", rowData.OPR_UNIT_ID);
        					this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_NM", rowData.OPR_UNIT_NM);
        				} else {
        					totalCount2 = totalCount2 + 1;
        					tempOprUnitId = tempOprUnitId + "사업장ID : " + rowData.OPR_BZPLC_ID + " / 운영단위ID : " + rowData.OPR_UNIT_ID + "\n";
        				}
        			}

        			if (totalCount2 > 0) {
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			break;

        		case "btn_oprUnitMultiText" :
        			var retValue = retObj.textValue;

        			if (retValue != "") {
        				this.ds_searchOprUnitCheckList.clearData();

        				var sTempValue = retValue.split(",");

        				for (var x = 0; x < sTempValue.length; x++) {
        					var sTempValueSplit = sTempValue[x].split("	");

        					var sBzplcId = sTempValueSplit[0];
        					var sOprUnitId = sTempValueSplit[1];

        					if (sBzplcId != "" && sBzplcId != undefined && sOprUnitId != "" && sOprUnitId != undefined) {
        						var nRow = this.ds_searchOprUnitCheckList.addRow();

        						this.ds_searchOprUnitCheckList.setColumn(nRow, "CO_CD", this.ds_mainPrd.getColumn(0, "CO_CD"));
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        					}
        				}

        				this.fn_oprUnitCheck();
        			}

        			break;

        		default :

        			break;
        	}
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /**
         * 화면 설정 함수
         */
        this.cfn_formInit = function()
        {
        	// grid 초기 설정
        	this.div_detail.form.grd_oprUnitList.uSortFlag = "true";
        	this.div_detail.form.grd_oprUnitList.uServerSortFlag = "false";
        	this.div_detail.form.grd_oprUnitList.uCellSizeType = "true";
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 최초 호출 시 세팅
        this.fn_setInit = function() {
        	// SSP_BO_VA_01의 값 세팅
        	this.ds_mainPrd.copyRow(0, this.parent.parent.parent.ds_mainPrd, 0); // 배너 단일 복사
        	this.ds_dtlSearch.copyRow(0, this.parent.parent.parent.ds_mainPrd, 0); // CO_CD, BNR_EXPS_PST_ID, CHN_TP_CD, MALL_SPR_CD 복사

        	this.grd_mainPrdDtlList.setCellProperty("head", 0, "text", "0"); // 헤더 체크해제

        	var mainPrdExpsPstId = this.ds_mainPrd.getColumn(0, "MAIN_PRD_EXPS_PST_ID");
        	if(mainPrdExpsPstId == "10000") { // MD추천상품
        		this.grd_mainPrdDtlList.setCellProperty("Head", 7, "text", "SSP상품상태");
        		this.grd_mainPrdDtlList.setCellProperty("Head", 8, "text", "SSP진열상태");
        		this.grd_mainPrdDtlList.setFormatColProperty(6, "size", 80); // 대표상품구분
        	} else if(mainPrdExpsPstId == "40000") { // MD추천픽
        		this.grd_mainPrdDtlList.setCellProperty("Head", 7, "text", "상품상태");
        		this.grd_mainPrdDtlList.setCellProperty("Head", 8, "text", "진열상태");
        		this.grd_mainPrdDtlList.setFormatColProperty(6, "size", 0); // 대표상품구분
        	}

        	// 메인상품 변경 시 운영단위 초기화
        	this.div_detail.form.rdo_noticSprCd.set_index(0);
        	this.fn_chgNoticSprCd();
        	this.ds_oprUnitList.clearData();
        }

        // 현재 선택된 트리가 닫혀있다면 펼치기
        this.fn_treeOpen = function(idx, type) {

        	var gridObj = this.grd_mainPrd;
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

        // 게시구분코드 변경
        this.fn_chgNoticSprCd = function() {
        	if(this.div_detail.form.rdo_noticSprCd.value == "30" || this.div_detail.form.rdo_noticSprCd.value == "50"
        		|| this.div_detail.form.rdo_noticSprCd.value == "60" || this.div_detail.form.rdo_noticSprCd.value == "70") {
        		this.div_detail.form.grd_oprUnitList.set_enable(true);
        		this.div_detail.form.btn_oprUnitMulti.set_enable(true);
        		this.div_detail.form.btn_oprUnitMultiText.set_enable(true);
        	} else {
        		this.div_detail.form.grd_oprUnitList.set_enable(false);
        		this.div_detail.form.btn_oprUnitMulti.set_enable(false);
        		this.div_detail.form.btn_oprUnitMultiText.set_enable(false);
        	}
        }

        // 전체 버튼 활성화/비활성화 세팅
        this.fn_setBtn = function(isEnable)
        {
        	this.div_detail.form.btn_reset.set_enable(isEnable);
        	this.div_detail.form.btn_search.set_enable(isEnable);
        	this.btn_dtlDelete.set_enable(isEnable);
        	this.btn_dtlRegist.set_enable(isEnable);
        	this.btn_dtlSave.set_enable(isEnable);
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회버튼
        this.btn_search_onclick = function(obj,e)
        {
        	// 게시구분코드가 운영단위가 아니면 아니면 운영단위 정보 삭제
        	// SSP-2971
        	if (this.div_detail.form.rdo_noticSprCd.value != "30" || this.div_detail.form.rdo_noticSprCd.value != "50"
        		|| this.div_detail.form.rdo_noticSprCd.value != "60" || this.div_detail.form.rdo_noticSprCd.value != "70") {
        		var aDelArr = new Array();
        		for(var i = 0; i< this.ds_oprUnitList.rowcount; i++) {
        			aDelArr.push(i);
        		}
        		this.ds_oprUnitList.deleteMultiRows(aDelArr);
        	}

        	this.ds_searchOprUnitList.clearData();

        	var sBzplcIdList = "";
        	var sOprUnitIdList = "";

        	for(var i = 0; i< this.ds_oprUnitList.rowcount; i++) {
        		var tempBzplcId = this.ds_oprUnitList.getColumn(i, "BZPLC_ID");
        		var tempOprUnitId = this.ds_oprUnitList.getColumn(i, "OPR_UNIT_ID");

        		var nRow = this.ds_searchOprUnitList.addRow();

        		this.ds_searchOprUnitList.setColumn(nRow, "BZPLC_ID", tempBzplcId);
        		this.ds_searchOprUnitList.setColumn(nRow, "OPR_UNIT_ID", tempOprUnitId);
        		sBzplcIdList += tempBzplcId + ",";
        		sOprUnitIdList += tempOprUnitId + ",";
        	}

        	this.fn_setMSearch(this.name,"BZPLC_ID",sBzplcIdList);
        	this.fn_setMSearch(this.name,"OPR_UNIT_ID",sOprUnitIdList);

        	if(this.gfn_isNull(sBzplcIdList) || this.gfn_isNull(sOprUnitIdList)) {
        		this.fn_mainPrdDtlListSearch();
        	} else {
        		this.ds_dtlSearch.setColumn(0,"INQ_COND_DTLS", this.name);
        		this.fn_insertSelectedData("fn_callBack");
        	}
        };

        //리셋버튼
        this.btn_reset_onclick = function(obj,e)
        {
        	this.ds_dtlSearch.reset();
        	this.ds_dtlSearch.copyRow(0, this.parent.parent.parent.ds_mainPrd, 0);
        	this.ds_oprUnitList.reset();
        	this.ds_searchOprUnitList.reset();

        	this.div_detail.form.rdo_noticSprCd.set_index(0);
        };

        //하단-저장버튼
        this.btn_dtlSave_onclick = function(obj,e)
        {
        	for(var i = 0; i< this.ds_mainPrdDtlList.rowcount; i++) {
        		this.ds_mainPrdDtlList.setColumn(i, "DISP_SO", i+1);
        	}
        	this.fn_dtlSave();
        };

        //선택삭제 버튼
        this.btn_dtlDelete_onclick = function(obj,e)
        {
        	var chkCnt = this.ds_mainPrdDtlList.getCaseCount("COL_CHK > 0");
        	if(chkCnt < 1){
        		alert(this.fn_getMessage("ERRN000034")); // 삭제할 상품을 선택해주세요.
        		return;
        	}
        	if(confirm(this.fn_getMessage("ERRN000049"))) { // 선택한 상품을 삭제하시겠습니까?
        		this.fn_dtlDelete();
        	}
        };

        // 상품등록버튼
        this.btn_dtlRegist_onclick = function(obj,e)
        {
        	var objParam = {
        		coCd:this.ds_mainPrd.getColumn(0, "CO_CD")
        		, chnTpCd:this.ds_mainPrd.getColumn(0, "CHN_TP_CD")
        		, mallSprCd:this.ds_mainPrd.getColumn(0, "MALL_SPR_CD")
        		, mainPrdExpsPstId:this.ds_mainPrd.getColumn(0, "MAIN_PRD_EXPS_PST_ID")
        	};
        	objParam.title = "메인상품 등록 팝업";
        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_VA_02.xfdl", objParam, "fn_popupCallback");
        };

        //게시구분변경
        this.rdo_noticSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_chgNoticSprCd();
        };

        //운영단위 멀티 팝업
        this.btn_oprUnitMulti_onclick = function(obj,e)
        {
        	var oArg = {coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        			   };

        	var oOption = { top : "-1"
        				  , left : "-1"
        				  , width : "-1"
        				  , height : "-1"
        				  , popuptype : "modal" // modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        				  , layered : "false"
        				  , opacity : "100"
        				  , autosize : "true"
        				  , titlebar : "true"
        				  , title : "운영단위 조회"
        				  };

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", oArg, "fn_popupCallback", oOption);
        };

        //운영단위 멀티텍스트팝업
        this.btn_oprUnitMultiText_onclick = function(obj,e)
        {
        	var params = { textId : this.div_detail.form.btn_oprUnitMultiText };
        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_SA_MSEARCH.xfdl", params,  "fn_popupCallback", options);
        };

        //메인상품 상세 그리드 클릭
        this.grd_mainPrdDtlList_oncellclick = function(obj,e)
        {
        // 	if(e.col == 6 || e.col == 7) {
        // 		if(this.gfn_isNull(this.ds_dtlSearch.getOrgColumn(0, "NOTIC_SPR_CD"))) {
        // 			alert("게시구분 All 클릭 시,  전시순서 변경이 불가합니다");
        // 			return;
        // 		}
        // 	}

        	if(e.col == 2) { // 상품ID
        		var objParam = {
        			coCd:this.ds_mainPrdDtlList.getColumn(e.row, "CO_CD")
        			, prdId:this.ds_mainPrdDtlList.getColumn(e.row, "PRD_ID")
        		};

        		this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_VA_03.xfdl", objParam, "fn_popupCallback");
        	} else if(e.col == 10) {
        		if(e.row == 0){
        			alert(this.fn_getMessage("ERRN000038")); // 더 이상 이동할 수 없습니다.
        			return false;
        		}
        		this.ds_mainPrdDtlList.moveRow(e.row, (e.row-1));
        	} else if(e.col == 11) {
        		if(e.row == (this.ds_mainPrdDtlList.getRowCount()-1)){
        			alert(this.fn_getMessage("ERRN000038")); // 더 이상 이동할 수 없습니다.
        			return false;
        		}
        		this.ds_mainPrdDtlList.moveRow(e.row, (e.row+1));
        	}
        };

        // 운영단위 삭제
        this.grd_oprUnitList_oncellclick = function(obj,e)
        {
        	var sEditType = obj.getCellProperty("body", e.cell, "edittype");

        	if(sEditType == "button") {
        		if(confirm(this.fn_getMessage("ERRN000048"))) { // 삭제하시겠습니까?
        			this.ds_oprUnitList.deleteRow(e.row);
        		}
        	}
        };

        //drag 시작
        this.grd_mainPrdDtlList_ondrag = function(obj,e)
        {
        	var nRow = e.row;
        	var oBindDs = this[obj.binddataset];
        	var sValue = oBindDs.getColumn(e.row,"PRD_ID_VIEW");

        	//static component check
        	var oStatic =  this["sta_drag"];
        	if(!this.gfn_isNull(oStatic)){
        		oStatic = this.removeChild("sta_drag");
        		oStatic.destroy();
        	}

        	//static component position 설정
        	var nLeft = e.clientx + obj.getOffsetLeft() + 10;
        	var nTop  = e.clienty + obj.getOffsetTop();

        	//static component 생성
        	oStatic = new Static();
        	oStatic.init( "sta_drag", nLeft, nTop, 200,50);
        	this.addChild("sta_drag",oStatic);
        	oStatic.set_background("#bcbcbc");
        	oStatic.set_text(sValue);
        	oStatic.uAsRow = nRow;
        	oStatic.show();

        	return true;
        };

        //이동
        this.grd_mainPrdDtlList_ondragmove = function(obj,e)
        {
        	var nLeft = e.clientx + obj.getOffsetLeft() + 10;
        	var nTop  = e.clienty + obj.getOffsetTop();
        	this.sta_drag.move(nLeft,nTop);
        };

        //row 변경
        this.grd_mainPrdDtlList_ondrop = function(obj,e)
        {
        	var nToRow = e.row;
        	var oBindDs = this[obj.binddataset];
        	oBindDs.moveRow(this.sta_drag.uAsRow, nToRow)
        	var	oStatic = this.removeChild("sta_drag");
        	oStatic.destroy();
        };

        //SSP-2111
        //엑셀다운로드
        this.btn_excelDownload_onclick = function(obj,e)
        {
        	var vMainPrdExpsPstId = this.ds_mainPrd.getColumn(0, "MAIN_PRD_EXPS_PST_ID");
        	// 현재 페이지 data
        	if(vMainPrdExpsPstId == 10000)
        	{
        		var sFileName = "MD추천상품_EXCEL_EXPORT";			// file Name
        		var aGrid = [this.grd_mainPrdDtlListExcel];
        		var aSht  = ["MD추천상품"];
        	}
        	else if(vMainPrdExpsPstId == 40000)
        	{
        		var sFileName = "MD추천픽_EXCEL_EXPORT";			// file Name
        		var aGrid = [this.grd_mainPrdDtlListExcel];
        		var aSht  = ["MD추천픽"];
        	}

        	var oParam = {form:this, grid:aGrid, fileName:sFileName, sheetName:aSht};
        	this.gfn_exportExcel(oParam);

        	return;
        };

        /** SSP-2369
         * 대용량 엑셀다운로드 버튼 클릭 시
         */
        this.div_search_btn_largeExcel_onclick = function(obj,e)
        {
        	if(this.confirm('대용량 다운로드를 실행하시겠습니까?')){
        		this.fn_largeExcelDownload();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.grd_mainPrdDtlList.addEventHandler("onselectchanged",this.fn_editChg,this);
            this.grd_mainPrdDtlList.addEventHandler("oncellclick",this.grd_mainPrdDtlList_oncellclick,this);
            this.grd_mainPrdDtlList.addEventHandler("ondrag",this.grd_mainPrdDtlList_ondrag,this);
            this.grd_mainPrdDtlList.addEventHandler("ondragmove",this.grd_mainPrdDtlList_ondragmove,this);
            this.grd_mainPrdDtlList.addEventHandler("ondrop",this.grd_mainPrdDtlList_ondrop,this);
            this.btn_dtlSave.addEventHandler("onclick",this.btn_dtlSave_onclick,this);
            this.btn_dtlRegist.addEventHandler("onclick",this.btn_dtlRegist_onclick,this);
            this.btn_dtlDelete.addEventHandler("onclick",this.btn_dtlDelete_onclick,this);
            this.div_detail.form.rdo_noticSprCd.addEventHandler("onitemchanged",this.rdo_noticSprCd_onitemchanged,this);
            this.div_detail.form.grd_oprUnitList.addEventHandler("oncellclick",this.grd_oprUnitList_oncellclick,this);
            this.div_detail.form.btn_oprUnitMulti.addEventHandler("onclick",this.btn_oprUnitMulti_onclick,this);
            this.div_detail.form.btn_oprUnitMultiText.addEventHandler("onclick",this.btn_oprUnitMultiText_onclick,this);
            this.div_detail.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_detail.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.btn_excelDownload.addEventHandler("onclick",this.btn_excelDownload_onclick,this);
            this.grd_mainPrdDtlListExcel.addEventHandler("oncellclick",this.grid_exhbnInfo_oncellclick,this);
            this.btn_largeExcel.addEventHandler("onclick",this.div_search_btn_largeExcel_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_VA_01_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
