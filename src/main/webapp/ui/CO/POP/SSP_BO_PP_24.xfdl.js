(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_24");
            this.set_titletext("회원 단일 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(570,599);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GI_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CRD_STL_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CRD_STL_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXINV_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_USE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_memLogin", this);
            obj._setContents("<ColumnInfo><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UT_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_USE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_memLoginCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_USE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mbrUseCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCodeSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"32\"/><Column id=\"langCd\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20","530",null,null,"20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_positionstep("0");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_noData","0","155",null,"354","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
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

            obj = new Static("sta_totcnt","0","40","80","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("총 0건");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list01","0","77",null,"442","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_memLogin");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("body");
            obj.set_positionstep("0");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"102\"/><Column size=\"109\"/><Column size=\"166\"/><Column size=\"94\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"회원ID\"/><Cell col=\"1\" text=\"회원명\"/><Cell col=\"2\" text=\"로그인ID\"/><Cell col=\"3\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:MBR_ID\" textAlign=\"center\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\"/><Cell col=\"1\" text=\"bind:MBR_NM\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\"/><Cell col=\"2\" text=\"bind:LOGN_ID\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\"/><Cell col=\"3\" displaytype=\"expr:currow == 0 ? &quot;combocontrol&quot; : &quot;combotext&quot;\" edittype=\"expr:currow == 0 ? &quot;combo&quot; : &quot;none&quot;\" combodataset=\"ds_mbrUseCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" text=\"bind:MBR_USE_CD\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_select","235","grd_list01:10","60","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_maxCnt","400","41",null,"26","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_textAlign("right");
            obj.set_enable("false");
            obj.set_text("1,000");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00","336","40",null,"25","edt_maxCnt:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
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
        this.addIncludeScript("SSP_BO_PP_24.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PP_24.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.mbrId = "";
        this.mbrNm = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	this.ds_memLoginCopy.copyData(this.ds_memLogin);
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

        this.fn_search = function (){
        	var mbrId = this.ds_search.getColumn(0, "MBR_ID");
        	var mbrNm = this.ds_search.getColumn(0, "MBR_NM");
        	var lognId = this.ds_search.getColumn(0, "LOGN_ID");
        	if(this.gfn_isNull(this.gfn_trim(mbrId)) && this.gfn_isNull(this.gfn_trim(mbrNm)) && this.gfn_isNull(this.gfn_trim(lognId))){
        		alert(this.fn_getMessage("ERRC000253")); // 최소 1개의 검색조건을 입력하여 주십시오.
        		return;
        	}

        	var sSvcId = "search";
        	var sUrl = "/co/popup/select-client-popup-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_memLogin=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "search"){
        		if(this.totalCount < 1){
        			this.ds_memLogin.copyData(this.ds_memLoginCopy);
        			this.Div00.form.sta_noData.bringToFront();
        		}else{
        			this.Div00.form.sta_noData.sendToBack();
        		}

        		this.fn_initGrid();
        		this.Div00.form.sta_totcnt.set_text("총 "+ this.gfn_appendComma(this.totalCount, 0) +"건");
        		this.Div00.form.grd_list01.setFixedRow(0);
        		//그리드에 포커스
        		this.Div00.form.grd_list01.setFocus();
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
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_paramSetting = function (param){
        	if(this.gfn_isNull(param.coCd) || param.coCd ==  undefined){
        		alert("팝업창의 회사코드가 비어있습니다. 확인해주세요.");
        		return;
        	}

        	this.ds_search.setColumn(0, "BZPLC_ID", param.bzplcId);
        	this.ds_search.setColumn(0, "DEPT_ID", param.deptId);
        	this.ds_search.setColumn(0, "OPR_UNIT_ID", param.oprUnitId);
        	this.ds_search.setColumn(0, "CO_CD", param.coCd);
        	this.ds_search.setColumn(0, "APRV_AUTH_USE_YN", param.aprvAuthUseYn); 		// 결재권한사용여부
        	this.ds_search.setColumn(0, "ORD_AUTH_USE_YN", param.ordAuthUseYn);  		// 발주권한사용여부
        	this.ds_search.setColumn(0, "GI_AUTH_USE_YN", param.giAuthUseYn); 			// 입고권한사용여부
        	this.ds_search.setColumn(0, "CRD_STL_AUTH_USE_YN", param.crdStlAuthUseYn);  // 카드결제권한사용여부
        	this.ds_search.setColumn(0, "CRD_STL_AUTH_USE_CD", param.crdStlAuthUseCd);  // 카드결제권한사용코드
        	this.ds_search.setColumn(0, "BGT_AUTH_USE_CD", param.bgtAuthUseCd); 		// 예산권한사용코드
        	this.ds_search.setColumn(0, "ADJ_AUTH_USE_CD", param.adjAuthUseCd); 		// 정산권한사용코드
        	this.ds_search.setColumn(0, "MNG_AUTH_USE_CD", param.mngAuthUseCd);  		// 관리권한사용코드
        	this.ds_search.setColumn(0, "TAXINV_AUTH_USE_YN", param.taxinvAuthUseYn);   // 세금계산서권한사용여부
        	this.ds_search.setColumn(0, "MBR_USE_CD", param.mbrUseCd);  				// 회원사용코드

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

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "MBR_ID", this.ds_memLogin.getColumn(0, "MBR_ID"));
        	this.ds_search.setColumn(0, "MBR_NM", this.ds_memLogin.getColumn(0, "MBR_NM"));
        	this.ds_search.setColumn(0, "LOGN_ID", this.ds_memLogin.getColumn(0, "LOGN_ID"));
        	this.ds_search.setColumn(0, "MBR_USE_CD", this.ds_memLogin.getColumn(0, "MBR_USE_CD"));
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
        	if(this.gfn_isNull(coCd) || coCd ==  undefined){
        		alert("팝업창의 회사코드가 비어있습니다. 확인해주세요.");
        		return;
        	}
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        //그리드 셀 더블클릭
        this.grd_list_oncelldblclick = function(obj,e){
        	if(e.row != 0 ){
        		var resData = {};
        		var resString = "";
        		resData.MBR_ID = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "MBR_ID");
        		resData.MBR_NM = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "MBR_NM");
        		resData.CO_CD = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "CO_CD");
        		resData.BZPLC_ID = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "BZPLC_ID");
        		resData.BZPLC_NM = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "BZPLC_NM");
        		resData.OPR_UNIT_ID = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "OPR_UNIT_ID");
        		resData.OPR_UNIT_NM = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "OPR_UNIT_NM");
        		resData.DEPT_ID = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "DEPT_ID");
        		resData.DEPT_NM  = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "DEPT_NM");
        		resData.MBR_USE_CD = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "MBR_USE_CD");
        		resData.UT_AGRE_YN = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "UT_AGRE_YN");

        		resString = JSON.stringify(resData);
        		this.close(resString);
        	}
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

        	if(this.ds_memLogin.rowposition < 1){
        		alert("선택된 데이터가 없습니다.");
        		this.Div00.form.grd_list01.setFocus();
        		return;
        	}

        	resData.MBR_ID = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "MBR_ID");
        	resData.MBR_NM = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "MBR_NM");
        	resData.CO_CD = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "CO_CD");
        	resData.BZPLC_ID = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "BZPLC_ID");
        	resData.BZPLC_NM = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "BZPLC_NM");
        	resData.OPR_UNIT_ID = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "OPR_UNIT_ID");
        	resData.OPR_UNIT_NM = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "OPR_UNIT_NM");
        	resData.DEPT_ID = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "DEPT_ID");
        	resData.DEPT_NM  = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "DEPT_NM");
        	resData.MBR_USE_CD = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "MBR_USE_CD");
        	resData.UT_AGRE_YN = this.ds_memLogin.getColumn(this.ds_memLogin.rowposition, "UT_AGRE_YN");

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
            this.Div00.form.sta_noData.addEventHandler("onclick",this.Div00_sta_noData_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.grd_list01.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.Div00.form.grd_list01.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.Div00.form.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.Div00.form.edt_maxCnt.addEventHandler("onkeyup",this.Div00_edt_maxCnt_onkeyup,this);
        };
        this.loadIncludeScript("SSP_BO_PP_24.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
