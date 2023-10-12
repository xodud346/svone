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
            this.set_titletext("자주하는 질문 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,790);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTCC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oftenQst", this);
            obj._setContents("<ColumnInfo><Column id=\"QST_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"QST_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"RFI_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rfiTpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_save","20","0",null,"750","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_qstCts","140","120",null,"500","10",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("10");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static65","0","115",null,"610","0",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static07","0","84",null,"32","0",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static03","0","53",null,"32","0",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static00","0","22","300","30",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("0");
            obj.set_text("자주하는 질문");
            obj.set_cssclass("sta_WF_title01");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static02","0","53","130","32",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("3");
            obj.set_text("유형");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static06","0","84","130","32",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("5");
            obj.set_text("제목");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static10","0","115","130","610",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("7");
            obj.set_text("내용");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_save.addChild(obj.name, obj);

            obj = new Edit("edt_qstTtl","140","88",null,"24","10",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("2");
            obj.set_maxlength("40");
            obj.set_displaynulltext("최대 40자 까지 입력하실 수 있습니다.");
            this.div_save.addChild(obj.name, obj);

            obj = new Combo("cmb_rfiTpCd","140","58","150","24",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_rfiTpCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_index("-1");
            this.div_save.addChild(obj.name, obj);

            obj = new WebBrowser("wbs_qstCts","140","120",null,"600","10",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("9");
            this.div_save.addChild(obj.name, obj);

            obj = new Button("btn_cancel","555","745","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","629","745","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,790,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","div_save.form.edt_qstTtl","value","ds_oftenQst","QST_TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_save.form.cmb_rfiTpCd","value","ds_oftenQst","RFI_TP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_save.form.edt_qstCts","value","ds_oftenQst","QST_CTS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CN_12.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_CN_12.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.valiFormIds = [
        	  {"name" : "유형", "id" : "RFI_TP_CD"}
        	, {"name" : "제목","id" : "QST_TTL"}
        	, {"name" : "내용", "id" : "QST_CTS"}
        ];
        this.fvDocWeb = "";
        this.fvRtnHeight=260; //버튼사이즈
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	this.fn_commonCodeSearch();
        	this.ds_oftenQst.addRow();
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select_common_code_list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_rfiTpCd=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "RFI_TP_CD");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function(){
        	var sSvcId = "save";
        	var sUrl = "/co/often_qst/save_often_qst_list.do";
        	var inDs = "ds_save=ds_oftenQst:U"
        	var outDs = "";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0 && errorCode != -100){
        		alert(errorMsg);
        	}

        	switch(svcID){
        		case "commonCodeSearch":
        			this.ds_rfiTpCd.insertRow(0);
        			this.ds_rfiTpCd.setColumn(0,"COM_DTL_CD_NM","선택");

        			var sUrl = nexacro.getEnvironment().services["svcUrl"].url + "smartEditor/SmartEditor2.html";
        			this.div_save.form.wbs_qstCts.set_url(sUrl);

        			break;
        		case "save":
        			if(errorCode == -100){
        				alert(errorMsg);
        			}else{
        				alert("등록되었습니다.");
        				this.close(true);
        			}
        			break;
        		default:
        			break;
        	}
        };

        this.fnEditorCallback = function(sType)
        {
        	switch (sType)
        	{
        		case "onload" :
        			var sContents = "";
        			this.fvDocWeb.getProperty("ir1").setProperty("value",sContents);
        			this.fvDocWeb.getProperty("editorSetBtn").callMethod("click");
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
        		alert("유형은 필수 입력항목입니다.");
        		return false;
        	}

        	if(this.gfn_isNull(this.div_save.form.edt_qstTtl.value)) {
        		alert("제목은 필수 입력항목입니다.");
        		return false;
        	}

        	//에디터 내용을 가져오기
        	this.fvDocWeb.getProperty("editorGetBtn").callMethod("click");
        	var sEditorData = this.fvDocWeb.getProperty("ir1").getProperty("value");

        	if( sEditorData == ""  || sEditorData == null || sEditorData == '&nbsp;' || sEditorData == '<p><br></p>')  {
               alert("내용은 필수 입력항목입니다.");
               return;
        	}
        	this.ds_oftenQst.setColumn(0, "QST_CTS", sEditorData);

        	return true;
        };

        this.fnResize = function(nWidth, nHeight)
        {

        	var sValue = nWidth+","+nHeight;

        	this.fvDocWeb.getProperty("resize").setProperty("value",sValue);
        	this.fvDocWeb.getProperty("btnResize").callMethod("click");
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //취소
        this.btn_cancel_onclick = function(obj,e)
        {
        	var sReturn = this.confirm("취소하시겠습니까?");
        	if(sReturn == true){
        		this.close(false);
        	}
        };

        this.btn_save_onclick = function(obj,e)
        {
        	if(this.fn_validationCheck()){
        		this.fn_save();
        	}
        };

        this.edt_qstTtl_onchanged = function(obj,e)
        {
        	if(this.div_save.form.edt_qstTtl.value.toString().length == 0){
        		this.ds_oftenQst.setColumn(0, "QST_TTL", null);
        	}
        };

        this.webEditor_onloadcompleted = function(obj,e)
        {
        	this.fvDocWeb = this.div_save.form.wbs_qstCts.getProperty("document").getProperty("all");
        };

        this.webEditor_onusernotify = function(obj,e)
        {
        	try
        	{
        		// parent의 최상의 Form에 이벤트 발생시킴
        		var oForm = this;
        		if (oForm && oForm.fnEditorCallback)
        		{
        			if (e.userdata == "onload")
        			{
        				var initHeight = this.div_save.form.wbs_qstCts.getOffsetHeight();
        				this.fnResize(obj.getOffsetWidth(), initHeight-this.fvRtnHeight);
        			}

        			oForm.fnEditorCallback(e.userdata);
        		}
        	}
        	catch(e){
        		trace("sampleNaverEditor.xfdl :: webEditor_onusernotify() => " + e.message);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.div_save.form.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_save.form.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_save.form.edt_qstTtl.addEventHandler("onchanged",this.edt_qstTtl_onchanged,this);
            this.div_save.form.edt_qstTtl.addEventHandler("canchange",this.div_save_edt_qstTtl_canchange,this);
            this.div_save.form.wbs_qstCts.addEventHandler("onloadcompleted",this.webEditor_onloadcompleted,this);
            this.div_save.form.wbs_qstCts.addEventHandler("onusernotify",this.webEditor_onusernotify,this);
            this.div_save.form.wbs_qstCts.addEventHandler("onsize",this.webEditor_onsize,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CN_12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
