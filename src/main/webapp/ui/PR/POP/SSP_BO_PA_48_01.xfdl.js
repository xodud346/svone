(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_48_01");
            this.set_titletext("상품이력 상세뷰어");
            if (Form == this.constructor)
            {
                this._setFormPosition(740,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_output", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_DTL_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HST_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("wbs_prdDetail","17","20","703","690",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Edit("close_focus","345","749","46","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","320","744","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",740,800,this,function(p){});
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_48_01.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_PA_48_01.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 상품상세 HTML
        CREATION DATES : 2021.05.27
        *******************************************************/
        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.fvDocWeb = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);
        	var PRD_ID = this.parent.PRD_ID;
        	var HST_SEQ = this.parent.HST_SEQ;

        	this.ds_search.setColumn(0, "PRD_ID", PRD_ID);
        	this.ds_search.setColumn(0, "HST_SEQ", HST_SEQ);

        	this.fn_search();

        	this.close_focus.setFocus();	//esc용


        };

        // 화면 단축키
        this.fn_onkeyup = function(obj,e)
        {
        	if (e.keycode == 27) {// ESC
        		this.close();// 팝업 화면 닫기
        		e.stopPropagation();
        	}
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit)
        {
            var sSvcId = "search";
            var sUrl = "/pr/prd-hst/select-prd-hst-dtl-html-info.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_output=prdDtlHtml";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
                case "search" :
        		this.fn_initEditor();
        		break;
            }
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_initEditor = function(){
        	//var sUrl = nexacro.getEnvironment().services["svcUrl"].url + "smartEditor/SmartEditor2.html";
        	//this.div_prdDetail.form.wbs_prdDetail.set_url(sUrl);
        	var sUrl = nexacro.getEnvironment().services["svcUrl"].url + "toastEditor/index.html";
        	this.wbs_prdDetail.set_url(sUrl);

        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };
        this.webEditor_onloadcompleted = function(obj,e)
        {
        	this.fvDocWeb = this.wbs_prdDetail.getProperty("document").getProperty("all");

        	var sContents = this.ds_output.getColumn(0, "PRD_DTL_DESC");
        	if(typeof sContents == 'undefined'){
        		sContents = '';
        	}
        	this.fvDocWeb.getProperty("editorData").setProperty("value",sContents);
        	this.fvDocWeb.getProperty("setData").callMethod("click");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.wbs_prdDetail.addEventHandler("onloadcompleted",this.webEditor_onloadcompleted,this);
            this.wbs_prdDetail.addEventHandler("onusernotify",this.webEditor_onusernotify,this);
            this.wbs_prdDetail.addEventHandler("onsize",this.div_prdDetail_wbs_prdDetail_onsize,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_48_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
