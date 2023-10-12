(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_03_09");
            this.set_titletext("상품고시정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1296,405);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ASIS_NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOBE_NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_notice", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_noticeDetail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_DTL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_DTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NOTI_ITM_MAPP_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DataSetRowType2\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_noticeDetailReturn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_DTL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_DTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NOTI_ITM_MAPP_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DataSetRowType2\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static21_00","0","46",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00","0","46","250","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("품목");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","21","150","16",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("상품정보제공 고시 품목");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","0","98","150","16",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("상품정보제공 고시 상세");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_prdNoti","0","124",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_noticeDetail");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_scrollbartype("none fixed");
            obj.set_nodatatext("품목 또는 카테고리를 선택하세요");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"450\"/><Column size=\"827\"/></Columns><Rows><Row size=\"31\"/></Rows><Band id=\"body\"><Cell text=\"bind:NOTI_ITM_DTL_NM\" cssclass=\"sta_cm_box01L_tdt_necessary\" textAlign=\"left\" background=\"#ebebee\" padding=\"0px 0px 0px 10px\"/><Cell col=\"1\" text=\"bind:PRD_NOTI_ITM_MAPP_CTS\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_notiItmNm","330","50","216","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_notiPopup","550","50","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_notiItmId","260","50","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1296,405,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_PA_03_09.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES : 2022.03.17 조지훈
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.fCallBackFn = "";	//콜백
        this.pageMode = "edit";	//기본edit모드
        this.sSvcID = "";
        this.contextRealPath = "";
        this.coCd = "";
        this.notiItmId = "";
        this.loaded = false; //로딩여부
        this.isResize = false;

        this.searchNotiItmCount = 0;
        this.searchNotiItmNm = "";

        this.originalNotiItmId = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        };

        this.fn_onkeyup = function(obj,e){
        	var objType = obj.getFocus();

        	if( e.keycode == 13 && objType == "[object Edit]"){
        		var value = e.fromobject.value;
        		if(this.gfn_lengthByte(this.gfn_allTrim(value)) > 0){
        			if( e.fromobject.id == "edt_notiItmId") {
        				this.ds_search.setColumn(0, "NOTI_ITM_ID", value);
        				this.fn_popupSearch("edt_notiItmId", "/pr/prd-popup/select-product-notice-popup-list.do");
        			}
        		}
        	}
        }
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_call = function(){
        	var sSvcId = "call";
        	var sUrl = "/pr/prd-mng/select-product-notice-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_noticeDetail=noticeList";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        //조회
        this.fn_regProcCall = function(){
        	var sSvcId = "call";
        	var sUrl = "/pr/prd-add/select-reg-proc-product-notice-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_noticeDetail=noticeList";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        //폼 엔터처리용
        this.fn_popupSearch = function (svcId, url){
        	var sSvcId = svcId;
        	var sUrl = url;
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function(){
        	var sSvcId = "save";
        	var sUrl = "/pr/prd-mng/update-ssp-product-noti-info.do";
        	var inDs = "ds_search=ds_search ds_noticeDetail=ds_noticeDetail:U";
        	var outDs = "";
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
        		case "call":
        			var delArr = this.ds_noticeDetail.extractRowsNF("DEL_YN=='Y'");
        			this.ds_noticeDetail.deleteMultiRows(delArr);

        			if(this.ds_noticeDetail.rowcount>0){
        				this.edt_notiItmId.set_value(this.ds_noticeDetail.getColumn(0, "NOTI_ITM_ID"));
        				this.edt_notiItmNm.set_value(this.ds_noticeDetail.getColumn(0, "NOTI_ITM_NM"));
        			}else{
        				this.edt_notiItmId.set_value('');
        				this.edt_notiItmNm.set_value('');
        			}

        			if(!this.loaded){
        				this.originalNotiItmId = this.ds_noticeDetail.getColumn(0, "NOTI_ITM_ID");
        			}
        			this.loaded = true;

        			if(this.isResize){
        				//부모 사이즈 변경호출
        				var grdSize = this.grd_prdNoti.getRealRowFullSize()+126;
        				if(grdSize<200){
        					grdSize = 200;
        				}
        				this.lookupFunc(this.fCallBackFn).call('tab_resize', 0, '', {'height':grdSize});
        			}

        			break;

        		case "edt_notiItmId" :
        			if(this.searchNotiItmCount>0){
                        this.edt_notiItmNm.set_value(this.searchNotiItmNm);
        				this.fn_call();
                    }else{
                        var params = {
        					'notiItmId':this.edt_notiItmId.value,
        					'coCd':this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
        				};
                        this.gfn_openPopup('btn_notiPopup', "PR_POP::SSP_BO_PA_47.xfdl", params,  "fn_popupCallback", {});
                    }
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
        		case "btn_notiPopup" :
        			var jsonData = JSON.parse(args);
        			this.ds_search.setColumn(0, "CO_CD", jsonData.CO_CD);
        			this.ds_search.setColumn(0, "NOTI_ITM_ID", jsonData.NOTI_ITM_ID);
        			this.fn_call();

        			//this.fn_callParentNotiItmId(jsonData.NOTI_ITM_ID);

                    break;

            }
        }
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /*
        서비스ID(콜백ID)
        파라미터맵,
        콜백펑션,
        페이지타입 옵션 : edit:수정모드, readonly:읽기모드
        */
        this.cfn_read = function(svcID, params, callBackFunction, pageMode, isResize){
        	this.isResize = isResize;
        	if(isResize && !this.gfn_isNull(this.fCallBackFn)){
        		//부모 사이즈 변경호출
        		var grdSize = this.grd_prdNoti.getRealRowFullSize()+126;
        		if(grdSize<200){
        			grdSize = 200;
        		}
        		this.lookupFunc(this.fCallBackFn).call('tab_resize', 0, '', {'height':grdSize});
        	}
        	if(this.fn_reloadCheck(params)){
        		if(this.fn_init(svcID, params, callBackFunction, pageMode)){
        			this.fn_call();
        		}
        	}
        }

        //등록처리전용(상품추가메뉴 전용)
        this.cfn_regProcRead = function(svcID, params, callBackFunction, pageMode, isResize){
        	if(this.fn_reloadCheck(params)){
        		if(this.fn_init(svcID, params, callBackFunction, pageMode, isResize)){
        			this.fn_regProcCall();
        		}
        	}
        }

        //데이터 적합성 체크. 이상없을시 true리턴(저장시 호출필요)
        this.cfn_valiation = function(type) {
        	var result = true;
        	if(this.gfn_isNull(type)){
        		type = 'a';
        	}

        	if(this.ds_noticeDetail.rowcount<1){
        		result = false;
        	}

        	if(result){
        		for(var i=0; i<this.ds_noticeDetail.rowcount; i++){
        			var CTS = this.ds_noticeDetail.getColumn(i, "PRD_NOTI_ITM_MAPP_CTS");
        			if(this.gfn_isNull(CTS)){
        				if(type=='a'){
        					alert('고시상세값을 입력해 주세요');
        					this.setFocus();
        					result = false;
        					break;
        				}else if(type=='b'){
        					result = false;
        				}
        			}
        		}
        	}

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
        		'NOTI_ITM_ID' : this.ds_noticeDetail.getColumn(0, "NOTI_ITM_ID"),
        		'ASIS_NOTI_ITM_ID' : this.originalNotiItmId,
        		'TOBE_NOTI_ITM_ID' : this.ds_noticeDetail.getColumn(0, "NOTI_ITM_ID")
        	};

        	return returnObject;
        };

        //변경사유 세팅(부모창에서 데이터셋 복사시 변경프래그 반영안됨)
        this.cfn_setData = function() {
        	this.fn_setData();
        }

        //저장	단독으로 저장버튼이 있을경우에만 쓰이므로 사용안함
        this.cfn_save = function() {
        	this.fn_setData();

        	if(this.fn_dataCheck(this.ds_noticeDetail)){	//데이터 변경이 있을경우에만 저장
        		this.fn_save();
        	}
        }
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
        	var notiItmId = params.notiItmId;

        	this.coCd = coCd;
        	this.sSvcID = svcID;
        	this.notiItmId = notiItmId;
        	this.fCallBackFn = callBackFunction;

        	this.fn_setPageMode(pageMode);	//페이지모드 설정

        	this.ds_search.setColumn(0, "CO_CD", coCd);
        	this.ds_search.setColumn(0, "PRD_ID", prdId);
        	if(!this.gfn_isNull(this.notiItmId)){
        		this.ds_search.setColumn(0, "NOTI_ITM_ID", notiItmId);
        	}

        	return true;

        };

        this.fn_callParentNotiItmId = function(notiItmId){
        	if(!this.gfn_isNull(this.fCallBackFn)){
        		//부모창에 고시품목 전달
        		var param = {
        			'NOTI_ITM_ID' : notiItmId
        		};
        		this.lookupFunc(this.fCallBackFn).call("sspCategorySelect", 0, '', param);
        	}
        }

        //페이지 모드 설정(readonly:읽기전용, edit:수정모드)
        this.fn_setPageMode = function(pageMode){
        	if(pageMode == 'readonly'){
        		this.grd_prdNoti.set_readonly(true);
        		this.btn_notiPopup.set_enable(false);
        	}else if(pageMode == 'edit'){
        		this.grd_prdNoti.set_readonly(false);
        		this.btn_notiPopup.set_enable(true);
        		this.edt_notiItmId.set_readonly(false);
        	}
        }

        //재조회체크
        this.fn_reloadCheck = function(params) {
        	//고시품목 변경이 없을경우엔 재조회 막기
        	if(this.notiItmId == params.notiItmId && this.loaded){
        		return false;
        	}else{
        		return true;
        	}
        };

        this.fn_setData = function(){
        	this.ds_search.setColumn(0, "ASIS_NOTI_ITM_ID", this.originalNotiItmId);	//변경전 고시품목
        	this.ds_search.setColumn(0, "TOBE_NOTI_ITM_ID", this.ds_noticeDetail.getColumn(0, "NOTI_ITM_ID"));	//변경후 고시품목

        	this.ds_noticeDetailReturn.clearData();
        	this.ds_noticeDetailReturn.copyData(this.ds_noticeDetail, true);

        	var j = 0;
        	var rowcnt = this.ds_noticeDetail.getRowCount() + this.ds_noticeDetail.getDeletedRowCount();
        	for(var i=0; i<rowcnt; i++){
        		if(i<this.ds_noticeDetail.getRowCount()){
        			var rowType = this.ds_noticeDetail.getRowType(i);
        			var newtype = rowType==1?0:rowType==2?1:rowType==4?2:rowType==8?3:0;
        			this.ds_noticeDetailReturn.setColumn(i, "DataSetRowType2", newtype);

        		}else{
        			//삭제건 존재시 세팅
        			var cocd = this.ds_noticeDetail.getDeletedColumn(j, "CO_CD");
        			var notino = this.ds_noticeDetail.getDeletedColumn(j, "NOTI_ITM_ID");
        			var prdid = this.ds_noticeDetail.getDeletedColumn(j, "PRD_ID");
        			var dtlno = this.ds_noticeDetail.getDeletedColumn(j, "NOTI_ITM_DTL_NO");

        			this.ds_noticeDetailReturn.insertRow(i);
        			this.ds_noticeDetailReturn.setColumn(i, "CO_CD", cocd);
        			this.ds_noticeDetailReturn.setColumn(i, "NOTI_ITM_ID", notino);
        			this.ds_noticeDetailReturn.setColumn(i, "PRD_ID", prdid);
        			this.ds_noticeDetailReturn.setColumn(i, "NOTI_ITM_DTL_NO", dtlno);
        			this.ds_noticeDetailReturn.setColumn(i, "DataSetRowType2", 3);
        			j = j+1;
        		}
        	}
        }

        this.fn_dataCheck = function(dataset) {
        	for(var i=0; i < dataset.rowcount; i++){
        		var sRowType = dataset.getRowType(i);
        		if( sRowType == 2 || sRowType == 4 ){
        			return true;
        		}
        	}
        	if(dataset.getDeletedRowCount() > 0){
        		return true;
        	}
        	return false;
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //고시품목 팝업
        this.btn_notiPopup_onclick = function(obj,e)
        {
        	var params = {coCd : this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PA_47.xfdl", params,  "fn_popupCallback", options);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_notiPopup.addEventHandler("onclick",this.btn_notiPopup_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_03_09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
