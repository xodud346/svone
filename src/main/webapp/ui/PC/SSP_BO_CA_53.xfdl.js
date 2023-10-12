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
            this.set_titletext("카테고리계획매익율 변경이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"USE_YN_NM\" type=\"string\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"string\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"string\" size=\"32\"/><Column id=\"PRD_STD_YN\" type=\"string\" size=\"32\"/><Column id=\"PRD_STD_YN_NM\" type=\"string\" size=\"32\"/><Column id=\"PLN_PRFRT\" type=\"string\" size=\"16\"/><Column id=\"PLN_PRFRT_NM\" type=\"bigdecimal\" size=\"16\"/><Column id=\"REGPSN_ID\" type=\"string\" size=\"32\"/><Column id=\"REG_RSN\" type=\"string\" size=\"32\"/><Column id=\"REG_DTM\" type=\"string\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MBR_ID\"/><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hstSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCodeSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"32\"/><Column id=\"langCd\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","75",null,"415","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","0","0",null,null,"0","40",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"135\"/><Column size=\"237\"/><Column size=\"283\"/><Column size=\"105\"/><Column size=\"98\"/><Column size=\"98\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"변경일시\"/><Cell col=\"1\" text=\"SSP카테고리ID\"/><Cell col=\"2\" text=\"SSP카테고리\"/><Cell col=\"3\" text=\"계획매익율\"/><Cell col=\"4\" text=\"변경담당자ID\"/><Cell col=\"5\" text=\"변경담당자\"/><Cell col=\"6\" text=\"변경사유\"/></Band><Band id=\"body\"><Cell text=\"bind:REG_DTM\"/><Cell col=\"1\" text=\"bind:PRD_CLCD\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PRD_CLCD_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PLN_PRFRT\" displaytype=\"mask\" maskeditformat=\"#,0.00\" maskeditpostfixtext=\"%\"/><Cell col=\"4\" text=\"bind:REGPSN_ID\"/><Cell col=\"5\" text=\"bind:OPRTR_NM\"/><Cell col=\"6\" text=\"bind:REG_RSN\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_paging","0",null,null,"38","0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totCount","20",null,"180","17",null,"Div00:10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건, 1 / 0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_title","20","20","490","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("카테고리계획매익율 변경이력");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","46.25%","495","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,550,this,function(p){});
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
        this.addIncludeScript("SSP_BO_CA_53.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CA_53.xfdl", function() {
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

        	this.resetScroll();

        	//단축키 함수 호출
        	this.fn_regShortCutMethod();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	// 조회
        	this.fn_search = function()	{
        		var sSvcId = "selectMbrHistPop";
        		var sUrl = "/pc/plnPrfrt/selectPlnPrfrtList.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_list=ds_output";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_received");
        	}
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	//조회 트랜잭션 콜백함수
        	this.fn_received = function(svcID, errorCode, errorMsg)	{
        		if(this.ds_list.getRowCount() > 0) {
        			this.Div00.form.div_paging.form.cfn_createPage(this.Div00.form.div_paging, this.totalCount, 10, "fn_pageCallback");
        		}
        		if( this.ds_list.rowcount == 0 ) {
        			this.Div00.form.grd_mainList.set_nodatatext("조회 결과가 없습니다.");
        		}
        	}

        	this.fn_pageCallback = function(sFlag){
        		var oPaging = this.Div00.form.div_paging;
        		if(sFlag){
        			this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
        			this.ds_search.setColumn(0,"ROW_COUNT",10);
        			this.fn_search();
        		}

        		var sTotText = "(총 "+ this.fn_AmountCommas(oPaging.uTotCount)+"건, "+ this.fn_AmountCommas(oPaging.uPage) +" / "+ this.fn_AmountCommas(oPaging.uPageCnt) +")";
        		this.sta_totCount.set_text(sTotText);
        	};

        	this.fn_sortCallback = function(sGridId){
        		var oGrid=null;
        		if(sGridId == "grd_mainList"){
        			oSortInfo = this.Div00.form.grd_mainList.uaSortInfo;
        			this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        			this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        			this.fn_search();
        		}
        	};

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        	//화면 설정 함수
        	this.cfn_formInit = function(){
        		//grid 초기 설정
        		this.Div00.form.grd_mainList.uSortFlag = "false";
        		this.Div00.form.grd_mainList.uServerSortFlag = "true";
        		this.Div00.form.grd_mainList.uSortCallback = "fn_sortCallback";
        		this.Div00.form.grd_mainList.uCellSizeType = "true";

        		//페이징 초기 설정
        		this.Div00.form.div_paging.uPage = 1;
        		this.Div00.form.div_paging.uPageNum = 0;
        		this.Div00.form.div_paging.uPageRowCnt = 10;
        		this.Div00.form.div_paging.uPageCnt = 0;
        		this.Div00.form.div_paging.uTotCount = 0;
        	};
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        	this.fn_checkData = function(){
        		var coCd = this.parent.coCd;
        		var prdClcd = this.parent.prdClcd;

        		//prdClcd = "1111";

        		// 파라미터 값 ds setcolumn
        		this.ds_search.setColumn(0, "CO_CD", coCd);
        		this.ds_search.setColumn(0, "PRD_CLCD", prdClcd);

        		// 조회
        		this.fn_search();
        	}


        	this.fn_AmountCommas = function(val){ //세자리마다',' 적용
        		return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
        	}

        	// 단축키 등록
        	this.fn_regShortCutMethod = function() {
        		this.fn_regMethodESC("btn_close_onclick");
        	};
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.samplePage01_onkeyup = function(obj,e)
        {
        	// 단축키 등록
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
        this.loadIncludeScript("SSP_BO_CA_53.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
