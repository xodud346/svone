(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_VA_03");
            this.set_titletext("상품 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(670,330);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_cancel","300",null,"70","30",null,"20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","20","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_title02");
            obj.set_text("■ 상품 상세");
            this.addChild(obj.name, obj);

            obj = new Div("div_dtl","20","50",null,"190","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0","141",null,"32","0",null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("Static13","0","94",null,"48","0",null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("Static12","0","63",null,"32","0",null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("Static11","0","32",null,"32","0",null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("Static10","0","1",null,"32","0",null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("Static01","1","1","170","32",null,null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("상품");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("Static02","1","32","170","32",null,null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("카테고리");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("Static03","1","63","170","32",null,null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("제조원");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("Static04","1","94","170","48",null,null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("대표규격");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("Static05","1","141","170","32",null,null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("구매담당자");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("sta_buyInfo","Static05:10","145",null,"24","10",null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("sta_mnfrInfo","Static03:10","67",null,"24","11",null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("sta_catgInfo","180","35",null,"24","11",null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("sta_prdInfo","Static01:10","5",null,"24","11",null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_dtl.addChild(obj.name, obj);

            obj = new TextArea("tae_attrInfo","181","95","440","46",null,null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("14");
            obj.set_wordWrap("char");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            obj.set_color("#4f4f4f");
            obj.set_border("0px none");
            this.div_dtl.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",670,330,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_VA_03.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_VA_03.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 상품 상세
          CREATION DATES : 2022.03.11
        *******************************************************/
        //인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 파라미터 값 ds setcolumn
        	this.ds_search.setColumn(0, "CO_CD", this.parent.coCd);
        	this.ds_search.setColumn(0, "PRD_ID", this.parent.prdId);

        	this.fn_search();
        };

        this.fn_onkeyup = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
        	}
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function()
        {
        	var sSvcId = "prdInfoSearch";
        	var sUrl = "/sa/main-prd/select-prd-info.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_prdInfo=ds_output";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
        	if(svcID == "prdInfoSearch"){
        		var prdClcd = this.gfn_isNull(this.ds_prdInfo.getColumn(0, "PRD_CLCD")) ? "" : this.ds_prdInfo.getColumn(0, "PRD_CLCD");
        		var prdClsfNm = this.gfn_isNull(this.ds_prdInfo.getColumn(0, "PRD_CLSF_NM")) ? "" : this.ds_prdInfo.getColumn(0, "PRD_CLSF_NM");
        		var oprtrNm = this.gfn_isNull(this.ds_prdInfo.getColumn(0, "OPRTR_NM")) ? "" : this.ds_prdInfo.getColumn(0, "OPRTR_NM");
        		var prdInfo = "(" + this.ds_prdInfo.getColumn(0, "PRD_ID") + ") " + this.ds_prdInfo.getColumn(0, "PRD_NM");
        		var catgInfo = "(" + prdClcd + ") " + prdClsfNm;
        		var mnfrInfo = "(" + this.ds_prdInfo.getColumn(0, "MNFR_NO") + ") " + this.ds_prdInfo.getColumn(0, "MNFR_NM");
        		var attrInfo = this.ds_prdInfo.getColumn(0, "ATTR_INFO");
        		var buyInfo = "(" + this.ds_prdInfo.getColumn(0, "PURG_CHRPSN_ID") + ") " + oprtrNm;

        		this.div_dtl.form.sta_prdInfo.set_text(prdInfo);
        		this.div_dtl.form.sta_catgInfo.set_text(catgInfo);
        		this.div_dtl.form.sta_mnfrInfo.set_text(mnfrInfo);
        		this.div_dtl.form.tae_attrInfo.set_value(attrInfo);
        		this.div_dtl.form.sta_buyInfo.set_text(buyInfo);
        	}
        }
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.div_dtl.form.Static11.addEventHandler("onclick",this.Div00_01_00_00_Static21_00_01_01_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_VA_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
