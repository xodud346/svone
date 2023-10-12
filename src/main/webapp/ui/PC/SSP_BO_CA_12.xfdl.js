(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_27");
            this.set_titletext("예외종료 사유입력 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_output", this);
            obj._setContents("<ColumnInfo><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insert", this);
            obj._setContents("<ColumnInfo><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_REG_DIS_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DIS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_PROC_STATS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRC_PROC_STATS_CD\">30</Col><Col id=\"REG_DIS_RSN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insertList", this);
            obj._setContents("<ColumnInfo><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","20","155","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("예외종료 처리");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Div("div_regDisProc","0","30",null,"177","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","24",null,"32","20",null,"1296",null,null,null,this.div_regDisProc.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new Static("Static65","20","55",null,"64","20",null,"1296",null,null,null,this.div_regDisProc.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new Static("Static02","20","24","130","32",null,null,null,null,null,null,this.div_regDisProc.form);
            obj.set_taborder("5");
            obj.set_text("등록불가유형");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_color("black");
            obj.set_expr("\"등록불가유형<fc v=\'red\'> *</fc>\"");
            obj.set_usedecorate("true");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new Static("Static10","20","55","130","64",null,null,null,null,null,null,this.div_regDisProc.form);
            obj.set_taborder("6");
            obj.set_text("상세사유");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_color("black");
            obj.set_expr("\"상세사유<fc v=\'red\'> *</fc>\"");
            obj.set_usedecorate("true");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-93","150","24",null,null,null,null,null,null,this.div_regDisProc.form);
            obj.set_taborder("7");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-93","150","24",null,null,null,null,null,null,this.div_regDisProc.form);
            obj.set_taborder("8");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new Combo("cmb_prdRegDisTpCd","160","28","450","24",null,null,null,null,null,null,this.div_regDisProc.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_comCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_color("black");
            obj.set_readonly("false");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new TextArea("txt_regDisRsn","160","59","450","56",null,null,null,null,null,null,this.div_regDisProc.form);
            obj.set_taborder("1");
            obj.set_color("black");
            obj.set_maxlength("200");
            obj.set_dragscrolltype("vert");
            obj.set_scrolltype("vertical");
            obj.set_wordWrap("char");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new Button("btn_regDisProc",null,"129","96","28","20",null,null,null,null,null,this.div_regDisProc.form);
            obj.set_taborder("2");
            obj.set_text("예외종료처리");
            obj.set_enable("false");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new Static("sta_length","610","90","66","24",null,null,null,null,null,null,this.div_regDisProc.form);
            obj.set_taborder("9");
            obj.set_text("0/200");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"129","96","28","btn_regDisProc:8",null,null,null,null,null,this.div_regDisProc.form);
            obj.set_taborder("10");
            obj.set_text("취소");
            this.div_regDisProc.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","128","390","25",null,null,null,null,null,null,this.div_regDisProc.form);
            obj.set_taborder("11");
            obj.set_text("* 상세사유는 고객에게 노출 되오니 신중하게 작성하시기 바랍니다.");
            obj.set_usedecorate("true");
            this.div_regDisProc.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,270,this,function(p){});
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","div_regDisProc.form.cmb_prdRegDisTpCd","value","ds_insert","PRC_REG_DIS_TP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_regDisProc.form.txt_regDisRsn","value","ds_insert","REG_DIS_RSN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_12.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_CA_12.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_CA_12.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP속성 생성 팝업
        CREATION DATES : 2021.01.19
        *******************************************************/
        // 공통형 스크립트 인클루드
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//부모창 데이터 처리
        	this.fn_checkData();

        	//단축키 함수 호출
        	this.fn_regShortCutMethod();

        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_comCd=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "codeList", "PRC_REG_DIS_TP_CD");
        	this.ds_search.setColumn(0, "langCd", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function()	{

        	var sSvcId = "save";
        	var sUrl = "/pc/popup/update-new-prd-req-prc.do";
        	var inDs = "ds_insert=ds_insert ds_insertList=ds_insertList";
        	var outDs = "ds_list=ds_output";
        	var arg = "";
        	this.rtnMsg = "";

        	//전송
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "commonCodeSearch"){
        		this.ds_comCd.insertRow(0);
        		this.ds_comCd.setColumn(0,"COM_DTL_CD_NM","선택");

        	}else if(svcID == "save"){
        		if(!this.gfn_isNull(this.rtnMsg)){
        			this.gfn_popMessage(this.rtnMsg)
        			this.close(true);
        		} else {
        		//alert("예외종료처리 되었습니다.");
        			this.alert(this.fn_getMessage("ERRP000210"));
        			this.close(true);
        		}
        	}


        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_checkData = function(){

        	this.ds_insertList.clearData();
        	var jsonData = this.parent.data;

        	for (var i = 0; i < jsonData.length; i++) {
        		var rtnData = jsonData[i];
        		var rowIdx = this.ds_insertList.addRow();
        		trace("ds added : "+rowIdx);
        		this.ds_insertList.setColumn(rowIdx,"PRD_ID", rtnData.PRD_ID);
        		this.ds_insertList.setColumn(rowIdx,"NEW_PRD_REQ_NO",rtnData.NEW_PRD_REQ_NO);
        		trace("added info : "+this.ds_insertList.getColumn(rowIdx,"PRD_ID"));

        	}

        }

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodESC("div_regDisProc_btn_close_onclick");
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        this.btn_conf_onclick = function(obj,e)
        {
        	var validation = this.fn_validationForm(this.div, this.valiFormIds, this.ds_output);

        	if( validation ) {
        		var resData = {};
        		var resString = "";
        		resData.UPD_RSN = this.ds_output.getColumn(0,"UPD_RSN");
        		resString = JSON.stringify(resData);
        		this.close(resString);
        	}
        };

        this.div_regDisProc_txt_regDisRsn_oninput = function(obj,e)
        {
        	var len = obj.value.length;
        	this.div_regDisProc.form.sta_length.set_text((len == -1 ? 0 : len) + "/200");
        	//obj.set_maxlength(this.gfn_lengthByte(obj.value) > 200 ? obj.value.length : 200);

        	if(len > 4 && typeof(this.ds_insert.getColumn(0,"PRC_REG_DIS_TP_CD")) != "undefined"){
        		this.div_regDisProc.form.btn_regDisProc.set_enable(true);
        	}else{
        		this.div_regDisProc.form.btn_regDisProc.set_enable(false);
        	}

        };

        this.div_regDisProc_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.div_regDisProc_cmb_prdRegDisTpCd_onitemchanged = function(obj,e)
        {

        	if(typeof(this.ds_insert.getColumn(0,"PRC_REG_DIS_TP_CD")) != "undefined" && this.div_regDisProc.form.txt_regDisRsn.value.length > 0){
        		this.div_regDisProc.form.btn_regDisProc.set_enable(true);
        	}else{
        		this.div_regDisProc.form.btn_regDisProc.set_enable(false);
        	}
        };

        this.Button_onclick = function(obj,e)
        {
        	//var sReturn = this.confirm("예외 종료 처리하시겠습니까?");
        	var sReturn = this.confirm(this.fn_getMessage("ERRP000211"));
        	if(sReturn){
        		this.fn_save();
        	}

        };

        this.SSP_BO_NA_27_onkeyup = function(obj,e)
        {
        	// 단축키 등록
        	this.fn_processKey(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_NA_27_onkeyup,this);
            this.div_regDisProc.form.cmb_prdRegDisTpCd.addEventHandler("onitemchanged",this.div_regDisProc_cmb_prdRegDisTpCd_onitemchanged,this);
            this.div_regDisProc.form.txt_regDisRsn.addEventHandler("oninput",this.div_regDisProc_txt_regDisRsn_oninput,this);
            this.div_regDisProc.form.btn_regDisProc.addEventHandler("onclick",this.Button_onclick,this);
            this.div_regDisProc.form.btn_close.addEventHandler("onclick",this.div_regDisProc_btn_close_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CA_12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
