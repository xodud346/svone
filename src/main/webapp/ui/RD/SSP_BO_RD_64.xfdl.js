(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("고객요청재이관사유등록");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(630,280);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdRegDisTpCd", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TRSF_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_PRPS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"RND_REQ_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_STATS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"NEW_PRD_REQ_NO\"/><Col id=\"TRSF_RSN\"/><Col id=\"MALL_SPR_CD\"/><Col id=\"PRD_PRPS_SPR_CD\"/><Col id=\"PRD_PRPS_STATS_CD\"/><Col id=\"ALT_PRPS_RSN\"/><Col id=\"RND_REQ_PRD_ID\"/><Col id=\"NEW_PRD_REQ_STATS_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FORM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PROG_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FORM_ID\"/><Col id=\"FORM_PATH\"/><Col id=\"FORM_NM\"/><Col id=\"USER_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_res", this);
            obj._setContents("<ColumnInfo><Column id=\"SUCCESS\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","22",null,"258","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","-20",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","20","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","23","300","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("SSP이관 처리");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","60",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","223",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","243","233","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","317","233","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00","21","70",null,"152","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_00","21","70","170","152",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("상세사유 <fc v=\"red\"><b v=\"true\">* </b></fc>");
            obj.set_verticalAlign("middle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_regDisTip","201","73","340","145",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_autoselect("true");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("sta_batySize","549",null,"60","29",null,"58",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("0/200");
            obj.set_usedecorate("true");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",630,280,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","txt_regDisTip","value","ds_list","TRSF_RSN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsDummy");
            this._addPreloadList("data","","ds_list");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_64.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_64.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_64.xfdl(고객요청재이관사유등록)
        * 작 성			일 명: 나용철
        * 작 성	    	일 자: 2022/04/29
        * 변 경     	일 자:
        * 변 경			자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        this.sOptinoArg1;
        this.sOptinoArg2;
        this.sParamArg1;
        this.sParamArg2;
        this.sParamArg3;

        /**********************************************************************
        	03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
        	//폼에 공통으로 로드시 사용하는 함수.
        	this.gfn_formOnLoad(this);
        	//사용자 초기화 함수
        	this.fn_formInit();
        };
        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };
        /**********************************************************************
        	04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
        	/******************* 기본셋팅 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp01))
        	{
        		 this.sOptinoArg1 = this.getOwnerFrame().pv_sOp01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp02))
        	{
        		 this.sOptinoArg2 = this.getOwnerFrame().pv_sOp02;
        	}

        	/******************* 넘어온 인자값 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal01))
        	{
        		 this.sParamArg1 = this.getOwnerFrame().pv_sVal01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal02))
        	{
        		 this.sParamArg2 = this.getOwnerFrame().pv_sVal02;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal03))
        	{
        		 this.sParamArg3 = this.getOwnerFrame().pv_sVal03;
        	}

        	this.postformInit();
        };

        this.postformInit = function()
        {
        	this.ds_list.clearData();
        	var nRow = this.ds_list.addRow();
        	this.ds_list.setColumn(nRow,"NEW_PRD_REQ_NO",      this.sParamArg1);
        	this.ds_list.setColumn(nRow,"CO_CD",               this.sParamArg2);
        	this.ds_list.setColumn(nRow,"MALL_SPR_CD",         this.sParamArg3);
        	this.ds_list.setColumn(nRow,"NEW_PRD_REQ_STATS_CD","35"); // SSP이관 : 35
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	if(nErrorCode != 0)
        	{
        		this.gfn_alert(sErrorMsg,"에러정보","","error");
        		return false;
        	}else
        	{
        		/*sSvcId (Transaction Id)*/
        		switch(sSvcId)
        		{
        			case "Init":
        				this.postformInit();
        				break;
        			case "Search":
        			    this.postSearch();
        				break;
        			case "Save":
        			    this.postSave();
        				break;

        			default:
        				break;
        		}
        	}
        };
        /**********************************************************************
        	05. 조회 함수 선언
        ***********************************************************************/
        this.btn_save_onclick = function(obj,e)
        {
        	this.fn_save();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.preSave = function()
        {
        	var nByte = this.fn_getLengthB(this.txt_regDisTip.value,3);
        	if(nByte > 765)
        	{
        		this.fn_alert("ERRR000167","이관정보","상세사유,765Byte","warning");                    // 입력한 상세사유가 765Byte를 넘길수 없습니다.
        		this.txt_regDisTip.setFocus();
        		return false;
        	}

        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_save = function()
        {
        	if(!this.preSave())
        	{
        		return false;
        	}
        	var strSvc 		= "Save";
        	var strUrl 		= "/rd/new-prd-req-lst/save-cust-req-proc.do";
        	var strInDs  	= "ds_master=ds_list";
        	var strOutDs    = "ds_res=ds_output";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_transaction(strSvc
        				   		, strUrl
        				   		, strInDs
        				   		, strOutDs
        				   		, strArg
        				   		, strCallBack
        				   		, strASync);
        }

        /**
         * 기능 : 조회 후 실행
         */
        this.postSave = function()
        {
        	if (this.ds_res.getColumn(0, "SUCCESS") == "Y") {
        		this.fn_alert("ERRR000007","저장","","question"); // 정상적으로 저장되었습니다
        		this.close("SAVE");
        	} else {
        		alert(this.ds_res.getColumn(0, "MESSAGE"));	// 중복처리 안내
        		this.close("SAVE");
        	}
        };

        /**********************************************************************
        	06. 닫기버튼
        ***********************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        this.btn_exit_onclick = function(obj,e)
        {
        	this.close("EXIT");
        };
        /**********************************************************************
        	07.Get, Set Method
        ***********************************************************************/
        this.txa_regDisTip_oninput = function(obj,e)
        {
        	var nByte = this.fn_getLengthB(obj.value,3);
        	this.sta_batySize.set_text(nByte + "/200");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.txt_regDisTip.addEventHandler("oninput",this.txa_regDisTip_oninput,this);
            this.ds_list.addEventHandler("cancolumnchange",this.ds_list_cancolumnchange,this);
        };
        this.loadIncludeScript("SSP_BO_RD_64.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
