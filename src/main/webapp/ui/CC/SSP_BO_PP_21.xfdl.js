(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_21");
            this.set_titletext("젠데스크 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ZENDESK_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ZENDESK_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHAT_URL\" type=\"STRING\" size=\"256\"/><Column id=\"ZENDESK_CHRPSN_NMS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ZENDESK_GRP_NM\"/><Col id=\"ROW_COUNT\">1000</Col><Col id=\"ZENDESK_GRP_ID\"/><Col id=\"CHAT_URL\"/><Col id=\"ZENDESK_CHRPSN_NMS\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TOT_CUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ZENDESK_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ZENDESK_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHAT_URL\" type=\"STRING\" size=\"512\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ZENDESK_CHRPSN_IDS\" type=\"STRING\" size=\"256\"/><Column id=\"ZENDESK_CHRPSN_NMS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","78",null,"373","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("body");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"133\"/><Column size=\"167\"/><Column size=\"134\"/><Column size=\"326\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"젠데스크 그룹ID\"/><Cell col=\"1\" text=\"젠데스크 그룹명\"/><Cell col=\"2\" text=\"URL\"/><Cell col=\"3\" text=\"그룹인원\"/></Band><Band id=\"body\"><Cell text=\"bind:ZENDESK_GRP_ID\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : none&quot;\"/><Cell col=\"1\" text=\"bind:ZENDESK_GRP_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : none&quot;\"/><Cell col=\"2\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : none&quot;\" text=\"bind:CHAT_URL\"/><Cell col=\"3\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : none&quot;\" text=\"bind:ZENDESK_CHRPSN_NMS\" textAlign=\"left\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button57_00",null,"40","60",null,"0","grd_list:10",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","155","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("|젠데스크 조회");
            obj.set_cssclass("sta_WF_title03");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"grd_list:9","60","30","350",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_select");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_noData","20","180","720","230",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("조회된 결과가 없습니다.");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("totalPageCount","0",null,"300","14",null,"grd_list:10",null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00","410","20",null,"25","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("최대 조회수 : 1,000건");
            obj.set_usedecorate("true");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,530,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PP_21.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PP_21.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_PP_44
        /* 작 성 일 자 : 2022/03/16
        /* 작  성   자 : ???
        /* 설       명 : 젠데스크 조회 팝업
        /* 수정 : 박재광 2022.05.31
        /***********************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

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

        	//초기화
        	this.fn_initGrid();

        	// 단축키 등록
        	this.fn_regShortCutMethod();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(page) {
        	 var sSvcId = "search";
             var sUrl   = '/vo/voc/zendesk/list.do';
        	 var inDs   = "ds_search=ds_search";
             var outDs  = 'ds_list=ds_list';
             var arg;
             var callback = "fn_callBack";

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //콜백이벤트
        this.fn_callBack = function(svcID, errorCode, errorMsg){
        	if(svcID == "search"){
        		//trace(this.ds_sampleList.saveXML());
        		this.fn_initGrid();

        		var sTotText = "(<b v='true'>총 "+ this.totalCount +"건</b>)";
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
        this.gridFlds = [ 'ZENDESK_GRP_ID', 'ZENDESK_GRP_NM', 'CHAT_URL', 'ZENDESK_CHRPSN_NMS' ];

        //그리드 검색조건 셋팅
        this.fn_initGrid = function(){
        	// 조회 카운트가 없으면 데이터셋이 날라감으로 강제 설정
        	if( this.ds_list.getRowCount() == 0 ) {
        		this.ds_list.addRow();
        		this.Div00.form.sta_noData.bringToFront();
        	} else {
        		this.ds_list.insertRow(0);
        		this.Div00.form.sta_noData.sendToBack();
        	}

        	for (var i in this.gridFlds) {
        		this.ds_list.setColumn(0, this.gridFlds[i],  this.ds_search.getColumn(0, this.gridFlds[i]));
        	}

        	this.ds_list.set_rowposition(-1);

        	this.Div00.form.grd_list.setFixedRow(0);
        };

        //리턴
        this.fn_resData = function() {

        	var resData = {};
        	var resString = "";
        	for (var i in this.gridFlds) {
        		resData[this.gridFlds[i]] = this.ds_list.getColumn(this.ds_list.rowposition, this.gridFlds[i]);
        	}
        	var othrFlds = [ 'CO_CD', 'ZENDESK_CHRPSN_IDS' ];
        	for (var i in othrFlds) {
        		resData[othrFlds[i]] = this.ds_list.getColumn(this.ds_list.rowposition, othrFlds[i]);
        	}

        	//json string 변경
        	resString = JSON.stringify(resData);
        	//trace('resString: '+ resString);

        	//return
        	this.close(resString);
        }

        this.fn_searchMapSetting = function(){
        	for (var i in this.gridFlds) {
        		this.ds_search.setColumn(0, this.gridFlds[i], this.ds_list.getColumn(0, this.gridFlds[i]));
        	}
        };

        // 창닫기
        this.fn_closeForm = function() {
        	this.close();
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("Div00_Button57_00_onclick");
        	this.fn_regMethodESC("fn_closeForm");
        	this.fn_regMethodShiftENTER("btn_select_onclick");
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

        this.SSP_BO_PP_21_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        //선택 클릭 이벤트
        this.btn_select_onclick = function(obj,e)
        {
        	if(this.ds_list.rowposition < 1){
        		alert(this.fn_getMessage("ERRC000050", "데이터")); // 선택된 데이터가 없습니다.
        		return;
        	}

        	var resData = {};
        	var resString = "";
        	for (var i in this.gridFlds) {
        		resData[this.gridFlds[i]] = this.ds_list.getColumn(this.ds_list.rowposition, this.gridFlds[i]);
        	}
        	var othrFlds = [ 'CO_CD', 'ZENDESK_CHRPSN_IDS' ];
        	for (var i in othrFlds) {
        		resData[othrFlds[i]] = this.ds_list.getColumn(this.ds_list.rowposition, othrFlds[i]);
        	}

        	//json string 변경
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_PP_21_onkeyup,this);
            this.Div00.form.grd_list.addEventHandler("oncellclick",this.Div00_grd_list_oncellclick,this);
            this.Div00.form.grd_list.addEventHandler("oncelldblclick",this.Div00_grd_list_oncelldblclick,this);
            this.Div00.form.grd_list.addEventHandler("onenterdown",this.Div00_grd_list_onenterdown,this);
            this.Div00.form.Button57_00.addEventHandler("onclick",this.Div00_Button57_00_onclick,this);
            this.Div00.form.btn_close.addEventHandler("onclick",this.Div00_btn_close_onclick,this);
            this.Div00.form.sta_noData.addEventHandler("onclick",this.sta_noData_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PP_21.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
