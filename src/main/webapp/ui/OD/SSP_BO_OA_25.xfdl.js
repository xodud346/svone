(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_02_08");
            this.set_titletext("연계 정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_IF_MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_IF_MSG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RETRY_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_SYSTEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_CRT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TNO\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromServer", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_IF_MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_IF_MSG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RETRY_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_1\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_2\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_3\" type=\"STRING\" size=\"256\"/><Column id=\"IF_SYSTEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_CRT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SND_USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_IF_MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_IF_MSG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RETRY_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_SYSTEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCoCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TOTAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_CLSF_CD\">PI_SPR_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCDPiSprCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","20",null,"60.00%","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo","0","0","200","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("■ 주문 전송 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"20","30","10","1296",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grid_list01","0","30",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_list01");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"200\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"280\"/><Column size=\"101\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"행선택\"/><Cell col=\"1\" text=\"주문번호\"/><Cell col=\"2\" text=\"인터페이스 구분\"/><Cell col=\"3\" text=\"상품 ID\"/><Cell col=\"4\" text=\"상품명\"/><Cell col=\"5\" text=\"메세지ID\"/><Cell col=\"6\" text=\"전송일시\"/><Cell col=\"7\" text=\"수신일시\"/><Cell col=\"8\" text=\"성공 여부\"/><Cell col=\"9\" text=\"메시지\"/><Cell col=\"10\" text=\"MRO생성여부\"/><Cell col=\"11\" text=\"VOC NO\"/><Cell col=\"12\" text=\"승인번호\"/><Cell col=\"13\" text=\"승인/취소금액\"/></Band><Band id=\"body\"><Cell displaytype=\"imagecontrol\" text=\"expr:comp.parent.parent.parent.fn_isSelectedRow(currow, comp.currentcell) == true ? &quot;url(&apos;theme://images/btn_WF_page_last.png&apos;)&quot; : &quot;&quot;\"/><Cell col=\"1\" text=\"bind:JNT_ODR_ITM_NO\"/><Cell col=\"2\" text=\"bind:IF_PI_NM\"/><Cell col=\"3\" text=\"bind:PRD_ID\"/><Cell col=\"4\" text=\"bind:PRD_NM\"/><Cell col=\"5\" text=\"bind:IF_MSG_ID\"/><Cell col=\"6\" text=\"bind:REG_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:IF_PROC_RSLT_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:IF_PROC_RSLT_CD_NM\"/><Cell col=\"9\" displaytype=\"normal\" calendardateformat=\"yyyy.MM.dd\" text=\"bind:IF_PI_MSG\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:MRO_CRT_YN\"/><Cell col=\"11\" text=\"bind:VOC_NO\"/><Cell col=\"12\" text=\"bind:TNO\"/><Cell col=\"13\" text=\"bind:AMOUNT\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"0","110","28","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_send",null,"0","60","28","117",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("재전송");
            obj.set_cssclass("btn_WF_default");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_ifPiId",null,"2","138","24","184",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_comCDPiSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_interfaceSpr",null,"5","98","19","326",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("인터페이스 구분 :");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","Div00:30",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo","0","0","200","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("■ 주문 전송 이력");
            obj.set_cssclass("sta_WF_title01");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("grid_list02","0","30",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_list02");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"280\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"주문번호\"/><Cell col=\"1\" text=\"인터페이스 구분\"/><Cell col=\"2\" text=\"상품 ID\"/><Cell col=\"3\" text=\"상품명\"/><Cell col=\"4\" text=\"MRO 생성여부\"/><Cell col=\"5\" text=\"VOC NO\"/><Cell col=\"6\" text=\"메세지ID\"/><Cell col=\"7\" text=\"전송일시\"/><Cell col=\"8\" text=\"수신일시\"/><Cell col=\"9\" text=\"성공 여부\"/><Cell col=\"10\" text=\"메시지\"/><Cell col=\"11\" text=\"전송자\"/></Band><Band id=\"body\"><Cell text=\"bind:JNT_ODR_ITM_NO\"/><Cell col=\"1\" text=\"bind:IF_PI_NM\"/><Cell col=\"2\" text=\"bind:PRD_ID\"/><Cell col=\"3\" text=\"bind:PRD_NM\"/><Cell col=\"4\" text=\"bind:MRO_CRT_YN\"/><Cell col=\"5\" text=\"bind:VOC_NO\"/><Cell col=\"6\" text=\"bind:IF_MSG_ID\"/><Cell col=\"7\" text=\"bind:REG_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:IF_PROC_RSLT_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" text=\"bind:IF_PROC_RSLT_CD_NM\"/><Cell col=\"10\" displaytype=\"normal\" calendardateformat=\"yyyy.MM.dd\" text=\"bind:IF_PI_MSG\" textAlign=\"left\"/><Cell col=\"11\" displaytype=\"normal\" calendardateformat=\"yyyy.MM.dd\" text=\"bind:SND_USR_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload2",null,"0","110","28","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.cmb_ifPiId","value","ds_search","IF_PI_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_25.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_25.xfdl", function() {
        // 주문관리 상세 - 연계정보

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object

        this.odrNo = "";
        this.odrItmNo = "";
        this.bzplcId = "";
        this.odrpsnId = "";
        this.selectedRow = -1;
        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/

        this.SSP_BO_OA_02_08_oninit = function(obj,e)
        {
        	var nIndex = this.addEventHandlerLookup( "onload", "fn_afterFormLoad", this.parent.parent.parent);
        };

        this.SSP_BO_OA_02_08_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        	this.fn_odCommLoading();

        	this.copyPaste.addGrid(this.Div00.form.grid_list01);
        	this.copyPaste.addGrid(this.Div01.form.grid_list02);

        	this.fn_searchCommonCode();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function() {
        	var sSvcId = "selectSndRcvList";
        	var sUrl = "/od/oderlist/selectSndRcvList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1";
        	var arg = "";

        	this.fn_setVisibleResendButton(false);
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_selectSndRcvList2 = function() {
        	var sSvcId = "selectSndRcvInfoList2";
        	var sUrl = "/od/oderlist/selectSndRcvInfoList2.do";		// OA_42와 같은 쿼리 사용
        	var inDs = "ds_search=ds_search2";
        	var outDs = "ds_list02=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        // 공통코드
        this.fn_searchCommonCode = function() {
            var sSvcId = "selectCommonCodeList";
            var sUrl = "/od/odrPopup/selectCommonCodeList.do";
            var inDs = "ds_search=ds_searchCoCd";
            var outDs = "ds_comCd=ds_output1";
            var arg = "";
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 재전송
        this.fn_requestResend = function() {
        	var sSvcId = "interfaceInfoResend";
            var sUrl = "/od/oderlist/interfaceInfoResend.do";
            var inDs = "ds_search=ds_search2";
            var outDs = "ds_fromServer=ds_output1";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectSndRcvList") {
        		trace("### selectSndRcvList - ds_list01.rowcount : " + this.ds_list01.rowcount);
        		this.fn_resetSubGrid();
        	}
        	else if(svcID == "resendOrderTrans") {
        		var  strRtnCd  = this.fn_getDSValue(this.ds_fromServer.getColumn(0,"RTN_CD"));
        		var  strRtnMsg = this.fn_getDSValue(this.ds_fromServer.getColumn(0,"RTN_MSG"));

        		if( strRtnCd == "S") {
        			alert(this.fn_getMessage("ERRS000156"));
        			this.fn_search();
        		}
        		else	alert(strRtnMsg);
        	}
        	else if(svcID == "selectSndRcvInfoList2") {
        		if (errorCode < 0) {
        			//alert(errorMsg);
        		}
        		this.fn_procVisibleResendButton();
        	}
        	else if (svcID == "selectCommonCodeList") {
                this.fn_setCommonCode();
            }
        	else if (svcID == "interfaceInfoResend") {
        		if (errorCode < 0) {
        			//alert(errorMsg);
        		}
        		else {
        			alert(this.fn_getMessage("ERRS000391"));
        		}
        	}
        };


        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        // 조회 함수(모든 탭 폼에 있어야되는 함수)
        this.fn_searchOdrInfo = function(odrNo, odrItmNo, bzplcId, odrpsnId) {
        	trace("### SSP_BO_OA_25 - fn_searchOdrInfo");
        	this.odrNo = odrNo;
        	this.odrItmNo = odrItmNo;
        	this.bzplcId = bzplcId;
        	this.odrpsnId = odrpsnId;

        	this.ds_search.setColumn(0, "ODR_NO", this.odrNo);
        	this.ds_search.setColumn(0, "ODR_ITM_NO", this.odrItmNo);
        	this.ds_search.setColumn(0, "BZPLC_ID", this.bzplcId);
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);

        	this.fn_search();
        };
        // 데이터 변경내역 유무 조회(모든 탭 폼에 있어야되는 함수)
        this.fn_shouldSave = function() {
        	var rowType = "";
        	var deletedCount = 0;
        	// ds_list01
        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		rowType = this.ds_list01.getRowType(i);
        		deletedCount = this.ds_list01.getDeletedRowCount();

        		if (rowType == Dataset.ROWTYPE_UPDATE ||
        			rowType == Dataset.ROWTYPE_INSERT ||
        			deletedCount > 0) {
        			return true;
        		}
        	}

        	return false;
        };

        // 서버에서 리턴받은 공통코드 리스트를 공통코드별로 분류
        this.fn_setCommonCode = function() {
        	// 인터페이스구분 코드
            this.ds_comCd.filter("COM_CLSF_CD=='PI_SPR_CD' && COM_USR_DEFN_NM_1=='Y'");
            this.ds_comCDPiSprCd.copyData(this.ds_comCd, true);
        	this.ds_comCDPiSprCd.set_keystring("S:+SRT_SO");

        	this.ds_comCDPiSprCd.insertRow(0);
        	this.ds_comCDPiSprCd.setColumn(0, "COM_DTL_CD_NM", "전체");
            // 콤보박스에서 기본적으로 "전체"를 선택하도록 설정
        	this.Div00.form.cmb_ifPiId.set_index(0);
        };
        /*
        this.fn_showResendButton = function(result) {
        	if (result == "S") {
        		this.Div00.form.btn_send.set_visible(false);
        	}
        	else if (result == "E") {
        		this.Div00.form.btn_send.set_visible(true);
        	}
        	else {
        		this.Div00.form.btn_send.set_visible(false);
        	}
        };
        */
        this.fn_procVisibleResendButton = function() {
        	this.fn_setVisibleResendButton(false);
        	if(this.ds_list02.getColCount() == 0) return;

        	//하나라도 정상처리된 것이 있으면 보여주지 않는다.
        	if(this.ds_list02.findRow("IF_PROC_RSLT_CD","S") < 0) {
        	   	var lastPiRsltCd = this.ds_list02.getColumn(0, "IF_PROC_RSLT_CD");
        		if("E" == lastPiRsltCd){
        			this.fn_setVisibleResendButton(true);
        		}
        	}
        };

        this.fn_setVisibleResendButton = function(visable) {
        	this.Div00.form.btn_send.set_visible(visable);
        };

        this.fn_resetSubGrid = function() {
        	this.selectedRow = -1;
        	this.Div00.form.grid_list01.redrawExprCell("body");
        	this.ds_list02.clearData();
        };

        // 행선택
        this.fn_isSelectedRow = function(currow, cellPos) {
        	if (cellPos == 0) {
        		if (currow == this.ds_list01.rowposition)	return true;
        		return false;
        	}

        	if (currow == this.selectedRow) {
        		return true;
        	}

        	return false;
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        this.Div00_btn_excelDownload_onclick = function(obj,e)
        {
        	this.ofn_exportExcel({form:this, grid:this.Div00.form.grid_list01, fileName:"주문전송정보"});
        };

        this.Div00_btn_send_onclick = function(obj,e) {
        	var odrno = this.ds_list01.getColumn(this.selectedRow, "JNT_ODR_ITM_NO");
        	var rtn = this.confirm(this.fn_getMessage("ERRS000397", odrno));
        	if (rtn) {
        		// "확인"
        		this.fn_requestResend();
        	}
        	else {
        		// "취소"
        	}
        };


        this.btn_excelDownload2_onclick = function(obj,e)
        {
        	this.ofn_exportExcel({form:this, grid:this.Div01.form.grid_list02, fileName:"주문이력정보"});
        };

        // 인터페이스 구분 변경
        this.cmb_ifPiId_onitemchanged = function(obj,e)
        {
        	this.fn_search();
        };

        /***********************************************************************************************
        * GRID EVENT 영역
        ************************************************************************************************/
        this.grid_list01_oncellposchanged = function(obj,e)
        {
        	if (e.col != 0 || e.row < 0)	return;

        	this.selectedRow = e.row;
        	this.ds_search2.clearData();
        	var nRow = this.ds_search2.addRow();
        	this.ds_search2.copyRow(nRow, this.ds_list01, e.row);

        	this.fn_setVisibleResendButton(false);
        	this.fn_selectSndRcvList2();

        	//var ifProcRsltCd = this.ds_list01.getColumn(e.row, "IF_PROC_RSLT_CD");
        	//this.fn_showResendButton(ifProcRsltCd);
        };

        /***********************************************************************************************
        * DATASET EVENT 영역
        ************************************************************************************************/


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_02_08_onload,this);
            this.addEventHandler("oninit",this.SSP_BO_OA_02_08_oninit,this);
            this.Div00.form.grid_list01.addEventHandler("oncellposchanged",this.grid_list01_oncellposchanged,this);
            this.Div00.form.btn_excelDownload.addEventHandler("onclick",this.Div00_btn_excelDownload_onclick,this);
            this.Div00.form.btn_send.addEventHandler("onclick",this.Div00_btn_send_onclick,this);
            this.Div00.form.cmb_ifPiId.addEventHandler("onitemchanged",this.cmb_ifPiId_onitemchanged,this);
            this.Div01.form.btn_excelDownload2.addEventHandler("onclick",this.btn_excelDownload2_onclick,this);
            this.ds_search2.addEventHandler("onrowposchanged",this.ds_list01_onrowposchanged,this);
        };
        this.loadIncludeScript("SSP_BO_OA_25.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
