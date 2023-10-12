(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_SN_11");
            this.set_titletext("정산 확정 취소");
            if (Form == this.constructor)
            {
                this._setFormPosition(1130,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_resList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ADJ_YM\" type=\"STRING\" size=\"255\"/><Column id=\"JNT_ODR_ITM_NO\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_QTY\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"255\"/><Column id=\"ODRPSN_NM\" type=\"STRING\" size=\"255\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"255\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"255\"/><Column id=\"REPR_SPEC\" type=\"STRING\" size=\"255\"/><Column id=\"SSP_REPR_ATTR\" type=\"STRING\" size=\"255\"/><Column id=\"GI_DTM\" type=\"STRING\" size=\"255\"/><Column id=\"GDPSN_ID\" type=\"STRING\" size=\"255\"/><Column id=\"GDPSN_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ADJ_DCN_DTM\" type=\"STRING\" size=\"255\"/><Column id=\"ADJ_DCN_DEALR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"ADJ_DCN_DEALR_NM\" type=\"STRING\" size=\"255\"/><Column id=\"FW_RSN_CTS\" type=\"STRING\" size=\"255\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"ROW_COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromServer", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_resList","20","82",null,null,"20","70",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_fillareatype("none");
            obj.set_cellmovingtype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_resList");
            obj.set_autoenter("none");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"검수월\"/><Cell col=\"1\" text=\"주문 품목 번호\"/><Cell col=\"2\" text=\"주문수량\"/><Cell col=\"3\" text=\"주문 부서 코드\"/><Cell col=\"4\" text=\"주문 부서명\"/><Cell col=\"5\" text=\"주문자\"/><Cell col=\"6\" text=\"상품 ID\"/><Cell col=\"7\" text=\"상품명\"/><Cell col=\"8\" text=\"규격\"/><Cell col=\"9\" text=\"입고처리 일시\"/><Cell col=\"10\" text=\"입고자 명\"/><Cell col=\"11\" text=\"확정 일시\"/><Cell col=\"12\" text=\"확정자 ID\"/><Cell col=\"13\" text=\"확정자명\"/><Cell col=\"14\" text=\"취소 사유\"/></Band><Band id=\"body\"><Cell text=\"bind:ADJ_YM\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM\" calendareditformat=\"yyyy-MM\"/><Cell col=\"1\" text=\"bind:JNT_ODR_ITM_NO\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ODR_QTY\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:DEPT_ID\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:ODRPSN_NM\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:PRD_ID\"/><Cell col=\"7\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:REPR_SPEC\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:GI_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplayinvalidtext=\" \" calendardisplaynulltext=\" \"/><Cell col=\"10\" text=\"bind:GDPSN_NM\"/><Cell col=\"11\" text=\"bind:ADJ_DCN_DTM\"/><Cell col=\"12\" text=\"bind:ADJ_DCN_DEALR_ID\"/><Cell col=\"13\" text=\"bind:ADJ_DCN_DEALR_NM\"/><Cell col=\"14\" displaytype=\"text\" edittype=\"text\" text=\"bind:FW_RSN_CTS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20",null,null,"38","20","210",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCount","20","54","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,null,"60","30","482","30",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","508",null,"60","30",null,"30",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cxlRsn",null,"48","250","24","223",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cxlRsn",null,null,"55","20","edt_cxlRsn:10","grd_resList:12",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("취소 사유");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","20","155","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("정산 확정 취소");
            obj.set_font("bold 14pt \"Arial\"");
            obj.set_cssclass("sta_WF_title03");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","41","40","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"72","30","10","106",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm",null,null,"80","30","130","458",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("일괄적용");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel00",null,"43","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("다운로드(P)");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1130,530,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_SN_11.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_SN_11.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 재고 관리 - S-MRP 마스터 조회 목록
          CREATION DATES :
        *******************************************************/
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;
        this.insertCount = 0;
        this.cocd;
        this.inq_cond_dtls;
        this.col_itm;
        this.bPage = 0;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        	this.cocd 			= this.parent.pv1;
        	this.inq_cond_dtls  = this.parent.pv2;
        	this.col_itm 		= this.parent.pv3;
        	this.bPage = 0;
        	this.copyPaste.addGrid(this.grd_resList);
        	this.fn_odCommLoading("fn_search"); //공통메세지코드 로딩
        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_SN_11_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/

        //조회
        this.fn_search = function()	{

        	var sSvcId = "selectCalCxlList";
        	var sUrl = "/ad/cal/popup/select-cal-cxl-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_resList=ds_output1";
        	var arg = "";
        	if(this.bPage == 0)	{
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        		this.ds_search.setColumn(0,"ROW_COUNT",1000);
        		this.ds_search.setColumn(0,"SORT_COLUMN", "");
        		this.ds_search.setColumn(0,"SORT_TYPE", "");
        		this.ds_search.setColumn(0,"INQ_COND_DTLS", this.inq_cond_dtls);
        		this.ds_search.setColumn(0,"COL_ITM", this.col_itm);
        		this.ds_search.setColumn(0,"CO_CD", this.cocd);
        		this.ds_search.setColumn(0,"TOTAL_COUNT", -1);
        	}
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectCalCxlList") {
        		trace("### ds_resList.getRowCount() : " + this.ds_resList.getRowCount());
        	}
        	else if(svcID == "saveCalCxlList"){
        		trace("### ds_resList.getRowCount() : " + this.ds_resList.getRowCount());
        		if (errorCode == "0") {
        			var strRtnCdStl  = this.fn_getDSValue(this.ds_fromServer.getColumn(0,"RTN_CD"));
        			var strRtnMsgStl = this.fn_getDSValue(this.ds_fromServer.getColumn(0,"RTN_MSG"));

        			if( strRtnCdStl == "S" )	{
        				alert(this.fn_getMessage("ERRS000156"));
        				this.close();
        			}
        			else	{
        				alert(strRtnMsg);
        			}
        		}
        	}
        };

        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("fn_search");
        	this.fn_regMethodESC("btn_cancel_onclick");
        	this.fn_regMethodShiftENTER("btn_save_onclick");
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        // 취소
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };
        // 저장
        this.btn_save_onclick = function(obj,e)
        {
        	for (var i = 0; i < this.ds_resList.rowcount; i++) {
        		var strCTS = this.fn_getDSValue(this.ds_resList.getColumn(i,"FW_RSN_CTS"));
        		if(strCTS == "")
        		{
        			//alert("취소 사유는 필수입력 사항입니다.");
        			alert(this.fn_getMessage("ERRS000144", "취소사유"));
        			return;
        		}
        	}
        	var sSvcId = "saveCalCxlList";
        	var sUrl = "/ad/cal/popup/save-cal-cxl-list.do";
        	var inDs = "ds_update1=ds_resList";
        	var outDs = "ds_fromServer=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.btn_confirm_onclick = function(obj,e)
        {
        	for (var i = 0; i < this.ds_resList.rowcount; i++) {
        		this.ds_resList.setColumn(i,"FW_RSN_CTS",this.edt_cxlRsn.value);
        	}
        };

        this.btn_excel_onclick = function(obj,e)
        {
        	this.ofn_exportExcel({form:this, grid:this.grd_resList, fileName:"정산확정취소목록"});
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_SN_11_onkeyup,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.sta_cxlRsn.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);
            this.btn_excel00.addEventHandler("onclick",this.btn_excel_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_SN_11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
