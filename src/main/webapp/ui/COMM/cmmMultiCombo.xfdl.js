(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmMultiCombo");
            this.set_titletext("멀티콤보");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCbo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtCbo","0","0",null,"24","24",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Button("btnCbo","edtCbo:0","0","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_MultiCombo");
            obj.set_background("url(\'theme://images/btn_WF_Popmenunext.png\') no-repeat center center #ffffff");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvCbo","0","30",null,"129","-2",null,null,null,null,null,this);
            obj.set_text("");
            obj.set_visible("false");
            obj.set_cssclass("pdv_WF_MonthCalBg");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_all","5","0","60","20",null,null,null,null,null,null,this.pdvCbo.form);
            obj.set_taborder("1");
            obj.set_text("전체");
            obj.set_falsevalue("false");
            obj.set_truevalue("true");
            this.pdvCbo.addChild(obj.name, obj);

            obj = new Static("sta_maxCount",null,"0","80","20","0",null,null,null,null,null,this.pdvCbo.form);
            obj.set_taborder("2");
            obj.set_text("Max Count : 0");
            obj.set_visible("false");
            this.pdvCbo.addChild(obj.name, obj);

            obj = new Grid("grd_multiList","0","20",null,null,"0","0",null,null,null,null,this.pdvCbo.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.pdvCbo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,24,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmMultiCombo.xfdl", function() {
        /**
        *  @MenuPath    cmm > cmmMultiCombo.xfdl (공통 멀티콤보)
        *  @FileName 	cmmMultiCombo.xfdl
        *  @Creator 	consulting
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************

        *******************************************************************************
        */

        /****************************************************************************************************
         * Form 변수 선언 영역
        *****************************************************************************************************/
        	this._oBindDs;
        	this._oTarget;
        	//this._sTarget;

        	this.comboinnerdataset;
        	this.combocodecolumn;
        	this.combodatacolumn;

        	this.allcheck;
        	this.callbackfunc;
        	this.maxcountuse;
        	this.maxcount;
        	this.viewcount;

        //	this.fvTerm = 0;
        //	this.fvBottomTerm = 12;
        	this.fvWidth = 0;
        //	this.fvBtnWidth = 43;
        //	this.fvBtnHeight = 23;
        	this.fvRowHeight = 30;

        	this.objApp	=  nexacro.getApplication();
        /****************************************************************************************************
         * FORM EVENT 영역(onload)
        *****************************************************************************************************/
        	this.form_onload = function(obj,e)
        	{
        		this.fvWidth = this.pdvCbo.getOffsetWidth();
        	};
        /****************************************************************************************************
         * Transaction 서비스 호출 영역
        *****************************************************************************************************/

        /****************************************************************************************************
         * Callback 처리 영역
        *****************************************************************************************************/

        /****************************************************************************************************
         * 외부 호출 FUNCTION 영역
        *****************************************************************************************************/

        	this.cfn_setDataset = function (oForm)
        	{
        		this._oBindDs = oForm[this.comboinnerdataset];

        		this.dsCbo.clear();
        		this.dsCbo.addColumn("multiComboChk", "STRING");
        		this.dsCbo.addColumn(this.combocodecolumn, "STRING");
        		this.dsCbo.addColumn(this.combodatacolumn, "STRING");

        		//this._oBindDs.set_enableevent(false);
        		for( var j=0; j< this._oBindDs.getRowCount(); j++)
        		{
        			this.dsCbo.addRow();
        			this.dsCbo.setColumn(j, "multiComboChk", "0");
        			this.dsCbo.setColumn(j, this.combocodecolumn, this._oBindDs.getColumn(j,this.combocodecolumn));
        			this.dsCbo.setColumn(j, this.combodatacolumn, this._oBindDs.getColumn(j,this.combodatacolumn));
        		}

        		//this.oBindDs.set_enableevent(true);

        		var oCombo 	  = this.pdvCbo;
        		var nDisplayCount = this.viewcount;
        		var nRowCount = this.dsCbo.getRowCount();
        		if (nDisplayCount > nRowCount) nDisplayCount = nRowCount;
        		var nHeight = nHeight = this.fvRowHeight  * nDisplayCount;
        		//전체 체크 박스 사용 유무
         		if( this.allcheck 	== "true") {
        			nHeight = nHeight + 30;
        			this.pdvCbo.form.grd_multiList.set_bottom(30);
         			this.pdvCbo.set_height(nHeight);
         		} else {
         			this.pdvCbo.set_height(nHeight);
         		}
        		this.fn_makeCombo();
        	};

        	//필수상태
        	this.cfn_setRequired = function(bValue)
        	{
        		if (bValue) {
        			this.edtCbo.set_background("yellow");
        		}
        		else{
        			this.edtCbo.set_background("white");
        		}
        	};

        	//부모창에서 value 가져갈 수 있는 함수
        	this.get_value = function()
        	{
        		return this.edtCbo.retrunvalue;
        	};

        	//부모창에서 text 가져갈 수 있는 함수
        	this.get_text = function()
        	{
        		return this.edtCbo.returntext;
        	};

        	//값 세팅
        	this.set_value = function(sValue)
        	{
        		if( this.gfn_isNull(sValue) ) return;

        		var arrValueList = sValue.split(",");
        		var arrTextList = [];
        		//var objDs = this._oBindDs;
        		var nFindRow;
        		this.fn_init();
        		for (var i=0; i<arrValueList.length; i++)
        		{
        			nFindRow = this.dsCbo.findRow(this.combocodecolumn, arrValueList[i]);
        			if (nFindRow != -1)
        			{
        				arrTextList.push(this.dsCbo.getColumn(nFindRow, this.combodatacolumn));
        				this.dsCbo.setColumn(nFindRow, "multiComboChk", "1");
        			}
        		}

        		this.fn_setComboText(arrTextList, arrValueList);
        	};
        /****************************************************************************************************
         * 개발자(사용자) 함수 영역
        *****************************************************************************************************/
        	//콤보세팅
        	this.cfn_setMultiCombo = function ()
        	{
        		var oTarget = this.parent;	 // div

        		this.comboinnerdataset 		= oTarget.uComboInnerDataset;
        		this.combocodecolumn 		= oTarget.uComboCodeColumn;
        		this.combodatacolumn		= oTarget.uComboDataColumn;
        		this.allcheck 				= oTarget.uAllCheck;
        		this.callbackfunc 			= oTarget.uCallbackFunc;
        		this.maxcountuse            = oTarget.uMaxCountUse;
        		this.maxcount               = oTarget.uMaxCount;
        		this.viewcount              = oTarget.uViewCount;

        		if( this.gfn_isNull(this.combocodecolumn	)) return false;
        		if( this.gfn_isNull(this.combodatacolumn	)) return false;
        		if( this.gfn_isNull(this.allcheck 		)) this.allcheck  = "false";
        		if( this.gfn_isNull(this.maxcount		)) this.maxcount  = 5;
        		if( this.gfn_isNull(this.viewcount		)) this.viewcount = 5;


        		if(this.gfn_isNull(this.maxcountuse) || this.maxcountuse == "false"){
        			this.maxcountuse = "false";
        			this.pdvCbo.form.sta_maxCount.set_visible(false);
        		} else {
        			this.pdvCbo.form.sta_maxCount.set_text("Max Count : "+this.maxcount);
        		}
        	};

        	//Grid Como List 설정
        	this.fn_makeCombo = function()
        	{
        		var oGrid = this.pdvCbo.form.grd_multiList;
         		oGrid.set_cssclass("grd_WF_Detail");
        		oGrid.set_enableevent(false);
        		oGrid.set_enableredraw(false);

        		oGrid.set_binddataset(this.dsCbo);
        		oGrid.createFormat();

        		oGrid.deleteContentsRow("head", 0);
        		oGrid.setFormatRowProperty(0,"size",this.fvRowHeight);
        		oGrid.setCellProperty("Body", 0, "displaytype", "checkboxcontrol");
        		oGrid.setCellProperty("Body", 0, "edittype", "checkbox");
        		oGrid.setFormatColProperty(0, "size", 24);
        		oGrid.setFormatColProperty(0, "band", "left");
        		oGrid.show();

        		oGrid.addEventHandler("oncellclick", this._Grid_oncellclick, this);

        		oGrid.set_enableevent(true);
        		oGrid.set_enableredraw(true);

        		this.edtCbo.set_value("선택");
        	};


        	//Popup Div Open
        	this.fn_openCombo = function()
        	{
        		var nMainHeight = this.objApp.mainframe.height;
        		if (this.gfn_isNull(this._oBindDs))
        		{
        			trace("invalid comboinnerdataset");
        		} else {
        			this.pdvCbo.trackPopupByComponent(this.edtCbo, 0, this.edtCbo.getOffsetBottom());
        			this._oBindDs.set_rowposition(-1);
        		}
        	};

        	//초기화(전체해제)
        	this.fn_init = function (oThis)
        	{
        		this._oTarget = oThis;

        		var objBindDs = this.dsCbo;
        		for (var i=0; i<objBindDs.rowcount; i++)
        		{
        			objBindDs.setColumn(i, "multiComboChk", "0");
        		}
        		this.edtCbo.set_value("선택");
        	};

        	//값 세팅
        	this.fn_setComboText = function(arrTextList, arrValueList)
        	{
        		var sComboText = arrTextList.toString();
        		var nAllCnt = this.dsCbo.getRowCount();
        		var nChkCnt = this.dsCbo.getCaseCount("multiComboChk == '1'")
        		if(nAllCnt == nChkCnt){
        			this.edtCbo.set_value("전체");
        			this.edtCbo.set_tooltiptext(sComboText);
        			this.edtCbo.set_tooltiptype("hover");
        		} else {
        			this.edtCbo.retrunvalue = arrValueList.toString();
        			this.edtCbo.returntext = sComboText;
        			var oRtn = nexacro.getTextSize(sComboText, "9 Dotum");
        			var nComboTextWidth = oRtn.nx;

        			var nWidth = this.edtCbo.getOffsetWidth() - this.btnCbo.width;
        			if (nComboTextWidth > nWidth)
        			{
        				this.edtCbo.set_value(arrTextList.length+"개 선택");
        				this.edtCbo.set_tooltiptext(sComboText);
        				this.edtCbo.set_tooltiptype("hover");
        			} else {
        				this.edtCbo.set_value(sComboText);
        			}
        		}

        		if (this.gfn_isNull(arrTextList)) this.edtCbo.set_value("선택");
        	};
        /****************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *****************************************************************************************************/
        	//button click popupdiv open
        	this.btnCombo_onclick = function(obj,e)
        	{
        		this.fn_openCombo();
        	};

        	// edit click popupdiv open
        	this.edtCombo_oneditclick = function(obj,e)
        	{
        		this.fn_openCombo();
        	};

        	//Popup Div 닫힐때 값세팅
        	this.pdvCombo_oncloseup = function(obj,e)
        	{
        		//var objDs = this.ds_cbo;
        		var arrTextList  = [];
        		var arrValueList = [];

        		if (this.gfn_isNull(this.dsCbo.getColumnInfo(this.combodatacolumn)))
        		{
        			trace("comboinnerdataset("+this.dsCbo.name + ")에 컬럼(" + this.combodatacolumn + ")이 존재하지 않습니다.\ncombodatacolumn 정보를 확인하세요.");
        			return false;
        		}

        		if (this.gfn_isNull(this.dsCbo.getColumnInfo(this.combocodecolumn)))
        		{
        			trace("comboinnerdataset("+this.dsCbo.name + ")에 컬럼(" + this.combocodecolumn + ")이 존재하지 않습니다.\combocodecolumn 정보를 확인하세요.");
        			return false;
        		}

        		for (var i=0; i<this.dsCbo.getRowCount(); i++)
        		{
        			if (this.dsCbo.getColumn(i, "multiComboChk") == "1")
        			{
        				arrTextList.push(this.dsCbo.getColumn(i, this.combodatacolumn));
        				arrValueList.push(this.dsCbo.getColumn(i, this.combocodecolumn));
        			}
        		}
        		this.fn_setComboText(arrTextList, arrValueList);

        		if (!this.gfn_isNull(this.callbackfunc))
        		{
        			this.lookupFunc(this.callbackfunc).call(this.parent.name);
        		}
        	};

        	//Combo 클릭
        	this._Grid_oncellclick = function(obj, e)
        	{
        		var oBindDs = obj.getBindDataset();

        		if (e.col != 0) {
        			if (oBindDs.getColumn(e.row, "multiComboChk") == "1"){
        				oBindDs.setColumn(e.row, "multiComboChk", "0");
        			} else {
        				oBindDs.setColumn(e.row, "multiComboChk", "1");
        			}
        		}
        	};

        	//전체 check box 이벤트 함수
        	this.pdvCbo_chk_all_onclick = function(obj,e)
        	{

        	};

        	this.pdvCbo_chk_all_onchanged = function(obj,e)
        	{
        		var sValue = 0;
        		if(obj.value == "true"){
        			sValue = 1;
        		}
        		var nAllCnt = this.dsCbo.getRowCount();
        		var nChkCnt = this.dsCbo.getCaseCount("multiComboChk == '1'")
        		for (var i=0; i<this.dsCbo.getRowCount(); i++)
        		{
        			this.dsCbo.setColumn(i, "multiComboChk", sValue);

        		}
        	};

        	//dataset 값 변경 전 check
        	this.dsCbo_cancolumnchange = function(obj,e)
        	{
        		if(this.maxcountuse == "true"){
        			if(e.newvalue == "1"){
        				var nSelectCount = obj.getCaseCount("multiComboChk == '1'");
        				if (this.maxcount <= nSelectCount){
        					return false;
        				}
        			}
        		}
        	};
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edtCbo.addEventHandler("oneditclick",this.edtCombo_oneditclick,this);
            this.btnCbo.addEventHandler("onclick",this.btnCombo_onclick,this);
            this.pdvCbo.addEventHandler("oncloseup",this.pdvCombo_oncloseup,this);
            this.pdvCbo.form.chk_all.addEventHandler("onchanged",this.pdvCbo_chk_all_onchanged,this);
            this.dsCbo.addEventHandler("cancolumnchange",this.dsCbo_cancolumnchange,this);
        };
        this.loadIncludeScript("cmmMultiCombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
