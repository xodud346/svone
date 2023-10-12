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
            this.set_titletext("참조가격");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,642);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"codeList\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"USE_YN\">Y</Col><Col id=\"PRD_STD_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_intlLwstList", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"CHGRQST_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"32\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"32\"/><Column id=\"CHG_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRE_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CONTEXT_REAL_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\"/><Col id=\"USE_YN_NM\">전체</Col></Row><Row><Col id=\"USE_YN_NM\">사용</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"USE_YN\">N</Col><Col id=\"USE_YN_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdYn", this);
            obj._setContents("<ColumnInfo><Column id=\"STD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"STD_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STD_YN\"/><Col id=\"STD_YN_NM\">전체</Col></Row><Row><Col id=\"STD_YN_NM\">표준</Col><Col id=\"STD_YN\">Y</Col></Row><Row><Col id=\"STD_YN\">N</Col><Col id=\"STD_YN_NM\">비표준</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSpr", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","125",null,"515","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dlvplcList","0","26",null,"407","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_intlLwstList");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_autosizingtype("col");
            obj.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");
            obj.set_autosizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"115\"/><Column size=\"105\"/><Column size=\"87\"/><Column size=\"88\"/><Column size=\"50\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"95\"/><Column size=\"95\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"등록일시\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"구분\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"기존가격\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"변경가격\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"판매통화\" autosizecol=\"limitmin\"/><Cell col=\"5\" text=\"변경사유\" autosizecol=\"limitmin\"/><Cell col=\"6\" text=\"증빙첨부\" autosizecol=\"limitmin\"/><Cell col=\"7\" text=\"변경담당자ID\" autosizecol=\"limitmin\"/><Cell col=\"8\" text=\"변경담당자\" autosizecol=\"limitmin\"/></Band><Band id=\"body\"><Cell text=\"bind:REG_DTM\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"bind:COM_DTL_CD_NM\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"expr:PRE_PRC==&quot;0&quot;?&quot;&quot;:PRE_PRC\" autosizecol=\"limitmin\" displaytype=\"number\"/><Cell col=\"3\" text=\"expr:CHG_PRC==&quot;0&quot;?&quot;&quot;:CHG_PRC\" autosizecol=\"limitmin\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:CURR_UNIT_CD\" autosizecol=\"limitmin\"/><Cell col=\"5\" text=\"bind:CHGRQST_CTS\" autosizecol=\"limitmin\"/><Cell col=\"6\" text=\"bind:ATFL_NM\" autosizecol=\"limitmin\"/><Cell col=\"7\" text=\"bind:OPRTR_ID\" autosizecol=\"limitmin\"/><Cell col=\"8\" text=\"bind:OPRTR_NM\" autosizecol=\"limitmin\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("totalPageCount","0","5","300","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("(총 0건, 1 / 0)");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_paging","7","437",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","55",null,"75","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","0","1",null,"32","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static06","0","1","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("조회일시");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_srchFrDt","139","5","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd ");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static59","283","6","9","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("~");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_srchToDt","296","5","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("cbo_inqPerdSpr","441","5","100","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_inqPerdSpr");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"48","65","26","65",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button58",null,"48","60","26","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_select");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("btn_select","47.00%","596","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("st_title","0","20","490","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("참조가격 상세");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,642,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","Div00_00.form.cal_srchFrDt","value","ds_search","STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00_00.form.cal_srchToDt","value","ds_search","END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_28_1.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_CA_28_1.xfdl","PC::pcUtils.xjs");
        this.addIncludeScript("SSP_BO_CA_28_1.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CA_28_1.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 상품군계획매익률
          CREATION DATES : 2022.01.25
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
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

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//부모창에서 넘긴 파라미터
        	var prdId = this.parent.parent.parent.parent.prdId;
        	//prdId =  '000000000001857031';

        	this.ds_search.setColumn(0, "PRD_ID", prdId);

        	//단축키 함수 호출
        	this.fn_regShortCutMethod();
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_doSearch = function(page)
        {
        	 var sSvcId = "selectIntlLwstList";
             var sUrl = "/pc/prd-prc-chg/select-exprd-prc-hst-list.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_intlLwstList=ds_output";
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
        		case 'selectIntlLwstList' :

        			if( this.ds_intlLwstList.rowcount == 0 ) {
        				//this.ds_intlLwstList.copyData(this.ds_dlvplcListCopy);
        				this.Div00.form.grd_dlvplcList.set_nodatatext("조회 결과가 없습니다.");

        			}
        			//paging 처리
        			this.Div00.form.div_paging.form.cfn_createPage(this.Div00.form.div_paging, this.totalCount, 10, "fn_pageCallback");

        		break;

        		case "commonCodeSearch":

        		    this.ds_inqPerdSpr.insertRow(0);
        			this.ds_inqPerdSpr.setColumn(0,"COM_DTL_CD","");
        			this.ds_inqPerdSpr.setColumn(0,"COM_DTL_CD_NM","전체");
        			this.Div00_00.form.cbo_inqPerdSpr.set_value("2");
        			this.fn_pcDateChage(this.Div00_00.form.cal_srchFrDt,this.Div00_00.form.cal_srchToDt, this.Div00_00.form.cbo_inqPerdSpr);

        			//조회함수
        	this.fn_doSearch(0);

        			break;

        		default :
        		break;
        	}


        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){

        	var oPaging = this.Div00.form.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", 10);
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
        	this.Div00.form.div_paging.uPageRowCnt = 10;
        	this.Div00.form.div_paging.uPageCnt = 0;
        	this.Div00.form.div_paging.uTotCount = 0;
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

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
        	}

        	return sReturn;
        }

        // 파일 다운로드
        this.downloadfile = function(intRow) {
        	this.FileDownTransfer.clearPostDataList();
        	this.FileDownTransfer.set_downloadfilename(this.ds_intlLwstList.getColumn(intRow, "ATFL_NM"));	//runtime 전용 프로퍼티
        	this.FileDownTransfer.setPostData("filePath",this.ds_intlLwstList.getColumn(intRow, "ATFL_STOR_PATH"));
        	this.FileDownTransfer.setPostData("fileOrgName",this.ds_intlLwstList.getColumn(intRow, "ORI_ATFL_NM"));
        	this.FileDownTransfer.setPostData("fileName",this.ds_intlLwstList.getColumn(intRow, "ATFL_NM"));

        	this.FileDownTransfer.setPostData("docRegId",this.ds_intlLwstList.getColumn(intRow, "DOC_REG_ID"));
        	this.FileDownTransfer.setPostData("docRegSeq",this.ds_intlLwstList.getColumn(intRow, "DOC_REG_SEQ"));

        	this.FileDownTransfer.download('/co/file-download.do');
        };

        this.fn_AmountCommas = function(val){ //세자리마다',' 적용
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
        }

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodESC("btn_select_onclick");
        	this.fn_regMethodCtrlENTER("Div00_00_Button58_onclick");
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        this.Div00_00_Button58_onclick = function(obj,e)
        {
        	this.fn_doSearch(1);
        };


        this.Div00_00_btn_init_onclick = function(obj,e)
        {

        	//달력
        	this.Div00_00.form.cbo_inqPerdSpr.set_value("2");
        	this.fn_pcDateChage(this.Div00_00.form.cal_srchFrDt,this.Div00_00.form.cal_srchToDt, this.Div00_00.form.cbo_inqPerdSpr);

        };

        this.Div00_grd_dlvplcList_oncellclick = function(obj,e)
        {
        	if(e.col == this.Div00.form.grd_dlvplcList.getBindCellIndex("body", "ATFL_NM")) {
        		var objDs = obj.getBindDataset();
        		var intRow = objDs.rowposition;
        		if(!this.gfn_isNull(this.ds_intlLwstList.getColumn(intRow, "ATFL_NM"))) {
        			//if(this.confirm(this.ds_intlLwstList.getColumn(intRow, "ATFL_NM") + " 파일을 저장 하시겠습니까?")) {
        			if(this.confirm(this.fn_getMessage("ERRP000241",this.ds_intlLwstList.getColumn(intRow, "ATFL_NM")))) {
        				this.downloadfile(intRow);
        			}
        		}
        	}
        }


        this.Div00_btn_excel_onclick = function(obj,e)
        {
        	//alert("엑셀다운로드 준비중...");
        };

        this.Div00_00_cbo_inqPerdSpr_onitemchanged = function(obj,e)
        {
        	this.fn_pcDateChage(this.Div00_00.form.cal_srchFrDt,this.Div00_00.form.cal_srchToDt, this.Div00_00.form.cbo_inqPerdSpr);
        };

        this.Div00_00_cal_srchFrDt_onchanged = function(obj,e)
        {
        	this.fn_pcDateValidate(this.Div00.form.cal_srchFrDt, this.Div00.form.cal_srchToDt);
        };

        this.Div00_00_cal_srchToDt_onchanged = function(obj,e)
        {
        	this.fn_pcDateValidate(this.Div00_00.form.cal_srchFrDt,this.Div00_00.form.cal_srchToDt);
        };

        this.btn_select_onclick = function(obj,e)
        {
        	this.parent.parent.parent.close();
        };


        this.dlvplcMngList_onkeyup = function(obj,e)
        {
        	// 단축키 등록
        	this.fn_processKey(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.dlvplcMngList_onkeyup,this);
            this.Div00.form.grd_dlvplcList.addEventHandler("oncellclick",this.Div00_grd_dlvplcList_oncellclick,this);
            this.Div00.form.totalPageCount.addEventHandler("onclick",this.totalPageCount_onclick,this);
            this.Div00_00.form.Static31.addEventHandler("onclick",this.Div00_00_Static31_onclick,this);
            this.Div00_00.form.cal_srchFrDt.addEventHandler("onchanged",this.Div00_00_cal_srchFrDt_onchanged,this);
            this.Div00_00.form.cal_srchToDt.addEventHandler("onchanged",this.Div00_00_cal_srchToDt_onchanged,this);
            this.Div00_00.form.cbo_inqPerdSpr.addEventHandler("onitemchanged",this.Div00_00_cbo_inqPerdSpr_onitemchanged,this);
            this.Div00_00.form.btn_init.addEventHandler("onclick",this.Div00_00_btn_init_onclick,this);
            this.Div00_00.form.Button58.addEventHandler("onclick",this.Div00_00_Button58_onclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_CA_28_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
