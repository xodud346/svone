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
            this.set_titletext("전체 이력 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(630,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"HST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"HST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_HST_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_HST_UPD_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MBR_ID\"/><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hstSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCodeSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"32\"/><Column id=\"langCd\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mbrUseCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_totCount","20","20","180","17",null,null,null,null,null,null,this);
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
            obj.set_binddataset("ds_list");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"62\"/><Column size=\"62\"/><Column size=\"120\"/><Column size=\"157\"/><Column size=\"98\"/><Column size=\"144\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"이력구분\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"수정 항목\"/><Cell col=\"4\" text=\"수정 일시\"/><Cell col=\"5\" text=\"수정자ID\"/><Cell col=\"6\" text=\"수정자\"/></Band><Band id=\"body\"><Cell text=\"bind:HST_SEQ\"/><Cell col=\"1\" text=\"bind:HST_SPR_CD\" combodataset=\"ds_hstSprCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" displaytype=\"combotext\"/><Cell col=\"2\" text=\"bind:MBR_USE_CD\" combodataset=\"ds_mbrUseCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" displaytype=\"combotext\"/><Cell col=\"3\" text=\"bind:MBR_HST_CLCD\" tooltiptext=\"bind:MBR_HST_UPD_INFO\"/><Cell col=\"4\" text=\"bind:UPD_DTM\" edittype=\"none\" calendardisplaynulltype=\"none\" maskedittype=\"string\" maskeditformat=\"yyyy.MM.dd hh:mm:ss\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"5\" text=\"bind:UPDPSN_ID\"/><Cell col=\"6\" text=\"bind:UPDPSN_NM\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_paging","0",null,null,"38","0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_close","280","Div00:11","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",630,560,this,function(p){});
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
        this.addIncludeScript("SSP_BO_MA_51.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_51.xfdl", function() {
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

        	this.copyPaste.addGrid(this.Div01.form.grd_mainList);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//공통코드 조회
        	this.fn_commonCodeSearch = function(){
        		this.ds_comCodeSearch.setColumn(0, "codeList", "HST_SPR_CD,MBR_USE_CD");
        		this.ds_comCodeSearch.setColumn(0, "langCd", "KO");
        		var sSvcId = "commonCodeSearch";
        		var sUrl = "/co/select-common-code-list.do";
        		var inDs = "ds_search=ds_comCodeSearch";
        		var outDs = "ds_hstSprCd=ds_output1 ds_mbrUseCd=ds_output2";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "");
        	}

        	// 조회
        	this.fn_search = function()	{
        		var sSvcId = "selectMbrHistPop";
        		var sUrl = "/bo/cust/mbr/hist/select-mbr-hist-pop.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_list=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_received");
        	}
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	//조회 트랜잭션 콜백함수
        	this.fn_received = function(svcID, errorCode, errorMsg)	{
        		this.preSelectRowPosition = 0;

        		if( this.ds_list.rowcount == 0 ) {
        			this.Div00.form.grd_mainList.set_nodatatext("조회 결과가 없습니다.");
        			this.Div00.form.div_paging.form.cfn_createPage(this.Div00.form.div_paging, 0, 10, "fn_pageCallback");
        			return;
        		}

        		//paging 처리
        		this.totalCount = this.ds_list.getColumn(0,"TOT_CUNT");
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

        		// 22.04.11 단위테스트 추가
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
        		var coCd = this.parent.coCd;
        		var mbrId = this.parent.mbrId;

        		// 파라미터 값 ds setcolumn
        		this.ds_search.setColumn(0, "CO_CD", coCd);
        		this.ds_search.setColumn(0, "MBR_ID", mbrId);

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
        		// ESC 닫기
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
        };
        this.loadIncludeScript("SSP_BO_MA_51.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
