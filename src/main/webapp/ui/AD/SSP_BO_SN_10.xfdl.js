(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_SN_10");
            this.set_titletext("이력 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1130,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_resList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JNT_ODR_ITM_NO\" type=\"STRING\" size=\"255\"/><Column id=\"ADJ_HST_NO\" type=\"STRING\" size=\"255\"/><Column id=\"ADJ_DCN_YN\" type=\"STRING\" size=\"255\"/><Column id=\"ADJ_DCN_DTM\" type=\"STRING\" size=\"255\"/><Column id=\"ADJ_DCN_DEALR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"ADJ_DCN_DEALR_NM\" type=\"STRING\" size=\"255\"/><Column id=\"CNC_RSN\" type=\"STRING\" size=\"255\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"255\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"255\"/><Column id=\"REPR_SPEC\" type=\"STRING\" size=\"255\"/><Column id=\"SSP_REPR_ATTR\" type=\"STRING\" size=\"255\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"ROW_COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_resList","20","81",null,null,"20","128",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_fillareatype("none");
            obj.set_cellmovingtype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_resList");
            obj.set_autoenter("none");
            obj.set_scrolltype("both");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"300\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"주문 품목 번호\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"확정 여부\"/><Cell col=\"3\" text=\"수정 일시\"/><Cell col=\"4\" text=\"수정자 ID\"/><Cell col=\"5\" text=\"수정자명\"/><Cell col=\"6\" text=\"사유\"/><Cell col=\"7\" text=\"상품 ID\"/><Cell col=\"8\" text=\"상품명\"/><Cell col=\"9\" text=\"규격\"/></Band><Band id=\"body\"><Cell text=\"bind:JNT_ODR_ITM_NO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ADJ_HST_NO\" displaytype=\"number\"/><Cell col=\"2\" text=\"bind:ADJ_DCN_YN\" textAlign=\"center\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:ADJ_DCN_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltext=\" \" calendardisplayinvalidtext=\" \" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:ADJ_DCN_DEALR_ID\"/><Cell col=\"5\" textAlign=\"center\" text=\"bind:ADJ_DCN_DEALR_NM\"/><Cell col=\"6\" textAlign=\"center\" text=\"bind:CNC_RSN\"/><Cell col=\"7\" text=\"bind:PRD_ID\"/><Cell col=\"8\" text=\"bind:PRD_NM\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:REPR_SPEC\" textAlign=\"left\" wordWrap=\"english\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20",null,null,"38","20","70",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCount","20","53","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"60","30","20","30",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","20","155","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("이력 조회");
            obj.set_font("bold 14pt \"Arial\"");
            obj.set_cssclass("sta_WF_title03");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","81","40","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00","20","71","30","10",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00","705","500","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","480","480","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00","725","460","30","10",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel00",null,"43","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("다운로드(P)");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1130,620,this,function(p){});
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
        this.addIncludeScript("SSP_BO_SN_10.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_SN_10.xfdl", function() {
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;
        this.insertCount = 0;
        this.cocd;
        this.inq_cond_dtls;
        this.col_itm;
        this.bPage = 0;
        this.nPageNum = 1000;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();

        	this.cocd 			= this.parent.pv1;
        	this.inq_cond_dtls  = this.parent.pv2;
        	this.col_itm 		= this.parent.pv3;
        	this.bPage = 0;
        	this.copyPaste.addGrid(this.grd_resList);
        	this.fn_odCommLoading("fn_search"); //공통메세지코드 로딩
        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_SN_10_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/

        	//조회
        	this.fn_search = function()	{

        		var sSvcId = "selectCalHistoryList";
        		var sUrl = "/ad/cal/popup/select-cal-history-list.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_resList=ds_output1 ds_search=ds_output2";
        		var arg = "";
        		if (this.bPage == 0) {
        			var oPaging = this.div_paging;
        			oPaging.uPage = 1;
        			oPaging.uPageNum = 0;
        			this.ds_search.setColumn(0,"START_NUM", 0);
        			this.ds_search.setColumn(0,"ROW_COUNT",this.nPageNum);
        			this.ds_search.setColumn(0,"SORT_COLUMN", "");
        			this.ds_search.setColumn(0,"SORT_TYPE", "");
        			this.ds_search.setColumn(0,"INQ_COND_DTLS", this.inq_cond_dtls);
        			this.ds_search.setColumn(0,"COL_ITM", this.col_itm);
        			this.ds_search.setColumn(0,"CO_CD", this.cocd);
        			this.ds_search.setColumn(0,"TOTAL_COUNT", -1);
        		}

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		if(svcID == "selectCalHistoryList"){
        			this.bPage = 1;
        			this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.nPageNum,"fn_pageCallback");
        		}
        	};

        	this.fn_pageCallback = function(sFlag){
        		var oPaging = this.div_paging;
        		if(sFlag){
        			this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
        			this.ds_search.setColumn(0,"ROW_COUNT",this.nPageNum);
        			this.fn_search(false);
        		}

        		if( this.gfn_isNull(oPaging.uPageCnt) || oPaging.uPageCnt == 'undefined' || isNaN(oPaging.uPageCnt) ) {
        			oPaging.uPageCnt = 0;
        		}

        		if( this.gfn_isNull(oPaging.uTotCount) || oPaging.uTotCount == 'undefined' || isNaN(oPaging.uTotCount) ) {
        			oPaging.uTotCount = 0;
        		}

        		var sTotText = "(<b v='true'>총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        		this.sta_totCount.set_text(sTotText);
        	};

        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("fn_search");
        	this.fn_regMethodESC("btn_close_onclick");
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btn_excel_onclick = function(obj,e)
        {
        	this.ofn_exportExcel({form:this, grid:this.grd_resList, fileName:"정산이력목록"});
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_SN_10_onkeyup,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_excel00.addEventHandler("onclick",this.btn_excel_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_SN_10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
