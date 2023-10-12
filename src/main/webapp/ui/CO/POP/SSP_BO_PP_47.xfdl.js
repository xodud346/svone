(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_45");
            this.set_titletext("운영자 멀티 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(570,673);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_oprtr", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprtrCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selectCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCodeSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"32\"/><Column id=\"langCd\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20","530",null,null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_positionstep("0");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_noData","0","155",null,"164","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("조회된 결과가 없습니다.");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"41","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("사용자 조회");
            obj.set_cssclass("sta_WF_title04");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_select","235","603","60","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list01","0","77",null,"270","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_oprtr");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("body");
            obj.set_positionstep("0");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"102\"/><Column size=\"109\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사용자ID\"/><Cell col=\"2\" text=\"사용자명\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:currow == 0 ? &quot;imagecontrol&quot; : &quot;checkboxcontrol&quot;\" edittype=\"expr:currow == 0 ? &quot;none&quot; :  &quot;checkbox&quot; \" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:OPRTR_ID\" textAlign=\"center\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\"/><Cell col=\"2\" text=\"bind:OPRTR_NM\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"grd_list01:20","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list02","0","403",null,"154","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_binddataset("ds_select");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("body");
            obj.set_positionstep("0");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"102\"/><Column size=\"109\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사용자ID\"/><Cell col=\"2\" text=\"사용자명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:OPRTR_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:OPRTR_NM\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"grd_list02:10","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","0","40","90","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("총 0건");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_maxCnt","400","41",null,"26","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_textAlign("right");
            obj.set_enable("false");
            obj.set_value("1,000");
            obj.set_text("1,000");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00","336","40",null,"25","edt_maxCnt:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_selectCnt","0","369","330","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("선택건수 0건");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",570,673,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edt_maxCnt","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PP_47.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_PP_47.xfdl","CC::CcUtils.xjs");
        this.registerScript("SSP_BO_PP_47.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES : 2021.01.19
        *******************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        //this.mbrId = "";
        //this.mbrNm = "";
        this.fv_oApp 			= nexacro.getApplication();		//application object
        this.fv_sessionData 	= this.getSession(); 			//session object
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	//this.fn_commonCodeSearch();

        	//회사코드 설정
        	this.ds_search.insertRow(0);
        	this.ds_search.setColumn(0,"CO_CD",this.fv_sessionData.coCd);

        	this.ds_oprtrCopy.copyData(this.ds_oprtr);
        	this.ds_selectCopy.copyData(this.ds_select);

        	this.Div00.form.edt_maxCnt.set_value("1,000"); //초기 1000으로 셋팅
        	this.fn_paramSetting(this.parent);

        	this.ds_search.setColumn(0,"ROW_COUNT",this.Div00.form.edt_maxCnt.value);



        	// 단축키 등록
        	this.fn_regShortCutMethod();
        };

        this.fn_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit)
        {
        	var oprtrId = this.ds_search.getColumn(0, "OPRTR_ID");
        	var oprtrnm = this.ds_search.getColumn(0, "OPRTR_NM");
        	if(this.gfn_isNull(this.gfn_trim(oprtrId)) && this.gfn_isNull(this.gfn_trim(oprtrnm))){
        		alert(this.fn_getMessage("ERRC000253")); // 최소 1개의 검색조건을 입력하여 주십시오.
        		return;
        	}

        	var sSvcId = "search";
        	var sUrl = "/co/popup/select-oprtr-popup-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_oprtr=ds_output1";
        	var arg;

        	if(bInit){
        		sSvcId = "initSearch";
        		outDs = "ds_oprtr=ds_output1 ds_select=ds_output1";
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	switch(svcID){
        		case "initSearch":
        			if(this.totalCount < 1){
        				this.ds_select.copyData(this.ds_selectCopy);
        			}
        		case "search":
        			if(this.totalCount < 1){
        				this.ds_oprtr.copyData(this.ds_oprtrCopy);
        				this.Div00.form.sta_noData.bringToFront();
        			}else{
        				this.Div00.form.sta_noData.sendToBack();
        			}

        			this.fn_initGrid();
        			this.Div00.form.sta_totcnt.set_text("총 "+ this.gfn_appendComma(this.totalCount, 0) +"건");
        			this.Div00.form.grd_list01.setCellProperty("head", 0, "text", "0");
        			this.Div00.form.grd_list01.setFixedRow(0);
        			this.fn_dsSelectCheck();
        			//그리드에 포커스
        			this.Div00.form.grd_list01.setFocus();
        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        this.cfn_formInit = function(){
        	this.Div00.form.grd_list01.uUnCheckRow = "0";  //,구분자로 여려Row 설정 가능
        };
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_paramSetting = function (param){
        	if(this.gfn_isNull(param.coCd) || param.coCd ==  undefined){
        		alert("팝업창의 회사코드가 비어있습니다. 확인해주세요.");
        		return;
        	}

        	this.ds_search.setColumn(0, "CO_CD", param.coCd);
        	this.ds_search.setColumn(0, "OPRTR_ID", param.oprtId);
        	this.ds_search.setColumn(0, "OPRTR_NM", param.oprtrNm);
        	this.fn_initGrid();
        };

        //그리드 검색조건 셋팅
        this.fn_initGrid = function(){
        	this.ds_oprtr.insertRow(0);
        	this.ds_oprtr.setColumn(0, "CO_CD", this.ds_search.getColumn(0, "CO_CD"));
        	this.ds_oprtr.setColumn(0, "OPRTR_ID", this.ds_search.getColumn(0, "OPRTR_ID"));
        	this.ds_oprtr.setColumn(0, "OPRTR_NM", this.ds_search.getColumn(0, "OPRTR_NM"));
        	this.ds_oprtr.set_rowposition(-1);
        };

        //선택한 값을 조회 후에도 확인할 수 있도록 체크
        this.fn_dsSelectCheck = function(){
        	for(var i = 0; i< this.ds_select.rowcount; i++){
        		var findRow = this.ds_oprtr.findRowExpr("currow != 0 && OPRTR_ID == '" + this.ds_select.getColumn(i, "OPRTR_ID") + "'");
        		if(findRow > -1){
        			this.ds_oprtr.setColumn(findRow, "CHK", 1);
        		}
        	}
        	this.fn_selectRowSetting();
        };

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "OPRTR_ID", this.ds_oprtr.getColumn(0, "OPRTR_ID"));
        	this.ds_search.setColumn(0, "OPRTR_NM", this.ds_oprtr.getColumn(0, "OPRTR_NM"));
        };

        this.fn_selectRowSetting = function(){
        	this.Div00.form.sta_selectCnt.set_text("선택건수 "+ this.gfn_appendComma(this.ds_select.getRowCount(), 0) +"건");
        	this.Div00.form.grd_list01.setFocus();
        };

        // 창닫기
        this.fn_closeForm = function() {
        	this.close();
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("btn_search_onclick");
        	this.fn_regMethodESC("fn_closeForm");
        	this.fn_regMethodShiftENTER("btn_select_onclick");
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_search_onclick = function(obj,e)
        {
        	var coCd = this.ds_search.getColumn(0, "CO_CD");
        	if(this.gfn_isNull(coCd) || coCd ==  undefined){
        		alert("팝업창의 회사코드가 비어있습니다. 확인해주세요.");
        		return;
        	}

        	this.fn_searchMapSetting();
        	this.fn_search(false);
        };

        //추가버튼 클릭 이벤트
        this.btn_add_onclick = function(obj,e)
        {
        	var nRow = 0;
        	var aSelectedArr = new Array();
        	var aChkArr = new Array();
        	var aTotalArr = new Array();

        	//체크된 값
        	if(this.ds_oprtr.rowcount != 0){
        		aTotalArr = this.ds_oprtr.extractRows("CHK == 1");
        	}

        	this.ds_oprtr.set_enableevent(false);
        	this.ds_select.set_enableevent(false);

        	if(aTotalArr != undefined && aTotalArr.length != 0){
        		for(var i = 0; i< aTotalArr.length; i++){
        			if(aTotalArr[i] != 0){ //첫번째 row가 선택되어있다면 제외
        				var findRow = this.ds_select.findRowExpr("OPRTR_ID == '" + this.ds_oprtr.getColumn(aTotalArr[i], "OPRTR_ID") + "'");
        				if(findRow < 0){
        					nRow = this.ds_select.addRow();
        					this.ds_select.copyRow(nRow, this.ds_oprtr, aTotalArr[i]);
        					this.ds_select.setColumn(nRow, "CHK", 0);
        					this.ds_oprtr.setColumn(aTotalArr[i], "CHK", 1);
        				}
        			}
        		}
        		this.Div00.form.grd_list01.clearSelect(); // 선택된 영역 해제
        	}else{
        		alert("선택된 데이터가 없습니다.");
        	}

        	this.ds_oprtr.set_enableevent(true);
        	this.ds_select.set_enableevent(true);
        	this.fn_selectRowSetting();

        };

        //삭제버튼 클릭 이벤트
        this.btn_del_onclick = function(obj,e)
        {
        	var aSelectedArr = new Array();
        	var aChkArr = new Array();
        	var aTotalArr = new Array();

        	//체크된 값
        	if(this.ds_select.rowcount != 0){
        		aTotalArr = this.ds_select.extractRows("CHK == 1");
        	}

        	//var startRow = parseInt(this.Div00.form.grd_list02.selectstartrow);
        	//var endRow = parseInt(this.Div00.form.grd_list02.selectendrow);

        	this.ds_oprtr.set_enableevent(false);
        	this.ds_select.set_enableevent(false);

        	if(aTotalArr != undefined && aTotalArr.length != 0){
        		for(var i = 0; i< aTotalArr.length; i++){
        			var findRow = this.ds_oprtr.findRowExpr("currow != 0 && OPRTR_ID == '" + this.ds_select.getColumn(aTotalArr[i], "OPRTR_ID") + "'");
        			if(findRow >= 0){
        				this.ds_oprtr.setColumn(findRow, "CHK", 0);
        				this.Div00.form.grd_list01.selectRow(findRow, false); //선택해제
        			}
        		}

        		this.ds_select.deleteMultiRows(aTotalArr);
        		this.Div00.form.grd_list02.clearSelect(); // 선택된 영역 해제
        	}else{
        		alert("선택된 데이터가 없습니다.");
        	}

        	this.ds_oprtr.set_enableevent(true);
        	this.ds_select.set_enableevent(true);
        	this.Div00.form.grd_list02.setCellProperty("head", 0, "text", "0");
        	this.fn_selectRowSetting();
        };

        //선택버튼 클릭 이벤트
        this.btn_select_onclick = function(obj,e)
        {
        	var resData = {};
        	var resList = [];

        	if(this.ds_select.rowcount == 0){
        		alert("선택된 데이터가 없습니다.");
        		this.Div00.form.grd_list01.setFocus();
        		return;
        	}

        	for(var i = 0; i< this.ds_select.rowcount; i++){
        		resData.OPRTR_ID= this.ds_select.getColumn(i, "OPRTR_ID");
        		resData.OPRTR_NM= this.ds_select.getColumn(i, "OPRTR_NM");
        		resData.CO_CD = this.ds_select.getColumn(i, "CO_CD");
        		resList.push(JSON.stringify(resData));
        	}
        	this.close(JSON.stringify(resList));
        };

        this.grd_list01_oncelldblclick = function(obj,e)
        {
        	if(e.row != 0 && e.col != 0){
        		var findRow = this.ds_select.findRowExpr("OPRTR_ID == '" + this.ds_oprtr.getColumn(e.row, "OPRTR_ID") + "'");
        		if(findRow < 0){
        			var nRow = this.ds_select.addRow();
        			this.ds_select.copyRow(nRow, this.ds_memLogin, e.row);
        			this.ds_select.setColumn(nRow, "CHK", 0);
        			this.ds_oprtr.setColumn(e.row, "CHK", 1);
        		}
        	}
        };

        //조회 그리드 셀클릭 이벤트
        this.grd_list01_oncellclick = function(obj,e)
        {
        	if(e.row == 0 && e.col != 0){
        		var cellText = obj.getCellText(e.row, e.cell);
        		if(cellText != undefined){
        			obj.setEditSelect(cellText.length, cellText.length);
        		}
        		obj.dropdownCombo();
        	}else if(e.row != 0 ){
        		if(e.col != 0){
        			this.ds_oprtr.setColumn(e.row, "CHK", 1);
        		}
        	}
        };

        //선택 그리드 oncolumnchange 이벤트
        this.ds_select_oncolumnchanged = function(obj,e)
        {
        	this.fn_selectRowSetting();
        };


        //최대조회수 이벤트
        this.Div00_edt_maxCnt_onkeyup = function(obj,e)
        {
        	var cntValue = this.gfn_removeComma(this.Div00.form.edt_maxCnt.value);

        	if(!this.gfn_isNull(cntValue)){
        		this.Div00.form.edt_maxCnt.set_value(this.gfn_appendComma(cntValue, 0));
        	}else{
        		this.Div00.form.edt_maxCnt.set_value("0");
        	}
        };


        //선택목록 셀 더블클릭 시 삭제 처리
        this.Div00_grd_list02_oncelldblclick = function(obj,e)
        {
        	if(e.row >= 0 ){
        		if(e.col != 0){
        			var findRow = this.ds_oprtr.findRowExpr("currow != 0 && OPRTR_ID == '" + this.ds_select.getColumn(e.row, "OPRTR_ID") + "'");
        			if(findRow >= 0){
        				this.ds_oprtr.setColumn(findRow, "CHK", 0);
        				this.Div00.form.grd_list01.selectRow(findRow, false); //선택해제
        			}

        			this.ds_select.deleteRow(e.row);
        			this.fn_selectRowSetting();
        		}
        	}
        };

        //선택 그리드 셀클릭 이벤트
        this.Div00_grd_list02_oncellclick = function(obj,e)
        {
        	if(e.col != 0){
        		this.ds_select.setColumn(e.row, "CHK", 1);
        	}
        };


        //조회그리드 선택영역 check 표시
        this.Div00_grd_list01_onselectchanged = function(obj,e)
        {
        	var startRow = parseInt(e.selectstartrow);
        	var endRow =  parseInt(e.selectendrow);

        	var startCol = parseInt(e.oldcell);
        	var endCol =  parseInt(e.cell);

        	if(startRow  <= 0 && endRow <= 0){
        		return;
        	}

        	if(startCol  <= 0 && endCol <= 0){
        		return;
        	}

        	for(var i =startRow; i <= endRow; i++){
        		this.ds_oprtr.setColumn(i, "CHK", 1);
        	}

        };

        //선택그리드 선택영역 check 표시
        this.Div00_grd_list02_onselectchanged = function(obj,e)
        {
        	var startRow = parseInt(e.selectstartrow);
        	var endRow = parseInt(e.selectendrow);

        	var startCol = parseInt(e.oldcell);
        	var endCol =  parseInt(e.cell);

        	if(startRow  < 0 && endRow < 0){
        		return;
        	}

        	if(startCol  <= 0 && endCol <= 0){
        		return;
        	}

        	for(var i=startRow; i <= endRow; i++){
        		this.ds_select.setColumn(i, "CHK", 1);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.Div00.form.sta_noData.addEventHandler("onclick",this.Div00_sta_noData_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.Div00.form.grd_list01.addEventHandler("oncellclick",this.grd_list01_oncellclick,this);
            this.Div00.form.grd_list01.addEventHandler("oncelldblclick",this.grd_list01_oncelldblclick,this);
            this.Div00.form.grd_list01.addEventHandler("onselectchanged",this.Div00_grd_list01_onselectchanged,this);
            this.Div00.form.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.Div00.form.grd_list02.addEventHandler("oncellclick",this.Div00_grd_list02_oncellclick,this);
            this.Div00.form.grd_list02.addEventHandler("oncelldblclick",this.Div00_grd_list02_oncelldblclick,this);
            this.Div00.form.grd_list02.addEventHandler("onselectchanged",this.Div00_grd_list02_onselectchanged,this);
            this.Div00.form.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.Div00.form.edt_maxCnt.addEventHandler("onkeyup",this.Div00_edt_maxCnt_onkeyup,this);
            this.ds_select.addEventHandler("oncolumnchanged",this.ds_select_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_PP_47.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
