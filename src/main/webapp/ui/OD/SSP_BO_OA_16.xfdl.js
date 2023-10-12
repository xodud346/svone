(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_16");
            this.set_titletext("E-mail 발송 이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"TOTAL_COUNT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EMAIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_EVT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"USR_EMAIL_READ_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RCV_EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_TTL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_subTitle01","20","64","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("■ E-mail 발송 이력");
            obj.set_cssclass("sta_WF_title01");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_list01","20","sta_subTitle01:10",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_list01");
            obj.set_font("12px/normal \"맑은 고딕\"");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"60\"/><Column size=\"140\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"300\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"발송 일시\"/><Cell col=\"1\" text=\"발송 여부\"/><Cell col=\"2\" text=\"메일 오픈 일시\"/><Cell col=\"3\" text=\"수신자 E-mail\"/><Cell col=\"4\" text=\"수신자 명\"/><Cell col=\"5\" text=\"발송자 E-mail\"/><Cell col=\"6\" text=\"발송자 명\"/><Cell col=\"7\" text=\"메일 제목\"/></Band><Band id=\"body\"><Cell text=\"bind:SEND_DTM\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\" displaytype=\"date\"/><Cell col=\"1\" text=\"bind:SEND_YN\"/><Cell col=\"2\" text=\"bind:USR_EMAIL_READ_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" text=\"bind:RCV_EMAIL_ADDR\"/><Cell col=\"4\" text=\"bind:RCVR_NM\"/><Cell col=\"5\" text=\"bind:EMAIL_ADDR\"/><Cell col=\"6\" text=\"bind:MBR_NM\"/><Cell col=\"7\" text=\"bind:EMAIL_TTL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","399",null,"102","30",null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_default");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","20","20","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("E-mail 발송 이력 조회");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,480,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_16.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_16.xfdl", function() {
        // E-mail 발송 이력 조회 팝업

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.odrNo = "";
        this.odrItmNo = "";
        this.bzplcId = "";
        this.odrpsnId = "";

        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_16_onload = function(obj,e)
        {
        	this.bzplcId = this.parent.pv1;
        	this.odrNo = this.parent.pv2;
        	this.odrItmNo = this.parent.pv3;
        	this.odrpsnId = this.parent.pv4;

        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();

        	this.copyPaste.addGrid(this.grid_list01);

        	this.fn_searchMapSetting();
        	this.fn_search();

        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_16_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/

        this.fn_search = function() {
        	var sSvcId = "selectEmailSentHstList";
        	var sUrl = "/od/odrPopup/selectEmailSentHstList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectEmailHstPopup") {
        		trace("selectEmailHstPopup is retrived");
        	}
        };
        /*
        TABLE : TB_CO_EMAIL_TRANS_LOG
        EMAIL_SEQ		이메일순번
        SSP_EVT_ID		SSP이벤트ID
        SEND_YN			발송여부
        SEND_DTM		발송일시
        RCV_EMAIL_ADDR	수신자 Email
        RCVR_NM			수신인명
        EMAIL_ADDR		발신자 Email
        MBR_NM			발신자명
        EMAIL_TTL		Email 제목



        TABLE : TB_CO_EMAIL_TRANS_INFO_MST
        DSPR_EMAIL_ADDR			발신자이메일주소
        DSPR_NM					발신자명
        EMAIL_TTL				이메일제목
        SEND_DTM				발송일시
        USR_EMAIL_READ_DTM		사용자이메일열람일시
        MBR_ID					회원ID
        EMAIL_SEQ				이메일순번
        EVT_ID					이벤트ID
        MST_SEQ					마스터순번
        IPT_DTM					입력일시
        SEND_YN					발송여부
        RCV_EMAIL_ADDR			수신이메일주소
        RCVR_NM					수령인명
        */
        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_searchMapSetting = function() {
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_search.setColumn(0, "BZPLC_ID", this.bzplcId);
        	this.ds_search.setColumn(0, "ODR_NO", this.odrNo);
        	this.ds_search.setColumn(0, "ODR_ITM_NO", this.odrItmNo);
        	this.ds_search.setColumn(0, "ROW_COUNT", "10000");
        	this.ds_search.setColumn(0, "TOTAL_COUNT", "-1");
        	this.ds_list01.clearData();
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	//this.fn_regMethodENTER("fn_search");
        	this.fn_regMethodESC("btn_close_onclick");
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_16_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_16_onkeyup,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_16.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
