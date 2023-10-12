(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pgmMngSinglePopup");
            this.set_titletext("프로그램 목록 popup");
            if (Form == this.constructor)
            {
                this._setFormPosition(790,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pgmMng", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_CALL_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"THME_DOMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UI_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"THME_DOWN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_thmeDownCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pgmTpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gThmeDownCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","20","170","750","319",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_pgmMng");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"122\"/><Column size=\"127\"/><Column size=\"126\"/><Column size=\"175\"/><Column size=\"141\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"프로그램 ID\"/><Cell col=\"1\" text=\"프로그램명\"/><Cell col=\"2\" text=\"화면ID\"/><Cell col=\"3\" text=\"프로그램호출경로\"/><Cell col=\"4\" text=\"프로그램유형\"/><Cell col=\"5\" text=\"주제영역코드\"/></Band><Band id=\"body\"><Cell text=\"bind:PGM_ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PGM_NM\"/><Cell col=\"2\" text=\"bind:UI_ID\"/><Cell col=\"3\" text=\"bind:PGM_CALL_PATH\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:PGM_TP_CD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_pgmTpCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"5\" text=\"bind:THME_DOMN_CD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_gThmeDownCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","634","126","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","702","126","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","18","4","182","37",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("프로그램 목록 조회");
            obj.set_font("bold 14pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","460","530","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("url(\'Images::paging.png\') no-repeat center bottom");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","48","750","72",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("2px solid #000000,1px,1px solid");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","64","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("프로그램ID");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","365","0","76","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("프로그램명");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","35","64","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("주제영역");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_pgmNm","444","2","295","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","365","35","76","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("화면 ID");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_uiId","444","36","295","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_thmeDownCd","66","37","284","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_thmeDownCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_pgmId","66","2","284","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","145","170","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("(총 0건 1/1)");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:33","grd_list:100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",790,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","searchDiv.form.comClsfCdNm","value","search_ds","comClsfCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div01.form.edt_pgmNm","value","ds_search","PGM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div01.form.cmb_thmeDownCd","value","ds_search","THME_DOWN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div01.form.edt_uiId","value","ds_search","UI_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div01.form.edt_pgmId","value","ds_search","PGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("pgmMngSinglePopup.xfdl", function() {
        /*******************************************************
        PROJECT NAME : MarketA
        CREATION DATES :
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        	this.fn_commonCodeSearch();
        	this.Div01.form.cmb_thmeDownCd.set_index(0);

        	this.Div01.form.edt_pgmId.set_value(this.parent.pgmId);
        	this.Div01.form.edt_pgmNm.set_value(this.parent.pgmNm);

        	//조회
        	this.fn_search();
        };

        this.fn_onkeyup = function(obj,e)
        {
        	var objType = obj.getFocus();
        	if( e.keycode == 13 && objType == "[object Edit]" ) {
        		//조회
        		this.fn_search();
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function ()
        {
        	var sSvcId = "search";
        	var sUrl = "/co/pgm/select_pgm_mng_popup_list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_pgmMng=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "USE_YN", "Y");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };


        //공통코드조회
        this.fn_commonCodeSearch = function()
        {

        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select_common_code_list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_thmeDownCd=ds_output1 ds_pgmTpCd=ds_output2";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "THME_DOMN_CD,PGM_TP_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0)
        	{
        		this.alert(errorCode+"\n"+errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        		case "search":
        			this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount ,10,"fn_pageCallback");
        			break;
        		case "commonCodeSearch":
        			this.ds_gThmeDownCd.copyData(this.ds_thmeDownCd,true);
        			this.ds_thmeDownCd.insertRow(0);
        			this.ds_thmeDownCd.setColumn(0,"COM_DTL_CD_NM","전체");
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

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        this.cfn_formInit = function(){
        	this.grd_list.uSortFlag = "true";
        	this.grd_list.uCellSizeType = "true";

        	// 페이징 기본값 선언
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        };
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_clear_onclick = function(obj,e)
        {
        	this.Div01.form.edt_pgmId.set_value("");
        	this.Div01.form.edt_pgmNm.set_value("");
        	this.Div01.form.cmb_thmeDownCd.set_index(0);
        	this.Div01.form.edt_uiId.set_value("");
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	var resData = {};
        	var resString = "";

        	resData.PGM_ID = this.ds_pgmMng.getColumn(this.ds_pgmMng.rowposition, "PGM_ID");
        	resData.PGM_NM = this.ds_pgmMng.getColumn(this.ds_pgmMng.rowposition, "PGM_NM");
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
        };
        this.loadIncludeScript("pgmMngSinglePopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
