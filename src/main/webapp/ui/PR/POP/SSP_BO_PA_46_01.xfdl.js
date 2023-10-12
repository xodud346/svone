(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_16");
            this.set_titletext("S-MRO카테고리 멀티 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mroPrd", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mroPrdCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list01","20","99",null,"300","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_mroPrd");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_positionstep("0");
            obj.set_autoenter("select");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_autosizingtype("none");
            obj.set_cellmovingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"105\"/><Column size=\"167\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"S-MRO 카테고리 ID\"/><Cell col=\"2\" text=\"S-MRO 카테고리명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"expr:currow==0?&apos;none&apos;:&apos;checkboxcontrol&apos;\" edittype=\"expr:currow==0?&apos;none&apos;:&apos;checkbox&apos;\"/><Cell col=\"1\" text=\"bind:MRO_PRD_CLCD\" wordWrap=\"none\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:MRO_PRD_CLSF_NM\" wordWrap=\"none\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"409","65","28","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list02","20","450",null,"200","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_result");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_positionstep("0");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj.set_nodatatext("선택된 건이 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"105\"/><Column size=\"167\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"S-MRO 카테고리 ID\"/><Cell col=\"2\" text=\"S-MRO 카테고리명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:MRO_PRD_CLCD\" wordWrap=\"none\"/><Cell col=\"2\" text=\"bind:MRO_PRD_CLSF_NM\" wordWrap=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","45%","695","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"659","65","28","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","20","190","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("S-MRO 카테고리 멀티 조회");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"60","60","28","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","66","250","14",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("총 0건");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_selcnt","20","427","250","14",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("선택건수 0건");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00",null,"60","60","28","188",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_txtR");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rowCount",null,"60","100","28","84",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("1000");
            obj.set_readonly("true");
            obj.set_text("1000");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_PA_46_01.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES : 2022.03.17 조지훈
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
        	var mroPrdClcd = this.parent.mroPrdClcd;
        	var mroPrdClsfNm = this.parent.mroPrdClsfNm;

        	if(this.gfn_isNull(this.parent.coCd) || this.parent.coCd ==  undefined){
        		alert("팝업창의 회사코드가 비어있습니다. 확인해주세요.");
        		return;
        	}else{
        		this.ds_search.setColumn(0, "CO_CD", this.parent.coCd);
        	}

        	if(!this.gfn_isNull(mroPrdClcd)){
        		this.ds_search.setColumn(0, "MRO_PRD_CLCD", mroPrdClcd);
        	}

        	if(!this.gfn_isNull(mroPrdClsfNm)){
        		this.ds_search.setColumn(0, "MRO_PRD_CLSF_NM", mroPrdClsfNm);
        	}

        	if(!this.gfn_isNull(mroPrdClcd) || !this.gfn_isNull(mroPrdClsfNm)){
        		this.ds_search.setColumn(0, "MRO_PRD_CLCD", mroPrdClcd);
        		this.ds_search.setColumn(0, "MRO_PRD_CLSF_NM", mroPrdClsfNm);
        		this.fn_initGrid();

        		this.fn_search();
        	}else{
        		this.fn_initGrid();
        	}
        };

        this.fn_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13 && e.shiftkey){	//Ctrl+Enter : 선택기능
        		this.btn_select_onclick();
        	}else if(e.keycode == 27){	//ESC : 닫기기능
        		this.close();
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit)
        {
        	if(!this.fn_validation()){
        		alert('검색어를 입력하세요.');
        		return;
        	}

        	var sSvcId = "search";
        	var sUrl = "/pr/prd-popup/select-mroprd-popup-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_mroPrdCopy=ds_output1";
        	var arg;

        	var mroPrdClcd = this.ds_search.getColumn(0, "MRO_PRD_CLCD");
        	var mroPrdClsfNm = this.ds_search.getColumn(0, "MRO_PRD_CLSF_NM");

        	if(!this.gfn_isNull(mroPrdClcd)){
        		var prdClcd = nexacro.replaceAll(mroPrdClcd, ",", "|");
        		this.ds_search.setColumn(0, "MRO_PRD_CLCD", prdClcd);
        	}

        	if(!this.gfn_isNull(mroPrdClsfNm)){
        		var prdClsfNm = nexacro.replaceAll(mroPrdClsfNm, ",", "|");
        		this.ds_search.setColumn(0, "MRO_PRD_CLSF_NM", prdClsfNm);
        	}

            this.ds_search.setColumn(0, "ROW_COUNT", this.edt_rowCount.value);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	switch(svcID){
        		case "search":
        			this.ds_mroPrd.clearData();
        			this.fn_initGrid();
        			this.ds_mroPrd.appendData(this.ds_mroPrdCopy, true);
                    this.sta_totcnt.set_text("총 "+ this.gfn_appendComma(this.totalCount, 0) +"건");
        			break;
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_validation = function() {
        	if( this.gfn_isNull(this.ds_mroPrd.getColumn(0, "MRO_PRD_CLCD")) && this.gfn_isNull(this.ds_mroPrd.getColumn(0, "MRO_PRD_CLSF_NM")) ){
        		return false;
        	}else{
        		return true;
        	}
        };

        this.fn_initGrid = function(){
        	this.ds_mroPrd.insertRow(0);
        	this.ds_mroPrd.setColumn(0, "MRO_PRD_CLCD", this.ds_search.getColumn(0, "MRO_PRD_CLCD"));	    //S-MRO 카테고리 ID
        	this.ds_mroPrd.setColumn(0, "MRO_PRD_CLSF_NM", this.ds_search.getColumn(0, "MRO_PRD_CLSF_NM"));	//S-MRO 카테고리명
        	this.ds_mroPrd.set_rowposition(-1);
        };

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "MRO_PRD_CLCD", this.ds_mroPrd.getColumn(0, "MRO_PRD_CLCD"));	    //S-MRO 카테고리 ID
        	this.ds_search.setColumn(0, "MRO_PRD_CLSF_NM", this.ds_mroPrd.getColumn(0, "MRO_PRD_CLSF_NM"));	//S-MRO 카테고리명

        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회버튼
        this.btn_search_onclick = function(obj,e)
        {
        	var coCd = this.ds_search.getColumn(0, "CO_CD");
        	if(this.gfn_isNull(coCd) || coCd ==  undefined){
        		alert("팝업창의 회사코드가 비어있습니다. 확인해주세요.");
        		return;
        	}
        	this.fn_searchMapSetting();
            this.fn_search();
        };

        //검색조건 ROW에서 엔터
        this.grd_list_onenterdown = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        //추가
        this.btn_add_onclick = function(obj,e)
        {
        	for(var i=0; i<this.ds_mroPrd.rowcount; i++) {
                if(this.ds_mroPrd.getColumn(i, "CHK") == "1"){
        			var fRow = this.ds_result.findRowExpr("MRO_PRD_CLCD=="+this.ds_mroPrd.getColumn(i, "MRO_PRD_CLCD"));
        			if(fRow < 0 && i > 0){	//중복아닌것만
        				var nRow = this.ds_result.addRow();
        				this.ds_result.copyRow(nRow, this.ds_mroPrd, i);
        				this.ds_result.setColumn(nRow, "CHK", 0);
        			}
                }
            }
        };

        //삭제
        this.btn_del_onclick = function(obj,e)
        {
        	var checkedRow = new Array();
        	for(var i=0; i<this.ds_result.rowcount; i++) {
                if(this.ds_result.getColumn(i, "CHK") == "1"){
        			checkedRow.push(i);
                }
            }

        	if(checkedRow.length <= 0){
        		alert('선택된 데이터가 없습니다.');
        		return false;
        	}

        	this.ds_result.deleteMultiRows(checkedRow);
        };

        //선택
        this.btn_select_onclick = function(obj,e)
        {
        	if(this.ds_result.rowcount < 1){
        		alert("선택된 데이터가 없습니다.");
        		return;
        	}
        	var resArray = [];
        	//this.ds_result.filter("CHK==1");
        	for(var i=0; i<this.ds_result.rowcount; i++) {
        		var resData = {};
        		resData.MRO_PRD_CLCD = this.ds_result.getColumn(i, "MRO_PRD_CLCD");
        		resData.MRO_PRD_CLSF_NM = this.ds_result.getColumn(i, "MRO_PRD_CLSF_NM");
        		resData.TEMP_MRO_PRD_CLSF_NM = this.ds_result.getColumn(i, "TEMP_MRO_PRD_CLSF_NM");

        		resArray.push(JSON.stringify(resData));
            }
            this.close(JSON.stringify(resArray));

        };

        //row더블클릭
        this.grd_list01_oncelldblclick = function(obj,e)
        {
        	if(e.row != 0){
        		var mroPrdClcd = this.ds_mroPrd.getColumn(e.row, "MRO_PRD_CLCD");
        		var fRow = this.ds_result.findRowExpr("MRO_PRD_CLCD=="+mroPrdClcd);
        		if(fRow < 0){	//중복아닌것만
        			this.ds_mroPrd.setColumn(e.row, "CHK", 1);
        			var nRow = this.ds_result.addRow();
        			this.ds_result.copyRow(nRow, this.ds_mroPrd, e.row);
        			this.ds_result.setColumn(nRow, "CHK", 0);
        		}
        	}
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


        this.ds_result_onrowsetchanged = function(obj,e)
        {
        	this.sta_selcnt.set_text('선택건수 '+this.ds_result.rowcount+'건');
        };

        //결과창 더블클릭 액션
        this.grd_list02_oncelldblclick = function(obj,e)
        {
        	var mroPrdClcd = this.ds_result.getColumn(e.row, "MRO_PRD_CLCD");
        	var fRow = this.ds_mroPrd.findRowExpr("MRO_PRD_CLCD=="+mroPrdClcd);
        	this.ds_mroPrd.setColumn(fRow, "CHK", 0);
        	this.ds_result.deleteRow(e.row);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.grd_list01.addEventHandler("oncelldblclick",this.grd_list01_oncelldblclick,this);
            this.grd_list01.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.grd_list02.addEventHandler("oncelldblclick",this.grd_list02_oncelldblclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.sta_totcnt00.addEventHandler("onclick",this.Div00_sta_totcnt00_onclick,this);
            this.ds_result.addEventHandler("onrowsetchanged",this.ds_result_onrowsetchanged,this);
        };
        this.loadIncludeScript("SSP_BO_PA_46_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
