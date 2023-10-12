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
                this._setFormPosition(1000,510);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_page1", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pcPrdQty", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"QTY_ITV_STR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"QTY_ITV_END\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DC_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"QTY_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"QTY_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"QTY_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page2", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pcPrdDlcstDtls", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"DLCST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_ITV_STR\" type=\"STRING\" size=\"256\"/><Column id=\"EXTR_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_ITV_END\" type=\"STRING\" size=\"256\"/><Column id=\"DLCST_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"DLCST_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DLCST_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_spr", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">일반</Col><Col id=\"COM_DTL_CD\">10</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">배수주문</Col><Col id=\"COM_DTL_CD\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00_01_02_00_00_00","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","21","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Condition 이력조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00","0","49","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","61","65","14",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("■ 물량할인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add1",null,"89","70","28","74",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("+추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del1","btn_add1:4","89","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("-삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_qty","0","129",null,"95","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_pcPrdQty");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"CO_CD\"/><Cell col=\"2\" text=\"PRD_ID\"/><Cell col=\"3\" text=\"BZPLC_ID\"/><Cell col=\"4\" text=\"QTY_SEQ\"/><Cell col=\"5\" text=\"물량(From)\"/><Cell col=\"6\" text=\"물량(To)\"/><Cell col=\"7\" text=\"할인금액\"/><Cell col=\"8\" text=\"판매통화\"/><Cell col=\"9\" text=\"기간(From)\"/><Cell col=\"10\" text=\"기간(To)\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CO_CD\"/><Cell col=\"2\" text=\"bind:PRD_ID\"/><Cell col=\"3\" text=\"bind:BZPLC_ID\"/><Cell col=\"4\" text=\"bind:QTY_SEQ\"/><Cell col=\"5\" text=\"bind:QTY_ITV_STR\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"6\" text=\"bind:QTY_ITV_END\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"7\" text=\"bind:DC_AMT\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"8\" text=\"bind:CURR_UNIT_CD\"/><Cell col=\"9\" text=\"bind:QTY_STR_DTM\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"10\" text=\"bind:QTY_END_DTM\" displaytype=\"date\" edittype=\"date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00_00","0","118","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00_00_00","0","224","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","0","235",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_01","0","271","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","293","65","14",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("■ 배송비");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_dlcst","0","359",null,"95","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_pcPrdDlcstDtls");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"87\"/><Column size=\"92\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"CO_CD\"/><Cell col=\"2\" text=\"PRD_ID\"/><Cell col=\"3\" text=\"BZPLC_ID\"/><Cell col=\"4\" text=\"DLCST_SEQ\"/><Cell col=\"5\" text=\"유형\"/><Cell col=\"6\" text=\"구분\"/><Cell col=\"7\" text=\"수량(From)\"/><Cell col=\"8\" text=\"수량(To)\"/><Cell col=\"9\" text=\"할증금액\"/><Cell col=\"10\" text=\"판매통화\"/><Cell col=\"11\" text=\"기간(From)\"/><Cell col=\"12\" text=\"기간(To)\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:CO_CD\"/><Cell col=\"2\" text=\"bind:PRD_ID\"/><Cell col=\"3\" text=\"bind:BZPLC_ID\"/><Cell col=\"4\" text=\"bind:DLCST_SEQ\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"bind:DLCST_SPR_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_spr\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"7\" text=\"bind:QTY_ITV_STR\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"8\" text=\"bind:QTY_ITV_END\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"9\" text=\"bind:EXTR_AMT\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"10\" text=\"bind:CURR_UNIT_CD\"/><Cell col=\"11\" text=\"bind:DLCST_STR_DTM\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"12\" text=\"bind:DLCST_END_DTM\" displaytype=\"date\" edittype=\"date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00_00_00_00","0","348","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging00","0","511",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add2",null,"319","70","28","74",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("+추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del2","btn_add2:4","319","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("-삭제");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_page","107","89","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_page1");
            obj.set_codecolumn("COUNT");
            obj.set_datacolumn("COUNT");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","0","94","160","14",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("(총 0건 1/1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00","0","77","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00_00_00_01","0","455","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging2","0","468",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Div00");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt2","0","325","160","14",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("(총 0건 1/1)");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_page2","107","319","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_page1");
            obj.set_codecolumn("COUNT");
            obj.set_datacolumn("COUNT");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00_00_01","0","308","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,510,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("SSP_BO_LA_04_2.xfdl", function() {
        /******************************************************************************
        PROJECT NAME : C:\Users\spaa\git\ssp-bo\src\main\ui\RD\SSP_BO_LA_04_2.xfdl
        CREATION DATES : 2022/03/11
        CREATER : 이택우
        *******************************************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.totalCount2 = 0;
        this.coCd = this.parent.parent.parent.parent.parent.parent.coCd;
        this.prdId = this.parent.parent.parent.parent.parent.parent.prdId;
        this.userId = this.parent.parent.parent.parent.parent.parent.userId;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){

        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	trace("SSP_BO_LA_04_2:userId="+this.userId+" / "+this.coCd);

        	//공통코드 조회
        	//this.fn_commonCodeSearch();

        	this.ds_search.setColumn(0,"CO_CD",this.coCd);//회사코드
        	this.ds_search.setColumn(0,"PRD_ID",this.prdId);//PRD_ID
        	this.ds_search.setColumn(0,"MALL_SPR_CD","10");//RND
        	this.ds_search.setColumn(0,"PUB_ONLY_SPR_CD","");//공용전용구분
        	this.ds_search.setColumn(0,"BZPLC_ID","*");//공용

        	//물량할인
        	this.fn_searchPcPrdQty(true);

        	//배송비
        	this.fn_searchPcPrdDlcstDtls(true);
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

        //조회(물량할인)
        this.fn_searchPcPrdQty = function(bInit){

        	var bReturn  = true;

        	if(bReturn == true){
        		var sSvcId = "searchPcPrdQty";
        		var sUrl = "/rd/pubPrdSalsprcQty/selectPcPrdQty.do";
        		var inDs = "ds_search=ds_search"
        		var outDs = "ds_pcPrdQty=ds_main";
        		var arg;

        		if(bInit) {
         			var oPaging = this.div_paging;
        			oPaging.uPage = 1;
        			oPaging.uPageNum = 0;
        			this.ds_search.setColumn(0,"START_NUM",0);
        			this.ds_search.setColumn(0,"ROW_COUNT",this.cbo_page.value);
        		}

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        };

        //조회(배송비)
        this.fn_searchPcPrdDlcstDtls = function(bInit){

        	var bReturn  = true;

        	if(bReturn == true){
        		var sSvcId = "searchPcPrdDlcstDtls";
        		var sUrl = "/rd/pubPrdSalsprcQty/selectPcPrdDlcstDtls.do";
        		var inDs = "ds_search=ds_search"
        		var outDs = "ds_pcPrdDlcstDtls=ds_main";
        		var arg;

        		if(bInit) {
         			var oPaging = this.div_paging2;
         			oPaging.uPage = 1;
         			oPaging.uPageNum = 0;
         			this.ds_search.setColumn(0,"START_NUM",0);
         			this.ds_search.setColumn(0,"ROW_COUNT",this.cbo_page2.value);
        		}

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        };

        //저장(물량할인)
        this.fn_saveRndQtyDc = function(){
        	var sSvcId = "saveRndQtyDc";
        	var sUrl = "/rd/pubPrdSalsprcQty/saveRndQtyDc.do";
        	var inDs = "ds_save=ds_pcPrdQty:U"
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //저정(배송비)
        this.fn_savePcPrdDlcstDtls = function(){
        	var sSvcId = "savePcPrdDlcstDtls";
        	var sUrl = "/rd/pubPrdSalsprcQty/savePcPrdDlcstDtls.do";
        	var inDs = "ds_save=ds_pcPrdDlcstDtls:U"
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
        		case "searchPcPrdQty" :
        			this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.cbo_page.value,"fn_pageCallback");
        			break;
        		case "searchPcPrdDlcstDtls" :
        			this.div_paging2.form.cfn_createPage(this.div_paging2,this.totalCount2,this.cbo_page2.value,"fn_pageCallback2");
        			break;
        		case "saveRndQtyDc" :
        			break;
        		case "savePcPrdDlcstDtls" :
        			alert("저장되었습니다.");
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
        		this.fn_searchPcPrdQty();
        	}

        	var sTotText = "(총 "+ oPaging.uTotCount+"건 "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.sta_totcnt.set_text(sTotText);
        };

        this.fn_pageCallback2 = function(sFlag){
        	var oPaging = this.div_paging2;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.cbo_page.value);
        		this.fn_searchPcPrdDlcstDtls();
        	}

        	var sTotText = "(총 "+ oPaging.uTotCount+"건 "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.sta_totcnt2.set_text(sTotText);
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // Today
        this.fn_today = function()
        {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0")
        	    sToday += objDate.getDate().toString().padLeft(2, "0");

        	return sToday;
        }

        this.btn_add1_onclick = function(obj,e)
        {
        	this.ds_pcPrdQty.addRow();

        	this.ds_pcPrdQty.setColumn(this.ds_pcPrdQty.rowposition,"CHK","1");
        	this.ds_pcPrdQty.setColumn(this.ds_pcPrdQty.rowposition, "CO_CD", this.coCd);
        	this.ds_pcPrdQty.setColumn(this.ds_pcPrdQty.rowposition, "PRD_ID", this.prdId);
        	this.ds_pcPrdQty.setColumn(this.ds_pcPrdQty.rowposition, "BZPLC_ID", "*");//공용 *
        	this.ds_pcPrdQty.setColumn(this.ds_pcPrdQty.rowposition, "QTY_STR_DTM", this.fn_today());
        	this.ds_pcPrdQty.setColumn(this.ds_pcPrdQty.rowposition, "QTY_END_DTM", this.fn_today());
        };

        this.btn_del1_onclick = function(obj,e)
        {
        	this.ds_pcPrdQty.deleteRow(this.ds_pcPrdQty.rowposition);
        };

        this.btn_add2_onclick = function(obj,e)
        {
        	this.ds_pcPrdDlcstDtls.addRow();

        	this.ds_pcPrdDlcstDtls.setColumn(this.ds_pcPrdDlcstDtls.rowposition, "CHK", "1");

        	this.ds_pcPrdDlcstDtls.setColumn(this.ds_pcPrdDlcstDtls.rowposition, "CO_CD", this.coCd);
        	this.ds_pcPrdDlcstDtls.setColumn(this.ds_pcPrdDlcstDtls.rowposition, "PRD_ID", this.prdId);
        	this.ds_pcPrdDlcstDtls.setColumn(this.ds_pcPrdDlcstDtls.rowposition, "BZPLC_ID", "*");//공용 *
        	this.ds_pcPrdDlcstDtls.setColumn(this.ds_pcPrdDlcstDtls.rowposition, "DLCST_SPR_CD", "10");
        	this.ds_pcPrdDlcstDtls.setColumn(this.ds_pcPrdDlcstDtls.rowposition, "DLCST_STR_DTM", this.fn_today());
        	this.ds_pcPrdDlcstDtls.setColumn(this.ds_pcPrdDlcstDtls.rowposition, "DLCST_END_DTM", this.fn_today());
        };

        this.btn_del2_onclick = function(obj,e)
        {
        	this.ds_pcPrdDlcstDtls.deleteRow(this.ds_pcPrdDlcstDtls.rowposition);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_add1.addEventHandler("onclick",this.btn_add1_onclick,this);
            this.btn_del1.addEventHandler("onclick",this.btn_del1_onclick,this);
            this.btn_add2.addEventHandler("onclick",this.btn_add2_onclick,this);
            this.btn_del2.addEventHandler("onclick",this.btn_del2_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_LA_04_2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
