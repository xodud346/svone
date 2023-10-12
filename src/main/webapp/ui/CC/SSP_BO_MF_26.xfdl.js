(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MF_21");
            this.set_titletext("Stock No 관리 등록/상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,266);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CATG\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"B_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"B_STOCK_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SET_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn2", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCodeSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"32\"/><Column id=\"langCd\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_check", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">777</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"msg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20",null,"156","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","0",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("사업장 ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","529","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("사업자명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","135","4","348","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","664","4","379","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_popDept","488","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00","0","31",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","529","31","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm00","664","35","379","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId00","136","35","348","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","31","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("상품 ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","0","62",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","529","62","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("상품분류");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm00_00","664","66","379","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId00_00","136","66","376","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","62","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_01","0","93",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","529","93","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm00_01","664","97","379","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId00_01","136","97","376","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","93","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_popPrd","488","35","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00","0","124",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","124","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("Stock #");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","529","124","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_stockNo","136","128","376","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","664","128","156","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_innerdataset("ds_useYn2");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_text("");
            obj.set_value("Y");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_delete","480","Div00:30","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_delete:4","Div00:30","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1100,266,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edt_bzplcId","value","ds_list","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_bzplcNm","value","ds_list","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_bzplcNm00","value","ds_list","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edt_bzplcId00","value","ds_list","PRD_ID_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_bzplcNm00_00","value","ds_list","CATG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_bzplcId00_00","value","ds_list","PRVL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_bzplcNm00_01","value","ds_list","ORGPLC_CTRY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.edt_bzplcId00_01","value","ds_list","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.edt_stockNo","value","ds_list","STOCK_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.Combo00","value","ds_list","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MF_26.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MF_26.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MF_26.xfdl", function() {
        /*******************************************************
          PROJECT NAME :
          CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        var editMode = false;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//검색 영역 최소size 적용
        	this.resetScroll();

        	//팝업 변수체크
        	this.fn_popupCheck();
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//공통코드 조회
        	this.fn_commonCodeSearch = function(){
        		this.ds_comCodeSearch.setColumn(0, "codeList", "USE_YN");
        		this.ds_comCodeSearch.setColumn(0, "langCd", "KO");
        		var sSvcId = "commonCodeSearch";
        		var sUrl = "/co/select-common-code-list.do";
        		var inDs = "ds_search=ds_comCodeSearch";
        		var outDs = "ds_useYn2=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "");
        	}

        	// 상품정보 조회
        	this.fn_prdInfoSearch = function(flag){
        		var sSvcId = "";
        		if(flag != 1) sSvcId = "prdSearch";
        		var sUrl = "/cust/stock/mng/select-prdinfo-by-prdid.do";
        		var inDs = "ds_search=ds_list";
        		var outDs = "ds_list=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        	// stock no 중복체크
        	this.fn_chkStock = function(){
        		var sSvcId = "check";
        		var sUrl = "/cust/stock/mng/select-check-stock-no.do";
        		var inDs = "ds_search=ds_list";
        		var outDs = "ds_check=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        	//저장
        	this.fn_save = function(type)	{
        		var sSvcId = "save";
        		var sUrl = "/cust/stock/mng/save-cust-stock-list.do";
        		var inDs = "ds_save=ds_list";
        		var outDs = "";
        		var arg = "";
        		var callBack = "fn_callBack";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callBack);
        	}

        	// 수정
        	this.fn_update = function(type)	{
        		var sSvcId = "update";
        		var sUrl = "/cust/stock/mng/update-cust-stock-list.do";
        		var inDs = "ds_save=ds_list";
        		var outDs = "ds_result=ds_output1";
        		var arg = "";
        		var callBack = "fn_callBack";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callBack);
        	}


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		if(svcID == "check"){
        			// stock no 중복 체크
        			var chk = this.ds_check.getColumn(0, "CHK");

                    // 자기자신은 제외
        			var chKCnt = 0;
        			if(this.ds_list.getColumn(0, "B_USE_YN") === 'N' &&  this.ds_list.getColumn(0, "USE_YN") === 'Y')
        				chKCnt=0;
                    else if(this.ds_list.getColumn(0, "STOCK_NO") === this.ds_list.getColumn(0, "B_STOCK_NO"))
        				chKCnt=1;

        			if(chk > chKCnt && this.ds_list.getColumn(0, "USE_YN")=="Y"){
        				if(!this.confirm(this.fn_getMessage("ERRC000107"))) {
        					// 해당 S/N는 다른 상품ID에 등록되어 있습니다. 등록하시겠습니까?
        					return;
        				}
        			}
        			if(this.parent.popMode == "insert" && this.editMode == false){
        				this.fn_save();
        			}
        			if(this.parent.popMode == "update" || this.editMode == true){
        				this.fn_update();
        			}
        		}

        		if(svcID == "save"){
        			// 저장 트랜잭션 콜백
        			if(errorCode == -1 || errorCode == -100){
        				//alert(this.fn_getMessageOnServer(errorMsg));
        			}else{
        				alert(this.fn_getMessage("ERRC000081")); // 저장되었습니다.
        				this.close();
        			}
        		}

        		if(svcID == "update"){
        			// 수정 트랜잭션 콜백
        			if(errorCode == -1 || errorCode == -100){
        				//alert(this.fn_getMessageOnServer(errorMsg));
        			}else{
        				alert(this.fn_getMessage("ERRC000081")); // 저장되었습니다.
        				// 상품정보 조회
        				this.fn_prdInfoSearch(1);
        			}
        		}

        		if(svcID == "prdSearch"){
        			// 상품조회 트랜잭션 콜백
        			if(this.parent.popMode == "insert"){
        				if(this.ds_list.getColumn(0, "STOCK_NO") != "" && this.ds_list.getColumn(0, "STOCK_NO") != null){
        					alert(this.fn_getMessage("ERRC000108")); // 해당 상품의 Stock No가 이미 존재합니다.
        					this.editMode = true;
        				}else{
        					this.editMode = false;
        				}
        			}
        		}
        	};

        	// 팝업버튼 클릭 콜백
        	this.fn_popupCallback = function(sPopupId, sRetValue){
        		switch(sPopupId){
        			case "btn_popBzplc":
        				const bzplcObj = JSON.parse(sRetValue);
        				this.ds_list.setColumn(0, "BZPLC_ID", bzplcObj.BZPLC_ID);
        				this.ds_list.setColumn(0, "BZPLC_NM", bzplcObj.BZPLC_NM);

        				this.bzplcFlag = true;

        				break;

        			case "btn_popPrd":
        				const prdObj = JSON.parse(sRetValue);

        				this.ds_list.setColumn(0, "PRD_ID_VIEW", prdObj.PRD_ID_VIEW);
        				this.ds_list.setColumn(0, "PRD_ID", prdObj.PRD_ID);
        				this.ds_list.setColumn(0, "PRD_NM", prdObj.PRD_NM);

        				// 상품정보 조회
        				this.fn_prdInfoSearch();

        				break;
        		}
        	}
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        	//화면 설정 함수
        	this.cfn_formInit = function(){
        		//search static 초기 설정
        		this.Div00.form.Static01.uEssentiel = "true";
        		this.Div00.form.Static02.uEssentiel = "true";
        		this.Div00.form.Static03.uEssentiel = "true";
        		this.Div00.form.Static04.uEssentiel = "true";

        	};
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        	//  팝업 변수 체크
        	this.fn_popupCheck = function(){
        		if(this.parent.popMode == null || this.parent.popMode == ""){
        			alert(this.fn_getMessage("ERRC000076")); // 잘못된 접근입니다.
        			this.close();
        		}

        		if(this.parent.popMode == "insert"){
        			this.btn_delete.set_text("취소");
        		}

        		if(this.parent.popMode == "update"){
        			this.ds_list.setColumn(0, "CO_CD", this.parent.coCd);
        			this.ds_list.setColumn(0, "BZPLC_ID", this.parent.bzplcId);
        			this.ds_list.setColumn(0, "BZPLC_NM", this.parent.bzplcNm);
        			this.ds_list.setColumn(0, "PRD_ID", this.parent.prdId);
        			this.ds_list.setColumn(0, "PRD_NM", this.parent.prdNm);
        			this.ds_list.setColumn(0, "STOCK_NO", this.parent.stockNo);
        			this.ds_list.setColumn(0, "USE_YN", this.parent.useYn);
        			this.ds_list.setColumn(0, "B_USE_YN", this.parent.useYn);

        			this.Div00.form.btn_popDept.set_visible(false);
        			this.Div00.form.btn_popPrd.set_visible(false);

        			this.fn_prdInfoSearch();
        		}

        	}
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        	// 사업장팝업버튼
        	this.btn_popBzplc_onclick = function(obj,e)
        	{
        		var oArg = {
        			coCd : '1000'
        			, bzplcId : this.ds_list.getColumn(0, "BZPLC_ID")
        		};
        		var opts = { title : '사업장 조회', titlebar: 'true' }
        		this.gfn_openPopup("btn_popBzplc", "CO_POP::SSP_BO_PP_22.xfdl", oArg, "fn_popupCallback", opts);
        	};

        	// 상품팝업버튼
        	this.btn_popPrd_onclick = function(obj,e)
        	{
        		var oArg = {
        			coCd : '1000'
        			, bzplcId : this.ds_list.getColumn(0, "BZPLC_ID")
        			, mallSprCd : "N"
        		};
        		var opts = { title : '상품 조회', titlebar: 'true' }
        		this.gfn_openPopup("btn_popPrd", "PR_POP::SSP_BO_PP_38.xfdl", oArg, "fn_popupCallback", opts);
        	};

        	// 저장버튼
        	this.btn_save_onclick = function(obj,e)
        	{
        		if(this.ds_list.getColumn(0, "BZPLC_ID") == "" || this.ds_list.getColumn(0, "BZPLC_ID") == null){
        			alert(this.fn_getMessage("ERRC000004", "사업장ID")); // 사업장ID는 필수입력값 입니다.
        			return;
        		}
        		if(this.ds_list.getColumn(0, "PRD_ID") == "" || this.ds_list.getColumn(0, "PRD_ID") == null){
        			alert(this.fn_getMessage("ERRC000004", "상품ID")); // 상품ID는 필수입력값 입니다.
        			return;
        		}
        		if(this.ds_list.getColumn(0, "STOCK_NO") == "" || this.ds_list.getColumn(0, "STOCK_NO") == null){
        			alert(this.fn_getMessage("ERRC000004", "Stock No")); // Stock No는 필수입력값 입니다.
        			return;
        		}
        		if(this.ds_list.getColumn(0, "USE_YN") == "" || this.ds_list.getColumn(0, "USE_YN") == null){
        			alert(this.fn_getMessage("ERRC000004", "사용여부")); // 사용여부는 필수입력값 입니다.
        			return;
        		}

        		/*
        		if(!this.gfn_dsIsUpdated(this.ds_list)) {
        			alert(this.fn_getMessage("ERRC000035")); // 변경된 내용이 없습니다.
        			return;
        		}
        		*/

        		this.fn_chkStock();
        	};

        	// 목록버튼 클릭
        	this.btn_list_onclick = function(obj,e)
        	{
        		this.close();
        	};

        	// StockNo 수정시 중복체크
        	this.Div00_edt_stockNo_onchanged = function(obj,e)
        	{
        		if(this.ds_list.getColumn(0, "BZPLC_ID")=="" || this.ds_list.getColumn(0, "BZPLC_ID")==null){
        			alert(this.fn_getMessage("ERRC000007", "사업장")); // 사업장을 먼저 조회해주세요.
        			this.ds_list.setColumn(0, "STOCK_NO", "");
        			return;
        		}
        		if(this.ds_list.getColumn(0, "PRD_ID")=="" || this.ds_list.getColumn(0, "PRD_ID")==null){
        			alert(this.fn_getMessage("ERRC000007", "상품")); // 상품을 먼저 조회해주세요.
        			this.ds_list.setColumn(0, "STOCK_NO", "");
        			return;
        		}
        	};

        	// 사용/미사용 변경 시 저장
        	this.Div00_Combo00_onitemchanged = function(obj,e)
        	{
        		if(this.parent.popMode == "update") this.fn_update();
        	};

        	this.SSP_BO_MF_21_onkeyup = function(obj,e)
        	{
        		//ESC : 닫기기능
        		if(e.keycode == 27){
        			this.close();
        		}
        	};

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_MF_21_onkeyup,this);
            this.Div00.form.btn_popDept.addEventHandler("onclick",this.btn_popBzplc_onclick,this);
            this.Div00.form.btn_popPrd.addEventHandler("onclick",this.btn_popPrd_onclick,this);
            this.Div00.form.edt_stockNo.addEventHandler("onchanged",this.Div00_edt_stockNo_onchanged,this);
            this.btn_delete.addEventHandler("onclick",this.btn_list_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MF_26.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
