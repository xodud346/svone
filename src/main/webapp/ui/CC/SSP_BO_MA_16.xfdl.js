(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MA_17");
            this.set_titletext("PW 초기화");
            if (Form == this.constructor)
            {
                this._setFormPosition(540,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dtl", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resMap", this);
            obj._setContents("<ColumnInfo><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","17","31","510",null,null,"30",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_positionstep("0");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","410","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("임시 비밀번호 수신 매체를 선택해주세요");
            obj.set_cssclass("sta_WF_title04");
            obj.set_font("normal 700 16px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_select","230","260","60","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("발송");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","5","27","245","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("※회원 비밀번호가 난수로 초기화 됩니다.");
            obj.set_usedecorate("true");
            obj.set_color("#ff0000");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","5","52","366","158",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("normal 700 15px/normal \"Arial\"");
            obj.set_padding("0px");
            obj.set_columncount("1");
            var Div00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_form_Radio00_innerdataset", obj);
            Div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">회원 E-mail</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">회원 SMS</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Radio00_innerdataset);
            obj.set_text("회원 E-mail");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","8","108","442","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","8","200","442","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",540,380,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_MA_16.xfdl", function() {
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.resultcnt = 0;
        this.btn_select_onclick = function(obj,e)
        {
        	var mbrId = this.opener.ds_dtl.getColumn(0, "MBR_ID");
        	var mbrNm = this.opener.ds_dtl.getColumn(0, "MBR_NM");
        	var loginId = this.opener.ds_dtl.getColumn(0, "LOGN_ID");
        	var cocd = this.opener.ds_dtl.getColumn(0, "CO_CD");
        	var emailAddr = this.opener.ds_dtl.getColumn(0, "EMAIL_ADDR");
        	var sendSMS = this.opener.ds_dtl.getColumn(0, "HP_NO");


        	this.ds_dtl.clearData();
        	var nRow = this.ds_dtl.addRow();

        	this.ds_dtl.setColumn(nRow,"CO_CD", cocd);
        	this.ds_dtl.setColumn(nRow,"MBR_ID", mbrId);
        	this.ds_dtl.setColumn(nRow,"MBR_NM", mbrNm);
        	this.ds_dtl.setColumn(nRow,"LOGN_ID", loginId);
        	this.ds_dtl.setColumn(nRow,"EMAIL_ADDR", emailAddr);
        	this.ds_dtl.setColumn(nRow,"HP_NO", sendSMS);
        	trace("인덱스1: "+this.Div00.form.Radio00.index);

        	if(this.Div00.form.Radio00.index < 1){
        		trace("email");
        		var sSvcId = "changepwemail";
        		var sUrl = "/bo/cust/mbr/pw-send-mail.do";
        		var inDs = "ds_dtl=ds_dtl";
        		var outDs = "ds_resMap=ds_resMap";
        		var arg;

        	}
        	else{
        		trace("sms");
        		var sSvcId = "changepwsms";
        		var sUrl = "/bo/cust/mbr/pw-send-sms.do";
        		var inDs = "ds_dtl=ds_dtl";
        		var outDs = "ds_resMap=ds_resMap";
        		var arg;
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(sSvcId, outDs)
        {
        trace("세희 "+this.resultcnt);
        	if(this.resultcnt >0){
        		//email
        		if(sSvcId == "changepwemail"){
        		trace("email1");
        			alert("고객의 임시비밀번호를 EMAIL로 전송하였습니다.");
        		}

        		//sms
        		if(sSvcId == "changepwsms"){
        		trace("sms1");
        			alert("고객의 임시비밀번호를 SMS로 전송하였습니다.");
        		}
        		trace("UPDPSN_NM "+this.ds_resMap.saveXML());
        		var resData = {};
        		var resString = "";
        		resData.UPDPSN_NM = this.ds_resMap.getColumn(0, "UPDPSN_NM");
        		resData.UPD_DTM =this.ds_resMap.getColumn(0, "UPD_DTM");
        		resString = JSON.stringify(resData);
        		this.close(resString);
        	}else{
        		alert("비밀번호 변경에 실패하였습니다.");
        		this.close();
        	}


        }

        this.form_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	var email_value = this.opener.ds_dtl.getColumn(0,"EMAIL_ADDR");
        	var sms_value = this.opener.ds_dtl.getColumn(0,"HP_NO");

        	this.Div00.form.Edit00.set_value(email_value);
        	this.Div00.form.Edit00_00.set_value(sms_value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onLoad,this);
            this.Div00.form.Static60_00.addEventHandler("onclick",this.Div00_Static60_00_onclick,this);
            this.Div00.form.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.Div00.form.sta_totcnt.addEventHandler("onclick",this.Div00_sta_totcnt_onclick,this);
            this.Div00.form.Radio00.addEventHandler("onitemchanged",this.Div00_Radio00_onitemchanged,this);
        };
        this.loadIncludeScript("SSP_BO_MA_16.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
