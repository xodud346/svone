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
            this.set_titletext("약관 관리 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,880);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"UT_CLAUS_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_utClausDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"UT_CLAUS_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"CLAUS_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CLAUS_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UT_CLAUS_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UT_CLAUS_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_NO_END_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_utClausSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_save","20","0",null,"790","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_utClausCts","140","180",null,"600","10",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("3");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static65","0","175",null,"610","0",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static07","0","84",null,"32","0",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static03","0","53",null,"32","0",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static00","0","22","300","30",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("0");
            obj.set_text("이용 약관");
            obj.set_cssclass("sta_WF_title01");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static02","0","53","130","32",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("4");
            obj.set_text("유형");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static06","0","84","130","32",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("6");
            obj.set_text("상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static10","0","175","130","610",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("8");
            obj.set_text("내용");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_save.addChild(obj.name, obj);

            obj = new Combo("cmb_utClausSprCd","140","58","296","24",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_utClausSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_index("-1");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","114",null,"32","0",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","0","144",null,"32","0",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","114","130","32",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("12");
            obj.set_text("게시 일자");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static06_02","0","144","130","32",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("13");
            obj.set_text("개정 이력");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_save.addChild(obj.name, obj);

            obj = new Edit("edt_qstTtl","140","148",null,"24","15",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("2");
            obj.set_maxlength("60");
            obj.set_displaynulltext("최대 60자 까지 입력하실 수 있습니다.");
            this.div_save.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","140","88","285","24",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_save_form_rdo_useYn_innerdataset = new nexacro.NormalDataset("div_save_form_rdo_useYn_innerdataset", obj);
            div_save_form_rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(div_save_form_rdo_useYn_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.div_save.addChild(obj.name, obj);

            obj = new Calendar("cal_regStartDate","139","118","140","24",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("15");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static59","283","118","9","24",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("16");
            obj.set_text("~");
            this.div_save.addChild(obj.name, obj);

            obj = new Calendar("cal_regEndDate","296","118","140","24",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("17");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            obj.set_usecontextmenu("true");
            obj.set_editformat("yyyy-MM-dd");
            this.div_save.addChild(obj.name, obj);

            obj = new CheckBox("chk_noEndDt","448","118","109","24",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("18");
            obj.set_text("종료일 없음");
            this.div_save.addChild(obj.name, obj);

            obj = new WebBrowser("wbs_utClausCts","140","180",null,"600","10",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("19");
            this.div_save.addChild(obj.name, obj);

            obj = new Button("btn_cancel","45.21%","811","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_cancel:4","811","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,880,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","div_save.form.edt_qstTtl","value","ds_utClausDetail","UT_CLAUS_TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_save.form.edt_utClausCts","value","ds_utClausDetail","UT_CLAUS_CTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_save.form.cmb_utClausSprCd","value","ds_utClausDetail","UT_CLAUS_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_save.form.rdo_useYn","value","ds_utClausDetail","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_save.form.cal_regStartDate","value","ds_utClausDetail","CLAUS_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_save.form.cal_regEndDate","value","ds_utClausDetail","CLAUS_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_save.form.chk_noEndDt","value","ds_utClausDetail","CHK_NO_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_CN_15.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.fvDocWeb = "";
        this.fvRtnHeight=260; //버튼사이즈
        this.utClausSeq = "";
        this.useCntYn = null;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	this.fn_commonCodeSearch();
        	this.ds_utClausDetail.addRow();
        	this.div_save.form.rdo_useYn.set_index(0);

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "",
        		SHIFT_ENTER : "",
        		SHIFT_S : "btn_save_onclick",
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
        	var outDs = "ds_utClausSprCd=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "UT_CLAUS_SPR_CD");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function(){
        	var sSvcId = "save";
        	var sUrl = "/co/ut-claus/save-ut-claus-list.do";
        	var inDs = "ds_save=ds_utClausDetail:U"
        	var outDs = "";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //조회
        this.fn_search = function(){
        	var sSvcId = "search";
        	var sUrl = "/co/ut-claus/select-ut-claus-list-detail.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_utClausDetail=ds_output1";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	switch(svcID){
        	case "commonCodeSearch":
        		this.ds_utClausSprCd.insertRow(0);
        		this.ds_utClausSprCd.setColumn(0,"COM_DTL_CD_NM","선택");

        		var sUrl = nexacro.getEnvironment().services["svcUrl"].url + "toastEditor/index.html";
        		this.div_save.form.wbs_utClausCts.set_url(sUrl);

        		break;
        	case "save":
        		if(errorCode == -100){
        			alert(errorMsg);
        		}else{
        			//개인정보취급방침의 경우 기존내역관련 alert창 안띄어지도록 수정
        			if(this.ds_utClausDetail.getColumn(0, "UT_CLAUS_SPR_CD") != "02" && this.ds_utClausDetail.getColumn(0, "USE_YN") == "Y"){
        				if(!this.gfn_isNull(this.useCntYn)){
        					alert(this.gfn_getMessage("COMS000021")); //저장되었습니다. 기존 내역은 미사용처리 됩니다.
        				}else{
        					alert(this.gfn_getMessage("COMS000014", ["저장"])); //저장되었습니다.
        				}
        			}else{
        				alert(this.gfn_getMessage("COMS000014", ["저장"])); //저장되었습니다.
        			}

        			if(!this.gfn_isNull(this.utClausSeq)){
        				this.ds_search.setColumn(0, "UT_CLAUS_SEQ", this.utClausSeq);
        			}

        			this.fn_search();
        		}
        		break;
        	case "search":
        		this.ds_utClausDetail.addColumn("CHK_NO_END_DT","INT");
        		if(this.gfn_isNull(this.ds_utClausDetail.getColumn(0, "CLAUS_END_DT"))){
        			this.ds_utClausDetail.setColumn(0, "CHK_NO_END_DT", 1);
        			this.div_save.form.cal_regEndDate.set_readonly(true);
        		}
        		break;
        	default:
        		break;
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //저장 유효성 체크
        this.fn_validationCheck = function(){
        	if(this.gfn_isNull(this.div_save.form.cmb_utClausSprCd.value)) {
        		alert(this.gfn_getMessage("ERRC000004", ["유형"])); //&1 은(는) 필수 입력값입니다.
        		return false;
        	}

        	if(this.gfn_isNull(this.div_save.form.cal_regStartDate.value)) {
        		alert(this.gfn_getMessage("ERRC000004", ["게시 일자 시작일"])); //&1 은(는) 필수 입력값입니다.
        		return false;
        	}

        	if(!this.div_save.form.chk_noEndDt.value){
        		if(this.gfn_isNull(this.div_save.form.cal_regEndDate.value)) {
        			alert(this.gfn_getMessage("ERRC000004", ["게시 일자 종료일"])); //&1 은(는) 필수 입력값입니다.
        			return false;
        		}

        		if(this.div_save.form.cal_regStartDate.value > this.div_save.form.cal_regEndDate.value){
        			alert(this.gfn_getMessage("IFMS000002")); //종료일이 시작일보다 작을수 없습니다.
        			this.div_save.form.cal_regEndDate.setFocus();
        			return;
        		}
        	}

        	if(this.gfn_isNull(this.div_save.form.edt_qstTtl.value)) {
        		alert(this.gfn_getMessage("ERRC000004", ["개정 이력"])); //&1 은(는) 필수 입력값입니다.
        		return false;
        	}

        	//에디터 내용을 가져오기
        	this.fvDocWeb.getProperty("getData").callMethod("click");
        	var sEditorData = this.fvDocWeb.getProperty("editorData").getProperty("value");

        	if( sEditorData == ""  || sEditorData == null || sEditorData == '&nbsp;' || sEditorData == '<p><br></p>')  {
        	   alert(this.gfn_getMessage("ERRC000004", ["내용"])); //&1 은(는) 필수 입력값입니다.
               return;
        	}
        	this.ds_utClausDetail.setColumn(0, "UT_CLAUS_CTS", sEditorData);

        	return true;
        };


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //취소
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close(false);
        };

        this.btn_save_onclick = function(obj,e)
        {
        	if(this.fn_validationCheck()){
        		var sReturn = this.confirm(this.gfn_getMessage("COMS000013", ["등록"]));
        		if(sReturn == true){
        			this.fn_save();
        		}
        	}
        };

        //종료일 없음 체크시 종료일 비활성화
        this.chk_noEndDt_onchanged = function(obj,e)
        {
        	if(this.div_save.form.chk_noEndDt.value){
        		this.div_save.form.cal_regEndDate.set_readonly(true);
        		this.div_save.form.cal_regEndDate.set_value("");
        	}else{
        		this.div_save.form.cal_regEndDate.set_readonly(false);
        	}
        };

        this.edt_qstTtl_onchanged = function(obj,e)
        {
        	if(this.div_save.form.edt_qstTtl.value.toString().length == 0){
        		this.ds_utClausDetail.setColumn(0, "UT_CLAUS_TTL", null);
        	}
        };


        this.webEditor_onloadcompleted = function(obj,e)
        {
        	this.fvDocWeb = this.div_save.form.wbs_utClausCts.getProperty("document").getProperty("all");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.div_save.form.edt_utClausCts.addEventHandler("onchanged",this.div_save_edt_utClausCts_onchanged,this);
            this.div_save.form.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_save.form.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_save.form.edt_qstTtl.addEventHandler("onchanged",this.edt_qstTtl_onchanged,this);
            this.div_save.form.cal_regStartDate.addEventHandler("ondropdown",this.cal_regStartDate_ondropdown,this);
            this.div_save.form.chk_noEndDt.addEventHandler("onchanged",this.chk_noEndDt_onchanged,this);
            this.div_save.form.wbs_utClausCts.addEventHandler("onloadcompleted",this.webEditor_onloadcompleted,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CN_15.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
