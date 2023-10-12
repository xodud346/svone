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
            this.set_titletext("자주하는 질문 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,860);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"OFTEN_QST_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oftenQstDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"OFTEN_QST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RFI_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QST_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"QST_CTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rfiTpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_save","20","0",null,"810","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_qstCts","140","120",null,"600","10",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("3");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static65","0","115",null,"610","0",null,null,null,null,null,this.div_save.form);
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
            obj.set_text("자주하는 질문");
            obj.set_cssclass("sta_WF_title01");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static02","0","53","130","32",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("4");
            obj.set_text("유형");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static06","0","84","130","32",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("6");
            obj.set_text("제목");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static10","0","115","130","610",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("8");
            obj.set_text("내용");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_save.addChild(obj.name, obj);

            obj = new Edit("edt_qstTtl","140","88",null,"24","10",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("2");
            obj.set_maxlength("60");
            obj.set_displaynulltext("최대 60자 까지 입력하실 수 있습니다.");
            this.div_save.addChild(obj.name, obj);

            obj = new Combo("cmb_rfiTpCd","140","58","150","24",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_rfiTpCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_index("-1");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","724",null,"32","0",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","0","755",null,"32","0",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_save.addChild(obj.name, obj);

            obj = new WebBrowser("wbs_qstCts","140","120","1090","600",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("12");
            this.div_save.addChild(obj.name, obj);

            obj = new Button("btn_cancel","555","815","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","703","815","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","629","815","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_01","20","724","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("최초 등록");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","20","755","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("최종 수정");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","642","755","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("수정 일시");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00","642","724","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("등록 일시");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_regPsnId","150","724","303","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_updpsnId","150","755","303","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_regDtm","773","724","303","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_updDtm","773","755","303","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,860,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","div_save.form.edt_qstTtl","value","ds_oftenQstDetail","QST_TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_save.form.edt_qstCts","value","ds_oftenQstDetail","QST_CTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_save.form.cmb_rfiTpCd","value","ds_oftenQstDetail","RFI_TP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_top_info.form.Static04_00","text","ds_detail","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_top_info.form.Static04_01","text","ds_detail","UPDPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_top_info.form.Static04_00_00","text","ds_detail","UPD_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","sta_regPsnId","text","ds_oftenQstDetail","REGPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","sta_regDtm","text","ds_oftenQstDetail","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","sta_updpsnId","text","ds_oftenQstDetail","UPDPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","sta_updDtm","text","ds_oftenQstDetail","UPD_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CN_13.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_CN_13.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.fvDocWeb = "";
        this.fvRtnHeight=260; //버튼사이즈
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	this.fn_commonCodeSearch();
        	this.ds_search.setColumn(0, "OFTEN_QST_SEQ", this.parent.oftenQstSeq);
        	this.fn_search();

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
        	var sUrl = "/co/select-common-code-usr-defn-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_rfiTpCd=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "RFI_TP_CD");
        	this.ds_search.setColumn(0, "COM_USR_DEFN_NM_1", "Y");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //조회
        this.fn_search = function(){
        	var sSvcId = "search";
        	var sUrl = "/co/often-qst/select-often-qst-detail.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_oftenQstDetail=ds_output1";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        //저장
        this.fn_save = function(type){
        	var sSvcId = "save";

        	if(type == "DEL"){
        		sSvcId = "delete";
        	}

        	var sUrl = "/co/often-qst/save-often-qst-list.do";
        	var inDs = "ds_save=ds_oftenQstDetail:U"
        	var outDs = "";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	switch(svcID){
        		case "search":
        			break;
        		case "commonCodeSearch":
        			this.ds_rfiTpCd.insertRow(0);
        			this.ds_rfiTpCd.setColumn(0,"COM_DTL_CD_NM","선택");

        			var sUrl = nexacro.getEnvironment().services["svcUrl"].url + "toastEditor/index.html";
        			this.div_save.form.wbs_qstCts.set_url(sUrl);

        			break;
        		case "save":
        			if(errorCode == -100){
        				alert(errorMsg);
        			}else{
        				//alert("저장되었습니다.");
        				//this.close(true);
        				this.fn_search();
        			}
        			break;
        		case "delete":
        			if(errorCode == -100){
        				alert(errorMsg);
        			}else{
        				//alert("삭제되었습니다.");
        				this.close(true);
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
        	if(this.gfn_isNull(this.div_save.form.cmb_rfiTpCd.value)) {
        		alert(this.gfn_getMessage("ERRC000004", ["유형"])); //&1 은(는) 필수 입력값입니다.
        		return false;
        	}

        	if(this.gfn_isNull(this.div_save.form.edt_qstTtl.value)) {
        		alert(this.gfn_getMessage("ERRC000004", ["제목"])); //&1 은(는) 필수 입력값입니다.
        		return false;
        	}

        	//에디터 내용을 가져오기
        	this.fvDocWeb.getProperty("getData").callMethod("click");
        	var sEditorData = this.fvDocWeb.getProperty("editorData").getProperty("value");

        	//직접 호출방식
        	/*
        	var _win = this.div_top_info.form.WebEditor.getProperty("window");
        	var sEditorData = _win.callMethod("getMarkDown");
        	if( _win ) {
        		_win.destroy();
        		_win = null;
        	}
        	*/

        	if( sEditorData == ""  || sEditorData == null || sEditorData == '&nbsp;' || sEditorData == '<p><br></p>')  {
               alert(this.gfn_getMessage("ERRC000004", ["내용"])); //&1 은(는) 필수 입력값입니다.
               return;
        	}
        	this.ds_oftenQstDetail.setColumn(0, "QST_CTS", sEditorData);

        	var chkDsChange = this.fn_dataChangeCheck(this.ds_oftenQstDetail);
        	if( !chkDsChange ) {
        		//alert("저장할 내용이 없습니다.");
        		alert(this.gfn_getMessage("COMS000008", ["수정", "내용"]));	//수정된 내용이 없습니다.
        		return false;
        	}


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
        		var sReturn = this.confirm(this.gfn_getMessage("COMS000013", ["저장"]));
        		if(sReturn == true){
        			this.fn_save("INS");
        		}
        	}
        };

        this.btn_delete_onclick = function(obj,e)
        {
        	var sReturn = this.confirm(this.gfn_getMessage("COMS000013", ["삭제"]));
        	if(sReturn == true){
        		this.ds_oftenQstDetail.deleteAll();
        		this.fn_save("DEL");
        	}
        };

        this.edt_qstTtl_onchanged = function(obj,e)
        {
        	if(this.div_save.form.edt_qstTtl.value.toString().length == 0){
        		this.ds_oftenQstDetail.setColumn(0, "QST_TTL", null);
        	}
        };


        this.webEditor_onloadcompleted = function(obj,e)
        {
        	this.fvDocWeb = this.div_save.form.wbs_qstCts.getProperty("document").getProperty("all");

        	var sContents = this.ds_oftenQstDetail.getColumn(0, "QST_CTS");
        	this.fvDocWeb.getProperty("editorData").setProperty("value", sContents);
        	this.fvDocWeb.getProperty("setData").callMethod("click");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.div_save.form.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_save.form.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_save.form.edt_qstTtl.addEventHandler("onchanged",this.edt_qstTtl_onchanged,this);
            this.div_save.form.wbs_qstCts.addEventHandler("onloadcompleted",this.webEditor_onloadcompleted,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CN_13.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
