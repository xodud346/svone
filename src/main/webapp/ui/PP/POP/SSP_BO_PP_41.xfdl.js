(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_41");
            this.set_titletext("협력사 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(570,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bzplc", this);
            obj._setContents("<ColumnInfo><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bzplcCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20","530",null,null,"20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"41","60","28","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("| 협력사 조회");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","0","50","170","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","78",null,"532","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_bzplc");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"141\"/><Column size=\"261\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"협력사ID\"/><Cell col=\"2\" text=\"협력사명\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:currow == 0 ? &quot;imagecontrol&quot; : &quot;normal&quot;\" text=\"expr:currow == 0 ? &quot;theme::default/images/grd_WF_search.png&quot; : &quot;&quot;\"/><Cell col=\"1\" text=\"bind:CPRTCP_ID\" textAlign=\"center\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"2\" text=\"bind:CPRTCP_KOR_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" cssclass=\"grd_WF_left\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_noData","0","146",null,"314","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("조회된 결과가 없습니다.");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",570,680,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_PP_41.xfdl", function() {
        //##############################################################################################
        //#  화면ID : SSP_BO_PP_41.xfdl (샘플 : SSP_BO_PP_22.xfdl)
        //#  화면명 : 협력사 조회 팝업
        //#  개발자 : 김진섭
        //#  CREATION DATES :  2022-03-18
        //##############################################################################################
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.cprtcpId = "";
        this.cprtcpKorNm = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.cprtcpId = this.parent.cprtcpId;
        	this.cprtcpKorNm = this.parent.cprtcpKorNm;
        	this.ds_bzplcCopy.copyData(this.ds_bzplc);

        	if(!this.gfn_isNull(this.cprtcpId) || !this.gfn_isNull(this.cprtcpKorNm)){
        		this.ds_search.setColumn(0, "CPRTCP_ID", this.cprtcpId);
        		this.ds_search.setColumn(0, "CPRTCP_KOR_NM", this.cprtcpKorNm);
        		this.fn_search();
        	}else{
        		this.fn_initGrid();
        	}
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (){
        	var sSvcId = "search";
        	var sUrl = "/pp/ppcprtcpInqPopup/selectPpcprtcpInqPopuplst.do";
        	var inDs = "ds_search=ds_search";
            var outDs = "ds_bzplc=manufacturerList";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{

        	if(svcID == "search"){
        		if(this.totalCount < 1){
        			this.ds_bzplc.copyData(this.ds_bzplcCopy);
        			this.Div00.form.sta_noData.bringToFront();
        		}else{
        			this.Div00.form.sta_noData.sendToBack();
        		}

        		this.fn_initGrid();
        		this.Div00.form.sta_totcnt.set_text("(총 "+ this.gfn_appendComma(this.totalCount, 0) +"건)");
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //그리드 검색조건 셋팅
        this.fn_initGrid = function(){
        	this.ds_bzplc.insertRow(0);
        	this.ds_bzplc.setColumn(0, "CPRTCP_ID",  this.ds_search.getColumn(0, "CPRTCP_ID"));
        	this.ds_bzplc.setColumn(0, "CPRTCP_KOR_NM",  this.ds_search.getColumn(0, "CPRTCP_KOR_NM"));
        	this.ds_bzplc.set_rowposition(-1);
        };

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "CPRTCP_ID", this.ds_bzplc.getColumn(0, "CPRTCP_ID"));
        	this.ds_search.setColumn(0, "CPRTCP_KOR_NM", this.ds_bzplc.getColumn(0, "CPRTCP_KOR_NM"));
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_search_onclick = function(obj,e){
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        //그리드 셀 더블클릭
        this.grd_list_oncelldblclick = function(obj,e){
        	if(e.row != 0){
        		var resData = {};
        		var resString = "";

        		resData.CPRTCP_ID = this.ds_bzplc.getColumn(this.ds_bzplc.rowposition, "CPRTCP_ID");
        		resData.CPRTCP_KOR_NM = this.ds_bzplc.getColumn(this.ds_bzplc.rowposition, "CPRTCP_KOR_NM");
        		resString = JSON.stringify(resData);
        		this.close(resString);
        	}
        };



        //검색조건 ROW에서 enter 클릭 시
        this.grd_list_onenterdown = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        //검색조건 ROW의 CELL 클릭 시 글자 맨 끝으로 커서 가도록
        this.grd_list_oncellclick = function(obj,e)
        {
        	if(e.row == 0){
        		var cellText = obj.getCellText(e.row, e.cell);
        		if(cellText != undefined){
        			obj.setEditSelect(cellText.length, cellText.length);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.Div00.form.grd_list.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.Div00.form.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.Div00.form.sta_noData.addEventHandler("onclick",this.Div00_sta_noData_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PP_41.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
