(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("formChart");
            this.set_titletext("기준판매가변동현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,495);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MRK_LWST_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DSTRB_STD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_BSS_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"&apos;KRW&apos;\" type=\"STRING\" size=\"32\"/><Column id=\"BSS_SALSPRC_CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"STPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PURG_DSGN_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"INTL_LWST_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BSS_PCPRC\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"codeList\" type=\"STRING\" size=\"256\"/><Column id=\"STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ROW_COUNT\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSpr", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SAFT_INVN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGPLC_CTRY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"AUTO_LOGIC_EM_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"32\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00_01","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00","0","34","100%","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02","20","44",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_00","20","74",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdId","20","44","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("상품");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mnfr","550","44","130","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec","20","74","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","106","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","124",null,"366","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02","0","2",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_displayStatus","0","2","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("조회일시");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search","577","6","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_DTM_START","136","6","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_DTM_END","293","6","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59","280","6","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_inqPerdSprCd","441","6","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_inqPerdSpr");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","54","181","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("■ 단가 변동 이력");
            obj.set_cssclass("sta_WF_title01");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grid_list","0","118",null,"179","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_main");
            obj.set_autosizingtype("col");
            obj.set_autofittype("none");
            obj.set_autosizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"146\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"118\"/><Column size=\"90\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"상품ID\"/><Cell col=\"1\" text=\"변경일시\"/><Cell col=\"2\" text=\"최저매입가\"/><Cell col=\"3\" text=\"매입통화\"/><Cell col=\"4\" text=\"SSP기준가\"/><Cell col=\"5\" text=\"MD지정판매가\"/><Cell col=\"6\" text=\"ListPrice\"/><Cell col=\"7\" text=\"시장최저판매가\"/><Cell col=\"8\" text=\"내부최저판매가\"/><Cell col=\"9\" text=\"SSP기준판매가\"/><Cell col=\"10\" text=\"판매통화\"/><Cell col=\"11\" text=\"변경담당자ID\"/><Cell col=\"12\" text=\"변경담당자\"/><Cell col=\"13\" text=\"SSP진열상태\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ID_VIEW\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:REG_DTM\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"2\" text=\"bind:BSS_PCPRC\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:BSS_SALSPRC_CURR_UNIT_CD\"/><Cell col=\"4\" text=\"bind:STPRC\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:PURG_DSGN_SALSPRC==&quot;0&quot;?&quot;&quot;:PURG_DSGN_SALSPRC\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:DSTRB_STD_PRC==&quot;0&quot;?&quot;&quot;:DSTRB_STD_PRC\" displaytype=\"number\"/><Cell col=\"7\" text=\"expr:MRK_LWST_SALSPRC==&quot;0&quot;?&quot;&quot;:MRK_LWST_SALSPRC\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:INTL_LWST_SALSPRC==&quot;0&quot;?&quot;&quot;:INTL_LWST_SALSPRC\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:SSP_BSS_SALSPRC\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:CUR_UNT_CD\"/><Cell col=\"11\" text=\"bind:REGPSN_ID\"/><Cell col=\"12\" text=\"bind:OPRTR_NM\"/><Cell col=\"13\" text=\"bind:DISP_STATS_NM\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_viewCount",null,"85","104","28","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_type("dropdown");
            var Div00_form_cmb_viewCount_innerdataset = new nexacro.NormalDataset("Div00_form_cmb_viewCount_innerdataset", obj);
            Div00_form_cmb_viewCount_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20개씩</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500개씩</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1,000개씩</Col></Row><Row><Col id=\"codecolumn\">5000</Col><Col id=\"datacolumn\">5,000개씩</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10,000개씩</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_cmb_viewCount_innerdataset);
            obj.set_text("1,000개씩");
            obj.set_value("1000");
            obj.set_index("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"85","110","28","cmb_viewCount:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","0","90","100","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("(총 0건, 1 / 0)");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_paging","0","300",null,"36","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","34","100.00%","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00_00","0","108","100.00%","10",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00_00_00","0","75","100.00%","10",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_close","46.13%","332","65","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("닫기");
            obj.set_textAlign("center");
            obj.set_cssclass("btn_WF_select");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","0","20","62.61%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdId2","154","51",null,"18","535",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Static("edt_mnfr2","684","50","360","18",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec2","154","77","896","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","16","155","21",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("기준판매가 변동현황");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,495,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Div00.form.edt_orgplc2","value","ds_prPrdInfo","ORGPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_mnfr2","text","ds_prdInfo","MNFR_NM_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","stc_reprSpec2","text","ds_prdInfo","ATTR_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","stc_prdId2","text","ds_prdInfo","PRD_NM_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.cal_DTM_START","value","ds_search","STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.cal_DTM_END","value","ds_search","END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_27.xfdl","PC::pcUtils.xjs");
        this.addIncludeScript("SSP_BO_CA_27.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CA_27.xfdl", function() {
        /******************************************************************************
        PROJECT NAME : C:\Users\spaa\git\ssp-bo\src\main\ui\PC\SSP_BO_CA_27.xfdl
        CREATION DATES : 2022/03/15
        CREATER : 양정환
        *******************************************************************************/
        this.executeIncludeScript("PC::pcUtils.xjs"); /*include "PC::pcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
         this.totalCount = 0;
         this.bzplcYn = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.formChart_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);

        	//this.coCd = this.fv_coCd;
        	//this.prdId = '1';

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	this.Div00.form.cmb_inqPerdSprCd.set_value("2");
        	this.fn_pcDateChage(this.Div00.form.cal_DTM_START,this.Div00.form.cal_DTM_END, this.Div00.form.cmb_inqPerdSprCd);


        	//this.ds_search.setColumn(0,"CO_CD",this.fv_coCd);
        	//this.ds_search.setColumn(0,"PRD_ID", '000000000002823844');
        	this.ds_search.setColumn(0,"PRD_ID", this.parent.prdId);
        	if(typeof(this.parent.bzplcYn) == "string" && this.parent.bzplcYn == "Y"){
        		this.bzplcYn = this.parent.bzplcYn;
        	}

        	//공용상품정보
        	this.fn_searchPrPrdInfo();

        	//변동이력
        	this.fn_searchDispStatsChgHst(true);

        	//단축키 함수 호출
        	this.fn_regShortCutMethod();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/

        //공통코드 조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_inqPerdSpr=ds_output1";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.ds_search.setColumn(0, "codeList", "INQ_PERD_SPR_CD");
        	this.ds_search.setColumn(0, "langCd", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        //조회(공용상품정보)
        this.fn_searchPrPrdInfo = function(){
        	//this.ds_search.setColumn(0,"CO_CD",this.fv_coCd);
        	//this.ds_search.setColumn(0,"PRD_ID",this.parent.prdId);

        	var sSvcId = "getItemInfo";
        	var sUrl = "/pc/popup/select-prc-trend-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_chart=ds_output ds_prdInfo=ds_output2";
        	var arg;
        	var callback = "fn_callBack"
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        //조회(변동이력)
        this.fn_searchDispStatsChgHst = function(bInit){
        	//trace("SSP_BO_LA_30::fn_search:"+this.ds_search.getColumn(0,"SRCH_FR_DT"));
        	var bReturn  = true;

        	if(bReturn == true){
        		var sSvcId = "searchDispStatsChgHst";
        		var sUrl = "/pc/popup/select-prc-history-list.do";
        		var inDs = "ds_search=ds_search"
        		var outDs = "ds_main=ds_output";
        		var arg;

        		if(bInit) {
        			var oPaging = this.Div00.form.div_paging;
        			oPaging.uPage = 1;
        			oPaging.uPageNum = 0;
        			this.ds_search.setColumn(0,"START_NUM",0);
        			this.ds_search.setColumn(0,"ROW_COUNT",this.Div00.form.cmb_viewCount.value);
        		}

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0 && errorCode != -100){
        		alert(errorMsg);
        	}

        	switch(svcID){
        		case "commonCodeSearch":
        		    this.ds_inqPerdSpr.insertRow(0);
        			this.ds_inqPerdSpr.setColumn(0,"COM_DTL_CD","");
        			this.ds_inqPerdSpr.setColumn(0,"COM_DTL_CD_NM","전체");
        			this.Div00.form.cmb_inqPerdSprCd.set_value("2");
        			this.fn_pcDateChage(this.Div00.form.cal_DTM_START,this.Div00.form.cal_DTM_END, this.Div00.form.cmb_inqPerdSprCd);
        			break;

        		case "searchPrPrdInfo":
        			//alert("done");
        			break;

        		case "searchDispStatsChgHst":
        			//alert("done2");
        			this.Div00.form.div_paging.form.cfn_createPage(this.Div00.form.div_paging,this.totalCount,this.Div00.form.cmb_viewCount.value,"fn_pageCallback");

        			trace(this.bzplcYn)
        			if(this.bzplcYn == "Y"){
        				//this.Div00.form.grid_list.setFormatColProperty(13,"size",0);
        				this.Div00.form.grid_list.deleteContentsCol("body",13);
        			}

        			break;
        		default:
        			break;
        	}
        };

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.Div00.form.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.Div00.form.cmb_viewCount.value);
        		this.fn_searchDispStatsChgHst();
        	}

        	var sTotText = "(총 "+ this.fn_AmountCommas(oPaging.uTotCount)+"건, "+ this.fn_AmountCommas(oPaging.uPage) +" / "+ this.fn_AmountCommas(oPaging.uPageCnt) +")";
        	this.Div00.form.sta_totcnt.set_text(sTotText);
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodESC("btn_close_onclick");
        	this.fn_regMethodCtrlENTER("Div00_btn_search_onclick");
        };


        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        this.fn_AmountCommas = function(val){ //세자리마다',' 적용
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
        }



        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.Div00_cmb_inqPerdSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_pcDateChage(this.Div00.form.cal_DTM_START,this.Div00.form.cal_DTM_END, this.Div00.form.cmb_inqPerdSprCd);
        };

        this.Div00_cal_DTM_END_onchanged = function(obj,e)
        {
        	this.fn_pcDateValidate(this.Div00.form.cal_DTM_START,this.Div00.form.cal_DTM_END);
        };

        this.Div00_cal_DTM_START_onchanged = function(obj,e)
        {
        	this.fn_pcDateValidate(this.Div00.form.cal_DTM_START,this.Div00.form.cal_DTM_END);
        };

        this.Div00_btn_search_onclick = function(obj,e)
        {
        	this.fn_searchDispStatsChgHst(false);
        };

        this.Div00_btn_excelDown_onclick = function(obj,e)
        {
        	if(this.ds_main.getRowCount() > 0){
        		this.ofn_exportExcel({form:this, grid:this.Div00.form.grid_list, fileName:"기준판매가변동현황"});
        	}else{
        		//alert("다운로드 가능한 데이터가 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000205"));
        	}
        };

        this.formChart_onkeyup = function(obj,e)
        {
        	// 단축키 등록
        	this.fn_processKey(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.formChart_onload,this);
            this.addEventHandler("onkeyup",this.formChart_onkeyup,this);
            this.Div00.form.Static03_02.addEventHandler("onclick",this.Div00_Static03_02_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Div00.form.cal_DTM_START.addEventHandler("onchanged",this.Div00_cal_DTM_START_onchanged,this);
            this.Div00.form.cal_DTM_END.addEventHandler("onchanged",this.Div00_cal_DTM_END_onchanged,this);
            this.Div00.form.cmb_inqPerdSprCd.addEventHandler("onitemchanged",this.Div00_cmb_inqPerdSprCd_onitemchanged,this);
            this.Div00.form.cmb_viewCount.addEventHandler("onitemchanged",this.Div00_cmb_viewCount_onitemchanged,this);
            this.Div00.form.btn_excelDown.addEventHandler("onclick",this.Div00_btn_excelDown_onclick,this);
            this.Div00.form.Static01_00_01_00.addEventHandler("onclick",this.Div00_Static01_00_01_00_onclick,this);
            this.Div00.form.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.ds_main.addEventHandler("cancolumnchange",this.ds_pgmMng_cancolumnchange,this);
            this.ds_main.addEventHandler("oncolumnchanged",this.ds_pgmMng_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_CA_27.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
