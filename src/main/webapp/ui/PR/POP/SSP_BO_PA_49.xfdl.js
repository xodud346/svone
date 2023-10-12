(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_49");
            this.set_titletext("카테고리 추천&조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,611);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COLLECTION\" type=\"STRING\" size=\"256\"/><Column id=\"QUERYSIZE\" type=\"INT\" size=\"256\"/><Column id=\"RESULTSIZE\" type=\"INT\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COLLECTION\">SSP,RND</Col><Col id=\"QUERYSIZE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_LVL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TRSF_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mallSpr", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">10</Col><Col id=\"NM\">SSP</Col></Row><Row><Col id=\"CD\">20</Col><Col id=\"NM\">R&amp;D</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div","20","20",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","332",null,"100","32",null,"0",null,null,null,null,this.div.form);
            obj.set_taborder("4");
            obj.set_text("닫기");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_apply","435",null,"100","32",null,"0",null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_select");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static1","0","0","300","30",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_text("| 카테고리 추천&조회");
            obj.set_cssclass("sta_WF_title02");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static29_00_00","110","46",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Edit("PRNM","150","50","310","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("0");
            obj.set_enableevent("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("staPrdNm","0","46","140","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            obj.set_text("상품명(분류명)");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","88",null,null,"0","140",null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"350\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"카테고리ID\"/><Cell col=\"2\" text=\"카테고리명\"/><Cell col=\"3\" text=\"카테고리구분\"/><Cell col=\"4\" text=\"상품담당자\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:PRD_CLCD\"/><Cell col=\"2\" text=\"expr:PRD_CLSF_LVL_NM==null?PRD_CLSF_NM:PRD_CLSF_LVL_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:MALL_SPR_CD\" combodataset=\"ds_mallSpr\" combocodecol=\"CD\" combodatacol=\"NM\" displaytype=\"combotext\"/><Cell col=\"4\" text=\"bind:OPRTR_NM\"/></Band></Format></Formats>");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static29_00_00_00","110","441",null,"86","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.div.addChild(obj.name, obj);

            obj = new Static("staTrsfRsn","0","441","140","86",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("11");
            obj.set_text("이관사유");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div.addChild(obj.name, obj);

            obj = new TextArea("TRSF_RSN","150","446",null,"76","10",null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_rcm","470","50","92","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_text("카테고리추천");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_search","566","50","102","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_text("등록상품명조회");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_prdClsfNm","672","50","102","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("12");
            obj.set_text("카테고리명조회");
            this.div.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,611,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div.form.PRNM","value","ds_search","PRNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div.form.TRSF_RSN","value","ds_detail","TRSF_RSN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_49.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_PA_49.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PA_49.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP속성 상세 팝업
        CREATION DATES : 2021.01.19
        *******************************************************/
        //  공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        //부모창에서 넘긴 파라미터
        this.newPrdReqNo = this.parent.newPrdReqNo;
        this.prdNm = this.parent.prdNm;
        this.mallSprCd = this.parent.mallSprCd;
        this.coCd = this.parent.coCd;

        this.valiFormIds = [{"name":"상품명(분류명)","id":"PRNM"}];
        this.valiFormIds1 = [{"name":"이관사유","id":"TRSF_RSN"}];

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.ds_detail.addRow();

        	if(!this.gfn_isNull(this.prdNm)){
        		this.div.form.PRNM.set_value(this.prdNm);
        	}

        	if(this.mallSprCd == "20"){ // R&D만 MALL구분값 받아서 예외처리
        		this.ds_search.setColumn(0, "MALL_SPR_CD", this.mallSprCd);
        		this.ds_search.setColumn(0, "COLLECTION", "RND");
        		this.ds_search.setColumn(0, "QUERYSIZE", 1);
        		this.ds_search.setColumn(0, "RESULTSIZE", "10");
        	}else{
        		this.ds_search.setColumn(0, "COLLECTION", "SSP,RND");
        		this.ds_search.setColumn(0, "QUERYSIZE", 2);
        		this.ds_search.setColumn(0, "RESULTSIZE", "5");
        	}
        	this.ds_search.setColumn(0,"CO_CD",this.coCd);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function()
        {
        	var	validation = this.fn_validationForm(this.div, this.valiFormIds, this.ds_search);

        	if( validation ) {
        		var sSvcId = "selectPrdClsfList";
        		var sUrl   = "/pr/prd-popup/select-prd-clsf-list.do";
        		var inDs   = "ds_search=ds_search";
        		var outDs  = "ds_list=ds_output";
        		var arg    = "";

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        };

        // 등록
        this.fn_apply = function()
        {
        	var	validation = this.fn_validationForm(this.div, this.valiFormIds1, this.ds_detail);

        	if( validation ) {
        		var sSvcId = "saveNewPrdStats";
        		var sUrl   = "/pr/prd-popup/save-new-prd-stats.do";
        		var inDs   = "ds_detail=ds_detail:U";
        		var outDs  = "";
        		var arg    = "";

        		if(this.confirm(this.fn_getMessage("ERRP000265"))){
        			this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        		}
        	}
        };


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0)
        	{
        		this.alert(errorCode+"\n"+errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        	case "selectPrdClsfList":
        			if(this.ds_search.getColumn(0,"SEARCH_TYPE") == "D"){
        				this.div.form.grd_list.set_enableredraw(false);
        				this.ds_list.set_enableevent(false);

        				// SCORE값으로 정렬
        				this.ds_list.set_keystring("S:-SCORE");

        				this.ds_list.set_enableevent(true);
        				this.div.form.grd_list.set_enableredraw(true);
        			}
        		break;

        	case "saveNewPrdStats":
        			var resData = {};
        			var resString = "";

        			resData.PRD_CLCD = this.ds_list.getColumn(this.ds_list.rowposition, "PRD_CLCD");
        			resData.PRD_CLSF_NM = this.ds_list.getColumn(this.ds_list.rowposition, "PRD_CLSF_NM");
        			resData.MALL_SPR_CD = this.ds_list.getColumn(this.ds_list.rowposition, "MALL_SPR_CD");
        			resData.PRD_CLSF_LVL_NM = this.ds_list.getColumn(this.ds_list.rowposition, "PRD_CLSF_LVL_NM");
        			resData.PRNM = this.div.form.PRNM.value;
        			resString = JSON.stringify(resData);
        			this.close(resString);
        		break;
        	default:
        		break;
        	}
        };


        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_list"){
        		oSortInfo = this.div.form.grd_list.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		this.ds_search.setColumn(0,"SEARCH_TYPE","S");
        		this.fn_search();
        	}
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	//static 필수값 표시 초기 설정
        	this.div.form.staPrdNm.uEssentiel = "true";
        	this.div.form.staTrsfRsn.uEssentiel = "true";

        	//grid 초기 설정
        // 	this.div.form.grd_list.uSortFlag = "false";
        // 	this.div.form.grd_list.uServerSortFlag = "true";
        // 	this.div.form.grd_list.uSortCallback = "fn_sortCallback";
        // 	this.div.form.grd_list.uCellSizeType = "true";
        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //등록 버튼
        this.div_btn_apply_onclick = function(obj,e)
        {
        	if(this.ds_list.getCaseCount("CHK == '1'") < 1){
        		//alert("선택된 데이터가 없습니다.");
        		this.alert(this.fn_getMessage("ERRS000137"));
        		this.div.form.grd_list.setFocus();
        		return;
        	}
        	// R&D인 경우
        	if(this.mallSprCd == "20"){
        		var resData = {};
        		var resString = "";

        		resData.PRD_CLCD = this.ds_list.getColumn(this.ds_list.findRow("CHK","1"), "PRD_CLCD");
        		resData.PRD_CLSF_NM = this.ds_list.getColumn(this.ds_list.findRow("CHK","1"), "PRD_CLSF_NM");
        		resData.MALL_SPR_CD = this.ds_list.getColumn(this.ds_list.findRow("CHK","1"), "MALL_SPR_CD");
        		resData.PRD_CLSF_LVL_NM = this.ds_list.getColumn(this.ds_list.findRow("CHK","1"), "PRD_CLSF_LVL_NM");
        		resString = JSON.stringify(resData);
        		this.close(resString);
        	}else{
        	// SSP인 경우
        		// 카테고리구분을 SSP 선택
        		if(this.ds_list.getColumn(this.ds_list.findRow("CHK","1"),"MALL_SPR_CD") == "10"){
        			var resData = {};
        			var resString = "";

        			resData.PRD_CLCD = this.ds_list.getColumn(this.ds_list.findRow("CHK","1"), "PRD_CLCD");
        			resData.PRD_CLSF_NM = this.ds_list.getColumn(this.ds_list.findRow("CHK","1"), "PRD_CLSF_NM");
        			resData.MALL_SPR_CD = this.ds_list.getColumn(this.ds_list.findRow("CHK","1"), "MALL_SPR_CD");
        			resData.PRD_CLSF_LVL_NM = this.ds_list.getColumn(this.ds_list.findRow("CHK","1"), "PRD_CLSF_LVL_NM");
        			resData.PRNM = this.div.form.PRNM.value;
        			resString = JSON.stringify(resData);
        			this.close(resString);
        		}else{
        		// 카테고리구분을 R&D 선택
        			this.ds_detail.setColumn(0,"NEW_PRD_REQ_NO", this.newPrdReqNo);
        			this.ds_detail.setColumn(0,"PRD_CLCD", this.ds_list.getColumn(this.ds_list.findRow("CHK","1"),"PRD_CLCD"));
        			this.ds_detail.setColumn(0,"MALL_SPR_CD", this.ds_list.getColumn(this.ds_list.findRow("CHK","1"),"MALL_SPR_CD"));
        			this.fn_apply();
        		}
        	}
        };
        //취소 버튼
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        // 카테고리 추천
        this.div_btn_rcm_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"SEARCH_TYPE","D");
        	this.fn_search();
        };

        // 등록상품명조회
        this.div_btn_search_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"SEARCH_TYPE","S");
        	this.fn_search();
        };

        // 카테고리명조회
        this.div_btn_prdClsfNm_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"SEARCH_TYPE","C");
        	this.fn_search();
        };


        // 체크박스 1개만 선택처리
        this.ds_list_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid = "CHK"){
        		if(e.newvalue == 1){
        			for(var i=0; i < this.ds_list.rowcount; i++){
        				if(i != e.row){
        					this.ds_list.setColumn(i,"CHK","");
        				}
        			}
        		}
        	}
        };

        this.div_grd_list_oncellclick = function(obj,e)
        {
        	if(this.ds_list.getColumn(e.row,"CHK") == 1){
        		this.ds_list.setColumn(e.row,"CHK",0);
        	}else{
        		this.ds_list.setColumn(e.row,"CHK",1);
        	}
        };

        // 단축키
        this.SSP_BO_PA_49_onkeyup = function(obj,e)
        {
        	// ESC
        	if (e.keycode == 27) {
        		// 팝업 화면 닫기
        		this.btn_cancel_onclick();
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_PA_49_onkeyup,this);
            this.div.form.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.div.form.btn_apply.addEventHandler("onclick",this.div_btn_apply_onclick,this);
            this.div.form.Static29_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div.form.PRNM.addEventHandler("onkeydown",this.div_PRNM_onkeydown,this);
            this.div.form.grd_list.addEventHandler("oncellclick",this.div_grd_list_oncellclick,this);
            this.div.form.Static29_00_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.div.form.btn_rcm.addEventHandler("onclick",this.div_btn_rcm_onclick,this);
            this.div.form.btn_search.addEventHandler("onclick",this.div_btn_search_onclick,this);
            this.div.form.btn_prdClsfNm.addEventHandler("onclick",this.div_btn_prdClsfNm_onclick,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_PA_49.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
