(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CN_02");
            this.set_titletext("공지사항 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTCC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NOTCC_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"NOTCC_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"TOP_NOTC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NOTCC_INQ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"NOTCC_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TGT_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTCC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupYN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_noticSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">로그인 전</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">로그인 후</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnit", this);
            obj._setContents("<ColumnInfo><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_files", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"size\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_top_info","20","0","1240",null,null,"20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","206",null,"396","0",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static27","0","Static21:-1",null,"170","0",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static17_00","0","175",null,"32","0",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static17","0","144",null,"32","0",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static23_01","0","113",null,"32","0",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static65","0","82",null,"32","0",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static07","0","51",null,"32","0",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static03","0","20",null,"32","0",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static02","0","20","130","32",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("0");
            obj.set_text("게시구분");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static06","0","51","130","32",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("2");
            obj.set_text("공지대상");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static10","0","82","130","32",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("4");
            obj.set_text("게시기간");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static12","0","113","130","32",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("5");
            obj.set_text("팝업여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static22_01","531","51","130","32",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("15");
            obj.set_text("대상설정");
            obj.set_cssclass("sta_cm_box01L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static16","0","144","130","32",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("6");
            obj.set_text("상단공지");
            obj.set_cssclass("sta_cm_box01L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static16_00","0","175","130","32",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("18");
            obj.set_text("제목");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static20","0","206","130","396",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("8");
            obj.set_text("내용");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static26","0","Static20:-1","130","170",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("10");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_cm_box01L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-148","150","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("12");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-148","150","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("13");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Radio("NOTCC_NOTIC_SPR_CD","140","25","190","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_noticSprCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            obj.set_text("로그인 전");
            obj.set_value("10");
            obj.set_index("0");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Edit("OPR_UNIT_NM_LIST","665","55",null,"24","33",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("20");
            obj.set_enable("false");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Button("btnTarget","OPR_UNIT_NM_LIST:4","55","24","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_search02");
            obj.set_enable("false");
            obj.set_text("");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Radio("TGT_SET_YN","140","55","190","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            obj.set_enable("true");
            var div_top_info_form_TGT_SET_YN_innerdataset = new nexacro.NormalDataset("div_top_info_form_TGT_SET_YN_innerdataset", obj);
            div_top_info_form_TGT_SET_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">대상설정</Col></Row></Rows>");
            obj.set_innerdataset(div_top_info_form_TGT_SET_YN_innerdataset);
            obj.set_text("전체");
            obj.set_value("N");
            obj.set_index("0");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Calendar("NOTIC_STR_DT","140","86","181","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("23");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static02_00","326","86","10","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("24");
            obj.set_text("~");
            obj.set_positionstep("0");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Calendar("NOTIC_END_DT","338","86","181","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("25");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static22_01_00","531","113","130","32",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("26");
            obj.set_text("팝업기간");
            obj.set_cssclass("sta_cm_box01L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Calendar("POPUP_STR_DT","665","117","181","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("27");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            obj.set_enable("false");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","851","117","10","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("28");
            obj.set_text("~");
            obj.set_positionstep("0");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Calendar("POPUP_END_DT","863","117","181","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("29");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            obj.set_enable("false");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Radio("POPUP_YN","140","117","190","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("30");
            obj.set_innerdataset("ds_popupYN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_columncount("2");
            obj.set_text("미사용");
            obj.set_value("N");
            obj.set_index("1");
            this.div_top_info.addChild(obj.name, obj);

            obj = new CheckBox("notiYN","531","86","150","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("31");
            obj.set_text("종료일 없음");
            this.div_top_info.addChild(obj.name, obj);

            obj = new CheckBox("TOP_NOTC_YN","140","148","150","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("32");
            obj.set_text("상단공지");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Edit("NOTCC_TTL","140","179",null,"24","10",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("33");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Button("Button01","555",null,"70","30",null,"0",null,null,null,null,this.div_top_info.form);
            obj.set_taborder("34");
            obj.set_text("취소");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Button("Button01_00","635",null,"70","30",null,"0",null,null,null,null,this.div_top_info.form);
            obj.set_taborder("35");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.div_top_info.addChild(obj.name, obj);

            obj = new TextArea("NOTCC_CTS","140","217",null,null,"10","229",null,null,null,null,this.div_top_info.form);
            obj.set_taborder("36");
            this.div_top_info.addChild(obj.name, obj);

            obj = new WebBrowser("WebEditor","140","217","1090","374",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("37");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Div("Div00","140","606","1090","154",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("38");
            obj.set_text("Div00");
            obj.set_url("CO::fileUpload.xfdl");
            this.div_top_info.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv3","364","905","330","230",null,null,null,null,null,null,this);
            obj.getSetter("positionstep").set("0");
            obj.set_background("#fffff");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("searchStartDate","6","10","149","172",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_value("");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Calendar("searchEndDate","165","10","149","172",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_confirm","99","192","60","24",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("3");
            obj.set_text("Confirm");
            obj.getSetter("uWord").set("popup.ok");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_cancel","169","192","60","24",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("2");
            obj.set_text("Cancel");
            obj.getSetter("uWord").set("popup.cancel");
            this.PopupDiv3.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,840,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_top_info.form.NOTCC_NOTIC_SPR_CD","value","ds_detail","NOTCC_NOTIC_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_top_info.form.TGT_SET_YN","value","ds_detail","TGT_SET_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_top_info.form.NOTIC_STR_DT","value","ds_detail","NOTIC_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_top_info.form.NOTIC_END_DT","value","ds_detail","NOTIC_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_top_info.form.POPUP_YN","value","ds_detail","POPUP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_top_info.form.POPUP_STR_DT","value","ds_detail","POPUP_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_top_info.form.POPUP_END_DT","value","ds_detail","POPUP_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_top_info.form.NOTCC_TTL","value","ds_detail","NOTCC_TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_top_info.form.OPR_UNIT_NM_LIST","value","ds_detail","OPR_UNIT_NM_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_top_info.form.TOP_NOTC_YN","value","ds_detail","TOP_NOTC_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_top_info.form.NOTCC_CTS","value","ds_detail","NOTCC_CTS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CO::fileUpload.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CN_02.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_CN_02.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_CN_02
        /* 작 성 일 자 : 2022/02/16
        /* 작  성   자 : 이성민
        /* 설       명 : 공지사항 상세조회 팝업
        /***********************************************************/


        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.valiFormIds = [
        	{ "id" : "NOTCC_NOTIC_SPR_CD", "name" : "게시구분" }
          , { "id" : "TGT_SET_YN", "name" : "공지대상" }
          , { "id" : "NOTIC_STR_DT", "name" : "게시기간 시작일" }
          , { "id" : "NOTCC_TTL", "name" : "제목" }
          , { "id" : "NOTCC_CTS", "name" : "내용" }
        ];

        //달력구분
        this.calendarType = "";

        //달력 초기값 설정.
        this.objDate = new Date();
        this.today = this.objDate.getFullYear() + ((this.objDate.getMonth() + 1) + "").padLeft(2, '0') + (this.objDate.getDate() + "").padLeft(2, '0');


        //에디터 변수
        this.fvDocWeb = "";
        this.fvRtnHeight = 260; //버튼사이즈

        //첨부파일 변수
        this.fileDs = "";
        this.fileUpTransfer = "";
        this.docRegId = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	this.gfn_formOnLoad(this);

        	this.ds_detail.addRow();

        	//초기값 설정
        	this.initSetValue();

        	var sUrl = nexacro.getEnvironment().services["svcUrl"].url + "smartEditor/SmartEditor2.html";
        	this.div_top_info.form.WebEditor.set_url(sUrl);

        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/

        //저장
        this.fn_save = function() {
        	var sSvcId = "SSP_BO_CN_02_SAVE";
            var sUrl = "/co/save_notice.do";
        	var inDs = "ds_save=ds_detail:U ds_oprUnit=ds_oprUnit ds_file=ds_files:U"
            var outDs = "";
            var arg;
            var callback = "fn_callback";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);

        }

        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select_common_code_list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_noticSprCd=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "NOTCC_NOTIC_SPR_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };



        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //콜백 이벤트
        this.fn_callback = function(svcID, errorCode, errorMsg){
        	if(svcID == "SSP_BO_CN_02"){

        		// 라디오 이벤트
        		this.fn_radioChage("NOTCC_NOTIC_SPR_CD");
        		this.fn_radioChage("TGT_SET_YN");
        		this.fn_radioChage("POPUP_YN");

        	} else if( svcID == "SSP_BO_CN_02_SAVE" ) {
        		if( errorCode != 0 ) {
        			alert(errorMsg);
        			return false;
        		} else {
        			this.opener.fn_detailClose("save");
        			this.close();
        		}
        	} else if( svcID == "commonCodeSearch" ) {

        	}
        }

        //팝업콜백
        this.fn_popupCallback = function(sPopupId, sRetValue) {
        	var resData = "";
        	var sNmList = "";

        	if(sRetValue == undefined){
        		return;
        	}else{
        		resData = JSON.parse(sRetValue);
        	}


        	//대상조회 팝업
        	if( sPopupId == "oprUntMultiPop" ){

        		this.ds_oprUnit.clearData();

        		for(var i = 0; i < resData.length; i++){
        			var rtnData = JSON.parse(resData[i]);
        			sNmList += rtnData.OPR_UNIT_NM +",";

        			//데이터셋 별도 지정.
        			var row = this.ds_oprUnit.addRow();
        			this.ds_oprUnit.setColumn(row, "OPR_UNIT_ID", rtnData.OPR_UNIT_ID);
        			this.ds_oprUnit.setColumn(row, "OPR_UNIT_NM", rtnData.OPR_UNIT_NM);
        			this.ds_oprUnit.setColumn(row, "CO_CD", rtnData.CO_CD);
        			this.ds_oprUnit.setColumn(row, "BZPLC_ID", rtnData.BZPLC_ID);
        		}
        		trace(sNmList);
        		this.ds_detail.setColumn(0, "OPR_UNIT_NM_LIST", sNmList.replace(/,\s*$/, ""));

        	} else if( sPopupId == "SSP_BO_CN_02" ){

        	}

        }


        //파일 업로드 콜백.
        this.fn_fileUploadCallback = function(result) {

        	if( result.code == "success" ) {
        		this.docRegId = result.docRegId;

        		//문서번호 설정.
        		if( this.fileDs.rowcount > 0 ) {
        			this.ds_detail.setColumn(0, "DOC_REG_ID", this.docRegId);
        			this.ds_detail.set_updatecontrol(false);
        			this.ds_detail.setRowType(0, Dataset.ROWTYPE_UPDATE);
        		} else {
        			if( docRegId == undefined ) {
        				this.ds_detail.setColumn(0, "DOC_REG_ID", "");
        			}
        		}
        	}

        	// 등록함수 호출
        	this.fn_save("I");
        }

        //삭제한 로우를 강제로 받아온다.
        this.fn_fileDeleteCallback = function(dataset) {
        	var deletedRowsCount = dataset.getDeletedRowCount();
        	var rowSet = dataset.getDeletedRowset();

        	for(var i = 0; i < deletedRowsCount; i++) {
        		this.ds_files._deletedRecords[i] = rowSet[i];
        	}
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //초기값 설정
        this.initSetValue = function() {

        	//this.ds_detail.setColumn(0, "NOTCC_NOTIC_SPR_CD", )

        	//달력 기본값
        	this.ds_detail.setColumn(0, "NOTIC_STR_DT", this.today.substring(0,6) + "01");
        	this.ds_detail.setColumn(0, "NOTIC_END_DT", this.today);

        	//게시구분 기본값
        	this.ds_detail.setColumn(0, "NOTCC_NOTIC_SPR_CD", "N");

        	//공지대상 기본값
        	this.ds_detail.setColumn(0, "TGT_SET_YN", "N");

        	//팝업여부 기본값
        	this.ds_detail.setColumn(0, "POPUP_YN", "N");

        	this.fn_radioChage("NOTCC_NOTIC_SPR_CD");
        	this.fn_radioChage("TGT_SET_YN");
        	this.fn_radioChage("POPUP_YN");


        	// include ds get
        	this.fileDs = this.div_top_info.form.Div00.form.ds_files;
        	//파일 트랜스퍼 연결
        	this.fileUpTransfer = this.div_top_info.form.Div00.form.FileUpTransfer;
        	//부모창 최상위값 연결
        	this.div_top_info.form.Div00.form.parentForm = this;
        }


        //라디오 변경 이벤트
        this.fn_radioChage = function(objId) {
        	if( objId == "TGT_SET_YN" ) {
        		if( this.div_top_info.form[objId].value == "Y" ) {
        			 this.div_top_info.form.OPR_UNIT_NM_LIST.set_enable(true);
        			 this.div_top_info.form.btnTarget.set_enable(true);
        		} else {
        			this.div_top_info.form.OPR_UNIT_NM_LIST.set_enable(false);
        			this.div_top_info.form.OPR_UNIT_NM_LIST.set_value("");
        			this.div_top_info.form.btnTarget.set_enable(false);
        		}
        	} else if( objId == "POPUP_YN" ) {
        		if( this.div_top_info.form[objId].value == "Y" ) {
        			 this.div_top_info.form.POPUP_STR_DT.set_enable(true);
        			 this.div_top_info.form.POPUP_END_DT.set_enable(true);
        		} else {
        			this.div_top_info.form.POPUP_STR_DT.set_enable(false);
        			this.div_top_info.form.POPUP_END_DT.set_enable(false);
        			this.div_top_info.form.POPUP_STR_DT.set_value("");
        			this.div_top_info.form.POPUP_END_DT.set_value("");
        		}
        	} else if( objId == "NOTCC_NOTIC_SPR_CD" ) {
        		if( this.div_top_info.form[objId].value == "N" ) {
        			//공지대상
        			this.div_top_info.form.TGT_SET_YN.set_enable(false);
        			this.ds_detail.setColumn(0, "TGT_SET_YN", "N");
        			//대상설정
        			this.div_top_info.form.OPR_UNIT_NM_LIST.set_enable(false);
        			this.div_top_info.form.OPR_UNIT_NM_LIST.set_value("");

        			this.div_top_info.form.btnTarget.set_enable(false);
        		} else {
        			this.div_top_info.form.TGT_SET_YN.set_enable(true);
        		}
        	}


        }

        //팝업호출
        this.fn_popup = function(type) {
        	if( type == "TARGET" ){
        		var objParam = {};
        		this.gfn_openPopup("oprUntMultiPop", "CO_POP::operateUnitMultiPopup.xfdl", objParam, "fn_popupCallback");
        	}
        }




        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //공지대상 선택 이벤트
        this.div_top_info_TGT_SET_YN_onitemchanged = function(obj,e) {
        	this.fn_radioChage("TGT_SET_YN");
        };

        //팝업여부 선택
        this.div_top_info_POPUP_YN_onitemchanged = function(obj,e) {
        	this.fn_radioChage("POPUP_YN");
        };



        //등록버튼 이벤트
        this.Div_top_info_Button01_00_onclick = function(obj,e) {
        	/*
        	if( this.parent.type == "U" ) {
        		var chkDsChange = this.fn_dataChangeCheck(this.ds_detail); //this.fn_dataCheck(this.ds_comCdList);
        		if( !chkDsChange ) {
        			alert("수정된 내용이 없습니다.");
        			return false;
        		}
        	}
        	*/

        	//에디터 내용을 가져오기
        	this.fvDocWeb.getProperty("editorGetBtn").callMethod("click");
         	var sEditorData = this.fvDocWeb.getProperty("ir1").getProperty("value");

        	//NOTCC_CTS에 세팅
        	this.ds_detail.setColumn(0, "NOTCC_CTS", sEditorData);


        	// 필수값 체크
        	var validation = this.fn_validationForm(this.div_top_info, this.valiFormIds, this.ds_detail);

        	if( validation ) {
        		if( this.ds_detail.getColumn(0 , "TGT_SET_YN") == "Y" ) {
        			if( this.ds_detail.getColumn(0, "OPR_UNIT_NM_LIST") == undefined ) {
        				alert("대상 설정을 해주시기 바랍니다.");
        				this.fn_popup("TARGET");
        				return false;
        			}
        		}

        		console.log(this.fileDs);

        		if( this.confirm("저장 하시겠습니까?") ){
        			if( this.fileDs.rowcount > 0 ) {
        				alert("this.fileDs.rowcount==>" + this.fileDs.rowcount + "//" + this.ds_detail.getColumn(0, "DOC_REG_ID"));
        				this.fileUpTransfer.setPostData("docRegId", this.ds_detail.getColumn(0, "DOC_REG_ID"));
        				this.fileUpTransfer.upload('/co/file_upload.do');
        			} else {
        				this.fn_save("U");
        			}
        		}
        	}
        };

        //공지대상 날짜 드롭다운 이벤트
        this.div_top_info_NOTIC_STR_DT_ondropdown = function(obj,e) {
        	this.PopupDiv3.form.searchStartDate.set_value(this.ds_detail.getColumn(0, "NOTIC_STR_DT"));
        	this.PopupDiv3.form.searchEndDate.set_value(this.ds_detail.getColumn(0, "NOTIC_END_DT"));
        	this.PopupDiv3.trackPopupByComponent(this.div_top_info.form.NOTIC_STR_DT, 0, obj.height);

        	//this.PopupDiv3.form.searchStartDate.set_value(this.today.substring(0,6) + "01");
        	//this.PopupDiv3.form.searchEndDate.set_value(this.today);

        	this.calendarType = "NOTIC";
        };
        // 팝업여부 드롭다운 이벤트
        this.div_top_info_POPUP_STR_DT_ondropdown = function(obj,e) {
        	this.PopupDiv3.form.searchStartDate.set_value( this.ds_detail.getColumn(0, "POPUP_STR_DT") == undefined ? this.today.substring(0,6) + "01" : this.ds_detail.getColumn(0, "POPUP_STR_DT") );
        	this.PopupDiv3.form.searchEndDate.set_value( this.ds_detail.getColumn(0, "POPUP_END_DT")  == undefined ? this.today : this.ds_detail.getColumn(0, "POPUP_STR_DT") );
        	this.PopupDiv3.trackPopupByComponent(this.div_top_info.form.POPUP_STR_DT, 0, obj.height);

        	this.calendarType = "POP";
        };


        //달력의 확인버튼
        this.PopupDiv3_btn_confirm_onclick = function(obj,e) {
        	var sFrom = this.PopupDiv3.form.searchStartDate.value;
        	var sTo = this.PopupDiv3.form.searchEndDate.value;

        	if( this.calendarType == "NOTIC" ) {
        		this.ds_detail.setColumn(0, "NOTIC_STR_DT", sFrom);
        		this.ds_detail.setColumn(0, "NOTIC_END_DT", sTo);
        	} else if( this.calendarType == "POP" ) {
        		this.ds_detail.setColumn(0, "POPUP_STR_DT", sFrom);
        		this.ds_detail.setColumn(0, "POPUP_END_DT", sTo);
        	}

        	//this.searchStartDate.set_value(sFrom);
        	//this.searchEndDate.set_value(sTo);

        	this.PopupDiv3.closePopup();

        };


        //달력 취소버튼
        this.PopupDiv3_btn_cancel_onclick = function(obj,e) {
        	this.PopupDiv3.closePopup();
        };

        //달력 close
        this.PopupDiv3_oncloseup = function(obj,e) {
        	if(this.PopupDiv3.form.searchStartDate.value > this.PopupDiv3.form.searchEndDate.value){
        		this.alert("종료일은 시작일보다 클 수 없습니다.");

        		if( this.calendarType == "NOTIC" ) {
        			this.div_top_info.form.NOTIC_END_DT.set_value("");
        			this.div_top_info.form.NOTIC_END_DT.setFocus();
        		} else if( this.calendarType == "POP" ) {
        			this.div_top_info.form.POPUP_END_DT.set_value("");
        			this.div_top_info.form.POPUP_END_DT.setFocus();
        		}

        	}
        };

        this.div_top_info_notiYN_onclick = function(obj,e) {
        	if( obj.value ) {
        		this.div_top_info.form.NOTIC_END_DT.set_value("99991231");
        		this.div_top_info.form.NOTIC_END_DT.set_enable(false);
        	} else {
        		this.div_top_info.form.NOTIC_END_DT.set_value(this.ds_detail.getOrgColumn(0, "NOTIC_END_DT") == undefined ? this.today : this.ds_detail.getOrgColumn(0, "NOTIC_END_DT"));
        		this.div_top_info.form.NOTIC_END_DT.set_enable(true);
        	}
        };

        //대상설정 팝업
        this.Tab00_Tabpage1_div_search_btnTarget_onclick = function(obj,e)
        {
        	this.fn_popup("TARGET");
        };

        //취소버튼
        this.div_top_info_Button01_onclick = function(obj,e)
        {
        	this.close();
        };

        //상단공지 여부
        this.div_top_info_TOP_NOTC_YN_onclick = function(obj,e)
        {
        	if( obj.value ) {
        		this.ds_detail.setColumn(0, "TOP_NOTC_YN", "Y");
        	} else {
        		this.ds_detail.setColumn(0, "TOP_NOTC_YN", "N");
        	}
        };

        //게시구분 변경 이벤트
        this.Div_top_info_Radio00_onitemchanged = function(obj,e)
        {
        	this.fn_radioChage("NOTCC_NOTIC_SPR_CD");
        };




        /***********************************************************************************************
        *  웹 에디터 관련  이벤트 영역
        ************************************************************************************************/


        this.fnEditorCallback = function(sType) {
        	switch (sType) {
        		case "onload" :
        			var sContents = "";
        			this.fvDocWeb.getProperty("ir1").setProperty("value",sContents);
        			this.fvDocWeb.getProperty("editorSetBtn").callMethod("click");

        			break;
        	}
        };

        this.webEditor_onloadcompleted = function(obj,e) {
        	this.fvDocWeb = this.div_top_info.form.WebEditor.getProperty("document").getProperty("all");
        };

        this.webEditor_onusernotify = function(obj,e) {
        	try 	{
        		// parent의 최상의 Form에 이벤트 발생시킴
        		var oForm = this;
        		if (oForm && oForm.fnEditorCallback) 		{
        			if (e.userdata == "onload") {
        				var initHeight = this.div_top_info.form.WebEditor.getOffsetHeight();
        				this.fnResize(obj.getOffsetWidth(), initHeight-this.fvRtnHeight);
        			}

        			oForm.fnEditorCallback(e.userdata);
        		}
        	} catch(e) {
        		trace("webEditor :: webEditor_onusernotify() => " + e.message);
        	}
        };


        this.fnResize = function(nWidth, nHeight) {

        	var sValue = nWidth+","+nHeight;

        	this.fvDocWeb.getProperty("resize").setProperty("value",sValue);
        	this.fvDocWeb.getProperty("btnResize").callMethod("click");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.div_top_info.form.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_top_info.form.NOTCC_NOTIC_SPR_CD.addEventHandler("onitemchanged",this.Div_top_info_Radio00_onitemchanged,this);
            this.div_top_info.form.btnTarget.addEventHandler("onclick",this.Tab00_Tabpage1_div_search_btnTarget_onclick,this);
            this.div_top_info.form.TGT_SET_YN.addEventHandler("onitemchanged",this.div_top_info_TGT_SET_YN_onitemchanged,this);
            this.div_top_info.form.NOTIC_STR_DT.addEventHandler("ondropdown",this.div_top_info_NOTIC_STR_DT_ondropdown,this);
            this.div_top_info.form.NOTIC_END_DT.addEventHandler("ondropdown",this.div_top_info_NOTIC_STR_DT_ondropdown,this);
            this.div_top_info.form.POPUP_STR_DT.addEventHandler("ondropdown",this.div_top_info_POPUP_STR_DT_ondropdown,this);
            this.div_top_info.form.POPUP_END_DT.addEventHandler("ondropdown",this.div_top_info_POPUP_STR_DT_ondropdown,this);
            this.div_top_info.form.POPUP_YN.addEventHandler("onitemchanged",this.div_top_info_POPUP_YN_onitemchanged,this);
            this.div_top_info.form.notiYN.addEventHandler("onclick",this.div_top_info_notiYN_onclick,this);
            this.div_top_info.form.Button01.addEventHandler("onclick",this.div_top_info_Button01_onclick,this);
            this.div_top_info.form.Button01_00.addEventHandler("onclick",this.Div_top_info_Button01_00_onclick,this);
            this.div_top_info.form.WebEditor.addEventHandler("onloadcompleted",this.webEditor_onloadcompleted,this);
            this.div_top_info.form.WebEditor.addEventHandler("onsize",this.webEditor_onsize,this);
            this.div_top_info.form.WebEditor.addEventHandler("onusernotify",this.webEditor_onusernotify,this);
            this.PopupDiv3.addEventHandler("oncloseup",this.PopupDiv3_oncloseup,this);
            this.PopupDiv3.form.btn_confirm.addEventHandler("onclick",this.PopupDiv3_btn_confirm_onclick,this);
            this.PopupDiv3.form.btn_cancel.addEventHandler("onclick",this.PopupDiv3_btn_cancel_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CN_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
