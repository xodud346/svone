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
                this._setFormPosition(1000,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GI_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CRD_STL_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CRD_STL_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXINV_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_MBR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GI_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CRD_STL_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CRD_STL_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNG_AUTH_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXINV_AUTH_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\">1000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","25","26","75","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사업장 단일");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","340","27","224","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_click1","575","26","45","39",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","25","76","75","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("운영단위 단일");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprUntId","150","76","180","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprUntNm","340","76","224","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_click2","805","76","45","39",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","25","176","114","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("서비스 담당자 단일");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrNm","340","177","224","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_empNo","150","176","180","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_click3","575","176","45","39",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_untCd","150","226","180","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00_00_00_00_00_00_00","25","226","75","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("주문단위 단일");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_untNm","340","226","224","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_click15","575","226","45","39",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","150","26","182","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","25","126","75","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("회원 단일");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_clientId","150","126","182","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_clientNm","340","127","224","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_click4","575","126","45","39",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_01_00_00_00","24","276","75","32",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("우편번호");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_zipNo","149","276","181","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.set_positionstep("0");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_addrPop","340","276","529","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_addrDetail","149","325","770","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_click23","874","275","45","39",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("검색");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_click16","25","401","165","39",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("퍼블 샘플 팝업페이지 보기");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprBzplcId","573","76","224","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_enable("false");
            obj.set_displaynulltext("운영단위사업장");
            this.addChild(obj.name, obj);

            obj = new Edit("multiText","20","457","165","27",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","188","457","120","27",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("멀티 텍스트");
            this.addChild(obj.name, obj);

            obj = new Button("btn_click16_00_00","195","401","165","39",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("엑셀업로드 팝업 보기");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","510","880","57",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("팝업 호출 param에 coCd 필수값 (우편번호 제외)");
            obj.set_font("normal 20pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_click16_00_00_00","370","401","165","39",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("대용량 엑셀다운로드 정보");
            this.addChild(obj.name, obj);

            obj = new Button("btn_click1_00","645","480","45","39",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","545","401","165","39",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("파일업로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_click99","715","401","195","39",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("오즈리포트 팝업 호출 샘플");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","752","630","101","95",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_click99_00","713","461","195","39",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("오즈리포트 프린트 호출 샘플");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wbs00","580","567","110","110",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Button("btnNewBr","92","616","132","37",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("주문대행 로그인");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,800,this,function(p){});
            obj.set_stepcount("0");
            obj.set_stepindex("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_bzplcId","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_bzplcNm","value","ds_search","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_oprUntNm","value","ds_search","OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_oprUntId","value","ds_search","OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_oprtrNm","value","ds_search","OPRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_empNo","value","ds_search","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_untCd","value","ds_search","UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_untNm","value","ds_search","UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_clientId","value","ds_search","MBR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_clientNm","value","ds_search","MBR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_oprBzplcId","value","ds_search","OPR_BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("samplePopUpPage.xfdl", function() {
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
        //서비스담당자 관련
        this.searchEmpNo = "";
        this.searchOprtrNm = "";
        this.oprtrCount = 0;
        this.currentEmpNo = "";
        //주문단위 관련
        this.searchUnitCd = "";
        this.searchUnitNm = "";
        this.unitCount = 0;
        this.currentUnitCd= "";
        //회원 관련
        this.searchMbrId = "";
        this.searchMbrNm = "";
        this.clientCount = 0;
        this.currentMbrId = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onkeyup = function(obj,e){
        	var objType = obj.getFocus();

        	if( e.keycode == 13 && objType == "[object Edit]"){
        		var value = e.fromobject.value;
        		if(this.gfn_lengthByte(this.gfn_allTrim(value)) <= 0 && e.fromobject.id != "edt_addrDetail"){
        			alert("검색할 값 입력");
        			return;
        		}

        		this.ds_popSearch.clearData();
        		this.ds_popSearch.addRow();

        		//사업장
        		if( e.fromobject.id == "edt_bzplcId" || e.fromobject.id == "edt_bzplcNm") {
        			this.ds_popSearch.setColumn(0, "BZPLC_ID", value);
        			this.ds_popSearch.setColumn(0, "BZPLC_NM", this.edt_bzplcNm.value);
        			this.fn_popupSearch("bzplcSingle", "/co/popup/select-bzplc-popup-list.do");
        		//운영단위
        		}else if( e.fromobject.id == "edt_oprUntId" || e.fromobject.id == "edt_oprUntNm") {
        			this.ds_popSearch.setColumn(0, "OPR_UNIT_ID", value);
        			this.ds_popSearch.setColumn(0, "OPR_UNIT_NM", this.edt_oprUntNm.value);
        			//this.ds_popSearch.setColumn(0, "BZPLC_ID", "S000000692");  //운영단위 사업장 PARAM ID
        			this.fn_popupSearch("oprUntSingle", "/co/popup/select-operate-popup-list.do");
        		//담당자
        		}else if( e.fromobject.id == "edt_empNo" || e.fromobject.id == "edt_oprtrNm") {
        			this.ds_popSearch.setColumn(0, "EMP_NO", value);
        			this.ds_popSearch.setColumn(0, "OPRTR_NM", this.edt_oprtrNm.value);
        			this.fn_popupSearch("operatorSingle", "/co/popup/select-operator-popup-list.do");
        		//주문단위
        		}else if( e.fromobject.id == "edt_untCd" || e.fromobject.id == "edt_untNm") {
        			this.ds_popSearch.setColumn(0, "UNIT_CD", value);
        			this.fn_popupSearch("odrUntSingle", "/co/popup/select-odr-unt-popup-list.do");
        		//회원
        		}else if( e.fromobject.id == "edt_clientId" || e.fromobject.id == "edt_clientNm") {
        			this.ds_popSearch.setColumn(0, "MBR_ID", value);
        			this.ds_popSearch.setColumn(0, "MBR_NM", this.edt_clientNm.value);
        			//필요한 권한 param은 개발자들이 각자 셋팅.예시로 결재권한사용여부만 추가
        			this.ds_popSearch.setColumn(0, "APRV_AUTH_USE_YN", "N");
        			this.fn_popupSearch("clientSingle", "/co/popup/select-client-popup-list.do");
        		}
        	}else if(objType == "[object Edit]"){
        		if( e.fromobject.id == "edt_bzplcId") {
        			if(this.currentBzplcId != this.edt_bzplcId.text || e.keycode == 8 ){
        				this.edt_bzplcNm.set_value("");
        			}
        		}else if( e.fromobject.id == "edt_oprUntId") {
        			if(this.currentOprUnitId != this.edt_oprUntId.text || e.keycode == 8 ){
        				this.edt_oprUntNm.set_value("");
        				this.edt_oprBzplcId.set_value("");
        			}
        		}else if( e.fromobject.id == "edt_empNo") {
        			if(this.currentEmpNo != this.edt_empNo.text || e.keycode == 8 ){
        				this.edt_oprtrNm.set_value("");
        			}
        		}else if( e.fromobject.id == "edt_untCd") {
        			if(this.currentUnitCd != this.edt_untCd.text || e.keycode == 8 ){
        				this.edt_untNm.set_value("");
        			}
        		}else if( e.fromobject.id == "edt_clientId") {
        			if(this.currentMbrId != this.edt_clientId.text || e.keycode == 8 ){
        				this.edt_clientNm.set_value("");
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
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_popupCallback = function(sPopupId, sRetValue){
        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";

            if(sRetValue == undefined){
                return;
            }else{
        		resData = JSON.parse(sRetValue);
        		console.log(resData);
        		trace(JSON.stringify(resData));
        	}

        	switch(sPopupId){
        		case "bzplcSinglePop":
        			this.ds_search.setColumn(0, "BZPLC_ID", resData.BZPLC_ID);
        			this.ds_search.setColumn(0, "BZPLC_NM", resData.BZPLC_NM);
        			break;
        		case "oprUntSinglePop":
        			this.ds_search.setColumn(0, "OPR_UNIT_ID", resData.OPR_UNIT_ID);
        			this.ds_search.setColumn(0, "OPR_UNIT_NM", resData.OPR_UNIT_NM);
        			this.ds_search.setColumn(0, "OPR_BZPLC_ID", resData.BZPLC_ID);
        			break;
        		case "operatorSinglePop":
        			this.ds_search.setColumn(0, "EMP_NO", resData.EMP_NO);
        			this.ds_search.setColumn(0, "OPRTR_NM", resData.OPRTR_NM);
        			break;
        		case "odrUntSinglePop":
        			this.ds_search.setColumn(0, "UNIT_CD", resData.UNIT_CD);
        			this.ds_search.setColumn(0, "UNIT_NM", resData.UNIT_NM);
        			break;
        		case "clientSinglePop":
        			this.ds_search.setColumn(0, "MBR_ID", resData.MBR_ID);
        			this.ds_search.setColumn(0, "MBR_NM", resData.MBR_NM);
        			break;
        		case "addrSinglePop":
        			this.edt_zipNo.set_value(resData.ZIP_NO);
        			this.edt_addrPop.set_value(resData.ADDR);
        			this.edt_addrDetail.setFocus();
        			break;
        		case "multiTextPopup":
        			var resParam = JSON.parse(sRetValue);
        			this[resParam.textId].set_value(resData.textValue);
        			break;
        		default :
        			break;
        	}
        };


        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	var objParam = {};

        	if(errorCode != 0){
        		this.alert(errorCode+"\n"+errorMsg);
        		return;
        	}

        	objParam.coCd = "1000";

        	switch(svcID){
        		case "bzplcSingle":
        			if(this.bzplcCount == 1){
        				this.ds_search.setColumn(0, "BZPLC_ID", this.searchBzplcId);
        				this.ds_search.setColumn(0, "BZPLC_NM", this.searchBzplcNm);
        			}else{
        				this.gfn_openPopup("bzplcSinglePop", "CO_POP::SSP_BO_PP_22.xfdl", objParam);
        			}
        			break;
        		case "oprUntSingle":
        			if(this.oprUnitCount == 1){
        				this.ds_search.setColumn(0, "OPR_UNIT_ID", this.searchOprUnitId);
        				this.ds_search.setColumn(0, "OPR_UNIT_NM", this.searchOprUnitNm);
        				this.ds_search.setColumn(0, "OPR_BZPLC_ID", this.searchOprBzplcId);
        			}else{
        				// objParam.bzplcId= "S000000692"; //운영단위 사업장 PARAM ID
        				this.gfn_openPopup("oprUntSinglePop", "CO_POP::SSP_BO_PP_15.xfdl", objParam);
        			}
        			break;
        		case "operatorSingle":
        			if(this.oprtrCount  == 1){
        				this.ds_search.setColumn(0, "EMP_NO", this.searchEmpNo);
        				this.ds_search.setColumn(0, "OPRTR_NM", this.searchOprtrNm);
        			}else{
        				this.gfn_openPopup("operatorSinglePop", "CO_POP::SSP_BO_PP_27.xfdl", objParam);
        			}
        			break;
        		case "odrUntSingle":
        			if(this.unitCount  == 1){
        				this.ds_search.setColumn(0, "UNIT_CD", this.searchUnitCd);
        				this.ds_search.setColumn(0, "UNIT_NM", this.searchUnitNm);
        			}else{
        				this.gfn_openPopup("odrUntSinglePop", "CO_POP::SSP_BO_PP_12.xfdl", objParam);
        			}
        			break;
        		case "clientSingle":
        			if(this.clientCount  == 1){
        				this.ds_search.setColumn(0, "MBR_ID", this.searchMbrId);
        				this.ds_search.setColumn(0, "MBR_NM", this.searchMbrNm);
        			}else{
        				//필요한 권한 param은 개발자들이 각자 셋팅.예시로 결재권한사용여부만 추가
        				objParam.aprvAuthUseYn = this.ds_search.getColumn(0, "APRV_AUTH_USE_YN");
        				this.gfn_openPopup("clientSinglePop", "CO_POP::SSP_BO_PP_24.xfdl", objParam);
        			}
        			break;
        		default:
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
        //수정 전, 후 값 비교하기위해서 추가
        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "BZPLC_ID"){
        		this.currentBzplcId  = e.newvalue;
        	}else if(e.columnid == "OPR_UNIT_ID"){
        		this.currentOprUnitId = e.newvalue;
        	}else if(e.columnid == "EMP_NO"){
        		this.currentEmpNo = e.newvalue;
        	}else if(e.columnid == "UNIT_CD"){
        		this.currentUnitCd = e.newvalue;
        	}else if(e.columnid == "MBR_ID"){
        		this.currentMbrId = e.newvalue;
        	}

        };

        //사업장 단일 팝업 호출
        this.btn_click1_onclick = function(obj,e)
        {
        	var objParam = {
        		 coCd : "1000"
        	};
        	this.gfn_openPopup("bzplcSinglePop", "CO_POP::SSP_BO_PP_22.xfdl", objParam);
        };

        //운영단위 단일 팝업 호출
        this.btn_click2_onclick = function(obj,e)
        {
        	var objParam = {
        		 coCd : "1000"
        		//, bzplcId : "S000000692"
        		, bzplcId : null
        	};
        	this.gfn_openPopup("oprUntSinglePop", "CO_POP::SSP_BO_PP_15.xfdl", objParam);
        };

        //서비스 담당자 단일 팝업 호출
        this.btn_click3_onclick = function(obj,e)
        {
        	var objParam = {
        		 coCd: "1000"
        		, oprtrId: null
        		, orgCd: null
        		, orgNm: null
        		, salsTeamCd: null
        		, salsTeamNm: null
        	};
        	this.gfn_openPopup("operatorSinglePop", "CO_POP::SSP_BO_PP_27.xfdl", objParam);
        };

        //주문단위 단일 팝업 호출
        this.btn_click15_onclick = function(obj,e)
        {
        	var objParam = {
        		coCd : "1000"
        	};
        	this.gfn_openPopup("odrUntSinglePop", "CO_POP::SSP_BO_PP_12.xfdl", objParam);
        };

        //우편번호 조회
        this.btn_click23_onclick = function(obj,e)
        {
        	var objParam = {};
        	this.gfn_openPopup("addrSinglePop", "CO_POP::SSP_BO_PP_28.xfdl", objParam);
        };


        this.btn_click4_onclick = function(obj,e)
        {
        	var objParam = {
        		aprvAuthUseYn  	: "N", /* 결재권한사용여부 -> 임의로 N로 셋팅       */
        		ordAuthUseYn : null, /* 발주권한사용여부       */
        		giAuthUseYn     : null, /* 입고권한사용여부       */
        		crdStlAuthUseYn: null, /* 카드결제권한사용여부   */
        		crdStlAuthUseCd: null, /* 카드결제권한사용코드   */
        		bgtAuthUseCd    : null, /* 예산권한사용코드       */
        		adjAuthUseCd    : null, /* 정산권한사용코드       */
        		mngAuthUseCd    : null, /* 관리권한사용코드       */
        		taxinvAuthUseYn : null, /* 세금계산서권한사용여부 */
        		coCd : "1000",
        		bzplcId : null,
        		oprUnitId : null,
        		deptId : null
        	};
        	this.gfn_openPopup("clientSinglePop", "CO_POP::SSP_BO_PP_24.xfdl", objParam);
        };

        this.btn_click16_onclick = function(obj,e)
        {
        	var objParam = {};
        	this.gfn_openPopup("guidePop", "PUB_GUIDE::guidePopup.xfdl", objParam);
        };

        this.Button02_onclick = function(obj,e)
        {
        	var params = {
        		textId : this.multiText
        	};

        	this.gfn_openPopup("multiTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params);
        };

        this.btn_click16_00_onclick = function(obj,e)
        {
        	var objParam = {
        		oprtrId : "X0025958"
        		};
        	this.gfn_openPopup("SSP_BO_YA_22", "CO_POP::SSP_BO_YA_22.xfdl", objParam);
        };

        this.btn_click16_00_00_onclick = function(obj,e)
        {
        	var param = {
        		  pgmId : "CO_SA_01" //프로그램 ID ex) CO_SA_01
        		, bzplcId : "bzplcId"
        		, refCdGrpSeq : "refCdGrpSeq"
        		, oprUnitId : "oprUnitId"
        	};
        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param);
        };

        this.btn_click16_00_00_00_onclick = function(obj,e)
        {
        	this.gfn_openPopup("SSP_BO_YA_21", "CO_POP::SSP_BO_YA_21.xfdl", null);
        };

        this.btn_click1_00_onclick = function(obj,e)
        {
        var cf = new ChildFrame();
        	cf.init("test",  0, 0, 500, 400, 0, 0, "CO_POP::SSP_BO_PP_22.xfdl" );
        	cf.set_showtitlebar(true);
        	cf.set_dragmovetype(false);
        	cf.set_openalign("center middle");
            cf.showModal("test",this.getOwnerFrame(),"", this);

        };

        this.Button00_onclick = function(obj,e)
        {
        	this.gfn_openPopup("fileUpTest", "sample::fileUpTest.xfdl", null);
        };


        this.Button00_00_onclick = function(obj,e)
        {
        	this.gfn_openPopup("fileUpTest", "RD::SSP_BO_CO_09.xfdl", null);
        };

        this.btn_click99_onclick = function(obj,e)
        {
        	var params = [
        		{
        			"REPORT_ID": "/QUO/QUO00001"
        			, "VALUES": ["1000", "", "", "PM00000297", "S000000001", "", ""]
        		}
        		, {
        			"REPORT_ID": "/QUO/QUO00002"
        			, "PARAMETERS": ["CO_CD", "ODRPSN_ID", "CART_NO", "CART_ITM_SEQ"]
        			, "VALUES": ["1000", "", "1", "164,166,269,275"]
        		}
        		, {
        			"REPORT_ID": "/ORD/ORD00001"
        			, "VALUES": ["1000", "S000000693", "3000206125", "10"]
        		}
        		, {
        			"REPORT_ID": "/OUT_COM/OUT00000_1(price)"
        			, "VALUES": ["1000", "S000012324", "H3009652907"]
        		}
        		, {
        			"REPORT_ID": "/OUT_COM/OUT00000_2(nonprice)"
        			, "VALUES": ["1000", "S000012324", "H3009652907"]
        		}
        //		, {
        //			"REPORT_ID": "/OUT(운영단위명)/OUT00001(price)"
        //			, "VALUES": ["1000", "S000012324", "H3009652907"]
        //		}
        //		, {
        //			"REPORT_ID": "/OUT(운영단위명)/OUT00002(nonprice)"
        //			, "VALUES": ["1000", "S000012324", "H3009652907"]
        //		}
        		, {
        			"REPORT_ID": "/APR/APR00001"
        			, "VALUES": ["1000", "S000000782", "3000111471", "KO"]
        		}
        		, {
        			"REPORT_ID": "/CAR/CAR00001"
        			, "VALUES": ["1000", "PM00076389", "1", "165,172,222,223"]
        		}

        	];

        	var objParam = {
        		reportParams : params
        	};

        	this.gfn_openPopup("SSP_BO_YA_16", "CO_POP::SSP_BO_YA_16.xfdl", objParam);
        };

        this.wbs00_onloadcompleted = function(obj,e)
        {
        	this.btn_click99_00.set_enable(true);
        };

        this.SamplePage_onload = function(obj,e)
        {
        	this.wbs00.set_url(top.location.host + "/co/oz/ozreport-print.do");

        	this.ImageViewer00.set_image("URL('file://Z:/SSP_DEV/attach/2022/051/6/2a4bb007-f8e1-45a4-9fb4-1a31f427b3c5.png')");
        	//this.ImageViewer00.set_image("URL('http://www.tobesoft.com/images/gnb/btn_h1.gif')") ;  // 웹 이미지
        };

        this.wbs00_onusernotify = function(obj,e)
        {

        };

        this.btn_click99_00_onclick = function(obj,e)
        {
        		var params = [
        		{
        			"REPORT_ID": "/QUO/QUO00001"
        			, "VALUES": ["1000", "", "", "PM00000297", "S000000001", "", ""]
        		}
        		, {
        			"REPORT_ID": "/QUO/QUO00002"
        			, "PARAMETERS": ["CO_CD", "ODRPSN_ID", "CART_NO", "CART_ITM_SEQ"]
        			, "VALUES": ["1000", "", "1", "164,166,269,275"]
        		}
        		, {
        			"REPORT_ID": "/ORD/ORD00001"
        			, "VALUES": ["1000", "S000000693", "3000206125", "10"]
        		}
        		, {
        			"REPORT_ID": "/OUT_COM/OUT00000_1(price)"
        			, "VALUES": ["1000", "S000012324", "H3009652907"]
        		}
        		, {
        			"REPORT_ID": "/OUT_COM/OUT00000_2(nonprice)"
        			, "VALUES": ["1000", "S000012324", "H3009652907"]
        		}
        		, {
        			"REPORT_ID": "/APR/APR00001"
        			, "VALUES": ["1000", "S000000782", "3000111471", "KO"]
        		}
        		, {
        			"REPORT_ID": "/CAR/CAR00001"
        			, "VALUES": ["1000", "PM00076389", "1", "165,172,222,223"]
        		}

        	];

        	this.wbs00.callMethod("fn_setParam", params);
        	this.wbs00.callMethod("OZCall");
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.gfn_openPopup("AAAAAAA", "sample::AAAAAAAAA.xfdl", null);
        };

        this.btnNewBr_onclick = function(obj,e)
        {
            //서버에서 호스트 정보 가지고 올것(ex : map.put("HOST_SSP", sspPropertyService.getString("host.ssp")); )
        	//아래의 http://devstore.serveone.co.kr:8080 정보를 호스트 정보로 대체 할것
        	//인수 : loginMbrId(고객MBR_ID)/ dlgteMbrId(운영자 OPRTR_ID)
            //인수값에 해당 값을 넣어서 보내주시면 됩니다.PM00005303
        	//system.execDefaultBrowser("http://devstore.serveone.co.kr:8080/ssp/manager/dlgteLoginProcess.do?loginMbrId=PM00005303&dlgteMbrId=02110104'");
        	system.execBrowser("/co/dlgteLoginProcess.do?loginMbrId=PM00000201");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.addEventHandler("onload",this.SamplePage_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_click1.addEventHandler("onclick",this.btn_click1_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_oprUntId.addEventHandler("onchanged",this.edt_oprUntId_onchanged,this);
            this.btn_click2.addEventHandler("onclick",this.btn_click2_onclick,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_click3.addEventHandler("onclick",this.btn_click3_onclick,this);
            this.Static00_00_00_01_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_click15.addEventHandler("onclick",this.btn_click15_onclick,this);
            this.Static00_02.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_click4.addEventHandler("onclick",this.btn_click4_onclick,this);
            this.Static00_00_00_00_01_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_click23.addEventHandler("onclick",this.btn_click23_onclick,this);
            this.btn_click16.addEventHandler("onclick",this.btn_click16_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.btn_click16_00_00.addEventHandler("onclick",this.btn_click16_00_00_onclick,this);
            this.btn_click16_00_00_00.addEventHandler("onclick",this.btn_click16_00_00_00_onclick,this);
            this.btn_click1_00.addEventHandler("onclick",this.btn_click1_00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn_click99.addEventHandler("onclick",this.btn_click99_onclick,this);
            this.btn_click99_00.addEventHandler("onclick",this.btn_click99_00_onclick,this);
            this.wbs00.addEventHandler("onusernotify",this.wbs00_onusernotify,this);
            this.wbs00.addEventHandler("onloadcompleted",this.wbs00_onloadcompleted,this);
            this.btnNewBr.addEventHandler("onclick",this.btnNewBr_onclick,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
            this.ds_popSearch.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("samplePopUpPage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
