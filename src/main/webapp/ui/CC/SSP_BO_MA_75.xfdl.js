(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CLIENT_SINGLE_POPUP");
            this.set_titletext("계정 단일팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(570,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_acctList", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_SEARCH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"UNDER_ACCT_SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXC_ACCT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">1000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_acctListC", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_acctTpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCT_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ACCT_TP_NM\">전체</Col><Col id=\"ACCT_TP_CD\"/></Row><Row><Col id=\"ACCT_TP_CD\">1</Col><Col id=\"ACCT_TP_NM\">일반</Col></Row><Row><Col id=\"ACCT_TP_CD\">2</Col><Col id=\"ACCT_TP_NM\">공통</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","20","100","540","480",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_binddataset("ds_acctList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"240\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"계정유형\"/><Cell col=\"1\" text=\"계정ID\"/><Cell col=\"2\" text=\"계정명\"/><Cell col=\"3\" text=\"계정코드\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCT_TP_CD\" edittype=\"expr:currow == 0 ? &quot;combo&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;combocontrol&quot; : &quot;combotext&quot;\" combodataset=\"ds_acctTpCd\" combocodecol=\"ACCT_TP_CD\" combodatacol=\"ACCT_TP_NM\"/><Cell col=\"1\" text=\"bind:ACCT_ID\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"2\" text=\"bind:ACCT_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ACCT_CD\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","495","59","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","70","370","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","20","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("| 계정 조회");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",570,610,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_75.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_75.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_75.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;

        this.CO_CD    = "";
        this.BZPLC_ID = "";
        this.ACCT_LVL = "";
        this.ACCT_ID = "";
        this.ACCT_NM = "";
        this.HRNK_ACCT_SEARCH_YN = ""; //상위계정대상 조회여부
        this.DEPT_ID = "";
        this.LVL = "";
        this.MINUS_YN = "";
        this.ACCT_TP_CD = "";
        this.UNDER_ACCT_SEARCH = "";
        this.EXC_ACCT_ID = "";
        this.ACCT_TP_CD_HOLD_YN = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	/* 파라미터 */
        	this.CO_CD               = this.parent.coCd;
        	this.BZPLC_ID            = this.parent.bzplcId;
        	this.ACCT_LVL            = this.parent.acctLvl;
        	this.ACCT_ID             = this.parent.acctId;
        	this.ACCT_NM             = this.parent.acctNm;
        	this.HRNK_ACCT_SEARCH_YN = this.parent.hrnkAcctSearchYn; //상위계정대상 조회여부
        	this.DEPT_ID             = this.parent.deptId;
        	this.LVL                 = this.parent.lvl;
        	this.MINUS_YN            = this.parent.minusYn;
        	this.ACCT_TP_CD          = (this.parent.acctTpCd==null ? "" : this.parent.acctTpCd);
        	this.UNDER_ACCT_SEARCH   = this.parent.underAcctSearch;
        	this.EXC_ACCT_ID         = this.parent.excAcctId;
        	this.ACCT_TP_CD_HOLD_YN  = this.parent.acctTpCdHoldYn;

        	this.ds_search.setColumn(0, "CO_CD"   , this.CO_CD   );
        	this.ds_search.setColumn(0, "BZPLC_ID", this.BZPLC_ID);
        	this.ds_search.setColumn(0, "HRNK_ACCT_SEARCH_YN", this.HRNK_ACCT_SEARCH_YN);
        	this.ds_search.setColumn(0, "DEPT_ID", this.DEPT_ID);
        	this.ds_search.setColumn(0, "LVL", this.LVL);
        	this.ds_search.setColumn(0, "ACCT_TP_CD" , this.ACCT_TP_CD );
        	this.ds_search.setColumn(0, "UNDER_ACCT_SEARCH" , this.UNDER_ACCT_SEARCH );
        	this.ds_search.setColumn(0, "EXC_ACCT_ID" , this.EXC_ACCT_ID );

        	if(!this.gfn_isNull(this.ACCT_ID) || !this.gfn_isNull(this.ACCT_NM)){
        		this.ds_search.setColumn(0, "ACCT_ID", this.ACCT_ID);
        		this.ds_search.setColumn(0, "ACCT_NM", this.ACCT_NM);
        		this.fn_search();
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
        	var sUrl = "/cc/acct/select-acct-single-popup-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_acctList=ds_output1";
        	var arg = "";

        	//사업장 정보
        	if(!this.gfn_isNull(this.BZPLC_ID)){
        		this.ds_search.setColumn(0, "BZPLC_ID", this.BZPLC_ID);
        	}

        	//레벨정보
        	if(!this.gfn_isNull(this.ACCT_LVL)){
        		this.ds_search.setColumn(0, "ACCT_LVL", this.ACCT_LVL);
        	}

        	//상위계정 조회여부
        	if(!this.gfn_isNull(this.MINUS_YN)){
        		if(this.MINUS_YN == "Y"){
        			this.ds_search.setColumn(0, "ACCT_LVL", this.ACCT_LVL-1);
        		}
        	}

        	//일반계정만 조회
        	if(this.ACCT_TP_CD_HOLD_YN == 'Y'){
        		this.ds_search.setColumn(0, "ACCT_TP_CD", "1");
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "search"){
        		var sTotText = "(<b v='true'>총 " + this.totalCount + "건)";
        		this.sta_totcnt.set_text(sTotText);

        		// 22/05/07 단위테스트 - 조회건수가 0건일 시 조회조건 box사라짐현상 수정
        		if(this.ds_acctList.getRowCount() < 1) this.ds_acctList.copyData(this.ds_acctListC);

        		this.fn_initGrid();
        	}
        };
        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_list"){
        		oSortInfo = this.grd_list.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		this.fn_search();
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
        	this.ds_acctList.setColumn(0, "ACCT_ID"    , this.ds_search.getColumn(0, "ACCT_ID")     );
        	this.ds_acctList.setColumn(0, "ACCT_NM"    , this.ds_search.getColumn(0, "ACCT_NM")     );
        	this.ds_acctList.setColumn(0, "ACCT_CD"    , this.ds_search.getColumn(0, "ACCT_CD")     );
        	this.ds_acctList.setColumn(0, "ACCT_TP_CD"    , this.ds_search.getColumn(0, "ACCT_TP_CD")     );	//박재광 2022.06.23
        	this.ds_acctList.set_rowposition(-1);
        };
        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "ACCT_ID"   , this.ds_acctList.getColumn(0, "ACCT_ID")     );
        	this.ds_search.setColumn(0, "ACCT_NM"   , this.ds_acctList.getColumn(0, "ACCT_NM")     );
        	this.ds_search.setColumn(0, "ACCT_CD"   , this.ds_acctList.getColumn(0, "ACCT_CD")     );
        	this.ds_search.setColumn(0, "ACCT_TP_CD"   , this.ds_acctList.getColumn(0, "ACCT_TP_CD")     );	//박재광 2022.06.23
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
        //조회버튼
        this.btn_search_onclick = function(obj,e){
        	this.fn_searchMapSetting();
        	this.fn_search(true);
        };
        //그리드 셀 더블클릭
        this.grd_list_oncelldblclick = function(obj,e){
        	var resData = {};
        	var resString = "";
        	resData.CO_CD       = this.ds_acctList.getColumn(this.ds_acctList.rowposition, "CO_CD"       );
        	resData.ACCT_ID     = this.ds_acctList.getColumn(this.ds_acctList.rowposition, "ACCT_ID"     );
        	resData.ACCT_NM     = this.ds_acctList.getColumn(this.ds_acctList.rowposition, "ACCT_NM"     );
        	resData.ACCT_CD     = this.ds_acctList.getColumn(this.ds_acctList.rowposition, "ACCT_CD"     );
        	resData.BZPLC_ID    = this.ds_acctList.getColumn(this.ds_acctList.rowposition, "BZPLC_ID"    );
        	resData.A_LVL       = this.ds_acctList.getColumn(this.ds_acctList.rowposition, "ACCT_LVL"    );
        	resData.ACCT_TP_CD  = this.ds_acctList.getColumn(this.ds_acctList.rowposition, "ACCT_TP_CD"  );
        	resString = JSON.stringify(resData);
        	this.close(resString);
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
        this.CLIENT_SINGLE_POPUP_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        //선택 클릭 이벤트
        this.btn_select_onclick = function(obj,e)
        {
        	if(this.ds_acctList.rowposition < 1){
        		alert(this.fn_getMessage("ERRC000050", "데이터")); // 선택된 데이터가 없습니다.
        		return;
        	}

        	var resData = {};
        	var resString = "";
        	resData.CO_CD       = this.ds_acctList.getColumn(this.ds_acctList.rowposition, "CO_CD"       );
        	resData.ACCT_ID     = this.ds_acctList.getColumn(this.ds_acctList.rowposition, "ACCT_ID"     );
        	resData.ACCT_NM     = this.ds_acctList.getColumn(this.ds_acctList.rowposition, "ACCT_NM"     );
        	resData.ACCT_CD     = this.ds_acctList.getColumn(this.ds_acctList.rowposition, "ACCT_CD"     );
        	resData.BZPLC_ID    = this.ds_acctList.getColumn(this.ds_acctList.rowposition, "BZPLC_ID"    );
        	resData.A_LVL       = this.ds_acctList.getColumn(this.ds_acctList.rowposition, "ACCT_LVL"    );
        	resData.ACCT_TP_CD  = this.ds_acctList.getColumn(this.ds_acctList.rowposition, "ACCT_TP_CD"  );
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.CLIENT_SINGLE_POPUP_onkeyup,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.grd_list.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_75.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
