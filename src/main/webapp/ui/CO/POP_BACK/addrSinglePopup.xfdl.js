(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("addrSinglePopup");
            this.set_titletext("우편번호 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(550,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_addr", this);
            obj._setContents("<ColumnInfo><Column id=\"roadAddrPart1\" type=\"STRING\" size=\"256\"/><Column id=\"roadAddrPart2\" type=\"STRING\" size=\"256\"/><Column id=\"zipNo\" type=\"STRING\" size=\"256\"/><Column id=\"jibunAddr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"keyword\" type=\"STRING\" size=\"256\"/><Column id=\"currentPage\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","20","133","510","433",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_addr");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"47\"/><Column size=\"377\"/><Column size=\"79\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"도로명주소\"/><Cell col=\"2\" text=\"우편번호\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:no\"/><Cell col=\"1\" text=\"bind:roadAddrPart1\" cssclass=\"grd_WF_left\" displaytype=\"decoratetext\" font=\"normal 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은고딕&quot;,&quot;Apple SD Gothic Neo&quot;,&quot;dotum&quot;,&quot;돋움&quot;,&quot;arial&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"bind:zipNo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","578","510","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","105","370","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("· 도로명주소 검색 결과 (총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_keyword","20","25","510","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00","20","55",null,"25","150",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("예시 : 도로명(반포대로 58), 건물명(독립기념관), 지번(삼성동 25)");
            obj.set_usedecorate("true");
            obj.set_color("#7a91b3");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",550,630,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edt_keyword","value","ds_search","keyword");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("addrSinglePopup.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();	//application object
        this.orgKeyword = "";
        this.errCode = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e){
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.Div00.form.edt_keyword.setFocus();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit){
        	var sSvcId = "search";
        	var sUrl = "/co/get-addr.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_addr=ds_output";
        	var arg = "";

        	if(bInit) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"currentPage", oPaging.uPage);
        	}
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	var oPaging = this.div_paging;

        	if(errorCode != 0 && errorCode != -100){
        		alert(errorMsg);
        		this.errCode = errorCode;
        	}

        	if(svcID == "search"){
        		if(errorCode == -100){
        			alert(errorMsg);
        			this.errCode = errorCode;
        		}else{
        			this.ds_addr.addColumn("roadAddrPart", "String");
        			this.ds_addr.addColumn("no", "String");
        			var calCnt = parseInt(oPaging.uPage) * parseInt(this.ds_addr.getRowCount());

        			for(var i = 0 ; i < this.ds_addr.getRowCount() ; i++){
        				var cnt = parseInt(this.ds_addr.getRowCount()) - parseInt(i+1);
        				this.ds_addr.setColumn(i, "no" , parseInt(calCnt) - cnt);
        				this.ds_addr.setColumn(i, "roadAddrPart" , this.ds_addr.getColumn(i, "roadAddrPart1") + this.ds_addr.getColumn(i, "roadAddrPart2"));
        				this.ds_addr.setColumn(i, "roadAddrPart1" , "<b v='true'>" + this.ds_addr.getColumn(i, "roadAddrPart1") + this.ds_addr.getColumn(i, "roadAddrPart2") + "</b>"
        				+ String.fromCharCode(13) + String.fromCharCode(10) + "[지번] "+ this.ds_addr.getColumn(i, "jibunAddr"));
        			}
        			this.orgKeyword = this.Div00.form.edt_keyword.value;
        			//paging 처리
        			//this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.fv_oApp.gv_pageViewCnt, "fn_pageCallback");
        			this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, 10, "fn_pageCallback");
        			this.errCode = 0;
        		}
        	}
        };

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;
        	if(sFlag){
        		if(this.ds_search.getColumn(0, "keyword") != this.orgKeyword ){
        			this.ds_search.setColumn(0,"keyword", this.orgKeyword);
        		}
        		this.ds_search.setColumn(0,"currentPage", oPaging.uPage);
        		this.fn_search();
        	}

        	if(this.errCode == 0){
        		var sTotText = "· 도로명주소 검색 결과 (<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        		this.sta_totcnt.set_text(sTotText);
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;
        };
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.grd_list_oncelldblclick = function(obj,e){
        	var resData = {};
        	var resString = "";
        	var row = this.ds_addr.rowposition;
        	resData.ZIP_NO = this.ds_addr.getColumn(row, "zipNo");
        	resData.ADDR = this.ds_addr.getColumn(row, "roadAddrPart");
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };

        this.Div00_edt_keyword_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		e.keyCode = 0;
        		this.ds_search.setColumn(0, "keyword", this.Div00.form.edt_keyword.value);
        		this.fn_search(true);
        	}
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        	var resData = {};
        	var resString = "";
        	var row = this.ds_addr.rowposition;
        	resData.ZIP_NO = this.ds_addr.getColumn(row, "zipNo");
        	resData.ADDR = this.ds_addr.getColumn(row, "roadAddrPart");
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.Div00.form.edt_keyword.addEventHandler("onkeydown",this.Div00_edt_keyword_onkeydown,this);
            this.Div00.form.sta_totcnt00.addEventHandler("onclick",this.Div_top_info00_sta_totcnt00_onclick,this);
        };
        this.loadIncludeScript("addrSinglePopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
