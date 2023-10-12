(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CA_22_2");
            this.set_titletext("상품 Condition 정보");
            this.set_scrolltype("both");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,415);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pcPrdQty", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"QTY_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"QTY_ITV_STR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"QTY_ITV_END\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DC_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"QTY_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"10\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RIGHT_NOW\" type=\"STRING\" size=\"256\"/><Column id=\"RIGHT_NOW_END\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pcPrdDlcstDtls", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"DLCST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_ITV_STR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"QTY_ITV_END\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"EXTR_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DLCST_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"DLCST_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"DLCST_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"10\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RIGHT_NOW\" type=\"STRING\" size=\"256\"/><Column id=\"RIGHT_NOW_END\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_spr", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">일반</Col><Col id=\"COM_DTL_CD\">10</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">배수주문</Col><Col id=\"COM_DTL_CD\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_forServerPrdQty", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"QTY_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"QTY_ITV_STR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"QTY_ITV_END\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DC_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_STR_DTM\" type=\"STRING\" size=\"14\"/><Column id=\"QTY_END_DTM\" type=\"STRING\" size=\"14\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"10\"/><Column id=\"IUD_GB\" type=\"STRING\" size=\"256\"/><Column id=\"RIGHT_NOW\" type=\"STRING\" size=\"256\"/><Column id=\"RIGHT_NOW_END\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_forServerPrdDlcstDtls", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"DLCST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_ITV_STR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"QTY_ITV_END\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"EXTR_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DLCST_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"DLCST_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"DLCST_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"10\"/><Column id=\"RIGHT_NOW\" type=\"STRING\" size=\"256\"/><Column id=\"RIGHT_NOW_END\" type=\"STRING\" size=\"256\"/><Column id=\"IUD_GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00_01_02_00_00_00","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","24","75","16",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("■ 물량할인");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add1",null,"20","70","28","74",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("+추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del1","btn_add1:4","20","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("-삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_qty","0","58",null,"140","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_pcPrdQty");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"20\"/><Column size=\"80\"/><Column size=\"20\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"CO_CD\"/><Cell col=\"1\" text=\"PRD_ID\"/><Cell col=\"2\" text=\"BZPLC_ID\"/><Cell col=\"3\" text=\"QTY_SEQ\"/><Cell col=\"4\" text=\"물량(From)\"/><Cell col=\"5\" text=\"물량(To)\"/><Cell col=\"6\" text=\"할인금액\"/><Cell col=\"7\" text=\"판매통화\"/><Cell col=\"8\" colspan=\"2\" text=\"기간(From)\"/><Cell col=\"10\" colspan=\"2\" text=\"기간(To)\"/></Band><Band id=\"body\"><Cell text=\"bind:CO_CD\"/><Cell col=\"1\" text=\"bind:PRD_ID\"/><Cell col=\"2\" text=\"bind:BZPLC_ID\"/><Cell col=\"3\" text=\"bind:QTY_SEQ\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"expr:currow == (dataset.rowcount - 1) ? &quot;mask&quot; : &quot;readonly&quot;\" text=\"bind:QTY_ITV_STR\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:QTY_ITV_END\" displaytype=\"number\" edittype=\"readonly\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:DC_AMT\" displaytype=\"number\" edittype=\"expr:comp.parent.fn_couldShowDcAmt(currow) == true ? &quot;mask&quot; : &quot;readonly&quot;\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:CURR_UNIT_CD\"/><Cell col=\"8\" edittype=\"expr:comp.parent.fn_couldShowCheckbox01(currow, &quot;F&quot;) == true ? &quot;checkbox&quot; : &quot;none&quot;\" displaytype=\"expr:comp.parent.fn_couldShowCheckbox01(currow, &quot;F&quot;) == true ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" text=\"bind:RIGHT_NOW\"/><Cell col=\"9\" text=\"bind:QTY_STR_DTM\" displaytype=\"date\" edittype=\"expr:comp.parent.fn_couldChangeStrDtm01(currow, &quot;F&quot;) == true ? &quot;date&quot; : &quot;readonly&quot;\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"10\" displaytype=\"expr:comp.parent.fn_couldShowCheckbox01(currow, &quot;T&quot;) == true ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" edittype=\"expr:comp.parent.fn_couldShowCheckbox01(currow, &quot;T&quot;) == true ? &quot;checkbox&quot; : &quot;none&quot;\" text=\"bind:RIGHT_NOW_END\"/><Cell col=\"11\" text=\"bind:QTY_END_DTM\" displaytype=\"date\" edittype=\"expr:comp.parent.fn_couldChangeStrDtm01(currow, &quot;T&quot;) == true ? &quot;date&quot; : &quot;readonly&quot;\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltext=\" \" calendardisplayinvalidtext=\" \"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00_00","0","49","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_01","0","198","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","221","61","16",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("■ 배송비");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_dlcst","0","255",null,"140","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_pcPrdDlcstDtls");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"20\"/><Column size=\"87\"/><Column size=\"20\"/><Column size=\"92\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"CO_CD\"/><Cell col=\"1\" text=\"PRD_ID\"/><Cell col=\"2\" text=\"BZPLC_ID\"/><Cell col=\"3\" text=\"DLCST_SEQ\"/><Cell col=\"4\" text=\"유형\"/><Cell col=\"5\" text=\"구분\"/><Cell col=\"6\" text=\"수량(From)\"/><Cell col=\"7\" text=\"수량(To)\"/><Cell col=\"8\" text=\"할증금액\"/><Cell col=\"9\" text=\"판매통화\"/><Cell col=\"10\" colspan=\"2\" text=\"기간(From)\"/><Cell col=\"12\" colspan=\"2\" text=\"기간(To)\"/></Band><Band id=\"body\"><Cell text=\"bind:CO_CD\"/><Cell col=\"1\" text=\"bind:PRD_ID\"/><Cell col=\"2\" text=\"bind:BZPLC_ID\"/><Cell col=\"3\" text=\"bind:DLCST_SEQ\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"bind:DLCST_SPR_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_spr\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"6\" text=\"bind:QTY_ITV_STR\" displaytype=\"number\" edittype=\"expr:currow == (dataset.rowcount - 1) ? &quot;mask&quot; : &quot;readonly&quot;\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:QTY_ITV_END\" displaytype=\"number\" edittype=\"readonly\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:EXTR_AMT\" displaytype=\"number\" edittype=\"expr:comp.parent.fn_couldShowExtrAmt(currow) == true ? &quot;mask&quot; : &quot;readonly&quot;\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:CURR_UNIT_CD\"/><Cell col=\"10\" displaytype=\"expr:comp.parent.fn_couldShowCheckbox02(currow, &quot;F&quot;) == true ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" edittype=\"expr:comp.parent.fn_couldShowCheckbox02(currow, &quot;F&quot;) == true ? &quot;checkbox&quot; : &quot;none&quot;\" text=\"bind:RIGHT_NOW\"/><Cell col=\"11\" text=\"bind:DLCST_STR_DTM\" displaytype=\"date\" edittype=\"expr:comp.parent.fn_couldChangeStrDtm02(currow, &quot;F&quot;) == true ? &quot;date&quot; : &quot;readonly&quot;\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltext=\" \" calendardisplayinvalidtext=\" \"/><Cell col=\"12\" displaytype=\"expr:comp.parent.fn_couldShowCheckbox02(currow, &quot;T&quot;) == true ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" edittype=\"expr:comp.parent.fn_couldShowCheckbox02(currow, &quot;T&quot;) == true ? &quot;checkbox&quot; : &quot;none&quot;\" text=\"bind:RIGHT_NOW_END\"/><Cell col=\"13\" text=\"bind:DLCST_END_DTM\" displaytype=\"date\" edittype=\"expr:comp.parent.fn_couldChangeStrDtm02(currow, &quot;T&quot;) == true ? &quot;date&quot; : &quot;readonly&quot;\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltext=\" \" calendardisplayinvalidtext=\" \"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00_00_00_00","0","245","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add2",null,"216","70","28","74",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("+추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del2","btn_add2:4","216","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("-삭제");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00_00_00_01","0","395","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addHistory",null,"20","70","28","btn_add1:4",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("이력추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_conditionSelct",null,"20","120","28","btn_addHistory:4",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Condition 이력조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addHistory2",null,"216","70","28","btn_add2:4",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("이력추가");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,415,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_22_2.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CA_22_2.xfdl", function() {
        /******************************************************************************
        PROJECT NAME : C:\Users\spaa\git\ssp-bo\src\main\ui\RD\SSP_BO_LA_04_2.xfdl
        CREATION DATES : 2022/03/11
        CREATER : 이택우
        *******************************************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        this.preQtyStrDtm = "";
        this.preQtyEndDtm = "";
        this.preDlcstStrDtm = "";
        this.preDlcstEndDtm = "";
        this.localPrdId = "";
        this.localPrdNm = "";
        this.localBzplcId = "";
        this.localBzplcNm = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.fn_odCommLoading();
        	//공통코드 조회
        	this.fn_commonCodeSearch();
        	this.totalCount = 0;
        	this.totalCount2 = 0;
        };

        // 사용자 초기화
        this.fn_userInit = function(prdId, prdNm, bzplcId, bzplcNm) {
        	this.localPrdId = prdId;
        	this.localPrdNm = prdNm;
        	this.localBzplcId = bzplcId;
        	this.localBzplcNm = bzplcNm;

        	this.ds_search.setColumn(0,"CO_CD", this.fv_coCd);//회사코드
        	this.ds_search.setColumn(0,"PRD_ID", this.localPrdId);//PRD_ID
        	this.ds_search.setColumn(0,"PUB_ONLY_SPR_CD","");//공용전용구분
        	this.ds_search.setColumn(0,"BZPLC_ID", this.localBzplcId);
        };

        this.fn_setDisplay = function(bNotReadOnly)	{

        	this.btn_conditionSelct.set_visible(true);

        	if(bNotReadOnly == false)
        	{
        		this.btn_add1.set_enable(false);
        		this.btn_add2.set_enable(false);
        		this.btn_addHistory.set_enable(false);
        		this.btn_addHistory2.set_enable(false);
        		this.btn_del1.set_enable(false);
        		this.btn_del2.set_enable(false);

        		this.grid_qty.set_readonly(true);
        		this.grid_dlcst.set_readonly(true);
        	}
        	else {

        		this.btn_add1.set_enable(true);
        		this.btn_add2.set_enable(true);
        		this.btn_addHistory.set_enable(true);
        		this.btn_addHistory2.set_enable(true);
        		this.btn_del1.set_enable(true);
        		this.btn_del2.set_enable(true);

        		this.grid_qty.set_readonly(false);
        		this.grid_dlcst.set_readonly(false);
        	}
        }

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        // //공통코드조회
        this.fn_commonCodeSearch = function() {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_comboDateTemp=ds_output1 ds_comboDispStatsTemp=ds_output2";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD,DISP_STATS_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        //조회(물량할인/배송비)
        this.fn_searchPcPrdQtyDlcstDtls = function() {
        	this.ds_search.setColumn(0,"PRD_ID", this.localPrdId);//PRD_ID
        	if (typeof(this.localBzplcId) != "undefined") {
        		this.ds_search.setColumn(0,"BZPLC_ID", this.localBzplcId);//전용상품조회시 사업자ID 설정
        	}

        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);

        	var sSvcId = "searchPcPrdQtyDlcstDtls";
        	var sUrl = "/pc/pc-prc-mng/get-pc-prd-qty-dlcst-info.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_pcPrdQty=pcPrdQtyInfo ds_pcPrdDlcstDtls=pcPrdDlcstInfo";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (errorCode != 0 && errorCode != -100) {
        		alert(errorMsg);
        	}

        	switch (svcID) {
        		case "searchPcPrdQtyDlcstDtls" :
        			this.ds_pcPrdQty.set_updatecontrol(false);
        			for (var i = 0; i < this.ds_pcPrdQty.rowcount; i++) {
        				this.ds_pcPrdQty.setColumn(i, "CURR_UNIT_CD", "KRW");
        			}
        			this.ds_pcPrdQty.set_updatecontrol(true);
        			this.ds_pcPrdDlcstDtls.set_updatecontrol(false);
        			for (var i = 0; i < this.ds_pcPrdDlcstDtls.rowcount; i++) {
        				this.ds_pcPrdDlcstDtls.setColumn(i, "CURR_UNIT_CD", "KRW");
        			}
        			this.ds_pcPrdDlcstDtls.set_updatecontrol(true);
        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        // 물량할인 금액 readonly 판단
        this.fn_couldShowDcAmt = function(currow) {
        	if(this.ds_pcPrdQty.getColumn(currow, "QTY_STR_DTM") <= this.fn_todayTime() && this.ds_pcPrdQty.getRowType(currow) != Dataset.ROWTYPE_INSERT){
        		return false;
        	}
        	return true;
        }
        // 배송비 금액 readonly 판단
        this.fn_couldShowExtrAmt = function(currow) {
        	if(this.ds_pcPrdDlcstDtls.getColumn(currow, "DLCST_STR_DTM") <= this.fn_todayTime() && this.ds_pcPrdDlcstDtls.getRowType(currow) != Dataset.ROWTYPE_INSERT){
        		return false;
        	}
        	return true;
        }
        // 물량할인 기간(From) 수정가능 여부 판단
        this.fn_couldChangeStrDtm01 = function(currow, fromTo) {
        	// 시작일자
        	if (fromTo == "F") {
        		if (this.ds_pcPrdQty.getColumn(currow, "QTY_ITV_STR") == "1" &&
        			this.ds_pcPrdQty.getRowType(currow) == Dataset.ROWTYPE_INSERT) {
        			if (this.ds_pcPrdQty.getColumn(currow, "RIGHT_NOW") == "1")		return false;
        			else	return true;
        		}
        		return false;
        	}
        	else if (fromTo == "T") {
        		if (this.ds_pcPrdQty.getColumn(currow, "QTY_ITV_STR") == "1" &&
        			(this.ds_pcPrdQty.getRowType(currow) == Dataset.ROWTYPE_INSERT ||
        			 this.ds_pcPrdQty.getColumn(currow, "QTY_END_DTM") >= this.fn_todayTime())) {
        			for (var i = 0; i < this.ds_pcPrdQty.rowcount; i++) {
        				if (i == currow)	continue;

        				if (this.ds_pcPrdQty.getColumn(i, "RIGHT_NOW_END") == "1")	return false;
        				if (i > currow && this.ds_pcPrdQty.getColumn(i, "QTY_ITV_STR") == "1")	return false;
        			}
        			return true;
        		}
        		return false;
        	}
        };

        // 물량할인 즉시 체크박스 표시 여부 판단
        this.fn_couldShowCheckbox01 = function(currow, fromTo) {
        	// 시작일 체크박스
        	if (fromTo == "F") {
        		if (this.ds_pcPrdQty.getColumn(currow, "QTY_ITV_STR") == "1" &&
        			this.ds_pcPrdQty.getRowType(currow) == Dataset.ROWTYPE_INSERT) {
        			for (var i = 0; i < this.ds_pcPrdQty.rowcount; i++) {
        				if (i == currow) {
        					if (this.ds_pcPrdQty.getColumn(i, "RIGHT_NOW_END") == "1")	return false;
        					continue;
        				}
        				if (this.ds_pcPrdQty.getColumn(i, "RIGHT_NOW") == "1") {
        					if (this.ds_pcPrdQty.getColumn(i, "QTY_ITV_STR") == "1")	return false;
        				}
        				if (this.ds_pcPrdQty.getColumn(i, "RIGHT_NOW_END") == "1")	return false;
        			}
        			return true;
        		}
        		return false;
        	}
        	// 종료일 체크박스
        	else if (fromTo == "T") {
        		if (this.ds_pcPrdQty.getColumn(currow, "QTY_ITV_STR") == "1" &&
        			(this.ds_pcPrdQty.getRowType(currow) != Dataset.ROWTYPE_INSERT &&
        			 this.ds_pcPrdQty.getColumn(currow, "QTY_STR_DTM") <= this.fn_todayTime())) {
        			var foundCheck = false;

        			for (var i = 0; i < this.ds_pcPrdQty.rowcount; i++) {

        				if (this.ds_pcPrdQty.getColumn(i, "RIGHT_NOW_END") == "1")	foundCheck = true;

        				if (i == currow) {
        					if (this.ds_pcPrdQty.getColumn(i, "RIGHT_NOW") == "1")	return false;
        					continue;
        				}

        				if (this.ds_pcPrdQty.getColumn(i, "RIGHT_NOW") == "1")	return false;
        				if (this.ds_pcPrdQty.getColumn(i, "RIGHT_NOW_END") == "1") {
        					if (this.ds_pcPrdQty.getColumn(i, "QTY_ITV_STR") == "1")	return false;
        				}
        				//if (i > currow && this.ds_pcPrdQty.getColumn(i, "QTY_ITV_STR") == "1" && !foundCheck)	return false;
        			}

        			return true;
        		}
        		return false;
        	}
        };

        // 배송지 기간(From) 수정가능 여부 판단
        this.fn_couldChangeStrDtm02 = function(currow, fromTo) {
        	// 시작일자
        	if (fromTo == "F") {
        		if (this.ds_pcPrdDlcstDtls.getColumn(currow, "QTY_ITV_STR") == "1" &&
        			this.ds_pcPrdDlcstDtls.getRowType(currow) == Dataset.ROWTYPE_INSERT) {
        			if (this.ds_pcPrdDlcstDtls.getColumn(currow, "RIGHT_NOW") == "1")	return false;
        			else	return true;
        		}
        		return false;
        	}
        	// 종료일자
        	else if (fromTo == "T") {
        		if (this.ds_pcPrdDlcstDtls.getColumn(currow, "QTY_ITV_STR") == "1" &&
        			(this.ds_pcPrdDlcstDtls.getRowType(currow) == Dataset.ROWTYPE_INSERT ||
        			 this.ds_pcPrdDlcstDtls.getColumn(currow, "DLCST_STR_DTM") >= this.fn_todayTime())) {
        			if (this.ds_pcPrdDlcstDtls.getColumn(currow, "RIGHT_NOW") == "1")	return false;
        			else	return true;
        		}
        		return false;
        	}
        };

        // 배송비 즉시 체크박스 표시 여부 판단
        this.fn_couldShowCheckbox02 = function(currow, fromTo) {
        	// 시작일자return false;
        	if (fromTo == "F") {
        		if ((this.ds_pcPrdDlcstDtls.getColumn(currow, "QTY_ITV_STR") == "1"  || this.ds_pcPrdDlcstDtls.getColumn(currow, "DLCST_SPR_CD") == "20") &&
        			this.ds_pcPrdDlcstDtls.getRowType(currow) == Dataset.ROWTYPE_INSERT ) {
        			for (var i = 0; i < this.ds_pcPrdDlcstDtls.rowcount; i++) {
        				if (i == currow) {
        					if (this.ds_pcPrdDlcstDtls.getColumn(i, "RIGHT_NOW_END") == "1")	return false;
        					continue;
        				}
        				if (this.ds_pcPrdDlcstDtls.getColumn(i, "RIGHT_NOW") == "1") {
        					if (this.ds_pcPrdDlcstDtls.getColumn(i, "QTY_ITV_STR") == "1")	return false;
        				}
        				if (this.ds_pcPrdDlcstDtls.getColumn(i, "RIGHT_NOW_END") == "1")	return false;
        			}
        			return true;
        		}
        		return false;
        	}
        	// 종료일자
        	else if (fromTo == "T") {
        		if ((this.ds_pcPrdDlcstDtls.getColumn(currow, "QTY_ITV_STR") == "1" || this.ds_pcPrdDlcstDtls.getColumn(currow, "DLCST_SPR_CD") == "20") &&
        			(this.ds_pcPrdDlcstDtls.getRowType(currow) != Dataset.ROWTYPE_INSERT &&
        			 this.ds_pcPrdDlcstDtls.getColumn(currow, "DLCST_STR_DTM") <= this.fn_todayTime())) {
        			var foundCheck = false;
        			for (var i = 0; i < this.ds_pcPrdDlcstDtls.rowcount; i++) {
        				if (this.ds_pcPrdDlcstDtls.getColumn(i, "RIGHT_NOW_END") == "1")	foundCheck = true;
        				if (i == currow) {
        					if (this.ds_pcPrdDlcstDtls.getColumn(i, "RIGHT_NOW") == "1")	return false;
        					continue;
        				}
        				if (this.ds_pcPrdDlcstDtls.getColumn(i, "RIGHT_NOW") == "1")		return false;
        				if (this.ds_pcPrdDlcstDtls.getColumn(i, "RIGHT_NOW_END") == "1") {
        					if (this.ds_pcPrdDlcstDtls.getColumn(i, "QTY_ITV_STR") == "1")	return false;
        				}
        				//if (i > currow && this.ds_pcPrdDlcstDtls.getColumn(i, "QTY_ITV_STR") == "1" && !foundCheck)	return false;
        			}

        			return true;
        		}
        		return false;
        	}
        };

        // ds_pcPrdQty 데이터셋에 "이력추가" 데이터가 있는지 검사
        this.fn_isThereHistory = function() {
        	if (this.ds_pcPrdQty.rowcount == 0)		return false;

        	for (var i = 0; i < this.ds_pcPrdQty.rowcount; i++) {
        		if (this.ds_pcPrdQty.getColumn(i, "TYPE") == "H")	return true;
        	}
        	return false;
        };

        this.fn_getRightNowCount = function() {
        	var count = 0;
        	for (var i = 0; i < this.ds_pcPrdQty.rowcount; i++) {
        		if (this.ds_pcPrdQty.getColumn(i, "RIGHT_NOW") == "1")	count++;
        	}

        	return count;
        };

        this.fn_firstHistoryRow = function() {
        	for (var i = 0; i < this.ds_pcPrdQty.rowcount; i++) {
        		if (this.ds_pcPrdQty.getColumn(i, "TYPE") == "H")	return i;
        	}
        	return -1;
        };

        this.fn_lastHistoryRow = function() {
        	for (var i = this.ds_pcPrdQty.rowcount - 1; i >= 0; i--) {
        		if (this.ds_pcPrdQty.getColumn(i, "TYPE") == "H")	return i;
        	}
        	return -1;
        };

        // 저장여부 조회
        this.fn_shouldSave = function() {
        	//변경해야함
        	if(this.fn_shouldSaveDataset(this.ds_pcPrdQty) == true ||
        	   this.fn_shouldSaveDataset(this.ds_pcPrdDlcstDtls) == true )	{
        	   return true;
        	}
        	else	{
        	   return false;
        	}
        };

        this.fn_shouldSaveDataset = function(dataset) {
        	var rowType = "";
        	var deletedCount = 0;
        	deletedCount = dataset.getDeletedRowCount();

        	for (var i = 0; i < dataset.rowcount; i++) {
        		rowType = dataset.getRowType(i);

        		if (rowType == Dataset.ROWTYPE_UPDATE ||
        			rowType == Dataset.ROWTYPE_INSERT ||
        			deletedCount > 0) {
        			return true;
        		}
        	}

        	if (dataset.rowcount <= 0 && deletedCount > 0)	return true;

        	return false;
        };

        // 물량할인 저장용 Dataset 생성
        this.fn_getSaveDataset01 = function() {

        	if(this.fn_shouldSaveDataset(this.ds_pcPrdQty) == false)	return null;

        	if(this.ds_forServerPrdQty != undefined && this.ds_forServerPrdQty.rowcount != 0 )
        		this.ds_forServerPrdQty.clearData();

        	var deletedCount = this.ds_pcPrdQty.getDeletedRowCount();
        	var rowType = "";
        	var nRow = "";

        	for (var i = 0; i < this.ds_pcPrdQty.rowcount; i++) {
        		rowType = this.ds_pcPrdQty.getRowType(i);
        		if (rowType == Dataset.ROWTYPE_NORMAL)	continue;

        		nRow = this.ds_forServerPrdQty.addRow();
        		this.ds_forServerPrdQty.setColumn(nRow, "CO_CD", this.fv_coCd);
        		this.ds_forServerPrdQty.setColumn(nRow, "BZPLC_ID", this.ds_pcPrdQty.getColumn(i, "BZPLC_ID"));
        		this.ds_forServerPrdQty.setColumn(nRow, "PRD_ID", this.ds_pcPrdQty.getColumn(i, "PRD_ID"));
        		this.ds_forServerPrdQty.setColumn(nRow, "QTY_SEQ", this.ds_pcPrdQty.getColumn(i, "QTY_SEQ"));
        		this.ds_forServerPrdQty.setColumn(nRow, "QTY_ITV_STR", this.ds_pcPrdQty.getColumn(i, "QTY_ITV_STR"));
        		this.ds_forServerPrdQty.setColumn(nRow, "QTY_ITV_END", this.ds_pcPrdQty.getColumn(i, "QTY_ITV_END"));
        		this.ds_forServerPrdQty.setColumn(nRow, "DC_AMT", this.ds_pcPrdQty.getColumn(i, "DC_AMT"));
        		this.ds_forServerPrdQty.setColumn(nRow, "CURR_UNIT_CD", "KRW");
        		this.ds_forServerPrdQty.setColumn(nRow, "QTY_STR_DTM", this.ds_pcPrdQty.getColumn(i, "QTY_STR_DTM").substr(0, 14));
        		this.ds_forServerPrdQty.setColumn(nRow, "QTY_END_DTM", this.ds_pcPrdQty.getColumn(i, "QTY_END_DTM").substr(0, 14));
        		this.ds_forServerPrdQty.setColumn(nRow, "CHECK_YN", this.ds_pcPrdQty.getColumn(i, "CHECK_YN"));
        		this.ds_forServerPrdQty.setColumn(nRow, "RIGHT_NOW", this.ds_pcPrdQty.getColumn(i, "RIGHT_NOW"));
        		this.ds_forServerPrdQty.setColumn(nRow, "RIGHT_NOW_END", this.ds_pcPrdQty.getColumn(i, "RIGHT_NOW_END"));

        		if (rowType == Dataset.ROWTYPE_INSERT) {
        			this.ds_forServerPrdQty.setColumn(nRow, "IUD_GB", "I");
        		}
        		else if (rowType == Dataset.ROWTYPE_UPDATE) {
        			this.ds_forServerPrdQty.setColumn(nRow, "IUD_GB", "U");
        		}
        	}

        	// 삭제된 데이터 찾기
        	if (deletedCount <= 0)	return this.ds_forServerPrdQty;

        	var deletedArray = this.ds_pcPrdQty.getDeletedRowset();
        	this.fn_setDeletedDataToServerSet01(deletedArray);
        	return this.ds_forServerPrdQty;
        };

        // 배송비 저장용 Dataset 생성
        this.fn_getSaveDataset02 = function() {

        	if(this.fn_shouldSaveDataset(this.ds_pcPrdDlcstDtls) == false)	return null;

        	if(this.ds_forServerPrdDlcstDtls != undefined && this.ds_forServerPrdDlcstDtls.rowcount != 0 )
        		this.ds_forServerPrdDlcstDtls.clearData();

        	var deletedCount = this.ds_pcPrdDlcstDtls.getDeletedRowCount();
        	var rowType = "";
        	var nRow = "";

        	for (var i = 0; i < this.ds_pcPrdDlcstDtls.rowcount; i++) {
        		rowType = this.ds_pcPrdDlcstDtls.getRowType(i);
        		if (rowType == Dataset.ROWTYPE_NORMAL)	continue;

        		nRow = this.ds_forServerPrdDlcstDtls.addRow();
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "CO_CD", this.fv_coCd);
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "BZPLC_ID", this.ds_pcPrdDlcstDtls.getColumn(i, "BZPLC_ID"));
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "PRD_ID", this.ds_pcPrdDlcstDtls.getColumn(i, "PRD_ID"));
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "DLCST_SEQ", this.ds_pcPrdDlcstDtls.getColumn(i, "DLCST_SEQ"));
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "QTY_ITV_STR", this.ds_pcPrdDlcstDtls.getColumn(i, "QTY_ITV_STR"));
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "QTY_ITV_END", this.ds_pcPrdDlcstDtls.getColumn(i, "QTY_ITV_END"));
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "EXTR_AMT", this.ds_pcPrdDlcstDtls.getColumn(i, "EXTR_AMT"));
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "CURR_UNIT_CD", "KRW");
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "DLCST_STR_DTM", this.ds_pcPrdDlcstDtls.getColumn(i, "DLCST_STR_DTM").substr(0, 14));
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "DLCST_END_DTM", this.ds_pcPrdDlcstDtls.getColumn(i, "DLCST_END_DTM").substr(0, 14));
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "DLCST_SPR_CD", this.ds_pcPrdDlcstDtls.getColumn(i, "DLCST_SPR_CD"));
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "CHECK_YN", this.ds_pcPrdDlcstDtls.getColumn(i, "CHECK_YN"));
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "RIGHT_NOW", this.ds_pcPrdDlcstDtls.getColumn(i, "RIGHT_NOW"));
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "RIGHT_NOW_END", this.ds_pcPrdDlcstDtls.getColumn(i, "RIGHT_NOW_END"));

        		if (rowType == Dataset.ROWTYPE_INSERT) {
        			this.ds_forServerPrdDlcstDtls.setColumn(nRow, "IUD_GB", "I");
        		}
        		else if (rowType == Dataset.ROWTYPE_UPDATE) {
        			this.ds_forServerPrdDlcstDtls.setColumn(nRow, "IUD_GB", "U");
        		}
        	}

        	// 삭제된 데이터 찾기
        	if (deletedCount <= 0)	return this.ds_forServerPrdDlcstDtls;

        	var deletedArray = this.ds_pcPrdDlcstDtls.getDeletedRowset();
        	this.fn_setDeletedDataToServerSet02(deletedArray);
        	return this.ds_forServerPrdDlcstDtls;
        };

        // 물량할인 데이터셋(ds_forServerPrdQty)에 삭제된 데이터 추가
        this.fn_setDeletedDataToServerSet01 = function(deletedArray) {
        	if (deletedArray.length <= 0) {
        		trace("### fn_setDeletedDataToServerSet01 - 삭제된 데이터가 없습니다.");
        		return;
        	}

        	// Dataset의 컬럼 순서
        	// CHK, CO_CD, BZPLC_ID, PRD_ID, QTY_SEQ, QTY_ITV_STR, QTY_ITV_END, DC_AMT, CURR_UNIT_CD, QTY_STR_DTM, QTY_END_DTM, CHECK_YN, TYPE
        	// ds_forServerPrdQty
        	// CHK, CO_CD, BZPLC_ID, PRD_ID, QTY_SEQ, QTY_ITV_STR, QTY_ITV_END, DC_AMT, CURR_UNIT_CD, QTY_STR_DTM, QTY_END_DTM, CHECK_YN, IUD_GB
        	var nRow = -1;
        	var data = "";
        	for (var i = 0; i < deletedArray.length; i++) {
        		data = deletedArray[i];
        		//trace("### datas : " + datas);
        		nRow = this.ds_forServerPrdQty.insertRow(0);
        		this.ds_forServerPrdQty.setColumn(nRow, "CHK", data[0]);
        		this.ds_forServerPrdQty.setColumn(nRow, "CO_CD", data[1]);
        		this.ds_forServerPrdQty.setColumn(nRow, "BZPLC_ID", data[2]);
        		this.ds_forServerPrdQty.setColumn(nRow, "PRD_ID", data[3]);
        		this.ds_forServerPrdQty.setColumn(nRow, "QTY_SEQ", data[4]);
        		this.ds_forServerPrdQty.setColumn(nRow, "QTY_ITV_STR", data[5]);
        		this.ds_forServerPrdQty.setColumn(nRow, "QTY_ITV_END", data[6]);
        		this.ds_forServerPrdQty.setColumn(nRow, "DC_AMT", data[7]);
        		this.ds_forServerPrdQty.setColumn(nRow, "CURR_UNIT_CD", data[8]);
        		this.ds_forServerPrdQty.setColumn(nRow, "QTY_STR_DTM", data[9]);
        		this.ds_forServerPrdQty.setColumn(nRow, "QTY_END_DTM", data[10]);
        		this.ds_forServerPrdQty.setColumn(nRow, "CHECK_YN", data[11]);
        		this.ds_forServerPrdQty.setColumn(nRow, "IUD_GB", "D");
        	}
        };

        // 배송비 데이터셋(ds_forServerPrdDlcstDtls)에 삭제된 데이터 추가
        this.fn_setDeletedDataToServerSet02 = function(deletedArray) {
        	if (deletedArray.length <= 0) {
        		trace("### fn_setDeletedDataToServerSet02 - 삭제된 데이터가 없습니다.");
        		return;
        	}

        	// Dataset의 컬럼 순서
        	// 0  , 1    , 2       , 3     , 4        , 5          , 6          , 7       , 8           , 9            , 10           , 11          , 12      , 13  , 14       , 15
        	// CHK, CO_CD, BZPLC_ID, PRD_ID, DLCST_SEQ, QTY_ITV_STR, QTY_ITV_END, EXTR_AMT, CURR_UNIT_CD, DLCST_STR_DTM, DLCST_END_DTM, DLCST_SPR_CD, CHECK_YN, TYPE, RIGHT_NOW, RIGHT_NOW_END
        	// ds_forServerPrdDlcstDtls
        	// 0  , 1    , 2       , 3     , 4        , 5          , 6          , 7       , 8           , 9            , 10           , 11          , 12      , 13       , 14           , 15
        	// CHK, CO_CD, BZPLC_ID, PRD_ID, DLCST_SEQ, QTY_ITV_STR, QTY_ITV_END, EXTR_AMT, CURR_UNIT_CD, DLCST_STR_DTM, DLCST_END_DTM, DLCST_SPR_CD, CHECK_YN, RIGHT_NOW, RIGHT_NOW_END, IUD_GB
        	var nRow = -1;
        	var data = "";
        	for (var i = 0; i < deletedArray.length; i++) {
        		data = deletedArray[i];
        		//trace("### datas : " + datas);
        		nRow = this.ds_forServerPrdDlcstDtls.insertRow(0);
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "CHK", data[0]);
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "CO_CD", data[1]);
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "BZPLC_ID", data[2]);
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "PRD_ID", data[3]);
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "DLCST_SEQ", data[4]);
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "QTY_ITV_STR", data[5]);
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "QTY_ITV_END", data[6]);
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "EXTR_AMT", data[7]);
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "CURR_UNIT_CD", data[8]);
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "DLCST_STR_DTM", data[9]);
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "DLCST_END_DTM", data[10]);
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "DLCST_SPR_CD", data[11]);
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "CHECK_YN", data[12]);
        		//this.ds_forServerPrdDlcstDtls.setColumn(nRow, "RIGHT_NOW", data[14]);
        		//this.ds_forServerPrdDlcstDtls.setColumn(nRow, "RIGHT_NOW_END", data[15]);
        		this.ds_forServerPrdDlcstDtls.setColumn(nRow, "IUD_GB", "D");
        	}
        };


        // 물량할인 물량, 할인금액 값 확인
        this.fn_checkPrdQtyColumns = function() {
        	if (this.ds_pcPrdQty.rowcount > 0) {
        		if (this.gfn_isNull(this.ds_pcPrdQty.getColumn(this.ds_pcPrdQty.rowcount - 1, "QTY_ITV_STR")) ||
        			this.gfn_isNull(this.ds_pcPrdQty.getColumn(this.ds_pcPrdQty.rowcount - 1, "DC_AMT"))) {
        			//alert("상품 Condition 물량할인 - 물량 값 또는 할인금액 입력이 필요합니다.")
        			return false;
        		}
        	}
        	return true;
        };

        // 배송비 수량, 할증금액 값 확인
        this.fn_checkPrdDlcstDtlColumns = function() {
        	if (this.ds_pcPrdDlcstDtls.rowcount > 0) {
        		if (this.gfn_isNull(this.ds_pcPrdDlcstDtls.getColumn(this.ds_pcPrdDlcstDtls.rowcount - 1, "QTY_ITV_STR")) ||
        			this.gfn_isNull(this.ds_pcPrdDlcstDtls.getColumn(this.ds_pcPrdDlcstDtls.rowcount - 1, "EXTR_AMT"))) {
        			//alert("상품 Condition 배송비 - 수량 값 또는 할증금액 입력이 필요합니다.")
        			return false;
        		}
        	}
        	return true;
        };

        this.fn_getPreDlcstSprCd = function(nowPos) {
        	// 첫번째 Row의 배송비구분코드는 "10"으로 설정
        	if (nowPos == 0)	return "10";
        	return this.ds_pcPrdDlcstDtls.getColumn(nowPos - 1, "DLCST_SPR_CD");
        };

        // 배송비구분 코드(DLCST_SPR_CD) 변경가능 여부
        this.fn_couldChangeDlcstSprCd = function(dlcstSprCd) {
        	for (var i = 0; i < this.ds_pcPrdDlcstDtls.rowcount; i++) {
        		if (this.ds_pcPrdDlcstDtls.getColumn(i, "DLCST_SPR_CD") != dlcstSprCd)	return false;
        	}
        	return true;
        };

        this.fn_getLineSegmentDay = function(dataset, rowIndex, strEndDayColumn) {
        	// 데이터셋에 기존 데이터가 없는 경우 현재시간기준의 10분 이후 데이터를 반환
        	if (dataset.rowcount == 0 || (dataset.rowcount - 1) < rowIndex || rowIndex < 0) {
        		return this.fn_calcToday(0, 0, 10);
        	}

        	// 지정된 컬럼이 존재하지 않는다.
        	if (dataset.getColIndex(strEndDayColumn) == -1) {
        		trace("### Dataset에 지정한 컬럼이(" + strEndDayColumn + ") 존재하지 않습니다.");
        		return "-1";
        	}

        	var strEndDayValue = dataset.getColumn(rowIndex, strEndDayColumn);

        	if (this.gfn_isNull(strEndDayValue) || strEndDayValue.length < 14) {
        		trace("### 지정한 컬럼의 데이터가(" + strEndDayValue + ") 유효하지 않음");
        		return "-1";
        	}

        	if (strEndDayValue < this.fn_calcToday())	strEndDayValue = this.fn_todayTime(); //this.fn_calcToday();

        	var objTargetDay = new nexacro.Date();
        	var year = strEndDayValue.substr(0, 4);
        	var month = strEndDayValue.substr(4, 2);
        	var day = strEndDayValue.substr(6, 2);
        	var hours = strEndDayValue.substr(8, 2);
        	var minutes = strEndDayValue.substr(10, 2);
        	var seconds = strEndDayValue.substr(12, 2);

        	var sDate = year + (month+"").padLeft(2,"0") + (day+"").padLeft(2,"0")
        	sDate += (hours+"").padLeft(2,"0") +  (minutes+"").padLeft(2,"0") +  ((parseInt(seconds)+1)+"").padLeft(2,"0") ;

        // 	objTargetDay.setYear(year);
        // 	objTargetDay.setMonth(month);
        // 	objTargetDay.setDate(day);
        // 	objTargetDay.setHours(hours);
        // 	objTargetDay.setMinutes(minutes);
        // 	objTargetDay.setSeconds(seconds);
        // 	objTargetDay.setSeconds(objTargetDay.getSeconds() + 1);
        //
        // 	var sDate = objTargetDay.getFullYear() + (objTargetDay.getMonth() + "").padLeft(2, "0") + (objTargetDay.getDate() + "").padLeft(2, "0");
        // 	sDate += (objTargetDay.getHours() + "").padLeft(2, "0") + (objTargetDay.getMinutes() + "").padLeft(2, "0") + (objTargetDay.getSeconds() + "").padLeft(2, "0");
        	return sDate;
        };

        /***********************************************************************************************
        *  Component Event 영역
        ************************************************************************************************/
        // 물량할인 이력추가
        this.btn_addHistory_onclick = function(obj,e)
        {
        	if (!this.fn_checkPrdQtyColumns()) {
        		//alert("상품 Condition 물량할인 - 물량 값 또는 할인금액 입력이 필요합니다.")
        		this.alert(this.fn_getMessage("ERRP000229"));
        		return;
        	}

        	if(this.ds_pcPrdQty != null){
        		var beforeDate = "";
        		var nowDate = this.fn_todayTime();
        		var checkCnt = 0;
        		for(var i = 0; i < this.ds_pcPrdQty.rowcount; i++){
        			//getRowType
        			var curQtyItvStr = 0;
        			curQtyItvStr = this.ds_pcPrdQty.getColumn(i,"QTY_ITV_STR");
        			if(this.ds_pcPrdQty.getRowType(i)== Dataset.ROWTYPE_INSERT && curQtyItvStr=="1"){
        				//한번에 이력추가로 2개 등록 불가능
        				checkCnt += 1;
        			}
        			trace(beforeDate + "||" + this.ds_pcPrdQty.getColumn(i,"QTY_STR_DTM"));

        			if(beforeDate != this.ds_pcPrdQty.getColumn(i,"QTY_STR_DTM")){
        				trace("check : " + checkCnt + "|||" + nowDate + "|||" + this.ds_pcPrdQty.getColumn(i,"QTY_STR_DTM") + "|||" +this.ds_pcPrdQty.getColumn(i, "RIGHT_NOW") + "|||" + this.ds_pcPrdQty.getRowType(i) + "|||" + Dataset.ROWTYPE_INSERT);
        				if(checkCnt > 0 || nowDate < this.ds_pcPrdQty.getColumn(i,"QTY_STR_DTM")){
        					//alert("미래 이력은 두 개 이상 등록할 수 없습니다.")
        					this.alert(this.fn_getMessage("ERRP000232"));
        					return false;
        				}
        			}
        			beforeDate = this.ds_pcPrdQty.getColumn(i,"QTY_STR_DTM");
        		}
        	}

        	this.preQtyStrDtm = "";
        	this.preQtyEndDtm = "";

        	var nRow = this.ds_pcPrdQty.addRow();
        	this.ds_pcPrdQty.setColumn(nRow, "TYPE", "H");	// 물량할인 이력추가 표식(History)
        	this.ds_pcPrdQty.setColumn(nRow, "CHK","1");
        	this.ds_pcPrdQty.setColumn(nRow, "PRD_ID", this.localPrdId);
        	this.ds_pcPrdQty.setColumn(nRow, "CO_CD", this.fv_coCd);
        	this.ds_pcPrdQty.setColumn(nRow, "BZPLC_ID", this.localBzplcId);
        	this.ds_pcPrdQty.setColumn(nRow, "QTY_STR_DTM", this.fn_calcToday(0, 0, 10))
        	this.ds_pcPrdQty.setColumn(nRow, "QTY_END_DTM", "99991231235959");
        	this.ds_pcPrdQty.setColumn(nRow, "CURR_UNIT_CD", "KRW");
        	this.ds_pcPrdQty.setColumn(nRow, "QTY_ITV_STR", 1);
        	this.ds_pcPrdQty.setColumn(nRow, "QTY_ITV_END", 999999999);
        	this.ds_pcPrdQty.setColumn(nRow, "RIGHT_NOW", "0");
        	this.ds_pcPrdQty.setColumn(nRow, "RIGHT_NOW_END", "0");
        };

        // 물량할인 추가
        this.btn_add1_onclick = function(obj,e)
        {
        	if (!this.fn_checkPrdQtyColumns()) {
        		//alert("상품 Condition 물량할인 - 물량 값 또는 할인금액 입력이 필요합니다.");
        		this.alert(this.fn_getMessage("ERRP000229"));
        		return;
        	}

        	if(this.ds_pcPrdQty != null){
        		var beforeDate = "";
        		var nowDate = this.fn_todayTime();
        		var cur = this.ds_pcPrdQty.rowcount - 1;

        		if(nowDate >= this.ds_pcPrdQty.getColumn(cur,"QTY_STR_DTM") && (this.ds_pcPrdQty.getColumn(cur, "RIGHT_NOW") == "0"||this.ds_pcPrdQty.getRowType(cur)=="1") ){
        			//alert("과거 이력은 수정하실수없습니다.")
        			this.alert(this.fn_getMessage("ERRP000234"));
        			return false;
        		}

        		for(var i = 0; i < this.ds_pcPrdQty.rowcount; i++){
        			//getRowType
        			if(beforeDate != this.ds_pcPrdQty.getColumn(i,"QTY_STR_DTM")){
        				trace(this.ds_pcPrdQty.getColumn(i,"QTY_STR_DTM") - nowDate);
        				trace(nowDate >= this.ds_pcPrdQty.getColumn(i,"QTY_STR_DTM"));


        			}
        			beforeDate = this.ds_pcPrdQty.getColumn(i,"QTY_STR_DTM");
        		}
        	}

        	this.preQtyStrDtm = "";
        	this.preQtyEndDtm = "";

        	var nRow = this.ds_pcPrdQty.addRow();

        	if (nRow == 0)	this.ds_pcPrdQty.setColumn(nRow, "TYPE","H");	// 물량할인 이력추가 표식(History)
        	else	this.ds_pcPrdQty.setColumn(nRow, "TYPE","N");	// 물량할인 추가 표식(Normal)

        	this.ds_pcPrdQty.setColumn(nRow, "CHK","1");
        	this.ds_pcPrdQty.setColumn(nRow, "PRD_ID", this.localPrdId);
        	this.ds_pcPrdQty.setColumn(nRow, "CO_CD", this.fv_coCd);
        	this.ds_pcPrdQty.setColumn(nRow, "BZPLC_ID", this.localBzplcId);
        	this.ds_pcPrdQty.setColumn(nRow, "CURR_UNIT_CD", "KRW");

        	if (nRow == 0) {
        		this.ds_pcPrdQty.setColumn(nRow, "QTY_ITV_STR", 1);
        		this.ds_pcPrdQty.setColumn(nRow, "QTY_ITV_END", 999999999);
        		this.ds_pcPrdQty.setColumn(nRow, "QTY_STR_DTM", this.fn_calcToday(0, 0, 10));
        		this.ds_pcPrdQty.setColumn(nRow, "QTY_END_DTM", "99991231235959");
        		this.ds_pcPrdQty.setColumn(nRow, "RIGHT_NOW", "0");
        		this.ds_pcPrdQty.setColumn(nRow, "RIGHT_NOW_END", "0");
        	}
        	else {
        		this.ds_pcPrdQty.setColumn(nRow, "QTY_STR_DTM", this.ds_pcPrdQty.getColumn(nRow - 1, "QTY_STR_DTM"));
        		this.ds_pcPrdQty.setColumn(nRow, "QTY_END_DTM", this.ds_pcPrdQty.getColumn(nRow - 1, "QTY_END_DTM"));
        		this.ds_pcPrdQty.setColumn(nRow, "RIGHT_NOW", this.ds_pcPrdQty.getColumn(nRow - 1, "RIGHT_NOW"));
        		this.ds_pcPrdQty.setColumn(nRow, "RIGHT_NOW_END", this.ds_pcPrdQty.getColumn(nRow - 1, "RIGHT_NOW_END"));
        	}
        };

        // 물량할인 삭제
        this.btn_del1_onclick = function(obj,e)
        {
        	//alert( this.fn_calcToday() + "|||" + this.ds_pcPrdQty.getColumn(this.ds_pcPrdQty.rowposition, "QTY_STR_DTM"))
        	//마지막행만 삭제가능
        	if(this.ds_pcPrdQty.rowcount - 1 == this.ds_pcPrdQty.rowposition) {
        		if (this.ds_pcPrdQty.getRowType(this.ds_pcPrdQty.rowposition) != Dataset.ROWTYPE_INSERT &&
        			this.ds_pcPrdQty.getColumn(this.ds_pcPrdQty.rowposition, "QTY_STR_DTM") <= this.fn_todayTime()) {
        			//alert("과거이력은 삭제할 수 없습니다.");
        			this.alert(this.fn_getMessage("ERRP000235"));
        			return;
        		}
        		if(this.ds_pcPrdQty.rowcount-1 == this.ds_pcPrdQty.rowposition){
        		//새로운 마지막행의 마지막값 변경
        			this.ds_pcPrdQty.setColumn(this.ds_pcPrdQty.rowposition-1, "QTY_ITV_END", 999999999);
        		}
        		this.ds_pcPrdQty.deleteRow(this.ds_pcPrdQty.rowposition);
        	}
        	else {
        		//alert("마지막 데이터만 삭제할 수 있습니다.");
        		this.alert(this.fn_getMessage("ERRP000236"));
        		return;
        	}
        };

        // 배송비 이력추가
        this.btn_addHistory2_onclick = function(obj,e)
        {
        	if (!this.fn_checkPrdDlcstDtlColumns()) {
        		//alert("상품 Condition 배송비 - 수량 값 또는 할증금액 입력이 필요합니다.")
        		this.alert(this.fn_getMessage("ERRP000230"));
        		return;
        	}

        	if(this.ds_pcPrdDlcstDtls != null){
        		var beforeDate = "";
        		var nowDate = this.fn_todayTime();
        		var checkCnt = 0;
        		for(var i = 0; i < this.ds_pcPrdDlcstDtls.rowcount; i++){
        			var curQtyItvStr = 0;
        			var dlcstSprCd = this.ds_pcPrdDlcstDtls.getColumn(nRow, "DLCST_SPR_CD");

        			curQtyItvStr = this.ds_pcPrdDlcstDtls.getColumn(i,"QTY_ITV_STR");
        			if(this.ds_pcPrdDlcstDtls.getRowType(i)== Dataset.ROWTYPE_INSERT && curQtyItvStr=="1"){
        				//한번에 이력추가로 2개 등록 불가능
        				checkCnt += 1;
        			}

        			if(dlcstSprCd == "20"){
        				//alert("배수주문은 두개 이상 등록할 수 없습니다.");
        				this.alert(this.fn_getMessage("ERRP000231"));
        				return false;
        			}

        			//getRowType
        			if(beforeDate != this.ds_pcPrdDlcstDtls.getColumn(i,"DLCST_STR_DTM")){
        				if(checkCnt > 0 || nowDate < this.ds_pcPrdDlcstDtls.getColumn(i,"DLCST_STR_DTM")  ){
        					//alert("미래 이력은 두 개 이상 등록할 수 없습니다.")
        					this.alert(this.fn_getMessage("ERRP000232"));
        					return false;
        				}
        			}
        			beforeDate = this.ds_pcPrdQty.getColumn(i,"DLCST_STR_DTM");
        		}
        	}

        	this.preDlcstStrDtm = "";
        	this.preDlcstEndDtm = "";

        	var nRow = this.ds_pcPrdDlcstDtls.addRow();

        	this.ds_pcPrdDlcstDtls.setColumn(nRow, "TYPE", "H");	// 물량할인 이력추가 표식(History)
        	this.ds_pcPrdDlcstDtls.setColumn(nRow, "CHK","1");
        	this.ds_pcPrdDlcstDtls.setColumn(nRow, "CO_CD", this.fv_coCd);
        	//this.ds_pcPrdDlcstDtls.setColumn(nRow, "PRD_ID", this.prdId.value);
        	this.ds_pcPrdDlcstDtls.setColumn(nRow, "PRD_ID", this.localPrdId);
        	this.ds_pcPrdDlcstDtls.setColumn(nRow, "BZPLC_ID", this.localBzplcId);
        	//this.ds_pcPrdDlcstDtls.setColumn(nRow, "DLCST_SPR_CD", "20");
        	this.ds_pcPrdDlcstDtls.setColumn(nRow, "DLCST_SPR_CD", this.fn_getPreDlcstSprCd(nRow));
        	this.ds_pcPrdDlcstDtls.setColumn(nRow, "DLCST_STR_DTM", this.fn_calcToday(0, 0, 10));
        	this.ds_pcPrdDlcstDtls.setColumn(nRow, "DLCST_END_DTM", "99991231235959");
        	this.ds_pcPrdDlcstDtls.setColumn(nRow, "CURR_UNIT_CD", "KRW");
        	this.ds_pcPrdDlcstDtls.setColumn(nRow, "QTY_ITV_STR", 1);
        	this.ds_pcPrdDlcstDtls.setColumn(nRow, "QTY_ITV_END", 999999999);
        	this.ds_pcPrdDlcstDtls.setColumn(nRow, "RIGHT_NOW", "0");
        	this.ds_pcPrdDlcstDtls.setColumn(nRow, "RIGHT_NOW_END", "0");
        };

        // 배송비 추가
        this.btn_add2_onclick = function(obj,e)
        {
        	if (!this.fn_checkPrdDlcstDtlColumns()) {
        		//alert("상품 Condition 배송비 - 수량 값 또는 할증금액 입력이 필요합니다.")
        		this.alert(this.fn_getMessage("ERRP000230"));
        		return;
        	}

        	if (this.ds_pcPrdDlcstDtls.getColumn(0, "DLCST_SPR_CD") == 20) {
        		//alert("상품 Condition 배송비 - 배수주문일 경우 추가할 수 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000233"));
        		return;
        	}

        	if(this.ds_pcPrdDlcstDtls != null){
        		var beforeDate = "";
        		var nowDate = this.fn_todayTime();
        		var cur = this.ds_pcPrdDlcstDtls.rowcount - 1;

        		if(nowDate >= this.ds_pcPrdDlcstDtls.getColumn(cur,"DLCST_STR_DTM") && (this.ds_pcPrdDlcstDtls.getColumn(cur, "RIGHT_NOW") == "0"||this.ds_pcPrdDlcstDtls.getRowType(cur)=="1") ){
        			//alert("과거 이력은 수정하실수없습니다.")
        			this.alert(this.fn_getMessage("ERRP000234"));
        			return false;
        		}

        	}

        	this.preDlcstStrDtm = "";
        	this.preDlcstEndDtm = "";

        	var nRow = this.ds_pcPrdDlcstDtls.addRow();

        	if (nRow == 0)	this.ds_pcPrdDlcstDtls.setColumn(nRow, "TYPE", "H");	// 첫번째는 이력추가 건으로 표식(Normal)
        	else	this.ds_pcPrdDlcstDtls.setColumn(nRow, "TYPE", "N");	// 배송비 추가 표식(Normal)

        	this.ds_pcPrdDlcstDtls.setColumn(nRow, "CHK", "1");
        	this.ds_pcPrdDlcstDtls.setColumn(nRow, "CO_CD", this.fv_coCd);
        	//this.ds_pcPrdDlcstDtls.setColumn(nRow, "PRD_ID", this.prdId.value);
        	this.ds_pcPrdDlcstDtls.setColumn(nRow, "PRD_ID", this.localPrdId);
        	this.ds_pcPrdDlcstDtls.setColumn(nRow, "BZPLC_ID", this.localBzplcId);//공용 *
        	this.ds_pcPrdDlcstDtls.setColumn(nRow, "DLCST_SPR_CD", "10");
        	this.ds_pcPrdDlcstDtls.setColumn(nRow, "CURR_UNIT_CD", "KRW");

        	//첫행 추가시 데이터 설정
        	if (nRow == 0) {
        		this.ds_pcPrdDlcstDtls.setColumn(nRow, "QTY_ITV_STR", 1);
        		this.ds_pcPrdDlcstDtls.setColumn(nRow, "QTY_ITV_END", 999999999);
        		this.ds_pcPrdDlcstDtls.setColumn(nRow, "DLCST_STR_DTM", this.fn_calcToday(0, 0, 10));
        		this.ds_pcPrdDlcstDtls.setColumn(nRow, "DLCST_END_DTM", "99991231235959");
        		this.ds_pcPrdDlcstDtls.setColumn(nRow, "RIGHT_NOW", "0");
        		this.ds_pcPrdDlcstDtls.setColumn(nRow, "RIGHT_NOW_END", "0");
        	}
        	else {
        		this.ds_pcPrdDlcstDtls.setColumn(nRow, "DLCST_STR_DTM", this.ds_pcPrdDlcstDtls.getColumn(nRow - 1, "DLCST_STR_DTM"));
        		this.ds_pcPrdDlcstDtls.setColumn(nRow, "DLCST_END_DTM", this.ds_pcPrdDlcstDtls.getColumn(nRow - 1, "DLCST_END_DTM"));
        		this.ds_pcPrdDlcstDtls.setColumn(nRow, "RIGHT_NOW", this.ds_pcPrdDlcstDtls.getColumn(nRow - 1, "RIGHT_NOW"));
        		this.ds_pcPrdDlcstDtls.setColumn(nRow, "RIGHT_NOW_END", this.ds_pcPrdDlcstDtls.getColumn(nRow - 1, "RIGHT_NOW_END"));
        	}
        };

        // 배송비 삭제
        this.btn_del2_onclick = function(obj,e)
        {
        	//마지막행만 삭제가능
        	if(this.ds_pcPrdDlcstDtls.rowcount - 1 == this.ds_pcPrdDlcstDtls.rowposition) {
        		if (this.ds_pcPrdDlcstDtls.getRowType(this.ds_pcPrdDlcstDtls.rowposition) != Dataset.ROWTYPE_INSERT &&
        			this.ds_pcPrdDlcstDtls.getColumn(this.ds_pcPrdDlcstDtls.rowposition, "DLCST_STR_DTM") <= this.fn_todayTime()) {
        			//alert("과거이력은 삭제할 수 없습니다.");
        			this.alert(this.fn_getMessage("ERRP000235"));
        			return;
        		}

        		if(this.ds_pcPrdDlcstDtls.rowcount-1 == this.ds_pcPrdDlcstDtls.rowposition){
        		//새로운 마지막행의 마지막값 변경
        			this.ds_pcPrdDlcstDtls.setColumn(this.ds_pcPrdDlcstDtls.rowposition-1, "QTY_ITV_END", 999999999);
        		}
        		this.ds_pcPrdDlcstDtls.deleteRow(this.ds_pcPrdDlcstDtls.rowposition);
        	}
        	else {
        		//alert("마지막 데이터만 삭제할 수 있습니다.");
        		this.alert(this.fn_getMessage("ERRP000236"));
        		return;
        	}
        };

        // Condition 이력조회
        this.btn_conditionSelct_onclick = function(obj,e)
        {
        	for (var i = 0; i < this.ds_pcPrdQty.rowcount; i++) {
        		trace("### 001 - i : " + i + ", data - " + this.fn_getStrFromDataset(this.ds_pcPrdQty, i));
        	}

        	for (var i = 0; i < this.ds_pcPrdDlcstDtls.rowcount; i++) {
        		trace("### 002 - i : " + i + ", data - " + this.fn_getStrFromDataset(this.ds_pcPrdDlcstDtls, i));
        	}

        	var bzplcId;
        	if (typeof(this.localBzplcId) != "undefined") {
        		bzplcId = this.localBzplcId;
        	}

        	var objParam = {prdId:this.localPrdId, bzplcId:this.localBzplcId};
        	this.gfn_openPopup(e.fromobject.id, "PC::SSP_BO_CA_29.xfdl", objParam);
        };

        /***********************************************************************************************
        *  Dataset Event 영역
        ************************************************************************************************/
        //ds_pcPrdQty값 변경시
        this.ds_pcPrdQty_oncolumnchanged = function(obj,e)
        {
        	// N 또는 undefined : 일반 행추가, H : 이력추가
        	var type = obj.getColumn(e.row, "TYPE");
        	// 시작일자 변경
        	if (e.columnid == "QTY_STR_DTM") {
        		//시작날짜 변경시. 시작일자를 변경할 수 있는 경우는 처음으로 "추가" 작업을 하거나 "이력추가" 작업을 한 경우.
        		if (e.oldvalue != e.newvalue) {
        			// 과거 선택할 수 없음
        			if (e.newvalue < this.fn_calcToday() && this.ds_pcPrdQty.getColumn(e.row, "QTY_ITV_STR") == "1") {
        				alert(this.fn_getMessage("ERRS000178"));
        				this.ds_pcPrdQty.setColumn(e.row, "QTY_STR_DTM", e.oldvalue);
        			}
        			//시작날짜를 마지막날짜 이후로 선택시
        			else if (e.newvalue > this.ds_pcPrdQty.getColumn(e.row, "QTY_END_DTM")) {
        				alert(this.fn_getMessage("ERRS000177"));
        				this.ds_pcPrdQty.setColumn(e.row, "QTY_STR_DTM", e.oldvalue);
        			}
        			// "이력추가"로 추가된 데이터의 시작일자 수정.(첫번째 데이터가 아닌 경우)
        			else if (this.ds_pcPrdQty.getColumn(e.row, "QTY_ITV_STR") == "1") {
        				if (this.ds_pcPrdQty.rowcount > (e.row + 1)) {
        					for (var i = e.row + 1; i < this.ds_pcPrdQty.rowcount; i++) {
        						if (this.ds_pcPrdQty.getColumn(i, "QTY_ITV_STR") == "1")	break;
        						this.ds_pcPrdQty.setColumn(i, "QTY_STR_DTM", e.newvalue);
        					}
        				}
        			}
        		}
        	}
        	// 종료일자 변경
        	else if (e.columnid == "QTY_END_DTM") {
        		trace("### QTY_END_DTM - oldvalue : " + e.oldvalue + ", newvalue : " + e.newvalue);
        		if (e.oldvalue != e.newvalue) {
        			if (this.ds_pcPrdQty.getColumn(e.row, "QTY_STR_DTM") >= e.newvalue) {
        				trace("### str_dtm : " + this.ds_pcPrdQty.getColumn(e.row, "QTY_STR_DTM") + ", newvalue : " + e.newvalue + ", oldvalue : " + e.oldvalue);
        				alert(this.fn_getMessage("ERRS000179"));
        				this.ds_pcPrdQty.setColumn(e.row, "QTY_END_DTM", e.oldvalue);
        			}
        			else {
        				for (var i = e.row + 1; i < this.ds_pcPrdQty.rowcount; i++) {
        					if (this.ds_pcPrdQty.getColumn(i, "QTY_ITV_STR") == "1")	break;
        					this.ds_pcPrdQty.setColumn(i, "QTY_END_DTM", e.newvalue);
        				}
        			}
        		}
        	}
        	// 물량(From) 변경
        	else if (e.columnid == "QTY_ITV_STR") {
        		if (e.newvalue <= 0) {
        			//alert("0 또는 음수를 입력할 수 없습니다.");
        			this.alert(this.fn_getMessage("ERRP000237"));
        			this.ds_pcPrdQty.setColumn(e.row, "QTY_ITV_STR", e.oldvalue);
        			return;
        		}

        		//첫행에서 시작값"QTY_ITV_STR" 변경시
        		if ((e.row == 0 && e.oldvalue != e.newvalue) ||
        			 this.ds_pcPrdQty.getColumn(e.row, "QTY_ITV_STR") == "1") {
        			if (e.newvalue != 1 ) {
        				this.ds_pcPrdQty.setColumn(e.row, "QTY_ITV_STR", e.oldvalue);
        			}
        			return;
        		}

        		//첫 행 이후에서 시작값"QTY_ITV_STR" 변경시
        		if ((e.row > 0 && e.oldvalue != e.newvalue) &&
        			 this.ds_pcPrdQty.getColumn(e.row, "QTY_ITV_STR") != "1") {
        			//현재행이 마지막행인 경우 마지막값 최댓값으로 입력
        			if (e.row == this.ds_pcPrdQty.rowcount - 1) {
        				if (this.gfn_isNull(this.ds_pcPrdQty.getColumn(e.row, "QTY_ITV_END"))) {
        					this.ds_pcPrdQty.setColumn(e.row, "QTY_ITV_END", 999999999);
        				}

        				if (e.newvalue > 999999999) {
        					this.ds_pcPrdQty.setColumn(e.row, "QTY_ITV_STR", 999999999);
        					this.ds_pcPrdQty.setColumn(e.row - 1, "QTY_ITV_END", 999999998);
        				}
        			}

        			//변경 값이 이전 행 시작값 이하인 경우
        			if (e.newvalue <= this.ds_pcPrdQty.getColumn(e.row - 1, "QTY_ITV_STR")) {
        				//변경 값을 이전 행 시작값+1로 변경
        				this.ds_pcPrdQty.setColumn(e.row, "QTY_ITV_STR", this.ds_pcPrdQty.getColumn(e.row - 1, "QTY_ITV_STR") + 1)
        				//이전 행 마지막 값 변경
        				this.ds_pcPrdQty.setColumn(e.row - 1, "QTY_ITV_END", this.ds_pcPrdQty.getColumn(e.row - 1, "QTY_ITV_STR"));
        				return;
        			}

        			//변경값이 이전행 마지막값 이하인 경우
        			if (e.newvalue <= this.ds_pcPrdQty.getColumn(e.row - 1, "QTY_ITV_END")) {
        				this.ds_pcPrdQty.setColumn(e.row - 1, "QTY_ITV_END", e.newvalue - 1);//이전행 마지막 값 변경
        				return;
        			}

        			//변경값이 현재행 마지막값 이하이고 이전행 마지막값보다 큰 경우
        			if (e.newvalue <= this.ds_pcPrdQty.getColumn(e.row, "QTY_ITV_END") &&
        				e.newvalue > this.ds_pcPrdQty.getColumn(e.row - 1, "QTY_ITV_END")) {
        				//이전 행 마지막값 변경
        				this.ds_pcPrdQty.setColumn(e.row - 1, "QTY_ITV_END", e.newvalue - 1);
        				return;
        			}
        		}
        	}
        	else if (e.columnid == "DC_AMT") {
        		if (e.newvalue < 0) {
        			//alert("음수를 입력할 수 없습니다.");
        			this.alert(this.fn_getMessage("ERRP000238"));
        			this.ds_pcPrdQty.setColumn(e.row, "DC_AMT", e.oldvalue);
        			return;
        		}
        	}
        	else if (e.columnid == "RIGHT_NOW") {
        		// 체크
        		if (e.newvalue == "1") {
        			var calcDay = this.fn_calcToday();
        			this.preQtyStrDtm = this.ds_pcPrdQty.getColumn(e.row, "QTY_STR_DTM");
        			this.ds_pcPrdQty.setColumn(e.row, "QTY_STR_DTM", calcDay);
        			for (var i = e.row + 1; i < this.ds_pcPrdQty.rowcount; i++) {
        				if (this.ds_pcPrdQty.getColumn(i, "QTY_ITV_STR") == "1")	break;
        				this.ds_pcPrdQty.setColumn(i, "QTY_STR_DTM", calcDay);
        				this.ds_pcPrdQty.setColumn(i, "RIGHT_NOW", "1");
        			}
        		}
        		// 체크 해제
        		else {
        			if (this.gfn_isNull(this.preQtyStrDtm))	return;
        			this.ds_pcPrdQty.setColumn(e.row, "QTY_STR_DTM", this.preQtyStrDtm);
        			for (var i = e.row + 1; i < this.ds_pcPrdQty.rowcount; i++) {
        				if (this.ds_pcPrdQty.getColumn(i, "QTY_ITV_STR") == "1")	break;
        				this.ds_pcPrdQty.setColumn(i, "QTY_STR_DTM", this.preQtyStrDtm);
        				this.ds_pcPrdQty.setColumn(i, "RIGHT_NOW", "0");
        			}
        		}
        	}
        	else if (e.columnid == "RIGHT_NOW_END") {

        		// 체크
        		if (e.newvalue == "1") {
        			//var calcDay = this.fn_calcToday();
        			var calcDay = this.fn_getLineSegmentDay(this.ds_pcPrdQty, e.row, "QTY_STR_DTM");
        			this.preQtyEndDtm = this.ds_pcPrdQty.getColumn(e.row, "QTY_END_DTM");
        			this.ds_pcPrdQty.setColumn(e.row, "QTY_END_DTM", calcDay);
        			for (var i = e.row + 1; i < this.ds_pcPrdQty.rowcount; i++) {
        				if (this.ds_pcPrdQty.getColumn(i, "QTY_ITV_STR") == "1")	break;
        				this.ds_pcPrdQty.setColumn(i, "QTY_END_DTM", calcDay);
        				this.ds_pcPrdQty.setColumn(i, "RIGHT_NOW_END", "1");
        			}
        		}
        		// 체크 해제
        		else {
        			if (this.gfn_isNull(this.preQtyEndDtm))	return;
        			this.ds_pcPrdQty.setColumn(e.row, "QTY_END_DTM", this.preQtyEndDtm);
        			for (var i = e.row + 1; i < this.ds_pcPrdQty.rowcount; i++) {
        				if (this.ds_pcPrdQty.getColumn(i, "QTY_ITV_STR") == "1")	break;
        				this.ds_pcPrdQty.setColumn(i, "QTY_END_DTM", this.preQtyEndDtm);
        				this.ds_pcPrdQty.setColumn(i, "RIGHT_NOW_END", "0");
        			}

        			this.ds_pcPrdQty.set_updatecontrol(false);
        			this.ds_pcPrdQty.setRowType(e.row, Dataset.ROWTYPE_NORMAL);
        			this.ds_pcPrdQty.set_updatecontrol(true);
        		}
        	}
        };

        //ds_pcPrdDlcstDtls 값 변경시
        this.ds_pcPrdDlcstDtls_oncolumnchanged = function(obj,e)
        {
        	// N 또는 undefined : 일반 행추가, H : 이력추가
        	var type = obj.getColumn(e.row, "TYPE");
        	// 배송비구분코드 'DLCST_SPR_CD' 변경시
        	if (e.columnid == "DLCST_SPR_CD") {
        		if (!this.fn_couldChangeDlcstSprCd(e.newvalue)) {
        			//alert("상품 Condition 배송비 - 배송비구분코드를 설정할 수 없습니다.");
        			this.alert(this.fn_getMessage("ERRP000239"));
        			this.ds_pcPrdDlcstDtls.setColumn(e.row, "DLCST_SPR_CD", e.oldvalue);
        			return;
        		}

        		if(e.oldvalue == "20" && e.newvalue == "10"){
        			//배수 -> 일반일때 수량1로 변경
        			this.ds_pcPrdDlcstDtls.setColumn(e.row, "QTY_ITV_STR", 1);

        		}else if(e.oldvalue == "10" && e.newvalue == "20"){
        			//일반 -> 배수일때 금액이 0일때 변경로직
        			if(this.ds_pcPrdDlcstDtls.getColumn(e.row, "EXTR_AMT") == "0")
        				this.ds_pcPrdDlcstDtls.setColumn(e.row, "EXTR_AMT", "");
        		}

        	}
        	//시작날짜 변경시
        	else if (e.columnid == "DLCST_STR_DTM") {
        		if (e.oldvalue != e.newvalue) {
        			// 과거 선택할 수 없음
        			if (e.newvalue < this.fn_calcToday() && this.ds_pcPrdDlcstDtls.getColumn(e.row, "QTY_ITV_STR") == "1") {
        				alert(this.fn_getMessage("ERRS000178"));
        				this.ds_pcPrdDlcstDtls.setColumn(e.row, "DLCST_STR_DTM", e.oldvalue);
        			}
        			//시작날짜를 마지막날짜 이후로 선택
        			else if (e.newvalue > this.ds_pcPrdDlcstDtls.getColumn(e.row, "DLCST_END_DTM")) {
        				alert(this.fn_getMessage("ERRS000177"));
        				this.ds_pcPrdDlcstDtls.setColumn(e.row, "DLCST_END_DTM", e.oldvalue);
        			}
        			// "이력추가"로 추가된 데이터의 시작일자 수정.(첫번째 데이터가 아닌 경우)
        			else if (this.ds_pcPrdDlcstDtls.getColumn(e.row, "QTY_ITV_STR") == "1" && e.row > 0) {
        				this.preDlcstStrDtm = e.oldvalue;
        				if (this.ds_pcPrdDlcstDtls.rowcount > (e.row + 1)) {
        					for (var i = e.row + 1; i < this.ds_pcPrdDlcstDtls.rowcount; i++) {
        						if (this.ds_pcPrdDlcstDtls.getColumn(i, "QTY_ITV_STR") == "1")	break;
        						this.ds_pcPrdDlcstDtls.setColumn(i, "DLCST_STR_DTM", e.newvalue);
        					}
        				}
        			}
        			else {
        				for(var i = e.row + 1; i < this.ds_pcPrdDlcstDtls.rowcount; i++) {
        					if (this.ds_pcPrdDlcstDtls.getColumn(i, "QTY_ITV_STR") == "1")	break;
        					this.ds_pcPrdDlcstDtls.setColumn(i, "DLCST_STR_DTM", e.newvalue);
        				}
        			}
        		}
        		return;
        	}
        	else if (e.columnid == "DLCST_END_DTM") {
        		if (e.oldvalue != e.newvalue) {
        			if (this.ds_pcPrdDlcstDtls.getColumn(e.row, "DLCST_STR_DTM") >= e.newvalue) {
        				alert(this.fn_getMessage("ERRS000179"));
        				this.ds_pcPrdDlcstDtls.setColumn(e.row, "DLCST_END_DTM", e.oldvalue);
        			}
        			else {
        				this.preDlcstEndDtm = e.oldvalue;
        				for (var i = e.row + 1; i < this.ds_pcPrdDlcstDtls.rowcount; i++) {
        					if (this.ds_pcPrdDlcstDtls.getColumn(i, "QTY_ITV_STR") == "1")	break;
        					this.ds_pcPrdDlcstDtls.setColumn(i, "DLCST_END_DTM", e.newvalue);
        				}
        			}
        		}
        	}
        	// "QTY_ITV_STR" 변경시
        	else if (e.columnid == "QTY_ITV_STR") {
        		if (e.newvalue <= 0) {
        			//alert("0 또는 음수를 입력할 수 없습니다.");
        			this.alert(this.fn_getMessage("ERRP000237"));
        			this.ds_pcPrdDlcstDtls.setColumn(e.row, "QTY_ITV_STR", e.oldvalue);
        			return;
        		}
        		//첫행에서 시작값"QTY_ITV_STR" 변경시. 강제로 1 설정
        		if ((e.row == 0 && e.oldvalue != e.newvalue) ||
        			this.ds_pcPrdDlcstDtls.getColumn(e.row, "QTY_ITV_STR") == "1") {
        			if (e.newvalue != 1 && this.ds_pcPrdDlcstDtls.getColumn(e.row, "DLCST_SPR_CD") == "10") {
        				this.ds_pcPrdDlcstDtls.setColumn(e.row, "QTY_ITV_STR", e.oldvalue);
        			}
        		}
        		//첫 행 이후에서 시작값"QTY_ITV_STR" 변경시
        		else if (e.row > 0) {
        			trace("변경 값 : "+e.oldvalue+" -> "+e.newvalue);

        			//현재행이 마지막행인 경우 마지막값 최댓값으로 입력
        			if (this.ds_pcPrdDlcstDtls.rowposition == this.ds_pcPrdDlcstDtls.rowcount - 1) {
        				if (this.gfn_isNull(this.ds_pcPrdDlcstDtls.getColumn(e.row, "QTY_ITV_END"))) {
        					this.ds_pcPrdDlcstDtls.setColumn(e.row, "QTY_ITV_END", 999999999);
        				}

        				if(e.newvalue > 999999999) {
        					this.ds_pcPrdDlcstDtls.setColumn(e.row, "QTY_ITV_STR", 999999999);
        					this.ds_pcPrdDlcstDtls.setColumn(e.row - 1, "QTY_ITV_END", 999999998);
        				}
        			}

        			//변경 값이 이전 행 시작값 이하인 경우
        			if (e.newvalue <= this.ds_pcPrdDlcstDtls.getColumn(e.row - 1, "QTY_ITV_STR")) {
        				//변경 값을 이전 행 시작값+1로 변경
        				this.ds_pcPrdDlcstDtls.setColumn(e.row, "QTY_ITV_STR", this.ds_pcPrdDlcstDtls.getColumn(e.row - 1, "QTY_ITV_STR") + 1);
        				//이전 행 마지막 값 변경
        				this.ds_pcPrdDlcstDtls.setColumn(e.row - 1, "QTY_ITV_END", this.ds_pcPrdDlcstDtls.getColumn(e.row - 1, "QTY_ITV_STR"));
        				return;
        			}
        			//변경값이 이전행 마지막값 이하인 경우
        			if (e.newvalue <= this.ds_pcPrdDlcstDtls.getColumn(e.row - 1, "QTY_ITV_END")) {
        				this.ds_pcPrdDlcstDtls.setColumn(e.row - 1, "QTY_ITV_END", e.newvalue - 1);//이전행 마지막 값 변경
        				return;
        			}

        			//변경값이 현재행 마지막값 이하이고 이전행 마지막값보다 큰 경우
        			if (e.newvalue <= this.ds_pcPrdDlcstDtls.getColumn(e.row, "QTY_ITV_END")
        				&& e.newvalue > this.ds_pcPrdDlcstDtls.getColumn(e.row - 1, "QTY_ITV_END")) {
        				//이전 행 마지막값 변경
        				this.ds_pcPrdDlcstDtls.setColumn(e.row - 1, "QTY_ITV_END", e.newvalue - 1);
        				return;
        			}

        			//변경값이 현재행 마지막값보다 큰 경우이고 다음행 시작값보다 작은경우
        			if (e.newvalue > this.ds_pcPrdDlcstDtls.getColumn(e.row, "QTY_ITV_END")
        				&& e.newvalue < this.ds_pcPrdDlcstDtls.getColumn(e.row + 1, "QTY_ITV_STR")) {
        				//현재행 마지막값을 변경값으로 변경
        				this.ds_pcPrdDlcstDtls.setColumn(e.row, "QTY_ITV_END", e.newvalue);
        				return;
        			}

        			//변경값이 다음행 시작값이상인 경우
        			if (e.newvalue >= this.ds_pcPrdDlcstDtls.getColumn(e.row + 1, "QTY_ITV_STR")) {
        				//변경값을 다음행 시작값-1로 변경
        				this.ds_pcPrdDlcstDtls.setColumn(e.row, "QTY_ITV_STR", this.ds_pcPrdDlcstDtls.getColumn(e.row + 1, "QTY_ITV_STR") - 1)
        				//현재행 마지막 값 변경
        				this.ds_pcPrdDlcstDtls.setColumn(e.row, "QTY_ITV_END", this.ds_pcPrdDlcstDtls.getColumn(e.row + 1, "QTY_ITV_STR") - 1);
        				//이전행 마지막값 변경
        				this.ds_pcPrdDlcstDtls.setColumn(e.row - 1, "QTY_ITV_END", this.ds_pcPrdDlcstDtls.getColumn(e.row + 1, "QTY_ITV_STR") - 2);
        				return;
        			}
        		}
        	}

        	else if (e.columnid == "EXTR_AMT") {
        		if (e.newvalue < 0 && this.ds_pcPrdDlcstDtls.getColumn(e.row, "DLCST_SPR_CD") == "10") {
        			//alert("음수를 입력할 수 없습니다.");
        			this.alert(this.fn_getMessage("ERRP000238"));
        			this.ds_pcPrdDlcstDtls.setColumn(e.row, "EXTR_AMT", e.oldvalue);
        			return;
        		}else if (e.newvalue <= 0 && this.ds_pcPrdDlcstDtls.getColumn(e.row, "DLCST_SPR_CD") == "20") {
        			//alert("0 또는 음수를 입력할 수 없습니다.");
        			this.alert(this.fn_getMessage("ERRP000237"));
        			this.ds_pcPrdDlcstDtls.setColumn(e.row, "EXTR_AMT", e.oldvalue);
        			return;
        		}
        	}
        	else if (e.columnid == "RIGHT_NOW") {
        		// 체크
        		if (e.newvalue == "1") {
        			var calcDay = this.fn_calcToday();
        			this.preDlcstStrDtm = this.ds_pcPrdDlcstDtls.getColumn(e.row, "DLCST_STR_DTM");
        			this.ds_pcPrdDlcstDtls.setColumn(e.row, "DLCST_STR_DTM", calcDay);
        			for (var i = e.row + 1; i < this.ds_pcPrdDlcstDtls.rowcount; i++) {
        				if (this.ds_pcPrdDlcstDtls.getColumn(i, "QTY_ITV_STR") == "1")	break;
        				this.ds_pcPrdDlcstDtls.setColumn(i, "DLCST_STR_DTM", calcDay);
        				this.ds_pcPrdDlcstDtls.setColumn(i, "RIGHT_NOW", "1");
        			}
        		}
        		// 체크 해제
        		else {
        			if (this.gfn_isNull(this.preDlcstStrDtm))	return;
        			this.ds_pcPrdDlcstDtls.setColumn(e.row, "DLCST_STR_DTM", this.preDlcstStrDtm);
        			for (var i = e.row + 1; i < this.ds_pcPrdDlcstDtls.rowcount; i++) {
        				if (this.ds_pcPrdDlcstDtls.getColumn(i, "QTY_ITV_STR") == "1")	break;
        				this.ds_pcPrdDlcstDtls.setColumn(i, "DLCST_STR_DTM", this.preDlcstStrDtm);
        				this.ds_pcPrdDlcstDtls.setColumn(i, "RIGHT_NOW", "0");
        			}
        		}
        	}
        	else if (e.columnid == "RIGHT_NOW_END") {

        		// 체크
        		if (e.newvalue == "1") {
        			//var calcDay = this.fn_calcToday();
        			var calcDay = this.fn_getLineSegmentDay(this.ds_pcPrdDlcstDtls, e.row, "DLCST_STR_DTM");
        			this.preDlcstEndDtm = this.ds_pcPrdDlcstDtls.getColumn(e.row, "DLCST_END_DTM");
        			this.ds_pcPrdDlcstDtls.setColumn(e.row, "DLCST_END_DTM", calcDay);
        			for (var i = e.row + 1; i < this.ds_pcPrdDlcstDtls.rowcount; i++) {
        				if (this.ds_pcPrdDlcstDtls.getColumn(i, "QTY_ITV_STR") == "1")	break;
        				this.ds_pcPrdDlcstDtls.setColumn(i, "DLCST_END_DTM", calcDay);
        				this.ds_pcPrdDlcstDtls.setColumn(i, "RIGHT_NOW_END", "1");
        			}
        		}
        		// 체크 해제
        		else {

        			//this.ds_pcPrdDlcstDtls
        			if (this.gfn_isNull(this.preDlcstEndDtm))	return;
        			this.ds_pcPrdDlcstDtls.setColumn(e.row, "DLCST_END_DTM", this.preDlcstEndDtm);
        			for (var i = e.row + 1; i < this.ds_pcPrdDlcstDtls.rowcount; i++) {
        				if (this.ds_pcPrdDlcstDtls.getColumn(i, "QTY_ITV_STR") == "1")	break;
        				this.ds_pcPrdDlcstDtls.setColumn(i, "DLCST_END_DTM", this.preDlcstEndDtm);
        				this.ds_pcPrdDlcstDtls.setColumn(i, "RIGHT_NOW_END", "0");
        			}

        			this.ds_pcPrdDlcstDtls.set_updatecontrol(false);
        			this.ds_pcPrdDlcstDtls.setRowType(e.row, Dataset.ROWTYPE_NORMAL);
        			this.ds_pcPrdDlcstDtls.set_updatecontrol(true);

        		}
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_add1.addEventHandler("onclick",this.btn_add1_onclick,this);
            this.btn_del1.addEventHandler("onclick",this.btn_del1_onclick,this);
            this.btn_add2.addEventHandler("onclick",this.btn_add2_onclick,this);
            this.btn_del2.addEventHandler("onclick",this.btn_del2_onclick,this);
            this.Static01_00_01_02_00_00_00_00_00_00_00_01.addEventHandler("onclick",this.Static01_00_01_02_00_00_00_00_00_00_00_01_onclick,this);
            this.btn_addHistory.addEventHandler("onclick",this.btn_addHistory_onclick,this);
            this.btn_conditionSelct.addEventHandler("onclick",this.btn_conditionSelct_onclick,this);
            this.btn_addHistory2.addEventHandler("onclick",this.btn_addHistory2_onclick,this);
            this.ds_pcPrdQty.addEventHandler("oncolumnchanged",this.ds_pcPrdQty_oncolumnchanged,this);
            this.ds_pcPrdDlcstDtls.addEventHandler("oncolumnchanged",this.ds_pcPrdDlcstDtls_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_CA_22_2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
