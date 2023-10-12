(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_02_09");
            this.set_titletext("물량 배분/분납");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ORI_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLT_REF_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_SALE_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ORI_JNT_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_JNT_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_SALE_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IS_ORIGINAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","20",null,"45%","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo","0","0","200","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("■ 물량 배분");
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
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("row");
            obj.set_binddataset("ds_list01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"90\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"원 주문 번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"분납 주문 번호\"/><Cell col=\"2\" colspan=\"2\" text=\"분납 전\"/><Cell col=\"4\" colspan=\"2\" text=\"분납 후\"/><Cell col=\"6\" rowspan=\"2\" text=\"처리자 ID\"/><Cell col=\"7\" rowspan=\"2\" text=\"처리자 명\"/><Cell col=\"8\" rowspan=\"2\" text=\"처리 일시\"/><Cell row=\"1\" col=\"2\" text=\"주문수량\"/><Cell row=\"1\" col=\"3\" text=\"금액\"/><Cell row=\"1\" col=\"4\" text=\"주문수량\"/><Cell row=\"1\" col=\"5\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:ORI_ODR_ITM_NO\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:NEW_ODR_ITM_NO\"/><Cell col=\"2\" text=\"bind:ORI_ODR_QTY\" displaytype=\"mask\" maskeditformat=\"###,###,###\" maskeditmaskchar=\"#\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:ORI_SALE_AMT\" displaytype=\"mask\" maskeditmaskchar=\"#\" maskeditformat=\"###,###,###,###\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:ODR_QTY\" displaytype=\"mask\" maskeditformat=\"###,###,###\" maskeditmaskchar=\"#\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:SALE_AMT\" displaytype=\"mask\" maskeditmaskchar=\"#\" maskeditformat=\"###,###,###,###\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:REGPSN_ID\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"7\" text=\"bind:REGPSN_NM\" displaytype=\"normal\" calendardateformat=\"yyyy.MM.dd\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"8\" text=\"bind:REG_DTM\" suppress=\"4\" displaytype=\"date\" maskeditmaskchar=\"#\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\" suppressalign=\"middle\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","Div00:30",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo","0","0","200","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("■ 분납 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"20","30","10","1296",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("grid_list02","0","30",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("area");
            obj.set_binddataset("ds_list02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"원 주문 번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"분납 주문 번호\"/><Cell col=\"2\" colspan=\"2\" text=\"분납 전\"/><Cell col=\"4\" colspan=\"2\" text=\"분납 후\"/><Cell col=\"6\" rowspan=\"2\" text=\"처리자 ID\"/><Cell col=\"7\" rowspan=\"2\" text=\"처리자 명\"/><Cell col=\"8\" rowspan=\"2\" text=\"처리 일시\"/><Cell row=\"1\" col=\"2\" text=\"주문수량\"/><Cell row=\"1\" col=\"3\" text=\"금액\"/><Cell row=\"1\" col=\"4\" text=\"주문수량\"/><Cell row=\"1\" col=\"5\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:ORI_JNT_ODR_ITM_NO\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:NEW_JNT_ODR_ITM_NO\" cssclass=\"expr:IS_ORIGINAL==&quot;1&quot; ? &quot;grd_WF_body_stress&quot; : &quot;&quot;\"/><Cell col=\"2\" text=\"bind:ORI_ODR_QTY\" displaytype=\"mask\" maskeditmaskchar=\"#\" maskeditformat=\"###,###,###\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:ORI_SALE_AMT\" displaytype=\"mask\" maskeditmaskchar=\"#\" maskeditformat=\"###,###,###,###\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:ODR_QTY\" displaytype=\"mask\" maskeditmaskchar=\"#\" maskeditformat=\"###,###,###\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:SALE_AMT\" displaytype=\"mask\" maskeditmaskchar=\"#\" maskeditformat=\"###,###,###,###\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:REGPSN_ID\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"7\" text=\"bind:REGPSN_NM\" displaytype=\"normal\" calendardateformat=\"yyyy.MM.dd\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"8\" text=\"bind:REG_DTM\" displaytype=\"date\" maskeditmaskchar=\"#\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\" suppress=\"4\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" suppressalign=\"middle\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
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

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_26.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_26.xfdl", function() {
        // 주문관리 상세 - 물량 배분/분납

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object

        this.odrNo = "";
        this.odrItmNo = "";
        this.bzplcId = "";
        this.odrpsnId = "";

        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_02_09_oninit = function(obj,e)
        {
        	var nIndex = this.addEventHandlerLookup( "onload", "fn_afterFormLoad", this.parent.parent.parent);
        };

        this.SSP_BO_OA_02_09_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        	this.fn_odCommLoading();

        	this.copyPaste.addGrid(this.Div00.form.grid_list01);
        	this.copyPaste.addGrid(this.Div01.form.grid_list02);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function() {
        	var sSvcId = "selectQtyDstrList";
        	var sUrl = "/od/oderlist/selectQtyDstrList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1 ds_list02=ds_output2";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_searchDvdpay = function() {
        	var sSvcId = "selectDvdpayList";
        	var sUrl = "/od/oderlist/selectDvdpayList.do";
        	var inDs = "ds_search=ds_search02";
        	var outDs = "ds_list02=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectQtyDstrList") {
        		trace("### selectQtyDstrList - ds_list01.rowcount : " + this.ds_list01.rowcount);
        	}
        	else if (svcID == "selectDvdpayList") {
        		trace("### selectDvdpayList - ds_list02.rowcount : " + this.ds_list02.rowcount);
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/


        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        // 조회 함수(모든 탭 폼에 있어야되는 함수)
        this.fn_searchOdrInfo = function(odrNo, odrItmNo, bzplcId, odrpsnId) {
        	trace("### SSP_BO_OA_26 - fn_searchOdrInfo");
        	this.odrNo = odrNo;
        	this.odrItmNo = odrItmNo;
        	this.bzplcId = bzplcId;
        	this.odrpsnId = odrpsnId;

        	this.ds_search.setColumn(0, "ODR_NO", this.odrNo);
        	this.ds_search.setColumn(0, "ODR_ITM_NO", this.odrItmNo);
        	this.ds_search.setColumn(0, "BZPLC_ID", this.bzplcId);
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);

        	this.ds_list02.clearData();

        	this.fn_search();
        };
        // 데이터 변경내역 유무 조회(모든 탭 폼에 있어야되는 함수)
        this.fn_shouldSave = function() {
        /*	var rowType = "";
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
        */
        	return false;
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/


        /***********************************************************************************************
        * GRID EVENT 영역
        ************************************************************************************************/
        this.grid_list01_oncellposchanged = function(obj,e)
        {
        trace("### grid_list01_oncellposchanged");
        	if (e.row < 0)	return;

        	var spltRefItmNo = this.ds_list01.getColumn(e.row, "SPLT_REF_ITM_NO");
        	var odrItmNo = this.ds_list01.getColumn(e.row, "ODR_ITM_NO");

        	this.ds_search02.setColumn(0, "ODR_NO", this.odrNo);
        	//this.ds_search02.setColumn(0, "ODR_ITM_NO", spltRefItmNo);
        	this.ds_search02.setColumn(0, "ODR_ITM_NO", odrItmNo);
        	this.ds_search02.setColumn(0, "BZPLC_ID", this.bzplcId);
        	this.ds_search02.setColumn(0, "CO_CD", this.fv_coCd);

        	//this.fn_searchDvdpay();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.SSP_BO_OA_02_09_oninit,this);
            this.addEventHandler("onload",this.SSP_BO_OA_02_09_onload,this);
        };
        this.loadIncludeScript("SSP_BO_OA_26.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
