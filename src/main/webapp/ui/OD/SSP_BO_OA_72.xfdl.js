(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_72");
            this.set_titletext("주문대행접속이력조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DLGTE_CHRPSN\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/><Column id=\"DOWN_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DB_WRK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CNCT_LOG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_PST_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPT_PST_TYPE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_ODR_DLGTE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_ODR_DLGTE_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNSOL_IP_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRWR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_MTHD_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_ODR_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20",null,"110","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Button("btn_active",null,"70","60","28","132",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("활성화");
            obj.set_cssclass("btn_WF_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"70","60","28","66",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"70","60","28","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"64","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","1",null,"32","0",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","0","32",null,"32","0",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_00","649","32","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","1","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("주문번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static22","649","1","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("대행 담당자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","32","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("접속일자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","130","1","10","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00","779","1","10","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_odrNo","140","5","448","24",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_text("예/아니오");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_dlgteChrpsn","789","5",null,"24","60",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_text("B2 | 제각요청");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00_00","1325","2","10","30",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_dlgteChrpsnMultiPopup",null,"5","24","24","30",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_odrNoInput","620","5","24","24",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_document");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_odrNoMultiPopup","592","5","24","24",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("sta_fromTo","264","36","9","24",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("~");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_conStart","140","36","120","24",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_conEnd","277","36","120","24",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_dlgteChrpsnInput",null,"5","24","24","2",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_document");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","20","Div00:20",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_viewCount",null,"0","104","28","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_type("dropdown");
            var Div01_form_cmb_viewCount_innerdataset = new nexacro.NormalDataset("Div01_form_cmb_viewCount_innerdataset", obj);
            Div01_form_cmb_viewCount_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20개씩</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500개씩</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1,000개씩</Col></Row><Row><Col id=\"codecolumn\">5000</Col><Col id=\"datacolumn\">5,000개씩</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10,000개씩</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_cmb_viewCount_innerdataset);
            obj.set_text("100개씩");
            obj.set_value("100");
            obj.set_index("2");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"0","110","28","110",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","0","16","240","14",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("grid_list01","0","cmb_viewCount:10",null,null,"0","110",null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("area");
            obj.set_binddataset("ds_list01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"주문번호\"/><Cell col=\"2\" text=\"주문 총 금액\"/><Cell col=\"3\" text=\"첨부파일\"/><Cell col=\"4\" text=\"고객MID\"/><Cell col=\"5\" text=\"고객명(ID)\"/><Cell col=\"6\" text=\"대행담당자명(ID)\"/><Cell col=\"7\" text=\"접속일시\"/><Cell col=\"8\" text=\"접속IP\"/><Cell col=\"9\" text=\"브라우저\"/></Band><Band id=\"body\"><Cell text=\"expr:comp.parent.parent.parent.fn_getGridNumber(currow)\"/><Cell col=\"1\" text=\"bind:ODR_NO\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:TOT_ODR_AMT\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:ATFL_NM\"/><Cell col=\"4\" text=\"bind:MBR_ID\"/><Cell col=\"5\" text=\"expr:comp.parent.parent.parent.fn_secureName(currow, &quot;MBR_ID_NM&quot;, dataset)\"/><Cell col=\"6\" text=\"bind:SRVON_ODR_DLGTE_ID_NM\"/><Cell col=\"7\" text=\"bind:LOGN_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"8\" text=\"expr:comp.parent.parent.parent.fn_secureForIP(currow, &quot;CNSOL_IP_ADDR&quot;,2, dataset)\"/><Cell col=\"9\" text=\"bind:BRWR_TYPE\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("div_paging","0",null,null,"30","0","50",null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_72.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_72.xfdl", function() {
        // 접속이력조회

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object

        this.odrNo = "";
        this.odrItmNo = "";
        this.bzplcId = "";
        this.odrpsnId = "";
        this.totalCount = 0;

        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_72_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        	this.fn_odCommLoading();

        	this.copyPaste.addGrid(this.Div01.form.grid_list01);

        	this.fn_initView();
        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_72_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function(page) {
        	var sSvcId = "conHstList";
        	var sUrl = "/od/oderlist/conHstList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1 ds_search=ds_output2";
        	var arg = "";

        	if (page) {
                var oPaging = this.Div01.form.div_paging;
                oPaging.uPage = 1;
                oPaging.uPageNum = 0;
                this.ds_search.setColumn(0, "START_NUM", 0);
                this.ds_search.setColumn(0, "ROW_COUNT", this.Div01.form.cmb_viewCount.value);
                this.ds_search.setColumn(0, "SORT_COLUMN", "");
                this.ds_search.setColumn(0, "SORT_TYPE", "");
                this.ds_search.setColumn(0, "INQ_COND_DTLS", this.name);
                this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
                this.ds_search.setColumn(0, "TOTAL_COUNT", -1);
                this.ds_search.setColumn(0, "FROM_DT", this.Div00.form.Div00.form.cal_conStart.value);
        		this.ds_search.setColumn(0, "TO_DT", this.Div00.form.Div00.form.cal_conEnd.value);
        		// 서브워주문대행
        		this.ds_search.setColumn(0, "LOGIN_MTHD_CD", "D0");
            }

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "conHstList") {
        		this.Div00.form.Div00.set_enable(false);
        		this.Div01.form.div_paging.form.cfn_createPage(this.Div01.form.div_paging, this.totalCount, this.Div01.form.cmb_viewCount.value, "fn_pageCallback");
        	}
        	else if(svcID == "insertOdrInqTgtDtls") {
                this.fn_search(true);
            }
        	else if (svcID == "deleteOdrInqTgtDtls") {
                this.ds_select.clearData();
            }
        };

        //페이징 콜백
        this.fn_pageCallback = function(sFlag) {
            var oPaging = this.Div01.form.div_paging;

            if (sFlag) {
                this.ds_search.setColumn(0, "START_NUM", oPaging.uPageNum);
                this.ds_search.setColumn(0, "ROW_COUNT", this.Div01.form.cmb_viewCount.value);
                this.fn_search(false);
            }

            var sTotText = "(<b v='true'>총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
            this.Div01.form.sta_totcnt.set_text(sTotText);
        };

        /***********************************************************************************************
        * POPUP CALLBACK 영역
        ************************************************************************************************/
        this.fn_popupCallback = function(sPopupId, sRetValue) {
            var resData = "";
            var sIdList = "";
            var sNmList = "";

            if (sRetValue == undefined) {
                return;
            }
            else {
                resData = JSON.parse(sRetValue);
            }

            switch (sPopupId) {
                // 주문번호 멀티 팝업
                case "odrNoPopup":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.ODR_NO +",";
                    }
                    this.Div00.form.Div00.form.edt_odrNo.set_value(sIdList);
                    this.fn_setMSearch(this.name,"ODR_NO",sIdList);
                    //trace("### sIdList : " + sIdList);
                    break;
                // 주문번호 멀티 INPUT
                case "SSP_BO_OA_72;ODR_NO":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div00.form.edt_odrNo.set_value(sIdList);
                    this.fn_setMSearch(this.name,"ODR_NO",sIdList);
                    break;
                // 대행담당자 멀티 팝업
                case "dlgteChrpsnPopup":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.ODR_NO +",";
                    }
                    this.Div00.form.Div00.form.edt_dlgteChrpsn.set_value(sIdList);
                    this.fn_setMSearch(this.name,"DLGTE_CHRPSN",sIdList);
                    //trace("### sIdList : " + sIdList);
                    break;
                // 대행담당자 멀티 INPUT
                case "SSP_BO_OA_72;DLGTE_CHRPSN":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div00.form.edt_dlgteChrpsn.set_value(sIdList);
                    this.fn_setMSearch(this.name,"DLGTE_CHRPSN",sIdList);
                    break;

                default :
                    break;
            }
        };

        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_initView = function() {
        	this.fn_setDefaultFromTo();
        	this.Div00.form.Div00.set_enable(true);
        	this.Div01.form.cmb_viewCount.set_index(2);
        	this.Div00.form.Div00.form.edt_odrNo.set_value("");
        	this.Div00.form.Div00.form.edt_odrNo.setFocus();
        	if(this.ds_select.getRowCount() != 0 )
                this.fn_deleteSelectedData("fn_callBack");
        };

        this.fn_setDefaultFromTo = function() {
        	var objCurr = new nexacro.Date();
        	var sToday = objCurr.getFullYear() + ((objCurr.getMonth() + 1) + "").padLeft(2, '0') + (objCurr.getDate() + "").padLeft(2, '0');
        	// 1:1일전, 2:1주일, 3:2주일, 4:1개월, 5:3개월, 6:6개월, 7:1년
        	var sFrom = this.fn_CalDate("4", objCurr);

        	this.Div00.form.Div00.form.cal_conStart.set_value(sFrom);
        	this.Div00.form.Div00.form.cal_conEnd.set_value(sToday);
        }

        this.fn_getGridNumber = function(currow) {
        	//this.ds_search.setColumn(0, "START_NUM", oPaging.uPageNum);
            //this.ds_search.setColumn(0, "ROW_COUNT", this.Div01.form.cmb_viewCount.value);

        	// currow + 1
        	var startNum = this.ds_search.getColumn(0, "START_NUM");
        	var rowCount = this.ds_search.getColumn(0, "ROW_COUNT");
        	return nexacro.toNumber(startNum) + nexacro.toNumber(currow) + 1;
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("btn_search_onclick");
        	this.fn_regMethodESC("fn_closeForm");
        	//this.fn_regMethodShiftENTER("btn_confirm_onclick");
        };

        //
        this.fn_closeForm = function() {
        	this.close(0);
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        // 주문번호 멀티팝업
        this.btn_odrNoMultiPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.fv_coCd};
            this.gfn_openPopup("odrNoPopup", "OD::SSP_BO_OA_28.xfdl", objParam);
        };
        // 주문번호 멀티INPUT
        this.btn_odrNoInput_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name,"ODR_NO",this.Div00.form.Div00.form.edt_odrNo.value,
            "fn_popupCallback",130,300);
        };
        // 대행담당자 멀티팝업
        this.btn_dlgteChrpsnMultiPopup_onclick = function(obj,e)
        {

        };
        // 대행담당자 멀티INPUT
        this.btn_dlgteChrpsnInput_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name,"DLGTE_CHRPSN",this.Div00.form.Div00.form.edt_odrNo.value,
            "fn_popupCallback",130,300);
        };
        // 활성화
        this.btn_active_onclick = function(obj,e)
        {
        	this.Div00.form.Div00.set_enable(true);
        };
        // 초기화
        this.btn_clear_onclick = function(obj,e)
        {
        	this.fn_initView();
        	this.ds_list01.clearData();
        };
        // 조회
        this.btn_search_onclick = function(obj,e)
        {
        	var fromDt = this.Div00.form.Div00.form.cal_conStart.value;
        	var toDt = this.Div00.form.Div00.form.cal_conEnd.value;

        	if (fromDt > toDt) {
        		alert(this.fn_getMessage("ERRS000240"));
        		return;
        	}

            this.fn_setMSearch(this.name, "ODR_NO", this.Div00.form.Div00.form.edt_odrNo.value);
            this.fn_setMSearch(this.name, "DLGTE_CHRPSN", this.Div00.form.Div00.form.edt_dlgteChrpsn.value);

            var nCount = this.ds_select.getRowCount();
            var arrDlgteChrpsn = this.ds_select.extractRowsNF("COL_ITM =='DLGTE_CHRPSN'");
            var arrOdrNo = this.ds_select.extractRowsNF("COL_ITM =='ODR_NO'");

        	if (nCount == 0) {
        		this.fn_search(true);
        	}
        	else {
        		this.fn_insertSelectedData("fn_callBack");
        	}
        };


        // 엑셀 다운로드
        this.btn_excelDownload_onclick = function(obj,e)
        {
        	if(this.ds_list01.getRowCount() == 0){
        		this.alert(this.fn_getMessage("ERRP000205")); // '다운로드 가능한 데이터가 없습니다.'
        	}else{
        		// 20230503_박철희_엑셀다운로드수정
        		// this.gfn_openPopup("pwdSetPopup", "CO_POP::pwdSetPopup.xfdl", null, "fn_excelDownload");
        		this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_excelDownload");
        	}
        };

        this.fn_excelDownload = function(objId, ret)
        {
        	// 20230503_박철희_엑셀다운로드수정
        	// if(!pwd) return; //취소(undefined)
        	// this.ofn_exportExcel({form:this, grid:this.Div01.form.grid_list01, fileName:"접속이력", password: pwd});
        	var answr = ret.split("||||");

        	if(this.gfn_isNull(answr)) { return; }
        	this.ofn_exportExcel({form:this, grid:this.Div01.form.grid_list01, fileName:"접속이력", password: answr[0], downRsn: answr[1], dbWrk: "DOWNLOAD", pgmId: "SSP_BO_OA_71_02"});
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_72_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_72_onkeyup,this);
            this.Div00.form.btn_active.addEventHandler("onclick",this.btn_active_onclick,this);
            this.Div00.form.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.Div00.form.Static06_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div00.form.Static06_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div00.form.btn_dlgteChrpsnMultiPopup.addEventHandler("onclick",this.btn_dlgteChrpsnMultiPopup_onclick,this);
            this.Div00.form.Div00.form.btn_odrNoInput.addEventHandler("onclick",this.btn_odrNoInput_onclick,this);
            this.Div00.form.Div00.form.btn_odrNoMultiPopup.addEventHandler("onclick",this.btn_odrNoMultiPopup_onclick,this);
            this.Div00.form.Div00.form.cal_conStart.addEventHandler("onchanged",this.Div00_Calendar42_onchanged,this);
            this.Div00.form.Div00.form.cal_conEnd.addEventHandler("onchanged",this.Div00_Calendar42_onchanged,this);
            this.Div00.form.Div00.form.btn_dlgteChrpsnInput.addEventHandler("onclick",this.btn_dlgteChrpsnInput_onclick,this);
            this.Div01.form.btn_excelDownload.addEventHandler("onclick",this.btn_excelDownload_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_72.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
