(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OperateUnitMultiPopup");
            this.set_titletext("운영단위 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,810);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\">Y</Col><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnt", this);
            obj._setContents("<ColumnInfo><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","22","65","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("운영단위ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprUntId","117","65","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","97","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("운영단위 명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprUntNm","117","97","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list01","20","208","526","270",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_oprUnt");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"121\"/><Column size=\"246\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"운영단위ID\"/><Cell col=\"2\" text=\"운영단위 명\"/><Cell col=\"3\" text=\"사용 여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"3\" text=\"bind:USE_YN\" textAlign=\"center\" expr=\"USE_YN == &quot;Y&quot; ? &quot;사용&quot; :  &quot;미사용&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","413","162","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","481","162","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","18","16","155","37",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("운영단위 조회");
            obj.set_font("bold 14pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","22","127","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("사용여부");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","117","127","177","31",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            var rdo_useYn_innerdataset = new nexacro.NormalDataset("rdo_useYn_innerdataset", obj);
            rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\"/></Row><Row><Col id=\"datacolumn\">사용</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">미사용</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(rdo_useYn_innerdataset);
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","479","485","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","24","517","526","38",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","252","739","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","479","709","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list02","24","552","520","154",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("ds_select");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"121\"/><Column size=\"246\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"운영단위ID\"/><Cell col=\"2\" text=\"운영단위 명\"/><Cell col=\"3\" text=\"사용 여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"3\" text=\"expr:USE_YN == &quot;Y&quot; ? &quot;사용&quot; :  &quot;미사용&quot;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","179","370","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,810,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_oprUntId","value","ds_search","OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_oprUntNm","value","ds_search","OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","rdo_useYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("operateUnitMultiPopup.xfdl", function() {
        /*******************************************************
        PROJECT NAME : MarketA
        CREATION DATES : 2021.01.19
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();	//application object
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	this.gfn_formOnLoad(this);

        	if(this.parent.oprUntIds !=  undefined && this.parent.oprUntIds !=  "" ){
        		this.ds_search.setColumn(0, "OPR_UNIT_ID", this.parent.oprUntIds);
        	}

        	//조회
        	this.fn_search(true);
        };

        this.fn_onkeyup = function(obj,e)
        {
        	var objType = obj.getFocus();
        	if( e.keycode == 13 && objType == "[object Edit]" ) {
        		//조회
        		this.fn_search(true);
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit)
        {
        	var sSvcId = "search";
        	var sUrl = "/co/popUp/selectOperatePopupList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_oprUnt=ds_output1";
        	var arg = "";

        	if(bInit) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM",0);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "search"){
        		this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.fv_oApp.gv_pageViewCnt, "fn_pageCallback");
        		this.grd_list01.setCellProperty("head", 0, "text", "0");
        		this.fn_dsSelectCheck();
        	}
        };


        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		this.fn_search();
        	}

        	var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.sta_totcnt.set_text(sTotText);
        };

        //정렬 콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_list01"){
        		oSortInfo = this.grd_list01.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		this.fn_search();
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	//grid 초기 설정
        	this.grd_list01.uSortFlag = "false";
        	this.grd_list01.uServerSortFlag = "true";
        	this.grd_list01.uSortCallback = "fn_sortCallback";
        	this.grd_list01.uCellSizeType = "true";

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
        //선택한 값을 조회 후에도 확인할 수 있도록 체크
        this.fn_dsSelectCheck = function(){
        	for(var i = 0; i< this.ds_select.rowcount; i++){
        		var findRow = this.ds_oprUnt.findRowExpr("OPR_UNIT_ID == '" + this.ds_select.getColumn(i, "OPR_UNIT_ID") + "'");
        		if(findRow > -1){
        			this.ds_oprUnt.setColumn(findRow, "CHK", 1);
        		}
        	}
        };

        //선택된 데이터가 있는지 체크
        this.fn_validationCheck = function(dataSet){
        	var chkCnt = dataSet.getCaseCount("CHK == 1");
        	if(chkCnt == 0){
        		alert("선택된 데이터가 없습니다.");
        		return false;
        	}
        	return true;
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_clear_onclick = function(obj,e)
        {
        	this.edt_oprUntId.set_value("");
        	this.edt_oprUntNm.set_value("");
        	this.rdo_useYn.set_value("Y");
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search(true);
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        	var dataSet = obj.getBindDataset();
        	var chkValue = obj.getCellText(e.row, 0);

        	if( e.col != 0 ) {
        		chkValue = (chkValue == "1" ? "0" : "1");
        	}

        	dataSet.setColumn(e.row, "CHK", chkValue);
        };

        this.btn_add_onclick = function(obj,e)
        {
        	var nRow = 0;

        	if(this.fn_validationCheck(this.ds_oprUnt)){
        		for(var i = 0; i< this.ds_oprUnt.rowcount; i++){
        			if(this.ds_oprUnt.getColumn(i, "CHK") == 1){
        				var findRow = this.ds_select.findRowExpr("OPR_UNIT_ID == '" + this.ds_oprUnt.getColumn(i, "OPR_UNIT_ID") + "'");
        				if(findRow < 0){
        					nRow = this.ds_select.addRow();
        					this.ds_select.copyRow(nRow, this.ds_oprUnt, i);
        					this.ds_select.setColumn(nRow, "CHK", 0);
        				}
        			}
        		}
        	}
        };

        this.btn_del_onclick = function(obj,e)
        {
        	var aDelArr = new Array();
        	var aDelIdArr = new Array();
        	if(this.fn_validationCheck(this.ds_select)){
        		for(var i = 0; i< this.ds_select.rowcount; i++){
        			if(this.ds_select.getColumn(i, "CHK") == 1){
        				aDelArr.push(i);
        				aDelIdArr.push(this.ds_select.getColumn(i, "OPR_UNIT_ID"));
        			}
        		}
        	}
        	this.ds_select.deleteMultiRows(aDelArr);

        	for(var i = 0; i< aDelIdArr.length; i++){
        		var findRow = this.ds_oprUnt.findRowExpr("OPR_UNIT_ID == '" + aDelIdArr[i] + "'");
        		if(findRow >= 0){
        			this.ds_oprUnt.setColumn(findRow, "CHK", 0);
        		}
        	}

        	this.grd_list02.setCellProperty("head", 0, "text", "0");
        };

        this.btn_select_onclick = function(obj,e)
        {
        	var resData = {};
        	var resList = [];

        	if(this.ds_select.rowcount == 0){
        		alert("선택된 데이터가 없습니다.");
        		return;
        	}

        	for(var i = 0; i< this.ds_select.rowcount; i++){
        		resData.OPR_UNIT_ID= this.ds_select.getColumn(i, "OPR_UNIT_ID");
        		resData.OPR_UNIT_NM= this.ds_select.getColumn(i, "OPR_UNIT_NM");
        		resData.CO_CD= this.ds_select.getColumn(i, "CO_CD");		// 회사코드
        		resData.BZPLC_ID= this.ds_select.getColumn(i, "BZPLC_ID");	// 사업장 ID
        		resList.push(JSON.stringify(resData));
        	}
        	this.close(JSON.stringify(resList));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.grd_list01.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.grd_list02.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
        };
        this.loadIncludeScript("operateUnitMultiPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
