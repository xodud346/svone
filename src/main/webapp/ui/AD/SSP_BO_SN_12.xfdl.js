(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_SN_12");
            this.set_titletext("대용량다운로드팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(280,170);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staticTitle","20","20","260","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("대용량 엑셀다운로드 하시겠습니까?");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_calcNoCalc","30","53","230","33",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var rdo_calcNoCalc_innerdataset = new nexacro.NormalDataset("rdo_calcNoCalc_innerdataset", obj);
            rdo_calcNoCalc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">정산내역</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">미정산내역</Col></Row></Rows>");
            obj.set_innerdataset(rdo_calcNoCalc_innerdataset);
            obj.set_text("정산내역");
            obj.set_value("N");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm","60","106","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"106","60","30","70",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",280,170,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_SN_12.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_SN_12.xfdl", function() {
        // 정산대사 대용량 다운로드 팝업

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_SN_12_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	//검색 영역 최소size 적용
        	this.resetScroll();
        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_SN_12_onsize = function(obj,e)
        {
        	if (e.cx < 280 || e.cx > 280)	this.setOffsetWidth(280);
        	if (e.cy < 170 || e.cy > 170)	this.setOffsetHeight(170);
        };

        this.SSP_BO_SN_12_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_response = function(res) {
        	var resData = {};
        	var resString = "";

        	resData.NO_CALC = this.rdo_calcNoCalc.value;
        	resData.RESPONSE = res;
        	resString = JSON.stringify(resData);

        	this.close(resString);
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodESC("btn_cancel_onclick");
        	this.fn_regMethodShiftENTER("btn_confirm_onclick");
        };


        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        this.btn_confirm_onclick = function(obj,e)
        {
        	this.fn_response("Y");
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close(0);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_SN_12_onload,this);
            this.addEventHandler("onsize",this.SSP_BO_SN_12_onsize,this);
            this.addEventHandler("onkeyup",this.SSP_BO_SN_12_onkeyup,this);
            this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_SN_12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
