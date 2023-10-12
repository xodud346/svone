(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CommonCodeMultiPopup");
            this.set_titletext("공통코드 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(394,673);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_totalCount", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comClsfCdNm", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCdDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"END_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCdDtlCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"COM_CLSF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selectCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"COM_CLSF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20","354",null,null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","0","51","170","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("총 0건 (최대 조회수 : 1,000건)");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_noData","0","155",null,"164","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("조회된 결과가 없습니다.");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"41","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_title","0","0",null,"21","84",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_title04");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_select","147","603","60","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list01","0","77",null,"270","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_comCdDtl");
            obj.set_autofittype("none");
            obj.set_cellsizebandtype("body");
            obj.set_autoenter("select");
            obj.set_positionstep("0");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" edittype=\"expr:currow == 0 ? &quot;none&quot; :  &quot;checkbox&quot; \" displaytype=\"expr:currow == 0 ? &quot;imagecontrol&quot; : &quot;checkboxcontrol&quot;\"/><Cell col=\"1\" text=\"bind:COM_DTL_CD\" textAlign=\"center\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"2\" text=\"bind:COM_DTL_CD_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" cssclass=\"grd_WF_left\"/></Band></Format></Formats>");
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
            obj.set_autofittype("none");
            obj.set_cellsizebandtype("body");
            obj.set_autoenter("select");
            obj.set_positionstep("0");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:COM_DTL_CD\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:COM_DTL_CD_NM\" displaytype=\"normal\" edittype=\"none\" cssclass=\"grd_WF_left\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"grd_list02:10","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_selectCnt","0","369","90","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("선택건수 0건");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",394,673,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PP_45.xfdl","PR::prUtils.xjs");
        this.registerScript("SSP_BO_PP_45.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_PP_45
        /* 작 성 일 자 : 2023/06/014
        /* 작  성   자 : 이상민
        /* 설       명 : 공통코드 조회
        /***********************************************************/

        /* 스크립트 인클루드 */
        this.executeIncludeScript("PR::prUtils.xjs"); /*include "PR::prUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.comClsfCdNm = "";
        this.comClsfCd = "";
        this.comDtlCd = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        	this.ds_comCdDtlCopy.copyData(this.ds_comCdDtl);
        	this.ds_selectCopy.copyData(this.ds_select);
        	this.fn_paramSetting(this.parent);
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit)
        {
        	var sSvcId = "search";
        	var sUrl = "/co/popup/select-com-dtl-cd-popup-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_comCdDtl=ds_output1";
        	var arg;

        	if(bInit){
        		sSvcId = "initSearch";
        		outDs = "ds_comCdDtl=ds_output1 ds_select=ds_output1";
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
        				this.ds_comCdDtl.copyData(this.ds_comCdDtlCopy);
        				this.Div00.form.sta_noData.bringToFront();
        			}else{
        				this.Div00.form.sta_noData.sendToBack();
        			}

        			if(this.Div00.form.sta_title.text.length == 0) {
        				this.Div00.form.sta_title.set_text(this.comClsfCdNm + " 조회");
        			}

        			this.fn_initGrid();
        			this.Div00.form.sta_totcnt.set_text("총 "+ this.gfn_appendComma(this.totalCount, 0) +"건 (최대 조회수 : 1,000건)");
        			this.Div00.form.grd_list01.setCellProperty("head", 0, "text", "0");
        			this.Div00.form.grd_list01.setFixedRow(0);
        			this.fn_dsSelectCheck();
        			break;
        		default :
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
        	this.comClsfCd = param.comClsfCd;
        	this.comDtlCd = param.comDtlCd;

        	this.ds_search.setColumn(0, "COM_DTL_CD_NM", param.comDtlCdNm);
        	if(!this.gfn_isNull(this.comClsfCd)) {
        		var bInit = false;
        		this.ds_search.setColumn(0, "COM_CLSF_CD", this.comClsfCd);
        		if(!this.gfn_isNull(this.comDtlCd)){
        			this.ds_search.setColumn(0, "COM_DTL_CD", this.comDtlCd);
        			bInit = true;
        		}else{
        			this.fn_initGrid();
        		}
        		this.fn_search(bInit);
        	}else{
        		alert("분류코드 에러");
        		return;
        	}
        };

        //그리드 검색조건 셋팅
        this.fn_initGrid = function(){
        	this.ds_comCdDtl.insertRow(0);
        	this.ds_comCdDtl.setColumn(0, "COM_DTL_CD",  this.ds_search.getColumn(0, "COM_DTL_CD"));
        	this.ds_comCdDtl.setColumn(0, "COM_DTL_CD_NM",  this.ds_search.getColumn(0, "COM_DTL_CD_NM"));
        	this.ds_comCdDtl.set_rowposition(-1);
        };

        //선택한 값을 조회 후에도 확인할 수 있도록 체크
        this.fn_dsSelectCheck = function(){
        	for(var i = 0; i< this.ds_select.rowcount; i++){
        		var findRow = this.ds_comCdDtl.findRowExpr("currow != 0 && COM_DTL_CD == '" + this.ds_select.getColumn(i, "COM_DTL_CD") + "'");
        		if(findRow > -1){
        			this.ds_comCdDtl.setColumn(findRow, "CHK", 1);
        		}
        	}
        	this.Div00.form.sta_selectCnt.set_text("선택건수 : "+ this.gfn_appendComma(this.ds_select.getRowCount(), 0) +"건");
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

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "COM_DTL_CD", this.ds_comCdDtl.getColumn(0, "COM_DTL_CD"));
        	this.ds_search.setColumn(0, "COM_DTL_CD_NM", this.ds_comCdDtl.getColumn(0, "COM_DTL_CD_NM"));
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회버튼 클릭 이벤트
        this.btn_search_onclick = function(obj,e){
        	this.fn_searchMapSetting();
        	this.fn_search(false);
        };

        //추가버튼 클릭 이벤트
        this.btn_add_onclick = function(obj,e){
        	var nRow = 0;

        	if(this.fn_validationCheck(this.ds_comCdDtl)){
        		this.ds_comCdDtl.set_enableevent(false);
        		this.ds_select.set_enableevent(false);

        		for(var i = 0; i< this.ds_comCdDtl.rowcount; i++){
        			if(this.ds_comCdDtl.getColumn(i, "CHK") == 1){
        				var findRow = this.ds_select.findRowExpr("COM_DTL_CD == '" + this.ds_comCdDtl.getColumn(i, "COM_DTL_CD") + "'");
        				if(findRow < 0){
        					nRow = this.ds_select.addRow();
        					this.ds_select.copyRow(nRow, this.ds_comCdDtl, i);
        					this.ds_select.setColumn(nRow, "CHK", 0);
        				}
        			}
        		}

        		this.ds_comCdDtl.set_enableevent(true);
        		this.ds_select.set_enableevent(true);
        		this.Div00.form.sta_selectCnt.set_text("선택건수 : "+ this.gfn_appendComma(this.ds_select.getRowCount(), 0) +"건");
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
        				aDelIdArr.push(this.ds_select.getColumn(i, "COM_DTL_CD"));
        			}
        		}
        	}
        	this.ds_select.deleteMultiRows(aDelArr);

        	for(var i = 0; i< aDelIdArr.length; i++){
        		var findRow = this.ds_comCdDtl.findRowExpr("currow != 0 && COM_DTL_CD == '" + aDelIdArr[i] + "'");
        		if(findRow >= 0){
        			this.ds_comCdDtl.setColumn(findRow, "CHK", 0);
        		}
        	}

        	this.Div00.form.grd_list02.setCellProperty("head", 0, "text", "0");
        	this.Div00.form.sta_selectCnt.set_text("선택건수 : "+ this.gfn_appendComma(this.ds_select.getRowCount(), 0) +"건");
        };

        //선택버튼 클릭 이벤트
        this.btn_select_onclick = function(obj,e){
        	var resData = {};
        	var resList = [];

        	if(this.ds_select.rowcount == 0){
        		alert(this.fn_getMessage("ERRS000137"));
        		return;
        	}

        	for(var i = 0; i< this.ds_select.rowcount; i++){
        		resData.COM_CLSF_CD= this.ds_select.getColumn(i, "COM_CLSF_CD");
        		resData.COM_DTL_CD= this.ds_select.getColumn(i, "COM_DTL_CD");
        		resData.COM_DTL_CD_NM= this.ds_select.getColumn(i, "COM_DTL_CD_NM");
        		resData.COM_CLSF_CD_NM= this.ds_select.getColumn(i, "COM_CLSF_CD_NM");
        		resData.COM_USR_DEFN_NM_1= this.ds_select.getColumn(i, "COM_USR_DEFN_NM_1");
        		resData.COM_USR_DEFN_NM_2= this.ds_select.getColumn(i, "COM_USR_DEFN_NM_2");
        		resData.COM_USR_DEFN_NM_3= this.ds_select.getColumn(i, "COM_USR_DEFN_NM_3");
        		resData.COM_USR_DEFN_NM_4= this.ds_select.getColumn(i, "COM_USR_DEFN_NM_4");
        		resData.COM_USR_DEFN_NM_5= this.ds_select.getColumn(i, "COM_USR_DEFN_NM_5");
        		resData.SRT_SO= this.ds_select.getColumn(i, "SRT_SO");
        		resList.push(JSON.stringify(resData));
        	}

        	this.close(JSON.stringify(resList));
        };


        //검색조건 ROW에서 enter 클릭 시
        this.grd_list_onenterdown = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search(false);
        };

        this.grd_list01_oncelldblclick = function(obj,e)
        {
        	if(e.row != 0 ){
        		var findRow = this.ds_select.findRowExpr("COM_DTL_CD == '" + this.ds_comCdDtl.getColumn(e.row, "COM_DTL_CD") + "'");
        		if(findRow < 0){
        			var nRow = this.ds_select.addRow();
        			this.ds_select.copyRow(nRow, this.ds_comCdDtl, e.row);
        			this.ds_select.setColumn(nRow, "CHK", 0);
        			this.ds_comCdDtl.setColumn(e.row, "CHK", 1);
        		}
        	}
        };


        this.grd_list01_oncellclick = function(obj,e)
        {
        	if(e.row == 0 && e.col != 0){
        		var cellText = obj.getCellText(e.row, e.cell);
        		if(cellText != undefined){
        			obj.setEditSelect(cellText.length, cellText.length);
        		}
        	}else if(e.row != 0 ){
        		var findRow = this.ds_select.findRowExpr("COM_DTL_CD == '" + this.ds_comCdDtl.getColumn(e.row, "COM_DTL_CD") + "'");
        		if(findRow < 0){
        			var nRow = this.ds_select.addRow();
        			this.ds_select.copyRow(nRow, this.ds_comCdDtl, e.row);
        			this.ds_select.setColumn(nRow, "CHK", 0);
        			this.ds_comCdDtl.setColumn(e.row, "CHK", 1);
        		}
        	}
        };

        this.ds_select_oncolumnchanged = function(obj,e)
        {
        	this.Div00.form.sta_selectCnt.set_text("선택건수 : "+ this.gfn_appendComma(this.ds_select.getRowCount(), 0) +"건");
        };

        // 선택된 데이터 표시 그리드 더블클릭
        this.Div00_grd_list02_oncelldblclick = function(obj,e)
        {
        	if (e.row < 0)	return;

        	var deleteComDtlCd = this.ds_select.getColumn(e.row, "COM_DTL_CD");
        	var result = this.ds_select.deleteRow(e.row);

        	if (result == false) {
        		// 테스트
        		alert("삭제에 실패하였습니다.");
        		return;
        	}

        	var findRow = this.ds_comCdDtl.findRowExpr("currow != 0 && COM_DTL_CD == '" + deleteComDtlCd + "'");
        	if(findRow >= 0) {
        		this.ds_comCdDtl.setColumn(findRow, "CHK", 0);
        	}

        	this.Div00.form.grd_list02.setCellProperty("head", 0, "text", "0");
        	this.Div00.form.sta_selectCnt.set_text("선택건수 : "+ this.gfn_appendComma(this.ds_select.getRowCount(), 0) +"건");
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
            this.Div00.form.grd_list01.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.Div00.form.grd_list01.addEventHandler("oncelldblclick",this.grd_list01_oncelldblclick,this);
            this.Div00.form.grd_list01.addEventHandler("oncellclick",this.grd_list01_oncellclick,this);
            this.Div00.form.grd_list01.addEventHandler("onselectchanged",this.Div00_grd_list01_onselectchanged,this);
            this.Div00.form.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.Div00.form.grd_list02.addEventHandler("oncellclick",this.Div00_grd_list02_oncellclick,this);
            this.Div00.form.grd_list02.addEventHandler("oncelldblclick",this.Div00_grd_list02_oncelldblclick,this);
            this.Div00.form.grd_list02.addEventHandler("onselectchanged",this.Div00_grd_list02_onselectchanged,this);
            this.Div00.form.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.ds_select.addEventHandler("oncolumnchanged",this.ds_select_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_PP_45.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
