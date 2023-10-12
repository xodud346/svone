(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_03");
            this.set_titletext("프로그램 목록 popup");
            if (Form == this.constructor)
            {
                this._setFormPosition(795,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pgmMng", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_CALL_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"THME_DOMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UI_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"THME_DOMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_thmeDownCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pgmTpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gThmeDownCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","0","795","177",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","20","300","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("| 프로그램 목록");
            obj.set_cssclass("sta_WF_title02");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"133","65","28","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","20","60",null,"32","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","20","91",null,"32","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","20","60","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("프로그램ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","395","60","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_pgmId","159","64","231","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","20","91","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("주제영역코드");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00","395","91","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("화면 ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_pgmNm","534","64","232","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_thmeDownCd","159","95","231","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_thmeDownCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_uiId","534","95","233","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"133","60","28","btn_search:4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("초기화");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","236","750","319",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_pgmMng");
            obj.set_autofittype("none");
            obj.set_cellsizebandtype("allband");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_autosizebandtype("body");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"115\"/><Column size=\"138\"/><Column size=\"124\"/><Column size=\"198\"/><Column size=\"87\"/><Column size=\"87\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"프로그램 ID\"/><Cell col=\"1\" text=\"프로그램명\"/><Cell col=\"2\" text=\"화면ID\"/><Cell col=\"3\" text=\"프로그램호출경로\"/><Cell col=\"4\" text=\"프로그램유형\"/><Cell col=\"5\" text=\"주제영역코드\"/></Band><Band id=\"body\"><Cell text=\"bind:PGM_ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PGM_NM\" cssclass=\"grd_WF_left\"/><Cell col=\"2\" text=\"bind:UI_ID\"/><Cell col=\"3\" text=\"bind:PGM_CALL_PATH\" displaytype=\"normal\" edittype=\"none\" cssclass=\"grd_WF_left\"/><Cell col=\"4\" text=\"bind:PGM_TP_CD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_pgmTpCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"5\" text=\"bind:THME_DOMN_CD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_gThmeDownCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","207","170","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건, 1 / 1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","22","grd_list:30","grd_list:100.00%","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",795,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","searchDiv.form.comClsfCdNm","value","search_ds","comClsfCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div01.form.edt_pgmId","value","ds_search","PGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div01.form.edt_pgmNm","value","ds_search","PGM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div01.form.cmb_thmeDownCd","value","ds_search","THME_DOMN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div01.form.edt_uiId","value","ds_search","UI_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("SSP_BO_YA_25.xfdl", function() {
        /*******************************************************
        PROJECT NAME : MarketA
        CREATION DATES :
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();	//application object
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
        	this.fn_search(true);

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "btn_search_onclick",
        		ESC : "",
        		CTRL_ENTER : "",
        		SHIFT_ENTER : "",
        		SHIFT_S : "",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});
        };

        /*this.fn_onkeyup = function(obj:nexacro.Form,e:nexacro.KeyEventInfo)
        {
        	var objType = obj.getFocus();
        	if( e.keycode == 13 && objType == "[object Edit]" ) {
        		//조회
        		this.fn_search(true);
        	}
        };*/
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit)
        {
        	var sSvcId = "search";
        	var sUrl = "/co/pgm/select-pgm-mng-popup-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_pgmMng=ds_output1";
        	var arg = "";
        	this.ds_search.setColumn(0, "USE_YN", "Y");

        	if(bInit) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM",0);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };


        //공통코드조회
        this.fn_commonCodeSearch = function()
        {

        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_thmeDownCd=ds_output1 ds_pgmTpCd=ds_output2";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "THME_DOMN_CD,PGM_TP_CD");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	switch(svcID)
        	{
        		case "search":
        			this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
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
        	this.fn_search(true);
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

        this.btn_reset_onclick = function(obj,e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.Div01.form.cmb_thmeDownCd.set_index(0);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.Div01.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div01.form.Static06.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.Static06_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div01.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
        };
        this.loadIncludeScript("SSP_BO_YA_25.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
