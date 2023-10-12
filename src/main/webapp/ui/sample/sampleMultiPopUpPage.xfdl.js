(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SamplePage");
            this.set_titletext("샘플 팝업 페이지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GI_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CRD_STL_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CRD_STL_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXINV_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\">1000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GI_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CRD_STL_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CRD_STL_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXINV_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\">1000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_01","25","28","75","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사업장 멀티");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNms","500","28","365","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcIds","150","28","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_click4","875","28","45","39",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","25","76","75","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("운영단위 멀티");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprUntNms","500","76","365","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprUntIds","150","76","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_click5","875","76","45","39",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("검색");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_01_00","25","126","75","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("회원 멀티");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mbrId","150","125","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mbrNm","500","124","365","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_click21","875","123","45","39",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("검색");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprBzplcId","600","250","365","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("false");
            obj.set_positionstep("0");
            obj.set_displaynulltext("운영단위사업장");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_01_00_00","25","176","95","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("공통코드 멀티");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_comDtlCd","150","175","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_comDtlCdNm","500","174","365","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_click1","875","173","45","39",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("검색");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_multiText","926","29","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_document");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","233","880","57",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("팝업 호출 param에 coCd 필수값(공통코드제외)");
            obj.set_font("normal 20pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,800,this,function(p){});
            obj.set_stepcount("0");
            obj.set_stepindex("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edt_bzplcIds","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_oprUntIds","value","ds_search","OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_mbrId","value","ds_search","MBR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_comDtlCd","value","ds_search","COM_DTL_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleMultiPopUpPage.xfdl", function() {
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        //사업장 관련
        this.searchBzplcId = "";
        this.searchBzplcNm = "";
        this.bzplcCount = 0;
        this.currentBzplcId = "";

        //운영단위 관련
        this.searchOprUnitId = "";
        this.searchOprUnitNm = "";
        this.searchOprBzplcId = "";
        this.oprUnitCount = 0;
        this.currentOprUnitId = "";

        //회원 관련
        this.searchMbrId = "";
        this.searchMbrNm = "";
        this.clientCount = 0;
        this.currentMbrId = "";

        //공통코드 관련
        this.searchComDtlCd = "";
        this.searchComDtlCdNm = "";
        this.comDtlCdCount = 0;
        this.currentComDtlCd = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onkeyup = function(obj,e){
        	var objType = obj.getFocus();

        	if( e.keycode == 13 && objType == "[object Edit]"){
        		var value = e.fromobject.value;
        		if(this.gfn_lengthByte(this.gfn_allTrim(value)) <= 0){
        			alert("검색할 값 입력");
        			return;
        		}

        		this.ds_popSearch.clearData();
        		this.ds_popSearch.addRow();

        		//사업장
        		if( e.fromobject.id == "edt_bzplcIds" || e.fromobject.id == "edt_bzplcNms") {
        			this.ds_popSearch.setColumn(0, "BZPLC_ID", value);
        			this.fn_popupSearch("bzplcMulti", "/co/popup/select-bzplc-popup-list.do");
        		//운영단위
        		}else if( e.fromobject.id == "edt_oprUntIds" || e.fromobject.id == "edt_oprUntNms") {
        			this.ds_popSearch.setColumn(0, "OPR_UNIT_ID", value);
        			this.fn_popupSearch("oprUnitMulti", "/co/popup/select-operate-popup-list.do");
        		//회원
        		}else if( e.fromobject.id == "edt_mbrId" || e.fromobject.id == "edt_mbrNm") {
        			this.ds_popSearch.setColumn(0, "MBR_ID", value);
        			//필요한 권한 param은 개발자들이 각자 셋팅.예시로 결재권한사용여부만 추가
        			this.ds_popSearch.setColumn(0, "APRV_AUTH_USE_YN", "N");
        			this.fn_popupSearch("clientMulti", "/co/popup/select-client-popup-list.do");
        		//공통코드
        		}else if( e.fromobject.id == "edt_comDtlCd" || e.fromobject.id == "edt_comDtlCdNm") {
        			this.ds_popSearch.setColumn(0, "COM_CLSF_CD", "ODR_STATS_CD"); //분류코드 필수
        			this.ds_popSearch.setColumn(0, "COM_DTL_CD", value);
        			this.fn_popupSearch("comDtlCdMulti", "/co/popup/select-com-dtl-cd-popup-list.do");
        		}
        	}else if(objType == "[object Edit]"){
        		var value = e.fromobject.value;
        		/*
        		if(this.gfn_lengthByte(this.gfn_allTrim(value)) == -1){
        			if( e.fromobject.id == "edt_bzplcIds") {
        				this.edt_bzplcNms.set_value("");
        			}else if( e.fromobject.id == "edt_oprUntIds") {
        				this.edt_oprUntNms.set_value("");
        				this.edt_oprBzplcId.set_value("");
        			}else if( e.fromobject.id == "edt_mbrId") {
        				this.edt_mbrNm.set_value("");
        			}else if( e.fromobject.id == "edt_comDtlCd") {
        				this.edt_comDtlCdNm.set_value("");
        			}
        		}
        		*/
        		if( e.fromobject.id == "edt_bzplcIds") {
        			if(this.currentBzplcId != this.edt_bzplcIds.text || e.keycode == 8 ){
        				this.edt_bzplcNms.set_value("");
        			}
        		}else if( e.fromobject.id == "edt_oprUntIds") {
        			if(this.currentOprUnitId != this.edt_oprUntIds.text || e.keycode == 8 ){
        				this.edt_oprUntNms.set_value("");
        				this.edt_oprBzplcId.set_value("");
        			}
        		}else if( e.fromobject.id == "edt_mbrId") {
        			if(this.currentMbrId != this.edt_mbrId.text || e.keycode == 8 ){
        				this.edt_mbrNm.set_value("");
        			}
        		}else if( e.fromobject.id == "edt_comDtlCd") {
        			if(this.currentComDtlCd != this.edt_comDtlCd.text || e.keycode == 8 ){
        				this.edt_comDtlCdNm.set_value("");
        			}
        		}
        	}

        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_popupSearch = function (svcId, url){
        	var sSvcId = svcId;
        	var sUrl = url;
        	var inDs = "ds_search=ds_popSearch";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //transaction 콜백

        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	var objParam = {};

        	if(errorCode != 0){
        		this.alert(errorCode+"\n"+errorMsg);
        		return;
        	}

        	switch(svcID){
        		case "bzplcMulti":
        			if(this.bzplcCount == 1){
        				this.ds_search.setColumn(0, "BZPLC_ID", this.searchBzplcId);
        				this.edt_bzplcNms.set_value(this.searchBzplcNm);
        			}else{
        				objParam.coCd = "1000";
        				this.gfn_openPopup("bzplcMultiPopup", "CO_POP::SSP_BO_PP_14.xfdl", objParam);
        			}
        			break;
        		case "oprUnitMulti":
        			if(this.oprUnitCount == 1){
        				this.ds_search.setColumn(0, "OPR_UNIT_ID", this.searchOprUnitId);
        				this.edt_oprUntNms.set_value(this.searchOprUnitNm);
        				this.edt_oprBzplcId.set_value(this.searchOprBzplcId);
        			}else{
        				objParam.coCd = "1000";
        				this.gfn_openPopup("oprUnitMultiPop", "CO_POP::SSP_BO_PP_23.xfdl", objParam);
        			}
        			break;
        		case "clientMulti":
        			if(this.clientCount == 1){
        				this.ds_search.setColumn(0, "MBR_ID", this.searchMbrId);
        				this.edt_mbrNm.set_value(this.searchMbrNm);
        			}else{
        				objParam.coCd = "1000"; //공통코드 제외 필수
        				//필요한 권한 param은 개발자들이 각자 셋팅.예시로 결재권한사용여부만 추가
        				objParam.aprvAuthUseYn = this.ds_search.getColumn(0, "APRV_AUTH_USE_YN");
        				this.gfn_openPopup("clientMultiPop", "CO_POP::SSP_BO_PP_25.xfdl", objParam);
        			}
        			break;
        		case "comDtlCdMulti":
        			if(this.comDtlCdCount == 1){
        				this.ds_search.setColumn(0, "COM_DTL_CD", this.searchComDtlCd);
        				this.edt_comDtlCdNm.set_value(this.searchComDtlCdNm);
        			}else{
        				objParam.comClsfCd =  "ODR_STATS_CD";
        				this.gfn_openPopup("comDtlCdMultiPop", "CO_POP::SSP_BO_PP_42.xfdl", objParam);
        			}
        			break;
        		default:
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
        		console.log(resData);
        	}

        	switch(sPopupId){
        		case "bzplcMultiPopup":
        			for(var i=0; i<resData.length; i++){
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.BZPLC_ID +",";
        				sNmList += rtnData.BZPLC_NM +",";
        			}
        			this.edt_bzplcIds.set_value(sIdList.replace(/,\s*$/, ""));
        			this.edt_bzplcNms.set_value(sNmList.replace(/,\s*$/, ""));
        			break;
        		case "oprUnitMultiPop":
        			var sBzplcIdList = "";
        			for(var i=0; i<resData.length; i++){
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.OPR_UNIT_ID +",";
        				sNmList += rtnData.OPR_UNIT_NM +",";
        				sBzplcIdList += rtnData.OPR_BZPLC_ID +",";
        			}
        			this.edt_oprUntIds.set_value(sIdList.replace(/,\s*$/, ""));
        			this.edt_oprUntNms.set_value(sNmList.replace(/,\s*$/, ""));
        			this.edt_oprBzplcId.set_value(sBzplcIdList.replace(/,\s*$/, ""));
        			break;
        		case "clientMultiPop":
        			for(var i=0; i<resData.length; i++){
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.MBR_ID +",";
        				sNmList += rtnData.MBR_NM +",";
        				//필요한 return param은 개발자들이 각자 셋팅
        			}
        			this.edt_mbrId.set_value(sIdList.replace(/,\s*$/, ""));
        			this.edt_mbrNm.set_value(sNmList.replace(/,\s*$/, ""));
        			break;
        		case "comDtlCdMultiPop":
        			for(var i=0; i<resData.length; i++){
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.COM_DTL_CD +",";
        				sNmList += rtnData.COM_DTL_CD_NM +",";
        			}
        			this.edt_comDtlCd.set_value(sIdList.replace(/,\s*$/, ""));
        			this.edt_comDtlCdNm.set_value(sNmList.replace(/,\s*$/, ""));
        			break;
        		case "multiTextPopup":
        			var resParam = JSON.parse(sRetValue);
        			this[resParam.textId].set_value(resData.textValue);
        			break;
        		default :
        			break;
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "BZPLC_ID"){
        		this.currentBzplcId  = e.newvalue;
        	}else if(e.columnid == "OPR_UNIT_ID"){
        		this.currentOprUnitId = e.newvalue;
        	}else if(e.columnid == "MBR_ID"){
        		this.currentMbrId = e.newvalue;
        	}else if(e.columnid == "COM_DTL_CD"){
        		this.currentComDtlCd = e.newvalue;
        	}
        };

        //사업장 멀티 팝업 호출
        this.btn_click4_onclick = function(obj,e)
        {
        	var objParam = {};
        	objParam.coCd = "1000";
        	this.gfn_openPopup("bzplcMultiPopup", "CO_POP::SSP_BO_PP_14.xfdl", objParam);
        };

        //운영단위 멀티 팝업 호출
        this.btn_click5_onclick = function(obj,e)
        {
        	var objParam = {};
        	objParam.coCd = "1000";
        	objParam.bzplcId = null;
        	this.gfn_openPopup("oprUnitMultiPop", "CO_POP::SSP_BO_PP_23.xfdl", objParam);
        };

        //회원 멀티 팝업 호출
        this.btn_click21_onclick = function(obj,e)
        {
        	var objParam = {};
        	objParam.coCd = "1000";
        	objParam.bzplcId = null;
        	objParam.oprUnitId = null;
        	objParam.deptId = null;
        	objParam.aprvAuthUseYn  =  "N"; /* 결재권한사용여부 -> 임의로 N로 셋팅       */
        	objParam.ordAuthUseYn  = null; /* 발주권한사용여부       */
        	objParam.giAuthUseYn   = null; /* 입고권한사용여부       */
        	objParam.crdStlAuthUseYn  = null; /* 카드결제권한사용여부   */
        	objParam.crdStlAuthUseCd  = null; /* 카드결제권한사용코드   */
        	objParam.bgtAuthUseCd  = null; /* 예산권한사용코드       */
        	objParam.adjAuthUseCd  = null; /* 정산권한사용코드       */
        	objParam.mngAuthUseCd  = null; /* 관리권한사용코드       */
        	objParam.taxinvAuthUseYn  = null; /* 세금계산서권한사용여부 */
        	this.gfn_openPopup("clientMultiPop", "CO_POP::SSP_BO_PP_25.xfdl", objParam);
        };

        //공통코드 멀티 팝업 호출
        this.btn_click1_onclick = function(obj,e)
        {
        	var objParam = {};
        	objParam.comClsfCd = "ODR_STATS_CD"; //분류코드 필수
        	this.gfn_openPopup("comDtlCdMultiPop", "CO_POP::SSP_BO_PP_42.xfdl", objParam);
        };

        this.btn_multiText_onclick = function(obj,e)
        {
        	var params = {
        		textId : this.edt_bzplcIds
        	};

        	this.gfn_openPopup("multiTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_click4.addEventHandler("onclick",this.btn_click4_onclick,this);
            this.Static00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_click5.addEventHandler("onclick",this.btn_click5_onclick,this);
            this.Static00_00_00_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_click21.addEventHandler("onclick",this.btn_click21_onclick,this);
            this.Static00_00_00_00_01_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_click1.addEventHandler("onclick",this.btn_click1_onclick,this);
            this.btn_multiText.addEventHandler("onclick",this.btn_multiText_onclick,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
            this.ds_popSearch.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("sampleMultiPopUpPage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
