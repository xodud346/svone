(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("clientMultiPopup");
            this.set_titletext("회원 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_memLogin", this);
            obj._setContents("<ColumnInfo><Column id=\"MEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"cPage\" type=\"INT\" size=\"256\"/><Column id=\"pagingSize\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/><Column id=\"memId\" type=\"STRING\" size=\"256\"/><Column id=\"memNm\" type=\"STRING\" size=\"256\"/><Column id=\"loginId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","22","65","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("회원ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_memId","117","65","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","97","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("회원명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_memNm","117","97","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","212","526","270",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_memLogin");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"112\"/><Column size=\"133\"/><Column size=\"219\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"회원ID\"/><Cell col=\"2\" text=\"회원명\"/><Cell col=\"3\" text=\"로그인ID\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK_COL\"/><Cell col=\"1\" text=\"bind:MEM_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:MEM_NM\"/><Cell col=\"3\" text=\"bind:LOGIN_ID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","413","169","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","481","169","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","18","16","155","37",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("회원 조회");
            obj.set_font("bold 14pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","208","494","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm","276","494","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","22","129","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("로그인ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_loginId","117","129","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","22","183","84","18",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("총 0건");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_memId","value","ds_search","memId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_memNm","value","ds_search","memNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_loginId","value","ds_search","loginId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("clientMultiPopup.xfdl", function() {
        /*******************************************************
        PROJECT NAME : MarketA
        CREATION DATES : 2021.01.19
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totRowCnt = 0;
        this.pagingSize = 10;
        this.pageSize = 20;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//조회
        	this.fn_search(1);
        };

        this.fn_onkeyup = function(obj,e)
        {
        	var objType = obj.getFocus();
        	if( e.keycode == 13 && objType == "[object Edit]" ) {
        		//조회
        		this.fn_search(1);
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (cPage)
        {
        	var sSvcId = "clientPopupList";
        	var sUrl = "/co/popUp/clientPopupList.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_memLogin=ds_output1";
        	var arg;

        	if( undefined == cPage ) {
        		cPage = 1;
        	}

        	// 페이징 정보 세팅.
        	this.ds_search.setColumn(0, "cPage", cPage);
        	this.ds_search.setColumn(0, "pagingSize", this.pagingSize);
        	this.ds_search.setColumn(0, "pageSize", this.pageSize);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "clientPopupList"){
        		this.ds_memLogin.addColumn("CHK_COL","String");
        		this.sta_totcnt.set_text("총 "+this.totRowCnt+"건");
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
        this.btn_clear_onclick = function(obj,e)
        {
        	this.edt_memId.set_value("");
        	this.edt_memNm.set_value("");
        	this.edt_loginId.set_value("");
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search(1);
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btn_confirm_onclick = function(obj,e)
        {
        	var resData = {};
        	var resList = [];

        	//TODO extractRows or for문
        	var rowArr = this.ds_memLogin.extractRows("CHK_COL == 1");

        	for(var i=0; i<rowArr.length; i++){
        		resData.MEM_ID= this.ds_memLogin.getColumn(rowArr[i], "MEM_ID");
        		resData.MEM_NM= this.ds_memLogin.getColumn(rowArr[i], "MEM_NM");
        		resList.push(JSON.stringify(resData));
        	}

        	if(rowArr.length != 0){
        		this.close(JSON.stringify(resList));
        	}else{
        		alert("회원을 선택해주세요.");
        	}
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        	var dataSet = obj.getBindDataset();
        	var chkValue = obj.getCellText(e.row, 0);

        	if( e.col != 0 ) {
        		chkValue = (chkValue == "1" ? "0" : "1");
        	}

        	dataSet.setColumn(e.row, "CHK_COL", chkValue);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);
        };
        this.loadIncludeScript("clientMultiPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
