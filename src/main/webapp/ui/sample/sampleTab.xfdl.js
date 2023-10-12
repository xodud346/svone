(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleTab");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1328,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("Tab00","65","55","1089","322",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("Tabpage3");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("Tabpage4");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab00);
            obj.set_text("Tabpage5");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("btn_popup","580","418","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사업장 조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_systemAlert","300","418","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("System Alert");
            this.addChild(obj.name, obj);

            obj = new Button("btn_systemConfirm","300","478","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("System Confirm");
            this.addChild(obj.name, obj);

            obj = new Button("btn_customAlert","440","418","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Custom Alert");
            this.addChild(obj.name, obj);

            obj = new Button("btn_customConfirm","440","478","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Coustom Confirm");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","79","538","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1328,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleTab.xfdl", function() {
        this.btn_systemAlert_onclick = function(obj,e)
        {
        	this.alert("시스템 메세지 테스트");
        };

        this.btn_systemConfirm_onclick = function(obj,e)
        {
        	var sReturn = this.confirm("시스템 메세지를 테스트 하시겠습니까?");
        	if(sReturn == true){
        		this.alert("예를 선택 하셨습니다.");
        	} else {
        		this.alert("아니오를 선택 하셨습니다.");
        	}
        };

        this.btn_customAlert_onclick = function(obj,e)
        {
        	var sMsgId = "MSG0000000001";
        	var aArg = "";  //aArg = ["A","B"];
        	var sPopId = obj.id;
        	var sCallback = "fn_messageCallback";
        	this.gfn_alert(sMsgId,aArg, sPopId, sCallback);
        };

        this.btn_customConfirm_onclick = function(obj,e)
        {
        	var sMsgId = "MSG0000000002";
        	var aArg = "";  //aArg = ["A","B"];
        	var sPopId = obj.id;
        	var sCallback = "fn_messageCallback";
        	this.gfn_alert(sMsgId,aArg, sPopId, sCallback);
        };

        this.fn_messageCallback = function(sMsgId, sRetValue){
        	switch(sMsgId){
        		case "btn_customAlert":

        			break;
        		case "btn_customConfirm":
        			this.alert("sRetValue===>"+ sRetValue);
        			break;
        		default:

        			break;

        	}
        }


        this.btn_popup_onclick = function(obj,e)
        {
        	var sPopId = "companySearch";
        	var sUrl ="CO_POP::BzplcMultiPopup.xfdl";
        	var oArg = {};
        	var sCallback = "fn_popupCallback";
        	var oOption = {titlebar:"false", title:"사업장 조회"};

        	this.gfn_openPopup(sPopId,sUrl,oArg,sCallback,oOption);
        };

        this.fn_popupCallback = function(sPopupId, sRetValue){
        	switch(sPopupId){
        		case "companySearch":
        		trace("sRetValue ===> " + sRetValue);
        			break;
        	}
        }



        this.Button00_onclick = function(obj,e)
        {
        	var a = new Array();
        	a.push(1);
        	a.push(2);
        	a.push(3);
        	trace(a.length);
        	for(var i = 0 ; i < 3 ; i++){
        		trace(a[i]);
        	}
        // 	var nPage = 28;
        // 	var nPrevValue = nPage-(nPage%10)-9;
        // 	var nNextValue = nPage-(nPage%10)+11;
        // 	trace("nPrevValue ===> " + nPrevValue);
        // 	trace("nNextValue ===> " + nNextValue);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_popup.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.btn_systemAlert.addEventHandler("onclick",this.btn_systemAlert_onclick,this);
            this.btn_systemConfirm.addEventHandler("onclick",this.btn_systemConfirm_onclick,this);
            this.btn_customAlert.addEventHandler("onclick",this.btn_customAlert_onclick,this);
            this.btn_customConfirm.addEventHandler("onclick",this.btn_customConfirm_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("sampleTab.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
