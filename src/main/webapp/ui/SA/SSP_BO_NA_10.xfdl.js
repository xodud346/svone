(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_10");
            this.set_titletext("쿠폰 - 발행 내역");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,704);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DOWNLOAD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"dbWrk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridCpnPubcUseDtls", this);
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PUBC_MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PUBC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_CART_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_CART_ITM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_CART_APLY_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_CART_EXCPT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_ODR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_ODR_CNC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DRMC_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridCpnPubcUseDtlsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PUBC_MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PUBC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_CART_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_CART_ITM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_CART_APLY_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_CART_EXCPT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_ODR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_ODR_CNC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DRMC_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","0","0","20","704",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1180","0","20","704",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totalCount","20","53","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("(총 0건 0/0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload","1070","43","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_01","0","71","1200","10",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cpnPubcUseDtls","20","81","1160","494",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridCpnPubcUseDtls");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"90\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"125\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"60\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"쿠폰 번호\"/><Cell col=\"2\" text=\"고객 유형\"/><Cell col=\"3\" text=\"회원 ID\"/><Cell col=\"4\" text=\"회원명\"/><Cell col=\"5\" text=\"로그인 ID\"/><Cell col=\"6\" text=\"운영단위ID\"/><Cell col=\"7\" text=\"운영단위명\"/><Cell col=\"8\" text=\"주문번호\"/><Cell col=\"9\" text=\"주문품목번호\"/><Cell col=\"10\" text=\"상품ID\"/><Cell col=\"11\" text=\"쿠폰 사용여부\"/><Cell col=\"12\" text=\"사용 일시\"/><Cell col=\"13\" text=\"휴면회원&#13;&#10;여부\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:CPN_NO\"/><Cell col=\"2\" text=\"bind:CUST_SPR_CD_NM\"/><Cell col=\"3\" text=\"bind:CPN_PUBC_MBR_ID\" textAlign=\"center\" displaytype=\"decoratetext\" edittype=\"none\" expr=\"CPN_PUBC_MBR_ID  == &apos;&apos; ? CPN_PUBC_MBR_ID : &quot;&lt;u v=&apos;true&apos;&gt;&quot; + CPN_PUBC_MBR_ID + &quot;&lt;/u&gt;&quot;\"/><Cell col=\"4\" text=\"bind:MBR_NM\"/><Cell col=\"5\" text=\"bind:LOGN_ID\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"7\" text=\"bind:OPR_UNIT_NM\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:CPN_USE_ODR_NO\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:CPN_USE_ODR_ITM_NO\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:CPN_USE_PRD_ID\"/><Cell col=\"11\" text=\"bind:USE_YN_NM\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"12\" text=\"bind:USE_DTM\"/><Cell col=\"13\" text=\"bind:DRMC_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","0","575","1200","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","606","960","38",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_02","0","644","1200","10",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","565","654","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00_00_00_00","0","684","1200","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","1200","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","19","12","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("쿠폰 발행 내역 조회");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00","0","33","1200","10",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cpnPubcUseDtlsExcel","20","970","1150","100",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_autofittype("none");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridCpnPubcUseDtlsExcel");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"90\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"125\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"60\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"쿠폰 번호\"/><Cell col=\"2\" text=\"고객 유형\"/><Cell col=\"3\" text=\"회원 ID\"/><Cell col=\"4\" text=\"회원명\"/><Cell col=\"5\" text=\"로그인 ID\"/><Cell col=\"6\" text=\"운영단위ID\"/><Cell col=\"7\" text=\"운영단위명\"/><Cell col=\"8\" text=\"주문번호\"/><Cell col=\"9\" text=\"주문품목번호\"/><Cell col=\"10\" text=\"상품ID\"/><Cell col=\"11\" text=\"쿠폰 사용여부\"/><Cell col=\"12\" text=\"사용 일시\"/><Cell col=\"13\" text=\"휴면회원&#13;&#10;여부\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:CPN_NO\"/><Cell col=\"2\" text=\"bind:CUST_SPR_CD_NM\"/><Cell col=\"3\" text=\"bind:CPN_PUBC_MBR_ID\" textAlign=\"center\" displaytype=\"decoratetext\" edittype=\"none\" expr=\"CPN_PUBC_MBR_ID  == &apos;&apos; ? CPN_PUBC_MBR_ID : &quot;&lt;u v=&apos;true&apos;&gt;&quot; + CPN_PUBC_MBR_ID + &quot;&lt;/u&gt;&quot;\"/><Cell col=\"4\" text=\"bind:MBR_NM\"/><Cell col=\"5\" text=\"bind:LOGN_ID\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"7\" text=\"bind:OPR_UNIT_NM\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:CPN_USE_ODR_NO\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:CPN_USE_ODR_ITM_NO\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:CPN_USE_PRD_ID\"/><Cell col=\"11\" text=\"bind:USE_YN_NM\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"12\" text=\"bind:USE_DTM\"/><Cell col=\"13\" text=\"bind:DRMC_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,704,this,function(p){});
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
        this.addIncludeScript("SSP_BO_NA_10.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_NA_10.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 쿠폰 - 발행 내역
          CREATION DATES : 2022.03.17
        *******************************************************/

        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;

        /* ===============================================================
         * 0. Form Variable
         *  - Form 변수 영역
         * ===============================================================
         */
        //var fv_변수명;
        var fv_coCd = "";		// 선택한 회사코드
        var fv_cpnEvtNo = "";	// 선택한 쿠폰이벤트순번
        this.totalCount = 0;

        /* ===============================================================
         * 1. Form Load
         *  - Form 로드시 실행
         * ===============================================================
         */
        this.SSP_BO_NA_10_onload = function(obj, e)
        {
        	// 공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 초기화
        	this.fn_init("VAL_INIT");
        	this.fn_init("SEARCH_INIT");
        	this.fn_init("GRID_INIT");
        }

        this.fn_onkeyup = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
        	}
        };








        /* ===============================================================
         * 2. transaction
         *  - transaction 영역
         * ===============================================================
         */

        /**
         * 쿠폰 발행 내역 grid 값 조회
         */
        this.fn_gridCpnPubcUseDtlsList = function (sPage)
        {
        	if (sPage == 0)
        	{
        		// 페이징 초기화
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;

        		this.ds_search.setColumn(0, "START_NUM", 0);
        		this.ds_search.setColumn(0, "ROW_COUNT", this.div_paging.uPageRowCnt);
        		this.ds_search.setColumn(0, "dbWrk", "SELECT");
        	}

        	var sSvcId = "gridCpnPubcUseDtlsList";
        	var sUrl = "/sa/cpn/select-cpn-pubc-use-dtls-list.do";
        	var sInData = "ds_search=ds_search"
        	var sOutData = "ds_gridCpnPubcUseDtls=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        };



        /* ===============================================================
         * 3. CallBack
         *  - transaction 후 처리 영역
         * ===============================================================
         */

        /**
         * 공통 callback
         */
        this.fn_callbackFunction = function(svcID, errorCode, errorMsg)
        {
        	if(errorCode < 0)
        	{
        		alert(errorMsg);
        		return;
        	}

        	switch (svcID)
        	{
        		case "gridCpnPubcUseDtlsList" :

        			//paging 처리
        			this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.div_paging.uPageRowCnt, "fn_pageCallbackFunction");

        			break;


        		default :

        			break;


        	}
        }

        /**
         * 싱글/멀티 팝업 공통 callback
         */
        this.fn_popupCallbackFunction = function(sPopupId, sRetValue)
        {
        	if(this.gfn_isNull(sRetValue))
        	{
        		return;
        	}

        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId)
        	{
        		case "btn_mbrDtl" :

        			break;

        		default :

        			break;
        	}
        }

        /**
         * 페이징 공통 callback
         */
        this.fn_pageCallbackFunction = function(sFlag)
        {
        	var oPaging = this.div_paging;

        	if(sFlag)
        	{
        		this.ds_search.setColumn(0, "START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0, "ROW_COUNT", this.div_paging.uPageRowCnt);
        		this.ds_search.setColumn(0, "EXCEL_DOWNLOAD_YN", "N");
        		this.fn_gridCpnPubcUseDtlsList();
        	}

        	var sTotText = "(<b v='true'>총 " + oPaging.uTotCount + "건 </b><fc v='red'>" + oPaging.uPage + "</fc> / " + oPaging.uPageCnt + ")";

        	this.sta_totalCount.set_text(sTotText);
        };

        /**
         * 정렬 공통 callback
         */
        this.fn_sortCallbackFunction = function(sGridId)
        {
        	var oGrid = null;

        	if(sGridId == "grd_cpnPubcUseDtls")
        	{
        		oSortInfo = this.grd_cpnPubcUseDtls.uaSortInfo;

        		this.ds_search.setColumn(0, "SORT_COLUMN", oSortInfo.bindCol);
        		this.ds_search.setColumn(0, "SORT_TYPE", oSortInfo.status);

        		this.fn_gridCpnPubcUseDtlsList();

        	}
        };










        /* ===============================================================
         * 4. 외부 호출 FUNCTION 영역
         * ===============================================================
         */

        /**
         * 화면 설정 함수
         */
        this.cfn_formInit = function()
        {
        	// grid 초기 설정
        	this.grd_cpnPubcUseDtls.uSortFlag = "false";
        	this.grd_cpnPubcUseDtls.uServerSortFlag = "true";
        	this.grd_cpnPubcUseDtls.uSortCallback = "fn_sortCallbackFunction";
        	this.grd_cpnPubcUseDtls.uCellSizeType = "true";

        	// 페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 20;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;
        }










        /* ===============================================================
         * 5. event action
         *  - dataset 및 component 이벤트 영역
         * ===============================================================
         */

        /**
         * 엑셀다운로드 버튼 클릭 시
         */
        this.btn_excelDownload_onclick = function(obj,e)
        {
        	this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_excelDownload");
        };

        /**
         * 그리드 cell 클릭 시
         */
        this.grd_cpnPubcUseDtls_oncellclick = function(obj,e)
        {
        	if(e.col == this.grd_cpnPubcUseDtls.getBindCellIndex("body", "CPN_PUBC_MBR_ID"))
        	{
        		// 회원ID 컬럼 클릭 시

        		var objDs = obj.getBindDataset();
        		var nRow = objDs.rowposition;

        		var oArg = { coCd : objDs.getColumn(nRow, "CO_CD")
        				   , mbrId : objDs.getColumn(nRow, "CPN_PUBC_MBR_ID")
        				   };

        // 		var oOption = { top : "-1"
        // 					  , left : "-1"
        // 					  , width : "-1"
        // 					  , height : "-1"
        // 					  , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        // 					  , layered : "false"
        // 					  , opacity : "100"
        // 					  , autosize : "true"
        // 					  , titlebar : "true"
        // 					  , title : "회원 상세 정보"
        // 					  };

        		//this.gfn_openPopup("btn_mbrDtl", "CC::SSP_BO_MA_15.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        		//this.gfn_openPopup("btn_mbrDtl", "CC::SSP_BO_MA_99.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        		this.gfn_openPopup('btn_mbrDtl', "CC::SSP_BO_CC_T3.xfdl", oArg, "fn_popupCallbackFunction", {titlebar:"true"});
        	}
        };

        /**
         * 닫기 버튼 클릭 시
         */
        this.btn_close_onclick = function(obj,e)
        {
        	var resData = {};
        	var resString = "";

        	resData.RETURN_YN = "N";

        	// json string 변경
        	resString = JSON.stringify(resData);

        	// return
        	this.close(resString);
        };










        /* ===============================================================
         * 6. User Function
         *  - 사용자 구현 함수 영역
         * =============================================================== */

        /**
         * 화면 초기화 함수
         */
        this.fn_init = function(sVal)
        {
        	switch (sVal)
        	{
        		case "VAL_INIT" :

        			// 변수 초기화

        			this.fv_coCd = this.parent.sCoCd;
        			this.fv_cpnEvtNo = this.parent.sCpnEvtNo;
        			this.totalCount = 0;

        			break;

        		case "SEARCH_INIT" :

        			// 검색 항목 초기화

        			// dataset 설정
        			this.ds_search.clearData();
        			var nRow = this.ds_search.addRow();

        			this.ds_search.setColumn(nRow, "CO_CD", this.fv_coCd);
        			this.ds_search.setColumn(nRow, "CPN_EVT_NO", this.fv_cpnEvtNo);
        			this.ds_search.setColumn(nRow, "SORT_COLUMN", "");
        			this.ds_search.setColumn(nRow, "SORT_TYPE", "");
        			this.ds_search.setColumn(nRow, "EXCEL_DOWNLOAD_YN", "N");

        			// 버튼 영역

        			// 엑셀다운로드
        			this.btn_excelDownload.set_enable(true);

        			// 페이징 초기화
        			this.ds_search.setColumn(0, "START_NUM", 0);
        			this.ds_search.setColumn(0, "ROW_COUNT", this.div_paging.uPageRowCnt);

        			break;

        		case "GRID_INIT" :

        			// grid 초기화

        			this.sta_totalCount.set_text("(<b v='true'>총 0건 </b><fc v='red'>0</fc> / 0)");

        			// dataset 영역
        			this.ds_gridCpnPubcUseDtls.clearData();
        			this.ds_gridCpnPubcUseDtlsExcel.clearData();

        			this.grd_cpnPubcUseDtls.clearSelect();
        			this.grd_cpnPubcUseDtlsExcel.clearSelect();

        			this.grd_cpnPubcUseDtls.nodatatext = "발생 대상이 없습니다.";
        			this.grd_cpnPubcUseDtlsExcel.nodatatext = "발생 대상이 없습니다.";

        			// 쿠폰 발행 내역 조회
        			this.fn_gridCpnPubcUseDtlsList(0);

        			break;

        		default :

        			//alert("작업구분이 없습니다.");

        			break;
        	}
        }

        // 엑셀다운로드
        this.fn_excelDownload = function(objId, ret) {

        	 if(this.ds_gridCpnPubcUseDtls.rowcount < 1)
            {
                this.fn_alert("ERRS000202", "EXCEL 정보" ,"","information");              // 엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.
                return false;
            }
        	var answr = ret.split("||||");

        	if(this.gfn_isNull(answr)) return;

        	this.gfn_exportExcel({form:this, grid:this.grd_cpnPubcUseDtls, fileName:"쿠폰발행내역", password: answr[0], downRsn: answr[1], pgmId: "SSP_BO_NA_10", dbWrk: "DOWNLOAD"});

        }



        /**
         * 이벤트 엑셀 grid 값 조회
         */
        // this.fn_gridCpnPubcUseDtlsListExcel = function ()
        // {
        // 	var sSvcId = "gridCpnPubcUseDtlsListExcel";
        // 	var sUrl = "/sa/cpn/select-cpn-pubc-use-dtls-list.do";
        // 	var sInData = "ds_search=ds_search"
        // 	var sOutData = "ds_gridCpnPubcUseDtlsExcel=ds_output1";
        // 	var sArg = "";
        // 	var sCallback = "fn_callbackFunction";
        //
        // 	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        // };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_NA_10_onload,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.sta_totalCount.addEventHandler("onclick",this.sta_totalCount_onclick,this);
            this.btn_excelDownload.addEventHandler("onclick",this.btn_excelDownload_onclick,this);
            this.grd_cpnPubcUseDtls.addEventHandler("oncellclick",this.grd_cpnPubcUseDtls_oncellclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_NA_10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
