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
            this.set_titletext("고객등급 이력조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,645);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_GRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BZPLC_GRD_ID\"/><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_VALUE\"/><Col id=\"COL_NM\">전체</Col></Row><Row><Col id=\"COL_VALUE\">Y</Col><Col id=\"COL_NM\">사용</Col></Row><Row><Col id=\"COL_VALUE\">N</Col><Col id=\"COL_NM\">만료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custGrd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_GRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_GRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_DCRT\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_PERD_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_PERD_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_CUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_totCount","20","105","180","17",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","sta_totCount:10",null,"422","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","0","0",null,"352","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_custGrd");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"56\"/><Column size=\"61\"/><Column size=\"90\"/><Column size=\"65\"/><Column size=\"102\"/><Column size=\"102\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"102\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"등급코드\"/><Cell col=\"3\" text=\"등급명\"/><Cell col=\"4\" text=\"적용 할인율\"/><Cell col=\"5\" text=\"유효기간 시작일시\"/><Cell col=\"6\" text=\"유효기간 종료일시\"/><Cell col=\"7\" text=\"수정자ID\"/><Cell col=\"8\" text=\"수정자 명\"/><Cell col=\"9\" text=\"수정일시\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ\"/><Cell col=\"1\" text=\"bind:STATE\" displaytype=\"combotext\" combodataset=\"ds_useYn\" combodatacol=\"COL_NM\" combocodecol=\"COL_VALUE\"/><Cell col=\"2\" text=\"bind:BZPLC_GRD_ID\"/><Cell col=\"3\" text=\"bind:BZPLC_GRD_NM\"/><Cell col=\"4\" text=\"bind:APLY_DCRT\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:VLD_PERD_STR_DTM\" edittype=\"none\" calendardisplaynulltype=\"none\" maskedittype=\"string\" maskeditformat=\"yyyy-MM-dd hh:mm:ss\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"6\" text=\"bind:VLD_PERD_END_DTM\" edittype=\"none\" calendardisplaynulltype=\"none\" maskedittype=\"string\" maskeditformat=\"yyyy-MM-dd hh:mm:ss\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"7\" text=\"bind:UPDPSN_ID\"/><Cell col=\"8\" text=\"bind:UPDPSN_NM\"/><Cell col=\"9\" text=\"bind:UPD_DTM\" edittype=\"none\" calendardisplaynulltype=\"none\" maskedittype=\"string\" maskeditformat=\"yyyy-MM-dd hh:mm:ss\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_paging","0",null,null,"38","0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_close","476","Div00:30","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","20","20",null,"32","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26","20","20","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("cbo_useYn","Static26:10","24","160","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("COL_NM");
            obj.set_codecolumn("COL_VALUE");
            obj.set_text("");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,645,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00_00.form.cbo_useYn","text","ds_useYn","COL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_04.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_04.xfdl", function() {
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

        	this.copyPaste.addGrid(this.Div00.form.grd_mainList);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	// 조회
        	this.fn_search = function()	{
        		var sSvcId = "selectMbrHistPop";
        		var sUrl = "/bo/cust/grade/select-cust-grade-hst.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_custGrd=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_received");
        	}
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	//조회 트랜잭션 콜백함수
        	this.fn_received = function(svcID, errorCode, errorMsg)	{
        		this.preSelectRowPosition = 0;

        		if( this.ds_custGrd.rowcount == 0 ) {
        			this.Div00.form.grd_mainList.set_nodatatext("조회 결과가 없습니다.");
        			this.Div00.form.div_paging.form.cfn_createPage(this.Div00.form.div_paging, 0, 10, "fn_pageCallback");
        			return;
        		}

        		//paging 처리
        		this.totalCount = this.ds_custGrd.getColumn(0,"TOT_CUNT");
        		this.Div00.form.div_paging.form.cfn_createPage(this.Div00.form.div_paging, this.totalCount, 10, "fn_pageCallback");
        	}

        	this.fn_pageCallback = function(sFlag){
        		var oPaging = this.Div00.form.div_paging;
        		if(sFlag){
        			this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
        			this.ds_search.setColumn(0,"ROW_COUNT",10);
        			this.fn_search();
        		}

        		var sTotText = "(<b v='true'>총 "+ this.gfn_appendComma(oPaging.uTotCount)+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        		this.sta_totCount.set_text(sTotText);

        		if(oPaging.uTotCount < 10){ this.Div00.form.div_paging.set_visible(false); }
        		else{ this.Div00.form.div_paging.set_visible(true); }
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
        		this.Div00.form.grd_mainList.uServerSortFlag = "false";
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
        		var bzplcGrdId = this.parent.bzplcGrdId;

        		// 파라미터 값 ds setcolumn
        		this.ds_search.setColumn(0, "BZPLC_GRD_ID", bzplcGrdId);

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

        	// 고객등급 조회
        	this.Div00_00_cbo_useYn_onitemchanged = function(obj,e)
        	{
        		this.ds_search.setColumn(0, "STATE", this.Div00_00.form.cbo_useYn.value);

        		this.Div00.form.div_paging.uPage = 1;
        		this.ds_search.setColumn(0, "START_NUM", 0);

        		this.fn_search();
        	};

        	this.samplePage01_onkeyup = function(obj,e)
        	{
        		//ESC : 닫기기능
        		if(e.keycode == 27){
        			this.close();
        		}
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
            this.Div00_00.form.cbo_useYn.addEventHandler("onitemchanged",this.Div00_00_cbo_useYn_onitemchanged,this);
            this.ds_custGrd.addEventHandler("oncolumnchanged",this.ds_custGrd_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_MA_04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
