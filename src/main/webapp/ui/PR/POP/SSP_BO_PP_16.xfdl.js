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
            this.set_titletext("상품ID 멀티 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_listCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list01","20","99",null,"300","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("none");
            obj.set_cellsizebandtype("allband");
            obj.set_positionstep("0");
            obj.set_autoenter("select");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_autosizingtype("none");
            obj.set_cellmovingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"147\"/><Column size=\"167\"/><Column size=\"147\"/><Column size=\"147\"/><Column size=\"202\"/><Column size=\"147\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"상품ID\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"제조사명\"/><Cell col=\"5\" text=\"상품군\"/><Cell col=\"6\" text=\"산업군\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"expr:currow==0?&apos;none&apos;:&apos;checkboxcontrol&apos;\" edittype=\"expr:currow==0?&apos;none&apos;:&apos;checkbox&apos;\"/><Cell col=\"1\" text=\"bind:PRD_ID_VIEW\" wordWrap=\"none\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRD_NM\" wordWrap=\"none\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ATTR_VAL\" wordWrap=\"none\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MNFR_NM\" wordWrap=\"none\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:FULL_PRD_CLSF_NM\" wordWrap=\"none\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:IDDT_NM\" wordWrap=\"none\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"409","65","28","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list02","20","450",null,"200","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_result");
            obj.set_autofittype("none");
            obj.set_cellsizebandtype("allband");
            obj.set_positionstep("0");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"147\"/><Column size=\"167\"/><Column size=\"147\"/><Column size=\"147\"/><Column size=\"228\"/><Column size=\"147\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"상품ID\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"제조사명\"/><Cell col=\"5\" text=\"상품군\"/><Cell col=\"6\" text=\"산업군\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:PRD_ID_VIEW\" wordWrap=\"none\"/><Cell col=\"2\" text=\"bind:PRD_NM\" wordWrap=\"none\"/><Cell col=\"3\" text=\"bind:ATTR_VAL\" wordWrap=\"none\"/><Cell col=\"4\" text=\"bind:MNFR_NM\" wordWrap=\"none\"/><Cell col=\"5\" text=\"bind:FULL_PRD_CLSF_NM\" wordWrap=\"none\"/><Cell col=\"6\" text=\"bind:IDDT_NM\" wordWrap=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","45%","695","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"659","65","28","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","20","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("상품ID 멀티조회");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"60","60","28","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","66","250","14",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("총 0건");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_selcnt","20","427","250","14",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("선택건수 0건");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00",null,"60","60","28","188",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_txtR");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rowCount",null,"60","100","28","84",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("1000");
            obj.set_readonly("true");
            obj.set_text("1000");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_PP_16.xfdl", function() {
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
        	var pgmId = this.parent.pgmId		// 부모화면ID

        	if(pgmId != "SSP_BO_NA_23"){	// 프리패키지 화면에서 호출하지않는경우 5,6 컬럼안보이게
        		this.grd_list01.setFormatColProperty(5, "size", 0);
        		this.grd_list01.setFormatColProperty(6, "size", 0);
        		this.grd_list02.setFormatColProperty(5, "size", 0);
        		this.grd_list02.setFormatColProperty(6, "size", 0);
        	}

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

        	if(!this.gfn_isNull(reprPrdYn)){
        		this.ds_search.setColumn(0, "REPR_PRD_YN", reprPrdYn);
        	}

        	if(!this.gfn_isNull(dispStatsYn)){
        		this.ds_search.setColumn(0, "DISP_STATS_YN", dispStatsYn);
        	}

        	if(!this.gfn_isNull(selMthdCd)){
        		this.ds_search.setColumn(0, "SEL_MTHD_CD", selMthdCd);
        	}

        	if(!this.gfn_isNull(mallSprCd)){
        		this.ds_search.setColumn(0, "MALL_SPR_CD", mallSprCd);
        	}else{
        		this.ds_search.setColumn(0, "MALL_SPR_CD", '10');	//디폴트 10(SSP)
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
        		this.btn_select_onclick();
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
        	var sUrl = "/pr/prd-popup/select-product-popup-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_listCopy=ds_list";
        	var arg;

            this.ds_search.setColumn(0, "ROW_COUNT", this.edt_rowCount.value);

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
        	this.ds_list.setColumn(0, "PRD_ID_VIEW", this.ds_search.getColumn(0, "PRD_ID"));	//상품ID
        	this.ds_list.setColumn(0, "PRD_NM", this.ds_search.getColumn(0, "PRD_NM"));	//상품명
        	this.ds_list.setColumn(0, "ATTR_VAL", this.ds_search.getColumn(0, "PRVL"));	//규격
        	this.ds_list.setColumn(0, "MNFR_NM", this.ds_search.getColumn(0, "MNFR_NM"));	//제조사
        	this.ds_list.set_rowposition(-1);
        };

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "PRD_ID", this.ds_list.getColumn(0, "PRD_ID_VIEW"));	//상품ID
        	this.ds_search.setColumn(0, "PRD_NM", this.ds_list.getColumn(0, "PRD_NM"));	//상품명
        	this.ds_search.setColumn(0, "PRVL", this.ds_list.getColumn(0, "ATTR_VAL"));	//규격
        	this.ds_search.setColumn(0, "MNFR_NM", this.ds_list.getColumn(0, "MNFR_NM"));	//제조사

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

        //추가
        this.btn_add_onclick = function(obj,e)
        {
        	for(var i=0; i<this.ds_list.rowcount; i++) {
                if(this.ds_list.getColumn(i, "CHK") == "1"){
        			var fRow = this.ds_result.findRowExpr("PRD_ID_VIEW=="+this.ds_list.getColumn(i, "PRD_ID_VIEW"));
        			if(fRow < 0 && i > 0){	//중복아닌것만
        				var nRow = this.ds_result.addRow();
        				this.ds_result.copyRow(nRow, this.ds_list, i);
        				this.ds_result.setColumn(nRow, "CHK", 0);
        			}
                }
            }
        };

        //삭제
        this.btn_del_onclick = function(obj,e)
        {
        	var checkedRow = new Array();
        	for(var i=0; i<this.ds_result.rowcount; i++) {
                if(this.ds_result.getColumn(i, "CHK") == "1"){
        			checkedRow.push(i);
                }
            }

        	if(checkedRow.length <= 0){
        		alert('선택된 데이터가 없습니다.');
        		return false;
        	}

        	this.ds_result.deleteMultiRows(checkedRow);
        };

        //선택
        this.btn_select_onclick = function(obj,e)
        {
        	if(this.ds_result.rowcount < 1){
        		alert("선택된 데이터가 없습니다.");
        		return;
        	}
        	var resArray = [];
        	//this.ds_result.filter("CHK==1");
        	for(var i=0; i<this.ds_result.rowcount; i++) {
        		var resData = {};
        		resData.CO_CD = this.ds_result.getColumn(i, "CO_CD");
        		resData.PRD_ID = this.ds_result.getColumn(i, "PRD_ID");
        		resData.PRD_ID_VIEW = this.ds_result.getColumn(i, "PRD_ID_VIEW");
        		resData.PRD_NM = this.ds_result.getColumn(i, "PRD_NM");
        		resData.MALL_SPR_CD = this.ds_result.getColumn(i, "MALL_SPR_CD");
        		resData.PRD_CLCD = this.ds_result.getColumn(i, "PRD_CLCD");
        		resData.FULL_PRD_CLSF_NM = this.ds_result.getColumn(i, "FULL_PRD_CLSF_NM");
        		resData.ATTR_VAL = this.ds_result.getColumn(i, "ATTR_VAL");
        		resData.MNFR_NO = this.ds_result.getColumn(i, "MNFR_NO");
        		resData.MNFR_NM = this.ds_result.getColumn(i, "MNFR_NM");
        		resData.SSP_PRD_NM = this.ds_result.getColumn(i, "SSP_PRD_NM");
        		resData.FULL_PRD_CLSF_NM = this.ds_result.getColumn(i, "FULL_PRD_CLSF_NM");
        		resData.IDDT_NM = this.ds_result.getColumn(i, "IDDT_NM");


        		resArray.push(JSON.stringify(resData));
            }
            this.close(JSON.stringify(resArray));

        };

        //row더블클릭
        this.grd_list01_oncelldblclick = function(obj,e)
        {
        	if(e.row != 0){
        		var prdid = this.ds_list.getColumn(e.row, "PRD_ID_VIEW");
        		var fRow = this.ds_result.findRowExpr("PRD_ID_VIEW=="+prdid);
        		if(fRow < 0){	//중복아닌것만
        			this.ds_list.setColumn(e.row, "CHK", 1);
        			var nRow = this.ds_result.addRow();
        			this.ds_result.copyRow(nRow, this.ds_list, e.row);
        			this.ds_result.setColumn(nRow, "CHK", 0);
        		}
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


        this.ds_result_onrowsetchanged = function(obj,e)
        {
        	this.sta_selcnt.set_text('선택건수 '+this.ds_result.rowcount+'건');
        };

        //결과창 더블크릭 액션
        this.grd_list02_oncelldblclick = function(obj,e)
        {
        	var prdid = this.ds_result.getColumn(e.row, "PRD_ID_VIEW");
        	var fRow = this.ds_list.findRowExpr("PRD_ID_VIEW=="+prdid);
        	this.ds_list.setColumn(fRow, "CHK", 0);
        	this.ds_result.deleteRow(e.row);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.grd_list01.addEventHandler("oncellclick",this.grd_list01_oncellclick,this);
            this.grd_list01.addEventHandler("oncelldblclick",this.grd_list01_oncelldblclick,this);
            this.grd_list01.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.grd_list02.addEventHandler("oncelldblclick",this.grd_list02_oncelldblclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.sta_totcnt00.addEventHandler("onclick",this.Div00_sta_totcnt00_onclick,this);
            this.ds_result.addEventHandler("onrowsetchanged",this.ds_result_onrowsetchanged,this);
        };
        this.loadIncludeScript("SSP_BO_PP_16.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
