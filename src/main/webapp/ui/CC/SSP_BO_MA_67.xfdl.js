(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REF_SINGLE_POPUP");
            this.set_titletext("참조코드 단일팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(570,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_refList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_OPR_UNIT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_GRP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_OPR_UNIT_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">1000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_refListC", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_OPR_UNIT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deptOprUnitSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","20","100","540","480",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_binddataset("ds_refList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"106\"/><Column size=\"297\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"구분단위\"/><Cell col=\"1\" text=\"기타계정\"/><Cell col=\"2\" text=\"기타계정명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_OPR_UNIT_SPR_CD\" edittype=\"none\" displaytype=\"combotext\" combodataset=\"ds_deptOprUnitSprCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"1\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" text=\"bind:REF_CD\"/><Cell col=\"2\" text=\"bind:REF_CD_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/></Band></Format></Formats>");
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
            obj.set_text("| 기타계정명 조회");
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
        this.addIncludeScript("SSP_BO_MA_67.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_67.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_67.xfdl", function() {
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
        this.OPR_UNIT_ID = "";
        this.DEPT_OPR_UNIT_SPR_CD = "";
        this.REF_CD_GRP_SEQ = "";
        this.REF_CD = "";
        this.REF_CD_NM = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	/* 파라미터 */
        	this.CO_CD              		 = this.parent.coCd;
        	this.BZPLC_ID          			 = this.parent.bzplcId;
        	this.OPR_UNIT_ID        		 = this.parent.oprUnitId;
        	this.DEPT_OPR_UNIT_SPR_CD        = this.parent.deptOprUnitSprCd;
        	this.REF_CD_GRP_SEQ      	     = this.parent.refCdGrpSeq;
        	this.REF_CD              		 = this.parent.refCd;
        	this.REF_CD_NM           		 = this.parent.refCdNm;

        	this.ds_search.setColumn(0, "CO_CD"   , this.CO_CD   );
        	this.ds_search.setColumn(0, "BZPLC_ID", this.BZPLC_ID);
        	this.ds_search.setColumn(0, "OPR_UNIT_ID", this.OPR_UNIT_ID);
        	this.ds_search.setColumn(0, "DEPT_OPR_UNIT_SPR_CD", this.DEPT_OPR_UNIT_SPR_CD);
        	this.ds_search.setColumn(0, "REF_CD_GRP_SEQ", this.REF_CD_GRP_SEQ);
        	this.ds_search.setColumn(0, "REF_CD", this.REF_CD);
        	this.ds_search.setColumn(0, "REF_CD_NM", this.REF_CD_NM);

        	if(!this.gfn_isNull(this.REF_CD) || !this.gfn_isNull(this.REF_CD_NM)){
        		this.fn_search();
        	}else{
        		this.fn_initGrid();
        	}
        	this.fn_commonCodeSearch();
        	// 단축키 등록
        	this.fn_regShortCutMethod();
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit){

        	var sSvcId = "search";
        	var sUrl = "/cc/acct/select-ref-single-popup-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_refList=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){

            var sSvcId = "commonCodeSearch";
            var sUrl = "/co/select-common-code-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_deptOprUnitSprCd=ds_output1";
            var arg = "";

            this.ds_search.setColumn(0, "CODE_LIST", "DEPT_OPR_UNIT_SPR_CD");
            this.ds_search.setColumn(0, "LANG_CD", "KO");
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
        		if(this.ds_refList.getRowCount() < 1) this.ds_refList.copyData(this.ds_refListC);

        		this.fn_initGrid();
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
        	this.ds_refList.insertRow(0);

        	this.ds_refList.setColumn(0, "BZPLC_ID"                   , this.ds_search.getColumn(0, "BZPLC_ID")     );
        	this.ds_refList.setColumn(0, "OPR_UNIT_ID"                , this.ds_search.getColumn(0, "OPR_UNIT_ID")     );
        	this.ds_refList.setColumn(0, "DEPT_OPR_UNIT_SPR_CD"       , this.ds_search.getColumn(0, "DEPT_OPR_UNIT_SPR_CD")     );
        	this.ds_refList.setColumn(0, "REF_CD_GRP_SEQ"             , this.ds_search.getColumn(0, "REF_CD_GRP_SEQ")     );
        	this.ds_refList.setColumn(0, "REF_CD"                     , this.ds_search.getColumn(0, "REF_CD")     );
        	this.ds_refList.setColumn(0, "REF_CD_NM"                  , this.ds_search.getColumn(0, "REF_CD_NM")     );

        	this.ds_refList.set_rowposition(-1);
        };
        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "BZPLC_ID"         			  , this.ds_refList.getColumn(0, "BZPLC_ID")     );
        	this.ds_search.setColumn(0, "OPR_UNIT_ID"     			  , this.ds_refList.getColumn(0, "OPR_UNIT_ID")     );
        	this.ds_search.setColumn(0, "DEPT_OPR_UNIT_SPR_CD"        , this.ds_refList.getColumn(0, "DEPT_OPR_UNIT_SPR_CD")     );
        	this.ds_search.setColumn(0, "REF_CD_GRP_SEQ" 			  , this.ds_search.getColumn(0, "REF_CD_GRP_SEQ")     );
        	this.ds_search.setColumn(0, "REF_CD"          			  , this.ds_refList.getColumn(0, "REF_CD")     );
        	this.ds_search.setColumn(0, "REF_CD_NM"     			  , this.ds_refList.getColumn(0, "REF_CD_NM")     );
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
        	if(e.row != 0){
        		var resData = {};
        		var resString = "";
        		resData.REF_CD_SEQ               = this.ds_refList.getColumn(this.ds_refList.rowposition, "REF_CD_SEQ"     );
        		resData.DEPT_OPR_UNIT_SPR_CD     = this.ds_refList.getColumn(this.ds_refList.rowposition, "DEPT_OPR_UNIT_SPR_CD"     );
        		resData.REF_CD_GRP_NM            = this.ds_refList.getColumn(this.ds_refList.rowposition, "REF_CD_GRP_NM"     );
        		resData.REF_CD_NM                = this.ds_refList.getColumn(this.ds_refList.rowposition, "REF_CD_NM"     );
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
        	obj.dropdownCombo();
        };
        this.REF_SINGLE_POPUP_onkeydown = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeydown",this.REF_SINGLE_POPUP_onkeydown,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.grd_list.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Static60_00.addEventHandler("onclick",this.Static60_00_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_67.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
