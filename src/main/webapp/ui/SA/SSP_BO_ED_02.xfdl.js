(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_ED_02");
            this.set_titletext("EDM - 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(660,260);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID_MULTI\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_edmInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EDM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EDM_FORM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXTR_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PW\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_MBR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID_MULTI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_save","335","196","70","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"196","70","32","335",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","30","23","600","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","58","600","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","30","93","600","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","30","128","600","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("static_edm_type","30","23","80","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("타입");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("static_edm_mbr","30","58","80","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("회원ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("static_edm_reason","30","93","80","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("사유");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("static_edm_evtId","30","128","80","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("이벤트ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("static_edm_excelPw","360","128","80","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("엑셀PW");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_type","121","34","149","16",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_type_innerdataset = new nexacro.NormalDataset("rdo_type_innerdataset", obj);
            rdo_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">E-Mail</Col></Row><Row><Col id=\"codecolumn\">S</Col><Col id=\"datacolumn\">SMS</Col></Row></Rows>");
            obj.set_innerdataset(rdo_type_innerdataset);
            obj.set_text("E-Mail");
            obj.set_value("E");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("static_edm_reason_size","536","98","88","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("(0 / 100 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mbrMltPop","466",null,"24","24",null,"172",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mbrMltTxtPop","496",null,"24","24",null,"172",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_allMbr","533","68","91","17",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("전체 선택");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mbr","115","62","333","27",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_reason","115","97","420","27",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_evtId","115","132","240","27",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_excelPw","450","132","180","27",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_password("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",660,260,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edt_mbr","value","ds_edmInfo","MBR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_reason","value","ds_edmInfo","EXTR_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_evtId","value","ds_edmInfo","EVT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_excelPw","value","ds_edmInfo","EXCEL_PW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","rdo_type","value","ds_edmInfo","EDM_FORM_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_ED_02.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_ED_02.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_ED_02.xfdl","CC::CcUtils.xjs");
        this.registerScript("SSP_BO_ED_02.xfdl", function() {
        /*******************************************************
        PROJECT NAME : EDM 타겟 관리 등록
        CREATION DATES : 2022.12.13
        CREATER        : YHK
        *******************************************************/
        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        /***********************************************************************************************
         * 0.Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        var fv_coCd = "";
        /***********************************************************************************************
        * 1.FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//초기화
        	this.fn_init("INIT");


        };

        this.fn_onkeyup = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
        	}
        };

        /***********************************************************************************************
        * 2.Transaction 서비스 호출 영역
        ************************************************************************************************/
        //저장
        this.fn_save = function() {

        	this.ds_edmInfo.setColumn(0, "CO_CD", this.fv_coCd);

        	var sSvcId = "saveEdmInfo";
        	var sUrl = "/sa/edm/insertEdmInfo.do";
        	var inDs = "ds_save=ds_edmInfo";
        	var outDs = "ds_edmInfo=ds_output";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        // 대용량엑셀다운로드
        this.fn_largeExcelDownload = function(){

        	var sSvcId = "largeExcelDown";
        	var sUrl = "/sa/excelDown/large/edmInfo.do";
        	var inDs = "ds_save=ds_edmInfo";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };

        /***********************************************************************************************
        * 3.Callback 처리 영역
        ************************************************************************************************/

        //콜백
        this.fn_callBack = function(svcID, errorCode, errorMsg) {

        	if(errorCode < 0)
        	{
        		alert(errorMsg);
        		return;
        	}

        	switch (svcID)
        	{
        		case "saveEdmInfo" :

        			//대용량 엑셀다운로드
        			this.fn_largeExcelDownload();

        			alert(this.fn_getMessage("ERRN000029")); // 등록되었습니다.

        			var resData = {};
        			var resString = "";

        			resData.RETURN_YN = "Y";

        			// json string 변경
        			resString = JSON.stringify(resData);

        			// return
        			this.close(resString);

        			break;



        		case "insertOdrInqTgtDtls" :

        			this.fn_save();

        			break;



        		default :

        			break;
        	}

        };

        //팝업 콜백
        this.fn_popupCallback = function(sPopupId, sRetValue){

        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";

        	if(sRetValue == undefined){
        		return;
        	}else{
        		resData = JSON.parse(sRetValue);
        	}

        	switch(sPopupId){

        		case "mbrMultiPop":
        			for(var i=0; i<resData.length; i++){
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.MBR_ID + ",";

        			}
        			this.ds_edmInfo.setColumn(0,"MBR_ID",sIdList.replace(/,\s*$/, ""));


        			break;

        		default :
        			break;
        	}
        };

        //조건 멀티 텍스트 팝업 콜백
        this.fn_multiTextPopupCallback = function(objID, rtnValue) {

        	var resParam = JSON.parse(rtnValue);
        	var splitedStringArr = resParam.textValue.split(",");

        	switch(objID){

        		case "mbrMultiTextPopup":
        			this.ds_edmInfo.setColumn(0,"MBR_ID",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        			break;

        		default :
        			break;
        	}
        }

        /***********************************************************************************************
        * 4.외부 호출 FUNCTION 영역
        ************************************************************************************************/
        this.cfn_formInit = function()
        {
        	// 필수 값 표시
        	this.static_edm_type.uEssentiel = "true";
        	this.static_edm_mbr.uEssentiel = "true";
        	this.static_edm_reason.uEssentiel = "true";
        	this.static_edm_evtId.uEssentiel = "true";
        	this.static_edm_excelPw.uEssentiel = "true";
        }


        /***********************************************************************************************
        *  5.개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 글자 byte 체크 함수
        this.fn_setLenByte = function(sVal, maxByte, sGubun)
        {
        	var count = nexacro._getUtf8Length(sVal);
        	var expsText = "";

        	if (count < 0) {
        		count = 0;
        	}

        	if(count <= maxByte) {
        		expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        		if (sGubun == "reason") {
        			this.static_edm_reason_size.set_text(expsText);
        		}
        		return;
        	}

        	var tempVal = "";

        	tempVal = nexacro._substrByUtf8(sVal, 0, maxByte);
        	count = nexacro._getUtf8Length(tempVal);

        	expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        	if (sGubun == "reason") {
        		this.edt_reason.set_value("");
        		this.edt_reason.set_value(tempVal);
        		this.static_edm_reason_size.set_text(expsText);
        	}
        };

        //화면 초기화 함수
        this.fn_init = function(sVal)
        {
        	switch (sVal)
        	{
        		case "INIT" :
        			//변수 세팅
        			this.fv_coCd = this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD");

        			//타입값 초기세팅(E-Mail)
        			this.rdo_type.set_index(0);

        			//전체 선택 체크박스 초기세팅
        			this.chk_allMbr.set_enable(true); // 체크박스 사용가능
        			this.chk_allMbr.set_value(false); // 체크해제
        			this.ds_edmInfo.setColumn(0, "ALL_MBR_YN","N"); // 초기 데이터셋값

        			this.edt_mbr.set_enable(true); //회원아이디인풋 사용가능
        			this.btn_mbrMltPop.set_enable(true); // 회원멀티입력 버튼 사용
        			this.btn_mbrMltTxtPop.set_enable(true); // 회원멀티텍스트 버튼 사용


        			// 엑셀PW 자동설정(난수), 변경불가
        			var pw = this.makePw();
        			this.edt_excelPw.set_value(pw);
        			this.edt_excelPw.set_enable(false);

        			break;

        		default :

        			break;
        	}
        }

        // 엑셀 PW 난수생성
        this.makePw = function() {
            return Math.random().toString(36).substr(2,9);
        }


        /***********************************************************************************************
        * 6. 각 Component 별 이벤트 영역
        ************************************************************************************************/

        // 사유 키업 이벤트 (글자수제한)
        this.edt_reason_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 100, "reason");
        };



        // 취소
        this.btn_cancel_onclick = function(obj,e)
        {
        	if(confirm(this.fn_getMessage("ERRN000053"))) { // 취소하시겠습니까?
        		this.close();
        	}
        };

        // 저장
        this.btn_save_onclick = function(obj,e)
        {
        	// 필수 입력값 체크

        	// 엑셀비밀번호
        	if(this.ds_edmInfo.getColumn(0,"EXCEL_PW") == "" || this.ds_edmInfo.getColumn(0,"EXCEL_PW") == undefined){
        		alert(this.fn_getMessage("ERRN000001", "엑셀 비밀번호는")); // 엑셀 비밀번호는 필수 입력항목입니다.
        		this.edt_excelPw.setFocus();
        		return;
        	}

        	// 회원 ID (전체 선택 체크시 필수X)
        	if(this.chk_allMbr.value == false){

        		if(this.ds_edmInfo.getColumn(0,"MBR_ID") == "" || this.ds_edmInfo.getColumn(0,"MBR_ID") == undefined){
        		alert(this.fn_getMessage("ERRN000001", "회원 ID는")); // 회원 ID는 필수 입력항목입니다.
        		this.edt_mbr.setFocus();
        		return;
        		}
        	}

        	// 사유
        	if(this.ds_edmInfo.getColumn(0,"EXTR_RSN") == "" || this.ds_edmInfo.getColumn(0,"EXTR_RSN") == undefined){
        		alert(this.fn_getMessage("ERRN000001", "사유는")); // 사유는 필수 입력항목입니다.
        		this.edt_reason.setFocus();
        		return;
        	}

        	// 이벤트 ID
        	if(this.ds_edmInfo.getColumn(0,"EVT_ID") == "" || this.ds_edmInfo.getColumn(0,"EVT_ID") == undefined){
        		alert(this.fn_getMessage("ERRN000001", "이벤트 ID는")); // 이벤트 ID는 필수 입력항목입니다.
        		this.edt_evtId.setFocus();
        		return;
        	}

        	if ( !confirm(this.fn_getMessage("ERRN000043"))) // 등록하시겠습니까?
        	{
        		return;
        	}

        	// 멀티입력값 세팅
        	this.ds_edmInfo.setColumn(0,"INQ_COND_DTLS", this.name);

        	if(!this.gfn_isNull(this.edt_mbr.value)){
        		this.fn_setMSearch(this.name,"MBR_ID_MULTI",this.edt_mbr.value,"ds_edmInfo");

        	}else{
        		this.ds_edmInfo.setColumn(0, "MBR_ID_MULTI", null);
        	}

        	// 멀티입력값 테이블에 등록
        	if(this.ds_select.getRowCount() > 0){
        		this.fn_insertSelectedData("fn_callBack");

        	}else{
        		this.fn_save();
        	}

        };

        //전체선택 체크박스 이벤트
        this.chk_allMbr_onchanged = function(obj,e)
        {
        	if(this.chk_allMbr.value) {

        		this.edt_mbr.set_value("");	// 회원ID 입력값 삭제
        		this.edt_mbr.set_enable(false); // 회원ID 인풋 비활성화
        		this.btn_mbrMltPop.set_enable(false); // 회원 멀티 팝업버튼 비활성화
        		this.btn_mbrMltTxtPop.set_enable(false); // 회원 멀티 텍스트버튼 비활성화
        		this.ds_edmInfo.setColumn(0, "ALL_MBR_YN","Y");

        	}
        	else {

        		this.edt_mbr.set_enable(true);
        		this.btn_mbrMltPop.set_enable(true);
        		this.btn_mbrMltTxtPop.set_enable(true);
        		this.ds_edmInfo.setColumn(0, "ALL_MBR_YN","N");

        	}

        };




        /***********************************************************************************************
        *  7.팝업 관련 영역
        ************************************************************************************************/


        //회원 조건 팝업
        this.btn_mbrMltPop_onclick = function(obj,e)
        {
        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	var objParam = {
        		coCd : this.fv_coCd,
        		mbrId: this.edt_mbr.value,
        		mbrNm: ""
        	};
        	this.gfn_openPopup("mbrMultiPop", "CO_POP::SSP_BO_PP_25.xfdl", objParam);
        };

        //회원 조건 텍스트 입력 팝업
        this.btn_mbrTxt_onclick = function(obj,e)
        {
        	var params = {
        		textId : this.edt_mbr
        	};

        	var options = {};
        	options.title = "회원";

        	this.gfn_openPopup("mbrMultiTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_multiTextPopupCallback", options);
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_mbrMltPop.addEventHandler("onclick",this.btn_mbrMltPop_onclick,this);
            this.btn_mbrMltTxtPop.addEventHandler("onclick",this.btn_mbrTxt_onclick,this);
            this.chk_allMbr.addEventHandler("onchanged",this.chk_allMbr_onchanged,this);
            this.edt_reason.addEventHandler("onkeyup",this.edt_reason_onkeyup,this);
        };
        this.loadIncludeScript("SSP_BO_ED_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
