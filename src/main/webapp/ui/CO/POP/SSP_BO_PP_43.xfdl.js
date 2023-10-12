(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_43");
            this.set_titletext("조직 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">1000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_memOprInfo","20","98",null,"442","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"156\"/><Column size=\"340\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"조직코드\"/><Cell col=\"1\" text=\"조직명\"/></Band><Band id=\"body\"><Cell text=\"bind:ORG_CD\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"bind:ORG_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","20","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조직 조회");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"60","65","28","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Static("sta_noData","37","162","526","348",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회된 결과가 없습니다.");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_maxCnt","405","61",null,"26","btn_search:4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_textAlign("right");
            obj.set_enable("false");
            obj.set_text("1,000");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00","336","60",null,"25","edt_maxCnt:4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","60","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("총 0건");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select",null,"grd_memOprInfo:10","60","30","270",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_PP_43.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_PP_43
        /* 작 성 일 자 : 2022/03/14
        /* 작  성   자 : 이성민
        /* 설       명 : 조직조회 팝업
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
        	this.edt_maxCnt.set_value("1,000"); //초기 1000으로 셋팅
        	//초기화
        	this.fn_initGrid();
        	this.fn_search(0);

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "btn_search_onclick",
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
        	 var sSvcId = "selectOprtrOrgInfoList";
             var sUrl = "/co/select-oprtr-org-info-list.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_list=ds_output";
             var arg;
             var callback = "fn_callBack";

        	 var rowCount = this.gfn_removeComma(this.edt_maxCnt.value);
        	 this.ds_search.setColumn(0, "ROW_COUNT", rowCount);
        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //콜백이벤트
        this.fn_callBack = function(svcID, errorCode, errorMsg){
        	if(svcID == "selectOprtrOrgInfoList"){
        		//trace(this.ds_sampleList.saveXML());
        		var rowCnt = 0;

        		// 조회 카운트가 없으면 데이터셋이 날라감으로 강제 설정
        		if( this.ds_list.rowcount == 0 ) {
        			this.ds_list.copyData(this.ds_list_copy);
        			this.sta_noData.bringToFront();
        		} else {
        			this.sta_noData.sendToBack();
        			rowCnt = this.ds_list.rowcount;
        		}


        		this.fn_initGrid();
        		var sTotText =  "총 "+ this.gfn_appendComma(rowCnt, 0) +"건";
        		this.totalPageCount.set_text(sTotText);

        		console.log(this.ds_list);

        	}
        }


        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//grid 초기 설정
        	this.grd_memOprInfo.uCellSizeType = "true";

        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_resData = function() {

        	var resData = {};
        	var resString = "";

        	resData.ORG_CD = this.ds_list.getColumn(this.ds_list.rowposition, "ORG_CD");
        	resData.ORG_NM = this.ds_list.getColumn(this.ds_list.rowposition, "ORG_NM");

        	//json string 변경
        	resString = JSON.stringify(resData);

        	//return
        	this.close(resString);
        }

        //그리드 검색조건 셋팅
        this.fn_initGrid = function(){
        	this.ds_list.insertRow(0);
        	this.ds_list.setColumn(0, "ORG_CD",  this.ds_search.getColumn(0, "ORG_CD"));
        	this.ds_list.setColumn(0, "ORG_NM",  this.ds_search.getColumn(0, "ORG_NM"));
        	this.ds_list.set_rowposition(-1);
        	this.grd_memOprInfo.setFixedRow(0);
        };

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "ORG_CD", this.ds_list.getColumn(0, "ORG_CD"));
        	this.ds_search.setColumn(0, "ORG_NM", this.ds_list.getColumn(0, "ORG_NM"));
        };


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회버튼
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        // 조회데이터셋 리셋
        this.div_search_btnClear_onclick = function(obj,e)
        {
        	this.ds_search.reset();
        };

        //그리드 더블클릭 이벤트
        this.grd_memOprInfo_oncelldblclick = function(obj,e)
        {
        	if(e.row != 0) {
        		this.fn_resData();
        	}
        };

        //검색조건 ROW의 CELL 클릭 시 글자 맨 끝으로 커서 가도록
        this.grd_memOprInfo_oncellclick = function(obj,e)
        {
        	if(e.row == 0){
        		var cellText = obj.getCellText(e.row, e.cell);
        		if(cellText != undefined){
        			obj.setEditSelect(cellText.length, cellText.length);
        		}
        	}
        };

        //검색조건 ROW에서 enter 클릭 시
        this.grd_memOprInfo_onenterdown = function(obj,e)
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
        		this.grd_memOprInfo.setFocus();
        		return;
        	}

        	resData.ORG_CD = this.ds_list.getColumn(this.ds_list.rowposition, "ORG_CD");
        	resData.ORG_NM = this.ds_list.getColumn(this.ds_list.rowposition, "ORG_NM");
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.grd_memOprInfo.addEventHandler("oncelldblclick",this.grd_memOprInfo_oncelldblclick,this);
            this.grd_memOprInfo.addEventHandler("oncellclick",this.grd_memOprInfo_oncellclick,this);
            this.grd_memOprInfo.addEventHandler("onenterdown",this.grd_memOprInfo_onenterdown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.sta_noData.addEventHandler("onclick",this.sta_noData_onclick,this);
            this.edt_maxCnt.addEventHandler("onkeyup",this.Div00_edt_maxCnt_onkeyup,this);
            this.btn_select.addEventHandler("onclick",this.Div00_btn_select_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PP_43.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
