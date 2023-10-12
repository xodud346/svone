(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_51");
            this.set_titletext("유통경로 변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(880,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DSTRB_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"SAL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"TXTN_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"DSTRB_PATH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TXTN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TX_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCoCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TOTAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_CLSF_CD\">DSTRB_PATH_CD</Col><Col id=\"IS_TOTAL\">N</Col></Row><Row><Col id=\"COM_CLSF_CD\">TXTN_TP_CD</Col><Col id=\"IS_TOTAL\">N</Col></Row><Row><Col id=\"COM_CLSF_CD\">TX_CLCD</Col><Col id=\"IS_TOTAL\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCdDstrb", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCdTxtnTp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCdTxClcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromServer01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"loginId\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IUD_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_GB\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_ADJ_STATS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_forServer01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IUD_GB\" type=\"STRING\" size=\"256\"/><Column id=\"DSTRB_PATH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_MEMO_CTS\" type=\"STRING\" size=\"1000\"/><Column id=\"CHN_GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grid_list01","20","217",null,"115","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list01");
            obj.set_selecttype("row");
            obj.set_font("12px/normal \"맑은 고딕\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"150\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"유통 경로\"/><Cell col=\"2\" text=\"주문금액(VAT제외)\"/><Cell col=\"3\" text=\"VAT\"/><Cell col=\"4\" text=\"매출 세금 코드\"/><Cell col=\"5\" text=\"ㅇㅇ\"/></Band><Band id=\"body\"><Cell text=\"bind:SPR_NM\"/><Cell col=\"1\" text=\"bind:DSTRB_PATH\"/><Cell col=\"2\" text=\"bind:SAL_AMT\"/><Cell col=\"3\" text=\"bind:VAT_AMT\"/><Cell col=\"4\" text=\"bind:TXTN_SPR\"/><Cell col=\"5\" text=\"bind:TX_CLCD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"52","60","28","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","90",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","0","0",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_02","0","0","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("주문자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_01_00","310","0","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("변경 사유");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_odrpsnNm","110","5","190","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_chgMemo","420","5",null,"22","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01","20","64","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("■ 기본정보 등록");
            obj.set_cssclass("sta_WF_title01");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01_00","20","148","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("■ 주문 내역");
            obj.set_cssclass("sta_WF_title01");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","20","175",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_02","20","175","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("유통 경로");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_dstrbPathCd","131","179","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_comCdDstrb");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","43.30%","351","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","53.98%","351","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm","281","177","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("적용");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00","355","379","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00","30","207","30","10",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle","20","20","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("유통경로 변경");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",880,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_18.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_18.xfdl", function() {
        // 유통경로 변경

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;
        this.insertCount = 0;
        this.parentFormID = "";
        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/

        this.odrNo = "";
        this.odrItmNo = "";
        this.bzplcId = "";
        this.odrpsnId = "";
        this.odrpsnNm = "";

        this.SSP_BO_OA_18_onload = function(obj,e)
        {
        	this.bzplcId = this.parent.pv1;
        	this.odrNo = this.parent.pv2;
        	this.odrItmNo = this.parent.pv3;
        	this.odrpsnId = this.parent.pv4;
        	this.odrpsnNm = this.parent.pv5;

        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	//검색 영역 최소size 적용
        	this.resetScroll();
        	this.fn_searchCommonCode();
        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_51_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        // selectOdrPlntList ==> selectChgItmGrpList
        this.fn_search = function() {
        	var sSvcId = "selectDstrPathPopup";
        	var sUrl = "/od/orderChange/selectDstrPathPopup.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_updateDstrPathInfo = function() {
          var sSvcId = "updateDstrPathInfo";
          var sUrl = "/od/orderChange/saveOrderDetail.do";
          var inDs = "ds_update=ds_forServer01";
          var outDs = "ds_fromServer01=ds_output1";
          var arg = "";

          this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 공통코드
        this.fn_searchCommonCode = function() {
        	var sSvcId = "selectCommonCodeList";
        	var sUrl = "/od/odrPopup/selectCommonCodeList.do";
        	var inDs = "ds_search=ds_searchCoCd";
        	var outDs = "ds_comCd=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectDstrPathPopup") {
        		trace("selectDstrPathPopup is retrived");
        	}
        	else if (svcID == "selectCommonCodeList") {
        		this.Div00.form.edt_odrpsnNm.set_value(this.odrpsnId + " | " + this.odrpsnNm);
        		this.fn_setCommonCode();
        		this.fn_searchMapSetting();
        		this.fn_search();
        	}
        	else if(svcID == "updateDstrPathInfo") {
        		var rtnCd = this.fn_getDSValue(this.ds_fromServer01.getColumn(0,"RTN_CD"));
        		var rtnMsg = this.fn_getDSValue(this.ds_fromServer01.getColumn(0,"RTN_MSG"));

        		if (errorCode == "0") {
        			if( rtnCd == "S") {
        				alert(this.fn_getMessage("ERRS000156"));

        				var resData = {};
        				var selectedRow = this.ds_list01.findRow("LVL","2");

        				resData.DSTRB_PATH_CD = this.ds_list01.getColumn(selectedRow, "DSTRB_PATH_CD");
        				resData.DSTRB_PATH_CD_NM = this.ds_list01.getColumn(selectedRow, "DSTRB_PATH");
        				resData.TXTN_TP_CD = this.ds_list01.getColumn(selectedRow, "TXTN_TP_CD");
        				resData.TXTN_SPR = this.ds_list01.getColumn(selectedRow, "TXTN_SPR");
        				resData.CHG_MEMO_CTS = this.Div00.form.edt_chgMemo.value;
        				trace("resData : " + resData);

        				this.close(JSON.stringify(resData));
        			}
        			else {
        				alert(rtnMsg);
        			}
        		}
        	}
        };


        // 서버에서 리턴받은 공통코드 리스트를 공통코드별로 분류
        this.fn_setCommonCode = function() {

        	this.ds_comCd.filter("COM_CLSF_CD=='DSTRB_PATH_CD'");
        	this.ds_comCdDstrb.copyData(this.ds_comCd, true);

        	this.ds_comCd.filter("COM_CLSF_CD=='TXTN_TP_CD'");
        	this.ds_comCdTxtnTp.copyData(this.ds_comCd, true);

        	this.ds_comCd.filter("COM_CLSF_CD=='TX_CLCD'");
        	this.ds_comCdTxClcd.copyData(this.ds_comCd, true);

        };

        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_searchMapSetting = function() {
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_search.setColumn(0, "BZPLC_ID", this.bzplcId);
        	this.ds_search.setColumn(0, "ODR_NO", this.odrNo);
        	this.ds_search.setColumn(0, "ODR_ITM_NO", this.odrItmNo);
        	this.ds_search.setColumn(0, "ROW_COUNT", "10000");
        	this.ds_list01.clearData();
        };

        // "적용"버튼을 클릭해서 변경데이터를 설정했는지 체크
        this.fn_isApplied = function() {
        	var selectedRow = this.ds_list01.findRow("LVL","2");
        	var txtnTpCd = this.ds_list01.getColumn(selectedRow, "TXTN_TP_CD");
        	var txtnSpr = this.ds_list01.getColumn(selectedRow, "TXTN_SPR");

        	if (this.gfn_isNull(txtnTpCd) || this.gfn_isNull(txtnSpr)) {
        		return false;
        	}
        	return true;
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("btn_search_onclick");
        	this.fn_regMethodESC("btn_cancel_onclick");
        	this.fn_regMethodShiftENTER("btn_save_onclick");
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        // 조회
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btn_save_onclick = function(obj,e)
        {
        	var resData = {};
        	var selectedRow = this.ds_list01.filter("LVL=='2'");
        	if( selectedRow == -1 )
        	{
        		alert(this.fn_getMessage("ERRS000137"));
        		this.ds_list01.filter("");
        		return;
        	}

        	if (this.fn_isApplied() == false) {
        		alert(this.fn_getMessage("ERRS000460"));
        		this.ds_list01.filter("");
        		return;
        	}

        	// 서버 전달용 데이터 설정
        	this.ds_forServer01.clearData();
        	var nRow = this.ds_forServer01.addRow();

        	this.ds_forServer01.setColumn(nRow, "CO_CD", this.fv_coCd);
        	this.ds_forServer01.setColumn(nRow, "BZPLC_ID", this.bzplcId);
        	this.ds_forServer01.setColumn(nRow, "ODR_NO", this.odrNo);
        	this.ds_forServer01.setColumn(nRow, "ODR_ITM_NO", this.odrItmNo);
        	this.ds_forServer01.setColumn(nRow, "ODRPSN_ID", this.odrpsnId);
        	this.ds_forServer01.setColumn(nRow, "IUD_GB", "U");
        	this.ds_forServer01.setColumn(nRow, "ITM_GRP_CD", "G03");
        	this.ds_forServer01.setColumn(nRow, "DSTRB_PATH_CD", this.ds_list01.getColumn(selectedRow, "DSTRB_PATH_CD"));
        	this.ds_forServer01.setColumn(nRow, "CHG_MEMO_CTS", this.Div00.form.edt_chgMemo.value);
        	this.ds_forServer01.setColumn(nRow, "CHN_GB", "BO");

        	this.fn_updateDstrPathInfo();
        	this.ds_list01.filter("");
        };

        this.btn_confirm_onclick = function(obj,e)
        {
        	var strCd = this.cmb_dstrbPathCd.value;
        	var selectedRow = this.ds_list01.findRow("LVL","2");

        	var strDstrbCd = this.ds_list01.getColumn(0, "DSTRB_PATH_CD");
        	if(strCd == strDstrbCd)	{
        		alert(this.fn_getMessage("ERRS000212"));
        		return;
        	}
        	var nRow = this.ds_comCdDstrb.findRow("COM_DTL_CD",strCd);
        	var strText = strCd + " | " + this.ds_comCdDstrb.getColumn(nRow,"COM_DTL_CD_NM");
        	this.ds_list01.setColumn(selectedRow,"DSTRB_PATH",strText);
        	this.ds_list01.setColumn(selectedRow,"DSTRB_PATH_CD", strCd);

        	var strTxClcd = "1";
        	if (strCd == "30")	strTxClcd = "2";

        	var strTxtnTpCd = this.get_TxtnTpCd(strCd,strTxClcd);
        	nRow = this.ds_comCdTxtnTp.findRow("COM_DTL_CD",strTxtnTpCd);
        	strText = strTxtnTpCd + " | " + this.ds_comCdTxtnTp.getColumn(nRow,"COM_DTL_CD_NM");
        	this.ds_list01.setColumn(selectedRow,"TXTN_TP_CD",strTxtnTpCd);
        	this.ds_list01.setColumn(selectedRow,"TXTN_SPR",strText);
        };

        this.get_TxtnTpCd = function(strDstrbCd,strTxClcd)
        {
        	if(strDstrbCd == "30")
        		return "E2";
        	else if(strTxClcd =="0")
        		return "A0";
        	else if(strTxClcd =="1")
        		return "A1";
        	else if(strTxClcd =="2")
        		return "E2";
        	return "A1";
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_18_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_51_onkeyup,this);
            this.grid_list01.addEventHandler("oncelldblclick",this.grid_list01_oncelldblclick,this);
            this.grid_list01.addEventHandler("onenterdown",this.grid_list01_onenterdown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.Static06_01_00_02.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_01_00_01_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Static06_01_00_02.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_18.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
