(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dlvplcMngList");
            this.set_titletext("공통계획매익율");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_STD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col><Col id=\"USE_YN\">Y</Col><Col id=\"PRD_STD_YN\"/><Col id=\"PRD_CLCD\">*</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_plnPrfrtList", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"USE_YN_NM\" type=\"string\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"string\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"string\" size=\"32\"/><Column id=\"PRD_STD_YN\" type=\"string\" size=\"32\"/><Column id=\"PRD_STD_YN_NM\" type=\"string\" size=\"32\"/><Column id=\"PLN_PRFRT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PLN_PRFRT_NM\" type=\"bigdecimal\" size=\"16\"/><Column id=\"REGPSN_ID\" type=\"string\" size=\"32\"/><Column id=\"REG_RSN\" type=\"string\" size=\"32\"/><Column id=\"REG_DTM\" type=\"string\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"PLN_PRFRT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PLN_PRFRT_NM\" type=\"bigdecimal\" size=\"16\"/><Column id=\"REGPSN_ID\" type=\"string\" size=\"32\"/><Column id=\"REG_RSN\" type=\"string\" size=\"32\"/><Column id=\"REG_DTM\" type=\"string\" size=\"32\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insert", this);
            obj._setContents("<ColumnInfo><Column id=\"PLN_PRFRT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"REG_RSN\" type=\"string\" size=\"32\"/><Column id=\"REG_DTM\" type=\"string\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"PRD_CLCD\">*</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00_00","0","145",null,"75","4",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","140","0",null,"32","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02","20","0","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("공통계획매익율");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static04","420","0","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("등록사유");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("edt_categoryNm","Static04:10","4",null,"24","26",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_maxlength("40");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button58",null,"Static05:10","60","26","22",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","400","9","10","14",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("%");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","160","4","230","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_format("99,999,990.99");
            obj.set_limitbymask("both");
            obj.set_displaynulltext(" ");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00","0","Div00_00:-5",null,null,"4","3",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","20","10","130","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("■ 변경이력");
            obj.set_cssclass("sta_WF_title01");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_dlvplcList","20","66",null,"400","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_plnPrfrtList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"60\"/><Column size=\"44\"/><Column size=\"44\"/><Column size=\"440\"/><Column size=\"70\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"사용상태\"/><Cell col=\"1\" text=\"계획매익율\"/><Cell col=\"2\" text=\"등록담당자ID\"/><Cell col=\"3\" text=\"등록담당자\"/><Cell col=\"4\" text=\"등록사유\"/><Cell col=\"5\" text=\"변경일\"/></Band><Band id=\"body\"><Cell text=\"bind:USE_YN_NM\"/><Cell col=\"1\" text=\"bind:PLN_PRFRT\" displaytype=\"mask\" maskeditformat=\"#,0.00\" textAlign=\"right\" maskeditpostfixtext=\"%\"/><Cell col=\"2\" text=\"bind:REGPSN_ID\"/><Cell col=\"3\" text=\"bind:OPRTR_NM\"/><Cell col=\"4\" text=\"bind:REG_RSN\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:REG_DTM\" displaytype=\"expr:REG_DTM!=undefined?&apos;date&apos;:&apos;&apos;\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_paging","7","grd_dlvplcList:20",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","35","300","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("(총 0건, 1 / 0)");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div_top_info00","20","0",null,"120","24",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","53",null,"32","0",null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static02","0","53","130","32",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("0");
            obj.set_text("공통계획매익율");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static22_00","291","53","130","32",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("6");
            obj.set_text("등록사유");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static04","942","53","130","32",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("2");
            obj.set_text("등록일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static23","Static22_00:-1","53","523","32",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("RB1024578");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-115","150","24",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("4");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-115","150","24",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("5");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static29_00_00","129","54","181","2",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00","0","21","130","20",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("8");
            obj.set_text("■ 현재 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static23_00","Static02:-1","53","163","32",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("RB1024578");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static23_01","Static04:-1","53",null,"32","0",null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("RB1024578");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","20","110","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("■ 신규정보");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,750,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div_top_info00.form.Static23_00","text","ds_detail","PLN_PRFRT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div_top_info00.form.Static23","text","ds_detail","REG_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div_top_info00.form.Static23_01","text","ds_detail","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00_00.form.edt_categoryNm","value","ds_insert","REG_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00_00.form.MaskEdit00","value","ds_insert","PLN_PRFRT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_51_B.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CA_51_B.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 상품군계획매익률
          CREATION DATES : 2022.01.25
        *******************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.preSelectRowPosition = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//조회함수
        	this.fn_doSearch(0);


        	if(typeof(this.parent.parent.parent.parent.parent.tabPageInit) == "function"){
        		this.Static00_03_00_00.set_visible(false);

        		this.Div00_00.set_visible(false);

        		this.Div00.set_top("100px");
        	}

        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_doSearch = function(page)
        {
        	 var sSvcId = "selectPlnPrfrtList";
             var sUrl = "/pc/plnPrfrt/selectCommonPlnPrfrtList.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_plnPrfrtList=ds_output ds_detail=ds_detail";
             var arg;
             var callback = "fn_received";

        	 // 조회버튼 클릭시 페이징 초기화 시킨다.
        	 if( page == 0 ) {
        		this.Div00.form.div_paging.uPage=1;
        		this.Div00.form.div_paging.uPageNum=0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        	 }

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        //저장
        this.fn_save = function()	{

        	var sSvcId = "insertPlnPrfrt";
        	var sUrl = "/pc/plnPrfrt/insertPlnPrfrt.do";
        	var inDs = "ds_insert=ds_insert";
        	var outDs = "ds_list=ds_output";
        	var arg = "";


        	//전송
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/

        //조회 트랜잭션 콜백함수
        this.fn_received = function(svcID, errorCode, errorMsg)	{

        	this.preSelectRowPosition = 0;

        	// 조회 카운트가 없으면 데이터셋이 날라감으로 강제 설정
        // 	if( this.ds_plnPrfrtList.rowcount == 0 ) {
        // 		this.ds_plnPrfrtList.copyData(this.ds_dlvplcListCopy);
        // 	}

        	//paging 처리
        	this.Div00.form.div_paging.form.cfn_createPage(this.Div00.form.div_paging, this.totalCount, 20, "fn_pageCallback");
        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){

        	var oPaging = this.Div00.form.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", 20);
        		this.fn_doSearch(3);
        	}

        	var sTotText = "(총 "+ this.fn_AmountCommas(this.totalCount)+"건, "+ this.fn_AmountCommas(oPaging.uPage) +" / "+ this.fn_AmountCommas(oPaging.uPageCnt) +")";
        	this.Div00.form.totalPageCount.set_text(sTotText);
        }

        this.fn_callBack = function(){

        	alert(this.fn_getMessage("ERRS000156"));

        	//입력 DS 초기화
        	this.ds_insert.setColumn(0,"PLN_PRFRT","");
        	this.ds_insert.setColumn(0,"REG_RSN","");

        	this.fn_doSearch(0);
        }

        //정렬콜백
        this.fn_sortCallback = function(sGridId){

        	var oGrid = null;
        	if(sGridId == "grd_dlvplcList"){
        		oSortInfo = this.Div00.form.grd_dlvplcList.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		this.fn_doSearch(0);
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function()
        {
        	//grid 초기 설정
        	this.Div00.form.grd_dlvplcList.uSortFlag = "false";
        	this.Div00.form.grd_dlvplcList.uServerSortFlag = "true";
        	this.Div00.form.grd_dlvplcList.uSortCallback = "fn_sortCallback";
        	this.Div00.form.grd_dlvplcList.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.Div00.form.div_paging.uPage = 1;
        	this.Div00.form.div_paging.uPageNum = 0;
        	this.Div00.form.div_paging.uPageRowCnt = 20;
        	this.Div00.form.div_paging.uPageCnt = 0;
        	this.Div00.form.div_paging.uTotCount = 0;
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //저장 유효성 체크
        this.fn_validationCheck = function(){

        	if(this.gfn_isNull(this.ds_insert.getColumn(0,"PLN_PRFRT"))) {
        		alert(this.fn_getMessage("ERRR000015"));
        		return false;
        	}

        	if(this.gfn_isNull(this.ds_insert.getColumn(0,"REG_RSN"))) {
        		alert(this.fn_getMessage("ERRR000150"));
        		return false;
        	}

        	return true;
        };

        this.fn_AmountCommas = function(val){ //세자리마다',' 적용
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        this.Div00_00_Button58_onclick = function(obj,e)
        {

        	if(this.fn_validationCheck()){
        		var sReturn = this.confirm(this.fn_getMessage("ERRC000080"));
        		if(sReturn == true){
        			this.fn_save();
        		}
        	}



        };

        this.Div00_00_MaskEdit00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Div00_00.form.Button58.addEventHandler("onclick",this.Div00_00_Button58_onclick,this);
            this.Div00_00.form.MaskEdit00.addEventHandler("onchanged",this.Div00_00_MaskEdit00_onchanged,this);
            this.Div00.form.Static00_03_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div00.form.grd_dlvplcList.addEventHandler("oncellclick",this.Div00_grd_dlvplcList_oncellclick,this);
            this.Div_top_info00.form.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.Div_top_info00.form.Static29_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CA_51_B.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
