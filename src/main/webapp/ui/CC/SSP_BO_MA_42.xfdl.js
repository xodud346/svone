(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MA_24");
            this.set_titletext("법인 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_listCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selectCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYnPop", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_VALUE\">Y</Col><Col id=\"COL_NM\">사용</Col></Row><Row><Col id=\"COL_VALUE\">N</Col><Col id=\"COL_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"41","60","28","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("| 법인 조회");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","0","51","170","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_select","273","599","65","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list01","0","79",null,"270","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("body");
            obj.set_autoenter("select");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"90\"/><Column size=\"170\"/><Column size=\"90\"/><Column size=\"240\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"그룹ID\"/><Cell col=\"2\" text=\"그룹명\"/><Cell col=\"3\" text=\"법인ID\"/><Cell col=\"4\" text=\"법인명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" edittype=\"expr:currow == 0 ? &quot;none&quot; :  &quot;checkbox&quot; \" displaytype=\"expr:currow == 0 ? &quot;imagecontrol&quot; : &quot;checkboxcontrol&quot;\" cssclass=\"expr:currow == 0 ? &quot;grd_WF_searchImg&quot; : &quot;&quot;\"/><Cell col=\"1\" text=\"bind:GRP_ID\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" cssclass=\"grd_WF_left\"/><Cell col=\"2\" text=\"bind:GRP_NM\" textAlign=\"left\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"3\" text=\"bind:CORP_ID\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" cssclass=\"grd_WF_left\"/><Cell col=\"4\" text=\"bind:CORP_NM\" textAlign=\"left\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"359","65","28","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list02","0","397",null,"154","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_select");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("body");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"90\"/><Column size=\"170\"/><Column size=\"90\"/><Column size=\"240\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"그룹ID\"/><Cell col=\"2\" text=\"그룹명\"/><Cell col=\"3\" text=\"법인ID\"/><Cell col=\"4\" text=\"법인명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:GRP_ID\" displaytype=\"normal\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:GRP_NM\"/><Cell col=\"3\" text=\"bind:CORP_ID\" cssclass=\"grd_WF_left\" textAlign=\"center\"/><Cell col=\"4\" textAlign=\"left\" text=\"bind:CORP_NM\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"561","65","28","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00","351","0",null,"25","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("최대 조회수 : 1,000건");
            obj.set_usedecorate("true");
            obj.set_textAlign("right");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_noData","0","140",null,"180","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("조회된 결과가 없습니다.");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"41","65","28","65",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("초기화");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",640,670,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_42.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_42.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_42.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_42.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES : 2021.01.19
        *******************************************************/

        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object

        this.totalCount = 0;

        this.coCd   = "";
        this.grpId  = "";
        this.grpNm  = "";
        this.corpId = "";
        this.corpNm = "";
        //this.selectBzplcId = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	this.ds_listCopy.copyData(this.ds_list);
        	this.ds_selectCopy.copyData(this.ds_select);
        	this.fn_paramSetting(this.parent);
        	// 단축키 등록
        	this.fn_regShortCutMethod();
        /*
        */
        	trace(" >>>> fn_onLoad");
        }

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit){
        	var sSvcId = "search";
        	var sUrl = "/cc/corp/list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list=ds_list";
        	var arg;

        	if(bInit){
        		sSvcId = "initSearch";
        		outDs  = 'ds_list=dsListCorp'; //  ds_select=ds_output1";
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        	trace(' >>>> fn_search [outDs:'+ outDs +']');
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	trace('[svcID:'+ svcID +'] this.ds_list.rowcount:'+ this.ds_list.rowcount);
        	switch(svcID){
        		case "initSearch":
        			if(this.totalCount < 1){
        				this.ds_select.copyData(this.ds_selectCopy);
        			}
        		case "search":
        			this.totalCount=this.ds_list.rowcount;
        			if(this.totalCount < 1){
        				this.ds_list.copyData(this.ds_listCopy);
        				this.Div00.form.sta_noData.bringToFront();
        			}else{
        				this.Div00.form.sta_noData.sendToBack();
        			}

        			this.fn_initGrid();
        			this.Div00.form.sta_totcnt.set_text("(총 "+ this.gfn_appendComma(this.totalCount, 0) +"건)");
        			this.Div00.form.grd_list01.setCellProperty("head", 0, "text", "0");
        			this.Div00.form.grd_list01.setFixedRow(0);

        			this.fn_dsSelectCheck();
        			break;
        		default :
        			break;
        	}
        	trace('[svcID:'+ svcID +'] this.ds_list.rowcount:'+ this.ds_list.rowcount);
        	trace(" >>>> fn_callBack");
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        this.cfn_formInit = function(){
        	this.Div00.form.grd_list01.uUnCheckRow = "0";  //,구분자로 여려Row 설정 가능
        	trace(" >>>> cfn_formInit");
        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_paramSetting = function (param){
        	this.coCd   = param.coCd  ;
        	this.grpId  = param.grpId ;
        	this.grpNm  = param.grpNm ;
        	this.corpId = param.corpId;
        	this.corpNm = param.corpNm;

        	this.ds_search.setColumn(0, "CO_CD"  , param.coCd  );
        	this.ds_search.setColumn(0, "GRP_ID" , param.grpId );
        	this.ds_search.setColumn(0, "GRP_NM" , param.grpNm );
        	this.ds_search.setColumn(0, "CORP_ID", param.corpId);
        	this.ds_search.setColumn(0, "CORP_NM", param.corpNm);

        	if(!this.gfn_isNull(this.corpNm)){
        		this.ds_search.setColumn(0, "CORP_NM", this.corpNm);
        		this.fn_search(true);
        	}else{
        		this.fn_initGrid();
        	}
        	trace(" >>>> fn_paramSetting");
        }

        //그리드 검색조건 셋팅
        this.fn_initGrid = function(){

        	this.ds_list.insertRow(0);
        	this.ds_list.setColumn(0, "GRP_ID" , this.ds_search.getColumn(0, "GRP_ID" ));
        	this.ds_list.setColumn(0, "GRP_NM" , this.ds_search.getColumn(0, "GRP_NM" ));
        	this.ds_list.setColumn(0, "CORP_ID", this.ds_search.getColumn(0, "CORP_ID"));
        	this.ds_list.setColumn(0, "CORP_NM", this.ds_search.getColumn(0, "CORP_NM"));
        	this.ds_list.set_rowposition(-1);

        }

        //선택한 값을 조회 후에도 확인할 수 있도록 체크
        this.fn_dsSelectCheck = function(){
        	for(var i = 0; i< this.ds_select.rowcount; i++){
        		var findRow = this.ds_list.findRowExpr("currow != 0 && CORP_ID == '" + this.ds_select.getColumn(i, "CORP_ID") + "'");
        		if(findRow > -1){
        			this.ds_list.setColumn(findRow, "CHK", 1);
        		}

        	}
        	trace(" >>>> fn_dsSelectCheck");
        }

        //선택된 데이터가 있는지 체크
        this.fn_validationCheck = function(dataSet){
        	var chkCnt = dataSet.getCaseCount("CHK == 1");
        	if(chkCnt == 0){
        		alert("선택된 데이터가 없습니다.");
        		return false;
        	}
        	trace(" >>>> fn_validationCheck");
        	return true;
        }

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "GRP_ID" , this.ds_list.getColumn(0, "GRP_ID" ));
        	this.ds_search.setColumn(0, "GRP_NM" , this.ds_list.getColumn(0, "GRP_NM" ));
        	this.ds_search.setColumn(0, "CORP_ID", this.ds_list.getColumn(0, "CORP_ID"));
        	this.ds_search.setColumn(0, "CORP_NM", this.ds_list.getColumn(0, "CORP_NM"));
        	trace(" >>>> fn_searchMapSetting");
        }

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
        // 초기화버튼 클릭 이벤트
        this.btnReset_onclick = function(obj,e) {
        	trace(" << Start >> btnReset_onclick");
        	this.ds_search.set_enableevent(false);
        	this.ds_list.set_enableevent(false);

        	this.ds_list  .setColumn(0, "GRP_ID" , "");
        	this.ds_list  .setColumn(0, "GRP_NM" , "");
        	this.ds_list  .setColumn(0, "CORP_ID", "");
        	this.ds_list  .setColumn(0, "CORP_NM", "");

        	this.ds_search.setColumn(0, "GRP_ID" , "");
        	this.ds_search.setColumn(0, "GRP_NM" , "");
        	this.ds_search.setColumn(0, "CORP_ID", "");
        	this.ds_search.setColumn(0, "CORP_NM", "");

        	this.ds_list.set_enableevent(true);
        	this.ds_search.set_enableevent(true);


        	this.fn_search(false);
        	trace(" << End   >> btnReset_onclick");
        };

        //조회버튼 클릭 이벤트
        this.btn_search_onclick = function(obj,e){
        	this.fn_searchMapSetting();
        	this.fn_search(false);
        	trace(" >>>> btn_search_onclick");
        }

        //추가버튼 클릭 이벤트
        this.btn_add_onclick = function(obj,e){
        	var nRow = 0;

        	if(this.fn_validationCheck(this.ds_list)){
        		this.ds_list.set_enableevent(false);
        		this.ds_select.set_enableevent(false);

        		for(var i = 0; i< this.ds_list.rowcount; i++){
        			if(this.ds_list.getColumn(i, "CHK") == 1){
        				var findRow = this.ds_select.findRowExpr("CORP_ID == '" + this.ds_list.getColumn(i, "CORP_ID") + "'");
        				if(findRow < 0){
        					nRow = this.ds_select.addRow();
        					this.ds_select.copyRow(nRow, this.ds_list, i);
        					this.ds_select.setColumn(nRow, "CHK", 0);
        				}
        			}
        		}

        		this.ds_list.set_enableevent(true);
        		this.ds_select.set_enableevent(true);
        	}
        	trace(" >>>> btn_add_onclick");
        }

        //삭제버튼 클릭 이벤트
        this.btn_del_onclick = function(obj,e){
        	var aDelArr = new Array();
        	var aDelIdArr = new Array();

        	this.ds_list.set_enableevent(false);
        	this.ds_select.set_enableevent(false);

        	if(this.fn_validationCheck(this.ds_select)){
        		for(var i = 0; i< this.ds_select.rowcount; i++){
        			if(this.ds_select.getColumn(i, "CHK") == 1){
        				aDelArr.push(i);
        				aDelIdArr.push(this.ds_select.getColumn(i, "CORP_ID"));
        			}
        		}
        	}
        	this.ds_select.deleteMultiRows(aDelArr);

        	for(var i = 0; i< aDelIdArr.length; i++){
        		var findRow = this.ds_list.findRowExpr("CORP_ID == '" + aDelIdArr[i] + "'");
        		if(findRow >= 0){
        			this.ds_list.setColumn(findRow, "CHK", 0);
        		}
        	}

        	this.ds_list.set_enableevent(true);
        	this.ds_select.set_enableevent(true);

        	this.Div00.form.grd_list02.setCellProperty("head", 0, "text", "0");
        	trace(" >>>> btn_del_onclick");
        }

        //선택버튼 클릭 이벤트
        this.btn_select_onclick = function(obj,e){
        	var resData = {};
        	var resList = [];

        	if(this.ds_select.rowcount == 0){
        		alert("선택된 데이터가 없습니다.");
        		return;
        	}

        	for(var i = 0; i< this.ds_select.rowcount; i++){
        // 		resData.CORP_ID=this.ds_select.getColumn(i, "GRP_ID" );
        // 		resData.CORP_NM=this.ds_select.getColumn(i, "GRP_NM" );
        // 		resData.CORP_ID=this.ds_select.getColumn(i, "CORP_ID");
        // 		resData.CORP_NM=this.ds_select.getColumn(i, "CORP_NM");
        //		resList.push(JSON.stringify(resData));
        		resList.push({
        			GRP_ID : this.ds_select.getColumn(i, "GRP_ID"  ),
        			GRP_NM : this.ds_select.getColumn(i, "GRP_NM"  ),
        			CORP_ID: this.ds_select.getColumn(i, "CORP_ID" ),
        			CORP_NM: this.ds_select.getColumn(i, "CORP_NM" ),
        		});
        	}

        	this.close(JSON.stringify(resList));
        	trace(" >>>> btn_select_onclick");
        }


        //검색조건 ROW에서 enter 클릭 시
        this.grd_list_onenterdown = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search(false);
        	trace(" >>>> grd_list_onenterdown");
        }

        this.grd_list01_oncelldblclick = function(obj,e)
        {
        	if(e.row != 0 ){
        		var findRow = this.ds_select.findRowExpr("CORP_ID == '" + this.ds_list.getColumn(e.row, "CORP_ID") + "'");
        		if(findRow < 0){
        			var nRow = this.ds_select.addRow();
        			this.ds_select.copyRow(nRow, this.ds_list, e.row);
        			this.ds_select.setColumn(nRow, "CHK", 0);
        			this.ds_list.setColumn(e.row, "CHK", 1);
        		}
        	}
        	trace(" >>>> grd_list01_oncelldblclick");
        }

        this.grd_list01_oncellclick = function(obj,e)
        {
        	if(e.row == 0){  // && e.col != 0
        		var cellText = obj.getCellText(e.row, e.cell);
        		if(cellText != undefined){
        			obj.setEditSelect(cellText.length, cellText.length);
        		}
        	}
        	trace(" >>>> grd_list01_oncellclick");
        }


        this.SSP_BO_MA_24_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_MA_24_onkeyup,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.Div00.form.grd_list01.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.Div00.form.grd_list01.addEventHandler("oncelldblclick",this.grd_list01_oncelldblclick,this);
            this.Div00.form.grd_list01.addEventHandler("oncellclick",this.grd_list01_oncellclick,this);
            this.Div00.form.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.Div00.form.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.Div00.form.sta_noData.addEventHandler("onclick",this.Div00_sta_noData_onclick,this);
            this.Div00.form.btnReset.addEventHandler("onclick",this.btnReset_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_42.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
