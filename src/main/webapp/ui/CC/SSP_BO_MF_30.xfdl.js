(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePage01");
            this.set_titletext("StockNo 변경이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,495);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"HST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"B_STOCK_NO\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK_NO\" type=\"STRING\" size=\"256\"/><Column id=\"B_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRD_ID\"/><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"BZPLC_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hstSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCodeSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"38\"/><Column id=\"langCd\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYnP", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_totCount","20","20","180","17",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","sta_totCount:10",null,null,"20","109",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","0","0",null,null,"0","1",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_list");
            obj.set_nodatatext("변경이력이 없습니다.");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"110\"/><Column size=\"83\"/><Column size=\"120\"/><Column size=\"113\"/><Column size=\"54\"/><Column size=\"88\"/><Column size=\"88\"/><Column size=\"76\"/><Column size=\"76\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"122\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"사업장ID\"/><Cell col=\"1\" text=\"사업장명\"/><Cell col=\"2\" text=\"상품ID\"/><Cell col=\"3\" text=\"상품명\"/><Cell col=\"4\" text=\"대표규격\"/><Cell col=\"5\" text=\"변경내용\"/><Cell col=\"6\" text=\"Stock-no&#13;&#10;변경 전\"/><Cell col=\"7\" text=\"Stock-no&#13;&#10;변경 후\"/><Cell col=\"8\" text=\"사용-미사용&#13;&#10;변경 전\"/><Cell col=\"9\" text=\"사용-미사용&#13;&#10;변경 후\"/><Cell col=\"10\" text=\"요청자ID\"/><Cell col=\"11\" text=\"요청자 명\"/><Cell col=\"12\" text=\"변경일시\"/></Band><Band id=\"body\"><Cell text=\"bind:BZPLC_ID\"/><Cell col=\"1\" text=\"bind:BZPLC_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRD_ID_VIEW\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRVL\"/><Cell col=\"5\" text=\"bind:HST_SPR_CD\" displaytype=\"combotext\" combodataset=\"ds_hstSprCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"6\" text=\"bind:B_STOCK_NO\"/><Cell col=\"7\" text=\"bind:STOCK_NO\"/><Cell col=\"8\" text=\"bind:B_USE_YN\" displaytype=\"combotext\" combodataset=\"ds_useYnP\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"9\" text=\"bind:USE_YN\" displaytype=\"combotext\" combodataset=\"ds_useYnP\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"10\" text=\"bind:UPDPSN_ID\"/><Cell col=\"11\" text=\"bind:UPDPSN_NM\"/><Cell col=\"12\" text=\"bind:UPD_DTM\" edittype=\"none\" calendardisplaynulltype=\"none\" maskedittype=\"string\" maskeditformat=\"yyyy-MM-dd hh:mm:ss\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_close","606","Div00:29","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,495,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MF_30.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MF_30.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP_BO
          CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//부모창 데이터 처리
        	this.fn_checkData();

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	this.resetScroll();

        	this.copyPaste.addGrid(this.Div00.form.grd_mainList);

        	// 단축키 등록
        	this.fn_regShortCutMethod();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//공통코드 조회
        	this.fn_commonCodeSearch = function(){
        		this.ds_comCodeSearch.setColumn(0, "codeList", "HST_SPR_CD,USE_YN");
        		this.ds_comCodeSearch.setColumn(0, "langCd", "KO");
        		var sSvcId = "commonCodeSearch";
        		var sUrl = "/co/select-common-code-list.do";
        		var inDs = "ds_search=ds_comCodeSearch";
        		var outDs = "ds_hstSprCd=ds_output1 ds_useYnP=ds_output2";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        	// 조회
        	this.fn_search = function()	{
        		var sSvcId = "selectStockHist";
        		var sUrl = "/cust/stock/mng/select-cust-stock-hst.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_list=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_received");
        	}
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		if(svcID == "commonCodeSearch"){
        			this.ds_useYnP.insertRow(0);
        			this.ds_useYnP.setColumn(0,"COM_DTL_CD","-");
        			this.ds_useYnP.setColumn(0,"COM_DTL_CD_NM","-");
        		}
        	}

        	//조회 트랜잭션 콜백함수
        	this.fn_received = function(svcID, errorCode, errorMsg)	{
        		if(this.ds_list.getRowCount() > 0) {
        			this.totalCount = this.ds_list.getColumn(0,"TOT_CUNT");
        			//this.Div00.form.div_paging.form.cfn_createPage(this.Div00.form.div_paging, this.totalCount, 10, "fn_pageCallback");
        			var sTotText = "(<b v='true'>총 "+ this.gfn_appendComma(this.totalCount) +"건 </b>)";
        			this.sta_totCount.set_text(sTotText);
        		}
        		if( this.ds_list.rowcount == 0 ) {
        			this.Div00.form.grd_mainList.set_nodatatext("변경이력이 없습니다.");
        		}
        	}

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        	//화면 설정 함수
        	this.cfn_formInit = function(){
        		//grid 초기 설정
        		this.Div00.form.grd_mainList.uSortFlag = "false";
        		this.Div00.form.grd_mainList.uServerSortFlag = "false";
        		this.Div00.form.grd_mainList.uSortCallback = "fn_sortCallback";
        		this.Div00.form.grd_mainList.uCellSizeType = "true";
        	};

        	// 창닫기
        	this.fn_closeForm = function() {
        		this.close();
        	};

        	// 단축키 등록
        	this.fn_regShortCutMethod = function() {
        		this.fn_regMethodESC("fn_closeForm");
        	};
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        	this.fn_checkData = function(){
        		// 파라미터 값 ds setcolumn
        		this.ds_search.setColumn(0, "CO_CD", this.parent.coCd);
        		this.ds_search.setColumn(0, "BZPLC_ID", this.parent.bzplcId);
        		this.ds_search.setColumn(0, "PRD_ID", this.parent.prdId);

        		// 조회
        		this.fn_search();
        	}
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        	this.btn_close_onclick = function(obj,e)
        	{
        		this.close();
        	};

        	this.samplePage01_onkeyup = function(obj,e)
        	{
        		this.fn_processKey(obj, e);
        	};

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.samplePage01_onkeyup,this);
            this.Div00.form.grd_mainList.addEventHandler("oncellclick",this.grd_mainList_oncellclick,this);
            this.Div00.form.grd_mainList.addEventHandler("oncelldblclick",this.Div01_grd_mainList_oncelldblclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MF_30.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
