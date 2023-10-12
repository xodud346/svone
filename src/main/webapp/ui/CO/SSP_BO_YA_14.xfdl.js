(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_14");
            this.set_titletext("프론트메뉴관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_frtMnu", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_TP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delFrtMnu", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_TP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gMallSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_frtMnuCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_TP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pageTpId", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_excelDown",null,"168","110","28","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"168","86","28","btn_excelDown:4",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"168","79","28","btn_save:4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"168","79","28","btn_del:4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("추가");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","206",null,null,"20","96",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_frtMnu");
            obj.set_autoenter("select");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_selecttype("multiarea");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\"/><Column size=\"83\"/><Column size=\"143\"/><Column size=\"83\"/><Column size=\"143\"/><Column size=\"100\"/><Column size=\"143\"/><Column size=\"112\"/><Column size=\"137\"/><Column size=\"86\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" colspan=\"2\" text=\"사업장\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"3\" colspan=\"2\" text=\"운영단위\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"5\" colspan=\"2\" text=\"프로그램\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"7\" cssclass=\"grd_WF_bg_image\" text=\"페이징유형ID\"/><Cell col=\"8\" text=\"몰구분\"/><Cell col=\"9\" text=\"사용여부\" cssclass=\"grd_WF_bg_image\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" edittype=\"expr:BZPLC_ID == undefined || dataset.getRowType(currow) == 2 ? &quot;text&quot; : &quot;none&quot; \" text=\"bind:BZPLC_ID\"/><Cell col=\"2\" expandshow=\"show\" text=\"bind:BZPLC_NM\" cssclass=\"grd_WF_left\"/><Cell col=\"3\" edittype=\"expr:OPR_UNIT_ID == undefined || dataset.getRowType(currow) == 2 ? &quot;text&quot; : &quot;none&quot; \" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"4\" text=\"bind:OPR_UNIT_NM\" displaytype=\"normal\" expandshow=\"show\" cssclass=\"grd_WF_left\"/><Cell col=\"5\" edittype=\"expr:PGM_ID == undefined || dataset.getRowType(currow) == 2 ? &quot;text&quot; : &quot;none&quot; \" text=\"bind:PGM_ID\"/><Cell col=\"6\" expandshow=\"show\" cssclass=\"grd_WF_left\" text=\"bind:PGM_NM\"/><Cell col=\"7\" displaytype=\"combotext\" edittype=\"expr:PAGE_TP_ID == undefined || dataset.getRowType(currow) == 2 ? &quot;combo&quot; : &quot;none&quot; \" text=\"bind:PAGE_TP_ID\" combodataset=\"ds_pageTpId\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"8\" text=\"bind:MALL_SPR_CD\" edittype=\"combo\" displaytype=\"combotext\" combotype=\"dropdown\" combodataset=\"ds_gMallSprCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"9\" text=\"bind:USE_YN\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_gUseYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"grd_list:36","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"138","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"92","60","26","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"92","60","26","84",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","882","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static17","20","51",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","160","24","90","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","edt_bzplcId:4","24","160","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_bzplc","edt_bzplcNm:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","882","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_useYn","Static06_00_00:10","24",null,"24","26",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_positionstep("0");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitId","591","24","90","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitNm","edt_oprUnitId:4","24","163","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_oprUnit","edt_oprUnitNm:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("프로그램ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_00","451","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_pgmId","160","55","716","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_","Static02_00:10","55",null,"24","26",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","180","370","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("(총 0건, 1 / 1)");
            obj.set_usedecorate("true");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","Div00.form.edt_pgmId","value","ds_search","PGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.edt_","value","ds_search","PGM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.cmb_useYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_bzplcId","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_bzplcNm","value","ds_search","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_oprUnitId","value","ds_search","OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_oprUnitNm","value","ds_search","OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_14.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_YA_14.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.valiGridIds = [
        	 {"name" : "사업장ID", "id" : "BZPLC_ID"}
        	,  {"name" : "사업장명", "id" : "BZPLC_NM"}
        	, {"name" : "운영단위ID", "id" : "OPR_UNIT_ID"}
        	, {"name" : "운영단위명", "id" : "OPR_UNIT_NM"}
        	, {"name" : "프로그램ID", "id" : "PGM_ID"}
        	, {"name" : "프로그램명", "id" : "PGM_NM"}
        	, {"name" : "페이지유형ID", "id" : "PAGE_TP_ID"}
        	, {"name" : "사용여부", "id" : "USE_YN"}
        ];
        this.fv_oApp = nexacro.getApplication();	//application object

        //사업장 관련
        this.searchBzplcId = "";
        this.searchBzplcNm = "";
        this.bzplcCount = 0;
        this.currentBzplcId = "";

        //운영단위 관련
        this.searchOprUnitId = "";
        this.searchOprUnitNm = "";
        this.oprUnitCount = 0;
        this.currentOprUnitId = "";

        //그리드 프로그램팝업
        this.totalPopIdCount = 0;
        this.searchPgmId = "";
        this.searchPgmNm = "";
        this.currow = -1;

        //세션정보
        this.coCd = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);

        	var oGdsUserInfo = this.fv_oApp.gds_userInfo;
        	this.coCd = oGdsUserInfo.getColumn(0, "CO_CD") == undefined  ? "1000" : oGdsUserInfo.getColumn(0, "CO_CD");

        	this.fn_commonCodeSearch();
        	this.fn_search(true, null);
        };

        this.fn_onkeyup = function(obj,e){
        	var objType = obj.getFocus();
        	if( e.keycode == 13 && objType == "[object Edit]" ){
        		var value = e.fromobject.value;

        		if(this.gfn_lengthByte(this.gfn_allTrim(value)) <= 0 && (e.fromobject.id == "edt_bzplcId" || e.fromobject.id == "edt_oprUnitId")){
        			alert("검색할 값을 입력해주세요.");
        			return;
        		}

        		if( e.fromobject.id == "edt_bzplcId" || e.fromobject.id == "edt_bzplcNm") {
        			this.ds_search.setColumn(0, "CO_CD", this.coCd);
        			this.fn_popupSearch("bzplcPop", "/co/popup/select-bzplc-popup-list.do", "ds_search=ds_search");
        		}else if( e.fromobject.id == "edt_oprUnitId" || e.fromobject.id == "edt_oprUnitNm") {
        			this.ds_search.setColumn(0, "CO_CD", this.coCd);
        			this.fn_popupSearch("oprUnitPop", "/co/popup/select-operate-popup-list.do", "ds_search=ds_search");
        		}else{
        			this.fn_search(true, null);
        		}
        	}else if(objType == "[object Edit]"){
        		if( e.fromobject.id == "edt_bzplcId") {
        			if(this.currentBzplcId != this.Div00.form.edt_bzplcId.text || e.keycode == 8 ){
        				this.Div00.form.edt_bzplcNm.set_value("");
        			}
        		}else if( e.fromobject.id == "edt_oprUnitId") {
        			if(this.currentOprUnitId != this.Div00.form.edt_oprUnitId.text || e.keycode == 8 ){
        				this.Div00.form.edt_oprUnitNm.set_value("");
        			}
        		}else{}
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(bInit, type){
        	var bReturn  = true;

        	if(type != "del" &&  this.fn_dataCheck(this.ds_frtMnu)){
        		bReturn = this.confirm("변경된 내역이 존재합니다. 조회하시겠습니까?");
        	}

        	if(bReturn == true){
        		var sSvcId = "search";
        		var sUrl = "/co/frt/select-frt-opr-unit-mnu-list.do";
        		var inDs = "ds_search=ds_search"
        		var outDs = "ds_frtMnu=ds_output1";
        		var arg;

        		if(bInit) {
        			var oPaging = this.div_paging;
        			oPaging.uPage = 1;
        			oPaging.uPageNum = 0;
        			this.ds_search.setColumn(0,"START_NUM", 0);
        			this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		}

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_gMallSprCd=ds_output1 ds_useYn=ds_output2 ds_pageTpId=ds_output3";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "MALL_SPR_CD,USE_YN,PAGE_TP_ID");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function(){
        	var pgmIdList = "";
        	var sSvcId = "save";
        	var sUrl = "/co/frt/save-frt-opr-unit-mnu-list.do";
        	var inDs = "ds_search=ds_search ds_save=ds_frtMnu:U"
        	var outDs = "";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //삭제
        this.fn_delete = function(){
        	var sSvcId = "delete";
        	var sUrl = "/co/frt/delete-frt-opr-unit-mnu-list.do";
        	var inDs = "ds_delete=ds_delFrtMnu:U"
        	var outDs = "";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //팝업 데이터 조회
        this.fn_popupSearch = function (svcId, url, inDs){
        	var sSvcId = svcId;
        	var sUrl = url;
        	var inDs = inDs;
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	switch(svcID){
        		case "search":
        			if(this.ds_frtMnu.rowcount < 1){
        				this.ds_frtMnu.copyData(this.ds_frtMnuCopy);
        			}

        			this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
        			this.grd_list.setCellProperty("head", 0, "text", "0");
        			break;
        		case "save":
        			alert("저장되었습니다.");
        			this.fn_search(true, null);
        			break;
        		case "commonCodeSearch":
        			this.ds_gUseYn.copyData(this.ds_useYn,true);
        			this.ds_useYn.insertRow(0);
        			this.ds_useYn.setColumn(0,"COM_DTL_CD_NM","전체");
        			break;
        		case "delete":
        			if(this.ds_delFrtMnu.rowcount >= 0){
        				this.grd_list.setCellProperty("head", 0,"text","0");
        			}

        			this.ds_delFrtMnu.clearData();
        			alert("삭제되었습니다.");
        			this.fn_search(true, "del");
        			break;
        		case "bzplcPop" :
        			if(this.bzplcCount == 1){
        				this.ds_search.setColumn(0, "BZPLC_ID", this.searchBzplcId);
        				this.ds_search.setColumn(0, "BZPLC_NM", this.searchBzplcNm);
        			}else{
        				this.fn_popUpCallBzplc(-1, "search");
        			}
        			break;
        		case "oprUnitPop" :
        			if(this.oprUnitCount == 1){
        				this.ds_search.setColumn(0, "OPR_UNIT_ID", this.searchOprUnitId);
        				this.ds_search.setColumn(0, "OPR_UNIT_NM", this.searchOprUnitNm);
        			}else{
        				this.fn_popUpCallOprUnit(-1, "search");
        			}
        			break;
        		case "pgmPop" :
        			this.ds_popSearch.clearData();
        			this.ds_popSearch.addRow();

        			if(this.totalPopIdCount == 1){
        				this.ds_frtMnu.setColumn(this.currow , "PGM_ID", this.searchPgmId);
        				this.ds_frtMnu.setColumn(this.currow , "PGM_NM", this.searchPgmNm);
        				this.grd_list.setCellPos(7, this.currow);
        				this.currow  = -1;
        			}else{
        				this.fn_popUpCallPgmId(this.currow);
        			}
        			break;
        		case "grdBzplcPop" :
        			this.ds_popSearch.clearData();
        			this.ds_popSearch.addRow();

        			if(this.bzplcCount == 1){
        				this.ds_frtMnu.setColumn(this.currow , "BZPLC_ID", this.searchBzplcId);
        				this.ds_frtMnu.setColumn(this.currow , "BZPLC_NM", this.searchBzplcNm);
        				this.grd_list.setCellPos(6, this.currow);
        				this.currow  = -1;
        			}else{
        				this.fn_popUpCallBzplc(this.currow, "");
        			}
        			break;
        		case "grdOprUnitPop" :
        			this.ds_popSearch.clearData();
        			this.ds_popSearch.addRow();

        			if(this.oprUnitCount == 1){
        				this.ds_frtMnu.setColumn(this.currow , "OPR_UNIT_ID", this.searchOprUnitId);
        				this.ds_frtMnu.setColumn(this.currow , "OPR_UNIT_NM", this.searchOprUnitNm);
        				this.grd_list.setCellPos(5, this.currow);
        				this.currow  = -1;
        			}else{
        				this.fn_popUpCallOprUnit(this.currow, "");
        			}
        			break;
        		default:
        			break;
        	}
        };

        //검색조건 팝업 콜백
        this.fn_popupCallback = function(sPopupId, sRetValue){
        	var resData = "";

            if(sRetValue == undefined){
                return;
            }else{
        		resData = JSON.parse(sRetValue);
        		console.log(resData);
        		trace(JSON.stringify(resData));
        	}

        	switch(sPopupId){
        		case "SSP_BO_PP_22":
        			this.ds_search.setColumn(0, "BZPLC_ID", resData.BZPLC_ID);
        			this.ds_search.setColumn(0, "BZPLC_NM", resData.BZPLC_NM);
        			break;
        		case "SSP_BO_PP_15":
        			this.ds_search.setColumn(0, "OPR_UNIT_ID", resData.OPR_UNIT_ID);
        			this.ds_search.setColumn(0, "OPR_UNIT_NM", resData.OPR_UNIT_NM);
        			break;
        		default:
        			break;
        	}
        };

        //그리드 팝업 콜백
        this.fn_grdPopupCallback = function(sPopupId, sRetValue){
        	var resData = "";

            if(sRetValue == undefined){
                return;
            }else{
        		resData = JSON.parse(sRetValue);
        		console.log(resData);
        		trace(JSON.stringify(resData));
        	}

        	switch(sPopupId){
        		case "SSP_BO_PP_22":
        			this.ds_frtMnu.setColumn(this.currow, "BZPLC_ID", resData.BZPLC_ID);
        			this.ds_frtMnu.setColumn(this.currow, "BZPLC_NM", resData.BZPLC_NM);
        			this.currow = -1;
        			break;
        		case "SSP_BO_PP_15":
        			this.ds_frtMnu.setColumn(this.currow, "OPR_UNIT_ID", resData.OPR_UNIT_ID);
        			this.ds_frtMnu.setColumn(this.currow, "OPR_UNIT_NM", resData.OPR_UNIT_NM);
        			this.currow = -1;
        			break;
        		case "SSP_BO_YA_30":
        			this.ds_frtMnu.setColumn(this.currow, "PGM_ID", resData.PGM_ID);
        			this.ds_frtMnu.setColumn(this.currow, "PGM_NM", resData.PGM_NM);
        			this.currow = -1;
        			break;
        		default:
        			break;
        	}
        };

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		this.fn_search(false, null);
        	}

        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건, "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.sta_totcnt.set_text(sTotText);
        };

        //정렬콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid = null;
        	if(sGridId == "grd_list"){
        		oSortInfo = this.grd_list.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		this.fn_search(false, null);
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        this.cfn_formInit = function(){
        	//grid 초기 설정
        	this.grd_list.uSortFlag = "false";
        	this.grd_list.uServerSortFlag = "true";
        	this.grd_list.uSortCallback = "fn_sortCallback";
        	this.grd_list.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //저장 유효성 체크
        this.fn_validationCheck = function(){

        	if(!this.fn_dataCheck(this.ds_frtMnu)){
        		alert("저장할 내용이 없습니다.");
        		return false;
        	}

        	//그리드 필수값 체크
        	var validation = this.fn_validationGrid(this.grd_list, this.valiGridIds, this.ds_frtMnu);
        	if(!validation){
        		return false;
        	}

        	return true;
        };

        //그리드 헤더 특수문자 제거
        this.gfn_removeCharValue = function(strValue){
        	var strSpecial = "~!@#$%^&*-+./=_`{|}()\\?<>▲▼";

	for (i = 0; i < strValue.length; i++) {
        		for (j = 0; j < strSpecial.length; j++) {
        			if (strValue.charAt(i) == strSpecial.charAt(j))
        			strValue = strValue.replace(strValue.charAt(i), "");
        		}
        	}

        	return strValue;
        };

        //사업장 팝업 호출
        this.fn_popUpCallBzplc = function(row, type){
        	var objParam = {};
        	var bzplcId = "";
        	var bzplcNm = "";
        	var callbackFunc ="";

        	if(type == "search"){
        		bzplcId = this.gfn_trim(this.Div00.form.edt_bzplcId.value);
        		bzplcNm = this.gfn_trim(this.Div00.form.edt_bzplcNm.value);
        		callbackFunc = "fn_popupCallback";
        	}else{
        		objParam.currow = row;
        		bzplcId = this.gfn_trim(this.ds_frtMnu.getColumn(row , "BZPLC_ID"));
        		bzplcNm = this.gfn_trim(this.ds_frtMnu.getColumn(row , "BZPLC_NM"));
        		callbackFunc = "fn_grdPopupCallback";
        	}

        	objParam.coCd  = this.coCd;
        	objParam.bzplcId  = bzplcId;
        	objParam.bzplcNm  = bzplcNm;

        	this.gfn_openPopup("SSP_BO_PP_22", "CO_POP::SSP_BO_PP_22.xfdl", objParam, callbackFunc);
        };


        //운영단위 팝업 호출
        this.fn_popUpCallOprUnit = function(row, type){
        	var objParam = {};
        	var oprUnitId = "";
        	var oprUnitNm = "";
        	var callbackFunc ="";

        	if(type == "search"){
        		oprUnitId = this.gfn_trim(this.Div00.form.edt_oprUnitId.value);
        		oprUnitNm = this.gfn_trim(this.Div00.form.edt_oprUnitNm.value);
        		callbackFunc = "fn_popupCallback";
        	}else{
        		objParam.currow = row;
        		objParam.bzplcId = this.gfn_trim(this.ds_frtMnu.getColumn(row , "BZPLC_ID"));
        		oprUnitId = this.gfn_trim(this.ds_frtMnu.getColumn(row , "OPR_UNIT_ID"));
        		oprUnitNm = this.gfn_trim(this.ds_frtMnu.getColumn(row , "OPR_UNIT_NM"));
        		callbackFunc = "fn_grdPopupCallback";
        	}

        	objParam.coCd  = this.coCd;
        	objParam.oprUnitId  = oprUnitId;
        	objParam.oprUnitNm  = oprUnitNm;
        	this.gfn_openPopup("SSP_BO_PP_15", "CO_POP::SSP_BO_PP_15.xfdl", objParam, callbackFunc);
        };

        //프로그램팝업
        this.fn_popUpCallPgmId = function(row){
        	var objParam = {};
        	objParam.currow = row;
        	objParam.pgmId = this.gfn_trim(this.ds_frtMnu.getColumn(row , "PGM_ID"));
        	objParam.pgmNm = this.gfn_trim(this.ds_frtMnu.getColumn(row , "PGM_NM"));
        	objParam.type = "frtOprUnit";
        	this.gfn_openPopup("SSP_BO_YA_30", "CO_POP::SSP_BO_YA_30.xfdl", objParam, "fn_grdPopupCallback");
        };


        this.fn_dataCheck = function(dataset){
        	var dataChk = false;
        	var arrayIds = dataset.colinfos._idArray;

        	if( dataset.rowcount <= 0 ) {
        		dataChk = false;
        	} else {
        		for(var i = 0; i < dataset.rowcount; i++){
        			var sRowType = dataset.getRowType(i);

        			if( sRowType == 2 || sRowType == 4 ){

        				var orgIdx = dataset._rawRecords[i]._orgidx;
        				for( var idx in arrayIds ){
        					var id = arrayIds[idx];
        					var value = dataset.getColumn(i, id);
        					var originValue = dataset.getOrgColumn(i, id);

        					// 값이 없을 시 undefined가 넘어옴.
        					if( originValue == undefined ) originValue = "";
        					//orgIdx 값이 없는 경우는 신규임.
        					if( orgIdx == undefined ) {
        						dataChk = true;
        					} else if( value != undefined ) {	// 존재할때
        						if( id.indexOf("CHK") == -1 && (value.toString() != originValue.toString()) ) {	// 체크박스 제외 및 값 비교
        							dataChk = true;
        						}
        					}
        				}
        			}
        		}
        	}
        	return dataChk;
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회 click  이벤트
        this.btn_search_onclick = function(obj,e){
        	this.fn_search(true, null);
        };

        //추가 click 이벤트
        this.btn_add_onclick = function(obj,e){
        	var nRow = this.ds_frtMnu.addRow();
        	this.ds_frtMnu.setColumn(nRow, "USE_YN", "Y");
        	this.grd_list.setCellPos(1);
        	this.grd_list.showEditor(true);
        };

        //삭제 click 이벤트
        this.btn_del_onclick = function(obj,e){
        	var delArr = [];
        	var chkCnt = this.ds_frtMnu.getCaseCount("CHK == 1");
        	var nRowType = "";
        	var delArr = [];

        	if(chkCnt == 0){
        		alert("삭제할 데이터를 선택해주세요.");
        		return;
        	}

        	var sReturn = this.confirm("선택한 데이터를 삭제하시겠습니까?");
        	if(sReturn == true){
        		for(var i=0; i < this.ds_frtMnu.rowcount; i++){
        			if(this.ds_frtMnu.getColumn(i, "CHK") == 1){
        				nRowType = this.ds_frtMnu.getRowType(i);
        				if(nRowType == Dataset.ROWTYPE_INSERT){
        					delArr.push(i);
        				}else{
        					var nRow = this.ds_delFrtMnu.addRow();
        					this.ds_delFrtMnu.copyRow(nRow, this.ds_frtMnu, i);
        				}
        			}
        		}

        		this.ds_frtMnu.deleteMultiRows(delArr);
        		if(this.ds_delFrtMnu.rowcount > 0){
        			this.fn_delete();
        		}else{
        			this.grd_list.setCellProperty("head", 0,"text","0");
        		}
        	}
        };

        //저장 click 이벤트
        this.btn_save_onclick = function(obj,e){
        	if(this.fn_validationCheck()){
        		var sReturn = this.confirm("저장하시겠습니까?");
        		if(sReturn == true){
        			this.fn_save();
        		}
        	}
        };

        //엑셀 click 이벤트
        this.btn_excelDown_onclick = function(obj,e)
        {
        	alert("엑셀다운로드");
        };

        //enterkey 입력시 다음 cell로 이동
        this.grd_list_onkeyup = function(obj,e){
        	var cellIdx = obj.currentcol;
        	var currow = obj.currentrow;
        	var curValue = obj.getEditValue();

        	if(e.keycode == 13){
        		obj.moveToNextCell();
        		return;
        	}

        	if(cellIdx == 5){
        		var pgmId = this.ds_frtMnu.getOrgColumn(currow, "PGM_ID");
        		if(curValue != pgmId  || e.keycode == 8 ){
        			this.ds_frtMnu.setColumn(currow,  "PGM_NM", "");
        		}
        	}else if(cellIdx == 1){
        		//사업장 수정되면 운영단위에 입력한 값도 같이 RESET. 운영단위는 사업장 기준으로 데이터를 조회함.
        		var bzplcId = this.ds_frtMnu.getOrgColumn(currow, "BZPLC_ID");
        		if(curValue != bzplcId  || e.keycode == 8 ){
        			this.ds_frtMnu.setColumn(currow,  "BZPLC_NM", "");
        			this.ds_frtMnu.setColumn(currow,  "OPR_UNIT_ID", "");
        			this.ds_frtMnu.setColumn(currow,  "OPR_UNIT_NM", "");
        		}
        	}else if(cellIdx == 3){
        		var oprUnitId = this.ds_frtMnu.getOrgColumn(currow, "OPR_UNIT_ID");
        		if(curValue != oprUnitId  || e.keycode == 8 ){
        			this.ds_frtMnu.setColumn(currow,  "OPR_UNIT_NM", "");
        		}
        	}
        };

        this.Div00_btn_clear_onclick = function(obj,e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.Div00.form.cmb_useYn.set_index(0);
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        	var displayType = this.grd_list.getCellProperty("body", e.col, "displaytype");

        	if(displayType == "combotext"){
        		obj.dropdownCombo();
        	}

        	if(e.col == 1 || e.col == 3 || e.col == 5){
        		var cellText = obj.getCellText(e.row, e.cell);
        		if(cellText != undefined){
        			obj.setEditSelect(cellText.length, cellText.length);
        		}
        	}

        	var rowType = this.ds_frtMnu.getRowType(e.row);
        	if(rowType == 2 && e.clickitem != "expandbutton"){
        		//프로그램
        		if(e.col == 6) {
        			this.currow  = e.row;
        			this.fn_popUpCallPgmId(e.row);
        		//사업장
        		}else if(e.col == 2) {
        			this.currow  = e.row;
        			this.fn_popUpCallBzplc(this.currow, "");
        		//운영단위
        		}else if(e.col == 4) {
        			if(this.gfn_lengthByte(this.gfn_allTrim(this.ds_frtMnu.getColumn(e.row , "BZPLC_NM"))) <= 0){
        				alert("사업장을 입력한 후 조회해주세요");
        				this.grd_list.setCellPos(1, e.row);
        				return;
        			}

        			this.currow  = e.row;
        			this.fn_popUpCallOprUnit(this.currow, "");
        		}
        	}
        };

        //사업장 버튼 클릭
        this.btn_bzplc_onclick = function(obj,e)
        {
        	this.fn_popUpCallBzplc(-1, "search");
        };


        //운영단위 버튼 클릭
        this.btn_oprUnit_onclick = function(obj,e)
        {
        	this.fn_popUpCallOprUnit(-1, "search");
        };

        //그리드 확장버튼 클릭
        this.grd_list_onexpandup = function(obj,e)
        {
        	var objParam = {};
        	var rowType = this.ds_frtMnu.getRowType(e.row);

        	if(rowType == 2 ){
        		objParam.currow = e.row;
        		//프로그램
        		if(e.col == 6){
        			this.currow  = e.row;
        			this.fn_popUpCallPgmId(e.row);
        		//사업장
        		}else if( e.col == 2){
        			this.currow  = e.row;
        			this.fn_popUpCallBzplc(e.row, "");
        		//운영단위
        		}else if( e.col == 4){
        			if(this.gfn_lengthByte(this.gfn_allTrim(this.ds_frtMnu.getColumn(e.row , "BZPLC_NM"))) <= 0){
        				alert("사업장을 입력한 후 조회해주세요");
        				this.grd_list.setCellPos(1, e.row);
        				return;
        			}
        			this.currow  = e.row;
        			this.fn_popUpCallOprUnit(e.row, "");
        		}
        	}
        };

        //그리드 enter키
        this.grd_list_onenterdown = function(obj,e)
        {
        	var objParam = {};
        	objParam.currow = e.row;

        	if(e.col == 1 || e.col == 3 || e.col == 5){
        		if(e.col == 3){
        			if(this.gfn_lengthByte(this.gfn_allTrim(this.ds_frtMnu.getColumn(e.row , "BZPLC_NM"))) <= 0){
        				alert("사업장을 입력한 후 조회해주세요");
        				this.grd_list.setCellPos(1, e.row);
        				return;
        			}
        		}

        		if(this.gfn_lengthByte(this.gfn_allTrim(e.value)) <= 0 ){
        			alert("검색할 데이터를 입력해주세요.");
        			this.grd_list.setCellPos(e.col, e.row);
        			return;
        		}
        	}

        	//프로그램
        	if(e.col == 5){
        		this.currow  = e.row;
        		this.ds_popSearch.setColumn(0, "PGM_ID" , e.value);
        		//this.ds_popSearch.setColumn(0, "CALL_TYPE" , "frtOprUnit");
        		this.fn_popupSearch("pgmPop", "/co/frt/select-frt-pgm-popup-list.do", "ds_search=ds_popSearch");
        	//사업장
        	}else if(e.col == 1){
        		this.currow  = e.row;
        		this.ds_popSearch.setColumn(0, "BZPLC_ID" , e.value);
        		this.fn_popupSearch("grdBzplcPop", "/co/popup/select-bzplc-popup-list.do", "ds_search=ds_popSearch");
        	//운영단위
        	}else if(e.col == 3){
        		this.currow  = e.row;
        		this.ds_popSearch.setColumn(0, "OPR_UNIT_ID" , e.value);
        		this.fn_popupSearch("grdOprUnitPop", "/co/popup/select-operate-popup-list.do", "ds_search=ds_popSearch");
        	}
        };

        //검색조건 변경시
        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "BZPLC_ID"){
        		this.currentBzplcId  = e.newvalue;
        	}else if(e.columnid == "OPR_UNIT_ID"){
        		this.currentOprUnitId = e.newvalue;
        	}
        };

        this.ds_frtMnu_oncolumnchanged = function(obj,e)
        {
        	//사업장 ID가 변경되었으면 운영단위 초기화
        	if(e.columnid == "BZPLC_ID"){
        		if(e.oldvalue != undefined && (e.oldvalue != e.newvalue)){
        			this.ds_frtMnu.setColumn(e.row, "OPR_UNIT_ID", "");
        			this.ds_frtMnu.setColumn(e.row, "OPR_UNIT_NM", "");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.grd_list.addEventHandler("onkeyup",this.grd_list_onkeyup,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.grd_list.addEventHandler("onexpandup",this.grd_list_onexpandup,this);
            this.grd_list.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_clear.addEventHandler("onclick",this.Div00_btn_clear_onclick,this);
            this.Div00.form.edt_bzplcId.addEventHandler("onkeydown",this.edt_bzplcId_onkeydown,this);
            this.Div00.form.edt_bzplcId.addEventHandler("onchanged",this.Div00_edt_bzplcId_onchanged,this);
            this.Div00.form.btn_bzplc.addEventHandler("onclick",this.btn_bzplc_onclick,this);
            this.Div00.form.edt_oprUnitId.addEventHandler("onkeydown",this.edt_oprUnitId_onkeydown,this);
            this.Div00.form.btn_oprUnit.addEventHandler("onclick",this.btn_oprUnit_onclick,this);
            this.ds_frtMnu.addEventHandler("cancolumnchange",this.ds_frtMnu_cancolumnchange,this);
            this.ds_frtMnu.addEventHandler("oncolumnchanged",this.ds_frtMnu_oncolumnchanged,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
            this.ds_frtMnuCopy.addEventHandler("cancolumnchange",this.ds_pgmGrpInfo_cancolumnchange,this);
        };
        this.loadIncludeScript("SSP_BO_YA_14.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
