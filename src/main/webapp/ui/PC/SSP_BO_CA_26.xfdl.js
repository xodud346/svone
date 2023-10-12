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
            this.set_titletext("협력사 배송가능지역");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,420);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"TRNS_AREA_CD\" type=\"STRING\" size=\"32\"/><Column id=\"TRNS_AREA_NM\" type=\"STRING\" size=\"32\"/><Column id=\"TRNS_REGN_CD\" type=\"STRING\" size=\"32\"/><Column id=\"TRNS_REGN_ABBR_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MBR_ID\"/><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","75",null,"306","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","0","0",null,null,"0","40",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"배송권역\"/><Cell col=\"1\" text=\"배송권역명\"/><Cell col=\"2\" text=\"세부권역\"/><Cell col=\"3\" text=\"세부권역명\"/></Band><Band id=\"body\"><Cell text=\"bind:TRNS_REGN_CD\"/><Cell col=\"1\" text=\"bind:TRNS_REGN_ABBR_NM\"/><Cell col=\"2\" text=\"bind:TRNS_AREA_CD\"/><Cell col=\"3\" text=\"bind:TRNS_AREA_NM\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totCount","20",null,"180","17",null,"Div00:10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","342",null,"73","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","355",null,"70","30",null,"22",null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("st_title","20","20","490","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("협력사 배송가능지역");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,420,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_26.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CA_26.xfdl", function() {
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
        		var sUrl = "/pc/popup/selectCprtcpOcarTrnsreList.do";
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
        			var sTotText = "(<b v='true'>총 "+ this.ds_list.getRowCount()+"건) </b>";
        			this.sta_totCount.set_text(sTotText);
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

        	};
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        	this.fn_checkData = function(){
        		var coCd = this.fv_coCd;
        		var cprtcpId = this.parent.cprtcpId;
        		var cprtcpNM = this.parent.cprtcpNm;

        		//coCd = this.fv_coCd;
        		//cprtcpId = "0000416879";
        		//cprtcpNM = "테스트협력사";
        		if(typeof cprtcpNM != "undefined" & cprtcpNM != null & cprtcpNM != ""){
        			this.st_title.set_text(cprtcpNM+" 배송가능지역");
        		}


        		// 파라미터 값 ds setcolumn
        		this.ds_search.setColumn(0, "CO_CD", coCd);
        		this.ds_search.setColumn(0, "CPRTCP_ID", cprtcpId);

        		// 조회
        		this.fn_search();
        	}

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodESC("Div01_btn_close_onclick");
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        this.Div01_btn_close_onclick = function(obj,e)
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
            this.Div01.form.btn_close.addEventHandler("onclick",this.Div01_btn_close_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CA_26.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
