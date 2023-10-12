(function() 
{ 
    return function() 
    { 
        if (!this._is_form) 
            return; 
         
        var obj = null; 
         
        this.on_create = function() 
        { 
            this.set_name("SSP_BO_OA_02_06"); 
            this.set_titletext("변경 이력"); 
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
            obj._setContents("<ColumnInfo><Column id=\"CHN_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_FDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ODR_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_DCN_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_MEMO_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQDT\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_CHG_MNG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>"); 
            this.addChild(obj.name, obj); 
 
 
            obj = new Dataset("ds_searchD", this); 
            obj.set_useclientlayout("true"); 
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_CHG_MNG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">50</Col></Row></Rows>"); 
            this.addChild(obj.name, obj); 
 
 
            obj = new Dataset("ds_list02", this); 
            obj.set_useclientlayout("true"); 
            obj._setContents("<ColumnInfo><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_FDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_CTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>"); 
            this.addChild(obj.name, obj); 
             
            // UI Components Initialize 
            obj = new Div("Div01","0","20",null,null,"0","0",null,null,null,null,this); 
            obj.set_taborder("0"); 
            obj.set_text("Div00"); 
            this.addChild(obj.name, obj); 
 
            obj = new Static("sta_stlInfo","0","0","200","20",null,null,null,null,null,null,this.Div01.form); 
            obj.set_taborder("0"); 
            obj.set_text("■ 변경 이력"); 
            obj.set_cssclass("sta_WF_title01"); 
            this.Div01.addChild(obj.name, obj); 
 
            obj = new Static("Static02_00_01_00_00_01_00",null,"20","30","10","1296",null,null,null,null,null,this.Div01.form); 
            obj.set_taborder("1"); 
            obj.set_cssclass("div_WF_guide"); 
            obj.set_visible("false"); 
            obj.set_text("10"); 
            this.Div01.addChild(obj.name, obj); 
 
            obj = new Grid("grid_list01","0","30",null,null,"0","240",null,null,null,null,this.Div01.form); 
            obj.set_taborder("2"); 
            obj.set_autofittype("col"); 
            obj.set_nodatatext("조회된 결과가 없습니다."); 
            obj.set_binddataset("ds_list01"); 
            obj.set_cellsizingtype("col"); 
            obj.set_selecttype("area"); 
            obj.set_autosizingtype("none"); 
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"240\"/><Column size=\"240\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"행선택\"/><Cell col=\"1\" text=\"채널 구분\"/><Cell col=\"2\" text=\"품목번호\"/><Cell col=\"3\" text=\"변경 항목\"/><Cell col=\"4\" text=\"변경 필드명\"/><Cell col=\"5\" text=\"변경 전 내용\"/><Cell col=\"6\" text=\"변경 후 내용\"/><Cell col=\"7\" text=\"변경 사유\"/><Cell col=\"8\" text=\"요청자\"/><Cell col=\"9\" text=\"요청 일시\"/><Cell col=\"10\" text=\"변경 상태\"/></Band><Band id=\"body\"><Cell displaytype=\"imagecontrol\" text=\"expr:comp.parent.parent.parent.fn_isSelectedRow(currow, comp.currentcell) == true ? &quot;url(&apos;theme://images/btn_WF_page_last.png&apos;)&quot; : &quot;&quot;\"/><Cell col=\"1\" text=\"bind:CHN_SPR_NM\"/><Cell col=\"2\" text=\"bind:ODR_ITM_NO\"/><Cell col=\"3\" text=\"bind:CHG_ITM_GRP_NM\"/><Cell col=\"4\" text=\"bind:CHG_FDS_NM\"/><Cell col=\"5\" text=\"bind:ORI_ODR_CTS\"/><Cell col=\"6\" text=\"bind:CHG_DCN_CTS\"/><Cell col=\"7\" text=\"bind:CHG_MEMO_CTS\"/><Cell col=\"8\" text=\"bind:REQR_NM\"/><Cell col=\"9\" text=\"bind:REQDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" text=\"bind:CHG_STATS_NM\"/></Band></Format></Formats>"); 
            this.Div01.addChild(obj.name, obj); 
 
            obj = new Grid("grid_list02","0","grid_list01:20",null,null,"0","0",null,null,null,null,this.Div01.form); 
            obj.set_taborder("3"); 
            obj.set_autofittype("col"); 
            obj.set_nodatatext("조회된 결과가 없습니다."); 
            obj.set_autoenter("none"); 
            obj.set_binddataset("ds_list02"); 
            obj.set_selecttype("area"); 
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"380\"/><Column size=\"380\"/><Column size=\"380\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"변경 필드 명\"/><Cell col=\"1\" text=\"원 주문 내용\"/><Cell col=\"2\" text=\"변경 요청 내용\"/><Cell col=\"3\" text=\"변경 확정 내용\"/></Band><Band id=\"body\"><Cell text=\"bind:CHG_FDS_NM\"/><Cell col=\"1\" text=\"bind:ORI_CTS\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"bind:CHG_CTS\"/></Band></Format></Formats>"); 
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
        this.addIncludeScript("SSP_BO_OA_23.xfdl","OD::odUtils.xjs"); 
        this.registerScript("SSP_BO_OA_23.xfdl", function() { 
        // 주문관리 상세 - 변경이력 
 
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
 
        this.SSP_BO_OA_02_06_oninit = function(obj,e) 
        { 
        	var nIndex = this.addEventHandlerLookup( "onload", "fn_afterFormLoad", this.parent.parent.parent); 
        }; 
 
        this.SSP_BO_OA_02_06_onload = function(obj,e) 
        { 
        	//공통 함수 호출(필수) 
        	this.gfn_formOnLoad(this); 
        	this.resetScroll(); 
 
        	this.copyPaste.addGrid(this.Div01.form.grid_list01); 
        	this.copyPaste.addGrid(this.Div01.form.grid_list02); 
        }; 
 
        /*********************************************************************************************** 
        * Transaction 서비스 호출 영역 
        ************************************************************************************************/ 
        this.fn_search = function() { 
        	var sSvcId = "selectChgHstList"; 
        	var sUrl = "/od/oderlist/selectChgHstList.do"; 
        	var inDs = "ds_search=ds_search"; 
        	var outDs = "ds_list01=ds_output1"; 
        	var arg = ""; 
 
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack"); 
        }; 
 
        this.fn_searchDetail = function() { 
        	var sSvcId = "selectOrderChangeDetail"; 
        	var sUrl = "/od/orderChange/selectOrderChangeDetail.do"; 
        	var inDs = "ds_search=ds_searchD"; 
        	var outDs = "ds_list02=ds_output1"; 
        	var arg = ""; 
 
        	this.ds_searchD.setColumn(0,"START_NUM", 0); 
        	this.ds_searchD.setColumn(0,"ROW_COUNT", "1000"); 
        	this.ds_searchD.setColumn(0,"SORT_COLUMN", ""); 
        	this.ds_searchD.setColumn(0,"SORT_TYPE", ""); 
        	this.ds_searchD.setColumn(0,"CO_CD", this.fv_coCd); 
        	this.ds_searchD.setColumn(0,"ODR_NO", this.ds_list01.getColumn(this.ds_list01.rowposition,"ODR_NO")); 
        	this.ds_searchD.setColumn(0,"ODR_ITM_NO", this.ds_list01.getColumn(this.ds_list01.rowposition,"ODR_ITM_NO")); 
        	this.ds_searchD.setColumn(0,"ODR_CHG_MNG_NO", this.ds_list01.getColumn(this.ds_list01.rowposition,"ODR_CHG_MNG_NO")); 
        	this.ds_searchD.setColumn(0,"BZPLC_ID", this.ds_list01.getColumn(this.ds_list01.rowposition,"BZPLC_ID")); 
 
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack"); 
        }; 
 
        /*********************************************************************************************** 
        * Callback 처리 영역 
        ************************************************************************************************/ 
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{ 
        	if (svcID == "selectChgHstList") { 
        		if (this.ds_list01.rowcount == 0) { 
        			this.ds_list02.clearData(); 
        		} 
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
        	trace("### SSP_BO_OA_23 - fn_searchOdrInfo"); 
        	this.selectedRow = -1; 
        	this.ds_list01.clearData(); 
        	this.ds_list02.clearData(); 
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
 
        // 행선택 
        this.fn_isSelectedRow = function(currow, cellPos) { 
        	//if (this.grid_main_getCellPos() != 0)	return; 
        	//trace("### currow : " + currow + ", cellPos : " + cellPos + ", selectedRow : " + this.selectedRow); 
 
 
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
 
 
 
 
        /*********************************************************************************************** 
        * GRID EVENT 영역 
        ************************************************************************************************/ 
 
        this.grid_list01_oncellclick = function(obj,e) 
        { 
        	if (e.col != 0) return; 
 
        	this.selectedRow = e.row; 
 
 
        	this.fn_searchDetail(); 
        }; 
 
 
        /*********************************************************************************************** 
        * Dataset EVENT 영역 
        ************************************************************************************************/ 
        this.ds_list01_onrowposchanged = function(obj,e) 
        { 
        	//this.fn_searchDetail(); 
        }; 
 
        }); 
         
        // Regist UI Components Event 
        this.on_initEvent = function() 
        { 
            this.addEventHandler("onload",this.SSP_BO_OA_02_06_onload,this); 
            this.addEventHandler("oninit",this.SSP_BO_OA_02_06_oninit,this); 
            this.Div01.form.grid_list01.addEventHandler("oncellclick",this.grid_list01_oncellclick,this); 
            this.Div01.form.grid_list02.addEventHandler("oncelldblclick",this.grid_list01_oncelldblclick,this); 
            this.Div01.form.grid_list02.addEventHandler("onenterdown",this.grid_list01_onenterdown,this); 
            this.ds_list01.addEventHandler("onrowposchanged",this.ds_list01_onrowposchanged,this); 
        }; 
        this.loadIncludeScript("SSP_BO_OA_23.xfdl"); 
        this.loadPreloadList(); 
         
        // Remove Reference 
        obj = null; 
    }; 
} 
)(); 
