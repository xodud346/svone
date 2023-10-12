(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CN_01");
            this.set_titletext("New Form");
            this.set_cssclass("div_WF_SearchAreaWhite");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,843);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"TGT_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TERM\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"POPUP_YN\">ALL</Col><Col id=\"DATE_TYPE\">REG</Col><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"DATE_TERM\">1</Col><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTCC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NOTCC_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTCC_INQ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTCC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NOTCC_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTCC_INQ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupYN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ALL</Col><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_trem", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnit", this);
            obj._setContents("<ColumnInfo><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_origin", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"TGT_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TERM\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"POPUP_YN\">ALL</Col><Col id=\"DATE_TYPE\">REG</Col><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"DATE_TERM\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab00","20","20",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("공지사항 등록");
            obj.set_url("PUB_GUIDE::guideProductListTab.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("메뉴얼 등록");
            obj.set_url("PUB_GUIDE::guideProductListTab.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv3","364","905","330","230",null,null,null,null,null,null,this);
            obj.getSetter("positionstep").set("0");
            obj.set_background("#fffff");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("searchStartDate","6","10","149","172",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_value("");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Calendar("searchEndDate","165","10","149","172",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_confirm","99","192","60","24",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("3");
            obj.set_text("Confirm");
            obj.getSetter("uWord").set("popup.ok");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_cancel","169","192","60","24",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("2");
            obj.set_text("Cancel");
            obj.getSetter("uWord").set("popup.cancel");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","20","0","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","20","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01",null,"20","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20",null,"20","20",null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","20","50","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","20","96","20","10",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_01","1349","0","450",null,null,"-212",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","0","0",null,"21","0",null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("0");
            obj.set_text("< 변경이력 >");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            obj.set_textAlign("center");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static63_00","0","30",null,"21","0",null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("1");
            obj.set_text("220308   변경이력 작성");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("12px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            this.Div00_01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,843,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Tab00.Tabpage1.form.div_search.form.POPUP_YN","value","ds_search","POPUP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Tab00.Tabpage1.form.div_search.form.SEARCH_WORD","value","ds_search","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Tab00.Tabpage1.form.div_search.form.DATE_TYPE","value","ds_search","DATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Tab00.Tabpage1.form.div_search.form.FROM_DATE","value","ds_search","FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Tab00.Tabpage1.form.div_search.form.TO_DATE","value","ds_search","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Tab00.Tabpage1.form.div_search.form.DATE_TERM","value","ds_search","DATE_TERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Tab00.Tabpage1.form.div_search.form.TARGET_VALUE","value","ds_search","TARGET_VALUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Tab00.Tabpage1.form.div_search.form.REGPSN_ID","value","ds_search","REGPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Tab00.Tabpage1.form.div_search.form.Radio00","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","PUB_GUIDE::guideProductListTab.xfdl");
        };
        
        // User Script
        this.registerScript("guideTabSearch.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_CN_01
        /* 작 성 일 자 : 2022/02/15
        /* 작  성   자 : 이성민
        /* 설       명 : 공지사항
        /***********************************************************/


        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;	//전체 카운트
        this.noticeTab = this.Tab00.Tabpage1.form;
        this.noticeForm = this.noticeTab.div_search.form;	//검색영역 div

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//콤보박스 기본값 초기화
        	//this.noticeForm.DATE_TYPE.set_index(0);


        	//라디오 초기값 설정.
        	//this.ds_popupYN.setColumn(0, "CODE", "ALL");

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//초기 조회기간
        	this.fn_setSearchDate();

        	//검색 초기값 설정
        	this.ds_search_origin.copyData(this.ds_search);

        	//조회
        	this.fn_search(0);
        };



        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function(page) {
        	 var sSvcId = "selectNotice";
             var sUrl = "/co/selectNoticeList.do";
        	 var inDs = "ds_search=ds_search ds_oprUnit=ds_oprUnit"
             var outDs = "ds_list=ds_output";
             var arg;
             var callback = "fn_callBack";

        	 // 조회버튼 클릭시 페이징 초기화 시킨다.
        	 if( page == 0 ) {

        		this.noticeTab.div_paging.uPage=1;
        		this.noticeTab.div_paging.uPageNum=0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);

        		oSortInfo = this.noticeTab.grd_notice.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN", "");
        		this.ds_search.setColumn(0,"SORT_TYPE", "");
        	 }

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }


        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/selectCommonCodeList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_trem=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg){
        	if(svcID == "selectNotice"){
        		//trace(this.ds_sampleList.saveXML());

        		// 조회 카운트가 없으면 데이터셋이 날라감으로 강제 설정
        		if( this.ds_list.rowcount == 0 ) {
        			this.ds_list.copyData(this.ds_list_copy);
        		}

        		//paging 처리
        		//this.noticeTab.div_paging.form.cfn_createPage(this.noticeTab.div_paging, this.totalCount, this.fv_oApp.gv_pageViewCnt, "fn_pageCallback");
        		this.noticeTab.div_paging.form.cfn_createPage(this.noticeTab.div_paging, this.totalCount, this.fv_oApp.gv_pageViewCnt, "fn_pageCallback");
        		//this.div_paging.form.cfn_createPage(this.div_paging,1912,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
        	} else if( svcID == "commonCodeSearch" ) {
        		this.noticeForm.DATE_TERM.set_index(0);
        	}
        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.noticeTab.div_paging;

        	if(sFlag){
        		//this.ds_search.setColumn(0,"START_NUM", (oPaging.uPageNum == 0 || oPaging.uPageNum == 1 ? 0 : ( oPaging.uPageNum -1 ) * 10));
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		this.fn_search();
        	}

        	var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.noticeTab.totalPageCount.set_text(sTotText);
        }

        //정렬 콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_notice"){
        		oSortInfo = this.noticeTab.grd_notice.uaSortInfo;

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

        	//대상조회 팝업
        	if( sPopupId == "oprUntMultiPop" ){

        		for(var i = 0; i < resData.length; i++){
        			var rtnData = JSON.parse(resData[i]);
        			sNmList += rtnData.OPR_UNIT_NM +",";

        			//데이터셋 별도 지정.
        			var row = this.ds_oprUnit.addRow();
        			this.ds_oprUnit.setColumn(row, "OPR_UNIT_ID", rtnData.OPR_UNIT_ID);
        			this.ds_oprUnit.setColumn(row, "OPR_UNIT_NM", rtnData.OPR_UNIT_NM);
        			this.ds_oprUnit.setColumn(row, "CO_CD", rtnData.CO_CD);
        			this.ds_oprUnit.setColumn(row, "BZPLC_ID", rtnData.BZPLC_ID);
        		}

        		this.ds_search.setColumn(0, "TARGET_VALUE", sNmList.replace(/,\s*$/, ""));

        	} else if( sPopupId == "oprtrInfoPop" ){
        		this.ds_search.setColumn(0, "REGPSN_ID", resData.OPRTR_ID);
        		this.ds_search.setColumn(0, "REGPSN_NM", resData.OPRTR_NM);
        	}

        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//grid 초기 설정
        	this.noticeTab.grd_notice.uSortFlag = "false";
        	this.noticeTab.grd_notice.uServerSortFlag = "true";
        	this.noticeTab.grd_notice.uSortCallback = "fn_sortCallback";

        	this.noticeTab.grd_notice.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.noticeTab.div_paging.uPage = 1;
        	this.noticeTab.div_paging.uPageNum = 0;
        	this.noticeTab.div_paging.uPageRowCnt = 10;
        	this.noticeTab.div_paging.uPageCnt = 0;
        	this.noticeTab.div_paging.uTotCount = 0;
        }


        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 검색영역 초기화
        this.clear = function() {
        	this.ds_search.copyData(this.ds_search_origin);
        	this.fn_setSearchDate();
        }

        //달력 close  이벤트
        this.PopupDiv3_oncloseup = function(obj,e)
        {
        	if(this.PopupDiv3.form.searchStartDate.value > this.PopupDiv3.form.searchEndDate.value){
        		this.alert("종료일은 시작일보다 클 수 없습니다.");
        		this.Tab00.Tabpage1.form.div_search.form.TO_DATE.set_value("");
        	}
        };

        //조회기간 재설정
        this.fn_setSearchDate = function() {

        	var term = this.noticeForm.DATE_TERM.value;
        	var objDate = new Date();
        	var sToday = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');

        	/*
        	1	1주일
        	2	2주일
        	3	1개월
        	4	2개월
        	5	3개월
        	6	6개월
        	7	1년
        	*/
        	if( term == undefined ) term = "1";

        	if( term == "1" ) {
        		objDate.setDate(objDate.getDate() -7);
        	} else if( term == "2" ) {
        		objDate.setDate(objDate.getDate() -14);
        	} else if( term == "3" ) {
        		objDate.setMonth(objDate.getMonth() -1);
        	} else if( term == "4" ) {
        		objDate.setMonth(objDate.getMonth() -2);
        	} else if( term == "5" ) {
        		objDate.setMonth(objDate.getMonth() -3);
        	} else if( term == "6" ) {
        		objDate.setMonth(objDate.getMonth() -6);
        	} else if( term == "7" ) {
        		objDate.setMonth(objDate.getMonth() -12);
        	}
        	//console.log(objDate + "/" + objDate.getFullYear() + "/" + (objDate.getMonth() +1) + "/" + objDate.getDate());

            this.noticeForm.FROM_DATE.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
            this.noticeForm.TO_DATE.set_value(sToday);
        }

        //라디오 변경 이벤트
        this.fn_radioChage = function(objId) {
        	if( objId == "TGT_SET_YN" ) {
        		if( this.noticeForm[objId].value == "Y" ) {
        			this.noticeForm.TARGET_VALUE.set_enable(true);
        			this.noticeForm.btnTarget.set_enable(true);
        		} else {
        			this.noticeForm.TARGET_VALUE.set_enable(false);
        			this.noticeForm.btnTarget.set_enable(false);
        			this.noticeForm.TARGET_VALUE.set_value("");
        			this.ds_oprUnit.clearData();
        		}
        	}
        }


        //상세 팝업 클릭 이벤트
        this.fn_noticeDetailPopup = function(type) {

        	var dataset = this.ds_list;
        	var objParam = {};
        	var popupPage = "CO_POP::SSP_BO_CN_02.xfdl";

        	objParam.type = type;
        	if( type == "U" ) {
        		var noticeSeq = dataset.getColumn(dataset.rowposition, "NOTCC_SEQ");
        		//set params
        		objParam.noticeSeq = noticeSeq;

        		popupPage = "CO_POP::SSP_BO_CN_03.xfdl";
        	}

        	this.gfn_openPopup("SSP_BO_CN_02", popupPage, objParam, "fn_popupCallback");
        }

        //팝업호출
        this.fn_popup = function(type) {
        	var objParam = {};

        	if( type == "TARGET" ){
        		this.gfn_openPopup("oprUntMultiPop", "CO_POP::operateUnitMultiPopup.xfdl", objParam, "fn_popupCallback");

        	} else if( type == "OPRTR_INFO" ){
        		this.gfn_openPopup("oprtrInfoPop", "CO_POP::SSP_BO_CN_26.xfdl", objParam, "fn_popupCallback");

        	}
        }

        this.fn_detailClose = function(type) {
        	if( type == "save" ) {
        		alert("저장되었습니다");
        		this.fn_search(0);
        	}
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //달력 드롭다운
        this.DATE_ondropdown = function(obj,e) {
        	this.PopupDiv3.form.searchStartDate.set_value(this.ds_search.getColumn(0, "FROM_DATE"));
        	this.PopupDiv3.form.searchEndDate.set_value(this.ds_search.getColumn(0, "TO_DATE"));
        	this.PopupDiv3.trackPopupByComponent(this.noticeForm.FROM_DATE, 0, obj.height);
        };


        //달력의 확인버튼
        this.PopupDiv3_btn_confirm_onclick = function(obj,e) {

        	var sFrom = this.PopupDiv3.form.searchStartDate.value;
        	var sTo = this.PopupDiv3.form.searchEndDate.value;

        	this.ds_search.setColumn(0, "FROM_DATE", sFrom);
        	this.ds_search.setColumn(0, "TO_DATE", sTo);

        	this.PopupDiv3.closePopup();

        };


        //달력 취소버튼
        this.PopupDiv3_btn_cancel_onclick = function(obj,e)
        {
        	this.PopupDiv3.closePopup();
        };

        //초기화
        this.div_search_btnClear_onclick = function(obj,e)
        {
        	this.clear();
        };

        //조회
        this.div_search_btnSearch_onclick = function(obj,e)
        {
        	this.fn_search(0);
        };

        //조회기간 변경 시 달력 날짜 세팅.
        this.Tab00_Tabpage1_div_search_DATE_TERM_onitemchanged = function(obj,e)
        {
        	this.fn_setSearchDate();
        };

        //라디오 변경
        this.Tab00_Tabpage1_div_search_TGT_SET_YN_onitemchanged = function(obj,e)
        {
        	this.fn_radioChage("TGT_SET_YN");
        };

        // 그리드 더블클릭
        this.Tab00_Tabpage1_grd_notice_oncelldblclick = function(obj,e)
        {

        };

        // 대상 팝업조회
        this.Tab00_Tabpage1_div_search_btnTarget_onclick = function(obj,e)
        {
        	this.fn_popup("TARGET");
        };

        // 그리드 클릭
        this.Tab00_Tabpage1_grd_notice_oncellclick = function(obj,e)
        {
        	this.fn_noticeDetailPopup("U");
        };

        //등록버튼
        this.Tab00_Tabpage1_btnRegist_onclick = function(obj,e)
        {
        	this.fn_noticeDetailPopup("N");
        };

        //등록자 조회 팝업
        this.Tab00_Tabpage1_div_search_Button39_onclick = function(obj,e)
        {
        	this.fn_popup("OPRTR_INFO");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.PopupDiv3.addEventHandler("oncloseup",this.PopupDiv3_oncloseup,this);
            this.PopupDiv3.form.btn_confirm.addEventHandler("onclick",this.PopupDiv3_btn_confirm_onclick,this);
            this.PopupDiv3.form.btn_cancel.addEventHandler("onclick",this.PopupDiv3_btn_cancel_onclick,this);
            this.Div00_01.form.Static63_00.addEventHandler("onclick",this.Div00_Static63_00_onclick,this);
        };
        this.loadIncludeScript("guideTabSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
