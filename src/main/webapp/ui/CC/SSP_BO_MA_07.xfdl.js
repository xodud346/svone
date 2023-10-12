(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MA_07");
            this.set_titletext("부서조회 목록");
            this.set_accessibilityrole("combobox");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_deptList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"10\"/><Column id=\"LVL\" type=\"STRING\" size=\"10\"/><Column id=\"CCO_DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"150\"/><Column id=\"BGT_OVER_YN\" type=\"STRING\" size=\"150\"/><Column id=\"BGT_TRANSF_YN\" type=\"STRING\" size=\"150\"/><Column id=\"HRNK_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"HRNK_DEPT_NM\" type=\"STRING\" size=\"150\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"150\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pageOpt", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_VALUE\">20</Col><Col id=\"COL_NM\">20개씩</Col></Row><Row><Col id=\"COL_VALUE\">50</Col><Col id=\"COL_NM\">50개씩</Col></Row><Row><Col id=\"COL_VALUE\">100</Col><Col id=\"COL_NM\">100개씩</Col></Row><Row><Col id=\"COL_VALUE\">10000</Col><Col id=\"COL_NM\">10,000개씩</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYnOpt", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_VALUE\">S</Col><Col id=\"COL_NM\">선택</Col></Row><Row><Col id=\"COL_VALUE\">Y</Col><Col id=\"COL_NM\">사용</Col></Row><Row><Col id=\"COL_VALUE\">N</Col><Col id=\"COL_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"eDEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eBZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eOPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/><Column id=\"DOWN_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"DB_WRK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_ID\"/><Col id=\"BZPLC_ID\"/><Col id=\"OPR_UNIT_ID\"/><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deptListOut", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_SRT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CCO_DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"150\"/><Column id=\"BGT_OVER\" type=\"STRING\" size=\"150\"/><Column id=\"BGT_TRANSF\" type=\"STRING\" size=\"150\"/><Column id=\"HRNK_DEPT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"HRNK_DEPT_NM\" type=\"STRING\" size=\"150\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"150\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCodeSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"32\"/><Column id=\"langCd\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn2", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"129","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","20",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31","20","51",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","20","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_deptId","159","24","221","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","882","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","448","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_deptMulti","edt_deptId:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","Static04_00:10","24","221","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_bzpMulti","edt_bzplcId:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_useYn","160","55","221","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_text("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_deptMultiText","btn_deptMulti:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_bzpMultiText","btn_bzpMulti:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitId","Static04:10","24","221","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_oprMulti","edt_oprUnitId:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_oprMultiText","btn_oprMulti:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"Static31:10","60","28","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"Static31:10","60","28","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_allExcel",null,"Static31:10","100","28","btn_reset:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","20","Div00:20",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","0","626",null,"38","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_page",null,"0","110","28","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_pageOpt");
            obj.set_datacolumn("COL_NM");
            obj.set_codecolumn("COL_VALUE");
            obj.set_text("");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_layoutClear",null,"0","110","28","228",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("레이아웃 초기화");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"0","100","28","btn_layoutClear:4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("레이아웃 저장");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"0","110","28","cbo_page:4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_allInput",null,"0","70","28","btn_layoutSave:4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("일괄등록");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_deptCopy",null,"0","70","28","btn_allInput:4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("부서복사");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_deptCreate",null,"0","70","28","btn_deptCopy:4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("부서생성");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_saveAll",null,"0","87","28","btn_deptCreate:4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("일괄상태변경");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_setUseYn",null,"0","87","28","btn_saveAll:4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_useYnOpt");
            obj.set_datacolumn("COL_NM");
            obj.set_codecolumn("COL_VALUE");
            obj.set_text("");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_totCount","0","11","200","25",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","20","Div00:58",null,"558","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_deptList");
            obj.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");
            obj.set_selecttype("area");
            obj.set_font("12px/normal \"Arial\",\"맑은고딕\"");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"38\"/><Column size=\"77\"/><Column size=\"51\"/><Column size=\"71\"/><Column size=\"74\"/><Column size=\"228\"/><Column size=\"58\"/><Column size=\"58\"/><Column size=\"80\"/><Column size=\"136\"/><Column size=\"75\"/><Column size=\"136\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"고객 구분\"/><Cell col=\"3\" text=\"부서 레벨\"/><Cell col=\"4\" text=\"부서 코드\"/><Cell col=\"5\" text=\"부서 ID\"/><Cell col=\"6\" text=\"부서명\"/><Cell col=\"7\" text=\"예산 초과\"/><Cell col=\"8\" text=\"예산 이체\"/><Cell col=\"9\" text=\"상위 부서 ID\"/><Cell col=\"10\" text=\"상위 부서명\"/><Cell col=\"11\" text=\"운영단위 ID\"/><Cell col=\"12\" text=\"운영단위명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:USE_YN\" combodataset=\"ds_useYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" displaytype=\"combotext\"/><Cell col=\"2\" text=\"bind:CUST_SPR\" displaytype=\"combotext\" combodataset=\"ds_custSprCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"3\" text=\"bind:LVL\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:CCO_DEPT_CD\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:DEPT_ID\" textDecoration=\"underline\" color=\"blue\"/><Cell col=\"6\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:BGT_OVER_YN\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_useYn2\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"8\" text=\"bind:BGT_TRANSF_YN\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_useYn2\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"9\" text=\"bind:HRNK_DEPT_ID\"/><Cell col=\"10\" text=\"bind:HRNK_DEPT_NM\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"12\" text=\"bind:OPR_UNIT_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","cmb_useYn2","text","ds_useYn2","COL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div01.form.cbo_setUseYn","text","ds_useYnOpt","COL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.cbo_useYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_deptId","value","ds_search","eDEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_bzplcId","value","ds_search","eBZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_oprUnitId","value","ds_search","eOPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div01.form.cbo_page","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_07.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_07.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_07.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_07.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP-BO
          CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//검색 영역 최소size 적용
        	this.Div00.set_height(this.Div00.uMinSize);
        	this.resetScroll();

        	this.copyPaste.addGrid(this.grd_mainList);
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//공통코드 조회
        	this.fn_commonCodeSearch = function(){
        		this.ds_comCodeSearch.setColumn(0, "codeList", "CUST_SPR_CD,USE_YN,USE_YN");
        		this.ds_comCodeSearch.setColumn(0, "langCd", "KO");
        		var sSvcId = "commonCodeSearch";
        		var sUrl = "/co/select-common-code-list.do";
        		var inDs = "ds_search=ds_comCodeSearch";
        		var outDs = "ds_custSprCd=ds_output1 ds_useYn=ds_output2 ds_useYn2=ds_output2";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        	//조회
        	this.fn_search = function(page)	{
        		var sSvcId = "selectCustDept";
        		var sUrl = "/bo/cust/dept/select-cust-dept.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_deptList=ds_output1";
        		var arg = "";
        		var callback = "fn_received";

        		// 조회버튼 클릭시 페이징 초기화 시킨다.
        		if( page == 0 ) {
        			this.Div01.form.div_paging.uPage=1;
        			this.Div01.form.div_paging.uPageNum=0;
        			this.ds_search.setColumn(0,"START_NUM", 0);
        		}

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        	};

        	//일괄상태저장
        	this.fn_saveAllState = function(){
        		var sSvcId = "saveCustGrdList";
        		var sUrl = "/bo/cust/dept/save-cust-dept-state.do";
        		var inDs = "ds_save=ds_deptListOut";
        		var outDs = "";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        	// 대용량다운로드
        	this.fn_allExcelDownload = function(){
        		var sSvcId = "allExcelDownload";
        		var sUrl = "/bo/cust/dept/select-all-excel-download.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		if(svcID == "commonCodeSearch"){
        			this.ds_custSprCd.insertRow(0);
        			this.ds_custSprCd.setColumn(0,"COM_DTL_CD_NM","전체");
        			this.ds_useYn.insertRow(0);
        			this.ds_useYn.setColumn(0,"COM_DTL_CD_NM","전체");
        		}else if(svcID == "saveCustGrdList"){
        			if(errorCode == -1 || errorCode == -100){
        				//alert(this.fn_getMessageOnServer(errorMsg));
        			}else{
        				alert(this.fn_getMessage("ERRC000079")); // 저장되었습니다.
        				this.fn_search();
        			}
        		}else if(svcID == "allExcelDownload"){
        			if(errorCode == -1 || errorCode == -100){
        				//alert(this.fn_getMessageOnServer(errorMsg));
        			}
        		}
        	};

        	this.fn_callBackForSearch = function(){
        		this.fn_search();
        	}

        	//조회 트랜잭션 콜백함수
        	this.fn_received = function(svcID, errorCode, errorMsg)	{
        		if( this.ds_deptList.rowcount == 0 ) {
        			this.grd_mainList.set_nodatatext("조회 결과가 없습니다.");
        		}

        		this.totalCount = 0;
        		if(this.ds_deptList.getRowCount() > 0) {
        			this.totalCount = this.ds_deptList.getColumn(0,"TOT_CUNT");
        		}

        		//paging 처리
        		this.Div01.form.div_paging.form.cfn_createPage(this.Div01.form.div_paging, this.totalCount, this.Div01.form.cbo_page.value, "fn_pageCallback");
        	}

        	this.fn_pageCallback = function(sFlag){
        		var oPaging = this.Div01.form.div_paging;
        		if(sFlag){
        			this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
        			this.ds_search.setColumn(0,"ROW_COUNT",this.Div01.form.cbo_page.value);
        			this.fn_search();
        		}

        		var sTotText = "(<b v='true'>총 "+ this.gfn_appendComma(oPaging.uTotCount)+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        		this.Div01.form.sta_totCount.set_text(sTotText);
        	};

        	this.fn_sortCallback = function(sGridId){
        		var oGrid=null;
        		if(sGridId == "grd_mainList"){
        			oSortInfo = this.grd_mainList.uaSortInfo;
        			this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        			this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        			this.fn_search();
        		}
        	};

        	// 멀티팝업버튼 클릭 콜백
        	this.fn_popupCallback = function(sPopupId, sRetValue){
        		switch(sPopupId){
        			case "btn_deptMulti":
        				const deptObj = JSON.parse(sRetValue);

        				var sIdList = "";
        				var sNmList = "";
        				for(var i=0; i<deptObj.length; i++){
        					var rowData = JSON.parse(deptObj[i]);
        					sIdList += rowData.DEPT_ID +",";
        				}
        				this.ds_search.setColumn(0,"DEPT_ID", deptObj.length);
        				this.Div00.form.edt_deptId.set_value(sIdList.replace(/,\s*$/, ""));
        				break;

        			case "btn_bzpMulti":
        				const cmpObj = JSON.parse(sRetValue);

        				var sIdList = "";
        				var sNmList = "";
        				for(var i=0; i<cmpObj.length; i++){
        					var rowData = JSON.parse(cmpObj[i]);
        					sIdList += rowData.BZPLC_ID +",";
        				}
        				this.ds_search.setColumn(0,"BZPLC_ID", cmpObj.length);
        				this.Div00.form.edt_bzplcId.set_value(sIdList.replace(/,\s*$/, ""));
        				break;

        			case "btn_oprMulti":
        				const oprObj = JSON.parse(sRetValue);

        				var sIdList = "";
        				var sNmList = "";
        				for(var i=0; i<oprObj.length; i++){
        					var rowData = JSON.parse(oprObj[i]);
        					sIdList += rowData.OPR_UNIT_ID +",";
        				}
        				this.ds_search.setColumn(0,"OPR_UNIT_ID", oprObj.length);
        				this.Div00.form.edt_oprUnitId.set_value(sIdList.replace(/,\s*$/, ""));
        				break;

        			case "SSP_BO_MA_07;DEPT_ID":
        				var resData = JSON.parse(sRetValue);
        				var rtnData = "";
        				var sIdList = "";
        				for(var i = 0; i < resData.length; i++) {
        					rtnData = JSON.parse(resData[i]);
        					sIdList += rtnData.VALUE +",";
        				}
        				this.Div00.form.edt_deptId.set_value(sIdList);
        				this.fn_setMSearch(this.name,"DEPT_ID",sIdList);
        				break;

        			case "SSP_BO_MA_07;BZPLC_ID":
        				var resData = JSON.parse(sRetValue);
        				var rtnData = "";
        				var sIdList = "";
        				for(var i = 0; i < resData.length; i++) {
        					rtnData = JSON.parse(resData[i]);
        					sIdList += rtnData.VALUE +",";
        				}
        				this.Div00.form.edt_bzplcId.set_value(sIdList);
        				this.fn_setMSearch(this.name,"BZPLC_ID",sIdList);
        				break;

        			case "SSP_BO_MA_07;OPR_UNIT_ID":
        				var resData = JSON.parse(sRetValue);
        				var rtnData = "";
        				var sIdList = "";
        				for(var i = 0; i < resData.length; i++) {
        					rtnData = JSON.parse(resData[i]);
        					sIdList += rtnData.VALUE +",";
        				}
        				this.Div00.form.edt_oprUnitId.set_value(sIdList);
        				this.fn_setMSearch(this.name,"OPR_UNIT_ID",sIdList);
        				break;

        		}
        	}

        	//멀티텍스트팝업 콜백함수
        	this.fn_multiTextPopupCallback = function(objID, rtnValue)
        	{
        		var resParam = JSON.parse(rtnValue);
        		if(objID == 'btn_deptMultiText'){
        			this.Div00.form.edt_deptNm.set_value(resParam.textValue);
        			this.ds_search.setColumn(0,"DEPT_ID", resParam.textValue);
        		}
        		if(objID == 'btn_bzpMultiText'){
        			this.Div00.form.edt_bzplcNm.set_value(resParam.textValue);
        			this.ds_search.setColumn(0,"BZPLC_ID", resParam.textValue);
        		}
        		if(objID == 'btn_oprMultiText'){
        			this.Div00.form.edt_oprUnitNm.set_value(resParam.textValue);
        			this.ds_search.setColumn(0,"OPR_UNIT_ID", resParam.textValue);
        		}
        	}

        	this.fn_detailPopupCallback = function(objID, rtnValue)
        	{
        		this.fn_search();
        	}

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        	//화면 설정 함수
        	this.cfn_formInit = function(){
        		//search div 초기 설정
        		this.Div00.uMinSize = 130;
        		this.Div00.uMaxSize = 157;

        		//grid 초기 설정
        		this.grd_mainList.uSortFlag = "false";
        		this.grd_mainList.uServerSortFlag = "true";
        		this.grd_mainList.uSortCallback = "fn_sortCallback";
        		this.grd_mainList.uCellSizeType = "true";

        		//페이징 초기 설정
        		this.Div01.form.div_paging.uPage = 1;
        		this.Div01.form.div_paging.uPageNum = 0;
        		this.Div01.form.div_paging.uPageRowCnt = 10;
        		this.Div01.form.div_paging.uPageCnt = 0;
        		this.Div01.form.div_paging.uTotCount = 0;

        		//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        		this.uGridList = "grd_mainList";
        		this.grd_mainList.uRightMouse = "true";
        		this.grd_mainList.uPersonalFlag = "true";
        		this.grd_mainList.uDefaultFormat = "CHK,USE_YN,CUST_SPR,LVL,CCO_DEPT_CD,DEPT_ID,DEPT_NM,BGT_OVER_YN,BGT_TRANSF_YN,HRNK_DEPT_ID,HRNK_DEPT_NM,OPR_UNIT_ID,OPR_UNIT_NM";
        	};

        	this.cfn_personalPopupClose = function(sRet){
        		this.grd_mainList.set_formats(sRet);
        		this.pdiv_personal.closePopup();
        	};

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        	//조회 버튼 click  이벤트
        	this.btn_search_onclick = function(obj,e)
        	{
        		// 화면ID set
        		this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);

        		var bzplcStr = this.Div00.form.edt_bzplcId.value;
        		var oprStr = this.Div00.form.edt_oprUnitId.value;
        		var deptStr = this.Div00.form.edt_deptId.value;

        		// edt 입력 기준으로 조회조건 다시 세팅
        		if(bzplcStr!="" && bzplcStr!=null){
        			this.fn_setMSearch(this.name,"BZPLC_ID",bzplcStr);
        		}else{
        			this.ds_search.setColumn(0, "BZPLC_ID", null);
        		}

        		if(oprStr!="" && oprStr!=null){
        			this.fn_setMSearch(this.name,"OPR_UNIT_ID",oprStr);
        		}else{
        			this.ds_search.setColumn(0, "OPR_UNIT_ID", null);
        		}

        		if(deptStr!="" && deptStr!=null){
        			this.fn_setMSearch(this.name,"DEPT_ID",deptStr);
        		}else{
        			this.ds_search.setColumn(0, "DEPT_ID", null);
        		}

        		this.Div01.form.div_paging.uPage = 1;
        		this.ds_search.setColumn(0, "START_NUM", 0);

        		// 조회
        		if(this.ds_select.getRowCount() <= 0 ){
        			this.fn_search();
        		}
        		else{
        			this.fn_insertSelectedData("fn_callBackForSearch");
        		}
        	};

        	// 엑셀다운로드
        	this.btn_excel_onclick = function(obj,e)
        	{
        		this.ofn_exportExcel({form:this, grid:this.grd_mainList, fileName:"부서목록"});
        	};

        	// 초기화
        	this.btn_reset_onclick = function(obj,e)
        	{
        		this.Div00.form.cbo_useYn.set_value(null);

        		this.ds_search.setColumn(0,"DEPT_ID", '');
        		this.ds_search.setColumn(0,"BZPLC_ID", '');
        		this.ds_search.setColumn(0,"OPR_UNIT_ID", '');

        		this.ds_search.setColumn(0, "eBZPLC_ID", "");
        		this.ds_search.setColumn(0, "eOPR_UNIT_ID", "");
        		this.ds_search.setColumn(0, "eDEPT_ID", "");

        		this.Div01.form.cbo_setUseYn.set_value('S');
        	};

        	// 일괄저장
        	this.btn_saveAll_onclick = function(obj,e)
        	{
        		var chkStr = this.ds_deptList.getCaseCount("CHK>0");
        		if(chkStr < 1){
        			alert(this.fn_getMessage("ERRC000050", "항목")); // 선택된 항목이 없습니다.
        			return;
        		}

        		var allState = this.Div01.form.cbo_setUseYn.value;
        		if ( allState != "Y" && allState != "N" ){
        			alert(this.fn_getMessage("ERRC000073")); // 일괄변경할 상태를 골라주세요.
        			return;
        		}

        		if(!this.confirm(this.fn_getMessage("ERRC000080"))){
        			//정말로 저장하시겠습니까?
        			return;
        		}

        		this.ds_deptListOut.clearData();

        		for(var i=0; i<this.ds_deptList.rowcount; i++){
        			if(this.ds_deptList.getColumn(i, "CHK") == 1){
        				var row = this.ds_deptListOut.addRow();
        				this.ds_deptListOut.copyRow(row, this.ds_deptList, i);
        				this.ds_deptListOut.setColumn(row, "USE_YN", allState);
        			}
        		}

        		this.fn_saveAllState();
        	};


        	// 부서생성
        	this.btn_deptCreate_onclick = function(obj,e)
        	{
        		var objParam = { type:"new" };
        		this.gfn_openPopup("CustDeptDetailPop", "CC::SSP_BO_MA_08.xfdl", objParam, "fn_detailPopupCallback", {title:"부서 생성", titlebar:"true"});
        	};

        	// 부서복사
        	this.btn_deptCopy_onclick = function(obj,e)
        	{
        		var chkStr = this.ds_deptList.getCaseCount("CHK>0");
        		if(chkStr < 1){
        			alert(this.fn_getMessage("ERRC000050", "항목")); // 선택된 항목이 없습니다.
        			return;
        		}else if(chkStr > 1){
        			alert(this.fn_getMessage("ERRC000094")); // 하나의 항목만 선택하세요.
        			return;
        		}

        		for(var i=0; i<this.ds_deptList.rowcount; i++){
        			if(this.ds_deptList.getColumn(i, "CHK") == 1){
        				var objParam = {
        					type:"copy"
        					, coCd:this.ds_deptList.getColumn(i, "CO_CD")
        					, bzplcId:this.ds_deptList.getColumn(i, "BZPLC_ID")
        					, deptId:this.ds_deptList.getColumn(i, "DEPT_ID")
        					, oprUnitId:this.ds_deptList.getColumn(i, "OPR_UNIT_ID")
        				};
        				this.gfn_openPopup("CustDeptDetailPop", "CC::SSP_BO_MA_08.xfdl", objParam, "fn_detailPopupCallback", {title:"부서 복사", titlebar:"true"});
        			}
        		}
        	};


        	// 일괄등록
        	this.btn_allInput_onclick = function(obj,e)
        	{
        		var param = {pgmId : "SSP_BO_MA_07"};
        		var options = {};
        		options.title = "부서 일괄등록";
        		this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param, "fn_callBackForSearch", options);
        	};

        	// 멀티팝업
        	this.multiPopOpen_onclick = function(obj,e)
        	{
        		var oArg = { coCd : '1000' };
        		var oOption = { titlebar: 'true' };

        		if(e.fromobject.id == 'btn_deptMulti'){
        			oArg.bzplcId = this.Div00.form.edt_bzplcId.value;
        			oArg.oprUnitId = this.Div00.form.edt_oprUnitId.value;
        			oArg.deptId = this.Div00.form.edt_deptId.value;
        			oOption.title = '부서 조회';
        			this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_PP_37.xfdl", oArg, "fn_popupCallback", oOption);
        		}
        		if(e.fromobject.id == 'btn_bzpMulti'){
        			oArg.bzplcId = this.Div00.form.edt_bzplcId.value;
        			oOption.title = '사업장 조회';
        			this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_14.xfdl", oArg, "fn_popupCallback", oOption);
        		}
        		if(e.fromobject.id == 'btn_oprMulti'){
        			oArg.bzplcId = this.Div00.form.edt_bzplcId.value;
        			oArg.oprUnitId = this.Div00.form.edt_oprUnitId.value;
        			oOption.title = '운영단위 조회';
        			this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", oArg, "fn_popupCallback", oOption);
        		}
        	};


        	//멀티 텍스트 팝업
        	this.multipleTextBtn_onclick = function(obj,e)
        	{
        		if(e.fromobject.id == 'btn_deptMultiText'){
        			//부서
        			this.fn_showTareaInput(this.name,"DEPT_ID",this.Div00.form.edt_deptId.value, "fn_popupCallback",120,300);
        		}
        		if(e.fromobject.id == 'btn_bzpMultiText'){
        			//사업장
        			this.fn_showTareaInput(this.name,"BZPLC_ID",this.Div00.form.edt_bzplcId.value, "fn_popupCallback",120,300);
        		}
        		if(e.fromobject.id == 'btn_oprMultiText'){
        			//운영단위
        			this.fn_showTareaInput(this.name,"OPR_UNIT_ID",this.Div00.form.edt_oprUnitId.value, "fn_popupCallback",160,300);
        		}
        	};

        	// 그리드 부서ID 클릭 시 상세보기
        	this.grd_mainList_oncellclick = function(obj,e)
        	{
        		this.columnRow = e.row;
        		this.columnId = this.getBindColumnIDByIndex(obj, e.cell); // 클릭한 그리드 칼럼의 ID
        		if(this.columnId == "DEPT_ID"){
        			var opts = { title : '부서 상세조회', titlebar: 'true' }
        			var objParam = {
        				coCd:this.ds_deptList.getColumn(this.columnRow, "CO_CD")
        				, bzplcId:this.ds_deptList.getColumn(this.columnRow, "BZPLC_ID")
        				, deptId:this.ds_deptList.getColumn(this.columnRow, "DEPT_ID")
        				, oprUnitId:this.ds_deptList.getColumn(this.columnRow, "OPR_UNIT_ID")
        			};
        			this.gfn_openPopup("CustDeptDetailPop", "CC::SSP_BO_MA_10.xfdl", objParam, "fn_detailPopupCallback", opts);
        		}
        	};

        	this.Div01_cbo_page_onitemchanged = function(obj,e)
        	{
        		this.fn_search();
        	};

        	this.Div00_btn_allExcel_onclick = function(obj,e) {
        //		this.gfn_openPopup("pwdSetPopup", "CO_POP::pwdSetPopup.xfdl", null, "fn_excelDownloadPwdCallback");

        		if(this.confirm('대용량 다운로드를 실행하시겠습니까?')){
        			this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_excelDownloadPwdCallback");
        		}
        	}

        	//엑셀 대용량 다운로드 호출
        	this.fn_excelDownloadPwdCallback = function(objId, ret){
        		var answr = ret.split("||||");

        		if(this.gfn_isNull(answr)) return;
        		this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        		// 화면ID set
        		this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);

        		var bzplcStr = this.Div00.form.edt_bzplcId.value;
        		var oprStr = this.Div00.form.edt_oprUnitId.value;
        		var deptStr = this.Div00.form.edt_deptId.value;

        		// edt 입력 기준으로 조회조건 다시 세팅
        		if(bzplcStr!="" && bzplcStr!=null){
        			this.fn_setMSearch(this.name,"BZPLC_ID",bzplcStr);
        		}else{
        			this.ds_search.setColumn(0, "BZPLC_ID", null);
        		}

        		if(oprStr!="" && oprStr!=null){
        			this.fn_setMSearch(this.name,"OPR_UNIT_ID",oprStr);
        		}else{
        			this.ds_search.setColumn(0, "OPR_UNIT_ID", null);
        		}

        		if(deptStr!="" && deptStr!=null){
        			this.fn_setMSearch(this.name,"DEPT_ID",deptStr);
        		}else{
        			this.ds_search.setColumn(0, "DEPT_ID", null);
        		}
        		this.fn_insertSelectedData("");
        		this.ds_search.setColumn(0, "EXCEL_PASSWD", answr[0]);
        		this.ds_search.setColumn(0, "DOWN_RSN", answr[1]);
        		this.ds_search.setColumn(0, "DB_WRK", "BIGDOWNLOAD");

        		this.fn_allExcelDownload();
        };

        	// 대용량 엑셀(암호걸려있는)
        // 	this.fn_excelLargeDownload = function(objId, pwd)
        // 	{
        // 		if(this.gfn_isNull(pwd)) return;
        //
        // 		// 화면ID set
        // 		this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
        //
        // 		var bzplcStr = this.Div00.form.edt_bzplcId.value;
        // 		var oprStr = this.Div00.form.edt_oprUnitId.value;
        // 		var deptStr = this.Div00.form.edt_deptId.value;
        //
        // 		// edt 입력 기준으로 조회조건 다시 세팅
        // 		if(bzplcStr!="" && bzplcStr!=null){
        // 			this.fn_setMSearch(this.name,"BZPLC_ID",bzplcStr);
        // 		}else{
        // 			this.ds_search.setColumn(0, "BZPLC_ID", null);
        // 		}
        //
        // 		if(oprStr!="" && oprStr!=null){
        // 			this.fn_setMSearch(this.name,"OPR_UNIT_ID",oprStr);
        // 		}else{
        // 			this.ds_search.setColumn(0, "OPR_UNIT_ID", null);
        // 		}
        //
        // 		if(deptStr!="" && deptStr!=null){
        // 			this.fn_setMSearch(this.name,"DEPT_ID",deptStr);
        // 		}else{
        // 			this.ds_search.setColumn(0, "DEPT_ID", null);
        // 		}
        // 		this.fn_insertSelectedData("");
        //
        // 		this.ds_search.setColumn(0, "EXCEL_PASSWD", pwd);
        // 		this.fn_allExcelDownload();
        // 	};

        	// 레이아웃 저장
        	this.btn_layoutSave_onclick = function(obj,e)
        	{
        		this.gfn_personalSave("grd_mainList", this.grd_mainList.getCurFormatString());
        	};

        	// 레이아웃 초기화
        	this.btn_layoutClear_onclick = function(obj,e)
        	{
        		//suOrgFormat
        		this.gfn_personalSave("grd_mainList", this.grd_mainList.uOrgFormat);
        		this.grd_mainList.set_formats(this.grd_mainList.uOrgFormat);
        	};

        	this.SSP_BO_MA_07_onkeyup = function(obj,e)
        	{
        		if(e.keycode == 13 && e.ctrlkey){
        			this.btn_search_onclick();
        		}
        	};

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_MA_07_onkeyup,this);
            this.Div00.form.Static02.addEventHandler("onclick",this.Div00_Static02_onclick,this);
            this.Div00.form.btn_deptMulti.addEventHandler("onclick",this.multiPopOpen_onclick,this);
            this.Div00.form.btn_bzpMulti.addEventHandler("onclick",this.multiPopOpen_onclick,this);
            this.Div00.form.cbo_useYn.addEventHandler("onitemchanged",this.cmb_thmeDownCd_onitemchanged,this);
            this.Div00.form.btn_deptMultiText.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div00.form.btn_bzpMultiText.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div00.form.btn_oprMulti.addEventHandler("onclick",this.multiPopOpen_onclick,this);
            this.Div00.form.btn_oprMultiText.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.Div00.form.btn_allExcel.addEventHandler("onclick",this.Div00_btn_allExcel_onclick,this);
            this.Div01.form.cbo_page.addEventHandler("onitemchanged",this.Div01_cbo_page_onitemchanged,this);
            this.Div01.form.btn_layoutClear.addEventHandler("onclick",this.btn_layoutClear_onclick,this);
            this.Div01.form.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.Div01.form.btn_excel.addEventHandler("ondblclick",this.btn_excel_onclick,this);
            this.Div01.form.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.Div01.form.btn_allInput.addEventHandler("onclick",this.btn_allInput_onclick,this);
            this.Div01.form.btn_deptCopy.addEventHandler("onclick",this.btn_deptCopy_onclick,this);
            this.Div01.form.btn_deptCreate.addEventHandler("onclick",this.btn_deptCreate_onclick,this);
            this.Div01.form.btn_saveAll.addEventHandler("onclick",this.btn_saveAll_onclick,this);
            this.Div01.form.cbo_setUseYn.addEventHandler("onitemchanged",this.cmb_thmeDownCd_onitemchanged,this);
            this.grd_mainList.addEventHandler("oncellclick",this.grd_mainList_oncellclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
