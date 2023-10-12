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
            this.set_titletext("팀조회 단일팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(780,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_teamList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DISP_MNG_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_ATTR_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_ATTR_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_TEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DISP_MNG_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_ATTR_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_ATTR_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">1000</Col><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_teamNm", this);
            obj._setContents("<ColumnInfo><Column id=\"TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TEAM_NM\">전체</Col><Col id=\"TEAM_CD\"/></Row><Row><Col id=\"TEAM_NM\">영업팀</Col><Col id=\"TEAM_CD\">1</Col></Row><Row><Col id=\"TEAM_NM\">서비스팀</Col><Col id=\"TEAM_CD\">2</Col></Row><Row><Col id=\"TEAM_NM\">MD팀</Col><Col id=\"TEAM_CD\">3</Col></Row><Row><Col id=\"TEAM_NM\">구매팀</Col><Col id=\"TEAM_CD\">4</Col></Row><Row><Col id=\"TEAM_NM\">운영팀</Col><Col id=\"TEAM_CD\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN_NM\">전체</Col><Col id=\"USE_YN_CD\"/></Row><Row><Col id=\"USE_YN_NM\">사용</Col><Col id=\"USE_YN_CD\">Y</Col></Row><Row><Col id=\"USE_YN_NM\">미사용</Col><Col id=\"USE_YN_CD\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","16","100",null,"480","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_binddataset("ds_teamList");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_autoenter("select");
            obj.set_extendsizetype("none");
            obj.set_cellsizingtype("none");
            obj.set_showselection("false");
            obj.set_selecttype("row");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"138\"/><Column size=\"120\"/><Column size=\"50\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"팀코드\"/><Cell col=\"1\" text=\"팀명\"/><Cell col=\"2\" text=\"영업팀코드\"/><Cell col=\"3\" text=\"영업담당코드\"/><Cell col=\"4\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" text=\"bind:TEAM_CD\"/><Cell col=\"1\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" text=\"bind:TEAM_NM\"/><Cell col=\"2\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" text=\"bind:SALS_TEAM_CD\"/><Cell col=\"3\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" text=\"bind:SALS_CHR_CD\"/><Cell col=\"4\" edittype=\"expr:currow == 0 ? &quot;combo&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;combocontrol&quot; : &quot;normal&quot;\" combodataset=\"ds_useYn\" combocodecol=\"USE_YN_CD\" combodatacol=\"USE_YN_NM\" comboautoselect=\"false\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","699","64",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","18","70","370","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","20","570","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("| searchType 영업팀[1], 서비스팀[2], MD팀[3], 구매팀[4], 운영팀[5], 영업담당[6] 조회");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init","630","64","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",780,670,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PP_26.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_PP_26.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PP_26.xfdl", function() {
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
        /* 팀 구분코드 - 영업팀[1], 서비스팀[2], MD팀[3], 구매팀[4], 운영팀[5], 영업담당[6] 조회 */
        this.CO_CD        = ''; /* 회사코드     - 필수 */
        this.SEARCH_TYPE  = ''; /* 팀 구분코드 */
        this.TEAM_CD      = ''; /* 팀코드 */
        this.SALS_CHR_CD  = ''; /* 영업담당코드 */
        this.SALS_TEAM_CD = ''; /* 영업팀코드 */
        this.USE_YN       = ''; /* 사용여부 */
        this.initCnt      = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//파라미터
            this.CO_CD            = this.parent.coCd;
            this.SEARCH_TYPE      = this.parent.searchType;
            this.TEAM_CD          = this.parent.teamCd;
            this.SALS_CHR_CD      = this.parent.salsChrCd;
            this.SALS_TEAM_CD     = this.parent.salsTeamCd;
            this.USE_YN           = this.parent.useYn;

        	if(this.USE_YN == null || this.USE_YN == '' || this.USE_YN == 'undefined'){
        		//this.USE_YN           = 'Y';
        	}

        //	this.CO_CD            = '1000';
        //	this.SEARCH_TYPE      = '2';
        //	this.TEAM_CD          = '50000357';
        //  this.SALS_CHR_CD      = '1040';
        //  this.SALS_TEAM_CD     = '147';
        //	this.USE_YN           = 'N';


        	this.fn_displayInit();
        	this.fn_initGrid();

        	// 단축키 등록
        	this.fn_regShortCutMethod();
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit){

        	var sSvcId = "selectMbrOprtrOrgInfoList";
        	var sUrl   = "/bo/cust/cmn/popup/select-mbr-oprtr-org-info-list.do";
        	var inDs   = "ds_search=ds_search";
        	var outDs  = "ds_teamList=ds_output1";
        	var arg = "";

        	/* 팀 구분코드 - 영업팀[1], 서비스팀[2], MD팀[3], 구매팀[4], 운영팀[5], 영업담당[6] 조회 */
        	this.ds_search.setColumn(0, "TYPE"  , this.ds_search.getColumn(0, "TEAM_ATTR_CLCD_NM"));
        	this.ds_search.setColumn(0, "CO_CD" , this.CO_CD);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "selectMbrOprtrOrgInfoList"){
        		var sTotText = "(<b v='true'>총 " + this.totalCount + "건)";
        		this.sta_totcnt.set_text(sTotText);
        		this.fn_initGrid();
        		this.grd_list.setFixedRow(0);

        		this.ds_teamList.setColumn(0,"USE_YN", this.ds_search.getColumn(0, "USE_YN") );

        	}
        };
        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_list"){
        		oSortInfo = this.grd_list.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN", oSortInfo.bindCol );
        		this.ds_search.setColumn(0,"SORT_TYPE"  , oSortInfo.status  );
        		this.fn_search();
        	}
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_displayInit = function(){
        	/* 팀 구분코드 - 영업팀[1], 서비스팀[2], MD팀[3], 구매팀[4], 운영팀[5], 영업담당[6] 조회 */
        	var type = this.SEARCH_TYPE;
        	var coCd = this.CO_CD;
        	this.Static60_00.set_text("| 팀조회");
        	if(coCd == null){
        		//alert("회사코드(coCd)는 필수입니다.");
        		alert(this.fn_getMessage("ERRC000004", "회사코드(coCd)"));
        		this.close();
        	}
        };
        //그리드 검색조건 셋팅
        this.fn_initGrid = function(chks){
        	this.searchChk   = false;
        	this.sSalsTeamCd = this.ds_search.getColumn(0, "TYPE");
        	if(this.sSalsTeamCd == null || this.sSalsTeamCd == 'undefined'){this.sSalsTeamCd = this.SEARCH_TYPE;}

        	this.ds_teamList.insertRow(0);
        	this.ds_teamList.setColumn(0, "TEAM_NM"              , this.ds_search.getColumn(0, "TEAM_NM")                );
        	this.ds_teamList.setColumn(0, "TEAM_ATTR_CLCD"       , this.ds_search.getColumn(0, "TEAM_ATTR_CLCD")         );
        	this.ds_teamList.setColumn(0, "TEAM_ATTR_CLCD_NM"    , this.sSalsTeamCd                                      );

        	if(this.ds_search.getColumn(0, "TEAM_CD") != null && this.ds_search.getColumn(0, "TEAM_CD") != undefined){
        		this.ds_teamList.setColumn(0, "TEAM_CD", this.ds_search.getColumn(0, "TEAM_CD")                );
        	}else{
        		if(this.TEAM_CD != null && this.TEAM_CD != 'undefined'){
        			this.ds_teamList.setColumn(0, "TEAM_CD", this.TEAM_CD);
        			this.searchChk = true;
        		}
        	}
        	if(this.ds_search.getColumn(0, "SALS_TEAM_CD") != null && this.ds_search.getColumn(0, "SALS_TEAM_CD") != undefined){
        		this.ds_teamList.setColumn(0, "SALS_TEAM_CD", this.ds_search.getColumn(0, "SALS_TEAM_CD")           );
        	}else{
        		if(this.SALS_TEAM_CD != null && this.SALS_TEAM_CD != 'undefined'){
        			this.ds_teamList.setColumn(0, "SALS_TEAM_CD", this.SALS_TEAM_CD);
        			this.searchChk = true;
        		}
        	}
        	if(this.ds_search.getColumn(0, "SALS_CHR_CD") != null && this.ds_search.getColumn(0, "SALS_CHR_CD") != undefined){
        		this.ds_teamList.setColumn(0, "SALS_CHR_CD", this.ds_search.getColumn(0, "SALS_CHR_CD")            );
        	}else{
        		if(this.SALS_CHR_CD != null && this.SALS_CHR_CD != 'undefined'){
        			this.ds_teamList.setColumn(0, "SALS_CHR_CD", this.SALS_CHR_CD);
        			this.searchChk = true;
        		}
        	}
        	if(this.ds_search.getColumn(0, "USE_YN") != null && this.ds_search.getColumn(0, "USE_YN") != ''){
        		this.ds_teamList.setColumn(0, "USE_YN", this.ds_search.getColumn(0, "USE_YN")                 );
        	}else{
        		if(this.USE_YN != null && this.USE_YN != ''){
        			this.ds_teamList.setColumn(0, "USE_YN", this.USE_YN);
        			this.searchChk = true;
        		}else{
        			this.ds_teamList.setColumn(0, "USE_YN", '');
        		}
        	}

        	this.ds_teamList.set_rowposition(-1);

        	if(this.searchChk){
        		if(this.initCnt == 0){
        			this.initCnt = 1;
        			this.fn_searchMapSetting();
        			this.fn_search(true);
        		}
        	}
        };
        this.fn_searchMapSetting = function(){
            this.ds_search.setColumn(0, "TEAM_CD"               , this.ds_teamList.getColumn(0, "TEAM_CD")                );
        	this.ds_search.setColumn(0, "TEAM_NM"               , this.ds_teamList.getColumn(0, "TEAM_NM")                );
        	this.ds_search.setColumn(0, "TEAM_ATTR_CLCD"        , this.ds_teamList.getColumn(0, "TEAM_ATTR_CLCD")         );
        	this.ds_search.setColumn(0, "TEAM_ATTR_CLCD_NM"     , this.ds_teamList.getColumn(0, "TEAM_ATTR_CLCD_NM")      );
        	this.ds_search.setColumn(0, "SALS_TEAM_CD"          , this.ds_teamList.getColumn(0, "SALS_TEAM_CD")           );
        	this.ds_search.setColumn(0, "SALS_CHR_CD"           , this.ds_teamList.getColumn(0, "SALS_CHR_CD")            );
        	this.ds_search.setColumn(0, "USE_YN"                , this.ds_teamList.getColumn(0, "USE_YN")                 );
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
        //초기화
        this.btn_clear_onclick = function(obj,e){
        	this.ds_teamList.setColumn(0, "TEAM_CD"              , "");
        	this.ds_teamList.setColumn(0, "TEAM_NM"              , "");
        	this.ds_teamList.setColumn(0, "TEAM_ATTR_CLCD"       , "");
        	//this.ds_teamList.setColumn(0, "TEAM_ATTR_CLCD_NM"    , "");
        	this.ds_teamList.setColumn(0, "SALS_TEAM_CD"         , "");
        	this.ds_teamList.setColumn(0, "SALS_CHR_CD"          , "");
        	this.ds_teamList.setColumn(0, "USE_YN"               , "");

        	this.ds_search.setColumn(  0, "TEAM_CD"              , "");
        	this.ds_search.setColumn(  0, "TEAM_NM"              , "");
        	this.ds_search.setColumn(  0, "SALS_TEAM_CD"         , "");
        	this.ds_search.setColumn(  0, "SALS_CHR_CD"          , "");
        	this.ds_search.setColumn(  0, "USE_YN"               , "");

        };
        //조회버튼
        this.btn_search_onclick = function(obj,e){
        	this.fn_searchMapSetting();
        	this.fn_search(true);
        };
        //그리드 셀 더블클릭
        this.grd_list_oncelldblclick = function(obj,e){
        	if(e.row != 0 ){
        		var resData = {};
        		var resString = "";
        		resData.CO_CD              = this.ds_teamList.getColumn(this.ds_teamList.rowposition, "CO_CD");		        //회사코드
        		resData.TEAM_CD            = this.ds_teamList.getColumn(this.ds_teamList.rowposition, "TEAM_CD");	        //팀코드
        		resData.TEAM_NM            = this.ds_teamList.getColumn(this.ds_teamList.rowposition, "TEAM_NM");	        //팀명
        		resData.TEAM_ATTR_CLCD     = this.ds_teamList.getColumn(this.ds_teamList.rowposition, "TEAM_ATTR_CLCD");	//팀속성코드
        		resData.TEAM_ATTR_CLCD_NM  = this.ds_teamList.getColumn(this.ds_teamList.rowposition, "TEAM_ATTR_CLCD_NM");	//팀속성코드명
        		resData.SALS_TEAM_CD       = this.ds_teamList.getColumn(this.ds_teamList.rowposition, "SALS_TEAM_CD");		//영업팀코드
        		resData.SALS_TEAM_NM       = this.ds_teamList.getColumn(this.ds_teamList.rowposition, "SALS_TEAM_NM");		//영업팀코드명
        		resData.SALS_CHR_CD        = this.ds_teamList.getColumn(this.ds_teamList.rowposition, "SALS_CHR_CD");		//영업담당코드
        		resString = JSON.stringify(resData);
        //		alert(resString);
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

        	obj.dropdownCombo(); // 셀렉트박스 원터치클릭
        };

        this.CLIENT_SINGLE_POPUP_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        //선택 클릭 이벤트
        this.btn_select_onclick = function(obj,e)
        {
        	if(this.ds_teamList.rowposition < 1){
        		alert(this.fn_getMessage("ERRC000050", "데이터")); // 선택된 데이터가 없습니다.
        		return;
        	}

        	var resData = {};
        	var resString = "";
        	resData.CO_CD              = this.ds_teamList.getColumn(this.ds_teamList.rowposition, "CO_CD");		        //회사코드
        	resData.TEAM_CD            = this.ds_teamList.getColumn(this.ds_teamList.rowposition, "TEAM_CD");	        //팀코드
        	resData.TEAM_NM            = this.ds_teamList.getColumn(this.ds_teamList.rowposition, "TEAM_NM");	        //팀명
        	resData.TEAM_ATTR_CLCD     = this.ds_teamList.getColumn(this.ds_teamList.rowposition, "TEAM_ATTR_CLCD");	//팀속성코드
        	resData.TEAM_ATTR_CLCD_NM  = this.ds_teamList.getColumn(this.ds_teamList.rowposition, "TEAM_ATTR_CLCD_NM");	//팀속성코드명
        	resData.SALS_TEAM_CD       = this.ds_teamList.getColumn(this.ds_teamList.rowposition, "SALS_TEAM_CD");		//영업팀코드
        	resData.SALS_TEAM_NM       = this.ds_teamList.getColumn(this.ds_teamList.rowposition, "SALS_TEAM_NM");		//영업팀코드명
        	resData.SALS_CHR_CD        = this.ds_teamList.getColumn(this.ds_teamList.rowposition, "SALS_CHR_CD");		//영업담당코드
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
            this.grd_list.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Static60_00.addEventHandler("onclick",this.Static60_00_onclick,this);
            this.btn_init.addEventHandler("onclick",this.btn_clear_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PP_26.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
