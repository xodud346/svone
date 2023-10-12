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
                this._setFormPosition(1000,415);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_purcInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"VLD_END_DT\" type=\"STRING\" size=\"32\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_STR_DT\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"VLD_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pcPrdPrcDtls", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PCPRC\" type=\"STRING\" size=\"256\"/><Column id=\"PLN_PRFRT\" type=\"STRING\" size=\"256\"/><Column id=\"STPRC\" type=\"STRING\" size=\"256\"/><Column id=\"DSTRB_STD_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"MRK_LWST_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"INTL_LWST_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_DSGN_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_CURR_BSS_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHRT_APLY_YM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_BSS_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_VLD_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_VLD_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DCRT_APLY_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_EXPS_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dcrt", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">원</Col><Col id=\"COM_DTL_CD\">10</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">%</Col><Col id=\"COM_DTL_CD\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00_00","0","19","69","14",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("■ 구매 정보");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","0","252",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","311","180","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("■ 현재 적용 기준가격(VAT 제외)");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_price","0","349",null,"65","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_pcPrdPrcDtls");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"10\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"10\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"CO_CD\"/><Cell col=\"1\" text=\"PRD_ID\"/><Cell col=\"2\" text=\"BZPLC_ID\"/><Cell col=\"3\" text=\"최저매입가\"/><Cell col=\"4\" text=\"사전설정&#13;&#10;매익률\"/><Cell col=\"5\" text=\"R&amp;D기준가\"/><Cell col=\"6\" text=\"List Price\"/><Cell col=\"7\" text=\"기준판매가\"/><Cell col=\"8\" text=\"할인율적용&#13;&#10;판매가\"/><Cell col=\"9\" colspan=\"2\" text=\"기간할인금액\"/><Cell col=\"11\" colspan=\"3\" text=\"기간할인기간\"/><Cell col=\"14\" text=\"일반고객&#13;&#10;노출판매가\"/><Cell col=\"15\" colspan=\"3\" text=\"유효기간\"/></Band><Band id=\"body\"><Cell text=\"bind:CO_CD\"/><Cell col=\"1\" text=\"bind:PRD_ID\"/><Cell col=\"2\" text=\"bind:BZPLC_ID\"/><Cell col=\"3\" text=\"bind:PRD_PRC\"/><Cell col=\"4\" text=\"bind:PLN_PRFRT\"/><Cell col=\"5\" text=\"bind:STPRC\"/><Cell col=\"6\" text=\"bind:DSTRB_STD_PRC\"/><Cell col=\"7\" text=\"bind:SSP_CURR_BSS_SALSPRC\" displaytype=\"number\" edittype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" text=\"bind:DCRT_APLY_SALSPRC\"/><Cell col=\"9\" text=\"bind:RND_DC_QTY\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"10\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_dcrt\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" text=\"bind:RND_DC_SPR_CD\"/><Cell col=\"11\" text=\"bind:RND_DC_VLD_STR_DTM\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"12\" text=\"~\"/><Cell col=\"13\" text=\"bind:RND_DC_VLD_END_DTM\" edittype=\"date\" displaytype=\"date\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"none\" text=\"bind:CUST_EXPS_SALSPRC\"/><Cell col=\"15\" text=\"bind:BSS_SALSPRC_STR_DTM\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"16\" text=\"~\"/><Cell col=\"17\" text=\"bind:BSS_SALSPRC_END_DTM\" displaytype=\"date\" edittype=\"date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","2","49","160","14",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("(총 0건 1/1)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bssSalsprcCurst",null,"310","120","28","214",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("기준판매가변동현황");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ltsRenDtm","90","11","232","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("최근 갱신일시 : 2021.08.25 14:20");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","83",null,"157","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_purcInfo");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"115\"/><Column size=\"80\"/><Column size=\"98\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"153\"/><Column size=\"103\"/><Column size=\"103\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"협력사ID\"/><Cell col=\"1\" text=\"협력사\"/><Cell col=\"2\" text=\"매입가\"/><Cell col=\"3\" text=\"매입통화\"/><Cell col=\"4\" text=\"공급가능&#13;&#10;여부\"/><Cell col=\"5\" text=\"가격유효기간\"/><Cell col=\"6\" text=\"최소주문수량\"/><Cell col=\"7\" text=\"Condition\"/><Cell col=\"8\" text=\"배송가능지역\"/></Band><Band id=\"body\"><Cell text=\"bind:CPRTCP_ID\"/><Cell col=\"1\" text=\"bind:CPRTCP_KOR_NM\"/><Cell col=\"2\" text=\"bind:PRD_PRC\"/><Cell col=\"3\" text=\"bind:CURR_UNIT_CD\"/><Cell col=\"4\" text=\"expr:comp.parent.fn_splPsbYn(SPL_PSB_YN)\"/><Cell col=\"5\" text=\"bind:VLD_DT\"/><Cell col=\"6\" text=\"bind:MIN_ODR_QTY\"/><Cell col=\"7\" expandsize=\"32\" displaytype=\"imagecontrol\" text=\"expr:&quot;theme::default/images/btn_WF_Grdexpand.png&quot;\"/><Cell col=\"8\" text=\"expr:&quot;theme::default/images/btn_WF_Grdexpand.png&quot;\" displaytype=\"imagecontrol\" expandshow=\"hide\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_page","90","41","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_page");
            obj.set_codecolumn("COUNT");
            obj.set_datacolumn("COUNT");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00","0","0","100%","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00","0","34","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00","0","239","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_01","0","288","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_01","0","72","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00_00","0","339","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bssSalsprc","btn_bssSalsprcCurst:4","317","203","14",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("기준판매가 적용일 : 2021.08.25 14:20");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,415,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("SSP_BO_LA_04_1.xfdl", function() {
        /******************************************************************************
        PROJECT NAME : C:\Users\spaa\git\ssp-bo\src\main\ui\RD\SSP_BO_LA_04_1.xfdl
        CREATION DATES : 2022/03/11
        CREATER : 이택우
        *******************************************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.coCd = this.parent.parent.parent.parent.parent.parent.coCd;
        this.prdId = this.parent.parent.parent.parent.parent.parent.prdId;
        this.userId = this.parent.parent.parent.parent.parent.parent.userId;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){

        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	//this.fn_commonCodeSearch();

        	trace("SSP_BO_LA_04_1:userId="+this.userId+" / "+this.coCd);

        	this.ds_search.setColumn(0,"CO_CD",this.coCd);//회사코드
        	this.ds_search.setColumn(0,"PRD_ID",this.prdId);//PRD_ID
        	this.ds_search.setColumn(0,"MALL_SPR_CD","10");//RND
        	this.ds_search.setColumn(0,"PUB_ONLY_SPR_CD","");//공용전용구분
        	this.ds_search.setColumn(0,"BZPLC_ID","*");//공용

        	this.fn_searchPurcInfo(true);

        	this.fn_searchPcPrdPrc(true);
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
        this.fn_searchPurcInfo = function(bInit)	{
        	var sSvcId = "searchPurcInfo";
        	var sUrl = "/rd/pubPrdSalsprcQty/selectPurcInfo.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_purcInfo=ds_output1";
        	var arg = "";
        	var callback = "fn_callBack";

        	// 조회버튼 클릭시 페이징 초기화 시킨다.
        	if(bInit) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM",0);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.cbo_page.value);
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        //조회(현재 적용 기준가격 )
        this.fn_searchPcPrdPrc = function(bInit){

        	var bReturn  = true;

        	if(bReturn == true){
        		var sSvcId = "searchPcPrdPrc";
        		var sUrl = "/rd/pubPrdSalsprcQty/selectPcPrdPrc.do";
        		var inDs = "ds_search=ds_search"
        		var outDs = "ds_pcPrdPrcDtls=ds_main";
        		var arg;
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        };

        //저장(현재 적용 기준가격)
        this.fn_savePcPrdPrcDtls = function(){

        	this.ds_pcPrdPrcDtls.setColumn(0,"UPDPSN_ID",this.userId);

        	var sSvcId = "savePcPrdPrcDtls";
        	var sUrl = "/rd/pubPrdSalsprcQty/savePcPrdPrcDtls.do";
        	var inDs = "ds_save=ds_pcPrdPrcDtls:U"
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0 && errorCode != -100){
        		alert(errorMsg);
        	}

        	switch(svcID){
        		case "searchPurcInfo" :
        			this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.cbo_page.value,"fn_pageCallback");

        			break;
        		case "searchPcPrdPrc" :

        			break;
        		case "savePcPrdPrcDtls" :
        			//alert("저장되었습니다.");
        			//this.fn_searchPrPrdInfo();
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
        		this.ds_search.setColumn(0,"ROW_COUNT", this.cbo_page.value);
        		this.fn_search();
        	}

        	var sTotText = "(총 "+ oPaging.uTotCount+"건 "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.sta_totcnt.set_text(sTotText);
        };
        this.btn_bssSalsprcCurst_onclick = function(obj,e)
        {
        	var objParam = {
        		coCd:this.coCd
        		, prdId:this.prdId
        	};
        	this.gfn_openPopup("sspBoLa27", "RD::SSP_BO_LA_27.xfdl", objParam);
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 공급가능여부
        this.fn_splPsbYn = function(arg)
        {
        	if(arg == "Y"){
        		return "가능";
        	}else if(arg == "N"){
        		return "불가";
        	}}

        this.grd_list_oncellclick = function(obj,e)
        {
        	if(e.col == '7'){
        		var objParam = {
        			coCd : this.ds_purcInfo.getColumn(this.ds_purcInfo.rowposition, "CO_CD"),
        			cprtcpId : this.ds_purcInfo.getColumn(this.ds_purcInfo.rowposition, "PRD_ID"),
        			cprtcpNM : "테스트협력사"
        		};

        		this.gfn_openPopup("SSP_BO_CA_53", "PC::SSP_BO_CA_26.xfdl", objParam);
        	}
        };

        this.fn_alert = function(arg){

        	alert("test");

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_bssSalsprcCurst.addEventHandler("onclick",this.btn_bssSalsprcCurst_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
        };
        this.loadIncludeScript("SSP_BO_LA_04_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
