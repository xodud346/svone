(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CN_30");
            this.set_titletext("서비스담당자 단일조회 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(570,599);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"INT\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"INT\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USR_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USR_SPR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">1000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USR_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USR_SPR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USR_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USR_SPR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20","530",null,null,"20",null,null,null,null,this);
            obj.set_text("Div00");
            obj.set_positionstep("0");
            obj.set_enableevent("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"41","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("서비스담당자 조회");
            obj.set_cssclass("sta_WF_title04");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","0","40","180","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("총 0건");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","77",null,"442","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("body");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"86\"/><Column size=\"81\"/><Column size=\"84\"/><Column size=\"151\"/><Column size=\"82\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"담당자 명\"/><Cell col=\"2\" text=\"조직코드\"/><Cell col=\"3\" text=\"조직코드 명\"/><Cell col=\"4\" text=\"직무\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NO\" textAlign=\"center\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"bind:OPRTR_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" cssclass=\"grd_WF_left\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ORG_CD\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ORG_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:USR_SPR_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_noData","0","155",null,"354","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("조회된 결과가 없습니다.");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_select","235","grd_list:10","60","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_maxCnt","400","41",null,"26","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_textAlign("right");
            obj.set_enable("false");
            obj.set_text("1,000");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00","336","40",null,"25","edt_maxCnt:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",570,599,this,function(p){});
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
        this.addIncludeScript("SSP_BO_CN_30.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_CN_30.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CN_30.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_CN_30
        /* 작 성 일 자 : 2022/04/25
        /* 작  성   자 : 문주환
        /* 설       명 : 서비스담당자 단일조회 팝업
        /***********************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.coCd = "";			// 회사코드
        this.empNo = "";		// 사번
        this.oprtrNm = "";		// 담당자 명
        this.orgCd = "";		// 조직코드
        this.orgNm = "";		// 조직코드 명
        this.useSprCd = "";		// 직무
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	this.ds_list_copy.copyData(this.ds_list);
        	this.Div00.form.edt_maxCnt.set_value("1,000"); //초기 1000으로 셋팅
        	this.fn_paramSetting(this.parent);

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
        this.fn_search = function (){
        	var sSvcId = "search";
            var sUrl = "/bo/cust/cmn/popup/select-svc-oprtr-mbr.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "search"){
        		if(this.ds_list.getCount() < 1){
        			this.ds_list.copyData(this.ds_list_copy);
        			this.Div00.form.sta_noData.bringToFront();
        		}else{
        			this.Div00.form.sta_noData.sendToBack();
        		}

        		this.totalCount = this.ds_list.getCount();

        		this.fn_initGrid();
        		this.Div00.form.sta_totcnt.set_text("총 "+ this.gfn_appendComma(this.totalCount, 0) +"건");
        		this.Div00.form.grd_list.setFixedRow(0);

        		//그리드에 포커스
        		this.Div00.form.grd_list.setFocus();
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_paramSetting = function (param){
        	this.coCd = param.coCd;
        	this.empNo = param.empNo;
        	this.oprtrNm = param.oprtrNm;
        	this.orgCd = param.orgCd;
        	this.orgNm = param.orgNm;
        	this.useSprCd = param.useSprCd;

        	this.ds_search.setColumn(0, "CO_CD", param.coCd);
        	this.ds_search.setColumn(0, "EMP_NO", this.empNo);
        	this.ds_search.setColumn(0, "OPRTR_NM", this.oprtrNm);
        	this.ds_search.setColumn(0, "ORG_CD", this.orgCd);
        	this.ds_search.setColumn(0, "ORG_NM", this.orgNm);
        	this.ds_search.setColumn(0, "USR_SPR_CD", this.useSprCd);

        	if(!this.gfn_isNull(this.empNo) || !this.gfn_isNull(this.oprtrNm) || !this.gfn_isNull(this.orgCd)
        			 || !this.gfn_isNull(this.orgNm) || !this.gfn_isNull(this.useSprCd)){
        		this.fn_search();
        	}else{
        		this.fn_initGrid();

        		//팝업창으로 넘어온 값이 ''면 sta_noData 안보이도록 처리
        		this.Div00.form.sta_noData.sendToBack();
        	}
        };

        //그리드 검색조건 셋팅
        this.fn_initGrid = function(){
        	this.ds_list.insertRow(0);
        	this.ds_list.setColumn(0, "EMP_NO",  this.ds_search.getColumn(0, "EMP_NO"));
        	this.ds_list.setColumn(0, "OPRTR_NM",  this.ds_search.getColumn(0, "OPRTR_NM"));
        	this.ds_list.setColumn(0, "ORG_CD",  this.ds_search.getColumn(0, "ORG_CD"));
        	this.ds_list.setColumn(0, "ORG_NM",  this.ds_search.getColumn(0, "ORG_NM"));
        	this.ds_list.setColumn(0, "USR_SPR_NM",  this.ds_search.getColumn(0, "USR_SPR_NM"));
        	this.ds_list.set_rowposition(-1);
        };

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "EMP_NO", this.ds_list.getColumn(0, "EMP_NO"));
        	this.ds_search.setColumn(0, "OPRTR_NM", this.ds_list.getColumn(0, "OPRTR_NM"));
        	this.ds_search.setColumn(0, "ORG_CD", this.ds_list.getColumn(0, "ORG_CD"));
        	this.ds_search.setColumn(0, "ORG_NM", this.ds_list.getColumn(0, "ORG_NM"));
        	this.ds_search.setColumn(0, "USR_SPR_NM", this.ds_list.getColumn(0, "USR_SPR_NM"));
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
        this.btn_search_onclick = function(obj,e){
        	var coCd = this.ds_search.getColumn(0, "CO_CD");
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        //그리드 셀 더블클릭
        this.grd_list_oncelldblclick = function(obj,e){
        	if(e.row != 0){
        		var resData = {};
        		var resString = "";

        		resData.CO_CD 	 = this.ds_list.getColumn(e.row, "CO_CD");   // 회사코드
        		resData.EMP_NO	 = this.ds_list.getColumn(e.row, "EMP_NO");  // 사번
        		resData.OPRTR_NM = this.ds_list.getColumn(e.row, "OPRTR_NM");// 담당자 명
        		resData.ORG_CD	 = this.ds_list.getColumn(e.row, "ORG_CD");  // 조직코드
        		resData.ORG_NM	 = this.ds_list.getColumn(e.row, "ORG_NM");  // 조직코드 명
        		resData.USR_SPR_CD	 = this.ds_list.getColumn(e.row, "USR_SPR_CD");   // 직무
        		resData.USR_SPR_NM	 = this.ds_list.getColumn(e.row, "USR_SPR_NM");   // 직무명
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

        //선택 클릭 이벤트
        this.btn_select_onclick = function(obj,e)
        {
        	var resData = {};
        	var resString = "";

        	if(this.ds_list.rowposition < 1){
        		alert(this.fn_getMessage("ERRC000050", "데이터")); // 선택된 데이터가 없습니다.

        		this.Div00.form.grd_list.setFocus();
        		return;
        	}
        	resData.CO_CD 	 = this.ds_list.getColumn(this.ds_list.rowposition, "CO_CD");   		 // 회사코드
        	resData.EMP_NO	 = this.ds_list.getColumn(this.ds_list.rowposition, "EMP_NO");   		// 사번
        	resData.OPRTR_NM = this.ds_list.getColumn(this.ds_list.rowposition, "OPRTR_NM"); 		// 담당자 명
        	resData.ORG_CD	 = this.ds_list.getColumn(this.ds_list.rowposition, "ORG_CD");   		// 조직코드
        	resData.ORG_NM	 = this.ds_list.getColumn(this.ds_list.rowposition, "ORG_NM");   		// 조직코드 명
        	resData.USR_SPR_CD	 = this.ds_list.getColumn(this.ds_list.rowposition, "USR_SPR_CD");  // 직무
        	resData.USR_SPR_NM	 = this.ds_list.getColumn(this.ds_list.rowposition, "USR_SPR_NM");  // 직무명

        	resString = JSON.stringify(resData);

        	this.close(resString);
        };

        //최대 조회수 KEYUP 이벤트
        this.Div00_edt_maxCnt_onkeyup = function(obj,e)
        {
        	var cntValue = this.gfn_removeComma(this.Div00.form.edt_maxCnt.value);

        	if(!this.gfn_isNull(cntValue)){
        		this.Div00.form.edt_maxCnt.set_value(this.gfn_appendComma(cntValue, 0));
        	}else{
        		this.Div00.form.edt_maxCnt.set_value("0");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.Div00.form.grd_list.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.Div00.form.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.Div00.form.sta_noData.addEventHandler("onclick",this.Div00_sta_noData_onclick,this);
            this.Div00.form.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.Div00.form.edt_maxCnt.addEventHandler("onkeyup",this.Div00_edt_maxCnt_onkeyup,this);
        };
        this.loadIncludeScript("SSP_BO_CN_30.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
