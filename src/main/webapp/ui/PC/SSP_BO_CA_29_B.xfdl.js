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
            this.set_titletext("Condition 이력조회 - 배송비할인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1060,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"codeList\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PB_SPR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">50</Col><Col id=\"USE_YN\">Y</Col><Col id=\"PRD_STD_YN\"/><Col id=\"INQ_SPR\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"UNIT\" type=\"STRING\" size=\"32\"/><Column id=\"DLCST_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"QTY_ITV_STR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"QTY_ITV_END\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"EXTR_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CUR_UNT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"QTY_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"QTY_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"DATA_CHG_TP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HST_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\"/><Col id=\"USE_YN_NM\">전체</Col></Row><Row><Col id=\"USE_YN_NM\">사용</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"USE_YN\">N</Col><Col id=\"USE_YN_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSpr", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","45",null,"505","4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dlvplcList","20","56",null,"400","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"70\"/><Column size=\"30\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"75\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"등록 일시\"/><Cell col=\"1\" text=\"공용전용구분\"/><Cell col=\"2\" text=\"유형\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"수량(From)\"/><Cell col=\"5\" text=\"수량(To)\"/><Cell col=\"6\" text=\"할증금액\"/><Cell col=\"7\" text=\"판매통화\"/><Cell col=\"8\" text=\"기간(From)\"/><Cell col=\"9\" text=\"기간(To)\"/><Cell col=\"10\" text=\"변경담당자ID\"/><Cell col=\"11\" text=\"변경담당자\"/></Band><Band id=\"body\"><Cell text=\"bind:REG_DTM\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"1\" text=\"bind:BZPLC_ID\" expr=\"BZPLC_ID==&apos;*&apos;?&apos;공용&apos;:&apos;전용&apos;\"/><Cell col=\"2\" text=\"bind:UNIT\"/><Cell col=\"3\" text=\"bind:DLCST_SPR_NM\"/><Cell col=\"4\" text=\"bind:QTY_ITV_STR\"/><Cell col=\"5\" text=\"bind:QTY_ITV_END\"/><Cell col=\"6\" text=\"bind:EXTR_AMT\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:CUR_UNT_CD\"/><Cell col=\"8\" text=\"bind:DLCST_STR_DTM\"/><Cell col=\"9\" text=\"bind:DLCST_END_DTM\"/><Cell col=\"10\" text=\"bind:UPDPSN_ID\"/><Cell col=\"11\" text=\"bind:OPRTR_NM\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_page",null,"25","114","24","22",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_page");
            obj.set_codecolumn("COUNT");
            obj.set_datacolumn("COUNT");
            obj.set_displayrowcount("5");
            obj.set_visible("false");
            obj.set_text("20개씩");
            obj.set_value("20");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","35","300","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건, 1 / 0)");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_paging","7","467",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","20",null,"64","4",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","0",null,"32","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_srchFrDt","159","4","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd ");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static59","303","4","9","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("~");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_srchToDt","316","4","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("cbo_inqPerdSpr","461","4","100","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_inqPerdSpr");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"40","65","26","193",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("초기화");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button58",null,"40","60","26","129",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_select");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("cbo_inqSpr","49","4","100","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_00_form_cbo_inqSpr_innerdataset = new nexacro.NormalDataset("Div00_00_form_cbo_inqSpr_innerdataset", obj);
            Div00_00_form_cbo_inqSpr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">등록일시</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">적용일시</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_cbo_inqSpr_innerdataset);
            obj.set_text("변경일시");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02","600","0","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_text("공용 전용 구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("cbo_pbSpr","740","4","100","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_00_form_cbo_pbSpr_innerdataset = new nexacro.NormalDataset("Div00_00_form_cbo_pbSpr_innerdataset", obj);
            Div00_00_form_cbo_pbSpr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전용</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">공용</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_cbo_pbSpr_innerdataset);
            obj.set_text("변경일시");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"59","100","28","26",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("다운로드(P)");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1060,550,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.cbo_page","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00_00.form.cal_srchFrDt","value","ds_search","STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00_00.form.cal_srchToDt","value","ds_search","END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00_00.form.cbo_inqSpr","value","ds_search","INQ_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00_00.form.cbo_pbSpr","value","ds_search","PB_SPR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_29_B.xfdl","PC::pcUtils.xjs");
        this.addIncludeScript("SSP_BO_CA_29_B.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CA_29_B.xfdl", function() {
        this.executeIncludeScript("PC::pcUtils.xjs"); /*include "PC::pcUtils.xjs"*/;
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
        	this.fn_odCommLoading();
        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	this.Div00_00.form.cbo_inqPerdSpr.set_value("2");
        	this.fn_pcDateChage(this.Div00_00.form.cal_srchFrDt,this.Div00_00.form.cal_srchToDt, this.Div00_00.form.cbo_inqPerdSpr);
        	this.fn_setPbSpr();
            //부모창 데이터 처리 후 조회
        	this.fn_checkData();

        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_doSearch = function(page)
        {
        	 var sSvcId = "selectDetrInfoList";
             var sUrl = "/pc/popup/select-prd-dlcst-hst-list.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_list=ds_output";
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

        //공통코드조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_inqPerdSpr=ds_output1";
        	var arg = "";
        	var callback = "fn_received";

        	this.ds_search.setColumn(0, "codeList", "INQ_PERD_SPR_CD");
        	this.ds_search.setColumn(0, "langCd", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/

        //조회 트랜잭션 콜백함수
        this.fn_received = function(svcID, errorCode, errorMsg)	{

        // 	this.preSelectRowPosition = 0;
        //
        // 	// 조회 카운트가 없으면 데이터셋이 날라감으로 강제 설정
        // 	if( this.ds_plnPrfrtList.rowcount == 0 ) {
        // 		this.ds_plnPrfrtList.copyData(this.ds_dlvplcListCopy);
        // 	}
        	switch(svcID)
        	{
        		case 'selectDetrInfoList' :
        			if( this.ds_list.rowcount == 0 ) {
        				this.ds_list.copyData(this.ds_listCopy);
        				this.Div00.form.grd_dlvplcList.set_nodatatext("조회 결과가 없습니다.");
        			}
        		break;

        		case "commonCodeSearch":

        		    this.ds_inqPerdSpr.insertRow(0);
        			this.ds_inqPerdSpr.setColumn(0,"COM_DTL_CD","");
        			this.ds_inqPerdSpr.setColumn(0,"COM_DTL_CD_NM","전체");
        			this.Div00_00.form.cbo_inqPerdSpr.set_value("2");
        			break;

        		default :
        		break;
        	}

        	//paging 처리
        	this.Div00.form.div_paging.form.cfn_createPage(this.Div00.form.div_paging, this.totalCount, this.Div00.form.cbo_page.value, "fn_pageCallback");
        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){

        	var oPaging = this.Div00.form.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.Div00.form.cbo_page.value);
        		this.fn_doSearch(3);
        	}

        	var sTotText = "(총 "+ this.fn_AmountCommas(this.totalCount)+"건, "+ this.fn_AmountCommas(oPaging.uPage) +" / "+ this.fn_AmountCommas(oPaging.uPageCnt) +")";
        	this.Div00.form.totalPageCount.set_text(sTotText);
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
        	this.Div00.form.div_paging.uPageRowCnt = 50;
        	this.Div00.form.div_paging.uPageCnt = 0;
        	this.Div00.form.div_paging.uTotCount = 0;
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_checkData = function(){
        	var prdId = this.parent.parent.parent.parent.prdId;
        	var bzplcId = this.parent.parent.parent.parent.bzplcId;

        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_search.setColumn(0, "PRD_ID", prdId);
        	if( this.Div00_00.form.cbo_pbSpr.value == "1" )
        		this.ds_search.setColumn(0, "BZPLC_ID", bzplcId);
        	else
        		this.ds_search.setColumn(0, "BZPLC_ID", "*");
        	//this.ds_search.setColumn(0, "INQ_SPR", this.Div00_00.form.cbo_inqSpr.value);
        	// 조회

        //alert("babo is " + this.fn_getStrFromDataset(this.ds_search,0));
        	this.fn_doSearch(1);
        }

        this.fn_calDateOffset = function(currDate,offset){
        	var sReturn = "";

        	var sGb = offset.substr(0,1);
        	var sOffset = offset.substr(1,offset.length-1);

        	if(sGb == "W"){
        	    sReturn = this.gfn_addDate(currDate,sOffset*(-7)+1);
        	}else if(sGb == "M"){
        	    sReturn = this.gfn_addMonth(currDate,sOffset*(-1));
        	}else if(sGb == "Y"){
        	    sReturn = this.gfn_addMonth(currDate,sOffset*(-12));
        	}else if(sGb == "D"){
        	    sReturn = this.gfn_addMonth(currDate,0);
        	}

        	return sReturn;
        }

        this.fn_setPbSpr = function(){

        	var bzplcId = this.parent.parent.parent.parent.bzplcId;

        	if(bzplcId != "*")
        		this.Div00_00.form.cbo_pbSpr.set_value(1);
        	else
        		this.Div00_00.form.cbo_pbSpr.set_value(2);
        }

        this.fn_AmountCommas = function(val){ //세자리마다',' 적용
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        this.Div00_00_Button58_onclick = function(obj,e)
        {
        	this.fn_checkData();
        };


        this.Div00_00_btn_init_onclick = function(obj,e)
        {
        	this.Div00_00.form.cbo_inqSpr.set_value("1");
        	//달력
        	this.Div00_00.form.cbo_inqPerdSpr.set_value("2");
        	this.fn_pcDateChage(this.Div00_00.form.cal_srchFrDt,this.Div00_00.form.cal_srchToDt, this.Div00_00.form.cbo_inqPerdSpr);
        	this.fn_setPbSpr();
        };


        this.Div00_00_cbo_inqPerdSpr_onitemchanged = function(obj,e)
        {
        	this.fn_pcDateChage(this.Div00_00.form.cal_srchFrDt, this.Div00_00.form.cal_srchToDt, this.Div00_00.form.cbo_inqPerdSpr);
        };


        this.Div00_00_cal_srchFrDt_onchanged = function(obj,e)
        {
        	this.fn_pcDateValidate(this.Div00_00.form.cal_srchFrDt, this.Div00_00.form.cal_srchToDt);
        };

        this.Div00_00_cal_srchToDt_onchanged = function(obj,e)
        {
        	this.fn_pcDateValidate(this.Div00_00.form.cal_srchFrDt, this.Div00_00.form.cal_srchToDt);
        };

        this.btn_excelDownload_onclick = function(obj,e)
        {

        	if(this.ds_list.getRowCount() > 0){
        		this.ofn_exportExcel({form:this, grid:this.Div00.form.grd_dlvplcList, fileName:"배송비이력"});
        	}else{
        		alert(this.fn_getMessage("ERRS000202"));
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Div00.form.grd_dlvplcList.addEventHandler("oncellclick",this.Div00_grd_dlvplcList_oncellclick,this);
            this.Div00.form.cbo_page.addEventHandler("onitemchanged",this.fn_onchgRowCount,this);
            this.Div00.form.totalPageCount.addEventHandler("onclick",this.totalPageCount_onclick,this);
            this.Div00_00.form.cal_srchFrDt.addEventHandler("onchanged",this.Div00_00_cal_srchFrDt_onchanged,this);
            this.Div00_00.form.cal_srchToDt.addEventHandler("onchanged",this.Div00_00_cal_srchToDt_onchanged,this);
            this.Div00_00.form.cbo_inqPerdSpr.addEventHandler("onitemchanged",this.Div00_00_cbo_inqPerdSpr_onitemchanged,this);
            this.Div00_00.form.btn_init.addEventHandler("onclick",this.Div00_00_btn_init_onclick,this);
            this.Div00_00.form.Button58.addEventHandler("onclick",this.Div00_00_Button58_onclick,this);
            this.Div00_00.form.cbo_inqSpr.addEventHandler("onitemchanged",this.Div00_00_cbo_inqPerdSpr_onitemchanged,this);
            this.Div00_00.form.cbo_pbSpr.addEventHandler("onitemchanged",this.Div00_00_cbo_inqPerdSpr_onitemchanged,this);
            this.btn_excelDownload.addEventHandler("onclick",this.btn_excelDownload_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CA_29_B.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
