(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("topFrame");
            if (Form == this.constructor)
            {
                this._setFormPosition(60,960);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#E6e7e9");
            obj.set_cssclass("sta_leftToggle_bg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_leftToggle","0","0","60","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_leftToggle_open");
            this.addChild(obj.name, obj);

            obj = new Button("btn_leftToggle00","-1","50","61","80",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("  대용량  다운로드");
            obj.set_wordWrap("char");
            obj.set_cssclass("btn_leftToggle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_leftToggle00_00","-1","128","61","80",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("퀵 메뉴2");
            obj.set_cssclass("btn_leftToggle_b");
            obj.set_wordWrap("char");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_leftToggle00_00_00","-1","207","61","80",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("퀵 메뉴3");
            obj.set_wordWrap("char");
            obj.set_cssclass("btn_leftToggle_c");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_leftToggle00_00_00_00","-1","286","61","80",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("퀵 메뉴4");
            obj.set_wordWrap("char");
            obj.set_cssclass("btn_leftToggle_d");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",60,960,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("quickFrame.xfdl", function() {

        /*******************************************************
          PROJECT NAME :
          CREATION DATES :
        *******************************************************/



        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        	this.fv_oApp = nexacro.getApplication();	//application object
        	this.bLeftToggle = true;			//Left 축소/확장 flag
        	this.timerInterval = 5 * 60 * 1000;	// 5분
        	this.timerId = "largeExcelFailedCount";
        	this.largeExcelFailedCount = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        	this.fn_onLoad = function(obj,e)
        	{
        		this.setTimer(this.timerId, this.timerInterval);
        		this.fn_searchLargeExcelFailedCount();
        	};
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//조회
        	/*
        	this.fn_search = function()	{
        		var sSvcId = "sampleSelect";
        		var sUrl = "sampleSelectMap.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_sampleList=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};
        	*/
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		if(svcID == this.timerId) {
        			if(errorCode != 0) {
        				// 조회 중 오류 발생 시 타이머 종료
        				this.killTimer(this.timerId);
        				if(errorCode != -1)	alert("대용량 다운로드 실패 정보 조회 오류");
        				return;
        			}
        			if(this.largeExcelFailedCount > 0) {
        				alert("시스템 오류로 대용량 다운로드가 중단되었습니다.\n다시 시도해 주시기 바랍니다.");
        			}
        		}
        	/*
        		if(svcID == "sampleSelect"){
        			trace(this.ds_sampleList.saveXML());
        		}
        	*/
        	}
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        	//Left toggle 버튼 이벤트

        	this.btn_leftToggle_onclick = function(obj,e)
        	{
        		var sbtnBg = "";
        		if(this.bLeftToggle) {
        			this.bLeftToggle = false;
        			this.fv_oApp.agv_HFrameSet.set_separatesize("60,0,*");
        			sbtnBg = "url('theme://images/s_icon_축소.png') no-repeat center center #ffffff";
        		} else {
        			this.bLeftToggle = true;
        			this.fv_oApp.agv_HFrameSet.set_separatesize("60,200,*");
        			sbtnBg = "url('theme://images/s_icon_확장.png') no-repeat center center #ffffff";
        		}
        		obj.set_background(sbtnBg);
        	};

        this.btn_leftToggle00_onclick = function(obj,e)
        {
        	this.gfn_openPopup("SSP_BO_YA_21", "CO_POP::SSP_BO_YA_21.xfdl", null);
        };


        this.fn_ontimer = function(obj,e)
        {
        	if(e.timerid == "largeExcelFailedCount") {
        		this.fn_searchLargeExcelFailedCount();
        	}
        };

        this.fn_searchLargeExcelFailedCount = function()	{
        	var sSvcId = "largeExcelFailedCount";
        	var sUrl = "/co/select-large-excel-failed-count.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("ontimer",this.fn_ontimer,this);
            this.btn_leftToggle.addEventHandler("onclick",this.btn_leftToggle_onclick,this);
            this.btn_leftToggle00.addEventHandler("onclick",this.btn_leftToggle00_onclick,this);
        };
        this.loadIncludeScript("quickFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
