(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("errorLogList");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1003,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("searchDs", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FORM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"THME_DOMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_PST_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"codeList\" type=\"STRING\" size=\"256\"/><Column id=\"langCd\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ExceptionDs", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"DATE\" size=\"256\"/><Column id=\"THME_DOMN_CD\" type=\"STRING\" size=\"2\"/><Column id=\"IPT_PST_TYPE_CD\" type=\"STRING\" size=\"2\"/><Column id=\"UI_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UI_NM\" type=\"STRING\" size=\"100\"/><Column id=\"LOG_CRT_CLASS\" type=\"STRING\" size=\"100\"/><Column id=\"LOG_CRT_METHOD\" type=\"STRING\" size=\"100\"/><Column id=\"LOG_MSG\" type=\"STRING\" size=\"2000\"/><Column id=\"EXCEPT_DTLS\" type=\"STRING\" size=\"0\"/><Column id=\"THME_DOMN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ExceptionDsCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"DATE\" size=\"256\"/><Column id=\"THME_DOMN_CD\" type=\"STRING\" size=\"2\"/><Column id=\"IPT_PST_TYPE_CD\" type=\"STRING\" size=\"2\"/><Column id=\"UI_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UI_NM\" type=\"STRING\" size=\"100\"/><Column id=\"LOG_CRT_CLASS\" type=\"STRING\" size=\"100\"/><Column id=\"LOG_CRT_METHOD\" type=\"STRING\" size=\"100\"/><Column id=\"LOG_MSG\" type=\"STRING\" size=\"2000\"/><Column id=\"EXCEPT_DTLS\" type=\"STRING\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_thmeDownCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnExSearch","14","17","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","14","43","96","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("주제영역");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","14","74","96","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("화면ID");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_exceptionList","14","175",null,null,"13","50",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_positionstep("0");
            obj.set_binddataset("ExceptionDs");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"129\"/><Column size=\"97\"/><Column size=\"90\"/><Column size=\"101\"/><Column size=\"80\"/><Column size=\"161\"/><Column size=\"194\"/><Column size=\"126\"/><Column size=\"365\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"등록일자\"/><Cell col=\"1\" text=\"주제영역코드\"/><Cell col=\"2\" text=\"주제영역명\"/><Cell col=\"3\" text=\"입력위치타입코드\"/><Cell col=\"4\" text=\"화면ID\"/><Cell col=\"5\" text=\"화면명\"/><Cell col=\"6\" text=\"로그생성클래스\"/><Cell col=\"7\" text=\"로그생성메소드\"/><Cell col=\"8\" text=\"로그메시지\"/><Cell col=\"9\" text=\"예외내역\"/></Band><Band id=\"body\"><Cell text=\"bind:REG_DTM\" autosizecol=\"default\" displaytype=\"date\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:THME_DOMN_CD\" autosizecol=\"none\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:THME_DOMN_NM\"/><Cell col=\"3\" text=\"bind:IPT_PST_TYPE_CD\" autosizecol=\"none\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:UI_ID\" autosizecol=\"default\" controlautosizingtype=\"width\"/><Cell col=\"5\" text=\"bind:UI_NM\" autosizecol=\"default\" controlautosizingtype=\"width\"/><Cell col=\"6\" text=\"bind:LOG_CRT_CLASS\" edittype=\"none\" controlautosizingtype=\"both\"/><Cell col=\"7\" text=\"bind:LOG_CRT_METHOD\" controlautosizingtype=\"both\" autosizecol=\"none\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:LOG_MSG\" controlautosizingtype=\"both\" autosizecol=\"default\"/><Cell col=\"9\" text=\"상세보기\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","14","105","96","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("등록일자");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv3","330","625","330","230",null,null,null,null,null,null,this);
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

            obj = new Static("Static00_01_00_00","109","43",null,"32","13",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Static00");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_thmeDownCd","114","47","35%","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_thmeDownCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","cmb_thmeDownCd:4","43","116","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("입력위치타입");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Edit("iptPstTypeCd","Static01_00:4","47",null,"24","19",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01","109","74",null,"32","13",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Static00");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","109","105",null,"32","13",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Static00");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Edit("uiId","114","78","35%","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","uiId:4","74","116","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("화면 명");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("uiNm","Static01_00_01:4","78",null,"24","19",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("searchStartDate","114","109","181","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","300","109","10","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("~");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("searchEndDate","311","109","181","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","14","grd_exceptionList:10",null,"38","13",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","14","154","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1003,620,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","iptPstTypeCd","value","searchDs","IPT_PST_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","uiId","value","searchDs","UI_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","uiNm","value","searchDs","UI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","searchStartDate","value","searchDs","FORM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","searchEndDate","value","searchDs","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cmb_thmeDownCd","value","searchDs","THME_DOMN_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("errorLogList.xfdl", function() {
        /*******************************************************
          PROJECT NAME : MarketA
          CREATION DATES : 2022.01.18
        *******************************************************/


        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();	//application object

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        //onload
        this.errorLogList_onload = function(obj,e)
        {
        	var objDate = new Date();
        	var sToday = objDate.getFullYear()
        			   + ((objDate.getMonth() + 1) + "").padLeft(2, '0')
        			   + (objDate.getDate() + "").padLeft(2, '0');

             this.searchStartDate.set_value(sToday.substring(0,6) + "01");
             this.searchEndDate.set_value(sToday);

        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	this.fn_commonCodeSearch();

        	this.fn_doSearch(0);
        };


        //폼 keyup 이벤트
        this.errorLogList_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		this.fn_doSearch(0);
        	}
        };



        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_doSearch = function(page) {
        	 var sSvcId = "exceptionSearch";
             var sUrl = "/co/select_exception_info_list.do";
        	 var inDs = "ds_search=searchDs"
             var outDs = "ExceptionDs=ds_output1";
             var arg;
             var callback = "fn_received";

        	 // 조회버튼 클릭시 페이징 초기화 시킨다.
        	 if( page == 0 ) {

        		this.div_paging.uPage=1;
        		this.div_paging.uPageNum=0;
        		this.searchDs.setColumn(0,"START_NUM", 0);
        		this.searchDs.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);

        		oSortInfo = this.grd_exceptionList.uaSortInfo;
        		this.searchDs.setColumn(0,"SORT_COLUMN", "");
        		this.searchDs.setColumn(0,"SORT_TYPE", "");
        	 }

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        //공통코드조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select_common_code_list.do";
        	var inDs = "ds_search=searchDs";
        	var outDs = "ds_thmeDownCd=ds_output1";
        	var arg = "";

        	this.searchDs.setColumn(0, "codeList", "THME_DOMN_CD");
        	this.searchDs.setColumn(0, "langCd", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_received");
        };


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_received = function(svcID, errorCode, errorMsg) {
        	if(svcID == "exceptionSearch"){
        		//trace(this.ds_sampleList.saveXML());

        		// 조회 카운트가 없으면 데이터셋이 날라감으로 강제 설정
        		if( this.ExceptionDs.rowcount == 0 ) {
        			this.ExceptionDs.copyData(this.ExceptionDsCopy);
        		}

        		//paging 처리
        		this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.fv_oApp.gv_pageViewCnt, "fn_pageCallback");
        		//this.div_paging.form.cfn_createPage(this.div_paging,1912,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");

        	} else if(svcID == "commonCodeSearch"){
        		this.ds_thmeDownCd.insertRow(0);
        		this.ds_thmeDownCd.setColumn(0,"COM_DTL_CD_NM","전체");
        	}
        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;
        	if(sFlag){
        		//this.searchDs.setColumn(0,"START_NUM", (oPaging.uPageNum == 0 || oPaging.uPageNum == 1 ? 0 : ( oPaging.uPageNum -1 ) * 10));
        		this.searchDs.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.searchDs.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		this.fn_doSearch();
        	}

        	var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.totalPageCount.set_text(sTotText);
        }

        //정렬 콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_exceptionList"){
        		oSortInfo = this.grd_exceptionList.uaSortInfo;

        		this.searchDs.setColumn(0,"SORT_COLUMN", oSortInfo.bindCol);
        		this.searchDs.setColumn(0,"SORT_TYPE", oSortInfo.status);

        		this.fn_doSearch();
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//grid 초기 설정
        	this.grd_exceptionList.uSortFlag = "false";
        	this.grd_exceptionList.uServerSortFlag = "true";
        	this.grd_exceptionList.uSortCallback = "fn_sortCallback";

        	this.grd_exceptionList.uCellSizeType = "true";

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

        this.PopupDiv3_oncloseup = function(obj,e)
        {
        	if(this.PopupDiv3.form.searchStartDate.value > this.PopupDiv3.form.searchEndDate.value){
        		this.alert("종료일은 시작일보다 클 수 없습니다.");
        		this.searchEndDate.set_value("");
        	}
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //검색버튼
        this.btnExSearch_onclick = function(obj,e)
        {
        	 this.fn_doSearch(0);
        };

        //달력의 확인버튼
        this.PopupDiv3_btn_confirm_onclick = function(obj,e)
        {
        	var sFrom = this.PopupDiv3.form.searchStartDate.value;
        	var sTo = this.PopupDiv3.form.searchEndDate.value;


        	this.searchDs.setColumn(0, "FORM_DATE", sFrom);
        	this.searchDs.setColumn(0, "TO_DATE", sTo);

        	//this.searchStartDate.set_value(sFrom);
        	//this.searchEndDate.set_value(sTo);

        	this.PopupDiv3.closePopup();

        };


        //달력 취소버튼
        this.PopupDiv3_btn_cancel_onclick = function(obj,e)
        {
        	this.PopupDiv3.closePopup();
        };

        //그리드 셀 클릭 이벤트
        this.grd_exceptionList_oncellclick = function(obj,e)
        {
        	// 상세조회 팝업 호출
        	var dataSet = obj.getBindDataset();
        	if( e.col == 9 ) {
        		var params = {
        			detailMsg : dataSet.getColumn(e.row, "EXCEPT_DTLS")
        		};

        		var options = {};
        		options.title = "Exception 상세 내역";

        		this.gfn_openPopup("oprUntSinglePop", "CO_POP::exceptionDtsPopup.xfdl", params,  "", options);
        	}

        };

        //달력 드롭다운 이벤트
        this.searchStartDate_ondropdown = function(obj,e)
        {
        	this.PopupDiv3.form.searchStartDate.set_value(this.searchDs.getColumn(0, "FORM_DATE"));
        	this.PopupDiv3.form.searchEndDate.set_value(this.searchDs.getColumn(0, "TO_DATE"));
        	this.PopupDiv3.trackPopupByComponent(this.searchStartDate, 0, obj.height);
        };



        this.Static00_01_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.errorLogList_onload,this);
            this.addEventHandler("onkeyup",this.errorLogList_onkeyup,this);
            this.btnExSearch.addEventHandler("onclick",this.btnExSearch_onclick,this);
            this.grd_exceptionList.addEventHandler("oncellclick",this.grd_exceptionList_oncellclick,this);
            this.PopupDiv3.addEventHandler("oncloseup",this.PopupDiv3_oncloseup,this);
            this.PopupDiv3.form.btn_confirm.addEventHandler("onclick",this.PopupDiv3_btn_confirm_onclick,this);
            this.PopupDiv3.form.btn_cancel.addEventHandler("onclick",this.PopupDiv3_btn_cancel_onclick,this);
            this.Static00_01_00_00.addEventHandler("onclick",this.Static00_01_00_00_onclick,this);
            this.Static01_00.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.searchStartDate.addEventHandler("ondropdown",this.searchStartDate_ondropdown,this);
            this.searchEndDate.addEventHandler("ondropdown",this.searchStartDate_ondropdown,this);
        };
        this.loadIncludeScript("errorLogList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
