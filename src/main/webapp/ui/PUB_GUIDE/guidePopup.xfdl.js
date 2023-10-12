(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BzplcMultiPopup");
            this.set_titletext("사업장 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bzplc", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20","560",null,null,"20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("Button57_00",null,"40","60","28","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId",null,"40","100","28","Button57_00:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00",null,"40","60","28","edt_bzplcId:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_txtR");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","155","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("사업장 조회");
            obj.set_cssclass("sta_WF_title04");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list01","0","78",null,"373","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_bzplc");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("body");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"158\"/><Column size=\"201\"/><Column size=\"107\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사업장 ID\"/><Cell col=\"2\" text=\"사업장명\"/><Cell col=\"3\" text=\"사업자번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:BZPLC_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BZPLC_NM\"/><Cell col=\"3\" text=\"bind:BIZNO\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_add",null,null,"60","30","0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_select");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","0",null,"300","29",null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("총 124건이 검색되었습니다.");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","20","0","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","20","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","40","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01","580","20","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00","516","60","4","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("4");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_01",null,"88","30","10","40",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_01_00",null,"471","30","10","40",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","560",null,"20","20",null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_01","639","0","450",null,null,"-525",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","0","0",null,"21","0",null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("0");
            obj.set_text("< 변경이력 >");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            obj.set_textAlign("center");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static63_00","0","30",null,"21","0",null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("1");
            obj.set_text("220308   변경이력 작성");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("12px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            this.Div00_01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,530,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edt_bzplcId","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("guidePopup.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
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
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);

        	if(this.parent.bzplcIds !=  undefined && this.parent.bzplcIds !=  "" ){
        		this.ds_search.setColumn(0, "BZPLC_ID", this.parent.bzplcIds);
        	}

        	//조회
        	this.fn_search(true);
        };

        this.fn_onkeyup = function(obj,e){
        	var objType = obj.getFocus();
        	if( e.keycode == 13 && objType == "[object Edit]" ) {
        		//조회
        		this.fn_search(true);
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit){
        	var sSvcId = "search";
        	var sUrl = "/co/popUp/selectBzplcPopupList.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_bzplc=ds_output1";
        	var arg;

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
        		var findRow = this.ds_bzplc.findRowExpr("BZPLC_ID == '" + this.ds_select.getColumn(i, "BZPLC_ID") + "'");
        		if(findRow > -1){
        			this.ds_bzplc.setColumn(findRow, "CHK", 1);
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
        this.btn_clear_onclick = function(obj,e){
        	this.edt_bzplcId.set_value("");
        	this.edt_bzplcNm.set_value("");
        	this.edt_bizno.set_value("");
        };

        //조회버튼 클릭 이벤트
        this.btn_search_onclick = function(obj,e){
        	this.fn_search(true);
        };

        // 그리드 클릭시 체크박스 체크되도록
        this.grd_list01_oncellclick = function(obj,e){
        	var dataSet = obj.getBindDataset();
        	var chkValue = obj.getCellText(e.row, 0);

        	if( e.col != 0 ) {
        		chkValue = (chkValue == "1" ? "0" : "1");
        	}

        	dataSet.setColumn(e.row, "CHK", chkValue);
        };

        //추가버튼 클릭 이벤트
        this.btn_add_onclick = function(obj,e){
        	var nRow = 0;

        	if(this.fn_validationCheck(this.ds_bzplc)){
        		for(var i = 0; i< this.ds_bzplc.rowcount; i++){
        			if(this.ds_bzplc.getColumn(i, "CHK") == 1){
        				var findRow = this.ds_select.findRowExpr("BZPLC_ID == '" + this.ds_bzplc.getColumn(i, "BZPLC_ID") + "'");
        				if(findRow < 0){
        					nRow = this.ds_select.addRow();
        					this.ds_select.copyRow(nRow, this.ds_bzplc, i);
        					this.ds_select.setColumn(nRow, "CHK", 0);
        				}
        			}
        		}
        	}
        };

        //삭제버튼 클릭 이벤트
        this.btn_del_onclick = function(obj,e){
        	var aDelArr = new Array();
        	var aDelIdArr = new Array();
        	if(this.fn_validationCheck(this.ds_select)){
        		for(var i = 0; i< this.ds_select.rowcount; i++){
        			if(this.ds_select.getColumn(i, "CHK") == 1){
        				aDelArr.push(i);
        				aDelIdArr.push(this.ds_select.getColumn(i, "BZPLC_ID"));
        			}
        		}
        	}
        	this.ds_select.deleteMultiRows(aDelArr);

        	for(var i = 0; i< aDelIdArr.length; i++){
        		var findRow = this.ds_bzplc.findRowExpr("BZPLC_ID == '" + aDelIdArr[i] + "'");
        		if(findRow >= 0){
        			this.ds_bzplc.setColumn(findRow, "CHK", 0);
        		}
        	}

        	this.grd_list02.setCellProperty("head", 0, "text", "0");
        };

        //선택버튼 클릭 이벤트
        this.btn_select_onclick = function(obj,e){
        	var resData = {};
        	var resList = [];

        	if(this.ds_select.rowcount == 0){
        		alert("선택된 데이터가 없습니다.");
        		return;
        	}

        	for(var i = 0; i< this.ds_select.rowcount; i++){
        		resData.BZPLC_ID= this.ds_select.getColumn(i, "BZPLC_ID");
        		resData.BZPLC_NM= this.ds_select.getColumn(i, "BZPLC_NM");
        		resList.push(JSON.stringify(resData));
        	}

        	this.close(JSON.stringify(resList));
        };

        this.Div00_sta_totcnt00_onclick = function(obj,e)
        {

        };

        this.Static02_00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.Div00.form.Button57_00.addEventHandler("onclick",this.Div00_Button57_onclick,this);
            this.Div00.form.sta_totcnt00.addEventHandler("onclick",this.Div00_sta_totcnt00_onclick,this);
            this.Div00.form.grd_list01.addEventHandler("oncellclick",this.grd_list01_oncellclick,this);
            this.Div00.form.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.Static02_00_00_00.addEventHandler("onclick",this.Static02_00_00_00_onclick,this);
            this.Div00_01.form.Static63_00.addEventHandler("onclick",this.Div00_Static63_00_onclick,this);
        };
        this.loadIncludeScript("guidePopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
