(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("workPage");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_work","0","0",null,null,"0","0","1336",null,"827",null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("workFrame.xfdl", function() {
        /*******************************************************
          PROJECT NAME :
          CREATION DATES :
        *******************************************************/



        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        	this.fv_oApp = nexacro.getApplication();
        	this.fv_sMenuId = "";
        	this.fv_sBookMarkFlag = false;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        	this.fn_onLoad = function(obj,e)
        	{
        		//초기화
        		this.fv_sMenuId = this.getOwnerFrame().arguments["menuId"];
        		var sPageUrl = this.getOwnerFrame().arguments["pageUrl"];

        		//페이지 오픈
        		if(!this.gfn_isNull(sPageUrl)){
        			this.div_work.set_url(sPageUrl);
        		}

        		//즐겨찾기
        		//this.fn_bookMarkInfo();


        		//네비게이션 처리
        		//this.sta_title.set_text(this.gfn_getNavigation(this.fv_sMenuId));
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
        	/*
        		if(svcID == "sampleSelect"){
        			trace(this.ds_sampleList.saveXML());
        		}
        	*/
        	};
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        	this.fn_bookMarkInfo = function(){
        		var oGdsBookMark = this.fv_oApp.gds_bookMark;
        		var nFindRow = oGdsBookMark.findRow("MNU_LVL_SPR_CD",this.fv_sMenuId);

        		if(nFindRow > -1){
        			this.fv_sBookMarkFlag = true;
        		} else {
        			this.fv_sBookMarkFlag = false;
        		}

        		if( this.fv_sBookMarkFlag ){
        			this.btn_bookMark.set_text("★");
        		}else{
        			this.btn_bookMark.set_text("☆");
        		}
        	};
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        	//즐겨찾기 추가/삭제 버튼 click 이벤트
        	this.btnMyMenu_onclick = function(obj,e)
        	{
        		this.fv_oApp.agv_LeftFrame.form.cfn_setBookMark(this.fv_sMenuId, this.fv_sBookMarkFlag);

        		this.fn_bookMarkInfo();
        	};

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
        };
        this.loadIncludeScript("workFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
