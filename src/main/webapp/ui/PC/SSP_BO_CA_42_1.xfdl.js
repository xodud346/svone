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
            this.set_titletext("내부최저판매가 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,642);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"codeList\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"USE_YN\">Y</Col><Col id=\"PRD_STD_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_intlLwstList", this);
            obj._setContents("<ColumnInfo><Column id=\"ADJ_YM\" type=\"string\" size=\"32\"/><Column id=\"PRD_ID\" type=\"string\" size=\"32\"/><Column id=\"PRD_NM\" type=\"string\" size=\"32\"/><Column id=\"INTL_LWST_SALSPRC\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CPRTCP_ID\" type=\"string\" size=\"32\"/><Column id=\"CPRTCP_NM\" type=\"undefined\" size=\"0\"/><Column id=\"UPDPSN_ID\" type=\"string\" size=\"32\"/><Column id=\"REG_RSN\" type=\"string\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"datetime\" size=\"17\"/><Column id=\"CURR_UNIT_CD\" type=\"string\" size=\"17\"/></ColumnInfo>");
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


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"ADJ_YM\" type=\"string\" size=\"32\"/><Column id=\"PRD_ID\" type=\"string\" size=\"32\"/><Column id=\"PRD_NM\" type=\"string\" size=\"32\"/><Column id=\"INTL_LWST_SALSPRC\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CPRTCP_ID\" type=\"string\" size=\"32\"/><Column id=\"CPRTCP_NM\" type=\"undefined\" size=\"0\"/><Column id=\"UPDPSN_ID\" type=\"string\" size=\"32\"/><Column id=\"REG_RSN\" type=\"string\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"datetime\" size=\"17\"/><Column id=\"CURR_UNIT_CD\" type=\"string\" size=\"17\"/><Column id=\"BSS_DTM\" type=\"string\" size=\"17\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","274",null,"333","4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dlvplcList","20","28",null,"257","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_intlLwstList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autosizingtype("row");
            obj.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"최저판매가 정산년월\"/><Cell col=\"1\" text=\"등록일시\"/><Cell col=\"2\" text=\"내부최저판매가\"/><Cell col=\"3\" text=\"판매통화\"/><Cell col=\"4\" text=\"최저판매가사업장ID\"/><Cell col=\"5\" text=\"최저판매가사업장\"/></Band><Band id=\"body\"><Cell text=\"bind:ADJ_YM\" calendardateformat=\"yyyy-MM\" displaytype=\"mask\" maskeditformat=\"####-##\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:UPD_DTM\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"2\" text=\"bind:INTL_LWST_SALSPRC\"/><Cell col=\"3\" text=\"bind:CURR_UNIT_CD\"/><Cell col=\"4\" text=\"bind:BZPLC_ID\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:BZPLC_NM\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","7","300","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("(총 0건, 1/N)");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_paging","7","289",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","205",null,"85","4",null,null,null,null,null,this);
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
            obj.set_text("등록일");
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

            obj = new Button("btn_init",null,"48","65","26","86",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button58",null,"48","60","26","22",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","20","170","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("■ 내부최저판매가 등록 이력");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Div("Div_top_info00","20","30",null,"140","4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","53",null,"32","66",null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static02","0","53","120","32",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("0");
            obj.set_text("산출기준일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static22_00","268","53","170","32",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("2");
            obj.set_text("내부최저판매가");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static29_00_00","129","54","181","2",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00","0","21","300","20",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("4");
            obj.set_text("■ 현재 기준판매가 기준 내부최저판매가");
            obj.set_cssclass("sta_WF_title01");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","84","120","32",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            obj.set_textAlign("center");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static02_01","119","53","150","32",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("6");
            obj.set_text("최저판매가 정산년월");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static22_00_00","437","53","103","32",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("7");
            obj.set_text("판매통화");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static22_00_00_00","709","53",null,"32","20",null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("8");
            obj.set_text("최저판매가사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","119","84","150","32",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            obj.set_textAlign("center");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","268","84","170","32",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            obj.set_textAlign("center");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_01","437","84","103","32",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            obj.set_textAlign("center");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_02","709","84",null,"32","20",null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            obj.set_textAlign("center");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static22_00_00_01","539","53","171","32",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("13");
            obj.set_text("최저판매가사업장ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_01_00","539","84","171","32",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            obj.set_textAlign("center");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Button("btn_select","47.00%","597","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("st_title","20","20","490","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("내부최저판매가 상세");
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

            obj = new BindItem("item0","Div_top_info00.form.Static03_00","text","ds_detail","BSS_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div_top_info00.form.Static03_00_00","text","ds_detail","ADJ_YM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div_top_info00.form.Static03_00_00_01","text","ds_detail","CURR_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div_top_info00.form.Static03_00_00_01_00","text","ds_detail","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div_top_info00.form.Static03_00_00_02","text","ds_detail","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_42_1.xfdl","PC::pcUtils.xjs");
        this.addIncludeScript("SSP_BO_CA_42_1.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CA_42_1.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 상품군계획매익률
          CREATION DATES : 2022.01.25
        *******************************************************/
        this.executeIncludeScript("PC::pcUtils.xjs"); /*include "PC::pcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.preSelectRowPosition = 0;
        this.isTab = true;


        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	var prdId = "";

        	if(typeof(this.parent.parent.parent.parent.prdId) == "string"){
        		prdId = this.parent.parent.parent.parent.prdId;
        		this.isTab = true;
        	}else if(typeof(this.parent.prdId) == "object" || typeof(this.parent.prdId) == "string"){
        		prdId = this.parent.prdId;
        		this.isTab = false;
        	}

        	this.Div00_00.form.cbo_inqPerdSpr.set_value("2");
        	this.fn_pcDateChage(this.Div00_00.form.cal_srchFrDt,this.Div00_00.form.cal_srchToDt, this.Div00_00.form.cbo_inqPerdSpr);

        	//부모창에서 넘긴 파라미터
        	this.ds_search.setColumn(0, "PRD_ID", prdId);

        	//조회함수
        	this.fn_doSearch(0);

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
             var sUrl = "/pc/intlLwst/selectIntlLwstPopupList.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_intlLwstList=ds_output ds_detail=ds_detail";
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
        			if(typeof(this.ds_detail.getColumn(0,"INTL_LWST_SALSPRC")) != "undefined"){
        				var lwstSalsprc = this.fn_AmountCommas(this.ds_detail.getColumn(0,"INTL_LWST_SALSPRC"));
        				this.Div_top_info00.form.Static03_00_00_00.set_text(lwstSalsprc);
        			}
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
        	//카테고리
        	this.ds_search.setColumn(0,"PRD_CATG_ID","");
        	this.ds_search.setColumn(0,"PRD_CATG_NM","");

        	//달력
        	this.Div00_00.form.cbo_inqPerdSpr.set_value("2");
        	this.fn_pcDateChage(this.Div00_00.form.cal_srchFrDt,this.Div00_00.form.cal_srchToDt, this.Div00_00.form.cbo_inqPerdSpr);

        	//사용여부
        	this.ds_search.setColumn(0,"USE_YN","Y");

        };

        this.Div00_grd_dlvplcList_oncellclick = function(obj,e)
        {
        	// 상세조회 팝업 호출
        	var dataSet = obj.getBindDataset();

        	if( e.col == 6 ) {
        // 		var params = {
        // 			detailMsg : dataSet.getColumn(e.row, "EXCEPT_DTLS")
        // 		};
        //
        // 		var options = {};
        // 		options.title = "Exception 상세 내역";
        //
        // 		this.gfn_openPopup("oprUntSinglePop", "CO_POP::exceptionDtsPopup.xfdl", params,  "", options);
        		alert("변경이력팝업 준비중...");
        	}
        };

        this.Div00_btn_insert_onclick = function(obj,e)
        {
        	alert("일괄업로드 준비중...");
        };

        this.Div00_btn_excel_onclick = function(obj,e)
        {
        	alert("엑셀다운로드 준비중...");
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
        	if(this.isTab){
        		this.parent.parent.parent.close();
        	}else{
        		this.close();
        	}

        };

        this.Div00_Button01_onclick = function(obj,e)
        {

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
            this.Div_top_info00.form.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.Div_top_info00.form.Static29_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CA_42_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
