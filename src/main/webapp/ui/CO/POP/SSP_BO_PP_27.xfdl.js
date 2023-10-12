(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_27");
            this.set_titletext("담당자 단일 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(529,599);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_oprtr", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBPOS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JB_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_Y\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprtrCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBPOS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JB_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20","489",null,null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_positionstep("0");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_noData","0","155",null,"354","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
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
            obj.set_text("담당자 조회");
            obj.set_cssclass("sta_WF_title04");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","0","40","80","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("총 0건 ");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","77",null,"442","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_oprtr");
            obj.set_autofittype("none");
            obj.set_cellsizebandtype("body");
            obj.set_autoenter("select");
            obj.set_positionstep("0");
            obj.set_scrollbartype("auto fixed");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"조직코드\"/><Cell col=\"3\" text=\"조직코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NO\" textAlign=\"center\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\"/><Cell col=\"1\" text=\"bind:OPRTR_NM\" textAlign=\"center\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"2\" text=\"bind:ORG_CD\" textAlign=\"center\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"3\" text=\"bind:ORG_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_select","214","grd_list:10","60","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_maxCnt","360","41",null,"26","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_textAlign("right");
            obj.set_enable("false");
            obj.set_text("1,000");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00","296","40",null,"25","edt_maxCnt:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit_usey","545","143","30","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("Y");
            obj.set_visible("false");
            obj.set_text("Y");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",529,599,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edt_maxCnt","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit_usey","value","ds_search","USE_Y");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_PP_27.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.empNo = "";
        this.oprtrNm = "";
        this.oprtrType = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        	this.ds_oprtrCopy.copyData(this.ds_oprtr);
        	this.Div00.form.edt_maxCnt.set_value("1,000"); //초기 1000으로 셋팅
        	this.fn_paramSetting(this.parent);

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "btn_search_onclick",
        		ESC : "",
        		CTRL_ENTER : "",
        		SHIFT_ENTER : "btn_select_onclick",
        		SHIFT_S : "",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});
        };

        /*this.fn_onkeydown = function(obj:nexacro.Form,e:nexacro.KeyEventInfo)
        {
        	//Ctrl+Enter : 선택기능
        	if(e.keycode == 13 && e.shiftkey){
        		this.btn_select_onclick();
        	//ESC : 닫기기능
        	}else if(e.keycode == 27){
        		this.close();
        	}
        };*/

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function()
        {
        	var sSvcId = "search";
        	var sUrl = "/co/popup/select-operator-popup-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_oprtr=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "search"){
        		if(this.totalCount < 1){
        			this.ds_oprtr.copyData(this.ds_oprtrCopy);
        			this.Div00.form.sta_noData.bringToFront();
        		}else{
        			this.Div00.form.sta_noData.sendToBack();
        		}

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
        	if(this.gfn_isNull(param.coCd) || param.coCd ==  undefined){
        		alert("팝업창의 회사코드가 비어있습니다. 확인해주세요.");
        		return;
        	}

        	this.ds_search.setColumn(0, "CO_CD", param.coCd);
        	this.ds_search.setColumn(0, "ORG_CD", param.orgCd);
        	this.ds_search.setColumn(0, "ORG_NM", param.orgNm);
        	this.ds_search.setColumn(0, "OPRTR_ID", param.oprtrId);

        	this.fn_initGrid();


        	this.empNo = param.empNo;
        	this.oprtrNm = param.oprtrNm;
        	this.oprtrType = param.oprtrType;
        	this.ds_search.setColumn(0, "EMP_NO", this.empNo);
        	this.ds_search.setColumn(0, "OPRTR_NM", this.oprtrNm);
        	this.ds_search.setColumn(0, "CO_CD", param.coCd);
        	this.ds_search.setColumn(0, "ORG_CD", param.orgCd);
        	this.ds_search.setColumn(0, "ORG_NM", param.orgNm);
        	this.ds_search.setColumn(0, "OPRTR_ID", param.oprtrId);
        	this.ds_search.setColumn(0, "OPRTR_TYPE", param.oprtrType);
        ///	this.ds_search.setColumn(0, "SALS_TEAM_CD", param.salsTeamCd);
        //	this.ds_search.setColumn(0, "SALS_TEAM_NM", param.salsTeamNm);

        	if(!this.gfn_isNull(this.empNo) || !this.gfn_isNull(this.oprtrNm)){
        		this.fn_search();
        	}else{
        		this.fn_initGrid();

        		//팝업창으로 넘어온 값이 ''면 sta_noData 안보이도록 처리
        		this.Div00.form.sta_noData.sendToBack();
        	}

        };

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "EMP_NO", this.ds_oprtr.getColumn(0, "EMP_NO"));
        	this.ds_search.setColumn(0, "OPRTR_NM", this.ds_oprtr.getColumn(0, "OPRTR_NM"));
        	this.ds_search.setColumn(0, "ORG_CD", this.ds_oprtr.getColumn(0, "ORG_CD"));
        	this.ds_search.setColumn(0, "ORG_NM", this.ds_oprtr.getColumn(0, "ORG_NM"));
        //	this.ds_search.setColumn(0, "SALS_TEAM_CD", this.ds_oprtr.getColumn(0, "SALS_TEAM_CD"));
        //	this.ds_search.setColumn(0, "SALS_TEAM_NM", this.ds_oprtr.getColumn(0, "SALS_TEAM_NM"));
        };

        //그리드 검색조건 셋팅
        this.fn_initGrid = function(){
        	this.ds_oprtr.insertRow(0);
        	this.ds_oprtr.setColumn(0, "EMP_NO",  this.ds_search.getColumn(0, "EMP_NO"));
        	this.ds_oprtr.setColumn(0, "OPRTR_NM",  this.ds_search.getColumn(0, "OPRTR_NM"));
        	this.ds_oprtr.setColumn(0, "ORG_CD",  this.ds_search.getColumn(0, "ORG_CD"));
        	this.ds_oprtr.setColumn(0, "ORG_NM",  this.ds_search.getColumn(0, "ORG_NM"));
        //	this.ds_oprtr.setColumn(0, "SALS_TEAM_CD",  this.ds_search.getColumn(0, "SALS_TEAM_CD"));
        //	this.ds_oprtr.setColumn(0, "SALS_TEAM_NM",  this.ds_search.getColumn(0, "SALS_TEAM_NM"));
        	this.ds_oprtr.set_rowposition(-1);
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
        	this.fn_search();
        };

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	if(e.row != 0 ){
        		var resData = {};
        		var resString = "";

        		resData.EMP_NO = this.ds_oprtr.getColumn(e.row, "EMP_NO");
        		resData.OPRTR_NM = this.ds_oprtr.getColumn(e.row, "OPRTR_NM");
        		resData.ORG_CD = this.ds_oprtr.getColumn(e.row, "ORG_CD");
        		resData.ORG_NM = this.ds_oprtr.getColumn(e.row, "ORG_NM");
        		resData.SALS_TEAM_CD = this.ds_oprtr.getColumn(e.row, "SALS_TEAM_CD");
        		resData.SALS_TEAM_NM = this.ds_oprtr.getColumn(e.row, "SALS_TEAM_NM");
        		resData.OPRTR_ID = this.ds_oprtr.getColumn(e.row, "OPRTR_ID");
        		resData.PSTN_NM = this.ds_oprtr.getColumn(e.row, "PSTN_NM");
        		resData.JBPOS_NM = this.ds_oprtr.getColumn(e.row, "JBPOS_NM");
        		resData.JB_CD = this.ds_oprtr.getColumn(e.row, "JB_CD");
        		resData.JB_NM = this.ds_oprtr.getColumn(e.row, "JB_NM");
        		resData.USE_YN = this.ds_oprtr.getColumn(e.row, "USE_YN");
        		resData.SALS_CHR_CD = this.ds_oprtr.getColumn(e.row, "SALS_CHR_CD");
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

        	if(this.ds_oprtr.rowposition < 1){
        		alert("선택된 데이터가 없습니다.");
        		this.Div00.form.grd_list.setFocus();
        		return;
        	}

        	resData.EMP_NO = this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "EMP_NO");
        	resData.OPRTR_NM = this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "OPRTR_NM");
        	resData.ORG_CD = this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "ORG_CD");
        	resData.ORG_NM = this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "ORG_NM");
        	resData.SALS_TEAM_CD = this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "SALS_TEAM_CD");
        	resData.SALS_TEAM_NM = this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "SALS_TEAM_NM");
        	resData.OPRTR_ID = this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "OPRTR_ID");
        	resData.PSTN_NM = this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "PSTN_NM");
        	resData.JBPOS_NM = this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "JBPOS_NM");
        	resData.JB_CD = this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "JB_CD");
        	resData.JB_NM = this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "JB_NM");
        	resData.USE_YN = this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "USE_YN");
        	resData.SALS_CHR_CD = this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "SALS_CHR_CD");
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };

        //최대 조회수 keyup 이벤트
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
            this.Div00.form.sta_noData.addEventHandler("onclick",this.Div00_sta_noData_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.Div00.form.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.Div00.form.grd_list.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.Div00.form.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.Div00.form.edt_maxCnt.addEventHandler("onkeyup",this.Div00_edt_maxCnt_onkeyup,this);
            this.Edit_usey.addEventHandler("onchanged",this.Edit00_onchanged,this);
        };
        this.loadIncludeScript("SSP_BO_PP_27.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
