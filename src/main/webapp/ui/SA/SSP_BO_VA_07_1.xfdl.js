(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_VA_07");
            this.set_titletext("배너");
            if (Form == this.constructor)
            {
                this._setFormPosition(1055,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_EXPS_PST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_noticSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bnrList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_INFO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"BNR_EXPS_PST_ID\" type=\"INT\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_SO\" type=\"INT\" size=\"256\"/><Column id=\"DISP_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_INC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_BNR_EXPS_PST_ID\" type=\"INT\" size=\"256\"/><Column id=\"BNR_STATS\" type=\"STRING\" size=\"256\"/><Column id=\"NOTLOGN_INC_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtlSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_EXPS_PST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_STATS\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitList", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchOprUnitList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\"/><Col id=\"USE_YN_NM\">전체</Col></Row><Row><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col></Row><Row><Col id=\"USE_YN_NM\">미 사용</Col><Col id=\"USE_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bnrExps", this);
            obj._setContents("<ColumnInfo><Column id=\"BNR_EXPS_LVL\" type=\"INT\" size=\"16\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BNR_EXPS_PST_ID\" type=\"INT\" size=\"16\"/><Column id=\"BNR_EXPS_PST_NM\" type=\"STRING\" size=\"16\"/><Column id=\"HRNK_BNR_EXPS_PST_ID\" type=\"INT\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"INT\" size=\"256\"/><Column id=\"CATG_DEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj = new Grid("grd_bnrList","20","350",null,null,"20","40",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_bnrList");
            obj.set_visible("true");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"320\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"60\"/><Column size=\"45\"/><Column size=\"45\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"전시순번\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"전시기간\"/><Cell col=\"5\" text=\"등록일\"/><Cell col=\"6\" text=\"상품포함\"/><Cell col=\"7\" text=\"사용여부\"/><Cell col=\"8\" text=\"상태\"/><Cell col=\"9\" colspan=\"2\" text=\"전시순서\"/></Band><Band id=\"body\"><Cell text=\"bind:BNR_INFO_SEQ\" color=\"#000000\" textDecoration=\"none\"/><Cell col=\"1\" text=\"bind:DISP_SO\"/><Cell col=\"2\" text=\"bind:TTL\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"3\" text=\"bind:EXPS_NOTIC_SPR_CD_NM\"/><Cell col=\"4\" textAlign=\"center\" expr=\"DISP_STR_DT+&quot; ~ &quot;+DISP_END_DT\"/><Cell col=\"5\" text=\"bind:REG_DTM\" edittype=\"none\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:PRD_INC_YN\" expr=\"PRD_INC_YN==&apos;Y&apos; ? &apos;포함&apos; : &apos;미포함&apos;\"/><Cell col=\"7\" text=\"bind:USE_YN\" expr=\"USE_YN==&apos;Y&apos; ? &apos;사용&apos; : &apos;사용안함&apos;\"/><Cell col=\"8\" text=\"bind:BNR_STATS\" expr=\"BNR_STATS == &apos;READY&apos; ? &apos;대기&apos; : BNR_STATS == &apos;ING&apos; ? &apos;진행중&apos; : &apos;종료&apos;\"/><Cell col=\"9\" text=\"&lt;fs v=&apos;13&apos;&gt;▲&lt;/fs&gt;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\" textAlign=\"right\" displaytype=\"decoratetext\"/><Cell col=\"10\" text=\"&lt;fs v=&apos;13&apos;&gt;▼&lt;/fs&gt;\" border=\"1px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4,0px solid #d4d4d4\" textAlign=\"left\" displaytype=\"decoratetext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,null,"81","28","105","grd_bnrList:10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,null,"81","28","105","grd_bnrList:10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("순서저장");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","296","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_title02");
            obj.set_text("■ 목록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regist",null,null,"81","28","20","grd_bnrList:10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totalCount","20","317","209",null,null,"grd_bnrList:3",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("총 0 건");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","0",null,"300","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","20","228",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","20","197",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05_00","20","46",null,"152","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","46","130","152",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("게시구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_noticSprCd","160","65","155","115",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_noticSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_rowcount("0");
            obj.set_tooltiptext("1");
            obj.set_direction("horizontal");
            obj.set_text("포함");
            obj.set_value("");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_oprUnitList","340","54","582","135",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_oprUnitList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"126\"/><Column size=\"200\"/><Column size=\"48\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"운영단위ID\"/><Cell col=\"1\" text=\"운영단위명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:OPR_UNIT_ID\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMulti","926","54","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_multi");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMultiText","926","82","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"270","60","28","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"270","60","28","btn_search:4",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_title00","20","15","200","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_title02");
            obj.set_text("■ 조회");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","20","197","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbx_useYn","160","201","200","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("USE_YN_NM");
            obj.set_codecolumn("USE_YN");
            obj.set_taborder("11");
            obj.set_text("전체");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static11","20","228","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("배너 상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("cbo_bnrStats","163","232","265","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_search_form_cbo_bnrStats_innerdataset = new nexacro.NormalDataset("div_search_form_cbo_bnrStats_innerdataset", obj);
            div_search_form_cbo_bnrStats_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">대기</Col><Col id=\"codecolumn\">READY</Col></Row><Row><Col id=\"codecolumn\">ING</Col><Col id=\"datacolumn\">진행중</Col></Row><Row><Col id=\"codecolumn\">END</Col><Col id=\"datacolumn\">종료</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbo_bnrStats_innerdataset);
            obj.set_text("A");
            obj.set_value("1");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1055,770,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.rdo_noticSprCd","value","ds_dtlSearch","EXPS_NOTIC_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cbx_useYn","value","ds_dtlSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cbo_bnrStats","value","ds_dtlSearch","BNR_STATS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_VA_07_1.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_VA_07_1.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_VA_07_1.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 배너
        CREATION DATES : 2022.03.14
        CREATER        : 이민호
        *******************************************************/
        //인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.noticAllBnrCount = 0;
        var upBnr = 10000; // 상단배너
        var catgBnr = 20000; // 카테고리 전문관
        var oneDpthCatgBnr = 40000; // 1뎁스 카테고리 배너
        var pprCatgBnr = 60000; // 인기 카테고리 배너
        var mbrJoinBnr = 70000; //SSP-828_김윤호_SA_20220928_2(BO)_회원가입페이지 하단 배너
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

        	//버튼 비활성화
        	//this.fn_setBtn(false);
        	this.fn_chgNoticSprCd();
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

        //배너리스트 조회
        this.fn_bnrDtlListSearch = function()
        {
        	var sSvcId = "bnrList";
        	var sUrl = "/sa/bnr/select-bnr-list.do";
        	var inDs = "ds_search=ds_dtlSearch ds_oprUnitList=ds_searchOprUnitList";
        	var outDs = "ds_bnrList=ds_output";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        //게시구분:전체 배너 개수 조회
        this.fn_chkBnrCnt = function()
        {
        	var sSvcId = "bnrListCnt";
        	var sUrl = "/sa/bnr/select-notic-all-bnr-cnt.do";
        	var inDs = "ds_search=ds_dtlSearch";
        	var outDs = "ds_bnrList=ds_output";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        //저장
        this.fn_save = function()
        {
        	if( !this.fn_dataCheck(this.ds_bnrList) ) {
        		alert(this.fn_getMessage("ERRN000036")); // 변경된 내용이 없습니다.
        		return false;
        	} else {
        		var sSvcId = "updateBnrDispSo";
        		var sUrl = "/sa/bnr/update-bnr-disp-so.do";
        		var inDs = "ds_save=ds_bnrList:U";
        		var outDs = "";
        		var arg = "";
        		var callback = "fn_callBack";

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        	}
        }

        // 배너 삭제(배너 노출정보부터 배너까지 모두 삭제)
        this.fn_delete = function() {
        	var sSvcId = "deleteBnrExps";
        	var sUrl = "/sa/bnr/delete-bnr-exps.do";
        	var inDs = "ds_delete=ds_bnrExps"
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
        			this.div_search.form.rdo_noticSprCd.set_index(0);

        			this.fn_chgNoticSprCd();

        			break;

        		case "insertOdrInqTgtDtls" :

        			this.fn_bnrDtlListSearch();

        			break;

        		case "bnrList" :

        			this.sta_totalCount.set_text("총 " + this.totalCount + " 건");

        			break;

        		case "bnrListCnt" :

        			if(this.noticAllBnrCount >= 5) {
        				alert(this.fn_getMessage("ERRN000020")); // 카테고리 전문관은 탭 5개이상 등록 불가합니다.
        				return;
        			}
        			this.fn_registPop();

        			break;

        		case "updateBnrDispSo" :
        			if(errorCode == ""){
        				alert(this.fn_getMessage("ERRN000030")); // 저장되었습니다.
        				this.fn_bnrDtlListSearch();
        			} else {
        				alert(errorMsg);
        			}
        			break;

        		case "deleteBnrExps" :
        			alert(this.fn_getMessage("ERRN000031")); // 삭제되었습니다.
        			this.ds_bnrExps.clearData();
        			this.ds_bnrExps.addRow();

        			// 배너 노출 목록 재조회, 포지션 최상단으로 위치 이동
        			this.parent.parent.parent.preSelectRowPosition = 0;
        			this.parent.parent.parent.fn_bnrExpsListSearch();
        			this.parent.parent.parent.tab_dtl.set_tabindex(0);

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

        						this.ds_searchOprUnitCheckList.setColumn(nRow, "CO_CD", this.ds_bnrExps.getColumn(0, "CO_CD"));
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

        /**
         * 정렬 공통 callback
         */
        this.fn_sortCallbackFunction = function(sGridId)
        {
        	var oGrid = null;

        	if(sGridId == "grd_bnrList")
        	{
        		oSortInfo = this.grd_bnrList.uaSortInfo;

        		this.ds_dtlSearch.setColumn(0, "SORT_COLUMN", oSortInfo.bindCol);
        		this.ds_dtlSearch.setColumn(0, "SORT_TYPE", oSortInfo.status);

        		this.fn_bnrDtlListSearch();
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	// grid 초기 설정
        	this.div_search.form.grd_oprUnitList.uSortFlag = "true";
        	this.div_search.form.grd_oprUnitList.uServerSortFlag = "false";
        	this.div_search.form.grd_oprUnitList.uCellSizeType = "true";

        	this.grd_bnrList.uSortFlag = "false";
        	this.grd_bnrList.uServerSortFlag = "true";
        	this.grd_bnrList.uCellSizeType = "true";
        	this.grd_bnrList.uSortCallback = "fn_sortCallbackFunction";
        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        // 배너 호출 시 세팅
        this.fn_setInit = function() {
        	// SSP_BO_VA_07의 값 세팅
        	this.ds_bnrExps.copyRow(0, this.parent.parent.parent.ds_bnrExps, 0); // 배너 단일 복사
        	this.ds_dtlSearch.copyRow(0, this.parent.parent.parent.ds_bnrExps, 0); // CO_CD, BNR_EXPS_PST_ID, CHN_TP_CD, MALL_SPR_CD 복사

        	// 배너 변경 시 운영단위 초기화
        	this.div_search.form.rdo_noticSprCd.set_index(0);
        	this.div_search.form.cbx_useYn.set_index(0);
        	this.div_search.form.cbo_bnrStats.set_index(0);
        	this.fn_chgNoticSprCd();
        	this.ds_oprUnitList.clearData();

        	//1뎁스 카테고리 배너 삭제버튼 노출 세팅
        	var catgDelYn = this.ds_bnrExps.getColumn(0, "CATG_DEL_YN");
        	var vBnrExpsPstId = this.ds_bnrExps.getColumn(0, "BNR_EXPS_PST_ID");
        	var vHrnkBnrExpsPstId = this.ds_bnrExps.getColumn(0, "HRNK_BNR_EXPS_PST_ID");
        	if(vHrnkBnrExpsPstId == oneDpthCatgBnr) {
        		//삭제 버튼 노출 여부
        		if(catgDelYn == "Y") {
        			this.btn_delete.set_visible(true);
        		} else {
        			this.btn_delete.set_visible(false);
        		}
        	} else {
        		this.btn_delete.set_visible(false);
        	}

        	// 상단배너 : 전시순서 노출, 카테고리 전문관 : 전시순서, 상품포함, 정렬순서 노출
        	// SSP-828_김윤호_SA_20220928_2(BO)_회원가입페이지 하단 배너
        	if(vBnrExpsPstId == upBnr || vBnrExpsPstId == catgBnr || vBnrExpsPstId == mbrJoinBnr) {
        		this.btn_save.set_visible(true);
        		this.grd_bnrList.setFormatColProperty(9, "size", 45); // 전시순서 화살표 위
        		this.grd_bnrList.setFormatColProperty(10, "size", 45); // 전시순서 화살표 아래
        		this.grd_bnrList.setFormatColProperty(1, "size", 60); // 정시순번

        		if(vBnrExpsPstId == catgBnr) { // 헤더명 변경
        			this.grd_bnrList.setCellProperty("Head", 2, "text", "탭명");
        			this.grd_bnrList.setFormatColProperty(6, "size", 60); // 상품포함
        		} else {
        			this.grd_bnrList.setCellProperty("Head", 2, "text", "제목");
        			this.grd_bnrList.setFormatColProperty(6, "size", 0);
        		}



        	} else {
        		this.btn_save.set_visible(false);
        		this.grd_bnrList.setFormatColProperty(9, "size", 0);
        		this.grd_bnrList.setFormatColProperty(10, "size", 0);
        		this.grd_bnrList.setFormatColProperty(1, "size", 0);

        		this.grd_bnrList.setCellProperty("Head", 2, "text", "제목");
        		this.grd_bnrList.setFormatColProperty(6, "size", 0);
        	}

        	// SSP-828_김윤호_SA_20220928_2(BO)_회원가입페이지 하단 배너
        	if(vBnrExpsPstId == mbrJoinBnr){

        		this.div_search.form.rdo_noticSprCd.set_readonly(true);

        	} else {
        		this.div_search.form.rdo_noticSprCd.set_readonly(false);
        	}
        }

        // 게시구분코드 변경
        this.fn_chgNoticSprCd = function() {
        	if(this.div_search.form.rdo_noticSprCd.value == "30" || this.div_search.form.rdo_noticSprCd.value == "50"
        		|| this.div_search.form.rdo_noticSprCd.value == "60" || this.div_search.form.rdo_noticSprCd.value == "70") {
        		this.div_search.form.grd_oprUnitList.set_enable(true);
        		this.div_search.form.btn_oprUnitMulti.set_enable(true);
        		this.div_search.form.btn_oprUnitMultiText.set_enable(true);
        	} else {
        		this.div_search.form.grd_oprUnitList.set_enable(false);
        		this.div_search.form.btn_oprUnitMulti.set_enable(false);
        		this.div_search.form.btn_oprUnitMultiText.set_enable(false);
        	}
        }

        // 전체 버튼 활성화/비활성화 세팅
        this.fn_setBtn = function(isEnable)
        {
        	this.div_search.form.btn_reset.set_enable(isEnable);
        	this.div_search.form.btn_search.set_enable(isEnable);
        	this.btn_regist.set_enable(isEnable);
        	this.btn_save.set_enable(isEnable);
        };

        this.fn_registPop = function() {

        	var vBnrExpsPstId = this.ds_bnrExps.getColumn(0, "BNR_EXPS_PST_ID");
        	var vHrnkBnrExpsPstId = this.ds_bnrExps.getColumn(0, "HRNK_BNR_EXPS_PST_ID");

        	var bnrFileNm = "";
        	if(vBnrExpsPstId == catgBnr) {
        		bnrFileNm = "SA::SSP_BO_VA_08_2.xfdl";
        	} else if(vHrnkBnrExpsPstId == oneDpthCatgBnr) {
        		bnrFileNm = "SA::SSP_BO_VA_08_3.xfdl";
        	} else if(vBnrExpsPstId == pprCatgBnr) {
        		bnrFileNm = "SA::SSP_BO_VA_08_4.xfdl";
        	} else {
        		bnrFileNm = "SA::SSP_BO_VA_08_1.xfdl";
        	}

        	var objParam = {
        		coCd:this.ds_bnrExps.getColumn(0, "CO_CD")
        		, chnTpCd:this.ds_bnrExps.getColumn(0, "CHN_TP_CD")
        		, mallSprCd:this.ds_bnrExps.getColumn(0, "MALL_SPR_CD")
        		, bnrExpsPstId:this.ds_bnrExps.getColumn(0, "BNR_EXPS_PST_ID")
        		, bnrExpsPstNm:this.ds_bnrExps.getColumn(0, "BNR_EXPS_PST_NM")
        		, hrnkBnrExpsPstId:this.ds_bnrExps.getColumn(0, "HRNK_BNR_EXPS_PST_ID")
        		, prdClCd:this.ds_bnrExps.getColumn(0, "PRD_CLCD")
        	};

        	objParam.title = "배너 등록 팝업";

        	this.gfn_openPopup("btn_regist", bnrFileNm, objParam, "fn_popupCallback");
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회버튼
        this.btn_search_onclick = function(obj,e)
        {

        	// 게시구분코드가 운영단위가 아니면 아니면 운영단위 정보 삭제
        	// SSP-2971
        	if(this.div_search.form.rdo_noticSprCd.value != "30" && this.div_search.form.rdo_noticSprCd.value != "50"
        		&& this.div_search.form.rdo_noticSprCd.value != "60" && this.div_search.form.rdo_noticSprCd.value != "70") {
        		var aDelArr = new Array();

        		for(var i = 0; i< this.ds_oprUnitList.rowcount; i++)
        		{
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
        		this.fn_bnrDtlListSearch();
        	} else {
        		this.ds_dtlSearch.setColumn(0,"INQ_COND_DTLS", this.name);
        		this.fn_insertSelectedData("fn_callBack");
        	}
        };

        //리셋버튼
        this.btn_reset_onclick = function(obj,e)
        {
        	this.ds_dtlSearch.reset();
        	this.ds_oprUnitList.reset();
        	this.ds_searchOprUnitList.reset();

        	this.div_search.form.rdo_noticSprCd.set_index(0);
        	this.div_search.form.cbx_useYn.set_index(0);
        	this.div_search.form.cbo_bnrStats.set_index(0);
        };

        //저장버튼(전시순서 저장)
        this.btn_save_onclick = function(obj,e)
        {
        	for(var i = 0; i< this.ds_bnrList.rowcount; i++) {
        		this.ds_bnrList.setColumn(i, "DISP_SO", i+1);
        	}
        	this.fn_save();
        };

        // 등록버튼
        this.btn_regist_onclick = function(obj,e)
        {
        	// 카테고리 전문관의 경우 등록 5개 제한
        // 	if(catgBnr == this.ds_bnrExps.getColumn(0, "BNR_EXPS_PST_ID")) {
        // 		this.fn_chkBnrCnt();
        // 	} else {
        		this.fn_registPop();	// SSP-2807 | 전문관 TAB등록 개수 제한 해제
        //	}

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
        				  , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
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
        	var params = { textId : this.div_search.form.btn_oprUnitMultiText };
        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_SA_MSEARCH.xfdl", params,  "fn_popupCallback", options);
        };

        // 배너리스트 그리드 클릭
        this.grd_bnrList_oncellclick = function(obj,e)
        {
        	if(e.col == 2) { // 제목
        		var vBnrExpsPstId = this.ds_bnrExps.getColumn(0, "BNR_EXPS_PST_ID");
        		var vHrnkBnrExpsPstId = this.ds_bnrExps.getColumn(0, "HRNK_BNR_EXPS_PST_ID");

        		var bnrFileNm = "";
        		if(vBnrExpsPstId == catgBnr) {
        			bnrFileNm = "SA::SSP_BO_VA_08_2.xfdl";
        		} else if(vHrnkBnrExpsPstId == oneDpthCatgBnr) {
        			bnrFileNm = "SA::SSP_BO_VA_08_3.xfdl";
        		} else if(vBnrExpsPstId == pprCatgBnr) {
        			bnrFileNm = "SA::SSP_BO_VA_08_4.xfdl";
        		} else {
        			bnrFileNm = "SA::SSP_BO_VA_08_1.xfdl";
        		}
        		var objParam = {
        			coCd:this.ds_bnrList.getColumn(e.row, "CO_CD")
        			, bnrInfoSeq:this.ds_bnrList.getColumn(e.row, "BNR_INFO_SEQ")
        			, chnTpCd:this.ds_bnrList.getColumn(e.row, "CHN_TP_CD")
        			, bnrExpsPstId:this.ds_bnrList.getColumn(e.row, "BNR_EXPS_PST_ID")
        			, hrnkBnrExpsPstId:this.ds_bnrList.getColumn(e.row, "HRNK_BNR_EXPS_PST_ID")
        		};

        		this.gfn_openPopup("btn_regist", bnrFileNm, objParam, "fn_popupCallback");

        	} else if(e.col == 9) {
        		if(e.row == 0){
        			alert(this.fn_getMessage("ERRN000038")); // 더 이상 이동할 수 없습니다.
        			return false;
        		}
        		this.ds_bnrList.moveRow(e.row, (e.row-1));
        	} else if(e.col == 10) {
        		if(e.row == (this.ds_bnrList.getRowCount()-1)){
        			alert(this.fn_getMessage("ERRN000038")); // 더 이상 이동할 수 없습니다.
        			return false;
        		}
        		this.ds_bnrList.moveRow(e.row, (e.row+1));
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

        // 배너 전체 삭제
        this.btn_delete_onclick = function(obj,e)
        {
        	if(confirm(this.fn_getMessage("ERRN000051"))) { // 현재 선택하신 카테고리의 배너정보가 모두 삭제 됩니다.\n삭제하시겠습니까?
        		this.fn_delete();
        	}
        };

        //drag 시작
        this.grd_bnrList_ondrag = function(obj,e)
        {
        	// 상단배너, 카테고리 전문관일 경우에만 통과
        	var vBnrExpsPstId = this.ds_bnrExps.getColumn(0, "BNR_EXPS_PST_ID");
        	if(vBnrExpsPstId != upBnr && vBnrExpsPstId != catgBnr) {
        		return;
        	}
        	var nRow = e.row;
        	var oBindDs = this[obj.binddataset];
        	var sValue = oBindDs.getColumn(e.row,"TTL");

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
        this.grd_bnrList_ondragmove = function(obj,e)
        {
        	var nLeft = e.clientx + obj.getOffsetLeft() + 10;
        	var nTop  = e.clienty + obj.getOffsetTop();
        	this.sta_drag.move(nLeft,nTop);
        };

        //row 변경
        this.grd_bnrList_ondrop = function(obj,e)
        {
        	var nToRow = e.row;
        	var oBindDs = this[obj.binddataset];
        	oBindDs.moveRow(this.sta_drag.uAsRow, nToRow)
        	var	oStatic = this.removeChild("sta_drag");
        	oStatic.destroy();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.grd_bnrList.addEventHandler("onselectchanged",this.fn_editChg,this);
            this.grd_bnrList.addEventHandler("oncellclick",this.grd_bnrList_oncellclick,this);
            this.grd_bnrList.addEventHandler("ondrag",this.grd_bnrList_ondrag,this);
            this.grd_bnrList.addEventHandler("ondragmove",this.grd_bnrList_ondragmove,this);
            this.grd_bnrList.addEventHandler("ondrop",this.grd_bnrList_ondrop,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_regist.addEventHandler("onclick",this.btn_regist_onclick,this);
            this.div_search.form.rdo_noticSprCd.addEventHandler("onitemchanged",this.rdo_noticSprCd_onitemchanged,this);
            this.div_search.form.grd_oprUnitList.addEventHandler("oncellclick",this.grd_oprUnitList_oncellclick,this);
            this.div_search.form.btn_oprUnitMulti.addEventHandler("onclick",this.btn_oprUnitMulti_onclick,this);
            this.div_search.form.btn_oprUnitMultiText.addEventHandler("onclick",this.btn_oprUnitMultiText_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_VA_07_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
