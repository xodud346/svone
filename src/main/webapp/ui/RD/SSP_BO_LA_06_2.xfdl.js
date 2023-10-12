(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_LA_04");
            this.set_titletext("공용상픔가격정보");
            this.set_scrolltype("both");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,510);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prPrdInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CATG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"RND_USCUST_DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HASH_TAG\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_HNL_PSB_YN \" type=\"STRING\" size=\"256\"/><Column id=\"DIS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"HRM_CHM_MTL_YN \" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"SAFT_INVN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_KILR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DP_PRD_DISP_STATS_INFO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PC_CPRTCP_PRD_INFO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MNF_ORI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_REPR_ATTR\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_REPR_ATTR\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_HNL_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00_00","0","21","97","14",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("■ 요청 상품 정보");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03_00","0","46",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03_07","0","77",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03_06","0","108",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03_05","0","139",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03_04","0","170",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03_03","0","201",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03_02","0","232",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03_01","0","263",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdNm","305","47","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfr","430","81","175","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_orgplc","610","77","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_orgplc","735","81",null,"24","10",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mnfr","305","77","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","430","50",null,"24","10",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_hpeUprc","735","112",null,"24","10",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_hpeUprc","610","108","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("희망단가");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_hpeQty","735","143",null,"24","10",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_hpeQty","610","139","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("희망수량");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_pubOnlySpr","610","170","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_reprSpec","125","112","481","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","125","143","481","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","125","50","175","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdId00","125","80","175","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dispStatsChgrsn","125","205","542","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dispStatsChgrsn00","125","235","542","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","363","97","14",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("■ 요청 고객 정보");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00","0","36","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdId","0","46","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_03_01","0","77","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("대표상품구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec","0","108","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","0","139","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_hrmChmYn","0","170","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("선택정보");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_00_02","0","201","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("등록요청사유");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_00_03","0","232","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_00_04","0","263","120","80",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_01","0","343","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00","0","377","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03_02_00","0","389",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03_02_00_00","0","420",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_01","0","389","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdId00_00","125","393","175","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_00_00_00","305","389","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("요청일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfr2_01","430","393","175","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_00_00_01_03","610","389","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_01_00","0","420","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdId00_00_00","125","424","175","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_00_00_00_00","305","420","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfr2_01_00","430","424","175","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_00_00_01_03_00","610","420","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("요청자");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_orgplc2_03_00","735","424",null,"24","10",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_pubOnlySpr","735","175",null,"24","10",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_enable("false");
            var rdo_pubOnlySpr_innerdataset = new nexacro.NormalDataset("rdo_pubOnlySpr_innerdataset", obj);
            rdo_pubOnlySpr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">P</Col><Col id=\"datacolumn\">공용</Col></Row><Row><Col id=\"codecolumn\">O</Col><Col id=\"datacolumn\">전용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_pubOnlySpr_innerdataset);
            this.addChild(obj.name, obj);

            obj = new CheckBox("che_hrmChmYn","126","176","127","22",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("화학물질여부");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,510,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_prdId","value","ds_prPrdInfo","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_prdNm","value","ds_prPrdInfo","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_mnfr","value","ds_prPrdInfo","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_orgplc","value","ds_prPrdInfo","ORGPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_reprSpec","value","ds_prPrdInfo","REPR_SPEC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_prdClcd","value","ds_prPrdInfo","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","rdo_pubOnlySpr","value","ds_prPrdInfo","PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_dispStatsChgrsn","value","ds_prPrdInfo","REQ_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","che_hrmChmYn","value","ds_prPrdInfo","CHM_MTL_PRD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_dispStatsChgrsn00","value","ds_prPrdInfo","ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_LA_06_2.xfdl", function() {
        /******************************************************************************
        PROJECT NAME : C:\Users\spaa\git\ssp-bo\src\main\ui\RD\SSP_BO_LA_04_3.xfdl
        CREATION DATES : 2022/03/21
        CREATER : 이택우
        *******************************************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.coCd = this.parent.parent.parent.parent.parent.parent.coCd;
        this.prdId = this.parent.parent.parent.parent.parent.parent.prdId;
        this.gubun = this.parent.parent.parent.parent.parent.parent.gubun;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){

        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	//this.fn_commonCodeSearch();

        	//var coCd = this.parent.parent.parent.parent.parent.parent.coCd;
        	//var prdId = this.parent.parent.parent.parent.parent.parent.prdId;

        	this.ds_search.setColumn(0,"CO_CD",this.coCd);//회사코드
        	this.ds_search.setColumn(0,"REQ_PRD_ID",this.prdId);//PRD_ID
        	this.ds_search.setColumn(0,"MALL_SPR_CD","10");//RND
        	this.ds_search.setColumn(0,"PUB_ONLY_SPR_CD","");//공용전용구분
        	this.ds_search.setColumn(0,"BZPLC_ID","*");//공용

        	if(this.gubun != "1")
        		this.fn_searchRdReqNewPrdInfo(true);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        // //공통코드조회
        this.fn_commonCodeSearch = function(){

        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_comboDateTemp=ds_output1 ds_comboDispStatsTemp=ds_output2";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD,DISP_STATS_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //조회(구매정보)
        this.fn_searchRdReqNewPrdInfo = function(bInit)	{
        	var sSvcId = "searchRdReqNewPrdInfo";
        	var sUrl = "/rd/pubPrdSalsprcQty/selectRdReqNewPrdInfo.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_purcInfo=ds_output1";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0 && errorCode != -100){
        		alert(errorMsg);
        	}

        	switch(svcID){
        		case "searchRdReqNewPrdInfo" :
        			break;
        		default:
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
        };
        this.loadIncludeScript("SSP_BO_LA_06_2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
