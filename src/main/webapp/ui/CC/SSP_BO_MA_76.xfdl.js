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
            this.set_titletext("계정 멀티팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(570,675);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_acctList", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"ACCT_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">1000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_acctListCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"HRNK_ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list01","20","99","530","270",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_acctList");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_autoenter("select");
            obj.set_nodatatext("조회된 결과값이 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"158\"/><Column size=\"201\"/><Column size=\"107\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"계정ID\"/><Cell col=\"2\" text=\"계정명\"/><Cell col=\"3\" text=\"계정코드\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ACCT_ID\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"2\" text=\"bind:ACCT_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"3\" text=\"bind:ACCT_CD\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","490","61","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","485","587","65","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","253","625","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","65","370","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","485","379","65","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list02","20","423","530","154",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_select");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("body");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"158\"/><Column size=\"201\"/><Column size=\"107\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"계정ID\"/><Cell col=\"2\" text=\"계정명\"/><Cell col=\"3\" text=\"계정코드\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:ACCT_ID\"/><Cell col=\"2\" text=\"bind:ACCT_NM\"/><Cell col=\"3\" text=\"bind:ACCT_CD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","20","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("| 계정 조회");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",570,675,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_76.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_76.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES : 2021.01.19
        *******************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();	//application object

        this.ACCT_ID = "";
        this.ACCT_TP_CD = "";

        this.CO_CD    = "";
        this.BZPLC_ID = "";
        this.DEPT_ID  = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	this.ds_acctListCopy.copyData(this.ds_acctList);

        	/* 파라미터 */
        	this.CO_CD    = this.parent.coCd;
        	this.BZPLC_ID = this.parent.bzplcId;
        	this.DEPT_ID  = this.parent.deptId;
        	this.ACCT_TP_CD  = this.parent.acctTpCd;

        	this.ds_search.setColumn(0, "CO_CD"   , this.CO_CD   );
        	this.ds_search.setColumn(0, "BZPLC_ID", this.BZPLC_ID);
        	this.ds_search.setColumn(0, "DEPT_ID" , this.DEPT_ID );
        	this.ds_search.setColumn(0, "ACCT_TP_CD" , this.ACCT_TP_CD );

        	if(!this.gfn_isNull(this.ACCT_ID)){
        		this.ds_search.setColumn(0, "ACCT_ID", this.ACCT_ID);
        		this.fn_search(true);
        	}else{
        		this.fn_initGrid();
        	}

        	// 단축키 등록
        	this.fn_regShortCutMethod();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit){
        	var sSvcId = "search";
        	var sUrl = "/cc/acct/selectAcctMultiPopupList.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_acctList=ds_output1";
        	var arg;

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "search"){
        		if(this.totalCount < 1){
        			this.ds_acctList.copyData(this.ds_acctListCopy);
        		}
        		var sTotText = "(<b v='true'>총 "+ this.totalCount + "건)";
        		this.sta_totcnt.set_text(sTotText);
        		this.fn_initGrid();
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
        	this.ds_acctList.insertRow(0);
        	this.ds_acctList.setColumn(0, "ACCT_ID",  this.ds_search.getColumn(0, "ACCT_ID"));
        	this.ds_acctList.setColumn(0, "ACCT_NM",  this.ds_search.getColumn(0, "ACCT_NM"));
        	this.ds_acctList.setColumn(0, "ACCT_CD",  this.ds_search.getColumn(0, "ACCT_CD"));
        	this.ds_acctList.set_rowposition(-1);
        };

        //선택한 값을 조회 후에도 확인할 수 있도록 체크
        this.fn_dsSelectCheck = function(){
        	for(var i = 0; i< this.ds_select.rowcount; i++){
        		var findRow = this.ds_acctList.findRowExpr("ACCT_ID == '" + this.ds_select.getColumn(i, "ACCT_ID") + "'");
        		if(findRow > -1){
        			this.ds_acctList.setColumn(findRow, "CHK", 1);
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

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "ACCT_ID" , this.ds_acctList.getColumn(0, "ACCT_ID"));
        	this.ds_search.setColumn(0, "ACCT_NM" , this.ds_acctList.getColumn(0, "ACCT_NM"));
        	this.ds_search.setColumn(0, "ACCT_CD" , this.ds_acctList.getColumn(0, "ACCT_CD"));
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
        //조회버튼 클릭 이벤트
        this.btn_search_onclick = function(obj,e){
        	this.fn_searchMapSetting();
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

        	if(this.fn_validationCheck(this.ds_acctList)){
        		for(var i = 0; i< this.ds_acctList.rowcount; i++){
        			if(this.ds_acctList.getColumn(i, "CHK") == 1 && i != 0){ //첫번째(0)을 제외한, 체크된 목록(20220603)
        				var findRow = this.ds_select.findRowExpr("ACCT_ID == '" + this.ds_acctList.getColumn(i, "ACCT_ID") + "'");
        				if(findRow < 0){
        					nRow = this.ds_select.addRow();
        					this.ds_select.copyRow(nRow, this.ds_acctList, i);
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
        				aDelIdArr.push(this.ds_select.getColumn(i, "ACCT_ID"));
        			}
        		}
        	}
        	this.ds_select.deleteMultiRows(aDelArr);

        	for(var i = 0; i< aDelIdArr.length; i++){
        		var findRow = this.ds_acctList.findRowExpr("ACCT_ID == '" + aDelIdArr[i] + "'");
        		if(findRow >= 0){
        			this.ds_acctList.setColumn(findRow, "CHK", 0);
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
        	    resData.CO_CD    = this.ds_select.getColumn(i, "CO_CD");
        		resData.BZPLC_ID = this.ds_select.getColumn(i, "BZPLC_ID");
        		resData.ACCT_ID  = this.ds_select.getColumn(i, "ACCT_ID");
        		resData.ACCT_NM  = this.ds_select.getColumn(i, "ACCT_NM");
        		resData.ACCT_CD  = this.ds_select.getColumn(i, "ACCT_CD");
        		resData.ACCT_LVL  = this.ds_select.getColumn(i, "ACCT_LVL");
        		resData.HRNK_ACCT_ID  = this.ds_select.getColumn(i, "HRNK_ACCT_ID");
        		resData.HRNK_ACCT_NM  = this.ds_select.getColumn(i, "HRNK_ACCT_NM");
        		resData.ACCT_TP_CD  = this.ds_select.getColumn(i, "ACCT_TP_CD");
        		resList.push(JSON.stringify(resData));
        	}

        	this.close(JSON.stringify(resList));
        };
        //검색조건 ROW에서 enter 클릭 시
        this.grd_list01_onenterdown = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search(false);
        };

        this.grd_list01_oncelldblclick = function(obj,e)
        {
        	if(e.row != 0){
        		var findRow = this.ds_select.findRowExpr("ACCT_ID == '" + this.ds_acctList.getColumn(e.row, "ACCT_ID") + "'");
        		if(findRow < 0){
        			var nRow = this.ds_select.addRow();
        			this.ds_select.copyRow(nRow, this.ds_acctList, e.row);
        			this.ds_select.setColumn(nRow, "CHK", 0);
        			this.ds_acctList.setColumn(e.row, "CHK", 1);
        		}
        	}
        };

        //검색조건 ROW의 CELL 클릭 시 글자 맨 끝으로 커서 가도록
        this.grd_list01_oncellclick = function(obj,e)
        {
        	if(e.row == 0 && e.col != 0){
        		var cellText = obj.getCellText(e.row, e.cell);
        		if(cellText != undefined){
        			obj.setEditSelect(cellText.length, cellText.length);
        		}
        	}
        };

        this.BzplcMultiPopup_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.BzplcMultiPopup_onkeyup,this);
            this.grd_list01.addEventHandler("oncellclick",this.grd_list01_oncellclick,this);
            this.grd_list01.addEventHandler("oncelldblclick",this.grd_list01_oncelldblclick,this);
            this.grd_list01.addEventHandler("onenterdown",this.grd_list01_onenterdown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.sta_totcnt.addEventHandler("onclick",this.sta_totcnt_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_76.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
