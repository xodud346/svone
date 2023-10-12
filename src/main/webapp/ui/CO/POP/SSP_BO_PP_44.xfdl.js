(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_44");
            this.set_titletext("운영자 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,599);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">1000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20","560",null,null,"20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","78",null,"441","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("body");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"133\"/><Column size=\"203\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"운영자ID\"/><Cell col=\"1\" text=\"운영자명\"/></Band><Band id=\"body\"><Cell text=\"bind:OPRTR_ID\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : none&quot;\"/><Cell col=\"1\" text=\"bind:OPRTR_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : none&quot;\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button57_00",null,"40","60",null,"0","grd_list:10",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","155","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("운영자 조회");
            obj.set_cssclass("sta_WF_title04");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_select",null,"grd_list:10","60","30","250",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_noData","20","180","500","230",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("조회된 결과가 없습니다.");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_maxCnt","430","41",null,"26","Button57_00:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_textAlign("right");
            obj.set_enable("false");
            obj.set_text("1,000");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00","361","40",null,"25","edt_maxCnt:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("totalPageCount","0","40","80","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("총 0건");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,599,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_PP_44.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_PP_44
        /* 작 성 일 자 : 2022/03/16
        /* 작  성   자 : 이성민
        /* 설       명 : 운영자 조회 팝업
        /***********************************************************/


        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;	//전체 카운트


        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.Div00.form.edt_maxCnt.set_value("1,000"); //초기 1000으로 셋팅
        	//초기화
        	this.fn_initGrid();
        	this.fn_search(0);

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "Div00_Button57_00_onclick",
        		ESC : "",
        		CTRL_ENTER : "",
        		SHIFT_ENTER : "Div00_btn_select_onclick",
        		SHIFT_S : "",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});

        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(page) {
        	 var sSvcId = "search";
             var sUrl = "/co/select-oprtr-info-list.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_list=ds_output";
             var arg;
             var callback = "fn_callBack";

        	 var rowCount = this.gfn_removeComma(this.Div00.form.edt_maxCnt.value);
        	 this.ds_search.setColumn(0, "ROW_COUNT", rowCount);
        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //콜백이벤트
        this.fn_callBack = function(svcID, errorCode, errorMsg){

        	if(svcID == "search"){
        		//trace(this.ds_sampleList.saveXML());
        		var rowCnt = 0;

        		// 조회 카운트가 없으면 데이터셋이 날라감으로 강제 설정
        		if( this.ds_list.rowcount == 0 ) {
        			this.ds_list.copyData(this.ds_list_copy);
        			this.Div00.form.sta_noData.bringToFront();
        		} else {
        			this.Div00.form.sta_noData.sendToBack();
        			rowCnt = this.ds_list.rowcount;
        		}

        		this.fn_initGrid();

        		///var sTotText = "(<b v='true'>총 "+ this.totalCount +"건 </b>)";
        		var sTotText =  "총 "+ this.gfn_appendComma(rowCnt, 0) +"건";
        		this.Div00.form.totalPageCount.set_text(sTotText);

        		console.log(this.ds_list);

        	}
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//grid 초기 설정
        	this.Div00.form.grd_list.uCellSizeType = "true";

        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //그리드 검색조건 셋팅
        this.fn_initGrid = function(){
        	this.ds_list.insertRow(0);
        	this.ds_list.setColumn(0, "OPRTR_ID",  this.ds_search.getColumn(0, "OPRTR_ID"));
        	this.ds_list.setColumn(0, "OPRTR_NM",  this.ds_search.getColumn(0, "OPRTR_NM"));
        	this.ds_list.set_rowposition(-1);

        	this.Div00.form.grd_list.setFixedRow(0);
        };

        //리턴
        this.fn_resData = function() {

        	var resData = {};
        	var resString = "";

        	resData.OPRTR_ID = this.ds_list.getColumn(this.ds_list.rowposition, "OPRTR_ID");
        	resData.OPRTR_NM = this.ds_list.getColumn(this.ds_list.rowposition, "OPRTR_NM");
        	resData.CO_CD = this.ds_list.getColumn(this.ds_list.rowposition, "CO_CD");
        	resData.ORG_CD = this.ds_list.getColumn(this.ds_list.rowposition, "ORG_CD");
        	resData.EMP_NO = this.ds_list.getColumn(this.ds_list.rowposition, "EMP_NO");

        	//json string 변경
        	resString = JSON.stringify(resData);

        	//return
        	this.close(resString);
        }

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "OPRTR_ID", this.ds_list.getColumn(0, "OPRTR_ID"));
        	this.ds_search.setColumn(0, "OPRTR_NM", this.ds_list.getColumn(0, "OPRTR_NM"));
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //확인(닫기)버튼
        this.Div00_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        //조회버튼
        this.Div00_Button57_00_onclick = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        //그리드 셀 클릭
        this.Div00_grd_list_oncellclick = function(obj,e)
        {
        	if(e.row == 0){
        		var cellText = obj.getCellText(e.row, e.cell);
        		if(cellText != undefined){
        			obj.setEditSelect(cellText.length, cellText.length);
        		}
        	}
        };

        //그리드 더블클릭
        this.Div00_grd_list_oncelldblclick = function(obj,e)
        {
        	if(e.row != 0) {
        		this.fn_resData();
        	}
        };

        //그리드 엔터 입력
        this.Div00_grd_list_onenterdown = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        this.Div00_btn_select_onclick = function(obj,e)
        {
        	var resData = {};
        	var resString = "";

        	if(this.ds_list.rowposition < 1){
        		alert("선택된 데이터가 없습니다.");
        		this.Div00.form.grd_list.setFocus();
        		return;
        	}

        	resData.OPRTR_ID = this.ds_list.getColumn(this.ds_list.rowposition, "OPRTR_ID");
        	resData.OPRTR_NM = this.ds_list.getColumn(this.ds_list.rowposition, "OPRTR_NM");
        	resData.CO_CD = this.ds_list.getColumn(this.ds_list.rowposition, "CO_CD");
        	resData.ORG_CD = this.ds_list.getColumn(this.ds_list.rowposition, "ORG_CD");
        	resData.EMP_NO = this.ds_list.getColumn(this.ds_list.rowposition, "EMP_NO");
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Div00.form.grd_list.addEventHandler("oncellclick",this.Div00_grd_list_oncellclick,this);
            this.Div00.form.grd_list.addEventHandler("oncelldblclick",this.Div00_grd_list_oncelldblclick,this);
            this.Div00.form.grd_list.addEventHandler("onenterdown",this.Div00_grd_list_onenterdown,this);
            this.Div00.form.Button57_00.addEventHandler("onclick",this.Div00_Button57_00_onclick,this);
            this.Div00.form.btn_select.addEventHandler("onclick",this.Div00_btn_select_onclick,this);
            this.Div00.form.sta_noData.addEventHandler("onclick",this.sta_noData_onclick,this);
            this.Div00.form.edt_maxCnt.addEventHandler("onkeyup",this.Div00_edt_maxCnt_onkeyup,this);
        };
        this.loadIncludeScript("SSP_BO_PP_44.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
