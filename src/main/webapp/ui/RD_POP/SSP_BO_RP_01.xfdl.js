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
            this.set_titletext("사유등록처리");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(630,236);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"REASON\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"REASON\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","22",null,"214","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","-20","216",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","20","20",null,null,"5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"0","20",null,"0","5",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("sta_Title01","20","23","300","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
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

            obj = new Static("Static01_00_00","0","175",null,"10","0",null,null,null,null,null,this);
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

            obj = new Button("btn_exit","243","185","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reason","317","185","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("st_bagTitle","21","70",null,"102","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_Title02","21","70","170","102",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_reason","195","73","410","95",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_autoselect("true");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("sta_batySize","549",null,"60","29",null,"161",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("0/300");
            obj.set_usedecorate("true");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",630,236,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","txt_reason","value","ds_list","REASON");
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
        this.addIncludeScript("SSP_BO_RP_01.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RP_01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RP_01.xfdl(R&D상품 등록불가 처리)
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
        	this.ds_list.addRow();

        	this.sta_Title01.set_text(this.sParamArg1);
        	this.sta_Title02.set_text(this.sParamArg2);
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

        this.btn_reason_onclick = function(obj,e)
        {
        	this.fn_reason();
        };
        /**
         * 기능 : 저장 전 실행
         */
        this.preReason = function()
        {

        	var nByte = this.fn_getLengthB(this.txt_reason.value,3);
        	if(nByte > 300)
        	{
        		this.fn_alert("ERRR000167","반려정보","상세사유,300Byte","warning");                    // 입력한 상세사유가 200Byte를 넘길수 없습니다.
        		this.txt_reason.setFocus();
        		return false;
        	}
        	return true;
        };

        /**
         * 기능 : 화면조회 전 실행
         */
        this.fn_reason = function()
        {
        	if(!this.preReason())
        	{
        		return false;
        	}

        	this.fn_postReason();    // 사유을 파리미터 처리
        }

        /**
         * 기능 : 부모한테 사유를 파라미터로 넘김
         */
        this.fn_postReason = function()
        {
        	this.selDataSet(this.ds_list.name,0);
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
         /**
         * 한행을 처리하는 로직
         **/
        this.selDataSet = function(dsobj,nRow)
        {
        	var odsObj 	= this.all[dsobj];
        	var ds = new Dataset;
        	this.dsDummy.copyData(odsObj);
        	this.dsDummy.clearData();
        	ds.copyData(this.dsDummy); 			//전체 구조을 카피하기위해 데이타를 카피
        	var TRow = ds.addRow();
        	ds.copyRow(TRow, odsObj, nRow); 		//0번재 로에 행을 카피함

        	var objRtnArr = new Array(2);
        	objRtnArr[0] = "SUCCESS";
        	objRtnArr[1] = ds.saveXML();
        	this.opener.fn_dsChildCopydsDummy(ds);
        	this.close(objRtnArr.toString());

        };
        /*
         * 테스트처리시 사이즈 확인 로직
         */
        this.txa_regDisTip_oninput = function(obj,e)
        {
        	var nByte = this.fn_getLengthB(obj.value,3);
        	this.sta_batySize.set_text(nByte + "/300");
        	if(nByte > 300)
        	{
        		this.fn_alert("ERRR000167","반려정보","상세사유,300Byte","warning");                    // 입력한 상세사유가 200Byte를 넘길수 없습니다.
        		return false;
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.btn_reason.addEventHandler("onclick",this.btn_reason_onclick,this);
            this.txt_reason.addEventHandler("oninput",this.txa_regDisTip_oninput,this);
            this.ds_list.addEventHandler("cancolumnchange",this.ds_list_cancolumnchange,this);
        };
        this.loadIncludeScript("SSP_BO_RP_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
