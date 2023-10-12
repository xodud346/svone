(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CN_26");
            this.set_titletext("등록자 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_memOprInfo","20","220","520","320",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"298\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"이름\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NO\"/><Cell col=\"1\" text=\"bind:OPRTR_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","197","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_memOprInfo:10",null,"38","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","0","560","180",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","60","115","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("사번");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","134","60",null,"32","25",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","144","64","382","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","91","115","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("이름");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","134","91",null,"32","25",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId00","144","95","382","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"134","60","26","24",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_select");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"134","65","26","88",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","22","16","155","37",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("등록자 조회");
            obj.set_font("bold 14pt \"Arial\"");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.edt_bzplcId","value","ds_search","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_bzplcId00","value","ds_search","OPRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("SSP_BO_CN_26.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_CN_26
        /* 작 성 일 자 : 2022/02/15
        /* 작  성   자 : 이성민
        /* 설       명 : 등록자 조회 팝업
        /***********************************************************/


        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;	//전체 카운트


        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//조회
        	this.fn_search(0);
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(page) {
        	 var sSvcId = "selectMbrOprtrInfoList";
             var sUrl = "/co/popUp/selectMbrOprtrInfoList.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_list=ds_output1";
             var arg;
             var callback = "fn_callBack";

        	 // 조회버튼 클릭시 페이징 초기화 시킨다.
        	 if( page == 0 ) {

        		this.div_paging.uPage=1;
        		this.div_paging.uPageNum=0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);

        		oSortInfo = this.grd_memOprInfo.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN", "");
        		this.ds_search.setColumn(0,"SORT_TYPE", "");
        	 }

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //콜백이벤트
        this.fn_callBack = function(svcID, errorCode, errorMsg){
        	if(svcID == "selectMbrOprtrInfoList"){
        		//trace(this.ds_sampleList.saveXML());

        		// 조회 카운트가 없으면 데이터셋이 날라감으로 강제 설정
        		if( this.ds_list.rowcount == 0 ) {
        			this.ds_list.copyData(this.ds_list_copy);
        		}

        		//paging 처리
        		this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.fv_oApp.gv_pageViewCnt, "fn_pageCallback");
        	}
        }


        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		//this.ds_search.setColumn(0,"START_NUM", (oPaging.uPageNum == 0 || oPaging.uPageNum == 1 ? 0 : ( oPaging.uPageNum -1 ) * 10));
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		this.fn_search();
        	}

        	var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.totalPageCount.set_text(sTotText);
        }

        //정렬 콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_memOprInfo"){
        		oSortInfo = this.grd_memOprInfo.uaSortInfo;

        		this.ds_search.setColumn(0,"SORT_COLUMN", oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE", oSortInfo.status);

        		this.fn_search();
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//grid 초기 설정
        	this.grd_memOprInfo.uSortFlag = "false";
        	this.grd_memOprInfo.uServerSortFlag = "true";
        	this.grd_memOprInfo.uSortCallback = "fn_sortCallback";

        	this.grd_memOprInfo.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_resData = function() {

        	var resData = {};
        	var resString = "";

        	resData.OPRTR_ID = this.ds_list.getColumn(this.ds_list.rowposition, "OPRTR_ID");
        	resData.OPRTR_NM = this.ds_list.getColumn(this.ds_list.rowposition, "OPRTR_NM");
        	resData.EMP_NO = this.ds_list.getColumn(this.ds_list.rowposition, "EMP_NO");

        	//json string 변경
        	resString = JSON.stringify(resData);

        	//return
        	this.close(resString);
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회버튼
        this.Button58_onclick = function(obj,e)
        {
        	this.fn_search(0);
        };

        // 조회데이터셋 리셋
        this.div_search_btnClear_onclick = function(obj,e)
        {
        	this.ds_search.reset();
        };

        //그리드 더블클릭 이벤트
        this.grd_memOprInfo_oncelldblclick = function(obj,e)
        {
        	this.fn_resData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.grd_memOprInfo.addEventHandler("oncelldblclick",this.grd_memOprInfo_oncelldblclick,this);
            this.div_search.form.btnSearch.addEventHandler("onclick",this.Button58_onclick,this);
            this.div_search.form.btnClear.addEventHandler("onclick",this.div_search_btnClear_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CN_26.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
