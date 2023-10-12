(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleForm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","12","12","178","39",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("에러로그 조회 화면 이동");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","12","61","130","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("팝업샘플화면 이동");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","180","105","120","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("멀티 텍스트");
            this.addChild(obj.name, obj);

            obj = new Edit("multiText","12","105","165","27",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","152","61","130","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("트리 샘플화면 이동");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","290","61","130","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("코드관리 화면 이동");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00","430","61","130","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("메뉴관리");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00_00","570","61","130","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("공지사항");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","5","141","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_url("COMM::cmmEdit.xfdl");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","10","193","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","188","199","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("X");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00_00_00","710","61","130","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("운영자이관등록");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00_00_00_00","850","60","130","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("시스템메세지관리");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","Dataset00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmEdit.xfdl");
        };
        
        // User Script
        this.registerScript("sampleForm.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.go("CO::SSP_BO_YA_08.xfdl");
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.go("sample::samplePopUpPage.xfdl");
        };

        this.Button02_onclick = function(obj,e)
        {
        	var params = {
        		textId : this.multiText
        	};

        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup("multiTextPopup", "CO_POP::multiTextPopup.xfdl", params,  "fn_multiTextPopupCallback", options);

        	//this.multiTextPopup("multiText", "fn_multiTextPopupCallback");
        };

        this.multiTextPopup = function(id, callBack) {

        	var params = {
        		  textId : this[id]
        	};

        	var objChildFrame = new ChildFrame();
        		objChildFrame.init("multiTextPopup"
        						  , 0
        						  , 0
        						  , 0
        						  , 0
        						  , null
        						  , null
        						  , "CO_POP::multiTextPopup.xfdl");

        		objChildFrame.set_dragmovetype("all");
        		objChildFrame.set_openalign("center middle");
        		objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        		objChildFrame.showModal(this.getOwnerFrame()
        							  , params
        							  , this
        							  , callBack);
        }


        this.fn_multiTextPopupCallback = function(objID, rtnValue) {
        	var resParam = JSON.parse(rtnValue);

        	if( objID == "multiTextPopup" ) {
        		this[resParam.textId].set_value(resParam.textValue);
        	}
        }


        this.Button01_00_onclick = function(obj,e)
        {
        	this.go("sample::sampleTreeForm.xfdl");
        };

        this.Button01_00_00_onclick = function(obj,e)
        {
        	this.go("CO::SSP_BO_YA_06.xfdl");
        };

        this.Button01_00_00_00_onclick = function(obj,e)
        {
        	this.go("CO::SSP_BO_YA_01.xfdl");
        };

        this.Button01_00_00_00_00_onclick = function(obj,e)
        {
        	location.href = "/ui/quickview.html?screenid=Desktop_screen&formname=CO::SSP_BO_CN_00.xfdl";
        };


        this.Edit00_oninput = function(obj,e)
        {
        	if(this.gfn_isNull(obj.value)){
        		//데이터가 빈값이면
        		this.btn_clear.set_visible(false);
        	} else {
        		this.btn_clear.set_visible(true);
        	}
        };

        this.btn_clear_onclick = function(obj,e)
        {
        	this.Edit00.set_value("");
        	this.btn_clear.set_visible(false);
        };


        this.Button01_00_00_00_00_00_onclick = function(obj,e)
        {
        	location.href = "/ui/quickview.html?screenid=Desktop_screen&formname=CO::SSP_BO_YA_10.xfdl";
        };

        this.Button01_00_00_00_00_00_00_onclick = function(obj,e)
        {
        	location.href = "/ui/quickview.html?screenid=Desktop_screen&formname=CO::SSP_BO_YA_18.xfdl";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button01_00.addEventHandler("onclick",this.Button01_00_onclick,this);
            this.Button01_00_00.addEventHandler("onclick",this.Button01_00_00_onclick,this);
            this.Button01_00_00_00.addEventHandler("onclick",this.Button01_00_00_00_onclick,this);
            this.Button01_00_00_00_00.addEventHandler("onclick",this.Button01_00_00_00_00_onclick,this);
            this.Edit00.addEventHandler("oninput",this.Edit00_oninput,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.Button01_00_00_00_00_00.addEventHandler("onclick",this.Button01_00_00_00_00_00_onclick,this);
            this.Button01_00_00_00_00_00_00.addEventHandler("onclick",this.Button01_00_00_00_00_00_00_onclick,this);
            this.Dataset00.addEventHandler("onvaluechanged",this.Dataset00_onvaluechanged,this);
        };
        this.loadIncludeScript("sampleForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
