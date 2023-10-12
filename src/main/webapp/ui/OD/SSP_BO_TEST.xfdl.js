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
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(110,110);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_select", this);
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("tareaInput","0","0","740","280",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplc","421","128","125","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","550","128","125","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bzplcPopup","680","128","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplc1","420","178","125","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bzplcPopup1","679","178","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm1","549","178","125","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplc2","421","216","125","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm2","550","216","125","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bzplcPopup2","680","216","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle","270","128","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_font("bold 14pt \"Arial\"");
            obj.set_text("회원 단일");
            obj.set_cssclass("sta_WF_title03");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle00","270","180","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_font("bold 14pt \"Arial\"");
            obj.set_text("결재자 조회");
            obj.set_cssclass("sta_WF_title03");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle00_00","270","220","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_font("bold 14pt \"Arial\"");
            obj.set_text("발주자 조회");
            obj.set_cssclass("sta_WF_title03");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",110,110,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_bzplc","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_bzplc1","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_bzplc2","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_TEST.xfdl", function() {

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;
        this.insertCount = 0;

        this.fv_inqCondDtls ="";
        this.fv_colItm ="";

        this.SSP_BO_TEST_onload = function(obj,e)
        {
        	fv_inqCondDtls = this.parent.pv1;
            fv_colItm = this.parent.pv2;

        	trace("### fv_inqCondDtls : " + fv_inqCondDtls + ", fv_colItm : " + fv_colItm);
        };


        // 주문조회대상내역(Insert, TB_OD_ODR_INQ_TGT_DTLS)
        this.fn_insertSelectedData = function() {
        	var sSvcId = "insertOdrInqTgtDtls";
        	var sUrl = "/od/odrPopup/insertOdrInqTgtDtls.do";
        	var inDs = "ds_search=ds_select";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "insertOdrInqTgtDtls"){
        		trace("### insertOdrInqTgtDtls - insert count : " + this.insertCount);
        		this.close(this.insertCount);
        	}
        };

        this.tareaInput_onkeydown = function(obj,e)
        {
        	if(e.ctrlkey == true && e.keycode == 115)	this.close(0);
        	if(e.keycode != 13)	return;

        	var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\- +<>@\#$%&\\\=\(\'\"]/gi
	var val = obj.value.split('\n');

        	this.ds_select.deleteAll();
        	var nRow ;
        	var strValue ;
        	for(var i=0; i < val.length; i++)
        	{
        		strValue = val[i];
        		strValue = strValue.replace(regExp,"");

        		//trace("data is "+strValue + ", " + this.ds_select.findRow("COND_DATA_VAL",strValue));
        		if(strValue.length != 0  &&  this.ds_select.findRow("COND_DATA_VAL",strValue) == -1)
        		{
        			nRow = this.ds_select.addRow();
        			this.ds_select.setColumn(nRow, "SES_ID", "");
        			this.ds_select.setColumn(nRow, "INQ_COND_DTLS", fv_inqCondDtls);
        			this.ds_select.setColumn(nRow, "COL_ITM", fv_colItm);
        			this.ds_select.setColumn(nRow, "COND_DATA_VAL", strValue);

        			//trace("data is "+fv_inqCondDtls + ", "+fv_colItm+ ", "+strValue);
        		}
        	}

        	if(this.ds_select.rowcount != 0)
        	{
        		//this.close(nRow+1);
        		this.fn_insertSelectedData();
        	}
        	else
        		this.close(-1);
        };

        this.SSP_BO_TEST_oninit = function(obj,e)
        {
        	//this.getOwnerFrame().set_resizable(true);
        	//this.getOwnerFrame().set_width(this.parent.pv3);
        	//this.getOwnerFrame().set_height(this.parent.pv4);
        	//this.tareaInput.width = this.getOwnerFrame().width;
        	//this.tareaInput.height = this.getOwnerFrame().height;
        	//this.getOwnerFrame().set_showtitlebar(false);
        };
        this.btn_bzplcPopup_onclick = function(obj,e)
        {
        	var objParam = {pv1:"0",pv2:"S000012561"};
        	this.gfn_openPopup("OA54", "OD::SSP_BO_OA_54.xfdl", objParam);
        };
        this.fn_popupCallback = function(sPopupId, sRetValue) {
        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";

            if (sRetValue == undefined) {
                return;
            }
        	else {
        		resData = JSON.parse(sRetValue);
        	}

        	switch (sPopupId) {
        		case "OA54":
        			this.edt_bzplc.set_value(resData.MBR_ID);
        			this.edt_bzplcNm.set_value(resData.MBR_NM);
        			break;
        		case "OA55":
        			this.edt_bzplc1.set_value(resData.MBR_ID);
        			this.edt_bzplcNm1.set_value(resData.MBR_NM);
        			break;
        		case "OA56":
        			this.edt_bzplc2.set_value(resData.MBR_ID);
        			this.edt_bzplcNm2.set_value(resData.MBR_NM);
        			break;
        		default :
        			break;
        	}
        };

        this.btn_bzplcPopup1_onclick = function(obj,e)
        {
        	var objParam = {pv1:"1",pv2:"S000012316"};
        	this.gfn_openPopup("OA55", "OD::SSP_BO_OA_55.xfdl", objParam);
        };

        this.btn_bzplcPopup2_onclick = function(obj,e)
        {
        	var objParam = {pv1:"2",pv2:"S000010038"};
        	this.gfn_openPopup("OA56", "OD::SSP_BO_OA_55.xfdl", objParam);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_TEST_onload,this);
            this.addEventHandler("oninit",this.SSP_BO_TEST_oninit,this);
            this.tareaInput.addEventHandler("onkeydown",this.tareaInput_onkeydown,this);
            this.btn_bzplcPopup.addEventHandler("onclick",this.btn_bzplcPopup_onclick,this);
            this.btn_bzplcPopup1.addEventHandler("onclick",this.btn_bzplcPopup1_onclick,this);
            this.btn_bzplcPopup2.addEventHandler("onclick",this.btn_bzplcPopup2_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_TEST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
