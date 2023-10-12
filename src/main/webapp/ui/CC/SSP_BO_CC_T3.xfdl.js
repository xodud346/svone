(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CC_T3");
            this.set_titletext("회원관리팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1388,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("Tab00","20","20",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_cssclass("tab_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Tab00);
            obj.set_text("회원상세정보");
            obj.set_url("CC::SSP_BO_MA_15.xfdl");
            obj.set_async("false");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Tab00);
            obj.set_text("보유 쿠폰");
            obj.set_url("SA::SSP_BO_MA_54.xfdl");
            obj.set_async("false");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage3",this.Tab00);
            obj.set_text("이벤트");
            obj.set_url("SA::SSP_BO_MA_55.xfdl");
            obj.set_async("false");
            this.Tab00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1388,846,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CC::SSP_BO_MA_15.xfdl");
            this._addPreloadList("fdl","SA::SSP_BO_MA_54.xfdl");
            this._addPreloadList("fdl","SA::SSP_BO_MA_55.xfdl");
        };
        
        // User Script
        this.registerScript("SSP_BO_CC_T3.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e){
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	if(!this.gfn_isNull(this.parent.coCd) && !this.gfn_isNull(this.parent.mbrId)) { //목록에서 넘겨준 파라미터 셋팅
        		this.Tab00_onchanged(this.Tab00, {postindex:this.Tab00.tabindex});
        	}
        };
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        this.Tab00_onchanged = function(obj,e)
        {
        	if(e.postindex == 0) {
        		this.Tab00.tabpage1.form.ds_search.setColumn(0,"CO_CD",this.parent.coCd);
        		this.Tab00.tabpage1.form.ds_search.setColumn(0,"MBR_ID",this.parent.mbrId);
        	} else if(e.postindex == 1) {
        		this.Tab00.tabpage2.form.ds_search.setColumn(0,"CO_CD",this.parent.coCd);
        		this.Tab00.tabpage2.form.ds_search.setColumn(0,"MBR_ID",this.parent.mbrId);
        	} else if(e.postindex == 2) {
        		this.Tab00.tabpage3.form.ds_search.setColumn(0,"CO_CD",this.parent.coCd);
        		this.Tab00.tabpage3.form.ds_search.setColumn(0,"MBR_ID",this.parent.mbrId);
        	}
        };

        this.SSP_BO_CC_T3_onkeyup = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_CC_T3_onkeyup,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
        };
        this.loadIncludeScript("SSP_BO_CC_T3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
