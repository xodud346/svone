(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmCalMM");
            this.set_titletext("월 달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(96,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("calYM","0","0","96","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvCal","0","29","187","206",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_cssclass("pdv_WF_MonthCalBg");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"35","0",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("0");
            obj.set_text("월 선택");
            obj.getSetter("uWord").set("popup.monthselect");
            obj.set_cssclass("sta_POP_Title");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnBefore","8","43","21","21",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ShuttleL");
            obj.set_text("<");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnPdvClose",null,"12","21","21","10",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            obj.set_text("X");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"43","21","21","10",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ShuttleR");
            obj.set_text(">");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("staYYYY","26","43",null,"21","26",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("2");
            obj.set_text("9999");
            obj.set_textAlign("center");
            obj.set_font("bold 12pt \"맑은 고딕\"");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn1","8","70","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("01");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn2","51","70","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("02");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn3","94","70","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("03");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn4","137","70","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("04");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn5","8","113","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("05");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn6","51","113","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("06");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn7","94","113","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("07");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn8","137","113","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("08");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn9","8","156","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("09");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn10","51","156","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn11","94","156","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn12","137","156","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("12");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",96,24,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmCalMM.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    cmm > cmmCalMM (공통 월달력)
        *  @FileName 	cmmCalMM.xfdl
        *  @Creator 	consulting
        *  @CreateDate 	2017.03.09
        *  @Desction    월달력
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	consulting 	                최초 생성
        *  2017.10.17     	consulting       	        주석 정비
        *  2017.10.26     	consulting 	                주석 정비및 메세지팝업 공통으로 변경
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvToday;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//this.gfn_formOnLoad(this);//초기화[필수]

        	this.fvToday = this.gfn_getDate(); //오늘날자세팅
        	this.fn_init();
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 달력초기화
        */
        this.fn_init = function()
        {
        	//요구사항에 따라 오늘날짜 3개월 등등 지정 현재 디폴트="";
        	this.calYM.set_value(this.fvToday);
        };

        /**
        * @description  컴포넌트 날짜 값 호출
        */
        this.cfn_getValue = function()
        {
        	var rtn = this.calYM.value.substr(0,6);
        	return rtn;
        };

        /**
        * @description   컴포넌트 날짜 값 셋팅
        */
        this.cfn_setValue = function(sDate)
        {
        	this.calYM.set_value(sDate);
        };

        /**
        * @description    컴포넌트 enable 셋팅
        */
        this.cfn_setEnable = function(bValue)
        {
        	this.calYM.set_enable(bValue);
        };

        /**
        * @description    컴포넌트 Readonly 셋팅
        */
        this.cfn_setReadonly = function(bValue)
        {
        	this.calYM.set_readonly(bValue);
        };

        /**
        * @description    컴포넌트 필수 css 셋팅
        */
        this.cfn_setEssential = function(bValue)
        {
        	//CSS Class가있는 경우 클래스설정 임시로 노란표시
        	if(bValue){
        		this.calYM.set_background("yellow");
        	}else{
        		this.calYM.set_background("");
        	}
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description   Calendar_ondropdown 이벤트 시 popDiv컴포넌트 띄우기
        */
        this.calYM_ondropdown = function(obj,e)
        {
        	var sDate = this.calYM.value;
        	if( this.gfn_isNull(sDate) ) sDate = this.fvToday;

        	this.pdvCal.form.staYYYY.set_text(sDate.substr(0,4));

        	var oForm = this.parent.parent;
        	var nTop = 0;
        	// 상단 팝업
        	if (oForm.getOffsetHeight() < (this.parent.getOffsetBottom() + this.pdvCal.getOffsetHeight())) {
        		nTop = -1 * (this.pdvCal.getOffsetHeight() + 1);
        	}
        	else {
        		nTop = this.parent.getOffsetHeight();
        	}

        	var nLeft = 0;
        	// 우측 정렬
        	if (oForm.getOffsetWidth() < (this.parent.getOffsetRight() + this.pdvCal.getOffsetWidth()) ) {
        		nLeft = this.parent.getOffsetWidth() - this.pdvCal.getOffsetWidth();
        	}
        	else {
        		nLeft = 0;
        	}
        	this.pdvCal.trackPopupByComponent(obj, 0, obj.getOffsetBottom());
        	//this.pdvCal.trackPopup(this.parent.getOffsetLeft(),this.parent.getOffsetHeight()+this.parent.getOffsetBottom());
        };

        /**
        * @description   월달력 popDiv컴포넌트 닫기
        */
        this.pdvCal_btnPdvCancle_onclick = function(obj,e)
        {
        	this.pdvCal.closePopup();
        };

        /**
        * @description   이전 년도 버튼 클릭
        */
        this.pdvCal_btnBefore_onclick = function(obj,e)
        {
        	var sDate =nexacro.toNumber( this.pdvCal.form.staYYYY.text);
        	this.pdvCal.form.staYYYY.set_text(sDate - 1 );

        };

        /**
        * @description  다음년도 버튼 클릭
        */
        this.pdvCal_btnNext_onclick = function(obj,e)
        {
        	var sDate =nexacro.toNumber( this.pdvCal.form.staYYYY.text);
        	this.pdvCal.form.staYYYY.set_text(sDate + 1 );
        };

        /**
        * @description  월 버튼 클릭
        */
        this.pdvCal_btn1_onclick = function(obj,e)
        {
        	var rtn = this.pdvCal.form.staYYYY.text + obj.text;
        	this.calYM.set_value(rtn);
        	this.pdvCal.closePopup();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.calYM.addEventHandler("ondropdown",this.calYM_ondropdown,this);
            this.pdvCal.form.btnBefore.addEventHandler("onclick",this.pdvCal_btnBefore_onclick,this);
            this.pdvCal.form.btnPdvClose.addEventHandler("onclick",this.pdvCal_btnPdvCancle_onclick,this);
            this.pdvCal.form.btnNext.addEventHandler("onclick",this.pdvCal_btnNext_onclick,this);
            this.pdvCal.form.btn1.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn2.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn3.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn4.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn5.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn6.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn7.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn8.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn9.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn10.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn11.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn12.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
        };
        this.loadIncludeScript("cmmCalMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
