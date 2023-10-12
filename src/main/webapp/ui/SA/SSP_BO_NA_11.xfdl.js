(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_11");
            this.set_titletext("배지 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BG_WGT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"BG_NM\"/><Col id=\"USE_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SSO_SVCE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BG_WGT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\"/><Col id=\"USE_YN_NM\">전체</Col></Row><Row><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col></Row><Row><Col id=\"USE_YN_NM\">미 사용</Col><Col id=\"USE_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_optrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgWgtYn", this);
            obj._setContents("<ColumnInfo><Column id=\"BG_WGT_YN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_WGT_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BG_WGT_YN_CD\"/><Col id=\"BG_WGT_YN_NM\">전체</Col></Row><Row><Col id=\"BG_WGT_YN_CD\">Y</Col><Col id=\"BG_WGT_YN_NM\">적용</Col></Row><Row><Col id=\"BG_WGT_YN_CD\">N</Col><Col id=\"BG_WGT_YN_NM\">미적용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"138","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","129","51",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","129","20",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","862","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("등록자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","20","51","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("기간");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-115","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-115","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bgNm","571","24","233","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"93","60","24","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"Static06:10","60","24","btn_search:4",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static08","303","55","9","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_inqPerdSprCd","461","55","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_inqPerdSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","20","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_useYn","Static01:10","24","200","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("USE_YN_NM");
            obj.set_codecolumn("USE_YN");
            obj.set_taborder("13");
            obj.set_text("전체");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_regpsnId","1002","24","96","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_regpsnNm","1102","24","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_regpsnPop","1236","24","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","431","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("배지명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_fromDate","159","55","140","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_toDate","316","55","140","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("StaticBgWgtYn","862","52","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("검색가중치 적용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_bgWgtYn","1003","51","253","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_bgWgtYn");
            obj.set_codecolumn("BG_WGT_YN_CD");
            obj.set_datacolumn("BG_WGT_YN_NM");
            obj.set_direction("vertical");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_paging","7",null,null,"38","23","38",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutReset",null,"140","100","28","21",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"140","100","28","btn_layoutReset:4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regist",null,"140","81","28","btn_layoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_bgList","20","btn_regist:10",null,null,"20","div_paging:30",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_bgList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"500\"/><Column size=\"180\"/><Column size=\"129\"/><Column size=\"129\"/><Column size=\"131\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"번호\"/><Cell col=\"1\" text=\"배지이미지\"/><Cell col=\"2\" text=\"배지명\"/><Cell col=\"3\" text=\"검색가중치 적용여부\"/><Cell col=\"4\" text=\"등록자 ID\"/><Cell col=\"5\" text=\"등록자\"/><Cell col=\"6\" text=\"등록일\"/><Cell col=\"7\" text=\"상태\" autosizecol=\"default\"/></Band><Band id=\"body\"><Cell text=\"bind:BG_SEQ\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"imagecontrol\" cursor=\"pointer\" color=\"#000000\" imagestretch=\"fixaspectratio\" expr=\"&quot;/co/file-download.do?docRegId=&quot; + DOC_REG_ID + &quot;&amp;docRegSeq=&quot; + DOC_REG_SEQ\"/><Cell col=\"2\" text=\"bind:BG_NM\" displaytype=\"decoratetext\" expr=\"BG_NM  == &apos;&apos; ? BG_NM : &quot;&lt;u v=&apos;true&apos;&gt;&quot;+BG_NM+&quot;&lt;/u&gt;&quot;\" color=\"#290ccf\"/><Cell col=\"3\" text=\"bind:BG_WGT_YN\" expr=\"BG_WGT_YN == &apos;Y&apos; ? &apos;적용&apos; : &apos;미적용&apos; \"/><Cell col=\"4\" text=\"bind:REGPSN_ID\"/><Cell col=\"5\" text=\"bind:REGPSN_NM\"/><Cell col=\"6\" text=\"bind:REG_DTM\" displaytype=\"normal\" color=\"#000000\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"7\" expr=\"USE_YN == &apos;Y&apos; ? &apos;사용&apos; : &apos;미사용&apos; \" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","150","300",null,null,"grd_bgList:10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("(총 0건, 0 / 0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00","0","118","1336","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"140","110","28","314",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_search.form.edt_bgNm","value","ds_search","BG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cbo_useYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_regpsnId","value","ds_search","REGPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.edt_regpsnNm","value","ds_search","REGPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.cal_fromDate","value","ds_search","FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cal_toDate","value","ds_search","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.rdo_bgWgtYn","value","ds_search","BG_WGT_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_11.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_NA_11.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 배지 목록
        CREATION DATES : 2022.02.22
        CREATER        : 이민호
        *******************************************************/
        /* 스크립트 인클루드 */
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.preSelectRowPosition = 0;

        //등록자 자동조회 위한 변후
        this.oprtrInfoCount = 0;
        this.selectRegpsnId = "";
        this.selectRegpsnNm = "";
        this.fv_oApp = nexacro.getApplication();
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//조회기간 셋(초기화 여부)
        	this.fn_setSearchDate("Y");

        	//조회함수
        	//this.fn_search(0);

        	//배지 검색가중치 적용여부 조건 세팅
        	this.div_search.form.rdo_bgWgtYn.set_index(0);
        };

        this.fn_onkeyup = function(obj,e)
        {
        	// CTRL+ENTER KEY
        	if(e.keycode == 13 && e.ctrlkey){
        		this.btn_search_onclick();
        	}
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(page)
        {
        	var sSvcId = "selectBgList";
        	var sUrl = "/sa/bg/select-bg-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_bgList=ds_output1";
        	var arg;
        	var callback = "fn_callback";

        	// 조회버튼 클릭시 페이징 초기화 시킨다.
        	if( page == 0 ) {
        		this.div_paging.uPage=1;
        		this.div_paging.uPageNum=0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.div_paging.uPageRowCnt);
        	}

        	this.ds_search.setColumn(0,"CO_CD", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        //공통코드조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_inqPerdSprCd=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //팝업 입력창에 입력 후 엔터 칠 경우.
        this.fn_oprtrInfoSearch = function() {
        	var sSvcId = "selectMbrOprtrInfoList";
        	var sUrl = "/co/popup/select-mbr-oprtr-info-list.do";
        	var inDs = "ds_search=ds_optrInfo";
        	var outDs = "";
        	var arg = "";

        	this.ds_optrInfo.setColumn(0, "LANG_CD", "KO");
        	this.ds_optrInfo.setColumn(0, "EMP_NO", this.ds_search.getColumn(0, "REGPSN_ID"));
        	this.ds_optrInfo.setColumn(0, "OPRTR_NM", this.ds_search.getColumn(0, "REGPSN_NM"));

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        }
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //조회 트랜잭션 콜백함수
        this.fn_callback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "selectBgList"){
        		this.preSelectRowPosition = 0;

        		// 조회 카운트가 없으면 데이터셋이 날라감으로 강제 설정
        //      if( this.ds_bgList.rowcount == 0 ) {
        //          this.ds_bgList.copyData(this.ds_bgListCopy);
        //      }

        		//paging 처리
        		this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.div_paging.uPageRowCnt, "fn_pageCallback");

        	} else if( svcID == "commonCodeSearch" ) {
        		this.div_search.form.cmb_inqPerdSprCd.set_index(1);
        	} else if( svcID == "selectMbrOprtrInfoList" ) {
        		if( this.oprtrInfoCount > 1 ) {
        			this.fn_popup("oprtrInfoPop");
        		} else if( this.oprtrInfoCount == 1 ) {
        			this.ds_search.setColumn(0, "REGPSN_ID", this.selectRegpsnId);
        			this.ds_search.setColumn(0, "REGPSN_NM", this.selectRegpsnNm);
        		} else {
        			alert(this.fn_getMessage("ERRN000035")); // 검색된 내용이 없습니다.
        		}
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

        	//var sTotText = "(총 "+ this.totalCount+"건, "+ oPaging.uPage +" / "+ oPaging.uPageCnt +"P)";
        	var sTotText = "(<b v='true'>총 "+ this.totalCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.totalPageCount.set_text(sTotText);
        }

        //정렬 콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_bgList"){
        		oSortInfo = this.grd_bgList.uaSortInfo;

        		this.ds_search.setColumn(0,"SORT_COLUMN", oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE", oSortInfo.status);

        		this.fn_search();
        	}
        };

        //팝업콜백
        this.fn_popupCallback = function(sPopupId, sRetValue) {
        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";

        	if(sRetValue == undefined){
        		return;
        	}else{
        		resData = JSON.parse(sRetValue);
        	}

        	//등록자 팝업
        	if( sPopupId == "oprtrInfoPop" ){
        		this.ds_search.setColumn(0, "REGPSN_ID", resData.OPRTR_ID);
        		this.ds_search.setColumn(0, "REGPSN_NM", resData.OPRTR_NM);
        	}

        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function()
        {
        	//grid 초기 설정
        	this.grd_bgList.uSortFlag = "false";
        	this.grd_bgList.uServerSortFlag = "true";
        	this.grd_bgList.uSortCallback = "fn_sortCallback";
        	this.grd_bgList.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 20;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_bgList";
        	this.grd_bgList.uRightMouse = "true";
        	this.grd_bgList.uPersonalFlag = "true";
        	this.grd_bgList.uDefaultFormat = "BG_SEQ,SSO_SVCE_URL,BG_NM,REGPSN_ID,REGPSN_NM,REG_DTM,USE_YN";
        }

        this.cfn_personalPopupClose = function(sRet)
        {
        	this.grd_bgList.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //조회기간 재설정
        this.fn_setSearchDate = function(resetYn) {

        	var term = this.div_search.form.cmb_inqPerdSprCd.value;
        	if(resetYn == "Y") {
        		term = 2;
        	}
        	var objDate = new Date();
        	var sToday = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');

        	/*
        	1	1일
        	2	1주일
        	3	2주일
        	4	1개월
        	5	3개월
        	6	6개월
        	7	1년
        	*/
        	if( term == undefined ) term = "2";

        	if( term == "1" ) {
        		objDate.setDate(objDate.getDate() );
        	} else if( term == "2" ) {
        		objDate.setDate(objDate.getDate() -6);
        	} else if( term == "3" ) {
        		objDate.setDate(objDate.getDate() -13);
        	} else if( term == "4" ) {
        		objDate.setMonth(objDate.getMonth() -1);
        		objDate.setDate(objDate.getDate() +1);
        	} else if( term == "5" ) {
        		objDate.setMonth(objDate.getMonth() -3);
        		objDate.setDate(objDate.getDate() +1);
        	} else if( term == "6" ) {
        		objDate.setMonth(objDate.getMonth() -6);
        		objDate.setDate(objDate.getDate() +1);
        	} else if( term == "7" ) {
        		objDate.setMonth(objDate.getMonth() -12);
        		objDate.setDate(objDate.getDate() +1);
        	}

        	this.div_search.form.cal_fromDate.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
        	this.div_search.form.cal_toDate.set_value(sToday);
        }

        //팝업호출
        this.fn_popup = function(type) {
        	var objParam = {coCd : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        				   , empNo : this.div_search.form.edt_regpsnId.value
        				   , oprtrNm : this.div_search.form.edt_regpsnNm.value};

        	if( type == "oprtrInfoPop" ){ // 등록자 조회 팝업
        		objParam.empNp = this.ds_search.getColumn(0, "REGPSN_ID");
        		objParam.oprtrNm = this.ds_search.getColumn(0, "REGPSN_NM");
        		this.gfn_openPopup("oprtrInfoPop", "CO_POP::SSP_BO_PP_27.xfdl", objParam, "fn_popupCallback");

        	}
        }

        /**
         * 이미지 불러오기
         */
        this.fn_getImage = function(sVal)
        {
        	var imageUrl = "";

        	imageUrl = nexacro.getApplication().gds_sspHosts.getColumn(0, "HOST_SSP") + "/co/file-download.do?docRegId=" + sVal + "&docRegSeq=1";

        	//trace(imageUrl);

        	return imageUrl;
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //초기화 버튼
        this.btn_reset_onclick = function(obj,e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.div_search.form.cbo_useYn.set_index(0);
        	this.div_search.form.cmb_inqPerdSprCd.set_index(1);
        	this.div_search.form.rdo_bgWgtYn.set_index(0);

        	this.fn_setSearchDate("Y");
        };

        //조회 버튼
        this.btn_search_onclick = function(obj,e)
        {
        	if(this.div_search.form.cal_fromDate.value > this.div_search.form.cal_toDate.value){
        		alert(this.fn_getMessage("ERRN000102")); // 종료일이 시작일보다 작습니다.
        		this.fn_setSearchDate();
        		return;
        	}
        	this.fn_search(0);
        };

        //등록버튼
        this.btn_regist_onclick = function(obj,e)
        {
        	var objParam = {
        			pageNum:this.div_paging.uPage
        			,coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        		};
        	this.gfn_openPopup("bgRegistPop", "SA::SSP_BO_NA_12.xfdl", objParam);
        };

        //그리드 ONCLICK
        this.grd_bgList_oncellclick = function(obj,e)
        {
        	if(e.col == this.grd_bgList.getBindCellIndex("body", "BG_NM")) {
        		//this.go("SA::ssp_bo_na_13.xfdl");
        		var objDs = obj.getBindDataset();
        		var intRow = objDs.rowposition;
        		var objParam = {
        			coCd:this.ds_bgList.getColumn(intRow, "CO_CD")
        			, bgSeq:this.ds_bgList.getColumn(intRow, "BG_SEQ")
        			, pageNum:this.div_paging.uPage
        		};
        		this.gfn_openPopup("BgDetailPop", "SA::SSP_BO_NA_13.xfdl", objParam);
        	}
        };

        //조회 기간 변경 이벤트
        this.cmb_inqPerdSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_setSearchDate();
        };

        //등록자 팝업
        this.btn_regpsnPop_onclick = function(obj,e)
        {
        	this.fn_popup("oprtrInfoPop");
        };

        //레이아웃 저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_bgList", this.grd_bgList.getCurFormatString());
        };

        //레이아웃 초기화
        this.btn_layoutReset_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_bgList");
        	this.grd_bgList.set_formats(this.grd_bgList.uOrgFormat);
        };

        //조회영역 엔터 칠 경우
        this.div_search_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		if( e.fromobject.valueOf() == "[object Edit]" ) {
        			if( e.fromobject.id == "edt_regpsnId" || e.fromobject.id == "edt_regpsnNm") {
        				this.fn_oprtrInfoSearch();
        			} else {
        				this.fn_search(0);
        			}
        		}
        	}
        };

        this.btn_excel_onclick = function(obj,e)
        {
        	this.ofn_exportExcel({form:this, grid:this.grd_bgList, fileName:"배지목록"});
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.div_search.addEventHandler("onkeyup",this.div_search_onkeyup,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.div_search.form.cmb_inqPerdSprCd.addEventHandler("onitemchanged",this.cmb_inqPerdSprCd_onitemchanged,this);
            this.div_search.form.btn_regpsnPop.addEventHandler("onclick",this.btn_regpsnPop_onclick,this);
            this.div_search.form.Static03.addEventHandler("onclick",this.Div_top_info_Static22_00_onclick,this);
            this.btn_layoutReset.addEventHandler("onclick",this.btn_layoutReset_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_regist.addEventHandler("onclick",this.btn_regist_onclick,this);
            this.grd_bgList.addEventHandler("oncellclick",this.grd_bgList_oncellclick,this);
            this.totalPageCount.addEventHandler("onclick",this.totalPageCount_onclick,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excel_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_NA_11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
