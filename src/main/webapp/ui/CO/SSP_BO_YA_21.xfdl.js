(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("work04");
            this.set_titletext("SMS발송이력조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"ROW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TRANS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_UNQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ISS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CB_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TRANS_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TRANS_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"TRANS_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ISS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_SEND_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CB_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TRANS_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CB_TEL_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"ROW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TRANS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_UNQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ISS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CB_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TRANS_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"COUNT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">20</Col><Col id=\"COUNT_NM\">20개씩</Col></Row><Row><Col id=\"COUNT\">50</Col><Col id=\"COUNT_NM\">50개씩</Col></Row><Row><Col id=\"COUNT\">100</Col><Col id=\"COUNT_NM\">100개씩</Col></Row><Row><Col id=\"COUNT\">1000</Col><Col id=\"COUNT_NM\">1000개씩</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custIssNo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_smsSendRsltCd", this);
            obj.set_useclientlayout("true");
            obj.set_filterstr("COM_USR_DEFN_NM_1.indexOf(\'S\') != -1");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_origin", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TRANS_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"TRANS_STR_END\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ISS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_SEND_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CB_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TRANS_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnLayoutClear",null,"171","110","28","251",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 초기화");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btnLayoutSave",null,"171","110","28","365",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이아웃 저장");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"150","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("static01","20","21",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_transDtm","20","21","70","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("발송일자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_sendStrDate","95","25","125","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_between","224","24","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_sendEndDate","235","25","125","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_inqPerdSprCd","365","25","107","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_inqPerdSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_text("선택");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_custIssNo","480","21","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("메시지 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_custIssNo","586","25","294","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_custIssNo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("cmb_smsSendRsltCd","890","21","70","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("발송상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_smsSendRsltCd","970","25","309","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_color("black");
            obj.set_tooltiptype("default");
            obj.set_text("AAA");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_smsSendRsltCd","1279","25","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_multiCombo");
            obj.set_text("");
            obj.set_border("1px solid gainsboro");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("static02","20","52",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_cbTelNo","20","52","70","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("발송번호");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_cbTelNo","95","56","265","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_cbTelNo","365","56","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_telNo","480","52","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("수신번호");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_telNo","586","56","265","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_telNo","856","56","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_mbr","890","52","70","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("회원");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_mbr","970","56","285","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_mbrMltPop","1258",null,"24","24",null,"70",null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_mbrTxt","1280",null,"24","24",null,"70",null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("static03","20","83",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_transMsg","20","83","70","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("메시지");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_TransMsg","95","86","785","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"124","60","26","85",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"124","60","26","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","206",null,null,"20","66",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회 결과가 없습니다.");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj.getSetter("griduserproperty").set("sort");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"68\"/><Column size=\"158\"/><Column size=\"95\"/><Column size=\"210\"/><Column size=\"108\"/><Column size=\"130\"/><Column size=\"190\"/><Column size=\"502\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"발송일자\"/><Cell col=\"2\" text=\"메시지 순번\"/><Cell col=\"3\" text=\"메시지 구분\"/><Cell col=\"4\" text=\"발송번호\"/><Cell col=\"5\" text=\"수신번호\"/><Cell col=\"6\" text=\"발송상태\"/><Cell col=\"7\" text=\"메세지\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:ROW_NO\"/><Cell col=\"1\" text=\"bind:TRANS_DTM\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:MSG_UNQ_NO\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:CUST_ISS_NO\" displaytype=\"normal\"/><Cell col=\"4\" text=\"bind:CB_TEL_NO\" displaytype=\"normal\"/><Cell col=\"5\" text=\"bind:TEL_NO\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:SMS_SEND_RSLT_CD\" displaytype=\"normal\"/><Cell col=\"7\" text=\"bind:TRANS_MSG\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20",null,"270","25",null,"grd_list:5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건, 1 / 1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"171","110","28","btnLayoutSave:-338",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_page","btnExcel:5","171","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_page");
            obj.set_codecolumn("COUNT");
            obj.set_datacolumn("COUNT_NM");
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"36","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list_excel","-20","1155",null,null,"-104","-364",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_list_excel");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회 결과가 없습니다.");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_selecttype("cell");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"68\"/><Column size=\"158\"/><Column size=\"95\"/><Column size=\"210\"/><Column size=\"108\"/><Column size=\"130\"/><Column size=\"190\"/><Column size=\"502\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell col=\"0\" text=\"NO\"/><Cell col=\"1\" text=\"발송일자\"/><Cell col=\"2\" text=\"메시지 순번\"/><Cell col=\"3\" text=\"메시지 구분\"/><Cell col=\"4\" text=\"발송번호\"/><Cell col=\"5\" text=\"수신번호\"/><Cell col=\"6\" text=\"발송상태\"/><Cell col=\"7\" text=\"메세지\"/></Band><Band id=\"body\"><Cell/><Cell displaytype=\"text\" text=\"bind:ROW_NO\"/><Cell col=\"1\" text=\"bind:TRANS_DTM\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:MSG_UNQ_NO\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:CUST_ISS_NO\" displaytype=\"normal\"/><Cell col=\"4\" text=\"bind:CB_TEL_NO\" displaytype=\"normal\"/><Cell col=\"5\" text=\"bind:TEL_NO\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:SMS_SEND_RSLT_CD\" displaytype=\"normal\"/><Cell col=\"7\" text=\"bind:TRANS_MSG\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_smsSendRsltCd","1030","49","250","240",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("ds_smsSendRsltCd");
            obj.set_scrollbartype("none none");
            obj.set_visible("false");
            obj.set_color("transparent");
            obj.set_background("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"24\"/><Column size=\"226\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"전체\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:COM_DTL_CD_NM\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"확인\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","form.cbo_page","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.cal_sendStrDate","value","ds_search","TRANS_STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.cal_sendEndDate","value","ds_search","TRANS_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.cmb_custIssNo","value","ds_search","CUST_ISS_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_cbTelNo","value","ds_search","CB_TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_telNo","value","ds_search","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.edt_mbr","value","ds_search","MBR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.edt_TransMsg","value","ds_search","TRANS_MSG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_21.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_YA_21.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_YA_21.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_YA_21.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_YA_21.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_YA_21
        /* 작 성 일 자 : 2023/06/02
        /* 작  성   자 : 이상민민
        /* 설       명 : 시스템관리 > SMS발송이력조회
        /***********************************************************/


        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp 			= nexacro.getApplication();		//application object
        this.fv_sessionData 	= this.getSession(); 			//session object
        this.totalCount 		= 0; 							//토탈카운트
        this.pageViewCnt		= 50; 							//페이지당 보여줄 목록 개수
        this.check 				= 0;							//초기 checkbox 셋팅값
        this.formId             = this.fn_getFormId(this);      // 등록한 폼의 아디을 기지고 오는 함수


        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회(조회기간구분코드)
        	this.fn_commonCodeSearch();

        	// 그리드 헤드클릭이벤트 내부함수 : (헤드클릭시 체크 무력화)
        	this._gfnHeadCheckSelectAll = function(){};

        	//회사코드 설정
        	this.ds_search.setColumn(0,"CO_CD",this.fv_sessionData.coCd);

        	//검색 초기값 설정
        	this.ds_search_origin.copyData(this.ds_search);

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "Div00_btn_search_onclick",
        		SHIFT_ENTER : "",
        		SHIFT_S : "",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_inqPerdSprCd=ds_output1 ds_transFormCd=ds_output2 ds_smsSendRsltCd=ds_output3 ds_custIssNo=ds_output4";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD,TRANS_FORM_CD,SMS_SEND_RSLT_CD,CUST_ISS_NO");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //조회
        this.fn_search = function(page) {
        	var sSvcId = "selectSmsSendHstList";
            var sUrl = "/co/sms/select-sms-send-hst-list.do";
        	var inDs = "ds_search=ds_search"
            var outDs = "ds_list=ds_output1";
            var arg;
            var callback = "fn_callBack";


        	// Multi검색조회 데이터 존재시 초기화
        	//this.fn_deleteMultiData("fn_callBack");

        	// 멀티입력 검색조건 Set
        	this.fn_setMultiSearch(this.formId,"CB_TEL_NO",  this.ds_search.getColumn(0,"CB_TEL_NO"));  	// 발송번호
        	this.fn_setMultiSearch(this.formId,"TEL_NO", this.ds_search.getColumn(0,"TEL_NO"));       		// 수신번호
        	this.fn_setMultiSearch(this.formId,"MBR_ID", this.ds_search.getColumn(0,"MBR_ID"));  	      	// 회원

            // 멀티입력조건 임시 테이블 저장 서비스 호출
            if(this.ds_select.getRowCount() > 0)
            {
        		this.fn_insertMultiData("fn_callBack");
        		this.ds_search.setColumn(0,"INQ_COND_DTLS", this.formId);
            };

        	 // 조회버튼 클릭시 페이징 초기화 시킨다.
        	 this.ds_search.setColumn(0,"ROW_COUNT", this.cbo_page.value);

        	 // 최초 조회일 경우,
        	 if( page == 0 ) {
        		this.div_paging.uPage=1;
        		this.div_paging.uPageNum=0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        	 }
        	 // 페이지 전환일 경우
        	 else{
        		 this.ds_search.setColumn(0,"START_NUM", this.div_paging.uPageNum);
        	 }

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        this.fn_excel_download = function() {
        	 var sSvcId = "selectSmsSendHstExcel";
             var sUrl = "/co/sms/select-sms-send-hst-list.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_list_excel=ds_output1";
             var arg;
             var callback = "fn_callBack";

        	this.ds_search.setColumn(0,"START_NUM", null);
        	this.ds_search.setColumn(0,"ROW_COUNT", null);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);

        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {

        	switch(svcID) {
        		case "commonCodeSearch" :

        			// 발송일자 설정
        			this.Div00.form.cmb_inqPerdSprCd.set_index(1);
        			this.fn_setPeriodDate();

        			// 메시지 구분 설정
        			this.ds_custIssNo.insertRow(0);
        			this.ds_custIssNo.setColumn(0, "COM_DTL_CD", '%');
        			this.ds_custIssNo.setColumn(0, "COM_DTL_CD_NM", '전체');
        			this.Div00.form.cmb_custIssNo.set_index(0);

        			// 발송상태 기본값 셋팅
        			this.ds_smsSendRsltCd.setColumn(0, 'CHK', '1');  // 결과수신대기(기본)
        			this.ds_smsSendRsltCd.setColumn(2, 'CHK', '1');  // 전송성공(기본)

        			// 조회결과 갯수 셋팅
        			this.cbo_page.set_index(1);

        			break;

        		case "selectSmsSendHstList" :

        			this.div_paging.set_visible(this.totalCount > 0);

        			//페이징 처리
        			this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.cbo_page.value, "fn_pageCallback");
        			break;

        		case "selectSmsSendHstExcel" :
        			this.ofn_exportExcel({ form:this, grid:this.grd_list_excel, fileName:"SMS발송이력조회" });
        			break;

        		default : "";
        	}

        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		//this.ds_search.setColumn(0,"START_NUM", (oPaging.uPageNum == 0 || oPaging.uPageNum == 1 ? 0 : ( oPaging.uPageNum -1 ) * 10));
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.div_paging.uPageNum);
        		this.fn_search();
        	}

        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건, "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.totalPageCount.set_text(sTotText);
        }

        //정렬 콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_list"){
        		oSortInfo = this.grd_list.uaSortInfo;

        		this.ds_search.setColumn(0,"SORT_COLUMN", oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE", oSortInfo.status);

        		this.fn_search();
        	}
        };

        //조건 팝업 콜백
        this.fn_popupCallback = function(sPopupId, sRetValue){
        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";

        	if(sRetValue == undefined){
        		return;
        	}else{
        		resData = JSON.parse(sRetValue);
        	}

        	switch(sPopupId){

        		case "mbrMultiPop":
        			for(var i=0; i<resData.length; i++){
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.MBR_ID + ",";
        				sNmList += rtnData.MBR_NM + ",";
        			}
        			this.ds_search.setColumn(0,"MBR_ID",sIdList.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"MBR_NM",sNmList.replace(/,\s*$/, ""));
        			break;
        		default :
        			break;
        	}
        };

        //조건 멀티 텍스트 팝업 콜백
        this.fn_multiTextPopupCallback = function(objID, rtnValue) {
        	var resParam = JSON.parse(rtnValue);
        	var splitedStringArr = resParam.textValue.split(",");

        	switch(objID){

        		case "cbTelNoMultiTextPopup":
        			this.ds_search.setColumn(0,"CB_TEL_NO",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        			break;

        		case "telNoMultiTextPopup":
        			this.ds_search.setColumn(0,"TEL_NO",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        			break;

        		case "mbrMultiTextPopup":
        			this.ds_search.setColumn(0,"MBR_ID",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"MBR_NM",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        			break;

        		default :
        			break;
        	}
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
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

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_list";
        	this.grd_list.uRightMouse = "true";
        	this.grd_list.uPersonalFlag = "true";
        	this.grd_list.uDefaultFormat = "ROW_NO,TRANS_DTM,CUST_ISS_NO,CB_TEL_NO,TEL_NO,SMS_SEND_RSLT_CD,TRANS_MSG";

        }

        this.cfn_personalPopupClose = function(sRet){
        	this.grd_list.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 검색영역 초기화
        this.clear = function() {
        	//검색 초기값 설정
        	this.ds_search.copyData(this.ds_search_origin);

        	// 메시지 구분 설정
        	this.Div00.form.cmb_custIssNo.set_index(0);

        	// 발송일자 설정
        	this.Div00.form.cmb_inqPerdSprCd.set_index(1);
        	this.fn_setPeriodDate();

        	// Multi검색조회 데이터 존재시 초기화
            this.fn_deleteMultiData("fn_callBack");

        	//발송상태 항목 설정
        	this.grd_smsSendRsltCd_init(this.grd_smsSendRsltCd);

        	// 조회결과 갯수 셋팅
        	this.cbo_page.set_index(1);
        };

        //조회기간 설정
        this.fn_setPeriodDate = function(){
        	var term = this.Div00.form.cmb_inqPerdSprCd.value;

        	if(term == "1") { this.Div00.form.cal_sendStrDate.set_value(this.gfn_addDate(this.gfn_getDate(),0)); } //1일
        	else if(term == "2") {this.Div00.form.cal_sendStrDate.set_value(this.gfn_addDate(this.gfn_getDate(),-6)) } //1주
        	else if(term == "3") {this.Div00.form.cal_sendStrDate.set_value(this.gfn_addDate(this.gfn_getDate(),-13)); } //2주
        	else if(term == "4") {this.Div00.form.cal_sendStrDate.set_value(this.gfn_addMonth(this.gfn_addDate(this.gfn_getDate(),+1),-1)); } //1개월
        	else if(term == "5") {this.Div00.form.cal_sendStrDate.set_value(this.gfn_addMonth(this.gfn_addDate(this.gfn_getDate(),+1),-3)); } //3개월
        	else if(term == "6") {this.Div00.form.cal_sendStrDate.set_value(this.gfn_addMonth(this.gfn_addDate(this.gfn_getDate(),+1),-6)); } //6개월
        	else if(term == "7") {this.Div00.form.cal_sendStrDate.set_value(this.gfn_addMonth(this.gfn_addDate(this.gfn_getDate(),+1),-12)); } //1년

        	this.Div00.form.cal_sendEndDate.set_value(this.gfn_getDate());
        }


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        // 발송상태 EDIT 클릭
        this.div00_btn_smsSendRsltCd_onclick = function(obj,e)
        {
            this.grd_smsSendRsltCd.set_visible(!this.grd_smsSendRsltCd.visible);
        	if(this.grd_smsSendRsltCd.visible) {
        		this.grd_smsSendRsltCd.setFocus();
        	}
        };

        // 발송상태 Dataset
        this.ds_smsSendRsltCd_oncolumnchanged = function(obj,e)
        {
            var status = new Array();
        	var stname = new Array();
        	for(var i = 0; i <= this.ds_smsSendRsltCd.rowcount; i++) {
        		if(this.ds_smsSendRsltCd.getColumn(i, "CHK") == '1') {
        			status[status.length] = this.ds_smsSendRsltCd.getColumn(i, "COM_DTL_CD"   );
        			stname[stname.length] = this.ds_smsSendRsltCd.getColumn(i, "COM_DTL_CD_NM");
        		}
        	}

        	// 발송상태값 설정
        	this.ds_search.setColumn(0, "SMS_SEND_RSLT_CD", status.join(","));
        	this.Div00.form.edt_smsSendRsltCd.set_value(stname.join(","));
        	var btooltip = (this.gfn_lengthByte(this.Div00.form.edt_smsSendRsltCd.value) * 6) > (this.Div00.form.edt_smsSendRsltCd.width - 10);
        	this.Div00.form.edt_smsSendRsltCd.set_tooltiptext(btooltip ? this.Div00.form.edt_smsSendRsltCd.value : null);
        };

        // 발송상태 에디터박스 버튼
        this.Div00_btn_smsSendRsltCd_onclick = function(obj,e)
        {
            this.grd_smsSendRsltCd.set_visible(!this.grd_smsSendRsltCd.visible);
         	if(this.grd_smsSendRsltCd.visible) {
          		this.grd_smsSendRsltCd.setFocus();
          	}
        };


        // 발송상태 Dataset
        this.ds_smsSendRsltCd_cancolumnchange = function(obj,e)
        {
        	return e.newvalue == '1' || this.ds_smsSendRsltCd.getCaseCount("CHK == '1'") > 1;
        };


        // 발송상태 조회조건 그리드 클릭
        this.grd_smsSendRsltCd_oncellclick = function(obj,e)
        {
        	if(e.cell == this.grd_smsSendRsltCd.getBindCellIndex("Body", "COM_DTL_CD_NM")) {
        		this.ds_smsSendRsltCd.setColumn(this.ds_smsSendRsltCd.rowposition, "CHK", (this.ds_smsSendRsltCd.getColumn(this.ds_smsSendRsltCd.rowposition, "CHK") == '1' ? '0' : '1'));
        	}
        };

        // 발송상태 그리드 닫기
        this.grd_smsSendRsltCd_onkillfocus = function(obj,e)
        {
        	if(e.newcomponent.id != this.Div00.form.edt_smsSendRsltCd.id && e.newcomponent.id != this.Div00.form.btn_smsSendRsltCd.id) {
        		this.grd_smsSendRsltCd.set_visible(false);
        	}
        };

        // 발송상태 그리드 키 다운
        this.grd_smsSendRsltCd_onkeydown = function(obj,e)
        {
            if(e.keycode == 32 && this.grd_smsSendRsltCd.getCellPos() != this.grd_smsSendRsltCd.getBindCellIndex("Body", "CHK")) {
        		this.ds_smsSendRsltCd.setColumn(this.ds_smsSendRsltCd.rowposition, "CHK", (this.ds_smsSendRsltCd.getColumn(this.ds_smsSendRsltCd.rowposition, "CHK") == '1' ? '0' : '1'));
        	} else if(e.keycode == 13) {
        		this.grd_smsSendRsltCd.set_visible(false);
        	}
        };

        // 발송상태 그리드 헤더 클릭
        this.grd_smsSendRsltCd_onheadclick = function(obj,e)
        {
            var cell = obj.getBindCellIndex("body", "CHK");
        	var val = (obj.getCellProperty("head", cell, "text")||'0') == '0' ? '1' : '0';

        	obj.setCellProperty("head", cell, "text", val);

            this.ds_smsSendRsltCd.setColumn(0, 'CHK', '1');  // 결과수신대기(기본)
        	this.ds_smsSendRsltCd.setColumn(2, 'CHK', '1');  // 전송성공(기본)

        	for(var i = 1; i < this.ds_smsSendRsltCd.rowcount; i++) {
        	    if (i != 0 && i != 2 ){
        			this.ds_smsSendRsltCd.setColumn(i, "CHK", val);
        		}
        	}
        };

        // 발송상태 그리드 초기화
        this.grd_smsSendRsltCd_init = function(obj,e)
        {
            var cell = obj.getBindCellIndex("body", "CHK");
        	var val = "0";

        	obj.setCellProperty("Head", cell, "text", val);

        	this.ds_smsSendRsltCd.set_enableevent(false);
         	for(var i = this.ds_smsSendRsltCd.rowcount; i >= 0; i--) {
         	    this.ds_smsSendRsltCd.setColumn(i, "CHK", val);
         	}
        	this.ds_smsSendRsltCd.set_enableevent(true);

        	this.ds_smsSendRsltCd.setColumn(0, 'CHK', '1');  // 결과수신대기(기본)
        	this.ds_smsSendRsltCd.setColumn(2, 'CHK', '1');  // 전송성공(기본)
        };

        // 발송상태 그리드 확인 버튼
        this.grd_smsSendRsltCd_onsummaryclick = function(obj,e)
        {
        	this.grd_smsSendRsltCd.set_visible(false);
        };

        //발송번호 텍스트 입력 팝업
        this.Div00_cbTelNo_onclick = function(obj,e)
        {
        	var params = {
        		textId : this.Div00.form.edt_cbTelNo
        	};

        	var options = {};
        	options.title = "발송번호";

        	this.gfn_openPopup("cbTelNoMultiTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_multiTextPopupCallback", options);
        };

        //수신번호 텍스트 입력 팝업
        this.Div00_telNo_onclick = function(obj,e)
        {
        	var params = {
        		textId : this.Div00.form.edt_telNo
        	};

        	var options = {};
        	options.title = "발송번호";

        	this.gfn_openPopup("telNoMultiTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_multiTextPopupCallback", options);
        };

        //회원 조건 팝업
        this.Div00_btn_mbrMltPop_onclick = function(obj,e)
        {
        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	var objParam = {
        		coCd : this.fv_sessionData.coCd,
        		mbrId: this.Div00.form.edt_mbr.value,
        		mbrNm: ""
        	};
        	this.gfn_openPopup("mbrMultiPop", "CO_POP::SSP_BO_PP_25.xfdl", objParam);
        };

        //회원 조건 텍스트 입력 팝업
        this.Div00_btn_mbrTxt_onclick = function(obj,e)
        {
        	var params = {
        		textId : this.Div00.form.edt_mbr
        	};

        	var options = {};
        	options.title = "회원";

        	this.gfn_openPopup("mbrMultiTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_multiTextPopupCallback", options);
        };

        //조회버튼
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	this.fn_search(0);
        };

        //레이아웃 저장 버튼
        this.btnLayoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list", this.grd_list.getCurFormatString());
        };

        //레이아웃 초기화
        this.btnLayoutClear_onclick = function(obj,e)
        {
        	//suOrgFormat
        	this.gfn_personalReset("grd_list");
        	this.grd_list.set_formats(this.grd_list.uOrgFormat);
        };

        //초기화
        this.Div00_btnClear_onclick = function(obj,e)
        {
        	this.clear();
        };

        // 엑셀추출버튼
        this.btnExcel_onclick = function(obj,e)
        {
        	if(this.ds_search.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        		alert(this.gfn_getMessage("COMS000007")); //조회 조건이 변경 되었습니다.\n다시 조회하시기 바랍니다.
        		return false;
        	}

        	this.fn_excel_download();
        };

        // 발송일자 기간 설정
        this.cmb_inqPerdSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_setPeriodDate();
        };

        //페이징 갯수 목록 변경시
        this.cbo_page_onitemchaged = function(obj,e)
        {
        	this.Div00_btn_search_onclick();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.btnLayoutClear.addEventHandler("onclick",this.btnLayoutClear_onclick,this);
            this.btnLayoutSave.addEventHandler("onclick",this.btnLayoutSave_onclick,this);
            this.Div00.addEventHandler("onkeyup",this.Div00_onkeyup,this);
            this.Div00.form.cmb_inqPerdSprCd.addEventHandler("onitemchanged",this.cmb_inqPerdSprCd_onitemchanged,this);
            this.Div00.form.edt_smsSendRsltCd.addEventHandler("oneditclick",this.div00_btn_smsSendRsltCd_onclick,this);
            this.Div00.form.btn_smsSendRsltCd.addEventHandler("onclick",this.div00_btn_smsSendRsltCd_onclick,this);
            this.Div00.form.edt_cbTelNo.addEventHandler("onchanged",this.div00_edt_cbTelNo_onchanged,this);
            this.Div00.form.btn_cbTelNo.addEventHandler("onclick",this.Div00_cbTelNo_onclick,this);
            this.Div00.form.edt_telNo.addEventHandler("onchanged",this.div00_edt_cbTelNo_onchanged,this);
            this.Div00.form.btn_telNo.addEventHandler("onclick",this.Div00_telNo_onclick,this);
            this.Div00.form.btn_mbrMltPop.addEventHandler("onclick",this.Div00_btn_mbrMltPop_onclick,this);
            this.Div00.form.btn_mbrTxt.addEventHandler("onclick",this.Div00_btn_mbrTxt_onclick,this);
            this.Div00.form.edt_TransMsg.addEventHandler("onchanged",this.Div00_edt_prdId_onchanged,this);
            this.Div00.form.btnClear.addEventHandler("onclick",this.Div00_btnClear_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.cbo_page.addEventHandler("onitemchanged",this.cbo_page_onitemchaged,this);
            this.grd_list_excel.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.grd_smsSendRsltCd.addEventHandler("onkillfocus",this.grd_smsSendRsltCd_onkillfocus,this);
            this.grd_smsSendRsltCd.addEventHandler("onkeydown",this.grd_smsSendRsltCd_onkeydown,this);
            this.grd_smsSendRsltCd.addEventHandler("onheadclick",this.grd_smsSendRsltCd_onheadclick,this);
            this.grd_smsSendRsltCd.addEventHandler("onsummaryclick",this.grd_smsSendRsltCd_onsummaryclick,this);
            this.grd_smsSendRsltCd.addEventHandler("oncellclick",this.grd_smsSendRsltCd_oncellclick,this);
            this.ds_smsSendRsltCd.addEventHandler("cancolumnchange",this.ds_smsSendRsltCd_cancolumnchange,this);
            this.ds_smsSendRsltCd.addEventHandler("oncolumnchanged",this.ds_smsSendRsltCd_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_YA_21.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
