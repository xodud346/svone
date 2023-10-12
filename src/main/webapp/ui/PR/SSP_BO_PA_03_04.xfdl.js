(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_03_04");
            this.set_titletext("SSP 부가정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,186);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sspAddInfo", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HASH_TAG\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BG_APLY_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BG_APLY_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_IMG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BG_IMG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static27_00_00","0","154",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_01","0","62",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","0","31",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_brand","0","31","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("브랜드명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_usedecorate("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","0","154","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전시상품구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("SSP 부가정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","-1129","66","110","110",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("image");
            this.addChild(obj.name, obj);

            obj = new Static("sta_hashtag","0","62","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("해시Tag");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_01_00","0","93",null,"62","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00","0","93","130","62",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("배지적용");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dispPrdSprCd","140","155",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_brndNm","140","35",null,"24","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_hashTag","140","66",null,"24","10",null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_bg","140","97","54","54",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_bg","430","98","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_codecolumn("BG_SEQ");
            obj.set_datacolumn("BG_NM");
            obj.set_innerdataset("ds_bgList");
            obj.set_visible("false");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_bgAplyStrDtm","204","126","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","309","126","9","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_bgAplyEndDtm","323","126","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_noLimit","433","126","77","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("제한없음");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bgNm","204","98","191","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bgPopup","399","98","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",640,186,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_bgNm","value","ds_bgList","BG_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_03_04.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_PA_03_04.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES : 2022.03.17 조지훈
        *******************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.fCallBackFn = "";	//콜백
        this.pageMode = "readonly";	//기본
        this.sSvcID = "";
        this.contextRealPath = "";
        this.loaded = false;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//this.sta_brand.uEssentiel = "true";
        	//this.sta_hashtag.uEssentiel = "true";

        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_call = function(){
        	var sSvcId = "sspAddInfo";
        	var sUrl = "/pr/prd-mng/select-ssp-add-info.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_sspAddInfo=sspAddInfo ds_bgList=bgList";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        //조회
        this.fn_regProcCall = function(){
        	var sSvcId = "sspAddInfo";
        	var sUrl = "/pr/prd-add/select-reg-proc-ssp-add-info.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_sspAddInfo=sspAddInfo ds_bgList=bgList";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0 && errorCode != -100){
        		trace(errorMsg);
        	}

        	switch(svcID){
        		case "sspAddInfo":
        // 			this.ds_bgList.insertRow(0);
        // 			this.ds_bgList.setColumn(0, "BG_SEQ", "");
        // 			this.ds_bgList.setColumn(0, "BG_NM", "선택");

        			//this.img_bg.set_image('file://'+this.ds_sspAddInfo.getColumn(0, "BG_IMG"));
        			var ATFL_STOR_PATH = this.ds_sspAddInfo.getColumn(0, "ATFL_STOR_PATH");
        			var ORI_ATFL_NM = this.ds_sspAddInfo.getColumn(0, "ORI_ATFL_NM");
        			var ATFL_NM = this.ds_sspAddInfo.getColumn(0, "ATFL_NM");
        			var newPath = this.fn_imageViewerUrl(ATFL_STOR_PATH, ATFL_NM, ORI_ATFL_NM);
        			this.img_bg.set_image(newPath);

        			var BG_SEQ = this.ds_sspAddInfo.getColumn(0, "BG_SEQ");
        			var BG_NM = this.ds_sspAddInfo.getColumn(0, "BG_NM"); //추가
        			var BRND_NM = this.ds_sspAddInfo.getColumn(0, "BRND_NM");
        			var HASH_TAG = this.ds_sspAddInfo.getColumn(0, "HASH_TAG");
        			var BG_APLY_STR_DTM = this.ds_sspAddInfo.getColumn(0, "BG_APLY_STR_DTM");
        			var BG_APLY_END_DTM = this.ds_sspAddInfo.getColumn(0, "BG_APLY_END_DTM");
        			var DISP_PRD_SPR_CD = this.ds_sspAddInfo.getColumn(0, "DISP_PRD_SPR_CD");

        			this.edt_brndNm.set_value(BRND_NM);
        			this.edt_hashTag.set_value(HASH_TAG);
        			this.cmb_bg.set_value(BG_SEQ);
        			this.edt_bgNm.set_value(BG_NM); //추가
        			if(!this.gfn_isNull(BG_SEQ)){
        				this.cal_bgAplyStrDtm.set_readonly(false);
        				this.chk_noLimit.set_readonly(false);
        				if(String(BG_APLY_END_DTM).substring(0, 8)=='99991231'){
        					this.chk_noLimit.set_value("Y");
        					this.cal_bgAplyEndDtm.set_readonly(true);
        				}else{
        					this.cal_bgAplyEndDtm.set_readonly(false);
        				}
        			}
        			this.cal_bgAplyStrDtm.set_value(BG_APLY_STR_DTM);
        			this.cal_bgAplyEndDtm.set_value(BG_APLY_END_DTM);
        			this.sta_dispPrdSprCd.set_text(DISP_PRD_SPR_CD);

        			this.loaded = true;

        			break;

        	}

        	//부모창 결과리턴
        	if(!this.gfn_isNull(this.fCallBackFn)){
        		this.lookupFunc(this.fCallBackFn).call(this.sSvcID, errorCode, errorMsg, {id:this.sSvcID, status:this.loaded});
        	}

        };

        //팝업콜백
        this.fn_popupCallback = function(svcID, args){
            switch(svcID) {
        		case "btn_bgPopup" :
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);
        				this.edt_bgNm.set_value(jsonData.BG_NM);
        			}

        			this.edt_bgNm_onchanged();

                    break;
            }
        }
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /*
        서비스ID(콜백ID)
        파라미터맵
        콜백펑션,
        페이지타입 옵션 : edit:수정모드, readonly:읽기모드
        */
        this.cfn_read = function(svcID, params, callBackFunction, pageMode){
        	if(this.fn_init(svcID, params, callBackFunction, pageMode)){
        		this.fn_call();
        	}
        }

        //등록처리전용(상품추가메뉴 전용)
        this.cfn_regProcRead = function(svcID, params, callBackFunction, pageMode){
        	if(this.fn_init(svcID, params, callBackFunction, pageMode)){
        		this.fn_regProcCall();
        	}
        }

        //데이터 적합성 체크. 이상없을시 true리턴(저장시 호출필요)
        this.cfn_valiation = function(type) {
        	var result = true;
        	/*if(this.gfn_isNull(type)){
        		type = 'a';
        	}

        	if(this.gfn_isNull(this.edt_brndNm.value)){
        		if(type=='a'){
        			//alert('AM-BO-002 브랜드명을 입력해 주세요');
        			alert(this.gfn_getMessage('ERRP000002'));
        			this.setFocus(true);
        			result = false;
        		}else if(type=='b'){
        			result = false;
        		}
        	}
        	if(result && this.gfn_isNull(this.edt_hashTag.value)){
        		if(type=='a'){
        			//alert('AM-BO-004 상품Tag를 입력해 주세요');
        			alert(this.gfn_getMessage('ERRP000004'));
        			this.setFocus(true);
        			result = false;
        		}else if(type=='b'){
        			result = false;
        		}
        	}*/
        	//필수값 이었으나 필수값 X로 수정

        	return result;
        }

        //사이즈 조절 필요시 호출
        this.cfn_resize = function(width, height){
        	if(!this.gfn_isNull(width)){
        		this.set_width(width);
        	}
        	if(!this.gfn_isNull(height)){
        		this.set_height(height);
        	}
        }

        //필요값 리턴
        this.cfn_getData = function(){
        	var returnObject = {
        		'BRND_NM' : this.edt_brndNm.value,
        		'HASH_TAG' : this.edt_hashTag.value,
        		//'BG_SEQ' : this.cmb_bg.value,
        		'BG_SEQ' : this.ds_sspAddInfo.getColumn(0, "BG_SEQ"),
        		'BG_APLY_STR_DTM' : this.cal_bgAplyStrDtm.value,
        		'BG_APLY_END_DTM' : this.cal_bgAplyEndDtm.value
        	};

        	return returnObject;
        };
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_init = function(svcID, params, callBackFunction, pageMode) {
        	var paramArr = [{id:'coCd', name:'회사코드'}, {id:'prdId', name:'상품ID'}];
        	for(var i = 0; i<paramArr.length; i++){
        		if(this.gfn_isNull(params[paramArr[i]['id']])){
        			alert(this.titletext+' > 필수값 오류 > '+paramArr[i]['name']);
        			return false;
        		}
        	}
        	var coCd = params.coCd;
        	var prdId = params.prdId;
        	this.sSvcID = svcID;
        	this.fCallBackFn = callBackFunction;

        	this.fn_setPageMode(pageMode);

        	this.ds_search.setColumn(0, "CO_CD", coCd);
        	this.ds_search.setColumn(0, "PRD_ID", prdId);

        	return true;
        }

        //페이지 모드 설정(readonly:읽기전용, edit:수정모드)
        this.fn_setPageMode = function(pageMode){
        	var object = this.all;
        	for( var i = 0; i < object.length; i++ ){
        		var stype = object[i].valueOf();
        		if(stype == '[object Edit]' || stype == '[object Combo]'){
        			if(pageMode == 'readonly'){
        				this[object[i].id].set_readonly(true);
        			}else if(pageMode == 'edit'){
        				this[object[i].id].set_readonly(false);
        			}
        		}
        	}
        }

        //날짜 형식 맞추는 함수
        function rpad(str, padLen, padStr) {
            if (padStr.length > padLen) {
                console.log("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
                return str + "";
            }
            str += ""; // 문자로
            padStr += ""; // 문자로
            while (str.length < padLen)
                str += padStr;
            str = str.length >= padLen ? str.substring(0, padLen) : str;
            return str;
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //배지선택 combo
        this.cmb_bg_onitemchanged = function(obj,e)
        {
        	//var imgPath = this.ds_bgList.getColumn(e.postindex, "BG_IMG");
        	var ATFL_STOR_PATH = this.ds_bgList.getColumn(e.postindex, "ATFL_STOR_PATH");
        	var ORI_ATFL_NM = this.ds_bgList.getColumn(e.postindex, "ORI_ATFL_NM");
        	var ATFL_NM = this.ds_bgList.getColumn(e.postindex, "ATFL_NM");
        	var newPath = this.fn_imageViewerUrl(ATFL_STOR_PATH, ATFL_NM, ORI_ATFL_NM);
        	this.img_bg.set_image(newPath);

        	if(this.gfn_isNull(e.postvalue)){
        		this.cal_bgAplyEndDtm.set_readonly(true);
        		this.cal_bgAplyStrDtm.set_readonly(true);
        		this.chk_noLimit.set_readonly(true);
        	}else{
        		this.cal_bgAplyEndDtm.set_readonly(false);
        		this.cal_bgAplyStrDtm.set_readonly(false);
        		this.chk_noLimit.set_readonly(false);
        	}

        	var objDate = new Date();
        	var sToday = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');
        	var cmb = this.cmb_bg.value;

        	if(!this.gfn_isNull(cmb)){
        		this.cal_bgAplyStrDtm.set_value(sToday);
        	} else{
        		this.cal_bgAplyStrDtm.set_value("");
        		this.cal_bgAplyEndDtm.set_value("");
        	}
        };

        //시작일 컨트롤
        this.cal_bgAplyStrDtm_canchange = function(obj,e)
        {
        	var today = new nexacro.Date(); today = String(today).substring(0, 8);
        	var startDay = e.postvalue;
        	//var endDay = this.cal_bgAplyEndDtm.value;                       //cal value
        	var endDay2 = this.ds_sspAddInfo.getColumn(0, "BG_APLY_END_DTM"); //ds value
        	if(today > startDay){
        		alert('과거일자는 선택 불가합니다.');
        		return false;
        	}
        	if(typeof endDay2 != 'undefined' && startDay > endDay2){
        		alert('시작일이 종료일보다 클수 없습니다.');
        		return false;
        	}

        	this.ds_sspAddInfo.setColumn(0, "BG_APLY_STR_DTM", rpad(startDay, 17, 0));
        };

        //종료일 컨트롤
        this.cal_bgAplyEndDtm_canchange = function(obj,e)
        {
        	var today = new nexacro.Date(); today = String(today).substring(0, 8);
        	//var startDay = this.cal_bgAplyStrDtm.value;                       //cal value
        	var startDay2 = this.ds_sspAddInfo.getColumn(0, "BG_APLY_STR_DTM"); //ds value
        	var endDay = e.postvalue;
        	if(today > endDay){
        		alert('과거일자는 선택 불가합니다.');
        		return false;
        	}
        	if(typeof startDay2 != 'undefined' && startDay2 > endDay){
        		alert('종료일이 시작일보다 작을수 없습니다.');
        		return false;
        	}
        	this.ds_sspAddInfo.setColumn(0, "BG_APLY_END_DTM", rpad(endDay, 17, 0));
        };

        //제한없음 컨트롤
        this.chk_noLimit_canchange = function(obj,e)
        {
        	var startDay = this.cal_bgAplyStrDtm.value;
        	var endDay = this.cal_bgAplyEndDtm.value;
        	var objDate = new Date();
        	var sToday = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');

        	if(e.postvalue){
        		this.cal_bgAplyEndDtm.set_readonly(true);
        		this.cal_bgAplyStrDtm.set_value(sToday);
        		this.cal_bgAplyEndDtm.set_value('99991231235959');
        		this.ds_sspAddInfo.setColumn(0, "BG_APLY_STR_DTM", rpad(sToday, 17, 0));
        		this.ds_sspAddInfo.setColumn(0, "BG_APLY_END_DTM", rpad(99991231235959, 17, 0));
        	}else{
        		this.cal_bgAplyStrDtm.set_readonly(false);
        		this.cal_bgAplyEndDtm.set_readonly(false);
        		this.cal_bgAplyEndDtm.set_value('');
        		this.ds_sspAddInfo.setColumn(0, "BG_APLY_END_DTM", rpad(99991231235959, 17, 0));
        	}
        };

        //배지 선택 popup
        this.div_btn_bgPopup_onclick = function(obj,e)
        {
        	var params = {
        		  coCd : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        		, bgNm : this.edt_bgNm.value
        	};
            var options = {title:'배지 조회'};

            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PA_51.xfdl", params,  "fn_popupCallback", options);
        };

        //배지 선택 시
        this.edt_bgNm_onchanged = function(obj,e)
        {
        	var bg = this.edt_bgNm.value;
        	var rowNm = this.ds_bgList.findRow("BG_NM", bg, 1, -1);

        	var BG_SEQ = this.ds_bgList.getColumn(rowNm, "BG_SEQ");
        	var BG_NM = this.ds_bgList.getColumn(rowNm, "BG_NM");
        	var ATFL_STOR_PATH = this.ds_bgList.getColumn(rowNm, "ATFL_STOR_PATH");
        	var ORI_ATFL_NM = this.ds_bgList.getColumn(rowNm, "ORI_ATFL_NM");
        	var ATFL_NM = this.ds_bgList.getColumn(rowNm, "ATFL_NM");
        	var BG_IMG = this.ds_bgList.getColumn(rowNm, "BG_IMG", BG_IMG);
        	var newPath = this.fn_imageViewerUrl(ATFL_STOR_PATH, ATFL_NM, ORI_ATFL_NM);

        	this.ds_sspAddInfo.setColumn(0, "BG_SEQ", BG_SEQ);
        	this.ds_sspAddInfo.setColumn(0, "BG_NM", BG_NM);
        	this.ds_sspAddInfo.setColumn(0, "ATFL_STOR_PATH", ATFL_STOR_PATH);
        	this.ds_sspAddInfo.setColumn(0, "ORI_ATFL_NM", ORI_ATFL_NM);
        	this.ds_sspAddInfo.setColumn(0, "ATFL_NM", ATFL_NM);
        	this.ds_sspAddInfo.setColumn(0, "BG_IMG", BG_IMG);
        	this.img_bg.set_image(newPath);

        	//수정가능 여부
        	if(this.gfn_isNull(bg)){
        		this.cal_bgAplyEndDtm.set_readonly(true);
        		this.cal_bgAplyStrDtm.set_readonly(true);
        		this.chk_noLimit.set_readonly(true);
        	}else{
        		this.cal_bgAplyEndDtm.set_readonly(false);
        		this.cal_bgAplyStrDtm.set_readonly(false);
        		this.chk_noLimit.set_readonly(false);
        	}

        	//날짜 설정
        	var objDate = new Date();
        	var sToday = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');

        	if(!this.gfn_isNull(bg)){
        		this.cal_bgAplyStrDtm.set_value(sToday);
        		this.cal_bgAplyEndDtm.set_value("");
        		this.ds_sspAddInfo.setColumn(0, "BG_APLY_STR_DTM", rpad(sToday, 17, 0));
        		this.ds_sspAddInfo.setColumn(0, "BG_APLY_END_DTM", rpad(99991231235959, 17, 0));
        	} else{
        		this.cal_bgAplyStrDtm.set_value("");
        		this.cal_bgAplyEndDtm.set_value("");
        		this.ds_sspAddInfo.setColumn(0, "BG_APLY_STR_DTM", "");
        		this.ds_sspAddInfo.setColumn(0, "BG_APLY_END_DTM", rpad(99991231235959, 17, 0));
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.sta_dispPrdSprCd.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.cmb_bg.addEventHandler("onitemchanged",this.cmb_bg_onitemchanged,this);
            this.cal_bgAplyStrDtm.addEventHandler("canchange",this.cal_bgAplyStrDtm_canchange,this);
            this.cal_bgAplyEndDtm.addEventHandler("canchange",this.cal_bgAplyEndDtm_canchange,this);
            this.chk_noLimit.addEventHandler("canchange",this.chk_noLimit_canchange,this);
            this.edt_bgNm.addEventHandler("onchanged",this.edt_bgNm_onchanged,this);
            this.btn_bgPopup.addEventHandler("onclick",this.div_btn_bgPopup_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_03_04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
