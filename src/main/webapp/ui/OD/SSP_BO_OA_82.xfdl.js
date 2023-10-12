(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_82");
            this.set_titletext("주문 수량제한 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ePRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_LMT_DOMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPT_BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eEXCEPT_BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_regStats", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">전체</Col><Col id=\"COM_DTL_CD\">*</Col></Row><Row><Col id=\"COM_DTL_CD\">20</Col><Col id=\"COM_DTL_CD_NM\">SSP 계약고객</Col></Row><Row><Col id=\"COM_DTL_CD\">30</Col><Col id=\"COM_DTL_CD_NM\">SSP 일반고객</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_odrLmtDomnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pageOpt", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_VALUE\">20</Col><Col id=\"COL_NM\">20개씩</Col></Row><Row><Col id=\"COL_VALUE\">50</Col><Col id=\"COL_NM\">50개씩</Col></Row><Row><Col id=\"COL_VALUE\">100</Col><Col id=\"COL_NM\">100개씩</Col></Row><Row><Col id=\"COL_VALUE\">10000</Col><Col id=\"COL_NM\">10,000개씩</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_matSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCodeSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"32\"/><Column id=\"langCd\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"TOT_CUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ROWN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_LMT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_LMT_DOMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_APLY_DCNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NMS\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPT_BZPLC_NMS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_patch", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_LMT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_LMT_DOMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_APLY_DCNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_odrQtyLmtUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_xlsx", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_LMT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_LMT_DOMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_DCNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_LMT_DOMN_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_LMT_PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPT_BZPLC_NMS\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_LMT_EXCEPT_BZPLC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","20",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("lbs_useYn","1024","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("사용 여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_useYn","lbs_useYn:5","24","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("lbs_prd","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("상품");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","lbs_prd:5","24","195","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_prdMulti","edt_prdId:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_prdMultiText","btn_prdMulti:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"60","60","28","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"60","60","28","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("lbs_aplyCustSprCd","409","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("적용고객");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_custSprCd","544","24","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_custSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("선택");
            obj.set_value("*");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("lbs_odrLmtDomnCd","716","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("적용범위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_odrLmtDomnCd","lbs_odrLmtDomnCd:5","24","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_odrLmtDomnCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00","20","51","390","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_bzplcMultiText","382","55","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_bzplcMulti","354","55","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_exceptBzplcId","155","55","195","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("lbs_prd00","20","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("예외적용 사업장");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_page",null,"Div00:20","110","28","20",null,null,null,null,null,this);
            obj.set_innerdataset("ds_pageOpt");
            obj.set_datacolumn("COL_NM");
            obj.set_codecolumn("COL_VALUE");
            obj.set_taborder("1");
            obj.set_displayrowcount("5");
            obj.set_text("20");
            obj.set_value("20");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCount","20","133","180","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"Div00:20","100","28","248",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"Div00:20","110","28","btn_layoutSave:208",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","20","cbo_page:10",null,null,"20","70",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_list");
            obj.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");
            obj.set_selecttype("area");
            obj.set_font("12px/normal \"Arial\",\"맑은고딕\"");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"240\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"286\"/><Column size=\"80\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상품\"/><Cell col=\"2\" text=\"적용고객\"/><Cell col=\"3\" text=\"적용범위\"/><Cell col=\"4\" text=\"적용시작일\"/><Cell col=\"5\" text=\"적용종료일\"/><Cell col=\"6\" text=\"적용일수\"/><Cell col=\"7\" text=\"최대주문수량\"/><Cell col=\"8\" text=\"예외적용 사업장\"/><Cell col=\"9\" text=\"사용여부\"/><Cell col=\"10\" text=\"최종수정일시\"/><Cell col=\"11\" text=\"최종수정자ID\"/><Cell col=\"12\" text=\"최종수정자명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:PRD_NMS\" textAlign=\"left\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"2\" text=\"bind:CUST_SPR_CD_NM\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ODR_LMT_DOMN_CD_NM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:STR_DATE\" maskeditmaskchar=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:END_DATE\"/><Cell col=\"6\" text=\"bind:APLY_DCNT\" textAlign=\"center\" autosizecol=\"default\"/><Cell col=\"7\" text=\"bind:MAX_QTY\" verticalAlign=\"middle\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:EXCEPT_BZPLC_NMS\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:USE_YN_NM\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:UPD_DTTM\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:UPDPSN_ID\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:UPDPSN_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutClear",null,"Div00:20","110","28","cbo_page:4",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg",null,"121","70","28","935",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pkgUseY",null,"121","80","28","851",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("사용");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pkgUseN",null,"121","80","28","767",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("미사용");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20",null,null,"40","20","10",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlsxUpld",null,"120","95","28","669",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_odrQtyLmtUseYn",null,"120","84","28","352",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("실행중");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlsxData",null,"120","110","28","441",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("데이터 추출");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_xlsx","20","848","1296","54",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_visible("false");
            obj.set_binddataset("ds_xlsx");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"256\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"380\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"적용상품명\"/><Cell col=\"1\" text=\"적용고객\"/><Cell col=\"2\" text=\"적용범위\"/><Cell col=\"3\" text=\"최대주문수량\"/><Cell col=\"4\" text=\"주문적용시작일\"/><Cell col=\"5\" text=\"주문적용종료일\"/><Cell col=\"6\" text=\"주문적용일수(일)\"/><Cell col=\"7\" text=\"사용여부\"/><Cell col=\"8\" text=\"적용상품ID\"/><Cell col=\"9\" text=\"주문제한 예외사업장\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_NM\"/><Cell col=\"1\" text=\"bind:CUST_SPR_CD\"/><Cell col=\"2\" text=\"bind:ODR_LMT_DOMN_CD\"/><Cell col=\"3\" text=\"bind:MAX_QTY\"/><Cell col=\"4\" text=\"bind:STR_DT\"/><Cell col=\"5\" text=\"bind:END_DT\"/><Cell col=\"6\" text=\"bind:APLY_DCNT\"/><Cell col=\"7\" text=\"bind:USE_YN\"/><Cell col=\"8\" text=\"bind:APLY_PRD_ID\"/><Cell col=\"9\" text=\"bind:ODR_LMT_EXCEPT_BZPLC\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,830,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cbo_page","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_prdId","value","ds_search","ePRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.cbo_useYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.cbo_custSprCd","value","ds_search","CUST_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.cbo_odrLmtDomnCd","value","ds_search","ODR_LMT_DOMN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_exceptBzplcId","value","ds_search","eEXCEPT_BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_82.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_OA_82.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_82.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP-BO
          CREATION DATES :
        *******************************************************/
        // 공통형 스크립트 인클루드
        //include "CO::coUtils.xjs";
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.preSelectRowPosition = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	this.fn_odr_qty_useyn();

        	//검색 영역 최소size 적용
        	//this.Div00.set_height(this.Div00.uMinSize);
        	this.resetScroll();

        	this.copyPaste.addGrid(this.grd_mainList);
        };

        this.fn_setSearchDate = function() {
        	var objDate = new Date();
        	this.Div00.form.cal_fromDt.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/

        // 주문수량 제한 사용여부 조회
        this.fn_odr_qty_useyn = function()	{
        	var sSvcId   = 'odr_qty_lmt_use_yn';
        	var sUrl     = '/bo/od/odr-lmt-qty/use-yn.do';
        	var inDs     = 'ds_odrQtyLmtUseYn=ds_odrQtyLmtUseYn';
        	var outDs    = 'ds_odrQtyLmtUseYn=ds_odrQtyLmtUseYn';
        	var arg      = '';
        	var callback = 'fn_patch_callback';
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_odr_qty_useyn_callback");
        };

        this.fActvPhase={
        	Y: '기능 실행',
        	N: '기능 비활성화',
        };
        this.fn_odr_qty_useyn_callback = function(svcID, errorCode, errorMsg) {
        	// this.btn_odrQtyLmtUseYn - 주문수량 제한 비활성화
        	var odrQtyLmtYn = this.ds_odrQtyLmtUseYn != undefined && this.ds_odrQtyLmtUseYn.getCount() > 0 && this.ds_odrQtyLmtUseYn.getColumn(0, 'USE_YN') != undefined ? this.ds_odrQtyLmtUseYn.getColumn(0, 'USE_YN') : 'N';
        	this.btn_odrQtyLmtUseYn.set_text( this.fActvPhase[odrQtyLmtYn] );
        };

        this.btn_odrQtyLmtUseYn_onclick = function(obj,e)
        {
        	if (!e.ctrlkey) return;

        	var odrQtyLmtYn = this.ds_odrQtyLmtUseYn != undefined && this.ds_odrQtyLmtUseYn.getCount() > 0 && this.ds_odrQtyLmtUseYn.getColumn(0, 'USE_YN') != undefined ? this.ds_odrQtyLmtUseYn.getColumn(0, 'USE_YN') : 'N';
        	var sUseYn   =                    e.fromobject.text == this.fActvPhase['Y'] ? 'N' : 'Y',
        	    sCfrmMesg='주문수량 제한 "'+ (e.fromobject.text == this.fActvPhase['Y'] ? this.fActvPhase['N'] : this.fActvPhase['Y']) +'" 하시겠습니까?';
        	if (confirm(sCfrmMesg)) {
        		this.ds_odrQtyLmtUseYn.setColumn(0, 'USE_YN', sUseYn);
        		this.fn_odr_qty_useyn();
        	}
        };

        //공통코드 조회
        this.fn_commonCodeSearch = function(){
        	this.ds_comCodeSearch.setColumn(0, "codeList", "CUST_SPR_CD,ODR_LMT_DOMN_CD,USE_YN");
        	this.ds_comCodeSearch.setColumn(0, "langCd", "KO");
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_comCodeSearch";
        	var outDs = "ds_custSprCd=ds_output1 ds_odrLmtDomnCd=ds_output2 ds_useYn=ds_output3";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }


        //조회
        this.fn_search = function(page)	{
        	var sSvcId   = 'select';
        	var sUrl     = '/bo/od/odr-lmt-qty/list.do';
        	var inDs     = 'ds_search=ds_search';
        	var outDs    = 'ds_list=ds_list';
        	var arg      = '';
        	var callback = 'fn_received';

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        //조회
        this.fn_patch    = function(page)	{
        	var sSvcId   = 'patch';
        	var sUrl     = '/bo/od/odr-lmt-qty/patch.do';
        	var inDs     = 'ds_patch=ds_patch';
        	var outDs    = 'ds_patch=ds_patch';
        	var arg      = '';
        	var callback = 'fn_patch_callback';

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };
        this.fn_patch_callback = function(svcID, errorCode, errorMsg) {
        	this.fn_search();
        };

        // 대용량다운로드
        this.fn_allExcelDownload = function(){
        	var sSvcId = "allExcelDownload";
        	var sUrl = "/bo/cust/oprunit/select-all-excel-download.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "");
        };

        // 대용량다운로드
        this.fn_allExcelDownload2 = function(){
        	var sSvcId = "allExcelDownload2";
        	var sUrl = "/bo/cust/oprunit/select-auth-all-excel-download.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{

        	if (svcID == "deleteOdrInqTgtDtls") {	// 초기화 이후 검새조건 리셋
        		this.ds_select.deleteAll();
        		return;
        	}

        	this.ds_custSprCd.insertRow(0);
        	this.ds_custSprCd.setColumn(0,"COM_DTL_CD_NM", "전체");

        	this.ds_odrLmtDomnCd.insertRow(0);
        	this.ds_odrLmtDomnCd.setColumn(0,"COM_DTL_CD_NM", "전체");

        	this.ds_useYn.insertRow(0);
        	this.ds_useYn.setColumn(0,"COM_DTL_CD_NM", "전체");
        };
        this.fn_callBackForSearch = function(){
        	this.fn_search();
        }

        //조회 트랜잭션 콜백함수
        this.fn_received = function(svcID, errorCode, errorMsg)	{
        	var tGrid=this.grd_mainList, tDs=tGrid.getBindDataset();

         	if ( tDs == undefined || tDs.rowcount == 0 ) {
         		tGrid.set_nodatatext("조회 결과가 없습니다.");
         	}
        	tGrid.setCellProperty("head", 0, "text", "0");  // 그리드 헤더 체크박스 초기화

         	this.totalCount = 0;
         	if(tDs.getRowCount() > 0) {
         		this.totalCount = tDs.getColumn(0,"TOT_CUNT");
         	}

         	//paging 처리
         	this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.cbo_page.value, "fn_pageCallback");
        }

        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging, oCboPage=this.cbo_page;
        	if(sFlag){
        		this.ds_search.setColumn(0, 'START_NUM', oPaging.uPageNum);
        		this.ds_search.setColumn(0, 'ROW_COUNT', oCboPage.value  );
        		this.fn_search();
        	}

        	var sTotText = "(<b v='true'>총 "+ this.gfn_appendComma(oPaging.uTotCount)+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.sta_totCount.set_text(sTotText);
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
        	if (null==sRetValue || undefined==sRetValue) { return; }

        	switch(sPopupId){
        		case "btn_bzplcMulti":
        			var cmpObj = JSON.parse(sRetValue), sIdList = '', sNmList='';
        			for(var i=0; i<cmpObj.length; i++){
        				var rowData = JSON.parse(cmpObj[i]);
        				sIdList += rowData.BZPLC_ID +",";
        			}
        			this.ds_search.setColumn(0,  'BZPLC_ID', cmpObj.length);
        			this.ds_search.setColumn(0, 'eBZPLC_ID', sIdList.replace(/,\s*$/, ''));
        			//this.Div00.form.edt_exceptBzplcId.set_value(sIdList.replace(/,\s*$/, ""));
        			break;

        		case 'btn_bzplcMultiText' :
        			var prdObj = JSON.parse(sRetValue), sIdList = '', sNmList='';
        			for (var i=0; i<prdObj.length; i++) {
        				var rowData = JSON.parse(prdObj[i]);
        				//var rowData = prdObj[i];
        				sIdList += rowData.PRD_ID_VIEW +',';
        			}
        			this.ds_search.setColumn(0,  'BZPLC_ID', prdObj.length               );
        			this.ds_search.setColumn(0, 'eBZPLC_ID', sIdList.replace(/,\s*$/, ''));
        			break;

        		case 'btn_prdMulti' :
        			var prdObj = JSON.parse(sRetValue), sIdList = '', sNmList='';
        			for (var i=0; i<prdObj.length; i++) {
        				var rowData = JSON.parse(prdObj[i]);
        				//var rowData = prdObj[i];
        				sIdList += rowData.PRD_ID_VIEW +',';
        			}
        			this.ds_search.setColumn(0,  'PRD_ID', prdObj.length               );
        			this.ds_search.setColumn(0, 'ePRD_ID', sIdList.replace(/,\s*$/, ''));
        			break;

        		case 'btn_prdMultiText':
        			var prdObj = JSON.parse(sRetValue), sIdList='', sNmList='';
        			for(var i=0; i<prdObj.length; i++){
        				var rowData = JSON.parse(prdObj[i]);
        				sIdList += rowData.PRD_ID_VIEW +',';
        			}
        			this.ds_search.setColumn(0,  'PRD_ID', prdObj.length);
        			this.ds_search.setColumn(0, 'ePRD_ID', sIdList.replace(/,\s*$/, ''));
        			//this.Div00.form.edt_prdId.set_value(sIdList.replace(/,\s*$/, ""));
        			break;



        		case "btn_oprMulti":
        			var oprObj = JSON.parse(sRetValue);

        			var sIdList = "";
        			var sNmList = "";
        			for(var i=0; i<oprObj.length; i++){
        				var rowData = JSON.parse(oprObj[i]);
        				sIdList += rowData.OPR_UNIT_ID +",";
        			}
        			this.ds_search.setColumn(0,"OPR_UNIT_ID", oprObj.length);
        			this.Div00.form.edt_oprUnitId.set_value(sIdList.replace(/,\s*$/, ""));
        			break;


        		case "SSP_BO_MA_05;BZPLC_ID":
        			var resData = JSON.parse(sRetValue);
        			var rtnData = "";
        			var sIdList = "";
        			for(var i = 0; i < resData.length; i++) {
        				rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.VALUE +",";
        			}
        			this.Div00.form.edt_exceptBzplcId.set_value(sIdList);
        			this.fn_setMSearch(this.name,"BZPLC_ID",sIdList);
        			break;

        		case "SSP_BO_MA_05;OPR_UNIT_ID":
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

        // 		case "btn_salsTeamPop" :
        // 			const teamObj1 = JSON.parse(sRetValue);
        // 			this.ds_search.setColumn(0, "SALS_TEAM_ID", teamObj1.SALS_TEAM_CD);
        // 			this.Div00.form.edt_salsTeamNm.set_value(teamObj1.TEAM_NM);
        // 			break;
        //
        // 		case "btn_svcTeamPop" :
        // 			const teamObj2 = JSON.parse(sRetValue);
        // 			this.ds_search.setColumn(0, "SVC_TEAM_ID", teamObj2.TEAM_CD);
        // 			this.Div00.form.edt_svcTeamNm.set_value(teamObj2.TEAM_NM);
        // 			break;
        //
        // 		case "btn_oprTeamPop" :
        // 			const teamObj3 = JSON.parse(sRetValue);
        // 			this.ds_search.setColumn(0, "OPR_TEAM_ID", teamObj3.TEAM_CD);
        // 			this.Div00.form.edt_oprTeamNm.set_value(teamObj3.TEAM_NM);
        // 			break;



        	}
        }

        //멀티텍스트팝업 콜백함수
        this.fn_multiTextPopupCallback = function(objID, rtnValue)
        {
        	var resParam = JSON.parse(rtnValue);
        	if(objID == 'btn_bzpMultiText'){
        		this.Div00.form.edt_bzplcNm.set_value(resParam.textValue);
        		this.ds_search.setColumn(0,"BZPLC_ID", resParam.textValue);
        	}
        	if(objID == 'btn_oprMultiText'){
        		this.Div00.form.edt_oprUnitNm.set_value(resParam.textValue);
        		this.ds_search.setColumn(0,"OPR_UNIT_ID", resParam.textValue);
        	}
        	if(objID == 'btn_prdMultiText'){
        		this.Div00.form.edt_prdId.set_value(resParam.textValue);
        		this.ds_search.setColumn(0, 'PRD_ID', resParam.textValue);
        	}
        }
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	//search div 초기 설정
        	this.Div00.uMinSize = 94;
        	this.Div00.uMaxSize = 157;

        	//grid 초기 설정
        	this.grd_mainList.uSortFlag = "false";
        	this.grd_mainList.uServerSortFlag = "true";
        	this.grd_mainList.uSortCallback = "fn_sortCallback";
        	this.grd_mainList.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_mainList";
        	this.grd_mainList.uRightMouse = "true";
        	this.grd_mainList.uPersonalFlag = "true";
        	this.grd_mainList.uDefaultFormat = "CHK,CUST_SPR_CD,MAT_SPR_CD,USE_YN,BZPLC_ID,BZPLC_NM,OPR_UNIT_ID,OPR_UNIT_NM,SALS_CHR_CD,SALS_CHR_NM,SALS_TEAM_CD,SALS_TEAM_NM,SVC_TEAM_CD,SVC_TEAM_NM,OPR_TEAM_CD,OPR_TEAM_NM,SALS_CHRPSN_ID,SALS_CHRPSN_NM,SVC_CHRPSN_ID,SVC_CHRPSN_NM,OPR_CHRPSN_ID,OPR_CHRPSN_NM";
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

        // 	var oArg={ coCd: '1000',  }, oOption = { title: '상품 조회', titlebar: 'true', autosize: 'false' };
        // 	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_14.xfdl", oArg, "btn_prdMultiText_callback", oOption);
        //	var sIds='', tDs=this.ds_info_tgt_prd, tDsCunt=tDs.getRowCount();
        // 	for (var i=0; i<tDsCunt; i++) { sIds += (i==0 ? '' : ',') + tDs.getColumn(i, 'PRD_ID_VW'); }

        // 	var sIds='', tDs=this.ds_info_except_bzplc, tDsCunt=tDs.getRowCount();
        // 	for (var i=0; i<tDsCunt; i++) { sIds += (i==0 ? '' : ',') + tDs.getColumn(i, 'BZPLC_ID'); }

        // 텍스트 입력 팝업
        this._cfgTxtPop = {
        	callback: 'tareaInput_callback'
        };
        // 수량제한 상품 텍스트
        this.btn_prdText_onclick = function(obj,e) {
        	var t={ ids: this.Div00.form.edt_prdId.value, key: 'PRD_ID' };
        	this.fn_showTareaInput(this.name, t.key, t.ids, this._cfgTxtPop.callback, 200, 300);
        };

        // 수량제한 예외사업장 텍스트
        this.btn_exceptBzplcText_onclick = function(obj,e) {
        	var t={ ids: this.Div00.form.edt_exceptBzplcId.value, key: 'EXCEPT_BZPLC_ID' };
        	this.fn_showTareaInput(this.name, t.key, t.ids, this._cfgTxtPop.callback, 200, 300);
        };
        this.tareaInput_callback = function(sPopupId, sRetValue){
        	if (sRetValue == undefined || sRetValue == null) { return; }

        	var sIdList='', rObj=JSON.parse(sRetValue);
        	for (var i=0; i < rObj.length; i++) {
        		rRow = JSON.parse(rObj[i]);
        		sIdList += (sIdList=='' ? '' : ',') + rRow.VALUE;
        	}

        	var rTrgt=sPopupId.split(';'), rDataNm=rTrgt[1];
        	switch (sPopupId) {
        		case this.name+';PRD_ID':
        // 			var chkdPrdIds='';
        // 			for (var i=0; i < rObj.length; i++) {
        // 				rRow = JSON.parse(rObj[i]);
        // 				var rDs=this.ds_info_tgt_prd; rIdx=rDs.findRow('PRD_ID', rRow.VALUE);
        // 				if (rIdx > 0 && this.gfn_isNotNull( rDs.getColumn(rIdx, 'PRD_NM') )) {
        // 					continue;
        // 				}
        // 				sIdList += rRow.VALUE + ',';
        // 			}
        // 			alert(sIdList);

        			this.Div00.form.edt_prdId.set_value( sIdList );
        			break;

        		case this.name+';EXCEPT_BZPLC_ID':
        			//this.dsParam.setColumn(0, rDataNm, sIdList);
        			//this.divSrch.form.edtBizplcId.set_value(sIdList);
        			//this.fn_setMSearch(this.name, rDataNm, sIdList);

        			this.Div00.form.edt_exceptBzplcId.set_value( sIdList );
        			break;
        	}

        	this.fn_setMSearch(this.name, rDataNm, sIdList);
        };



        //조회 버튼 click  이벤트
        this.btn_search_onclick = function(obj,e)
        {
        	// 화면ID set
        	this.ds_search.setColumn(0  , "INQ_COND_DTLS"  , this.name                              );
        	this.fn_setMSearch(this.name, 'PRD_ID'         , this.Div00.form.edt_prdId.value        );
        	this.fn_setMSearch(this.name, 'EXCEPT_BZPLC_ID', this.Div00.form.edt_exceptBzplcId.value);  // this.isNotNull(ePrdId) ? ePrdId : null

        	this.div_paging.uPage = 1;
        	this.ds_search.setColumn(0, "START_NUM", 0);

        	// 조회
        	if (this.ds_select.getRowCount() <= 0 ) {
        		this.fn_search();
        	} else {
        		this.fn_insertSelectedData("fn_callBackForSearch");
        	}

        };
        this.fn_callBackForSearch = function(){
        	this.fn_search();
        }


        this.btn_xlsxUpld_onclick = function(obj,e)
        {
        	var param={ pgmId : 'SSP_BO_OA_82' }, opts={ title: '주문수량 제한 일괄등록' };
        	this.gfn_openPopup( 'SSP_BO_PP_34', 'CO_POP::SSP_BO_PP_34.xfdl', param, 'fn_xlsxUpld_callback', opts);
        };
        this.fn_callBackForSearch = function(){
        	this.fn_search();
        };



        //조회 조건 확장 버튼 이벤트
        this.Div00_btn_Extend_onclick = function(obj,e)
        {
        	var nSize = this.Div00.getOffsetHeight();
        	if(nSize  == this.Div00.uMinSize){
        		this.Div00.set_height(this.Div00.uMaxSize);
        	} else {
        		this.Div00.set_height(this.Div00.uMinSize);
        	}
        	this.resetScroll();
        };

        this.multiPopOpen_onclick = function(obj,e)
        {
        	var oArg = {
        		coCd : '1000'
        		//, bzplcId : this.Div00.form.edt_exceptBzplcId.value
        		//, oprUnitId : this.Div00.form.edt_oprUnitId.value
        	};
        	var oOpts = { titlebar: 'true', autosize: 'false' };

        	if(e.fromobject.id == 'btn_bzplcMulti'){
        		oOpts.title = '사업장 조회';
        		this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_14.xfdl", oArg, "fn_popupCallback", oOpts);
        	}
        	if(e.fromobject.id == 'btn_oprMulti'){
        		oOpts.title = '운영단위 조회';
        		this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", oArg, "fn_popupCallback", oOpts);
        	}

        	if (e.fromobject.id == 'btn_prdMulti') {
        		oArg = { coCd : '1000', pubOnlySprCd: 'P' /* 상품조회시, 공용상품만 조회되게 해야함.*/,  };
        		oOpts.title = '상품 조회';
        		this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", oArg, "fn_popupCallback", oOpts);
        	}
        };

        this.multipleTextBtn_onclick = function(obj,e)
        {
        	if(e.fromobject.id == 'btn_bzpMultiText'){
        		//사업장
        		this.fn_showTareaInput(this.name,"BZPLC_ID",this.Div00.form.edt_exceptBzplcId.value, "fn_popupCallback",150,300);
        	}
        	if(e.fromobject.id == 'btn_oprMultiText'){
        		//운영단위
        		this.fn_showTareaInput(this.name,"OPR_UNIT_ID",this.Div00.form.edt_oprUnitId.value, "fn_popupCallback",150,300);
        	}
        	if(e.fromobject.id == 'btn_prdMultiText'){
        		//상품
        		this.fn_showTareaInput(this.name,"PRD_ID",this.Div00.form.edt_prdId.value, "fn_popupCallback",150,300);
        	}
        };

        this.popOpen_onclick = function(obj,e)
        {
        	if(e.fromobject.id == 'btn_salsTeamPop'){
        		//영업팀
        		var args = {
        			coCd: '1000'
        			, searchType : '1'
        			, salsTeamCd: this.ds_search.getColumn(0, "SALS_TEAM_ID")
        		};
        		var opts = { title: '영업팀 조회', titlebar: 'true', autosize: 'false' }
        	}
        	if(e.fromobject.id == 'btn_svcTeamPop'){
        		//서비스팀
        		var args = {
        			coCd: '1000'
        			, searchType : '2'
        			, teamCd: this.ds_search.getColumn(0, "SVC_TEAM_ID")
        		};
        		var opts = { title: '서비스팀 조회', titlebar: 'true', autosize: 'false' }
        	}
        	if(e.fromobject.id == 'btn_oprTeamPop'){
        		//운영팀
        		var args = {
        			coCd: '1000'
        			, searchType : '5'
        			, teamCd: this.ds_search.getColumn(0, "OPR_TEAM_ID")
        		};
        		var opts = { title: '운영팀 조회', titlebar: 'true', autosize: 'false' }
        	}
        	this.gfn_openPopup(e.fromobject.id, 'CC::SSP_BO_PP_26.xfdl', args, 'fn_popupCallback', opts);
        };

        this.btn_reset_onclick = function(obj,e)
        {
        	this.Div00.form.edt_prdId         .set_value(''  );
        	this.Div00.form.edt_exceptBzplcId .set_value(''  );
        	this.Div00.form.cbo_custSprCd     .set_value(null);
        	this.Div00.form.cbo_odrLmtDomnCd  .set_value(null);
        	this.Div00.form.cbo_useYn         .set_value(null);

        	if(this.ds_select.getRowCount() != 0 ) { this.fn_deleteSelectedData("fn_callBack");	}
        };

        // 상세정보
        this.grd_mainList_oncellclick = function(obj,e)
        {
        	var evtColID = this.getBindColumnIDByIndex(obj, e.cell), evtRidx = e.row;
        	var ds = obj.getBindDataset();  trace('[evtColID:'+ evtColID +']');

        	if ("PRD_NMS" == evtColID) {
        		var args = { coCd: ds.getColumn(evtRidx, "CO_CD"), odrLmtSeq: ds.getColumn(evtRidx, "ODR_LMT_SEQ") };
        		this.gfn_openPopup('odr-lmt-qtyInfo', 'OD::SSP_BO_OA_82_01.xfdl', args, 'info_callback', { title: '주문 수량제한 수정', titlebar: 'true', autosize: 'false' });
        	}
        };
        this.info_callback = function(sPopupId, sRetValue) {
        	if ((sRetValue != null && 'true'==sRetValue) || (typeof sRetValue == 'boolean' && sRetValue)) {
        		this.fn_search();
        	}
        };
        // // 상세정보
        // this.grd_mainList_oncelldblclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        // {
        // 	var evtColID = this.getBindColumnIDByIndex(obj, e.cell), evtRidx = e.row;
        // 	var ds = obj.getBindDataset();  trace('[evtColID:'+ evtColID +']');
        //
        // 	if ("PRD_NMS" == evtColID) {
        // 		var args = { coCd: ds.getColumn(evtRidx, "CO_CD"), odrLmtSeq: ds.getColumn(evtRidx, "ODR_LMT_SEQ") };
        // 		this.gfn_openPopup('odr-lmt-qtyInfo', 'OD::SSP_BO_OA_82_01.xfdl', args, '', { title: '주문 수량제한 수정', titlebar: 'true', autosize: 'false' });
        // 	}
        // };

        this.cbo_page_onitemchanged = function(obj,e)
        {
        	// 리스트옵션 변경시 자동조회
        	this.fn_search();
        };

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

        // 등록버튼
        this.btn_reg_onclick = function(obj,e)
        {
        	var rRix=0, ds=this.ds_search;
        	var args = { coCd: ds.getColumn(rRix, 'CO_CD') };
        	this.gfn_openPopup('custContInfo', 'OD::SSP_BO_OA_82_01.xfdl', args, 'btn_reg_callback', { title: '주문 수량제한 등록', titlebar: 'true', autosize: 'false' });
        };
        this.btn_reg_callback = function(r) {

        	this.btn_search_onclick(this.Div00.form.btn_search, new nexacro.ClickEventInfo());
        };

        // 사용/미사용 버튼
        this.btn_pkgUse_onclick = function(obj,e)
        {
        	var cGrd=this.grd_mainList, cDs=cGrd.getBindDataset(), chkdRows=cDs.extractRows('CHK == 1');
        	if (chkdRows.length < 1) { alert('목록에서 대상을 선택하세요.'); return; }

        	var useYn = e.fromobject.id=='btn_pkgUseY' ? 'Y' : 'N', cfrmMesg=(useYn=='Y' ? '사용' : '미사용')+' 처리 하시겠습니까?';
        	if (!confirm( cfrmMesg )) { return; }

        	var pDs=this.ds_patch, pCols=[ 'CO_CD', 'ODR_LMT_SEQ', 'USE_YN' ], pCIdx=0, pVals=null;
        	pDs.clearData();

        	for (var i in chkdRows) {
        		var cIdx=chkdRows[i], pIdx=pDs.addRow();

        		pCIdx=0;
        		pVals=[
        			  cDs.getColumn(cIdx, pCols[pCIdx++])
        			, cDs.getColumn(cIdx, pCols[pCIdx++])
        			, useYn
        		];
        		for (var j=0; j<pCols.length; j++) {
        			pDs.setColumn(pIdx, pCols[j], pVals[j]);
        		}
        	}

        	this.fn_patch();
        };

        // 대용량 엑셀
        this.btn_allExcel_onclick = function(obj,e)
        {
        	if(!confirm(this.fn_getMessage("ERRC000181", "대용량 엑셀을 다운로드"))) {
        		// 대용량 엑셀을 다운로드 하시겠습니까?
        		return;
        	}

        	// 화면ID set
        	this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);

        	var bzplcStr = this.Div00.form.edt_exceptBzplcId.value;
        	var oprUnitStr = this.Div00.form.edt_oprUnitId.value;

        	// edt 입력 기준으로 조회조건 다시 세팅
        	if(bzplcStr!="" && bzplcStr!=null){
        		this.fn_setMSearch(this.name,"BZPLC_ID",bzplcStr);
        	}else{
        		this.ds_search.setColumn(0, "BZPLC_ID", null);
        	}

        	if(oprUnitStr!="" && oprUnitStr!=null){
        		this.fn_setMSearch(this.name,"OPR_UNIT_ID",oprUnitStr);
        	}else{
        		this.ds_search.setColumn(0, "OPR_UNIT_ID", null);
        	}

        	this.fn_allExcelDownload();
        };

        this.btn_allExcel2_onclick = function(obj,e)
        {
        	if(!confirm(this.fn_getMessage("ERRC000181", "대용량 엑셀을 다운로드"))) {
        		// 대용량 엑셀을 다운로드 하시겠습니까?
        		return;
        	}

        	// 화면ID set
        	this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);

        	var bzplcStr = this.Div00.form.edt_exceptBzplcId.value;
        	var oprUnitStr = this.Div00.form.edt_oprUnitId.value;

        	// edt 입력 기준으로 조회조건 다시 세팅
        	if(bzplcStr!="" && bzplcStr!=null){
        		this.fn_setMSearch(this.name,"BZPLC_ID",bzplcStr);
        	}else{
        		this.ds_search.setColumn(0, "BZPLC_ID", null);
        	}

        	if(oprUnitStr!="" && oprUnitStr!=null){
        		this.fn_setMSearch(this.name,"OPR_UNIT_ID",oprUnitStr);
        	}else{
        		this.ds_search.setColumn(0, "OPR_UNIT_ID", null);
        	}

        	this.fn_allExcelDownload2();
        };

        this.SSP_BO_MA_31_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13 && e.ctrlkey){
        		this.btn_search_onclick();
        	}
        };

        this.btn_excel_onclick = function(obj,e)
        {
        // 	var rtn = this.confirm(this.fn_getMessage("ERRC000271"));	// 대용량 엑셀다운로드 하시겠습니까?
        // 	if (rtn) {	// "확인"
        // 		// this.gfn_openPopup("pwdSetPopup", "CO_POP::pwdSetPopup.xfdl", null, "fn_excelDownloadPwdCallback");  // 비밀번호 설정
        // 		this.fn_excelBigDownload();
        // 	}
        // 	else {
         		this.ofn_exportExcel({form:this, grid:this.grd_mainList, fileName:"주문수량제한"});
        // 	}
        };
        this.btn_xlsxData_onclick = function(obj,e)
        {
        	//this.fn_xlsxBackgroundDownload();
        	this.fn_xlsxDownload();
        };

        this.fn_xlsxDownload=function() {
        	var sSvcId = 'xlsxDownload';
        	var sUrl   = '/bo/od/odr-lmt-qty/xlsx.do';  // '/bo/od/odr-lmt-qty/xlsx/download.do';
        	var inDs   = 'ds_search=ds_search';
        	var outDs  = 'ds_xlsx=ds_xlsx';
        	var arg    = '';

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_xlsxDownload_callBack");
        };
        this.fn_xlsxDownload_callBack=function(svcID, errorCode, errorMsg) {
        	this.ofn_exportExcel({ form: this, grid: this.grd_xlsx, fileName: '주문수량제한_데이터추출' });
        }

        this.fn_xlsxBackgroundDownload = function(){
        	var sSvcId = 'xlsxDownload';
        	var sUrl   = '/bo/od/odr-lmt-qty/xlsx/background/download.do';
        	var inDs   = 'ds_search=ds_search';
        	var outDs  = '';
        	var arg    = '';

        	this.ds_search.setColumn(0, 'INQ_COND_DTLS', this.name   );
            this.ds_search.setColumn(0, 'CO_CD'        , this.fv_coCd);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_excelBigDownload_callBack");
        };
        this.fn_excelBigDownload_callBack = function(svcID, errorCode, errorMsg) {
        	if (errorCode == -100) {
        		//alert(errorMsg);
        		alert(this.fn_getMessage(errorMsg));
        	}
        	else if (errorCode == "0") {
        		alert(this.fn_getMessage("ERRS000461"));
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeydown",this.SSP_BO_MA_31_onkeydown,this);
            this.Div00.form.btn_prdMulti.addEventHandler("onclick",this.multiPopOpen_onclick,this);
            this.Div00.form.btn_prdMultiText.addEventHandler("onclick",this.btn_prdText_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.Div00.form.btn_bzplcMultiText.addEventHandler("onclick",this.btn_exceptBzplcText_onclick,this);
            this.Div00.form.btn_bzplcMulti.addEventHandler("onclick",this.multiPopOpen_onclick,this);
            this.Div00.form.edt_exceptBzplcId.addEventHandler("onchanged",this.Div00_edt_bzplcId_onchanged,this);
            this.cbo_page.addEventHandler("onitemchanged",this.cbo_page_onitemchanged,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.grd_mainList.addEventHandler("oncellclick",this.grd_mainList_oncellclick,this);
            this.btn_layoutClear.addEventHandler("onclick",this.btn_layoutClear_onclick,this);
            this.btn_reg.addEventHandler("onclick",this.btn_reg_onclick,this);
            this.btn_pkgUseY.addEventHandler("onclick",this.btn_pkgUse_onclick,this);
            this.btn_pkgUseN.addEventHandler("onclick",this.btn_pkgUse_onclick,this);
            this.btn_xlsxUpld.addEventHandler("onclick",this.btn_xlsxUpld_onclick,this);
            this.btn_odrQtyLmtUseYn.addEventHandler("onclick",this.btn_odrQtyLmtUseYn_onclick,this);
            this.btn_xlsxData.addEventHandler("onclick",this.btn_xlsxData_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_82.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
