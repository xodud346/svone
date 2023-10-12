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
            this.set_titletext("R&D상품 등록불가 처리");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(630,310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CONSN_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_GRP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_res", this);
            obj._setContents("<ColumnInfo><Column id=\"SUCCESS\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","22",null,"288","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("white");
            obj.set_text("");
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

            obj = new Static("Static60_00","20","23","110","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("합의처리 사유");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","98","99.38%","10",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","60",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","253",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","21","108",null,"129","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_00","21","109","170","128",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("상세사유");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_consnRsn","201","116","340","114",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("sta_batySize","549",null,"60","29",null,"66",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("0/300");
            obj.set_usedecorate("true");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","25","78","567","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("* 한번 작성하면 수정이 불가능합니다. 협력사에 전달되는 내용이니 신중하게 작성해주시기 바랍니다.");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","235","590","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("* 300byte 이내로 작성해주시기 바랍니다.");
            obj.set_color("black");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_btn1","0","255",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","317","7","70","30",null,null,null,null,null,null,this.div_btn1.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.div_btn1.addChild(obj.name, obj);

            obj = new Button("btn_exit","243","7","70","30",null,null,null,null,null,null,this.div_btn1.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.div_btn1.addChild(obj.name, obj);

            obj = new Div("div_btn2","0","255",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","280","7","70","30",null,null,null,null,null,null,this.div_btn2.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.div_btn2.addChild(obj.name, obj);

            obj = new Static("stc_title","20","2","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("합의처리");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",630,310,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsDummy");
            this._addPreloadList("data","","ds_param");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_71_P02.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_71_P02.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_21.xfdl(R&D상품 등록불가 처리)
        * 작 성			일 명: 나용철
        * 작 성	    	일 자: 2022/04/28
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
        this.sParamArg4;
        this.sParamArg5;
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

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal04))
        	{
        		 this.sParamArg4 = this.getOwnerFrame().pv_sVal04;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal05)) {
        		 this.sParamArg5 = this.getOwnerFrame().pv_sVal05;
        	}

        	if(this.gfn_isNull(this.sParamArg4)){
        		this.div_btn1.set_visible(true);
        		this.div_btn2.set_visible(false);
        		this.txt_consnRsn.set_value(this.sParamArg4);
        		this.txt_consnRsn.set_readonly(false);
        	}else{
        		this.div_btn1.set_visible(false);
        		this.div_btn2.set_visible(true);
        		this.txt_consnRsn.set_value(this.sParamArg4);
        		this.txt_consnRsn.set_readonly(true);
        		var nByte = this.fn_getLengthB(this.sParamArg4,3);
        		this.sta_batySize.set_text(nByte + "/300");
        	}

        	this.ds_param.setColumn(0, "NEW_PRD_REQ_GRP_NO", this.sParamArg1);
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	if(nErrorCode != 0)
        	{
        		this.fn_alert(sErrorMsg,"에러정보","","error");
        		return false;
        	}else
        	{
        		/*sSvcId (Transaction Id)*/
        		switch(sSvcId)
        		{
        			case "Save":
        			    this.fn_PostSave();
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
        	var nByte = this.fn_getLengthB(this.txt_consnRsn.value,3);
        	//var nByte = this.getByteFun(this.txt_consnRsn.value);
        	if(nByte > 300)
        	{
        		this.fn_alert("ERRR000167","반려정보","상세사유,300Byte","warning");                    // 입력한 상세사유가 300Byte를 넘길수 없습니다.
        		this.txt_consnRsn.setFocus();
        		return false;
        	}

        	this.ds_param.setColumn(0, "CONSN_RSN", this.txt_consnRsn.value);
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
        	var strUrl 		= "/rd/new-prd-mlt-req-lst/save-agr-proc-rsn.do";
        	var strInDs  	= "ds_param=ds_param";
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
         * 기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
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

        this.txa_consnRsn_oninput = function(obj,e)
        {
        	var nByte = this.fn_getLengthB(obj.value,3);

        	//var nByte = this.getByteFun(obj.value);
        	this.sta_batySize.set_text(nByte + "/300");
        	if(nByte > 300)
        	{
        		this.fn_alert("ERRR000167","반려정보","상세사유,300Byte","warning");                    // 입력한 상세사유가 300Byte를 넘길수 없습니다.

        		return false;
        	}
        };

        this.getByteFun =  function(message){

        	if(this.gfn_isNull(message))
        	{
        		return 0;
        	}
            var totalByte = 0;

            for(var i =0; i < message.length; i++) {
                    var currentByte = message.charCodeAt(i);
                    if(currentByte > 128){
                    	totalByte += 3;
                    }else {
                    	totalByte++;
                    }
            }
           	return totalByte;
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.txt_consnRsn.addEventHandler("oninput",this.txa_consnRsn_oninput,this);
            this.div_btn1.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.div_btn1.form.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.div_btn2.form.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.ds_param.addEventHandler("cancolumnchange",this.ds_list_cancolumnchange,this);
        };
        this.loadIncludeScript("SSP_BO_RD_71_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
