(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_25");
            this.set_titletext("회원 멀티 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(570,673);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_memLogin", this);
            obj._setContents("<ColumnInfo><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_USE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GI_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CRD_STL_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CRD_STL_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXINV_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_USE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MBR_USE_CD\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_USE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_memLoginCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_USE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selectCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_USE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mbrUseCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCodeSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"32\"/><Column id=\"langCd\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20","530",null,null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_positionstep("0");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_noData","0","155",null,"164","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
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
            obj.set_text("회원 조회");
            obj.set_cssclass("sta_WF_title04");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_select","235","603","60","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list01","0","77",null,"270","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_memLogin");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("body");
            obj.set_positionstep("0");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"102\"/><Column size=\"109\"/><Column size=\"166\"/><Column size=\"94\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"회원ID\"/><Cell col=\"2\" text=\"회원명\"/><Cell col=\"3\" text=\"로그인ID\"/><Cell col=\"4\" text=\"상태\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:currow == 0 ? &quot;imagecontrol&quot; : &quot;checkboxcontrol&quot;\" edittype=\"expr:currow == 0 ? &quot;none&quot; :  &quot;checkbox&quot; \" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:MBR_ID\" textAlign=\"center\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\"/><Cell col=\"2\" text=\"bind:MBR_NM\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\"/><Cell col=\"3\" text=\"bind:LOGN_ID\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\"/><Cell col=\"4\" displaytype=\"expr:currow == 0 ? &quot;combocontrol&quot; : &quot;combotext&quot;\" edittype=\"expr:currow == 0 ? &quot;combo&quot; : &quot;none&quot;\" combodataset=\"ds_mbrUseCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" text=\"bind:MBR_USE_CD\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"grd_list01:20","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list02","0","403",null,"154","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_binddataset("ds_select");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("body");
            obj.set_positionstep("0");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"102\"/><Column size=\"109\"/><Column size=\"166\"/><Column size=\"94\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"회원ID\"/><Cell col=\"2\" text=\"회원명\"/><Cell col=\"3\" text=\"로그인ID\"/><Cell col=\"4\" text=\"상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:MBR_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:MBR_NM\"/><Cell col=\"3\" text=\"bind:LOGN_ID\" textAlign=\"center\"/><Cell col=\"4\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_mbrUseCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" text=\"bind:MBR_USE_CD\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"grd_list02:10","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","0","40","90","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("총 0건");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_maxCnt","400","41",null,"26","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_textAlign("right");
            obj.set_enable("false");
            obj.set_text("1,000");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00","336","40",null,"25","edt_maxCnt:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_selectCnt","0","369","330","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("선택건수 0건");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",570,673,this,function(p){});
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
        this.addIncludeScript("SSP_BO_PP_25.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PP_25.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES : 2021.01.19
        *******************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        //this.mbrId = "";
        //this.mbrNm = "";
        this.fv_oApp = nexacro.getApplication();	//application object
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	this.ds_memLoginCopy.copyData(this.ds_memLogin);
        	this.ds_selectCopy.copyData(this.ds_select);
        	this.Div00.form.edt_maxCnt.set_value("1,000"); //초기 1000으로 셋팅
        	this.fn_paramSetting(this.parent);

        	this.ds_memLogin.setColumn(0, "MBR_USE_CD", "Y");

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
        //공통코드 조회
        this.fn_commonCodeSearch = function(){
        	this.ds_comCodeSearch.setColumn(0, "codeList", "MBR_USE_CD");
        	this.ds_comCodeSearch.setColumn(0, "langCd", "KO");
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_comCodeSearch";
        	var outDs = "ds_mbrUseCd=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_popCallBack");
        }

        this.fn_search = function (bInit)
        {
        	var mbrId = this.ds_search.getColumn(0, "MBR_ID");
        	var mbrNm = this.ds_search.getColumn(0, "MBR_NM");
        	var lognId = this.ds_search.getColumn(0, "LOGN_ID");
        	if(this.gfn_isNull(this.gfn_trim(mbrId)) && this.gfn_isNull(this.gfn_trim(mbrNm)) && this.gfn_isNull(this.gfn_trim(lognId))){
        		alert(this.fn_getMessage("ERRC000253")); // 최소 1개의 검색조건을 입력하여 주십시오.
        		return;
        	}

        	var sSvcId = "search";
        	var sUrl = "/co/popup/select-client-popup-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_memLogin=ds_output1";
        	var arg;

        	if(bInit){
        		sSvcId = "initSearch";
        		outDs = "ds_memLogin=ds_output1 ds_select=ds_output1";
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	switch(svcID){
        		case "initSearch":
        			if(this.totalCount < 1){
        				this.ds_select.copyData(this.ds_selectCopy);
        			}
        		case "search":
        			if(this.totalCount < 1){
        				this.ds_memLogin.copyData(this.ds_memLoginCopy);
        				this.Div00.form.sta_noData.bringToFront();
        			}else{
        				this.Div00.form.sta_noData.sendToBack();
        			}

        			this.fn_initGrid();
        			this.Div00.form.sta_totcnt.set_text("총 "+ this.gfn_appendComma(this.totalCount, 0) +"건");
        			this.Div00.form.grd_list01.setCellProperty("head", 0, "text", "0");
        			this.Div00.form.grd_list01.setFixedRow(0);
        			this.fn_dsSelectCheck();
        			//그리드에 포커스
        			this.Div00.form.grd_list01.setFocus();
        			break;
        		default:
        			break;
        	}
        };

        this.fn_popCallBack = function(svcID, errorCode, errorMsg)	{
        	var cnt = this.ds_mbrUseCd.getRowCount();
        	if(cnt > 0){
        		this.ds_mbrUseCd.insertRow(0);
        		this.ds_mbrUseCd.setColumn(0,"COM_DTL_CD_NM","전체");
        		cnt++;
        		for(var i=0; i<cnt; i++){
        			if("Q" == this.ds_mbrUseCd.getColumn(i, "COM_DTL_CD")){
        				// 탈퇴 제외
        				this.ds_mbrUseCd.deleteRow(i);
        			}
        		}
        	}
        }
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        this.cfn_formInit = function(){
        	this.Div00.form.grd_list01.uUnCheckRow = "0";  //,구분자로 여려Row 설정 가능
        };
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_paramSetting = function (param){
        	if(this.gfn_isNull(param.coCd) || param.coCd ==  undefined){
        		alert("팝업창의 회사코드가 비어있습니다. 확인해주세요.");
        		return;
        	}

        	this.ds_search.setColumn(0, "CO_CD", param.coCd);
        	this.ds_search.setColumn(0, "BZPLC_ID", param.bzplcId);
        	this.ds_search.setColumn(0, "OPR_UNIT_ID", param.oprUnitId);
        	this.ds_search.setColumn(0, "DEPT_ID", param.deptId);
        	this.ds_search.setColumn(0, "APRV_AUTH_USE_YN", param.aprvAuthUseYn); /*  결재권한사용여부       */
        	this.ds_search.setColumn(0, "ORD_AUTH_USE_YN", param.ordAuthUseYn);  /* 발주권한사용여부       */
        	this.ds_search.setColumn(0, "GI_AUTH_USE_YN", param.giAuthUseYn); /* 입고권한사용여부       */
        	this.ds_search.setColumn(0, "CRD_STL_AUTH_USE_YN", param.crdStlAuthUseYn); /* 카드결제권한사용여부   */
        	this.ds_search.setColumn(0, "CRD_STL_AUTH_USE_CD", param.crdStlAuthUseCd); /* 카드결제권한사용코드   */
        	this.ds_search.setColumn(0, "BGT_AUTH_USE_CD", param.bgtAuthUseCd); /* 예산권한사용코드       */
        	this.ds_search.setColumn(0, "ADJ_AUTH_USE_CD", param.adjAuthUseCd); /* 정산권한사용코드       */
        	this.ds_search.setColumn(0, "MNG_AUTH_USE_CD", param.mngAuthUseCd);  /* 관리권한사용코드       */
        	this.ds_search.setColumn(0, "TAXINV_AUTH_USE_YN", param.taxinvAuthUseYn);  /* 세금계산서권한사용여부 */
        	this.ds_search.setColumn(0, "MBR_USE_CD", param.mbrUseCd);  			   /* 회원사용코드 */
        	this.fn_initGrid();
        };

        //그리드 검색조건 셋팅
        this.fn_initGrid = function(){
        	this.ds_memLogin.insertRow(0);
        	this.ds_memLogin.setColumn(0, "MBR_ID",  this.ds_search.getColumn(0, "MBR_ID"));
        	this.ds_memLogin.setColumn(0, "MBR_NM",  this.ds_search.getColumn(0, "MBR_NM"));
        	this.ds_memLogin.setColumn(0, "LOGN_ID",  this.ds_search.getColumn(0, "LOGN_ID"));
        	this.ds_memLogin.setColumn(0, "MBR_USE_CD", this.ds_search.getColumn(0, "MBR_USE_CD"));
        	this.ds_memLogin.set_rowposition(-1);
        };

        //선택한 값을 조회 후에도 확인할 수 있도록 체크
        this.fn_dsSelectCheck = function(){
        	for(var i = 0; i< this.ds_select.rowcount; i++){
        		var findRow = this.ds_memLogin.findRowExpr("currow != 0 && MBR_ID == '" + this.ds_select.getColumn(i, "MBR_ID") + "'");
        		if(findRow > -1){
        			this.ds_memLogin.setColumn(findRow, "CHK", 1);
        		}
        	}
        	this.fn_selectRowSetting();
        };

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "MBR_ID", this.ds_memLogin.getColumn(0, "MBR_ID"));
        	this.ds_search.setColumn(0, "MBR_NM", this.ds_memLogin.getColumn(0, "MBR_NM"));
        	this.ds_search.setColumn(0, "LOGN_ID", this.ds_memLogin.getColumn(0, "LOGN_ID"));
        	this.ds_search.setColumn(0, "MBR_USE_CD", this.ds_memLogin.getColumn(0, "MBR_USE_CD"));
        };

        this.fn_selectRowSetting = function(){
        	this.Div00.form.sta_selectCnt.set_text("선택건수 "+ this.gfn_appendComma(this.ds_select.getRowCount(), 0) +"건");
        	this.Div00.form.grd_list01.setFocus();
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
        this.btn_search_onclick = function(obj,e)
        {
        	var coCd = this.ds_search.getColumn(0, "CO_CD");
        	if(this.gfn_isNull(coCd) || coCd ==  undefined){
        		alert("팝업창의 회사코드가 비어있습니다. 확인해주세요.");
        		return;
        	}

        	this.fn_searchMapSetting();
        	this.fn_search(false);
        };

        //추가버튼 클릭 이벤트
        this.btn_add_onclick = function(obj,e)
        {
        	var nRow = 0;
        	var aSelectedArr = new Array();
        	var aChkArr = new Array();
        	var aTotalArr = new Array();

        	//체크된 값
        	if(this.ds_memLogin.rowcount != 0){
        		aTotalArr = this.ds_memLogin.extractRows("CHK == 1");
        	}

        	this.ds_memLogin.set_enableevent(false);
        	this.ds_select.set_enableevent(false);

        	if(aTotalArr != undefined && aTotalArr.length != 0){
        		for(var i = 0; i< aTotalArr.length; i++){
        			if(aTotalArr[i] != 0){ //첫번째 row가 선택되어있다면 제외
        				var findRow = this.ds_select.findRowExpr("MBR_ID == '" + this.ds_memLogin.getColumn(aTotalArr[i], "MBR_ID") + "'");
        				if(findRow < 0){
        					nRow = this.ds_select.addRow();
        					this.ds_select.copyRow(nRow, this.ds_memLogin, aTotalArr[i]);
        					this.ds_select.setColumn(nRow, "CHK", 0);
        					this.ds_memLogin.setColumn(aTotalArr[i], "CHK", 1);
        				}
        			}
        		}
        		this.Div00.form.grd_list01.clearSelect(); // 선택된 영역 해제
        	}else{
        		alert("선택된 데이터가 없습니다.");
        	}

        	this.ds_memLogin.set_enableevent(true);
        	this.ds_select.set_enableevent(true);
        	this.fn_selectRowSetting();

        };

        //삭제버튼 클릭 이벤트
        this.btn_del_onclick = function(obj,e)
        {
        	var aSelectedArr = new Array();
        	var aChkArr = new Array();
        	var aTotalArr = new Array();

        	//체크된 값
        	if(this.ds_select.rowcount != 0){
        		aTotalArr = this.ds_select.extractRows("CHK == 1");
        	}

        	//var startRow = parseInt(this.Div00.form.grd_list02.selectstartrow);
        	//var endRow = parseInt(this.Div00.form.grd_list02.selectendrow);

        	this.ds_memLogin.set_enableevent(false);
        	this.ds_select.set_enableevent(false);

        	if(aTotalArr != undefined && aTotalArr.length != 0){
        		for(var i = 0; i< aTotalArr.length; i++){
        			var findRow = this.ds_memLogin.findRowExpr("currow != 0 && MBR_ID == '" + this.ds_select.getColumn(aTotalArr[i], "MBR_ID") + "'");
        			if(findRow >= 0){
        				this.ds_memLogin.setColumn(findRow, "CHK", 0);
        				this.Div00.form.grd_list01.selectRow(findRow, false); //선택해제
        			}
        		}

        		this.ds_select.deleteMultiRows(aTotalArr);
        		this.Div00.form.grd_list02.clearSelect(); // 선택된 영역 해제
        	}else{
        		alert("선택된 데이터가 없습니다.");
        	}

        	this.ds_memLogin.set_enableevent(true);
        	this.ds_select.set_enableevent(true);
        	this.Div00.form.grd_list02.setCellProperty("head", 0, "text", "0");
        	this.fn_selectRowSetting();
        };

        //선택버튼 클릭 이벤트
        this.btn_select_onclick = function(obj,e)
        {
        	var resData = {};
        	var resList = [];

        	if(this.ds_select.rowcount == 0){
        		alert("선택된 데이터가 없습니다.");
        		this.Div00.form.grd_list01.setFocus();
        		return;
        	}

        	for(var i = 0; i< this.ds_select.rowcount; i++){
        		resData.MBR_ID= this.ds_select.getColumn(i, "MBR_ID");
        		resData.MBR_NM= this.ds_select.getColumn(i, "MBR_NM");
        		resData.CO_CD = this.ds_select.getColumn(i, "CO_CD");
        		resData.BZPLC_ID = this.ds_select.getColumn(i, "BZPLC_ID");
        		resData.BZPLC_NM = this.ds_select.getColumn(i, "BZPLC_NM");
        		resData.OPR_UNIT_ID = this.ds_select.getColumn(i, "OPR_UNIT_ID");
        		resData.OPR_UNIT_NM = this.ds_select.getColumn(i, "OPR_UNIT_NM");
        		resData.DEPT_ID = this.ds_select.getColumn(i, "DEPT_ID");
        		resData.DEPT_NM  = this.ds_select.getColumn(i, "DEPT_NM");
        		resData.mbrUseCd = this.ds_select.getColumn(i, "MBR_USE_CD");
        		resList.push(JSON.stringify(resData));
        	}
        	this.close(JSON.stringify(resList));
        };

        this.grd_list01_oncelldblclick = function(obj,e)
        {
        	if(e.row != 0 && e.col != 0){
        		var findRow = this.ds_select.findRowExpr("MBR_ID == '" + this.ds_memLogin.getColumn(e.row, "MBR_ID") + "'");
        		if(findRow < 0){
        			var nRow = this.ds_select.addRow();
        			this.ds_select.copyRow(nRow, this.ds_memLogin, e.row);
        			this.ds_select.setColumn(nRow, "CHK", 0);
        			this.ds_memLogin.setColumn(e.row, "CHK", 1);
        		}
        	}
        };

        //조회 그리드 셀클릭 이벤트
        this.grd_list01_oncellclick = function(obj,e)
        {
        	if(e.row == 0 && e.col != 0){
        		var cellText = obj.getCellText(e.row, e.cell);
        		if(cellText != undefined){
        			obj.setEditSelect(cellText.length, cellText.length);
        		}
        		obj.dropdownCombo();
        	}else if(e.row != 0 ){
        		if(e.col != 0){
        			this.ds_memLogin.setColumn(e.row, "CHK", 1);
        		}
        	}
        };

        //선택 그리드 oncolumnchange 이벤트
        this.ds_select_oncolumnchanged = function(obj,e)
        {
        	this.fn_selectRowSetting();
        };


        //최대조회수 이벤트
        this.Div00_edt_maxCnt_onkeyup = function(obj,e)
        {
        	var cntValue = this.gfn_removeComma(this.Div00.form.edt_maxCnt.value);

        	if(!this.gfn_isNull(cntValue)){
        		this.Div00.form.edt_maxCnt.set_value(this.gfn_appendComma(cntValue, 0));
        	}else{
        		this.Div00.form.edt_maxCnt.set_value("0");
        	}
        };


        //선택목록 셀 더블클릭 시 삭제 처리
        this.Div00_grd_list02_oncelldblclick = function(obj,e)
        {
        	if(e.row >= 0 ){
        		if(e.col != 0){
        			var findRow = this.ds_memLogin.findRowExpr("currow != 0 && MBR_ID == '" + this.ds_select.getColumn(e.row, "MBR_ID") + "'");
        			if(findRow >= 0){
        				this.ds_memLogin.setColumn(findRow, "CHK", 0);
        				this.Div00.form.grd_list01.selectRow(findRow, false); //선택해제
        			}

        			this.ds_select.deleteRow(e.row);
        			this.fn_selectRowSetting();
        		}
        	}
        };

        //선택 그리드 셀클릭 이벤트
        this.Div00_grd_list02_oncellclick = function(obj,e)
        {
        	if(e.col != 0){
        		this.ds_select.setColumn(e.row, "CHK", 1);
        	}
        };


        //조회그리드 선택영역 check 표시
        this.Div00_grd_list01_onselectchanged = function(obj,e)
        {
        	var startRow = parseInt(e.selectstartrow);
        	var endRow =  parseInt(e.selectendrow);

        	var startCol = parseInt(e.oldcell);
        	var endCol =  parseInt(e.cell);

        	if(startRow  <= 0 && endRow <= 0){
        		return;
        	}

        	if(startCol  <= 0 && endCol <= 0){
        		return;
        	}

        	for(var i =startRow; i <= endRow; i++){
        		this.ds_memLogin.setColumn(i, "CHK", 1);
        	}

        };

        //선택그리드 선택영역 check 표시
        this.Div00_grd_list02_onselectchanged = function(obj,e)
        {
        	var startRow = parseInt(e.selectstartrow);
        	var endRow = parseInt(e.selectendrow);

        	var startCol = parseInt(e.oldcell);
        	var endCol =  parseInt(e.cell);

        	if(startRow  < 0 && endRow < 0){
        		return;
        	}

        	if(startCol  <= 0 && endCol <= 0){
        		return;
        	}

        	for(var i=startRow; i <= endRow; i++){
        		this.ds_select.setColumn(i, "CHK", 1);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.Div00.form.sta_noData.addEventHandler("onclick",this.Div00_sta_noData_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.Div00.form.grd_list01.addEventHandler("oncellclick",this.grd_list01_oncellclick,this);
            this.Div00.form.grd_list01.addEventHandler("oncelldblclick",this.grd_list01_oncelldblclick,this);
            this.Div00.form.grd_list01.addEventHandler("onselectchanged",this.Div00_grd_list01_onselectchanged,this);
            this.Div00.form.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.Div00.form.grd_list02.addEventHandler("oncellclick",this.Div00_grd_list02_oncellclick,this);
            this.Div00.form.grd_list02.addEventHandler("oncelldblclick",this.Div00_grd_list02_oncelldblclick,this);
            this.Div00.form.grd_list02.addEventHandler("onselectchanged",this.Div00_grd_list02_onselectchanged,this);
            this.Div00.form.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.Div00.form.edt_maxCnt.addEventHandler("onkeyup",this.Div00_edt_maxCnt_onkeyup,this);
            this.ds_select.addEventHandler("oncolumnchanged",this.ds_select_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_PP_25.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
