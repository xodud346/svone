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
            this.set_titletext("진열상태 변경이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"codeList\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"USE_YN\">Y</Col><Col id=\"PRD_STD_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_intlLwstList", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"BSS_SALSPRC_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"LAG_DISP_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AUTO_LOGIC_EM_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_CHGRSN\" type=\"STRING\" size=\"32\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_INFO_PSB_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SAFT_INVN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BSS_SALSPRC_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_USE_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj = new Div("Div00","0","115",null,"455","4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dlvplcList","20","56",null,"346","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_intlLwstList");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_autosizingtype("col");
            obj.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");
            obj.set_autosizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"122\"/><Column size=\"132\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"상품ID\"/><Cell col=\"1\" text=\"등록일시\"/><Cell col=\"2\" text=\"운영단위ID\"/><Cell col=\"3\" text=\"운영단위\"/><Cell col=\"4\" text=\"S-MRO상품상태\"/><Cell col=\"5\" text=\"SSP상품상태\"/><Cell col=\"6\" text=\"안전재고상태\"/><Cell col=\"7\" text=\"공급가능상태\"/><Cell col=\"8\" text=\"진열상태유효기간(From)\"/><Cell col=\"9\" text=\"진열상태유효기간(To)\"/><Cell col=\"10\" text=\"자동로직체크여부\"/><Cell col=\"11\" text=\"SSP진열상태\"/><Cell col=\"12\" text=\"진열상태변경사유\"/><Cell col=\"13\" text=\"변경담당자ID\"/><Cell col=\"14\" text=\"변경담당자\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ID_VIEW\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:REG_DTM\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"2\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"3\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"4\" text=\"bind:MRO_PRD_STATS_CD_NM\"/><Cell col=\"5\" text=\"bind:PRD_USE_YN_NM\"/><Cell col=\"6\" text=\"bind:SAFT_INVN_YN\" expr=\"SAFT_INVN_YN==&apos;Y&apos;?&apos;초과&apos;:&apos;이하&apos;\"/><Cell col=\"7\" text=\"bind:PURG_INFO_PSB_YN\" expr=\"PURG_INFO_PSB_YN==&apos;N&apos;?&apos;공급불가&apos;:&apos;공급가능&apos;\"/><Cell col=\"8\" text=\"bind:DISP_RSLT_STR_DTM\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"9\" text=\"bind:DISP_RSLT_END_DTM\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"10\" text=\"bind:AUTO_LOGIC_EM_YN\"/><Cell col=\"11\" text=\"bind:DISP_STATS_NM\"/><Cell col=\"12\" text=\"bind:DISP_STATS_CHGRSN\"/><Cell col=\"13\" text=\"bind:REGPSN_ID\"/><Cell col=\"14\" text=\"bind:OPRTR_NM\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","35","300","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("(총 0건, 1 / 0)");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_paging","7","406",null,"38","2",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_viewCount",null,"25","104","28","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_type("dropdown");
            var Div00_form_cmb_viewCount_innerdataset = new nexacro.NormalDataset("Div00_form_cmb_viewCount_innerdataset", obj);
            Div00_form_cmb_viewCount_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20개씩</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500개씩</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1,000개씩</Col></Row><Row><Col id=\"codecolumn\">5000</Col><Col id=\"datacolumn\">5,000개씩</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10,000개씩</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_cmb_viewCount_innerdataset);
            obj.set_text("1,000개씩");
            obj.set_value("1000");
            obj.set_index("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"25","110","28","cmb_viewCount:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","50",null,"85","4",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","40","1",null,"32","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static06","20","1","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("조회일시");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_srchFrDt","159","5","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd ");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static59","303","6","9","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("~");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_srchToDt","316","5","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("cbo_inqPerdSpr","461","5","100","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_inqPerdSpr");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button58",null,"48","60","26","22",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("btn_select","47.22%","555","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("st_title","20","20","490","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("진열상태 이력");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,600,this,function(p){});
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
        this.addIncludeScript("SSP_BO_CA_31.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_CA_31.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_CA_31.xfdl","PC::pcUtils.xjs");
        this.registerScript("SSP_BO_CA_31.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 상품군계획매익률
          CREATION DATES : 2022.01.25
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("PC::pcUtils.xjs"); /*include "PC::pcUtils.xjs"*/;
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
        	var prdId = this.parent.prdId;
        	var bzplcId = this.parent.bzplcId;

        	//var prdId =  '000000000004530517';

        	this.ds_search.setColumn(0, "PRD_ID", prdId);

        	if(typeof(this.parent.bzplcId) != 'undefined'){
        		this.ds_search.setColumn(0, "BZPLC_ID", bzplcId);
        	}

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
             var sUrl = "/pc/popup/select-disp-history-list.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_intlLwstList=ds_output";
             var arg;
             var callback = "fn_received";

        	 // 조회버튼 클릭시 페이징 초기화 시킨다.
        	 if( page == 0 ) {
        		this.Div00.form.div_paging.uPage=1;
        		this.Div00.form.div_paging.uPageNum=0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.Div00.form.cmb_viewCount.value);
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

        			if(typeof(this.parent.bzplcId) == 'undefined'){
        				this.Div00.form.grd_dlvplcList.setFormatColProperty(2,"size",0);
        				this.Div00.form.grd_dlvplcList.setFormatColProperty(3,"size",0);
        			}

        			//paging 처리
        			this.Div00.form.div_paging.form.cfn_createPage(this.Div00.form.div_paging, this.totalCount, this.Div00.form.cmb_viewCount.value, "fn_pageCallback");

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
        		this.ds_search.setColumn(0,"ROW_COUNT", this.Div00.form.cmb_viewCount.value);
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
        	this.FileDownTransfer.setPostData("filePath",this.ds_intlLwstList.getColumn(0, "ATFL_STOR_PATH"));
        	this.FileDownTransfer.setPostData("fileOrgName",this.ds_intlLwstList.getColumn(0, "ORI_ATFL_NM"));
        	this.FileDownTransfer.setPostData("fileName",this.ds_intlLwstList.getColumn(0, "ATFL_NM"));
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
        	this.fn_doSearch(0);
        };


        this.Div00_00_btn_init_onclick = function(obj,e)
        {

        	//달력
        	this.ds_search.setColumn(0,"STR_DTM","");
        	this.ds_search.setColumn(0,"END_DTM","");
        	this.Div00_00.form.cbo_inqPerdSpr.set_value("");

        };

        this.Div00_grd_dlvplcList_oncellclick = function(obj,e)
        {
        	if(e.col == this.Div00.form.grd_dlvplcList.getBindCellIndex("body", "ATFL_NM")) {
        		var objDs = obj.getBindDataset();
        		var intRow = objDs.rowposition;
        		if(!this.gfn_isNull(this.ds_intlLwstList.getColumn(intRow, "ATFL_NM"))) {
        			//if(this.confirm(this.ds_intlLwstList.getColumn(intRow, "ATFL_NM") + " 파일을 저장 하시겠습니까?")) {
        			if(this.confirm(this.fn_getMessage("ERRP000241", this.ds_intlLwstList.getColumn(intRow, "ATFL_NM")))) {
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
        	this.close();
        };

        this.Div00_Button01_onclick = function(obj,e)
        {
        	if(this.ds_intlLwstList.getRowCount() > 0){
        		this.ofn_exportExcel({form:this, grid:this.Div00.form.grd_dlvplcList, fileName:"진열상태변경이력"});
        	}else{
        		//alert("다운로드 가능한 데이터가 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000205"));
        	}
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
            this.Div00.form.Button01.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Div00_00.form.Static31.addEventHandler("onclick",this.Div00_00_Static31_onclick,this);
            this.Div00_00.form.cal_srchFrDt.addEventHandler("onchanged",this.Div00_00_cal_srchFrDt_onchanged,this);
            this.Div00_00.form.cal_srchToDt.addEventHandler("onchanged",this.Div00_00_cal_srchToDt_onchanged,this);
            this.Div00_00.form.cbo_inqPerdSpr.addEventHandler("onitemchanged",this.Div00_00_cbo_inqPerdSpr_onitemchanged,this);
            this.Div00_00.form.Button58.addEventHandler("onclick",this.Div00_00_Button58_onclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_CA_31.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
