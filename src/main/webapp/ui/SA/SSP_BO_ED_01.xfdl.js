(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_ED_01");
            this.set_titletext("EDM - 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"dbWrk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"BG_NM\"/><Col id=\"USE_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_edmList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EDM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EDM_FORM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXTR_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPCNT\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DOWN_PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPIRED_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_paging","20",null,null,"55","20","20",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutReset",null,"20","100","28","206",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"20","100","28","btn_layoutReset:9",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"20","60","28","46",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"20","110","28","421",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_edmList","17","70",null,"600","23",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_edmList");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"94\"/><Column size=\"257\"/><Column size=\"80\"/><Column size=\"105\"/><Column size=\"117\"/><Column size=\"119\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"타입\"/><Cell col=\"2\" text=\"추출사유\"/><Cell col=\"3\" text=\"이벤트ID\"/><Cell col=\"4\" text=\"대상자 수\"/><Cell col=\"5\" text=\"추출요청자\"/><Cell col=\"6\" text=\"추출일시\"/></Band><Band id=\"body\"><Cell text=\"bind:EDM_SEQ\"/><Cell col=\"1\" text=\"bind:EDM_FORM_CD\"/><Cell col=\"2\" text=\"bind:EXTR_RSN\"/><Cell col=\"3\" text=\"bind:EVT_ID\" displaytype=\"decoratetext\"/><Cell col=\"4\" text=\"bind:OPCNT\" displaytype=\"decoratetext\"/><Cell col=\"5\" text=\"bind:REGPSN_ID\"/><Cell col=\"6\" text=\"bind:REG_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_write",null,"20","81","28","116",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","17","36","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("(총 0건 0/0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
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
        this.addIncludeScript("SSP_BO_ED_01.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_ED_01.xfdl", function() {
        /*******************************************************
        PROJECT NAME : EDM 타겟 관리 목록
        CREATION DATES : 2022.12.13
        CREATER        : YHK
        *******************************************************/

        /* 스크립트 인클루드 */
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * 0.Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        var fv_coCd = "";
        this.totalCount = 0;
        /***********************************************************************************************
        * 1.FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//초기화
        	this.fn_init("VAL_INIT");
        	this.fn_init("SEARCH_INIT");
        	this.fn_init("GRID_INIT");

        };

        this.fn_onkeyup = function(obj,e)
        {
        	// CTRL+ENTER KEY
        	if(e.keycode == 13 && e.ctrlkey){
        		this.btn_search_onclick();
        	}
        };

        /***********************************************************************************************
        * 2.Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(page)
        {
        	if (page == 0)
        	{
        		// 페이징 초기화
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;

        		this.ds_search.setColumn(0, "START_NUM", 0);
        		this.ds_search.setColumn(0, "ROW_COUNT", this.div_paging.uPageRowCnt);
        		this.ds_search.setColumn(0, "dbWrk", "SELECT");
        	}

        	var sSvcId = "selectEdmList";
        	var sUrl = "/sa/edm/selectEdmInfoList.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_edmList=ds_output";
        	var arg;
        	var callback = "fn_callback";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        /***********************************************************************************************
        * 3.Callback 처리 영역
        ************************************************************************************************/

        //콜백
        this.fn_callback = function(svcID, errorCode, errorMsg) {

        	if(errorCode < 0)
        	{
        		alert(errorMsg);
        		return;
        	}

        	switch (svcID)
        	{
        		case "selectEdmList" :

        			if(this.ds_edmList.getRowCount() > 0) {

        				var strExpr = "EXPIRED_YN == 'N' && DOWN_PROC_STATS_CD == '3'";
        				var arrRows = this.ds_edmList.extractRows(strExpr);

        				for(var j = 0; j < arrRows.length; j++){
        					var rowIdx = arrRows[j]
        					var opcnt = this.ds_edmList.getColumn(rowIdx, "OPCNT");
        					var value = '<fc v="blue"><u v="true">'+opcnt+'</u></fc>';
        					this.ds_edmList.setColumn(rowIdx, "OPCNT", value);
        				}

        			}

        			//목록 조회후 paging 처리
        			this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.div_paging.uPageRowCnt, "fn_pageCallback");

        			break;

        		default :

        			break;

        	}

        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){

        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.div_paging.uPageRowCnt);
        		this.fn_search();
        	}

        	var sTotText = "(<b v='true'>총 " + oPaging.uTotCount + "건 </b><fc v='red'>" + oPaging.uPage + "</fc> / " + oPaging.uPageCnt + ")";

        	this.totalPageCount.set_text(sTotText);

        }

        //팝업콜백
        this.fn_popupCallback = function(sPopupId, sRetValue)
        {
        	if(this.gfn_isNull(sRetValue))
        	{
        		return;
        	}

        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId)
        	{
        		case "btn_write" :

        			if (retObj.RETURN_YN.replace(/,\s*$/, "") == "Y")
        			{
        				this.fn_search(0);
        			}

        			break;



        		default :

        			break;
        	}
        }


        /***********************************************************************************************
        * 4.외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수

        this.cfn_formInit = function()
        {
        	//grid 초기 설정
        	this.grd_edmList.uSortFlag = "false";
        	this.grd_edmList.uServerSortFlag = "true";
        	this.grd_edmList.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 50;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_edmList";
        	this.grd_edmList.uRightMouse = "true";
        	this.grd_edmList.uPersonalFlag = "true";
        	this.grd_edmList.uDefaultFormat = "EDM_SEQ,EDM_FORM_CD,EXTR_RSN,EVT_ID,OPCNT,REGPSN_ID,REG_DTM";

        }



        /***********************************************************************************************
        *  5.개발자(사용자) 함수 영역
        ************************************************************************************************/

        //화면 초기화 함수
        this.fn_init = function(sVal)
        {
        	switch (sVal)
        	{
        		case "VAL_INIT" :

        			// 변수 초기화
        			this.fv_coCd = this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD");
        			this.totalCount = 0;

        			break;

        		case "SEARCH_INIT" :

        			// 버튼 영역
        			this.btn_write.set_enable(true);
        			this.btn_search.set_enable(true);
        			this.btn_excelDownload.set_enable(true);
        			this.btn_layoutSave.set_enable(true);
        			this.btn_layoutReset.set_enable(true);

        			// 페이징 초기화
        			this.ds_search.setColumn(0, "START_NUM", 0);
        			this.ds_search.setColumn(0, "ROW_COUNT", this.div_paging.uPageRowCnt);

        			break;

        		case "GRID_INIT" :

        			// grid 초기화
        			this.totalPageCount.set_text("(<b v='true'>총 0건 </b><fc v='red'>0</fc> / 0)");
        			this.ds_edmList.clearData();
        			this.grd_edmList.clearSelect();

        			break;

        		default :

        			break;
        	}
        }



        /***********************************************************************************************
        *  6.각 Component 별 이벤트 영역
        ************************************************************************************************/


        //조회 버튼
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search(0);
        };

        //등록 버튼
        this.btn_write_onclick = function(obj,e)
        {
        	var oArg = {
        	           };

        	var oOption = { top : "-1"
        	              , left : "-1"
        	              , width : "-1"
        	              , height : "-1"
        	              , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        	              , layered : "false"
        	              , opacity : "100"
        	              , autosize : "true"
        	              , titlebar : "true"
        	              , title : "EDM 타겟 등록"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_ED_02.xfdl", oArg, "fn_popupCallback", oOption);

        };

        //그리드 클릭(엑셀다운로드)
        this.grd_edmList_oncellclick = function(obj,e)
        {
        	if(e.col == this.grd_edmList.getBindCellIndex("body", "OPCNT")) {

        		var statsCD = this.ds_edmList.getColumn(obj.currentrow, "DOWN_PROC_STATS_CD");
        		var fileNm = this.ds_edmList.getColumn(obj.currentrow, "FILE_NM");
        		var expiredYn = this.ds_edmList.getColumn(obj.currentrow, "EXPIRED_YN");

        		if(statsCD =='3' && expiredYn == 'N'){

        				if(this.confirm(fileNm + " 파일을 저장 하시겠습니까?")) {

        					this.FileDownTransfer.clearPostDataList();
        					this.FileDownTransfer.set_downloadfilename(this.ds_edmList.getColumn(e.row, "FILE_NM"));	//runtime 전용 프로퍼티
        					this.FileDownTransfer.setPostData("filePath",this.ds_edmList.getColumn(e.row, "FILE_PATH"));
        					this.FileDownTransfer.setPostData("fileName",this.ds_edmList.getColumn(e.row, "FILE_NM"));
        					this.FileDownTransfer.download('/co/file-large-download.do');

        			}

        		}

        	}

        };

        //레이아웃 저장 버튼
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_edmList", this.grd_edmList.getCurFormatString());
        };

        //레이아웃 초기화 버튼
        this.btn_layoutReset_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_edmList");
        	this.grd_edmList.set_formats(this.grd_edmList.uOrgFormat);
        };

        //목록 엑셀다운로드 버튼(그리드 다운로드)
        this.btn_excelDownload_onclick = function(obj,e)
        {
        	var sFileName = "EDM타겟목록_EXCEL_EXPORT";
        			var aGrid = [this.grd_edmList];
        			var aSht  = ["EDM"];

        			var oParam = {form:this, grid:aGrid, fileName:sFileName, sheetName:aSht};
        			this.gfn_exportExcel(oParam);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_layoutReset.addEventHandler("onclick",this.btn_layoutReset_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_excelDownload.addEventHandler("onclick",this.btn_excelDownload_onclick,this);
            this.grd_edmList.addEventHandler("oncellclick",this.grd_edmList_oncellclick,this);
            this.btn_write.addEventHandler("onclick",this.btn_write_onclick,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
        };
        this.loadIncludeScript("SSP_BO_ED_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
