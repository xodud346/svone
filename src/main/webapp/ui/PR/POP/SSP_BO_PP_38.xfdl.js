(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_16");
            this.set_titletext("상품ID 단일 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_LIKE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_listCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_totcnt","20","65","250","14",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("총 0건");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"60","60","28","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","98",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("none");
            obj.set_cellsizebandtype("allband");
            obj.set_autoenter("select");
            obj.set_autosizebandtype("body");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"151\"/><Column size=\"189\"/><Column size=\"151\"/><Column size=\"151\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"상품ID\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"규격\"/><Cell col=\"3\" text=\"제조사명\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ID_VIEW\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" wordWrap=\"none\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PRD_NM\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" wordWrap=\"none\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:ATTR_VAL\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" wordWrap=\"none\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:MNFR_NM\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" wordWrap=\"none\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","20","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("상품ID 단일조회");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,null,"60","30","320","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00",null,"60","60","28","188",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_txtR");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rowCount",null,"60","100","28","84",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("1000");
            obj.set_readonly("true");
            obj.set_text("1000");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_PP_38.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES : 2022.03.17 조지훈
        *******************************************************/
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();	//application object
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	var prdId = this.parent.prdId;	//상품ID
        	var prdNm = this.parent.prdNm;	//상품명
        	var prvl = this.parent.prvl;	//규격
        	var mnfrNm = this.parent.mnfrNm;	//제조사
        	var pubOnlySprCd = this.parent.pubOnlySprCd;	//공용전용구분
        	var prdClcd = this.parent.prdClcd;	//상품분류코드
        	var mallSprCd = this.parent.mallSprCd;	//몰구분
        	var prdLikeYn = this.parent.prdLikeYn;	//상품ID Like 검색용
        	var reprPrdYn = this.parent.reprPrdYn;	//대표상태 확인
        	var dispStatsYn = this.parent.dispStatsYn;	//진열상태
        	var selMthdCd= this.parent.selMthdCd;	//전시상품여부
        	var splPsbYn= this.parent.splPsbYn;	//공급가능여부

        	var dupProc = this.parent.dupProc;

        	if(this.gfn_isNull(this.parent.coCd) || this.parent.coCd ==  undefined){
        		alert("팝업창의 회사코드가 비어있습니다. 확인해주세요.");
        		return;
        	}else{
        		this.ds_search.setColumn(0, "CO_CD", this.parent.coCd);
        	}

        	if(!this.gfn_isNull(pubOnlySprCd)){
        		this.ds_search.setColumn(0, "PUB_ONLY_SPR_CD", pubOnlySprCd);
        	}

        	if(!this.gfn_isNull(prdClcd)){
        		this.ds_search.setColumn(0, "PRD_CLCD", prdClcd);
        	}

        	if(!this.gfn_isNull(mallSprCd)){
        		this.ds_search.setColumn(0, "MALL_SPR_CD", mallSprCd);
        	}else{
        		this.ds_search.setColumn(0, "MALL_SPR_CD", '10');	//디폴트 10(SSP)
        	}

        	if(!this.gfn_isNull(prdLikeYn)){
        		this.ds_search.setColumn(0, "PRD_LIKE_YN", prdLikeYn);
        	}

        	if(!this.gfn_isNull(reprPrdYn)){
        		this.ds_search.setColumn(0, "REPR_PRD_YN", reprPrdYn);
        	}

        	if(!this.gfn_isNull(dispStatsYn)){
        		this.ds_search.setColumn(0, "DISP_STATS_YN", dispStatsYn);
        	}

        	if(!this.gfn_isNull(selMthdCd)){
        		this.ds_search.setColumn(0, "SEL_MTHD_CD", selMthdCd);
        	}

        	if(!this.gfn_isNull(splPsbYn)){
        		this.ds_search.setColumn(0, "SPL_PSB_YN", splPsbYn);
        	}

        	if(!this.gfn_isNull(prdId) || !this.gfn_isNull(prdNm) || !this.gfn_isNull(prvl) || !this.gfn_isNull(mnfrNm)){
        		this.ds_search.setColumn(0, "PRD_ID", prdId);
        		this.ds_search.setColumn(0, "PRD_NM", prdNm);
        		this.ds_search.setColumn(0, "PRVL", prvl);
        		this.ds_search.setColumn(0, "MNFR_NM", mnfrNm);
        		this.fn_initGrid();

        		this.fn_search();
        	}else{
        		this.fn_initGrid();
        	}
        };

        this.fn_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13 && e.ctrlkey){	//Ctrl+Enter : 선택기능
        		this.btn_add_onclick();
        	}else if(e.keycode == 27){	//ESC : 닫기기능
        		this.close();
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit)
        {
        	if(!this.fn_validation()){
        		alert('검색어를 입력하세요.');
        		return;
        	}

        	var sSvcId = "search";
        	if(this.parent.dupProc == 'Y') {
        		var sUrl = "/pr/prd-popup/select-product-popup-list-for-dup-proc.do";
        	} else {
        		var sUrl = "/pr/prd-popup/select-product-popup-list.do";
        	}
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_listCopy=ds_list";
        	var arg;

        	this.ds_search.setColumn(0,"ROW_COUNT", this.edt_rowCount.value);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	switch(svcID){
        		case "search":
        			this.ds_list.clearData();
        			this.fn_initGrid();
        			this.ds_list.appendData(this.ds_listCopy, true);
                    this.sta_totcnt.set_text("총 "+ this.gfn_appendComma(this.totalCount, 0) +"건");
        			break;
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_validation = function() {
        	if(this.gfn_isNull(this.ds_list.getColumn(0, "PRD_ID_VIEW"))
        		&& this.gfn_isNull(this.ds_list.getColumn(0, "PRD_NM"))
        		&& this.gfn_isNull(this.ds_list.getColumn(0, "ATTR_VAL"))
        		&& this.gfn_isNull(this.ds_list.getColumn(0, "MNFR_NM"))){
        		return false;
        	}else{
        		return true;
        	}
        };

        this.fn_initGrid = function(){
        	this.ds_list.insertRow(0);
        	this.ds_list.setColumn(0, "PRD_ID_VIEW",  this.ds_search.getColumn(0, "PRD_ID"));
        	this.ds_list.setColumn(0, "PRD_NM",  this.ds_search.getColumn(0, "PRD_NM"));
        	this.ds_list.setColumn(0, "ATTR_VAL",  this.ds_search.getColumn(0, "PRVL"));
        	this.ds_list.setColumn(0, "MNFR_NM",  this.ds_search.getColumn(0, "MNFR_NM"));
        	this.ds_list.set_rowposition(-1);
        };

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "PRD_ID", this.ds_list.getColumn(0, "PRD_ID_VIEW"));
        	this.ds_search.setColumn(0, "PRD_NM", this.ds_list.getColumn(0, "PRD_NM"));
        	this.ds_search.setColumn(0, "PRVL", this.ds_list.getColumn(0, "ATTR_VAL"));
        	this.ds_search.setColumn(0, "MNFR_NM", this.ds_list.getColumn(0, "MNFR_NM"));
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회버튼
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

        //검색조건 ROW에서 엔터
        this.grd_list_onenterdown = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        //그리드 셀 더블클릭
        this.grd_list_oncelldblclick = function(obj,e){
        	if(e.row != 0){
        		var resData = {};
        		var resString = "";

        		resData.CO_CD = this.ds_list.getColumn(this.ds_list.rowposition, "CO_CD");
        		resData.PRD_ID = this.ds_list.getColumn(this.ds_list.rowposition, "PRD_ID");
        		resData.PRD_ID_VIEW = this.ds_list.getColumn(this.ds_list.rowposition, "PRD_ID_VIEW");
        		resData.PRD_NM = this.ds_list.getColumn(this.ds_list.rowposition, "PRD_NM");
        		resData.MALL_SPR_CD = this.ds_list.getColumn(this.ds_list.rowposition, "MALL_SPR_CD");
        		resData.PRD_CLCD = this.ds_list.getColumn(this.ds_list.rowposition, "PRD_CLCD");
        		resData.FULL_PRD_CLSF_NM = this.ds_list.getColumn(this.ds_list.rowposition, "FULL_PRD_CLSF_NM");
        		resData.ATTR_VAL = this.ds_list.getColumn(this.ds_list.rowposition, "ATTR_VAL");
        		resData.MNFR_NO = this.ds_list.getColumn(this.ds_list.rowposition, "MNFR_NO");
        		resData.MNFR_NM = this.ds_list.getColumn(this.ds_list.rowposition, "MNFR_NM");
        		resData.SEL_MTHD_CD = this.ds_list.getColumn(this.ds_list.rowposition, "SEL_MTHD_CD");
        		resData.SSP_PRD_NM = this.ds_list.getColumn(this.ds_list.rowposition, "SSP_PRD_NM");
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


        this.btn_add_onclick = function(obj,e)
        {
        	if(this.ds_list.rowposition < 1){
        		alert("선택된 데이터가 없습니다.");
        		return;
        	}
        	var resData = {};
        	var resString = "";

        	resData.CO_CD = this.ds_list.getColumn(this.ds_list.rowposition, "CO_CD");
        	resData.PRD_ID = this.ds_list.getColumn(this.ds_list.rowposition, "PRD_ID");
        	resData.PRD_ID_VIEW = this.ds_list.getColumn(this.ds_list.rowposition, "PRD_ID_VIEW");
        	resData.PRD_NM = this.ds_list.getColumn(this.ds_list.rowposition, "PRD_NM");
        	resData.MALL_SPR_CD = this.ds_list.getColumn(this.ds_list.rowposition, "MALL_SPR_CD");
        	resData.PRD_CLCD = this.ds_list.getColumn(this.ds_list.rowposition, "PRD_CLCD");
        	resData.FULL_PRD_CLSF_NM = this.ds_list.getColumn(this.ds_list.rowposition, "FULL_PRD_CLSF_NM");
        	resData.ATTR_VAL = this.ds_list.getColumn(this.ds_list.rowposition, "ATTR_VAL");
        	resData.MNFR_NO = this.ds_list.getColumn(this.ds_list.rowposition, "MNFR_NO");
        	resData.MNFR_NM = this.ds_list.getColumn(this.ds_list.rowposition, "MNFR_NM");
        	resData.SEL_MTHD_CD = this.ds_list.getColumn(this.ds_list.rowposition, "SEL_MTHD_CD");
        	resData.SSP_PRD_NM = this.ds_list.getColumn(this.ds_list.rowposition, "SSP_PRD_NM");
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.grd_list.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.sta_totcnt00.addEventHandler("onclick",this.Div00_sta_totcnt00_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PP_38.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
