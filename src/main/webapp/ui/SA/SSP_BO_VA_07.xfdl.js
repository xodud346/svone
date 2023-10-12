(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_VA_07");
            this.set_titletext("배너");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bnrExpsList", this);
            obj._setContents("<ColumnInfo><Column id=\"BNR_EXPS_LVL\" type=\"INT\" size=\"16\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BNR_EXPS_PST_ID\" type=\"INT\" size=\"16\"/><Column id=\"BNR_EXPS_PST_NM\" type=\"STRING\" size=\"16\"/><Column id=\"HRNK_BNR_EXPS_PST_ID\" type=\"INT\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"INT\" size=\"256\"/><Column id=\"CATG_DEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_EXPS_PST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chnTpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bnrExps", this);
            obj._setContents("<ColumnInfo><Column id=\"BNR_EXPS_LVL\" type=\"INT\" size=\"16\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BNR_EXPS_PST_ID\" type=\"INT\" size=\"16\"/><Column id=\"BNR_EXPS_PST_NM\" type=\"STRING\" size=\"16\"/><Column id=\"HRNK_BNR_EXPS_PST_ID\" type=\"INT\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"INT\" size=\"256\"/><Column id=\"CATG_DEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_bnrExpsList","20","78","221",null,null,"40",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_bnrExpsList");
            obj.set_scrollbartype("auto auto");
            obj.set_treeusecheckbox("false");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_cellmovingtype("none");
            obj.set_scrolltype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"317\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"배너 목록\"/></Band><Band id=\"body\"><Cell edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:BNR_EXPS_LVL\" text=\"bind:BNR_EXPS_PST_NM\" tooltiptext=\"bind:BNR_EXPS_PST_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_dtl","240","21",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tab0",this.tab_dtl);
            obj.set_text("Tabpage0");
            obj.set_async("false");
            this.tab_dtl.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.tab_dtl);
            obj.set_text("Tabpage1");
            obj.set_url("SA::SSP_BO_VA_07_1.xfdl");
            obj.set_async("false");
            this.tab_dtl.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.tab_dtl);
            obj.set_text("Tabpage2");
            obj.set_url("SA::SSP_BO_VA_07_2.xfdl");
            obj.set_async("false");
            this.tab_dtl.addChild(obj.name, obj);

            obj = new Static("Static05","20","20",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","20","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("채널");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_chnTpCd","Static01:10","25","255","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_chnTpCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_rowcount("1");
            obj.set_text("포함");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","rdo_chnTpCd","value","ds_search","CHN_TP_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","SA::SSP_BO_VA_07_1.xfdl");
            this._addPreloadList("fdl","SA::SSP_BO_VA_07_2.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_VA_07.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_VA_07.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 배너
        CREATION DATES : 2022.03.14
        CREATER        : 이민호
        *******************************************************/
        //인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.preSelectRowPosition = 0;

        var pprCatgBnr = 60000; // 인기 카테고리 배너
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
        };

        this.fn_onkeyup = function(obj,e)
        {
        	// CTRL+ENTER KEY
        	if(e.keycode == 13 && e.ctrlkey){
        		var selRow = this.preSelectRowPosition;
        		var vBnrExpsPstId = this.ds_bnrExpsList.getColumn(selRow, "BNR_EXPS_PST_ID");
        		var leafStatus = this.grd_bnrExpsList.isTreeLeafRow(selRow);
        		if(leafStatus) {
        			// 인기카테고리가 아닐 경우에만
        			if(vBnrExpsPstId != pprCatgBnr) {
        				this.tab_dtl.tab1.form.btn_search_onclick();
        			}
        		}
        	}
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드 조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_chnTpCd=ds_output1";
        	var arg = "";

        	//조회 값 담기
        	this.ds_search.setColumn(0, "CODE_LIST", "CHN_TP_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");

        	//전송
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //배너 노출 목록 조회
        this.fn_bnrExpsListSearch = function()
        {
        	var sSvcId = "bnrExpsList";
        	var sUrl = "/sa/bnr/select-bnr-exps-list.do";
        	var inDs = "ds_search=ds_search"; //ds_search=ds_search
        	var outDs = "ds_bnrExpsList=ds_output";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.ds_search.setColumn(0,"CO_CD", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID) {
        		case "commonCodeSearch" :
        			// 채널 타입 PC 세팅
        			this.rdo_chnTpCd.set_index(0);

        			//배너 노출 목록 조회
        			this.fn_bnrExpsListSearch();

        			break;

        		case "bnrExpsList" :
        			this.ds_bnrExpsList.set_rowposition(this.preSelectRowPosition);
        			this.fn_bnrExpsSelect(this.preSelectRowPosition);


        			break;

        		default :
        			break;
        	}
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 현재 선택된 트리가 닫혀있다면 펼치기
        this.fn_treeOpen = function(idx, type) {

        	var gridObj = this.grd_bnrExpsList;
        	var nGridRow = gridObj.getTreeRow(idx);
        	var nStatus  = gridObj.getTreeStatus(nGridRow);

        	if(nStatus == 3) return;

        	if( type == "add" ) {
        		nStatus = (nStatus == 0 ? 1 : 1);
        	} else {
        		nStatus = (nStatus == 0 ? 1 : 0);
        	}

        	gridObj.setTreeStatus(nGridRow, nStatus);
        }

        //배너 트리 선택
        this.fn_bnrExpsSelect = function(selRow) {

        	this.preSelectRowPosition = selRow; //선택한 로우 저장

        	var leafStatus = this.grd_bnrExpsList.isTreeLeafRow(selRow);
        	var vCoCd = this.ds_bnrExpsList.getColumn(selRow, "CO_CD");
        	var vBnrExpsPstId = this.ds_bnrExpsList.getColumn(selRow, "BNR_EXPS_PST_ID");
        	var vHrnkBnrExpsPstId = this.ds_bnrExpsList.getColumn(selRow, "HRNK_BNR_EXPS_PST_ID");

        	//leaf 노드일 경우, 에 조회
          	if(leafStatus) {

        		this.ds_bnrExps.copyRow(0, this.ds_bnrExpsList, selRow);

        		if(vBnrExpsPstId == pprCatgBnr) {
        			this.tab_dtl.set_tabindex(2);

        			this.tab_dtl.tab2.form.fn_setInit();

        		} else {
        			this.tab_dtl.set_tabindex(1);

        			var title = this.ds_bnrExpsList.getColumn(selRow, "BNR_EXPS_PST_NM");
        			this.tab_dtl.tab1.form.ds_bnrList.clearData();
        			this.tab_dtl.tab1.form.sta_title.set_text("■ " + title);
        			this.tab_dtl.tab1.form.sta_totalCount.set_text("총 0 건");

        			this.tab_dtl.tab1.form.fn_setInit();

        			//2022.09.16 : SSP-367
        			if(vHrnkBnrExpsPstId == 40000){
        				this.tab_dtl.tab1.form.btn_search_onclick();
        			}

        		}
        	}
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //채널 변경
        this.rdo_chnTpCd_onitemchanged = function(obj,e)
        {
        	this.fn_bnrExpsListSearch();
        	this.preSelectRowPosition = 0; //채널변경시에는 이전 row 지우기
        	this.tab_dtl.set_tabindex(0);
        };

        //트리메뉴 클릭
        this.grd_bnrExpsList_oncellclick = function(obj,e)
        {
        	this.fn_bnrExpsSelect(e.row);
        };

        //트리 더블클릭 이벤트
        this.grd_bnrExpsList_oncelldblclick = function(obj,e)
        {
        	this.fn_treeOpen(e.row);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.grd_bnrExpsList.addEventHandler("oncellclick",this.grd_bnrExpsList_oncellclick,this);
            this.grd_bnrExpsList.addEventHandler("oncelldblclick",this.grd_bnrExpsList_oncelldblclick,this);
            this.rdo_chnTpCd.addEventHandler("onitemchanged",this.rdo_chnTpCd_onitemchanged,this);
        };
        this.loadIncludeScript("SSP_BO_VA_07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
