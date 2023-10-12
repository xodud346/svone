(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_TEST");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,330);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("tareaInput","0","0","200","280",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","5","290","45","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","55","290","45","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,330,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_MSEARCH.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_MSEARCH.xfdl", function() {

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;
        this.insertCount = 0;

        this.fv_inqCondDtls ="";
        this.fv_colItm ="";
        this.fv_sIdList = "";

        this.SSP_BO_TEST_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	fv_inqCondDtls = this.parent.pv1;
            fv_colItm = this.parent.pv2;

        	if(this.parent.pv5 != undefined)
        	{
        		fv_sIdList = this.parent.pv5;
        		fv_sIdList = fv_sIdList.replace(/[ ]/g,"");
        		fv_sIdList = fv_sIdList.replace(/[,]/g,"\n");
        		this.tareaInput.set_value(fv_sIdList);
        	}
        	else {
        		fv_sIdList = "";
        	}

        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_TEST_oninit = function(obj,e)
        {
        	this.getOwnerFrame().set_resizable(true);
        	this.getOwnerFrame().set_width(this.parent.pv3);
        	this.getOwnerFrame().set_height(this.parent.pv4);
        	this.tareaInput.width = this.getOwnerFrame().width;
        	this.tareaInput.height = this.getOwnerFrame().height - 60;
        	this.btn_select.set_left(5);
        	this.btn_select.set_top(this.getOwnerFrame().height - 55);
        	this.btn_del.set_left(55);
        	this.btn_del.set_top(this.getOwnerFrame().height - 55) ;
        };

        this.SSP_BO_TEST_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };


        this.btn_del_onclick = function(obj,e)
        {
        	fv_sIdList = "";
        	this.tareaInput.set_value(fv_sIdList);
        };

        this.btn_select_onclick = function(obj,e)
        {
        	fv_sIdList = this.tareaInput.value;
        	fv_sIdList = fv_sIdList.replace(/[ ]/g,"");
        	fv_sIdList = fv_sIdList.replace(/[\n]/g,",");

        	var resData = {};
        	var resList = [];

        	var val = fv_sIdList.split(',');

        	var nRow ;
        	var strValue ;
        	for(var i=0; i < val.length; i++)
        	{
        		strValue = val[i];
        		if(strValue.length != 0  )
        		{
        			resData.KEY   = fv_colItm;
        			resData.VALUE = strValue;
        			resList.push(JSON.stringify(resData));
        		}
        	}
        	if(val.length != 0)
        		this.close(JSON.stringify(resList));
        	else
        		this.close(null);
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	//this.fn_regMethodENTER("btn_search_onclick");
        	this.fn_regMethodESC("fn_closeForm");
        	this.fn_regMethodShiftENTER("btn_select_onclick");
        };

        //
        this.fn_closeForm = function() {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_TEST_onload,this);
            this.addEventHandler("oninit",this.SSP_BO_TEST_oninit,this);
            this.addEventHandler("onkeyup",this.SSP_BO_TEST_onkeyup,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_MSEARCH.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
