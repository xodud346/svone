(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_16");
            this.set_titletext("특화산업군 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list1", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"RN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list01","20","99",null,"400","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list1");
            obj.set_autofittype("none");
            obj.set_cellsizebandtype("allband");
            obj.set_positionstep("0");
            obj.set_autoenter("select");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_autosizingtype("none");
            obj.set_cellmovingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"270\"/><Column size=\"306\"/><Column size=\"63\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"산업군ID\"/><Cell col=\"1\" text=\"산업군명\"/><Cell col=\"2\" text=\"적용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:IDDT_ID\" wordWrap=\"none\" edittype=\"none\" displaytype=\"normal\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:IDDT_NM\" wordWrap=\"none\" edittype=\"none\" displaytype=\"normal\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","39.00%","519","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"519","65","28","285",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","20","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("특화산업군 조회");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","66","250","14",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("총 0건");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00",null,"60","60","28","124",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_txtR");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rowCount",null,"60","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("1000");
            obj.set_readonly("true");
            obj.set_visible("false");
            obj.set_text("1000");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_21.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_PA_21.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PA_21.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES : 2023.05.23 김영남
        *******************************************************/
        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object

        this.prdClcd = this.parent.prdClcd;
        this.mallSprCd = "10";
        this.coCd = this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD");
        this.totalCount = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	this.ds_search.setColumn(0,"CO_CD", this.coCd);
        	this.ds_search.setColumn(0,"MALL_SPR_CD", this.mallSprCd);
        	this.ds_search.setColumn(0,"PRD_CLCD", this.prdClcd);

        	this.fn_search01();
        };

        this.fn_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13 && e.ctrlkey){	//Ctrl+Enter : 선택기능
        		this.btn_select_onclick();
        	}else if(e.keycode == 27){	//ESC : 닫기기능
        		this.close();
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search01 = function ()
        {
        	var sSvcId = "searchUpperGrid";
        	var sUrl = "/pr/prd-popup/select-special-industry-group.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_list1=ds_list1";
        	var arg;

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        this.fn_save = function(){
        	var sSvcId = "save";
        	var sUrl   = "/pr/prd-popup/update-special-industry-group-mapp-list.do";
        	var inDs   = "ds_save=ds_list1:u";
        	var outDs  = "";
        	var arg    = "";

        	if( this.confirm(this.fn_getMessage("ERRP000031")) ) {
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0)
        	{
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        	case "searchUpperGrid":

        			for(var i=0; i<this.ds_list1.rowcount; i++){
        			this.ds_list1.setColumn(i, "PRD_CLCD", this.prdClcd);
        		}
        			var cnt = this.totalCount ;
        			this.sta_totcnt.set_text("총 "+ this.gfn_appendComma(cnt, 0) +"건");

        		break;

        	case "save":
        		//this.alert("저장 되었습니다.");
        		this.alert(this.fn_getMessage("ERRS000156"));
        		var resData = {};
        		var resString = "";

        		resData.PRD_CLCD = this.prdClcd;
        		resString = JSON.stringify(resData);
        		this.close(resString);
        		break;
        	default:
        		break;
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //삭제
        this.btn_del_onclick = function(obj,e)
        {
        	this.close();
        };

        //선택
        this.btn_select_onclick = function(obj,e)
        {
        	if( !this.fn_dataCheck(this.ds_list1)) {
        		//alert("변경된 내용이 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000129"));
        		return false;
        	} else {

        		for(var i=0; i<this.ds_list1.rowcount; i++){
        			this.ds_list1.setColumn(i, "PRD_CLCD", this.prdClcd);
        		}
        		this.fn_save();
        	}

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.grd_list01.addEventHandler("oncellclick",this.grd_list01_oncellclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.sta_totcnt00.addEventHandler("onclick",this.Div00_sta_totcnt00_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_21.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
