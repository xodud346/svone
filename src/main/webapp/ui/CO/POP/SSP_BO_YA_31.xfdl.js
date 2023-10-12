(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_31");
            this.set_titletext("프로그램 그룹 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(570,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pgmGrpInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_GRP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pgmGrpInfoCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_GRP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20","530",null,null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_positionstep("0");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"41","60","28","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("프로그램 그룹 조회");
            obj.set_cssclass("sta_WF_title04");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","0","51","170","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","79",null,"442","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_pgmGrpInfo");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_autoenter("select");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"121\"/><Column size=\"246\"/><Column size=\"130\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"프로그램그룹ID\"/><Cell col=\"2\" text=\"프로그램그룹명\"/><Cell col=\"3\" text=\"사용유무\"/></Band><Band id=\"body\"><Cell text=\"expr:currow == 0 ? &quot;theme::default/images/grd_WF_search.png&quot; : &quot;&quot;\" displaytype=\"expr:currow == 0 ? &quot;imagecontrol&quot; : &quot;normal&quot;\"/><Cell col=\"1\" text=\"bind:PGM_GRP_ID\" textAlign=\"center\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\"/><Cell col=\"2\" text=\"bind:PGM_GRP_NM\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" cssclass=\"grd_WF_left\"/><Cell col=\"3\" textAlign=\"center\" combodataset=\"ds_useYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" text=\"bind:USE_YN\" comboautoselect=\"false\" displaytype=\"expr:currow == 0 ? &quot;combocontrol&quot; : &quot;combotext&quot;\" edittype=\"expr:currow == 0 ? &quot;combo&quot; : &quot;none&quot;\" combotype=\"dropdown\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_noData","0","155",null,"354","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("조회된 결과가 없습니다.");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_select","233","grd_list:10","65","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",570,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_YA_31.xfdl", function() {
        /*******************************************************
        PROJECT NAME : MarketA
        CREATION DATES :
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.currow = -1;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        	this.ds_pgmGrpInfoCopy.copyData(this.ds_pgmGrpInfo);
        	this.currow = this.parent.currow;

        	this.ds_search.setColumn(0, "PGM_GRP_ID", this.parent.pgmGrpId);
        	this.ds_search.setColumn(0, "PGM_GRP_NM", this.parent.pgmGrpNm);
        	this.fn_initGrid();
        	this.fn_commonCodeSearch();
        	this.fn_search();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function()
        {
        	var sSvcId = "search";
        	var sUrl = "/co/frt/select-frt-pgm-grp-popup-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_pgmGrpInfo=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_useYn=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "USE_YN");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	switch(svcID){
        		case "search":
        			if(this.totalCount < 1){
        				this.ds_pgmGrpInfo.copyData(this.ds_pgmGrpInfoCopy);
        				this.Div00.form.sta_noData.bringToFront();
        			}else{
        				this.Div00.form.sta_noData.sendToBack();
        			}

        			this.fn_initGrid();
        			this.Div00.form.sta_totcnt.set_text("(총 "+ this.gfn_appendComma(this.totalCount, 0) +"건)");
        			this.Div00.form.grd_list.setFixedRow(0);
        			break;
        		case "commonCodeSearch":
        			this.ds_useYn.insertRow(0);
        			this.ds_useYn.setColumn(0,"COM_DTL_CD","");
        			this.ds_useYn.setColumn(0,"COM_DTL_CD_NM","전체");
        			break;
        		default:
        			break;
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
        	this.ds_pgmGrpInfo.insertRow(0);
        	this.ds_pgmGrpInfo.setColumn(0, "PGM_GRP_ID",  this.ds_search.getColumn(0, "PGM_GRP_ID"));
        	this.ds_pgmGrpInfo.setColumn(0, "PGM_GRP_NM",  this.ds_search.getColumn(0, "PGM_GRP_NM"));
        	this.ds_pgmGrpInfo.setColumn(0, "USE_YN",  this.ds_search.getColumn(0, "USE_YN"));
        	this.ds_pgmGrpInfo.set_rowposition(-1);
        };


        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "PGM_GRP_ID", this.ds_pgmGrpInfo.getColumn(0, "PGM_GRP_ID"));
        	this.ds_search.setColumn(0, "PGM_GRP_NM", this.ds_pgmGrpInfo.getColumn(0, "PGM_GRP_NM"));
        	this.ds_search.setColumn(0, "USE_YN", this.ds_pgmGrpInfo.getColumn(0, "USE_YN"));
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	if(e.row != 0 ){
        		var resData = {};
        		var resString = "";
        		resData.PGM_GRP_ID = this.ds_pgmGrpInfo.getColumn(e.row, "PGM_GRP_ID");
        		resData.PGM_GRP_NM = this.ds_pgmGrpInfo.getColumn(e.row, "PGM_GRP_NM");
        		resData.CURROW = this.currow;
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
        		if(e.col != 3){
        			var cellText = obj.getCellText(e.row, e.cell);
        			if(cellText != undefined){
        				obj.setEditSelect(cellText.length, cellText.length);
        			}
        		}else if(e.col == 3){
        			obj.dropdownCombo();
        		}
        	}

        };

        this.btn_select_onclick = function(obj,e)
        {
        	var resData = {};
        	var resString = "";

        	if(this.ds_pgmGrpInfo.rowposition < 1){
        		alert("선택된 데이터가 없습니다.");
        		return;
        	}

        	resData.PGM_GRP_ID = this.ds_pgmGrpInfo.getColumn(this.ds_pgmGrpInfo.rowposition , "PGM_GRP_ID");
        	resData.PGM_GRP_NM = this.ds_pgmGrpInfo.getColumn(this.ds_pgmGrpInfo.rowposition , "PGM_GRP_NM");
        	resData.CURROW = this.currow;
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.Div00.form.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.Div00.form.grd_list.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.Div00.form.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_YA_31.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
