(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_82_01");
            this.set_titletext("주문 수량제한 정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_LMT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_TEAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_TEAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"eOPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eBZPLC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col><Col id=\"CO_CD\"/><Col id=\"ODR_LMT_SEQ\"/><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_info", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_LMT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_LMT_DOMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_DCNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\">1000</Col><Col id=\"APLY_DCNT\">30</Col><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_info_tgt_prd", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_LMT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_LMT_PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_info_except_bzplc", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_LMT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPT_BZPLC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">사용</Col><Col id=\"COM_DTL_CD\">Y</Col></Row><Row><Col id=\"COM_DTL_CD\">N</Col><Col id=\"COM_DTL_CD_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">선택</Col><Col id=\"COM_DTL_CD\"/></Row><Row><Col id=\"COM_DTL_CD\">20</Col><Col id=\"COM_DTL_CD_NM\">SSP 계약고객</Col></Row><Row><Col id=\"COM_DTL_CD\">30</Col><Col id=\"COM_DTL_CD_NM\">SSP 일반고객</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_odrLmtDomnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">선택</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">사업장</Col><Col id=\"COM_DTL_CD\">CLN</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">운영단위</Col><Col id=\"COM_DTL_CD\">OPU</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">부서</Col><Col id=\"COM_DTL_CD\">DEP</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">회원</Col><Col id=\"COM_DTL_CD\">MBR</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pageOpt", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_VALUE\">20</Col><Col id=\"COL_NM\">20개씩</Col></Row><Row><Col id=\"COL_VALUE\">50</Col><Col id=\"COL_NM\">50개씩</Col></Row><Row><Col id=\"COL_VALUE\">100</Col><Col id=\"COL_NM\">100개씩</Col></Row><Row><Col id=\"COL_VALUE\">10000</Col><Col id=\"COL_NM\">10,000개씩</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCodeSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"32\"/><Column id=\"langCd\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_info_tgt_prd_del", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_LMT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_LMT_PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_info_except_bzplc_del", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_LMT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPT_BZPLC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_validate_params", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VW\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RSLT_MESG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_validate_result", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VW\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RSLT_MESG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static05","20","55","350","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","20","86","350","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","20","117","350","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01","20","148","350","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","55","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("적용고객 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","86","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("적용범위 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","20","117","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("최대주문수량 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","20","148","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("적용기간 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","28","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("수량제한 설정정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_tgtPrd","390","55","430","405",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_info_tgt_prd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"155\"/><Column size=\"219\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상품ID\"/><Cell col=\"2\" text=\"상품명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:PRD_ID_VW\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:PRD_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","390","30","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("수량제한 대상상품 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_exceptBzplc","840","55","421","405",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_info_except_bzplc");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"125\"/><Column size=\"240\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사업장ID\"/><Cell col=\"2\" text=\"사업장명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:BZPLC_ID\"/><Cell col=\"2\" text=\"bind:BZPLC_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_00_00","842","30","178","16",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("수량제한 적용예외사업장");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list","535",null,"70","30",null,"20",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","614",null,"70","30",null,"20",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_custSprCd","155","60","210","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_custSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_odrLmtDomnCd","155","90","210","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_odrLmtDomnCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_maxLmtQty","155","121","210","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_textAlign("right");
            obj.set_maxlength("12");
            obj.set_inputfilter("comma,alpha,dot,sign,space,symbol");
            obj.set_inputtype("digit");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdText","683","28","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add_prd",null,"28","50","24","517",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("+ 추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del_prd",null,"28","50","24","460",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("- 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exceptBzplcText","1124","28","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_document");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add_except_bzplc",null,"28","50","24","76",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("+ 추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del_except_bzplc",null,"28","50","24","19",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("- 삭제");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_strDt","155","153","95","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("20230101");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","255","153","10","23",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_endDt","270","153","95","22",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("99991231");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_01","20","179","350","32",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","20","179","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("적용일수 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00","20","210","350","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","20","210","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("사용여부 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_useYn","155","214","210","24",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_taborder("31");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_aplyDcnt","155","183","210","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_textAlign("right");
            obj.set_maxlength("5");
            obj.set_inputtype("digit");
            obj.set_inputfilter("comma,alpha,dot,sign,space,symbol");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,530,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Div00.form.edt_bzplcId00","value","ds_list","PRD_ID_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edt_bzplcId00_00","value","ds_list","PRVL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_bzplcId00_01","value","ds_list","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cbo_custSprCd","value","ds_info","CUST_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.cbo_custSprCd00","value","dsParam","CUST_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cbo_odrLmtDomnCd","value","ds_info","ODR_LMT_DOMN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_maxLmtQty","value","ds_info","MAX_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cal_strDt","value","ds_info","STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cal_endDt","value","ds_info","END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cbo_useYn","value","ds_info","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_aplyDcnt","value","ds_info","APLY_DCNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_82_01.xfdl",'CC::CcUtils.xjs');
        this.addIncludeScript("SSP_BO_OA_82_01.xfdl",'OD::odUtils.xjs');
        this.addIncludeScript("SSP_BO_OA_82_01.xfdl",'RD::rdMsg.xjs');
        this.registerScript("SSP_BO_OA_82_01.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP-BO
          CREATION DATES :
        *******************************************************/
        // 공통형 스크립트 인클루드
        //include "CO::coUtils.xjs";
        this.executeIncludeScript('CC::CcUtils.xjs'); /*include 'CC::CcUtils.xjs'*/;
        this.executeIncludeScript('OD::odUtils.xjs'); /*include 'OD::odUtils.xjs'*/;
        this.executeIncludeScript('RD::rdMsg.xjs'); /*include 'RD::rdMsg.xjs'*/;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();
        	//this.fn_setSearchDate();

        	//검색 영역 최소size 적용
        	//this.Div00.set_height(this.Div00.uMinSize);
        	this.resetScroll();

        	this.copyPaste.addGrid(this.grd_tgtPrd     );
        	this.copyPaste.addGrid(this.grd_exceptBzplc);
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        // 화면 설정 함수
        this.cfn_formInit = function()
        {

        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this._cfg={
        	aplyDcnt: 30,
        	strDt   : '20230101',
        	endDt   : '99991231',
        };
        // 공통코드 조회
        this.fn_commonCodeSearch = function(){
        	this.ds_comCodeSearch.setColumn(0, 'codeList', 'CUST_SPR_CD,ODR_LMT_DOMN_CD,USE_YN');
        	this.ds_comCodeSearch.setColumn(0, 'langCd'  , 'KO');
        	var sSvcId = 'commonCodeSearch';
        	var sUrl   = '/co/select-common-code-list.do';
        	var inDs   = 'ds_search=ds_comCodeSearch';
        	var outDs  = 'ds_custSprCd=ds_output1 ds_odrLmtDomnCd=ds_output2 ds_useYn=ds_output3';
        	var arg    = '';
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, 'fn_commonCodeSearch_callback');
        };
        this.fn_commonCodeSearch_callback = function(svcID, errorCode, errorMsg) {

        	//this.ds_custSprCd   .insertRow(0);
        	this.ds_custSprCd   .setColumn(0, 'COM_DTL_CD_NM', '전체'   );
        	this.ds_custSprCd   .setColumn(0, 'COM_DTL_CD'   , '*'      );
        	this.ds_custSprCd   .insertRow(0);
        	this.ds_custSprCd   .setColumn(0, 'COM_DTL_CD_NM', '선택'   );
        	this.ds_custSprCd   .setColumn(0, 'COM_DTL_CD'   , ''       );


        	this.ds_odrLmtDomnCd.insertRow(0);
        	this.ds_odrLmtDomnCd.setColumn(0, 'COM_DTL_CD_NM', '선택'   );

        	var cusrSprCd=this.ds_info.getColumn(0, 'CUST_SPR_CD'), odrLmtDomnCd=this.ds_info.getColumn(0, 'ODR_LMT_DOMN_CD'), aplyDcnt=this.ds_info.getColumn(0, 'APLY_DCNT');
        	if (this.gfn_isNull(cusrSprCd   )) { this.cbo_custSprCd   .set_index(0); }
        	if (this.gfn_isNull(odrLmtDomnCd)) { this.cbo_odrLmtDomnCd.set_index(0); }
        	if (this.gfn_isNull(aplyDcnt    )) { this.edt_aplyDcnt    .set_value(this._cfg.aplyDcnt); }
        	//this.cal_strDt.set_value(this._cfg.strDt);
        	this.cal_endDt.set_value(this._cfg.endDt);

        	/* 사업장 상세 조회 */
        	if(!this.gfn_isNull(this.parent.coCd) && !this.gfn_isNull(this.parent.odrLmtSeq)) { //목록에서 넘겨준 파라미터 셋팅
        		this.ds_search.clearData();
        		this.ds_search.addRow();
        		//this.ds_search.setColumn(0,"coCd","1000");
        		//this.ds_search.setColumn(0,"bzplcId","S000000678");
        		//this.ds_search.setColumn(0,"bzplcId","S000004204");
        		this.ds_search.setColumn(0, "CO_CD"      , this.parent.coCd      );
        		this.ds_search.setColumn(0, "ODR_LMT_SEQ", this.parent.odrLmtSeq);

        		this.fn_info();
        	}
        };

        // 상세조회
        this.fn_info = function() {
        	var sSvcId = "selectInfo";
        	var sUrl   = "/bo/od/odr-lmt-qty/info.do";
        	var inDs   = "ds_search=ds_search";
        	var outDs  = "ds_info=ds_info ds_info_tgt_prd=ds_info_tgt_prd ds_info_except_bzplc=ds_info_except_bzplc";
        	var arg    = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_info_callback");
        };
        this.fn_info_callback = function(svcID, errorCode, errorMsg) {

        	this.buildDsTgtPrd();
        	this.buildDsExceptBzplc();

        };

        // 팝업에서 선택한 상품ID 조회
        this.fn_validatePrd_request = function(sClbk, fClbk) {
        	var fnNm='fn_validatePrd';
        	if (sClbk instanceof Function) { this[fnNm+'_sClbk'] = sClbk; }
        	if (fClbk instanceof Function) { this[fnNm+'_fClbk'] = fClbk; }

        	var sSvcId = 'validatePrd';
        	var sUrl   = '/bo/od/odr-lmt-qty/validate/prd.do';
        	var inDs   = 'ds_validate_params=ds_validate_params';
        	var outDs  = 'ds_validate_result=ds_validate_result';
        	var arg    = '';
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, sClbk==undefined ? 'fn_validatePrd_response' : fnNm+'_sClbk');
        };
        this.fn_validatePrd_response = function(svcID, errorCode, errorMsg) {}

        this.fn_validatePrd = function(arrayData) {
        	if (arrayData==undefined || arrayData.length < 1) { return; }
        	var rqstDs=this.ds_validate_params, rsltDs=this.ds_validate_result, trgtDs=this.ds_info_tgt_prd, colId='PRD_ID', colNm='PRD_NM', srceNm='상품';  // ***

        	rqstDs.clearData();
        	for (var i=0; i < arrayData.length; i++) {
        		var iIdx=rqstDs.addRow();
        		rqstDs.setColumn(iIdx, colId, arrayData[i]);
        	}
        	this.fn_validatePrd_request(function(svcID, errorCode, errorMsg) {
        		var errMesg='', errCunt=rsltDs.findRow('RSLT_CD', 'ERROR'), rsltCunt=rsltDs.getCount();
        		if (errCunt>-1) {
        			for (var i=0; i < rsltCunt; i++) {
        				var rowMesg = rsltDs.getColumn(i, 'RSLT_MESG');
        				if (rowMesg != undefined) { errMesg += rowMesg+'\n'; }
        			}
        			if (errMesg != '') { alert(srceNm+'정보 체크결과:\n\n'+ errMesg); return; }
        		}

        		this.buildDsTgtPrd();
        		for (var i=0; i < rsltCunt; i++) {
        			var rRow={ id: rsltDs.getColumn(i, colId), nm: rsltDs.getColumn(i, colNm) };
        			rRow.trgtRow= trgtDs.findRow(colId, rRow.id);
        			if (rRow.trgtRow < 0) { rRow.trgtRow=trgtDs.addRow(); }
        			trgtDs.setColumn(rRow.trgtRow, colId      , rRow.id);
        			trgtDs.setColumn(rRow.trgtRow, colId+'_VW', rRow.id);
        			trgtDs.setColumn(rRow.trgtRow, colNm      , rRow.nm);
        		}
        	});
        };

        // 팝업에서 선택한 예외사업장 조회
        this.fn_validateBzplc_request = function(sClbk, fClbk) {
        	var fnNm='fn_validateBzplc';
        	if (sClbk instanceof Function) { this[fnNm+'_sClbk'] = sClbk; }
        	if (fClbk instanceof Function) { this[fnNm+'_fClbk'] = fClbk; }

        	var sSvcId = 'validateBzplc';
        	var sUrl   = '/bo/od/odr-lmt-qty/validate/bzplc.do';
        	var inDs   = 'ds_validate_params=ds_validate_params';
        	var outDs  = 'ds_validate_result=ds_validate_result';
        	var arg    = '';
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, sClbk==undefined ? 'fn_validateBzplc_response' : fnNm+'_sClbk');
        };
        fn_validateBzplc_response = function(svcID, errorCode, errorMsg) {}

        this.fn_validateBzplc = function(arrayData) {
        	if (arrayData==undefined || arrayData.length < 1) { return; }
        	var rqstDs=this.ds_validate_params, rsltDs=this.ds_validate_result, trgtDs=this.ds_info_except_bzplc, colId='BZPLC_ID', colNm='BZPLC_NM', srceNm='사업장';  // ***

        	rqstDs.clearData();
        	for (var i=0; i < arrayData.length; i++) {
        		var iIdx=rqstDs.addRow();
        		rqstDs.setColumn(iIdx, colId, arrayData[i]);
        	}
        	this.fn_validateBzplc_request(function(svcID, errorCode, errorMsg) {
        		var errMesg='', errCunt=rsltDs.findRow('RSLT_CD', 'ERROR'), rsltCunt=rsltDs.getCount();
        		if (errCunt>-1) {
        			for (var i=0; i < rsltCunt; i++) {
        				var rowMesg = rsltDs.getColumn(i, 'RSLT_MESG');
        				if (rowMesg != undefined) { errMesg += rowMesg+'\n'; }
        			}
        			if (errMesg != '') { alert(srceNm+'정보 체크결과:\n\n'+ errMesg); return; }
        		}

        		this.buildDsExceptBzplc();
        		for (var i=0; i < rsltCunt; i++) {
        			var rRow={ id: rsltDs.getColumn(i, colId), nm: rsltDs.getColumn(i, colNm) };
        			rRow.trgtRow= trgtDs.findRow(colId, rRow.id);
        			if (rRow.trgtRow < 0) { rRow.trgtRow=trgtDs.addRow(); }
        			trgtDs.setColumn(rRow.trgtRow, colId, rRow.id);
        			trgtDs.setColumn(rRow.trgtRow, colNm, rRow.nm);
        		}
        	});
        };


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_req_info = function()
        {

        };
        this.fn_req_info_callback = function(svcID, errorCode, errorMsg) {

        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.buildDsTgtPrd = function() {
        	var tGrid=this.grd_tgtPrd, tDs=tGrid.getBindDataset(), tRowIdx=tDs.getRowCount();
        	if ( tDs.getColumnInfo() == undefined ) {  // 신규 Dataset 생성
        		tGrid.set_enableevent(false);

        		var dsNm=tDs.id, cols=['CHK', 'CO_CD', 'ODR_LMT_SEQ', 'ODR_LMT_PRD_SEQ', 'PRD_ID', 'PRD_NM', 'PRD_ID_VW'];
        		var ds=new Dataset(dsNm, this);
        		for (var i in cols) { ds.addColumn(cols[i], 'String'); }
        		tGrid.setBindDataset(this[dsNm] = tDs = ds);

        		tGrid.set_enableevent(true);
        	}
        };
        this.buildDsExceptBzplc = function() {
        	var tGrid=this.grd_exceptBzplc, tDs=tGrid.getBindDataset(), tRowIdx=tDs.getRowCount();
        	if ( tDs.getColumnInfo() == undefined ) {  // 신규 Dataset 생성
        		tGrid.set_enableevent(false);

        		var dsNm=tDs.id, cols=['CHK', 'CO_CD', 'ODR_LMT_SEQ', 'EXCEPT_BZPLC_SEQ', 'BZPLC_ID', 'BZPLC_NM'];
        		var ds=new Dataset(dsNm, this);
        		for (var i in cols) { ds.addColumn(cols[i], 'String'); }
        		tGrid.setBindDataset(this[dsNm] = tDs = ds);

        		tGrid.set_enableevent(true);
        	}
        };



        this.fn_valid_info = function()
        {
        	var tDsInfo=this.ds_info, tDsTgtPrd=this.ds_info_tgt_prd;
        	var oInfo={
        		  custSprCd   : tDsInfo.getColumn(0, 'CUST_SPR_CD'    )
        		, odrLmtDomnCd: tDsInfo.getColumn(0, 'ODR_LMT_DOMN_CD')
        		, maxQty      : tDsInfo.getColumn(0, 'MAX_QTY'        )
        		, strDt       : tDsInfo.getColumn(0, 'STR_DT'         )
        		, endDt       : tDsInfo.getColumn(0, 'END_DT'         )
        		, aplyDcnt    : tDsInfo.getColumn(0, 'APLY_DCNT'      )
        		, useYn       : tDsInfo.getColumn(0, 'USE_YN'         )
        		, prdCount    : tDsTgtPrd.getRowCount()
        	};
        	if (this.gfn_isNull(oInfo.custSprCd   )) { alert('적용고객을 선택하세요.'    ); return false; }
        	if (this.gfn_isNull(oInfo.odrLmtDomnCd)) { alert('적용범위을 선택하세요.'    ); return false; }
        	if (this.gfn_isNull(oInfo.maxQty      )) { alert('최대주문수량을 입력하세요.'); return false; }

        	if (this.gfn_isNull(oInfo.strDt       )) { alert('적용시작일을 입력하세요.'  ); return false; }
        	if (this.gfn_isNull(oInfo.endDt       )) { alert('적용종료일을 입력하세요.'  ); return false; }
        	if ( oInfo.strDt > oInfo.endDt         ) { alert('적용시작일이 적용종료일 보다 클 수 없습니다..'  ); return false; }

        	if (this.gfn_isNull(oInfo.aplyDcnt    )) { alert('적용일수를 입력하세요.'    ); return false; }
        	if (this.gfn_isNull(oInfo.useYn       )) { alert('사용여부를 선택하세요.'    ); return false; }
        	if (this.gfn_isNull(oInfo.prdCount    ) || oInfo.prdCount < 1) { alert('수량제한 대상상품을 선택하세요.'); return false; }

        	return true;
        };
        this.fn_save_info = function()
        {
        	if (!this.fn_valid_info()) { return; }
        	if (!confirm('저장하시겠습니까?')) { return; }

        	var sSvcId = 'saveOdrLmtQty';
        	var sUrl   = '/bo/od/odr-lmt-qty/save.do';
        	var inDs   = 'ds_info=ds_info ds_info_tgt_prd=ds_info_tgt_prd ds_info_except_bzplc=ds_info_except_bzplc';
        	var outDs  = 'ds_info=ds_info ds_info_tgt_prd=ds_info_tgt_prd ds_info_except_bzplc=ds_info_except_bzplc';
        	var arg    = '';

        	// Deleted Dataset - tgt_prd
        	if (this.grd_tgtPrd     .getBindDataset().getDeletedRowCount() > 0) { inDs += " ds_info_tgt_prd_del=ds_info_tgt_prd_del"          ; }

        	// Deleted Dataset - except_bzplc
        	if (this.grd_exceptBzplc.getBindDataset().getDeletedRowCount() > 0) { inDs += " ds_info_except_bzplc_del=ds_info_except_bzplc_del"; }

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, 'fn_save_info_callback');
        };
        this.fn_save_info_callback = function(svcID, errorCode, errorMsg) {
        	this.ds_info_tgt_prd_del     .clearData();
        	this.ds_info_except_bzplc_del.clearData();

        	if ('SUCCESS'==errorMsg) {
        		alert('저장하였습니다.');
        		this.close(true);
        	}
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        // 수량제한 상품 텍스트
        this.btn_prdText_onclick = function(obj,e)
        {
        // 	var oArg={ coCd: '1000',  }, oOption = { title: '상품 조회', titlebar: 'true', autosize: 'false' };
        // 	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_14.xfdl", oArg, "btn_prdMultiText_callback", oOption);
        	var sIds='', tDs=this.ds_info_tgt_prd, tDsCunt=tDs.getRowCount();
        	for (var i=0; i<tDsCunt; i++) { sIds += (i==0 ? '' : ',') + tDs.getColumn(i, 'PRD_ID_VW'); }

        	this.fn_showTareaInput(this.name, 'PRD_ID', sIds, 'tareaInput_callback', 200, 300);
        };

        // 수량제한 예외사업장 텍스트
        this.btn_exceptBzplcText_onclick = function(obj,e)
        {
        	var sIds='', tDs=this.ds_info_except_bzplc, tDsCunt=tDs.getRowCount();
        	for (var i=0; i<tDsCunt; i++) { sIds += (i==0 ? '' : ',') + tDs.getColumn(i, 'BZPLC_ID'); }

        	this.fn_showTareaInput(this.name, 'EXCEPT_BZPLC_ID', sIds, 'tareaInput_callback', 200, 300);
        };
        this.tareaInput_callback = function(sPopupId, sRetValue){
        	if (sRetValue == undefined || sRetValue == null) { return; }

        	var sIdList='', rObj=JSON.parse(sRetValue);
        	for (var i=0; i < rObj.length; i++) {
        		rRow = JSON.parse(rObj[i]);
        		sIdList += rRow.VALUE + ',';
        	}

        	switch (sPopupId) {
        		case this.name+';PRD_ID':

         			var colKey='PRD_ID_VW', datas=[];
         			for (var i=0; i < rObj.length; i++) {
         				rRow = JSON.parse(rObj[i]);
         				var rDs=this.ds_info_tgt_prd; rIdx=rDs.findRow(colKey, rRow.VALUE);
         				if (rIdx > -1 && !this.gfn_isNull( rDs.getColumn(rIdx, colKey) )) {
         					continue;
         				}
        				datas.push(rRow.VALUE);
         			}
        			this.fn_validatePrd(datas);
        			break;

        		case this.name+';EXCEPT_BZPLC_ID':
         			var colKey='BZPLC_ID', datas=[];
         			for (var i=0; i < rObj.length; i++) {
         				rRow = JSON.parse(rObj[i]);
         				var rDs=this.ds_info_tgt_prd; rIdx=rDs.findRow(colKey, rRow.VALUE);
         				if (rIdx > -1 && !this.gfn_isNull( rDs.getColumn(rIdx, colKey) )) {
         					continue;
         				}
        				datas.push(rRow.VALUE);
         			}
        			this.fn_validateBzplc(datas);
        			//this.dsParam.setColumn(0, rDataNm, sIdList);
        			//this.divSrch.form.edtBizplcId.set_value(sIdList);
        			//this.fn_setMSearch(this.name, rDataNm, sIdList);
        			break;
        	}
        };


        // 상품 추가
        this.btn_add_prd_onclick = function(obj,e)
        {
        	var oArg = { coCd : '1000', pubOnlySprCd: 'P' /* 상품조회시, 공용상품만 조회되게 해야함.*/ }, oOpts={ title: '상품 조회', titlebar: 'true', autosize: 'false' };
        	this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", oArg, "btn_add_prd_callback", oOpts);
        };
        this.btn_add_prd_callback = function(sPopupId, sRetValue) {
        	if (this.gfn_isNull(sRetValue)) { return; }

        	var tGrid=this.grd_tgtPrd, tDs=tGrid.getBindDataset(), tRowIdx=tDs.getRowCount();
        	const prdObj = JSON.parse(sRetValue);

        	tGrid.set_enableevent(false);
        	for (var i in prdObj) {
        		var rRow = JSON.parse(prdObj[i]);
        		if (tDs.findRow('PRD_ID', rRow.PRD_ID) > -1) { continue; }

        		var iRdx = tDs.addRow();
        		tDs.setColumn(iRdx, 'ODR_LMT_PRD_SEQ', iRdx+1          );
        		tDs.setColumn(iRdx, 'PRD_ID_VW'      , rRow.PRD_ID_VIEW);
        		tDs.setColumn(iRdx, 'PRD_ID'         , rRow.PRD_ID     );
        		tDs.setColumn(iRdx, 'PRD_NM'         , rRow.PRD_NM     );
        	}
        	tGrid.set_enableevent(true);
        };


        // 수량제한 상품 삭제
        this.btn_del_prd_onclick = function(obj,e)
        {
        	var tGrid=this.grd_tgtPrd, tDs=tGrid.getBindDataset(), dDs=this.ds_info_tgt_prd_del;

        	// 멀티삭제용도
            if (tDs.rowcount < 1 || tDs.findRow("CHK",1) == -1) {
                this.fn_alert("ERRR000188","삭제정보","","warning"); // 삭제할 데이타가 없습니다.
                return false;
            }

            var result = this.fn_confirm( "ERRR000179", "삭제정보","","question" ); // 현재선택행을 삭제하시겠습니까?
            if (result == 0) { return false; }

            // 멀티 삭제 처리
            for (var i = tDs.rowcount-1; 0 <= i; i--) {
                if ( tDs.getColumn(i, 'CHK') == 1) {
        			this.copyTgtPrd(tDs, i, dDs);
        			tDs.deleteRow(i);
                }
            }

            return true;
        };

        // 수량제한 상품 삭제 데이터셋 설정
        this.copyTgtPrd = function(sd, si, td) {
        	if (sd == undefined || si > sd.getRowCount()) { return; }

        	var ti = td.addRow(), dsCols = ['CHK', 'CO_CD', 'ODR_LMT_SEQ', 'ODR_LMT_PRD_SEQ', 'PRD_ID', 'PRD_NM', 'PRD_ID_VW'];
        	for (var i in dsCols) {
        		var tCol=dsCols[i];
        		td.setColumn(ti, tCol, sd.getColumn(si, tCol));
        	}

        	return td;
        };

        // 수량제한 예외사업장 삭제 데이터셋 설정
        this.copyExceptBzplc = function(sd, si, td) {
        	if (sd == undefined || si > sd.getRowCount()) { return; }

        	var ti = td.addRow(), dsCols = ['CHK', 'CO_CD', 'ODR_LMT_SEQ', 'EXCEPT_BZPLC_SEQ', 'BZPLC_ID', 'BZPLC_NM'];
        	for (var i in dsCols) {
        		var tCol=dsCols[i];
        		td.setColumn(ti, tCol, sd.getColumn(si, tCol));
        	}

        	return td;
        };


        // 수량제한 예외사업장 추가
        this.btn_add_except_bzplc_onclick = function(obj,e)
        {
        	var oArg = { coCd : '1000' }, oOpts={ title: '사업장 조회', titlebar: 'true', autosize: 'false' };
        	var custSprCd=this.ds_info.getColumn(0, 'CUST_SPR_CD');
        	if ('20,30'.indexOf(custSprCd) > -1) { oArg.custSprCd = custSprCd; }

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_14.xfdl", oArg, "btn_add_except_bzplc_callback", oOpts);
        };



        this.btn_add_except_bzplc_callback = function(sPopupId, sRetValue) {
        	if (this.gfn_isNull(sRetValue)) { return; }

        	var tGrid=this.grd_exceptBzplc, tDs=tGrid.getBindDataset(), tRowIdx=tDs.getRowCount();  //this.buildDsExceptBzplc();
        	const prdObj = JSON.parse(sRetValue);

        	tGrid.set_enableevent(false);
        	for (var i in prdObj) {
        		var rRow = JSON.parse(prdObj[i]);
        		if (tDs.findRow('BZPLC_ID', rRow.BZPLC_ID) > -1) { continue; }

        		var iRdx = tDs.addRow();
        		tDs.setColumn(iRdx, 'EXCEPT_BZPLC_SEQ', iRdx+1          );
        		tDs.setColumn(iRdx, 'BZPLC_ID'        , rRow.BZPLC_ID   );
        		tDs.setColumn(iRdx, 'BZPLC_NM'        , rRow.BZPLC_NM   );
        	}
        	tGrid.set_enableevent(true);
        };

        // 수량제한 예외사업장 삭제
        this.btn_del_except_bzplc_onclick = function(obj,e)
        {
        	var tGrid=this.grd_exceptBzplc, tDs=tGrid.getBindDataset(), dDs=this.ds_info_except_bzplc_del;

        	// 멀티삭제용도
            if (tDs.rowcount < 1 || tDs.findRow("CHK",1) == -1) {
                this.fn_alert("ERRR000188","삭제정보","","warning"); // 삭제할 데이타가 없습니다.
                return false;
            }

            var result = this.fn_confirm( "ERRR000179", "삭제정보","","question" ); // 현재선택행을 삭제하시겠습니까?
            if (result == 0) { return false; }

            // 멀티 삭제 처리
            for (var i = tDs.rowcount-1; 0 <= i; i--) {
                if ( tDs.getColumn(i, 'CHK') == 1) {
        			this.copyExceptBzplc(tDs, i, dDs);
        			tDs.deleteRow(i);
                }
            }

            return true;
        };

        // 수량제한 예외사업장 삭제 데이터셋 설정
        this.copyExceptBzplc = function(sd, si, td) {
        	if (sd == undefined || si > sd.getRowCount()) { return; }

        	var ti = td.addRow(), dsCols = [ 'CHK', 'CO_CD', 'ODR_LMT_SEQ', 'EXCEPT_BZPLC_SEQ', 'BZPLC_ID', 'BZPLC_NM' ];
        	for (var i in dsCols) {
        		var tCol=dsCols[i];
        		td.setColumn(ti, tCol, sd.getColumn(si, tCol));
        	}

        	return td;
        };


        // 저장버튼 클릭
        this.btn_save_onclick = function(obj,e)
        {
        	this.fn_save_info();
        };


        // 목록버튼 클릭
        this.btn_list_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.btn_list.addEventHandler("onclick",this.btn_list_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_prdText.addEventHandler("onclick",this.btn_prdText_onclick,this);
            this.btn_add_prd.addEventHandler("onclick",this.btn_add_prd_onclick,this);
            this.btn_del_prd.addEventHandler("onclick",this.btn_del_prd_onclick,this);
            this.btn_exceptBzplcText.addEventHandler("onclick",this.btn_exceptBzplcText_onclick,this);
            this.btn_add_except_bzplc.addEventHandler("onclick",this.btn_add_except_bzplc_onclick,this);
            this.btn_del_except_bzplc.addEventHandler("onclick",this.btn_del_except_bzplc_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_82_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
