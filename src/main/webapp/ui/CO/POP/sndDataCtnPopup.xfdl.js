(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sndDataCtnPopup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(930,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_retry", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"IF_SYSTEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_1\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_2\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_3\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_4\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_5\" type=\"STRING\" size=\"256\"/><Column id=\"RETRY_CNT\" type=\"INT\" size=\"256\"/><Column id=\"ERROR_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"SND_DATA_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"SND_DATA_CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYNC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PI_RSLT_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"IF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SBJCT_AR\" type=\"STRING\" size=\"256\"/><Column id=\"RETRY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"THME_DOMN_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"IF_SYSTEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_1\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_2\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_3\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_4\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_5\" type=\"STRING\" size=\"256\"/><Column id=\"RETRY_CNT\" type=\"INT\" size=\"256\"/><Column id=\"ERROR_DTLS\" type=\"STRING\" size=\"4000\"/><Column id=\"SND_DATA_CTS\" type=\"STRING\" size=\"4000\"/><Column id=\"SND_DATA_CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYNC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_CHANGE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SBJCT_AR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("sndDataCtnPopupMsg","10","11","910","479",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_scrollbartype("auto");
            obj.set_dragscrolltype("horz");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","468",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retry","363",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("재전송");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",930,550,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("sndDataCtnPopup.xfdl","CO::coUtils.xjs");
        this.registerScript("sndDataCtnPopup.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.asisDetailMsg = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.sndDataCtnPopup_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	//get params
        	var detailMsg = this.parent.detailMsg;
        	this.asisDetailMsg = JSON.stringify(detailMsg);
        	this.ds_retry = this.parent.ds_retry;
        	this.form_init();
        	// 타이틀 헤더설정
        	this.set_titletext("송신 상세내역");
        	//set param
        	this.sndDataCtnPopupMsg.set_value(detailMsg);
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_retry = function(){
        	var sSvcId = "retry";
        	var sUrl = "/co/select-pi-rcv-log-retry.do";
        	var inDs = "ds_select=ds_select";
        	var outDs = "ds_piRcvLog=ds_output1";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, "" , "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
        	if(errorCode != 0 && errorCode != -100){
        		trace(errorMsg);
        		return;
        	}

        	switch(svcID) {
        		case "retry" :
        			alert('재전송처리되었습니다.');
        			break;

        	}
        }
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.form_init = function(){
        	if(this.parent.pgmId != 'SSP_BO_YA_38') {
        		var IF_PROC_RSLT_CD = this.ds_retry.getColumn(0, "IF_PROC_RSLT_CD");
        		var IF_MSG_SEQ = this.ds_retry.getColumn(0, "IF_MSG_SEQ");
        		var RETRY_YN = this.ds_retry.getColumn(0, "RETRY_YN");
        		var RETRY_CNT = this.ds_retry.getColumn(0, "RETRY_CNT");
        		if( (IF_PROC_RSLT_CD == 'E' || IF_PROC_RSLT_CD == 'X') && IF_MSG_SEQ == '1' && RETRY_YN == 'Y' && !RETRY_CNT>=1){
        			this.btn_retry.set_visible(true);
        		this.btn_close.set_left(468);
        		}else{
        			this.btn_retry.set_visible(false);
        			this.btn_close.set_left(418);
        		}
        	} else {
        		this.btn_retry.set_visible(false);
        		this.btn_close.set_left(418);
        	}
        }

        this.btn_retry_onclick = function(obj,e)
        {
        	var sndDataCts = this.sndDataCtnPopupMsg.value;	//JSON전송
        	if(this.gfn_isNull(sndDataCts)){ alert('송신내용을 입력하세요.'); return; }
        	var jsonCheck = false;

        	try{
        		JSON.parse(sndDataCts);
        		jsonCheck = true;
        	}catch(e){
        		trace('sndDataCtnPopup > btn_retry_onclick > JSON.parse > ',e);
        	}
        	if(!jsonCheck){
        		alert('JSON문자열이 올바르지 않습니다.');
        		return;
        	}

        	if (!this.confirm("재전송하시겠습니까?")) { return; }

        	var sysId = this.ds_retry.getColumn(0, "IF_SYSTEM_ID");
        	var piId =  this.ds_retry.getColumn(0, "IF_PI_ID");
        	var msgId = this.ds_retry.getColumn(0, "IF_MSG_ID");
        	var msgSeq = this.ds_retry.getColumn(0, "IF_MSG_SEQ");
        	var ifRsltFld1 = this.ds_retry.getColumn(0, "IF_RSLT_FLD_1");
        	var ifRsltFld2 = this.ds_retry.getColumn(0, "IF_RSLT_FLD_2");
        	var ifRsltFld3 = this.ds_retry.getColumn(0, "IF_RSLT_FLD_3");
        	var ifRsltFld4 = this.ds_retry.getColumn(0, "IF_RSLT_FLD_4");
        	var ifRsltFld5 = this.ds_retry.getColumn(0, "IF_RSLT_FLD_5");
        	var sndDataClassNm = this.ds_retry.getColumn(0, "SND_DATA_CLASS_NM");
        	var no = this.ds_retry.getColumn(0, "NO");
        	var errorDtls = this.ds_retry.getColumn(0, "ERROR_DTLS");
        	var ifprocRsocRsltDtm = this.ds_retry.getColumn(0, "IF_PROC_RSLT_DTM");
        	var ifProcRsltCd = this.ds_retry.getColumn(0, "IF_PROC_RSLT_CD");
        	var retryCnt = this.ds_retry.getColumn(0, "RETRY_CNT");
        	var sndDataClassNm = this.ds_retry.getColumn(0, "SND_DATA_CLASS_NM");
        	var syncYn = this.ds_retry.getColumn(0, "SYNC_YN");
        	var sbjctAr = this.ds_retry.getColumn(0, "SBJCT_AR");

        	this.ds_select.clearData();
        	this.ds_select.addRow();
        	this.ds_select.setColumn(0,"IF_SYSTEM_ID",sysId);
        	this.ds_select.setColumn(0,"IF_PI_ID",piId);
        	this.ds_select.setColumn(0,"IF_MSG_ID",msgId);
        	this.ds_select.setColumn(0,"IF_MSG_SEQ",msgSeq);
        	this.ds_select.setColumn(0,"IF_RSLT_FLD_1",ifRsltFld1);
        	this.ds_select.setColumn(0,"IF_RSLT_FLD_2",ifRsltFld2);
        	this.ds_select.setColumn(0,"IF_RSLT_FLD_3",ifRsltFld3);
        	this.ds_select.setColumn(0,"NO",no);
        	this.ds_select.setColumn(0,"IF_RSLT_FLD_4",ifRsltFld4);
        	this.ds_select.setColumn(0,"IF_RSLT_FLD_5",ifRsltFld5);
        	this.ds_select.setColumn(0,"ERROR_DTLS",sndDataClassNm);
        	this.ds_select.setColumn(0,"SND_DATA_CTS",sndDataCts);
        	this.ds_select.setColumn(0,"SND_DATA_CLASS_NM",sndDataClassNm);
        	this.ds_select.setColumn(0,"IF_PROC_RSLT_CD",ifProcRsltCd);
        	this.ds_select.setColumn(0,"IF_PROC_RSLT_DTM",ifprocRsocRsltDtm);
        	this.ds_select.setColumn(0,"RETRY_CNT",retryCnt);
        	this.ds_select.setColumn(0,"SND_DATA_CLASS_NM",sndDataClassNm);
        	this.ds_select.setColumn(0,"SYNC_YN",syncYn);
        	this.ds_select.setColumn(0,"SBJCT_AR",sbjctAr);
        	this.ds_select.setColumn(0,"DATA_CHANGE_YN", (this.asisDetailMsg!=JSON.stringify(sndDataCts))?"Y":"N");

        	trace('sndData Change > ',(this.asisDetailMsg!=JSON.stringify(sndDataCts)));

        	this.fn_retry();
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //화면 닫기
        this.btn_conf_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sndDataCtnPopup_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_conf_onclick,this);
            this.btn_retry.addEventHandler("onclick",this.btn_retry_onclick,this);
        };
        this.loadIncludeScript("sndDataCtnPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
