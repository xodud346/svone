(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("errorDtlsPopup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("errorDtlsPopupMsg","20","17","460","239",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_scrollbartype("auto");
            obj.set_dragscrolltype("horz");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","200",null,"100","32",null,"8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,300,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("errorDtlsPopup.xfdl", function() {

        this.errorDtlsPopup_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//get params
        	var detailMsg = this.parent.detailMsg;

        	// 타이틀 헤더설정
        	this.set_titletext("에러 상세 내역");
        	if (detailMsg == null || detailMsg == "")
        	{
        	//set param
        	this.errorDtlsPopupMsg.set_value("오류내역이 없습니다.");
        	}
        	else {
        	//set param
        	this.errorDtlsPopupMsg.set_value(detailMsg);
        	}
        };

        this.btn_conf_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.errorDtlsPopup_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_conf_onclick,this);
        };
        this.loadIncludeScript("errorDtlsPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
