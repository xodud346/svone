(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_LA_28");
            this.set_titletext("Condition 이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1220,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_SPL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_CHGRSN\" type=\"STRING\" size=\"32\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SRCH_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"langCd\" type=\"STRING\" size=\"256\"/><Column id=\"codeList\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSpr", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_excelDown",null,"144","110","24","-175",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","-115","-40","370","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","1280","332",null,null,"-1240","-40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_main");
            obj.set_autoenter("select");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"변경일시\"/><Cell col=\"1\" text=\"사용상태\"/><Cell col=\"2\" text=\"협력사&#13;&#10;구매정보\"/><Cell col=\"3\" text=\"진열상태\"/><Cell col=\"4\" text=\"진열상태&#13;&#10;변경사유\"/><Cell col=\"5\" text=\"변경담당자\"/></Band><Band id=\"body\"><Cell text=\"bind:UPD_DTM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PRD_USE_YN\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PURG_SPL_YN\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:DISP_STATS_CD\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:DISP_STATS_CHGRSN\"/><Cell col=\"5\" text=\"bind:UPDPSN_ID\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","1044","grd_list:-419","grd_list:89.15%","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_page","btn_excelDown:10","140",null,"30","-282",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_page");
            obj.set_codecolumn("COUNT");
            obj.set_datacolumn("COUNT");
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"100","25","20","20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","9","300","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Condition 이력조회");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","20","50",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("물량할인");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("div_top_info","0","0","100.00%","130",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03","0","54","100%","32",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_top_info.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.Tab00.Tabpage1.form.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static02","0","54","130","32",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_top_info.form);
            obj.set_taborder("0");
            obj.set_text("조회일시");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Tab00.Tabpage1.form.div_top_info.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-115","150","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_top_info.form);
            obj.set_taborder("2");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Tab00.Tabpage1.form.div_top_info.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-115","150","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_top_info.form);
            obj.set_taborder("3");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Tab00.Tabpage1.form.div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_search","543","59","97","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_top_info.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_select");
            this.Tab00.Tabpage1.form.div_top_info.addChild(obj.name, obj);

            obj = new Calendar("cal_srchFrDt","134","58","140","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_top_info.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            this.Tab00.Tabpage1.form.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static59","278","58","9","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_top_info.form);
            obj.set_taborder("6");
            obj.set_text("~");
            this.Tab00.Tabpage1.form.div_top_info.addChild(obj.name, obj);

            obj = new Calendar("cal_srchToDt","291","58","140","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_top_info.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.Tab00.Tabpage1.form.div_top_info.addChild(obj.name, obj);

            obj = new Combo("cbo_inqPerdSpr","436","58","100","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div_top_info.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_inqPerdSpr");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("Combo00");
            this.Tab00.Tabpage1.form.div_top_info.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            this.Tab00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1220,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Tab00.Tabpage1.form.div_top_info.form.cal_srchFrDt","value","ds_search","SRCH_FR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Tab00.Tabpage1.form.div_top_info.form.cal_srchToDt","value","ds_search","SRCH_TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("SSP_BO_LA_28.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
         this.totalCount = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	this.parent.coCd = "1000";
        	this.parent.prdId = "000000000000032293";

        	this.ds_search.setColumn(0,"CO_CD",this.parent.coCd);
        	this.ds_search.setColumn(0,"PRD_ID",this.parent.prdId);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	this.fn_search(true);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/

        //공통코드 조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/selectCommonCodeList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_inqPerdSpr=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "codeList", "INQ_PERD_SPR_CD");
        	this.ds_search.setColumn(0, "langCd", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }


        //조회
        this.fn_search = function(bInit){

        	//trace("SSP_BO_LA_30::fn_search:"+this.ds_search.getColumn(0,"SRCH_FR_DT"));
        	var bReturn  = true;

        	if(bReturn == true){
        		var sSvcId = "search";
        		var sUrl = "/rd/DispStatsChgHst/selectList.do";
        		var inDs = "ds_search=ds_search"
        		var outDs = "ds_main=ds_main";
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
        			this.div_top_info.form.cbo_inqPerdSpr.set_value("");
        			break;

        	case "search":
        			this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.cbo_page.value,"fn_pageCallback");
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

        	var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.sta_totcnt.set_text(sTotText);
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //날짜계산
        this.fn_calDateOffset = function(currDate,offset){
        	var sReturn = "";

        	var sGb = offset.substr(0,1);
        	var sOffset = offset.substr(1,offset.length-1);

        	if(sGb == "W"){
        	    sReturn = this.gfn_addDate(currDate,sOffset*(-7)+1);
        	}else if(sGb == "M"){
        	    sReturn = this.gfn_addMonth(currDate,sOffset*(-1));
        	}else if(sGb == "Y"){
        	    sReturn = this.gfn_addMonth(currDate,sOffset*(-12));
        	}

        	return sReturn;
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //엑셀 click 이벤트
        this.btn_excelDown_onclick = function(obj,e)
        {
        	alert("엑셀다운로드");
        };


        this.Div_top_info_cbo_inqPerdSpr_onitemchanged = function(obj,e)
        {
        	var sToDt = this.gfn_getDate("date");
        	var sFrDt = "";
        	var sCbo_inqPerdSpr = obj.value;
        	var sCbo_inqPerdSprCd = "";

        	if(sCbo_inqPerdSpr == "1"){
        		sCbo_inqPerdSprCd="W1";
        	}else if(sCbo_inqPerdSpr == "2"){
        		sCbo_inqPerdSprCd="W2";
        	}else if(sCbo_inqPerdSpr == "3"){
        		sCbo_inqPerdSprCd="M1";
        	}else if(sCbo_inqPerdSpr == "4"){
        		sCbo_inqPerdSprCd="M2";
        	}else if(sCbo_inqPerdSpr == "5"){
        		sCbo_inqPerdSprCd="M3";
        	}else if(sCbo_inqPerdSpr == "6"){
        		sCbo_inqPerdSprCd="M6";
        	}else if(sCbo_inqPerdSpr == "7"){
        		sCbo_inqPerdSprCd="Y1";
        	}else if(sCbo_inqPerdSpr == ""){
        		sCbo_inqPerdSprCd="";
        		sToDt = "";
        		sFrDt = "";
        	}
        // 	trace("SSP_BO_LA_30::Div_top_info_cbo_inqPerdSpr_onitemchanged:sCbo_inqPerdSprCd:"+sCbo_inqPerdSprCd.substr(0,1));
        // 	trace("SSP_BO_LA_30::Div_top_info_cbo_inqPerdSpr_onitemchanged:sCbo_inqPerdSprCd:"+sCbo_inqPerdSprCd.substr(1,1));
        // 	trace("SSP_BO_LA_30::Div_top_info_cbo_inqPerdSpr_onitemchanged:"+sToDt);
        	if(sCbo_inqPerdSprCd != ""){
        		sFrDt = this.fn_calDateOffset(sToDt,sCbo_inqPerdSprCd);
        	}

        	this.div_top_info.form.cal_srchToDt.set_value(sToDt);
        	this.div_top_info.form.cal_srchFrDt.set_value(sFrDt);
        };

        //조회 click  이벤트
        this.btn_search_onclick = function(obj,e){
        	this.fn_search(true);
        };

        this.btn_select_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_select_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Tab00.Tabpage1.form.div_top_info.form.Static03.addEventHandler("onclick",this.Div_top_info_Static03_onclick,this);
            this.Tab00.Tabpage1.form.div_top_info.form.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.Tab00.Tabpage1.form.div_top_info.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Tab00.Tabpage1.form.div_top_info.form.cal_srchToDt.addEventHandler("onchanged",this.Div_top_info_cal_srchToDt_onchanged,this);
            this.Tab00.Tabpage1.form.div_top_info.form.cbo_inqPerdSpr.addEventHandler("onitemchanged",this.Div_top_info_cbo_inqPerdSpr_onitemchanged,this);
            this.ds_main.addEventHandler("cancolumnchange",this.ds_pgmMng_cancolumnchange,this);
            this.ds_main.addEventHandler("oncolumnchanged",this.ds_pgmMng_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_LA_28.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
